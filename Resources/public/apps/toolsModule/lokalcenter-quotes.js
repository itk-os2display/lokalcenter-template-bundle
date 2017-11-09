angular.module('toolsModule').directive('lokalcenterQuotes', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    link: function (scope, element, attrs) {
      scope.newQuote = {
        quote: "",
        author: ""
      };

      scope.addQuote = function () {
        if (!scope.slide.options.quotes) {
          scope.slide.options.quotes = [];
        }

        scope.slide.options.quotes.push(angular.copy(scope.newQuote));
      };

      scope.removeQuote = function (index) {
        scope.slide.options.quotes.splice(index, 1);
      };
    },
    templateUrl: '/bundles/itklokalcentertemplate/apps/toolsModule/lokalcenter-quotes.html'
  };
});
