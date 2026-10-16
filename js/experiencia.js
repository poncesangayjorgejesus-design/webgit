/* Pantalla de refugio y ambientación. No altera el dashboard original. */
(() => {
  'use strict';
  // La puerta es la única pantalla de bienvenida.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const safeRoom = document.getElementById('safe-room');
  const roomOpen = document.getElementById('sr-open');
  const roomSkip = document.getElementById('sr-skip');
  const roomInstruction = document.getElementById('sr-instruction');
  let roomFinished = false;
  let roomTimer;

  function exitRoom() {
    if (roomFinished || !safeRoom) return;
    roomFinished = true;
    clearTimeout(roomTimer);
    safeRoom.classList.add('sr-completed');
    document.body.classList.remove('intro-locked');
    window.setTimeout(() => { safeRoom.hidden = true; }, reducedMotion ? 0 : 540);
  }
  function openRoom() {
    if (!safeRoom || roomFinished || safeRoom.classList.contains('sr-opening')) return;
    if (reducedMotion) { exitRoom(); return; }
    roomOpen.disabled = true;
    roomInstruction.textContent = 'CERRADURA LIBERADA // ENTRANDO';
    safeRoom.classList.add('sr-opening');
    roomTimer = window.setTimeout(exitRoom, 1350);
  }
  roomOpen?.addEventListener('click', openRoom);
  roomSkip?.addEventListener('click', exitRoom);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !roomFinished) exitRoom();
  });
  // No se abre automáticamente: el visitante elige abrir o saltar.
  roomOpen?.focus({ preventScroll: true });

  const progress = document.getElementById('scroll-progress');
  let ticking = false;
  function handleScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.setProperty('--scroll', (max > 0 ? scrollY / max * 100 : 0) + '%');
      ticking = false;
    });
  }
  addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  if (window.matchMedia('(pointer:fine)').matches && !reducedMotion) {
    addEventListener('pointermove', e => {
      document.body.style.setProperty('--mx', e.clientX + 'px');
      document.body.style.setProperty('--my', e.clientY + 'px');
    }, { passive: true });
  }
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); observer.unobserve(entry.target);
      }
    }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.hero-intro, #juegos, #dashboard, #survivors, #infected, #campanas, .ceda-footer').forEach(el => {
      el.classList.add('reveal'); observer.observe(el);
    });
  }
})();
