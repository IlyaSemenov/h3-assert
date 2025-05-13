// eslint-disable-next-line ts/no-unsafe-function-type
export function setFunctionName<F extends Function>(fn: F, name: string): F {
  Object.defineProperty(fn, "name", { value: name })
  return fn
}
