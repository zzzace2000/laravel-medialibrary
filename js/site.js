(function() {
  $(document).ready(function() {
    navigation();
    hljs.initHighlightingOnLoad();
  });

  function navigation() {
    $('#js-navigation-mobile').selectBoxIt({ native: true });
    $('#js-navigation-mobile').val(window.location.pathname);

    $('#js-navigation-mobile').on('change', function() {
      window.location.href = $(this).val();
    });
  }
}());
