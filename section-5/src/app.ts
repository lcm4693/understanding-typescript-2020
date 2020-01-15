interface Named {
  readonly name?: string;

  // Parâmetrio opcional que não precisa ser implementado nas classes.
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 30;

  //Coloquei o parâmetro name como opcional através do símbolo '?'
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}
let user: Greetable;

// Como o parâmetro name do construtor é opcional, posso chamar o construtor sem passar nada.
user = new Person();
// user = new Person('Diego');

// Não posso alterar o atributo name, pois ele está definido na interface como readonly.
// user.name = '';

user.greet("Hi there! I'm");

// Estou criando uma interface para determinar funções.
// Esse código comentado tem o mesmo funcionamento que o da interface.
// type typeFunction = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let addFn: AddFn = (a: number, b: number) => {
  return a + b;
};
