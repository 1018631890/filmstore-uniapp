<template>
    <view class="uni-comment-body">
		<view class="uni-no-comment" :style="'display: '+(list.length?'none':'block')">快来评论吧</view>
		<!-- 评论区 start -->
		<view class="uni-comment">
			<view class="uni-comment-list" v-for="(item,index) in list" :key="item.id" @click="clickComment(item.id)">
				<view class="uni-comment-face" @click.stop="clickUser(item.userId)">
					<image :src="item.avatar" mode="widthFix"></image>
				</view>
				<view class="uni-comment-body">
					<view class="uni-comment-top"  @click.stop="clickUser(item.userId)">
						<text>{{item.name}}</text>
					</view>
					<view class="uni-comment-date">
						<text>{{timestampFormat(item.time)}}</text>
					</view>
					<view class="uni-reply-comment-content" :style="'display: '+(item.pName && item.pContent?'block':'none')">@{{item.pName}}：{{item.pContent}}</view>
					<view class="uni-comment-content">{{item.content}}</view>
						<view class="uni-comment-replay-btn">{{item.replyNumber?item.replyNumber:''}}回复</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
    export default {
		props: {
			list:{
				type:Array
			}
		},
        data() {
            return {
				
            }
        },
		methods:{
			clickComment(id){
				this.$emit('clickComment',id);
			},
			clickUser(userId){
				this.$emit('clickUser',userId);
			},
			
			
			timestampFormat( timestamp ) {
				if(!timestamp) return '';
				function zeroize( num ) {
					return (String(num).length == 1 ? '0' : '') + num;
				}
			
				var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
				var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
			
				var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
				var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象
			
				var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
				var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
			
				if ( timestampDiff < 60 ) { // 一分钟以内
					return "刚刚";
				} else if( timestampDiff < 3600 ) { // 一小时前之内
					return Math.floor( timestampDiff / 60 ) + "分钟前";
				} else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
					return '今天' + zeroize(H) + ':' + zeroize(i);
				} else {
					var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
					if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
						return '昨天' + zeroize(H) + ':' + zeroize(i);
					} else if ( curDate.getFullYear() == Y ) {
						return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
					} else {
						return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
					}
				}
			}
		}
    }
</script>

<style>
    /* comment */
	.uni-comment-body{
		background-color: white;
		font-size: 28upx;
	}
	.uni-no-comment{
		text-align: center;
		height: 200upx;
		padding-top: 100upx;
		color: gray;
	}
    view {
        font-size: 28upx;
    }

    .uni-comment {
        padding: 5rpx 0;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }

    .uni-comment-list {
        flex-wrap: nowrap;
        padding: 10rpx 0;
        margin: 10rpx 0;
        width: 100%;
        display: flex;
    }

    .uni-comment-face {
        width: 70upx;
        height: 70upx;
        border-radius: 100%;
        margin-right: 20upx;
        flex-shrink: 0;
        overflow: hidden;
    }

    .uni-comment-face image {
        width: 100%;
        border-radius: 100%;
    }

    .uni-comment-body {
        width: 100%;
    }

    .uni-comment-top {
        line-height: 1.5em;
        justify-content: space-between;
    }

    .uni-comment-top text {
        color: #000000;
        font-size: 28upx;
    }

    .uni-comment-date {
        line-height: 24upx;
        flex-direction: row;
        justify-content: space-between;
        display: flex !important;
        flex-grow: 1;
    }
    .uni-comment-date text {
        color: gray;
        font-size: 24upx;
        line-height: 24upx;
    }

    .uni-comment-content {
        line-height: 1.6em;
        font-size: 30upx;
        padding: 10rpx 0;
    }
	.uni-reply-comment-content{
		line-height: 1.6em;
		font-size: 30upx;
		padding: 5upx 10upx;
		margin: 10upx 0;
		background-color: #d1d1d147;
		border-radius: 5upx;
	}
    .uni-comment-replay-btn {
        background: #FFF;
        font-size: 24upx;
        line-height: 30upx;
        padding: 5rpx 20upx;
        border-radius: 30upx;
        color: #333 !important;
        margin: 0 10upx;
		margin-left: 0;
		padding: 8upx 16upx;
		background-color: #d1d1d147;
		display: inline-block;
		color: black;
    }
</style>
