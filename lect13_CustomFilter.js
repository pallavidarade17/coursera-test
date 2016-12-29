(function(){
	'use strict';

	angular.module('FilterEg', [])
	.controller("FilterController",FilterController)
	.filter('loves',LovesFilter)
	.filter('truth',TruthFilter);

	FilterController.inject =['$scope','lovesFilter'];

	function FilterController($scope,lovesFilter){
		/*$scope.name ="pallavi";
		$scope.cookieCost=.45;*/

	$scope.sayMessage = function(){
		var msg = "Pallavi likes to eat healthy food";
		return msg;
	};

	$scope.sayLovesMessage = function(){
		var msg = "Pallavi likes to eat healthy food";
		msg = lovesFilter(msg)
		return msg;
	};

	}

	function LovesFilter(){
		return function(input){
			input = input || "";
			input =input.replace("likes","loves");
			return input;

		};
	}

// do not write in controller directly binded in html - no need to inject in controller
// this takes extra arg  , filters can be chained
function TruthFilter(){
	return function(input,target,replace){
			input = input || "";
			input =input.replace(target,replace);
			return input;

		};
}
})();