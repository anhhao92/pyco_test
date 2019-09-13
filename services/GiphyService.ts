import { BaseService } from './BaseService'

export class GiphyService extends BaseService {
  public fetchTrendingGifs() {
    return this.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        limit: 20,
      },
    })
  }
}
