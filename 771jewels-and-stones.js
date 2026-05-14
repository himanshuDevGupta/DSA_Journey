let jewels = "aA";
let stones = "aAAbbbb";
// Output: 3

let count=0
for (var i = 0; i < stones.length; i++) {
  // stones[i]
  for (var j = 0; j < jewels.length; j++) {
    
    if(stones[i] == jewels[j]){
      count++;
    }
  }
}

console.log(count)
