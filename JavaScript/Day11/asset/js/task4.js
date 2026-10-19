let students = [
    {id: 1, name: "Arun", mark: 75},
    {id: 2, name: "priya", mark: 90},
    {id: 3, name: "kumar", mark: 65}
]
let solution = students.find(student => student.id ===2)
console.log(solution);
