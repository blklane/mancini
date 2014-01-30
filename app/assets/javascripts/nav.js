$(document).ready(function () {

    function initialize() {
      var myLatlng = new google.maps.LatLng(37.4206, -121.8917);
      var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(37.4315, -121.8917),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById('maps-canvas'),
          mapOptions);

      var contentString = '<div id="content">'+
      '<h1>B.T. Mancini Headquarters</h1>'+
      '<div id="bodyContent">'+
      '<span>876 Milpitas Blvd.</span><br>'+'<span>Milpitas, CA</span>'+
      '</div>'+
      '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'B.T. Mancini Inc'
        });
        infowindow.open(map,marker);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

        function closeSafety() {
        $('#safety .container, #bar a').fadeOut(500);
        $('#safety, #safety .container').addClass('safety-squish');
        $('#safety .container').removeClass('fadeInDown');
        $('#safety .container').addClass('animated fadeOutUp');
        $('#overlay').removeClass('open');
        $('#safety img').removeClass('bounceIn');
        $('documentElement').scrollTop('0px');
    }

    function openSafety() {
        // returns width of browser viewport
        $('#safety, #safety .container').removeClass('safety-squish');
        $('#safety .container, #bar a').fadeIn(500);
        $('#overlay').addClass('open');
        $('#safety .container').addClass('animated fadeInDown');
        $('#safety .container').removeClass('fadeOutUp');
        $('#safety img').addClass('animated bounceIn');
    }

    $('#safe, option').click(function () {
        openSafety();
    });

    $('#btm-logo').mouseenter(function(){
        $('#btm-logo').addClass('animated rotateIn');
    });

    $('#btm-logo').mouseleave(function(){
        $('#btm-logo').removeClass('rotateIn');
    });

    $('.csi-code').click(function () {
        $('.products, #products-bar').slideUp('slow');
        $('#division-subsection').slideDown('slow').css('height', '100%');
        $('.csi-codes, #csi-bar').slideDown('slow').css('display', 'block');
    });

    $('#csi-bar').click(function() {
        $('.csi-codes, #csi-bar').slideUp('slow');
    })

    $('.products-services').click(function () {
        //showText();
        $('.csi-codes, #csi-bar').slideUp('slow');
        $('#division-subsection').slideDown('slow').css('height', '100%');
        $('.products, #products-bar').slideDown('slow').css('display', 'block');
    });

    $('#products-bar').click(function() {
        $('.products, #products-bar').slideUp('slow');
    })

    $('.division').mouseenter(function () {
        //showText();
        $('.division-text, a.division-link', this).removeClass('fadeOutDown');
        $('.division-text, a.division-link', this).css('display', 'block');
        $('.division').not(this).fadeTo( "slow" , 0.8);
        $('.division-text, a.division-link', this).addClass('animated fadeInUp');

    });
    $('.division').mouseleave(function () {
        $('.division-text, a.division-link', this).removeClass('fadeInUp');
        $('.division').fadeTo( "fast" , 1);
        $('.division-text, a.division-link', this).addClass('animated fadeOutDown');
    });

    $('#bar').click(function () {
        closeSafety();
    });

    
closeSafety();
});