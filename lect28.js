(function(){
	'use strict';
 angular.module('ShoppingListDirectiveApp',[])
 
	.controller('ShoppingListController1',ShoppingListController1)
	.controller('ShoppingListController2',ShoppingListController2)
	.factory('ShoppingListFactory',ShoppingListFactory)
	/*.directive('listItemDescription',ListItemDescription)
	.directive('listItem',ListItem);*/
	.directive('shoppingList',ShoppingList);

 /*function Demo($scope){
 $scope.name="Pallavi";
 }
*/
function ShoppingList(){
		//directive defination object -ddo
		var ddo ={
			templateUrl:'listItem28.html',
			scope:{
				// attribute in element is only list <shopping-list list="list1"></shopping-list>
				//list:'='
				// attribute in element is my-list
				list:'=myList',
				title:'@title'
			}
		};
		return ddo;
	}

	
	
ShoppingListController1.$inject=['ShoppingListFactory'];

function ShoppingListController1(ShoppingListFactory){
	var list =this;
	 var shoppingList =ShoppingListFactory();
	 list.items =shoppingList.getItems();

	list.itemName="";
	list.itemQuantity="";
	var originalTitle ="Shopping List #1";
	list.title= originalTitle +"("+list.items.length + " items )";
	list.addItem=function(){
		try{
			shoppingList.addItem(list.itemName,list.itemQuantity);
			list.title= originalTitle +"("+list.items.length + " items )";

		}
		catch(error){
			list.errorMessage=error.message;
		}
	}

	list.removeItem=function(itemIndex){
			shoppingList.removeItem(itemIndex);
			list.title= originalTitle +"("+list.items.length + " items )";
		};
}

ShoppingListController2.$inject=['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory){
	var list = this;
	var shoppingList = ShoppingListFactory(3);
	list.items=shoppingList.getItems();

	list.itemName='';
	list.itemQuantity='';

	
	list.addItem=function(){
		try{
			shoppingList.addItem(list.itemName,list.itemQuantity);

		}
		catch(error){
			list.errorMessage=error.message;
		}
	}
	list.removeItem=function(itemIndex){
		shoppingList.removeItem(itemIndex);
	};

}

function ShoppingListService(maxItems){
	var service =this;

	var items =[];

	service.addItem = function(itemName, itemQuantity){
		console.log(itemQuantity+" "+itemName);
	   	if((maxItems==undefined) || (maxItems!== undefined) && (items.length <maxItems)){
	   		var item={
	   			name:itemName,
	   			quantity:itemQuantity
	   		};

	   		items.push(item);
	   		console.log(items);
	   	}
	   	else {
	   		throw new Error("Max items ("+ maxItems +") reached");
	   	}
	   };


	   service.removeItem = function(itemIndex){
 		items.splice(itemIndex,1);

 	};
		service.getItems = function	(){
			return items;
		};
}
function ShoppingListFactory(){
	var factory =function(maxitems){
		return new ShoppingListService(maxitems);
	};
	return factory;
}
	
})();