// Softwear Lab portfolio interactive script

// 1. Lazy loading & toggling of iframes
function toggleIframe(id, url) {
  const iframe = document.getElementById(`iframe-${id}`);
  const overlay = document.getElementById(`placeholder-${id}`);
  const wrapper = document.getElementById(`wrapper-${id}`);
  const card = document.getElementById(`card-${id}`);
  const btn = card.querySelector('.btn-embed');
  const btnText = btn.querySelector('.embed-text');
  const btnIcon = btn.querySelector('i');

  if (iframe.src === 'about:blank' || iframe.getAttribute('src') === 'about:blank') {
    // Load the iframe
    iframe.src = url;
    overlay.classList.add('loaded');
    wrapper.classList.add('active');
    btn.classList.add('active');
    btnText.textContent = 'Stop Inline';
    btnIcon.className = 'fas fa-stop';
    
    // Smooth scroll browser wrapper into view on mobile
    if (window.innerWidth < 768) {
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } else {
    // Unload the iframe to save resources
    iframe.src = 'about:blank';
    overlay.classList.remove('loaded');
    wrapper.classList.remove('active');
    btn.classList.remove('active');
    btnText.textContent = 'Run Inline';
    btnIcon.className = 'fas fa-play';
    
    // Exit fullscreen if active
    if (wrapper.classList.contains('fullscreen')) {
      toggleFullscreen(`wrapper-${id}`);
    }
  }
}

// 2. Reloading the iframe
function refreshIframe(iframeId) {
  const iframe = document.getElementById(iframeId);
  if (iframe && iframe.src !== 'about:blank') {
    const currentSrc = iframe.src;
    iframe.src = 'about:blank';
    // Small timeout to show refreshing action
    setTimeout(() => {
      iframe.src = currentSrc;
    }, 100);
  }
}

// 3. Maximizing the iframe to fullscreen inside the tab
function toggleFullscreen(wrapperId) {
  const wrapper = document.getElementById(wrapperId);
  const icon = wrapper.querySelector('.browser-actions .browser-btn i');
  
  if (wrapper.classList.contains('fullscreen')) {
    wrapper.classList.remove('fullscreen');
    icon.className = 'fas fa-expand';
    document.body.style.overflow = ''; // Restore page scrolling
  } else {
    // Make sure the iframe is loaded before going fullscreen
    const iframe = wrapper.querySelector('iframe');
    if (iframe.src === 'about:blank') {
      const toolId = wrapperId.replace('wrapper-', '');
      const dataSrc = iframe.getAttribute('data-src');
      toggleIframe(toolId, dataSrc);
    }
    
    wrapper.classList.add('fullscreen');
    icon.className = 'fas fa-compress';
    document.body.style.overflow = 'hidden'; // Stop page scrolling
  }
}

// Close fullscreen on Escape key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const fullscreens = document.querySelectorAll('.browser-wrapper.fullscreen');
    fullscreens.forEach(wrapper => {
      toggleFullscreen(wrapper.id);
    });
  }
});

// 4. Scrollspy Navigation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const options = {
    root: null,
    threshold: 0.3, // Highlight when 30% of the section is visible
    rootMargin: "-10% 0px -40% 0px"
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, options);
  
  sections.forEach(section => {
    observer.observe(section);
  });
});
