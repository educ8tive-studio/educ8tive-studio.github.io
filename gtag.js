// 1. Create and inject the external script only once
const script = document.createElement('script');
script.async = true;
// Use your primary ID in the URL
script.src = "https://www.googletagmanager.com/gtag/js?id=G-K57632CCGB";
document.body.appendChild(script);

// 2. Initialize gtag
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());

// 3. Add multiple configuration lines
gtag('config', 'G-K57632CCGB');      // Your GA4 ID
gtag('config', 'GT-P3NSS9SX');      // Your Google Ads ID
gtag('config', 'AW-17952891258');      // Another GA4 property

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;document.body.appendChild(j);
})(window,document,'script','dataLayer','GTM-WJQVFQZD');
