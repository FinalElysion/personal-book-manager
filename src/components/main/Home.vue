<template>
	<view-box ref="home">
	<!-- <input type="file" accept="image/*"  /> -->

	<panel header="最近阅读" :list="list"></panel>
	</view-box>
</template>

<script>
import BaseView from '@/components/main/BaseView'

export default {
	name: 'Home',
	data(){
		return{
			imgSrc:'',
			list:[{
				title:'疯狂Ajax 讲义', 
				desc:"Ajax 知识填充", 
				src:"../static/book/fkajax.png", 
				//不存在时占位
				fallbackSrc:"../static/book/holder.png", 
			}]
		}
	},
	components: {
		
  	},
  	methods: {
  		showInfo(){
  			console.log("%cemit event-hub","color:red;")
  			this.$eventHub.$emit('event-hub', { text: 'params' })
        	console.log("Home components");
      	}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
