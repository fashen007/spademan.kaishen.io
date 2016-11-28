import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import masonry from './directives/masonry'
import AwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store.js'
// 组件
import Index from './Index'
import CaseDetail from './components/CaseDetail'
import About from './components/About'
import Join from './components/Join'
import Article from './components/Article'
import Case from './components/Case'
import ArticleDetail from './components/ArticleDetail'
// const Index = () => System.import('./Index')
// const About = () => System.import('./components/About')
// const Join = () => System.import('./components/Join')
// const Article = () => System.import('./components/Article')
// const ArticleDetail = () => System.import('./components/ArticleDetail')
// const Case = () => System.import('./components/Case')
// const CaseDetail = () => System.import('./components/CaseDetail')

// 引入路由器
Vue.use(VueRouter)

// 引入element UI
Vue.use(Element)

// 引入swiper插件
Vue.use(AwesomeSwiper)

// 引入延迟加载插件
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'error.png',
  loading: 'loading.svg',
  try: 4 // default 1
})
const routes = [{
  path: '/About', component: About
}, {
  path: '/Join', component: Join
}, {
  path: '/Article', component: Article
}, {
  path: '/ArticleDetail/:id', component: ArticleDetail
}, {
  path: '/Case', component: Case
}, {
  path: '/CaseDetail/:id', component: CaseDetail
}, {
  path: '/', component: Index
}]
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})
Vue.directive('masonry', masonry)
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
// router.start(App, '#app')
