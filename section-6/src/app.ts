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
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

// This time I used intersectional type, so the Universal type is the intersection between these variables.
// In this case, it will be a numeric variable, cause there is number type on these two variables.
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ', emp.name);

  // I can't use the typeof, cause it's allowed to use only in known javascript types (number, string, boolean and object)
  // So, I used the keyword 'in' to identify if the object has 'privileges' propertie.
  if ('privileges' in emp) {
    console.log('Privileges: ', emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date: ', emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
    drive(){
        console.log('Driving a car...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo: ', amount);
    }
}


type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();

    // It's the same behavior to keyword 'in', but it's mor ellegant.
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  flyingSpeed: number;
  type: 'bird';
}

interface Horse {
    runningSpeed: number;
    type: 'horse';
}

type Animal = Bird | Horse;

function moveAnimal (animal: Animal){
  let speed: number;
  switch(animal.type){
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
      break;
  }
  console.log('Moving at speed: ', speed);
}

moveAnimal({type: 'bird', flyingSpeed: 5});
moveAnimal({type: 'horse', runningSpeed: 10});

// When I put '!' after a command, so I'm telling for typescript that there will be a valid value in this line (not-null)
// After that, I convert for HTMLInputElement using '< >' or using 'as' keyword
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi dude';

// I'm creating an interface for keep my errors, but I don't know the fields which I'll use at development time,
// so I can create an index propertie which I tell to Typescript the field's type without the name
interface ErrorContainer {
  [prop: string]: string;
}

// Here, I'm using the ErrorContainer for keep my runtime errors. I've defined the properties with string value,
// so I can use, in this example, email and username fields.
const errorBag: ErrorContainer = {
  email: 'Not a valid mail',
  username: 'Must start with a capital character!'
}