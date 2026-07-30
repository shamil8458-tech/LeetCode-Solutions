/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let n = s.split("").sort().join("")
    let m = t.split("").sort().join("")

    if(n === m){
        return true
    }else{
        return false
    }
    
};