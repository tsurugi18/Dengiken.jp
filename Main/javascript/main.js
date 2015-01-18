$(function(){
	var nav = $('#nav');
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			nav.stop().animate({opacity : '0.5'},'fast');
			console.log(1);
		}
	});
});