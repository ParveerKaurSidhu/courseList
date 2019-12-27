$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
  
});

$("ul").on("click", "span", function(event){
  
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(){
  if(event.which === 13){
     var newLiAdded = $(this).val();
     $(this).val(" ");
     $("ul").append("<li><span>X</span>" +newLiAdded + "</li>");
  }
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});