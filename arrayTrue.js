let newArr = [1,2,2,5,3,2,4,5,4,6];
let seen = [];
let result = [];

for (let i = 0; i < newArr.length; i++) {
  if (seen.includes(newArr[i])) {
    result.push(true);
  } else {
    seen.push(newArr[i]);
    result.push(newArr[i]);
  }
}

console.log(result);
