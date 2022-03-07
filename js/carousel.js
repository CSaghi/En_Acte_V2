$(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      responsive: [{

          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1}
          }, {

          breakpoint: 870,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1}
          }]
  });

    
});