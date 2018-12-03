$().ready(function(){
  $('#form__order').on('submit', function(e){
    e.preventDefault();
    if ($("#phoneNumber").text() !== ''){
      $.Ajax('https://webdev-api.loftschool.com/sendmail`',{
        type: "POST",
        data: $(this).serializ(),
        success: function(data){
          console.log('done');
          $(".modalOrder").css('display', 'block');
          $(".modal__text").text('Сообщение отправлено');
        }
        fail: function(data) {
          $(".modalOrder").css('display', 'block');
          $(".modal__text").text('Произошла ошибка!');
          console.log(data);
        })
      })
    }else{
      $(".modalOrder").css('display', 'block');
      $(".modal__text").text('Укажите свои данные!');
    }
  })
}