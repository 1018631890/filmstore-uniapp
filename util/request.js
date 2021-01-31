const base_url="http://localhost:8080"
export const myrequest = (options) =>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: base_url + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				if(res.data.status !== 0) {
					return uni.showToast({
						title: "数据获取失败"
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: "数据请求失败"
				})
				reject(err)
			}

		})
	})
}