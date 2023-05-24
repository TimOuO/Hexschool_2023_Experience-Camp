$(function grassAnimate() {
    $(".grass-item-right").animate({
        top: "-180px",
        opacity: 0,
    }, 1000).animate({
        top: "180px",
        opacity: 0
    }).animate({
        top: "0px",
        opacity: 1
    });
    $(".grass-item-middle").delay(300).animate({
        top: "-180px",
        opacity: 0,
    }, 1000).animate({
        top: "180px",
        opacity: 0
    }).animate({
        top: "0px",
        opacity: 1
    });
    $(".grass-item-left").delay(600).animate({
        top: "-180px",
        opacity: 0,
    }, 1000).animate({
        top: "180px",
        opacity: 0
    }).animate({
        top: "0px",
        opacity: 1
    });
    setTimeout(grassAnimate, 3000);
})
grassAnimate();