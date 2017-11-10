/**
 * Calendar slide.
 */

// Register the function, if it does not already exist.
if (!window.slideFunctions['lokalcenter-header']) {
  window.slideFunctions['lokalcenter-header'] = {
    /**
     * Setup the slide for rendering.
     * @param scope
     *   The slide scope.
     */
    setup: function setupCalendarSingleDaySlide(scope) {
      var slide = scope.ikSlide;

      // Setup the inline styling
      scope.theStyle = {
        width: "100%",
        height: "100%",
        fontsize: slide.options.fontsize * (scope.scale ? scope.scale : 1.0)+ "px"
      };
    },

    /**
     * Run the slide.
     *
     * @param slide
     *   The slide.
     * @param region
     *   The region object.
     */
    run: function runCalendarSingleDaySlide(slide, region) {
      region.itkLog.info("Running lokalcenter-header slide: " + slide.title);

      slide.currentTime = Date.now();

      // Update current date every minute.
      var interval = region.$interval(function() {
        // Update current datetime.
        slide.currentTime = Date.now();
      }, 1000);

      var duration = 300;

      // Wait fadeTime before start to account for fade in.
      region.$timeout(function () {
        // Set the progress bar animation.
        region.progressBar.start(duration);

        // Wait for slide duration, then show next slide.
        // + fadeTime to account for fade out.
        region.$timeout(function () {
          if (interval) {
            region.$interval.cancel(interval);
          }

          region.nextSlide();
        }, duration * 1000 + region.fadeTime);
      }, region.fadeTime);
    }
  };
}
