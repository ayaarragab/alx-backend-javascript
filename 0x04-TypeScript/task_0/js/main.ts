interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student_one: Student = {
    firstName: "Aya",
    lastName: "Ragab",
    age: 19,
    location: "Egypt",
};

const student_two: Student = {
    firstName: "Aya",
    lastName: "Ragab",
    age: 19,
    location: "Egypt",
};

const studentsList: Array<Student> = [, student_two];
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);
const firstName = document.createElement("th");
firstName.textContent = "firstName";
const locationO = document.createElement("th");
locationO.textContent = "location";
thead.appendChild(firstName);
thead.appendChild(locationO);
for (const student of studentsList) {
   const row = document.createElement("tr");
   const fN = document.createElement("td");
   fN.textContent = student.firstName;
   const lo = document.createElement("td");
   lo.textContent = student.location;
   row.appendChild(fN);
   row.appendChild(lo);
}
