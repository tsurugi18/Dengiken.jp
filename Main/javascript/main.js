$(function(){
	var nav = $('#nav'),a = $('a');
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			nav.stop().animate({backgroundColor : '#fff'},50);
			a.stop().animate({color :'#000'},50);
			console.log(1);
		}else if($(this).scrollTop() < 99){
			nav.stop().animate({backgroundColor : '#72dbe9'},50);
			a.stop().animate({color :' #fff'},50);
		}
	});
});