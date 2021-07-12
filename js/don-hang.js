import { get, cart } from './cart.js';
import { Detail, Product, CustomerCK, CustomerTM, HoaDon } from './class.js';
import { action } from './action.js';
import { map } from './map.js';
import { checkform } from './check_form.js';
import { hoadon } from './hoadon.js';
import { sendEmail } from '../mail/mail.js';

// 
cart.count();
hoadon.countStatus( 'Chưa thanh toán', get.id('number1') );
hoadon.countStatus( 'Đã thanh toán', get.id('number2') );
hoadon.hienthihoadon('Chưa thanh toán', get.id('khung1'));
hoadon.hienthihoadon('Đã thanh toán', get.id('khung2'));

// HỦY ĐƠN HÀNG
$('.cancel').click( function () {
    get.id('khung3').style.display = 'block';
    get.id('confirm').value = this.value;
    get.id('confirm').name = this.name;
});

// Xác nhận hủy đơn hàng
$('#confirm').click( function () {
    localStorage.pin = localStorage.pin = Math.floor(Math.random() * 9000) + 1000;
    get.id('khung3').style.display = 'none';
    get.id('khung4').style.display = 'block';
    get.id('pin2').alt = this.value;
    get.id('pin2').name = localStorage.pin;
    sendEmail.delete(localStorage.pin, this.value  ,this.name );
});
$('#pin2').keyup( function () {
    if ( this.value == localStorage.pin ) {
        hoadon.delete( this.alt );
        location.reload();
    }
});

// Cancel hành động hủy đơn hàng
$('#cancel').click( function () {
    get.id('khung3').style.display = 'none';
});
$('#cancel2').click( function () {
    get.id('khung4').style.display = 'none';
});








