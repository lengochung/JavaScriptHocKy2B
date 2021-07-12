import { get, cart } from './cart.js';
import { Detail, Product, CustomerCK, CustomerTM, HoaDon } from './class.js';
import { action } from './action.js';
import { map } from './map.js';
import { checkform } from './check_form.js';
import { hoadon } from './hoadon.js';
import { sendEmail, Email } from '../mail/mail.js';
// 
// Hiển thị số sản phẩm giỏ hàng
cart.count();
// 

// HIỂN THỊ SELECT TỈNH THÀNH PHỐ Phương thức tiền mặt
map.hienthiTinhTp(get.id('map_tinh'));
$('#map_tinh').click( function () {
    map.hienthiHuyen(get.id('map_huyen'), get.id('map_tinh'));
}); 
$('#map_huyen').click( function () {
    map.hienthiXa( get.id('map_xa'),get.id('map_tinh'),get.id('map_huyen'));
});

// Hiển thị tạm tính   
// 
$('#checkout').click( function () {
    if ( cart.count() > 0) {
        if ( this.value == '') {
            get.id('form1').style.display = 'none';
            get.id('form2').style.display = 'none';
        } else if ( this.value == 0 ) {
            get.id('form1').style.display = 'none';
            get.id('form2').style.display = 'block';
            } else if ( this.value == 1 ) {
                get.id('form1').style.display = 'block';
            get.id('form2').style.display = 'none';
            }
            get.id('inforck').style.display = 'none';
            get.id('inforck').style.display = 'none';
            get.id('btntm').style.display = 'none';
            get.id('btnck').style.display = 'none';
    } else {
        window.alert('Giỏ hàng trống, Bạn vui lòng quay lại trang cửa hàng.')
    }
});

// Hiệu ứng Form đặt hàng nhận tiền mặt
$('#name').keyup( function () {
    checkform.keyup(this, get.id('alert_name'));
});
$('#phone').keyup( function () {
    checkform.keyup(this, get.id('alert_phone'));
});
$('#map_tinh').click( function () {
    checkform.click(this, get.id('alert_tinh'));
});
$('#map_huyen').click( function () {
    checkform.click(this, get.id('alert_huyen'));
});
$('#map_xa').click( function () {
    checkform.click(this, get.id('alert_xa'));
});
$('#diachi').keyup( function () {
    checkform.keyup(this, get.id('alert_diachi'));
});
$('#email').keyup( function () {
    checkform.keyup(this, get.id('alert_email'));
});
$('#email_ck').keyup( function () {
    checkform.keyup(this, get.id('alert_email_ck'));
});
// Hiệu ứng Form chuyển khoản
$('#stk').keyup( function () {
    checkform.keyup(this, get.id('alert_stk'));
});
$('#nametk').keyup( function () {
    checkform.keyup(this, get.id('alert_nametk'));
});
$('#date').keyup( function () {
    checkform.keyup(this, get.id('alert_date'));
    get.id('alert_date').innerText = '';
});
$('#date').click( function () {
    checkform.click(this, get.id('alert_date'));
    get.id('alert_date').innerText = '';
});
$('#map_tinh_ck').click( function () {
    checkform.click(this, get.id('alert_tinh_ck'));
});
$('#map_huyen_ck').click( function () {
    checkform.click(this, get.id('alert_huyen_ck'));
});
$('#map_xa_ck').click( function () {
    checkform.click(this, get.id('alert_xa_ck'));
});
$('#diachi_ck').keyup( function () {
    checkform.keyup(this, get.id('alert_diachi_ck'));
});
$('#phone_ck').keyup( function () {
    checkform.keyup(this, get.id('alert_diachi_ck'));
});





