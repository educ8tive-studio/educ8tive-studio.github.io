// 1. Create and inject the external script only once
const script = document.createElement('script');
script.async = true;
// Use your primary ID in the URL
script.src = "https://googletagmanager.com";
document.head.appendChild(script);

// 2. Initialize gtag
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());

// 3. Add multiple configuration lines
gtag('config', 'G-K57632CCGB');      // Your GA4 ID
gtag('config', 'GT-P3NSS9SX');      // Your Google Ads ID
gtag('config', 'AW-17952891258');      // Another GA4 property
