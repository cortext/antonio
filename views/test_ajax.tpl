<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
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
    var json = JSON.parse(xmlhttp.responseText);
    var output = xmlhttp.responseText;
    document.getElementById("raw").innerHTML = output;
    output = "<table>"
    for (p in json) {
      for (var key in p) {
        output += '<td>';
        if (p.hasOwnProperty(key)) {

          for (var value in key) {
            output +='<tr>';
            output += value;
            output +='</tr>';
          }
        }
        output += '</td>';

    // output += '<p>';
    // output += i + " : " + jsonobj[i];
    // output += '</p>';
      }
    }
    output += '</table>';
    //for (i in jsonobj) {
      //output = "<table><td>";

      // $.each(jsonobj[i], function(k, v) {
      //   output += '<tr>';
      //   output += v;
      //   output += '</tr>';
      // }
      //output += i + " : " + jsonobj[i];
    //}
    //output += "</td></table>"
    //alert(output);
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

xmlhttp.open("GET", "/{{db_name}}/getallitems.json", true);
xmlhttp.send();
</script>
</head>
<body>
  <p>The raw result of {{db_name}} from the ajax json request is:</p>
  <div id="raw"></div>
  <br />
  <p>The for cycle produces :</p>
  <div id="forin"></div>
</body>
</html>
