import type { ErrorInput } from "./error"
import { createError } from "./error"

function assertError(condition: any, statusCode: number, error?: ErrorInput): asserts condition {
  if (!condition) {
    throw createError(statusCode, error)
  }
}

export function createAssert(statusCode: number) {
  return function assertWithCode(condition: any, statusMessage?: string): asserts condition {
    assertError(condition, statusCode, statusMessage)
  }
}

export const assert400 = createAssert(400)
export const assertBadRequest = assert400

export const assert401 = createAssert(401)
export const assertUnauthorized = assert401

export const assert403 = createAssert(403)
export const assertForbidden = assert403

export const assert404 = createAssert(404)
export const assertNotFound = assert404
