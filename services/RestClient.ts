import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios'

const DEFAULT_CONFIG: AxiosRequestConfig = {
  //baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

export class RestClient {
  public instance: AxiosInstance

  constructor() {
    this.instance = axios.create(DEFAULT_CONFIG)
    this.instance.interceptors.request.use((config) => {
      // Custom header
      return config
    })
  }

  public request<T>(config: AxiosRequestConfig): AxiosPromise<T> {
    return this.instance.request(config)
  }
}
