Recursion in JavaScript is a programming technique where a function calls itself repeatedly until a specific condition,
known as the base case, is met. This technique is used to solve problems that can be broken down into smaller,
similar sub-problems. 

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

let n=10;

function fun(x){
  if(x > n) return;
  console.log(x);
  fun(++x)
}

fun(1)
----------------------------
function sum(n){
    if(n == 0){
      return 0;  
    } 
   return n + sum(n-1);
}
console.log(sum(5))



