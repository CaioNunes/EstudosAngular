var app = angular.module('heranca',[]);

app.controller('PaiController', ['$scope',function($scope){
    $scope.turno = 'manhã';
    $scope.nome = 'Pai';
}]);

app.controller('FilhoController', ['$scope',function($scope){
    $scope.nome = 'Filho';
}]);

app.controller('NetoController', ['$scope',function($scope){
    $scope.turno = 'Farinha';
    $scope.nome = 'Neto';
}]);