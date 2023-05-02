checkString=(stringTxt,findWord)=>{
    var spaceTag=" ";
    for(let i=0;i<=stringTxt.length;i++){
        if(spaceTag != stringTxt[i] && stringTxt[i] != undefined && stringTxt[i] != 'undefined'){
            
          if(stringTxt[i] == findWord[0]){
            for(let j=0;j<=findWord.length;j++){
            if(findWord[j] == stringTxt[i]){
                    return true;    
             }
            }
            
          }
        }
      }
}
let stringTxt ="Hello my name is Ankit";
let findWord ="dev";

var regult=checkString(stringTxt,findWord);
console.log(regult == undefined ?false:regult);
