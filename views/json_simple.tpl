<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Cortext Lab Toolbox">
    <meta name="author" content="Constance de Quatrebarbes">
    <title>Antonio DEMO</title>
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/static/dataTables.bootstrap.css">
		<script type="text/javascript" language="javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" language="javascript" src="//cdn.datatables.net/1.10.3/js/jquery.dataTables.min.js"></script>
		<script type="text/javascript" language="javascript" src="/static/dataTables.bootstrap.js"></script>
    <script type="text/javascript" language="javascript" src="/static/dataTables.bootstrap.min.js"></script>
		<script type="text/javascript" charset="utf-8">
			$(document).ready(function() {
				$('#example').DataTable();
			} );
		</script>
    </head>
    <body>
      <div class="container">
      <div class="content">
        <h1> Explore {{db.name}}</h1>
        <%
        data = [data for data in db.data.items()]
        head = data[0][1].keys()
        %>
      </div>
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
          <tr rid="#{{xrow}}">
            %for id, data in row.items():
            <td class=".{{id}} center">
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
