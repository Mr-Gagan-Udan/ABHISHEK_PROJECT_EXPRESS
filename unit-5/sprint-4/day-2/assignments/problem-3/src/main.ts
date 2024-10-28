import { Student } from './student';
import { Staff } from './staff';

function main() {
    const student1 = new Student('Alice Johnson', 20, 12345, 'Computer Science');

    const staff1 = new Staff('Dr. Bob Smith', 45, 56789, 'Professor', 'Engineering');

    console.log('Student Details:');
    student1.displayDetails();

    console.log('\nStaff Details:');
    staff1.displayDetails();
}

main();
