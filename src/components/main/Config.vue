<template>
	<div ref="config" class="config">
		<x-button class="btn" type="warn" @click.native.self="deleteDataClick()" >重置书籍列表</x-button>
		<x-button class="btn" type="warn" @click.native.self="clearDataClick()" >清空书籍列表</x-button>
	</div>
</template>

<script>

export default {
	name: 'Config',
	data(){
		return{}
	},
	components: {
  	},
  	methods: {
  		showInfo(){
  		  	console.log("Config components");
  		},
	    deleteDataClick() {
	    	this.$storageHelper.initData(true);
	    },
	    clearDataClick(){
	    	this.$storageHelper.clearData(true);
	    }
  	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.config{
	text-align: center;
}
.btn{
	margin-top: 20px;
    display: inline-block;
    width: 90%;
}
</style>
