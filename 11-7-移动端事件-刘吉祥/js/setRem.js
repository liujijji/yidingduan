var flg = true;

function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    client_w = client_w > 600 ? 600 : client_w;
    client_w = client_w < 250 ? 250 : client_w;
    var html = document.querySelector('html');
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
    setTimeout(function() {
        flg = true;
    }, 1000)
}
var timer = null;
window.onreset = function() {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300)
}
window.onload = setRem;