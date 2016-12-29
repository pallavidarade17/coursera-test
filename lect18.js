
var numberArray=[1,2,3,4,5,6,7,8,9,10];
console.log("Number Array:", numberArray);

var filterNumberArray = numberArray.filter(function(value){
	return value>5;
});

console.log(" Filtered Num Array:", filterNumberArray);

var shoppingList =["Milk","Donuts","Cake","Icecream","plumCake","Chocolate","Cookies","Pepto Bismol", 
"Pepto Bismol(chocolate flavour)","Pepto Bismol(Cookie flavour)"];

var searchValue = "Bismol";

function containsFilter(value){
	return value.indexOf(searchValue)!== -1;
}

var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched Shopping List: ",searchedShoppingList);


(function(){
	'use strict';

	var shoppingList=["Milk","Donuts","Cake","Icecream","plumCake","Chocolate","Cookies","Pepto Bismol", 
"Pepto Bismol(chocolate flavour)","Pepto Bismol(Cookie flavour)"];


	angular.module("FilterApp",[])
.controller("FilterAppController",FilterAppController);

FilterAppController.$inject=['$scope'];

function FilterAppController($scope){
	$scope.shoppingList=shoppingList;
	

}

})();

