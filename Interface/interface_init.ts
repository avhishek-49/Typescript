function Print(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
   
  let myObj = { size: 10, label: "Size 10 Object" };
  Print(myObj);

  // example of interface
  interface Employee 
  {
    empcode:number;
    empname:string;
    getsalary:(number)=>number;
    getManagerNAme(number):string;
  }


  interface KeyPair
  {
    key:number;
    value:string;

  }

  let kv1: KeyPair ={ key:1,value:"steve"};
  // let kv2: KeyPair ={ key:1,value:"steve"};
  // let kv3: keypair ={key:1,value:100}
