const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  

  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

  let test = persons.map(getFullName);
  
  console.log(test);
