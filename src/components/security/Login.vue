<template>
	<view-box class="login">

		<img src="~@/assets/logo1.png">
		<group class="form">
	      	<x-input label-width="80px"  v-model="userName" placeholder="请输入用户名" placeholder-align="center"></x-input>
	      	<x-input label-width="80px"   type="password" v-model="password" placeholder="请输入密码" placeholder-align="center"></x-input>
	      	<x-input label-width="80px" style="display:none"></x-input>
	     
	    </group>
	    <div class="remember-container">
    		<check-icon class="remember" :value.sync="remember">记住我</check-icon>
    	</div>
        <x-button  class="custom-primary-red" @click.native="loginClick">登录</x-button>
	</view-box>
</template>

<script>
import { XInput, Group,ToastPlugin,CheckIcon} from 'vux'

export default {
	name: 'Login',
	components: {
		XInput,
		Group,
		CheckIcon
	},
	data(){
		return{
			remember:true,
			userName:"eric",
			password:"3951"
		}
	},
	methods:{
		loginClick(){
			if(this.userName =="eric" && this.password == "3951"){
				this.$router.replace({ name: 'home'});
				if(this.remember)
					this.$storageHelper.initData();
				else
					this.$storageHelper.clearUserData();
			}else{
				this.$vux.toast.text('用户名或密码错误')
			}
			
		}
	},
	created: function () {
		if(localStorage.userName && localStorage.password){
			this.userName = localStorage.userName
			this.password = localStorage.password
		}
		
  	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.login{
	text-align: center;
	background-color: #377eb4;
	img{
		border-radius: 15px;
		margin-top: 120px;
		width:100px;
	}
	.form{
		.weui-cells.vux-no-group-title{
		    border-radius: 20px;
		    padding: 8px;
		}
		padding: 50px;
	}
}

.custom-primary-red{
	display:inline-block !important;
	marin: 0 auto !important;
	width:73% !important;
	border-radius: 15px !important;
	background-color: #84c0ef!important;
	color:white !important;
}
.remember-container{
	margin-top:-25px;
	margin-bottom:50px;
	color:white !important;
	.remember{

	}
}

.vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before {
    color: #84c0ef !important;
}

.vux-check-icon > span {
    color: white !important;
}
</style>
