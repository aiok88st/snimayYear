var data={
    link:'http://toupiao.snimay.com/index.php/',
    imgLink:'http://toupiao.snimay.com/public',
    //link:'http://127.0.0.1/snimay/',
    //imgLink:'http://127.0.0.1/snimay/public',
    token:'',
    adding:[],
    hasClick:true,
    user:'',
    getUser:'',
    reals:[],
    effect:[],
    sell:[],
    real_c:'',
    effect_c:'',
    real_b:'',
    effect_b:'',
    real_a:'',
    effect_a:'',
    sell_a:'',
    sell_b:'',
    sell_c:'',
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
        //跑马灯
        $this.AjaxL($this.link+'userList','GET',false,function(res){
            $this.user=res;
            setTimeout(function(){
                var lefts = $(window).width();
                $('.runBox').css('left',lefts+'px');
                var lefts1 = lefts+$('.runBox').width()+20;
                $('.runBox1').css('left',lefts1+'px');
                var run = $('.runBox').width();
                setInterval(function(){
                    if(lefts==-run){
                        lefts=20;
                        $('.runBox').css('left',lefts+'px');
                        lefts1 = lefts+$('.runBox').width()+20;
                        $('.runBox1').css('left',lefts1+'px');
                    }
                    lefts--;
                    lefts1--;
                    $('.runBox').css('left',lefts+'px');
                    $('.runBox1').css('left',lefts1+'px');
                },20);
            },500)

        });

        var url = $this.GetQueryString("url");
        var id = $this.GetQueryString("id");
        var group_id = $this.GetQueryString("group_id");
        $this.AjaxL( $this.link+url,'GET',{"user_id":id,"group_id":group_id},function(res){

            $("#firstStep").hide();
            if(res.list.group_id == 1){
                $("#secondStepOne").show();
                $("#upImg_txt").hide();
                $("#upImg_txt_0").hide();
                if(res.list.effect_c !==undefined || res.list.real_c !==undefined){
                    $("#d_pic_a").show();
                    $("#upImg_txt_3").hide();
                    $("#upImg_txt_4").hide();
                    $this.real_c=res.list.real_c;
                    $this.effect_c=res.list.effect_c;
                    $this.reals.push($this.real_c);
                    $this.effect.push($this.effect_c);
                }

                if(res.list.effect_b !==undefined || res.list.real_b !==undefined){
                    $("#d_pic").show();
                    $("#upImg_txt_1").hide();
                    $("#upImg_txt_2").hide();
                    $this.real_b=res.list.real_b;
                    $this.effect_b=res.list.effect_b;
                    $this.reals.push($this.real_b);
                    $this.effect.push($this.effect_b);
                }
                if(res.list.effect_a !==undefined || res.list.real_a !==undefined){
                    $("#d_pic_aa").show();
                    $("#upImg_txt").hide();
                    $("#upImg_txt_0").hide();
                    $this.real_a=res.list.real_a;
                    $this.effect_a=res.list.effect_a;
                    $this.reals.push($this.real_a);
                    $this.effect.push($this.effect_a);
                }
            }else if(res.list.group_id == 2){
                $("#secondStepTwo").show();
                $("#sell_e_txt").hide();
                if(res.list.real_a != ''){
                    $("#li_a").show();
                    $("#sell_c_txt").hide();
                    $this.sell_a=res.list.real_a;
                    $this.sell.push($this.sell_a);
                }
                if(res.list.real_b != ''){
                    $("#li_b").show();
                    $("#sell_d_txt").hide();
                    $this.sell_b=res.list.real_b;
                    $this.sell.push($this.sell_b);
                }
                if(res.list.real_c != ''){
                    $this.sell_c=res.list.real_c;
                    $this.sell.push($this.sell_c);
                }

            }else if(res.list.group_id == 3){
                $("#secondStepThree").show();
                $("#img_vido").hide();

            }else if(res.list.group_id == 4){
                $("#secondStepFour").show();
                $("#v_txt").hide();
                $("#owner_txt").hide();
            }
            $this.getUser=res.list;
        });



        $('#file_upload').on('click',function(){
            //$this.uploads('#file_upload',function(res){
            //    $("#designPic").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#user_pics").attr('value',res.thumb.pic_s);
            //    $("#user_pic").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload',function(res){
                $("#designPic").attr('src',res);
                //$("#user_pics").attr('value',res.substr(22));
                $("#user_pic").attr('value',res.substr(22));
            });
        });


        $('#file_upload_des').on('click',function(){
            //$this.uploads('#file_upload_des',function(res){
            //    $("#upImg_txt").hide();
            //    $("#upImg").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#effect_pics").attr('value',res.thumb.pic_s);
            //    $("#effect_pic").attr('value',res.thumb.pic);
            //    var real_pic = $("#real_pic").val();
            //    if(real_pic != ''){
            //        $("#d_pic").show();
            //    }
            //});
            $this.upBase('file_upload_des',function(res){
                $("#upImg_txt").hide();
                $("#upImg").attr('src',res);
                //$("#effect_pics").attr('value',res.substr(22));
                $("#effect_pic").attr('value',res.substr(22));
                $this.effect.pop($this.effect_a);
                $this.effect.push(res.substr(22));
                var real_pic = $("#real_pic").val();
                if(real_pic != ''){
                    $("#d_pic").show();
                }
            });
        });

        $('#file_upload_des0').on('click',function(){
            //$this.uploads('#file_upload_des0',function(res){
            //    $("#upImg_txt_0").hide();
            //    $("#upImg0").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#real_pics").attr('value',res.thumb.pic_s);
            //    $("#real_pic").attr('value',res.thumb.pic);
            //    var effect_pic = $("#effect_pic").val();
            //    if(effect_pic != ''){
            //        $("#d_pic").show();
            //    }
            //});
            $this.upBase('file_upload_des0',function(res){
                $("#upImg_txt_0").hide();
                $("#upImg0").attr('src',res);
                //$("#real_pics").attr('value',res.substr(22));
                $("#real_pic").attr('value',res.substr(22));
                $this.reals.pop($this.real_a);
                $this.reals.push(res.substr(22));
                var effect_pic = $("#effect_pic").val();
                if(effect_pic != ''){
                    $("#d_pic").show();
                }
            });
        });

        $('#file_upload_des2').on('click',function(){
            //$this.uploads('#file_upload_des2',function(res){
            //    $("#upImg_txt_2").hide();
            //    $("#upImg2").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#real_pics2").attr('value',res.thumb.pic_s);
            //    $("#real_pic2").attr('value',res.thumb.pic);
            //    var effect_pic1 = $("#effect_pic1").val();
            //    var effect_pic = $("#effect_pic").val();
            //    if(effect_pic != '' && effect_pic1 != ''){
            //        $("#d_pic_a").show();
            //    }
            //});
            $this.upBase('file_upload_des2',function(res){
                $("#upImg_txt_2").hide();
                $("#upImg2").attr('src',res);
                //$("#real_pics2").attr('value',res.substr(22));
                $("#real_pic2").attr('value',res.substr(22));
                $this.reals.pop($this.real_b);
                $this.reals.push(res.substr(22));
                var effect_pic1 = $("#effect_pic1").val();
                var effect_pic = $("#effect_pic").val();
                if(effect_pic != '' && effect_pic1 != ''){
                    $("#d_pic_a").show();
                }
            });
        });

        $('#file_upload_des1').on('click',function(){
            //$this.uploads('#file_upload_des1',function(res){
            //    $("#upImg_txt_1").hide();
            //    $("#upImg1").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#effect_pics1").attr('value',res.thumb.pic_s);
            //    $("#effect_pic1").attr('value',res.thumb.pic);
            //    var real_pic2 = $("#real_pic2").val();
            //    var real_pic = $("#real_pic").val();
            //    if(real_pic != '' && real_pic2 != ''){
            //        $("#d_pic_a").show();
            //    }
            //});
            $this.upBase('file_upload_des1',function(res){
                $("#upImg_txt_1").hide();
                $("#upImg1").attr('src',res);
                //$("#effect_pics1").attr('value',res.substr(22));
                $("#effect_pic1").attr('value',res.substr(22));
                $this.effect.pop($this.effect_b);
                $this.effect.push(res.substr(22));
                var real_pic2 = $("#real_pic2").val();
                var real_pic = $("#real_pic").val();
                if(real_pic != '' && real_pic2 != ''){
                    $("#d_pic_a").show();
                }
            });
        });



        $('#file_upload_des3').on('click',function(){
            //$this.uploads('#file_upload_des3',function(res){
            //    $("#upImg_txt_3").hide();
            //    $("#upImg3").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#effect_pics3").attr('value',res.thumb.pic_s);
            //    $("#effect_pic3").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload_des3',function(res){
                $("#upImg_txt_3").hide();
                $("#upImg3").attr('src',res);
                //$("#effect_pics3").attr('value',res.substr(22));
                $("#effect_pic3").attr('value',res.substr(22));
                $this.effect.pop($this.effect_c);
                $this.effect.push(res.substr(22));
            });
        });

        $('#file_upload_des4').on('click',function(){
            //$this.uploads('#file_upload_des4',function(res){
            //    $("#upImg_txt_4").hide();
            //    $("#upImg4").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#real_pics4").attr('value',res.thumb.pic_s);
            //    $("#real_pic4").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload_des4',function(res){
                $("#upImg_txt_4").hide();
                $("#upImg4").attr('src',res);
                //$("#real_pics4").attr('value',res.substr(22));
                $("#real_pic4").attr('value',res.substr(22));
                $this.reals.pop($this.real_c);
                $this.reals.push(res.substr(22));
            });
        });



        $('#file_upload_a').on('click',function(){
            //$this.uploads('#file_upload_a',function(res){
            //    $("#adviserPic").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#adv_pics").attr('value',res.thumb.pic_s);
            //    $("#adv_pic").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload_a',function(res){
                $("#adviserPic").attr('src',res);
                //$("#adv_pics").attr('value',res.substr(22));
                $("#adv_pic").attr('value',res.substr(22));
            });
        });


        $('#file_upload_b').on('click',function(){
            //$this.uploads('#file_upload_b',function(res){
            //    $("#teamPic").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#team_pics").attr('value',res.thumb.pic_s);
            //    $("#team_pic").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload_b',function(res){
                $("#teamPic").attr('src',res);
                //$("#team_pics").attr('value',res.substr(22));
                $("#team_pic").attr('value',res.substr(22));
            });
        });


        $('#file_upload_c').on('click',function(){
            //$this.uploads('#file_upload_c',function(res){
            //    $("#sell_c_txt").hide();
            //    $("#sell_c").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#sell_pics_c").attr('value',res.thumb.pic_s);
            //    $("#sell_pic_c").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload_c',function(res){
                $("#sell_c_txt").hide();
                $("#sell_c").attr('src',res);
                //$("#sell_pics_c").attr('value',res.substr(22));
                $("#sell_pic_c").attr('value',res.substr(22));

            });
        });


        $('#file_upload_d').on('click',function(){
            //$this.uploads('#file_upload_d',function(res){
            //    $("#sell_d_txt").hide();
            //    $("#sell_d").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#sell_pics_d").attr('value',res.thumb.pic_s);
            //    $("#sell_pic_d").attr('value',res.thumb.pic);
            //    $("#li_a").show();
            //});
            $this.upBase('file_upload_d',function(res){
                $("#sell_d_txt").hide();
                $("#sell_d").attr('src',res);
                //$("#sell_pics_d").attr('value',res.substr(22));
                $("#sell_pic_d").attr('value',res.substr(22));

                $("#li_a").show();
            });
        });


        $('#file_upload_e').on('click',function(){
            //$this.uploads('#file_upload_e',function(res){
            //    $("#sell_e_txt").hide();
            //    $("#sell_e").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#sell_pics_e").attr('value',res.thumb.pic_s);
            //    $("#sell_pic_e").attr('value',res.thumb.pic);
            //    $("#li_b").show();
            //});
            $this.upBase('file_upload_e',function(res){
                $("#sell_e_txt").hide();
                $("#sell_e").attr('src',res);
                //$("#sell_pics_e").attr('value',res.substr(22));
                $("#sell_pic_e").attr('value',res.substr(22));

                $("#li_b").show();
            });
        });


        $('#file_upload_adv').on('click',function(){
            //$this.uploads('#file_upload_adv',function(res){
            //    $("#adPic").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#advpics").attr('value',res.thumb.pic_s);
            //    $("#advpic").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload_adv',function(res){
                $("#adPic").attr('src',res);
                //$("#advpics").attr('value',res.substr(22));
                $("#advpic").attr('value',res.substr(22));
            });
        });

        //执行实例
        var token=$this.token;
        layui.use('upload', function(){
            var upload = layui.upload;
            //var index;
            var uploadInst = upload.render({
                elem: '#file_upload_v' //绑定元素
                ,data:{"__token__":token}
                ,accept:'video'
                ,size:20480
                ,url: $this.link+"uploads" //上传接口
                ,before:function(){
                    index=layer.load(1);
                }
                ,done: function(res){
                    layer.closeAll();
                    $this.token=res.token;
                    if(res.code == 1){
                        $("#vido_pic").hide();
                        $("#img_vido").hide();
                        $("#pic2").show();
                        $("#pic2").attr('src',res.thumb.pic);
                        $("#vido").attr('value',res.thumb.pic);
                        //$this.adding.push(res.thumb);
                    }else{
                        layer.msg(res.msg);
                    }
                }
                ,error: function(){
                    layer.closeAll();
                    //请求异常回调
                    //layer.close(index);
                }
            });
        });


        $('#file_upload_eng').on('click',function(){
            //$this.uploads('#file_upload_eng',function(res){
            //    $("#enPic").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#engpics").attr('value',res.thumb.pic_s);
            //    $("#engpic").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload_eng',function(res){
                $("#enPic").attr('src',res);
                //$("#engpics").attr('value',res.substr(22));
                $("#engpic").attr('value',res.substr(22));
            });
        });

        $('#file_upload_engs').on('click',function(){
            //$this.uploads('#file_upload_engs',function(res){
            //    $("#v_txt").hide();
            //    $("#eng_pic_v").attr('src',$this.imgLink+res.thumb.pic);
            //    $("#tool_pics").attr('value',res.thumb.pic_s);
            //    $("#tool_pic").attr('value',res.thumb.pic);
            //});
            $this.upBase('file_upload_engs',function(res){
                $("#v_txt").hide();
                $("#eng_pic_v").attr('src',res);
                //$("#tool_pics").attr('value',res.substr(22));
                $("#tool_pic").attr('value',res.substr(22));
            });
        });


        $('#file_upload_o').on('click',function(){
            $this.upBase('file_upload_o',function(res){
                $("#owner_txt").hide();
                $("#ownerpic").attr('src',res);
                //$("#owner_pics").attr('value',res.substr(22));
                $("#owner_pic").attr('value',res.substr(22));
            });

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
                    if(res.code==597){
                        subscribe();
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
        uploads:function(box,cal){
            var $this=this;
            layui.use('upload', function(){
                var upload = layui.upload;
                //var index;
                var uploadInst = upload.render({
                    elem: box //绑定元素
                    ,data:{"__token__":$this.token}
                    ,accept:"images"
                    ,size:3072
                    ,url: $this.link+"upload" //上传接口
                    ,before:function(){
                        index=layer.load(1);
                    }
                    ,done: function(res){
                        layer.closeAll();
                        $this.token=res.token;
                        if(res.code == 1){
                            cal(res);
                        }else{
                            layer.msg(res.msg);
                        }
                    }
                    ,error: function(){
                        layer.closeAll();
                    }
                });
            });
        },
        upBase:function(id,call){
            var $this=this;
            var _upFile=document.getElementById(id);
            index=layer.load(1);
            _upFile.addEventListener("change",function(){
                if (_upFile.files.length === 0) {
                    layer.closeAll();
                    alert("请选择图片");
                    return; }
                var oFile = _upFile.files[0];
                //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }

                /*  if(oFile.size>5*1024*1024){
                 message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})
                 return;
                 }*/
                if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile.type)){
                    layer.closeAll();
                    alert("照片上传：文件类型必须是JPG、JPEG、PNG");
                    return;
                }
                //layer.load(2);
                var reader = new FileReader();
                reader.onload = function(e) {
                    var base64Img= e.target.result;
                    //压缩前预览
                    //--执行resize。
                    var _ir=ImageResizer({
                        resizeMode:"auto"
                        ,dataSource:base64Img
                        ,dataSourceType:"base64"
                        ,maxWidth:714 //允许的最大宽度
                        ,maxHeight:1334 //允许的最大高度。
                        ,onTmpImgGenerate:function(img){
                        }
                        ,success:function(resizeImgBase64,canvas){
                            layer.closeAll();
                            call(resizeImgBase64);
                            //赋值到隐藏域传给后台
                            // $('#imgOne').val(resizeImgBase64.substr(22));
                        }
                        ,debug:true
                    });

                };
                layer.closeAll();
                reader.readAsDataURL(oFile);
            },false);
            layer.closeAll();
        },
        add_design:function(){
            $("#des").attr("disabled","disabled");
            var $this=this;
            var sell_name = $("#des_sell").val();
            var username = $("#des_name").val();
            var phone = $("#des_phone").val();
            var user_pic = $("#user_pic").val();
            var works = $("#des_work").val();
            var money = $("#des_money").val();
            var desc = "大家好,我是"+sell_name+"诗尼曼设计师"+username+"，今年累计设计作品"+works+"个，总签单金额"+money+",争做2017诗尼曼“年度十优”榜样，我相信我能行！";
            var space_pic = $("#space_pic").val();

            var real_pic = $this.reals;
            var effect_pic = $this.effect;
            if(real_pic.length<2){
                layer.msg("至少上传两组");
                return;
            }
            if(effect_pic.length<2){
                layer.msg("至少上传两组");
                return;
            }
            var index=layer.load(1);
            $this.AjaxL($this.link+'addDesign','POST',{
                "sell_name":sell_name,
                "username":username,
                "works":works,
                "money":money,
                "phone":phone,
                "user_pic":user_pic,
                "desc":desc,
                "effect_pic":effect_pic,
                "real_pic":real_pic,
                "space_pic":space_pic,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    $("#thridStepOne").hide();
                    $("#popWin3").show();
                    $this.setTimeouts();
                }else{
                    $("#des").removeAttr("disabled");
                    layer.msg(res.msg);
                }
            });
        },
        //design_check:function(){
        //    var $this=this;
        //    var phone = $("#des_phone").val();
        //    var index=layer.load(1);
        //    var url = 'get_des';
        //    $this.AjaxL($this.link+'checkDesign','POST',{"phone":phone},function(res){
        //        layer.close(index);
        //        if(res.code == 1){
        //            layer.confirm('检测到您已报过名，是否绑定微信？',function(index){
        //                window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+1;
        //            });
        //        }else{
        //            layer.closeAll();
        //            //layer.msg(res.msg);
        //        }
        //    });
        //},

        add_shop:function(){
            $("#shop").attr("disabled","disabled");
            var $this=this;
            var sell_name = $("#shop_sell").val();
            var username = $("#shop_name").val();
            var phone = $("#shop_phone").val();
            var complete = $("#shop_complete").val();
            var desc = "大家好,我是"+sell_name+"诗尼曼店长"+username+"；今年年度销售目标完成率"+complete+"%；争做2017诗尼曼“年度十优”榜样，我相信我能行！";
            var user_pic = $("#adv_pic").val();
            var team_pic = $("#team_pic").val();
            var space_link = $("#space_link").val();
            var sell_pic=[];
            $('[name="sell_pic"]').each(function(){
                sell_pic.push($(this).val());
            });
            var index=layer.load(1);
            $this.AjaxL($this.link+'addShop','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "user_pic":user_pic,
                "team_pic":team_pic,
                "sell_pic":sell_pic,
                "desc":desc,
                "complete":complete,
                "space_link":space_link,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    $("#thridStepTwo").hide();
                    $("#popWin3").show();
                    $this.setTimeouts();
                }else{
                    $("#shop").removeAttr("disabled");
                    layer.msg(res.msg);
                }
            });
        },
        //shop_check:function(){
        //    var $this=this;
        //    var phone = $("#shop_phone").val();
        //    var index=layer.load(1);
        //    var url = 'get_shop';
        //    $this.AjaxL($this.link+'checkShop','POST',{
        //        "phone":phone,
        //    },function(res){
        //        layer.close(index);
        //        if(res.code == 1){
        //            layer.confirm('检测到您已报过名，是否绑定微信？',function(index){
        //                window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+2;
        //            });
        //        }else{
        //            layer.closeAll();
        //            //layer.msg(res.msg);
        //        }
        //    });
        //},


        add_adv:function(){
            $("#adv").attr("disabled","disabled");
            var $this=this;
            var sell_name = $("#adv_sell").val();
            var username = $("#adv_name").val();
            var phone = $("#adv_phone").val();
            var works = $("#adv_works").val();
            var money = $("#adv_money").val();
            var desc = "大家好,我是"+sell_name+"诗尼曼家居顾问"+username+"；今年累计签单"+works+"笔，总签单金额"+money+"；争做2017诗尼曼“年度十优”榜样，我相信我能行！";
            var user_pic = $("#advpic").val();
            var video = $("#vido").val();

            var index=layer.load(1);
            $this.AjaxL($this.link+'addAdv','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "user_pic":user_pic,
                "desc":desc,
                "works":works,
                "money":money,
                "video":video,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    $("#thridStepThree").hide();
                    $("#popWin3").show();
                    $this.setTimeouts();
                }else{
                    $("#adv").removeAttr("disabled");
                    layer.msg(res.msg);
                }
            });
        },
        //adv_check:function(){
        //    var $this=this;
        //    var phone = $("#adv_phone").val();
        //    var index=layer.load(1);
        //    var url = 'get_adv';
        //    $this.AjaxL($this.link+'checkAdv','POST',{
        //        "phone":phone,
        //    },function(res){
        //        layer.close(index);
        //        if(res.code == 1){
        //            layer.confirm('检测到您已报过名，是否绑定微信？',function(index){
        //                window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+3;
        //            });
        //        }else{
        //            layer.closeAll();
        //            //layer.msg(res.msg);
        //        }
        //    });
        //},

        add_eng:function(){
            $("#eng").attr("disabled","disabled");
            var $this=this;
            var sell_name = $("#eng_sell").val();
            var username = $("#eng_name").val();
            var phone = $("#eng_phone").val();
            var serve_num = $("#eng_serve_num").val();
            var desc = "大家好,我是"+sell_name+"诗尼曼安装工程师"+username+"；今年累计服务客户"+serve_num+"家；争做2017诗尼曼“年度十优”榜样，我相信我能行！";
            var user_pic = $("#engpic").val();
            var owner_pic = $("#owner_pic").val();
            var tool_pic = $("#tool_pic").val();
            var index=layer.load(1);
            $this.AjaxL($this.link+'addEng','POST',{
                "sell_name":sell_name,
                "username":username,
                "phone":phone,
                "serve_num":serve_num,
                "user_pic":user_pic,
                "desc":desc,
                "owner_pic":owner_pic,
                "tool_pic":tool_pic,
                "__token__":$this.token
            },function(res){
                layer.close(index);
                if(res.code == 1){
                    $("#thridStepFour").hide();
                    $("#popWin3").show();
                    $this.setTimeouts();
                }else{
                    $("#eng").removeAttr("disabled");
                    layer.msg(res.msg);
                }
            });
        },
        //eng_check:function(){
        //    var $this=this;
        //    var phone = $("#eng_phone").val();
        //    var index=layer.load(1);
        //    var url = 'get_eng';
        //    $this.AjaxL($this.link+'checkEng','POST',{
        //        "phone":phone,
        //    },function(res){
        //        layer.close(index);
        //        if(res.code == 1){
        //            layer.confirm('检测到您已报过名，是否绑定微信？',function(index){
        //                window.location.href="userDetail.html?url="+url+"&id="+res.id+"&group_id="+4;
        //            });
        //        }else{
        //            layer.closeAll();
        //            //layer.msg(res.msg);
        //        }
        //    });
        //},

        setTimeouts:function(){
            setTimeout(function(){
                $("#popWin3").hide();
                $("#popWin4").show();
            },2000);
            $('#popWin4').on('click',function(){
                window.location.href='index.html';
            });
        },

        GetQueryString:function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },

    }
});