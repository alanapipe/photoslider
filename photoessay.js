 $(document).ready(function() {

     var $black_white = $('.black_white'),
         img_width = $('.black_white img').width(),
         init_split = Math.round(img_width / 2);

     $black_white.width(init_split);

     $('.before_after_slider').each(function() {
         var before_after_slider = $(this),
         $black_white = before_after_slider.find(".black_white");

         before_after_slider.mousemove(function(e) {
             e.preventDefault();
             var offX = (e.offsetX || e.clientX - $black_white.offset().left);

             $black_white.width(offX);
         });



         before_after_slider.mouseleave(function(e) {
             $black_white.stop().animate({
                 width: init_split
             }, 1000)
         });
     });
 });


 //from annotated image
 /*$(".circle").on("click", function (e) {
         e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
         var circle_clicked = $(this),
             text = circle_clicked.data("text"),
             popUp = circle_clicked.closest('.photo-container').find(".info_slides"),
             popUp_text = popUp.find(".info_popIn");
             
             $(selector).closest(filter)

             = $(this),

             $('.before_after_slider').closest(black_white){

 }
              */