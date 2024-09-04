import { useState } from 'react'

function useForm(defaultValues) {
  const [values, setValues] = useState({ ...defaultValues })

  function alterarCampoDaCategoria(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleInputChange(event) {
    const element = event.target

    alterarCampoDaCategoria(element.getAttribute('name'), element.value)
  }

  function clearForm() {
    setValues(defaultValues)
  }

  return {
    values,
    handleInputChange,
    clearForm
  }
}

export default useForm
