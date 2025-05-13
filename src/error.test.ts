import { expect, test } from "vitest"

import { createError } from "./error"

test("createError", () => {
  expect(createError(400)).toMatchObject({
    statusCode: 400,
    statusMessage: undefined,
  })
  expect(createError(400, "Failed")).toMatchObject({
    statusCode: 400,
    statusMessage: "Failed",
  })
})
