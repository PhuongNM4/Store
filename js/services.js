
angular.module('codeblockServices', ['firebase'])

.factory('CssDB', function ($firebase, cssBlockUrl) {
    return $firebase(new Firebase(cssBlockUrl));
})

