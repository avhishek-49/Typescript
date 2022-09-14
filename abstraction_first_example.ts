abstract class Employee {

    name: string;
    paymentPerHour: number;

    constructor(name: string, paymentPerHour: number) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }

    public abstract calculateSalary(): number;
}

class Contractor extends Employee {

    workingHours: number;
    constructor(name: string, paymentPerHour: number, workingHours: number) {
        super(name, paymentPerHour);
        this.workingHours = workingHours;
    }

    calculateSalary(): number {
        return this.paymentPerHour * this.workingHours;
    }
}

class FullTimeEmployee extends Employee {
    constructor(name: string, paymentPerHour: number) {
        super(name, paymentPerHour);
    }

    calculateSalary(): number {
        return this.paymentPerHour * 8;
    }
}


let contractor: Employee;
let fullTimeEmployee: Employee;
contractor = new Contractor('Ramesh contractor', 10, 5);
fullTimeEmployee = new FullTimeEmployee('Ramesh full time employee', 8);

console.log(contractor.calculateSalary());
console.log(fullTimeEmployee.calculateSalary());