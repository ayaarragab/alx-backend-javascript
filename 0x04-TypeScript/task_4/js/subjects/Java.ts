namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
        experienceTeachingReact?: number;
        experienceTeachingJava?: number;
    }
    export class Java extends Subject{
        getRequirements() {
            return `Here is the list of requirements for Java`;
        }
        getAvailableTeacher() {
            if (!this.teacher.experienceTeachingReact)
                return `Available Teacher: ${this.teacher.firstName}`;
            else
                return `No available teacher`;
        }
    }
}
