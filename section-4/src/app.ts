const pi = 3.14;

// It's an error, cause a constant value can't be changed.
// pi = 5;

// A variable 'let' it looks like a 'var' in vanilla javascript,
// but in vanilla 'var' is a global variable and on typescript it is a variable limited inside the scope
let age = 29;

if (age > 20) {
  let isOld = true;
}

// isOld variable is looked inside the 'if' above, so it's not allowed to acces it here.
// console.log(isOld);

const add = (a: number, b: number) => {
  return a + b;
};

// If we have only one line inside the function, so we can exclude '{ }' like below:
const multiply = (a: number, b: number) => a * b;

// I can define a default value, so I can call this function without the second value.
const minus = (a: number, b: number = 1) => {
  return a - b;
};

console.log(add(5, 2));
console.log(multiply(3, 2));

console.log(minus(3));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// When I use the spread operator (...), I'm saying for javascript to add all elements from hobbies array to activeHobbies.
activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: "Max",
  age: 30
};

// The code below I'm pointing the reference from person to copiedPerson.
// If I change any value inside the object, the new value will be in copiedPerson.
const copiedPerson = person;
person.name = "Diego";
console.log(copiedPerson.name);

// When I used the spread operator, all values from person object was copied to spreadPerson.
const spreadPerson = { ...person };
person.name = "Teste";

console.log(spreadPerson.name);

// I can use spread operator for a variable number of parameters in a function.
const spreadAdd = (...numbers: number[]) => {
  // Reduce is used for accumulate the values from array
  // The callback function is called after each execution. The first value is the value returned on last loop and the seciond argument is the current value.
  // The second argumet from reduce is the argument that will start interaction.
  return numbers.reduce((curResult, curValue) => {
    console.log(curResult, curValue);
    return curResult + curValue;
  }, 0);
};

const addedNumbers = spreadAdd(2, 3, 4, 5);
console.log("Result: ", addedNumbers);

const skills = ["Programmer", "Cycling", "1"];

// When I destructured my array, I created new variables from the array.
const [profession, hobbie1, numberOne] = skills;
console.log(profession);
console.log(hobbie1);

const pessoa = {
  nome: "Diego",
  idade: 33
};

// I destructured my object pessoa. For objects I have to use '{}', for arrays I have to use '[]'
// In this case, I created a variable firstName from nome field and other variable idade from the field idade from pessoa.
const { nome: firstName, idade } = pessoa;
console.log(firstName, idade);
