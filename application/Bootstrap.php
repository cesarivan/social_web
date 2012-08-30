<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{

	function _initRouters(){
		
		$front = Zend_Controller_Front::getInstance();
		$actualRouter = $front->getRouter();
		$contacto = new Zend_Controller_Router_Route(
				'contacto/',
				array(
						"controller" =>"index",
						"action" => "contacto"
				)
		);
		$actualRouter->addRoute("contacto",$contacto);
		
		
		
	}

}

