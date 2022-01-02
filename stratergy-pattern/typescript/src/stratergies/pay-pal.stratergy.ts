import { PaymentStratergy } from "../interface/payment-stratergy.interface";

export class PayPalPayment implements PaymentStratergy {

    email: string;
    password: string; 

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    makePayment(amount: number): string {
        return `Payment of ${amount} is done through PayPal`;
    }
}