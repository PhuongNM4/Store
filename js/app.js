
angular.module('codeblock', [
    'ngRoute',
    'codeblockServices',
    'codeblockControllers',
    'codeblockDirectives',
    'codeblockFilters',
])
.value('rootUrl', 'https://fdn-freestore.firebaseio.com/Code%20Blocks/CSS/')

.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        controller: 'ListCTRL',
        templateUrl: 'partials/list.html'
    }).
    when('/view/:blockId', {
        controller: 'ViewCTRL',
        templateUrl: 'partials/detail.html'
    }).
    when('/new', {
        controller: 'CreateCTRL',
        templateUrl: 'partials/detail.html'
    }).
    otherwise({
        redirectTo: '/'
    })
})



