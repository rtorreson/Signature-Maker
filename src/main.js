import Vue from 'vue'
import App from './App'
import inputInformation from './components/input-information.vue'
import outputSignature from './components/output-signature.vue'
import VModal from 'vue-js-modal'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify)
Vue.use(VModal)
Vue.config.productionTip = false

Vue.component('inputInformation', inputInformation)
Vue.component('outputSignature', outputSignature)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
