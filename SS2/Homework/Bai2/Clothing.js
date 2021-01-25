import {Goods} from "./Goods"

export class Clothing extends Goods {
    xuatXu;
    chatLieu;
    giamGia = 0.05;
    constructor(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap, xuatXu, chatLieu) {
        super(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap);
        this.xuatXu = xuatXu;
        this.chatLieu = chatLieu;
    }
}