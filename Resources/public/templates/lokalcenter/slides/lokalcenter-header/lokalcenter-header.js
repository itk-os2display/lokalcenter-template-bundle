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
    }
  };
}
