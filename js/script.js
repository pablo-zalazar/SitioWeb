var contador = 1;

function main() {
    $('.menuBar a').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            $('nav').animate({
                left: '-100%'
            });
            contador = 1;
        }
    });
};

$(document).ready(function () {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': false,
        'disableScrolling': true
      })

    main();
    $(window).resize(function () {
        cambio();
    });
    cambio();
    function cambio(){
        if ($(window).width() >= 768) {
            $('nav').css("left", 0);
        }
        if ($(window).width() < 768) {
            $('nav').css("left", "-100%");
            contador = 1;
        }
    }

    $('a[href^="#"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
          destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
          destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 500);
        return false;
      });

    $('ul li a').click(function(){
        var enlaces = document.getElementsByClassName("menu")
        Array.from(enlaces).forEach(element => {
            $(element).removeClass("seleccionado")
        });
        $(this).addClass("seleccionado");
    });
})


