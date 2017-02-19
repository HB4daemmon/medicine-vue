import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Symptom from 'components/Symptom'
import Twocloumn from 'components/TwoColumn'

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
      path: '/t',
      name: 'Twocloumn',
      component: Twocloumn
    }
  ]
})
