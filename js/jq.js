 
$(document).ready(function(){
    let sell = $(".owl-carousel");
    if(sell.length && $.fn.owlCarousel){
        sell.owlCarousel({
            rtl: true ,
            items :1,
            nav: false ,
            dots: true ,
            autoplay : false,
        })
    }
 
});