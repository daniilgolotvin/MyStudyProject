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
									ymaps.ready(function() {
											init([55.76, 37.64]); 
									});
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

	var myPlacemark = new ymaps.Placemark(coordinates, {
			hintContent: 'Место проживания',
			balloonContent: 'Здесь вы проживаете'
	});

	myMap.geoObjects.add(myPlacemark);

	document.getElementById('preloader').style.display = 'none';
}
