export function formatToCurrency(number: number) {
  return `R$ ${number.toFixed(2).replace('.', ',')}`
}
