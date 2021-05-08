<template>
	<view>
		<view v-for="item in news" @click="poptext(item.news_text)">
			<view class="title" style="margin-left: 80rpx;margin-top: 30rpx;">
				{{item.news_title}}
			</view>
			<view class="time" style="margin-left: 80rpx;margin-top: 20rpx;">
				{{item.news_time}}
			</view>
			<view style="background-color: #000000;height: 1rpx;margin-top: 20rpx;"></view>
		</view>
		<wyb-popup ref="popup" type="center" height="500" width="700" radius="6" :showCloseIcon="true">
			<view class="popup-content" style="margin-top: 100rpx;margin-left: 10rpx;margin-right: 20rpx;">
				<text>{{text}}</text>
			</view>
		</wyb-popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	export default{
		components: { wybPopup },
		data () {
			return {
				news: [],
				text: ''
			}
		},
		created() {
			uni.request({
				url:"http://localhost:8080/news/getall",
				success: res=>{
					console.log(res.data)
					this.news = res.data
				}
			})
		},
		methods: {
			poptext(data)
			{
				// 显示this.$refs.popup.show()
				// 隐藏this.$refs.popup.hide() 
				this.text = data
				this.$refs.popup.show()
			}
		}
	}
</script>

<style>
	.title{
		font-size: larger;
	}
	.time{
		font-size: small;
		color: #808080;
	}
</style>
