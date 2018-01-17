class CheckData{

	constructor()
	{	
		this.infoText = '';
		this.isMailOnOff = false;
		this.name = '';
		this.tel = ''
		this.time = '';

		this.clickSubmit();

		this.state = false;
	}

	checkName()
	{
		let value = $('.minput').val();
		
		if(value.trim() === ''){
			this.infoText = '对不起亲，姓名不能为空哟!';
			return false;
		}

		if(value.length > 16) {
			this.infoText = '对不起亲，姓名不能超过16位哟!';
			return false;
		}

		return value;
	}


	checkTel()
	{
		let value = $('.itel').val();
		
		if(value.trim() === ''){
			this.infoText = '对不起亲，手机号码不能为空哟!';
			return false;
		}
		
		if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(value.trim())) {
			this.infoText = '对不起亲，手机号码格式输入有误哟!';
			return false;
		}

		return value;
	}


	checkDate()
	{
		let value = $('.itime').val();

		if(value.trim() === ''){
			this.infoText = '对不起亲，预约时间不能为空哟!';
			return false;
		}

		return value; 
	}

	//点击 1.判断数据正确与否 && 2.发送邮件
	clickSubmit()
	{	
		let This = this;
		let name = '';
		let tel = '';
		let state = '';
		
		$('.submitBtn').on('click',function(e){
			
			This.checkIsMailOnOff();
			
			if(!!This.state){
				This.infoText = '亲，您已经预约过哟！如紧急,请电话预约！';
				This.ouputInfo();
				return;
			}

			if(This.isMailOnOff){
				console.log('该发送信息到邮箱了');
				This.ajaxSend();
			}

		});
	}

	ajaxSend()
	{	
		let This = this;
		This.ajax({
		    method: 'POST',
		    url: './server/home.php',
		    data: {
		        'name': This.name,
		        'tel': This.tel,
		        'time':This.time
		    },
		    success: function (response) {
		       var data = JSON.parse(response);
		 	
			 	console.log(data);
			 	
			 	if(!!data.state){
			 		This.state = true;
			 		This.infoText = '亲，您的预约申请已经提交成功！';
			 		This.ouputInfo();
			 	}
		    }
		});
				
		
	}	
	
    ajax(opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || true;
        opt.data = opt.data || null;
        opt.success = opt.success || function () {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }var params = [];
        for (var key in opt.data){
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        }
        else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
        } 
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                opt.success(xmlHttp.responseText);
            }
        };
    }

	checkIsMailOnOff()
	{
		if(this.checkName() && this.checkTel() && this.checkDate())
		{
			this.isMailOnOff = true;
			this.infoText = '正在预约，请稍等……';
			this.name = this.checkName();
			this.tel = this.checkTel();
			this.time = this.checkDate();
		}
		else
		{
			this.isMailOnOff = false;
		}
		
		this.ouputInfo();
	}

	ouputInfo()
	{	
		$('.introText').html(this.infoText);
		$('.introText').css('display','block');
	}
}