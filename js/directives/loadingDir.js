angular.module('myPortfolio').directive('loadDir', function() {

    return {
        template: '<section id="loadgif"><div class="fade-fast">L</div><div class="fade-fast">O</div><div class="fade-fast">A</div><div class="fade-fast">D</div><div class="fade-fast">I</div><div class="fade-fast">N</div><div class="fade-fast">G</div></section>',
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
