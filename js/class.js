import { get, cart } from './cart.js';
import { checkform } from './check_form.js';
// LỚP MẶT HÀNG ĐỂ LƯU THÔNG TIN
class Product{
    constructor () {
        this.title = get.id('d_title').innerText;
        this.img  = get.id('d_img').src;
        this.price = get.id('d_price').innerText;
        this.total = get.id('d_total').value;
        this.color = get.id('d_color').value;
    }
}
class Detail { //Lớp Chi tiết
    
    constructor ( node ) {
        this.title = node.getElementsByTagName('h4')[0].innerText;
        this.price = node.getElementsByTagName('span')[0].innerText;
        this.img = node.getElementsByTagName('img')[0].src;
        this.describe = node.getElementsByTagName('p')[0].innerText;
        this.detail = node.getElementsByTagName('p')[1].innerText;
    }
    gettitle = () => { return this.title; }
    getprice = () => { return this.price; }
    getimg = () => { return this.img; }
    getdescribe = () => { return this.describe; }
    getdetail = () => { return this.detail; }
    display = () => {
        document.getElementById('detail').style.display = 'block';
        document.getElementById('d_title').innerText = this.gettitle();
        document.getElementById('d_img').src = this.getimg();
        document.getElementById('d_describe').innerText = this.getdescribe();
        document.getElementById('d_price').innerText = this.getprice();
        document.getElementById('d_detail').innerText = this.getdetail();
    }
}
// Lớp Khách hàng
class CustomerTM {
    constructor ( form ) {
        this.name = form['name'].value;
        this.phone = form['phone'].value;
        this.adress = checkform.toUpper(form['adress3'].value) + ', ' + form['adress7'].value + ', ' + form['adress2'].value + ', ' + form['adress1'].value;
    }
} 
class CustomerCK {
    constructor ( form ) {
        this.name = form['name'].value;
        this.phone = form['phone'].value;
        this.adress = form['adress3'].value + ' ' + form['adress2'].value + ' ' + form['adress1'].value;
    }
}
// Lớp Hóa Đơn
class HoaDon {
    constructor ( check ) {
        if ( check == 1){
            let date = new Date();
            this.name = checkform.toUpper(JSON.parse(localStorage.tm).name);
            this.phone = JSON.parse(localStorage.tm).phone;
            this.adress = JSON.parse(localStorage.tm).adress;
            this.cart = cart.get();
            this.totalmoney = cart.tongtien();
            this.fee = document.forms['form1']['tuychon'].value;
            this.date = date.getHours() + 'h' + date.getMinutes() + "' Ngày " + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
            this.type = 'Thanh toán tiền mặt';
            this.status = 'Chưa thanh toán';
        } else {
            let date = new Date();
            this.name = checkform.toUpper(get.id('nametk').value);
            this.phone = get.id('phone_ck').value;
            this.adress = checkform.toUpper(get.id('diachi_ck').value) + ', ' + get.id('map_xa_ck').value + ', ' + get.id('map_huyen_ck').value + ', ' + get.id('map_tinh_ck').value;
            this.cart = cart.get();
            this.totalmoney = cart.tongtien();
            this.fee = document.forms['form3']['tuychon_ck'].value;
            this.date = date.getHours() + 'h' + date.getMinutes() + "' Ngày " + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
            this.type = 'Thanh toán chuyển khoản';
            this.status = 'Đã thanh toán';
        }
    }
}


// 
export { Detail, Product, CustomerCK, CustomerTM, HoaDon };