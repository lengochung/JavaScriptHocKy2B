import { checkform  } from "./check_form.js";
const get =  (function (){ // TRỎ NGẮN GỌN
    return {
        id: function (idName) { return document.getElementById(idName); },
        class: function (className) { return document.getElementsByClassName(className); },
        tag: function (tagName) { return document.getElementsByTagName(tagName); },
    }
})();
//  GIỎ HÀNG TRÊN LOCALSTORAGE
const cart = (function (){
    let array = new Array();
    return {
        create: function () { // TẠO GIỎ HÀNG 'cart'
            let index = 0;
            for (const key in localStorage) {
               if(key=='cart') { index++; break;}
            }
            if(index==0) { localStorage.cart = JSON.stringify(array); }
        },
        count: function () {
            localStorage.countcart = 0;
            for (const key in this.get()) { localStorage.countcart++; }
            get.id('countcart').innerText = localStorage.countcart;
            return localStorage.countcart;
        },
        set: function ( product ) { // THÊM VÀO GIỎ HÀNG
            array = this.get();
            array.push(product);
            localStorage.cart = JSON.stringify(array); 
            window.alert('Đã đưa vào giỏ.');
            get.id('d_total').style.border = 'none';
            get.id('d_color').style.border = 'none';
            get.id('detail').style.display = 'none';
        },
        get: function () { 
            return JSON.parse(localStorage.cart);
        },
        edit: function ( title, attribute, value ) {
            const array = this.get();
            for (const iterator of array) {
                if ( iterator.title==title ) {
                    iterator[attribute] = value;
                    break;
                }
            }
            localStorage.cart = JSON.stringify(array);
        },
        delete: function ( title ) { // XÓA MẶT HÀNG RA KHỎI GIỎ
            array = JSON.parse(localStorage.cart);
            for (let index = 0; index < array.length; index++) {
                if ( array[index].title==title ) {
                    array.splice(index,1);
                    break;
                }    
            }
            localStorage.cart = JSON.stringify(array);
        },
        deleteCart: function () {
            localStorage.cart = JSON.stringify([]);
        },
        kiemtrasoluongdathang: function () {
            let total = get.id('d_total');
            if ( total.value <= 0 ) {
                window.alert('Kiểm tra số lượng đặt hàng');
                return false;
            } else {
                return true;
            }        
        },
        kiemtramausacdathang: function () {
            let color = get.id('d_color');
            if ( color.value == "" ) {
                window.alert('Chọn màu cho sản phẩm');
                return false;
            } else {
                return true;
            }
        },
        kiemtraSanPhamTonTaitrongGioHang: function () {
            array = this.get();
            let isval = true;
            for (const iterator of array) {
                if ( get.id('d_title').innerText == iterator.title && get.id('d_color').value == iterator.color ) {
                    window.alert(`Sản phẩm ${iterator.title} thuộc tính ${iterator.color} đã có trong giỏ, chúng tôi sẽ cộng dồn số lượng đặt hàng.`);
                    iterator.total = parseFloat(iterator.total) + parseFloat(get.id('d_total').value) ;
                    isval = false; 
                    localStorage.cart = JSON.stringify(array);
                    break;
                }
            }
            return isval;
        },
        hienthigiohang: function () {
            let carttable = get.id('carttable');
            carttable.innerHTML = '';
            if ( cart.count() > 0) {
                carttable.innerHTML = `<tr id="tr1"><td>STT</td><td>Tên sản phẩm</td><td></td><td>Thuộc tính</td><td>Đơn giá<br>(VNĐ)</td><td>Số lượng</td><td>Tạm tính<br>(VNĐ)</td><td></td></tr>`;
                let index = 1;
                for (const iterator of this.get()) {
                    carttable.innerHTML += `<tr>
                                                <td>${index++}</td>
                                                <td>${iterator.title}</td>
                                                <td><img src="${iterator.img}"></td>
                                                <td>${iterator.color}</td>
                                                <td class="cartprice">${iterator.price}</td>
                                                <td><input type="number" class="p_total" name="total" value="${iterator.total}"></td>
                                                <td class="carttotal">${iterator.price*iterator.total}</td>
                                                <td><button class="cartdel">x</button></td>
                                            </tr>`;
                }
            } else {
                carttable.innerHTML = `<tr><td>Giỏ hàng trống</td></tr>`;
            }
        },
         hienthitamtinh: function () {
            let tamtinh = get.id('tamtinh');
            if ( cart.count() > 0 ) {
                tamtinh.innerHTML = `<tr>
                                        <td>Tổng cộng  </td><td>:</td><td class="right">${this.tongtien()}</td ><td class="right">VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>Thuế VAT (10%)</td><td>:</td><td class="right">${this.tongtien()/10}</td><td class="right">VNĐ</td>
                                    </tr>
                                    <tr id="green">
                                        <td>Thành tiền</td><td>:</td><td class="right">${this.tongtien() + this.tongtien()/10}</td><td class="right" style="color: black;">VNĐ</td>
                                    </tr>
                                 
                                
                                    
                                    <tr >
                                        <td colspan="4">Tất cả sản phẩm của bạn sẽ tính trong một đơn hàng để tiết kiệm chi phí cho bạn.</td>
                                    </tr>`;
            }

        },
        tongtien: function () {
            let total = 0;
            for (const iterator of this.get()) {
                total = parseFloat( iterator.price*iterator.total ) + parseFloat(total);
            }
            return total;
        },
        hienthiHoaDonTM: function () {
            let table = get.id('infortm');
            table.innerHTML = `<tr><td colspan="4" style="text-align: center;"><h4>THÔNG TIN ĐẶT HÀNG</h4></td></tr>`;
            table.innerHTML += `<tr><td>Tên khách hàng</td><td>:</td><td colspan="2" class="infor">${checkform.toUpper(get.id('name').value )}</td></tr>
                                <tr><td>Số điện thoại</td><td>:</td><td colspan="2" class="infor">${get.id('phone').value}</td></tr>
                                <tr><td>Địa chỉ</td><td>:</td><td colspan="2" class="infor">${JSON.parse(localStorage.tm).adress}</td></tr>
                                <tr><td>Tổng</td><td>:</td><td class="infor">${cart.tongtien()}</td><td style="text-align: right;">đ</td></tr>
                                <tr><td>VAT (10%)</td><td>:</td><td class="infor">${cart.tongtien()/10}</td><td style="text-align: right;">đ</td></tr>
                                <tr><td>Phí giao hàng</td><td>:</td><td class="infor">${document.forms['form1']['tuychon'].value}</td><td style="text-align: right;">đ</td></tr>
                                <tr style="font-weight: bold; color: green;"><td>Thành tiền</td><td>:</td><td class="infor">${cart.tongtien()*110/100 + parseFloat(document.forms['form1']['tuychon'].value)}</td><td style="text-align: right;">đ</td></tr>
                                `;
        },
        hienthiHoaDonCk: function () {
            let table = get.id('inforck');
            table.innerHTML = ``;
            table.innerHTML += `<tr><td colspan="2"><h4>THÔNG TIN GIAO HÀNG</h4></td></tr>
                                <tr><td>Tên khách hàng</td><td>:</td><td colspan="2" class="infor">${checkform.toUpper(get.id('nametk').value )}</td></tr>
                                
                                <tr><td>Tổng</td><td>:</td><td class="infor">${cart.tongtien()}</td><td style="text-align: right;">đ</td></tr>
                                <tr><td>VAT (10%)</td><td>:</td><td class="infor">${cart.tongtien()/10}</td><td style="text-align: right;">đ</td></tr>
                                <tr><td>Phí giao hàng</td><td>:</td><td class="infor">${document.forms['form1']['tuychon'].value}</td><td style="text-align: right;">đ</td></tr>
                                <tr style="font-weight: bold; color: green;"><td>Thành tiền</td><td>:</td><td class="infor">${cart.tongtien()*110/100 + parseFloat(document.forms['form1']['tuychon'].value)}</td><td style="text-align: right;">đ</td></tr>
                                `;
        }
    }
})();

// 
export { get, cart };

