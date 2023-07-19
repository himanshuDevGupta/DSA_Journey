function findLongestWord(str) {
   let strSplit = str.split(' ');
   let longestWord = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ 
	longestWord = strSplit[i].length; 
     }
  }
 
  return longestWord; 
}

let newVal=findLongestWord("My name is ankit jain & i'm from morena morema");
console.log(newVal);
