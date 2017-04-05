(function(){
	var app = angular.module('store', ['storeDirectives', 'ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/catalog',
		{
			templateUrl:'template/catalog/index.html',
			controller:'StoreController'
		});
		$routeProvider.when('/product/:id',
		{
			templateUrl:'template/product-page/index.html',
			controller: 'LinkController'
		});
		$routeProvider.when('/',
		{
			templateUrl:'template/catalog/index.html',
			controller:'StoreController'
		});
	});

	app.factory('httpq', function($http, $q){
	return{
		get: function(){
			var deffered = $q.defer();
			$http.get.apply(null, arguments)
				.then(deffered.resolve)
				.catch(deffered.resolve);
				return deffered.promise;
		}
		};
	});

	app.controller("LinkController", function($http, $routeParams, $scope, httpq){

		httpq.get('api/products.json')
		.then(function(data){
			$scope.pageData = data.data[$routeParams.id];
		})
		.catch(function(){
			alert("Error httpRequset");
		});

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