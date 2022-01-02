import { PaymentStratergy } from "./interface/payment-stratergy.interface";
import { CreditCardPayment } from "./stratergies/credit-card.stratergy";

export class Payment {
    paymentStratergy: PaymentStratergy; 

    constructor(paymentStratergy: PaymentStratergy) {
        this.paymentStratergy = paymentStratergy;
    }
}