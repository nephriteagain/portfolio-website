import type { APIContext, MiddlewareNext  } from "astro";

export function onRequest(context: APIContext,next: MiddlewareNext<unknown>) {
    console.log(context.request.referrer)
    next()
}