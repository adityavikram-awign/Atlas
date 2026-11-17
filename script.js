(function () {
  "use strict";

  var LANGS = ["en", "hi", "kn", "mr"];
  var NAMES = { en: ["English", "EN"], hi: ["हिन्दी", "हि"], kn: ["ಕನ್ನಡ", "ಕ"], mr: ["मराठी", "म"] };

  // English opens first; a language picked with the toggle lasts for this tab.
  var lang = null;
  try { lang = sessionStorage.getItem("atlas_lang"); } catch (e) {}
  if (LANGS.indexOf(lang) === -1) lang = "en";

  var answered = [];
  var revealObserver = null;
  var revealFallback = null;

  // Only hide-then-reveal when we can drive it; otherwise content just shows.
  var animEnabled =
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (animEnabled) document.documentElement.classList.add("anim");

  function t() { return I18N[lang]; }
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var CHECK = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  var CROSS = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  var WA = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.35A10 10 0 1012 2zm0 1.9a8.1 8.1 0 11-4.2 15l-.3-.18-2.6.7.7-2.55-.2-.31A8.1 8.1 0 0112 3.9zm-3.6 3.7c-.17 0-.45.06-.68.31-.23.25-.9.87-.9 2.12s.92 2.46 1.05 2.63c.13.17 1.8 2.86 4.42 3.9 2.18.86 2.62.69 3.1.64.47-.04 1.5-.61 1.72-1.2.21-.6.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.12s-.65.82-.8.99c-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.38-.44.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.37-.77-1.87-.2-.49-.4-.42-.55-.43h-.47z"/></svg>';
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
    $("lang-seg").innerHTML = LANGS.map(function (l) {
      return '<button type="button" lang="' + l + '" class="' + (l === lang ? "on" : "") + '" onclick="setLang(\'' + l + '\')">' +
        '<span class="l-full">' + NAMES[l][0] + '</span><span class="l-short">' + NAMES[l][1] + "</span></button>";
    }).join("");
  }

  function renderText() {
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var v = t()[nodes[i].getAttribute("data-i18n")];
      if (typeof v === "string") nodes[i].textContent = v;
    }
    $("theme-btn").setAttribute("aria-label", t().themeLabel);
  }

  // The join button: a real link once CONFIG.GROUP_URL is set.
  function renderJoin() {
    var html = CONFIG.GROUP_URL
      ? '<a class="btn btn--wa btn--lg" href="' + esc(CONFIG.GROUP_URL) + '" target="_blank" rel="noopener" onclick="track(\'join_group\')">' + WA + esc(t().heroCta) + "</a>"
      : '<span class="btn btn--wa btn--lg is-off" aria-disabled="true">' + WA + esc(t().groupSoon) + "</span>";
    document.querySelectorAll(".js-join").forEach(function (el) { el.innerHTML = html; });
  }

  function renderGlance() {
    $("glance").innerHTML = t().glance.map(function (g) {
      return "<div><dt>" + esc(g[0]) + "</dt><dd>" + esc(g[1]) + "</dd></div>";
    }).join("");
  }

  function renderAbout() {
    $("about-tags").innerHTML = t().aboutTags.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
  }

  function renderElig() {
    $("elig").innerHTML = t().elig.map(function (e, i) {
      return '<li class="elig__i card card--spot rv"><span class="elig__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
        ELIG_ICONS[i] + '</svg></span><div><h3>' + esc(e.t) + "</h3><p>" + esc(e.d) + "</p></div></li>";
    }).join("");
  }

  function renderList(id, items, icon) {
    $(id).innerHTML = items.map(function (x) { return "<li>" + icon + "<span>" + esc(x) + "</span></li>"; }).join("");
  }

  function renderReasons() {
    function group(title, items, start) {
      return '<h4 class="rlist__g">' + esc(title) + "</h4><ol start=\"" + start + '">' + items.map(function (r, i) {
        return '<li><span class="rlist__n">' + (start + i) + "</span><div><b>" + esc(r.t) + "</b><p>" + esc(r.d) + "</p></div></li>";
      }).join("") + "</ol>";
    }
    function panel(id, title, sub, task, cam, icon) {
      $(id).innerHTML =
        '<div class="rlist__head"><span class="rlist__ic">' + icon + "</span><div><h3>" + esc(title) + "</h3><p>" + esc(sub) + "</p></div></div>" +
        group(t().grpTask, task, 1) + group(t().grpCamera, cam, task.length + 1);
    }
    panel("p0", t().p0Title, t().p0Sub, t().p0Task, t().p0Camera, CROSS);
    panel("p1", t().p1Title, t().p1Sub, t().p1Task, t().p1Camera,
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V4"/><path d="M4 4h12l-2 4 2 4H4"/></svg>');
  }

  function renderPay() {
    renderList("pay-points", t().payPoints, CHECK);
  }

  function renderAppSteps() {
    $("app-steps").innerHTML = t().appSteps.map(function (s, i) {
      return '<div class="stp"><div class="stp__n">' + (i + 1) + "</div><div><h3>" + esc(s.t) + "</h3><p>" + esc(s.d) + "</p>" +
        (i === 1 ? '<div class="stp__extra js-join"></div>' : "") + "</div></div>";
    }).join("");
  }

  function renderVideo() {
    var v = $("login-video");
    if (!v.getAttribute("src")) {
      // "#t=0.1" makes phones paint the first frame instead of a black box.
      v.setAttribute("src", CONFIG.VIDEO_LOGIN + "#t=0.1");
      v.addEventListener("play", function () { track("login_video_play"); }, { once: true });
    }
  }

  /* ---------------- quiz ---------------- */

  function renderQuiz() {
    var host = $("quiz");
    host.innerHTML = "";
    answered = new Array(t().quiz.length).fill(false);
    t().quiz.forEach(function (item, qi) {
      var block = document.createElement("div");
      block.className = "qq card card--edge card--spot rv";
      block.innerHTML = '<p class="qq__t">' + (qi + 1) + ". " + esc(item.q) + '</p><div class="qq__opts">' +
        [t().yes, t().no].map(function (label, oi) {
          return '<button type="button" class="qq__opt" data-o="' + oi + '">' + esc(label) + "</button>";
        }).join("") + '</div><p class="qq__fb">' + esc(item.feedback) + "</p>";
      block.querySelectorAll(".qq__opt").forEach(function (b) {
        b.addEventListener("click", function () { answer(qi, +b.getAttribute("data-o"), block); });
      });
      host.appendChild(block);
    });
    meter();
  }

  function answer(qi, oi, block) {
    var item = t().quiz[qi];
    var btns = block.querySelectorAll(".qq__opt");
    var right = oi === item.correct;
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      if (i === item.correct) btns[i].classList.add("ok");
      if (i === oi && !right) btns[i].classList.add("no");
    }
    block.querySelector(".qq__fb").classList.add("show");
    if (!answered[qi]) {
      answered[qi] = true;
      meter();
      track("quiz_answer", { q: qi + 1, first_try_correct: right });
    }
    if (!right) {
      setTimeout(function () {
        for (var i = 0; i < btns.length; i++) {
          btns[i].disabled = false;
          btns[i].classList.remove("ok", "no");
        }
      }, 1200);
    }
  }

  function meter() {
    var total = answered.length, done = answered.filter(Boolean).length;
    $("q-count").textContent = done + "/" + total;
    $("q-fill").style.width = (total ? (done / total) * 100 : 0) + "%";
    if (total && done === total) track("quiz_complete");
  }

  function renderFaq() {
    $("faq-list").innerHTML = t().faq.map(function (f) {
      return '<details class="card rv"><summary>' + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>";
    }).join("");
  }

  /* ---------------- polish ---------------- */

  function wireSpotlights() {
    document.querySelectorAll(".card--spot").forEach(function (card) {
      if (card.dataset.spotWired) return;
      card.dataset.spotWired = "1";
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      });
    });
  }

  function wireReveals() {
    if (!animEnabled) return;
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    document.querySelectorAll(".rv:not(.in)").forEach(function (el) { revealObserver.observe(el); });
    // Safety net: a background tab never reports intersections, so show
    // everything rather than leave the page blank.
    clearTimeout(revealFallback);
    revealFallback = setTimeout(function () {
      if (!document.querySelector(".rv.in")) document.querySelectorAll(".rv").forEach(function (el) { el.classList.add("in"); });
    }, 2000);
  }

  function renderAll() {
    renderLangs();
    renderText();
    renderGlance();
    renderAbout();
    renderElig();
    renderList("do-list", t().do, CHECK);
    renderList("dont-list", t().dont, CROSS);
    renderReasons();
    renderPay();
    renderAppSteps();
    renderJoin();
    renderVideo();
    renderQuiz();
    renderFaq();
    wireSpotlights();
    wireReveals();
  }

  window.setLang = function (next) {
    if (next === lang || LANGS.indexOf(next) === -1) return;
    lang = next;
    try { sessionStorage.setItem("atlas_lang", next); } catch (e) {}
    renderAll();
    track("lang_switch", { lang: next });
  };

  window.toggleTheme = function () {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    // Suppress transitions for one frame, or colours that resolve from
    // custom properties get stuck on their old value.
    root.classList.add("theming");
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("atlas_theme", next); } catch (e) {}
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.remove("theming"); }); });
    track("theme_switch", { theme: next });
  };

  window.track = function (name, props) {
    var payload = Object.assign({ event: name, ts: Date.now(), lang: lang }, props || {});
    if (CONFIG.ANALYTICS_ENDPOINT) {
      fetch(CONFIG.ANALYTICS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(function () {});
    } else {
      console.log("[track]", payload);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    track("page_view");
  });
})();
