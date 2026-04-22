// Simplified: use direct client fetch instead of live content API.
// Live editing can be re-enabled inside Sanity Studio routes only if needed.
import { client } from './client';

type FetchParams = {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
  revalidate?: number | false;
};

export async function sanityFetch<T = unknown>({
  query,
  params = {},
  tags,
  revalidate = 60,
}: FetchParams): Promise<{ data: T }> {
  const data = await client.fetch<T>(query, params, {
    next: {
      revalidate: revalidate === false ? undefined : revalidate,
      tags,
    },
  });
  return { data };
}
