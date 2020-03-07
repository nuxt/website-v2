// Add dark / light detection that runs before Nuxt.js load.
(function() {
  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  var theme = '<%= options.default %>';
  try {
    theme = getCookie('<%= options.cookie.key %>');
  } catch (err) {}
  if (!theme || theme === 'system') {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    theme = (darkQuery.matches ? 'dark' : 'light');
  }
  window.__nuxt_theme = theme
  document.documentElement.setAttribute('data-theme', theme)
})();
