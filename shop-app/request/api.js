// 把小程序中所有的请求都放在这里

import request from "./request.js"


export default {

	// 定义要给函数，这个函数获取首页的推荐的图片
	getCurrentDayRecommend() {
		return request("/home/recommend/getCurrentDayRecommend", "GET", "")
	},

	homeGetCategoryList() {
		return request("/home/category/list", "GET", "")
	},
	homeGetProductData(num) {
		return request("/home/product/findProductList/" + num, "GET", "")
	},
	homeProductByCategoryId(id, type) {
		return request("/home/product/productByCategoryId/" + id + "/" + type, "GET", "")
	},
	searchProductByKeyword(keyword, psort) {
		return request("/search/search/product/keyword?keyword=" + keyword + "&psort=" + psort, "GET", "")
	},
	getProductById(id) {
		return request("/home/product/getById/" + id, "GET", "");
	},

	registerSendCode(mobile) {
		return request("/user/user/sendMobile/" + mobile, "GET", "");
	},
	loginSendCode(mobile) {
		return request("/user/user/loginSendMobile/" + mobile, "GET", "");
	},
	userRegister(param) {
		return request("/user/user/register", "POST", param);
	},
	userLogin(param) {
		return request("/user/user/login", "POST", param);
	},
	getUserInfo() {
		return request("/user/user/getUserInfo", "GET", null);
	},
	addUserCar(id, num) {
		return request("/car/car/addCar/" + id + "/" + num, "GET", null);
	},
	getUserCar() {
		return request("/car/car/getUserCar", "GET", null);
	},
	updateUserCar(id, type) {
		return request("/car/car/updateCar/" + id + "/" + type, "GET", null);
	},
	deleteUserCar(id) {
		return request("/car/car/deleteCar/" + id, "GET", null);
	},
	getUserDefaultAddress() {
		return request("/address/address/getUserDefaultAddress", "GET", null);
	},
	createOrder(param) {
		return request("/order/order/create", "POST", param);
	}
}
