(function() {
  $(document).ready(function() {
    console.log('site');
    Medialibrary.Menu.init();
  });

  Medialibrary = {};

  Medialibrary.Menu = {
    init: function() {
      Medialibrary.Menu.setCurrentPage();
      Medialibrary.Menu.bindEvents();
    },

    setCurrentPage: function() {
      $('#js-navigation-mobile').val(window.location.pathname);
    },

    bindEvents: function() {
      console.log('events');
      $('#js-navigation-mobile').on('change', function() {
        window.location.href = $(this).val();
      });
    }

  }
}());
