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
