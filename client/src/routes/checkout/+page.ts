import type { PageLoad } from './$types';

export const load = (async () => {
  return {
    province: (await fetch('http://localhost:3000/province').then((r) => r.json())) as {
      name: string;
      id: string;
    }[],
  };
}) satisfies PageLoad;
