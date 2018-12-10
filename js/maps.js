ymaps.ready(init);    
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [55.74005112, 37.57265452],
                zoom: 12
            }); 

            var myPin = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/map-marker.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
            });


            var myPlacemark1 = new ymaps.Placemark([56.3407,37.5245]);
            var myPlacemark2 = new ymaps.Placemark([56.3432,37.5348]);
            var myPlacemark3 = new ymaps.Placemark([56.3365,37.5304]);
            var myPlacemark4 = new ymaps.Placemark([56.3464,37.5376]);
            myPin.add(myPlacemark1);
            myPin.add(myPlacemark2);
            myPin.add(myPlacemark3);
            myPin.add(myPlacemark4);
            myMap.geoObjects.add(myPin);
        }