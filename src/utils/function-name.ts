// eslint-disable-next-line ts/no-unsafe-function-type
export function setFunctionName(fn: Function, name: string) {
  Object.defineProperty(fn, "name", { value: name })
  return fn
}
