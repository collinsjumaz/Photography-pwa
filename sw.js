self.addEventListener("install", event => {
  event.waitUntil(caches.open(cacheID).then(cache => {
    return cache
      .addAll([
      "/",
      "/index.html",
      "/js/index.js",
      "/js/review.js",
      "/img/cam.jpg", 
      "/img/fox.jpg",
      "/img/giff.jpg",
      "/img/leo.jpg",
    ])
      .catch(error => {
        console.log("Caches open failed: " + error);
      });
  }));
});