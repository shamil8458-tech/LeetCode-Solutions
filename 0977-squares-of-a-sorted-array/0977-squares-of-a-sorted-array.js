/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res=  []
    for(let key of nums){
        res.push(key * key)
    }
    let result = res.sort(function (a,b){
        return a-b
    })
    return result
    
};