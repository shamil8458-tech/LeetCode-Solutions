/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
//   let num1 =  num.toString().split('').reduce((a,b) => {
//     return a + Number(b) 
//   },0)
//    return num1

//  return num.toString().split('').reduce((a,b) => a + Number(b), 0);

while(num >= 10){
   num = num.toString().split('').reduce((a,b) => a + Number(b) , 0 )
}
return num
 
};