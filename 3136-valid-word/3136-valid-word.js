/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length < 3)return false

    let vowel = false
    let check = false

    for(let key of word){
        if(key >= "0" && key<= "9"){
            continue
        }
        if(key >= "a" && key <= "z" || key  >= "A" && key <= "Z"){
            let x = key.toLowerCase()

            if("aeiou".includes(x)){
                vowel = true
            }else{
               check = true
            }
        }else{
            return false
        }
    }
    return vowel && check
    
};