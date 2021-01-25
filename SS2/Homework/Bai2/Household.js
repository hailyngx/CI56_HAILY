import {Goods} from "./Goods"

export class Household extends Goods {
    doBen;
    constructor(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap, doBen) {
        super(dinhDanh, tenMatHang, giaThanh, nhaSX, 0.1, ngayNhap);
        this.doBen = doBen;
    }
}