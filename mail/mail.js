import { hoadon  } from "../js/hoadon.js";
/* SmtpJS.com - v3.0.0 */
/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
const sendEmail = ( function () {
    return {
        pin: function ( pin, email ) {
            Email.send({
                Host : "smtp.gmail.com",
                Username : "hungln006@gmail.com",
                Password : "ndbpgazfwbqtvlcf",
                To : `${email}`,
                From : "hungln006@gmail.com",
                Subject : "OOPs ngân hàng Lê Ngọc Hưng",
                Body : `Mã <b>PIN</b> xác nhận mua hàng: <b>${pin}</b>`
            })
            .then(
             message => alert('Mã PIN đã được gửi tới email')
            );
        },
        delete: function ( pin, id, email )  {
            Email.send({
                Host : "smtp.gmail.com",
                Username : "hungln006@gmail.com",
                Password : "ndbpgazfwbqtvlcf",
                To : `${email}`,
                From : "hungln006@gmail.com",
                Subject : `MÃ XÁC THỰC HỦY ĐƠN HÀNG ${id}`,
                Body : `Mã <b>${pin}</b>`
            })
            .then(
             message => alert('mã XÁC THỰC đã gửi đến ' + email)
            );
        },
          send: function ( customer, hd ) {
                Email.send({
                    Host : "smtp.gmail.com",
                    Username : "hungln006@gmail.com",
                    Password : "ndbpgazfwbqtvlcf",
                    To : `${customer.email}`,
                    From : "hungln006@gmail.com",
                    Subject : "HÓA ĐƠN XÁC NHẬN MUA HÀNG TỪ FISHERMEN",
                    Body : `<!doctype html>
                            <html lang="en">
                            <head>
                                <title></title>
                                <!-- Required meta tags -->
                                <meta charset="utf-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                                <style>
                                    .title{
                                        text-align: left;
                                    }
                                    .right{
                                        text-align: right;
                                    }
                                </style>
                                <!-- Bootstrap CSS -->
                                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                            </head>
                            <body>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12"></div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <P>Trân trọng !</P>
                                            <p>Cám ơn khách hàng <b>${hd.name}</b> đã tin tưởng FisherMen</p>
                                            <table>
                                                <tr>
                                                    <td class="title">Mã ĐƠN</td><td class="right"><b>${hd.id}</b></td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Tình trạng</td><td class="right">${hd.status}</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Tổng ĐƠN</td><td class="right">${hd.totalmoney} đ</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Ngày đặt</td><td class="right">${hd.date}</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Ngày giao</td><td class="right">... hàng đang được chuyển</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Địa chỉ</td><td class="right">${hd.adress}</td>
                                                </tr>
                                            </table>
                                            <img src="https://lengochung.github.io/JavaScriptHocKy2B/img/hoa.jfif" alt="">
                                            <p><b>Thân mến !</b></p>
                                        </div>
                                        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12"></div>
                                    </div>
                                </div>
                                <!-- Optional JavaScript -->
                                <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                            </body>
                            </html>`
                })
                .then(
                 message => alert('Đã gửi email thông báo')
                );
          }
    }
})(); 
export { Email, sendEmail };
