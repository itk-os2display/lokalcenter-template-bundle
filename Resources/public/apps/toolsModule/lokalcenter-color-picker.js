angular.module('toolsModule').directive('lokalcenterColorPicker', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    link: function (scope) {
      scope.selectColor = function(color) {
        scope.slide.options.color = color.value;
      };
      scope.selectTextColor = function(color) {
        scope.slide.options.textcolor = color.value;
      };

      scope.textColorPalette = [
        {
          text: "Black",
          value: "#333"
        },
        {
          text: "60% Black",
          value: "#858585"
        },
        {
          text: "White",
          value: "#fff"
        }
      ];

      scope.palette = [
        {
          text: "Pink",
          value: "#EF0043"
        },
        {
          text: "30% Pink",
          value: "#FAB2C6"
        },
        {
          text: "Purple",
          value: "#673BB7"
        },
        {
          text: "30% Purple",
          value: "#D2C3EA"
        },
        {
          text: "Dark blue",
          value: "#2A3CA2"
        },
        {
          text: "30% Dark blue",
          value: "#BFC4E4"
        },
        {
          text: "Blue",
          value: "#3761D9"
        },
        {
          text: "30% Blue",
          value: "#C2D0F3"
        },
        {
          text: "Petroleum",
          value: "#008488"
        },
        {
          text: "30% Petroleum",
          value: "#B2DADA"
        },
        {
          text: "Green",
          value: "#008850"
        },
        {
          text: "30% Green",
          value: "#B2DBC9"
        },
        {
          text: "Yellow",
          value: "#FEE13D"
        },
        {
          text: "30% Yellow",
          value: "#FFF6C5"
        },
        {
          text: "Orange",
          value: "#FF5F31"
        },
        {
          text: "30% Orange",
          value: "#FFCFC1"
        },
        {
          text: "Red",
          value: "#D32F2E"
        },
        {
          text: "30% Red",
          value: "#F2C0BF"
        },
        {
          text: "Light gray",
          value: "#f6f6f6"
        },
        {
          text: "White",
          value: "#fff"
        }
      ];
    },
    templateUrl: '/bundles/itklokalcentertemplate/apps/toolsModule/lokalcenter-color-picker.html'
  };
});
