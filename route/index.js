"use strict";
// route 文件
// const fs = require('fs')
import { readFileSync } from 'fs';

const sendHtml = function(path, res) {
  var file = 'template/' + path
    // console.log('data', data);
  var options = {
    encoding: 'UTF-8',
  }
  let data = readFileSync(file, options)

  res.send(data)
}


var index = {
  path: "/",
  method: "get",
  func: function(req, res) {
    let path = 'blog_index.html'
    sendHtml(path, res)
  }
}


var routes = [
  index,
]

module.exports.routes = routes
