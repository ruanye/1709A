// 数组扁平化 多维数组变成一维数组 
// [1,2,3,[4,5],[5,6]]=>[1,2,3,4,5,6]  
let arr = [1,2,3,[4,5],[5,6]];
let flat = [].concat.apply([],arr)
let flat1 = [].concat(...arr)
console.log(flat1)
//递归方法进行数组扁平化 
let flatArr = [];
function flater(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            //如果是数组 继续循环 递归
            flater(arr[i]) 
        }else{
            flatArr.push(arr[i])
        }
    }
}

//arr = [1,2,3,[4,5],[5,6]]
let r = arr.join().split(',');
console.log(r)
//reduce  进行数组扁平化  