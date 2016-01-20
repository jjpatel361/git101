app.controller('appCtrl', function($scope,URLService) {
    $scope.urlmodel={};
    $scope.urlmodel.autocheck=true;

    $scope.$watch('urlmodel.encodeurl', function(newVal,oldVal) {
        //Provide it to another service for encoding
        if(!angular.isUndefined(newVal)){
          var encoded_result=URLService.getEncodedURL(newVal);
          console.log(encoded_result);
          $scope.urlmodel.decodedurl=encoded_result;

        }else{
          //ignore
          console.log('Nothing to encode');
        }

   });


   $scope.$watch('urlmodel.decodedurl',function (newVal,oldVal) {
     if(!angular.isUndefined(newVal)){
       var decoded_result=URLService.getDecodedURL(newVal);
       console.log(decoded_result);
       $scope.urlmodel.encodeurl=decoded_result;
     }else{
       //ignore
       console.log('Nothing to encode');
     }
   })
   
});
