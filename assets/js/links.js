/* 站点跳转链接集中管理：改一处 = 全站生效 */
window.SITE_LINKS = {
  download: 'https://pan.quark.cn/s/c27b53d30649'
};

(function () {
  function bindLinks(root) {
    (root || document).querySelectorAll('[data-link]').forEach(function (el) {
      var key = el.getAttribute('data-link');
      var url = window.SITE_LINKS[key];
      if (!url) return;
      if (el.tagName === 'A') {
        el.setAttribute('href', url);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener');
      } else {
        el.addEventListener('click', function () {
          window.open(url, '_blank', 'noopener');
        });
        el.style.cursor = 'pointer';
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { bindLinks(); });
  } else {
    bindLinks();
  }
})();
