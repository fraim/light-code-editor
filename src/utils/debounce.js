export function debounce(func, ms) {
  let isDebounced = false

  return function() {
    if(isDebounced) return

    func.apply(this, arguments)

    isDebounced = true

    setTimeout(() => isDebounced = false, ms)
  }
}
