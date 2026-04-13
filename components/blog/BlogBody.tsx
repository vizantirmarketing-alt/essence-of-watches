type BodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'section'; title: string; paragraphs: string[] };

function parseBlogBody(body: string): BodyBlock[] {
  const trimmed = body.trim();
  const blocks: BodyBlock[] = [];

  if (!/(^|\n)## /.test(trimmed)) {
    trimmed
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean)
      .forEach((text) => blocks.push({ type: 'paragraph', text }));
    return blocks;
  }

  const parts = trimmed.split(/(?=^## )/m);
  for (const part of parts) {
    const t = part.trim();
    if (!t) continue;
    if (t.startsWith('## ')) {
      const rest = t.slice(3);
      const nl = rest.indexOf('\n');
      const title = (nl === -1 ? rest : rest.slice(0, nl)).trim();
      const content = nl === -1 ? '' : rest.slice(nl + 1).trim();
      const paragraphs = content
        ? content
            .split(/\n\n+/)
            .map((p) => p.trim())
            .filter(Boolean)
        : [];
      blocks.push({ type: 'section', title, paragraphs });
    } else {
      t.split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean)
        .forEach((text) => blocks.push({ type: 'paragraph', text }));
    }
  }

  return blocks;
}

const paragraphClass =
  'text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-5 last:mb-0';

export function BlogBody({ body }: { body: string }) {
  const blocks = parseBlogBody(body);

  return (
    <div className="max-w-3xl">
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i} className={paragraphClass}>
              {block.text}
            </p>
          );
        }

        const showSectionRule = i > 0;
        return (
          <div
            key={i}
            className={
              showSectionRule
                ? 'mt-12 sm:mt-14 pt-10 sm:pt-12 border-t border-[var(--border)] dark:border-[#262626]'
                : 'mt-2'
            }
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-5 tracking-tight">
              {block.title}
            </h2>
            {block.paragraphs.map((p, j) => (
              <p key={j} className={paragraphClass}>
                {p}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
