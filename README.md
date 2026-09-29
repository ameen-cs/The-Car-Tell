# The Car Tell — Website

A fully static, multi-page website for **The Car Tell**, an auto repair centre and tyre specialist in Randburg, Johannesburg.

## Structure

```
index.html       Home page
about.html        About / story / values
services.html     Full services list, brands strip, FAQ
contact.html      Contact form (WhatsApp), map, contact details
404.html          Custom "not found" page
css/style.css     All styling
js/main.js        Nav, scroll reveal, FAQ accordion, contact form logic
assets/logo.png            Business logo
assets/images/             Hero & page-banner photography (free-license, see credits below)
assets/images/services/    Service card photography
assets/video/              Homepage hero background video (720p desktop, 360p mobile)
```

No build tools or frameworks — just HTML, CSS and vanilla JS, so it runs as-is on GitHub Pages.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

If you want a custom domain, add it under **Settings → Pages → Custom domain** and create a `CNAME` file at the project root with that domain.

## Things to double-check before going live

- **Business hours** are shown as "Call or WhatsApp us anytime to confirm today's hours" everywhere, since exact hours weren't provided. Replace this with real opening hours in `index.html`, `contact.html` and `about.html` if you'd like them listed.
- The contact form sends enquiries via **WhatsApp** (`wa.me/27633393094`) — no backend or email service is wired up, since GitHub Pages can't run server code.
- The Google Map embed uses the address `229A Bram Fischer Drive, Randburg, 2194` — verify the pin location once live.
- Update `assets/logo.png` if you get a higher-resolution version of the logo (the current one is upscaled from your Instagram profile picture).
- The Google Map iframe can render blank in headless/automated browser previews (no GPU) — it loads normally for real visitors in a real browser, but worth a quick live check after publishing.

## Photo credits

All photos in `assets/images/` are free-to-use stock photos from Unsplash (no attribution legally required, but credited here for reference): hero and page-banner shots by Erik Mclean and Shadrach Warid; service card photos (tyre fitting, brakes, battery, suspension, puncture repair, diagnostics) by Bradikan, Lucas Cogrossi, Wesley Tingey, Ruben Ruas, and others.

The homepage hero video (`assets/video/hero-workshop*.mp4`) is a free-to-use clip from Pexels (video #8986476), with `assets/images/hero-poster.jpg` taken from its first frame. It's skipped automatically for visitors with reduced-motion or data-saver settings, who see the poster image instead.

Swap these out for real photos of your own workshop, tools and tyres whenever you have them — it'll make the site feel even more authentic, and is worth doing for the service cards in particular since that's the most visible part of the site.
