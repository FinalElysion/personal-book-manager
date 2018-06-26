<template>
		<!--有header 跟tabbar 时要分别添加padding  -->
		<view-box ref="baseView" class="base-view" body-padding-top="46px" body-padding-bottom="55px">
		    <x-header :left-options="{showBack: showBack,backText: '返回'}" 
		    	:right-options="{showMore: showMore}" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
		    	@on-click-more="showActionsheet = true" >
		    	{{title}}
		    </x-header>
		    <!--  定义右侧菜单 -->
		    <div v-transfer-dom>
		      <actionsheet :menus="getMenus" v-model="showActionsheet" show-cancel 
		      @on-click-menu-add="addClick" @on-click-menu-delete="deleteClick"
		      @on-click-menu-cancel="cancelClick"></actionsheet>
		    </div>
			<!--  字体图标引用 demo
				<i class="fa fa-camera-retro"></i>
				<x-icon type="ios-baseball" class="icon-red"></x-icon>
				<icon type="info-circle"></icon> 
			-->
			<!-- 图片引用 demo
				<img class="logo" src="~@/assets/book/fkajax.png"> 
			-->

			<!-- 子路由节点 命名为 mainContent -->
			<router-view ref="mainContent"></router-view>
      		
      		<tabbar >
		        <tabbar-item link="/main" :selected="title=='主页'" replace>
		        	<!-- <img slot="icon" src="../../assets/logo.png"> -->
		        	<i  slot="icon" class="fa fa-home"></i>
	          		<span slot="label">主页</span>
		        </tabbar-item>
		        <tabbar-item link="/main/book-index" :selected="title=='藏书列表'" replace>
		        	<i  slot="icon" class="fa fa-book"></i>
		          	<span slot="label">书籍列表</span>
		        </tabbar-item>
		        <tabbar-item link="/main/progress" :selected="title=='读书进度'" replace> 
	          		<i  slot="icon" class="fa fa-bookmark" replace></i>
	          		<span slot="label">读书进度</span>
		        </tabbar-item>
		        <tabbar-item link="/main/config" :selected="title=='设置'" replace>
		       		<i  slot="icon" class="fa fa-cogs" replace></i> 
		          	<span slot="label">设置</span>
		        </tabbar-item>
      		</tabbar>
    </view-box>
</template>

<script>

import { XDialog,XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Tabbar, TabbarItem, Icon} from 'vux'

export default {
	/**
		组件生命周期
	*/
	beforeCreate: function () {
	    console.log("beforeCreated",this.$refs)
	},
	created: function () {
	    console.log("created",this.$refs)
	    /**
			监听全局事件demo 
			发送事件:(home.vue)
				this.$eventHub.$emit('event-hub', { text: 'params' })
	    */
	    this.$eventHub.$on('event-hub', this.doEventHub)
	},
	beforeMount: function () {
	    console.log("beforeMount",this.$refs)
	},
	mounted: function () {
		console.log(this);
		console.log("%cshowInfo:","color:blue;")
	    console.log("mounted",this.$refs)
	    /**
	    	调用子嵌套路由的方法
	    */
	    this.$refs.mainContent.showInfo();
	},
	beforeDestroy: function () {
	    console.log("beforeDestroyed",this.$refs)
	},
	destroyed: function () {
	    console.log("destroyed",this.$refs)
	},
	updated: function () {
	    console.log("updated",this.$refs)
	},
	beforeUpdate: function () {
	    console.log("beforeUpdate",this.$refs)
	},
	directives: {
		TransferDom
	},
	components:{
		XHeader,
		Actionsheet,
		ButtonTab,
		ButtonTabItem,
		Icon,
		Tabbar,
		TabbarItem,
		XDialog
	},
	methods:{
		doEventHub(params){
			console.log('%cbaseView do doEventHub',"color:red;",params)
		},
		addClick(){
			this.$router.push("/main/add-book");
		},
		deleteClick(){
			this.showDelete = true;
			this.$store.commit('updataShowEditie',
			  	true
			);
		},
		cancelClick(){
			this.showDelete = false;
			this.$store.commit('updataShowEditie',
			  	false
			);
		}
	},
	computed:{
		showMore(){
			let state  = this.$store.state;
			//state.name!="home"  && state.name!="home"&& state.name!="config"&& state.name!="progress"
			if(state.name == "bookIndex"){
				return true;
			}else{
				return false
			}
		},
		showBack(){
			return this.$store.state.showBack;
		},
		title(){
			return this.$store.state.mainTitle;
		},
		getMenus(){
			if(this.showDelete){
				return {
		    		add: '添加书籍',
		    		cancel: '取消删除'
		    	}
			}else{
	    	
		    	return {
		    		add: '添加书籍',
		    		delete: '删除书籍'
		    	}
	    	}
		}
	},
	data () {
		return {
			showDelete:false,
			onBlur:false,
			showAddBook:false,
		  	menus: {
		  		home:{
		  			add: '添加书籍',
		    		menu2: 'Choose from photos'
		  		},
		    	menu1: '添加书籍',
		    	menu2: 'Choose from photos'
		 	},
		  	showActionsheet: false
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@tabbar-text-active-color:red;
	.base-view{
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
</style>
