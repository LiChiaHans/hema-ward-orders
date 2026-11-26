(function () {
  const data = window.WARD_DATA;
  if (!data) return;

  let activeCommonCat = "all";
  let toastTimer = null;

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderBadges(badges) {
    if (!badges || !badges.length) return "";
    return `<span class="badge-row">${badges
      .map((b) => `<span class="badge badge-${b.type}">${escapeHtml(b.text)}</span>`)
      .join("")}</span>`;
  }

  function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast("已複製醫囑：" + text.slice(0, 36) + (text.length > 36 ? "…" : "")),
        () => fallbackCopy(text)
      );
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast("已複製醫囑");
    } catch {
      showToast("複製失敗，請手動選取");
    }
    document.body.removeChild(ta);
  }

  // 1. Render 12D Common Orders
  function renderCommonOrders() {
    const tbody = document.getElementById("common-orders-body");
    tbody.innerHTML = data.commonOrders
      .map((item) => {
        const hiddenByCat = activeCommonCat !== "all" && item.cat !== activeCommonCat;
        return `
          <tr class="searchable-row ${item.isDischarge ? "discharge-row" : ""} ${hiddenByCat ? "hidden" : ""}" data-cat="${item.cat}">
            <td class="indication-cell">${escapeHtml(item.indication)}</td>
            <td class="subcat-cell">${escapeHtml(item.subcat)}</td>
            <td>
              <span class="drug-name">${escapeHtml(item.drug)}</span>
              ${renderBadges(item.badges)}
            </td>
            <td>
              <div class="order-cell-wrap">
                <div>
                  <div class="order-code">${escapeHtml(item.order)}</div>
                  ${item.special ? `<span class="order-special">${escapeHtml(item.special)}</span>` : ""}
                </div>
                <button class="copy-btn-mini" type="button" data-copy="${escapeHtml(item.copyText)}">複製</button>
              </div>
            </td>
          </tr>
        `;
      })
      .join("");
  }

  // 2. Render Breakthrough N/V
  function renderNvOrders() {
    const tbody = document.getElementById("nv-orders-body");
    tbody.innerHTML = data.nvOrders
      .map(
        (item) => `
          <tr class="searchable-row">
            <td class="indication-cell">${escapeHtml(item.form)}</td>
            <td>
              ${
                item.selfpay
                  ? `<span class="badge badge-selfpay">自費$</span>`
                  : `<span class="badge badge-teal">健保</span>`
              }
            </td>
            <td>
              <span class="drug-name">${escapeHtml(item.drug)}</span>
              ${renderBadges(item.badges)}
            </td>
            <td>
              <div class="order-cell-wrap">
                <div>
                  <div class="order-code">${escapeHtml(item.order)}</div>
                  ${item.special ? `<span class="order-special">${escapeHtml(item.special)}</span>` : ""}
                </div>
                <button class="copy-btn-mini" type="button" data-copy="${escapeHtml(item.copyText)}">複製</button>
              </div>
            </td>
          </tr>
        `
      )
      .join("");
  }

  // 3. Render Admission & TDM
  function renderAdmissionAndTdm() {
    const admList = document.getElementById("admission-list");
    admList.innerHTML = data.admissionOrders
      .map(
        (item) => `
          <div class="adm-item searchable-item">
            <div class="adm-item-top">
              <span class="adm-item-title">${escapeHtml(item.title)}</span>
              <button class="copy-btn-mini" type="button" data-copy="${escapeHtml(item.copyText)}">複製</button>
            </div>
            <div class="adm-item-order">${escapeHtml(item.order)}</div>
            ${item.note ? `<div class="adm-item-note">${escapeHtml(item.note)}</div>` : ""}
          </div>
        `
      )
      .join("");

    const tdmBody = document.getElementById("tdm-body");
    tdmBody.innerHTML = data.tdmOrders
      .map(
        (item) => `
          <tr class="searchable-row">
            <td class="indication-cell">${item.name}</td>
            <td>${item.timing}</td>
            <td>${item.path}</td>
          </tr>
        `
      )
      .join("");
  }

  // 4. Render 12D Lock Recipes
  function renderLockRecipes() {
    const tbody = document.getElementById("lock-body");
    tbody.innerHTML = data.lockRecipes
      .map(
        (item) => `
          <tr class="searchable-row">
            <td class="indication-cell">${item.drug}</td>
            <td><span class="badge badge-info">${escapeHtml(item.conc)}</span></td>
            <td>
              <div class="order-cell-wrap">
                <div>
                  <div class="order-code">${item.orderHtml || escapeHtml(item.order)}</div>
                  <span class="order-special">${escapeHtml(item.special)}</span>
                </div>
                <button class="copy-btn-mini" type="button" data-copy="${escapeHtml(item.copyText)}">複製</button>
              </div>
            </td>
            <td>${item.prepHtml}</td>
          </tr>
        `
      )
      .join("");
  }

  // 5. Render Reference Tables
  function renderReferenceTables() {
    document.getElementById("ref-alt-tw-body").innerHTML = data.refAltTw
      .map(
        (r) => `
          <tr class="searchable-row">
            <td class="subcat-cell">${escapeHtml(r.group)}</td>
            <td class="indication-cell">${escapeHtml(r.drug)}</td>
            <td>${r.diluent === "LR" ? `<span class="lr-alert">LR</span>` : escapeHtml(r.diluent)}</td>
            <td><strong>${escapeHtml(r.conc)}</strong></td>
            <td>${escapeHtml(r.heparin)}</td>
            <td>${escapeHtml(r.dwell)}</td>
            <td class="muted-note">${escapeHtml(r.ref)}</td>
          </tr>
        `
      )
      .join("");

    document.getElementById("ref-icj-body").innerHTML = data.refIcj
      .map(
        (r) => `
          <tr class="searchable-row">
            <td class="indication-cell">${escapeHtml(r.drug)}</td>
            <td><strong>${escapeHtml(r.dose)}</strong></td>
            <td>${escapeHtml(r.heparin)}</td>
            <td>${escapeHtml(r.dwell)}</td>
          </tr>
        `
      )
      .join("");

    document.getElementById("ref-uptodate-body").innerHTML = data.refUptodate
      .map(
        (r) => `
          <tr class="searchable-row">
            <td class="subcat-cell">${escapeHtml(r.spectrum)}</td>
            <td class="indication-cell">${escapeHtml(r.drug)}</td>
            <td><strong>${escapeHtml(r.conc)}</strong></td>
            <td>${escapeHtml(r.heparin)}</td>
            <td>${escapeHtml(r.dwell)}</td>
            <td class="muted-note">${escapeHtml(r.ref)}</td>
          </tr>
        `
      )
      .join("");
  }

  // G-CSF Calculator
  function setupGcsfCalc() {
    const input = document.getElementById("gcsf-weight");
    const output = document.getElementById("gcsf-result");

    input.addEventListener("input", () => {
      const w = parseFloat(input.value);
      if (!w || w <= 0) {
        output.textContent = "輸入體重即可計算建議劑量（5 mcg/kg，臨床取整數開立）。";
        return;
      }
      const rawDose = w * 5;
      const rounded75 = Math.round(rawDose / 75) * 75;
      const amps300 = Math.floor(rounded75 / 300);
      const rem75 = (rounded75 % 300) / 75;
      const comboParts = [];
      if (amps300 > 0) comboParts.push(`300 mcg × ${amps300} amp`);
      if (rem75 > 0) comboParts.push(`75 mcg × ${rem75} amp`);
      const comboText = comboParts.length ? comboParts.join(" + ") : "75 mcg × 1 amp";

      output.innerHTML = `
        <strong>計算值：</strong>${rawDose.toFixed(0)} mcg/day（5 mcg/kg × ${w} kg）→
        <strong>建議取整：</strong><span style="color: var(--teal-text); font-weight: 700;">${Math.max(75, rounded75)} mcg SC QN</span>
        （參考組合：${comboText}）
      `;
    });
  }

  // Ribavirin Calculator
  function setupRibavirinCalc() {
    const weightEl = document.getElementById("riba-weight");
    const renalEl = document.getElementById("riba-renal");
    const outEl = document.getElementById("riba-output");

    function update() {
      const w = parseFloat(weightEl.value);
      const renal = renalEl.value;

      if (!w || w < 30) {
        outEl.innerHTML = "請輸入有效成人總體重（≥ 30 kg）。";
        return;
      }

      let dose = "";
      let note = "依據 Total Body Weight (TBW) 計算。";

      if (renal === "crcl_50") {
        if (w < 40) {
          dose = "低於 40 kg：請洽感染科／藥師個別化評估";
        } else if (w < 50) {
          dose = "400 mg PO q12h";
        } else if (w < 60) {
          dose = "400 mg PO qAM PLUS 600 mg PO qPM";
        } else if (w < 70) {
          dose = "600 mg PO q12h";
        } else if (w < 80) {
          dose = "600 mg PO qAM PLUS 800 mg PO qPM";
        } else if (w < 90) {
          dose = "800 mg PO q12h";
        } else {
          dose = "600 mg PO q8h";
        }
      } else if (renal === "crcl_30_49") {
        if (w < 40) {
          dose = "低於 40 kg：請洽感染科／藥師個別化評估";
        } else if (w < 60) {
          dose = "200 mg PO q12h";
        } else {
          dose = "200 mg PO q8h";
        }
      } else if (renal === "crcl_10_29") {
        dose = "200 mg PO daily";
      } else if (renal === "crcl_lt10") {
        dose = "200 mg PO daily";
        note = "CrCl < 10 mL/min：建議照會 ID / ASP pharmacist 確認。";
      } else if (renal === "ihd") {
        dose = "200 mg PO daily";
        note = "透析日請於血液透析後給藥（give dose afterwards）。";
      } else if (renal === "crrt") {
        if (w < 40) {
          dose = "低於 40 kg：請洽感染科／藥師個別化評估";
        } else if (w < 60) {
          dose = "200 mg PO q12h";
        } else {
          dose = "200 mg PO q8h";
        }
        note = "Continuous Hemodialysis (CRRT) 建議劑量。";
      }

      outEl.innerHTML = `
        <div class="order-cell-wrap">
          <div>
            <div>建議 Ribavirin (RSV) 劑量：<span class="dose-big">${escapeHtml(dose)}</span></div>
            <div class="muted-note" style="margin-top: 2px;">${escapeHtml(note)}</div>
          </div>
          <button class="copy-btn-mini" type="button" data-copy="Ribavirin ${escapeHtml(dose)}">複製劑量</button>
        </div>
      `;
    }

    weightEl.addEventListener("input", update);
    renalEl.addEventListener("change", update);
    update();
  }

  // Global Search
  function setupSearch() {
    const input = document.getElementById("search-input");
    const clearX = document.getElementById("clear-search-x");
    const summary = document.getElementById("search-summary");
    const termDisplay = document.getElementById("search-term-display");
    const countEl = document.getElementById("search-count");
    const resetBtn = document.getElementById("reset-search-btn");

    function applySearch() {
      const q = input.value.trim().toLowerCase();
      clearX.classList.toggle("hidden", !q);

      const rows = document.querySelectorAll(".searchable-row, .searchable-item");
      if (!q) {
        rows.forEach((el) => el.classList.remove("search-hidden"));
        summary.classList.add("hidden");
        renderCommonOrders(); // restore category filter
        return;
      }

      // When searching, temporarily show all categories in common orders
      document.querySelectorAll("#common-orders-body tr").forEach((tr) => tr.classList.remove("hidden"));

      let matches = 0;
      rows.forEach((el) => {
        const hit = el.textContent.toLowerCase().includes(q);
        el.classList.toggle("search-hidden", !hit);
        if (hit) matches++;
      });

      termDisplay.textContent = input.value.trim();
      countEl.textContent = matches;
      summary.classList.remove("hidden");
    }

    input.addEventListener("input", applySearch);
    clearX.addEventListener("click", () => {
      input.value = "";
      applySearch();
      input.focus();
    });
    resetBtn.addEventListener("click", () => {
      input.value = "";
      applySearch();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
      } else if (e.key === "Escape" && document.activeElement === input) {
        input.value = "";
        applySearch();
        input.blur();
      }
    });
  }

  // Category filter for Common Orders
  function setupCommonFilter() {
    const bar = document.getElementById("common-filter");
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      activeCommonCat = btn.dataset.cat;
      bar.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
      renderCommonOrders();
    });
  }

  // Tabs for ALT reference tables
  function setupTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab;
        tabBtns.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle("active", isActive);
          b.setAttribute("aria-selected", String(isActive));
        });
        panels.forEach((p) => p.classList.toggle("active", p.id === target));
      });
    });
  }

  // Nav pill scrollspy
  function setupScrollSpy() {
    const pills = document.querySelectorAll(".nav-pill");
    const sections = Array.from(pills).map((p) => document.getElementById(p.dataset.target)).filter(Boolean);

    pills.forEach((p) => {
      p.addEventListener("click", () => {
        pills.forEach((x) => x.classList.toggle("active", x === p));
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            pills.forEach((p) => p.classList.toggle("active", p.dataset.target === id));
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // Theme Toggle
  function setupTheme() {
    const btn = document.getElementById("theme-toggle");
    const saved = localStorage.getItem("hema-ward-theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("hema-ward-theme", next);
    });
  }

  // Copy delegation
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    copyText(btn.getAttribute("data-copy"));
  });

  // Init
  renderCommonOrders();
  renderNvOrders();
  renderAdmissionAndTdm();
  renderLockRecipes();
  renderReferenceTables();
  setupGcsfCalc();
  setupRibavirinCalc();
  setupCommonFilter();
  setupSearch();
  setupTabs();
  setupScrollSpy();
  setupTheme();
})();
