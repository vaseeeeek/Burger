$().ready(function (){
  $('#openMenu').click(function(){
    $('#hide-menu').show();
  });
  $('#closeMenu').click(function(){
    $('#hide-menu').hide();
  });
  $('#closeMenuOrder').click(function(){
    $('.modalOrder').hide();
  });
});