import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
