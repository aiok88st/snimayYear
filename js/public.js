//微信分享
$.ajax({
    type:'GET',
    url:'http://toupiao.snimay.com/index.php/index/Index/jssdk_all/',//
    dataType:'JSON',
    success:function(res){
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId:res.appId, // 必填，公众号的唯一标识

            timestamp: res.timestamp, // 必填，生成签名的时间戳

            nonceStr:res.nonceStr, // 必填，生成签名的随机串

            signature:res.signature,// 必填，签名，见附录1

            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

        });
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: '2017年诗尼曼年度十优评选盛典开赛啦',
                desc: '颜值担当、人气爆棚、实力至上、百万大奖……火热全开，尽在这里！',
                link: "http://toupiao.snimay.com/public/home/index.html",
                imgUrl: 'http://toupiao.snimay.com/public/home/img/fenxiang.png?v=1',//
                trigger: function (res) {
                },
                success: function (res) {
                },
                cancel: function (res) {
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
            wx.onMenuShareAppMessage({
                title: '2017年诗尼曼年度十优评选盛典开赛啦',
                desc: '颜值担当、人气爆棚、实力至上、百万大奖……火热全开，尽在这里！',
                link: "http://toupiao.snimay.com/public/home/index.html",
                imgUrl: 'http://toupiao.snimay.com/public/home/img/fenxiang.png?v=1',//
                trigger: function (res) {
                },
                success: function (res) {
                },
                cancel: function (res) {
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        })
    }
});
//公共弹窗
function popWindow(error){
	$('#popW').show();
	$('#popW').html('<div class="allWindow" style="z-index: 999;"><div class="popBox"><img src="img/winBox.png" /><img src="img/laugh.png" /><img src="img/close.png" class="closed" /><div class="popBoxin"><p style="margin-left: 10px;margin-right: 10px;">'+error+'</p></div></div></div>')
	$(document).on('touchstart','.closed',function(){
		$('#popW').hide();
	});
}
function subscribe(){
    $('#popW').show();
    var html='<div class="allWindow" style="z-index: 999;">';
        html +='<div class="popBox">';
        html +='<img src="img/winBox.png" />';
        html +='<img src="img/laugh.png" /><img src="img/close.png" class="closed" />';
        html +='<div class="popBoxin">';
        html +='<img src="http://toupiao.snimay.com/public/pc/img/er.png" style="width: 90px">';
        html +='<p style="font-size: 12px">请先关注公众号"诗尼曼家居"</p>';
        html +='</div>';
        html +='</div>';
        html +='</div>';
    $('#popW').html(html);
    $(document).on('touchstart','.closed',function(){
        $('#popW').hide();
    });
}
function setTimeouts(){
    $("#popWin2").show();
    setTimeout(function(){
        $("#popWin2").hide();
    },2000);
    $('#popWin2').on('touchstart',function(){
        window.location.href='index.html';
    });
}

//报名
function applys(){
    //layui.use('layui', function(){
    //    var layer=layui.layer;
    //    layer.load(1);
    //})
    //return;
    $.ajax({
        url:"http://toupiao.snimay.com/index.php/checkLogin",//  http://127.0.0.1/snimay/index.php/checkLogin
        type:"get",
        success:function(re){
            //if(re.code == 404){
            //    setTimeouts();
            //    return;
            //}
            if(re.code == 0){
                window.location.href="http://toupiao.snimay.com/public/home/apply.html";//  http://127.0.0.1/snimay/public/home/apply.html
            }else if(re.code == 1){
                var url = "get_des";
                if(re.thumb < 2){
                    window.location.href="apply.html?url="+url+"&id="+re.id+"&group_id="+1;
                }else{
                    //window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id="+1;
                    window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id=1";
                }

            }else if(re.code == 2){
                var url = "get_shop";
                if(re.thumb < 2){
                    window.location.href="apply.html?url="+url+"&id="+re.id+"&group_id="+2;
                }else{
                    window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id=2";
                }

            }else if(re.code == 3){
                var url = "get_adv";
                if(re.thumb < 2){
                    window.location.href="apply.html?url="+url+"&id="+re.id+"&group_id="+3;
                }else{
                    window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id=3";
                }
            }else if(re.code == 4){
                var url = "get_eng";
                if(re.thumb < 2){
                    window.location.href="apply.html?url="+url+"&id="+re.id+"&group_id="+4;
                }else{
                    window.location.href="userDetail.html?url="+url+"&id="+re.id+"&group_id=4";
                }
            }
        }
    });
}


