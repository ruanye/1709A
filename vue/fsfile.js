// 文件处理模块 
//fs.readFile 读文件     fs.writeFile  写文件
let  fs = require('fs');
// readFile 参数 文件路径 编码格式 回调(err,data) 在node里面一般都是err first err放在前面
function readF(url,cb){
    fs.readFile(url,'utf8',cb)
}
readF('./good.json',(err,data)=>{
   console.log(data,'读取文件')
})
function writeF(url,data,cb){
   fs.writeFile(url,JSON.stringify(data),'utf8',cb)
}
writeF('./good.json',{name:'li'},(err,data)=>{})
