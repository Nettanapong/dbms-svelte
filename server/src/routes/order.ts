import z from "zod";
import consola from "consola";
import { Router, Status } from "@oakserver/oak";
import { OrderStatus, PrismaClient } from "@prisma/client";
import { ORDER_SELECT } from "../models/order";

const router = new Router();
const prisma = new PrismaClient({
  errorFormat: "minimal",
});

// TODO: Implement Thai Village Database
router.get("/order", async (ctx) => {
  const result = await prisma.order.findMany({
    select: ORDER_SELECT,
    orderBy: [{ createdAt: "desc" }],
  });

  if (result) {
    ctx.response.status = 200;
    ctx.response.body = result;
  }
});

router.get("/order/:id", async (ctx) => {
  const schema = z.object({ id: z.string().length(12) });
  const validate = await schema.safeParseAsync({ id: ctx.params.id });

  if (!validate.success) return ctx.throw(Status.UnprocessableEntity, "Invalid Body");

  const found = await prisma.order.findUnique({ select: ORDER_SELECT, where: validate.data });

  if (found) {
    ctx.response.status = 200;
    ctx.response.body = found;
  }
});

router.post("/order", async (ctx) => {
  const schema = z.object({
    name: z.string(),
    address: z.string(),
    qty: z.number().gt(0),
    coffeeId: z.string().length(12),
  });
  const validate = await schema.safeParseAsync(await ctx.request.body().value);

  if (!validate.success) return ctx.throw(Status.UnprocessableEntity, "Invalid Body");

  // prevent racing condition - do transaction
  await prisma.$transaction(async (tx) => {
    const coffee = await tx.coffee.update({
      data: {
        stock: { decrement: validate.data.qty },
      },
      where: { id: validate.data.coffeeId },
    });

    if (coffee.stock < 0) return ctx.throw(Status.NotAcceptable, "Not Enough Quatity");

    await tx.order.create({
      data: { ...validate.data, status: OrderStatus.PENDING },
    });
  });

  consola.success("Order Success");
  ctx.response.status = 204;
});

router.patch("/order/:id", async (ctx) => {
  const schema = z.object({
    id: z.string().length(12),
    address: z.string(),
    status: z.nativeEnum(OrderStatus),
  });
  const validate = await schema.safeParseAsync(await ctx.request.body().value);

  if (!validate.success) return ctx.throw(Status.UnprocessableEntity, "Invalid Body");

  const { id, ...data } = validate.data;

  const updated = await prisma.order.updateMany({ data, where: { id } });

  if (!updated.count) ctx.throw(Status.NotFound);

  consola.success("Update Success");
  ctx.response.status = 204;
});

router.delete("/order/:id", async (ctx) => {
  const schema = z.object({ id: z.string().length(12) });
  const validate = await schema.safeParseAsync({ id: ctx.params.id });

  if (!validate.success) return ctx.throw(Status.UnprocessableEntity, "Invalid Body");

  const deleted = await prisma.order.deleteMany({ where: validate.data });

  if (!deleted.count) ctx.throw(Status.NotFound);

  consola.success("Delete Success");
  ctx.response.status = 204;
});

export default router;
