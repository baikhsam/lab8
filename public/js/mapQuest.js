function initMap() {
	// add your code here
	L.mapquest.key = 'VwqVFKWZ0ENerTy4QNgBeVyZ84LrlI1U';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.8788033, -117.238106],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false
	});

	//Add marker to map
	L.marker([32.8788033, -117.238106]).addTo(map);
}