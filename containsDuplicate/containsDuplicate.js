/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(!nums) return false;
    var i, j;
    for(i = 0; i < nums.length - 1; i++){
        if(nums.length === 1) return false;
        for(j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) return true;
        }
    }
    return false;
};

