<?php
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
if ($_SERVER['REMOTE_ADDR']) {//判断SERVER里面有没有ip，因为用户访问的时候会自动给你网这里面存入一个ip
    $ip = $_SERVER['REMOTE_ADDR'];
} elseif (getenv("REMOTE_ADDR")) {//如果没有去系统变量里面取一次 getenv()取系统变量的方法名字
    $ip = getenv("REMOTE_ADDR");
} elseif (getenv("HTTP_CLIENT_IP")) {//如果还没有在去系统变量里取下客户端的ip
    $ip = getenv("HTTP_CLIENT_IP");
} else {
    $ip = "192.168.0.1";
}
echo file_get_contents("http://ip.taobao.com/service/getIpInfo.php?ip=".$ip);
?>