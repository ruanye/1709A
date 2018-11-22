    // Promise  是一种异步流程的解决手段  
    // promise 有三种状态 成功 失败 等待 只有等待状态能转化为成功或者失败态 一旦成功了就不能失败 一旦失败了 就不能成功 
    // promise只有一个参数 excutor（构造器） 默认new的时候立即执行 
  //回调函数里面有2个参数
    // resolve  成功 
    // reject   失败
 // 每一个Promise都有个then的方法，(重点)then()执行后返回一个新的promise  
 //then里面有2个参数（函数） 一个是成功，一个是失败 
 // 如果成功 会走到下个then的成功回调，如果失败会走失败回调 如果返回的是普通值会直接走成功回调     
//  promise 可以链式调用 
//解决回调地狱的问题
//  $(this).addClass().css({})
    //return this
 //catch 统一处理异常  
let p = new Promise((resolve,reject)=>{
  reject()
})
p.then(data=>{ //data 表示成功的原因 
 
}).then(data=>{
  console.log(data) 
}).catch(e=>{
  console.log(e,'---')
})
  
function move(ele, target){
  return new Promise((resolve,reject)=>{
    let m = 0;
    window.timer = setInterval(() => {
      m += 5;
      ele.style.left = m + 'px';
      if (parseInt(ele.style.left) > target) {
          clearInterval(window.timer);
          ele.style.left = target + 'px';
          resolve('成功')
      }
  }, 13)
  })
}
// move(ball1,200).then(data=>{//第一个成功过移动后会走到then的成功回调 
//    move(ball2,200).then(data=>{
//      move(ball3,200).then(data=>{
//        alert('移动完了')
//      })
//    })
// })
// move(ball1,200).then(data=>{//第一个成功过移动后会走到then的成功回调 
//   return move(ball2,200)
// }).then(dat=>{
//   return move(ball3,200)
// })
//genarote 自己去看一遍 
// async  表示函数里面有异步操作 返回promise  一般都和await 配合使用 await 后面通常跟着promise（也可以跟普通值）
// await 等待 
async function m() {
   await move(ball1,200);
   await move(ball2,200);
   await move(ball3,200);
}
m().then(data=>{
  alert('移动完了')
})



  
