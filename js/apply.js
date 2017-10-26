var index;
$(function(){
	//您的选择
	$(document).on('touchstart','.selected',function(){
		index = $(this).val();
		$('.open').text("您的选择："+$(this).text());
		$(this).css('background-color','#00f1fa');
		$(this).siblings('li').css('background-color','#066162');
	});
	//报名
	$(document).on('click','#popWin3',function(){
		$(this).hide();
		$('#popWin4').show();
	});
	//跑马灯
	//var lefts = $(window).width();
	//$('.runBox').css('left',lefts+'px');
	//var lefts1 = lefts+$('.runBox').width()+20;
	//$('.runBox1').css('left',lefts1+'px');
	//var run = $('.runBox').width();
	//setInterval(function(){
	//	if(lefts==-run){
	//		lefts=20;
	//		$('.runBox').css('left',lefts+'px');
	//		lefts1 = lefts+$('.runBox').width()+20;
	//		$('.runBox1').css('left',lefts1+'px');
	//	}
	//	lefts--;
	//	lefts1--;
	//	$('.runBox').css('left',lefts+'px');
	//	$('.runBox1').css('left',lefts1+'px');
	//},20);
});


function selected(){
	if(index == 1){
		$("#firstStep").hide();
		$("#secondStepOne").show();
	}else if(index == 2){
		$("#firstStep").hide();
		$("#secondStepTwo").show();
	}else if(index == 3){
		$("#firstStep").hide();
		$("#secondStepThree").show();
	}else if(index == 4){
		$("#firstStep").hide();
		$("#secondStepFour").show();
	}else{
		layer.msg('请选择组别');
		return;
	}
	$("#run").css({"opacity":1,"margin-top":'15px',"margin-bottom": '5px',"height":"auto"});
}

function designTwo(){
	$("#secondStepOne").hide();
	$("#thridStepOne").show();
	$("#run").css({"opacity":0,"margin":0,"height":0});
}

function adviserTwo(){
	$("#secondStepTwo").hide();
	$("#thridStepTwo").show();
	$("#run").css({"opacity":0,"margin":0,"height":0});
}

function advTwo(){
	$("#secondStepThree").hide();
	$("#thridStepThree").show();
	$("#run").css({"opacity":0,"margin":0,"height":0});
}

function engTwo(){
	$("#secondStepFour").hide();
	$("#thridStepFour").show();
	$("#run").css({"opacity":0,"margin":0,"height":0});
}

function designTwo_prev(){
	$("#secondStepOne").hide();
	$("#firstStep").show();
	$("#run").css({"opacity":0,"margin":0,"height":0});
}

function adviserTwo_prev(){
	$("#secondStepTwo").hide();
	$("#firstStep").show();
	$("#run").css({"opacity":0,"margin":0,"height":0});
}

function advTwo_prev(){
	$("#secondStepThree").hide();
	$("#firstStep").show();
	$("#run").css({"opacity":0,"margin":0,"height":0});
}

function engTwo_prev(){
	$("#secondStepFour").hide();
	$("#firstStep").show();
	$("#run").css({"opacity":0,"margin":0,"height":0});
}

function designThree_prev(){
	$("#secondStepOne").show();
	$("#thridStepOne").hide();
	$("#run").css({"opacity":1,"margin-top":'15px',"margin-bottom": '5px',"height":"auto"});
}

function adviserThree_prev(){
	$("#secondStepTwo").show();
	$("#thridStepTwo").hide();
	$("#run").css({"opacity":1,"margin-top":'15px',"margin-bottom": '5px',"height":"auto"});
}

function advTThree_prev(){
	$("#secondStepThree").show();
	$("#thridStepThree").hide();
	$("#run").css({"opacity":1,"margin-top":'15px',"margin-bottom": '5px',"height":"auto"});
}

function engThree_prev(){
	$("#secondStepFour").show();
	$("#thridStepFour").hide();
	$("#run").css({"opacity":1,"margin-top":'15px',"margin-bottom": '5px',"height":"auto"});
}





