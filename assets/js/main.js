$(document).ready(function () {
    console.log('ready');

    $('.dropline').click(function () {
        $(this).removeClass('animated infinite headShake delay-1s')
        $(this).toggleClass('animated hinge delay-0s');
    })

    // $('#menu1, #menu2, #menu3, #menu4').hover(
    //     function () {
    //         $(this).toggleClass('animated swing delay-0s');
    //     }
    // );

    //Fade in menu

    setTimeout(function () {
        $("#menu1").toggleClass('animated fadeIn delay-0s').css("display", "inline");
    }, 1100)
    setTimeout(function () {
        $("#menu2").addClass('animated fadeIn delay-0s').css("display", "inline");
    }, 1200)
    setTimeout(function () {
        $("#menu3").addClass('animated fadeIn delay-0s').css("display", "inline");
    }, 1300);
    setTimeout(function () {
        $("#menu4").addClass('animated fadeIn delay-0s').css("display", "inline");
    }, 1400);

    //Click menus

    $('#menu1, .menu1style').click(() => {
        $('.services, .about,.contact, .content2, .content3, .content4').addClass('fadeOutRightBig');
        $('.home, .content1').removeClass('fadeOutRightBig').show();
        $('#menu3, #menu2, #menu4').css({
            'color': '',
            'border-bottom': '',
            'border-radius': '',
            'margin-left': '',
            'margin-right': ''
        });
        $('#menu1').css({
            'color': 'rgb(255, 223, 165)',
            'border-bottom': '2px solid yellow',
            'border-radius': '15%',
            'margin-left': '25px',
            'margin-right': '25px'
        });
    });

    $('#menu2').click(() => {
        $('.home, .about,.contact, .content1, .content3, .content4').addClass('fadeOutRightBig');
        $('.services, .content2').removeClass('fadeOutRightBig').show();
        $('#menu1').removeClass('menu1style')
        $('#menu3, #menu4').css({
            'color': '',
            'border-bottom': '',
            'border-radius': '',
            'margin-left': '',
            'margin-right': ''
        });
        $('#menu2').css({
            'color': 'rgb(254, 127, 127)',
            'border-bottom': '2px solid yellow',
            'border-radius': '15%',
            'margin-left': '25px',
            'margin-right': '25px'
        });
    });
    $('#menu3').click(() => {
        $('.services, .home, .contact, .content1, .content2, .content4').addClass('fadeOutRightBig');
        $('.about, .content3').removeClass('fadeOutRightBig').show();
        $('#menu1, #menu2, #menu4').css({
            'color': '',
            'border-bottom': '',
            'border-radius': '',
            'margin-left': '',
            'margin-right': ''
        });
        $('#menu3').css({
            'color': 'rgb(108, 108, 255)',
            'border-bottom': '2px solid yellow',
            'border-radius': '15%',
            'margin-left': '25px',
            'margin-right': '25px'
        });
    });
    $('#menu4').click(() => {
        $('.services, .about,.home, .content1, .content2, .content3').addClass('fadeOutRightBig');
        $('.contact, .content4').removeClass('fadeOutRightBig').show();
        $('#menu1, #menu2, #menu3').css({
            'color': '',
            'border-bottom': '',
            'border-radius': '',
            'margin-left': ''
        });
        $('#menu4').css({
            'color': '#A2CE50',
            'border-bottom': '2px solid yellow',
            'border-radius': '15%',
            'margin-left': '25px'
        })
    });
})