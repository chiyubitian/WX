// 页面加载
$(document).ready(function () {
	// 顶通占位
	csh()
	
});
// 顶通占位
function csh() {
  	$("#J_promotional-top").css({ "display": "block" })
}
$(".jd_close_button").on("click", function () {
    $("#J_promotional-top").css({"display":"none"})
})
// 城市选择
$(".ui-areamini-content-list").on("click", "a", function () {
	$(this).addClass("selected").parent().siblings().children("a").removeClass("selected")
	let city = $(this).text();
	$(".ui-areamini-text").text(city)
})
// 下拉菜单移入移出
$(".cw-icon").hover(function () {
	$(this).next(".dropdown-layer").toggle()
	$(this).toggleClass("xiala")
}, function () {
	$(this).next(".dropdown-layer").toggle();
	$(this).toggleClass("xiala")	
})
$(".dropdown-layer").hover(function () {
	$(this).toggle()
	$(this).prev(".cw-icon").toggleClass("xiala")
}, function () {
	$(this).toggle()
	$(this).prev(".cw-icon").toggleClass("xiala")	
})
// 搜索框关键词
function inputKeyword() {
	let Keyword = ["电脑主机i7", "时尚大牌领券满400减50", "奥利奥饼干", "花王拉拉裤", "雅马哈电钢琴", "乳胶漆", "抢笔记本1111元神券", "微星游戏本", "显卡gtx系列"];
	
		let random_index = parseInt(Math.random()*Keyword.length)
		$(".header input[type=text]").attr("placeholder", Keyword[random_index])
	
}
var input = setInterval(inputKeyword, 5000)
// 当搜索框聚焦时关闭定时器
$(".header input[type=text]").on("focus", function () {
	clearInterval(input)
})
// 当搜索框聚焦时打开定时器
$(".header input[type=text]").on("blur", function () {
	input = setInterval(inputKeyword,5000)
})

// 热词关键词
function hotWord() {
	let hotword = [{
		href : "http://prodev.jd.com/mall/active/3uMLXtALs2nkhbEkKCfT6RHX2mQB/index.html",
		text : "海囤全球日"
	},{
		href : "http://pro.jd.com/mall/active/3Fv5vcMoGn61RiS3yroNnvK1uggJ/index.html",
		text : "天天抢五折"
	}, {
		href : "http://prodev.jd.com/mall/active/es1mf1ag95LFvj8sYD38zRKyFXj/index.html",
		text : "时髦秋冬装"
	}];
	
		let random_index = parseInt(Math.random()*hotword.length)
	$(".hotword").html(hotword[random_index].text)
	$(".hotword").attr("href", hotword[random_index].href)
	
}
// 固定栏
$(document).on("scroll", function () {
	let jdms_top = $(".shop-nav").offset().top
	let scrool_top = $("html,body").scrollTop()
	if (scrool_top >= jdms_top) {
		$("#search").show().addClass("search-fix")
	}
	else {
		$("#search").hide().removeClass("search-fix")
	}
})
var hotword = setInterval(hotWord, 2000)


// 商品分类列表二级菜单
// 二级菜单选项卡列表
var list_index
// 移入列表项
$(".cate_menu_item").on("mouseenter", function () {
  list_index = $(this).index()
  // console.log(index)
  $(".JS_popCtn").css({ "display": "block" })
  $(".cate_part").eq(list_index).css({"display":"block"})
})
// 移出列表项
$(".cate_menu_item").on("mouseleave", function () {
  $(".JS_popCtn").css({ "display": "none" })
  $(".cate_part").css({"display":"none"})
})
// 移入选项卡
$(".JS_popCtn").on("mouseenter", function () {
  $(".JS_popCtn").css({ "display": "block" })
  $(".cate_part").eq(list_index).css({"display":"block"})
})
// 移出选项卡
$(".JS_popCtn").on("mouseleave", function () {
  $(".JS_popCtn").css({ "display": "none" })
  $(".cate_part").css({"display":"none"})
}) 

// 基本轮播图(类似的轮播图都将继承)
function Lunbo(arg) {
	this.innt(arg)
	this.event()
	this.autoPlay()
}

