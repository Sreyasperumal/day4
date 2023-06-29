let arr=[2,3,4,5,6,10]
let sum =0;
 let findSum = (arr) => {
    for(let val of arr){
        sum+= val;
    }
    return sum;
 }
 console.log(findSum(arr))
