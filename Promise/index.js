    // Promise  是一直异步流程的解决手段  
    // promise 有三种状态 成功 失败 等待 只有等待状态能转化为成功或者失败态 一旦成功了就不能失败 一旦失败了 就不能成功 
    // promise只有一个参数 excutor（构造器） 默认new的时候立即执行 
  //回调函数里面有2个参数
    // resolve  成功 
    // reject   失败
       
let p = new Promise((resolve,reject)=>{
    console.log(1)
})