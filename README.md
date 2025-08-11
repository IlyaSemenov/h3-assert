# h3-assert

`assert` and `createError` helpers for throwing HTTP 4xx and 5xx errors in [h3](https://h3.unjs.io/).

Asserts:

```ts
// Before:
if (!post) {
  throw createError({
    statusCode: 404,
    message: "Post not found."
  })
}

// After:
assertHttp404NotFound(post, "Post not found.")
```

Throws:

```ts
// Before:
throw createError({
  statusCode: 400,
  data: { email: "Invalid e-mail address." },
})

// After:
throw createHttp400BadRequest({ email: "Invalid e-mail address." })
```

## Install

```sh
npm install h3-assert
```

## Use

In a h3 request handler:

```ts
import { assertHttp404NotFound } from "h3-assert"

export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "postId")!

  // post could be undefined.
  const post = await db.post
    .findOptional(postId)
    .select("title", "text")

  // Will throw Error 404 if post not found.
  assertHttp404NotFound(post, "Post not found.")

  // post is typed as not undefined now.
  console.log(post.text)

  return post
})
```

## Error Format

The error value can be:

- **string** - sets `message` in the JSON response.
- **object** - sets `data` in the JSON response.
- **callback** (returning either of the above, for `assert` only) - lazily evaluated if the assertion fails.

### Response Structure

```json5
{
  "statusCode": 400,
  "message": "Custom error", // If error was a string
  "data": { /* ... */ } // If error was an object
}
```

### Examples

```ts
// String error
throw createHttp400BadRequest("Invalid input")

// Object error
throw createHttp422UnprocessableEntity({ field: "Email already exists" })

// Callback (assert only)
assertHttp404NotFound(post, () => `Post ${postId} not found`)
```

## Exported functions

### 4xx Client Errors

- `createHttp400BadRequest` / `assertHttp400BadRequest`
- `createHttp401Unauthorized` / `assertHttp401Unauthorized`
- `createHttp402PaymentRequired` / `assertHttp402PaymentRequired`
- `createHttp403Forbidden` / `assertHttp403Forbidden`
- `createHttp404NotFound` / `assertHttp404NotFound`
- `createHttp405MethodNotAllowed` / `assertHttp405MethodNotAllowed`
- `createHttp406NotAcceptable` / `assertHttp406NotAcceptable`
- `createHttp407ProxyAuthenticationRequired` / `assertHttp407ProxyAuthenticationRequired`
- `createHttp409Conflict` / `assertHttp409Conflict`
- `createHttp410Gone` / `assertHttp410Gone`
- `createHttp411LengthRequired` / `assertHttp411LengthRequired`
- `createHttp412PreconditionFailed` / `assertHttp412PreconditionFailed`
- `createHttp413PayloadTooLarge` / `assertHttp413PayloadTooLarge`
- `createHttp415UnsupportedMediaType` / `assertHttp415UnsupportedMediaType`
- `createHttp422UnprocessableEntity` / `assertHttp422UnprocessableEntity`
- `createHttp429TooManyRequests` / `assertHttp429TooManyRequests`

### 5xx Server Errors

- `createHttp500InternalServerError` / `assertHttp500InternalServerError`
- `createHttp501NotImplemented` / `assertHttp501NotImplemented`
- `createHttp502BadGateway` / `assertHttp502BadGateway`
- `createHttp503ServiceUnavailable` / `assertHttp503ServiceUnavailable`
- `createHttp504GatewayTimeout` / `assertHttp504GatewayTimeout`

### Generic

- `createHttpError` / `assertHttpError` - create or assert with arbitrary status code
- `createCreateHttpError` / `createAssertHttpError` - create shortcut function for arbitrary HTTP codes
