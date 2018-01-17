<?php
	
	$str =  $_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
	$arr = explode('/', $str);
	unset($arr[count($arr)-1]);
	$new = implode('/', $arr);

	
?>