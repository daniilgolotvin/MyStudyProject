document.addEventListener('DOMContentLoaded', function() {
	const mapButton = document.getElementById('map-button');

	if (mapButton) {
		mapButton.addEventListener('click', function() {
			const mainContent = document.getElementById('main-content');
			const mapContainer = document.getElementById('map-container');
			const buttons = document.querySelectorAll('.header__bottom-button');

			if (mainContent && mapContainer) {
				mainContent.style.display = 'none';
				mapContainer.style.display = 'block';

				if (typeof ymaps !== 'undefined') {
					if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(function(position) {
							const userCoordinates = [position.coords.latitude, position.coords.longitude];
							init(userCoordinates);

						}, function(error) {
							console.error("Error getting user location:", error);
							init([55.1910, 42.1023]);
						});
					} else {
						console.error("Geolocation is not supported by this browser.");
						init([55.1910, 42.1023]); 
					}
				} else {
					console.error("Yandex Maps library is not loaded.");
				}
			}

			buttons.forEach(btn => {
				if (btn.getAttribute('data-target') === 'map') {
					btn.classList.add('active');
				} else {
					btn.classList.remove('active');
				}
			});
		});
	}
});

function init(coordinates) {
	var myMap = new ymaps.Map("map-box", {
		center: coordinates,
		zoom: 10
	});




	document.getElementById('preloader').style.display = 'none';
}
