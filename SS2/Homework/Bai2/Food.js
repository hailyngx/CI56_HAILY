import {Goods} from "./Goods"

export class Food extends Goods {
    vi;
    giamGia = 0.02;
    constructor(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap, vi) {
        super(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap);
        this.vi = vi;
    }
}