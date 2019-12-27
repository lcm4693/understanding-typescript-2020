let userInput: unknown;

let userName: string;

// I can assign any value in a 'unknown' variable. It's like 'any' but we have some validations with unknown.
// It's not a common type, but it's available for us.
userInput = 5;
userInput = 'Max';

// It causes an error, because there's no guarantee that value is valid.
// userName = userInput;

if(typeof userInput === 'string'){
    // Here, I can assign the variable, because it's guarantee that my value is a string.
    userName = userInput;
}

// The never return helps to read better the code, but it has the same function than void.
function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

generateError('An error ocurred!', 500);
