import {Goods} from "./Goods"

export default class Clothing extends Goods {
    xuatXu;
    chatLieu;
    constructor(tenMatHang, giaThanh, nhaSX, xuatXu, chatLieu) {
        super(tenMatHang, giaThanh, nhaSX, 0.05);
        this.xuatXu = xuatXu;
        this.chatLieu = chatLieu;
    }
}