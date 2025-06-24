import { expect, test } from "vitest"

import { assertHttp400BadRequest } from "./assert"

test("assert shortcut", () => {
  expect(assertHttp400BadRequest(true)).toBeUndefined()
  expect(() => assertHttp400BadRequest(false)).toThrowError()
})

test("assert shortcut function name", () => {
  expect(assertHttp400BadRequest.name).toEqual("assertHttp400")
})

test("assert shortcut with lazy error", () => {
  let counter = 0
  const error = () => `Error ${++counter}`
  for (const _ of Array.from({ length: 1 })) {
    expect(assertHttp400BadRequest(true, error)).toBeUndefined()
  }
  for (const _ of Array.from({ length: 2 })) {
    expect(() => assertHttp400BadRequest(false, error)).toThrowError()
  }
  expect(counter).toBe(2)
})
