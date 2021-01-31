<template>
	<view>
	        <view class="content1" style="background-color: #eee;"></view>
	        <view class="search-block">
	            <view class="search-ico-wapper">
	                <image src="" class="search-ico" mode=""></image>
	            </view>
	            <input type="text" value="" placeholder="点击输入搜索内容" class="search-text" maxlength="10" focus/>
	            <view class="search-ico-wapper1">
	                <image src="../../static/search (2).png" class="search-ico-1" mode=""></image>
	            </view>
	        </view>
	        <view class="shadow">
	
	        </view>
			<view>
				<filmlist :data="film"></filmlist>
			</view>
	</view>
</template>

<script>
	import filmlist from '../../components/filmlist.vue'
	export default {
		data() {
			return {
				film: []
			}
		},
		methods: {
			getfilm(n) {
				uni.request({
					url: "http://localhost:8080/film/getbywill/",
					data: {
						will: n
					},
					success: (res) => {
						console.log(res)
						this.film = res.data
					}
				})
			},
			getallfilm() {
				uni.request({
					url: "http://localhost:8080/film/getall/",
					success: (res) => {
						console.log(res)
						this.film = res.data
					}
				})
			}
		},
		components: { filmlist },
		created() {
			this.getallfilm()
		}
	}
</script>

<style>
	.content1{
	    height: 150upx;
	}
	
	page{
	    background-color: #FFFFFF;
	}
	/* 搜索框 */
	.search-ico, .search-ico-1{
	    width: 40upx;
	    height: 40upx;
	}
	.search-text{
	    font-size: 14px;
	    background-color: #FFFFFF;
	    height: 60upx;
	    width: 480upx;
	}
	.search-block{
	    display: flex;
	    flex-direction: row;
	    padding-left: 60upx;
	    position: relative;
	    top: -32upx;
	}
	.search-ico-wapper{
	    background-color: #FFFFFF;
	    display: flex;
	    flex-direction:column;
	    justify-content: center;
	    padding: 0upx 0upx 0upx 40upx;
	    border-bottom-left-radius:18px;
	    border-top-left-radius: 18px;
	}
	.search-ico-wapper1{
	    background-color: #FFFFFF;
	    display: flex;
	    flex-direction:column;
	    justify-content: center;
	    padding: 0upx 40upx 0upx 0upx;
	    border-bottom-right-radius:18px;
	    border-top-right-radius: 18px;
	}
	.shadow{
	    width: 638upx;
	    height: 60upx;
	    border-radius:18px;
	    -moz-box-shadow:0 0 10px #e6e6e6;
	    -webkit-box-shadow:0 0 10px #e6e6e6;
	    box-shadow:0 0 10px #e6e6e6;
	    position: relative;
	    top: -90upx;
	    left: 60upx;
	}
</style>
