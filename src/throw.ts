import type { ErrorInput } from "./error"
import { createError } from "./error"

export function throwError(statusCode: number, error?: ErrorInput) {
  throw createError(statusCode, error)
}

export function createThrow(statusCode: number) {
  return function throwWithCode(error?: ErrorInput) {
    throwError(statusCode, error)
  }
}

export const throw400 = createThrow(400)
export const throwBadRequest = throw400

export const throw401 = createThrow(401)
export const throwUnauthorized = throw401

export const throw403 = createThrow(403)
export const throwForbidden = throw403

export const throw404 = createThrow(404)
export const throwNotFound = throw404
