import Vue from 'vue'

import Vuetify from 'vuetify'

import App from './App.vue'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
