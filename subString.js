let str = "wewerereqsfdf";
let result = "";

// check each character one by one
for (let i = 0; i < str.length; i++) {
  let count = 0;

  // count how many times str[i] appears
  for (let j = 0; j < str.length; j++) {
    if (str[i] === str[j]) {
      count++;
    }
  }

  // if it appears only once, add to result
  if (count === 1) {
    result += str[i];
  }
}

console.log(result); // "reqsfd"
