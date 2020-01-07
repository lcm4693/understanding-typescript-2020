

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