// Xác nhận thông tin form thông tin
$('#save1').click( function () {
    checkform.form(get.id('name'), 8, get.id('alert_name'), 'Họ tên');
    checkform.phone(get.id('phone'),10, get.id('alert_phone'), 'Gồm 10 số');
    checkform.form(get.id('diachi'), 8, get.id('alert_diachi'), 'Trên 8 ký tự');
    checkform.form(get.id('email'),5,get.id('alert_email'),'Trên 5 ký tự');
    checkform.select(get.id('map_tinh'), get.id('alert_tinh'), 'Chọn trường');
    checkform.select(get.id('map_huyen'), get.id('alert_huyen'),'Chọn trường');
    checkform.select(get.id('map_xa'), get.id('alert_xa'), 'Chọn trường');
    if ( checkform.isval() ) {
        localStorage.tm = JSON.stringify(new CustomerTM(get.id('form1')));
        get.id('infortm').style.display = 'block';
        get.id('btntm').style.display = 'block';
        get.id('inforck').style.display = 'none';
        get.id('btnck').style.display = 'none';
        get.id('form_ck').style.display = 'none';
        cart.hienthiHoaDonTM();
    }
    checkform.isvalReset();
});
$('#save2').click( function () {
    checkform.phone(get.id('stk'),8, get.id('alert_stk'), 'Gồm 8 số');
    checkform.form(get.id('nametk'),8, get.id('alert_nametk'), 'Đầy đủ họ tên');
    checkform.formdate(get.id('date'), get.id('alert_date'),'Chọn ngày')
    if ( checkform.isval() ) {
        // localStorage.ck = JSON.stringify(new CustomerCK(get.id('form2')));
        get.id('inforck').style.display = 'block';
        get.id('btnck').style.display = 'block';
        get.id('infortm').style.display = 'none';
        get.id('btntm').style.display = 'none';
        get.id('form_ck').style.display = 'block';
        cart.hienthiHoaDonCk();
        map.hienthiTinhTp(get.id('map_tinh_ck'));
    }
    checkform.isvalReset();
});
// Hiển thị map Huyện, xã cho phương thức chuyển khoản
$('#map_tinh_ck').click( function () {
    map.hienthiHuyen(get.id('map_huyen_ck'), get.id('map_tinh_ck'));
});
$('#map_huyen_ck').click( function () {
    map.hienthiXa( get.id('map_xa_ck'),get.id('map_tinh_ck'),get.id('map_huyen_ck'));
});


// Đặt hàng
$('#btntm').click( function () {
    get.id('khung3').style.display = 'block';
    get.id('confirm').value = 1;
});

$('#btnck').click( function () {
    checkform.phone(get.id('phone_ck'),10, get.id('alert_phone_ck'),'SĐT có 10 số');
    checkform.form(get.id('email_ck'),5,get.id('alert_email_ck'), 'Trên 5 ký tự');
    checkform.select(get.id('map_tinh_ck'), get.id('alert_tinh_ck'), 'Bạn chưa chọn tỉnh');
    checkform.select(get.id('map_huyen_ck'), get.id('alert_huyen_ck'), 'Bạn chưa chọn huyện');
    checkform.select(get.id('map_xa_ck'), get.id('alert_xa_ck'), 'Bạn chưa chọn xã');
    checkform.form(get.id('diachi_ck'),8, get.id('alert_diachi_ck'),'Trên 8 ký tự');
    console.log(checkform.isval());
    if ( checkform.isval() ) {
        localStorage.tm = JSON.stringify(new CustomerCK( get.id('form3')));
        get.id('khung3').style.display = 'block';
        get.id('confirm').value = 2;
    }
    checkform.isvalReset();
});


// XÁC NHẬN ĐẶT HÀNG
$('#confirm').click( function () {
    if ( this.value == 1 ) {
        hoadon.create();
        const hd = new HoaDon( this.value );
        hoadon.set( hd );
        cart.deleteCart();
        sendEmail.send(JSON.parse(localStorage.tm), hd);
        document.body.innerHTML = '<img src="../img/loading.gif" width="100%" height="100%">';
        setTimeout(() => {
            location.reload();
        }, 2000);
    } else {
        get.id('khungPIN').style.display = 'block';
        get.id('pin').name = this.value;
        get.id('khung3').style.display = 'none';
        localStorage.pin = Math.floor(Math.random() * 9000) + 1000;
        sendEmail.pin(localStorage.pin, JSON.parse(localStorage.tm).email);
    }
});
$('#pin').keyup( function () {
    if ( this.value == localStorage.pin ) {
        hoadon.create();
        const hd = new HoaDon( this.name );
        hoadon.set( hd );
        cart.deleteCart();
        sendEmail.send(JSON.parse(localStorage.tm), hd);
        document.body.innerHTML = '<img src="../img/loading.gif" width="100%" height="100%">';
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
});
// Cancel
$('#cancel').click( function () {
    get.id('khung3').style.display = 'none';
});
$('#cancelpin').click( function () {
    get.id('khungPIN').style.display = 'none';
});









// Hiệu ứng trên trang
$(window).scroll( function () { // Hiệu ứng Sticky Menu
    if($(this).scrollTop()){
        get.id('menusticky').appendChild(get.id('nav'));
    } else {
        get.id('navmenu').appendChild(get.id('nav'));
    }
});



