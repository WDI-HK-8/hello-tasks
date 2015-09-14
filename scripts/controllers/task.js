'use strict';

app.controller('TaskController', function($scope, FURL, $firebase, $location, $routeParams) {

  var ref = new Firebase(FURL);
  var fbTasks = $firebase(ref.child('tasks')).$asArray();
  var taskId = $routeParams.taskId;

  // testing only
  fbTasks.$loaded().then(function(data){
    console.log("step 1:" + data.length);
  })
  console.log("step 2:" + fbTasks.length)

  if(taskId){
    $scope.selectedTask = getTask(taskId);
  }

  function getTask(taskId) {
    return $firebase(ref.child('tasks').child(taskId)).$asObject();
  }

  $scope.updateTask = function(task){
    $scope.selectedTask.$save(task);
    $location.path('/browse');
  }

  $scope.tasks = fbTasks;

  $scope.postTask = function(task){
    fbTasks.$add(task);
    $location.path('/browse');
  }
});