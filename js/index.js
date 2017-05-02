$(function (){


        //slogan
        $('.slogan > h1').fadeIn(750).next().next().fadeIn(1800);
        $('.home-btn').delay(1000).fadeIn(750);


        
        

        

        
    
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



            if(scrollTop >= 1500){
                $('.project').each(function(i){
                setTimeout(function(){
                    $('.project').eq(i).addClass('animate');
                }, 130 * (i+1));
                });
            }
        });
    });

    