$(function(){
	$(".nav-a1").mouseenter(function(){
		$("li").stop();
		$("li.about-brandl-img1").siblings().animate({"margin-left":600},1000);
		$("li").removeClass("about-brandr-img-pactive");
		$(".nav-icon1").addClass("about-brandr-img-pactive");
		$("li.nav-p1").siblings().fadeOut(500);
		$("li.nav-p1").fadeIn(1000);
	});
	$(".nav-a2").mouseenter(function(){
		$("li").stop();
		$("li.about-brandl-img2").animate({"margin-left":0},1000);
		$("li.about-brandl-img3").animate({"margin-left":600},1000);
		$("li").removeClass("about-brandr-img-pactive");
		$(".nav-icon2").addClass("about-brandr-img-pactive");
		$("li.nav-p2").siblings().fadeOut(500);
		$("li.nav-p2").fadeIn(1000);
	});
	$(".nav-a3").mouseenter(function(){
		$("li").stop();
		$("li.about-brandl-img2").animate({"margin-left":0},1000);
		$("li.about-brandl-img3").animate({"margin-left":0},1000);
		$("li").removeClass("about-brandr-img-pactive");
		$(".nav-icon3").addClass("about-brandr-img-pactive");
		$("li.nav-p3").siblings().fadeOut(500);
		$("li.nav-p3").fadeIn(1000);
	});
	$(".nav-a1,.nav-a2,.nav-a3").mouseleave(function(){
		$(".nav-a1,.nav-a2,.nav-a3").stop();
		$("li.about-brandl-img3").animate({"margin-left":400},1000);
		$("li.about-brandl-img2").animate({"margin-left":200},1000);
	});
	
	// $("li.about-brand-content1,img.about-brandl-img1").mouseenter(function(){
	// 	$("li.about-brand-hide").fadeOut(1000);
	// 	$("li.about-brand-content1").fadeIn(3000);
	// 	$("ul.aout-brandr-img-point").children().removeClass("about-brandr-img-pactive");
	// 	$("div.about-brandl-img").children().removeClass("about-brand-bigimg");
	// 	$("img.about-brandl-img1").fadeIn(3000);
	// 	$("li.bg1-radius").addClass("about-brandr-img-pactive");
	// });
	// $("li.about-brand-content2,img.about-brandl-img2").mouseenter(function(){
	// 	$("li.about-brand-hide").fadeOut(1000);
	// 	$("li.about-brand-content2").fadeIn(3000);
	// 	$("ul.aout-brandr-img-point").children().removeClass("about-brandr-img-pactive");
	// 	$("div.about-brandl-img").children().removeClass("about-brand-bigimg");
	// 	$("img.about-brandl-img2").addClass("about-brand-bigimg");
	// 	$("li.bg2-radius").addClass("about-brandr-img-pactive");
	// });
	// $("li.about-brand-content3,img.about-brandl-img3").mouseenter(function(){
	// 	$("li.about-brand-hide").fadeOut(1000);
	// 	$("li.about-brand-content3").fadeIn(3000);
	// 	$("ul.aout-brandr-img-point").children().removeClass("about-brandr-img-pactive");
	// 	$("div.about-brandl-img").children().removeClass("about-brand-bigimg");
	// 	$("img.about-brandl-img3").addClass("about-brand-bigimg");
	// 	$("li.bg3-radius").addClass("about-brandr-img-pactive");
	// });
	// $("li.about-brand-content1,img.about-brandl-img1").mouseleave(function(){
	// 	$("div.about-brandl-img").children().fadeIn(3000);
	// });
	// $("li.about-brand-content2,img.about-brandl-img2").mouseleave(function(){
	// 	$("div.about-brandl-img").children().removeClass("about-brand-bigimg");
	// });
	// $("li.about-brand-content3,img.about-brandl-img3").mouseleave(function(){
	// 	$("div.about-brandl-img").children().removeClass("about-brand-bigimg");
	// });

	var oldid=1;
	var newid=1;
	// 点击图片滚动  idname 传入的id名，old当前的显示，new当前点击的
	function anma(idname,oldid){

		switch(idname){
			case "img-a1":newid=1; break;
			case "img-a2":newid=2; break;
			case "img-a3":newid=3; break;
			case "img-a4":newid=4; break;
			case "img-a5":newid=5; break;
			case "img-a6":newid=6; break;
		}
		var speed=(oldid - newid) * 640 - 359;
		oldid = newid;
		$(".about-img-list").animate({'margin-left':speed + 'px'},500);
	}
	$("#imglists").children().click(function(){
		anma($(this).attr("id"),oldid);
		$("#imglists").find("img").attr("src","./upload/about/pull-block.png");
		$(this).find("img").attr("src","./upload/about/pull.png");
	});




	// 讲师团队
	$(".tteammove").mouseenter(function(){
		$(this).prev().find("p").addClass("tteam-nobox");
		$(this).addClass("tteam-active");
	});
	$(".tteammove").click(function(){
		$(".tteammove").removeClass("istrue").removeClass("tteam-active");
		$(".tteammove").find("p").removeClass("tteam-nobox");
		$(this).addClass("istrue")
		$(this).prev().find("p").addClass("tteam-nobox");
		$(this).addClass("tteam-active");
	});
	$(".tteammove").mouseleave(function(){
		$(this).not(".istrue").prev().find("p").removeClass("tteam-nobox");
		$(this).not(".istrue").removeClass("tteam-active");
	});




	//获取城市模块到顶部的距离   
    $('#about_tenet_a').click(function () {  
        $('html,body').animate({scrollTop:1030},500);  
    });  

    //获取城市模块到顶部的距离   
    $('#about_tenet_a').click(function () {  
    	var atop=$("#about_tenet").offset().top - 80;
        $('html,body').animate({scrollTop:atop},500);  
    });  

    $('#about_tenet_ai').click(function () { 
    	var  atopi=$("#about_join").offset().top - 80;
        $('html,body').animate({scrollTop:atopi},1000);  
    }); 
















    var alll=0;
     $('.about-partnet-list').mouseenter(function () {
     		alll=alll + 100;
            $(this).animate({marginLeft:"-800px"},1000, function () {
                    $(".about-partnet-list ul>li").eq(0).appendTo($(this));
            });
        });
 //            $('.left').click(function () {
 //                $("#banner ul").css('marginLeft','-800px');
 //                $("#banner ul>li").eq(3).prependTo($("#banner ul"));
 //                $("#banner ul").animate({marginLeft:"0px"},600);
 //            }
	// });
});