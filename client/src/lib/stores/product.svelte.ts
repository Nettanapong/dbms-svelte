import { type Coffee, OrderStatus, type Order } from '$lib/types';

const ORDER_DEFAULT: Partial<Order> = {
  status: OrderStatus.PENDING,
  qty: 0,
};

let order = $state(ORDER_DEFAULT);

function reset() {
  order = ORDER_DEFAULT;
}

export default function useCart() {
  return {
    get order() {
      return order;
    },
    set order(v: typeof order) {
      order = v;
    },
    reset,
  };
}
