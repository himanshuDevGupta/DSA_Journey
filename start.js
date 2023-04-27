/*
*****
***** 
*****
*****
*****
*/
let n = 4;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += i+1;
  }
  string += "\n";
}
console.log(string);


const revNumberPattern = (n) => {
  if (typeof n !== 'number' || n <= 0) {
    console.log('Enter Positive Numbers');
  } else {
    for (let i = 1; i <= n; i++) {
      let num = '';
      for (let j = i; j <= n; j++) {
        // j=i which works as input of i
        num += j;
      }
      console.log(num);
    }
  }
};
revNumberPattern(7);


/*
11111
2222
333
44
5
*/
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = i; j <= n; j++) {
      for (let d=j;d<5;d++){
        string += j+1;      
      }
  string += "\n";  
  }
  
}
console.log(string);

----------------------

12345
1234
123
12
1

let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n-i; j++) {
        string += j+1;      
      }
  string += "\n";  
}
console.log(string);

--------------------------------------------------------
*****
****
***
**
*
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n-i; j++) {
        string += "*";      
      }
  string += "\n";  
}
console.log(string);

----------------------------------


var givenString="AAAABBBCCDA";
var newVal='';
var count=0;
function test(givenString){
  
   let currentChar = givenString[0];

    for(var i=0;i<=givenString.length;i++){
    
        if(currentChar == givenString[i])
        {
           count=count+1   
        }else{
            newVal=newVal+currentChar+count;
            currentChar = givenString[i];
            count=1
        }
    }
     return count;
}

var newRes=test(givenString);
console.log(newVal,'newVal');

