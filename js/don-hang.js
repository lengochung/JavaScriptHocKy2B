import { get, cart } from './cart.js';
import { Detail, Product, CustomerCK, CustomerTM, HoaDon } from './class.js';
import { action } from './action.js';
import { map } from './map.js';
import { checkform } from './check_form.js';
import { hoadon } from './hoadon.js';

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
});

// Xác nhận hủy đơn hàng
$('#confirm').click( function () {
    hoadon.delete( this.value );
    location.reload();
});


// Cancel hành động hủy đơn hàng
$('#cancel').click( function () {
    get.id('khung3').style.display = 'none';
});








