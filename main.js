'use strict';

var app = angular.module('pokeApp', ['ui.bootstrap'])

.service('Pokemon', function($http) {
	this.getAll = function() {
		return $http({
		url: 'http://pokeapi.co/api/v2/pokedex/1/',
		method: 'GET'
		});
	};
})

.controller('mainController', function($scope, $http, Pokemon, $uibModal) {



	//returns a promise to tell us what happened
	Pokemon.getAll()
	.then(function(res) {
		$scope.pokeList = res.data.pokemon_entries;
	})
	.catch(function(err) {
		console.log('err:', err)
	})

	$scope.selectPokemon = function(pokemon) {
		console.log(pokemon);
		var modalInstance = $uibModal.open({
			templateUrl: 'pokeModal.html',
			controller: 'pokeModalController',
			resolve: {
				pokemon:function() {
					return pokemon;
				}
			}
		});

		modalInstance.result.then(function() {
			console.log('success');
		}, function () {
			console.log('failure');
		})
	};
})

.controller('pokeModalController', function($scope, $uibModalInstance, pokemon) {
	console.log('pokeModalController');

	$scope.pokemon = pokemon;

	$scope.ok = function() {
		$uibModalInstance.close();
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss();
	};
});


