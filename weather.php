<?php
    header('Access-Control-Allow-Origin: *');
    @$city = $_REQUEST['city']? $_REQUEST['city'] : '北京';
    echo str_replace('http', 'https', file_get_contents('https://www.baidu.com/home/other/data/weatherInfo?city='.$city));