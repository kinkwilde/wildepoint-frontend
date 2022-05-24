# SEO Checklist

## Tools

> **Note:** If you can't measure it, you can't improve it.

### Analytics Tools

> #### **Links**
>
> -   [Google Analytics](http://analytics.google.com/) - Analyse traffic and behaviour of users on your site. Launch experiments and track conversions
> -   [Google Search Console](https://search.google.com/search-console/about) - Measure your site's search traffic and performance, shows click-through rate and issues such as unreachable links

### Checkers

> #### **Links**
>
> -   [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - Addressing technical and on-site seo issues
> -   [Webhint](https://webhint.io/) - Checks for issues such as: accessibility, compatibility, pwa, performance, pitfalls and security
> -   [Google’s Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Test if page is mobile friendly

### Chrome Extensions

## Head

> **Note:** You can find a list of everything at [joshbuchea/HEAD](https://github.com/joshbuchea/HEAD) that could be found in the `<head>` of an HTML document.

### Meta tag

[x] **Doctype:** The Doctype is HTML5 and is at the top of all your HTML pages.

```html
<!DOCTYPE html>
```

[x] **Charset:** The charset (UTF-8) is declared correctly.

```html
<meta charset="utf-8" />
```

> #### **Links**
>
> -   [Determining the character encoding - HTML5 W3C](https://www.w3.org/TR/html5/syntax.html#determining-the-character-encoding)

[x] **Viewport:** The viewport is declared correctly.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

[ ] **Title:** A title is used on all pages (SEO: Google calculates the pixel width of the characters used in the title, and it cuts off between 472 and 482 pixels. The average character limit would be approximately 50 to 70 characters).

```html
<title>An example of a page title</title>
```

> #### **Links**
>
> -   [Title - HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

[ ] **Description:** A meta description is provided, it is unique and doesn't possess more than 155 - 160 characters.

```html
<meta name="description" content="An example of a page description" />
```

> #### **Links**
>
> -   [Description - HTML - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_an_author_and_description)

[ ] **Favicons:** Each favicon has been created and displays correctly.

```html
<link rel="shortcut icon" href="favicon.ico" sizes="any" />
<link rel="icon" href="icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
<link rel="manifest" href="manifest.webmanifest" />
```

```json
{
    "background_color": "#2563eb",
    "description": "My Personal Blog",
    "display": "standalone",
    "id": "/",
    "name": "WILDEPOINT",
    "scope": "/",
    "short_name": "wilde.",
    "start_url": "/",
    "theme_color": "#2563eb",
    "icons": [
        {
            "sizes": "192x192",
            "src": "icon-192x192.png",
            "type": "image/png"
        },
        {
            "sizes": "512x512",
            "src": "icon-512x512.png",
            "type": "image/png"
        }
    ]
}
```

> #### **Information**
>
> -   ICO: 32
> -   PNG: 192, 512
>
> #### **Links**
>
> -   [RealFaviconGenerator](https://realfavicongenerator.net/)

[ ] **Apple Web App Meta:** Apple meta-tags are present.

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```

[ ] **Windows Tiles:** Windows tiles are present and linked.

```html
<meta name="msapplication-config" content="browserconfig.xml" />
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square70x70logo src="small.png"/>
            <square150x150logo src="medium.png"/>
            <square310x310logo src="large.png"/>
            <wide310x150logo src="wide.png"/>
        </tile>
    </msapplication>
</browserconfig>
```

> #### **Links**
>
> -   [Browser configuration schema reference](<https://msdn.microsoft.com/en-us/library/dn320426(v=vs.85).aspx>)

[ ] **Canonical:** Use `rel="canonical"` to avoid duplicate content.

```html
<link rel="canonical" href="http://example.com" />
```

### HTML tags

[ ] **Language:** The `lang` attribute of your website is specified and related to the language of the current page.

```html
<html lang="en-gb"></html>
```

[ ] **Alternate Language:** The language tag of your website is specified and related to the language of the current page.

```html
<link rel="alternate" href="https://de.example.com" hreflang="de" />
```

[ ] **CSS Critical:** The CSS critical (or "above the fold") is inlined.

```html
<style>
    /* Critical CSS */
</style>
```

### Social meta

**_Facebook OG_** and **_Twitter Cards_** are, for any website, highly recommended. The other social media tags can be considered if you target a particular presence on those and want to ensure the display.

[ ] **Facebook Open Graph:** All Facebook Open Graph (OG) are tested and no one is missing or with false information. Images need to be at least 600 x 315 pixels, although 1200 x 630 pixels is recommended.

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:title" content="Content Title" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />
```

These tags are optional but recommended

> **Notes:** Using `og:image:width` and `og:image:height` will specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it.

```html
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

> #### **Links**
>
> -   [Best Practices](https://developers.facebook.com/docs/sharing/best-practices/)
> -   Test your page with the [Facebook OG Testing Tool](https://developers.facebook.com/tools/debug/)

[ ] **Twitter Card:**

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@site_account" />
<meta name="twitter:creator" content="@individual_account" />
<meta name="twitter:url" content="https://example.com/page.html" />
<meta name="twitter:title" content="Content Title" />
<meta name="twitter:image" content="https://example.com/image.jpg" />
<meta
    name="twitter:description"
    content="Content description less than 200 characters"
/>
```

> #### **Links**
>
> -   [Getting Started](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)
> -   Test your page with the [Twitter Card Validator Tool](https://cards-dev.twitter.com/validator)

## HTML

### Best practices

[ ] **HTML5 Semantic Elements:** HTML5 Semantic Elements are used appropriately (header, section, footer, main, etc...)

> #### **Links**
>
> -   [HTML Reference](http://htmlreference.io/)

[ ] **Unique ID:** They must be unique.

[ ] **JS Prefix:** All classes / ID begin with **js-** and are not styled into the CSS files.

```html
<div id="js-slider"></div>
<div class="js-slider my-slider"></div>
```

[ ] **Error Pages:** Error 404 page and 5xx exist.

### HTML testing

[ ] **W3C Compliant:** All pages need to be tested with the W3C validator to identify possible issues in the HTML code.

> #### **Links**
>
> -   [W3C validator](https://validator.w3.org/)

[ ] **Link Checker:** There are no broken links in my page, verify that you don't have any 404 error.

> #### **Links**
>
> -   [W3C Link Checker](https://validator.w3.org/checklink)

## CSS

[ ] **CSS Print:** A print stylesheet is provided and is correct on each page.

## Images

> **Notes:** For a complete understanding of image optimization, check the free ebook **[Essential Image Optimization](https://images.guide/)** from Addy Osmani.

### Best practices

[ ] **Optimization:** All images are optimized.

[ ] **Srcset:** Use srcset to provide the most appropriate image for the current viewport of the user.

[ ] **Retina:** You provide layout images 2x or 3x, support retina display.

-   [ ] **Width and Height:** ![High][high_img] Set `width` and `height` attributes on `<img>` if the final rendered image size is known (can be omitted for CSS sizing).

-   [ ] **Alternative text:** ![High][high_img] All `<img>` have an alternative text which describes the image visually.

-   [ ] **Lazy loading:** ![Medium][medium_img] Images are lazyloaded (A noscript fallback is always provided).

> -   🛠 [Native lazy loading polyfill](https://github.com/mfranzke/loading-attribute-polyfill/)

## JavaScript

### Best practices

-   [ ] **JavaScript Inline:** ![High][high_img] You don't have any JavaScript code inline (mixed with your HTML code).

-   [ ] **Concatenation:** ![High][high_img] JavaScript files are concatenated.

-   [ ] **Minification:** ![High][high_img] JavaScript files are minified (you can add the `.min` suffix).

> -   📖 [Minify Resources (HTML, CSS, and JavaScript)](https://developers.google.com/speed/docs/insights/MinifyResources)

-   [ ] **JavaScript security:** ![High][high_img]

> -   📖 [Guidelines for Developing Secure Applications Utilizing JavaScript](https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet#Guidelines_for_Developing_Secure_Applications_Utilizing_JavaScript)

-   [ ] **`noscript` tag:** ![Medium][medium_img] Use `<noscript>` tag in the HTML body if a script type on the page is unsupported or if scripting is currently turned off in the browser. This will be helpful in client-side rendering heavy apps such as React.js, see [examples](https://webdesign.tutsplus.com/tutorials/quick-tip-dont-forget-the-noscript-element--cms-25498).

```html
<noscript> You need to enable JavaScript to run this app. </noscript>
```

-   [ ] **Non-blocking:** ![Medium][medium_img] JavaScript files are loaded asynchronously using `async` or deferred using `defer` attribute.

> -   📖 [Remove Render-Blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)

-   [ ] **Optimized and updated JS libraries:** ![Medium][medium_img] All JavaScript libraries used in your project are necessary (prefer Vanilla Javascript for simple functionalities), updated to their latest version and don't overwhelm your JavaScript with unnecessary methods.

> -   📖 [You may not need jQuery](http://youmightnotneedjquery.com/)

> -   📖 [Vanilla JavaScript for building powerful web applications](https://plainjs.com/)

-   [ ] **Modernizr:** ![Low][low_img] If you need to target some specific features you can use a custom Modernizr to add classes in your `<html>` tag.

> -   🛠 [Customize your Modernizr](https://modernizr.com/download?setclasses)

### JavaScript testing

-   [ ] **ESLint:** ![High][high_img] No errors are flagged by ESLint (based on your configuration or standards rules).

> -   📖 [ESLint - The pluggable linting utility for JavaScript and JSX](https://eslint.org/)

**[⬆ back to top](#table-of-contents)**

---

## Security

### Scan and check your web site

> -   [securityheaders.io](https://securityheaders.io/)

> -   [Observatory by Mozilla](https://observatory.mozilla.org/)

### Best practices

-   [ ] **HTTPS:** ![High][high_img] HTTPS is used on every page and for all external content (plugins, images...).

> -   🛠 [Let's Encrypt - Free SSL/TLS Certificates](https://letsencrypt.org/)

> -   🛠 [Free SSL Server Test](https://www.ssllabs.com/ssltest/index.html)

> -   📖 [Strict Transport Security](http://caniuse.com/#feat=stricttransportsecurity)

-   [ ] **HTTP Strict Transport Security (HSTS):** ![Medium][medium_img] The HTTP header is set to 'Strict-Transport-Security'.

> -   🛠 [Check HSTS preload status and eligibility](https://hstspreload.org/)

> -   📖 [HTTP Strict Transport Security Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)

> -   📖 [Transport Layer Protection Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)

-   [ ] **Cross Site Request Forgery (CSRF):** ![High][high_img] You ensure that requests made to your server-side are legitimate and originate from your website / app to prevent CSRF attacks.

> -   📖 [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

-   [ ] **Cross Site Scripting (XSS):** ![High][high_img] Your page or website is free from XSS possible issues.

> -   📖 [XSS (Cross Site Scripting) Prevention Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

> -   📖 [DOM based XSS Prevention Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)

-   [ ] **Content Type Options:** ![Medium][medium_img] Prevents Google Chrome and Internet Explorer from trying to mime-sniff the content-type of a response away from the one being declared by the server.

> -   📖 [X-Content-Type-Options - Scott Helme](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options)

-   [ ] **X-Frame-Options (XFO):** ![Medium][medium_img] Protects your visitors against clickjacking attacks.

> -   📖 [X-Frame-Options - Scott Helme](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options)

> -   📖 [RFC7034 - HTTP Header Field X-Frame-Options](https://tools.ietf.org/html/rfc7034)

-   [ ] **Content Security Policy:** ![Medium][medium_img] Defines how content is loaded on your site and from where it is permitted to be loaded. Can also be used to protect against clickjacking attacks.

> -   📖 [Content Security Policy - An Introduction - Scott Helme](https://scotthelme.co.uk/content-security-policy-an-introduction/)

> -   📖 [CSP Cheat Sheet - Scott Helme](https://scotthelme.co.uk/csp-cheat-sheet/)

> -   📖 [CSP Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)

> -   📖 [Content Security Policy Reference](https://content-security-policy.com/)

**[⬆ back to top](#table-of-contents)**

---

## Performance

### Best practices

-   [ ] **Goals to achieve:** ![Medium][medium_img] Your pages should reach these goals:

-   First Meaningful Paint under 1 second

-   Time To Interactive under 5 seconds for the "average" configuration (a $200 Android on a slow 3G network with 400ms RTT and 400kbps transfer speed) and under 2 seconds for repeat visits

-   Critical file size under 170Kb gzipped

> -   🛠 [Website Page Analysis](https://tools.pingdom.com)

> -   🛠 [WebPageTest](https://www.webpagetest.org/)

> -   📖 [Size Limit: Make the Web lighter](https://evilmartians.com/chronicles/size-limit-make-the-web-lighter)

-   [ ] **Minified HTML:** ![Medium][medium_img] Your HTML is minified.

-   [ ] **Lazy loading:** ![Medium][medium_img] Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (See details in their respective sections).

-   [ ] **Cookie size:** ![Medium][medium_img] If you are using cookies be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies.

> -   📖 [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)

> -   📖 [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

> -   🛠 [Browser Cookie Limits](http://browsercookielimits.squawky.net/)

-   [ ] **Third party components:** ![Medium][medium_img] Third party iframes or components relying on external JS (like sharing buttons) are replaced by static components when possible, thus limiting calls to external APIs and keeping your user's activity private.

> -   🛠 [Simple sharing buttons generator](https://simplesharingbuttons.com/)

### Preparing upcoming requests

> -   📖 [Explanation of the following techniques](https://css-tricks.com/prefetching-preloading-prebrowsing/)

-   [ ] **DNS resolution:** ![Low][low_img] DNS of third-party services that may be needed are resolved in advance during idle time using `dns-prefetch`.

```html
<link rel="dns-prefetch" href="https://example.com" />
```

-   [ ] **Preconnection:** ![Low][low_img] DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using `preconnect`.

```html
<link rel="preconnect" href="https://example.com" />
```

-   [ ] **Prefetching:** ![Low][low_img] Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using `prefetch`.

```html
<link rel="prefetch" href="image.png" />
```

-   [ ] **Preloading:** ![Low][low_img] Resources needed in the current page (e.g. scripts placed at the end of `<body>`) in advance using `preload`.

```html
<link rel="preload" href="app.js" />
```

> -   📖 [Difference between prefetch and preload](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

### Performance testing

-   [ ] **Google PageSpeed:** ![High][high_img] All your pages were tested (not only the homepage) and have a score of at least 90/100.

> -   🛠 [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)

> -   🛠 [Test your mobile speed with Google](https://testmysite.withgoogle.com)

> -   🛠 [WebPagetest - Website Performance and Optimization Test](https://www.webpagetest.org/)

> -   🛠 [GTmetrix - Website speed and performance optimization](https://gtmetrix.com/)

> -   🛠 [Speedrank - Improve the performance of your website](https://speedrank.app/)

**[⬆ back to top](#table-of-contents)**

---

## Accessibility

> **Notes:** You can watch the playlist [A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) 📹

### Best practices

-   [ ] **Progressive enhancement:** ![Medium][medium_img] Major functionality like main navigation and search should work without JavaScript enabled.

> -   📖 [Enable / Disable JavaScript in Chrome Developer Tools](https://www.youtube.com/watch?v=kBmvq2cE0D8)

-   [ ] **Color contrast:** ![Medium][medium_img] Color contrast should at least pass WCAG AA (AAA for mobile).

> -   🛠 [Contrast ratio](https://leaverou.github.io/contrast-ratio/)

#### Headings

-   [ ] **H1:** ![High][high_img] All pages have an H1 which is not the title of the website.

-   [ ] **Headings:** ![High][high_img] Headings should be used properly and in the right order (H1 to H6).

> -   📹 [Why headings and landmarks are so important -- A11ycasts #18](https://www.youtube.com/watch?v=vAAzdi1xuUY&index=9&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

### Semantics

-   [ ] **Specific HTML5 input types are used:** ![Medium][medium_img] This is especially important for mobile devices that show customized keypads and widgets for different types.

> -   📖 [Mobile Input Types](http://mobileinputtypes.com/)

### Form

-   [ ] **Label:** ![High][high_img] A label is associated with each input form element. In case a label can't be displayed, use `aria-label` instead.

> -   📖 [Using the aria-label attribute - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)

### Accessibility testing

-   [ ] **Accessibility standards testing:** ![High][high_img] Use the WAVE tool to test if your page respects the accessibility standards.

> -   🛠 [Wave testing](http://wave.webaim.org/)

-   [ ] **Keyboard navigation:** ![High][high_img] Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable.

-   [ ] **Screen-reader:** ![Medium][medium_img] All pages were tested in a screen-reader (VoiceOver, ChromeVox, NVDA or Lynx).

-   [ ] **Focus style:** ![High][high_img] If the focus is disabled, it is replaced by visible state in CSS.

> -   📹 [Managing Focus - A11ycasts #22](https://www.youtube.com/watch?v=srLRSQg6Jgg&index=5&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

**[⬆ back to top](#table-of-contents)**

---

## SEO

-   [ ] **Google Analytics:** ![Low][low_img] Google Analytics is installed and correctly configured.

> -   🛠 [Google Analytics](https://analytics.google.com/analytics/web/)

> -   🛠 [GA Checker (and others)](http://www.gachecker.com/)

-   [ ] **Search Console:** ![Low][low_img] Search Console is installed and correctly configured. It is a free service offered by Google that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results.

> -   🛠 [Search Console](https://search.google.com/search-console/about)

-   [ ] **Headings logic:** ![Medium][medium_img] Heading text helps to understand the content in the current page.

> -   🛠 [Tota11y, tab Headings](http://khan.github.io/tota11y/#Try-it)

-   [ ] **sitemap.xml:** ![High][high_img] A sitemap.xml exists and was submitted to Google Search Console (previously Google Webmaster Tools).

> -   🛠 [Sitemap generator](https://websiteseochecker.com/html-sitemap-generator/)

-   [ ] **robots.txt:** ![High][high_img] The robots.txt is not blocking webpages.

> -   📖 [The robots.txt file](https://varvy.com/robottxt.html)

> -   🛠 Test your robots.txt with [Google Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)

-   [ ] **Structured Data:** ![High][high_img] Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page.

> -   📖 [Introduction to Structured Data - Search - Google Developers](https://developers.google.com/search/docs/guides/intro-structured-data)

> -   📖 [JSON-LD](https://json-ld.org/)

> -   📖 [Microdata](https://www.w3.org/TR/microdata/)

> -   🛠 Test your page with the [Rich Results Test](https://search.google.com/test/rich-results)

> -   🛠 Complete list of vocabularies that can be used as structured data. [Schema.org Full Hierarchy](http://schema.org/docs/full.html)

-   [ ] **Sitemap HTML:** ![Medium][medium_img] An HTML sitemap is provided and is accessible via a link in the footer of your website.

> -   📖 [Sitemap guidelines - Google Support](https://support.google.com/webmasters/answer/183668?hl=en)

**[⬆ back to top](#table-of-contents)**
