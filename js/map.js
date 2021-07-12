import { get } from './cart.js';
const map = ( function () {
    const tinh = new Array('Bà Rịa - Vũng Tàu','Tp Hồ Chí Minh','Cà Mau');
    const huyen1 = new Array('Xuyên Mộc', 'Long Điền','Đất Đỏ','Châu Đức','Tx. Bà Rịa');
    const huyen2 = new Array('Quận 1','Quận 2','Quận 8','Tân Phú','Bình Tân','Tân Bình','Hóc Môn', 'Thủ Đức');
    const huyen3 = new Array('Cái Nước',' Đầm Dơi'	, 'Năm Căn'	, 'Ngọc Hiển', 'Thới Bình'	, 'Trần Văn Thời'	, 'U Minh');
// BRVT
    const brvt = new Array();
     brvt[0] = new Array('Bàu Lâm', 'Bình Châu', 'Bông Trang', 'Bưng Riềng', 'Hòa Bình', 'Hòa Hiệp', 'Hòa Hội', 'Hòa Hưng', 'Phước Bửu', 'Tân Lập', 'Xuyên Mộc');
     brvt[1] = new Array( 'An Phú Tân', 'An Phú Thượng', 'An Phú Hạ', 'Phước Hưng Thượng', 'Phước Hưng Trung', 'Phước Hưng Hạ', 'Nhơn Xương', 'Cơ Trạch');
     brvt[2] = new Array('Phước Long Thọ', 'Phước Thạnh', 'Long Tân', 'Láng Dài', 'Lộc An', 'Phước Hội', 'Long Mỹ', 'Phước Hải');
     brvt[3] = new Array('Cù Bị', 'Xà Bang', 'Quảng Thành', 'Láng Lớn', 'Bàu Chinh', 'Bình Ba', 'Suối Nghệ', 'Bình Trung', 'Bình Giã', 'Xuân Sơn', 'Sơn Bình', 'Suối Rao', 'Đá Bạc', 'Nghĩa Thành', 'Kim Long');
     brvt[4] = new Array('Kim Dinh', 'Long Hương', 'Long Tâm', 'Long Toàn', 'Phước Hiệp', 'Phước Hưng', 'Phước Nguyên', 'Phước Trung','Hòa Long', 'Long Phước', 'Tân Hưng');
// TPHCM
    const tp = new Array();
    tp[0] = new Array('P.Bến Nghé', 'P.Bến Thành', 'P.Cô Giang', 'P.Cầu Kho', 'P.Cầu Ông Lãnh', 'P.Đa Kao', 'P.Nguyễn Cư Trinh', 'P.Nguyễn Thái Bình', 'P.Phạm Ngũ Lão', 'P.Tân Định');
    tp[1] = new Array('P.An Phú','P. Thảo Điền','P. An Khánh','P. Bình An','P. Thủ Thiêm','P. An Lợi Đông','P. Bình Trưng Đông','P. Bình Trưng Tây','P. Thạnh Mỹ Lợi','P. Cát Lái');
    tp[2] = new Array('Xóm Củi', 'Hưng Phú', 'Bình An', 'Chánh Hưng','Rạch Ông');
    tp[3] = new Array('Tân Sơn Nhì',' Tây Thạnh',' Sơn Kỳ',' Tân Quý',' Tân Thành',' Phú Thọ Hòa',' Phú Thạnh',' Phú Trung',' Hòa Thạnh',' Hiệp Tân',' Tân Thới Hòa');
    tp[4] = new Array('Tân Tạo',' xã Bình Hưng Hòa',' xã Bình Trị Đông',' An Lạc',' An Lạc A',' Tân Tạo',' Tân Tạo A',' Bình Trị Đông',' Bình Trị Đông A',' Bình Trị Đông B',' Bình Hưng Hòa',' Bình Hưng Hòa A');
    tp[5] = new Array( 'P.1',' P.2',' P.3',' P.4',' P.5',' P.6',' P.7',' P.8',' P.9',' P.10',' P.11',' P.12',' P.13',' P.14',' P.15');
    tp[6] = new Array('Bà Điểm',' Đông Thạnh',' Nhị Bình',' Tân Hiệp',' Tân Thới Nhì',' Tân Xuân',' Thới Tam Thôn',' Trung Chánh',' Xuân Thới Đông',' Xuân Thới Sơn',' Xuân Thới Thượng');
    tp[7] = new Array('Bình Chiểu',' Bình Thọ',' Hiệp Bình Chánh',' Hiệp Bình Phước',' Linh Chiểu',' Linh Đông',' Linh Tây',' Linh Trung',' Linh Xuân',' Tam Bình',' Tam Phú',' Trường Thọ');
// CÀ MAU 
    const cm = new Array(); 
    cm[0] = new Array( 'Lương Thế Trân',' Thạnh Phú',' Phú Hưng',' Hưng Mỹ',' Tân Hưng',' Hòa Mỹ',' Tân Hưng Đông',' Đông Thới',' Đông Hưng và Trần Thới');
    cm[1] = new Array('Tân Thuận',' Tân Đức',' Trần Phán',' Tạ An Khương',' Tạ An Khương Nam',' Tạ An Khương Đông',' Tân Duyệt',' Quách Phẩm',' Quách Phẩm Bắc',' Tân Tiến',' Nguyễn Huân',' Thanh Tùng',' Ngọc Chánh',' Tân Trung',' Tân Dân','Thị trấn Đầm Dơi');
    cm[2] = new Array('Hiệp Tùng',' Tam Giang',' Lâm Hải',' Đất Mới',' Hàng Vịnh',' Tam Giang Đông',' Hàm Rồng',' Thị trấn Năm Căn');
    cm[3] = new Array('Đất Mũi',' Tam Giang Tây',' Tân Ân',' Tân Ân Tây',' Viên An',' Viên An Đông');
    cm[4] = new Array('Biển Bạch Đông',' Biển Bạch',' Tân Bằng',' Trí Phải',' Trí Lực',' Tân Phú',' Thới Bình',' Tân Lộc Bắc',' Tân Lộc',' Tân Lộc Đông',' Hồ Thị Kỷ',' Thị trấn Thới Bình');
    cm[5] = new Array('Khánh Bình Tây Bắc',' Khánh Bình Tây',' Khánh Bình Đông',' Khánh Bình',' Trần Hợi',' Khánh Hưng',' Khánh Hải',' Lợi An',' Phong Lạc',' Khánh Lộc',' Phong Điền');
    cm[6] = new Array('Thị trấn U Minh ',' Xã Khánh An',' Xã Khánh Lâm ',' Xã Nguyễn Phích ','Xã Khánh Hội',' Xã Khánh Tiến','Xã Khánh Hòa','Xã Khánh Thuận');
    // 
    const map = new Map();
// THÊM TỈNH HUYỆN CHO MAP
    tinh.forEach(element => {
        map.set(element, new Map());
    });
    huyen1.forEach(element => {
        map.get('Bà Rịa - Vũng Tàu').set(element, new Map());
    });
    huyen2.forEach(element => {
        map.get('Tp Hồ Chí Minh').set(element, new Map());
    });
    huyen3.forEach(element => {
        map.get('Cà Mau').set(element, new Map());
    });
// THÊM XÃ CHO MAP
    let br = 0; let hcm = 0; let mc = 0;
    for (const huyen of map.get('Bà Rịa - Vũng Tàu')) {
        brvt[br++].forEach(element => {
            huyen[1].set(element, '');
        });
    }
    for (const huyen of map.get('Tp Hồ Chí Minh')) {
        tp[hcm++].forEach(element => {
            huyen[1].set(element, '');
        });
    }
    for (const huyen of map.get('Cà Mau')) {
        cm[mc++].forEach(element => {
            huyen[1].set(element, '');
        });
    }
    return {
        get: function () { return map; },
        hienthiTinhTp: function ( node ) {
            for (const iterator of this.get().keys()) {
                node.innerHTML += `<option value="${iterator}">${iterator}</option>`;
            }
        },
        hienthiHuyen: function ( hienthi, tinh ) {
            hienthi.innerHTML = `<option value="">---</option>`;
                for (const h of this.get().get(tinh.value).keys() ) {
                    hienthi.innerHTML += `<option value="${h}">${h}</option>`;
                }
        },
        hienthiXa: function ( hienthi, tinh, huyen ) {
            hienthi.innerHTML = `<option value="">---</option>`;
                for (const x of this.get().get(tinh.value).get(huyen.value).keys() ) {
                    hienthi.innerHTML += `<option value="${x}">${x}</option>`;
                }
        }
    }
})();
// 
export { map };