angular.module('blogames').config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "./login-form.html"
    })
    .when("/welcome", {
        templateUrl: "./welcome.html"
    });
});