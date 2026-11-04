let student = {
    name: "Nandini",
    age: 20,
    course: "FSD",
    marks: 99
};

let jsonData = JSON.stringify(student);

console.log("JSON Data:");
console.log(jsonData);

let obj = JSON.parse(jsonData);

console.log("\nStudent Details:");
console.log("Name:", obj.name);
console.log("Age:", obj.age);
console.log("Course:", obj.course);
console.log("Marks:", obj.marks);
