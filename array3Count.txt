let xVal = 12;
let arr = [1,2,3,4,5,6] // 2,3
var newArry=[];
function checkVal(arr,xVal){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]+arr[i+1]+arr[i+2] == xVal){
            newArry.push(arr[i]);
            newArry.push(arr[i+1]);
            newArry.push(arr[i+2]);
            return newArry;
        }
    }
}

console.log(checkVal(arr,xVal));
