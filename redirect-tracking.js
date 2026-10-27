(function () {
  function keepTrackingKey(key) {
    return /^(utm_|fbclid|gclid|igshid|msclkid|dclid|mc_|mkt_tok|ref|source|medium|campaign|content|term|keyword)$/i.test(key);
  }

  function redirect(destination) {
    var target = new URL(destination, window.location.href);
    var current = new URLSearchParams(window.location.search);
    var aliases = {
      from: 'utm_source',
      source: 'utm_source',
      medium: 'utm_medium',
      campaign: 'utm_campaign',
      term: 'utm_term',
      content: 'utm_content'
    };

    for (var pair of current.entries()) {
      var mappedKey = aliases[pair[0]];

      if (mappedKey && !target.searchParams.has(mappedKey)) {
        target.searchParams.append(mappedKey, pair[1]);
      }

      if (keepTrackingKey(pair[0]) && !target.searchParams.has(pair[0])) {
        target.searchParams.append(pair[0], pair[1]);
      }
    }

    if (!target.searchParams.has('utm_source')) {
      target.searchParams.set('utm_source', 'website');
    }

    window.location.replace(target.toString());
  }

  window.redirect = redirect;
})();
