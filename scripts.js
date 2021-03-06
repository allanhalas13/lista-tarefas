// Check off specific Todos by Clicking
$("ul").on("click" , "li", function(){
	$(this).toggleClass("completed");
	
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//input Text box
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear text in the input textbox
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").toggle();
});
