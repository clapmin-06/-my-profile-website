(function () {
  'use strict';

  var EMAIL = 'hong@example.com';

  /* ---- 1. 모바일 메뉴 토글 + 메뉴 클릭 시 닫기 (스크롤은 CSS smooth + scroll-padding) ---- */
  var toggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  function setMenu(open) {
    mobileMenu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.material-symbols-outlined').textContent = open ? 'close' : 'menu';
  }
  toggle.addEventListener('click', function () {
    setMenu(!mobileMenu.classList.contains('open'));
  });
  mobileMenu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      setMenu(false);
      toggle.focus();
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) setMenu(false);
  });

  /* ---- 현재 섹션에 맞춰 메뉴 강조 ---- */
  var sections = ['home', 'about', 'projects', 'contact']
    .map(function (id) { return document.getElementById(id); });
  var links = document.querySelectorAll('.nav-link[data-section]');

  function highlight(id) {
    links.forEach(function (a) {
      var on = a.dataset.section === id;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  function onScroll() {
    var y = window.scrollY + 120;
    var current = 'home';
    sections.forEach(function (s) { if (s.offsetTop <= y) current = s.id; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = 'contact';
    highlight(current);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- 스킬 바 애니메이션 ---- */
  var bars = document.querySelectorAll('.bar i[data-width]');
  function fill(el) { el.style.width = el.dataset.width + '%'; }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { fill(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { io.observe(b); });
  } else {
    bars.forEach(fill);
  }

  /* ---- 3. 이메일: 복사 버튼 ---- */
  var copyBtn = document.getElementById('copy-email-btn');
  var copyLabel = document.getElementById('copy-btn-label');
  copyBtn.addEventListener('click', function () {
    function done(ok) {
      copyLabel.textContent = ok ? '복사 완료!' : '복사 실패 — 직접 선택해 주세요';
      setTimeout(function () { copyLabel.textContent = '이메일 복사하기'; }, 2000);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(function () { done(true); }, function () { done(false); });
    } else {
      done(false);
    }
  });

  /* ---- 3. 이메일: 폼 내용을 담아 메일 작성창(mailto) 열기 ---- */
  var form = document.getElementById('contact-form');
  var feedback = document.getElementById('form-feedback');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var from = form.elements.email.value.trim();
    var msg = form.elements.message.value.trim();

    if (!msg) {
      form.elements.message.focus();
      return;
    }
    var body = msg + '\n\n---\n' + (name ? '이름: ' + name + '\n' : '') + (from ? '회신 이메일: ' + from : '');
    var subject = '[포트폴리오] ' + (name ? name + '님의 ' : '') + '협업 문의';
    window.location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    feedback.classList.add('show');
  });
})();
