<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<script type="text/javascript">
var xmlhttp;

// Are we using a modern browser or ...
if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

// This will render the two output which substitute the
// elements id="raw" and id="forin"
function GetItems()
{
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    // var jsonobj = eval ("(" + xmlhttp.responseText + ")");
    var jsonobj = JSON.parse(xmlhttp.responseText);
    document.getElementById("example").innerHTML = output;


    //output = "";

    //for (i in jsonobj) {
    //  output += '<p>';
    //  output += i + " : " + jsonobj[i];
    //  output += '</p>';
    //}
    var dbname = {{dbname}};
    alert({{dbname}});
    document.getElementById("forin").innerHTML = output;
    $(document).ready(function() {
        $('#example').dataTable( {
            "ajax": output;
        } );
    } );
  } else {
    var output = "<div class="alert alert-danger" role="alert">No data found, check the name of url</div>";

    document.getElementById("forin").innerHTML = output;
  }
}

// xmlhttp.onreadystatechange = GetArticles;
// the GetItems function will be triggered once the ajax
// request is terminated.
xmlhttp.onload = GetItems;

// send the request in an async way
var data_url = "/test/getallitems.json"
xmlhttp.open("GET", data_url, true);
xmlhttp.send();

</script>
</head>

<body>
  <p>The raw result from the ajax json request is:</p>
  <div id="raw"></div>
  <br />
  <p>The for cycle produces :</p>
  <div id="forin"></div>
</body>
</html>
