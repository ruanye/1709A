//数组解构赋值 
let arr = [1,2,3];
// arr[0] arr[1];
//特点：
 // 1左右的结构一致  按照顺序进行解构赋值 
 //2 省略结构赋值的时候用逗号占位
 //3 报错的情况 当右侧的值不是数组或者类数组的时候会报错 
// let [b,a] = arr;
// console.log(a,b)

let [,,a] = arr;
console.log(a)
let arr2 = [1,2,3,[5,6]];
let [,,,[aa]] =arr2;
console.log(aa)
//...es6里面叫做拓展运算符
//不定参数赋值  
let  [b,,,...arg] = arr2;
console.log(b,arg)
let arr3 = [1,2,3,4,5,6];
let [x,...arg1] =arr3;
console.log(x,arg1)
let arr4 =[1,undefined];
//用等号给一个默认值 只有值绝对等于 ===  undefined 的时候才会走默认值 
let [y,z=2] = arr4;
console.log(y,z);
let lis = document.querySelectorAll('.li');
let [m] =lis;
console.log(m)


//作业   
let arr6 =[1,2,3,[5,[8,9,10,11]]]
// 2,  5  [10,11] 
let [,a,,[b,[,,...ars]]]=arr6;
let {length}  =arr6;
console.log(length)

