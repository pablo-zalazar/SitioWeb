var contador = 1;

function main() {
  $(".menuBar a").click(function () {
    if (contador == 1) {
      $("nav").animate({
        right: "0",
      });
      contador = 0;
    } else {
      $("nav").animate({
        right: "-100%",
      });
      contador = 1;
    }
  });
}

$(document).ready(function () {
  $(".galeria").magnificPopup({
    fixedContentPos: true,
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      markup:
        '<div class="mfp-figure">' +
        '<div class="mfp-close"></div>' +
        '<div class="mfp-img"></div>' +
        "</div>",
    },
  });

  main();
  $(window).resize(function () {
    cambio();
  });
  cambio();
  function cambio() {
    if ($(window).width() >= 640) {
      $("nav").css("right", 0);
    }
    if ($(window).width() < 640) {
      $("nav").css("right", "-100%");
      contador = 1;
    }
  }

  $('a[href^="#"]').click(function () {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $("html");
    }
    $("html, body").animate({ scrollTop: destino.offset().top }, 700);
    return false;
  });

  $("ul li a").click(function () {
    var enlaces = document.getElementsByClassName("menu");
    Array.from(enlaces).forEach((element) => {
      $(element).removeClass("seleccionado");
    });
    $(this).addClass("seleccionado");
  });
});
