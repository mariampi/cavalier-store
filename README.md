# Cavalier Store

Static storefront preview for Candy's Cavalier King Charles Store.

Live preview: https://mariampi.github.io/cavalier-store/

## Hosting

GitHub Pages publishes `main` from `/ (root)`. Relative page and asset URLs support the repository subpath and a future custom domain. `.nojekyll` disables Jekyll processing. Pushes to `main` publish automatically after the Pages build succeeds.

The previous FTP workflow is retained for manual use only; it does not run on pushes. The old server address exists only in repository secrets, so its availability has not been confirmed.

## Preview limitations

- Product photos are pending and prices are samples. Checkout and affiliate destinations are not configured.
- Newsletter signup is not connected.
- Contact opens an email draft using the existing address, `velocityvendmall@gmail.com`; ownership/delivery still need verification.
- Styling, icon fonts, and web fonts currently depend on external services.
- The unconfigured domain, sample phone number, and fabricated organization metadata have been removed.

## Photo slots

Add the following JPEGs to `images/products/`. The pages already reference these filenames and display the local photo-pending illustration until each file is supplied. Use landscape photos for collections and square photos for product cards.

| Page | Files needed |
| --- | --- |
| Home | `collection-apparel.jpg`, `collection-accessories.jpg`, `collection-home-goods.jpg` |
| Shop | `dog-mom-life-tee.jpg`, `cavalier-dad-tee.jpg`, `cavalier-love-tee.jpg`, `spaniel-style-shirt.jpg` |
| Affiliate | `premium-dog-collar.jpg`, `small-dog-walking-harness.jpg`, `comfy-dog-bed.jpg`, `interactive-pet-toy.jpg` |

## Local preview

Run `python -m http.server 8000`, then open http://localhost:8000.

## Next phase

Review the restored site before modernizing the design for HolfeSolutions demos. Confirm branding, product assets, contact/social destinations, and whether this remains a demo or becomes a transactional store. Later, add a custom domain in GitHub Pages settings and configure its DNS.
