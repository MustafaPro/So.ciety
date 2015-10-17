var Society = angular.module('Society', [
  'ui.router'
])

.run(['$rootScope',
    function($rootScope) {
        $rootScope.isLoggedIn = function() {
            return '';
        }

        $rootScope.getUser = function() {
            return { name: 'Sam Granger' };
        }
    }
]);

