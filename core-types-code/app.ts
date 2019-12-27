// My function accepts two arguments types (number or string)
// It's called union type.
function combine(input1: number | string, input2: number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineStrings = combine('Diego', 'Serpa');
console.log(combineStrings);