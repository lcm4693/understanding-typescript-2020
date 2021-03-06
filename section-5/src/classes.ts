abstract class Department {

  static fiscalYear = 2020;
  // private name: string;
  // private size: number;

  protected employees: string[] = [];

  // Quando eu coloco os modificadores aqui no construtor, automaticamente ele cria esses atributos nas classes.
  // Posso colocar uma propriedade como readonly conforme vemos o name abaixo
  constructor(protected readonly name: string, private size: number) {
    // this.name = name;
    // this.size = size;
  }

  // Criei um método estpatico disponível para toda a classe
  static createEmployee(name: string) {
    return { name: name };
  }

  // Esse é um parâmetro burro só pra impedir que outras cópias tentem executar esse método,
  //sem ter uma instância em estado válido
  // describe(this: Department) {
  //   console.log('Department: ' + this.name + '. Size: ' + this.size);
  // }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length, this.employees);
  }
}

class ITDepartment extends Department {
  describe(): void {
    console.log('IT Department: ', this.name);
  }
  constructor(size: number, public admins: string[]) {
    super('IT', size);
  }
}

class AccountingDepartment extends Department {

  private static instance: AccountingDepartment;

  private lastReport: string;
  
  get getLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }
  
  set setLastReport(value: string) {
    if (!value) {
      throw new Error('Pass a new report value');
    }
    this.addReport(value);
  }
  
  private constructor(size: number, public reports: string[]) {
    super('Accounting', size);
    this.lastReport = reports[0];
  }
  
  static getInstance(){
    if(this.instance){
      return this.instance;
    }
    this.instance = new AccountingDepartment(10, []);

    return this.instance;
  }

  describe(): void {
    console.log('Accounting Department: ', this.name);
  }
  
  addEmployee(employee: string) {
    if (employee === 'Max') {
      return;
    }

    //Tive que mudar o modificador da classe-mãe para protected para poder acessar aqui.
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  getReports() {
    console.log(this.reports);
  }
}

// Tive que comentar esse código quando trasnformei a classe Department em abstract
// const departamento = new Department('Marketing', 15);
// departamento.describe();

// Aqui eu criei um objeto anônimo com o atributo name e o método describe
// O parâmetro describe exige que a instância seja uma instância compatível com Department.
// por isso o atributo name é obrigatório, afinal o construtor exige. (o size também)

// const departamentoCopia = { name: "Sales", size: 10, describe: departamento.describe };
// departamentoCopia.describe();

// A propriedade name está marcada como 'private', logo não é possível acessá-la.
// departamento.name = 'Contability';

// departamento.addEmployee('Diego');
// departamento.addEmployee('Livia');
// departamento.printEmployeeInformation();

const employee1 = Department.createEmployee('Geovanna');

console.log('Nome: ', employee1.name);
console.log('Fiscal Year: ', Department.fiscalYear);

const itDepartment = new ITDepartment(10, ['Diego', 'Daniele']);

itDepartment.addEmployee('Paulo');
itDepartment.addEmployee('Marcos');
itDepartment.addEmployee('Max');
itDepartment.describe();
console.log(itDepartment);

//Tive que comentar quando transformei a classe em um singleton
// const accountingDepartment = new AccountingDepartment(5, [
//   'Excel',
//   'Directors'
// ]);

const accountingDepartment = AccountingDepartment.getInstance();

accountingDepartment.addReport('Teste');

console.log('Last Report: ', accountingDepartment.getLastReport);

accountingDepartment.setLastReport = 'Ultimo Relatorio';

accountingDepartment.addEmployee('John');
accountingDepartment.addEmployee('Max');
console.log(accountingDepartment);
accountingDepartment.describe();
