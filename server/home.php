<?php
	
	ob_start();

	//定义绝对路径
	define('ROOT_PATH',__DIR__);
	define('IS_CACHE',true);
	require_once ROOT_PATH.'/config/config.php';
	require_once ROOT_PATH.'/includes/Smtp.class.php';
	require_once ROOT_PATH.'/includes/Parser.class.php';
	require_once ROOT_PATH.'/includes/MailAction.class.php';

	$mail = new MailAction();
	$mail->dataBack();
?>