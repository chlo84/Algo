let string = 'Hello World';// console.log(string[0]) // 'H';let array = [1, 'abc', 54, [3]];// console.log(array[1]) // 'abc' second element in array// We can also access the last element in an array (or last character in a string) using brackets and length// console.log(string[string.length - 1]) // 'd';// console.log(array[array.length - 1]) // [3];// --Accumulator// build up an output to get towards a soloution// building a function that takes an incoming array and doubles itfunction doubleNumbers(arr) {// create output, since output of this function will be an array start it as an empty arraylet outputArray = [];// go through each element in the arrayfor(let i = 0; i < arr.length; i++) {// take the current number in this loop(arr[i]) multiply it by 2// put that into our output arrayoutputArray.push(arr[i] * 2);}// return the output outside of the for loopreturn outputArray;}

// Data-Conversionslet newString = 'ABC123';// turn an string into an array// here because the string is an empty string it will be split up by characterlet charactersInString = newString.split('');// console.log(charactersInString); // ['A','B','C',1, 2, 3]// Conversion a number to a stringlet number = 123.315;let string1 = `${number}`;let string2 = '' + number;let string3 = number.toString();// console.log(string1, string2, string3);// Converting a string to a numberlet money = '4.99';let number1 = +money;let number2 = parseInt(money);let number3 = Number(money);// console.log(number1, number2, number3);

// --Accumulator

// build up an output to get towards a soloution
// building a function that takes an incoming array and doubles it

function doubleNumbers(arr) {

    // create output, since output of this function will be an array start it as an empty array
    
    let outputArray = [];
    
    // go through each element in the array
    
    for(let i = 0; i < arr.length; i++) {
    
    // take the current number in this loop(arr[i]) multiply it by 2
    
    // put that into our output array
    
    outputArray.push(arr[i] * 2);
    
    }
    
    // return the output outside of the for loop
    
    return outputArray;
    
    }
    // Data-Conversions
    let newString = 'ABC123';
    // turn an string into an array// here because the string is an empty string it will be split up by characterlet 
    
    charactersInString = newString.split('');
    console.log(charactersInString); // ['A','B','C',1, 2, 3]
    // Conversion a number to a string
    let number = 123.315;let string1 = `${number}`;let string2 = '' + number;let string3 = number.toString();
    console.log(string1, string2, string3);
    // Converting a string to a number
    let money = '4.99';let number1 = +money;let number2 = parseInt(money);let number3 = Number(money);
    console.log(number1, number2, number3);


// write a function that takes in an array and returns the 2nd and 5 element in an array added together

// secondAndFifthAdder(['a', 16, 3, 45, 'de', 4]) = '16de'
// secondAndFifthAdder(['a', 1, 55, [], 4, 45]) = 5

function returnEle(arr) {
    let output =['1','2','3','4','5'];
    for(let i = 0; i < array.length; i++){

    }
}
// write a function that takes in an array of numbers and returns back the sum of all the even numbers

// evenSum([3, 5, 8, 13, 41, 2]) = 10
// evenSum ([1]) = 0
// evenSum([2,4,6,8,10,11,14]) = 34

// write a function that takes in a sentance and returns the second word in that sentance

// secondWord('Luke I am your father') = 'I'
// secondWord('Hi') = ''
// secondWord('Ok1 Ok2 Ok3') = 'Ok2'


// write a function that takes in a string and removes all the vowels ('aeiou' upper and lower)

// devowler('Easy as 123') = 'sy s 123'
// devowler('121415151u141aem') = '121415151141m'
// devowler('autoimmunities') = 'tmmnts'
