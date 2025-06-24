# h3-assert

`throw` and `assert` helpers for returning HTTP 4xx and 5xx errors in [h3](https://h3.unjs.io/).

Throws:

```ts
// Before
throw createError({
  statusCode: 400,
  data: { email: "Invalid e-mail address." },
})

// After:
throwHttp400BadRequest({ email: "Invalid e-mail address." })
```

Asserts:

```ts
// Before:
if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found."
  })
}

// After:
assertHttp404NotFound(post, "Post not found.")
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

## Exported functions

### 4xx Client Errors

- `throwHttp400BadRequest` / `assertHttp400BadRequest`
- `throwHttp401Unauthorized` / `assertHttp401Unauthorized`
- `throwHttp402PaymentRequired` / `assertHttp402PaymentRequired`
- `throwHttp403Forbidden` / `assertHttp403Forbidden`
- `throwHttp404NotFound` / `assertHttp404NotFound`
- `throwHttp405MethodNotAllowed` / `assertHttp405MethodNotAllowed`
- `throwHttp406NotAcceptable` / `assertHttp406NotAcceptable`
- `throwHttp407ProxyAuthenticationRequired` / `assertHttp407ProxyAuthenticationRequired`
- `throwHttp409Conflict` / `assertHttp409Conflict`
- `throwHttp410Gone` / `assertHttp410Gone`
- `throwHttp411LengthRequired` / `assertHttp411LengthRequired`
- `throwHttp412PreconditionFailed` / `assertHttp412PreconditionFailed`
- `throwHttp413PayloadTooLarge` / `assertHttp413PayloadTooLarge`
- `throwHttp415UnsupportedMediaType` / `assertHttp415UnsupportedMediaType`
- `throwHttp422UnprocessableEntity` / `assertHttp422UnprocessableEntity`
- `throwHttp429TooManyRequests` / `assertHttp429TooManyRequests`

### 5xx Server Errors

- `throwHttp500InternalServerError` / `assertHttp500InternalServerError`
- `throwHttp501NotImplemented` / `assertHttp501NotImplemented`
- `throwHttp502BadGateway` / `assertHttp502BadGateway`
- `throwHttp503ServiceUnavailable` / `assertHttp503ServiceUnavailable`
- `throwHttp504GatewayTimeout` / `assertHttp504GatewayTimeout`

### Generic

- `throwHttpError` / `assertHttpError` - throw or assert with arbitrary status code
- `createThrowHttpError` / `createAssertHttpError` - create shortcut function for arbitrary HTTP codes
