import { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import useForm from '../../hooks/useForm'
import { videosRepository } from '../../repositories/videos'
import { categoriasRepository } from '../../repositories/categorias'

import PageDefault from '../../components/PageDefault'
import FormField from '../../components/FormField'
import Button from '../../components/Button'

function CadastroVideo() {
  const navigate = useNavigate()

  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(categoria => categoria.nome)

  const { values: video, handleInputChange } = useForm({
    titulo: '',
    url: '',
    categoria: ''
  })

  useEffect(() => {
    categoriasRepository.getAll().then(categorias => {
      
      setCategorias(categorias)
    })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form
        onSubmit={event => {
          event.preventDefault()
          // alert('Vídeo Cadastrado com sucesso')

          const categoriaId = categorias.find(
            categoria => categoria.nome === video.categoria
          ).id

          videosRepository
            .create({
              titulo: video.titulo,
              url: video.url,
              categoriaId: categoriaId
            })
            .then(() => {
              console.log('Cadastrou com sucesso!')
              navigate('/')
            })
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={video.titulo}
          onChange={handleInputChange}
        />

        <FormField
          label="URL"
          name="url"
          value={video.url}
          onChange={handleInputChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={video.categoria}
          onChange={handleInputChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  )
}

export default CadastroVideo
