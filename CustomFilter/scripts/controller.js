/// <reference path="angular.min.js" />

var app = angular.module("myModule", [])
    .filter("gender", function () {
        return function (gender) {
            switch (gender) {
                case 1:
                    return "Male";
                case 2:
                    return "Female";
            }
        }
    })
.controller("myController", function ($scope) {

    var employees = [
        { name: "Prosigoj", gender: 1, salary: 534600 },
         { name: "Jelisaveta", gender: 2, salary: 44600 },
          { name: "Svevlad", gender: 1, salary: 5389600 },
           { name: "Silvester", gender: 1, salary: 534600 },
            { name: "Aljoša", gender: 1, salary: 5390600 },
             { name: "Maksim", gender: 1, salary: 534600 },
              { name: "Lav", gender: 1, salary: 534600 }
    ];

    $scope.employees = employees;
});