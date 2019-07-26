import { create } from 'axios'
import env from '../../../config/env'

const api = create({
  baseURL: env.apiUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  params: {
    'api_key': env.apiToken
  }
})

export default api
