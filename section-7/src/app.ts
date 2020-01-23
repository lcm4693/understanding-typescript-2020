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

promise.then((data) => {
    console.log(data);
    // The Typescript knows that data is a number, so I can't use a string method.
    // data.split(' ');
});

function merge<T, U>(obj1: T, obj2: U){
  // Method that merge two other objects.
  return Object.assign(obj1, obj2);
}

const united = merge({id: 1, hobbies: ['Sports']}, {name: 'Diego'});

// I used generic function, so the return is union between T and U. 
// Now, Typescript can recognize the attributes like 'name' and 'id'.
console.log(united.name);

