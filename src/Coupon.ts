export default class Coupon {
    code: string;
    percentage: number;

    constructor (code: string, percentage: number) {
        this.code = code;
        this.percentage = percentage;
    }
}
