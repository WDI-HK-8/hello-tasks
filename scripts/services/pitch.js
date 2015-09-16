'use strict';

app.factory('Pitch', function(FURL, Auth, $firebaseAuth, $firebase, $firebaseArray) {
  
  var ref = new Firebase(FURL);
  var pitchs = $firebaseArray(ref.child('pitchs'));
  var user = Auth.user;

  var Pitch = {
    all: pitchs,

    getPitch: function(pitchId) {
      return $firebase(ref.child('pitchs').child(pitchId));
    },
    createPitch: function(pitch) {
      pitch.datetime = Firebase.ServerValue.TIMESTAMP;
      return pitchs.$add(pitch);
    },
    editPitch: function(pitchId) {
      var p = this.getPitch(pitch.$id)
      return p.$update({title: pitch.title, description: pitch.description, total: pitch.total});
    },
    cancelPitch: function(pitchId) {
      var p = this.getPitch(pitchId)
      return p.$update({status: "cancelled"});
    },

    isCreator: function(pitch){
      return (user && user.provider && user.uid === pitch.poster);
    },

    isOpen: function(pitch) {
      return pitch.status === "open";
    }
  };

  return Pitch;

});