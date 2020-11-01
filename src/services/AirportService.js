import { apiClient } from '@/services/ApiClient.js'

export default {
  search(value) {
    return apiClient.get('airports/search', {
      params: {
        query: value
      }
    })
  }
}
