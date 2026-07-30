const GALLERY_DATA = [
  {
    id: 'nature-1',
    title: 'Alpine Sunrise Glow',
    category: 'Nature',
    src: 'images/nature_mountain.jpg',
    date: '2026-06-12',
    camera: 'Sony Alpha A7R V',
    lens: 'FE 24-70mm f/2.8 GM II',
    exposure: 'f/8, 1/250s',
    iso: '100',
    location: 'Swiss Alps, Switzerland',
    tags: ['mountain', 'sunrise', 'fog', 'alps', 'golden hour'],
    description: 'A breathtaking sunrise over foggy alpine mountain peaks bathed in golden sunlight.'
  },
  {
    id: 'nature-2',
    title: 'Enchanted Redwood Canopy',
    category: 'Nature',
    src: 'images/nature_forest.jpg',
    date: '2026-05-24',
    camera: 'Canon EOS R5',
    lens: 'RF 15-35mm f/2.8L IS USM',
    exposure: 'f/5.6, 1/125s',
    iso: '200',
    location: 'Redwood National Park, CA',
    tags: ['forest', 'sunbeams', 'trees', 'nature', 'mist'],
    description: 'Sunbeams piercing through majestic redwood trees creating atmospheric light rays.'
  },
  {
    id: 'architecture-1',
    title: 'Futuristic Skyscraper Geometry',
    category: 'Architecture',
    src: 'images/architecture_skyscraper.jpg',
    date: '2026-04-18',
    camera: 'Nikon Z9',
    lens: 'NIKKOR Z 14-24mm f/2.8 S',
    exposure: 'f/11, 1/320s',
    iso: '64',
    location: 'Tokyo, Japan',
    tags: ['skyscraper', 'architecture', 'glass', 'modern', 'lines'],
    description: 'Low-angle architectural perspective of glass and steel skyscraper facades reflecting sky.'
  },
  {
    id: 'architecture-2',
    title: 'Cyber Twilight Suspension Bridge',
    category: 'Architecture',
    src: 'images/architecture_bridge.jpg',
    date: '2026-07-02',
    camera: 'Fujifilm GFX 100 II',
    lens: 'GF 23mm f/4 R LM WR',
    exposure: 'f/14, 15s (Long Exposure)',
    iso: '100',
    location: 'Hong Kong Harbor',
    tags: ['bridge', 'night', 'long exposure', 'city lights', 'water'],
    description: 'Long exposure night photograph of an illuminated cable-stayed suspension bridge over harbor.'
  },
  {
    id: 'abstract-1',
    title: 'Neon Ribbon Symphony',
    category: 'Abstract',
    src: 'images/abstract_neon.jpg',
    date: '2026-06-30',
    camera: 'Digital Render 3D',
    lens: 'Octane Render Engine',
    exposure: 'Raytraced 4K',
    iso: 'N/A',
    location: 'Digital Realm',
    tags: ['neon', '3d art', 'abstract', 'magenta', 'cyan', 'waves'],
    description: 'Vibrant glowing 3D neon ribbon waves flowing gracefully over dark obsidian backdrop.'
  },
  {
    id: 'abstract-2',
    title: 'Cosmic Marble Fluid Art',
    category: 'Abstract',
    src: 'images/abstract_fluid.jpg',
    date: '2026-05-10',
    camera: 'Sony Alpha A7 IV',
    lens: 'FE 90mm f/2.8 Macro G OSS',
    exposure: 'f/4, 1/500s',
    iso: '400',
    location: 'Studio Art Lab',
    tags: ['fluid art', 'marble', 'acrylic', 'turquoise', 'gold'],
    description: 'Macro fluid art photograph showcasing swirling turquoise, violet, and metallic gold textures.'
  },
  {
    id: 'nature-3',
    title: 'Emerald Lake Reflection',
    category: 'Nature',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    date: '2026-03-14',
    camera: 'Canon EOS R6 Mark II',
    lens: 'RF 24-105mm f/4L IS USM',
    exposure: 'f/8, 1/160s',
    iso: '100',
    location: 'Yosemite Valley, USA',
    tags: ['lake', 'reflection', 'mountains', 'yosemite', 'water'],
    description: 'Crystal clear emerald lake mirroring granite mountain cliffs during serene sunset.'
  },
  {
    id: 'architecture-3',
    title: 'Spiral Geometry Atrium',
    category: 'Architecture',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    date: '2026-02-28',
    camera: 'Leica SL2',
    lens: 'Super-Vario-Elmar-SL 16-35mm',
    exposure: 'f/5.6, 1/60s',
    iso: '800',
    location: 'Berlin Museum, Germany',
    tags: ['spiral', 'staircase', 'minimalist', 'interior', 'white'],
    description: 'Minimalist white spiral staircase viewed from directly below, creating hypnotic circles.'
  },
  {
    id: 'wildlife-1',
    title: 'Snowy Red Fox Portrait',
    category: 'Wildlife',
    src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80',
    date: '2026-01-15',
    camera: 'Nikon Z8',
    lens: 'NIKKOR Z 400mm f/4.5 VR S',
    exposure: 'f/4.5, 1/1000s',
    iso: '500',
    location: 'Hokkaido, Japan',
    tags: ['fox', 'snow', 'wildlife', 'winter', 'portrait'],
    description: 'Vibrant red fox standing gracefully amidst falling snowflakes in a silent winter woodland.'
  },
  {
    id: 'wildlife-2',
    title: 'Majestic Eagle in Flight',
    category: 'Wildlife',
    src: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-05',
    camera: 'Sony Alpha A1',
    lens: 'FE 600mm f/4 GM OSS',
    exposure: 'f/4, 1/2500s',
    iso: '640',
    location: 'Alaska Fjords, USA',
    tags: ['eagle', 'bird', 'flight', 'wings', 'wildlife'],
    description: 'Detailed action photo capturing a bald eagle gliding with fully outstretched wings.'
  },
  {
    id: 'portraits-1',
    title: 'Neon Cyberpunk Silhouette',
    category: 'Portraits',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    date: '2026-06-19',
    camera: 'Fujifilm X-T5',
    lens: 'XF 56mm f/1.2 R WR',
    exposure: 'f/1.2, 1/160s',
    iso: '320',
    location: 'Shinjuku Neon District',
    tags: ['portrait', 'neon', 'cyberpunk', 'lighting', 'model'],
    description: 'Dramatic urban portrait with magenta and cyan neon rim lighting reflecting off model face.'
  },
  {
    id: 'portraits-2',
    title: 'Golden Hour Bokeh Portrait',
    category: 'Portraits',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    date: '2026-07-11',
    camera: 'Canon EOS R3',
    lens: 'RF 85mm f/1.2L USM',
    exposure: 'f/1.2, 1/2000s',
    iso: '100',
    location: 'Florence, Italy',
    tags: ['portrait', 'golden hour', 'bokeh', 'warm', 'smile'],
    description: 'Warm natural light portrait with soft creamy background bokeh during sunset hour.'
  }
];

