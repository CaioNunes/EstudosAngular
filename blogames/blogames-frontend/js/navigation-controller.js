angular.module('blogames').controller('NavigationController', function($scope, $http, $location){

    $scope.go = function( path ){
        $location.path(path)
    };

});