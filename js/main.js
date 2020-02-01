$().ready(function () {

  let activeClass = "menu-list__item_active";

  let btn = $('.menu-list__title');

  btn.click(function (event) {
    event.preventDefault();
    var parent = $(this).parent();

    if (parent.hasClass(activeClass)) {
      parent.removeClass(activeClass);
    } else {
      btn.parent().removeClass(activeClass);
      parent.addClass(activeClass);
    }
  });



  let currentSlide = 0;
  let arrayImgList = ['../img/darkburger.png', '../slide/burger_sandwich_PNG4124.png', '../slide/Chiken burger.png', '../slide/NYC-Diner-Bacon-Cheeseburger.png', '../slide/Spicy_Shrimp_Burger.png']
  let objectList = [
    {
      src: '../img/darkburger.png',
      burgerName: 'Dark beef burger',
      title: 'Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
    {
      src: '../slide/burger_sandwich_PNG4124.png',
      burgerName: 'SANDWICH',
      title: 'Ваш старый добрый знакомый , с рубленым бифштексом из 100% говядины, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
    {
      src: '../slide/Chiken burger.png',
      burgerName: 'Chiken',
      title: 'Ваш старый добрый знакомый, с рубленым бифштексом из 100% КУРИЦЫ, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
    {
      src: '../slide/NYC-Diner-Bacon-Cheeseburger.png',
      burgerName: 'Bacon \n Cheeseburger',
      title: 'Ваш старый добрый знакомый Bacon-Cheeseburger, с беконом, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    },
    {
      src: '../slide/Spicy_Shrimp_Burger.png',
      burgerName: 'Shrimp Burger',
      title: 'Ваш старый добрый знакомый Shrimp Burger,c мясом, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.',
    }
    
  ]


  $('#moveBack').on('click', function () {
    if (currentSlide > 0) {
      currentSlide--;
      let current = objectList[currentSlide];
      $('.burger-img--icon').attr("src", current.src);
      $('.title--burger').text(current.burgerName);
      $('.burger-description__recipe').text(current.title);
    }
  });

  $('#moveForward').on('click', function () {
    if (currentSlide < objectList.length - 1) {
      currentSlide++;
      let current = objectList[currentSlide];
      $('.burger-img--icon').attr("src", current.src);
      $('.title--burger').text(current.burgerName);
      $('.burger-description__recipe').text(current.title);
    }
  });
});