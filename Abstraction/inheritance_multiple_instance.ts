

//syntax

abstract class BaseEmployee {
    abstract doWork(): void;

    workStarted(): void {
        console.log('work started.');
    }
}




//constructor


abstract class BbaseEmployee {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}




//Derived class

abstract class BaaaseEmployee {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    abstract doWork(): void;
}

class Emmployee extends BaaaseEmployee {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    doWork(): void {
        console.log(`${this.lastName}, ${this.firstName} doing work...`);
    }
}

let emp = new Emmployee('Dana', 'Ryan');
emp.doWork();