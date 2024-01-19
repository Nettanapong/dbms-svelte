import type { Coffee } from '$lib/types';

let cartProduct = $state<Coffee>();

function addToCart(
  id: string,
  name: string,
  stock: number,
  type: string,
  maxOrder: number,
  price: number,
) {
  const productExist = cartProduct;
  if (productExist?.id === id) {
    productExist.maxOrder = productExist.maxOrder + maxOrder;
    if (productExist.maxOrder + maxOrder > stock) {
      productExist.maxOrder = stock;
    } else {
      productExist.maxOrder = productExist.maxOrder + maxOrder;
    }
  } else {
    cartProduct = {
      id: id,
      name: name,
      stock: stock,
      type: type,
      maxOrder: maxOrder,
      price: price,
    };
  }
}

function removeFromCart() {
  cartProduct = { id: '', name: '', stock: 0, type: '', maxOrder: 0, price: 0 };
}

export default function useCart() {
  return {
    get cartProduct() {
      return cartProduct;
    },
    addToCart,
    removeFromCart,
  };
}
