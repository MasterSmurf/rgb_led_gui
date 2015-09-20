<?php
/**
 * Created by PhpStorm.
 * User: Peter
 * Date: 19.09.2015
 * Time: 21:37
 */

$color = $_GET["color1"];
$command = escapeshellcmd('python color.py '.$color);
$output = shell_exec($command);

print "SUCCESS"."<br>";
print $color."<br>";
print $output."<br>";
