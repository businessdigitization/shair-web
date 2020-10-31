import { apiClient } from '@/services/ApiClient.js'

export default {
  tripSearch(searchArgs) {
    // const origin_code = searchArgs.origin_airport_code
    // const destination_code = searchArgs.destination_airport_code
    // const query =
    //   'trips/search/?origin_airport_code=' +
    //   origin_code +
    //   '&destination_airport_code=' +
    //   destination_code
    return apiClient.get('trips/search', {
      params: searchArgs
    })
  }
}
