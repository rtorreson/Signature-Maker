import Vue from 'vue'
import Router from 'vue-router'
import outputSignature from '@/components/output-signature'
import inputInformation from '@/components/input-information'
import login from '@/components/login'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { component } from 'vue/types/umd'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify)
Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signature/output-signature',
      name: 'outputSignature',
      component: outputSignature
    },
    {
      path: '/signature/input-information',
      name: 'inputInformation',
      component: inputInformation
    },
    {
      path: '/',
      name: 'login'
    }
  ]
})
