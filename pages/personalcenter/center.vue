<template>
	<view>
		
		
		<!-- 账号行 -->
		<view style="height: 300rpx;" class="account-bar" @click="isLogin? myaccount():login()">
			<view style="padding-top: 70rpx;padding-left: 100rpx;width: 150rpx">
				<image class="picture" style="width: 150rpx;height: 150rpx;" src="http://localhost:8080/image/black.jpg"></image>
			</view>
			<view style="padding-top: 100rpx;padding-left: 50rpx;width: 300rpx" v-show="!isLogin">
				<text class="account-name">Hi，请登录</text>
			</view>
			<view style="padding-top: 70rpx;padding-left: 50rpx;width: 300rpx" v-show="isLogin">
				<text class="account-name">{{username}}</text>
				<text>\n\n额外信息</text>
			</view>
			<view style="width: auto">
				<image src="../../static/right.png" style="width: 50rpx;height: 50rpx;padding-top: 120rpx;padding-left: 80rpx;"></image>
			</view>
		</view>
		
		<view style="background-color: #eee;height: 50rpx;"></view>
		
		<view class="about-us" @click="scancode">
			<view>
				<image src="../../static/扫码 (1).png" style="width: 50rpx;height: 50rpx;padding-left: 30rpx;padding-top: 30rpx;padding-bottom: 20rpx;"></image>
			</view>
			<view style="padding-top: 30rpx;padding-left: 20rpx;padding-bottom: 20rpx;width: 200rpx;">
				<text >扫码购票</text>
			</view>
			<view style="width: auto">
				<image src="../../static/right.png" style="width: 50rpx;height: 50rpx;padding-top: 30rpx;padding-left: 380rpx;"></image>
			</view>
		</view>
		
		<view style="background-color: #eee;height: 10rpx;"></view>
		
		<!-- 电影票行 -->
		<view class="ticket" @click="ticket">
			<view>
				<image src="../../static/ticket.png" style="width: 50rpx;height: 50rpx;padding-left: 30rpx;padding-top: 30rpx;padding-bottom: 20rpx;"></image>
			</view>
			<view style="padding-top: 30rpx;padding-left: 20rpx;padding-bottom: 20rpx;width: 200rpx;">
				<text >我的电影票</text>
			</view>
			<view style="width: auto">
				<image src="../../static/right.png" style="width: 50rpx;height: 50rpx;padding-top: 30rpx;padding-left: 380rpx;"></image>
			</view>
		</view>
		
		<view style="background-color: #eee;height: 10rpx;"></view>
		
		
		
		<!-- 设置行 -->
		<view class="setting" @click="setting">
			<view>
				<image src="../../static/setting (2).png" style="width: 50rpx;height: 50rpx;padding-left: 30rpx;padding-top: 30rpx;padding-bottom: 20rpx;"></image>
			</view>
			<view style="padding-top: 30rpx;padding-left: 20rpx;padding-bottom: 20rpx;width: 200rpx;">
				<text >设置</text>
			</view>
			<view style="width: auto">
				<image src="../../static/right.png" style="width: 50rpx;height: 50rpx;padding-top: 30rpx;padding-left: 380rpx;"></image>
			</view>
		</view>
		
		<view style="background-color: #eee;height: 10rpx;"></view>
		
		
		
		<!-- 关于我们行 -->
		<view class="about-us" @click="aboutus">
			<view>
				<image src="../../static/aboutus.png" style="width: 50rpx;height: 50rpx;padding-left: 30rpx;padding-top: 30rpx;padding-bottom: 20rpx;"></image>
			</view>
			<view style="padding-top: 30rpx;padding-left: 20rpx;padding-bottom: 20rpx;width: 200rpx;">
				<text >关于我们</text>
			</view>
			<view style="width: auto">
				<image src="../../static/right.png" style="width: 50rpx;height: 50rpx;padding-top: 30rpx;padding-left: 380rpx;"></image>
			</view>
		</view>
		
		<view style="background-color: #eee;height: 10rpx;"></view>
		
		
		<!-- 注销 -->
		<view class="logout" @click="logout">
			<view>
				<image src="../../static/注销.png" style="width: 40rpx;height: 40rpx;padding-left: 30rpx;padding-top: 35rpx;padding-bottom: 20rpx;"></image>
			</view>
			<view style="padding-top: 30rpx;padding-left: 20rpx;padding-bottom: 20rpx;width: 200rpx;">
				<text >注销</text>
			</view>
			<view style="width: auto">
				<image src="../../static/right.png" style="width: 50rpx;height: 50rpx;padding-top: 30rpx;padding-left: 390rpx;"></image>
			</view>
		</view>
		
		<view style="background-color: #eee;height: 10rpx;"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				username: '',
				userdata: ''
			}
		},
		methods: {
			myaccount() {
				uni.navigateTo({
					url: "/pages/personalcenter/myaccount"
				})
			},
			ticket() {
				if(uni.getStorageSync('isLogin')===true)
				{
					uni.navigateTo({
						url: "/pages/personalcenter/ticket"
					})
				}else {
					uni.redirectTo({
						url: "/pages/personalcenter/login"
					})
				}
				
			},
			setting() {
				if(uni.getStorageSync('isLogin')===true)
				{
					uni.navigateTo({
						url: "/pages/personalcenter/setting"
					})
				}else {
					uni.redirectTo({
						url: "/pages/personalcenter/login"
					})
				}
				
			},
			aboutus() {
				uni.navigateTo({
					url: "/pages/personalcenter/aboutus"
				})
			},
			login() {
				uni.redirectTo({
					url: "/pages/personalcenter/login"
				})
			},
			logout() {
				this.isLogin = false
				uni.removeStorageSync('isLogin')
				uni.removeStorageSync('username')
				uni.removeStorageSync('password')
				uni.removeStorageSync('userdata')
			},
			scancode() {
				uni.scanCode({
					success:  (res) => {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						// c处理二维码内容
						var account_id=res.result.split('/')[0]
						var film_id=res.result.split('/')[1]
						var ticket_num=res.result.split('/')[2]
						var time=res.result.split('/')[3]
						// 安全性判断
						if(this.userdata.account_id-account_id===0)
						{
							uni.request({
								url: 'http://localhost:8080/ticket/check',
								data:{
									account_id,
									film_id
								},
								success: res=>{
									if(res.data===true)
									{
										// 更新操作
										uni.request({
											url: "http://localhost:8080/ticket/changenum",
											data: {
												account_id,
												film_id,
												num: ticket_num
											},
											success: res=>{
												console.log(res.data)
												uni.request({
													url: "http://localhost:8080/purchase/dellist",
													data: {
														accountid: account_id
													},
													success: res=>{
														console.log(res.data)
													}
												})
											}
										})
									}
									else
									{
										// 增加电影票操作
										uni.request({
											url: "http://localhost:8080/ticket/insert",
											data: {
												account_id,
												film_id,
												ticket_num
											},
											success: res =>{
												console.log(res.data)
												uni.request({
													url: "http://localhost:8080/purchase/dellist",
													data: {
														accountid: account_id
													},
													success: res=>{
														console.log(res.data)
													}
												})
											}
										})
									}
								}
							})
						}else
						{
							uni.showToast({
								title: "网页端登录账号与移动端账号不符",
								icon: 'none'
							})
						}
					},
					fail: (res) => {
						console.log(res)
					}
				})
			}
		},
		created() {
			const value = uni.getStorageSync('isLogin')
			if(value === true)
			{
				this.isLogin = uni.getStorageSync('isLogin')
				this.username = uni.getStorageSync('username')
				this.userdata = uni.getStorageSync('userdata')
			}
		}
	}
</script>

<style>
	.account-bar {
		display: flex;
	}
	.account-name {
		font-size: x-large;
	}
	.ticket {
		display: flex;
		font-size:large;
	}
	.setting {
		display: flex;
		font-size:large;
	}
	.about-us {
		display: flex;
		font-size:large;
	}
	.picture {
		border-radius: 40px;
	}
	.logout {
		display: flex;
		font-size:large;
	}
</style>
