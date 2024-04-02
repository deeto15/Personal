
$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Interactive header
    $('header').hover(function() {
        $(this).css('background-color', '#555');
    }, function() {
        $(this).css('background-color', '#333');
    });

    // Logo animation
    var logo = document.getElementById('logo');
    anime({
        targets: logo,
        translateY: [
            { value: -20, duration: 500 },
            { value: 0, duration: 800 }
        ],
        loop: true
    });
});
