class Person
{
    firstName:string;
    lastName:string;

    greet()
    {
        console.log("Hey there");
        
    }
}


class Programmer extends Person{
    greet() {
        
        console.log("Hello World");
        
    }


}

var aProgrammer =new Person()
aProgrammer.greet()