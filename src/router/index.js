import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Subjects from '../components/subjects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flashcard Supreme',
      component: Home
    },
    {
      path: '/subjects',
      name: 'Subjects',
      component: Subjects
    }
    // {
    //   path: '/subjects/:name',
    //   name: ':name',
    //   component:
    // }
  ]
})
