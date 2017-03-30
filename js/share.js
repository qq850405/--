
$(function() {

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
        $('.navbar, .mobile-nav-brand, .project-img > img, .progress-bar, hr, h1, .project-pic > img, .footer-nav, .form-community > input').toggleClass('is-overlayed');
            if(!$('.slogan').hasClass('is-overlayed'))
                $('.slogan').removeClass('no-overlayed').addClass('is-overlayed');
            else{
                $('.slogan').removeClass('is-overlayed').addClass('no-overlayed');
            }
    });

    $(document).on('click', function (e) {
        if($(e.target).closest(".mobile-nav,.close").length === 0) {
            $('.footer-nav').removeClass('is-overlayed');
        }

        if($(e.target).closest(".mobile-nav,.close").length === 0) {
                $(".navbar, .mobile-nav-brand, .project-img > img, .progress-bar, hr, h1, .slogan, .form-community > input").removeClass('is-overlayed');
                //$('.slogan').removeClass('is-overlayed');
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




