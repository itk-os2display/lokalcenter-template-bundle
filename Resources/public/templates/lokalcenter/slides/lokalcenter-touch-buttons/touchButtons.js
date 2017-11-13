/**
 * Lokalcenter touch buttons slide.
 */

// Register the function, if it does not already exist.
if (!window.slideFunctions['lokalcenter-touch-buttons']) {
  window.slideFunctions['lokalcenter-touch-buttons'] = {
    /**
     * Setup the slide for rendering.
     * @param scope
     *   The slide scope.
     */
    setup: function setupBaseSlide(scope) {
      var slide = scope.ikSlide;
      slide.touchButtons = [];

      var hiddenRegions = document.querySelectorAll(".js-touch-region");

      for (var hiddenRegionIndex in hiddenRegions) {
        var hiddenRegion = hiddenRegions[hiddenRegionIndex];

        if (hiddenRegion.dataset === undefined) {
          continue;
        }

        slide.touchButtons.push({
          region: hiddenRegion.dataset.id,
          text: hiddenRegion.dataset.text,
          element: hiddenRegion,
          opened: false
        });
      }
    },

    /**
     * Run the slide.
     *
     * @param slide
     *   The slide.
     * @param region
     *   The region object.
     */
    run: function runBaseSlide(slide, region) {
      region.itkLog.info("Running lokalcenter touch buttons slide: " + slide.title);
      region.itkLog.info("Region slide cycle stopped!");

      var timeout = null;
      // Defaults to 60 s.
      var autoCloseTimeout = slide.options.autoclose_timeout ? slide.options.autoclose_timeout * 1000 : 60000;
      // Defaults to enabled.
      var autoCloseEnabled = slide.options.autoclose_enabled !== null ? slide.options.autoclose_enabled : true;

      function autoClose() {
        if (timeout !== null) {
          region.$timeout.cancel(timeout);
        }

        timeout = region.$timeout(function () {
          for (var touchButton in slide.touchButtons) {
            touchButton = slide.touchButtons[touchButton];
            touchButton.element.classList.add('hide');
            touchButton.element.classList.remove('show');

            touchButton.opened = false;
          }
        }, autoCloseTimeout);
      }

      /**
       * Click the touch button.
       *
       * @param button
       */
      slide.clickTouchButton = function(button) {
        region.$timeout(function () {
          for (var touchButton in slide.touchButtons) {
            touchButton = slide.touchButtons[touchButton];

            if (touchButton.region === button.region) {
              touchButton.opened = !touchButton.opened;
            }
            else {
              touchButton.opened = false;
            }

            if (touchButton.opened) {
              touchButton.element.classList.remove('hide');
              touchButton.element.classList.add('show');
            }
            else {
              touchButton.element.classList.add('hide');
              touchButton.element.classList.remove('show');
            }
          }

          if (autoCloseEnabled && slide.touchButtons.reduce(function (sum, value) {
            return value.opened || sum;
            }, false)) {
            autoClose();
          }
        });
      };
    }
  };
}
