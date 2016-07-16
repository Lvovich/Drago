<?php
?>
<!DOCTYPE html>
<html lang="ru-RU">
<head>
    <style>
        * {
            box-sizing: border-box;
        }
        .user-form {
            border: 1px solid #aaa;
            border-radius: 3px;
            width: 310px;
            position: fixed;
        }
        .user-form .uf-header {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: rgba(221,221,221,.9);
            border-bottom: 1px solid #aaa;
            width: 100%;
            font-size: 1.1em;
            padding: 4px 5px 4px 35px;
            margin-bottom: 5px;
            cursor: move;
            position: relative;
        }
    </style>
</head>
<body>
    <div class="user-form">
        <div class="uf-header" onselect="">Grabable header for draggable block. Grab it and moove mouse</div>
        <div class="uf-body">
            Some content of draggable block
        </div>
    </div>

<!--    <script src="release/drago.js"></script>-->
    <script src="release/drago.min.js"></script>
    <script>
        new Drago({
            draggable: '.user-form',
            grabable: '.uf-header',

            onGrab:      function() {},
            onDragBegin: function() {},
            onDragEnd:   function() {},
            onGrabEnd:   function() {}
        });
    </script>
</body>
</html>
