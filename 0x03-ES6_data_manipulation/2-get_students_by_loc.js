export default function getStudentsByLocation(getListStudents) {
    return getListStudents.filter((e) => e.hasOwn("location"));
}
