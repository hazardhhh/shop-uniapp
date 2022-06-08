// 全局请求封装
export default (url, method, params) => {

	// 从本地读取token(小程序或者app是没有Cookie的，只能把token写入到本机)
	const token = uni.getStorageSync('token');

	// 提示加载中
	uni.showLoading({
		title: "加载中"
	});
	// 判断是否有token
	// if (!token) {
	// 	// 执行没有登录的逻辑
	// 	return;
	// }

	// Promise是es6的一个内置对象
	return new Promise((resolve, reject) => {
		wx.request({
			// url: "http://www.shop.com:80" + url, // 请求地址 baseUrl+url
			url: "http://localhost:80" + url, // 请求地址 baseUrl+url
			method: method, // 请求方式
			header: {
				token // 把token添加到请求头
			},
			data: params,
			success(res) { // 请求成功的回调
				if (res.data.code == 503) {
					uni.showToast({
						title: "登录已过期 请重新登录",
						icon:"none",
						duration:3000,
						success(){
							// 如果服务端返回的code是503说token过期了，需要前端跳转到登录页面
							uni.navigateTo({
								url:"/pages/login/login"
							})
						}
					});
					
				}else{
					resolve(res.data);
				}
			},
			fail(err) { // 请求失败的函数
				reject(err);
			},
			complete() { // 请求完成调用
				uni.hideLoading();
			}
		});
	});
};
