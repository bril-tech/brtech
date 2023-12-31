(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Project and Testimonial carousel
    $(".project-carousel, .testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(".product-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 25,
            loop: true,
            center: false,
            dots: false,
            nav: true,
            navText : [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ],
            responsive: {
    			0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:4
                }
            }
        });

        $('.brand-slider').slick({
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            swipeToSlide: true,
            centerMode: true,
            focusOnSelect: false,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

/* TO show thumbnail of the video. required API_KEY from google play console*/
    document.addEventListener('DOMContentLoaded', function () {
            var videoSrc = document.querySelector('.btn-play').getAttribute('data-src');
            var thumbnailElement = document.getElementById('thumbnail');

            // Fetch video details using YouTube Data API
            fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + extractVideoID(videoSrc) + '&key=YOUR_API_KEY')
                .then(response => response.json())
                .then(data => {
                    // Get the thumbnail URL from the API response
                    var thumbnailUrl = data.items[0].snippet.thumbnails.medium.url;

                    // Set the thumbnail as the background image of the button
                    thumbnailElement.style.backgroundImage = 'url(' + thumbnailUrl + ')';
                })
                .catch(error => console.error('Error fetching video details:', error));
        });

        // Helper function to extract video ID from the YouTube URL
        function extractVideoID(url) {
            var match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);
            return match && match[1];
        }
})(jQuery);

$(document).ready(function () {
    // Add click event listener to tab links
    $('.GD-Tabs__tabs__li__BTN').on('click', function (e) {
        e.preventDefault();

        // Get the target tab content ID from the href attribute
        var targetTabId = $(this).attr('href');
        console.log(targetTabId);
        // Hide all tab contents
        $('#menu1X, #menu2X, #menu3X, #menu4X').removeClass('active'); // Updated this line

        // Show the target tab content
        $(targetTabId + 'X').addClass('active');

        // Update active state for tab links
        $('.GD-Tabs__tabs__li').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});

function togglePopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



