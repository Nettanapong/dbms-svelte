import type { Prisma } from "@prisma/client";
import { TIMESTAMP_SELECT } from "./timestamp";
import { BASE_COFFEE_SELECT } from "./coffee";

export const BASE_ORDER_SELECT = {
  id: true,
  name: true,
  stock: true,
  type: true,
} satisfies Prisma.OrderSelect;

export const ORDER_SELECT = {
  ...BASE_ORDER_SELECT,
  ...TIMESTAMP_SELECT,
  coffee: { select: BASE_COFFEE_SELECT },
} satisfies Prisma.OrderSelect;
