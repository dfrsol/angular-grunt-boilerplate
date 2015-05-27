(function(){
    'use strict';

    var ExampleController = function($scope, ExampleFactory){
        $scope.hello = 'Hello World';
        $scope.doSomethingCool = ExampleFactory.myNewFunction($scope.hello);
    };

    ExampleController.$inject = ['$scope', 'ExampleFactory'];

    angular
        .module('newApp.example')
        .controller('ExampleController', ExampleController)
})();