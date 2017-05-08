const express = require('express');
const app = express()

app.use(express.static('static'))

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));



const registerRoutes = function(app, routes) {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i]
        // 下面这段是重点
        app[route.method](route.path, route.func)
    }
}

// var method = 'get'
// app[method]('/', function(req, res) {
//
// })

// 导入 route/index.js 的所有路由数据
const routeIndex = require('./route/index')
// routeIndex 是 route 文件夹 index.js 文件 exports 的一个 数组
registerRoutes(app, routeIndex.routes)

// 导入 model/index.js 的所有路由数据
const modelIndex = require('./model/index')
// routeIndex 是 route 文件夹 index.js 文件 exports 的一个 数组
registerRoutes(app, modelIndex.routes)


var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
})
