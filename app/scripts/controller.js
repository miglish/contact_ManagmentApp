
angular.module('contactApp', [])
.controller('ContactController', ['$scope', function($scope) {

  $scope.contacts = [
  {
    firstName:'Mikias',
    image: 'images/user_fancy.png',
    lastName: 'Haile'
 },
 {
   firstName:'John',
   image: 'images/user_male.png',
   lastName: 'Maxy'
},
{
  firstName:'Gelila',
  image: 'images/user_female.png',
  lastName: 'Anderson'
}
];

  $scope.objectIndex = '';
  $scope.edit = function(id) {
            $scope.objectIndex = id;
            $scope.contactObject = angular.copy($scope.contacts[id]);
            console.log($scope.objectIndex);
        }

        $scope.save = function() {
            console.log($scope.objectIndex);
            if($scope.contacts[$scope.objectIndex] == null) {
                //Add new contact
                $scope.contacts.push($scope.contactObject);
            } else {
                //Update
                    $scope.contacts[$scope.objectIndex] = $scope.contactObject;
            }

            $scope.contactObject = {};
            $scope.objectIndex = '';
        }

        $scope.delete = function(id) {
            //search record with given id and delete it
            for(i in $scope.contacts) {
                if($scope.contacts[i].id == id) {
                    $scope.contacts.splice(i,1);
                    $scope.contacts = {};
                }
            }

        }

}]);
