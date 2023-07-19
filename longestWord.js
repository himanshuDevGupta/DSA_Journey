function findLongestWord(str) {
   var strSplit = str.split(' ');
   var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ 
	longestWord = strSplit[i].length; 
     }
  }
 
  return longestWord; 
}

var newVal=findLongestWord("My name is ankit jain & i'm from morena morema");
console.log(newVal);
