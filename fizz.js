/*
** Step 1: Understand question
** Step 2: Understand negative part
*/

function checkFizz(n){
    if(n %3 ===0 && n %5 === 0){
        return "FizzBuzz";
    }else if(n %3 ===0){
        return "Fizz";
    }else if(n %5 ===0){
        return "Buzz";
    }else{
        return "invalud";
    }

}