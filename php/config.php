<?php
$con = mysqli_connect("localhost","root","","chat");
if(!$con){
    echo "Database not connected".mysqli_connect_error();
}