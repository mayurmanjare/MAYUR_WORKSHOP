angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('courcecntrl', function($scope) {
  $scope.cources = [
    { title: 'JAVA', id: 1 },
    { title: 'ANDROID', id: 2 },
    { title: 'SALE FORCE', id: 3 },
    { title: 'SCTS-JAVA', id: 4 },
    { title: 'SEED COMMANDO', id: 5 },
    { title: 'PMP', id: 6 },
    { title: 'POWER PACK JAVA', id: 7 },
     { title: 'POWER PACK JAVA', id: 8 },
      { title: 'POWER PACK JAVA', id: 9 },
      { title: 'POWER PACK JAVA', id: 10 },
      { title: 'POWER PACK JAVA', id: 11 },
      { title: 'POWER PACK JAVA', id: 12},
      { title: 'POWER PACK JAVA', id: 13},
      { title: 'POWER PACK JAVA', id: 14},
      { title: 'POWER PACK JAVA', id: 15},
      { title: 'POWER PACK JAVA', id: 16},
      { title: 'POWER PACK JAVA', id: 17}
  ];
})
.controller("sildeshow",function($scope,$interval){
    var INTERVAL = 3000;
    var index= 0;
   $scope.move=function () {
    

   }
    $scope.currentAnimantion="slide-left-animation";
       var slides = ["img/s2.png","img/s1.png","img/s2.png"];
        $interval(function () {
          
          if(index<3){
         
            $scope.src1=slides[index];
            index++;
        }
        else {
          index=0;
        }
    


    
  

  }, INTERVAL);
})



.controller('PlaylistCtrl', function($scope, $stateParams) {
});
