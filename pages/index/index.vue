<template>
	<view>
		
		<!-- 首页轮播图 -->
		<view>
			<swiper indicator-dots circular indicator-color="#eee" indicator-active-color="#ffff7f" style="height: 400rpx;">
				<swiper-item>
					<image src="../../static/black.jpg" style="width: 750rpx;height: 400rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/black.jpg" style="width: 750rpx;height: 400rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/black.jpg" style="width: 750rpx;height: 400rpx;"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 推荐电影的标签 -->
		<view style="background-color: #eee;height: 10rpx;">
		</view>
		<view class="title" style="margin-top: 20rpx;background-color: #fff;margin-bottom: 20rpx;">
			<text style="color: #DD524D;">推荐电影</text>
		</view>
		<view style="background-color: #eee;height: 10rpx;">
		</view>
		
		
		<!-- 推荐电影5个从后端获取 -->
		<filmlist :data="data"></filmlist>
		
	</view>
</template>

<script>
	import filmlist from '../../components/filmlist.vue'
	export default {
		data() {
			return {
				data: []
			}
		},
		onLoad() {

		},
		methods: {
			getfilm () {
				uni.request({
					url: "http://localhost:8080/film/getbywill/",
					data: {
						will: 0
					},
					success: (res) => {
						console.log(res)
						this.data = res.data
					}
				})
			}
		},
		created() {
			this.getfilm()
		},
		components: { filmlist }
	}
</script>

<style>
	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		letter-spacing: 10px;
	}
</style>
