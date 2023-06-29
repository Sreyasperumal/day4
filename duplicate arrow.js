let arr=[1,2,2,3,4,5,4]
let res=[];
let duplicate = (arr) =>{
    let flag=0,pos=0;
    for(i=0;i<arr.length;i++){
        
        for(j=0;j<res.length;j++){
            if(arr[i]==res[j]){
                flag=1;
            }
        }
        if (flag==0){
            res[pos]=arr[i];
            pos++;
        }
        flag=0;
    }
    console.log(res);
}
duplicate(arr)