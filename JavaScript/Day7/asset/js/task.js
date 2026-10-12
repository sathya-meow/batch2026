let fruits = ["Apple", "Mango", "Orange", "Banana"];
console.log(fruits);

let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

let colors = ["Red", "Blue", "Green"];
colors[1] = "Yellow";
console.log(colors);

let mobiles = ["iPhone", "Samsung", "Vivo", "Oppo"];
console.log(mobiles.length);

let fruit = ["Apple", "Mango", "Orange"];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

let names = ["Sathya", "Priya", "Kavi"];
names[1] = "Divya";
console.log(names);

let details = ["Sathya", 21, true, "Chennai"];

for (let i = 0; i < details.length; i++) {
    console.log(details[i]);
}

let number = [10, 20, 30, 40, 50];

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

let marks = [80, 75, 90, 85, 95];
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

console.log(total);

let students = ["Sathya", "Priya", "Kavi"];

students[1] = "Meena";

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

let student = {
    name: "Sathya",
    age: 19,
    city: "Chennai"
};

console.log(student);

let studentss = [
    {
        name: "Sathya",
        marks: [80, 90, 85]
    },
    {
        name: "Priya",
        marks: [75, 88, 92]
    }
];

console.log(studentss[0].marks[1]);