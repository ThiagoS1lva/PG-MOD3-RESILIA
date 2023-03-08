import { useEffect, useState } from "react"

//É uma função que recebe duas informações: a chave key, que será usada para identificar o valor armazenado, e o initialValue, que é o valor inicial a ser armazenado, ou uma função que retorna o valor inicial. O tipo T representa o tipo de dado que será armazenado.
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  {/*É uma chamada ao hook useState para obter o valor atual e uma função para atualizá-lo. O valor inicial é obtido através de uma função que primeiro verifica se há algum valor armazenado no localStorage com a chave key. Se houver, o valor é convertido de JSON para o tipo T e retornado. Caso contrário, o valor inicial fornecido é retornado. É usado o useState para que o valor atual possa ser atualizado em resposta a mudanças. */ }
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })
  {/* É uma chamada ao hook useEffect, que é usado para executar efeitos colaterais, como salvar o valor atual no localStorage. Ele é executado sempre que o valor atual ou a chave mudam. O efeito é salvar o valor atual em JSON no localStorage usando a chave fornecida.*/ }
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  {/* É uma instrução que retorna um array que contém o valor atual e a função para atualizá-lo. É usado o as para definir explicitamente o tipo de retorno, que é um array com os tipos de value e setValue. */}
  return [value, setValue] as [typeof value, typeof setValue]
}