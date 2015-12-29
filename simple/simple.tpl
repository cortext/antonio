<!DOCTYPE html>
<html>
<head>

    <title>Antonio: edit {{db_name}}</title>
    <meta charset="utf-8">
    <link href="https://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css" type="text/css" rel="stylesheet">
    <link href="https://cdn.datatables.net/buttons/1.1.0/css/buttons.dataTables.min.css" type="text/css" rel="stylesheet">
    <link href="https://cdn.datatables.net/select/1.1.0/css/select.dataTables.min.css" type="text/css" rel="stylesheet">
    <script src="//code.jquery.com/jquery-1.11.3.min.js" language="javascript" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/1.10.10/js/jquery.dataTables.min.js" language="javascript" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/1.1.0/js/dataTables.buttons.min.js" language="javascript" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/select/1.1.0/js/dataTables.select.min.js" language="javascript" type="text/javascript"> </script>
    <script src="/static/js/dataTables.editor.min.js" language="javascript" type="text/javascript" ></script>
</head>

<body>
<div class="container">
    <h1>Antonio: {{db_name}}</h1>
    <table id="example" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th></th>
                <th>First name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Office</th>
                <th width="18%">Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
    </table>
    
</body>
<script>
    var editor; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "/load/{{json_f}}",
        table: "#example",
        fields: $ajax(
    } );
 
    // Activate an inline edit on click of a table cell
    $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this );
    } );
 
    $('#example').DataTable( {
        dom: "Bfrtip",
        ajax: "/load/{{json_f}}",
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { data: "first_name" },
            { data: "last_name" },
            { data: "position" },
            { data: "office" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );
} );

    </script>
</html>
