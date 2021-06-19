export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getItem(key) {
  return parseValue(localStorage.getItem(key))
}

export function parseValue(value) {
  return JSON.parse(value)
}
