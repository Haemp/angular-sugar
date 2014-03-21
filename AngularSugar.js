var AngularSugar = angular.module('AngularSugar', []);

AngularSugar.directive('asEnter', function($parse){

	return{
		link: function( $scope, element, attr ){
                                
			element.on('keyup', function( e ){
				if( e.keyCode == 13 ){
					$scope.$apply($parse(attr.ngEnter));
				}
			})
		}
	}
});

AngularSugar.directive('asEsc', function($parse){

	return{
		link: function( $scope, element, attr ){
                                
			element.on('keyup', function( e ){
				if( e.keyCode == 27 ){
					$scope.$apply($parse(attr.ngEsc));
				}
			})
		}
	}
});