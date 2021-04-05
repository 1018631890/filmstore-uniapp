<template>
	<view>
		<view class="film" v-for="item in data" :key="item.film_id">
			<view class="film-info" @click="Todetail(item)">
				<view class="film-pic">
					<image :src="item.film_pic" style="width: 250rpx;height: 400rpx;"></image>
				</view>
				<view style="margin-left: 20rpx;margin-top: 30rpx;width: 390rpx;" class="film-text">
					<text class="film-name">{{item.film_name}}\n\n</text>
					<text class="film-timelong">132分钟\n\n</text>
					<text class="film-type">友情，动漫\n\n</text>
					<text class="film-time">{{item.film_time}}上映</text>
				</view>
				<view style="margin-top: 35rpx;width: 110rpx;">
					<text style="color: #DD524D;margin-left: 20rpx;">{{item.film_evaluate}}分\n\n</text>
				</view>
			</view>
			<view style="background-color: #eee;height: 10rpx;">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['data'],
		methods: {
			Todetail(data)
			{
				uni.navigateTo({
					url: "/pages/film/detail?name="+data.film_name+"&id="+data.film_id
				})
			}
		}
	}
</script>

<style>
	.film-info {
		display: flex;
	}
	.film-name {
		font-size:larger;
		font-weight: 1000;
	}
	.film-time.film-timelong.film-type {
		font-size: smaller;
		font-weight: 100;
	}
</style>
