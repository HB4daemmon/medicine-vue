import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Symptom from 'components/Symptom'
import Medicine from 'components/Medicine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/symptom',
      name: 'Symptom',
      component: Symptom
    },
    {
      path: '/medicine',
      name: 'Medicine',
      component: Medicine
    }
  ]
})
