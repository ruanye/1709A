//字符串
let a = 'word';
//模板字符串 `` 
//变量用${}解析    
let str = `<div>
hello${a}</div>`
console.dir(String)
//(padStart  padEnd)  补全
//padStart 往前补 padEnd 往后补  
//第一个参数是表示不足几位补全 
//第二个参数表示不足补什么
'1'.padStart(2,0)  //01
'1'.padEnd(2,0)  //10 
 //includes  是否包含 返回一个布尔值  
 'abc'.includes('d');
 //...  
//剩余运算符  
[a,...ars] = [1,2,3,4]
function fn(x,...arg){
   console.log(arg)
}
fn(1,2,3,4,5)
// 展开运算符 
// [...[3,4],...[5,6]]
//  {age:30}
// {...{name:'lilei'},...{age:30}}
// let obj = {name:'lilei'}
// let cloneObj = {...obj};
// cloneObj.name= 'lili';
// console.log(obj.name)
//如何对一个对象进行深拷贝
let obj = {name:"lilei",age:30,like:{name:'lili'},b:function(){}}
cloneObj = JSON.parse(JSON.stringify(obj));
//上面这种方式不能拷贝函数 undefined...
function deepClone(obj){
   if(typeof obj !=='object')return obj;
   if(obj===null)return null;
  //如果是Date 类型 
  if(Object.prototype.toString.call(obj) ==='[objcet Date]')return new Date(obj) 
  if(Object.prototype.toString.call(obj) ==='[objcet RegExp]')return new RegExp(obj) 
  let cloneObj = new obj.constructor();//保留继承关系
   for(key in obj){
    cloneObj[key]=typeof obj[key]==='object'?deepClone(obj[key]):obj[key]  
   }
   return cloneObj;
}
let con = deepClone(obj);
con.name= 'lo'
console.log(obj)

let obj1 ={name:'lili'};
let c ={};
for (key in obj1){
   c[key] = obj1[key]
}
c.name= 'l';
console.log(obj1);





 
 
