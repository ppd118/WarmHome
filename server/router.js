const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot")
// const searchData = require("./data/search/")
const detailsData = require("./data/details/")
const url = require("url")
const Mock = require("mockjs")
const Random = Mock.Random


// 首页热门数据
router.get("/home/hot1", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    res.send({
        status: 200,
        // result: homehot[cityName].hot1
        result: homehot.hot1
    })
})
router.get("/home/hot2", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    res.send({
        status: 200,
        // result: homehot[cityName].hot2
        result: homehot.hot2
    })
})

router.get("/home/hot3", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    const data = new Array(20).fill(0).map(() => {
        return Mock.mock({
            "id": Random.id(),
            "title": cityName + '-' + Random.ctitle(3, 5),
            "houseType": "17/19层| 4室1厅 - 273.97 ㎡",
            "price": Random.integer(10, 30) * 100,
            "rentType": "整租",
            "src": Random.image(`200x${Random.integer(150, 300)}`, Random.color(), '#FFF', "WarmHome")
        })
    })
    res.send({
        status: 200,
        // result: homehot[cityName].hot2
        result: data
    })
})

//搜索
router.get('/search', (req, res) => {
    const keywords = url.parse(req.url, true).query.keywords
    // console.log(req.url);
    console.log(keywords);
    const data = new Array(5).fill(0).map(() => {
        return Mock.mock({
            "id": Random.id(),
            "title": Random.ctitle(3, 5) + keywords,
            "houseType": "17/19层| 4室1厅 - 273.97 ㎡",
            "price": "<h3>130000</h3>",
            "rentType": "整租",
            "img": Random.image('800x600', Random.color(), '#FFF', keywords)
        })
    })
    const dataSearch = Mock.mock({

        // "hasMore": Random.boolean(),
        "hasMore": true,
        "data": data

    })
    res.send({
        status: 200,
        result: dataSearch
    })

})

//搜索提示
router.get('/searchBlur', (req, res) => {
    const keywords = url.parse(req.url, true).query.keywords
    const data = new Array(5).fill(0).map(() => {
        return Mock.mock({
            "keywords": keywords + Random.ctitle(3, 5)
        })
    })
    res.send({
        status: 200,
        data: data
    })
})


// 详情页
router.get("/details", (req, res) => {
    const id = url.parse(req.url, true).query.id
    console.log(id)
    res.send(detailsData)
})

// login

router.post("/login", (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    // console.log(username)
    // console.log(password)
    // 验证用户名和密码
    if (username && password) {
        res.send({
            status: 200,
            token: "bdhfhadiufhaoidnhviahfiaffaiofjafdkfoa",
            nickName: username
        })
    } else {
        res.send({
            status: 400,
            msg: "用户名或密码错误！"
        })
    }
})

module.exports = router