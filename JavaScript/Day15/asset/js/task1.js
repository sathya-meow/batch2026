let employees = [];

let form = document.getElementById("employeeForm");
let table = document.getElementById("employeeTable");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let name = document.getElementById("empName").value.trim();
    let ageValue = document.getElementById("empAge").value;
    let department = document.getElementById("department").value.trim();
    let salaryValue = document.getElementById("salary").value;

    let age = Number(ageValue);
    let salary = Number(salaryValue);

    if (name === "" || ageValue === "" || department === "" || salaryValue === "") {
        alert("Please fill all fields");
        return;
    }

    if (age <= 0 || salary <= 0) {
        alert("Age and salary must be positive numbers");
        return;
    }

    let employee = {
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);

    let rows = "";

    employees.forEach((emp) => {
        rows += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>
        `;
    });

    table.innerHTML = rows;

    form.reset();

});