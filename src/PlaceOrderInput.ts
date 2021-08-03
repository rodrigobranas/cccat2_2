export default class PlaceOrderInput {
    cpf: string;
    items: any;
    coupon: string;

    constructor ({ cpf, items, coupon }: { cpf: string, items: any, coupon: string }) {
        this.cpf = cpf;
        this.items = items;
        this.coupon = coupon;
    }
}
