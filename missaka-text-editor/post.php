<?php

    $fp = fopen("log.html", 'a');
    fwrite($fp, "<div></div>");
    fclose($fp);

    if (array_key_exists("content", $_POST)) {
        $file = "log.html";
        file_put_contents($file,str_replace(file_get_contents($file),$_POST["content"],file_get_contents($file)));
        echo file_get_contents($file);
    }

?>