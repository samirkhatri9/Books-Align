import axios from 'axios'

const api = axios.create({
  baseURL: '',
  withCredentials: true,          // sends cookies (JWT) on every request
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

// Attach response interceptor — normalise error shape
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.errors?.[0]?.message ||
      error.response?.data?.message ||
      error.message ||
      'Something went wrong'
    return Promise.reject(new Error(message))
  }
)

export default api
