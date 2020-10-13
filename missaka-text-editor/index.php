<!DOCTYPE html>
<html>
    <head>

        <script src="/jquery.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="/missaka-text-editor/style.css">
        <title>Realtime Collaborative text Editor</title>
    </head>
    <body>
        <div contenteditable="true" id="text">
            <?php echo file_get_contents("log.html"); ?>
        </div>
        <div id="caret"></div>
        <script src="/missaka-text-editor/script.js" type="text/javascript"></script>
    </body>
</html>
