export default {
  //商家评价总数量
  ratingsCount (state) {
    return state.ratings.length
  },
  // 商家满意评价的总数量
  ratingsPositiveCount (state) {
    return state.ratings.reduce((preCount, rating) => preCount + (rating.rateType===0?1:0), 0)
  },
  //购物车食物数量
  foodCount (state) {
    return state.shopCart.reduce((pre, food) => pre + food.count,0)
  },
  //购物车食物总价
  foodPrice (state) {
    return state.shopCart.reduce((pre, food) => pre + food.count * food.price,0)
  },
}
