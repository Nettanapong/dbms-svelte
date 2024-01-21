export interface Coffee {
  id: string;
  name: string;
  stock: number;
  type: string;
  maxOrder: number;
  roastedLevel: number;
  price: number;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DONE = 'DONE',
}
export interface Order {
  id: string;
  name: string;
  address: string;
  status: OrderStatus;
  qty: number;
  coffee: Coffee;
}
