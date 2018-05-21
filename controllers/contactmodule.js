var myApp = angular.module('ContactModule', []);
myApp.controller('ContactController', ['$scope', function($scope){
	$scope.contact = {
		name: 'Ahmad Abdallah',
		email: 'ahmad.abdallah@insa-cvl.fr',
		phone: '0640000'
	};
	$scope.calculate = function(a, b){
		return (a+b)*3;
	}
}]);