import { useQuery } from '@tanstack/react-query'
import api from '../interceptors'
import { IS_MOCK } from '../../constants/appConstants'
import tags from '../../mocks/tags'

const getTagsBySearchKeyFn = async (searchKey: string) => {
  if (IS_MOCK) {
    return tags
  }
  const response = await api.get(`tags?search_key=${searchKey}`)
  return response.data
}

export function getTagsBySearchKey(searchKey: string) {
  return getTagsBySearchKeyFn(searchKey)
  //   return useQuery(['tags'], () => getTagsBySearchKeyFn(searchKey))
}
