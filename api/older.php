<?php 
	header('content-type:text/html;charset=utf-8');
	//获取今日时间
	$today = time();
	$today = strtotime('-1day',time());
	$today = date('Y-m-d',$today);
	// echo $today;
	// exit();
	$url = "https://moment.douban.com/api/stream/date/".$today."?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
	// echo '后台';
	echo file_get_contents($url);
 ?>
 