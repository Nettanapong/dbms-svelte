import type { Order } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  return {
    order: (await fetch('http://localhost:3000/order').then((r) => r.json())) as Order[],
  };
}) satisfies PageLoad;
