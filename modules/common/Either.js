const right = (value) => ({
  map: (f) => right(f(value)),
  matchWith: (pattern) => pattern.right(value)
})
const left = (value) => ({
  map: (f) => left(f(value)),
  matchWith: (pattern) => pattern.left(value)
})

export const Either = {
  left,
  right
}
