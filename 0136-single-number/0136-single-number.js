/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = 0
    for(let key of nums){
        n ^= key
    }
    return n
    
};