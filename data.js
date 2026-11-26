window.WARD_DATA = {
  commonOrders: [
    // 痔瘡
    {
      cat: "hemorrhoid",
      indication: "痔瘡",
      subcat: "坐浴",
      drug: "Sindine Aque Soln 10% 200 mL/btl",
      badges: [],
      order: "1 XX AS ORDER",
      special: "特殊醫囑：sitz bath",
      copyText: "Sindine Aque Soln 10% 200 mL/btl 1 XX AS ORDER (特殊醫囑: sitz bath)"
    },
    {
      cat: "hemorrhoid",
      indication: "痔瘡",
      subcat: "藥膏",
      drug: "High-Xylmol Ointment 15 g/tube",
      badges: [{ text: "含類固醇", type: "amber" }],
      order: "1 XX AS ORDER",
      special: "",
      copyText: "High-Xylmol Ointment 15 g/tube 1 XX AS ORDER"
    },
    {
      cat: "hemorrhoid",
      indication: "痔瘡",
      subcat: "藥膏",
      drug: "Benazon Oint 20 g/tube",
      badges: [],
      order: "1 XX AS ORDER",
      special: "",
      copyText: "Benazon Oint 20 g/tube 1 XX AS ORDER"
    },
    {
      cat: "hemorrhoid",
      indication: "痔瘡",
      subcat: "藥膏",
      drug: "Better Iodine Oint 10% 10 g/tube",
      badges: [],
      order: "1 XX AS ORDER",
      special: "",
      copyText: "Better Iodine Oint 10% 10 g/tube 1 XX AS ORDER"
    },
    // 漱口
    {
      cat: "oral",
      indication: "漱口",
      subcat: "一般",
      drug: "N.S. Irrigation (YF) @ 0.9% 500 mL/btl",
      badges: [{ text: "可含漱", type: "teal" }],
      order: "500 mL GA QD",
      special: "",
      copyText: "N.S. Irrigation (YF) @ 0.9% 500 mL/btl 500 mL GA QD"
    },
    {
      cat: "oral",
      indication: "漱口",
      subcat: "一般",
      drug: "Corol Oral Rinse Soln 0.12% 250 mL/btl",
      badges: [{ text: "自費$", type: "selfpay" }],
      order: "10-15 mL GA Q6HPRN",
      special: "",
      copyText: "Corol Oral Rinse Soln 0.12% 250 mL/btl 10-15 mL GA Q6HPRN"
    },
    {
      cat: "oral",
      indication: "漱口",
      subcat: "止痛",
      drug: "Xylocaine for local anesthesia 2% 20 mL/vial",
      badges: [{ text: "常備藥", type: "info" }],
      order: "20 mL GA QD",
      special: "in 可含漱（混合生理食鹽水漱口）",
      copyText: "Xylocaine for local anesthesia 2% 20 mL/vial 20 mL GA QD (in可含漱)"
    },
    // 口腔止痛噴霧
    {
      cat: "oral",
      indication: "口腔止痛噴霧",
      subcat: "噴霧",
      drug: "Comfflam Forte Throat Spray 3 mg/1 mL 0.3% 30 mL/btl",
      badges: [],
      order: "2 puff AP Q4-6H",
      special: "",
      copyText: "Comfflam Forte Throat Spray 0.3% 2 puff AP Q4-6H"
    },
    // 口內膏
    {
      cat: "oral",
      indication: "口內膏",
      subcat: "口內膏",
      drug: "Mundisal Gel 8.7% 10 g/tube",
      badges: [{ text: "不含類固醇", type: "teal" }],
      order: "1 XX AS ORDER",
      special: "",
      copyText: "Mundisal Gel 8.7% 10 g/tube 1 XX AS ORDER"
    },
    {
      cat: "oral",
      indication: "口內膏",
      subcat: "口內膏",
      drug: "Nincort Oral Gel 0.1% 6 g/tube",
      badges: [],
      order: "1 XX AS ORDER",
      special: "",
      copyText: "Nincort Oral Gel 0.1% 6 g/tube 1 XX AS ORDER"
    },
    {
      cat: "oral",
      indication: "口內膏",
      subcat: "口內膏",
      drug: "Dexa Orabase 0.1% 5 g/tube",
      badges: [],
      order: "1 XX AS ORDER",
      special: "",
      copyText: "Dexa Orabase 0.1% 5 g/tube 1 XX AS ORDER"
    },
    // 止嗝
    {
      cat: "symptom",
      indication: "止嗝",
      subcat: "口服",
      drug: "Winsumin F.C. 50 mg/tab",
      badges: [],
      order: "0.25-0.5 tab PO TIDPRN",
      special: "",
      copyText: "Winsumin F.C. 50 mg/tab 0.25-0.5 tab PO TIDPRN"
    },
    // 輸血預防
    {
      cat: "symptom",
      indication: "輸血預防",
      subcat: "抗組織胺",
      drug: "Diphenhydramine HCl 30 mg/1 mL/amp",
      badges: [],
      order: "15-30 mg IV QDPRN",
      special: "",
      copyText: "Diphenhydramine HCl 15-30 mg IV QDPRN"
    },
    {
      cat: "symptom",
      indication: "輸血預防",
      subcat: "類固醇",
      drug: "Solu-Cortef 100 mg/vial",
      badges: [],
      order: "50-100 mg IV QDPRN",
      special: "",
      copyText: "Solu-Cortef 50-100 mg IV QDPRN"
    },
    // DLC LOCK
    {
      cat: "lock",
      indication: "DLC LOCK",
      subcat: "Heparin",
      drug: "Heparin (with preservative) 25000 U/5 mL/vial",
      badges: [{ text: "警 高警訊", type: "danger" }],
      order: "13500 U LOCK",
      special: "特殊醫囑：A 1.4cc, V 1.3cc",
      copyText: "Heparin (with preservative) 13500 U LOCK (特殊醫囑: A 1.4cc, V 1.3cc)"
    },
    // 管路血栓 LOCK
    {
      cat: "lock",
      indication: "管路血栓 LOCK",
      subcat: "血栓溶解",
      drug: "Urokinase 60000 IU/vial",
      badges: [],
      order: "10000 U LOCK",
      special: "特殊醫囑：1 vial in NS 12ml 混合均勻 (5000 IU/ml)，取 2ml lock Port-A",
      copyText: "Urokinase 10000 U LOCK (特殊醫囑: 1 vial in NS 12ml混合均勻(5000IU/ml), 取2ml lock Port-A)"
    },
    {
      cat: "lock",
      indication: "出院管路 LOCK",
      subcat: "文字醫囑",
      drug: "【出院】開文字醫囑即可",
      badges: [{ text: "出院文字醫囑", type: "teal" }],
      order: "Heparin 1000 u in N/S 10 ml LOCK",
      special: "",
      copyText: "Heparin 1000 u in N/S 10 ml LOCK",
      isDischarge: true
    },
    // G-CSF
    {
      cat: "gcsf",
      indication: "G-CSF 白血球生長激素",
      subcat: "短效",
      drug: "300 Filgrastim 300 mcg/0.7 mL/amp",
      badges: [{ text: "短效", type: "info" }],
      order: "Usual dose: 5 mcg/kg SC QN",
      special: "取整數開立（可搭配 75 mcg/amp 調整）",
      copyText: "Filgrastim 300 mcg SC QN"
    },
    {
      cat: "gcsf",
      indication: "G-CSF 白血球生長激素",
      subcat: "短效",
      drug: "75 Filgrastim 75 mcg/0.3 mL/amp",
      badges: [{ text: "短效", type: "info" }],
      order: "Usual dose: 5 mcg/kg SC QN",
      special: "取整數開立",
      copyText: "Filgrastim 75 mcg SC QN"
    },
    {
      cat: "gcsf",
      indication: "G-CSF 白血球生長激素",
      subcat: "長效",
      drug: "Ziextenzo Injection 6 mg/0.6 mL/syringe",
      badges: [{ text: "長效", type: "teal" }],
      order: "6 mg SC ONCE",
      special: "",
      copyText: "Ziextenzo Injection 6 mg SC ONCE"
    }
  ],

  nvOrders: [
    {
      form: "止吐針",
      coverage: "健保",
      drug: "Novamin Inj 5 mg/1 mL/amp",
      badges: [{ text: "針", type: "info" }],
      order: "5 mg IV Q6-8H",
      special: "特殊醫囑：in NS 100 ml drip 30min",
      copyText: "Novamin Inj 5 mg IV Q6-8H (特殊醫囑: in NS 100 ml drip 30min)"
    },
    {
      form: "止吐針",
      coverage: "健保",
      drug: "Primperan Inj 10 mg/2 mL/amp",
      badges: [{ text: "針", type: "info" }, { text: "勿用於腹瀉者", type: "danger" }],
      order: "5-10 mg IV Q6-8H",
      special: "",
      copyText: "Primperan Inj 5-10 mg IV Q6-8H"
    },
    {
      form: "止吐針",
      coverage: "自費$",
      selfpay: true,
      drug: "Aloxi Soln for Inj 0.25 mg/5 mL/vial",
      badges: [{ text: "自費$", type: "selfpay" }],
      order: "0.25 mg ONCE 或 QODPRN",
      special: "",
      copyText: "Aloxi Soln for Inj 0.25 mg IV ONCE"
    },
    {
      form: "止吐針",
      coverage: "自費$",
      selfpay: true,
      drug: "Kytril Inj 3 mg/3 mL/amp",
      badges: [{ text: "自費$", type: "selfpay" }],
      order: "3 mg IV ONCE 或 QDPRN",
      special: "",
      copyText: "Kytril Inj 3 mg IV ONCE"
    },
    {
      form: "止吐針",
      coverage: "自費$",
      selfpay: true,
      drug: "Zofran Inj 8 mg/4 mL/amp",
      badges: [{ text: "針", type: "info" }, { text: "自費$", type: "selfpay" }],
      order: "8 mg IV ONCE 或 Q4-8HPRN",
      special: "",
      copyText: "Zofran Inj 8 mg IV Q4-8HPRN"
    },
    {
      form: "止吐針",
      coverage: "自費$",
      selfpay: true,
      drug: "Emend IV Inj 150 mg/vial",
      badges: [{ text: "針", type: "info" }, { text: "自費$", type: "selfpay" }],
      order: "150 mg IF ONCE",
      special: "",
      copyText: "Emend IV Inj 150 mg IF ONCE"
    },
    {
      form: "止吐藥",
      coverage: "自費$",
      selfpay: true,
      drug: "Zyprexa Zydis Orodispersible Tablet 5 mg/tab",
      badges: [{ text: "自費$", type: "selfpay" }, { text: "口溶錠", type: "muted" }],
      order: "1 tab LZ QD-BID",
      special: "",
      copyText: "Zyprexa Zydis 5 mg 1 tab LZ QD-BID"
    },
    {
      form: "止吐藥",
      coverage: "自費$",
      selfpay: true,
      drug: "Akynzeo (netupitant 300 mg + palonosetron 0.5 mg)/cap",
      badges: [{ text: "自費$", type: "selfpay" }],
      order: "1 tab PO ONCE",
      special: "",
      copyText: "Akynzeo 1 cap PO ONCE"
    }
  ],

  admissionOrders: [
    {
      title: "VRE swab",
      order: "Screening for Vancomycin-resistant entercocci 總院",
      note: "",
      copyText: "Screening for Vancomycin-resistant entercocci 總院"
    },
    {
      title: "血糖",
      order: "Check blood sugar by glucometer (one touch sugar) [$] 總院",
      note: "⚠ 要選有 [$] 符號的醫令",
      copyText: "Check blood sugar by glucometer (one touch sugar) [$] 總院"
    },
    {
      title: "血氧",
      order: "(文字醫囑) SpO2 PRN",
      note: "",
      copyText: "SpO2 PRN"
    },
    {
      title: "CBC / DC",
      order: "CBC & platelet, WBC Classification",
      note: "⚠ WBC Classification 勿開緊急檢查",
      copyText: "CBC & platelet, WBC Classification"
    }
  ],

  tdmOrders: [
    {
      name: "Cyclosporin A (C0) 總院<br />Tacrolimus, FK-506 總院",
      timing: "<strong>給藥前</strong><br />每天都可檢驗，大多週一、四抽",
      path: "診 → 檢驗 → Toxicology TDM (毒物學與藥物檢測) → <strong>移植用藥</strong>"
    },
    {
      name: "Methotrexate 總院",
      timing: "<strong>Day 3 開始抽</strong><br />週一～五可檢驗（六日當天不報告）",
      path: "診 → 檢驗 → Toxicology TDM (毒物學與藥物檢測) → <strong>其他種類</strong>"
    },
    {
      name: "<span class='badge badge-selfpay'>自費</span> antifungal level<br /><code>000R5042</code>",
      timing: "<strong>給藥前</strong><br />最晚每週三中午前抽血收檢（每週只上機一次，週四下午報告）",
      path: "診 → 檢驗 → Toxicology TDM (毒物學與藥物檢測) → <strong>TDM(I), Antibiotics (藥物檢測(抗生素))</strong>"
    }
  ],

  lockRecipes: [
    {
      drug: "Vancomycin",
      conc: "5 mg/ml",
      order: "25 mg in NS 5 ml QD-Q3D 途徑:ALT",
      special: "特殊醫囑：取 5ml lock port-A",
      prepHtml: "1 支 (500mg) 用 10ml W 溶解後 <span class='hl-conc'>[濃度50]</span>，取 0.5ml 再加 4.5ml NS 稀釋 <span class='hl-conc'>[濃度5]</span>，取 5ml lock port-A",
      copyText: "Vancomycin 25 mg in NS 5 ml QD-Q3D 途徑:ALT (特殊醫囑: 取5ml lock port-A)"
    },
    {
      drug: "Daptomycin",
      conc: "5 mg/ml",
      orderHtml: "25 mg in <span class='lr-alert'>LR</span> 5 ml QD-Q3D 途徑:ALT",
      special: "特殊醫囑：取 5ml lock port-A",
      prepHtml: "從全身性抗生素 Daptomycin 1 支 (500mg) 用 10ml NS 溶解後 <span class='hl-conc'>[濃度50]</span>，取 0.5ml 再加 4.5ml <span class='lr-alert'>LR</span> 稀釋 <span class='hl-conc'>[濃度5]</span>，取 5ml lock port-A",
      copyText: "Daptomycin 25 mg in LR 5 ml QD-Q3D 途徑:ALT (特殊醫囑: 取5ml lock port-A)"
    },
    {
      drug: "Cefazolin",
      conc: "5 mg/ml",
      order: "50 mg in NS 10 ml QD-QOD 途徑:ALT",
      special: "特殊醫囑：取 5ml lock port-A",
      prepHtml: "1 支 (1000mg) 用 10ml W 溶解後 <span class='hl-conc'>[濃度100]</span>，取 0.5ml 再加 9.5ml NS 稀釋 <span class='hl-conc'>[濃度5]</span>，取 5ml lock port-A",
      copyText: "Cefazolin 50 mg in NS 10 ml QD-QOD 途徑:ALT (特殊醫囑: 取5ml lock port-A)"
    },
    {
      drug: "Ceftazidime",
      conc: "10 mg/ml",
      order: "50 mg in NS 5 ml QD-QOD 途徑:ALT",
      special: "特殊醫囑：取 5ml lock port-A",
      prepHtml: "1 支 (500mg) 用 10ml W 溶解後 <span class='hl-conc'>[濃度50]</span>，取 1ml 再加 4ml NS 稀釋 <span class='hl-conc'>[濃度10]</span>，取 5ml lock port-A",
      copyText: "Ceftazidime 50 mg in NS 5 ml QD-QOD 途徑:ALT (特殊醫囑: 取5ml lock port-A)"
    },
    {
      drug: "Cefepime",
      conc: "10 mg/ml",
      order: "50 mg in NS 5 ml QD-QOD 途徑:ALT",
      special: "特殊醫囑：取 5ml lock port-A",
      prepHtml: "1 支 (500mg) 用 10ml NS 溶解後 <span class='hl-conc'>[濃度50]</span>，取 1ml 再加 4ml NS 稀釋 <span class='hl-conc'>[濃度10]</span>，取 5ml lock port-A",
      copyText: "Cefepime 50 mg in NS 5 ml QD-QOD 途徑:ALT (特殊醫囑: 取5ml lock port-A)"
    },
    {
      drug: "Amikacin",
      conc: "5 mg/ml",
      order: "25 mg in NS 5 ml QD 途徑:ALT",
      special: "特殊醫囑：取 5ml lock port-A",
      prepHtml: "1 支 (500mg/2ml) 抽 0.1ml 加 4.9ml NS 稀釋 <span class='hl-conc'>[濃度5]</span>，取 5ml LOCK port-A",
      copyText: "Amikacin 25 mg in NS 5 ml QD 途徑:ALT (特殊醫囑: 取5ml lock port-A)"
    },
    {
      drug: "Gentamicin",
      conc: "5 mg/ml",
      order: "25 mg in NS 5 ml QD-Q3D 途徑:ALT",
      special: "特殊醫囑：取 5ml lock port-A",
      prepHtml: "1 支 (80mg/2ml) 取 1ml 加 7ml NS 稀釋 <span class='hl-conc'>[濃度5]</span>，取 5ml lock port-A",
      copyText: "Gentamicin 25 mg in NS 5 ml QD-Q3D 途徑:ALT (特殊醫囑: 取5ml lock port-A)"
    },
    {
      drug: "Ciprofloxacin<br /><span class='muted-note'>200 mg/100 mL</span>",
      conc: "2 mg/ml",
      order: "10 mg QD-QOD 途徑:ALT",
      special: "特殊醫囑：原液抽 5ml 直接 lock port A",
      prepHtml: "從原液抽 5ml 直接 lock port A",
      copyText: "Ciprofloxacin 10 mg QD-QOD 途徑:ALT (特殊醫囑: 原液抽5ml直接lock port A)"
    }
  ],

  refAltTw: [
    { group: "革蘭氏陽性菌感染", drug: "Ampicillin", diluent: "NS", conc: "10", heparin: "--", dwell: "8", ref: "4,8" },
    { group: "革蘭氏陽性菌感染", drug: "Cefazolin", diluent: "NS", conc: "5", heparin: "--", dwell: "48", ref: "4,9" },
    { group: "革蘭氏陽性菌感染", drug: "Cefazolin", diluent: "NS", conc: "5", heparin: "2500", dwell: "72", ref: "3,5" },
    { group: "革蘭氏陽性菌感染", drug: "Daptomycin", diluent: "LR", conc: "1", heparin: "100-1000", dwell: "12-24", ref: "5" },
    { group: "革蘭氏陽性菌感染", drug: "Daptomycin", diluent: "LR", conc: "5", heparin: "--", dwell: "72", ref: "4,10" },
    { group: "革蘭氏陽性菌感染", drug: "Vancomycin", diluent: "NS", conc: "2", heparin: "100", dwell: "96", ref: "5" },
    { group: "革蘭氏陽性菌感染", drug: "Vancomycin", diluent: "NS", conc: "2.5", heparin: "2500", dwell: "72", ref: "3,4" },
    { group: "革蘭氏陽性菌感染", drug: "Vancomycin", diluent: "NS", conc: "5", heparin: "--", dwell: "48-72", ref: "3,4" },
    { group: "革蘭氏陽性菌感染", drug: "Vancomycin", diluent: "NS", conc: "5", heparin: "2500", dwell: "72", ref: "5" },
    { group: "革蘭氏陰性菌感染", drug: "Amikacin", diluent: "NS", conc: "1.5", heparin: "--", dwell: "12", ref: "5" },
    { group: "革蘭氏陰性菌感染", drug: "Amikacin", diluent: "NS", conc: "2", heparin: "--", dwell: "12", ref: "5" },
    { group: "革蘭氏陰性菌感染", drug: "Amikacin", diluent: "NS", conc: "2", heparin: "20", dwell: "72", ref: "5" },
    { group: "革蘭氏陰性菌感染", drug: "Amikacin", diluent: "NS", conc: "5", heparin: "--", dwell: "12-24", ref: "5" },
    { group: "革蘭氏陰性菌感染", drug: "Cefepime", diluent: "NS", conc: "1-10", heparin: "--", dwell: "48", ref: "4,11" },
    { group: "革蘭氏陰性菌感染", drug: "Ceftazidime", diluent: "NS", conc: "2", heparin: "100", dwell: "48", ref: "5" },
    { group: "革蘭氏陰性菌感染", drug: "Ceftazidime", diluent: "NS", conc: "1-10", heparin: "--", dwell: "48", ref: "4,11" },
    { group: "革蘭氏陰性菌感染", drug: "Ceftazidime", diluent: "NS", conc: "5", heparin: "2500", dwell: "72", ref: "5" },
    { group: "革蘭氏陰性菌感染", drug: "Ceftriaxone", diluent: "NS", conc: "100", heparin: "--", dwell: "48", ref: "4,12" },
    { group: "革蘭氏陰性菌感染", drug: "Ciprofloxacin", diluent: "NS", conc: "1", heparin: "2500", dwell: "72", ref: "5" },
    { group: "革蘭氏陰性菌感染", drug: "Ciprofloxacin", diluent: "NS", conc: "1-5", heparin: "--", dwell: "48", ref: "4,11" },
    { group: "革蘭氏陰性菌感染", drug: "Gentamicin", diluent: "NS", conc: "1", heparin: "2500", dwell: "72", ref: "3,4" },
    { group: "革蘭氏陰性菌感染", drug: "Gentamicin", diluent: "NS", conc: "5", heparin: "--", dwell: "72", ref: "4,13" },
    { group: "革蘭氏陰性菌感染", drug: "Gentamicin", diluent: "NS", conc: "5", heparin: "1000", dwell: "12-24", ref: "5" }
  ],

  refIcj: [
    { drug: "Ampicillin", dose: "10 mg/ml", heparin: "10~5,000 IU/mL", dwell: "< 48 hrs" },
    { drug: "Cefazolin", dose: "5~10 mg/ml", heparin: "2,500~10,000 IU/mL", dwell: "72 hrs" },
    { drug: "Vancomycin", dose: "5 mg/ml", heparin: "10~5,000 IU/mL", dwell: "≥ 72 hrs" },
    { drug: "Gentamicin", dose: "1~5 mg/ml", heparin: "2,500 IU/mL", dwell: "72 hrs" },
    { drug: "Amikacin", dose: "1~2 mg/ml", heparin: "none", dwell: "≥ 24 hrs" },
    { drug: "Cefazolin/Gentamicin", dose: "5/1 mg/ml", heparin: "2,500 IU/mL", dwell: "72 hrs" },
    { drug: "Vancomycin/Gentamicin", dose: "2.5/1 mg/ml", heparin: "2,500 IU/mL", dwell: "72 hrs" },
    { drug: "Ceftazidime", dose: "0.5 mg/ml", heparin: "100~10,000 IU/mL", dwell: "72 hrs" },
    { drug: "Ceftriaxone", dose: "83.3 mg/ml", heparin: "none", dwell: "12 hrs" },
    { drug: "Ciprofloxacin", dose: "0.2 mg/ml", heparin: "5,000 IU/mL", dwell: "72 hrs" },
    { drug: "Teicoplanin", dose: "10 mg/ml", heparin: "none", dwell: "48 hrs" },
    { drug: "Tigecycline", dose: "2 mg/ml", heparin: "none", dwell: "4 hrs" },
    { drug: "Daptomycin", dose: "5 mg/ml", heparin: "100 IU/mL", dwell: "12~24 hrs" },
    { drug: "Linezolid", dose: "2 mg/ml", heparin: "2,000 IU/mL", dwell: "12~24 hrs" },
    { drug: "Ethanol", dose: "70%", heparin: "none", dwell: "2~24 hrs" }
  ],

  refUptodate: [
    { spectrum: "Gram-positive", drug: "Vancomycin", conc: "2.5 mg/mL", heparin: "2500 units/mL", dwell: "72 hours", ref: "Krishnasami [1]" },
    { spectrum: "Gram-positive", drug: "Vancomycin", conc: "5 mg/mL", heparin: "5000 units/mL", dwell: "72 hours", ref: "Luther [2]" },
    { spectrum: "Gram-positive", drug: "Vancomycin", conc: "5 mg/mL", heparin: "none", dwell: "72 hours", ref: "Luther [2]" },
    { spectrum: "Gram-positive", drug: "Cefazolin", conc: "5 mg/mL", heparin: "2500 units/mL", dwell: "72 hours", ref: "Krishnasami [1]" },
    { spectrum: "Gram-positive", drug: "Cefazolin", conc: "5 mg/mL", heparin: "none", dwell: "48 hours", ref: "Vercaigne [3]" },
    { spectrum: "Gram-positive", drug: "Cefazolin", conc: "10 mg/mL", heparin: "5000 units/mL", dwell: "72 hours", ref: "Vercaigne [3]" },
    { spectrum: "Gram-positive", drug: "Daptomycin", conc: "5 mg/mL", heparin: "5000 units/mL", dwell: "72 hours", ref: "LaPlante [4]" },
    { spectrum: "Gram-positive", drug: "Daptomycin", conc: "5 mg/mL", heparin: "none", dwell: "72 hours", ref: "LaPlante [4]" },
    { spectrum: "Gram-positive", drug: "Nafcillin", conc: "100 mg/mL", heparin: "none", dwell: "12 hours", ref: "Nafcillin [5]" },
    { spectrum: "Gram-positive", drug: "Ampicillin", conc: "10 mg/mL", heparin: "none", dwell: "8 hours", ref: "Ampicillin [6]" },
    { spectrum: "Gram-negative", drug: "Gentamicin", conc: "1 mg/mL", heparin: "2500 units/mL", dwell: "72 hours", ref: "Krishnasami [1]" },
    { spectrum: "Gram-negative", drug: "Gentamicin", conc: "5 mg/mL", heparin: "5000 units/mL", dwell: "72 hours", ref: "Vercaigne [3]" },
    { spectrum: "Gram-negative", drug: "Gentamicin", conc: "5 mg/mL", heparin: "none", dwell: "72 hours", ref: "Vercaigne [3]" },
    { spectrum: "Gram-negative", drug: "Ceftazidime", conc: "10 mg/mL", heparin: "5000 units/mL", dwell: "48 hours", ref: "Vercaigne [3]" },
    { spectrum: "Gram-negative", drug: "Ceftazidime", conc: "1 to 10 mg/mL", heparin: "none", dwell: "48 hours", ref: "Lee [7]" },
    { spectrum: "Gram-negative", drug: "Cefepime", conc: "1 to 10 mg/mL", heparin: "none", dwell: "48 hours", ref: "Lee [7]" },
    { spectrum: "Gram-negative", drug: "Ciprofloxacin", conc: "1 to 5 mg/mL", heparin: "none", dwell: "48 hours", ref: "Lee [7], Lee [8]" },
    { spectrum: "Gram-negative", drug: "Ceftriaxone", conc: "100 mg/mL", heparin: "none", dwell: "48 hours", ref: "Ceftriaxone [9]" }
  ],

  altReferences: [
    "Chaves F, Garnacho-Montero J, Del Pozo JL, et al. Diagnosis and treatment of catheter-related bloodstream infection: Clinical guidelines of the Spanish Society of Infectious Diseases and Clinical Microbiology (SEIMC) and the Spanish Society of Intensive and Critical Care Medicine and Coronary Units (SEMICYUC). Med Intensiva (Engl Ed) 2018;42:5-36.",
    "Members of the Sous les Verrous Study G. Antibiotic lock therapy for the conservative treatment of long-term intravenous catheter-related infections in adults and children: When and how to proceed? Guidelines for clinical practice 2020. Infect Dis Now 2021;51:236-46.",
    "Mermel LA, Allon M, Bouza E, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: 2009 Update by the Infectious Diseases Society of America. Clin Infect Dis 2009;49:1-45.",
    "Lock therapy for treatment and prevention of intravascular non-hemodialysis catheter-related infection. UpToDate, 2024 (Accessed Feb 13, 2024).",
    "Justo JA, Bookstaver PB. Antibiotic lock therapy: review of technique and logistical challenges. Infect Drug Resist 2014;7:343-63.",
    "Fernandez-Hidalgo N, Almirante B. Antibiotic-lock therapy: a clinical viewpoint. Expert Rev Anti Infect Ther 2014;12:117-29.",
    "Zanwar S, Jain P, Gokarn A, et al. Antibiotic lock therapy for salvage of tunneled central venous catheters with catheter colonization and catheter-related bloodstream infection. Transpl Infect Dis 2019;21:e13017.",
    "Ampicillin [package insert]. New York, NY: Pfizer Inc; 2010.",
    "Vercaigne LM, Sitar DS, Penner SB, et al. Antibiotic-heparin lock: in vitro antibiotic stability combined with heparin in a central venous catheter. Pharmacotherapy 2000;20:394.",
    "LaPlante KL, Mermel LA. In vitro activity of daptomycin and vancomycin lock solutions on staphylococcal biofilms in a central venous catheter model. Nephrol Dial Transplant 2007;22:2239.",
    "Lee MY, Ko KS, Song JH, Peck KR. In vitro effectiveness of the antibiotic lock technique (ALT) for the treatment of catheter-related infections by Pseudomonas aeruginosa and Klebsiella pneumoniae. J Antimicrob Chemother 2007;60:782.",
    "Ceftriaxone [package insert]. Lake Forest, IL: Hospira Worldwide Inc; 2015.",
    "Vercaigne LM, Sitar DS, Penner SB, et al. Antibiotic-heparin lock: in vitro antibiotic stability combined with heparin in a central venous catheter. Pharmacotherapy 2000;20:394."
  ]
};
