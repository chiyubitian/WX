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
		for(let i=0;i<aYiji.length;i++){
			aYiji[i].index = i;
			aYiji[i].onmouseover = function(){
				aErji[this.index].style.display = 'block';
				this.className = 'yijiborder'
			}
			aYiji[i].onmouseout = function(){
				aErji[this.index].style.display = 'none';
				aYiji[i].className = ' '
			}
			aErji[i].onmouseover = function(){
				this.style.display = 'block' ;
				aYiji[i].className = 'yijiborder'
			}
			aErji[i].onmouseout = function(){
				this.style.display = 'none';
				aYiji[i].className = ' '
			}
		}
//轮播图
		// 获取大DIV
		var oBiglunbo = document.querySelector('.home_circle_c')
		//获取轮播图片
		var aPicli = document.querySelectorAll('.pic li');
		//获取轮播下面的图片
		var aTehuiul = document.querySelectorAll('.tehui ul')
		//获取下面的滑过按钮
		var aTabli = document.querySelectorAll('.tab li');
		//获取左边的点击按钮
		var oBtnl = document.querySelector('.btn_l');
		//获取右边的点击按钮
		var oBtnr = document.querySelector('.btn_r');
		var timerbig;
		var index1 = 0;
		timerbig = setInterval(autoPlay,2000);
		function autoPlay(){
			index1++;
			if(index1>=aTabli.length){
				index1=0;
			}
			change()
		}
		oBiglunbo.onmouseover = function(){
			clearInterval(timerbig)
		}
		oBiglunbo.onmouseout = function(){
			timerbig = setInterval(autoPlay,2000)
		}
		oBtnr.onclick = function(){
			autoPlay()
		}
		oBtnl.onclick = function(){
			index1--;
			if(index1<0){
				index1 = aTabli.length-1
			}
			change();
		}
		c_right.onclick = function(){
			autoPlay()
		}
		c_left.onclick = function(){
			index1--;
			if(index1<0){
				index1 = aTabli.length-1
			}
			change();
		}
		function change(){
			for(var k=0;k<aTabli.length;k++){
				aPicli[k].style.display = 'none';
				aTabli[k].style.background = '#646464';
				aTehuiul[k].style.display = 'none';
			}
			aPicli[index1].style.display = 'block';
			aTehuiul[index1].style.display = 'block';
			aTabli[index1].style.background = 'red';
		}
		 for(let AA=0;AA<aTabli.length;AA++){
		 	aTabli[AA].onmouseover = function(){
		 		index1 = AA-1;
		 		autoPlay();
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
//倒计时(已隐藏)
	 function FreshTime(){
	 var endtime=new Date("2019/9/18,10:27:00");//结束时间
	 var nowtime = new Date();//当前时间
	 var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
	 // d=parseInt(lefttime/3600/24);
	 h=parseInt((lefttime/3600)%24);
	 m=parseInt((lefttime/60)%60);
	 s=parseInt(lefttime%60);
   
	 document.getElementById("h").innerHTML=h;
	 document.getElementById("m").innerHTML=m;
	 document.getElementById("s").innerHTML=s;
	 if(lefttime<=0){
	 	// document.getElementById("LeftTime").innerHTML="";
	 	clearInterval(sh);
	 }
	 }
	 FreshTime()
	 var sh;
	 sh=setInterval(FreshTime,1000);
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
// 图书A版
		var aTbaali = document.querySelectorAll('.tb_aa li');
		var aTabbox = document.querySelectorAll('.tab_box_aa .tab_content_aa');
		for(var o=0;o<aTbaali.length;o++){
			aTbaali[o].index = o;
			aTbaali[o].onmouseover = function(){
				for(var t=0;t<aTbaali.length;t++){
					aTbaali[t].style.background = '#eee';
					aTabbox[t].style.display = 'none';
				}
					this.style.background = '#fff';
					aTabbox[this.index].style.display = 'block'
			}
		}
		aTbaali.onmouseout = function(){
			aTbaali.style.background = '#eee';
		}
// 图书A版右侧TAB切换
			var oFoora = document.querySelectorAll('.floor_tab_bang_head li');
			var oFloorb = document.querySelectorAll('.floor_bang_ul')
			var oFoorzi = document.querySelectorAll('.floor_zi');
			var oFoortu = document.querySelectorAll('.floor_tu');
			console.log(oFloorb)
			// azxc[0].style.display='none';
			
			for(var r=0;r<oFoora.length;r++){
			oFoora[r].index = r;
			oFoora[r].onmouseover = function(){
				for(var k=0;k<oFoora.length;k++){
					oFoora[k].style.background = '#eee';
					oFloorb[k].style.display = 'none';
				}
					this.style.background = '#fff';
					oFloorb[this.index].style.display = 'block';
					oFoorzi[this.index].style.display = 'none';
					oFoortu[this.index].style.display = 'block';
			}
		}
			function tushu(tu,shu){
			var aFloorlin1 = document.querySelectorAll(tu);
			var aFoorbar = document.querySelectorAll(shu);
			for(var w=0;w<aFloorlin1.length;w++){
			aFloorlin1[w].index = w;
			// aFloorlin1[0].style.display='none'
			// aFoorbar[0].style.display='block'
			aFloorlin1[w].onmouseover = function(){
				for(var t=0;t<aFloorlin1.length;t++){
					aFloorlin1[t].style.display = 'block';
					aFoorbar[t].style.display = 'none';
				}
					this.style.display = 'none';
					aFoorbar[this.index].style.display = 'block'
			}
		}
		}
		tushu('.floor_tab_bang ul.tabbang li.floor_lin1','.floor_tab_bang ul.tabbang li.foor_bar');
		tushu('.floor_tab_bang ul.tabbang1 li.floor_lin1','.floor_tab_bang ul.tabbang1 li.foor_bar');
		// var aFloorlin1 = document.querySelectorAll('.floor_tab_bang ul.tabbang li.foor_bar')
		// var aFloorlin2 = document.querySelectorAll('.floor_tab_bang ul.tabbang1 li.foor_bar')
		// console.log(aFloorlin1)
		// console.log(aFloorlin2)
		// var oFoora1 = document.querySelectorAll('.floor_tab_bang_head li');
		// var oFloorb1 = document.querySelector('.floor_bang_ul1')
		// var oFloorb2 = document.querySelector('.floor_bang_ul')
		// for(var r=0;r<oFoora1.length;r++){
		// 	oFoora1[r].index = r;
		// 	oFoora1[r].onmouseover = function(){
		// 		for(var k=0;k<oFoora1.length;k++){
		// 			oFoora1[k].style.background = '#eee';
		// 			oFloorb1.style.display = 'none';
		// 		}
		// 			this.style.background = '#fff';
		// 			oFloorb2[this.index].style.display = 'block'
		// 	}
		// }
//服装里的轮播
//第一个
		function xiaofeng(xiao,feng){
			var aFuzhuangimg = document.querySelectorAll(xiao);
		var aFuzhuangli = document.querySelectorAll(feng);
		var timer;
		var z = 0;
		timer = setInterval(function(){
			for(var k=0;k<aFuzhuangimg.length;k++){
				aFuzhuangimg[k].style.display = 'none';
				aFuzhuangli[k].style.background = '#fff';
			}
			aFuzhuangimg[z].style.display = 'block';
			aFuzhuangli[z].style.background = 'red';
			z++;
			if(z==5){
				z=0;
			}
		},1500)
		for(var p=0;p<aFuzhuangli.length;p++){
			aFuzhuangli[p].index = p;
			aFuzhuangli[p].onmouseover = function(){
				for(var s=0;s<aFuzhuangli.length;s++){
					aFuzhuangimg[s].style.display = 'none';
					aFuzhuangli[s].style.background = '#fff';
				}
					aFuzhuangimg[this.index].style.display = 'block';
					this.style.background = 'red';
			}
		}
		}
		xiaofeng('.fuzhuang_lunbo_img li','.fuzhuang_lunbo_tab li')
//第二个
		xiaofeng('.fuzhuang_lunbo1_img li','.fuzhuang_lunbo1_tab li')
		
//第三个
		xiaofeng('.fuzhuang_lunbo2_img li','.fuzhuang_lunbo2_tab li')
//第四个
		xiaofeng('.fuzhuang_lunbo3_img li','.fuzhuang_lunbo3_tab li')
//第五个
		xiaofeng('.fuzhuang_lunbo4_img li','.fuzhuang_lunbo4_tab li')
	
//服装TAB切换
		var aFloorlin1 = document.querySelectorAll('.floor_lin1');
		var aFoorbar = document.querySelectorAll('.foor_bar');
		for(var w=0;w<aFloorlin1.length;w++){
			aFloorlin1[w].index = w;
			aFloorlin1[w].onmouseover = function(){
				for(var t=0;t<aFloorlin1.length;t++){
					aFloorlin1[t].style.display = 'block';
					aFoorbar[t].style.display = 'none';
				}
					this.style.display = 'none';
					aFoorbar[this.index].style.display = 'block'
			}
		}
		var oFuzhuangtab = document.querySelectorAll('.fuzhuang_screen li');
		var oFuzhuangdiv = document.querySelectorAll('.fuzhuang_box1')
		for(var r=0;r<oFuzhuangtab.length;r++){
			oFuzhuangtab[r].index = r;
			oFuzhuangtab[r].onmouseover = function(){
				for(var k=0;k<oFuzhuangtab.length;k++){
					oFuzhuangtab[k].style.background = '#eee';
					oFuzhuangdiv[k].style.display = 'none';
				}
					this.style.background = '#fff';
					oFuzhuangdiv[this.index].style.display = 'block'
			}
		}
//服装最下面的轮播
		var aFuzhuang_over = document.querySelectorAll('.fuzhuang_over ul');
		var timer;
		var j = 0;
		timer = setInterval(function(){
			for(var k=0;k<aFuzhuang_over.length;k++){
				aFuzhuang_over[k].style.opacity = 0;
			}
			aFuzhuang_over[j].style.opacity = 1;
			j++;
			if(j==2){
				j=0;
			}

		},1500)
//为您推荐
		var oWntjimg = ['27862677-1_h_16.jpg','27864170-1_h_3.jpg','23761145-1_h_2.jpg','25137790-1_h_2.jpg','23579654-1_h_3.jpg','23444350-1_h_4.jpg','23990140-1_h_7.jpg','20770128-1_h_2.jpg','23427436-1_h_4.jpg','25252408-1_h_19.jpg','24175371-1_h_87.jpg','24198400-1_h_4.jpg','27862677-1_h_16.jpg','27864170-1_h_3.jpg','23761145-1_h_2.jpg','25137790-1_h_2.jpg','23579654-1_h_3.jpg','23444350-1_h_4.jpg','23990140-1_h_7.jpg','20770128-1_h_2.jpg','23427436-1_h_4.jpg','25252408-1_h_19.jpg','24175371-1_h_87.jpg','24198400-1_h_4.jpg','27862677-1_h_16.jpg','27864170-1_h_3.jpg','23761145-1_h_2.jpg','25137790-1_h_2.jpg','23579654-1_h_3.jpg','23444350-1_h_4.jpg','23990140-1_h_7.jpg','20770128-1_h_2.jpg','23427436-1_h_4.jpg','25252408-1_h_19.jpg','24175371-1_h_87.jpg','24198400-1_h_4.jpg'];
		var html = '';
		var oWntjul = document.querySelector('.wntj_ul');
		for(var A=0;A<36;A++){
			html+='<li><a href="#"><img src="../img/'+oWntjimg[A]+'" alt=""></a><p class="wntj_p1">最初之前（预售24小时狂销售10余万，平均每分钟1000册，霸榜新书总</p><p class="wntj_p2">¥ 34.3</p></li>'
		}
		oWntjul.innerHTML = html;
//左侧楼梯加吸顶
	var aFixlia = document.querySelectorAll('.fli_ul a');//12
	var aFixspan = document.querySelectorAll('.fli_ul span');
	for(var B=0;B<aFixlia.length;B++){
				aFixlia[B].index = B;
				aFixlia[B].onmouseover = function(){
					aFixspan[this.index].style.display = 'block';
				}
				aFixlia[B].onmouseout = function(){
				aFixspan[this.index].style.display = 'none';
				}
				aFixspan[B].onmouseover = function(){
				this.style.display = 'block';
				}
				aFixspan[B].onmouseout = function(){
				this.style.display = 'none';
				}
			}
			// var U = document.body.scrollTop||document.documentElement.scrollTop;
			// console.log(U)
		var oFixed = document.querySelector('.mix_search_top');
		var oFixbox = document.querySelector('.fix_box')
		var oFixbox1 = document.querySelector('.fix_box1');
		var oFixbox2 = document.querySelector('.fix_box2');
		var oFixbox3 = document.querySelector('.fix_box3');
		var oFixbox4 = document.querySelector('.fix_box4');
		var oFixbox5 = document.querySelector('.fix_box5');
		window.onscroll = function(){
		var Q = document.body.scrollTop||document.documentElement.scrollTop;
		console.log(Q)
		if(Q>=764&&Q<=1864){
			oFixbox1.style.background = '#93d46f';
		}else{
			oFixbox1.style.background = '#fff';
		}
		if(Q>=1865&&Q<=2464){
			oFixbox2.style.background = '#f97f67';
		}else{
			oFixbox2.style.background = '#fff';
		}
		if(Q>=2465&&Q<=3464){
			oFixbox3.style.background = '#72d599';
		}else{
			oFixbox3.style.background = '#fff';
		}
		if(Q>=3465&&Q<=3964){
			oFixbox4.style.background = '#ff857f';
		}else{
			oFixbox4.style.background = '#fff';
		}
		if(Q>=3965&&Q<=4564){
			oFixbox5.style.background = '#f97f67';
		}else{
			oFixbox5.style.background = '#fff';
		}
		if(Q>=764&&Q<=4564){
			oFixbox.style.display = 'block';
		}else{
			oFixbox.style.display = 'none';
		}
		if(Q>500){
			oFixed.style.display = 'block';
		}else{
			oFixed.style.display = 'none';
		}
	}
		oFixbox1.onclick = function(){
		document.body.scrollTop = 764;
		document.documentElement.scrollTop = 764;
	}
		oFixbox2.onclick = function(){
		document.body.scrollTop = 1865;
		document.documentElement.scrollTop = 1865;
	}
		oFixbox3.onclick = function(){
		document.body.scrollTop = 2465;
		document.documentElement.scrollTop = 2465;
	}
		oFixbox4.onclick = function(){
		document.body.scrollTop = 3465;
		document.documentElement.scrollTop = 3465;
	}
		oFixbox5.onclick = function(){
		document.body.scrollTop = 3965;
		document.documentElement.scrollTop = 3965;
	}
//返回顶部
		var oBacktop = document.querySelector('.back_top');
		var timertop;
		oBacktop.onclick = function(){
			var BB = parseInt(document.documentElement.scrollTop||document.body.scrollTop);
			timertop = setInterval(function(){
				BB-=10;
				if(BB<=0){
					clearInterval(timertop);
				}
				document.body.scrollTop = BB;
				document.documentElement.scrollTop = BB;

			},10)
		}
		
//右侧楼梯
		// var aRg = document.querySelectorAll('.sidebar_top a');
		// var aRgspan = document.querySelectorAll('.sidebar_top span');
		// for(var DD = 0;DD<aRg.length;DD++){
		// 	aRg[DD].onmousemove = function(){
		// 		// aRg[DD].index = DD;
		// 		aRgspan[DD].style.left = '-79'+'px';
		// 	}	
		// }