//practice java script

"use-strict"

function maxOfThree(a,b,c) {
    if(a > b && a > c) {
        console.log(`${a} is largest`);
    } else if (b > a && b > c) {
        console.log(`${b} is largest`);
    }else {
        console.log(`${c} is largest`);
    }
    
}

maxOfThree(40,15,50);

function isVowel(s) {
    if(s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u' ) {
        console.log(`${s} is vowel`);
    }else {
        console.log(`${s} is not vowel`);
    }
}

isVowel('e');

function sum(arr) {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++ ){
        sum += arr[i];
    }

    return sum;
}

function multiply(arr) {
    let mul = 1;
    for(let i = 0 ; i < arr.length ; i++) {
        mul *= arr[i];
    }
    return mul;
}

console.log("sum is :" + sum([1,2,3,4]) );
console.log("multiply is : " + multiply([1,2,3,4]) );

function reverse(str) {
    let result = "";
    for(let i = str.length-1 ; i >= 0 ; i--) {
        result = `${result}${str[i]}`;
    }

    return result;
}

console.log("reverse of \"jag testar\" is : "+ reverse("jag testar"));

function findLongestWord(arr) {
    let largest = arr[0].length;
    let largestWord = "";
    for(let i = 1 ; i < arr.length ; i++) {
        console.log(arr[i]);
        if(largest < arr[i].length) {
            largestWord = arr[i];
        }
    }

    return largestWord;
}

console.log("largest word : "+findLongestWord(['book', 'car', 'elephant', 'donkey', 'cat']));