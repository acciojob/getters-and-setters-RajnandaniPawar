//complete this code
class Person {
	constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Getter for the name
    get name() {
        return this.name;
    }

    // Setter for the age
    set age(age) {
        this.age = age;
    }

    // Getter for the age (optional, if needed for accessing the age directly)
    get age() {
        return this.age;
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
