export default class PlaceOrderOutput {
    total: number;

    constructor ({ total }: { total: number }) {
        this.total = total;
    }
}
