$(function(){
	//规则切换
	$(document).on('click','.rSelect',function(){
		var index = $(this).index();
		$(this).addClass('aActive');
		$(this).siblings('a').removeClass('aActive');
		switch(index){
			case 0:
				$('.tangle').animate({marginLeft:'16%'},500);
				$('#rule .ruleAndAward .awardBoxTwo img').attr('src','img/headset.png');
				$('#rule .ruleAndAward .awardBoxTwo p').html('奖品：小米运动蓝牙耳机');
				$('#rule .ruleAndAward .awardLeft img').attr('src','img/computer.png');
				$('#rule .ruleAndAward .awardLeft p:nth-child(2)').html('Microsoft Surface Pro 4');
				$('.awardTitleOne p').text('年度十优创意设计师');
				break;
			case 1:
				$('.tangle').animate({marginLeft:'38%'},500);
				$('#rule .ruleAndAward .awardBoxTwo img').attr('src','img/xmw.png');
				$('#rule .ruleAndAward .awardBoxTwo p').html('奖品：小米手环2套装');
				$('#rule .ruleAndAward .awardLeft img').attr('src','img/iPhone8.png');
				$('#rule .ruleAndAward .awardLeft p:nth-child(2)').html('iPhone8 64G');
				$('.awardTitleOne p').text('年度十优全能店长');
				break;
			case 2:
				$('.tangle').animate({marginLeft:'59.5%'},500);
				$('#rule .ruleAndAward .awardBoxTwo img').attr('src','img/bed.png');
				$('#rule .ruleAndAward .awardBoxTwo p').html('奖品：床上用品4件套');
				$('#rule .ruleAndAward .awardLeft img').attr('src','img/watch.png');
				$('#rule .ruleAndAward .awardLeft p:nth-child(2)').html('Apple Watch');
				$('.awardTitleOne p').text('年度十优高级家居顾问');
				break;
			case 3:
				$('.tangle').animate({marginLeft:'80.8%'},500);
				$('#rule .ruleAndAward .awardBoxTwo img').attr('src','img/seting.png');
				$('#rule .ruleAndAward .awardBoxTwo p').html('奖品：安装工具套装');
				$('#rule .ruleAndAward .awardLeft img').attr('src','img/mime.png');
				$('#rule .ruleAndAward .awardLeft p:nth-child(2)').html('小米6(亮黑色64G)');
				$('.awardTitleOne p').text('年度十优安装服务工程师');
				break;
		}
	})
});