Lunbo.prototype.innt = function(arg){
	// 获取需要的元素
	// 控件
	// 右键
	this.$slider_control_next = $(arg.selector+" .slider_control_next")
	// 左键
	this.$slider_control_prev = $(arg.selector+" .slider_control_prev")
	// 图片列表
	this.$slider_list = $(arg.selector + " .slider_list")
	// 包裹图片条
	this.$slider_wrapper = $(arg.selector + " .slider_wrapper")
	// console.log(this.$slider_wrapper)
	// 图片列表项
	this.$slider_item = $(arg.selector+ " .slider_item")
	// 圆点列表
	this.$slider_indicators_btn = $(arg.selector + " .slider_indicators_btn")
	// 透明度索引值
	this.opacity_index = 0;
	// 移动索引值
	this.move_index = 1;
	
	// 时间周期
	this.type = arg.type;
	this.time = arg.time;
	this.autoplay = arg.autoplay;
	// console.log(this.$slider_list)

}
Lunbo.prototype.event = function () {
	
	// 点击按钮事件
	this.$slider_control_next.on("click", function () {
		this.opacityIndexChange("next")
		this.imgOpacity()
		this.moveIndexChange("next")
		this.imgMove()
		this.clickCliChange()
		// console.log(this.index)
	}.bind(this))
	this.$slider_control_prev.on("click", function () {
		this.opacityIndexChange("prev")
		this.imgOpacity()
		this.moveIndexChange("prev")
		this.imgMove()
		this.clickCliChange()
	}.bind(this))	
	// 鼠标滑过圆点事件
	this.$slider_indicators_btn.on("mouseenter", function (e) {
		this.mouseCliChange(e)
		this.imgOpacity()
	}.bind(this))
	// 鼠标滑过图片暂停事件
	this.$slider_list.on("mouseenter", function () {
		clearInterval(this.timer1)
	}.bind(this))
	// 鼠标滑出图片播放事件
	this.$slider_list.on("mouseleave", function () {
		this.autoPlay()
	}.bind(this))
	
}
// 透明度索引值变化
Lunbo.prototype.opacityIndexChange = function(type){
	if (type === "next") {
		this.opacity_index++;
		if (this.opacity_index > this.$slider_item.length - 1) {
			this.opacity_index = 0
		}
	}
	else if (type === "prev") {
		this.opacity_index--;
		if (this.opacity_index < 0) {
			this.opacity_index = this.$slider_item.length - 1
		}
	}
}
// 图片透明度方法
Lunbo.prototype.imgOpacity = function () {
	if (this.type !== "opacity") {
		return 
	}
	this.$slider_item.eq(this.opacity_index).css({"opacity" : 1,"zIndex" : 1}).siblings().css({"opacity" : 0,"zIndex" : 0})
}
// 移动索引值变化
Lunbo.prototype.moveIndexChange = function (type) {
	if (this.type !== "move") {
		return 
	}
	let slider_list_w = this.$slider_list.width()
	let length = this.$slider_wrapper.width() / slider_list_w
	this.$slider_wrapper.css({ "transition": "transform .4s ease 0s"})
	if (type === "next") {
		this.move_index++;
		if (this.move_index === length - 1) {
			setTimeout(() => {
				this.move_index = 1;
				this.$slider_wrapper.css({ "transition": `none` })
				this.$slider_wrapper.css({"transform" : 	`translate3d(${-slider_list_w * this.move_index}px, 0px, 0px)`})
			}, 400);
			
			
		}
		console.log(this.move_index)
	}
	else if (type === "prev") {
		this.move_index--;
		if (this.move_index === 0) {
			setTimeout(() => {
				this.move_index = length - 2
				this.$slider_wrapper.css({ "transition": `none` })
				this.$slider_wrapper.css({"transform" : 	`translate3d(${-slider_list_w * this.move_index}px, 0px, 0px)`})
			}, 400);
			
		}
		console.log(this.move_index)
	}
}
// 图片移动方法
Lunbo.prototype.imgMove = function () {
	if (this.type !== "move") {
		return 
	}
	let slider_list_w = this.$slider_list.width()
	this.$slider_wrapper.css({"transform" : 	`translate3d(${-slider_list_w * this.move_index}px, 0px, 0px)`})
}
// 点击左右按钮小圆点变化
Lunbo.prototype.clickCliChange = function(){
	this.$slider_indicators_btn.eq(this.opacity_index).addClass("slider_indicators_btn_active").siblings().removeClass("slider_indicators_btn_active")
}
// 鼠标划过时小圆点变化
Lunbo.prototype.mouseCliChange = function(e){
	$(e.target).addClass("slider_indicators_btn_active").siblings().removeClass("slider_indicators_btn_active")
	this.opacity_index = $(e.target).index()
}
// 自动轮播
Lunbo.prototype.autoPlay = function (time) {
	if (!this.autoplay) {
		return 
	}
	this.timer1 = setInterval(function () {
		this.$slider_control_next.trigger("click")
	}.bind(this), this.time)
}
// 通过继承来实现
function BannerLunbo(arg) {
	Lunbo.call(this, arg)
}
BannerLunbo.prototype = Object.create(Lunbo.prototype)
let sliderBanner = new BannerLunbo({ selector: ".sliderBanner" ,type : "opacity" , time : 2000 , autoplay : true })


