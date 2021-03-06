// Animate Smooth Scroll
$('#view-work').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});
/* Set up our service worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', {scope: "/"})
    .then(reg => {
      console.log('Service worker registration successful: ' + reg.scope);
    })
    .catch(error => {
      console.log('Registration failed: ' + error);
    });
}
