//It's a function with number return
function add(n1: number, n2: number){
    return n1 + n2;
}

//It's a function with void return
function printResult(num: number){
    console.log('Result: ' + num);
}

printResult(add(5, 12));

// I'm saying that this variable is a function which returns a number and receives two numbers like parameters.
let combineValues: (a: number, b: number) => number;

// That's ok because add function returns a number and has two parameters
combineValues = add;

// This line is not ok, because printResult is a void function and it doesn't have two parameters
// combineValues = printResult;

console.log(combineValues(8,8))