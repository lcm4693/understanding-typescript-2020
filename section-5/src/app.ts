interface Greetable {
    name: string;
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

user.greet('Hi there! I\'m');