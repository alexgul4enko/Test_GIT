import { API } from '@cranium/api'
import { QueryParams } from '@cranium/queryparams'
import get from 'lodash/get'

export const QS = new QueryParams()

const api = new API({
  baseURL: `${process.env.BACKEND_URL}`,
  queryFuntion: QS.buildQueryParams,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})

api.interceptors.request.use({
  onSuccess: (requestData) => {
    const url = requestData.url.replace('/?', '?')
    return {
      ...requestData,
      url: url.endsWith('/') ? url.slice(0, -1) : url,
    }
  },
})

export default api
