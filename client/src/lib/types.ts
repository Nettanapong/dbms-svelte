export interface Coffee {
  id: string;
  name: string;
  stock: number;
  type: string;
  maxOrder: number;
  roastedLevel: number;
  price: number;
}

export interface Order {
  id: string;
  name: string;
  address: string;
  status: 'PENDING' | 'ACCEPTED' | 'DONE';
  qty: number;
  coffee: Coffee;
}
