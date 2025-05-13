import { expect, test } from "vitest"

import { setFunctionName } from "./function-name"

test("set function name", () => {
  function foo() {}
  expect(foo.name).toEqual("foo")
  expect(setFunctionName(foo, "bar").name).toEqual("bar")
})
