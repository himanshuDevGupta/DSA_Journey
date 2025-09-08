// Output
// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}

// *
// * *
// * * *
// * * * *

let n = 4;
for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "*";
    }
    console.log(row);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "1";
    for (let j = 0; j <i-1; j++) {
        row += j+2;
    }
    console.log(row);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4

let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += (i + 1);
    }
    console.log(row);
}

or

let n = 4;
for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}

// 1 2 3 4
// 1 2 3
// 1 2
// 1

let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row += (j + 1);
    }
    console.log(row);
}

// 4 4 4 4
// 3 3 3
// 2 2
// 1

let n = 4;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}

// * * * *
// * * *
// * *
// *

let n = 4;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

//       *
//     * *
//   * * *
// * * * *
let n = 4;
for (let i = 0; i <n; i++) {
    let row = "";
    for (let j = 0; j < n-(i+1); j++) {
        row += " ";
    }

    for (let k = 0; k < i+1; k++){
        row += "*";
    }
    console.log(row);
}

// 1
// 1 0
// 1 0 1
// 1 0 1 0
let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
        row += toggle;
        toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
}




