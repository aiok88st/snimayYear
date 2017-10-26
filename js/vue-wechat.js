var data={
    link:'http://toupiao.snimay.com/index.php/',
    imgLink:'http://toupiao.snimay.com/public',
    //link:'http://127.0.0.1/snimay/',
    //imgLink:'http://127.0.0.1/snimay/public',
    token:'',
    hasClick:true,
};

var all = new Vue({
    el:'#vueMain',
    data:data,
    created:function(){
        var $this=this;
        $this.AjaxL($this.link+'hasAuth','GET',false,function(res){
            if(res.code==408){
                window.location.href=$this.link+"weixLogin";
            }else{
                $this.token=res.token;
            }
        });
        layui.use('layer', function(){
            var layer=layui.layer;
        });
    },

    methods:{
        AjaxL:function(url,type,data,call){
            var $this=this;
            $.ajax({
                type:type,
                url:url,
                data:data,
                dataType:'JSON',
                success:function(res){
                    call(res);
                    if(res.token){
                        $this.token=res.token;
                    }
                    if(res.url){
                        window.location.href=res.url;
                    }
                },
                error:function(XMLHttpRequest){
                    if(XMLHttpRequest.status==408){
                        window.location.href=$this.link+"weixLogin";
                    }else{
                        //popWindow('网络比较差，请重新进入。');
                    }
                }
            })
        },
        check:function(){
            var $this=this;
            var ins;
            $('.selected').each(function(){
                if($(this).hasClass('selectedIng')){
                    ins=$(this).attr('value');
                }
            });
            var username = $("#username").val();
            var phone = $("#phone").val();
            $this.AjaxL($this.link+'u_check','POST',{
                "username":username,
                "phone":phone,
                "ins":ins,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                var url;
                if(res.code == 1){
                    layer.msg(res.msg);
                    if(res.group_id == 1){
                        url = 'get_des';
                    }else if(res.group_id == 2){
                        url = 'get_shop';
                    }else if(res.group_id == 3){
                        url = 'get_adv';
                    }else if(res.group_id == 4){
                        url = 'get_eng';
                    }
                    window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+res.group_id;
                }else{
                    layer.msg(res.msg);
                }
            });
        }



    }
});