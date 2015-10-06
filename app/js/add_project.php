<?php 
	$name = $_POSR['projectNmae'];
	$data = array();


	if ($name === '') {
		$data['status'] ='error';
		$data['text'] ='Заполните имя!';
	}else{
	$data['status'] ='OK';
	$data['text'] = 'good'
}
	header ("Content-Type: application/json");
	exit;
 ?>