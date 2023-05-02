/**
 * @description {Method to sum n elements}
 *
 * Step 1   - Take all input as an array
 * Step 2   - Check if array is empty
 * Step 2.-1- Return please enter valid input
 * Step 3   - create checkVal=0 for check with all values
 * step 3.1 - Iterate a loop & checkVal is greate then element or not if yes replace value  
 * step 3.2 - after get larget value from array we need to check 2 small value form array  
 * Step 4   -else return the last element value
 * Step 5   - Return the output
 */

const arraySecondlargest = (arr) => {
    if (arr.length === 0) {
      return "Please enter a valid input";
    }
   let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] !== max1) {
      max2 = arr[i];
    }
  }

  return [max1, max2];
 };

var newRegult =arraySecondlargest([1,2,1,2,3,4,5,6,7,8,7,4,9]);
console.log(newRegult);
