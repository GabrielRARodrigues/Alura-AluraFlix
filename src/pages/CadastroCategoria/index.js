import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/FormField'
import Button from '../../components/Button'

import useForm from '../../hooks/useForm'

function CadastroCategoria() {
  const defaultValues = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const {
    handleInputChange,
    values: categoria,
    clearForm
  } = useForm(defaultValues)

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://alura-aluraflix.onrender.com/categorias'

    fetch(URL).then(async serverResponse => {
      const response = await serverResponse.json()

      setCategorias([...response])
    })
  }, [])

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.nome}
      </h1>

      <form
        onSubmit={event => {
          event.preventDefault()

          setCategorias([...categorias, categoria])
          clearForm()
        }}
      >
        <FormField
          label="Nome da categoria"
          name="nome"
          type="text"
          value={categoria.nome}
          onChange={handleInputChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          onChange={handleInputChange}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          onChange={handleInputChange}
          value={categoria.cor}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria.nome}${index}`}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria
