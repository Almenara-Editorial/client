export function filterNumbers(string: string) {
  return string.replace(/\D+/g, '')
}

export function validateDate(date: string) {
  return /(((0[123456789]|10|11|12)([/])(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))/g.test(
    date
  )
}
