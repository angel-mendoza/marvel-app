import { defineStore } from 'pinia'
import { Serie } from '@/interface/Serie'
interface HistoryStore {
  series: Serie[],
  scroll: number,
  favorites: number[]
}

export const useHistoryStore = defineStore('history', {
  state: (): HistoryStore => ({
    series: [],
    scroll: 0,
    favorites: [489, 18454]
  }),
  getters: {
    getAllSeries: state => state.series,
    getScroll: state => state.scroll,
    getOneSerie: state => (id: number) => state.series.find(serie => serie.id === id),
    findOneFavorites: state => (id: number) => !state.favorites.includes(id),
    getFavorites: state => state.series.filter(item => state.favorites.includes(item.id))
  },
  actions: {
    setSeries (data: Serie[]) {
      this.series = data
    },
    setScroll (data: number) {
      this.scroll = data
    },
    addFavorites (data: number) {
      console.log('addFavorites')
      const arrFavorites = [...this.favorites, data]
      this.favorites = arrFavorites
    },
    removeFavorites (data: number){
      console.log('removeFavorites')
      const arrFavorites = [...this.favorites]
      const arrFavoritesFilter = arrFavorites.filter(item => item !== data)
      this.favorites= arrFavoritesFilter
    }
  },
  persist: true,
})