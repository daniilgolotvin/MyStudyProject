ymaps.ready(init);
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle__chevron-button ');
  const content = document.querySelector('.navigation__content');


  toggleButton.addEventListener('click', function() {
    content.classList.toggle('navigation__content--collapsed');
    toggleButton.classList.toggle('toggle__chevron-button--rotated');
  });
});



document.getElementById('map-button').addEventListener('click', function() {
	document.getElementById('main-content').style.display = 'none';
	document.getElementById('map-container').style.display = 'block';
	ymaps.ready(init);
});

function init() {
	var myMap = new ymaps.Map("map", {
			center: [55.76, 37.64], // Укажите координаты места проживания
			zoom: 10
	});

	var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
			hintContent: 'Место проживания',
			balloonContent: 'Здесь вы проживаете'
	});

	myMap.geoObjects.add(myPlacemark);

	// Скрыть прелоадер после загрузки карты
	document.getElementById('preloader').style.display = 'none';
}
