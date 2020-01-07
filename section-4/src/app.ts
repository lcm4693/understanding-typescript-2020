

const pi = 3.14

// It's an error, cause a constant value can't be changed.
// pi = 5;

// A variable 'let' it looks like a 'var' in vanilla javascript,
// but in vanilla 'var' is a global variable and on typescript it is a variable limited inside the scope
let age = 29;

if(age > 20){
    let isOld = true;
}

// isOld variable is looked inside the 'if' above, so it's not allowed to acces it here.
// console.log(isOld);

const add = (a: number, b: number) => {
    return a + b;
}

// If we have only one line inside the function, so we can exclude '{ }' like below:
const multiply = (a: number, b: number) => a * b;

// I can define a default value, so I can call this function without the second value.
const minus = (a: number, b: number = 1) => {
    return a - b;
}


console.log(add(5,2));
console.log(multiply(3,2));

console.log(minus(3));