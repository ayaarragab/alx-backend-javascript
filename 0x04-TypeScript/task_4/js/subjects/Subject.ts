namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }
    export class Subject {
        teacher: Subjects.Teacher;
        set setTeacher(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }
    }
}
