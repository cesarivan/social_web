<?php

class IndexController extends Zend_Controller_Action
{
	
	public function preDispatch()
	{
		$this->_helper->contextSwitch()->addActionContext("enviar-email","json")->initContext();
		$ajaxContext = $this->_helper->getHelper("AjaxContext");
		$ajaxContext->addActionContext("enviar-email","json")->initContext();
		
		
	}
    public function init()
    {
        /* Initialize action controller here */
    	
    }

    public function indexAction()
    {
        // action body
    }
    
    public function sobreNosotrosAction()
    {
    	
    	$sobreNosotros = new  Zend_Db_Table("sobre_nosotros");
    	$select = $sobreNosotros->select()->from($sobreNosotros);
    	$this->view->nosotros = $sobreNosotros->fetchAll($select);
    	
    }
    
    public function enviarEmailAction()
    {
    		$request = $this->_request;
	    	if($this->getRequest()->isPost() && $request->nombre && $request->email && $request->mensaje){
	    		
	    		$validaEmail = new Zend_Validate_EmailAddress();
	    		if($validaEmail->isValid($request->email)){
	    			$config = array('ssl' => 'tls','port' => 587,'auth' => 'login','username' => 'cesarivanchavezmartin', 'password' => 'ivanalfa12');
	    			 
	    			$smtpConnection = new Zend_Mail_Transport_Smtp('smtp.gmail.com', $config);
	    			$mail = new Zend_Mail();
	    			$mail->setBodyHtml("menasje de prueba");
	    			 
	    			$emails = array("cesar.chavez.witen@gmail.com"
	    					//,"direccion@witenconsulting.com","sistemas@witenconsulting.com","eduardo.lopez@witenconsulting.com","christian.lopez@witenconsulting.com"
	    			);
	    			foreach($emails as $email){
	    				$email && $mail->addTo($email);
	    			}
	    			if($mail->send($smtpConnection)){
	    				$this->view->mensaje = "Mensaje enviado correctamente";
	    				$this->view->alerta = "success";
	    				 
	    			}
	    		}else{
	    			
	    			$this->view->mensaje = "Favor de escribir un email valido";
	    			$this->view->alerta = "error";
	    			
	    		}
	    	}else{
	    		
	    		$this->view->mensaje = "Favor de llenar todos los campos";
	    		$this->view->alerta = "error";
	    		 
	    	}
    	
    	
    }
    public function contactoAction()
    {
    	$request = $this->_request;
    	$translate = new Zend_Translate("array",APPLICATION_PATH."/configs/lenguajes/es.php","es");
    	$translate->setLocale("es");
    	$this->view->translate = $translate;
    	
    	
    }


}

