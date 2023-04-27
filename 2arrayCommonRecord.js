const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 1, 7, 6,5, 4, 3, 8];

const common = [];

for (let i = 0; i < inputA.length; i++) {
  for (let j = 0; j < inputB.length; j++) {
    if (inputA[i] === inputB[j]) {
      let isDuplicate = false;
      for (let k = 0; k < common.length; k++) {
        if (inputA[i] === common[k]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        common[common.length] = inputA[i];
      }
      break;
    }
  }
}

console.log(common);
