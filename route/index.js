// route 文件
const fs = require('fs')

var filePath = 'template/'
var index = {
  path: "/",
  method: "get",
  func: function(req, res) {
    var file = filePath + 'blog_index.html'
    var options = {
      encoding: 'UTF-8',
    }
    var callback = function(err, data) {
      if (err) {
        console.log('err', err);
      }
      // console.log('data', data);
      res.send(data)
    }
    fs.readFile(file, options, callback)
  }
}

var routes = [
  index,
]

module.exports.routes = routes
