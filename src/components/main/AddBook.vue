<template>
	<view-box ref="addBook" class="add-book">
        <group class="form">
	      	<x-input label-width="80px" title="书名" v-model="bookName" placeholder="请输入书本名" placeholder-align="center"></x-input>
	      	
	      	<x-input label-width="80px" title="描述" v-model="desc" placeholder="请输入描述" placeholder-align="center"></x-input>
	      	
	      	<x-input type="number"  label-width="80px" title="页数" v-model="page" placeholder="请输入书本页数" placeholder-align="center"></x-input>
	      	
	      	<x-input label-width="80px" title="作者" v-model="author" placeholder="请输入书本作者" placeholder-align="center"></x-input>

            <x-input type="number" label-width="80px" title="书签" v-model="readPage" placeholder="请输入 读到第几页" placeholder-align="center"></x-input>

      	<!-- 	<x-input label-width="80px" title="图片" v-model="src" placeholder="请输入图片地址" placeholder-align="center"></x-input> -->
	    </group>
	    <x-button  class="submit" type="primary" @click.native="submitClick">提交</x-button>
	</view-box>
</template>

<script>
import { XInput,Group } from 'vux';

export default {
	name: 'AddBook',

	components: {
		XInput,Group
  	},
  	computed:{

  	},
  	data(){
  		return {
        bookName:"",
        desc:"",
        page:"",
        author:"",
        note:"",
        src:"",
        readPage:""
  		}
  	},
  	methods: {
        showInfo(){
            console.log("AddBook components");
        },
  		submitClick(){
  			this.$storageHelper.insertBookList({
                bookName:this.bookName,
                desc:this.desc,
                page:this.page,
                author:this.author,
                note:this.note,
                src:this.src,
                readPage:this.readPage
            });
  			this.$router.back()
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-book{
	text-align: center;
}
.submit{
	margin-top: 20px;
    display: inline-block;
    width: 90%;
}
</style>
