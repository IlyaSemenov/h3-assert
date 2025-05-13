import type { H3Error } from "h3"
import { createError as createH3Error } from "h3"

// TODO accept either statusMessage or the partial createError argument object.
export type ErrorInput = string

export function createError(statusCode: number, error?: ErrorInput): Partial<H3Error> {
  return createH3Error({
    statusCode,
    statusMessage: error,
  })
}
