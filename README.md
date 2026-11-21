# Cavalier Store

Static storefront preview for Candy's Cavalier King Charles Store.

Live preview: https://candyscavaliers.com

## Hosting

GitHub Pages publishes `main` from `/ (root)`. The root `CNAME` sets the custom domain. Relative page and asset URLs work from the custom domain. `.nojekyll` disables Jekyll processing. Pushes to `main` publish automatically after the Pages build succeeds.

The previous FTP workflow is retained for manual use only; it does not run on pushes. The old server address exists only in repository secrets, so its availability has not been confirmed.

## Preview limitations

- Shop prices are samples, and store checkout is not configured. The Affiliate page links to Amazon for current pricing and availability.
- Newsletter signup is not connected.
- Contact opens an email draft addressed to `hello@candyscavaliers.com`.
- Styling, icon fonts, and web fonts currently depend on external services.
- The sample phone number and fabricated organization metadata have been removed.

## Photo slots

Home and Shop photos are in `images/products/`. The earlier Affiliate concept images are retained in the repository. The live Affiliate cards use text until photos of the specific products are available.

| Page | Status | Files |
| --- | --- | --- |
| Home | Available | `collection-apparel.jpg`, `collection-accessories.jpg`, `collection-home-goods.jpg` |
| Shop | Available | `dog-mom-life-tee.jpg`, `cavalier-dad-tee.jpg`, `cavalier-love-tee.jpg`, `spaniel-style-shirt.jpg` |
| Affiliate | Unused concepts | `premium-dog-collar.jpg`, `small-dog-walking-harness.jpg`, `comfy-dog-bed.jpg`, `interactive-pet-toy.jpg` |

## Local preview

Run `python -m http.server 8000`, then open http://localhost:8000.

## Next phase

Review the restored site before modernizing the design for HolfeSolutions demos. Confirm branding, product assets, contact/social destinations, and whether this remains a demo or becomes a transactional store.
