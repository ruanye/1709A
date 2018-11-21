//数组的方法
// // push shift unshift pop splice slice join sort reverse concat foreach every some reduce map filter find indexof includes ...
// // es6  filter map  reduce find   every 
// // filter 过滤   返回的是一个条件为真的新数组，不操作原数组 
// let ary =[2,3,4,5,7,9,11];
// let newary = ary.filter(item=>item>4&&item<9)
// console.log(newary,ary)
// //map  映射 把一个数组映射成另一新数组 
// let ary1 = [1,2,3] [2,4,6]//=>'<li>1</li><li>2</li><li>3</li>'
// // let domary = ary1.map(item=>`<li>${item}</li>`)
// // console.log(domary.join())
// // let domary = ary1.map(item=>item*2);
// //reduce 收敛 
//  //1 return 后面的值会作为下一次的prev
//  //2. next 第一次是数组的第二项，第二次是数组的第3项，以此类推 
//  //3.可以进行传参 参数是第一次的prev
// let bary = [1,2,3,4]
// let sum = bary.reduce((prev,next,index,array)=>{
//    console.log(prev,next)
//    return prev+next

// },0)
// let carlist = [{name:'白菜',price:30,conut:5},{name:'鼠标',price:75,conut:3},{name:'包',price:500,conut:2}] 
// //第一种解决方案 数组前面加个 0,为了保证每次返回的prev是一个数字
// //第二种方案 传入参数0 作为第一次的prev 
// //如果有给prev传入参数 就会把当前数组的第一项作为next 
// let sum1 =carlist.reduce((prev,next)=>{
//     return prev+next.price*next.conut;
// },0)
// let key  = ['name','age']
// let val = ['beigongshang',5]
// // {name:'beigongshang',age:5}
// let newobj = key.reduce((prev,next,index)=>{
//    prev[next] = val[index];
//    return prev
// },{})
// reduce(function(prev,next,index,array){},prev)
// redcuce(cb(prev,next,index,array),prev)
 //cb的4个 参数是对照reduce prev,next,index,array 这4个参数

 //作业  封装自己的reduce  
Array.prototype.myreduce=function(cb,prev){
  for(let i =0;i<this.length-1;i++){
   if(prev){ 
      prev = cb(prev,this[i+1],i+1,this)
   }else{ 
      prev = cb(this[i],this[i+1],i+1,this)
   }
  }
 return prev 
}
let suma = [1,2,3,4].myreduce((prev,next)=>{
   
  return prev+next
})

//find 找到条件为真就返回为真的那一项，不在继续查找 
let nary = [1,2,3,4,5].find(item=>item>2); // 结果3 
//console.log(nary)
//includes  找是否有条件为真的项，如果有返回true,没有返回false 
let r = [1,2,3,4,5].includes(1)
//some 只要有一项条件为真 就返回true 否则返回false   
// every 只有有一项条件不成立 就返回false
// let re = [1,2,3,4,5].some(item=>item>6)
let re = [1,2,3,4,5].every(item=>item>0)
//console.log(re)
//from 把非数组转为数组
let uary = Array.from(new Set([1,2,3,null,null,undefined,undefined,NaN,NaN]));

let arya  =[null,null,1,3,2,2,3,4,5,5,5]
//原理  对象的属性名 key 不能重复
let  obj ={};
let res =[];
for(let i =0;i<arya.length;i++){
    let cur = arya[i];
    if(!obj[cur]){//没有的放进去
      if(obj[cur]===0||obj[cur]===null){
         continue;
      }
      res.push(cur)
     }
    obj[cur]=cur;//obj[1]=1;
}
console.log(res)



// let res= [];
// let obj = [];

// for(let i=0;i<arya.length;i++){
//     let cur = arya[i];
//     if(!obj[cur]){
//        res.push(cur)
//     }
//     obj[cur]=cur;
// }
// console.log(res)











 



