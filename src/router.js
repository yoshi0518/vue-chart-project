import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Line from './views/pageLine.vue'
import Bar from './views/pageBar.vue'
import HorizontalBar from './views/pageHorizontalBar.vue'
import Pie from './views/pagePie.vue'
import Doughnut from './views/pageDoughnut.vue'
import Radar from './views/pageRadar.vue'
import PolarArea from './views/pagePolarArea.vue'
import Area from './views/pageArea.vue'
import Mixed from './views/pageMixed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/line',
      name: 'line',
      component: Line,
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar,
    },
    {
      path: '/horizontal_bar',
      name: 'horizontal_bar',
      component: HorizontalBar,
    },
    {
      path: '/pie',
      name: 'pie',
      component: Pie,
    },
    {
      path: '/doughnut',
      name: 'doughnut',
      component: Doughnut,
    },
    {
      path: '/radar',
      name: 'radar',
      component: Radar,
    },
    {
      path: '/polar_area',
      name: 'polar_area',
      component: PolarArea,
    },
    {
      path: '/area',
      name: 'area',
      component: Area,
    },
    {
      path: '/mixed',
      name: 'mixed',
      component: Mixed,
    },
  ],
})
