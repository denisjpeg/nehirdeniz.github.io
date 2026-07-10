self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // İhtiyaç halinde çevrimdışı önbellekleme buraya yazılabilir
});
