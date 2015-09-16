'use strict';

var app = angular.module('HelloPitchApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster',
    'angularMoment',
  ])

  .constant('FURL', 'https://hellotasks.firebaseio.com//')  

  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',    
        controller: 'BrowseController'    
      })
      .when('/login', {
        templateUrl: 'views/login.html',  
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',  
        controller: 'AuthController'
      })
      .when('/browse/:pitchId', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
