let input = "112334";
//output = {1:2,2:1,3:2,4:1}
let newobj={};
for (var i = 0; i < input.length; i++) {
  if(!newobj[input[i]]){
    newobj[input[i]]=1
  }else{
    newobj[input[i]]++
  }
}
console.log(newobj,'newobj')
===================================================================================
let input = "banana";
//output = {1:2,2:1,3:2,4:1}
let newobj={};
for (var i = 0; i < input.length; i++) {
  if(!newobj[input[i]]){
    newobj[input[i]]=1
  }else{
    newobj[input[i]]++
  }
}
console.log(newobj,'newobj')

===================================================================================
let input = "aabbaaabc";
//output = [["a",2], ["b",2], ["a",3], ["b",1], ["c",1]]
let newArray=[];
let count=1;
for (var i = 1; i <= input.length; i++) {
  if(input[i] === input[i-1]){
    count++;
}else{
   newArray.push([input[i - 1], count]);
    count =1;
  }
}
console.log(newArray)
