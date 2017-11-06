angular.module('toolsModule').controller('ItkLokalcenterTouch', [
  '$scope', function ($scope) {
    /**
     * Add a new hidden region.
     *
     * Max 5 hidden regions.
     */
    $scope.addHiddenRegion = function addHiddenRegion() {
      if (!$scope.data.options.extra_regions) {
        $scope.data.options.extra_regions = [];
      }

      if ($scope.data.options.extra_regions.length >= 5) {
        return;
      }

      $scope.data.options.extra_regions.push({
        region: 10 + $scope.data.options.extra_regions.length,
        text: "Ny knap"
      })
    };

    /**
     * Removes the hidden region and cleans up the $scope.data.channel_screen_regions,
     * by removing all references to the region.
     *
     * @param hiddenRegion
     */
    $scope.removeHiddenRegion = function removeHiddenRegion(hiddenRegion) {
      for (var r = 0; r < $scope.data.options.extra_regions.length; r++) {
        var region = $scope.data.options.extra_regions[r];

        if (region.region === hiddenRegion.region) {
          $scope.data.options.extra_regions.splice(r, 1);

          $scope.data.channel_screen_regions = $scope.data.channel_screen_regions.reduce(function (sum, value) {
            if (value.region !== hiddenRegion.region) {
              sum.push(value);
            }
            return sum;
          }, []);

          break;
        }
      }
    };
  }
]);
