import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Where from '@/components/Where'
import Home from '@/components/Home'

// Fallback page
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/where',
      name: 'Where',
      component: Where
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
