let x=8;

for(let i=1; i<=x;i++){
    if(i*i == x || i*i >= x){
           if (i * i > x) {
        console.log(i - 1);
        break;
    }
    if (i * i === x) {
        console.log(i);
        break;
    }
    }
}
