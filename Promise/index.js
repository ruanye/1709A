    // Promise  是一种异步流程的解决手段  
    // promise 有三种状态 成功 失败 等待 只有等待状态能转化为成功或者失败态 一旦成功了就不能失败 一旦失败了 就不能成功 
    // promise只有一个参数 excutor（构造器） 默认new的时候立即执行 
  //回调函数里面有2个参数
    // resolve  成功 
    // reject   失败
  // 没一个promise 都有一个then() 方法 
  // then方法会返回一个新的promsie(重点)
  //then 有2个参数 一个成功的回调 一个是失败的回调 
  // .catch 可以用来统一处理异常
  // promise 可以链式调用 
    let p = new Promise((resolve,reject)=>{
      reject('失败')
    })
    p.then(data=>{//data 表示成功的原因
       console.log(data)
    }).then(data=>{
      console.log('resolve')
    }).catch(e=>{
      
    })
    //async await  配对使用 async 表示函数里面有异步，返回一个promise  await 等待 await后面 通常跟promise 也可以普通值 
    async function m() {
       await move(ball1,200);
       await move(ball2,200);
       await move(ball3,200);
    }
    m().then(data=>{
      alert('全部走完了')
    })

    // move(ball1,200).then(data=>{
    //     return  move(ball2,200)
    //   }).then(data=>{
    //     return move(ball3,200)
    // })
    // function m(){
    //   return {name:1}.then()
    // }
    // m().then()
//第一种 
// move(ball1,200).then(data=>{
//    move(ball2,200).then(data=>{
//      move(ball3,200).then(data=>{
//         alert('我动完了')
//      })
//    })
// })
 function move(element, target){ 
          return new Promise((resolve,reject)=>{
            let m = 0;
            window.timer = setInterval(() => {
                m += 5;
                console.log(m)
                element.style.left = m + 'px';
                if (parseInt(element.style.left) > target) {
                    clearInterval(window.timer)
                    element.style.left = target + 'px'
                    resolve('成功')
                }
            }, 13)
          })
  };
        





 // 每一个Promise都有个then的方法，(重点)then()执行后返回一个新的promise  
 //then里面有2个参数（函数） 一个是成功，一个是失败 
 // 如果成功 会走到下个then的成功回调，如果失败会走失败回调 如果返回的是普通值会直接走成功回调     
//  promise 可以链式调用 
//解决回调地狱的问题
//  $(this).addClass().css({})
    //return this
//  //catch 统一处理异常 
//  let p = new Promise((resolve,reject)=>{
//   reject()
// })
// p.then(data=>{ //data 表示成功的原因 
 
// }).then(data=>{
//   console.log(data) 
// }).catch(e=>{
//   // console.log(e,'---')
// })
  
// function move(ele, target){
//   return new Promise((resolve,reject)=>{
//     let m = 0;
//     window.timer = setInterval(() => {
//       m += 5;
//       ele.style.left = m + 'px';
//       if (parseInt(ele.style.left) > target) {
//           clearInterval(window.timer);
//           ele.style.left = target + 'px';
//           resolve('成功')
//       }
//   }, 13)
//   })
// }
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
//generator 自己去看一遍 
// async  表示函数里面有异步操作 返回promise  一般都和await 配合使用 await 后面通常跟着promise（也可以跟普通值）
// await 等待 
// async function m() {
//    await move(ball1,200);
//    await move(ball2,200);
//    await move(ball3,200);
// }
// m().then(data=>{
//   alert('移动完了')
// })
// Promise.reject('')//直接失败
// Promise.resolve('')//直接成功
// Promise.all() //接收由promise组成的数组；promise都成功之后才会走then方法 
//promise.race() 
// race 跑  谁跑的快结果就是谁 
// let p1 = new Promise((resolve,reject)=>{
//   console.log(1)
//   setTimeout(()=>{
//     resolve('1')
//   },100)
// })
// let p2 = new Promise((resolve,reject)=>{
//   console.log(2)
//   resolve('2')
// })
// //r1 r2 是解构赋值来拿出来的  [r1,r2] = data 
// Promise.all([p1,p2]).then(([r1,r2])=>{
//    console.log(r1,r2,'all')
// })

// //谁付钱快就收谁的  
// Promise.race([p1,p2]).then((data)=>{
//    console.log(data,'race')
// })



  
