let words = ["leet","code"];
let x = "e";



console.log(test(words,x));



function test(words, x){
  let res=[];
  
  for (var i = 0; i < words.length; i++) {
    // if(words[i].includes(x)){
    //   res.push(i)
    // }
    
    for (var j = 0; j < words[i].length; j++) {
      if(words[i][j] == x){
         res.push(i);
         break;
      }
    }
  }
  
  return res;
}

