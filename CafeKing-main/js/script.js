$(document).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({ full_width:true });
    $('.parallax').parallax();
    $('.myreviews').carousel({
        numVisible : 7,
        shift: 55,
        padding:55
    });
    $('.datepicker').datepicker({
        disableWeekends: true,
        yearRange: 1
    });
    $('.timepicker').timepicker();
    $('a[href^="#"]').on('click', function(e){
        var href = $(this).attr('href');
        var target = $(href);
        if (target.length){
            e.preventDefault();
            var offset = $('.nav-fixed').outerHeight() || 0;
            $('html, body').animate({scrollTop: target.offset().top - offset}, 600);
            var sidenav = M.Sidenav.getInstance(document.getElementById('mobile-demo'));
            if (sidenav){ sidenav.close(); }
        }
    });
})
