// My function accepts two arguments types (number or string)
// It's called union type.
function combine(
  input1: number | string,
  input2: number | string,

  //I'm using union type combined with literal type.
  //Here, this variable accepts only these two values.
  resultConversion: 'as-number' | 'as-text'
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
