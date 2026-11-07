// Loads the ACR browser SDK from a CDN and starts it with the settings in assets/acr-config.js.
// No build step or npm: the SDK is an ES module fetched at runtime. Anything that goes wrong here
// (missing key, CDN down, ad blocker) is swallowed so the site itself is never affected.
const SDK_URL = 'https://cdn.jsdelivr.net/npm/@lib-acr/browser@0.0.2/+esm';

const config = window.ACR_CONFIG || {};

if (config.apiKey && config.endpoint) {
  import(SDK_URL)
    .then(({ BrowserACR }) => {
      const acr = new BrowserACR({
        apiKey: config.apiKey,
        endpoint: config.endpoint,
        appVersion: config.appVersion,
      });
      acr.start();
      // Optional: available for custom events from the console or other scripts,
      // e.g. window.acr.trackEvent('contact_clicked', { channel: 'email' }).
      window.acr = acr;
    })
    .catch((err) => console.warn('[acr] not started:', err));
}
