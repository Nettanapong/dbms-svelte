import type { Coffee } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async () => {
  return {
    coffee: (await fetch('http://localhost:3000/coffee').then((r) => r.json())) as Coffee[],
  };
}) satisfies PageLoad;
