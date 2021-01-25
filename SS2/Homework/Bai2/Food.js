import {Goods} from "./Goods"

export class Food extends Goods {
    vi;
    constructor(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap, vi) {
        super(dinhDanh, tenMatHang, giaThanh, nhaSX, 0.02, ngayNhap);
        this.vi = vi;
    }
}