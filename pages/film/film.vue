<template>
	<view>
	        <uni-search-bar placeholder="搜索" radius="30" @confirm="getfilm(input)" @input="valuechange"></uni-search-bar>
			<view style="background-color: #eee;height: 10rpx;"></view>
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
				film: [],
				input: ''
			}
		},
		methods: {
			getfilm(s) {
				uni.request({
					url: "http://localhost:8080/film/search",
					data: {
						will: 2,
						s: this.input
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
			},
			valuechange(value) {
				this.input = value.value
			}
		}, 
		components: { filmlist },
		created() {
			this.getallfilm()
		}
	}
</script>

<style>

</style>
