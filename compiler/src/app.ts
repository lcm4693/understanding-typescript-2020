// If I compile my application using -w I'll able to recompile automatically my code.
// Ex: tsc app.ts -w
// But I can create the tsconfig.json with tsc --init,
// after that all files will be compiled using the command 'tsc'.

const userName = 'Diego Serpa';

console.log(userName);

// The code below will fail, because there is a validation 'strictNullChecks',
// but we can use the ! signal for tell to typescript that we are sure that the value won't be null.
const button = document.querySelector('button')!;

function clickHandler(message: string){
    console.log('Clicked! ' + message);
}

button.addEventListener('click', clickHandler.bind(null, 'Teste'));