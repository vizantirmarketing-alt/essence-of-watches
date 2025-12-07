import { client } from './client';
import { allWatchesQuery, singleWatchQuery, featuredWatchesQuery } from './queries';

export async function getAllWatches() {
  return client.fetch(allWatchesQuery);
}

export async function getWatch(slug: string) {
  return client.fetch(singleWatchQuery, { slug });
}

export async function getWatchBySlug(slug: string) {
  return client.fetch(singleWatchQuery, { slug });
}

export async function getFeaturedWatches() {
  return client.fetch(featuredWatchesQuery);
}


