import { observable, action, runInAction } from 'mobx'
import { giphyService } from '../services'

export class AppStore {
  @observable initialized: boolean = false
  @observable loading: boolean = false
  @observable gifs: any = null
  @observable visible: boolean = false
  @observable card: any

  @action
  async init() {
    this.loading = true
    const response = await giphyService.fetchTrendingGifs()

    runInAction(() => {
      this.gifs = response.data
      this.loading = false
      this.initialized = true
    })
  }

  @action
  openPreview = (initData: any) => {
    this.visible = true
    this.card = initData
  }

  @action
  closePreview = () => {
    this.visible = false
    this.card = null
  }
}

export const store = new AppStore()
