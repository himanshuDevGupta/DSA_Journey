let newArr=[1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3]

//4:5

 let count=1;
 let hig=1;
  let low=1;
for (var i = 0; i < newArr.length; i++) {
  let num=  newArr[i];
  let nextValu= newArr[i+1];
  if(num == nextValu){
    count=count+1;
    // hig=count;
   
  }else{
 if (count > hig) {
      hig = count;
      low = num;
    }
    count=1;
  }
  

}
console.log(low + " : " + hig);

//1
//2
