// 创建一个函数  当页面加载的时候调用
function load() {
    // 获取页面向上滚动的距离
    // 不能用 scrollHeight  是获取整个屏幕的高的
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 获取整个屏幕  显示的高
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //先找到每一张图  在遍历出每一张图片
    var img_ = document.getElementsByClassName('imges');
    // console.log(img_);
    // 遍历出每一个img
    for (var item of img_) {
        // console.log(item);
        // 判断没一张图片到顶部 的距离
        // 如果图片的距离小于或者等于（以加载的距离+屏幕的高度） 让图片的路径换成创建的路径、
        if ((item.offsetTop + 100) <= (scrollTop + clientHeight)) {
            // console.log(item.offsetTop);
            // 拿到创建的路径
            var data_ = item.getAttribute('data-imgs');
            // console.log(data_);
            //吧创建的路径给遍历出的每一项
            item.src = data_
        }
    }
}
//页面加载的时候调用
window.onload = load;
// 页面滚动的时候调用
window.onscroll = load;