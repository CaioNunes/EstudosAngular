var blogames = angular.module('blogames', []);

blogames.controller('UsuarioController', function($scope){
    $scope.usuario = {
        nome: 'Jhonata',
        idade: ''
    };

    $scope.submeter = function(){
        console.log('bora');
    }
});
