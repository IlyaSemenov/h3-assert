import type { H3Error } from "h3"
import { createError as createH3Error } from "h3"

import { setFunctionName } from "./utils"

export type ErrorInput = string | object

export function createHttpError(statusCode: number, error?: ErrorInput): Partial<H3Error> {
  return createH3Error({
    statusCode,
    ...typeof error === "string"
      ? {
          message: error,
        }
      : {
          data: error,
        },
  })
}

export function createCreateHttpError(statusCode: number) {
  function createWithCode(error?: ErrorInput) {
    return createHttpError(statusCode, error)
  }
  return setFunctionName(createWithCode, `createHttp${statusCode}`)
}

// 4xx Client Errors
export const createHttp400BadRequest = createCreateHttpError(400)
export const createHttp401Unauthorized = createCreateHttpError(401)
export const createHttp402PaymentRequired = createCreateHttpError(402)
export const createHttp403Forbidden = createCreateHttpError(403)
export const createHttp404NotFound = createCreateHttpError(404)
export const createHttp405MethodNotAllowed = createCreateHttpError(405)
export const createHttp406NotAcceptable = createCreateHttpError(406)
export const createHttp407ProxyAuthenticationRequired = createCreateHttpError(407)
export const createHttp409Conflict = createCreateHttpError(409)
export const createHttp410Gone = createCreateHttpError(410)
export const createHttp411LengthRequired = createCreateHttpError(411)
export const createHttp412PreconditionFailed = createCreateHttpError(412)
export const createHttp413PayloadTooLarge = createCreateHttpError(413)
export const createHttp415UnsupportedMediaType = createCreateHttpError(415)
export const createHttp422UnprocessableEntity = createCreateHttpError(422)
export const createHttp429TooManyRequests = createCreateHttpError(429)

// 5xx Server Errors
export const createHttp500InternalServerError = createCreateHttpError(500)
export const createHttp501NotImplemented = createCreateHttpError(501)
export const createHttp502BadGateway = createCreateHttpError(502)
export const createHttp503ServiceUnavailable = createCreateHttpError(503)
export const createHttp504GatewayTimeout = createCreateHttpError(504)
