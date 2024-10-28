export class ParkingSlot {
    slotNumber: number;
    category: 'Handicapped' | 'Small-Mid Cars' | 'Large Vehicles';
    isOccupied: boolean;
    ratePerHour: number;

    constructor(slotNumber: number, category: 'Handicapped' | 'Small-Mid Cars' | 'Large Vehicles', ratePerHour: number) {
        this.slotNumber = slotNumber;
        this.category = category;
        this.isOccupied = false;
        this.ratePerHour = ratePerHour;
    }
}
