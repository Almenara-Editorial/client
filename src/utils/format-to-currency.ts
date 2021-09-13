export function formatToCurrency(number: number) {
  if (!number) return

  return `R$ ${number.toFixed(2).replace('.', ',')}`
}
