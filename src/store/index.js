import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//plugins 其实就是一个函数 参数是store 
const myPlugin = store => { 
	// 当 store 初始化后调用
	store.subscribe((mutation, state) => {
		//console.log(state);
		// 每次 mutation 之后调用
		// mutation 的格式为 { type, payload }
	})
}

const store = new Vuex.Store({
	plugins: [myPlugin],
	//全局状态值
	state: {
		author: 'Eric Feng',
		mainTitle:"主页",
		showBack:false,
		name:"",
		bookIndexList:[],
		showEdit:false
	},
	//修改全局状态值方法  调用方式 store.commit("updataBookList");
	mutations: {
		updataShowEditie(state,isShow) {
		  	this.state.showEdit = isShow;
		},
		updataBookList () {
		  	this.state.bookIndexList = this._vm.$storageHelper.getBookIndex();
		},
		updateShowBack (state,n) {
			if(state.name!="home" && state.name!="bookIndex" && state.name!="home"&& state.name!="config"&& state.name!="progress"){
				state.showBack = true;
			}else{
				state.showBack = false;
			}
		},
		updateMainTitle (state,name) {
			// debugger;
			let title = "";
		  	if(name=="home"){
		  		title = "主页"
		  	}else if(name=="bookIndex"){
		  		title = "藏书列表"
		  	}else if(name=="addBook"){
		  		title="添加书籍"
		  	}else if(name=="config"){
		  		title="设置"
		  	}else if(name=="progress"){
		  		title="读书进度"
		  	}
		  	state.name=name;
		  	state.mainTitle = title;
		  	this.commit("updateShowBack");
		}
	},
	//getter方法
	getters: {
		doneTodos: state => {
		  	// return state.todos.filter(todo => todo.done)
		}
	},
	actions: {
		increment (context) {
		  	// context.commit('increment')
		}
	}
})


export default store;