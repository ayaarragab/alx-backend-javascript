export default class HolbertonCourse{
    constructor(name, length, students ){
      this._name = typeof name === 'string'?name:null;
      this._length = typeof length === 'number'?length:null;
      this._students = Array.isArray(students)?students:null;
    }
    getName(){
      return this._name;
    }
    setName(name) {
      this._name = typeof name === 'string'?name:null;    
    }
    getLength() {
        return this._length;
    }
  
    setLength(length) {
        this._length = typeof length === 'number' ? length : null;
    }
  
    getStudents() {
        return this._students;
    }
  
    setStudents(students) {
        this._students = Array.isArray(students) ? students : null;
    }
  }
  