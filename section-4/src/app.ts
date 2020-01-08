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
