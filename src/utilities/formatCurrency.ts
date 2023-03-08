// Define um objeto CURRENT_FORMATTER que formata valores numéricos como moeda brasileira
const CURRENT_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "BRL",
    style: "currency"
  })
  
  // Define a função formatCurrency que recebe um valor numérico e o formata como moeda brasileira
  export function formatCurrency(number: number) {
    // Chama o método format do objeto CURRENT_FORMATTER e retorna o valor formatado
    return CURRENT_FORMATTER.format(number)
  }