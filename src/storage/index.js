import Vue from 'vue'
const BOOK_DATA = [
{_id:0,"bookName":"疯狂Ajax 讲义","desc":"Ajax 知识填充","src":"../static/book/fkajax.png","author":"李刚","note":"",page:"330",readPage:"300"},
{_id:1,"bookName":"H5 从入门到精通","desc":"H5 入门书籍","src":"../static/book/h5rmdjt.png","author":"黄登桥","note":"",page:"700",readPage:"200"},
{_id:2,"bookName":"Extjs权威指南","desc":"Ext 入门书籍","src":"../static/book/extqwzn.png","author":"黄登桥","note":"",page:"340",readPage:"123"},
{_id:3,"bookName":"疯狂xml讲义","desc":"xml 书籍","src":"../static/book/fkxml.png","author":"李刚","note":"",page:"660",readPage:"201"},
{_id:4,"bookName":"Js权威指南","desc":"js 入门进阶","src":"../static/book/jsqwzn.png","author":"黄登桥","note":"",page:"740",readPage:"12"},
{_id:5,"bookName":"Ajax 实战","desc":"ajax 入门","src":"../static/book/ajaxsz.png","author":"黄登桥","note":"",page:"530",readPage:"520"}];

const storageHelper = new Object({
	initStorageHelper:function(store){
		this.store = store;
		this.initData();
	},
	initData:function(type){
		if(!this.getItem('firstInit')|| type){
			this.setItem('bookList',BOOK_DATA);
			this.setItem('firstInit',true);
		}

		if(type){
			this.store.commit("updataBookList");
		}
	},
	clearData:function(){
		this.setItem('bookList',[]);
		this.store.commit("updataBookList");
	},
	clearUserData:function(){
		localStorage.removeItem('userName');
		localStorage.removeItem('password');
	},
	setItem:function(key,item){
		localStorage.setItem(key,JSON.stringify(item));
	},
	getItem:function(key){
		let item = localStorage.getItem(key);
		if(item){
			return JSON.parse(item);
		}else{
			return null;
		}
	},
	getBookIndex:function(){
		return this.getItem('bookList');
	},
	insertBookList:function(item){
		if(!item){
			item ={
				"title":"new",
				"desc":"new",
				"src":"../static/book/holder.png"
			}
		}
		let currentList = this.getBookIndex();
		if(!item.src )
			item.src = "../static/book/holder.png"
		item._id = currentList.length;
		currentList.push(item);
		this.setItem("bookList",currentList);
		this.store.commit("updataBookList");
		console.log(this.getBookIndex());

	},
	deleteBookList:function(item){
		let currentList = this.getBookIndex();
		if(!item._id && item._id != 0) return;
		
		let index = currentList.findIndex((v) => {
		    return v._id == item._id;
		});

		if (index > -1) {
	    	currentList.splice(index, 1);
		}

		this.setItem("bookList",currentList);
		this.store.commit("updataBookList");
		console.log(this.getBookIndex());

	}
})

if(window) window.storageHelper = storageHelper;

export default storageHelper;
