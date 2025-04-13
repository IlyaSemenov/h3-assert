import { assert400 } from "h3-assert"
import { expect, it } from "vitest"

it("assert400", () => {
  expect(assert400(true)).toBeUndefined()
  expect(() => assert400(false)).toThrowError()
})
