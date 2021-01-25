import {Food} from "./Food"
import {Household} from "./Household"
import {Clothing} from "./Household"


class Sales {
    constructor(doanhThu) {
        this.nhapHangHoa = [];
        this.banHang = []
        this.doanhThu = doanhThu
    }

add(matHang) {
    this.nhapHangHoa.push(matHang);
    console.log(matHang)
}

delete(matHang) {
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
        tongTien = tongTien + (this.banHang[i].giaThanh * (1 - this.banHang[i].giamGia);
    }
    {
        return tongTien; 
    }        
    } 
}


