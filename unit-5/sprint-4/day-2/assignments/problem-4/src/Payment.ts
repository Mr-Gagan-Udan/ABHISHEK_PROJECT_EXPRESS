export class Payment {
    vehicleNumber: string;
    amount: number;
    paymentTime: Date;

    constructor(vehicleNumber: string, amount: number) {
        this.vehicleNumber = vehicleNumber;
        this.amount = amount;
        this.paymentTime = new Date();
    }

    processPayment(): string {
        return `Payment of $${this.amount} processed for vehicle ${this.vehicleNumber} at ${this.paymentTime}.`;
    }
}
