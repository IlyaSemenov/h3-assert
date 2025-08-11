# h3-errors

## 2.1.0

### Minor Changes

- 72ef9c4: Support lazy error callbacks for asserts.

### Patch Changes

- bda2afd: Fix error input type for assert shortcuts.
- 5a6d4bb: Use string error for response `message`, not `statusMessage`.

## 2.0.0

### Major Changes

- 6ac8e94: Export a single function per HTTP code (e.g. `assert400` and `assertBadRequest` replaced with `assertHttp400BadRequest`).

  Add more exports for HTTP codes 400-429 and 500-504.

## 1.1.3

### Patch Changes

- bd95e56: Export generic `assertError`.

## 1.1.2

### Patch Changes

- ebe0f04: Fix function types (regression after setting closure name).

## 1.1.1

### Patch Changes

- 3dc9258: Actually export new `throwXXX` methods.

## 1.1.0

### Minor Changes

- e389561: Create h3 errors with custom non-string data.
- b6e4fa4: Add `throw400`, `throw401`, etc. helpers.

### Patch Changes

- a863294: Set proper closure function name, such as `throw400`.

## 1.0.0

### Major Changes

- cebb60c: Initial release.
