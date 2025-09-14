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
