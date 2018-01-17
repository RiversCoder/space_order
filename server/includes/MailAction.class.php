<?php
	/**
	*  MailAction
	*/
	class MailAction 
	{
		
		private $name = '';
		private $tel = '';
		private $time = '';
		private $state = false;
		private $ncontent; 

		function __construct()
		{	
			$this->name = isset($_POST['name']) ? $_POST['name'] : '';
			$this->tel = isset($_POST['tel']) ? $_POST['tel'] : '';
			$this->time = isset($_POST['time']) ? $_POST['time'] : '';

			//编译
			/*$tp = new Parser();
			$this->ncontent = $tp->display();*/
			
			$this->template();
			
			//发送邮件
			$this->sendMail();
		}


		private function template()
		{	
			$par_file = ROOT_PATH.'/static/mail.php';
			
			include $par_file;
			
			$cahce_file = ROOT_PATH.'/static/mail_file.html';

			if(IS_CACHE)
			{
				file_put_contents($cahce_file,ob_get_contents());
				ob_end_clean();
			}
		}

		private function sendMail()
		{
			$content = file_get_contents('./static/mail_file.html'); 
			$smtpserver = "smtp.163.com"; //SMTP服务器
			$smtpserverport = 25; //SMTP服务器端口
			$smtpusermail = "redgrape123456@163.com"; //SMTP服务器的用户邮箱
			$smtpemailto = '928091232@qq.com'; //发送给谁
			$smtpuser = "redgrape123456@163.com"; //SMTP服务器的用户帐号(或填写new2008oh@126.com，这项有些邮箱需要完整的)
			$smtppass = "Redgrape123456"; //SMTP服务器的用户密码（注意：并非163邮箱网管的登录密码，而是其他地方登录163邮箱密码）
			$mailtitle = '预约空间的消息'; //邮件主题
			$mailcontent = $content;//邮件内容（邮件内容可以加载一个HTML文件发送，可以做类似于招聘投递页面交互）
			$mailtype = "HTML"; //邮件格式（HTML/TXT）,TXT为文本邮件

			
			//在配置后参数后，就进行函数加载，和函数传参：（通过面向对象的方式进行调用）
			
			//************************ 配置信息 ****************************
			$smtp = new Smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass); //这里面的一个true是表示使用身份验证,否则不使用身份验证. 
			$smtp->debug = false; //是否显示发送的调试信息 
			$this->state = $smtp->sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype);
		}

		public function dataBack(){
			$arr = array('oname'=>$this->name,'otel'=>$this->tel,'otime'=>$this->time,'state'=>$this->state,'code'=>1);
			exit(json_encode($arr));
		}
	}
?>