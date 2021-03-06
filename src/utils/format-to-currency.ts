export function formatToCurrency(number: number) {
  if (!number) return ''

  return `R$ ${number.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}
