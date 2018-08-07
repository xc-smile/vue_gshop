import ajax from "./ajax"
// const BASE_URL = '/api'  // 开发环境运行
 const BASE_URL = ''  // 生产环境打包
//请求地址
export const reqAddress = (geohash) => ajax(BASE_URL + "/position/" + geohash)
//请求商品列表
export const reqCategorys = () => ajax(BASE_URL + "/index_category")
//请求商家
export const reqShops = (latitude,longitude) => ajax(BASE_URL + "/shops/",{latitude, longitude})
//账户密码登录请求
export const reqPwdLogin = (name, pwd, captcha) => ajax(BASE_URL + "/login_pwd/", {name, pwd, captcha}, "POST")
//发送短信验证码请求
export const reqSendCode = (phone) => ajax(BASE_URL + "/sendcode/", {phone})
//手机验证吗登陆请求
export const reqPhoneLogin = (phone, code) => ajax(BASE_URL + "/login_sms", {phone, code}, "POST")
//获取用户信息
export const reqUser = () => ajax(BASE_URL + "/userinfo")
//退出登陆
export const reqLogout = () => ajax(BASE_URL + "/logout")

//请求商家info
export const reqShopInfo = () => ajax("/info")
//请求商家ratings
export const reqShopRatings = () => ajax("/ratings")
////请求商家goods
export const reqShopGoods = () => ajax("/goods")
