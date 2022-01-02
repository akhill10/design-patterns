import { PaymentStratergy } from "../interface/payment-stratergy.interface";

export class CreditCardPayment implements PaymentStratergy {
    cvv: number;
    cardNumber : number;
    cardHolderName : string;

    constructor(cvv : number, cardNumber: number, cardHolderName: string) {
        this.cvv = cvv;
        this.cardHolderName = cardHolderName; 
        this.cardNumber = cardNumber;
    }

    makePayment(amount: number): string {
        return `Payment of ${amount} is done through credit card`;
    }
}