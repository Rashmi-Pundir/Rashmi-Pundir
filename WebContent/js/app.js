// var app = angular.module("app", ["controllers"]);
// var controllers = angular.module("controllers", []).controller("shoppingCtrl", [
//   "$scope",
var app = angular.module("app", []);
app.controller("shoppingCtrl", function($scope, $http) {
    console.log("Hi There!!!Rashmi");

    $scope.productList = new Array;
    
    $http.get('js/product.json').then(function (jsonData){
      $scope.productList = jsonData;
      $scope.list = $scope.productList;
    },function(err){
      console.log("unable to fetch list"+JSON.stringify(err));
    })
    
    this.isVisibleContent =false;
    $scope.showContent = function(){
    	this.isVisibleContent =true;
    }
    
    this.isVisibleCount =false;
    $scope.showCount = function(){
    	this.isVisibleCount =true;
    }
    
    $scope.propertyName = 'price';
    $scope.reverse = true;
    

    $scope.sortBy = function(priceValue) {
      $scope.reverse = ($scope.priceValue === priceValue) ? !$scope.reverse : false;
      $scope.priceValue = priceValue;
    }
    
    $scope.totalItemsInCart = 0;
    $scope.addToCart = function(){
    	console.log("inside add to cart");
    	$scope.totalItemsInCart += 1;
    }
    
    $scope.totalItemsInWishlist = 0;
    $scope.addToWishlist = function(){
    	console.log("inside add to Wishlist");
    	$scope.totalItemsInWishlist += 1;
    }
    
    $scope.query = {}
    $scope.queryBy = '$'
    /*$scope.orderProp="name";*/
    /*For search operation*/
    
  }
);
