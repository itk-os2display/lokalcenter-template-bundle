/**
 * Lokalcenter quotes slide.
 */

// Register the function, if it does not already exist.
if (!window.slideFunctions['lokalcenter-quotes']) {
  window.slideFunctions['lokalcenter-quotes'] = {
    /**
     * Setup the slide for rendering.
     * @param scope
     *   The slide scope.
     */
    setup: function setupBaseSlide(scope) {
      var slide = scope.ikSlide;

      slide.quotesDuration = slide.options.item_duration ? slide.options.item_duration : 15;
      slide.quotesLength = slide.options.quotes ? slide.options.quotes.length : 0;
      slide.quotesSlideDuration = slide.quotesDuration * slide.quotesLength * 1000;
      slide.quoteIndex = 0;
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
      region.itkLog.info("Running lokalcenter quotes slide: " + slide.title);

      /**
       * Go to next rss news.
       */
      var quoteTimeout = function () {
        region.$timeout(function () {
          slide.quoteIndex = (slide.quoteIndex + 1) % slide.quotesLength;

          if (slide.quoteIndex === 0) {
            region.nextSlide();
          }
          else {
            quoteTimeout();
          }
        }, slide.quotesDuration * 1000);
      };

      quoteTimeout();

      // Wait fadeTime before start to account for fade in.
      region.$timeout(function () {
        region.progressBar.start(slide.quotesSlideDuration);
      }, region.fadeTime);
    }
  };
}
