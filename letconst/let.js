//es6 
//let const 定义变量
//Uncaught ReferenceError: a is not defined  
// let 定义的特点：1.没有变量提升 
//               2.不可以重复声明 
// // console.log(a)
// // let a =1;
// let a =1;
// let a =2;
//console.log(a);
let b = 2;
//在es6里面 有{}的地方，就是块级作用域 在块级作用域里面不可以提前使用被声明的变量 这种情况叫做暂时性死区 
// {//等于一个自执行函数 
//     console.log(b)
//     let b =3;
// }
//for if function 
// for(let i=0;i<10;i++){
//    setTimeout(function(){
//        console.log(i)
//    },1000)
// }
let lis = document.querySelectorAll('.li');
for(let i=0;i<lis.length;i++){
    lis[i].onclick=function(){
       console.log(i) 
    }
 }
let name = 'lilei';
 console.log(window.name)
// let 定义的属性 不会被挂载在window上 

 

