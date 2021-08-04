import Coupon from "./Coupon";

test("Deve verificar se o cupom está expirado", function () {
    const coupon = new Coupon("VALE20", 20, new Date("2020-10-10"));
    expect(coupon.isExpired()).toBe(true);
});
