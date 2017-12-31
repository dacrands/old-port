$(".pythonButton").click(function(){
    var aboutHeight = $(".about").offset().top - 50;
    $("body, html").animate({
      scrollTop: aboutHeight
    }, 500);
});
