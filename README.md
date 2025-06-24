# h3-assert

`assert` and `throw` helpers for returning HTTP 40x errors in [h3](https://h3.unjs.io/):

```ts
// Before:
if (!okCondition) {
  throw createError({
    statusCode: 404,
    statusMessage: "Object not found."
  })
}

// After:
assert404(okCondition, "Object not found.")
```

or just simplify throw:

```ts
// Before
throw createError({
  statusCode: 400,
  data: createFlatErrors({ email: "Invalid e-mail address." }),
})

// After:
throw400(createFlatErrors({ email: "Invalid e-mail address." }))
```

## Install

```sh
npm install h3-assert
```

## Use

In a h3 request handler:

```ts
import { assert404 } from "h3-assert"

export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "postId")!

  // post could be undefined.
  const post = await db.post
    .findOptional(postId)
    .select("title", "text")

  // Will throw Error 404 if post not found.
  assert404(task, "Post not found.")

  // post is typed as not undefined now.
  console.log(post.text)

  return post
})
```

## Exported functions

Assert functions:

- `assert400`, `assertBadRequest` — throw HTTP 400 if condition not met
- `assert401`, `assertUnauthorized` — throw HTTP 401 if condition not met
- `assert403`, `assertForbidden` — throw HTTP 403 if condition not met
- `assert404`, `assertNotFound` — throw HTTP 404 if condition not met
- `assertError` - generic assert with arbitrary status code

Throw functions:

- `throw400`, `throwBadRequest` — throw HTTP 400
- `throw401`, `throwUnauthorized` — throw HTTP 401
- `throw403`, `throwForbidden` — throw HTTP 403
- `throw404`, `throwNotFound` — throw HTTP 404
- `throwError` - generic throw with arbitrary status code
