angular.module('blogames').config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "./login-form.html"
    })
    .when("/register", {
        templateUrl: "./register-form.html"
    })
    .when("/welcome", {
        templateUrl: "./welcome.html"
    });
});