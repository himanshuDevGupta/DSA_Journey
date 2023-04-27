const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

const uniqueA = [];
for (let i = 0; i < inputA.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueA.length; j++) {
    if (inputA[i] === uniqueA[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueA.push(inputA[i]);
  }
}

const uniqueB = [];
for (let i = 0; i < inputB.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueB.length; j++) {
    if (inputB[i] === uniqueB[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueB.push(inputB[i]);
  }
}

console.log(uniqueA); // [1, 2, 3, 4, 5, 7, 6, 8]
