/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	if (!nums || nums.length === 1) return false;
    var locationInNumsA, locationInNumsB;
    for (var i = 0; i < nums.length; i++) {
    	locationInNumsA = i;
    	for (var j = i + 1; j < nums.length; j++) {
    		locationInNumsB = j;
    		if (nums[locationInNumsA] === nums[locationInNumsB]) {
    			if (k >= locationInNumsB - locationInNumsA) {
    				return true;
    			}
    		}
    	}
    }
    return false;
};