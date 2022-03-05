$(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      responsive: [{

          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1}
          }, {

          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1}
          }]
  });

  $('.carousel-accueil').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1}
      }, {

      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1}
      }]
    });

    
});