(function () {
  var WA = '5522981703634';

  var T = window.GFH_I18N || {};

  // Guarda o português original de cada texto traduzível
  var PT = { map: {}, title: document.title, stamp: '', desc: '' };
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) PT.desc = metaDesc.content;
  var stampText = document.querySelector('.stamp textPath');
  if (stampText) PT.stamp = stampText.textContent;
  var keys = T.en ? Object.keys(T.en.map) : [];
  keys.forEach(function (sel) {
    PT.map[sel] = Array.prototype.map.call(document.querySelectorAll(sel), function (el) { return el.innerHTML; });
  });
  document.querySelectorAll('[data-wa]').forEach(function (a) { a.dataset.waPt = a.getAttribute('data-wa'); });

  // WhatsApp com mensagem pronta no idioma atual
  function setWa(lang) {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      var pt = a.dataset.waPt;
      var msg = (lang !== 'pt' && T[lang] && T[lang].wa[pt]) || pt;
      a.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  // Manifesto: quebra em palavras (mantendo <em>)
  function splitWords(p) {
    var i = 0;
    function wrap(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var s = document.createElement('span');
            s.className = 'w';
            s.style.setProperty('--i', i++);
            s.textContent = part;
            frag.appendChild(s);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1) wrap(n);
      });
    }
    wrap(p);
  }

  function setLang(lang, first) {
    if (lang !== 'pt' && !T[lang]) lang = 'pt';
    var src = lang === 'pt' ? PT : T[lang];
    keys.forEach(function (sel) {
      var vals = lang === 'pt' ? PT.map[sel] : src.map[sel];
      if (!vals) return;
      document.querySelectorAll(sel).forEach(function (el, k) {
        if (vals[k] != null) el.innerHTML = vals[k];
      });
    });
    document.title = src.title;
    if (metaDesc) metaDesc.content = src.desc;
    if (stampText) stampText.textContent = src.stamp;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.documentElement.dataset.lang = lang;
    document.querySelectorAll('.words').forEach(splitWords);
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    setWa(lang);
    var ano = document.getElementById('ano');
    if (ano) ano.textContent = new Date().getFullYear();
    if (!first) { try { localStorage.setItem('gfh-lang', lang); } catch (e) {} }
  }

  var startLang = 'pt';
  var q = (location.search.match(/[?&]lang=(pt|en|es)/) || [])[1];
  if (q) startLang = q;
  else { try { startLang = localStorage.getItem('gfh-lang') || 'pt'; } catch (e) {} }
  setLang(startLang, true);
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  // Nav e botão flutuante
  var nav = document.getElementById('nav');
  var fab = document.querySelector('.fab');
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 20);
    fab.classList.toggle('is-on', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Contadores
  function count(el) {
    if (el.dataset.done) return;
    el.dataset.done = 1;
    var end = +el.dataset.count, i = 0, steps = 36;
    var t = setInterval(function () {
      i++;
      el.textContent = Math.round(end * (1 - Math.pow(1 - i / steps, 3)));
      if (i >= steps) clearInterval(t);
    }, 35);
  }
  setTimeout(function () { document.querySelectorAll('[data-count]').forEach(count); }, 900);

  // Reveal escalonado
  var groups = new Map();
  document.querySelectorAll('.rv').forEach(function (el) {
    var p = el.parentElement, n = groups.get(p) || 0;
    el.style.setProperty('--rd', Math.min(n * 0.08, 0.4) + 's');
    groups.set(p, n + 1);
  });
  var targets = document.querySelectorAll('.rv, .clip, .words');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -30px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Passos: troca de imagem (hover/clique + automático)
  var steps = document.querySelectorAll('.step');
  var imgs = document.querySelectorAll('.steps__media img');
  var stepNum = document.getElementById('stepNum');
  var cur = 0, timer;
  function setStep(n) {
    cur = n;
    steps.forEach(function (s, k) { s.classList.toggle('is-active', k === n); });
    imgs.forEach(function (im, k) { im.classList.toggle('is-on', k === n); });
    if (stepNum) stepNum.textContent = '0' + (n + 1);
  }
  function auto() { clearInterval(timer); timer = setInterval(function () { setStep((cur + 1) % steps.length); }, 3600); }
  steps.forEach(function (s, k) {
    s.addEventListener('mouseenter', function () { setStep(k); auto(); });
    s.addEventListener('click', function () { setStep(k); auto(); });
  });
  auto();

  // Carrossel de resultados (setas, arrastar e contador)
  var track = document.getElementById('track');
  var slideNum = document.getElementById('slideNum');
  function cardW() { var c = track.querySelector('.ba'); return c ? c.getBoundingClientRect().width + 22 : 400; }
  document.querySelectorAll('.ctrl__b').forEach(function (b) {
    b.addEventListener('click', function () { track.scrollBy({ left: cardW() * +b.dataset.dir, behavior: 'smooth' }); });
  });
  track.addEventListener('scroll', function () {
    var n = Math.min(track.children.length,Math.round(track.scrollLeft / cardW()) + 1);
    slideNum.textContent = '0' + n;
  }, { passive: true });
  var down = false, sx = 0, sl = 0;
  track.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; sx = e.clientX; sl = track.scrollLeft; track.classList.add('is-drag'); });
  window.addEventListener('pointermove', function (e) { if (down) track.scrollLeft = sl - (e.clientX - sx); });
  window.addEventListener('pointerup', function () { if (!down) return; down = false; track.classList.remove('is-drag'); });

  // Um FAQ aberto por vez
  var det = document.querySelectorAll('.faq details');
  det.forEach(function (d) {
    d.addEventListener('toggle', function () { if (d.open) det.forEach(function (o) { if (o !== d) o.open = false; }); });
  });

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
