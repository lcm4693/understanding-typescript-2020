
// I can structure my object saying what's your fields, but it's not a good practice.
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Diego',
//     age: 33
// };
        
       
//It's better to use inferition for TypeScript like the example below
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     //I created below an example called tuple
//     role: [number, string]
// } = {
//     name: 'Diego',
//     age: 33,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

//  I can give any value for my enums. 
enum Role {
    ADMIN = 5, READ_ONLY, AUTHOR = 'AUTHOR'
};

const person = {
    name: 'Diego',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

//I can't push this value, cause it's a number and my array is composed for strings
// person.hobbies.push(3);

//If I use any type I can push any element within this array.
//But it's not a good practice, cause I'm losing all the good features from TypeScript
// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1];

let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person.name);

// When I use a typed array, my IDE identifies the type and show me the methods of this type.
// Here we can see autocomplete from hobby, because VSCode identifies hobbies like a string array.
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); ERROR! VSCode knows which string don't have 'map' method.
}

// These examples are using tuples
// person.role.push('admin');
// person.role[1] = 10;

// Testing Enum type
if(person.role === Role.ADMIN){
    console.log('is admin');
}