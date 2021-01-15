// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
// axios是一个库  不能使用USE（）方法 要使用原型vue—axios类似一个插件可以使用use()
import axios from 'axios'
// import vueAxios from 'vue-axios'
Vue.prototype.$http = axios
// Vue.use(axios,vueAxios)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
