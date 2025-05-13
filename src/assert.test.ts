import { expect, test } from "vitest"

import { assert400 } from "./assert"

test("assert400", () => {
  expect(assert400(true)).toBeUndefined()
  expect(() => assert400(false)).toThrowError()
})
