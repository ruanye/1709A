//把多维数组转化为一维数组 
let ary = [1,2,3,[3,4],[5,6]];let flat7 = ary.join(',').split(',')
console.log(flat7)

let flat = [].concat.apply([],ary)
let flat1 =[].concat(...ary);

let flat2 = ary.reduce((prev,next)=>{},[])

let ary1 = [1,2,3,[3,4],[5,6]]
function flater(ary){
   let flatary = [];
   for(let i=0;i<ary.length;i++){
     if(Array.isArray(ary[i])){
      flatary= flatary.concat(flater(ary[i]))
        }else{
       flatary.push(ary[i])
     }
  }
  return flatary;
}
 console.log(flater(ary1),'---')
let flatm=ary.reduce((prev,next)=>{
  return prev.concat(next)
},[])

console.log(flatm,'flatm')


