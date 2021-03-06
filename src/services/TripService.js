import { apiClient } from '@/services/ApiClient.js'

export default {
  search(searchArgs) {
    return apiClient.get('trips/search', {
      params: searchArgs
    })
  }
}
