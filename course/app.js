(function () {
'use strict';
    
    angular.module('myFirstApp', [])
    .controller('MyFirstController',  MyFirstController);
    
    MyFirstController.$inject = ['$scope'];
    function MyFirstController ($scope) {
        $scope.name = 'Mariano';

        $scope.message = function () {
            return 'Me gusta comer pizza';
        };
    }
    

})();