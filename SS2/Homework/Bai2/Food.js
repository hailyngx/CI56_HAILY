import {Goods} from "./Goods"

export default class Food extends Goods {
    vi;
    constructor(tenMatHang, giaThanh, nhaSX, vi) {
        super(tenMatHang, giaThanh, nhaSX, 0.02);
        this.vi = vi;
    }
}