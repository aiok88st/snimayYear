$(function(){
	$('.indexS').on('click', function() {
		var index = $(this).index();
		$(this).addClass('aActive');
		$(this).siblings('a').removeClass('aActive');
		switch(index) {
			case 0:
				$('.tangle').animate({
					marginLeft: '16%'
				}, 500);
				break;
			case 1:
				$('.tangle').animate({
					marginLeft: '38%'
				}, 500);
				break;
			case 2:
				$('.tangle').animate({
					marginLeft: '59.5%'
				}, 500);
				break;
			case 3:
				$('.tangle').animate({
					marginLeft: '80.8%'
				}, 500);
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
	//投票
	$('.yourVote').on('click',function(){
		$('.votePop').show();
	});
	$('.confirm').on('click',function(){
		$('.votePop').hide();
		$('#voteSuccess').show();
	});
	//返回
	$('.return').on('click',function(){
		$('#voteSuccess').hide();
	});
	$('.help').on('click',function(){
		$('#voteSuccess').hide();
		$('#shareWin').show();
	});
});
