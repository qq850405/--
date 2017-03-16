
$(function() {

    $('.close').on('click', function() {

        if(!$('.footer-nav').hasClass('is-overlayed'))
            $('.footer-nav').removeClass('no-overlayed').addClass('is-overlayed');
        else{
            $('.footer-nav').removeClass('is-overlayed').addClass('no-overlayed');
        }
        
    });
    
    $(document).on('click', function (e) {
        if($(e.target).closest(".mobile-nav,.close").length === 0) {
            $('.footer-nav').removeClass('is-overlayed').addClass('no-overlayed');
        }
    });
    //nav-search toggle
    $('li.nav-search > .icon-search-open').on('click', function() {
        $('li.nav-search > .icon-search, li.nav-search > .icon-search-open, .nav-menu > li.nav-search > form, .nav-menu > li.nav-search > form > input').addClass('is-opened');
    });

    //nav-search submit
    $('.nav-menu > li.nav-search > .icon-search').on('click', function() {
        $('#form-nav').submit();
    });

    //mobile-nav toggle
    $('.close').on('click', function() {
        $('.mobile-nav, .close, .overlay').toggleClass('is-opened');
        $('.project-img > img, .progress-bar, hr').toggleClass('is-overlayed');
            if(!$('.slogan').hasClass('is-overlayed'))
                $('.slogan').removeClass('no-overlayed').addClass('is-overlayed');
            else{
                $('.slogan').removeClass('is-overlayed').addClass('no-overlayed');
            }
    });

    //mobile-nav-search toggle
    $('.mobile-nav-menu > .nav-search > i').on('click', function() {
        $('.mobile-nav-menu > .nav-search > form, .mobile-nav-menu > .nav-search > form > input').toggleClass('is-opened');
    });

    //mobile-nav-search submit
    $('.mobile-nav-menu > li.nav-search > .icon-search').on('click', function() {
        $('#form-mobile-nav').submit();
    });

    //mobile-dropdown
    $('.mobile-dropdown1 > .mobile-dropdown-btn').on('click', function() {
        $('.mobile-dropdown1 > .mobile-dropdown-list').toggleClass('is-opened');
    });

    $('.mobile-dropdown2 > .mobile-dropdown-btn').on('click', function() {
        $('.mobile-dropdown2 > .mobile-dropdown-list').toggleClass('is-opened');
    });

    

    //click anywhere else to close
    $(document).on('click', function (e) {
        if($(e.target).closest("li.nav-search").length === 0) {
            $(".nav-menu > li.nav-search > form, li.nav-search > form > input, li.nav-search > .icon-search, li.nav-search > .icon-search-open").removeClass('is-opened');
        }

        if($(e.target).closest(".mobile-nav,.close").length === 0) {
            $(".mobile-nav, .close, .overlay").removeClass('is-opened');
        }

        if($(e.target).closest(".mobile-dropdown").length === 0) {
            $(".mobile-dropdown-list").removeClass('is-opened');
        }
    });    
});

if(!$('body').hasClass('index')){
    $(function (){

        // //bg-img
        // var images = [
        //     '../pics/home.jpg',
        //     '../pics/home2.jpeg',
        //     '../pics/home3.jpeg'
        // ]
        


        // var i = 0;
        
        // setInterval(function() {
        //     $('.home-bg').style.backgroundImage = "url(" + images[i] + ")";
        //     i = i + 1;
        //     if (i == images.length) {
        //         i =  0;
        //     }
        // }, 1000);

        //slogan
        $('.slogan > h1').fadeIn(750).next().next().fadeIn(1800);
        $('.home-btn').delay(1000).fadeIn(750);


        
            
        $('.close').on('click', function() {
            
            
        });

        $(document).on('click', function (e) {
            if($(e.target).closest(".mobile-nav,.close").length === 0) {
                $(".project-img > img, .progress-bar, hr, .slogan").removeClass('is-overlayed');
                $('.slogan').removeClass('is-overlayed').addClass('no-overlayed');
            }
        });
    
        $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
            var x = $('.about-us').offset().top;

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


            //about-us fade in
            if(scrollTop >= x){
                $('.about-us > article').fadeIn(800);
            }
                
            var sloganTop = $('.slogan').offset().top;
            //parallax
            $('.home-bg').css('top', (scrollTop / 2.5) + 'px');
            $('.slogan').css({
                'transform': 'translate(-50%,' + (scrollTop / 12) +'px)'
            });
            $('.search').css({
                'transform': 'translate(-50%,' + (scrollTop / 12) +'px)'
            });



            if(scrollTop >= 1500){
                $('.project').each(function(i){
                setTimeout(function(){
                    $('.project').eq(i).addClass('animate');
                }, 130 * (i+1));
                });
            }
        });
    });
}



if(!$('body').hasClass('project')){

    $('.close').on('click', function() {

        if(!$('.content').hasClass('is-overlayed'))
            $('.content').removeClass('no-overlayed').addClass('is-overlayed');
        else{
            $('.content').removeClass('is-overlayed').addClass('no-overlayed');
        }
        
    });
    

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 0){
            $('.navbar, .nav-brand, .nav-menu, .nav-menu > li, .dropdown-list').addClass('is-shrinked');
        }else{
            $('.navbar, .nav-brand, .nav-menu, .nav-menu > li, .dropdown-list').removeClass('is-shrinked')
        }
    });
}
