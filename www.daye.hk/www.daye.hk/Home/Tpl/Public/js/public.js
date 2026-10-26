var bodyHeight = parseInt(document.documentElement.clientHeight);
var bodyWidth = parseInt(document.documentElement.clientWidth);
var navTimer = new Array();
var documentHeight = 0, goTopOffset = 0;
$(document).ready(function(){
	if($(window).scrollTop() > 0){
		$(".header").addClass("small");
		$(".btn-menu").addClass("small");
	}

	$("img").lazyload({
		effect : "fadeIn",
	    threshold : 200
	});

	var wow = new WOW({
		mobile: false
	}); 
	wow.init();
	
	documentHeight = $(document).height();
	goTopOffset = $(".footer").height() / 2 + bodyHeight;

	$(window).scroll(function(){
		if($(window).scrollTop() == 0){
			$(".header").removeClass("small");
			$(".btn-menu").removeClass("small");
		}else{
			$(".header").addClass("small");
			$(".btn-menu").addClass("small");
		}

		/*
		if($(window).scrollTop() >= documentHeight - goTopOffset){
			$(".go-top").show();
		}else{
			$(".go-top").hide();
		}
		*/
	});

	$('body').bind('contextmenu', function(){
		return false;
	});

	$(document).click(function(e){
		// close city
		var dyCity = $(".top-city span");
		if(!dyCity.is(e.target) && dyCity.has(e.target).length === 0){
			$(".top-city ul").hide();
			$(".top-city").removeClass("show");
		}
		// close select
		var dySelect = $(".dy-select-title");
		if(!dySelect.is(e.target) && dySelect.has(e.target).length === 0){
			$(".dy-select").removeClass("show");
			setTimeout(function(){
				$(".dy-select").find("ul").hide();
			},550);
		}
	});

	$(".top-city span").click(function(){
		if($(".top-city").hasClass("show")){
			$(".top-city").removeClass("show");
			setTimeout(function(){
				$(".top-city ul").hide();
			},500);
		}else{
			$(".top-city ul").show();
			setTimeout(function(){
				$(".top-city").addClass("show");
			},50);
		}
	});
	
	$(".header .nav ul li").mouseenter(function(){
		var $subnav = $(this).find(".subnav");
		$subnav.hide();
		$subnav.removeClass("show");
		$subnav.removeClass("hide");
		setTimeout(function(){
			$subnav.show();
		},50);
		setTimeout(function(){
			$subnav.addClass("show");
		},100);
	});

	$(".header .nav ul li").mouseleave(function(){
		var $subnav = $(this).find(".subnav");
		$subnav.addClass("hide");
		$subnav.one("transitionend", function(){
			if($subnav.hasClass("hide")){
				$subnav.hide();
				$subnav.removeClass("show");
				$subnav.removeClass("hide");
			}
		});
	});

	$(".dy-select-title").click(function(){
		$select = $(this).parent();
		if($select.hasClass("show")){
			$select.removeClass("show");
			setTimeout(function(){
				$select.find("ul").hide();
			},550)
		}else{
			$select.find("ul").show();
			setTimeout(function(){
				$select.addClass("show");
			},50);
		}
	});

	//news class
	$(".news-class dl dt").click(function(){
		$(this).parent().siblings(".maxclass").removeClass("show");
		if(!$(this).parent().hasClass("show")){
			$(this).parent().addClass("show");
		}else{
			$(this).parent().removeClass("show");
		}

		$(this).parent().siblings(".maxclass").find("dd").stop().slideUp(400);
		$(this).parent().find("dd").slideToggle(400);
	});

	//counter
	$('.timer').appear();
    $(document.body).on('appear', '.timer', function (e) {
        if (!$(this).hasClass('appear')) {
            $(this).countTo();
            $(this).addClass('appear');
        }
	});

	//mobile
	//var menuHeight = $(".menu ul li").length * (bodyWidth * 0.096 + 1) + 1;

	$(".btn-menu").click(function(){
		$this = $(this);
		if($this.hasClass("close")){
			$(".menu").removeClass("show");
			setTimeout(function(){
				$(".menu").hide();
			},500);
			$this.removeClass("close");
		}else{
			$(".menu").show();
			setTimeout(function(){
				$(".menu").addClass("show");
			},100);
			setTimeout(function(){
				$this.addClass("close");
			},300);
		}
	});

	$(".menu ul li a.maxmenu").click(function(){
		var $search = $(".menu-search");
		var $parent = $(this).parent();
		if(!$parent.hasClass("show")){
			$(".menu ul li").removeClass("show");
			$parent.addClass("show");
			$search.addClass("hide");
		}else{
			$(".menu ul li").removeClass("show");
			$search.removeClass("hide");
		}
	});

	$(".menu ul li .submenu a").click(function(){
		$(".menu").removeClass("show");
		setTimeout(function(){
			$(".menu").hide();
		},500);
		$this.removeClass("close");
	});

	//jump page
	$(".jumppage a").click(function(){
		var currUrl = window.location.href;
		var goToPage = parseInt($(this).parent().find("input").val());
		var index = currUrl.indexOf("?&p=");
		if(goToPage > 0){
			if(index >= 0 ){
				currUrl = currUrl.substr(0, index);
			}
			window.location.href = currUrl + '?&p=' + goToPage;
		}
	});
});

