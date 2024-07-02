export default function updateStudentGradeByCity (getListStudents, city , newGrades ) {
    return studentsInCity = getListStudents.filter((s) => s.location === city).map((obj) => {
        for (const o of newGrades) {
            if (obj.id == o.studentId)
                obj.grade = o.grade;
    }});
}
