export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
