import ajax from "./ajax"

//请求地址
export const reqAddress = (geohash) => ajax("/api/position/" + geohash)
//请求商品列表
export const reqCategorys = () => ajax("/api/index_category")
//请求商家
export const reqShops = (latitude,longitude) => ajax("/api/shops/",{latitude, longitude})
//账户密码登录请求
export const reqPwdLogin = (name, pwd, captcha) => ajax("/api/login_pwd/", {name, pwd, captcha}, "POST")
//发送短信验证码请求
export const reqSendCode = (phone) => ajax("/api/sendcode/", {phone})
//手机验证吗登陆请求
export const reqPhoneLogin = (phone, code) => ajax("/api/login_sms", {phone, code}, "POST")
