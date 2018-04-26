

$(document).ready(function(){

    // JS for Dropdown --- in progress
    $('.ui.dropdown').dropdown();

    // JS for NAV
    $('#menu-toggle').on('click',function(){
        $('.ui.sidebar').sidebar('toggle')
    })
  
    // Slideshow - Semantic UI
    // $('#image-holder')
    // .transition('set looping')


    // $('#image-holder').glide({
    //     autoplay: true,
    //     arrowsWrapperClass: 'slider-arrows',
    //     arrowRightText: '',
    //     arrowLeftText: ''
    //   })

    // Slideshow - jQuery
    // $('#image-holder')

    displayImage()
})