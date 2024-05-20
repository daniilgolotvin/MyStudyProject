ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map-box", {
        center: [55.76, 37.64], 
        zoom: 10
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Мое местоположение',
        balloonContent: 'Я здесь'
    });

    myMap.geoObjects.add(myPlacemark);
		var preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }

    function setUserLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var userCoords = [position.coords.latitude, position.coords.longitude];
                myMap.setCenter(userCoords, 12); 

                var userPlacemark = new ymaps.Placemark(userCoords, {
                    hintContent: 'Ваше местоположение',
                    balloonContent: 'Вы здесь'
                });

                myMap.geoObjects.add(userPlacemark);
            }, function(error) {
                console.error("Ошибка при получении геолокации: ", error);
            });
        } else {
            console.error("Геолокация не поддерживается вашим браузером");
        }
    }

    setUserLocation();
}
