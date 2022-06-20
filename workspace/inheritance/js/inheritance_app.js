
console.log("inheritance in java script")


const person = {
    name: "Anna"
}

console.log(person)

const student = {
    cgpa: 3.89
}

//define inheritance
student.__proto__ = person;
console.log(student);