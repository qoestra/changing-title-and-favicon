window.onload = function () {
  var pageTitle = document.title;
  var attentionMessage = "Don't Forget Me!";
  var attentionFavicon = "favicons/favicon_sad.png";
  var isPageActive = true;

  var faviconLink = document.querySelector("link[rel~='icon']");
  var originalFaviconHref = faviconLink.href;

  document.addEventListener("visibilitychange", function () {
    isPageActive = !document.hidden;

    if (!isPageActive) {
      faviconLink.href = attentionFavicon;
      document.title = attentionMessage;
    } else {
      faviconLink.href = originalFaviconHref;
      document.title = pageTitle;
    }
  });
};
