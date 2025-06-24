import type { ErrorInput } from "./error"
import { createError } from "./error"
import { setFunctionName } from "./utils"

export type ErrorInputFunction = () => ErrorInput

export function assertHttpError(condition: any, statusCode: number, error?: ErrorInput | ErrorInputFunction): asserts condition {
  if (!condition) {
    // Not exactly sure why the cast is needed here.
    const errorValue = typeof error === "function" ? (error as ErrorInputFunction)() : error
    throw createError(statusCode, errorValue)
  }
}

export function createAssertHttpError(statusCode: number) {
  function assertWithCode(condition: any, error?: ErrorInput | ErrorInputFunction): asserts condition {
    assertHttpError(condition, statusCode, error)
  }
  return setFunctionName(assertWithCode, `assertHttp${statusCode}`)
}

// 4xx Client Errors
export const assertHttp400BadRequest = createAssertHttpError(400)
export const assertHttp401Unauthorized = createAssertHttpError(401)
export const assertHttp402PaymentRequired = createAssertHttpError(402)
export const assertHttp403Forbidden = createAssertHttpError(403)
export const assertHttp404NotFound = createAssertHttpError(404)
export const assertHttp405MethodNotAllowed = createAssertHttpError(405)
export const assertHttp406NotAcceptable = createAssertHttpError(406)
export const assertHttp407ProxyAuthenticationRequired = createAssertHttpError(407)
export const assertHttp409Conflict = createAssertHttpError(409)
export const assertHttp410Gone = createAssertHttpError(410)
export const assertHttp411LengthRequired = createAssertHttpError(411)
export const assertHttp412PreconditionFailed = createAssertHttpError(412)
export const assertHttp413PayloadTooLarge = createAssertHttpError(413)
export const assertHttp415UnsupportedMediaType = createAssertHttpError(415)
export const assertHttp422UnprocessableEntity = createAssertHttpError(422)
export const assertHttp429TooManyRequests = createAssertHttpError(429)

// 5xx Server Errors
export const assertHttp500InternalServerError = createAssertHttpError(500)
export const assertHttp501NotImplemented = createAssertHttpError(501)
export const assertHttp502BadGateway = createAssertHttpError(502)
export const assertHttp503ServiceUnavailable = createAssertHttpError(503)
export const assertHttp504GatewayTimeout = createAssertHttpError(504)
