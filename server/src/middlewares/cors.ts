import type { Middleware } from "@oakserver/oak";

export default function cors(): Middleware {
  return (ctx, next) => {
    ctx.response.headers.set("Access-Control-Allow-Origin", "*");
    return next();
  };
}
