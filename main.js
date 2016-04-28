'use strict';

angular.module('pokeApp', [])
.controller('mainController', function($scope, $http) {



	//returns a promise to tell us what happened
	$http({
		url: 'http://pokeapi.co/api/v2/pokedex/1/',
		method: 'GET'
	})
	.then(function(res) {
		$scope.pokeList = res.data.pokemon_entries;
	})
	.catch(function(err) {
		console.log('err:', err)
	})




})
