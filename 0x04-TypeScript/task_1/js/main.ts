export class Teacher {
    private firstName: string;
    private lastName: string;
    private fullTimeEmployee: boolean;
    private yearsOfExperience?: number;
    private location: string;
    [key: string]: any; //Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
    }
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  export class StudentClass implements IStudentClass {
    private _firstName!: string;
    private _lastName!: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    workOnHomework() {
      return 'Currently working';
    }
  
    displayName() {
      return this._firstName;
    }
  }

  export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
    return new ctor(firstName, lastName);
  }
