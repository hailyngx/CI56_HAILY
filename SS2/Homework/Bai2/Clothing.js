import {Goods} from "./Goods"

export class Clothing extends Goods {
    xuatXu;
    chatLieu;
    constructor(dinhDanh, tenMatHang, giaThanh, nhaSX, ngayNhap, xuatXu, chatLieu) {
        super(dinhDanh, tenMatHang, giaThanh, nhaSX, 0.05, ngayNhap);
        this.xuatXu = xuatXu;
        this.chatLieu = chatLieu;
    }
}