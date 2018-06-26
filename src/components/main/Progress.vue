<template>
	<view-box ref="progress" class="progress">

		<div v-for="(item,index) in getBookList" class="progress-list-item" :key="index">
			
			<div style="width:150px;height:150px;text-align:center;">
		      <x-circle
		        :percent="parseInt(item.readPage/item.page *100)"
		        :stroke-width="5"
		        stroke-color="#5fc6f3">
		        <span>{{ parseInt(item.readPage/item.page *100)}}%</span>
		      </x-circle>
		    </div>

		    <div>
				<span class="book-name">{{item.bookName}}</span>
		       	<span class="author"> {{item.author}}</span>
	       	</div>
	       	<div>
	       		<span>正在阅读:{{item.readPage}}页</span>   <span>总页数{{item.page}}</span>
	       	</div>
	   
	       	<x-button mini plain type="primary" style="border-radius:99px;margin:10px 10px;">修改阅读进度</x-button>
	      	
	      	<HR v-if="index!= getBookList.length-1" width="90%" color=#987cb9 SIZE=1 style="margin: 0 auto;"/>
		</div>

		<divider v-if="getBookList.length != 0">我是有底线的</divider>
		<div v-if="getBookList.length == 0 " class="no-data">
			<img :src="imgHolder" ></img>
			<divider>请添加新书籍</divider>
		</div>
	</view-box>
	
</template>

<script>
import { XCircle } from 'vux'

export default {
	name: 'Progress',
	components:{
		XCircle
	},
	methods:{
		showInfo(){
      		console.log("Progress components");
    	},
	},
	data(){
		return{
			imgHolder:"../static/book/holder.png",
			percent:2/1000 * 100
		}
	},
	computed:{
  		getBookList(){
  			return this.$store.state.bookIndexList;
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.progress-list-item > div {
  margin: 0 auto;
}

.progress-list-item{
	margin-bottom: 20px;
    text-align: center;
}
.progress{
	padding: 20px 5px;
}
.book-img{
	width: 30px;
}
.book-name{

}
.author{
	color: gray;
}


.no-data{
	padding-top:60px;
	text-align:center;
}

.no-data img{
	width:250px;
}
</style>
