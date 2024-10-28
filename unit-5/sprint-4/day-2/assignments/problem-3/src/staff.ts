import { Person } from './person';

export class Staff extends Person {
    staffID: number;
    position: string;
    department: string;

    constructor(name: string, age: number, staffID: number, position: string, department: string) {
        super(name, age);
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`Staff ID: ${this.staffID}, Position: ${this.position}, Department: ${this.department}`);
    }
}
