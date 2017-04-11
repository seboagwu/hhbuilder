// Your code goes here
var restApp = angular.module('restApp',['toastr','ngAnimate']);

restApp.controller('houseHoldController', ['$scope', '$rootScope','$http', '$q', '$window','$timeout','toastr', function ($scope, $rootScope, $http, $q, $window, $timeout,toastr)
{
	$scope.houseHold = {};
	$scope.listHouseHold = [];
	
	/*$scope.addHouseHold = function(myForm)
	{
		if(myForm.$valid)
		{
			if($scope.houseHold.smoker == undefined)
			{
				$scope.houseHold.smoker = false;
			}
			console.log($scope.houseHold);
			$scope.listHouseHold.push($scope.houseHold);
			
			toastr.info("Added successfully", 'Success!',
			{
				"positionClass": "toast-top-full-width",
	            timeOut : "10000"
	        });
			$scope.houseHold = {};
		}
		else
		{
			toastr.warning("please fillup detail first and then go for add", 'Warning!',
			{
				"positionClass": "toast-top-full-width",
                timeOut : "10000"
            });
			$scope.houseHold = {};
		}
		
	}*/

	
	$scope.addHouseHold = function()
	{
		if($scope.houseHold.age > 0 && $scope.houseHold.age != undefined && $scope.houseHold.age != "" && $scope.houseHold.rel != "")
		{
			if($scope.houseHold.smoker == undefined)
			{
				$scope.houseHold.smoker = false;
			}
			console.log($scope.houseHold);
			$scope.listHouseHold.push($scope.houseHold);
			
			toastr.info("Added successfully", 'Success!',
			{
				"positionClass": "toast-top-full-width",
	            timeOut : "10000"
	        });
			$scope.houseHold = {};
		}
		else
		{
			toastr.warning("please fillup detail first and then go for add", 'Warning!',
			{
				"positionClass": "toast-top-full-width",
                timeOut : "10000"
            });
			$scope.houseHold = {};
		}
		
	}
	$scope.submitListHouseHold = function()
	{
		
		toastr.info("List submitted successfully", 'Success!',
		{
			"positionClass": "toast-top-full-width",
            timeOut : "10000"
        });
		
		//your value as list of house hold is here
		// or you can put your sublition code here just send this object $scope.listHouseHold to server
		console.log($scope.listHouseHold);
	}
	
	$scope.deleteHouseHold = function(index)
	{
		$scope.listHouseHold.splice(index,1);
	}
}]);
