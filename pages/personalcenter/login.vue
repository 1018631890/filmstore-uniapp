<template>
    <view class="content">
        <!-- <image class="logo" src="../../static/logo.png"></image> -->
        <view class="titletal">
            <text class="title">{{ title }}</text>
        </view>
        <from name="from1">
            <!--账号-->
            <view class="inputView">
                <image class="nameImage" src="../../static/name.png"></image>
                <label class="loginLab">账号</label>
                <input
                    class="inputText"
                    type="text"
                    placeholder="请输入账号"
                    value="user"
                    v-model="uname"
                />
            </view>
        </from>
        <view class="line"></view>
        <!--密码-->
        <view class="inputView">
            <image class="keyImage" src="../../static/key.png"></image>
            <label class="loginLab">密码</label>
            <input
                class="inputText"
                password="true"
                type="text"
                placeholder="请输入密码"
                value="pass"
                v-model="passw"
            />
        </view>
        <!-- 记住密码 -->
        <view class=" mui-input-row mui-checkbox ">
            <!-- <input id="chkRem" type="checkbox" checked="checked" class="RememberCheck"  @change="checkboxChange" /> -->
            <checkbox-group @change="checkboxChange">
                <checkbox
                    id="chkRem"
                    type="checkbox"
                    :checked="rememberPsw"
                    @tap="rememberPsw = !rememberPsw"
                    class="RememberCheck"
                >
                    记住密码
                </checkbox>
                <!-- <lable for="chkRem" class="RememberPass">记住密码</lable> -->
            </checkbox-group>
        </view>

        <!--按钮-->
        <view class="loginBtnView"><button class="loginBtn" @click="lands()">登录</button></view>

 <!--背景图-->      

<!--  <image class="backlogo" src="../../static/BGNew.png"></image>-->
    </view>
</template>

<script>
	export default {
		data () {
			return {
				uname: '',
				passw: '',
				rememberPsw: false
			}
		},
		methods: {
			checkboxChange: function(e) {
			        
				console.log(e.detail.value.length);
				if (e.detail.value.length == 1) {

					//获取缓存的账号
					 uni.getStorageSync('username',this.uname);
					 uni.getStorageSync('password',this.passw);
				} else {
					  uni.removeStorageSync('username');
					  uni.removeStorageSync('password');              
				}
			},
			lands(){
				if (this.uname.length <= 0 || this.passw.length <= 0) {
					uni.showToast({
						title: '账号或密码不能为空',
						icon: 'none'
					});
					return;
				}else {
					uni.request({
						url: "http://localhost:8080/account/getbyname/",
						data: {
							name: this.uname
						},
						success: res =>{
							// console.log(res)
							if(res.data.account_password === this.passw)
							{
								uni.setStorageSync('username',this.uname)
								uni.setStorageSync('password',this.passw)
								uni.setStorageSync('isLogin',true)
								uni.setStorageSync('userdata',res.data)
								uni.switchTab({
									url: "/pages/personalcenter/center"
								})
							}else {
								uni.showToast({
									title: '账号密码错误，请重新输入',
									icon: 'none'
								});
							}
						}
					})
				}
			}
		},
		mounted() {
			let that = this;
			
			//缓存的账号
			const HCuname = uni.getStorageSync('username');
			//缓存的密码
			const HCpassw = uni.getStorageSync('password');

			//有缓存就赋值给文本没有就清空
			if (HCuname && HCpassw) {
				that.uname = HCuname;
				that.passw = HCpassw;
			} else {
				that.uname = '';
				that.passw = '';
			}
		}
	}
</script>

<style>
.mui-checkbox input[type='checkbox']:checked:before {
    color: #00bbb1;
}
.RememberPass {
    color: #adadad;

    margin-top: 5px;
}
.RememberCheck {
    margin-left: -50%;
    margin-top: 10px;
    color: #adadad;
}
.content {
    text-align: center;
    height: 400upx;
}
.backlogo {
    padding-bottom: 0px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.logo {
    height: 200upx;
    width: 200upx;
    margin-top: 200upx;
}
.titletal {
    margin-top: 90upx;
    height: 75px;
}
.title {
    /* font-size: 36upx; */
    color: mediumaquamarine;
    font-size: 150%;
}

.text {
    border: 1, solid, black;
}

.login-from {
    /* margin-top: 30%; */

    flex: auto;
    height: 100%;
    width: 100%;
}

.inputView {
    background-color: #fff;
    line-height: 50px;
    border-width: 1px;
    border-bottom: 2dp;
}

/*输入框*/
.nameImage,
.keyImage {
    margin-left: 22px;
    width: 18px;
    height: 18px;
}

.loginLab {
    margin: 15px 15px 15px 10px;
    color: #545454;
    font-size: 18px;
}

.inputText {
    flex: block;
    float: right;
    text-align: left;
    margin-right: 22px;
    margin-top: 15px;
    color: #000000;
    font-size: 18px;
}

.line {
    width: 100%;
    height: 1px;
    background-color: #cccccc;
    margin-top: 1px;
}

/*按钮*/
.loginBtnView {
    width: 100%;
    height: auto;
    /* background-color:#FFFFFF; */
    margin-top: 20px;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

.loginBtn {
    width: 80%;
    margin-top: 50px;
    background-color: mediumaquamarine;
    color: aliceblue;
}
</style>
