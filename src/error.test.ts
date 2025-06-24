import { expect, test } from "vitest"

import { createError } from "./error"

test("createError variants", () => {
  expect(createError(400)).toMatchObject({
    statusCode: 400,
    data: undefined,
  })
  expect(createError(400, "Invalid email.")).toMatchObject({
    statusCode: 400,
    message: "Invalid email.",
    data: undefined,
  })
  expect(createError(400, { root: ["Failed"] })).toMatchObject({
    statusCode: 400,
    data: { root: ["Failed"] },
  })
})
