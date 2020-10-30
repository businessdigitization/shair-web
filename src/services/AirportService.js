import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1/airports/search',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  search(value) {
    console.log(value)
    return apiClient.get('/?query=' + value)
  }
}
