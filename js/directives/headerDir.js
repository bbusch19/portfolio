angular.module('myPortfolio').directive('headerDir', function() {

    return {
        templateUrl: '../../views/headerTmpl.html',
        link: function(scope, element, attrs) {
            $("h1").fitText(
                1.2, {
                    minFontSize: '35px',
                    maxFontSize: '65px'
                }
            );
        }
    }

})
