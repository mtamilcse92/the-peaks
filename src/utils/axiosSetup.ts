import axios, {AxiosRequestConfig} from 'axios'

const guardianKey: string = process.env.REACT_APP_GUARDIAN_KAY || '';

export const onRequest = async (config: AxiosRequestConfig) => {
  return config
}

const setUpAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_GUARDIAN_API_URL
  axios.defaults.params = {}
  axios.defaults.params['api-key'] = guardianKey
  axios.interceptors.request.use(onRequest)
}

export default setUpAxios
