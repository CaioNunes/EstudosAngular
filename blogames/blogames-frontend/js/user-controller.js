angular.module('blogames').controller('UserController', function($scope, $http){
   
    $scope.user = {
        
    };

    $scope.save = function(){
        $http.post('http://localhost:8086/user/save', $scope.user);
    };

});