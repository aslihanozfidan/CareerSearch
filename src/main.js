import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'

import Search from './components/Search.vue'
import Preview from './components/Preview.vue'
import JobList from './components/JobList.vue'
import Details from './components/Details.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: JobList },
    { path: '/joblist', component: JobList },
    { path: '/jobdetails/:id', component: Details }
  ],
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
