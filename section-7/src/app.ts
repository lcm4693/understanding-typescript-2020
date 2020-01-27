// I'm telling to Typescript that the array is composed by many strings
const names: Array<string> = ['Diego Serpa'];
names[0].split(' ');

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // I have to pass a number, because I typed the promise like a number
    // resolve('');
    resolve(10);
  }, 2000);
});

promise.then(data => {
  console.log(data);
  // The Typescript knows that data is a number, so I can't use a string method.
  // data.split(' ');
});

// When I put the 'extends object' I'm telling for Typescript that it have to be an object.
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  // Method that merge two other objects.
  return Object.assign(obj1, obj2);
}

const united = merge({ id: 1, hobbies: ['Sports'] }, { name: 'Diego' });

// I used generic function, so the return is union between T and U.
// Now, Typescript can recognize the attributes like 'name' and 'id'.
console.log(united.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';

  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }

  return [element, descriptionText];
}

// It works cause string type has a length propertie.
console.log(countAndDescribe('Hi there'));

// I'm telling to Typescript that I have to pass a valid key which exists inside my object from T type.
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
  return 'Value of: ' + obj[key];
}

// If I change the second parameter to 'age', so Typescript warns me that there is an error in my sintax.
console.log(extractAndConvert({name: 'Diego'}, 'name'));