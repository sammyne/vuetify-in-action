import Vue from 'vue'

import Vuetify from 'vuetify'

import App from './App.vue'

Vue.config.productionTip = false

import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  icons: {
    product: 'mdi-dropbox',
    support: 'mdi-lifebuoy',
    steam: 'mdi-steam-box',
    pc: 'mdi-desktop-classic',
    xbox: 'mdi-xbox',
    playstation: 'mdi-playstation',
    switch: 'mdi-nintendo-switch',
    cancel: 'mdi-cancel',
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
