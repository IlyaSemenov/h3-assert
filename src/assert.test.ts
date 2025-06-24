import { expect, test } from "vitest"

import { assertHttp400BadRequest } from "./assert"

test("assertHttp400BadRequest", () => {
  expect(assertHttp400BadRequest(true)).toBeUndefined()
  expect(() => assertHttp400BadRequest(false)).toThrowError()
})

test("assert function name", () => {
  expect(assertHttp400BadRequest.name).toEqual("assertHttp400")
})
