var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    "use strict";
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    prevScrollpos = currentScrollPos;
};
    
AOS.init();