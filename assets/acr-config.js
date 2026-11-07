// ACR (Application Control Room) settings for this site.
//
// Paste your values here. This file is public (GitHub Pages serves it as-is), which is fine:
// use a *client (publishable)* key only, never a server key or an apiSecret.
//
// In the ACR dashboard: App -> API keys -> New key -> type "Client",
// allowed origins: https://gotocva.github.io  (add http://localhost:8123 to test locally).
window.ACR_CONFIG = {
  apiKey: 'acr_live_oVuQuZrm7OR4yyw65dH2iuNqst87Xx20', // e.g. 'acr_live_xxxxxxxxxxxxxxxxxxxxxxxx'
  endpoint: 'https://api.applicationcontrolroom.com/v1', // ACR API base URL including /v1, e.g. 'https://api.your-acr-host.com/v1'
  appVersion: '2026.11.07', // bump when you publish a change; used for the "new version available" prompt
};
