var data={
    link:'http://toupiao.snimay.com/index.php/',
    imgLink:'http://toupiao.snimay.com/public',
    //link:'http://127.0.0.1/snimay/',
    //imgLink:'http://127.0.0.1/snimay/public',
    token:'',
    searchResult:[],
    getUser:'',
    page:'',
    hasClick:true,
    system:'',
    homeList:'',
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
        $this.AjaxL($this.link+'systemList','GET',false,function(res){

            $this.system=res;
        });

        $this.AjaxL($this.link+'deslist','GET',false,function(res){

            $this.homeList=res;
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
        //首页搜索
        seachData:function(){
            var $this=this;
            var ins;
            $('.indexS').each(function(){
                if($(this).hasClass('aActive')){
                    ins=$(this).index();
                }
            });
            var search = $("#seachData").val();
            $this.searchResult=[];
            layui.use('flow', function(){  //排行榜
                var flow = layui.flow;
                flow.load({
                    elem: '#searchResult' //指定列表容器
                    ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
                        var lis = [];
                        //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                        $this.AjaxL($this.link+'search','GET',{"page":page,"search":search,"ins":ins},function(res){
                            $("#main").hide();
                            $("#searchResult").show();
                            list=res.list;
                            for (x in list){
                                $this.searchResult.push(list[x]);
                            }
                            next('', page <= res.last_page);
                        });

                    }
                });
            });
        },
        //搜索结果
        seachDatas:function(){
            var $this=this;
            var ins;
            $('.voteS').each(function(){
                if($(this).hasClass('aActive')){
                    ins=$(this).index();
                }
            });
            var search = $("#seachDatas").val();
            $this.searchResult=[];
            layui.use('flow', function(){  //排行榜
                var flow = layui.flow;
                flow.load({
                    elem: '#searchResult' //指定列表容器
                    ,done: function(page, next){ //到达临界点（默认滚动触发），触发下一页
                        var lis = [];
                        //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                        $this.AjaxL($this.link+'search','GET',{"page":page,"search":search,"ins":ins},function(res){
                            $("#main").hide();
                            $("#searchResult").show();
                            list=res.list;
                            for (x in list){
                                $this.searchResult.push(list[x]);
                            }
                            next('', page <= res.last_page);
                        });

                    }
                });
            });
        },
        //投票
        setNum:function(id,group_id){
            var $this=this;
            if(group_id == 1){
                var url = $this.link+'click_des';
            }else if(group_id == 2){
                var url = $this.link+'click_shop';
            }else if(group_id == 3){
                var url = $this.link+'click_adv';
            }else if(group_id == 4){
                var url = $this.link+'click_eng';
            }

            $this.AjaxL( url,'POST',{"user_id":id,"group_id":group_id,"__token__":$this.token},function(res){
                if(res.code == 1){
                    $("#voteSuccess").show();
                    $('.clicknum_'+id).text("票数："+res.clicknum);
                    $('#clicknum_'+id).text(res.clicknum+"票");
                }else if(res.code == 2){
                    $("#popWin4").show();
                }else{
                    popWindow(res.msg);
                }
            });

        },
        //个人信息
        getDatas:function(id,group_id){
            var $this=this;
            var url;
            if(group_id == 1){
                url = 'get_des';
            }else if(group_id == 2){
                url = 'get_shop';
            }else if(group_id == 3){
                url = 'get_adv';
            }else if(group_id == 4){
                url = 'get_eng';
            }
            window.location.href="userDetail.html?url="+url+"&id="+id+"&group_id="+group_id;

        },
        seachs:function(ins){
            var $this=this;
            var url;
            if(ins == 1){
                url = 'deslist';
            }else if(ins == 2){
                url = 'shoplist';
            }else if(ins == 3){
                url = 'advlist';
            }else if(ins == 4){
                url = 'englist';
            }
            $this.AjaxL($this.link+url,'GET',false,function(res){
                $this.homeList=res;
            });

        },

        //查看更多
        more:function(){
            window.location.href="order.html";
        },


    }
});