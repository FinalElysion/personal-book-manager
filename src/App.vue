<template>
  <div id="app">
    <router-view style="height: 100%;"></router-view>
  </div>
</template>

<script>
export default {
	name: 'app',
	data(){
		return {
			desc:"App module"
		}
	},
	computed: {
		//获取vuex 数据
		author(){
		  	return this.$store.state.author
		}
	}
} 
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';

body {
	background-color: #fbf9fe;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

div#app{
	height: 100%;
}

</style>
