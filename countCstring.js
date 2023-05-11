const input = "aaaabbaaccccccccccccccccccde";
const chart="c";
var countNo=0;

function checkVal(input,chart){
    
    for(let i=0;i<=input.length;i++){
        if(chart == input[i]){
            countNo=countNo+1;
        }
      }
   
   var newObj={
              character: chart,
              count: countNo
            }
        
        return newObj;
}

var regult=checkVal(input,chart);
console.log(regult);
