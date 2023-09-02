import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faBook,
  faHeart,
  faCalendar,
  faFolderTree,
  faHeartBroken,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser)
library.add(faBook)
library.add(faHeart)
library.add(faCalendar)
library.add(faFolderTree)
library.add(faHeartBroken)
library.add(faChevronLeft)

import './styles/global.scss'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount('#app')
