import { expect, test } from "vitest"

import { throw400, throwBadRequest } from "./throw"

test("throw400", () => {
  expect(() => throw400()).toThrowError()
})

test("throw function name", () => {
  expect(throw400.name).toEqual("throw400")
  expect(throwBadRequest.name).toEqual("throw400")
})
