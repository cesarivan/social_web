<?php
class  Zend_View_Helper_MyUrl extends Zend_View_Helper_Abstract{
	public function myUrl($include_index = TRUE){
		$uri= $include_index 
					? $_SERVER["SCRIPT_NAME"] 
					: substr($_SERVER["SCRIPT_NAME"],0,strripos($_SERVER["SCRIPT_NAME"],"/"));
		$protocol = ( isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? 'https' : 'http';
		return "{$protocol}://{$_SERVER["HTTP_HOST"]}$uri";
	}
}