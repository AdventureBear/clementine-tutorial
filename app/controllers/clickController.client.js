'use strict';

(function () {

angular
  .module('clementineApp', [])
  .controller('clickController', ['$scope', function ($scope) {
    $scope.clicks = 1000;
  }]);

})();
