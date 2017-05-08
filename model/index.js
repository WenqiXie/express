// model 文件
const fs = require('fs')
var basePath = 'db/'

var index = {
  path: "/api/add",
  method: "post",
  func: function(req, res) {
    var form = req.body
    console.log('form', form);
    var data = JSON.stringify(form)
    var file = basePath + 'blog.json'
    var callback = function(err) {
      console.log('The file has been saved!');

    }
    fs.writeFile(file, data, callback)
  }
}

var routes = [
  index,
]

module.exports.routes = routes
