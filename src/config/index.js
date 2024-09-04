const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://alura-aluraflix.onrender.com'

export const configs = {
  URL_BACKEND
}
