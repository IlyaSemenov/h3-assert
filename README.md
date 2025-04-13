# h3-assert

Shortcut helpers for throwing HTTP 40x errors in [h3](https://h3.unjs.io/):

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

Available methods:

- `assert400`, `assertBadRequest` — throws HTTP 400
- `assert401`, `assertUnauthorized` — throws HTTP 401
- `assert403`, `assertForbidden` — throws HTTP 403
- `assert404`, `assertNotFound` — throws HTTP 404
