$(document).ready(function(){
	$('.left.menu.open').on("click",function(e){
        e.preventDefault();
		$('.ui.vertical.menu').toggle();
	});
    
	$('.ui.dropdown').dropdown();
});

