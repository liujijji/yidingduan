var flg = true;

function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;

    var html = document.querySelector('html');
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
    setTimeout(function() {
        flg = true;
    }, 1000)
}

window.onresize = setRem;