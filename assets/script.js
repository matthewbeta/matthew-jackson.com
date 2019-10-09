// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ("serviceWorker" in navigator) {
  console.log("🤖 - Woohoo! Service workers!!! 🦄 ✨");
  navigator.serviceWorker
    .register("/sw.js")
    .then(
      function() {
        console.log("🤖 - Service worker registration complete.");
      },
      function() {
        console.log("🤖 - I fucked up. Soz");
      }
    );
} else {
  console.log("🤖 - Service workers are not supported 😭");
}

(function () {
var script = document.createElement('script');
script.src = '/assets/fontfaceobserver.js';
script.async = true;
script.onload = function () {
var franklin = new FontFaceObserver('franklin-gothic-urw', {weight: 400});
var franklin_bold = new FontFaceObserver('franklin-gothic-urw', {weight: 500});
Promise.all([franklin.load(), franklin_bold.load()]).then(function () {
document.documentElement.classList.add('fonts-loaded');
});
};
document.head.appendChild(script);
}());