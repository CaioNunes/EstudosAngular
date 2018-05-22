angular.module('blogames').controller('UserController', function($scope, $http, $location){
   
    $scope.user = {
        
    };

    $scope.save = function(){
        $http.post('http://localhost:8086/user/save', $scope.user).then(function(response){
            $location.path('/welcome')
        });

    };

});