import type { ErrorInput } from "./error"
import { createError } from "./error"
import { setFunctionName } from "./utils"

export function throwHttpError(statusCode: number, error?: ErrorInput) {
  throw createError(statusCode, error)
}

export function createThrowHttpError(statusCode: number) {
  function throwWithCode(error?: ErrorInput) {
    throwHttpError(statusCode, error)
  }
  return setFunctionName(throwWithCode, `throwHttp${statusCode}`)
}

// 4xx Client Errors
export const throwHttp400BadRequest = createThrowHttpError(400)
export const throwHttp401Unauthorized = createThrowHttpError(401)
export const throwHttp402PaymentRequired = createThrowHttpError(402)
export const throwHttp403Forbidden = createThrowHttpError(403)
export const throwHttp404NotFound = createThrowHttpError(404)
export const throwHttp405MethodNotAllowed = createThrowHttpError(405)
export const throwHttp406NotAcceptable = createThrowHttpError(406)
export const throwHttp407ProxyAuthenticationRequired = createThrowHttpError(407)
export const throwHttp409Conflict = createThrowHttpError(409)
export const throwHttp410Gone = createThrowHttpError(410)
export const throwHttp411LengthRequired = createThrowHttpError(411)
export const throwHttp412PreconditionFailed = createThrowHttpError(412)
export const throwHttp413PayloadTooLarge = createThrowHttpError(413)
export const throwHttp415UnsupportedMediaType = createThrowHttpError(415)
export const throwHttp422UnprocessableEntity = createThrowHttpError(422)
export const throwHttp429TooManyRequests = createThrowHttpError(429)

// 5xx Server Errors
export const throwHttp500InternalServerError = createThrowHttpError(500)
export const throwHttp501NotImplemented = createThrowHttpError(501)
export const throwHttp502BadGateway = createThrowHttpError(502)
export const throwHttp503ServiceUnavailable = createThrowHttpError(503)
export const throwHttp504GatewayTimeout = createThrowHttpError(504)
