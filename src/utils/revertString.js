export function reverseString(string) {
  let result = ""
  for (let i of string) {
    result = i + result
  }
  return result
}