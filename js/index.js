
$(function(){
	//首页
	$('.indexS').on('click',function(){
		var index = $(this).index();
		$(this).addClass('aActive');
		$(this).siblings('a').removeClass('aActive');
		switch(index){
			case 0:
				$('.tangle1').animate({marginLeft:'16%'},500);
				break;
			case 1:
				$('.tangle1').animate({marginLeft:'38%'},500);
				break;
			case 2:
				$('.tangle1').animate({marginLeft:'59.5%'},500);
				break;
			case 3:
				$('.tangle1').animate({marginLeft:'80.8%'},500);
				break;
		}
	});
	//搜索
	$('.voteS').on('click',function(){
		var index = $(this).index();
		$(this).addClass('aActive');
		$(this).siblings('a').removeClass('aActive');
		switch(index){
			case 0:
				$('.tangle2').animate({marginLeft:'16%'},500);
				break;
			case 1:
				$('.tangle2').animate({marginLeft:'38%'},500);
				break;
			case 2:
				$('.tangle2').animate({marginLeft:'59.5%'},500);
				break;
			case 3:
				$('.tangle2').animate({marginLeft:'80.8%'},500);
				break;
		}
	});
	//分享
	$('.share').on('click',function(){
		$('#shareWin').show();
	});
	$('#shareWin').on('click',function(){
		$(this).hide();
	});

	//返回
	$('.return').on('click',function(){
		$('#voteSuccess').hide();
	});
	$('.help').on('click',function(){
		$('#voteSuccess').hide();
		$('#shareWin').show();
	});
	$('.close').on('click',function(){
		$('#popWin4').hide();
	});
	//var banner = new Swiper('.swiper-container', {
	//    direction: 'horizontal',
	//    autoplay : 5000,
	//    loop:true,
	//    autoplayDisableOnInteraction : false,
	//    nextButton: '.swiper-button-next',
    	//prevButton: '.swiper-button-prev',
	//});
});