export default class Goods {
    dinhDanh;
    tenMatHang;
    giaThanh;
    nhaSX;
    giamGia;
    ngayNhap;

    constructor(tenMatHang, giaThanh, nhaSX, giamGia) {
        this.tenMatHang = tenMatHang;
        this.giaThanh = giaThanh;
        this.nhaSX = nhaSX;
        this.giamGia = giamGia;
        this.ngayNhap = new Date().toISOString();

        this.dinhDanh = '_' + Math.random().toString(36).substr(2,9);
    }
}
