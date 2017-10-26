var data={
    link:'http://toupiao.snimay.com/index.php/',
    imgLink:'http://toupiao.snimay.com/public',
    //link:'http://127.0.0.1/snimay/',
    //imgLink:'http://127.0.0.1/snimay/public',
    token:'',
    adding:[],
    hasClick:true,
    searchResult:'',
    searchResults:'',
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

        $this.AjaxL($this.link+'won_des','GET',false,function(res){
            $this.searchResult=res.list;
            $this.searchResults=res.lists;
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


        seachs:function(ins){
            var $this=this;
            var url;
            if(ins == 1){
                url = 'won_des';
            }else if(ins == 2){
                url = 'won_shop';
            }else if(ins == 3){
                url = 'won_adv';
            }else if(ins == 4){
                url = 'won_eng';
            }
            $this.AjaxL($this.link+url,'GET',false,function(res){
                $this.searchResult=res.list;
                $this.searchResults=res.lists;
            });

        },



    }
});