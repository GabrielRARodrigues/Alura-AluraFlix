import { configs } from '../config'

const URL_VIDEOS = `${configs.URL_BACKEND}/videos`

async function create(video) {
  const serverResponse = await fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(video)
  })

  if (serverResponse.ok) {
    const response = await serverResponse.json()

    return response
  }

  throw new Error('Não foi possível obter os dados')
}

export const videosRepository = {
  create
}
