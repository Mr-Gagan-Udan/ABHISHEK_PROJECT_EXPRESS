export class Vehicle {
    vehicleNumber: string;
    category: 'Handicapped' | 'Small-Mid Cars' | 'Large Vehicles';
    entryTime: Date;
    slotNumber: number;

    constructor(vehicleNumber: string, category: 'Handicapped' | 'Small-Mid Cars' | 'Large Vehicles', slotNumber: number) {
        this.vehicleNumber = vehicleNumber;
        this.category = category;
        this.entryTime = new Date(); 
        this.slotNumber = slotNumber;
    }

    calculateParkingDuration(exitTime: Date): number {
        const duration = (exitTime.getTime() - this.entryTime.getTime()) / (1000 * 60 * 60); 
        return Math.ceil(duration); 
    }
}
