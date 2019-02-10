import axios from '@/axios.js'

let api = {
  // 热搜
  getSearchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 搜索提示信息
  searchWord (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  // 左侧导航信息
  getNavInfo (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  // 有格调信息
  getStyleInfo (params) {
    return axios.get('/api/meituan/index/resultsByKeywords.json', params)
  },
  // 获取省份
  getProvinceInfo (params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  // 获取热门城市信息
  getHotCity (params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  // 获取最近搜索信息
  getRencentInfo (params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  // 获得城市列表信息
  getCityList (params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  },
  // 获取产品列表数据
  getProductInfo (params) {
    return axios.get('/api/meituan/list/goodsList.json', params)
  },
  // 获取分类信息
  getClassifyInfo (params) {
    return axios.get('/api/meituan/list/classify.json', params)
  },
  // 获取当前地理位置信息
  getCurPosition (params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  // 用户登录接口
  userLogin (params) {
    return axios.get('/api/meituan/login', params)
  },
  //注册
  register (params) {
    return axios.get('/api/meituan/register', params)
  } 

}

export default api
