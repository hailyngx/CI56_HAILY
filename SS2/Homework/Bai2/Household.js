import {Goods} from "./Goods"

export class Household extends Goods {
    doBen;
    giamGia = 0.1;
    constructor(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap, doBen) {
        super(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap);
        this.doBen = doBen;
    }
}