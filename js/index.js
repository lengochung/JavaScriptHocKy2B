import { get, cart } from './cart.js';
import { Detail, Product } from './class.js';
import { action } from './action.js';
import { hoadon } from './hoadon.js';
// 

cart.create(); // Tạo giỏ hàng
hoadon.create(); //Tạo hóa đơn
cart.count(); //Hiển thị số giỏ hàng
// Hiển thị chi tiết sản phẩm
$('.button').click( function () { 
    const detail = new Detail ( this.parentElement.parentElement );
    detail.display();
});
$('.btninfor').click( function () {
    for (const iterator of get.class('card') ) {
        if ( iterator.getElementsByTagName('h4')[0].innerText == this.getElementsByTagName('span')[0].innerText ) {
            const detail = new Detail ( iterator );
            detail.display();
        }
    }
});
// Thêm vào giỏ hàng
$('#addtocart').click( function () { 
    if ( cart.kiemtrasoluongdathang()&&cart.kiemtramausacdathang() ) {
        if ( cart.kiemtraSanPhamTonTaitrongGioHang() ) {
            cart.set( new Product() );
            cart.count();
        }
    }
});
// Tìm kiếm
$('#searchDr').keyup( function (){
    action.searchproduct();
});







// Hiệu ứng trên trang
$(window).scroll( function () { // Hiệu ứng Sticky Menu
    if($(this).scrollTop()){
        get.id('menusticky').appendChild(get.id('nav'));
    } else {
        get.id('navmenu').appendChild(get.id('nav'));
    }
});
$(window).resize(function(){ //Tạo thanh cuộn khung chi tiết sản phẩm trên điện thoại
    if ( $(window).width() <= 620) {
        get.id('detail').style.overflowY = 'scroll';
        get.id('detail').style.height = '500px';
    } else {
        get.id('detail').style.overflowY = 'hidden';
        get.id('detail').style.height = 'auto';
    }
});
if ( $(window).width() <= 620) { //Tạo thanh cuộn khung chi tiết sản phẩm trên điện thoại
    get.id('detail').style.overflowY = 'scroll';
    get.id('detail').style.height = '500px';
}
$('#d_total').click( function () { // Hiệu ứng số lượng đặt hàng
    if ( this.value <= 0 ) {
        this.style.border = "red solid 2px";
    } else 
        this.style.border = "green solid 2px";
});
$('#d_color').mouseout( function () {
    if ( this.value == '' ) {
        this.style.border = "red solid 2px";
    } else 
        this.style.border = "green solid 2px";
});
$('#close').click( function () {
    get.id('d_total').style.border = 'none';
    get.id('d_total').value = 0;
    get.id('d_color').style.border = 'none';
    get.id('d_color').value = "";
    get.id('detail').style.display = 'none';
});

