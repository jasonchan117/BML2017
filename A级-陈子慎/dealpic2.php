<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript" src="jquery1.js"></script>
		<link rel="stylesheet" href="bootstrap.css" />
		<script type="text/javascript" src="bootstrap.js"></script>
		<link rel="stylesheet" type="text/css" href="anics.css"/>
		<script type="text/javascript" src="theLoop.js"></script>

		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div class='container'>
			<nav class="nav navbar-default nav-justified navbar-fixed-top navbar-inverse">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">JC</a>
				</div>
				<ul class="nav navbar-nav navbar-left">
					<li>
						<a href="animation.html">主页</a>
					</li> 
					<li>
						<a href="login.html">
							登录
						</a>
					</li>
				</ul>
			</nav>
			<form method="post" action="dealpic2.php">
			<div class='head-dex'>
				<input name='submit-pre' type='submit' value="上一页" class='pre-con btn btn-default' id='pre-page'>
				<input name='submit-ne' type='submit' value='下一页' class='next-con btn btn-default' id='next-page'>
			</div>
				<?php
					$myfile = fopen("temporation.txt", "r+");
					$flag=fgets($myfile);
					fclose($myfile);
					$flag=(int)$flag;
					if($flag==0)
					{
						echo '<div class="main-img"><img name="manga-img" src="myimg/stein1.png"/></div>';
						$myfile = fopen("temporation.txt","r+");
						fwrite($myfile, '1');
						fclose($myfile);
					}
					else if(@$_POST['submit-ne']=='下一页')
					{
						$Myfile=fopen("imgsrc.txt","r+");
						$string=fgets($Myfile);
						$string=(int)$string;
						$string++;
						if($string<=9){
						$string=(string)$string;
						echo '<div class="main-img"><img name="manga-img" src="myimg/stein'.$string.'.png"/></div>';
						fclose($Myfile);
						$Myfile=fopen("imgsrc.txt","r+");
						fwrite($Myfile,$string);
						fclose($Myfile);	
						}
						else echo"最后一页了喔";
	
					}
					else if(@$_POST['submit-pre']=='上一页')
					{
						$Myfil=fopen("imgsrc.txt","r+");
						$string=fgets($Myfil);
						$string=(int)$string;
						$string--;
						if($string>=1){
						$string=(string)$string;
						echo '<div class="main-img"><img name="manga-img" src="myimg/stein'.$string.'.png"/></div>';
						fclose($Myfil);
						$Myfil=fopen("imgsrc.txt","r+");
						fwrite($Myfil,$string);
						fclose($Myfil);
						}
						else echo "最后一页了喔";
					}
				?>
			</form>
		</div>
	</body>
</html>
