$(function(){
	//首页
	$('.indexS').on('click',function(){
		var index = $(this).index();
		$(this).addClass('aActive');
		$(this).siblings('a').removeClass('aActive');
		switch(index){
			case 0:
				$('.tangle').animate({marginLeft:'16%'},500);
				$('#won .awardAndPerson .awardBoxTwo img').attr('src','img/headset.png');
				$('#won .awardAndPerson .awardBoxTwo p:nth-child(3)').html('奖品：小米运动蓝牙耳机');
				$('#won .awardAndPerson .awardLeft img').attr('src','img/computer.png');
				$('#won .awardAndPerson .awardLeft p').html('Microsoft Surface Pro 4');
				break;
			case 1:
				$('.tangle').animate({marginLeft:'38%'},500);
				$('#won .awardAndPerson .awardBoxTwo img').attr('src','img/xmw.png');
				$('#won .awardAndPerson .awardBoxTwo p:nth-child(3)').html('奖品：小米手环2套装');
				$('#won .awardAndPerson .awardLeft img').attr('src','img/iPhone8.png');
				$('#won .awardAndPerson .awardLeft p').html('iPhone8 64G');
				break;
			case 2:
				$('.tangle').animate({marginLeft:'59.5%'},500);
				$('#won .awardAndPerson .awardBoxTwo img').attr('src','img/bed.png');
				$('#won .awardAndPerson .awardBoxTwo p:nth-child(3)').html('奖品：床上用品4件套');
				$('#won .awardAndPerson .awardLeft img').attr('src','img/watch.png');
				$('#won .awardAndPerson .awardLeft p').html('Apple Watch');
				break;
			case 3:
				$('.tangle').animate({marginLeft:'80.8%'},500);
				$('#won .awardAndPerson .awardBoxTwo img').attr('src','img/seting.png');
				$('#won .awardAndPerson .awardBoxTwo p:nth-child(3)').html('奖品：安装工具套装');
				$('#won .awardAndPerson .awardLeft img').attr('src','img/mime.png');
				$('#won .awardAndPerson .awardLeft p').html('小米6(亮黑色64G)');
				break;
		}
	});
});