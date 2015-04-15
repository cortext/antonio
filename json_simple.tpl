<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Cortext Lab Toolbox">
    <meta name="author" content="Constance de Quatrebarbes">
    <title>Antonio DEMO</title>
    <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/plug-ins/f2c75b7247b/integration/bootstrap/3/dataTables.bootstrap.css">
    <link rel="stylesheet" type="text/css" href="simple.css">
    <link href="//cdn.datatables.net/plug-ins/f2c75b7247b/integration/bootstrap/3/dataTables.bootstrap.css" rel="datatable">
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!--<script src="/static/assets/js/ie-emulation-modes-warning.js"></script>-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- datatables -->
    <script src="//cdn.datatables.net/plug-ins/f2c75b7247b/integration/bootstrap/3/dataTables.bootstrap.js"></script>
    <script type="text/javascript" language="javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" language="javascript" src="//cdn.datatables.net/plug-ins/f2c75b7247b/integration/bootstrap/3/dataTables.bootstrap.js"></script>
    <script type="text/javascript" language="javascript" src="//cdn.datatables.net/1.10.6/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" charset="utf-8">
    $(document).ready(function() {
    $('#example').dataTable();
      } );
    </script>
    </head>
    <body>
    <%
    data = [data for data in db.data.items()]
    head = data[0][1].keys()
    %>

    <table id="example" class="display" width="90%" cellspacing="0">

        <thead>
          %for h in head:
            <th>
              {{h}}
            </th>
          %end
        </thead>
        <tfoot>
          <tr>
            %for h in head:
              <th>
                {{h}}
              </th>
            %end
        </tr>
        </tfoot>
        <tbody>
          %for xrow, row in data:
          <tr id="#{{xrow}}">
            %for id, data in row.items():
            <td class=".{{id}}">
              {{data}}
            </td>
            %end
          </tr>
          %end
        </tbody>

    </table>
  </div>
</body>
</html>
