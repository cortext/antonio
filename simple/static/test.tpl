<html><head>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript">
    $(document).ready(function() { $('#get_answer').click(function(){
        $('#the_answer').empty()
        $.ajax({url: '/calculate/50‘, cache:false, type: 'GET',
                success: function(data) {
                $('#the_answer‘).append("The Answer IS:" + data.result);}
                });
        })
    });
</script>
</head>
<body>
<button id='get_answer'>Get the answer!</button> <br><br>
<div id='the_answer'></div>
</body>
</html>
