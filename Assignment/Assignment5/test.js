/*test.js

*/

//maximum of two numbers
function max(num1, num2) {
    if(num1 > num2) {
        return num1;
    }else {
        return num2;
    }
}

console.log(max(6,5));

function isVowel(ch) {
    const vowels = "aeiouAEIOU";
    if(ch.length == 1) {
        if(vowels.includes(ch)) {
            return true;
        }
    } return false;
}

console.log(isVowel("z"));