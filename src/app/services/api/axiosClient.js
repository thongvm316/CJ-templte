import axios from "axios"
import queryString from "query-string"

const axiosClient = axios.create({
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(
  (config) => {
    const pauthToken = localStorage.getItem("pauthToken")
    if (pauthToken) {
      config.headers.Authorization = `Bearer ${pauthToken}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => {
    if (response?.headers?.pauth) {
      localStorage.setItem("pauthToken", response.headers.pauth)
    }

    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

const axiosBaseQuery = () => {
  const baseUrl = process.env.REACT_APP_MAP_KEY
  return async ({ method = "GET", url, params = null, data = null }) => {
    try {
      const result = await axiosClient({ url: baseUrl + url, method, data, params })
      return { data: result }
    } catch (axiosError) {
      const err = axiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }
}

export default axiosBaseQuery
