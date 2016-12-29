(function(){
	'use strict';



angular.module('LunchCheck', [])

.controller('LunchCheckController',function($scope){
	$scope.lunch="";

	$scope.check= function(lunch){
		var string =lunch.split(',');
		if(lunch==""){
			$scope.message="Please enter data first";
		}
	else if(string.length!=0 && string.length<=3 ){
		$scope.message ="Enjoy!";
	}
	else if(string.length>3){
		$scope.message="Too much!!";
	}

	
	}

});

})();