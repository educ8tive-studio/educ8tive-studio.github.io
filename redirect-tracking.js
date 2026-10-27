(function () {
  function keepTrackingKey(key) {
    return /^(utm_|fbclid|gclid|igshid|msclkid|dclid|mc_|mkt_tok|ref|source|medium|campaign|content|term|keyword)$/i.test(key);
  }

  function redirect(destination) {
    var target = new URL(destination, window.location.href);
    var current = new URLSearchParams(window.location.search);

    for (var pair of current.entries()) {
      if (keepTrackingKey(pair[0]) && !target.searchParams.has(pair[0])) {
        target.searchParams.append(pair[0], pair[1]);
      }
    }

    if (!target.searchParams.has('utm_source')) {
      target.searchParams.set('utm_source', 'github');
    }

    window.location.replace(target.toString());
  }

  window.redirect = redirect;
})();
