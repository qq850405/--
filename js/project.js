$(function() {

    //$('h1').fadeIn(750).next().fadeIn(1800);
    $('h1').animate({'opacity': '1'}, 750).delay(250).next().animate({'opacity': '1'}, 750).next().delay(500).animate({'opacity': '1'}, 750).next().delay(750).animate({'opacity': '1'}, 750).next().delay(1000).animate({'opacity': '1'}, 750);
    $('.progress > .bar').addClass('start');

    $(document).on('click', function (e) {
        if($(e.target).closest(".mobile-nav,.close").length === 0) {
            //$(".project-img > img, .progress-bar, hr, .slogan").removeClass('is-overlayed');
            $('.content, .project-pic > img').removeClass('is-overlayed').addClass('no-overlayed');
        }
    });

    var i = 0;

    if(i == 1350) {
        clearInterval(number);
    }

    var number = setInterval(function (){
        if(i <= 90){
            $('.deadline').html(i);
        }
        if(i <= 150){
            $('.num').html(i);
        }
        i++;
    }, 10);

    var k = 0;

    if(k == 1350) {
        clearInterval(number1);
    }

    var number1 = setInterval(function (){
        
        if(k <= 1350){
            $('.total').html('$'+k);
        }
        k = k + 10;
    }, 10);
    
    
    
    
    
    

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
            //navbar animation
            if(scrollTop > 0){
                $('.navbar').addClass('white is-shrinked');
                $('.underline').addClass('black-underline');
                $('.nav-menu, .nav-brand, .nav-menu > li, li.nav-search, .dropdown-list, .nav-search > .icon-search-open').addClass('is-shrinked');
                
            }else if(scrollTop == 0){
                $('.navbar').removeClass('white is-shrinked');
                $('.underline').removeClass('black-underline');
                $('.nav-menu, .nav-brand, .nav-menu > li, li.nav-search, .dropdown-list, .nav-search > .icon-search-open').removeClass('is-shrinked');
                
            }
    });

    //paralax


    //textarea
    CKEDITOR.replace('textarea');
    

});
