import { ParkingSlot } from './ParkingSlot';
import { Vehicle } from './Vehicle';

export class ParkingLot {
    slots: ParkingSlot[] = [];
    parkedVehicles: Map<string, Vehicle> = new Map(); // Vehicle number as key

    constructor(public totalSlots: number) {
        this.initializeSlots();
    }

    initializeSlots() {
        for (let i = 1; i <= this.totalSlots; i++) {
            let category: 'Handicapped' | 'Small-Mid Cars' | 'Large Vehicles';
            let ratePerHour: number;

            if (i % 3 === 0) {
                category = 'Large Vehicles';
                ratePerHour = 20;
            } else if (i % 2 === 0) {
                category = 'Small-Mid Cars';
                ratePerHour = 10;
            } else {
                category = 'Handicapped';
                ratePerHour = 5;
            }

            const slot = new ParkingSlot(i, category, ratePerHour);
            this.slots.push(slot);
        }
    }

    parkVehicle(vehicleNumber: string, category: 'Handicapped' | 'Small-Mid Cars' | 'Large Vehicles'): string {
        const availableSlot = this.slots.find(slot => !slot.isOccupied && slot.category === category);

        if (!availableSlot) {
            return `No available slots for ${category}.`;
        }

        availableSlot.isOccupied = true;
        const vehicle = new Vehicle(vehicleNumber, category, availableSlot.slotNumber);
        this.parkedVehicles.set(vehicleNumber, vehicle);
        return `Vehicle parked in slot ${availableSlot.slotNumber}.`;
    }

    exitVehicle(vehicleNumber: string): string {
        const vehicle = this.parkedVehicles.get(vehicleNumber);

        if (!vehicle) {
            return `Vehicle not found.`;
        }

        const exitTime = new Date();
        const duration = vehicle.calculateParkingDuration(exitTime);
        const slot = this.slots[vehicle.slotNumber - 1]; // Get the parking slot
        const totalAmount = duration * slot.ratePerHour;
        slot.isOccupied = false;
        this.parkedVehicles.delete(vehicleNumber);

        return `Total fee for vehicle ${vehicleNumber}: $${totalAmount}. Parking duration: ${duration} hour(s).`;
    }
    getAvailableSlotsByCategory(category: 'Handicapped' | 'Small-Mid Cars' | 'Large Vehicles'): number {
        return this.slots.filter(slot => !slot.isOccupied && slot.category === category).length;
    }
    getParkedVehicles() {
        console.log('Parked vehicles:');
        this.parkedVehicles.forEach(vehicle => {
            console.log(`Vehicle ${vehicle.vehicleNumber} is parked at slot ${vehicle.slotNumber}`);
        });
    }
}
