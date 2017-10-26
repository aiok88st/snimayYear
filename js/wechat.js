$(function(){
	$(document).on('touchstart','.selected',function(){
		index = $(this).val();
		$('.selectedIng').removeClass('selectedIng');
		$('.open').text("您的选择："+$(this).text());
		$(this).addClass('selectedIng');
		$(this).css('background-color','#00f1fa');
		$(this).siblings('li').css('background-color','#066162');
	});
})
