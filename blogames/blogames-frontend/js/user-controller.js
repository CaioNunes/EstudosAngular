angular.module('blogames').controller('UserController', function($scope, $http, $location){
   
    $scope.user = {
        
    };

    $scope.register = function(){
        $http.post('http://localhost:8086/user/register', $scope.user).then(function(response){
            $location.path('/register')
        });

    };

    $scope.login = function(){
        $http.post('http://localhost:8086/user/save', $scope.user).then(function(response){
            $location.path('/welcome')
        });
    };

});