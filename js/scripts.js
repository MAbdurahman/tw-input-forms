/* ============================================
            preloader
===============================================*/
$(window).on('load', function () {
    // makes sure that whole site is loaded
    console.log('and window has loaded,')
});

/*=============================================
         tw-input-forms scripts
================================================*/
$(function () {

    console.log('The DOM is ready, ')
//**************** effect 04 secripts ****************//
    $('.effect-04').val('');

    $('.js-input-effect input').focusout(function () {
        if ($(this).val() !== '') {
            $(this).addClass('has-content');
        } else {
            $(this).removeClass('has-content');
        }
    });

    //**************** effect 07 scripts ****************//
    $('.effect-07').val('');

    $('.js-effect-07 input').focusout(function () {
        if ($(this).val() !== '') {
            $(this).addClass('has-content');
        } else {
            $(this).removeClass('has-content');
        }
    });

});