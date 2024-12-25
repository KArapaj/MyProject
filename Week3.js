//First Exercise
function EmployeeInfo(name,salary){
    console.log("Welcome "+name+" Your Salary is: "+salary)
}

EmployeeInfo("Klenis",2000)
EmployeeInfo("Yona",2500)

//Second Exercise

const EmpSkills = (skills) => {
    console.log("Expert in: "+ skills)
}
EmpSkills("JAVA")
EmpSkills("Python")

//Third Exercise
const studentInfo = require('./StudentInfo')

console.log("Student Name: "+ studentInfo.getName())
console.log(studentInfo.location())
console.log(studentInfo.dob)

console.log(studentInfo.StudentGrade(69))