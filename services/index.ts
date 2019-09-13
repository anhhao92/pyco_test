import { RestClient } from './RestClient'
import { GiphyService } from './GiphyService'

export const restClient = new RestClient()
export const giphyService = new GiphyService(restClient)
