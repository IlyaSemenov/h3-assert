import { expect, test } from "vitest"

import { assert400, assertBadRequest } from "./assert"

test("assert400", () => {
  expect(assert400(true)).toBeUndefined()
  expect(() => assert400(false)).toThrowError()
})

test("assert function name", () => {
  expect(assert400.name).toEqual("assert400")
  expect(assertBadRequest.name).toEqual("assert400")
})
