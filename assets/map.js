var maps = {
	
	detail_map : function(){
		function initialize() {
			var styles = [
              {
			    featureType: "administrative",
			    stylers: [
			      { saturation: -100 }
			    ]
			  },
			 { 
			    featureType: "water", 
			    elementType: "all", 
			    stylers: [ 
			      { visibility: "on" }, 
			      { color: "#c2c2c2" } 
			    ] 
			  },
			  {
				featureType: "administrative.country",
				elementType: "labels",
				stylers: [
					{ visibility: "off" }
				]
			  },
			  {
			    featureType: "landscape",
			    stylers: [
			      { saturation: -100 }
			    ]
			  },{
			    featureType: "poi",
			    stylers: [
			      { saturation: -100 }
			    ]
			  },{
			    featureType: "road",
			    stylers: [
			      { saturation: -100 },
			      { gamma: 0.85 }
			    ]
			  },{
			    featureType: "transit",
			    stylers: [
			      { saturation: -100 }
			    ]
			  }
			]; 
            
            var lat = $("#currentlat").attr('value');
            var lng = $("#currentlng").attr('value');
            //alert(latitude);
            var myLatlng1 = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
  
	        var mapOptions1 = {
	          center: myLatlng1,
	          zoom: 15,
	          styles: styles,
	          disableDefaultUI: true,
	        };
	        
	        var map1 = new google.maps.Map(document.getElementById('detailMap'), mapOptions1);
	        
	        var marker = new google.maps.Marker({
              position: myLatlng1,
              map: map1,
              icon: '/public/img/loc-detail-pin.png'
            });
	        
	        var offset = $('.locations-header').width() * -.1375;
	        map1.panBy(offset, 85);     	        
		}
	     
	    google.maps.event.addDomListener(window, 'load', initialize);
				
	},
	
	footer_map : function(){
		function initialize() {
			var styles = [
			  {
			    "featureType": "poi",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#46aea1" }
			    ]
			  },{
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      { "color": "#46aea1" }
			    ]
			  },{
			    "featureType": "administrative",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#51c8b9" }
			    ]
			  },{
			    "featureType": "landscape",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#51c8b9" }
			    ]
			  },{
			    "featureType": "transit",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#51c8b9" }
			    ]
			  },{
			    "featureType": "road",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#5be1d0" }
			    ]
			  },{
			    "featureType": "road",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      { "color": "#4ab7a9" }
			    ]
			  },{
			    "featureType": "all",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "color": "#245a53" }
			    ]
			  },{
			    "featureType": "all",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      { "color": "#57d8c8" }
			    ]
			  },{
			    "featureType": "road",
			    "elementType": "labels.icon",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  }

			];
	       
            var latitude = $("#location-lat").attr('value');
            var longitude = $("#location-lng").attr('value');
            //alert(latitude);
            var myLatlng = new google.maps.LatLng(parseFloat(latitude),parseFloat(longitude));

	        var mapOptions = {
	          center: { lat: parseFloat(latitude), lng: parseFloat(longitude)},
	          zoom: 11,
	          styles: styles,
              navigationControl: false,
              mapTypeControl: false,
	          disableDefaultUI: true,
	          scrollwheel: false,
              draggable: false,
	        };
	        
	        var map = new google.maps.Map(document.getElementById('footerMap'), mapOptions);
	            
	        var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              icon: '/public/img/loc-footer-pin.png'
            });   
	        
	        //center the pinpoint
	        var mobileWindow = $(window).width() * .625,
	            mobileLeftPoint = $(window).width() * -.5,
	            mobileOpenSpace = ($(window).width() * .375) / 2,
	            halfWindow = $(window).width() / 2,
	            leftPoint = (halfWindow * -.5),
	            openSpace = (halfWindow - 280 - (.083333333 * halfWindow)) / 2;
	        
	        if( $(window).width() < 768 ){
    	        var footerOffset = mobileLeftPoint + mobileWindow + mobileOpenSpace;
	        }
	        if( $(window).width() > 768 ){
    	        var footerOffset = leftPoint + 280 + (.033333333 * halfWindow) + openSpace;
	        }
	        if( $(window).width() > 1200 ){
    	        var footerOffset = leftPoint + 280 + (.083333333 * halfWindow) + openSpace;
	        }
	        
	        map.panBy(-footerOffset, 0);
		}
	     
	    google.maps.event.addDomListener(window, 'load', initialize);
				
	},
	
	init : function(){
    	_self = this;
		if($('#detailMap').length) _self.detail_map();
		if($('#footerMap').length) _self.footer_map(); 
	
		
	}	
};

$(function() {
	maps.init();	
	
        

				
});
