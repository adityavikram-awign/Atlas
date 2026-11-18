(function () {
  "use strict";

  var LANGS = ["en", "hi", "kn", "mr"];
  var NAMES = { en: "English", hi: "हिन्दी", kn: "ಕನ್ನಡ", mr: "मराठी" };

  // English opens first; a language picked from the menu lasts for this tab.
  var lang = null;
  try { lang = sessionStorage.getItem("atlas_lang"); } catch (e) {}
  if (LANGS.indexOf(lang) === -1) lang = "en";

  var tab = "p0";

  function t() { return I18N[lang]; }
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function rupees(n) { return "₹" + n.toLocaleString("en-IN"); }
  function svg(paths, sw) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) +
      '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + "</svg>";
  }

  var CHECK = svg('<polyline points="20 6 9 17 4 12"/>', 2.6);
  var CROSS = svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>', 2.6);
  var FLAG = svg('<path d="M4 21V4"/><path d="M4 4h12l-2 4 2 4H4"/>', 2.4);
  var CHEV = svg('<polyline points="6 9 12 15 18 9"/>', 2.2);
  var ARROW = svg('<path d="M7 17L17 7M8 7h9v9"/>', 2.2);
  var DOWNLOAD = svg('<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>', 2.2);
  var DOC = svg('<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>', 2);
  var WA = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.35A10 10 0 1012 2zm0 1.9a8.1 8.1 0 11-4.2 15l-.3-.18-2.6.7.7-2.55-.2-.31A8.1 8.1 0 0112 3.9zm-3.6 3.7c-.17 0-.45.06-.68.31-.23.25-.9.87-.9 2.12s.92 2.46 1.05 2.63c.13.17 1.8 2.86 4.42 3.9 2.18.86 2.62.69 3.1.64.47-.04 1.5-.61 1.72-1.2.21-.6.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.12s-.65.82-.8.99c-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.38-.44.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.37-.77-1.87-.2-.49-.4-.42-.55-.43h-.47z"/></svg>';

  // One icon per eligibility item, in order.
  var ELIG_ICONS = [
    '<rect x="7" y="2" width="10" height="20" rx="2.5"/><line x1="11" y1="18" x2="13" y2="18"/>',
    '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
    '<path d="M4 13a8 8 0 0116 0"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M4 13v3M20 13v3"/>',
    '<path d="M7 11V6a2 2 0 014 0v5"/><path d="M11 10V5a2 2 0 014 0v6"/><path d="M15 10a2 2 0 014 0v4a7 7 0 01-7 7h-1a7 7 0 01-6-3l-2.5-4a2 2 0 013.3-2.2L7 14"/>',
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    '<path d="M4 20h16"/><path d="M6 20V9l6-5 6 5v11"/><path d="M9 13h6"/>',
    '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h9"/>',
  ];

  /* ---------------- renderers ---------------- */

  function renderLangs() {
    $("lang-select").innerHTML = LANGS.map(function (l) {
      return '<option value="' + l + '" lang="' + l + '"' + (l === lang ? " selected" : "") + ">" + NAMES[l] + "</option>";
    }).join("");
  }

  function renderText() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t()[el.getAttribute("data-i18n")];
      if (typeof v === "string") el.textContent = v;
    });
    $("theme-btn").setAttribute("aria-label", t().themeLabel);
  }

  function joinButton(size) {
    var cls = "btn btn--wa" + (size ? " btn--" + size : "");
    if (CONFIG.GROUP_URL) {
      return '<a class="' + cls + '" href="' + esc(CONFIG.GROUP_URL) + '" target="_blank" rel="noopener" onclick="track(\'join_group\')">' +
        WA + "<span>" + esc(t().heroCta) + "</span></a>";
    }
    return '<span class="' + cls + ' is-off" aria-disabled="true">' + WA + "<span>" + esc(t().groupSoon) + "</span></span>";
  }

  function linkButton(url, label, icon, ev) {
    return '<a class="btn btn--primary" href="' + esc(url) + '" target="_blank" rel="noopener" onclick="track(\'' + ev + '\')">' +
      icon + "<span>" + esc(label) + "</span>" + ARROW + "</a>";
  }

  function renderJoin() {
    document.querySelectorAll(".js-join").forEach(function (el) { el.innerHTML = joinButton("lg"); });
  }

  function renderChips() {
    $("chips").innerHTML = t().chips.map(function (c) { return "<li>" + CHECK + "<span>" + esc(c) + "</span></li>"; }).join("");
  }

  function renderCalc() {
    var h = +$("calc-h").value;
    $("calc-hv").textContent = h;
    $("calc-day").textContent = rupees(h * CONFIG.RATE);
    $("calc-30").textContent = rupees(h * CONFIG.RATE * 30);
    $("calc-h").style.setProperty("--p", ((h - 1) / 4) * 100 + "%");
  }

  function renderSteps() {
    $("steps").innerHTML = t().steps.map(function (s, i) {
      var body = "<h3>" + esc(s.t) + "</h3>";
      if (s.d) body += "<p>" + esc(s.d) + "</p>";
      if (s.list) body += '<ul class="step__list">' + s.list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
      if (i === 0) body += '<div class="step__act">' + joinButton() + "</div>";
      if (i === 1) body += '<div class="step__act">' + linkButton(CONFIG.AWIGN_APP_URL, t().btnApp, DOWNLOAD, "awign_app") + "</div>";
      if (i === 3) body += '<div class="step__act">' + linkButton(CONFIG.OFFER_LETTER_URL, t().btnOffer, DOC, "offer_letter") + "</div>";
      if (i === 6) {
        body += '<figure class="phone"><div class="phone__frame"><video id="login-video" controls playsinline preload="metadata"></video></div>' +
          "<figcaption>" + esc(t().appVideoCap) + "</figcaption></figure>";
      }
      return '<li class="step"><span class="step__n">' + (i + 1) + '</span><div class="step__b">' + body + "</div></li>";
    }).join("");

    var v = $("login-video");
    v.src = CONFIG.VIDEO_LOGIN;
    v.addEventListener("play", function () { track("login_video_play"); }, { once: true });
  }

  function renderAbout() {
    $("about-tags").innerHTML = t().aboutTags.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
  }

  function renderElig() {
    $("elig").innerHTML = t().elig.map(function (e, i) {
      return '<li class="elig__i"><span class="elig__ic">' + svg(ELIG_ICONS[i], 1.8) + "</span><div><h4>" +
        esc(e.t) + "</h4><p>" + esc(e.d) + "</p></div></li>";
    }).join("");
  }

  function renderList(id, items, icon) {
    $(id).innerHTML = items.map(function (x) { return "<li>" + icon + "<span>" + esc(x) + "</span></li>"; }).join("");
  }

  function renderReasons() {
    var n = 0;
    function group(title, items) {
      return '<h4 class="rgroup">' + esc(title) + "</h4>" + items.map(function (r) {
        n++;
        return '<details class="r"><summary><span class="r__n">' + n + '</span><span class="r__t">' + esc(r.t) +
          "</span>" + CHEV + "</summary><p>" + esc(r.d) + "</p></details>";
      }).join("");
    }
    function panel(id, sub, task, cam, icon) {
      n = 0;
      $(id).innerHTML = '<p class="rpanel__sub">' + icon + "<span>" + esc(sub) + "</span></p>" +
        group(t().grpTask, task) + group(t().grpCamera, cam);
    }
    panel("p0", t().p0Sub, t().p0Task, t().p0Camera, CROSS);
    panel("p1", t().p1Sub, t().p1Task, t().p1Camera, FLAG);

    var c0 = t().p0Task.length + t().p0Camera.length;
    var c1 = t().p1Task.length + t().p1Camera.length;
    $("tab-p0").innerHTML = CROSS + "<span>" + esc(t().p0Title) + '</span><span class="tab__c">' + c0 + "</span>";
    $("tab-p1").innerHTML = FLAG + "<span>" + esc(t().p1Title) + '</span><span class="tab__c">' + c1 + "</span>";
    showTab(tab);
  }

  function showTab(id) {
    tab = id;
    ["p0", "p1"].forEach(function (k) {
      $("tab-" + k).setAttribute("aria-selected", k === id ? "true" : "false");
      $(k).hidden = k !== id;
    });
  }

  function renderPay() {
    renderList("pay-points", t().payPoints, CHECK);
  }

  function renderFaq() {
    $("faq-list").innerHTML = t().faq.map(function (f) {
      return '<details class="qa"><summary><span>' + esc(f.q) + "</span>" + CHEV + "</summary><p>" + esc(f.a) + "</p></details>";
    }).join("");
  }

  function renderFooter() {
    $("f-awign").href = CONFIG.AWIGN_URL;
    $("f-app").href = CONFIG.AWIGN_APP_URL;
    if (CONFIG.GROUP_URL) $("f-group").href = CONFIG.GROUP_URL;
    else $("f-group-li").hidden = true;

    var icons = {
      instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none"/></svg>',
      facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"/></svg>',
      twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.2L5.9 22H3.1l7-8L2 2h6.2l4.3 5.7L18.2 2zm-1 18h1.6L7.9 3.7H6.2L17.2 20z"/></svg>',
    };
    $("social").innerHTML = Object.keys(icons).filter(function (k) { return CONFIG.SOCIAL[k]; }).map(function (k) {
      return '<a href="' + esc(CONFIG.SOCIAL[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' + icons[k] + "</a>";
    }).join("");
  }

  function renderAll() {
    renderLangs();
    renderText();
    renderChips();
    renderCalc();
    renderJoin();
    renderSteps();
    renderAbout();
    renderElig();
    renderList("do-list", t().do, CHECK);
    renderList("dont-list", t().dont, CROSS);
    renderReasons();
    renderPay();
    renderFaq();
    renderFooter();
  }

  function setLang(next) {
    if (next === lang || LANGS.indexOf(next) === -1) return;
    lang = next;
    try { sessionStorage.setItem("atlas_lang", next); } catch (e) {}
    renderAll();
    track("lang_switch", { lang: next });
  }

  function toggleTheme() {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("atlas_theme", next); } catch (e) {}
    track("theme_switch", { theme: next });
  }

  window.track = function (name, props) {
    if (!CONFIG.ANALYTICS_ENDPOINT) return;
    var payload = Object.assign({ event: name, ts: Date.now(), lang: lang }, props || {});
    fetch(CONFIG.ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(function () {});
  };

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    $("lang-select").addEventListener("change", function (e) { setLang(e.target.value); });
    $("theme-btn").addEventListener("click", toggleTheme);
    $("calc-h").addEventListener("input", renderCalc);
    $("tab-p0").addEventListener("click", function () { showTab("p0"); });
    $("tab-p1").addEventListener("click", function () { showTab("p1"); });
    track("page_view");
  });
})();
