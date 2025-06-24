import { expect, test } from "vitest"

import { throwHttp400BadRequest } from "./throw"

test("throwHttp400BadRequest", () => {
  expect(() => throwHttp400BadRequest()).toThrowError()
})

test("throw function name", () => {
  expect(throwHttp400BadRequest.name).toEqual("throwHttp400")
})
