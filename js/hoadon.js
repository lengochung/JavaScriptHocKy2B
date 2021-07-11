const hoadon = (function (){
    let array = new Array();
    return {
        create: function () { // TẠO HÓA ĐƠN
            let index = 0;
            for (const key in localStorage) {
               if(key=='hoadon') { index++; break;}
            }
            if(index==0) { localStorage.hoadon = JSON.stringify(array); }
        },
        count: function () {
            localStorage.counthoadon = 0;
            for (const key in this.get()) { localStorage.counthoadon++; }  
            return localStorage.counthoadon;
        },
        set: function ( product ) { // THÊM VÀO HÓA ĐƠN
            array = this.get();
            array.push(product);
            localStorage.hoadon = JSON.stringify(array); 
        },
        get: function () { // LẤY HÓA ĐƠN
            return JSON.parse(localStorage.hoadon);
        },
        delete: function ( date ) { // XÓA HÓA ĐƠN RA KHỎI GIỎ
            array = JSON.parse(localStorage.hoadon);
            for (let index = 0; index < array.length; index++) {
                if ( array[index].date==date ) {
                    array.splice(index,1);
                    break;
                }    
            }
            localStorage.hoadon = JSON.stringify(array);
        },
        deleteAll: function () {
            localStorage.hoadon = JSON.stringify([]);
        },
        tongtien: function () {
            let total = 0;
            for (const iterator of this.get()) {
                total = parseFloat( iterator.price*iterator.total ) + parseFloat(total);
            }
            return total;
        },
        countStatus: function ( status, alert ) {
            let dem = 0;
            for (const iterator of this.get()) {
                if ( iterator.status == status ) {
                    dem++;
                }
            }
            alert.innerText = dem;
            return dem;
        },
        hienthihoadon: function ( status, khungchua ) {
            khungchua.innerHTML = ''; let index = 1;
            for (const iterator of this.get()) {
                if ( iterator.status == status ) {
                    khungchua.innerHTML += `<table class="table">
                                                <tr>
                                                    <td class="title">Đang giao hàng <b>${index++}</b></td><td>Đặt lúc: </td><td class="bold" colspan="3">${iterator.date}</td>
                                                </tr>
                                                <tr>
                                                    <td  class="title">Tên : </td><td colspan="2" class="bold">${iterator.name}</td><td>SĐT: </td><td class="bold">${iterator.phone}</td>
                                                </tr>
                                                <tr>
                                                    <td  class="title">Địa chỉ giao :</td><td class="bold" colspan="4"> ${iterator.adress}</td>
                                                </tr>
                                            </table>`;
                    for (const product of iterator.cart) {
                        khungchua.getElementsByClassName('table')[index-2].innerHTML += `
                                                                                <tr>
                                                                                <td class="title">${product.title}</td><td>${product.price}</td><td>${product.total}</td><td class="price">${product.price*product.total}</td><td>đ</td>
                                                                                </tr>
                                                                            `;
                    }
                    khungchua.innerHTML += `<table class="margin">
                                                <tr>
                                                    <td class="title">TẠM TÍNH : </td><td class="price">${iterator.totalmoney}</td><td>đ</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Thuế VAT : </td><td class="price">${iterator.totalmoney/10}</td><td>đ</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Phí giao hàng : </td><td class="price">${iterator.fee}</td><td>đ</td>
                                                </tr>
                                                <tr>
                                                    <td class="bold title price" class="bold">TỔNG CỘNG : </td><td class="bold price">${parseFloat(iterator.totalmoney*11/10) + parseFloat(iterator.fee)}</td><td>đ</td>
                                                </tr>
                                                <tr>
                                                    <td class="btncancel"><button class="cancel form-control" value="${iterator.date}">Hủy đơn hàng</button></td><td></td><td></td>
                                                </tr>
                                            </table>`;
                }
            }
        }
    }
})();
// 
export { hoadon };