'use strict';
/* Controllers */
angular.module('myApp.controllers', [ ]). 
  controller('AppCtrl', function ($scope, $http, Book, Category) {
	$scope.books=Book.list();	
	$scope.categories=Category.list();
	$scope.saveBook = function () {
        Book.save($scope.book);
        $scope.book = {};
    }

    $scope.delete = function (id) {
        Book.delete(id);
        if ($scope.book.id == id) $scope.book = {};
    }

    $scope.edit = function (id) {
        $scope.book = angular.copy(Book.get(id));
    }
$(document).ready(function () {

    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        })

    }(jQuery));

});	
  }).
  controller('CatCtrl', function ($scope) {
    // write Ctrl here
$scope.saveCategory = function () {
        Category.save($scope.category);
        $scope.category = {};
    }
  });
