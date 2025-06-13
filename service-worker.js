self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('jovem-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});