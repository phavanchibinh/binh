
;(function($, window, Unibail, undefined) {
  'use strict';

  var pluginName = 'backtotop';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this;
          that.scrollTop();

    },
    scrollTop: function(){
        var that = this,
         run = that.element;
      $(run).click(function(){ 
        $('html').animate({ scrollTop: 0 }, 'slow');
      });
     },
   
    destroy: function() {
      // remove events
      // deinitialize
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {

  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(window.jQuery, window));
