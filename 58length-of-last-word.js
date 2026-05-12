let s = "luffy is still joyboy";
// Input: s = ” fly me to the moon “
// Input: s = "Hello World"

// Output: 6

console.log(testCount(s));

function testCount(s){

    let n = s.length - 1;
    let count = 0;

    while(n >= 0){
        if(s[n] !== " "){
            count++;
        } else if(count > 0){
            break;
        }

        n--;
    }

    return count;
}
