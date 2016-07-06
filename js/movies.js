'use strict';

//note that _MOVIES has been loaded as a global

/* Your code goes here */

var myApp = angular.module('MoviesApp', []);

// this has to be done before controller
var initCallBack = function($scope) {
    
    // make a model that is my name
    $scope.myName = 'Sunho';

    // make a model that is a message
    $scope.message = "Hello world!";

    $scope.showDemo = true;

    // movie model
    $scope.movies = [
     {title:'Gone with the Wind', year:1939},
     {title:'Casablanca', year:1942},
     {title:'Star Wars', year:1979}
    ];

    //console.log($scope.movies[0].year); // =>1939

    $scope.sayHello = function() {
        console.log("Hello World!");
    };

    $scope.reset = function() {
        $scope.message = '';
    }
};

//                             service we use/ constructor(callback function)
myApp.controller('MoviesCtrl', ['$scope', initCallBack]);


/* shortened version
// better!

myApp.controller('MoviesCtrl', ['$scope', function($scope) {
    //controller initialized
}]);

*/