<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<script type="text/javascript">
var xmlhttp;
var data = {{db}};
var data_path = '/view/'+{{db}};

// Are we using a modern browser or ...
if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

function GetItems()
{
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    var jsonobj = eval ("(" + xmlhttp.responseText + ")");
    var jsonobj = JSON.parse(xmlhttp.responseText);
    var output = xmlhttp.responseText;
    document.getElementById("raw").innerHTML = output;

    output = "";

    for (i in jsonobj) {
      output += '<tr>';
      output += jsonobj[i];
      output += '</tr>';
    }

    document.getElementById("forin").innerHTML = output;

  } else {
    alert("data not available");
  }
}

// xmlhttp.onreadystatechange = GetArticles;
// the GetItems function will be triggered once the ajax
// request is terminated.
xmlhttp.onload = GetItems;

// send the request in an async way

xmlhttp.open("GET", data_path, true);
xmlhttp.send();
</script>
</head>

<body>
  <p>The for cycle produces :</p>
  <table id="forin"></table>
</body>
</html>
