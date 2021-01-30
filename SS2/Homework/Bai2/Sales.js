import {Food} from "./Food"
import {Household} from "./Household"
import {Clothing} from "./Household"


class Sales {
    nhapHangHoa;
    banHang;
    doanhThu;

    constructor(doanhThu) {
        this.nhapHangHoa = [];
        this.banHang = []
        this.doanhThu = doanhThu
    }

import(matHang) {
    if(matHang instanceof Sales)
    {
    this.nhapHangHoa.push(matHang);
    console.log(matHang)
}

//sale(id) {
    // let index = this.products.findIndex((product) => {
    //     return product.id == id;
    // });

    // let index = -1;
    // let i = 0;
    // for(let product of this.products) {
    //     if(product.id == id) {
    //         index = i;
    //         break;
    //     }
    // }

sell(matHang) {
    for (let i = 0; i < this.nhapHangHoa.length; i++) {
        if (matHang == this.nhapHangHoa[i].matHang) {
            this.nhapHangHoa.splice(i, 1);
        }
    console.log(matHang)
    }
}

doanhThu() {
    let tongTien = 0;
    for (let i = 0; i < this.banHang.length; i++) {
        tongTien += this.banHang[i].giaThanh * (1 - this.banHang[i].giamGia)
    }
        {
            return tongTien; 
        }       
}
}}

let food1 = new Food("Food", "Snack", 65000, "Pringles", date, "Chua");
let food2 = new Food("Food", "Keo", 15000, "Hai Ha", date, "Ngot");
let household1 = new Household("Household", "Chao", 200000, "Bosch", date, "15 nam");
let household2 = new Household("Household", "Choi", 100000, "Hang Viet Nam", date, "10 nam");
let cloth1 = new Clothing("Clothing", "Shirt", 200000, "Zara", date, "Viet Nam", "Polyester");
let cloth2 = new Clothing("Clothing", "Sweater", 350000, "Uniqlo", date, "Nhat Ban", "Len");

let sales = new Sales();
Sales.add(food1);
Sales.add(food2);
Sales.add(household1);
Sales.add(household2);
Sales.add(cloth1);
Sales.add(cloth2);
Sales.delete(cloth2)
Sales.doanhThu()
console.log(Sales);
