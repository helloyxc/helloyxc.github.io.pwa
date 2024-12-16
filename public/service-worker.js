this.addEventListener('install', event => {
  console.log('Service Worker installing.');
  // Add a call to skipWaiting here if needed
});

this.addEventListener('activate', event => {
  console.log('Service Worker activating.');
  // Add a call to claim clients here if needed
});

this.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
  // Add custom fetch event handling here if needed
});
