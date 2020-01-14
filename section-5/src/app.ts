
interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    
    constructor(name: string, private age: number = 30){
        this.name = name;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}
let user: Greetable;

user = new Person('Diego');

// Não posso alterar o atributo name, pois ele está definido na interface como readonly.
// user.name = '';

user.greet('Hi there! I\'m');

// Estou criando uma interface para determinar funções.
// Esse código comentado tem o mesmo funcionamento que o da interface.
// type typeFunction = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}
let addFn: AddFn = (a: number, b: number) => {
    return a + b;
}