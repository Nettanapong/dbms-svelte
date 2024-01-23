import { type Coffee, OrderStatus, type Order } from '$lib/types';

let coffee = $state<Coffee>({
  id: '',
  name: '',
  stock: 0,
  type: '',
  maxOrder: 0,
  roastedLevel: 0,
  price: 0,
});

let order = $state<Order>({
  id: '',
  name: '',
  address: '',
  status: OrderStatus.PENDING,
  qty: 0,
  coffee: coffee,
});

function removeFromCart() {
  order = {
    id: '',
    name: '',
    address: '',
    status: OrderStatus.PENDING,
    qty: 0,
    coffee: {
      id: '',
      name: '',
      stock: 0,
      type: '',
      maxOrder: 0,
      roastedLevel: 0,
      price: 0,
    },
  };

  // name, address, qty, coffeeId
}

export default function useCart() {
  return {
    get coffee() {
      return coffee;
    },
    set coffee(v: typeof coffee) {
      coffee = v;
    },
    get order() {
      return order;
    },
    set order(v: typeof order) {
      order = v;
    },
    removeFromCart,
  };
}
