import { PaymentStratergy } from "./interface/payment-stratergy.interface";
import { Item } from "./item";
import { Payment } from "./payment";

export class ShoppingCart {
    items: Item[];

    constructor() {
        this.items = [];
    }

    addItem(item: Item) : Item[] {
        this.items.push(item);
        return this.items;
    }

    caluclateTotal() : number {
        const itemPrices = this.items.map((item) => {
            return item.getPrice();
        });

        const total = itemPrices.reduce((previousValue, currentValue) => previousValue + currentValue);

        return total;
    }

    pay(paymentMethod : PaymentStratergy) : string {
        const payment = new Payment(paymentMethod);
        return payment.paymentStratergy.makePayment(this.caluclateTotal());
    }

}