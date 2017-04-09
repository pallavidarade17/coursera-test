(function(){
	'use strict';
 angular.module('ShoppingListPromiseApp',[])
	.controller('MenuCategoriesController',MenuCategoriesController)
	.service('MenuCategoriesService',MenuCategoriesService)
	
	MenuCategoriesController.$inject =['MenuCategoriesService'];
	function MenuCategoriesController(MenuCategoriesService){
		var menu =this;

		var promise =MenuCategoriesService.getMenuCatagories();

		promise.then(function (response){
			menu.categories =response.data;

		})
		.catch(function (error){
			console.log("Something went wrong!!");
		});
menu.logMenuItems =function(shortName){
	var promise =MenuCategoriesService.getMenuForCategory(shortName);

	promise.then(function (response){
		console.log(response.data);

	})
	.catch(function(error){
		console.log(error);
	})
};
}



	MenuCategoriesService.$inject =['$http']
	function MenuCategoriesService($http){
		var service =this;
		service.getMenuCatagories = function(){
			var response =$http({
				method:"GET",
		url:("http://davids-restaurant.herokaupp.com/categeries.json")

			});
			return response;
		}
	}

	service.getMenuForCategory =function(shortName){
		var response =$http({
			method:"GET",
			url:("http://davids-restaurant.herokaupp.com/categeries.json")
		params:{
			category:shortName
		}

		});
	}
	
})();