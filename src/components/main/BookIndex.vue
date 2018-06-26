<template>
	<view-box ref="bookIndex">
		<div v-for="(item,index) in getBookList" class="book-list-item" :key="index">
			<img :src="item.src" class="book-img"></img>
			<div class="edit-button"  v-show="showEdit">
				<x-button type="warn" @click.native.self="deleteItemClick(item)" :key="index">删除</x-button>
			</div>
			<div class="book-name">{{item.bookName}}</div>
	       	<div class="author"> {{item.author}}</div>
       		<div class="desc">{{item.desc}}</div>

       		<HR v-if="index!= getBookList.length-1" color=#987cb9 width="90%" SIZE=1 style="margin: 0 auto;"/>
		</div>
		<divider v-if="getBookList.length != 0 ">我是有底线的</divider>
		<div v-if="getBookList.length == 0 " class="no-data">
			<img :src="imgHolder" ></img>
			<divider>请添加新书籍</divider>
		</div>
	</view-box>
</template>

<script>
import {XImg} from 'vux';

export default {
	name: 'BookIndex',
	components:{
		XImg
	},
	methods:{
		showInfo(){
        	console.log("BookIndex components");
      	},
		deleteItemClick(item){
			// debugger
			console.log(item);
			this.$storageHelper.deleteBookList(item);
		}
	},
	computed:{
  		getBookList(){
  			//reverse()
  			return this.$store.state.bookIndexList;
  		},
  		showEdit(){
  			return this.$store.state.showEdit;
  		}
  	},
	data(){
		return{
			imgHolder:"../static/book/holder.png",
			showDelete:false

		}
	}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.book-img{
	width: 100px;
    float: left;
    max-height: 120px;
    margin-right:5px;
    margin-bottom:10px;
}
.book-list-item{
	position:relative;
 	vertical-align: middle;
	overflow:hidden;
	clear: both;
	padding: 5px;
    min-height: 120px;
    div{
    	margin-left:5px;
    }
    .book-name{
    	font-size:18px;
    }
    .desc{
		font-size:12px;
		color:grey;
    }
    .author{
    	font-size:17px;
    }
    .edit-button{
    	height:20px;
    	position:absolute;
    	top:50%;
    	margin-top:-20px;
    	right:5px;
    }
}
.no-data{
	padding-top:80px;
	text-align:center;
	img{
		width:250px;
	}
}

</style>
