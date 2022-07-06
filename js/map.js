function initialize(param1,param2,param3) {
	var mapCanvas = document.getElementById(param1);
	var mapOptions = {
	  scrollwheel: false,
	  center: new google.maps.LatLng(40.6700, -73.9400),
	  zoom: 17,
	  styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#d4d4d4"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[
	  {"color":"#d4d4d4"},{"lightness":20}
	  ]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fcfcfc"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#fcfcfc"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fcfcfc"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#e4e4e4"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e4e4e4"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#d4d4d4"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
	}
	var map = new google.maps.Map(mapCanvas, mapOptions)
	var marker = new google.maps.Marker({
		position: map.getCenter(),
		icon: '../images/point.png',
		map: map
	});
};