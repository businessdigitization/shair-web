import { apiClient } from '@/services/ApiClient.js'

export default {
  airportSearch(value) {
    return apiClient.get('airports/search?query=' + value)
  },
  tripSearch(searchArgs) {
    const origin_code = searchArgs.origin_airport_code
    const destination_code = searchArgs.destination_airport_code
    const query =
      '/?origin_airport_code=' +
      origin_code +
      '&destination_airport_code=' +
      destination_code
    return apiClient.get(query)
  }
}
