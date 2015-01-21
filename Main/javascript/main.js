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
	var timeStamps = $('.timestamp'),monthTitle = $('.monthSub'),timeTitle = $('.timeTitle'),clickflag = false,
	monthContent = ['１月','2月','3月','4月新入生講習会','5月','6月','7月','8月WRO準備','9月文化祭','１0月','１1月','１2月'];
	timeStamps.hover(function(){
		var stampIndex = $(this).index();
		monthTitle.text(monthContent[stampIndex]);
		monthTitle.stop().fadeIn();
		monthTitle.css('left' , timeStamps.eq(stampIndex).position().left - (monthTitle.width() / 3)+ 'px');
		timeStamps.click(function(){
			var monthDetail = $('.stampDetail');
			timeTitle.text(monthContent[stampIndex]);
			monthDetail.slideDown('slow');
			$('html,body').animate({scrollTop : monthDetail.position().top},'slow');
			clickflag = true;
			monthDetail.click(function(){
				$(this).slideUp('slow');
				timeTitle.text('年間予定');
				clickflag = false;
			});
		});
	},function(){
		monthTitle.stop().fadeOut();

		
	});
});