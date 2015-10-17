Society.config(["$stateProvider", "modalStateProvider", "$urlRouterProvider", "$locationProvider",
    function($stateProvider, modalStateProvider, $urlRouterProvider, $locationProvider) {
 
        $stateProvider
        .state('society', {
            url: '/',
            views: {
                '@': {
                    templateUrl: 'partials/shared/layout.html',
                    controller: 'SocietyCtrl',
                    controllerAs: 'society',
                },
                'header@society': {
                    templateUrl: 'partials/shared/header.html',
                    controller: 'HeaderCtrl',
                    controllerAs: 'header',
                    bindToController: true
                },
                'menu@society': {
                    templateUrl: 'partials/shared/menu.html',
                    controller: 'MenuCtrl',
                    controllerAs: 'menu',
                    bindToController: true
                },
                'main@society': {
                    templateUrl: 'partials/feed.html',
                    controller: 'FeedCtrl',
                    controllerAs: 'feed',
                    bindToController: true
                },
                'sidebar@society': {
                    templateUrl: 'partials/shared/sidebar.html',
                    controller: 'MenuCtrl',
                    controllerAs: 'menu',
                    bindToController: true
                },
            }
        })
        .state('society.profile', {
            url: ':handle',
            views: {
                'main@society': {
                    templateUrl: 'partials/profile.html',
                    controller: 'ProfileCtrl',
                    controllerAs: 'profile',
                    bindToController: true
                },
                'overview@society.profile': {
                    templateUrl: 'partials/feed.html',
                    controller: 'FeedCtrl',
                    controllerAs: 'feed',
                    bindToController: true
                }
            }
        })
        .state('society.profile.friends', {
            url: '/friends',
            views: {
                'overview@society.profile': {
                    templateUrl: 'partials/profile/friends.html',
                    controller: 'FriendsCtrl',
                    controllerAs: 'friends',
                    bindToController: true
                }
            }
        })
        .state('society.profile.photos', {
            url: '/photos',
            views: {
                'overview@society.profile': {
                    templateUrl: 'partials/profile/photos.html',
                    controller: 'FriendsCtrl',
                    controllerAs: 'friends',
                    bindToController: true
                }
            }
        });
 
        modalStateProvider
        .state('society.message', {
            controller: 'MessageCtrl',
            controllerAs: 'message',
            url: 'message/:id',
            size: 'lg',
            templateUrl: 'message.html',
            windowClass: 'photo-modal'
        });
 
        modalStateProvider
        .state('society.profile.message', {
            controller: 'MessageCtrl',
            controllerAs: 'message',
            url: '/message/:id',
            size: 'lg',
            templateUrl: 'message.html',
            windowClass: 'photo-modal'
        });
 
        $urlRouterProvider.otherwise('/');
    }
])
