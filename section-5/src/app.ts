class Department {
  private name: string;
  private size: number;
  private employees: string[] = []

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  // Esse é um parâmetro burro só pra impedir que outras cópias tentem executar esse método,
  //sem ter uma instância em estado válido
  describe(this: Department) {
    console.log("Department: " + this.name + ". Size: " + this.size);
  }

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
      console.log(this.employees.length, this.employees);
  }

}

const departamento = new Department("Marketing", 15);
departamento.describe();

// Aqui eu criei um objeto anônimo com o atributo name e o método describe
// O parâmetro describe exige que a instância seja uma instância compatível com Department.
// por isso o atributo name é obrigatório, afinal o construtor exige. (o size também)

// const departamentoCopia = { name: "Sales", size: 10, describe: departamento.describe };
// departamentoCopia.describe();

// A propriedade name está marcada como 'private', logo não é possível acessá-la.
// departamento.name = 'Contability';

departamento.addEmployee('Diego');
departamento.addEmployee('Livia');
departamento.printEmployeeInformation();