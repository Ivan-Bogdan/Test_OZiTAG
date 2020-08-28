const burger = document.querySelector(".menu-mobile");
const burger2 = document.querySelector(".main-menu");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    burger2.classList.toggle("open-menu");
});

  $(window).resize(function () {
    let width = $('body').innerWidth();
    if (width < 950) {
        $('.a1').toggleClass('has-submenu firso-mobile');
    }
  });

  $("firso-mobile").click(function () {
         $(this).toggleClass("active");
       });
    
    $('.has-submenu.firso-mobile').click(function (e) {
        e.preventDefault();
        if (!($(this).hasClass('active'))) {
            $(this).addClass('active').parent().find('.submenu').addClass('open-menu');
        } else {
            $(this).removeClass('active').parent().find('.submenu').removeClass('open-menu');
        }
    });

    $('.a1').click(function (e) {
        e.preventDefault();
        if (!($(this).hasClass('active'))) {
            $(this).addClass('active').parent().find('.submenu').addClass('open-menu');
        } else {
            $(this).removeClass('active').parent().find('.submenu').removeClass('open-menu');
        }
    });