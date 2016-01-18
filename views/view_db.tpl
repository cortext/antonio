<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>ANTONIO</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <link rel="stylesheet" href="//rawgit.com/vitalets/x-editable/master/dist/bootstrap3-editable/css/bootstrap-editable.css">
        <link rel="stylesheet" type="text/css" href="/static/bootstrap-table.min.css"/>
		<link rel="stylesheet" type="text/css" href="/static/bootstrap-table-editable.js"></script>
        <script src="//rawgit.com/vitalets/x-editable/master/dist/bootstrap3-editable/js/bootstrap-editable.js"></script>
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
		
        
        <link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
        <script src="/static/bootstrap.min.js"></script>

        <script src="/static/bootstrap-table.min.js"></script>
	</head>
	<body>
		<div class="container">
        <h1>{{db_name}}</h1>
        <p></p>
        
        <table id="table"
               data-toggle="table"
               data-height="460"
               data-pagination="true"
               data-search="true"
               data-sort-order="id"
               data-show-export="true"
               data-url= "/load/{{db_name}}"
               data-side-pagination="client"
               data-pagination="true"
               data-page-list="[5, 10, 20, 50, 100, 200]"
               >
            <thead>
            <tr >
                <th data-field="state" data-checkbox="true"></th>
                {% for h in columns %}
                <th data-field="{{h}}" data-editable="true">{{h}}</th>
                
                {% endfor %}
            </tr>
            </thead>

            
            
        </table>
        
    </div>
    <script>
    var $table = $('#table');
    // custom your ajax request here
    var params = {
        type: 'owner',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
        page: 1
        rows: {{rows}}
        };
    function ajaxRequest(params) {
        // data you need
        console.log(params.data);
        // just use setTimeout
        setTimeout(function () {
            params.success({
                total: 100,
                rows: params.row
            });
            // hide loading
            params.complete();
        }, 1000);
    }
        
        
    //~ var $table = $('#table');
        //~ var $table = $('#table');
        //~ $.get("/load/{{db_name}}", function(data, status){
            //~ alert(data);
            //~ $table.bootstrapTable({"data":data});
            //~ 
        //~ });
    
    </script>
</body>
</html>
