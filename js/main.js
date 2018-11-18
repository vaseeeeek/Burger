$().ready(function(){

   let activeClass = "menu-list__item_active";

   let btn = $('.menu-list__title');

   btn.click(function(event){
     event.preventDefault();


     var parent = $(this).parent();

     if (parent.hasClass(activeClass)){
       parent.remove(activeClass)
     }else{
       btn.parent().removeClass(activeClass);
       parent.addClass(activeClass);
     }

   });
});