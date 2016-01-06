 <html>
 <head>
 <link rel="stylesheet" href="/static/bootstrap-3.3.4.min.css">
 <link rel="stylesheet" href="/static/font-awesome.min.css">
 <link rel="stylesheet" href="/static/ultimate-datatable-3.2.1.css">
 
 <script src="/static/jquery_1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
 <script src="/static/bootstrap-3.3.4.min.js" type="text/javascript" charset="utf-8"></script>
 <script src="/static/angular-1.3.16.min.js" type="text/javascript" charset="utf-8"></script>
 <script src="/static/momentjs.js" type="text/javascript" charset="utf-8"></script>
 <script src="/static/fileSaver.min.js" type="text/javascript" charset="utf-8"></script>
 <script src="/static/ultimate-datatable-3.2.2-SNAPSHOT.js" type="text/javascript" charset="utf-8"></script>
 
 <script type="text/javascript" charset="utf-8">
		angular.module('ngAppDemo', ['ultimateDataTableServices']).controller('ngAppDemoController', ['$scope','datatable',function($scope, datatable) {
		
			var datatableConfig = $http.post("/config/{{db_name}}", {"foo":"bar"})
.success(function(data, status, headers, config) {
    $scope.data = data;
}).error(function(data, status, headers, config) {
    $scope.status = status;
});
			
			var datatableData = $http.post("/load/{{db_name}}", {"foo":"bar"})
.success(function(data, status, headers, config) {
    $scope.data = data;
}).error(function(data, status, headers, config) {
    $scope.status = status;
});
			
			$scope.datatable = datatable(datatableConfig);
			$scope.datatable.setData(datatableData);
		}]);
	</script>
 </head>
 <body ng-app="ngAppDemo">
	<div class="container-fluid">
		<div class="row">
			<h1 align=center>{{db_name}}</h1><br>
				<div ng-controller="ngAppDemoController">
					<div class="col-md-12 col-lg-12" ultimate-datatable="datatable">
					</div>
				</div>
			</div>
	</div>
</body>
 </html>
