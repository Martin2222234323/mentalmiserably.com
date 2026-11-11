(function() {
  const lang = localStorage.getItem('mental_lang');
  const path = window.location.pathname;

  if (lang === 'en' && !path.includes('/en/')) {
    const page = path.split('/').pop() || 'index.html';
    window.location.href = 'en/' + page;
  } else if (lang === 'es' && path.includes('/en/')) {
    const page = path.split('/').pop() || 'index.html';
    window.location.href = '../' + page;
  }
})();