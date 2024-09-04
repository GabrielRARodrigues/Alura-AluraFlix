import { configs } from '../config'

const URL_CATEGORIES = `${configs.URL_BACKEND}/categorias`

async function getAll() {
  const serverResponse = await fetch(`${URL_CATEGORIES}`)

  if (serverResponse.ok) {
    const response = await serverResponse.json()

    return response
  }

  throw new Error('Não foi possível obter os dados')
}

async function getAllWithVideos() {
  const serverResponse = await fetch(`${URL_CATEGORIES}?_embed=videos`)

  if (serverResponse.ok) {
    const response = await serverResponse.json()

    return response
  }

  throw new Error('Não foi possível obter os dados')
}

export const categoriasRepository = {
  getAll,
  getAllWithVideos
}
