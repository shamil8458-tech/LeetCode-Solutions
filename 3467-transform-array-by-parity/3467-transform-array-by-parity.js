/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
      let x= nums.map(function (n){
        if(n % 2 == 0){
            return 0
        }else if (n % 2 == 1){
            return 1
        }
    })
         x.sort(function (a,b){
            return a-b
        })
     return x ;
};