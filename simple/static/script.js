$(document).ready(function() {
    $('#example').dataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": "scripts/serve_data.py"
    } );
} );
