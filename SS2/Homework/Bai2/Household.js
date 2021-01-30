import {Goods} from "./Goods.js"

export default class Household extends Goods {
    doBen;
    constructor(tenMatHang, giaThanh, nhaSX, doBen) {
        super(dinhDanh, tenMatHang, giaThanh, nhaSX, 0.1);
        this.doBen = doBen;
    }
}