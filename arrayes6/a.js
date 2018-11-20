//数组的方法
// push shift unshift pop splice slice join sort reverse concat foreach every some reduce map filter find indexof includes ...
// es6  filter map  reduce find some every 
// filter 过滤   返回的是一个条件为真的新数组，不操作原数组 
let ary =[2,3,4,5,7,9,11];
let newary = ary.filter(item=>item>4&&item<9)
console.log(newary,ary)
//map  映射 把一个数组映射成另一新数组 
let ary1 = [1,2,3] [2,4,6]//=>'<li>1</li><li>2</li><li>3</li>'
// let domary = ary1.map(item=>`<li>${item}</li>`)
// console.log(domary.join())
// let domary = ary1.map(item=>item*2);
//reduce 收敛 
 //1 return 后面的值会作为下一次的prev
 //2. next 第一次是数组的第二项，第二次是数组的第3项，以此类推 
 //3.可以进行传参 参数是第一次的prev
let bary = [1,2,3,4]
let sum = bary.reduce((prev,next,index,array)=>{
   console.log(prev,next)
   return prev+next

},0)
let carlist = [{name:'白菜',price:30,conut:5},{name:'鼠标',price:75,conut:3},{name:'包',price:500,conut:2}] 
//第一种解决方案 数组前面加个 0,为了保证每次返回的prev是一个数字
//第二种方案 传入参数0 作为第一次的prev 
//如果有给prev传入参数 就会把当前数组的第一项作为next 
let sum1 =carlist.reduce((prev,next)=>{
    return prev+next.price*next.conut;
},0)
let key  = ['name','age']
let val = ['beigongshang',5]
// {name:'beigongshang',age:5}
let newobj = key.reduce((prev,next,index)=>{
   prev[next] = val[index];
   return prev
},{})
console.log(newobj)
console.log(sum1)


 



