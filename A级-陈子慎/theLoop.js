var i = 0;
var time;
$(document).ready(function(){
    $(".swapImg").eq(0).show().siblings().hide();
    showTime();
    $(".btnLeft").click(function (){
        clearInterval(time);
        if (i == 0){
            i =3;
        }
        i--;
        show();
        showTime();
    });
    $(".btnRight").click(function () {
        clearInterval(time);
        if (i == 2){
            i = -1;
        }
        i++;
        show();
        showTime();
    });
});
function show(){
    $(".swapImg").eq(i).fadeIn(300).siblings().fadeOut();
}

function showTime(){
    time = setInterval(function () {
        i++;
        if (i == 3){
            i = 0;
        }
        show();
    },3000);
}
$(document).ready(function(){
	$(".theimage").hover(function(){
		$(".btnLeft").css(
			"display","block"
		)
		$(".btnRight").css(
			"display","block"
		)
	})
	$(".theimage").mouseleave(function(){
		$(".btnLeft").css(
			"display","none"
		)
		$(".btnRight").css(
			"display","none"
		)
	})
})
