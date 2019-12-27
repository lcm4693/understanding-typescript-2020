
// We can create new types for use in our functions.
// I create this type Combinable for use it in combine function.
type Combinable = number | string;

// I can use this technique for many things in union.
type ConversionDescriptor = 'as-number' | 'as-text'

// Here I created a new type and I used it for give a correct value to the function
type User = {name: string; age: number};

function greet(user: User){
  console.log(user);
}


// My function accepts two arguments types (number or string)
// It's called union type.
function combine(
  input1: Combinable,
  input2: number | string,

  //I'm using union type combined with literal type.
  //Here, this variable accepts only these two values.
  resultConversion: 'as-number' | 'as-text'

  // Here we used a type rather than the union description
  // resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

//   if(resultConversion === 'as-number'){
//       //Converts a string to a number
//     return +result;
//   }else{
      return result.toString();
//   }
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineStrings = combine("Diego", "Serpa", "as-text");
console.log(combineStrings);
