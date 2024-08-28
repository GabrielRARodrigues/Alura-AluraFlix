import { Link } from 'react-router-dom'

import PageDefault from '../../components/PageDefault'
import { useState } from 'react'
import FormField from '../../components/FormField'

function CadastroCategoria() {
  const defaultValues = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([])
  const [categoria, setCategoria] = useState({ ...defaultValues })

  function alterarCampoDaCategoria(chave, valor) {
    setCategoria({
      ...categoria,
      [chave]: valor
    })
  }

  function handleInputChange(event) {
    const element = event.target

    alterarCampoDaCategoria(element.getAttribute('name'), element.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria.nome}</h1>

      <form
        onSubmit={event => {
          event.preventDefault()

          setCategorias([...categorias, categoria])
          setCategoria({ ...defaultValues })
        }}
      >
        <FormField
          label="Nome da categoria"
          name="nome"
          type="text"
          value={categoria.nome}
          onChange={handleInputChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              name="descricao"
              value={categoria.descricao}
              onChange={event => {
                alterarCampoDaCategoria('descricao', event.target.value)
              }}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          name={categoria.cor}
          type="color"
          onChange={handleInputChange}
          value={categoria.cor}
        />

        <button>Cadastrar</button>
      </form>

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
