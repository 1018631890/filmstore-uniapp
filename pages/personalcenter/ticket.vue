<template>
	<view>
		<uni-card 
		    :title="item.film_name" 
		    mode="title" 
		    :is-shadow="true" 
		    thumbnail="../../static/票据.png" 
		    extra="3DMAX电影" 
		    note="Tips"
			v-for="item in ticket"
		>
		    影院A</br>
			上午场	10：00-12：00</br>
			座位号（4，6）
			<template v-slot:footer>
			        <view class="footer-box">
			            <button class="btn" type="warn">使用</button>
			        </view>
			    </template>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				ticket: []
			}
		},
		methods: {
			getticket() {
				var accountid = uni.getStorageSync('userdata').account_id
				console.log(accountid)
				uni.request({
					url:"http://localhost:8080/ticket/getbyaccount/",
					data: {
						id: accountid
					},
					success: res=>{
						console.log(res)
						this.ticket = res.data
					}
				})
			}
		},
		created() {
			this.getticket()
		}
	}
</script>

<style>
	.ticket {
		
	}
	.btn {
		display: flex;
		margin-left: 520rpx;
		width: 130rpx;
		border-radius: 25px;
		font-size: medium;
	}
</style>