function jumpToPage(goToPage){
	var currUrl = window.location.href;
	var index = currUrl.indexOf("?&p=");
	if(goToPage > 0){
		if(index >= 0 ){
			currUrl = currUrl.substr(0, index);
		}
		window.location.href = currUrl + '?&p=' + goToPage;
	}
}

function showTopSearch(){
	$("#ov-search").show();
	setTimeout(function(){
		$("#ov-search").addClass("show");
	},100);
}

function closeTopSearch(){
	$("#ov-search").removeClass("show");
	setTimeout(function(){
		$("#ov-search").hide();
	},850);
}

function showCode(){
	$("#ov-code").show();
	setTimeout(function(){
		$("#ov-code").addClass("show");
	},100);
}

function closeCode(){
	$("#ov-code").removeClass("show");
	setTimeout(function(){
		$("#ov-code").hide();
	},850);
}

function feedback(){
	var name = $("#f-name").val();
	var phone = $("#f-phone").val();
	var email = $("#f-email").val();
	var company = $("#f-company").val();
	var content = $("#f-content").val();
	var code = $("#f-code").val();

	if(!name || !phone || !email || !company || !content || !code){
		showMessage("请将留言信息填写完整");
		return false;
	}

	if(!checkEmail(email)){
		showMessage("请填写正确的邮箱");
		return false;
	}

	$.ajax({
		type: "POST",
		url:  "index.php?m=Feedback&a=feedback",
		dataType: "json",
		data: {name:name, phone:phone, email:email, company:company, content:content, code:code},
		success: function(data){
			showMessage(data.msg);
		},
		error: function(){
			showMessage("提交失败，请稍后重试");
		}
	});
}

// function
function goTop(speed){
	speed=speed>0?speed:1000;
	$('body,html').animate({scrollTop:0},speed);
}

function goTo(obj){
	var offset=parseInt($('#'+obj).offset().top)-100;
    $('body,html').animate({scrollTop:offset},800);
}

function doSubmit(obj){
	$('#'+obj).submit();
}

function showVideo(url){
	$("#black").show();
	$("#videoBox").show();
	$("#playVideo").show();
	$("#videoBox video").attr("src",url);
	setTimeout(function(){
		$("#black").addClass("show");
	},50);
	setTimeout(function(){
		$("#videoBox").addClass("show");
	},550);
}

function closeVideo(){
	$("#videoBox").removeClass("show");
	setTimeout(function(){
		$("#videoBox").hide();
		$("#videoBox video").attr("src",'');
		$("#black").removeClass("show");
	},550);
	setTimeout(function(){
		$("#black").hide();
	},1050);
}

function playVideo(){
	var video = document.getElementById("audioVideo");
	video.play();
	$("#playVideo").hide();
}

function showMessage(msg){
    $("#oc_message").text(msg);
    $("#oc_message_box").fadeIn(200);
    setTimeout(function(){
        $("#oc_message_box").fadeOut(200);
    },2200);
}

function checkEmail(email){
	var myreg = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/; 
	if(!myreg.test(email)) { 
    	return false; 
	}else{
		return true;
	}
}

function jumpQQ(qq){
	var userAgent = navigator.userAgent;
	var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	var flag = true;
	for (var i in agents) {
		if (userAgent.indexOf(agents[i]) > -1) {
			flag = false;
			break;
		}
	}
	if(flag){
	　　window.location.href = "https://wpa.qq.com/msgrd?v=1&uin=" + qq + "&site=qq&menu=yes";
	}else{
		window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin=" + qq + "&version=1&src_type=web&web_src=oicqzone.com";
	}
}
