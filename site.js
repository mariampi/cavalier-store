const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.add('hidden');
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.classList.toggle('hidden', expanded);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });
}

const contactForm = document.querySelector('form[action^="mailto:"]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `${contactForm.getAttribute('action')}?subject=${encodeURIComponent('Cavalier Store inquiry')}&body=${encodeURIComponent(body)}`;
  });
}

async function loadLatestJournalPost(teaser) {
  try {
    const journalUrl = new URL('journal.html', document.baseURI);
    const response = await fetch(journalUrl);
    if (!response.ok) return;

    const template = document.createElement('template');
    template.innerHTML = await response.text();
    const post = template.content.querySelector('#journal-posts > article:first-of-type');
    const photo = post?.querySelector('img[src]');
    const date = post?.querySelector('time[datetime]');
    const title = post?.querySelector('h2')?.textContent.trim();
    const excerpt = post?.querySelector('[data-journal-excerpt]')?.textContent.trim();
    if (!photo || !date || !title || !excerpt) return;

    const photoUrl = new URL(photo.getAttribute('src'), journalUrl);
    if (photoUrl.origin !== journalUrl.origin) return;

    const image = document.createElement('img');
    image.className = 'block w-full h-auto rounded-md';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.alt = photo.alt;
    image.width = photo.width;
    image.height = photo.height;
    image.src = photoUrl.href;

    const teaserDate = teaser.querySelector('time');
    teaserDate.dateTime = date.dateTime;
    teaserDate.textContent = date.textContent.trim();
    teaser.querySelector('h3').textContent = title;
    teaser.querySelector('p').textContent = excerpt;
    teaser.querySelector('[data-journal-teaser-photo]').append(image);
    teaser.hidden = false;
  } catch {
    return;
  }
}

const latestJournalPost = document.getElementById('latest-journal-post');
if (latestJournalPost) loadLatestJournalPost(latestJournalPost);

const productZoomTrigger = document.getElementById('product-zoom-trigger');
const productZoomDialog = document.getElementById('product-zoom-dialog');
if (productZoomTrigger && typeof productZoomDialog?.showModal === 'function') {
  const viewport = document.getElementById('product-zoom-viewport');
  const photo = document.getElementById('product-zoom-photo');
  const level = document.getElementById('product-zoom-level');
  const value = document.getElementById('product-zoom-value');

  productZoomTrigger.setAttribute('aria-haspopup', 'dialog');
  productZoomTrigger.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    level.value = '1';
    photo.style.width = '100%';
    level.setAttribute('aria-valuetext', '1×');
    value.value = '1×';
    productZoomDialog.showModal();
    viewport.scrollTo(0, 0);
  });

  level.addEventListener('input', () => {
    const centerX = (viewport.scrollLeft + viewport.clientWidth / 2) / photo.offsetWidth;
    const centerY = (viewport.scrollTop + viewport.clientHeight / 2) / photo.offsetHeight;
    photo.style.width = `${Number(level.value) * 100}%`;
    const zoomText = `${level.value}×`;
    level.setAttribute('aria-valuetext', zoomText);
    value.value = zoomText;
    viewport.scrollTo(
      centerX * photo.offsetWidth - viewport.clientWidth / 2,
      centerY * photo.offsetHeight - viewport.clientHeight / 2
    );
  });
}
