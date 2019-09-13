import { RestClient } from './RestClient'
import { AxiosRequestConfig, AxiosPromise } from 'axios'

const API_KEY = process.env.NEXT_APP_API_KEY

export class BaseService {
  protected restClient: RestClient

  constructor(restClient: RestClient) {
    this.restClient = restClient
  }

  protected get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    const params = config && config.params
    const axiosConfig: AxiosRequestConfig = {
      ...config,
      params: {
        ...params,
        api_key: API_KEY,
      },
    }
    return this.restClient.request({ url, ...axiosConfig })
  }

  protected post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return this.restClient.request({ url, data, method: 'POST', ...config })
  }

  protected put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return this.restClient.request({ url, data, method: 'PUT', ...config })
  }

  protected delete<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return this.restClient.request({ url, data, method: 'DELETE', ...config })
  }
}
