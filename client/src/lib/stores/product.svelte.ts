import type { Coffee } from '$lib/types';

let cartProduct = $state<Coffee>();

export default function useCart() {
  return {
    get cartProduct() {
      return cartProduct;
    },
    set cartProduct(v: typeof cartProduct) {
      cartProduct = v;
    },
  };
}
