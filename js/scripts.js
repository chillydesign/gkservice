import slick from '../node_modules/slick-carousel/slick/slick.js';
import featherlight from '../node_modules/featherlight/release/featherlight.min.js';

(function ($, root, undefined) {

    $(function () {

        'use strict';

        var $window = $(window);
        var $body = $('body');




        // mobile menu button
        var $menu_button = $('#menu_button');
        var $nav = $('nav');
        $menu_button.on('click', function(e){
            e.preventDefault();
            $nav.toggleClass('visible');
        });

        // if press escape key, hide menu
        $(document).on('keydown', function(e){
            if(e.keyCode == 27 ){
                $nav.removeClass('visible');
            }
        })

        $('#main').on('click', function() {
            $nav.removeClass('visible');
        });



        // SLIDE TO SECTION ON CLICK
        $(' .slidelink').on('click', function(e){

            e.preventDefault();
            var $this = $(this);
            var $href = $this.attr('href');
            var $hash = $href.split('#')[1];

            // IF THERE IS AN ID ON THE PAGE, SLIDE TO THAT LINK
            // OTHERWISE USE JS TO REDIRECT TO PAGE
            if (typeof $hash !== 'undefined') {
                var $location = $('#' + $hash);
                if($location.length  > 0) {
                    $("html, body").animate({ scrollTop: $location.offset().top }, 1000);
                    $nav.removeClass('visible');
                } else {
                    window.location.href = $href;
                }
            } else {
                window.location.href = $href;
            }

        });






        // START OF CAROUSEL

        $('.carousel').slick({
            // options
            infinite: true,
            accessibility: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-prev">&lt;</div>',
            nextArrow: '<div class="slick-next">&gt;</div>',
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false
                    }
                }
            ]

        });
        // END OF CAROUSEL


        // MAP
        // MEMBERS MAP
        if (typeof map_location != 'undefined') {

            var map_theme = [{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#C5E3BF"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#D1D1B8"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#C6E2FF"}]}];

            var map_options = {
                zoom: 15,
                mapTypeControl: true,
                scrollwheel: false,
                draggable: true,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: map_theme
            };


            var location_map_container = $('#map_container');
            location_map_container.css({
                width : '100%'
            })

            var location_map = new google.maps.Map(location_map_container.get(0), map_options);
            var latlng = new google.maps.LatLng(  map_location.lat, map_location.lng   );
            var infowindow = new google.maps.InfoWindow({content: ''});
            var marker = new google.maps.Marker({
                position: latlng,
                map: location_map,
                optimized: false
            });

            marker.addListener('click', function(){
                infowindow.setContent( map_location.title );
                infowindow.open(location_map, this);
            })

            location_map.setCenter( latlng );



        };
        // END OF MAP







    });

})(jQuery, this);
