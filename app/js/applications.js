(function(){
	var app = angular.module('storeDirectives', []);

	// app.controller('StoreController', ['$http', function($http) {
	//  var store = this;
	//  store.products = [];
	//  $http.get('info.json')
	//      .then(function(result) {
	//          //alert(result.data);
	//          store.products = result.data;
	//      });
	// }]);


	// создание своей директивы
	// срока таблицы
	app.directive('prodItem', function() {
		return {
			restrict: 'E',
			templateUrl: 'template/product-item/index.html'
		};
	});

	app.directive('contentCategories', function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'template/catalog/index.html'
		};
	});

	app.directive('prodPage', function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'template/product-page/index.html'
		};
	});

	// app.controller('panelController', function() {
	//  this.tab = 1;

	//  this.setPanel = function(setTab) {
	//      this.tab = setTab;
	//  };

	//  this.isSelected = function(selected) {
	//      return selected === this.tab;
	//  };

	// });

})();