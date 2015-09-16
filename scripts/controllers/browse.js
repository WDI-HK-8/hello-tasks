'use strict';

app.controller('BrowseController', function($scope, $routeParams, toaster, Pitch, Auth ) {

  $scope.searchPitch = '';   
  $scope.pitchs = Pitch.all;

  $scope.signedIn = Auth.signedIn;

  $scope.listMode = true;
});