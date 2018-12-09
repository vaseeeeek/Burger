ymaps.ready(init);    
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [55.75399400, 37.62209300],
                zoom: 9
            }); 

            var myPin = new ymaps.GeoObjectCollection({}, {
              iconLayout: 'default#image',
              iconImageHref: '/img/map-marker.png',
              iconImageSize: [30, 42],
              iconImageOffset: [-3, -42]
            });


            var myPlacemark1 = new ymaps.Placemark([55.74005112, 37.57265452]);
            var myPlacemark2 = new ymaps.Placemark([55.77412488, 37.64406566]);
            var myPlacemark3 = new ymaps.Placemark([55.73230292, 37.63857249]);
            var myPlacemark4 = new ymaps.Placemark([55.71525143, 37.60561351]);
            myPin.add(myPlacemark1);
            myPin.add(myPlacemark2);
            myPin.add(myPlacemark3);
            myPin.add(myPlacemark4);
            myMap.geoObjects.add(myPin);
        }
        // 55.74005112, 37.57265452
        //       55.77412488, 37.64406566
        //       55.73230292, 37.63857249
        //       55.71525143, 37.60561351