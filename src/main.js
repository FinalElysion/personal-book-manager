// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//类库引入
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

//引入第三方字体图标库
import './assets/font-awesome/css/font-awesome.min.css'

//全局引入 vux 组件
import { ViewBox , XButton ,Panel,Toast,ToastPlugin,Divider} from 'vux'

//自定义组件引入
import App from './App'

import storageHelper from './storage'
import store from './store'
import router from './router'

import service from './service'

//全局引用组件
Vue.component('view-box', ViewBox)
Vue.component('x-button', XButton)
Vue.component('panel', Panel)
Vue.component('toast', Toast)
Vue.component('divider', Divider)

Vue.use(ToastPlugin, {position: 'middle'})


//初始化 storageHelper
Vue.prototype.$storageHelper = storageHelper;
storageHelper.initStorageHelper(store);


FastClick.attach(document.body)

Vue.config.productionTip = false

/**
    1. debugger  
    2. webpack.base.conf.js  关闭 eslint
    3. vue全局事件
*/

//创建一个新的VUE来进行全局事件交互
Vue.prototype.$eventHub= Vue.prototype.$eventHub || new Vue()

//更新 store 数据
store.commit("updataBookList");

//初始化vue
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-box')
