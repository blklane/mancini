$(document).ready(function () {
    $('.gallery').hide();
    $('.csi-dropdown').hide();
    $('.button').children().on('click', function(){
        $(this).parent().addClass("animated tada");
    });

    function initialize() {
        var myLatlng = new google.maps.LatLng(37.4206, -121.8917);
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(37.4315, -121.8917),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('maps-canvas'),
        mapOptions);

        var contentString = '<div id="content">' +
            '<h1>B.T. Mancini Headquarters</h1>' +
            '<div id="bodyContent">' +
            '<span>876 Milpitas Blvd.</span><br>' + '<span>Milpitas, CA</span>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'B.T. Mancini Inc'
        });
        infowindow.open(map, marker);
    
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    

    function closeSafety() {
        $('#safety .container, #bar a').fadeOut(500);
        $('#safety, #safety .container').addClass('safety-squish');
        $('#safety .container').removeClass('fadeInDown');
        $('#safety .container').addClass('fadeOutUp');
        $('#overlay').removeClass('open');
        $('#safety img').removeClass('bounceIn');
        $('documentElement').scrollTop('0px');
    }

    function openSafety() {
        // returns width of browser viewport
        $('#safety, #safety .container').removeClass('safety-squish');
        $('#safety .container, #bar a').fadeIn(500);
        $('#overlay').addClass('open');
        $('#safety .container').addClass('fadeInDown').removeClass('fadeOutUp');
        $('#safety img').addClass('bounceIn');
    }



    function gallerySlider() {
      
        var classy = $(this).data("id"),
        searchGallery = '.gallery[data-id=' + classy + ']',
        newGallery = $(searchGallery);
        
        if($(this).hasClass('selected')){
            // $(this).removeClass('selected').find('.project > .dropdown').slideToggle();
        } else {
            $('.selected').removeClass('selected').closest('.project').find('.dropdown').slideUp();
            $(this).addClass('selected').find('.dropdown').slideDown();
        }

        var pastGallery = $('.gallery[data-active=true]');
        if(pastGallery.length > 0 && pastGallery !== newGallery){
            pastGallery.hide().removeClass('fadeInLeft').addClass('animated fadeOutUp').removeAttr('data-active');
        }
        if(pastGallery !== newGallery){
            newGallery.show().removeClass('fadeOutUp').addClass('animated fadeInLeft').attr('data-active', true);
        }
    }

    function showStatus(){
        $(this).closest('.csi-code').find('.csi-dropdown').slide();
    }


$('.project').on('click', gallerySlider);

$('#safe, option').click(function () {
    openSafety();
});

$('#btm-logo').mouseenter(function () {
    $('#btm-logo').addClass('animated rotateIn');
});

$('#btm-logo').mouseleave(function () {
    $('#btm-logo').removeClass('rotateIn');
});

$('.division').mouseenter(function () {
    $('a.division-link', this).removeClass('fadeOutDown');
    $('a.division-link', this).css('display', 'block');
    $('a.division-link', this).addClass('animated fadeInDown');

});
$('.division').mouseleave(function () {
    $('.division-text, a.division-link', this).removeClass('fadeInDown');
    $('a.division-link', this).addClass('animated fadeOutDown');
});

$('#bar').click(function () {
    closeSafety();
});

$('.csi-code').on('click', showStatus);
closeSafety();
});