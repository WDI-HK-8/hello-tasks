'use strict';

app.controller('PitchController', function($scope, $location, toaster, Pitch, Auth) {

  $scope.createPitch = function(){
    $scope.pitch.status = 'open';
    $scope.pitch.name = Auth.user.profile.name;
    $scope.pitch.poster = Auth.user.uid;
  
    Pitch.createPitch($scope.pitch).then(function(ref){
      toaster.pop('success','Pitch created successfully');
      $scope.pitch = {title: '',}
      $location.path('/browse/' + ref.key());
    });
  };

  $scope.editPitch = function(pitch) {
    Pitch.editPitch(pitch, function(error) {
      if (!error) {
        toaster.pop('success', "Pitch is updated.");       
      } else {
        toaster.pop('error', "Oops, something went wrong.");
      }
    });
  };  
});