<?php
	$f=fopen("temporation.txt","r+");
	fwrite($f, '0');
	fclose($f);
	$fi=fopen("imgsrc.txt", "r+");
	fwrite($fi, '1');
	fclose($fi);
?>