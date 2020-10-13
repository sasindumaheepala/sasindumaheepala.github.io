<!DOCTYPE html>
<html>
    <head>

        <script src="/jquery.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="/style.css">
        <title>Realtime Collaborative text Editor</title>
    </head>
    <body>
        <div contenteditable="true" id="text">
            <?php echo file_get_contents("log.html"); ?>
        </div>
        <div id="caret"></div>
        <script src="/script.js" type="text/javascript"></script>
    </body>
</html>