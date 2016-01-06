 <html>
 <head>
 <link rel="stylesheet" href="../dependencies/bootstrap/css/bootstrap-3.3.4.min.css">
 <link rel="stylesheet" href="../dependencies/font-awesome/css/font-awesome.min.css">
 <link rel="stylesheet" href="../dist/3.2.1/css/ultimate-datatable-3.2.1.css">
 
 <script src="../dependencies/jquery/jquery_1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
 <script src="../dependencies/bootstrap/js/bootstrap-3.3.4.min.js" type="text/javascript" charset="utf-8"></script>
 <script src="../dependencies/angular-js/angular-1.3.16.min.js" type="text/javascript" charset="utf-8"></script>
 <script src="../dependencies/momentjs/momentjs.js" type="text/javascript" charset="utf-8"></script>
 <script src="../dependencies/fileSaver/fileSaver.min.js" type="text/javascript" charset="utf-8"></script>
 <script src="../dist/3.2.2-SNAPSHOT/js/ultimate-datatable-3.2.2-SNAPSHOT.js" type="text/javascript" charset="utf-8"></script>
 
 <script type="text/javascript" charset="utf-8">
		angular.module('ngAppDemo', ['ultimateDataTableServices']).controller('ngAppDemoController', ['$scope','datatable',function($scope, datatable) {
		
			var datatableConfig = {
				"name":"simple_datatable",
				"extraHeaders":{number:1},
				"columns":[
					{
						"header":"Name",
						"property":"name",
						"order":true,
						"type":"text",
						"showFilter":true,
						"groupMethod":"collect",
						"hide":true,
						"extraHeaders":{"0":"H1"}
					},
					{
						"header":"Registered",
						"property":"registered",
						"order":true,
						"group":true,
						"type":"date",
						"edit":true,
						"hide":true,
						"extraHeaders":{"0":"H1"}
					},
					{
						"header":"About",
						"property":"about",
						"order":true,
						"type":"text",
						"groupMethod":"collect",
						"hide":true,
						"extraHeaders":{"0":"H2"}
						
					},
					{
						"header":"Picture",
						"property":"picture",
						"order":true,
						"showFilter": false,
						"type":"text",
						"edit":true,
						"groupMethod":"collect",
						"render":"<a target='blank' ng-href='{{cellValue}}'>{{cellValue}}</a>",
						"hide":true,
						"extraHeaders":{"0":"H2"}
					}
					
				],
				"edit":{
					"active":true,
					"columnMode":true
				},
				"filter":{
					"active":true,
					"highlight":true,
					"columnMode":true
				},
				"pagination":{
					"mode":'local',
					numberRecordsPerPageList:[{
                        number: 10,
                        clazz: ''
                    }, {
                        number: 25,
                        clazz: ''
                    }, 
                    {
                        number: 50,
                        clazz: ''
                    },
                    {
                        number: 100,
                        clazz: ''
                    },
                    ]
				},
				"order":{
					"mode":'local'
				},
				"remove":{
					"active":true,
					"mode":'local'
				},
				"save":{
					"active":true,
					"mode":'local'
				},
				"add":{
					"active":false,
					"showButton":true
				},
				"group":{
					"active":true,
				},
				"compact":true,
				"exportCSV":{
					active:true,//Active or not
					showButton:true,//Show the export button in the toolbar
					delimiter:";"//Set the delimiter
				},
				"hide":{
					"active":true,
					"byDefault":["about","name"]
				},
				"select":{
					"active":true,
					"callback":function(line,data){
						console.log("callback select : "+data.name);
					}
				}
			};
			
			var datatableData = {{data}};
			
			$scope.datatable = datatable(datatableConfig);
			$scope.datatable.setData(datatableData);
		}]);
	</script>
 </head>
 <body ng-app="ngAppDemo">
	<div class="container-fluid">
		<div class="row">
			<h1 align=center>Simple datatable exemple</h1><br>
				<div ng-controller="ngAppDemoController">
					<div class="col-md-12 col-lg-12" ultimate-datatable="datatable">
					</div>
				</div>
			</div>
	</div>
</body>
 </html>
