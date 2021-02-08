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
			}
		},
		methods: {
			myaccount() {
				uni.navigateTo({
					url: "/pages/personalcenter/myaccount"
				})
			},
			ticket() {
				uni.navigateTo({
					url: "/pages/personalcenter/ticket"
				})
			},
			setting() {
				uni.navigateTo({
					url: "/pages/personalcenter/setting"
				})
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
			}
		},
		created() {
			const value = uni.getStorageSync('isLogin')
			if(value === true)
			{
				this.isLogin = uni.getStorageSync('isLogin')
				this.username = uni.getStorageSync('username')
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
