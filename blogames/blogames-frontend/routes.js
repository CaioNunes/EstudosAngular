angular.module('blogames').config(function($routeProvider) {
    $routeProvider
    .when("/", {
        // template: "../index.html"
        templateUrl: "./login-form.html"
    })
    .when("/welcome", {
        templateUrl: "./welcome.html"
    });
});