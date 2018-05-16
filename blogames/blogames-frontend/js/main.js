var blogames = angular.module('blogames', []);

blogames.controller('UsuarioController', function($scope){
    $scope.usuario = {
        nome: 'Jhonata',
        idade: ''
    };

    function submeter(){
        console.log('bora');
    }
});
