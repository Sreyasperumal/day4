let arr=[1,2,3,4,5,6,7,11,13,14,15,99,101]
let findOdd= function(arr1){
    for(let val of arr1){
        if(val%2==1)
        console.log(val);
    }
}
findOdd(arr)