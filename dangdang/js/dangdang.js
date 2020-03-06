<script>
// 顶部图片点击消失
		var oContspan = document.querySelector('.cont span');
		var oContimg = document.querySelector('.cont');
		oContspan.onclick = function(){
			oContimg.style.display = 'none';
		}
// 顶部二级菜单
		var aYiji = document.querySelectorAll('.yiji');
		var aYijiul = document.querySelectorAll('.yiji ul')
		for(var i=0;i<aYiji.length;i++){
				aYiji[i].index = i;
				aYiji[i].onmouseover = function(){
					aYijiul[this.index].style.display = 'block';
					aYijiul[this.index].style.border = '1px solid #e6e6e6';
					aYiji[this.index].style.background = '#fff';
				}
				aYiji[i].onmouseout = function(){
				aYijiul[this.index].style.display = 'none';
				aYiji[this.index].style.background = '#f9f9f9';
				aYiji[this.index].style.background = 'url(../img/head_sprite.png) no-repeat left -285px'
				}
				aYijiul[i].onmouseover = function(){
				this.style.display = 'block';
				}
				aYijiul[i].onmouseout = function(){
				this.style.display = 'none';
				}
			}
// 城市选择
		var oCt = document.querySelector('.ddnewhead_area span');
		var oSpan = document.querySelectorAll('.ddnewhead_area li');
		var aDiv = document.querySelector('.ddnewhead_area_list')
		oCt.onmouseover = function(){
			aDiv.style.display = 'block';
		}
		oCt.onmouseout = function(){
			aDiv.style.display = 'none';
		}
		aDiv.onmouseover = function(){
			this.style.display = 'block';
			for(var i=0;i<oSpan.length;i++){
				oSpan[i].onclick = function(){
					oCt.innerHTML = this.innerHTML;
				}
			}
		}
		aDiv.onmouseout = function(){
			this.style.display = 'none';
		}
// 搜索栏下拉框
		var aSelectpop = document.querySelector('.select_pop');
		var oFenlei = document.querySelector('.fenlei');
		var oSelect = document.querySelector('.select');
		var oSelectpopli = document.querySelectorAll('.select_pop li')
		oFenlei.onmouseover = function(){
			aSelectpop.style.display = 'block';
		}
		oFenlei.onmouseout = function(){
			aSelectpop.style.display = 'none';
		}
		aSelectpop.onmouseover = function(){
			this.style.display = 'block';
			for(var i=0;i<oSelectpopli.length;i++){
				oSelectpopli[i].onclick = function(){
					oSelect.innerHTML = this.innerHTML;
				}
			}
		}
		aSelectpop.onmouseout = function(){
			this.style.display = 'none';
		}
// 大二级菜单
		var aYiji = document.querySelectorAll('.new_pub_nav li');
		var aErji = document.querySelectorAll('.new_pub_nav_pop');
		for(var i=0;i<aYiji.length;i++){
			aYiji[i].index = i;
			aYiji[i].onmouseover = function(){
				aErji[this.index].style.display = 'block';
			}
			aYiji[i].onmouseout = function(){
				aErji[this.index].style.display = 'none';
			}
			aErji[i].onmouseover = function(){
				this.style.display = 'block' ;
			}
			aErji[i].onmouseout = function(){
				this.style.display = 'none';
			}
		}
//轮播图
		//获取轮播图片
		var oPicli = document.querySelectorAll('.pic li');
		//获取轮播下面的图片
		var oTehuiul = document.querySelectorAll('.tehui ul')
		//获取下面的滑过按钮
		var oTabli = document.querySelectorAll('.tab li');
		//获取左边的点击按钮
		var oBtnl = document.querySelectorAll('.btn_l');
		//获取右边的点击按钮
		var oBtnr = document.querySelectorAll('.btn_r');
		var timer;
		var i = 0;
		timer = setInterval(function(){
			for(var k=0;k<oPicli.length;k++){
				oPicli[k].style.display = 'none';
				oTabli[k].style.background = '#646464';
				oTehuiul[k].style.display = 'none';
			}
			oPicli[i].style.display = 'block';
			oTehuiul[i].style.display = 'block';
			oTabli[i].style.background = 'red';
			i++;
			if(i==8){
				i=0;
			}
		},1500)
		for(var p=0;p<oTabli.length;p++){
			oTabli[p].index = p;
			oTabli[p].onmouseover = function(){
				for(var s=0;s<oTabli.length;s++){
					oPicli[s].style.display = 'none';
					oTehuiul[s].style.display = 'none';
					oTabli[s].style.background = '#646464';
				}
					oTehuiul[this.index].style.display = 'block';
					oPicli[this.index].style.display = 'block';
					this.style.background = 'red';
			}
		}
		for(var p=0;p<oBtnl.length;p++){
			oBtnl[p].index = p;
			oBtnl[p].onclick = function(){
				for(var s=0;s<oBtnl.length;s++){
					oPicli[s].style.display = 'none';
					oTehuiul[s].style.display = 'none';
				}
					oTehuiul[this.index].style.display = 'block';
					oPicli[this.index].style.display = 'block';
			}
		}
		for(var p=0;p<oBtnr.length;p++){
			oBtnr[p].index = p;
			oBtnr[p].onclick = function(){
				for(var s=0;s<oBtnr.length;s++){
					oPicli[s].style.display = 'none';
					oTehuiul[s].style.display = 'none';
				}
					oTehuiul[this.index].style.display = 'block';
					oPicli[this.index].style.display = 'block';
			}
		}
