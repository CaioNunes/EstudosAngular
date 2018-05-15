var app = angular.module('Projeto1',[]);
app.controller('FirstController', function($scope){
    $scope.mensagem = "Olá , esse é meu primeiro projeto em Angular !"

});

app.controller('MinhaController', ['$scope',function($scope){
    $scope.mensagem = "Meu Segundo Projeto"

    $scope.verificaValor = function(valor){
        if(valor > 0){
            $scope.mensagem = 'O número digitado é positivo';
        }else if(valor < 0){
            $scope.mensagem = 'O número digitado é negativo';
        }else{
            $scope.mensagem = 'Você digitou zero!';
        }
    };

}]);