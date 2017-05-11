// console.log('index.js');
var ajax = function(method, path, data, reseponseCallback) {
  //创建一个AJAX对象
  var r = new XMLHttpRequest()
  //设置方法和请求地址
  var baseurl = "https://vip.cocode.cc/sandbox/todo/330425899/"
  var path = baseurl + path
  r.open(method, path, true)
  //设置发送的数据的格式，当data不为空的时候，就需要设置
  r.setRequestHeader('Content-Type', 'application/json')
  //注册响应函数
  r.onreadystatechange = function() {
    if (r.readyState == 4) {
      reseponseCallback(r)
    }
  }
  //发送请求
  r.send(data)
}



const insertBlog = function() {

}
