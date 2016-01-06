<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Cortext Lab Toolbox">
    <meta name="author" content="Constance de Quatrebarbes">
    <title>Antonio DEMO</title>
    <script type="text/javascript" language="javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript">
                                jQuery(document).ready(function() {
                                jQuery(".button").click(function() {
                                        var input_string = $$("input#textfield").val();
                                        jQuery.ajax({
                                                type: "POST",
                                                data: {textfield : input_string},
                                                success: function(data) {
                                                jQuery('#foo').html(data).hide().fadeIn(1500);
                                                },
                                                });
                                        return false;
                                        });
                                });

                        </script>

  </head>
  <body>
    <div class="container">
      <div class="row">Think of a Question and I'll give you the answer</div>
      <div class="row">
      <button id="get_answer">Get the answer!</button>
      <div id="the_answer"></div>
      </div>
  </body>
<footer>
</footer>
</html>
