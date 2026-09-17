let nums=[2, 15, 0, 0, 4, 0, 5];
 


const moveZero =(num) =>{
   var position = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp=nums[position];
            nums[position] =nums[i];
            nums[i]=temp
            position++
            
        }
    }
}

moveZero(nums);

console.log(nums);
