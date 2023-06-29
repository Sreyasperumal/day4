let arr=[0,1,2,3,4,5,6,7,8]
let flag=0;
function findPrime(arr) {
    for(let val of arr){
        if (val==0||val==1){
          console.log(val)
        }
        else{
              for( let i=2;i<=val/2;i++){
              if(val%i==0){
              flag=1;
              break;
              }
            }
        
           if(flag==0)
        
           console.log(val)
        
            flag=0;
        }
    }
}
findPrime(arr)