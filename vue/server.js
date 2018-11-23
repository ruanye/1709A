let http = require('http');//node的http 模块  node自带的模块都有直接用 
let  url = require('url');
//createServer Node创建服务器的方法
//req request 请求 
//res response 响应 
//listen 监听 后面跟着端口号 0--65535
//(url.parse(req.url,true)) 是一个有很多参数的对象 参数里面包括 query 和pathname 
//http://localhost:8080/signin?name=1&&age=7
http.createServer(function(req,res){
    // query: {},
    // pathname: '/',
    //解构赋值  
    let {query,pathname}= (url.parse(req.url,true));
    console.log(query,pathname)
   res.end('8080')
}).listen(8080)
// 命令行  node server.js