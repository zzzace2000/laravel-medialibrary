(function() {
  $(document).ready(function() {
    Navigation.init();
    hljs.initHighlightingOnLoad();
  });

  Navigation = {
    init: function() {
      var _ = Navigation;

      _.setCurrentPage();
      _.bindEvents();
    },

    setCurrentPage: function() {
      $('#js-navigation-mobile').val(window.location.pathname);
    },

    bindEvents: function() {
      $('#js-navigation-mobile').on('change', function() {
        window.location.href = $(this).val();
      });
    }
  }
}());
