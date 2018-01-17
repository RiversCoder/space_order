<?php
	/**
	*  Parser
	*/
	class Parser
	{	
		
		private $content;
		private $newContent;

		function __construct()
		{
			$this->content = file_get_contents(ROOT_PATH.'/templates/mail.tpl');
		}

		//匹配变量 [$name] -> < ?php echo $this->name; ? >
		private function matchVar()
		{	
			$regExp = '/\[\$(\w+)\]/';
			$this->newContent = preg_replace ( $regExp, '<?php echo \$this->$1; ?>',$this->content);
		}


		public function display()
		{
			$this->matchVar();
			return $this->newContent;
		}

	}
?>