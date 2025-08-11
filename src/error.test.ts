import { expect, test } from "vitest"

import { createHttp400BadRequest, createHttpError } from "./error"

test("createHttpError variants", () => {
  expect(createHttpError(400)).toMatchObject({
    statusCode: 400,
    data: undefined,
  })
  expect(createHttpError(400, "Invalid email.")).toMatchObject({
    statusCode: 400,
    message: "Invalid email.",
    data: undefined,
  })
  expect(createHttpError(400, { root: ["Failed"] })).toMatchObject({
    statusCode: 400,
    data: { root: ["Failed"] },
  })
})

test("createHttp400BadRequest returns error without throwing", () => {
  const error = createHttp400BadRequest("Invalid input")
  expect(error).toMatchObject({ statusCode: 400, message: "Invalid input" })
})

test("create function name", () => {
  expect(createHttp400BadRequest.name).toEqual("createHttp400")
})
