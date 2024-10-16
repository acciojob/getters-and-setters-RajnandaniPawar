//complete this code
class Person {
	constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for the name
    get name() {
        return this._name;
    }

    // Setter for the age
    set age(age) {
        this._age = age;
    }

    // Getter for the age (optional, if needed for accessing the age directly)
    get age() {
        return this._age;
    }

}

class Student extends Person {
	study() {
        console.log(`${this.name} is studying`);
}

class Teacher extends Person {
	 teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
