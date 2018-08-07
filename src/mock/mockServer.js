import data from "./data"
import Mock from "mockjs"

Mock.mock("/goods", {code: 0, data: data.goods})
Mock.mock("/ratings", {code: 0, data: data.ratings})
Mock.mock("/info", {code: 0, data: data.info})
