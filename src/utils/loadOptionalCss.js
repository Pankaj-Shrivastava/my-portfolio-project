// Load CSS files optionally: try HEAD request and inject a <link> if present.
export async function loadOptionalCssFiles(basePath = '/') {
  const files = ['CSSOne.css', 'CSSTwo.css', 'CSSThree.CSS'];

  const checks = files.map(async (filename) => {
    const url = new URL(filename, window.location.origin + basePath).toString();
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
        return { filename, status: 'loaded' };
      }
    } catch (err) {
      // network or CORS error; treat as missing
    }
    return { filename, status: 'missing' };
  });

  return Promise.all(checks);
}
