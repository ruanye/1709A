function add(a){
    return a+1;
}
let add1 =a=>a+1;
add1(3)
//作业  以下函数改造成箭头函数 
function sum1(b){
    return function(c){
       return b+c
    }
}
let sum1 =b=>c=>b+c;
//有>2个箭头的箭头函数 叫做高阶函数  
   //特点：
      //1 没有this,this指向上级作用域 
     //2.没有funcution关键字
     //3.没有arguments,可以扩展运算符来取到参数 
     //4只有一个参数的情况下，可以省略小括号
     //没有大括号的情况下，需要省略return关键字，后面的值就是return的值 

let  sum =(...arg)=>{
      console.log(...arg,'箭头函数的参数') 
} 
sum(3,4)
let obj={//对象不是作用域
    name:()=>{
       console.log(this)  
    }
}
obj.name()

// console.log(add1(3))