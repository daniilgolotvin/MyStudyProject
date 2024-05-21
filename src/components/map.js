document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.header__bottom-button');
	const blocks = document.querySelectorAll('.content-block');
	let mapInitialized = false; // Флаг для проверки инициализации карты

	buttons.forEach(button => {
			button.addEventListener('click', function() {
					const targetId = button.getAttribute('data-target');

					blocks.forEach(block => {
							if (block.id === targetId) {
									block.classList.add('active');
									block.style.display = 'flex';
							} else {
									block.classList.remove('active');
									block.style.display = 'none';
							}
					});

					buttons.forEach(btn => {
							if (btn === button) {
									btn.classList.add('active');
							} else {
									btn.classList.remove('active');
							}
					});

					if (targetId === 'map' && !mapInitialized && typeof ymaps !== 'undefined') {
							mapInitialized = true; // Помечаем, что карта уже была инициализирована
							ymaps.ready(initMap);
					}
			});
	});

	function initMap() {
			var myMap = new ymaps.Map("map-box", {
					center: [55.76, 37.64],
					zoom: 10
			});

			var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Место проживания',
					balloonContent: 'Здесь вы проживаете'
			});

			myMap.geoObjects.add(myPlacemark);
			document.getElementById('preloader').style.display = 'none';
	}
});
