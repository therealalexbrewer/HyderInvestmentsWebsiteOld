$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 40;
    $(".out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
});

$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 5;
    $(".out2").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
});