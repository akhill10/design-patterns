export class Item {
    price: number;
    upCode: string;

    constructor(price: number, upCode: string) {
        this.price = price;
        this.upCode = upCode;
    }

    getPrice() : number {
        return this.price;
    }

    getUpCode() : string {
        return this.upCode; 
    }
}