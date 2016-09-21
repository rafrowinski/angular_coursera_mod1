(function(){
  'use strict';
  var maxProducts = 5;

  angular.module('myFirstApp', [])
  .controller('myFirstController', ControlMe);

  ControlMe.$inject = ['$scope'];
  function ControlMe($scope) {
    $scope.productList = "";
    $scope.isMedalEarned = false;
    $scope.isListChecked = false;
    $scope.isIncorrectInput = false;
    $scope.inputClass = ""
    $scope.checkList = function() {
      $scope.isIncorrectInput = $scope.productList === '';
      $scope.isListChecked = true;

      if(!$scope.isIncorrectInput) {
        var productList = getProductList($scope.productList);
        $scope.productList = productList.toString();
        $scope.isMedalEarned = isListOk(productList);
      }

      $scope.inputClass = getInputClass($scope.isIncorrectInput)
    };
    $scope.cropList = function() {
      var productList = getProductList($scope.productList);
      $scope.productList = productList.toString();
    };
  }

  function isListOk(list) {
    return list.length <= maxProducts;
  }

  function getProductList( listString ) {
    var list = listString.split(',');
    return clearList(list);
  }

  function clearList(list) {
    var clearedList = [];
    list.forEach(function(item) {
      if(item && item.trim() !== '') {
        clearedList.push(item);
      }
    });
    return clearedList;
  }

  function getInputClass(isInputCorrect) {
    return isInputCorrect ? "inputCorrect" : "inputIncorrect"
  }
})();
