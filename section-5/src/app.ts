class Department {
  // private name: string;
  // private size: number;

  protected employees: string[] = [];

  // Quando eu coloco os modificadores aqui no construtor, automaticamente ele cria esses atributos nas classes.
  // Posso colocar uma propriedade como readonly conforme vemos o name abaixo
  constructor(private readonly name: string, private size: number) {
    // this.name = name;
    // this.size = size;
  }

  // Esse é um parâmetro burro só pra impedir que outras cópias tentem executar esse método,
  //sem ter uma instância em estado válido
  describe(this: Department) {
    console.log('Department: ' + this.name + '. Size: ' + this.size);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length, this.employees);
  }
}

class ITDepartment extends Department {
  
  constructor(size: number, public admins: string[]){
    super('IT', size);

  }
}

class AccountingDepartment extends Department {
  
  constructor(size: number, public reports: string[]){
    super('Accounting', size);

  }

  addEmployee(employee: string){
    if(employee === 'Max'){
      return;
    }

    //Tive que mudar o modificador da classe-mãe para protected para poder acessar aqui.
    this.employees.push(employee);
  }

  addReport(report: string){
    this.reports.push(report);
  }

  getReports(){
    console.log(this.reports);
  }

}


const departamento = new Department('Marketing', 15);
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


const itDepartment = new ITDepartment(10, ['Diego', 'Daniele']);

itDepartment.addEmployee('Paulo');
itDepartment.addEmployee('Marcos');
itDepartment.addEmployee('Max');
console.log(itDepartment);

const accountingDepartment = new AccountingDepartment(5, ['Excel', 'Directors']);
accountingDepartment.addReport('Teste');
accountingDepartment.addEmployee('John');
accountingDepartment.addEmployee('Max');
console.log(accountingDepartment);