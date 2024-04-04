class Person 
{
    constructor(private firstName:string,private lastName:string)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName():string
    {
        return `${this.firstName} ${this.lastName}`
    }
    describe():string
    {
        return `This is ${this.firstName} ${this.lastName}`
    }

}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
}


let employee = new Employee('John','Doe','Front-end Developer');




console.log(employee.getFullName());
console.log(employee.describe());

