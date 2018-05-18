angular.module('alurapic').controller('FotosController', function($scope, $http){
   
    $http.post('/user/save', ).success(function(fotos){
        $scope.usuario.login = fotos;
    }).error(function(erro) {
        console.log(erro);
    });

      // $http.get('v1/fotos').success(function(fotos){
    //     $scope.fotos = fotos;
    // }).error(function(erro) {
    //     console.log(erro);
    // });

    // var promise = $http.get('v1/fotos');
    // promise.then(function(retorno) {
    //     $scope.fotos = retorno.data;    
    // }).catch(function(erro){
    //     console.log(error);
    // });

});