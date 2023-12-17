import { useQuery } from '@tanstack/react-query'
import api from '../interceptors'
import { IS_MOCK } from '../../constants/appConstants'
import textContents from '../../mocks/textContents'
import documentContents from '../../mocks/docmentContents'

const getTextContentsFn = async () => {
  if (IS_MOCK) {
    return textContents
  }
  const response = await api.get(`contents?type=text`)
  return response.data
}

const getDocContentsFn = async () => {
  if (IS_MOCK) {
    return documentContents
  }
  const response = await api.get(`contents?type=docment`)
  return response.data
}

export function getTextContents() {
  return useQuery(['contents'], () => getTextContentsFn())
}

export function getDocContents() {
  return useQuery(['contents'], () => getDocContentsFn())
}