function RecommendLunbo(arg) {
	Lunbo.call(this, arg)
}
RecommendLunbo.prototype = Object.create(Lunbo.prototype)
let sliderRecommend = new RecommendLunbo({ selector: ".sliderRecommend" ,type : "opacity" , time : 4000 , autoplay : false})


function SeckilllistLunbo(arg) {
	Lunbo.call(this, arg)
}
SeckilllistLunbo.prototype = Object.create(Lunbo.prototype)
let seckilllist = new SeckilllistLunbo({ selector: ".seckill-list" ,type : "move" , time : 4000 , autoplay : false})
console.log(sliderBanner, sliderRecommend ,seckilllist)
// 京东秒杀
// 倒计时器
function jdms() {
	let $otimmer__desc = $(".countdown-desc")
	let $otimmer__unit_hour = $(".timmer__unit--hour")
	let $otimmer__unit_minute = $(".timmer__unit--minute")
	let $otimmer__unit_second = $(".timmer__unit--second")
	let set_time = new Date(setDate());
	function djs() {
		let now_time = new Date()
		let time_cha = set_time.getTime() - now_time.getTime()
		let d = parseInt(time_cha / 1000 / 3600 / 24)
			d = d < 10 ? `0${d}` : d
		let h = parseInt(time_cha / 1000 / 3600 % 24)
			h = h < 10 ? `0${h}` : h
		let m = parseInt(time_cha / 1000 / 60 % 60)
			m = m < 10 ? `0${m}` : m
		let s = parseInt(time_cha / 1000 % 60)
			s = s < 10 ? `0${s}` : s
		if (time_cha <= 0) {
			clearInterval($otimmer__desc.timer)
			h = m = s = "00";
			setDate()
		}
		// console.log(d,h,m,s)
		$otimmer__unit_hour.html(h)
		$otimmer__unit_minute.html(m)
		$otimmer__unit_second.html(s)
	}
	djs()
	$otimmer__desc.timer = setInterval(djs, 1000)
}
// 设置时间参数
function setDate() {
	let set_hours = [0 , 6 , 8 , 10 , 12 , 14 , 16 , 18, 20 , 22]
	let isnow = new Date()
	let now_date = isnow.toLocaleDateString()
	let now_hour = isnow.getHours()
	for (let index = 0; index < set_hours.length; index++) {
		if (now_hour < set_hours[index + 1] && now_hour >= set_hours[index]) {
			now_hour = set_hours[index]
		}
		
	}
	$("#mbd_time").html(`${now_hour}:00`)
	// console.log(now_hour)
	let set_hour;
	if (now_hour >= 0 && now_hour < 6) {
		set_hour = now_hour + 6
	}
	else {
		set_hour = now_hour + 2
	}
	let set_date = `${now_date} ${set_hour}:00:00`
	return set_date;
}
jdms()