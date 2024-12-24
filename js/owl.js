$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      margin: 10,
      loop: true,
      nav: true,
      responsive: {
        0: {
          items: 1 // 1 item for screens 0px and up
        },
        480: {
          items: 2 // 2 items for screens 480px and up
        },
        768: {
          items: 3 // 3 items for screens 768px and up
        },
        1024: {
          items: 4 // 4 items for screens 1024px and up
        }
      }
    });
  });
  