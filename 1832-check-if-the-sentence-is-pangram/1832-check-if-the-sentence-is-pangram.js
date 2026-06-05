/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

    let alphabet = "thequickbrownfoxjumpsoverthelazydog"

    for(let char of alphabet){
        if(!sentence.includes(char)){
            return false
        }
    }
    return true
    
};