'use strict';

angular.module('yourCoast', ['ngResource',
														 'ngSanitize',
														 'ui.router',
														 'uiGmapgoogle-maps',
														 'ngDialog',
														 '720kb.socialshare',
														 'yourCoast.map'
														])

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAx3mZAAx_JC8C3Xww3xXPDaT3bG5_8BhY',
        v: '3.17',
        libraries: 'weather,geometry,places'
    });
})

.filter('trust', ['$sce', function($sce){
		return function(input) {
			return $sce.trustAsHtml(input);
		};
}]);
