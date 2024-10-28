import { Person } from './person';

export class Student extends Person {
    studentID: number;
    course: string;

    constructor(name: string, age: number, studentID: number, course: string) {
        super(name, age);
        this.studentID = studentID;
        this.course = course;
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`Student ID: ${this.studentID}, Course: ${this.course}`);
    }
}
