import type { Coffee } from '$lib/types';

let coffee = $state<Coffee>();

export default function useCart() {
  return {
    get coffee() {
      return coffee;
    },
    set coffee(v: typeof coffee) {
      coffee = v;
    },
  };
}
