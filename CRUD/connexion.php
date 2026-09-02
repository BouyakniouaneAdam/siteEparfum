<?php
$local='localhost';
$password='';
$dbname='base_parfum';
$user='root';
    try{
        $pdo= new PDO("mysql:host=$local;dbname=$dbname;charest=utf8",$user,$password);
    }catch(Exception $e){
        echo $e->getMessage();
    }
?>