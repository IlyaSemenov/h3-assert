import type { H3Error } from "h3"
import { createError as createH3Error } from "h3"

export type ErrorInput = string | object

export function createError(statusCode: number, error?: ErrorInput): Partial<H3Error> {
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