const state = {
  currentCategory: 'all',
  searchQuery: '',
  showFavOnly: false,
  layoutMode: 'grid',
  activeFx: 'fx-none',
  theme: localStorage.getItem('lumina_theme') || 'dark',
  favorites: new Set(JSON.parse(localStorage.getItem('lumina_favs') || '[]')),
  visibleImages: [],
  currentIndex: 0,
  isSlideshowRunning: false,
  slideshowTimer: null,
  zoomLevel: 1.0,
  isInfoPanelOpen: false,
  touchStartX: 0,
  touchEndX: 0
};

const elements = {
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  gridModeBtn: document.getElementById('gridModeBtn'),
  masonryModeBtn: document.getElementById('masonryModeBtn'),
  categoryFilters: document.getElementById('categoryFilters'),
  fxButtons: document.querySelectorAll('.fx-btn'),
  galleryGrid: document.getElementById('galleryGrid'),
  emptyState: document.getElementById('emptyState'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  visibleCount: document.getElementById('visibleCount'),
  totalCount: document.getElementById('totalCount'),
  favOnlyCheckbox: document.getElementById('favOnlyCheckbox'),
  favCount: document.getElementById('favCount'),

  lightboxModal: document.getElementById('lightboxModal'),
  lightboxOverlay: document.getElementById('lightboxOverlay'),
  lbCloseBtn: document.getElementById('lbCloseBtn'),
  lbTitle: document.getElementById('lbTitle'),
  lbCategory: document.getElementById('lbCategory'),
  lbMainImage: document.getElementById('lbMainImage'),
  lbImgWrapper: document.getElementById('lbImgWrapper'),
  lbSpinner: document.getElementById('lbSpinner'),
  lbPrevBtn: document.getElementById('lbPrevBtn'),
  lbNextBtn: document.getElementById('lbNextBtn'),
  lbSlideshowBtn: document.getElementById('lbSlideshowBtn'),
  lbZoomInBtn: document.getElementById('lbZoomInBtn'),
  lbZoomOutBtn: document.getElementById('lbZoomOutBtn'),
  lbZoomLevel: document.getElementById('lbZoomLevel'),
  lbFavBtn: document.getElementById('lbFavBtn'),
  lbDownloadBtn: document.getElementById('lbDownloadBtn'),
  lbInfoToggleBtn: document.getElementById('lbInfoToggleBtn'),
  lbInfoPanel: document.getElementById('lbInfoPanel'),
  closeInfoPanelBtn: document.getElementById('closeInfoPanelBtn'),
  lbCounter: document.getElementById('lbCounter'),
  thumbnailStrip: document.getElementById('thumbnailStrip'),
  slideshowProgress: document.getElementById('slideshowProgress'),

  lbDescription: document.getElementById('lbDescription'),
  exifDimensions: document.getElementById('exifDimensions'),
  exifCamera: document.getElementById('exifCamera'),
  exifLens: document.getElementById('exifLens'),
  exifExposure: document.getElementById('exifExposure'),
  exifIso: document.getElementById('exifIso'),
  exifLocation: document.getElementById('exifLocation'),
  lbTagsContainer: document.getElementById('lbTagsContainer')
};

function initApp() {
  applyTheme(state.theme);
  updateCategoryBadges();
  updateFavCountUI();
  renderGallery();
  bindEvents();
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('lumina_theme', theme);
}

function updateCategoryBadges() {
  const counts = { all: GALLERY_DATA.length };

  GALLERY_DATA.forEach(img => {
    counts[img.category] = (counts[img.category] || 0) + 1;
  });

  document.querySelectorAll('.filter-pill').forEach(pill => {
    const cat = pill.dataset.category;
    const badge = pill.querySelector('.badge');
    if (badge) {
      badge.textContent = counts[cat] || counts[cat.toLowerCase()] || 0;
    }
  });

  elements.totalCount.textContent = GALLERY_DATA.length;
}

function updateFavCountUI() {
  elements.favCount.textContent = state.favorites.size;
  localStorage.setItem('lumina_favs', JSON.stringify(Array.from(state.favorites)));
}

function filterGalleryData() {
  return GALLERY_DATA.filter(item => {
    if (state.currentCategory !== 'all' && item.category !== state.currentCategory) {
      return false;
    }
    if (state.showFavOnly && !state.favorites.has(item.id)) {
      return false;
    }
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchLocation = item.location.toLowerCase().includes(q);
      const matchTags = item.tags.some(tag => tag.toLowerCase().includes(q));
      const matchDesc = item.description.toLowerCase().includes(q);
      return matchTitle || matchCategory || matchLocation || matchTags || matchDesc;
    }
    return true;
  });
}

