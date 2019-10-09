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