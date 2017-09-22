$(document).ready(function(){
	$("#introduce1").mouseenter(function(){
		$("#introduce1").fadeOut(50);
	})
	$(".replace").mouseleave(function(){
		$("#introduce1").fadeIn(50);
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>400){
			$(".first-intro").fadeIn(2000);
		}
	})
})
$(document).ready(function(){
	$('.location').click(function(){
		$.ajax({
			url:"http://localhost:8080/A%E7%BA%A7-%E9%99%88%E5%AD%90%E6%85%8E/linkto.php?__hbt=1506038660346"
			});
		window.location.href='http://localhost:8080/A级-陈子慎/dealpic.php';
	})
})

$(document).ready(function(){
	$('.location-gate').click(function(){
		$.ajax({
			url:"http://localhost:8080/A%E7%BA%A7-%E9%99%88%E5%AD%90%E6%85%8E/linkto.php?__hbt=1506038660346"
			});
		window.location.href='http://localhost:8080/A级-陈子慎/dealpic2.php';
	})	
})

$(document).ready(function(){
	$('.location-van').click(function(){
		$.ajax({
			url:"http://localhost:8080/A%E7%BA%A7-%E9%99%88%E5%AD%90%E6%85%8E/linkto.php?__hbt=1506038660346"
			});
		window.location.href='http://localhost:8080/A级-陈子慎/dealpic3.php';
	})	
})
$(document).ready(function(){
	$("#surface").mouseover(function(){
		$("#surface").fadeOut(50);
	})
	$("#up-fit-grass").mouseleave(function(){
		$("#surface").fadeIn(50);
	})
})
$(document).ready(function(){
	$('#second-sur').mouseover(function(){
		$("#second-sur").fadeOut(50);
	})
	$('#second').mouseleave(function(){
		$("#second-sur").fadeIn(50);
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>700){
			$(".second-intro").fadeIn(2000);
		}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>1500){
			$("#th-whole").fadeIn(2000)
		}
	})
})
$(document).ready(function(){
	$('#th-sur').mouseover(function(){
		$('#th-sur').fadeOut(50)
	})
	$('#th').mouseleave(function(){
		$('#th-sur').fadeIn(50)
	})
})


$(document).ready(function(){
	$('#sea-btn').click(function(){
		var data=$('#inp').val();
		var pattern1=/\u6076\u9b54\u4e4b\u8c1c/
		var pattern2=/\u547d\u8fd0\u77f3\u4e4b\u95e8/
		var pattern3=/\u7a7a\u4e4b\u5883\u754c/
		$.ajax({
		url:"linkto.php"
		});
		if(pattern1.test(data)){		
			window.location.href='dealpic.php';
		}
		else if(pattern2.test(data)){
			window.location.href='dealpic2.php';
		}
		else if(pattern3.test(data)){
			window.location.href='dealpic3.php';
		}
		else{
			alert('没有找到所要的漫画');
		}
	})
})
