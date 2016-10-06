angular.module('chattyModule', [])
	.controller('ChattyController', function($scope, $http, $state) {
		$scope.messages = [];
		$scope.rooms = [];
		$scope.currentRoom = 'No room selected (please choose a room on the left)';
		$scope.currentUser = 'neil';

		// Sends request to add message to MySQL
		$scope.addMessage = function(newMessage) {
			console.log(newMessage);
		}
	})