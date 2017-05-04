$(function() {
    

    $(document).on('click', function (e) {
        if($(e.target).closest(".mobile-nav,.close").length === 0) {
            //$(".project-img > img, .progress-bar, hr, .slogan").removeClass('is-overlayed');
            $('.content, .project-pic > img').removeClass('is-overlayed').addClass('no-overlayed');
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

    //textarea
    CKEDITOR.replace('textarea');
    

});
