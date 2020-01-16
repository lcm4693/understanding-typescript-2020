
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

//This new type is the combination between types Admin and Employee
// I can use interfaces for each type, so I can create a new Interface ElevatedEmployee which extends of these others.
type ElevatedEmployee = Admin & Employee;

// Here, I created an object with all properties of all types.
const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

// This time I used intersectional type, so the Universal type is the intersection between these variables.
// In this case, it will be a numeric variable, cause there is number type on these two variables.
type Universal = Combinable & Numeric;
