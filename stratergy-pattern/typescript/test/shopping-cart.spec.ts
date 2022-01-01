import { CreditCardPayment } from "../src/stratergies/credit-card.stratergy";
import { Item } from "../src/item";
import { ShoppingCart } from "../src/shopping-cart"
import { PayPalPayment } from "../src/stratergies/pay-pal.stratergy";

describe('Stratergy Pattern -- Test', ()=> {

    describe(`Should be able to make the payment `, () => {
        const item1 : Item = new Item(10, 'abc');
        const item2 : Item = new Item(20, 'def');

        const shoppingCart = new ShoppingCart();
        shoppingCart.addItem(item1);
        shoppingCart.addItem(item2);

        it(`Payment through Pay Pal`, () => {
            const paymentByPayPalResponse = shoppingCart.pay(new PayPalPayment('test@gmail.com', 'Test123'));
            expect(paymentByPayPalResponse).toEqual(`Payment of 30 is done through PayPal`);
        })

        it(`Payment through Credit Card`, () => {
            const paymentByCreditCardResponse = shoppingCart.pay(new CreditCardPayment(123, 12345678, 'test'));
            expect(paymentByCreditCardResponse).toEqual(`Payment of 30 is done through credit card`);
        })

    });
});