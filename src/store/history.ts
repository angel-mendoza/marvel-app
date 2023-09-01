import { defineStore } from 'pinia'
import { Serie } from '@/interface/Serie'

interface HistoryStore {
  series: Serie[]
}

export const useHistoryStore = defineStore('history', {
  state: () => ({
    series: []
  }),
  getters: {
    getSeries: (state: HistoryStore) => state.series,
  },
  actions: {
  },
})