import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/security/Login'
import BaseView from '@/components/main/BaseView'
import Home from '@/components/main/Home'
import BookIndex from '@/components/main/BookIndex'
import AddBook from '@/components/main/AddBook'
import Progress from '@/components/main/Progress'
import Config from '@/components/main/Config'

Vue.use(VueRouter)

/**
    路由配置
*/
const router  = new VueRouter({
  	routes: [{
		path: '/',
		component: Login
    },{
        //嵌套路由配置
		path: '/main',
		component: BaseView,
	    children: [{
            name:"home",
            path: '',
            component: Home
        },{
        	name:"bookIndex",
    	    path: 'book-index',
            component: BookIndex
        },{
        	name:"addBook",
            path: 'add-book',
            component: AddBook
        },{
        	name:"progress",
            path: 'progress',
            component: Progress
        },{
    	    name:"config",
            path: 'config',
            component: Config
        }]
    }]
})

/*
    跳转前处理
*/
router.beforeEach((to, from, next) => {
	next(true);
})

/*
    跳转后处理
*/
router.afterEach((to, from) => {
	console.log("afterEach");
	if(router && router.currentRoute.path.indexOf("main") == 1){
		router.app.$store.commit("updateMainTitle",router.currentRoute.name);
	}
})

export default router;
