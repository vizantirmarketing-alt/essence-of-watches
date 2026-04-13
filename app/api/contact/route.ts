import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const INQUIRY_TYPES = ['contact', 'appointment', 'sell', 'source', 'newsletter'] as const;
type InquiryType = (typeof INQUIRY_TYPES)[number];

function isInquiryType(t: unknown): t is InquiryType {
  return typeof t === 'string' && INQUIRY_TYPES.includes(t as InquiryType);
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function buildBody(type: InquiryType, payload: Record<string, unknown>): { text: string; html: string } {
  const lines: string[] = [
    `Inquiry type: ${type.toUpperCase()}`,
    '────────────────────────────────────────',
    '',
  ];

  const entries = Object.entries(payload).filter(([k]) => k !== 'type' && k !== 'photos');

  for (const [key, value] of entries) {
    if (value === undefined || value === null) continue;
    const label = formatLabel(key);
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      const str = String(value).trim() || '(not provided)';
      lines.push(`${label}: ${str}`);
    }
  }

  const photos = payload.photos;
  if (Array.isArray(photos) && photos.length > 0) {
    lines.push('');
    lines.push('Uploaded photos (metadata only — files are not attached):');
    photos.forEach((p, i) => {
      if (p && typeof p === 'object' && 'name' in p) {
        const row = p as { name?: string; size?: number; type?: string };
        lines.push(`  ${i + 1}. ${row.name ?? 'unknown'} (${row.size ?? 0} bytes, ${row.type ?? 'n/a'})`);
      } else {
        lines.push(`  ${i + 1}. ${JSON.stringify(p)}`);
      }
    });
  }

  const text = lines.join('\n');

  const htmlRows = entries
    .map(([key, value]) => {
      if (value === undefined || value === null) return '';
      const label = formatLabel(key);
      const str =
        typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
          ? String(value).trim() || '(not provided)'
          : '';
      if (!str) return '';
      return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0;vertical-align:top">${escapeHtml(str)}</td></tr>`;
    })
    .join('');

  let photosHtml = '';
  if (Array.isArray(photos) && photos.length > 0) {
    const items = photos
      .map((p, i) => {
        if (p && typeof p === 'object' && 'name' in p) {
          const row = p as { name?: string; size?: number; type?: string };
          return `<li>${escapeHtml(String(row.name ?? 'unknown'))} — ${row.size ?? 0} bytes, ${escapeHtml(String(row.type ?? 'n/a'))}</li>`;
        }
        return `<li>${escapeHtml(JSON.stringify(p))}</li>`;
      })
      .join('');
    photosHtml = `<p style="margin-top:16px;font-weight:600">Uploaded photos (metadata only)</p><ul style="margin:0;padding-left:20px">${items}</ul>`;
  }

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;color:#111">
      <p style="font-size:16px;font-weight:700;margin:0 0 8px">Inquiry: <span style="text-transform:uppercase">${escapeHtml(type)}</span></p>
      <hr style="border:none;border-top:1px solid #ccc;margin:0 0 16px" />
      <table style="border-collapse:collapse;width:100%;max-width:560px">${htmlRows}</table>
      ${photosHtml}
    </div>
  `.trim();

  return { text, html };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function subjectFor(type: InquiryType, payload: Record<string, unknown>): string {
  const site = 'Essence of Watches';
  if (type === 'contact') {
    const who = [payload.firstName, payload.lastName].filter(Boolean).join(' ').trim() || 'Contact';
    return `[${site}] Contact — ${who}`;
  }
  if (type === 'appointment') {
    const who = [payload.firstName, payload.lastName].filter(Boolean).join(' ').trim() || 'Appointment';
    return `[${site}] Appointment — ${who}`;
  }
  if (type === 'sell') {
    const who = String(payload.fullName || 'Sell inquiry').trim();
    return `[${site}] Sell your watch — ${who}`;
  }
  if (type === 'source') {
    const who = String(payload.fullName || 'Source request').trim();
    return `[${site}] Source a watch — ${who}`;
  }
  const em = String(payload.email || 'Newsletter').trim();
  return `[${site}] Newsletter — ${em}`;
}

function replyToFor(type: InquiryType, payload: Record<string, unknown>): string | undefined {
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  if (!email || !email.includes('@')) return undefined;
  if (type === 'contact' || type === 'appointment') {
    const first = typeof payload.firstName === 'string' ? payload.firstName : '';
    const last = typeof payload.lastName === 'string' ? payload.lastName : '';
    const name = `${first} ${last}`.trim();
    return name ? `${name} <${email}>` : email;
  }
  if (type === 'newsletter') {
    return email;
  }
  const name = typeof payload.fullName === 'string' ? payload.fullName.trim() : '';
  return name ? `${name} <${email}>` : email;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    'Essence of Watches <onboarding@resend.dev>';

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: 'Email is not configured on the server (RESEND_API_KEY and CONTACT_EMAIL required).' },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const type = body.type;
  if (!isInquiryType(type)) {
    return NextResponse.json(
      { error: 'Invalid or missing "type". Expected contact, appointment, sell, source, or newsletter.' },
      { status: 400 },
    );
  }

  if (type === 'newsletter') {
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'A valid email is required for newsletter signup.' },
        { status: 400 },
      );
    }
  }

  const resend = new Resend(apiKey);
  const { text, html } = buildBody(type, body);
  const replyTo = replyToFor(type, body);

  const { data, error } = await resend.emails.send({
    from,
    to,
    ...(replyTo ? { replyTo } : {}),
    subject: subjectFor(type, body),
    text,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
