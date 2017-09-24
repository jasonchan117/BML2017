$(document).ready(function(){
	
	$("#inputEmail").keydown(function(){
		if (event.keyCode == 8){
			$("#warn1").css(
				"display","none"
			)
		}
		else if($("#inputEmail").val()==""){
			$("#warn1").css(
				"display","none"
			)
		}
	})
	$("#inputPassword").keydown(function(){
		if (event.keyCode == 8){
			$("#warn2").css(
				"display","none"
			)
		}
		else if($("#inputPassword").val()==""){
			$("#warn2").css(
				"display","none"
			)
		}
	})
})
$(document).ready(function(){
	$("#warn1").hide();
	var cout1=/\./g;
	var cout2=/@/g;
	var pattern1=/^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[A-Z-a-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$/;
	var pattern2=/^(\.)[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[A-Z-a-z0-9]*[a-z0-9]+.){1,63}[A-Za-z0-9]+$/;
	var pattern3=/^(@)[va-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[A-Z-a-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$/;
	var pattern4=/^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*([A-Za-z0-9]+[A-Z-a-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+(@)$/;
	var pattern5=/^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*([A-Za-z0-9]+[A-Z-a-z0-9]*[A-Za-z0-9]+.){1,63}[va-z0-9]+(\.)$/;
	$("#Submit").click(function(){
		var email=$("#inputEmail").val();
		if(email==''){
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('邮箱地址不能为空');
		}
		else if(pattern2.test(email)){
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('不能以.开头');
		}
		else if(pattern3.test(email))
		{
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('不能以@开头');			
		}
		else if(pattern4.test(email)){
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('不能以@结尾');		
		}
		else if(pattern5.test(email)){
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('不能以.结尾');	
		}
		else if(email.match(cout1)==null)
		{
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('该邮箱没有.');	
		}
		else if(email.match(cout2)==null)
		{
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('该邮箱没有@');
		}
		else if(email.match(cout1).length>=2)
		{
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('出现了两个或两个以上的.');	
		}
		else if(email.match(cout2).length>=2)
		{
			$("#warn1").css(
				"display","block"
			)
			$("#warn1").html('出现了两个或两个以上的@');	
		}
		else if(pattern1.test(email))
		{
			$("#warn1").css(
				"display","none"
			)
		}
	})
})
$(document).ready(function(){
	$("#warn2").hide();
	var mar1=/[a-z]/;
	var mar0=/[A-Z]/;
	var mar2=/[0-9]/;
	var mar3=/[[~'!@#￥$%^&*()-+_=:]/;
	$("#Submit").click(function(){
		var Pass=$("#inputPassword").val();
		if(Pass==''){
		$("#warn2").css(
			"display","block"
			)
		$("#warn2").html('该密码不能为空');	
		}
		else{
			$("#warn2").css(
			"display","none"
			)
		}
	})
	$("#inputPassword").keydown(function(){
	var pass=$("#inputPassword").val();
		if(mar3.test(pass)){
			$("#warn2").css(
				"display","block"
			)
			$("#warn2").html('改密码含有非法字符');				
		}
		else if(pass.length<=6)
		{
			$("#warn2").css(
				"display","block"
			)
			$("#warn2").html('密码起码要6个字符');				
		}
		else{
			if(mar1.test(pass)){
				if(mar0.test(pass)){
					if(mar2.test(pass)){
						$("#warn2").css(
							"display","block"
						)
						$("#warn2").html('密码强度为强');	
					}
					else{
						$("#warn2").css(
							"display","block"
						)
						$("#warn2").html('密码强度为中');	
					}
				}
				else{
					$("#warn2").css(
					"display","block"
					)
					$("#warn2").html('密码强度为弱');				
				}
			}
		}
	})
})
