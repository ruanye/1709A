//NodeJS  后端 
let http = require('http');
//nodejs自带的服务器模块 
let url = require('url');
let s = require('./s.js');
//url  解析url路径和路径参数的 
let fs =require('fs') ;
console.log(fs);
// 文件处理模块 
//fs.readFile 读文件     fs.writeFile  写文件
//localhost:8080?name=1
//createServer 创建服务器的函数  
//req  request  请求 
//res  response 响应 
//listen 函数 监听端口号 0- 65535 
// res.end() 响应回什么数据 
//pathname 路径名 
//query  查询参数 ?name=1&&age=2
//url.parse 解析路径参数的方法 
//pathname  路径 如果是根路径 是/  其他路径是/ 加上路径的名字 所以我们可以根据路径的不同来响应不同的数据
// res.setHeader 设置响应头 
//req.method  请求方式 都是大写的  我们可以根据请求方式的不同来返回不同的数据
//请求方式有几种  GET POST DELETE PUT OPTIONS(试探性的请求)
//req.headers  请求头

http.createServer((req,res)=>{
   let {pathname,query}= url.parse(req.url,true);
   res.setHeader('content-type','text/plain;charset=utf8');
   if(pathname==='/login'){
      return res.end('登录')
    }
   if(pathname==='/sign'){
     if(req.method==='POST'){
        //POST、PUT等有请求体的请求的处理方式
        let str = '';
        //请求的时候data处理
        req.on('data',chunk=>{
           str+=chunk;//chunkbuffer对象
        })
        //请求结束拿到的data
        req.on('end',()=>{
          
        })
       return res.end('POST请求')  
     }
     if(req.method==='GET'){
        return res.end('注册')
      }else{
        return res.end('注册成功')
      }
    }
   res.end('not found')
}).listen(3000,()=>{
    console.log('3000启动成功')
})