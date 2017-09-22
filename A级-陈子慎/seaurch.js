function jasonchan(json){
	json.s.forEach(function(el){
		var ul=document.getElementById("oul");
		var oli=document.createElement('li')
		oli.innerHTML="<a  href="+"http://www.baidu.com/s?wd="+el+">"+el+"</a>";
		ul.append(oli);
	})
}
$(document).ready(function(){
	$('#inp').keyup(function(){
		if($('#inp').val()!='')
		{
			$('#find').css(
				'display','block'
			)
			var os=document.createElement('script')
			os.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$('#inp').val()+"&cb=jasonchan";
			document.body.appendChild(os);
		}
		else
		{
			$('#find').css(
				'display','none'
			)
			$('#oul').children().remove();
		}
	})
	
})	