//轮播图右侧
		var oTab = document.querySelectorAll('.tab_aa li');
		var oContent = document.querySelectorAll('.logo_content ul')
		for(var i=0;i<oTab.length;i++){
			oTab[i].index = i;
			oTab[i].onmouseover = function(){
				for(var k=0;k<oTab.length;k++){
					oTab[k].style.background = '#eee';
					oContent[k].style.display = 'none';
				}
					this.style.background = '#fff';
					oContent[this.index].style.display = 'block'
			}
		}
		  window.onload = function () {
//轮播图右侧轮播
    var oWrap = document.getElementById('wrap');
    var aImg = oWrap.getElementsByTagName('img');
    var aBtn = oWrap.getElementsByTagName('span');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var iNow =0;
    function tab(){
        for (var i =0;i<aBtn.length;i++){//清空所有按钮选中样式以及图片显示样式
            aBtn[i].className='';
            aImg[i].className='';
        }
        aBtn[iNow].className='active';//设置当前按钮选中样式以及当前图片透明度
        aImg[iNow].className='on';
    }

    setInterval( function () {//每两秒循环变换下一张图片
            iNow++;
            if (iNow==aBtn.length)iNow=0;
           tab();
    },2000);

    for (var i =0;i<aBtn.length;i++){
        aBtn[i].index=i;//为按钮添加自定义属性（索引）目的是使图片和按钮相对应
        //按钮
        aBtn[i].onmouseover= function () {
            iNow=this.index; //是按钮所控制显示的图片与左右箭头控制显示的图片相对应
            tab();
        }
        //下一个箭头
        oNext.onclick = function () {
            iNow++;
            if (iNow==aImg.length)iNow=0;
            tab();
        }
        //上一个箭头
        oPrev.onclick = function () {
            iNow--;
            if (iNow==-1)iNow=aImg.length-1;
            tab();
      	  }
  	  }
	}
//倒计时
	// function FreshTime(){
	// var endtime=new Date("2019/6/11,12:59:12");//结束时间
	// var nowtime = new Date();//当前时间
	// var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
	// // d=parseInt(lefttime/3600/24);
	// h=parseInt((lefttime/3600)%24);
	// m=parseInt((lefttime/60)%60);
	// s=parseInt(lefttime%60);
   
	// document.getElementById("h").innerHTML=h;
	// document.getElementById("m").innerHTML=m;
	// document.getElementById("s").innerHTML=s;
	// if(lefttime<=0){
	// 	document.getElementById("LeftTime").innerHTML="团购已结束";
	// 	clearInterval(sh);
	// }
	// }
	// FreshTime()
	// var sh;
	// sh=setInterval(FreshTime,1000);
// 秒杀
	var miaosha1 = ['热销1.jpg','热销2.jpg','热销3.jpg','热销4.jpg','热销5.jpg','热销6.jpg','热销7.jpg','热销8.jpg','热销9.jpg','热销10.jpg'];
	var miaosha2 = ['迷你新款手机包单肩包韩版斜跨包手提小包撞色百搭女士小包包','【限时包邮秒杀】少年读史记','儿童发夹套装头饰女童发饰','【爆款两件套】手慢无！！！','洋气豆腐包box包2019新款复古小方包迷你单肩斜挎空姐包简约女包','凡尔纳科幻经典 刘慈欣手写寄语，倾情推荐！','回力内增高男鞋帆布鞋男女','趁，此身未老（当当签名版、随书附送小册子）','韩都衣舍男装2019夏季新款韩版纯棉上衣情侣短袖T恤男士AF7116燊','逻辑狗3-4岁（幼儿园小班-带6钮板）第一阶段 儿童思维升级游戏系统 男孩女孩礼物益智早教学习机儿童玩具卡'];
	var miaosha3 = ['1 ','16.8 ','87 ','79 ','129.9 ','49.9 ','15 ','19 ','151 ','34.6 '];
	var miaosha4 = ['79','125','330','156','339','120','77','98','234','119'];
	var miaosha5 = '';
	var oRexiao = document.querySelector('.list');
	for(var q=0;q<10;q++){
		miaosha5+='<div class="info"><a href="#" class="pac"><img src="../img/'+miaosha1[q]+'" alt=""></a><div class="line"><span class="miao_progress_bar"></span><span class="num_bg_50">已秒杀50%</span></div><div class="name">'+miaosha2[q]+'</div><div class="price">秒杀价：¥<span>'+miaosha3[q]+'</span><span class="del">'+miaosha4[q]+'</span></div></div>';
	}
	oRexiao.innerHTML = miaosha5;
// 秒杀右侧轮播图s
		//获取轮播图片
		var oTabul = document.querySelectorAll('.tab_c ul');
		//获取上面的滑过按钮
		var oFrimli = document.querySelectorAll('.firm_week_head li');
		var timer;
		var c = 0;
		timer = setInterval(function(){
			for(var d=0;d<oTabul.length;d++){
				oTabul[d].style.display = 'none';
				oFrimli[d].style.background = '#646464';
			}
			oTabul[c].style.display = 'block';
			oFrimli[c].style.background = 'red';
			c++;
			if(c==2){
				c=0;
			}
		},1500)
		for(var p=0;p<oFrimli.length;p++){
			oFrimli[p].index = p;
			oFrimli[p].onmouseover = function(){
				for(var s=0;s<oFrimli.length;s++){
					oTabul[s].style.display = 'none';
					oFrimli[s].style.background = '#646464';
				}
					oTabul[this.index].style.display = 'block';
					this.style.background = 'red';
			}
		}
</script>