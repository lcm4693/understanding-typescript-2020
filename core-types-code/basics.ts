function add(n1: number, n2: number, showResult: boolean, phrase: string){
    // console.log(typeof number1);
    if(showResult){
        //If I concatenate a string with other numbers, the result will be a new string, so I have to do the numbers sum separated.
        const result = n1 + n2;
        console.log(phrase + result);
    }else{
        return result;
    }
}

//TypeScript knows number1 variable type, so it's not a good practice to put the type next to variable.
// const number1: number = 5;
//But when I initalize a variable without a value, it's a good practice to put this type.
// let number1: number;
// number1 = 5;

// We have to use 'let' for variables and 'const' for constants.
// const pi = 3.14
// let tax = 4.8

const number1 = 5; // 5.0 it's the same number than 5 
const number2 = 2.8;

const printResult = true;
let resultPhrase = 'Result is: ';

// There is an error in this code because 'resultPhrase' is from string type. It was defined when we created the variable.
// resultPhrase = 0;

const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
