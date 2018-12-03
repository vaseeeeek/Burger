$().ready(function () {
  $('.team__members').on('click', function(){
      $( this ).toggleClass('team__members--active');
      $('.team__members__name').toggleClass('team__members__name--active');
      $('.team__members__desc').toggleClass('team__members__desc--active');
  })
})
