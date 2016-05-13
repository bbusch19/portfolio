angular.module('myPortfolio').directive('loadDir', function() {

    return {
        template: '<div id="loadgif"><img src="http://45.media.tumblr.com/0e4d569a524efa429a9f0856cf923283/tumblr_n57s3rsJQj1sso6sco1_500.gif"alt="Loading" /></div>',
        link: function(scope, elem, attrs) {
            var mobileCheck = function() {
                if (screen.width < 768) {
                    $('main').addClass('no-scroll-mobile');
                } else {
                    $('body').addClass('no-scroll');
                }
            }
            mobileCheck();
        }
    }

})
