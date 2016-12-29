(function(){
	'use strict';

	var shoppingList1 =["Milk","Donuts","Cake","Icecream","plumCake","Chocolate","Cookies"];

	var shoppingList2 =[
	{
		name:"Milk",
		quantity:2

	},
	{
		name:"Milk",
		quantity:2

	},
	{
		name:"Milk",
		quantity:2

	},
	{
		name:"Milk",
		quantity:2

	},
	{
		name:"Milk",
		quantity:2

	}
];
angular.module('ShoppingListApp', [])
.controller('ShoppingListController',ShoppingListController);
ShoppingListController.$inject=['$scope'];


	function ShoppingListController($scope){
	$scope.name="Pallavi";
	$scope.shoppingList1=shoppingList1;
	$scope.shoppingList2=shoppingList2;

	$scope.addToList=function(){
		var newItem ={
			name:$scope.newItem,
		quantity :$scope.quantity
	};
	$scope.shoppingList2.push(newItem);

	};

}

})();