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

      var closeTimeoutId = null;

      function autoClose() {
        if (closeTimeoutId !== null) {
          clearTimeout(closeTimeoutId);
        }

        closeTimeoutId = setTimeout(function () {
          for (var touchButton in slide.touchButtons) {
            touchButton = slide.touchButtons[touchButton];
            touchButton.element.classList.add('hide');
            touchButton.element.classList.remove('show');
          }

          closeTimeoutId = null;
        }, 5000);
      }

      /**
       * Click the touch button.
       *
       * @param button
       */
      slide.clickTouchButton = function(button) {
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

            autoClose();
          }
          else {
            touchButton.element.classList.add('hide');
            touchButton.element.classList.remove('show');
          }
        }
      };
    }
  };
}
