let employees = JSON.parse(localStorage.getItem("employees")) || [];

let form = document.getElementById("employeeForm");
let table = document.getElementById("employeeTable");

let displayEmployees = () => {
    let rows = "";

    employees.forEach((emp) => {
        rows += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>
                    <button onclick="deleteEmployee(${emp.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    table.innerHTML = rows;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById("empName").value.trim();
    let ageValue = document.getElementById("empAge").value;
    let department = document.getElementById("department").value.trim();
    let salaryValue = document.getElementById("salary").value;

    if (
        name === "" ||
        ageValue === "" ||
        department === "" ||
        salaryValue === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let age = Number(ageValue);
    let salary = Number(salaryValue);

    if (
        !Number.isFinite(age) ||
        !Number.isFinite(salary) ||
        age <= 0 ||
        salary <= 0
    ) {
        alert("Age and salary must be positive numbers");
        return;
    }

    let employee = {
        id: Date.now(),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);

    localStorage.setItem("employees", JSON.stringify(employees));

    displayEmployees();

    form.reset();
});

let deleteEmployee = (id) => {
    employees = employees.filter((emp) => emp.id !== id);

    localStorage.setItem("employees", JSON.stringify(employees));

    displayEmployees();
};

displayEmployees();