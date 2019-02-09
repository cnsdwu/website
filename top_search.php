<?php
	/**
	 * cnsdwu
	 * 2018-09-30
	 */
	header("Content-type: text/html; charset=utf-8"); 
	 $ch = curl_init();
	 curl_setopt($ch,CURLOPT_URL, 'http://top.baidu.com/buzz?b=341&fr=topbuzz');
	 curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
	 curl_setopt($ch,CURLOPT_HEADER,0);
	 $output = curl_exec($ch);
	 curl_close($ch);
	 if(! mb_check_encoding($output, 'utf-8')) {
	  $output = mb_convert_encoding($output,'UTF-8','gbk');
	}
	 // echo $output;
	preg_match_all('/<a\sclass=\"list-title\".*?>(.*?)<\/a>/', $output, $arr_kw, PREG_PATTERN_ORDER);
	// var_dump($arr_kw[1]);
	// if($_GET['callback']){
	// 	$callback = $_GET['cb'];
	// 	die($callback.'('.json_encode($data).')');
	// }
	file_put_contents('top_search.json', json_encode($arr_kw[1], JSON_UNESCAPED_UNICODE));
	