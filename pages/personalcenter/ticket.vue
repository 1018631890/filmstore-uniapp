<template>
	<view>
		<uni-card 
		    :title="item.film_name" 
		    mode="title" 
		    :is-shadow="true" 
		    thumbnail="../../static/票据.png" 
		    extra="3DMAX电影" 
		    note="Tips"
			v-for="(item,index) in ticket"
			:key="index"
		>
		    影院xxx</br>
			时间 	xx：xx- xx：xx</br>
			座位号（xx，xx）
			<template v-slot:footer>
				<view class="footer-box">
					<button class="btn" type="warn" @click="use(index)">{{item.ticket_state}}</button>
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
			},
			use(index)
			{
				console.log(this.ticket[index].ticket_state)
				if(this.ticket[index].ticket_state==="未使用")
				{
					console.log("执行2")
					uni.request({
						url:"http://localhost:8080/ticket/changestate",
						data: {
							account_id: this.ticket[index].account_id,
							film_id: this.ticket[index].film_id,
							state: '已使用'
						},
						success: res=>{
							console.log(res)
							uni.showToast({
								title: "电影票使用成功",
								icon: null
							}) 
							this.getticket()
						}
					})
				}
				if(this.ticket[index].ticket_state==="已使用")
				{
					uni.showToast({
						title: "电影票已使用过",
						icon: null
					}) 
				}
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
		margin-left: 500rpx;
		width: 140rpx;
		border-radius: 25px;
		font-size: small;
	}
</style>
