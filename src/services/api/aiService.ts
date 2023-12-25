import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const improviseContent = async (content: string) => {
  const response = await api.post('generate/improvisedContent', content)
  return response.data
}

export const generateTags = async (content: string) => {
  const response = await api.post('generate/tags', { content: content })
  return response.data
}

export const generateTitle = async (content: string) => {
  const response = await api.post('generate/title', { content: content })
  return response.data
}

export const generateJist = async (content: string) => {
  const response = await api.post('generate/jist', { content: content })
  return response.data
}

export const doAiMagic = async (content: string) => {
  const response = await api.post('generate/aiMagic', { content: content })
  return response.data
}
