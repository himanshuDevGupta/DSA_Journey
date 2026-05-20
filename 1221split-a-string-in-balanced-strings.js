let s = "RLRRRLLRLL"
let count=0;
let l=0; 
let r=0;



for (var i = 0; i < s.length; i++) {
  if(s[i] === "R"){
    r++;
  }else if(s[i] === "L"){
    l++
  }
  
  
  if(r == l){
    count++;
    r=0;  
    l=0;
  }
}

console.log(count)
