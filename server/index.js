const express = require("express")
const app = express()
const router = require("./router")
// 跨域问题
const cors = require("cors")
// pasing body
const bodyparser = require("body-parser")

app.use(cors())
// app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use("/api", router)


app.listen(5566, () => {
    console.log("服务器运行在5566端口")
})