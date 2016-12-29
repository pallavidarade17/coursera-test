(function(){
	'use strict';



angular.module('NameCalculator', [])

.controller('NameCalculateController',function($scope){
		$scope.name="";
		$scope.totalvalue=0;

		$scope.displayNumeric=function(){
			var totalnameValue=calculateNumericForString($scope.name); // get the total value
			$scope.totalvalue=totalnameValue;
		};
		function calculateNumericForString(string){
			var totalStringValue=0;
			for(var i=0;i<string.length;i++){
				totalStringValue += string.charCodeAt(i);
			}
			return totalStringValue;
		}

	});
})();