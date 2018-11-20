//解构赋值的要点（包括对象和数组）：左右结构一致
//对象的结构赋值
//1.普通结构赋值
  //特点：
   //1.对象的解构赋值是根据key(属性值)来一一对应的
   //2.可以用：号 后加自己起的变量名称来解构赋值  
let obj ={name:'lilei',age:30,like:'football'}  
let {age,name,like} = obj;
let {name:nikeName} = obj; 
//console.log(nikeName)
let obj1 ={name:'lili',age:20,carlist:['apple','orange','banana','xihua']}
//age=>cage    orange
let {age:cage,carlist:[,orange]}= obj1;
//console.log(cage,orange)
res={
   code:200,
   msg:'success',
   data:{
     books:[
         {
           bookid:1,
           bookname:'aaa'
        },
        {
            bookid:1,
            bookname:'aaa'
         },
         {
            bookid:1,
            bookname:'aaa'
         }
     ] 
   }
}
let {code,data:books} = res;
// offsetHeight 
// offsetLeft
// offsetTop
// offsetWidth 
//dom对象 
let {offsetHeight, offsetLeft,offsetTop,offsetWidth} =box;
//console.log(offsetHeight, offsetLeft,offsetTop,offsetWidth)
//赋值为默认值的时候 只有绝对等于 ===undefined 的时候才会走默认值   
let obj2 = {nname:'lili',like:'ball',aage:undefined};
let {nname,aage=20} = obj2;
//console.log(age)
//当对象解构赋值的右侧不是对象的时候会调用对象的方法把右侧转换为对象 
let obj3 = 1;
console.log(Object(1));
let {__proto__} =obj3;
console.log(__proto__,'1');
let  ar= [1,2,3]
console.log(Object(ar),'数组')
let {length,__proto__:p} = ar;
console.log(length,p,'array转对象')
//特殊情况  
//Cannot destructure property `a` of 'undefined' or 'null'
let {a} = null;
let {b} = undefined;
//以上2中情况会报错，因为null 和undefined 不能被转化为对象 
