import { ParkingLot } from './ParkingLot';
import { Payment } from './Payment';

const parkingLot = new ParkingLot(10); 

console.log(parkingLot.parkVehicle('ABC123', 'Small-Mid Cars'));
console.log(parkingLot.parkVehicle('XYZ456', 'Handicapped'));
console.log(parkingLot.parkVehicle('DEF789', 'Large Vehicles'));

parkingLot.getParkedVehicles();

const exitMessage = parkingLot.exitVehicle('ABC123');
console.log(exitMessage);

const payment = new Payment('ABC123', 30);
console.log(payment.processPayment());
console.log(`Available slots for Large Vehicles: ${parkingLot.getAvailableSlotsByCategory('Large Vehicles')}`);
console.log(`Available slots for Handicapped: ${parkingLot.getAvailableSlotsByCategory('Handicapped')}`);
