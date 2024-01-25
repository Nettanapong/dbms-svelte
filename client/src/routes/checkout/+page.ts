import type { PageLoad } from './$types';
import type { Province } from '$lib/types';

export const load = (async ({ fetch }) => {
  return {
    province: (await fetch('http://localhost:3000/province').then((r) => r.json())) as Province[],
  };
}) satisfies PageLoad;
