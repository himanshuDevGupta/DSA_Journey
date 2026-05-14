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


var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set(jewels);
    let count = 0;
    for (let c of stones) {
        if (jSet.has(c)) count++;
    }
    return count;
};
