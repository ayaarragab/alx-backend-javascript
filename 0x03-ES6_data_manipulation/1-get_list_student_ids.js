export default function getListStudentIds (getListStudents) {
  return getListStudents.map((e) => e.id);
}
