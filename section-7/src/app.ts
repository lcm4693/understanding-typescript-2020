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
