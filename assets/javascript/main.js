

$(document).ready(function(){
    // ************************* GENERAL ***********************
    // JS for slideshow
    $('.ui.dropdown').dropdown();
    // JS for NAV
    $('#menu-toggle').on('click',function(){
        $('.ui.sidebar').sidebar('toggle')
        console.log('YOYOYO')
    })
    // *********************************************************
    
})