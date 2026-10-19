let employee = [
    {name: "Arun", salary: 25000},
    {name: "priya", salary: 45000},
    {name: "kumar", salary: 30000},
    {name: "ravi", salary: 50000}

]
let recive = employee.filter(emp => emp.salary >= 30000)
console.log(recive);
