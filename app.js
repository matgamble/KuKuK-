(function () {
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  // Termine
  var tl = document.getElementById('termine-liste');
  var termine = (window.TERMINE || []).slice().sort(function (a, b) { return a.datum < b.datum ? -1 : 1; });
  if (!termine.length) {
    tl.innerHTML = '<p class="empty">Die nächsten Termine folgen in Kürze. Schauen Sie gern bald wieder vorbei.</p>';
  } else {
    var today = new Date().toISOString().slice(0, 10);
    tl.innerHTML = termine.map(function (t) {
      var d = new Date(t.datum + 'T12:00:00');
      var tag = d.toLocaleDateString('de-DE', { weekday: 'short' });
      var past = t.datum < today ? ' past' : '';
      return '<article class="termin' + past + '">' +
        '<div class="date"><span class="day">' + d.getDate() + '</span><span class="mon">' +
        d.toLocaleDateString('de-DE', { month: 'short' }) + '</span></div>' +
        '<div class="info"><h3>' + esc(t.titel) + '</h3>' +
        '<p class="meta">' + esc(tag) + (t.zeit ? ' · ' + esc(t.zeit) + ' Uhr' : '') + (t.ort ? ' · ' + esc(t.ort) : '') + '</p>' +
        (t.beschreibung ? '<p>' + esc(t.beschreibung) + '</p>' : '') + '</div></article>';
    }).join('');
  }

  // Galerie
  var g = document.getElementById('galerie');
  var medien = window.MEDIEN || [];
  if (!medien.length) {
    g.innerHTML = '<p class="empty">Hier erscheinen bald Eindrücke aus unseren KuKuK-Einheiten.</p>';
  } else {
    g.className = 'gallery';
    g.innerHTML = medien.map(function (m, i) {
      if (m.typ === 'video') {
        return '<figure class="vid"><video controls preload="metadata" playsinline' + (m.poster ? ' poster="' + esc(m.poster) + '"' : '') +
          '><source src="' + esc(m.datei) + '" type="video/mp4"></video>' +
          '<button type="button" class="fs-btn">⛶ Vollbild</button>' +
          (m.text ? '<figcaption>' + esc(m.text) + '</figcaption>' : '') + '</figure>';
      }
      return '<figure><button type="button" class="thumb" data-i="' + i + '"><img loading="lazy" src="' + esc(m.datei) +
        '" alt="' + esc(m.text || 'Foto aus dem KuKuK-Projekt') + '"></button>' +
        (m.text ? '<figcaption>' + esc(m.text) + '</figcaption>' : '') + '</figure>';
    }).join('');
  }

  // Lightbox
  var lb = document.getElementById('lightbox');
  var content = lb.querySelector('.lb-content');
  function open(i) {
    var m = medien[i];
    content.innerHTML = '<img src="' + esc(m.datei) + '" alt="' + esc(m.text || '') + '">' +
      (m.text ? '<p>' + esc(m.text) + '</p>' : '');
    lb.hidden = false;
  }
  function close() { lb.hidden = true; content.innerHTML = ''; }
  g.addEventListener('click', function (e) {
    var f = e.target.closest('.fs-btn');
    if (f) {
      var v = f.closest('figure').querySelector('video');
      if (v.requestFullscreen) v.requestFullscreen();
      else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
      else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
      v.play();
      return;
    }
    var b = e.target.closest('.thumb');
    if (b) open(+b.dataset.i);
  });
  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target.classList.contains('close')) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
