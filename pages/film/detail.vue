<template>
	<view>
		<!-- 电影信息 -->
		<view class="film" style="background-color: #333333;">
			<view class="film-pic" style="padding-top: 5rpx;">
				<image :src="filminfo.film_pic" style="width: 250rpx;height: 400rpx;"></image>
			</view>
			<view style="margin-left: 20rpx;margin-top: 30rpx;width: 390rpx;" class="film-text">
				<text class="film-name">{{filminfo.film_name}}\n\n</text>
				<text class="film-timelong">132分钟\n\n</text>
				<text class="film-type">友情，动漫\n\n</text>
				<text class="film-time">{{filminfo.film_time}}上映</text>
			</view>
		</view>
		
		<!-- 简介 -->
		<view style="background-color: #333333;margin-top: 5rpx;">
			<view style="padding-top: 10rpx;padding-left: 10rpx;padding-right: 10rpx;padding-bottom: 10rpx;">
				<text class="abstract">简介\n</text>
				<text class="abstract-text">{{filminfo.film_abstract}}</text>
			</view>
		</view>
		
		<!-- 选择框 -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" textFlex="true" selectClass="text-gray"></wuc-tab>
		
		<!-- 购票部分 -->
		<view v-show="TabCur===0">
			
			<!-- 扫码入口 -->
			<view style="background-color: #eee;font-size: large;padding-top: 20rpx;padding-left: 20rpx;padding-bottom: 20rpx;">
				扫码购票入口
			</view>
			
			<!-- v-for循环卡片 -->
			<view class="film-ticket" style="background-color: #4d4d4d;padding-top: 20rpx;padding-left: 50rpx;margin-left: 20rpx;margin-right: 20rpx;padding-bottom: 20rpx;margin-top: 10rpx;">
				<text>影院A\n\n</text>
				<text>2021.04.05\n\n</text>
				<text>3:30pm\n</text>
				<view>
					<text>free</text>
					<button plain type="primary" size="mini" style="margin-left: 450rpx;">购买</button>
				</view>
			</view>
		</view>
		
		<!-- 评论部分 -->
		<view v-show="TabCur===1">
			<!-- v-for循环的评论列表 -->
			<view style="margin-left: 50rpx;margin-right: 50rpx;margin-top: 20rpx;" v-for="(item,index) in comment" :key="item.account_id">
				<text class="name-text">{{item.account_name}}</text>
				<view class="comment-text" style="margin-left: 20rpx;margin-top: 5rpx;background-color: #eee;">
					<unirate v-model="comment[index].halfmark" @change="RateonChange"/>
					<text style="margin-top: 10rpx;">{{item.comment}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import unirate from '@/components/uni-rate/uni-rate.vue'; 
	export default {
		components:{
			WucTab,unirate
		},
		data()
		{
			return {
				TabCur: 0,
				tabList: [{ name: '购票影票' }, { name: '查看评论' }],
				filminfo: [],
				value: 3,
				comment: []
			}
		},
		methods: {
			onLoad: function(option)
			{
				console.log(option.name);
				uni.request({
					url: "http://localhost:8080/film/getbyname/",
					data: {
						name: option.name
					},
					success: (res) => {
						console.log(res)
						this.filminfo = res.data
					}
				})
				uni.request({
					url: "http://localhost:8080/comment/getbyfilm",
					data:{
						film_id: option.id
					},
					success: (res) => {
						console.log(res)
						this.comment = res.data
					}
				})
			},
			tabChange(index) {
				this.TabCur = index;
			},
			RateonChange(e) {
				console.log('rate发生改变:' + JSON.stringify(e))
			}
		}
	}
</script>

<style>
	.film {
		display: flex;
	}
	.film-text {
		color: #FFFFFF;
	}
	.abstract {
		color: #66CDAA;
		font-size: larger;
	}
	.abstract-text {
		color: #FFFFFF;
		font-size: small;
	}
	.name-text {
		font-size: larger;
	}
	.comment-text {
		font-size: medium;
	}
	.film-ticket {
		border-radius: 20rpx;
		color: #FFFFFF;
	}
</style>
