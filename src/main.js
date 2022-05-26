import * as Vue from 'vue'
import App from './App.vue'

window.$vueApp = Vue.createApp(App)
window.$vueApp.mount('#app')
// eslint-disable-next-line
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
