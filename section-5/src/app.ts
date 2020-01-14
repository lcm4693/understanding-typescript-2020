interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user: Person;

user = {
    name: 'Diego',
    age: 33,
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
}

user.greet('Hi there! I\'m');