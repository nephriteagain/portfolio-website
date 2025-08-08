import type { APIContext, MiddlewareNext  } from "astro";

export function onRequest(context: APIContext,next: MiddlewareNext) {
    console.log(context.request.referrer)
    next()
}