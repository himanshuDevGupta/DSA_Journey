function findLongestWord(str) {
  if(!str){
	  return "Please Pass String";
  }else{
  let strSplit = str.split(' '); //---------String to array convert base on space--------------------//
  let longestWord = 0;
  //-----------Here is Array Loop to check Lenght--------------------------//	
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ 
	longestWord = strSplit[i].length; 
     }
  }
 
  return longestWord; 
 }
}
let newVal=findLongestWord("My name is ankit jain & i'm from morena morema");
console.log(newVal);
