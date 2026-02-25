let arr=[1,2,[3,[4,5,6],7]];
// output [1,2,3,4,5,6,7]

let newArr=[];

function arrCus(arr){
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            arrCus(arr[i]); 
        }else{
            newArr.push(arr[i]);
        }
    }
}
arrCus(arr);
console.log(newArr);