function renderGallery() {
  state.visibleImages = filterGalleryData();
  elements.visibleCount.textContent = state.visibleImages.length;

  if (state.visibleImages.length === 0) {
    elements.galleryGrid.innerHTML = '';
    elements.emptyState.classList.remove('hidden');
    return;
  } else {
    elements.emptyState.classList.add('hidden');
  }

  elements.galleryGrid.innerHTML = state.visibleImages.map((img, index) => {
    const isFav = state.favorites.has(img.id);
    return `
      <article class="image-card" data-id="${img.id}" data-index="${index}">
        <div class="card-img-wrapper">
          <img class="card-img" src="${img.src}" alt="${img.title}" loading="lazy">
          <div class="card-overlay">
            <div class="overlay-top">
              <span class="category-tag">${img.category}</span>
              <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" data-id="${img.id}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </button>
            </div>
            <div class="overlay-bottom">
              <h3 class="card-title">${img.title}</h3>
              <div class="card-meta">
                <span>📍 ${img.location.split(',')[0]}</span>
                <span>📷 ${img.camera.split(' ')[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function openLightbox(index) {
  if (state.visibleImages.length === 0) return;

  state.currentIndex = index;
  state.zoomLevel = 1.0;
  state.isInfoPanelOpen = false;

  elements.lightboxModal.classList.add('active');
  elements.lbInfoPanel.classList.remove('active');
  document.body.style.overflow = 'hidden';

  updateLightboxContent();
  renderThumbnailStrip();
  elements.lightboxModal.focus();
}

function closeLightbox() {
  elements.lightboxModal.classList.remove('active');
  document.body.style.overflow = '';
  stopSlideshow();
}

function updateLightboxContent() {
  const item = state.visibleImages[state.currentIndex];
  if (!item) return;

  state.zoomLevel = 1.0;
  applyZoom();

  elements.lbImgWrapper.classList.add('loading');
  elements.lbMainImage.style.opacity = '0';

  const tempImg = new Image();
  tempImg.src = item.src;
  tempImg.onload = () => {
    elements.lbMainImage.src = item.src;
    elements.lbMainImage.alt = item.title;
    elements.lbMainImage.style.opacity = '1';
    elements.lbImgWrapper.classList.remove('loading');
    elements.exifDimensions.textContent = `${tempImg.naturalWidth} × ${tempImg.naturalHeight} px`;
  };

  elements.lbTitle.textContent = item.title;
  elements.lbCategory.textContent = item.category;

  const isFav = state.favorites.has(item.id);
  const heartSvg = elements.lbFavBtn.querySelector('.icon-heart');
  if (isFav) {
    heartSvg.setAttribute('fill', 'currentColor');
    elements.lbFavBtn.style.color = 'var(--favorite-red)';
  } else {
    heartSvg.setAttribute('fill', 'none');
    elements.lbFavBtn.style.color = '#ffffff';
  }

  elements.lbDownloadBtn.href = item.src;
  elements.lbDownloadBtn.setAttribute('download', `${item.title.toLowerCase().replace(/\s+/g, '-')}.jpg`);
  elements.lbCounter.textContent = `${state.currentIndex + 1} / ${state.visibleImages.length}`;

  elements.lbDescription.textContent = item.description;
  elements.exifCamera.textContent = item.camera;
  elements.exifLens.textContent = item.lens;
  elements.exifExposure.textContent = item.exposure;
  elements.exifIso.textContent = item.iso;
  elements.exifLocation.textContent = item.location;

  elements.lbTagsContainer.innerHTML = item.tags.map(t => `<span class="tag-chip">#${t}</span>`).join('');

  updateActiveThumbnail();
}

function nextImage() {
  if (state.visibleImages.length === 0) return;
  state.currentIndex = (state.currentIndex + 1) % state.visibleImages.length;
  updateLightboxContent();
}

function prevImage() {
  if (state.visibleImages.length === 0) return;
  state.currentIndex = (state.currentIndex - 1 + state.visibleImages.length) % state.visibleImages.length;
  updateLightboxContent();
}

function applyZoom() {
  elements.lbMainImage.style.transform = `scale(${state.zoomLevel})`;
  elements.lbZoomLevel.textContent = `${Math.round(state.zoomLevel * 100)}%`;
}

function zoomIn() {
  if (state.zoomLevel < 3.0) {
    state.zoomLevel += 0.25;
    applyZoom();
  }
}

function zoomOut() {
  if (state.zoomLevel > 0.5) {
    state.zoomLevel -= 0.25;
    applyZoom();
  }
}

function toggleSlideshow() {
  if (state.isSlideshowRunning) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

function startSlideshow() {
  state.isSlideshowRunning = true;
  elements.lbSlideshowBtn.querySelector('.icon-play').classList.add('hidden');
  elements.lbSlideshowBtn.querySelector('.icon-pause').classList.remove('hidden');

  let step = 0;
  const totalSteps = 35;
  elements.slideshowProgress.style.width = '0%';

  state.slideshowTimer = setInterval(() => {
    step++;
    elements.slideshowProgress.style.width = `${(step / totalSteps) * 100}%`;

    if (step >= totalSteps) {
      step = 0;
      elements.slideshowProgress.style.width = '0%';
      nextImage();
    }
  }, 100);
}

function stopSlideshow() {
  state.isSlideshowRunning = false;
  clearInterval(state.slideshowTimer);
  elements.slideshowProgress.style.width = '0%';

  elements.lbSlideshowBtn.querySelector('.icon-play').classList.remove('hidden');
  elements.lbSlideshowBtn.querySelector('.icon-pause').classList.add('hidden');
}

function renderThumbnailStrip() {
  elements.thumbnailStrip.innerHTML = state.visibleImages.map((img, i) => `
    <div class="thumb-item ${i === state.currentIndex ? 'active' : ''}" data-index="${i}">
      <img src="${img.src}" alt="${img.title}">
    </div>
  `).join('');
}

function updateActiveThumbnail() {
  const thumbs = elements.thumbnailStrip.querySelectorAll('.thumb-item');
  thumbs.forEach((t, idx) => {
    if (idx === state.currentIndex) {
      t.classList.add('active');
      t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } else {
      t.classList.remove('active');
    }
  });
}

function bindEvents() {
  elements.themeToggleBtn.addEventListener('click', () => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.length > 0) {
      elements.searchInput.parentElement.classList.add('has-text');
    } else {
      elements.searchInput.parentElement.classList.remove('has-text');
    }
    renderGallery();
  });

  elements.clearSearchBtn.addEventListener('click', () => {
    elements.searchInput.value = '';
    state.searchQuery = '';
    elements.searchInput.parentElement.classList.remove('has-text');
    renderGallery();
  });

  elements.categoryFilters.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;

    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    state.currentCategory = pill.dataset.category;
    renderGallery();
  });

  elements.fxButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.fxButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const fx = btn.dataset.fx;
      elements.galleryGrid.className = `gallery-grid ${state.layoutMode}-mode ${fx}`;
    });
  });

  elements.gridModeBtn.addEventListener('click', () => {
    elements.gridModeBtn.classList.add('active');
    elements.masonryModeBtn.classList.remove('active');
    state.layoutMode = 'grid';
    const activeFxBtn = document.querySelector('.fx-btn.active');
    const currentFx = activeFxBtn ? activeFxBtn.dataset.fx : 'fx-none';
    elements.galleryGrid.className = `gallery-grid grid-mode ${currentFx}`;
  });

  elements.masonryModeBtn.addEventListener('click', () => {
    elements.masonryModeBtn.classList.add('active');
    elements.gridModeBtn.classList.remove('active');
    state.layoutMode = 'masonry';
    const activeFxBtn = document.querySelector('.fx-btn.active');
    const currentFx = activeFxBtn ? activeFxBtn.dataset.fx : 'fx-none';
    elements.galleryGrid.className = `gallery-grid masonry-mode ${currentFx}`;
  });

  elements.favOnlyCheckbox.addEventListener('change', (e) => {
    state.showFavOnly = e.target.checked;
    renderGallery();
  });

  elements.resetFiltersBtn.addEventListener('click', () => {
    state.currentCategory = 'all';
    state.searchQuery = '';
    state.showFavOnly = false;
    elements.searchInput.value = '';
    elements.favOnlyCheckbox.checked = false;

    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.category === 'all');
    });

    renderGallery();
  });

  elements.galleryGrid.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.card-fav-btn');
    if (favBtn) {
      e.stopPropagation();
      const id = favBtn.dataset.id;
      if (state.favorites.has(id)) {
        state.favorites.delete(id);
      } else {
        state.favorites.add(id);
      }
      updateFavCountUI();
      renderGallery();
      return;
    }

    const card = e.target.closest('.image-card');
    if (card) {
      const index = parseInt(card.dataset.index, 10);
      openLightbox(index);
    }
  });

  elements.lbCloseBtn.addEventListener('click', closeLightbox);
  elements.lightboxOverlay.addEventListener('click', closeLightbox);
  elements.lbNextBtn.addEventListener('click', nextImage);
  elements.lbPrevBtn.addEventListener('click', prevImage);
  elements.lbZoomInBtn.addEventListener('click', zoomIn);
  elements.lbZoomOutBtn.addEventListener('click', zoomOut);
  elements.lbSlideshowBtn.addEventListener('click', toggleSlideshow);

  elements.lbFavBtn.addEventListener('click', () => {
    const item = state.visibleImages[state.currentIndex];
    if (!item) return;

    if (state.favorites.has(item.id)) {
      state.favorites.delete(item.id);
    } else {
      state.favorites.add(item.id);
    }
    updateFavCountUI();
    updateLightboxContent();
    renderGallery();
  });

  elements.lbInfoToggleBtn.addEventListener('click', () => {
    elements.lbInfoPanel.classList.toggle('active');
  });
  elements.closeInfoPanelBtn.addEventListener('click', () => {
    elements.lbInfoPanel.classList.remove('active');
  });

  elements.thumbnailStrip.addEventListener('click', (e) => {
    const thumb = e.target.closest('.thumb-item');
    if (thumb) {
      const idx = parseInt(thumb.dataset.index, 10);
      state.currentIndex = idx;
      updateLightboxContent();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!elements.lightboxModal.classList.contains('active')) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        nextImage();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case ' ':
        e.preventDefault();
        toggleSlideshow();
        break;
      case '+':
      case '=':
        zoomIn();
        break;
      case '-':
        zoomOut();
        break;
      case 'i':
      case 'I':
        elements.lbInfoPanel.classList.toggle('active');
        break;
    }
  });

  elements.lbImgWrapper.addEventListener('touchstart', (e) => {
    state.touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  elements.lbImgWrapper.addEventListener('touchend', (e) => {
    state.touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const threshold = 50;
    if (state.touchEndX < state.touchStartX - threshold) {
      nextImage();
    }
    if (state.touchEndX > state.touchStartX + threshold) {
      prevImage();
    }
  }
}

document.addEventListener('DOMContentLoaded', initApp);
