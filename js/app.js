(function(){
	var app = angular.module('store', ['storeDirectives']);

	app.factory('httpq', function($http, $q){
	return{
		get: function(){
			var deffered = $q.defer();
			$http.get.apply(null, arguments)
				.then(deffered.resolve)
				.catch(deffered.resolve);
				return deffered.promise;
		}
		}
	});

	app.controller('StoreController', function(httpq){
		var store = this;

		store.products  = [];
		httpq.get('api/info.json')
		.then(function(result) {
			store.products = result.data;
		})
		.catch(function() {
			alert("Error httpRequset");
		})

		store.dataPage = {};

		store.activePage = function(page, product) {
			product = product || {};
			product.pageName = page;
			store.dataPage = product;
		};

		store.tab = 1;

		store.setPanel = function(setTab) {
			store.tab = setTab;
		};

		store.isSelected = function(selected) {
			return selected === store.tab;
		};

	});

	// app.controller('StoreController', function() {
	// 	this.products = prods;

	// });


	// var prods = [
	// 	{
	// 		name: "Учет сейфов",
	// 		price: 4.99,
	// 		description: "Учитываем сейфы",
	// 		canPurshase: false,
	// 		isSold: true
	// 	},
	// 	{
	// 		name: "Учет учетский",
	// 		price: 54.49,
	// 		description: "Что-нибудь пишем",
	// 		canPurshase: true,
	// 		isSold: false
	// 	}
	// ];

	// });

})();