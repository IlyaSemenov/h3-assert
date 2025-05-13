import { expect, test } from "vitest"

import { throw400 } from "./throw"

test("throw400", () => {
  expect(() => throw400()).toThrowError()
})
