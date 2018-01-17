<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<style type="text/css">
		*{margin:0;padding:0}
		body,html{width:100%;height:100%}
		.visible{opacity:1}
		.hidden{opacity:0}
		.block{display:block}
		#app{width:904px;height:970px;margin:0 auto;position:relative;background-image:url(./images/bg.png);background-repeat:no-repeat;background-position:right top;background-color:#fcfcfc}
		#app span{display:block}
		#app .logo{width:319px;height:56px;position:absolute;left:70px;top:106px}
		#app #info{width:780px;height:325px;position:absolute;left:70px;top:348px;background-image:url(./images/tbg.png);background-repeat:no-repeat;text-align:center;color:#fff}
		#app #info .name{font-size:50px;line-height:100px;padding-top:50px}
		#app #info .time{font-size:30px;line-height:60px;padding-top:0}
		#app #info .tel{font-size:20px;line-height:40px}
		#app .bbg{width:100%;height:300px;position:absolute;bottom:0;left:0;background-image:url(./images/bg.png);background-repeat:no-repeat;background-position:left top}
		#app .companyInfo{font-size:14px;position:absolute;bottom:50px;width:100%;text-align:center;color:#e71436}
	</style>
</head>
<body>
	<div id="app">
		<span class="logo"><img src="./images/logo.png"></span>

		<section id="info">
			<h2 class="name">客户 : [$name] </h2>
			<h3 class="time">预约时间 : [$time]</h3>
			<h4 class="tel">手机 : [$tel]</h4>
		</section>

		<section class="bbg"></section>

		<span class="companyInfo">深圳市红提子科技发展有限公司</span>
	</div>
</body>
</html>