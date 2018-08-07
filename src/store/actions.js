import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  SUBTRACT_FOOD_COUNT
} from "./mutation-types"

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from "../api/index"


export default {
  async getAddress ({commit, state}) {
    const {latitude,longitude} = state;
    const geohash = latitude + "," +longitude
    const result = await reqAddress(geohash)
    if(result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
async getCategorys ({commit}) {
    const result = await reqCategorys()
    if(result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  async getShops ({commit, state}) {
    const {latitude,longitude} = state;
    const result = await reqShops(latitude,longitude)
    if(result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  async getUser ({commit}) {
    const result = await reqUser()
    if(result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },
  async userLogout ({commit}) {
    const result = await reqLogout()
    if(result.code === 0) {
      commit(RESET_USER)
    }
  },
  async shopGoods ({commit},cb) {
    const result = await reqShopGoods()
    if(result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      cb&&cb()
    }
  },
  async shopInfo ({commit}) {
    const result = await reqShopInfo()
    if(result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  async shopRatings ({commit}) {
    const result = await reqShopRatings()
    if(result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  updateFoodCount ({commit} , {food, isAdd}) {
    if(isAdd){
      commit(ADD_FOOD_COUNT, {food})
    }else {
      commit(SUBTRACT_FOOD_COUNT, {food})
    }
  }
}
