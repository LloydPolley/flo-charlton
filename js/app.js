document.addEventListener("DOMContentLoaded", function () {

    function openNav() {
        document.getElementById('sidenav').style.width = '100%';
    }

    function closeNav() {
        document.getElementById('sidenav').style.width = '0';
    }



    var photoGall = ['/img/portfolio/1.jpg', '/img/portfolio/2.jpg', '/img/portfolio/3.jpg', '/img/portfolio/4.jpg', '/img/portfolio/5.jpg', '/img/portfolio/6.jpg', '/img/portfolio/7.jpg', '/img/portfolio/8.jpg', '/img/portfolio/9.jpg', '/img/portfolio/10.jpg', '/img/portfolio/11.jpg'];
    var value = 0;


    // if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
    // {
    //     alert('Errors may occur on IE');
    // }


    document.getElementById('next').onclick = function () {
        value++;
        if (value >= photoGall.length) {
            console.log('run');
            value = 0;
        }
        var current = photoGall[value];
        document.getElementById('port-photo').src = current;
    }
    document.getElementById('previous').onclick = function () {
        value--;
        if (value <= 0) {
            console.log('run');
            value = 10;
        }
        var current = photoGall[value];
        document.getElementById('port-photo').src = current;
    }

});