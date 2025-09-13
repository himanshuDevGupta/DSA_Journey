/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let newObj={};

for (var i = 0; i < nums.length; i++) {
    if(!newObj[nums[i]]){
      newObj[nums[i]]=1;
    }else{
      newObj[nums[i]]++;
    }
}

for (var j = 0; j < nums.length; j++) {
     if(newObj[nums[j]] == 1){
       console.log(nums[j])
      return nums[j];
    }
}
};

