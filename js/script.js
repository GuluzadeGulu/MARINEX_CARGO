$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        speed: 2000,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
    })
})

$(document).ready(function(){
    $('.second-slider').slick({
        arrows: false,
        dots: false,
        speed: 2000,
        slidesToShow: 6,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
    })
})