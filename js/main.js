$(function (){
    //slogan
    $('.slogan > h1').fadeIn(750).next().next().fadeIn(1800);
    $('.home-btn').delay(1000).fadeIn(750);


    //navbar animation
    //$('.navbar').on('mouseover', function(){
       // $(this).addClass('white');
    //});
    //$('.navbar').on('mouseout', function(){
      //  $(this).removeClass('white');
   // });

    
    
    //nav-search    
    $('li.nav-search > .icon-search-open').on('click', function() {
        
        
        $('li.nav-search > .icon-search, li.nav-search > .icon-search-open, .nav-menu > li.nav-search > form, .nav-menu > li.nav-search > form > input').addClass('is-opened');
            
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest("li.nav-search").length === 0) {
            $(".nav-menu > li.nav-search > form, li.nav-search > form > input, li.nav-search > .icon-search, li.nav-search > .icon-search-open").removeClass('is-opened');
        }

        if ($(e.target).closest(".mobile-nav,.close").length === 0) {
            $(".mobile-nav, .close").removeClass('is-opened');
        }
    });  
    
    $('.nav-menu > li.nav-search > .icon-search').on('click', function() {
        $('#form-nav').submit();
    });

    $('.mobile-nav-menu > li.nav-search > .icon-search').on('click', function() {
        $('#form-mobile-nav').submit();
    });
    //mobile-nav toggle
    $('.close').on('click', function() {
        $('.mobile-nav').toggleClass('is-opened');
        $('.close').toggleClass('is-opened');
    });


    $('.mobile-nav-menu > .nav-search > i').on('click', function() {
        $('.mobile-nav-menu > .nav-search > form, .mobile-nav-menu > .nav-search > form > input').toggleClass('is-opened');
    });



    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var x = $('.about-us').offset().top;

        //navbar animation
        if(scrollTop > 0){
            $('.navbar').addClass('white is-shrinked');
            $('.underline').addClass('black-underline');
            $('.nav-menu, .nav-brand, .nav-menu > li, li.nav-search, .dropdown-list, .nav-search > .icon-search-open').addClass('is-shrinked');
            //$('.navbar').on('mouseout', function() {
                //$(this).addClass('white');
           // });   
        }else if(scrollTop == 0){
            $('.navbar').removeClass('white is-shrinked');
            $('.underline').removeClass('black-underline');
            $('.nav-menu, .nav-brand, .nav-menu > li, li.nav-search, .dropdown-list, .icon-search').removeClass('is-shrinked');
            //$('.navbar').on('mouseover', function() {
                //$(this).addClass('white');
          //  });
            //$('.navbar').on('mouseout', function() {
               // $(this).removeClass('white');
           // });
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