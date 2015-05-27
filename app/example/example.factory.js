(function(){
    'use strict';

    var ExampleFactory = function(){
        var ExampleFactory = {};

        ExampleFactory.myNewFunction = function(a){
            console.log(a);
        };

        return ExampleFactory;

        /***
         Or Using hoisted closures

         return {
            myNewFunction : myNewFunction
         };

         function myNewFunction(a) {
            console.log(a);
         };

         ***/
    };

    angular
        .module('newApp.example')
        .factory('ExampleFactory', ExampleFactory)
})();