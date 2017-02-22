angular.module('miniRouting')
    .controller('productsCtrl', function($scope, $stateParams, productsService){
      $scope.productData = productsService[$stateParams.id + 'Data']
    })
