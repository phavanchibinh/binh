;(function($, window, undefined) {
  'use strict';

  var pluginName = 'slider';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      this.initSlider();
    },

    initSlider: function() {
      var that = this,
        el = that.element,
        options = that.options,
        duration = 100,
        timer,
        eventName;

      if(options.onMobile) {
        if(Site.isLess600()) {
          el.slick(that.options);
        }
        Site.isDesktop() ? eventName = 'resize.' : eventName = 'orientationchange.';
        Site.win.on(eventName + pluginName, function() {
          clearTimeout(timer);
          timer = setTimeout(function() {
            if(!Site.isLess600()) {
              if(el.hasClass('slick-slider')) {
                el.slick('unslick');
              }
            } else {
              el.slick(that.options);
            }
          }, duration);
        });
      } else {
        el.slick(that.options);
      }
    },

    destroy: function() {
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
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });
}(jQuery, window));
