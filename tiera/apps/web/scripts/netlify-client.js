/* Tiera static site behaviour (Netlify preview). Replaces React: ~3 KB, no dependencies. */
(function () {
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function json(id) { var el = document.getElementById(id); try { return el ? JSON.parse(el.textContent) : null; } catch (e) { return null; } }

  // Owner photos: hide any that failed to load so the designed fallback shows
  $$("img[data-photo]").forEach(function (img) {
    function hide() { img.style.display = "none"; }
    if (img.complete && img.naturalWidth === 0) hide(); else img.addEventListener("error", hide);
  });

  // Language chips
  var voice = json("voice-data");
  if (voice) {
    $$("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var code = btn.getAttribute("data-lang"), ex = voice[code];
        if (!ex) return;
        $$("[data-lang]").forEach(function (b) {
          var on = b === btn;
          b.setAttribute("aria-pressed", on ? "true" : "false");
          b.style.border = "1px solid " + (on ? "#E9D3A0" : "#2B3C3E");
          b.style.background = on ? "#E9D3A0" : "transparent";
          b.style.color = on ? "#0B1416" : "#F4F2EC";
        });
        var v = $("[data-voice]"), r = $("[data-reply]");
        if (v) { v.textContent = "“" + ex.said + "” · 0:06"; v.lang = code; }
        if (r) { r.textContent = ex.reply; r.lang = code; }
      });
    });
  }

  // Pricing toggle (figures computed by the engine at build time)
  var prices = json("price-data");
  if (prices) {
    $$("[data-billing]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-billing"), d = prices[mode];
        $$("[data-billing]").forEach(function (b) {
          var on = b === btn;
          b.setAttribute("aria-pressed", on ? "true" : "false");
          b.style.background = on ? "#C8A45D" : "transparent";
          b.style.color = on ? "#0B1416" : "#A9B7B3";
        });
        $$("[data-price]").forEach(function (el) { el.textContent = d[el.getAttribute("data-price")]; });
        $$("[data-perday]").forEach(function (el) { el.textContent = d.perDay[el.getAttribute("data-perday")]; });
        $$("[data-per]").forEach(function (el) { el.textContent = d.per; });
      });
    });
  }

  // Hero phone tilt (desktop, mouse only)
  var stage = $("[data-tilt]"), inner = $("[data-tilt-inner]");
  if (stage && inner && !reduced) {
    var raf = 0;
    stage.addEventListener("mousemove", function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        var r = stage.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        inner.style.transform = "perspective(2000px) rotateX(" + (-py * 9).toFixed(2) + "deg) rotateY(" + (px * 12).toFixed(2) + "deg)";
      });
    });
    stage.addEventListener("mouseleave", function () { inner.style.transform = "perspective(2000px) rotateX(0deg) rotateY(0deg)"; });
  }

  // Mobile sticky bar hides while the form is on screen
  var sticky = $("[data-sticky]"), join = document.getElementById("join");
  if (sticky && join && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      var hide = es[0] && es[0].isIntersecting;
      sticky.style.transform = hide ? "translateY(110%)" : "none";
      sticky.style.opacity = hide ? "0" : "1";
      sticky.style.pointerEvents = hide ? "none" : "auto";
      sticky.setAttribute("aria-hidden", hide ? "true" : "false");
    }, { threshold: 0.05 }).observe(join);
  }

  // Pilot sign-up: same rules as apps/web/lib/signup.ts, submitted to Netlify Forms
  function normalise(raw) {
    var d = String(raw).replace(/[\s\-().]/g, "");
    if (d.charAt(0) === "+") d = d.slice(1);
    if (!/^\d+$/.test(d)) return null;
    if (d.indexOf("234") === 0) d = d.slice(3); else if (d.charAt(0) === "0") d = d.slice(1);
    return /^[789][01]\d{8}$/.test(d) ? "+234" + d : null;
  }
  function success(form, first) {
    var box = document.createElement("div");
    box.setAttribute("role", "status");
    box.className = "t-card";
    box.style.cssText = "flex:1 1 400px;min-width:0;padding:36px;border-radius:32px;background:linear-gradient(180deg,rgba(20,32,33,.92),rgba(10,17,18,.95));border:1px solid rgba(130,220,188,.35);box-shadow:0 40px 120px rgba(0,0,0,.55);display:flex;flex-direction:column;gap:12px";
    box.innerHTML = '<p style="margin:0;font-family:var(--font-instrument-serif),\'Instrument Serif\',serif;font-size:34px;line-height:1.1">You’re on the list.</p><p style="margin:0;font-size:16px;line-height:1.6;color:#A9B7B3"></p>';
    box.lastChild.textContent = (first ? "Thank you, " + first + ". " : "") + "We’ll message you on WhatsApp within a few days.";
    form.parentNode.replaceChild(box, form);
    box.focus && box.setAttribute("tabindex", "-1"), box.focus();
  }
  var form = $("form[data-signup]");
  if (form) {
    if (/[?&]joined=1/.test(location.search)) success(form, "");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      $$("[data-err]", form).forEach(function (n) { n.remove(); });
      var errs = {}, name = form.elements.name, phone = form.elements.whatsapp, type = form.elements.businessType, consent = form.elements.consent;
      var nm = name.value.trim().replace(/\s+/g, " ");
      if (nm.length < 2) errs.name = "Please tell us your name.";
      var ph = normalise(phone.value);
      if (!ph) errs.whatsapp = "Enter a Nigerian WhatsApp number, like 0803 123 4567.";
      if (!type.value) errs.businessType = "Pick the closest business type.";
      if (!consent.checked) errs.consent = "We need your OK to contact you on WhatsApp.";
      [name, phone, type, consent].forEach(function (f) {
        var msg = errs[f.name];
        f.setAttribute("aria-invalid", msg ? "true" : "false");
        if (f !== consent) f.style.borderColor = msg ? "#F08A80" : "#2B3C3E";
        if (msg) {
          var s = document.createElement("span");
          s.setAttribute("data-err", ""); s.id = f.name + "-err"; s.style.cssText = "font-size:13px;color:#F08A80";
          s.textContent = msg; f.setAttribute("aria-describedby", s.id);
          (f === consent ? f.closest("label") : f).insertAdjacentElement("afterend", s);
        }
      });
      if (Object.keys(errs).length) { var first = form.querySelector('[aria-invalid="true"]'); first && first.focus(); return; }
      if (form.elements.company && form.elements.company.value) { success(form, ""); return; }
      phone.value = ph; name.value = nm;
      var btn = form.querySelector('button[type="submit"]'); btn.disabled = true; btn.textContent = "Saving…";
      var body = new URLSearchParams(new FormData(form)).toString();
      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body })
        .then(function (r) { if (!r.ok) throw new Error(r.status); success(form, nm.split(" ")[0]); })
        .catch(function () {
          btn.disabled = false; btn.textContent = "Join the Lagos pilot";
          var s = document.createElement("span"); s.setAttribute("data-err", ""); s.setAttribute("role", "alert");
          s.style.cssText = "font-size:13px;color:#F08A80"; s.textContent = "Something went wrong. Please try again, or message us on WhatsApp.";
          btn.insertAdjacentElement("beforebegin", s);
        });
    });
  }
})();
