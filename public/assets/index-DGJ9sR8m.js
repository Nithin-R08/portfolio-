var e = Object.defineProperty, t = (t, i, r) => ((t, i, r) => i in t ? e(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r)(t, "symbol" != typeof i ? i + "" : i, r); import { i, x as r, a as o, b as s, R as a, V as n, C as l, c, d, G as h, M as p, P as m, T as u, B as g, o as v } from "./vendor-other-0uWrHE1h.js"; import { g as f, S as w, F as y, C as x, a as b, D as _ } from "./vendor-gsap-soFV617O.js"; import { L as k } from "./vendor-lenis-D74GLXXG.js"; !function () { const e = document.createElement("link").relList; if (!(e && e.supports && e.supports("modulepreload"))) { for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e); new MutationObserver(e => { for (const i of e) if ("childList" === i.type) for (const e of i.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e) }).observe(document, { childList: !0, subtree: !0 }) } function t(e) { if (e.ep) return; e.ep = !0; const t = function (e) { const t = {}; return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t }(e); fetch(e.href, t) } }(), "undefined" == typeof window || f.core.globals().ScrollTrigger || f.registerPlugin(w), "undefined" == typeof window || f.core.globals().Flip || f.registerPlugin(y), "undefined" == typeof window || f.core.globals().CustomEase || f.registerPlugin(x), "undefined" == typeof window || f.core.globals().SplitText || f.registerPlugin(b), "undefined" == typeof window || f.core.globals().Draggable || f.registerPlugin(_); const S = new class { constructor() { this.listeners = new Map, this.state = new Map, this.debug = !1 } on(e, t, i = !0) { this.listeners.has(e) || this.listeners.set(e, []), this.listeners.get(e).push(t), i && this.state.has(e) && t(this.state.get(e)), this.debug } off(e, t) { this.listeners.has(e) && this.listeners.set(e, this.listeners.get(e).filter(e => e !== t)) } emit(e, t = {}, i = !1) { if (this.debug, i && this.state.set(e, t), this.listeners.has(e)) for (const o of this.listeners.get(e)) try { o(t) } catch (r) { } } once(e, t) { const i = r => { t(r), this.off(e, i) }; this.on(e, i) } clear() { this.listeners.clear() } listEvents() { } }; function T(e) { return Object.freeze(e), Object.keys(e).forEach(t => { const i = e[t]; i && "object" == typeof i && !Object.isFrozen(i) && T(i) }), e } const E = [{ id: 1, title: "VATSALYA", slug: "hello-clever", client: "Nithin R", description: "AI • IoT • Full Stack", src: "/images/works/vatsalya-detail.png", color: "#101010", link: "https://github.com/Nithin-R08/Vatsalya", timeline: "2026", tag: "AI • IoT • Full Stack", company: "Independent Project", role: "Full Stack Developer", year: "2026", tech: { frontend: "React.js, Next.js, Tailwind CSS", backend: "Python, FastAPI, Firebase, MongoDB, BLE, FCM, TensorFlow, OpenCV, JWT Authentication" }, paragraph: ["Vatsalya is a smart elderly care platform that helps families remotely monitor the health and safety of their loved ones. It provides real-time health tracking, SOS emergency alerts, medicine reminders, caregiver dashboards, voice assistance, and instant notifications, ensuring peace of mind for families."], responsibilities: ["Designed complete application architecture.", "Built caregiver dashboard.", "Developed secure backend APIs.", "Implemented authentication system.", "Integrated AI health prediction.", "Developed multilingual interface.", "Connected wearable devices.", "Built emergency notification workflow."], layout: "standard", nextProject: "clever-docs" }, { id: 2, title: "TRUSTLENS AI", slug: "clever-docs", client: "Nithin R", description: "AI Bias Detection Platform", src: "/images/works/trustlens-docs-1.png", color: "#101010", link: "https://github.com/Nithin-R08/TrustLens-AI", timeline: "2026", tag: "AI • Machine Learning • Explainable AI", company: "Independent Project", role: "AI Engineer", year: "2026", tech: { frontend: "React.js, Tailwind CSS", backend: "Python, FastAPI, TensorFlow, PyTorch, Scikit-learn, SHAP, LIME, Pandas, NumPy, Docker, GitHub Actions" }, paragraph: ["TrustLens AI is an AI fairness and bias detection platform that analyzes datasets and machine learning models to identify hidden bias, evaluate fairness metrics, generate explainable reports, and improve trustworthy AI systems."], responsibilities: ["Designed end-to-end AI bias detection workflow.", "Developed backend APIs using FastAPI.", "Implemented fairness metric calculations.", "Integrated SHAP explainability visualizations.", "Built responsive React frontend.", "Developed secure dataset upload pipeline.", "Designed interactive analytics dashboard.", "Optimized model inference performance."], layout: "standard", nextProject: "hello-clever" }], C = "https://github.com/19521791", A = "https://www.linkedin.com/in/nguyen-phi-long-a48961265/", L = { start: "M 0 100 V 100 Q 50 100 100 100 V 100 z", curve: "M 0 100 V 50 Q 50 0 100 50 V 100 z", end: "M 0 100 V 0 Q 50 0 100 0 V 100 z", hold: "M 0 100 V 0 Q 50 3 100 0 V 100 z", hold2: "M 0 100 V 0 Q 50 -2 100 0 V 100 z" }, P = { start: "M 0 0 V 100 Q 50 100 100 100 V 0 z", curve: "M 0 0 V 50 Q 50 100 100 50 V 0 z", end: "M 0 0 V 0 Q 50 0 100 0 V 0 z" }, M = { "/": "Home", "/works": "Work", "/about": "About", "/contact": "Contact", "/works/hello-clever": "VATSALYA", "/works/clever-docs": "TRUSTLENS AI" }, R = [{ text: "BUILD", accent: !1 }, { text: "THINGS", accent: !1 }, { text: "THAT", accent: !1 }, { text: "MATTER", accent: !0 }], q = 420, I = 260, D = 280, z = 60, F = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], O = { default: 1, "hover-nav": 1.78, "hover-img": 3.36, "hover-w-d-img": 3.36, "hover-w-l-img": 3.36, "hover-link": 1.71, "hover-img-p": .86, "hover-w-title": 3.57, active: .78, label: 2.86 }, j = { "/": "Nithin - Creative Developer", "/about": "About - Nithin", "/works": "Works - Nithin", "/contact": "Contact - Nithin", "/works/hello-clever": "VATSALYA - Nithin", "/works/clever-docs": "TRUSTLENS AI - Nithin" }, H = "\n  precision highp float;\n  attribute vec2 position;\n  attribute vec2 uv;\n  varying vec2 vUv;\n  varying vec2 vL;\n  varying vec2 vR;\n  varying vec2 vT;\n  varying vec2 vB;\n  uniform vec2 texelSize;\n  void main () {\n    vUv = uv;\n    vL = vUv - vec2(texelSize.x, 0.0);\n    vR = vUv + vec2(texelSize.x, 0.0);\n    vT = vUv + vec2(0.0, texelSize.y);\n    vB = vUv - vec2(0.0, texelSize.y);\n    gl_Position = vec4(position, 0, 1);\n  }\n", B = T({ VELOCITY_MULTIPLIER: 8, MIN_SPEED_THRESHOLD: .005, COLOR_INTENSITY: 2, COLOR_OFFSET: .5, SPEED_TO_COLOR: 3 }); T({ "hover-large": 2, "hover-img": 2, active: 1.5, blob: .5, default: 1 }); const N = T({ "hover-large": { first: 3, rest: 1 }, "hover-img": { first: 3, rest: 1 }, active: { all: .7 }, blob: { first: .2, rest: 0 }, default: { all: 1 } }), Y = T({ POSITION: "fixed", TOP: "0", LEFT: "0", WIDTH: "100%", HEIGHT: "100%", POINTER_EVENTS: "none", Z_INDEX: "9" }), U = T({ SIM_RESOLUTION: 256, DYE_RESOLUTION: 512, ITERATIONS: 4, DENSITY_DISSIPATION: .96, VELOCITY_DISSIPATION: .95, PRESSURE_DISSIPATION: .8, CURL_STRENGTH: 1 }), V = T({ CIRCLE_LERP_FACTOR: .18, CIRCLE_OFFSET: 12, HOVER_FOLLOW_SPEED: .8, DEFAULT_FOLLOW_SPEED: .3, TRANSITION_DELAY_MULT: .02, TRANSITION_DELAY_MULT_DEFAULT: .03 }); class $ { constructor(e = {}) { this.config = e, this.DISABLE_PRELOADER = !1, this._triggered = !1, this._ctx = null; sessionStorage.getItem("preloader_seen") ? requestAnimationFrame(() => { var e, t; return null == (t = null == (e = this.config) ? void 0 : e.onComplete) ? void 0 : t.call(e) }) : this.init() } async init() { if (this.DISABLE_PRELOADER) { const e = document.getElementById("preloader"); return e && (e.style.display = "none"), void setTimeout(() => { var e, t, i, r; null == (t = null == (e = this.config) ? void 0 : e.onComplete) || t.call(e), null == (r = null == (i = window.app) ? void 0 : i.triggerAnimationsOnSlide) || r.call(i) }, 50) } window.addEventListener("load", () => { document.body.classList.remove("scroll-allowed"), window.scrollTo(0, 0), document.body.classList.add("preloader-active") }), await document.fonts.ready, await this._waitForLoad(), await this._waitFrames(2), await this._wait(120), this._ctx = f.context(() => this.run()) } _waitForLoad() { return new Promise(e => { "complete" === document.readyState ? e() : window.addEventListener("load", e, { once: !0 }) }) } _waitFrames(e) { return new Promise(t => { let i = 0; const r = () => { i++, i >= e ? t() : requestAnimationFrame(r) }; requestAnimationFrame(r) }) } _wait(e) { return new Promise(t => setTimeout(t, e)) } async run() { var e, t, i, r; const o = document.getElementById("preloader"), s = null == o ? void 0 : o.querySelector("#pl-word-stage"), a = null == o ? void 0 : o.querySelector(".pl-word"), n = null == o ? void 0 : o.querySelector("#pl-identity"), l = null == o ? void 0 : o.querySelectorAll(".pl-id-char"), c = null == o ? void 0 : o.querySelector(".pl-id-rule"), d = null == o ? void 0 : o.querySelector(".pl-id-sub-inner"); if (!o || !a) return void (null == (t = null == (e = this.config) ? void 0 : e.onComplete) || t.call(e)); f.set(a, { y: "105%", opacity: 1 }), f.set(n, { opacity: 0 }), f.set(l, { y: "110%", opacity: 0 }), f.set(c, { scaleX: 0, opacity: 0 }), f.set(d, { y: "110%", opacity: 0 }), await this._wait(180); for (let p = 0; p < R.length; p++) { const e = R[p], t = p === R.length - 1; a.textContent = e.text, a.classList.toggle("pl-word--accent", e.accent), a.offsetWidth, await new Promise(e => requestAnimationFrame(e)), f.set(a, { y: "105%", opacity: 1 }), await this._animateWordIn(a, t), await this._wait(t ? I + 80 : I), t || (await this._animateWordOut(a), await this._wait(z)) } const h = f.timeline(); h.to(s, { opacity: 0, duration: .45, ease: "power2.in" }, 0), h.to(n, { opacity: 1, duration: .01 }, 0), h.call(() => { f.set(l, { willChange: "transform, opacity" }) }, null, .05), h.to(l, { y: "0%", opacity: 1, duration: .65, stagger: .055, ease: "power3.out" }, .1), h.to(c, { scaleX: 1, opacity: 1, duration: .55, ease: "power2.inOut" }, .55), h.to(d, { y: "0%", opacity: 1, duration: .45, ease: "power2.out" }, .75), h.call(() => { f.set(l, { willChange: "auto", clearProps: "will-change" }) }, null, .9), await h, await this._wait(700), this._triggered || (this._triggered = !0, S.emit("preloader:done", { isFirstLoad: !0 }), null == (r = null == (i = window.app) ? void 0 : i.triggerAnimationsOnSlide) || r.call(i)), await this._exitSequence(o, n, l, c, d) } _animateWordIn(e, t) { return new Promise(i => { f.set(e, { willChange: "transform" }), t ? (f.set(e, { y: "105%", scale: .88, opacity: 1 }), f.to(e, { y: "0%", scale: 1, duration: q / 1e3 + .1, ease: "power4.out", onComplete: () => { f.set(e, { willChange: "auto", clearProps: "will-change" }), i() } })) : f.to(e, { y: "0%", duration: q / 1e3, ease: "power3.out", onComplete: () => { f.set(e, { willChange: "auto", clearProps: "will-change" }), i() } }) }) } _animateWordOut(e) { return new Promise(t => { f.set(e, { willChange: "transform" }), f.to(e, { y: "-105%", duration: D / 1e3, ease: "power3.in", onComplete: () => { f.set(e, { willChange: "auto", clearProps: "will-change" }), t() } }) }) } _exitSequence(e, t, i, r, o) { return new Promise(s => { const a = f.timeline({ onComplete: s }); a.call(() => { f.set(t, { willChange: "transform, opacity" }), f.set(i, { willChange: "transform, opacity" }) }, null, 0), a.to(i, { y: "-110%", opacity: 0, duration: .45, stagger: { each: .045, from: "end" }, ease: "power3.in" }, 0), a.to([r, o], { opacity: 0, duration: .25, ease: "power2.in" }, 0), a.to(t, { scale: 1.04, duration: .7, ease: "power3.in" }, 0), a.to(e, { opacity: 0, duration: .55, ease: "power2.inOut", onComplete: () => { var r, o; f.set([t, i], { clearProps: "will-change" }), e.style.display = "none", document.body.classList.remove("preloader-active"), null == (o = null == (r = this.config) ? void 0 : r.onComplete) || o.call(r), setTimeout(() => e.remove(), 100) } }, .2) }) } destroy() { var e, t; null == (e = this._ctx) || e.revert(), null == (t = document.getElementById("preloader")) || t.remove() } } class G { constructor() { var e, t, i, r, o; this.overlay = document.getElementById("transition-overlay"), this.path = null == (e = this.overlay) ? void 0 : e.querySelector(".overlay__path"), this.stage = null == (t = this.overlay) ? void 0 : t.querySelector(".transition-stage"), this.words = null == (i = this.overlay) ? void 0 : i.querySelectorAll(".ts-word"), this.rule = null == (r = this.overlay) ? void 0 : r.querySelector(".ts-rule"), this.destLabel = null == (o = this.overlay) ? void 0 : o.querySelector(".ts-dest-label"), this.isTransitioning = !1, this._stageTl = null } _setDestination(e = "") { const t = M[e] ?? "Error"; this.destLabel && (this.destLabel.textContent = t) } _playStageIn() { const e = f.timeline(); return e.to(this.words, { yPercent: 0, opacity: 1, duration: .65, stagger: .12, ease: "power3.out" }, .15), e.to(this.rule, { width: "100%", duration: .5, ease: "power2.inOut" }, .55), e.call(() => { f.set(this.words, { willChange: "auto" }) }), e } _playStageOut() { const e = f.timeline(); return e.to(this.words, { yPercent: -110, opacity: 0, duration: .35, stagger: { each: .08, from: "end" }, ease: "power3.in" }, .05), e.to(this.rule, { width: "0%", duration: .3, ease: "power2.in" }, .1), e } _resetStage() { f.set(this.words, { willChange: "transform, opacity", force3D: !0 }), f.set(this.words, { yPercent: 110, opacity: 0 }), f.set(this.rule, { width: "0%" }) } _playWaitingLoop() { this._waitingTl || (this._waitingTl = f.timeline({ repeat: -1 }), this._waitingTl.to(this.rule, { opacity: .4, duration: .8, ease: "sine.inOut", yoyo: !0, repeat: -1 })) } _stopWaitingLoop() { var e; null == (e = this._waitingTl) || e.kill(), this._waitingTl = null, f.set(this.rule, { opacity: 1 }) } async cover(e = "") { if (!this.isTransitioning && this.path) return this.isTransitioning = !0, this._setDestination(e), this._resetStage(), S.emit("transition:start", {}, !0), new Promise(e => { const t = f.timeline({ onComplete: e, defaults: { ease: "power3.inOut" } }); t.set(this.path, { attr: { d: L.start } }).to(this.path, { duration: .7, ease: "power4.in", attr: { d: L.curve } }).to(this.path, { duration: .3, ease: "power2.out", attr: { d: L.end } }).to(this.path, { duration: .5, ease: "sine.inOut", attr: { d: L.hold } }, 1), t.add(this._playStageIn(), 1.1), t.call(() => this._playWaitingLoop()), t.to(this.path, { duration: .5, ease: "sine.inOut", attr: { d: L.hold2 } }, 1.5), t.to(this.path, { duration: .4, ease: "sine.out", attr: { d: L.end } }, 2.4) }) } async reveal() { if (this.path) return new Promise(e => { const t = f.timeline({ onComplete: () => { this.isTransitioning = !1, S.emit("transition:end"), e() } }); this._stopWaitingLoop(), t.add(this._playStageOut(), 0), t.set(this.path, { attr: { d: P.start } }, .2).to(this.path, { duration: .25, ease: "sine.in", attr: { d: P.curve } }, .2).to(this.path, { duration: .8, ease: "power4.out", attr: { d: P.end } }, .45) }) } } customElements.define("home-page", class extends i { constructor() { super(), this.layout = null, this._mq = null, this._lastLayout = null, this._onMQChange = this._onMQChange.bind(this) } connectedCallback() { super.connectedCallback(), this._mq = window.matchMedia("(min-width: 1200px)"), this.layout = this._mq.matches ? "desktop" : "mobile", this._lastLayout = this.layout, this._mq.addEventListener("change", this._onMQChange) } _onMQChange(e) { const t = e.matches ? "desktop" : "mobile"; t !== this._lastLayout && location.reload(), this._lastLayout = t } render() { return window.matchMedia("(min-width: 1200px)").matches ? r`<home-desktop></home-desktop>` : r`<home-mobile></home-mobile>` } }); const X = o`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    --font-neue: 'Neue Montreal', sans-serif;
    --bg-almost-dark: rgb(10, 10, 10);
    --bg-almost-white: #fefff8;
    --color-dark: #1a1a1a;

    --cap-pad-left: 5rem;

    --gap: 10px;

    font-family: 'Neue Montreal', sans-serif;
  }

  .about-scroll-container {
    width: 100vw;
    height: 100svh;
    background-color: var(--bg-almost-white);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .about-scroll-container::-webkit-scrollbar {
    display: none;
  }

  .about-page-content {
    width: 100vw;
    background-color: var(--bg-almost-white);
    font-family: var(--font-neue);
    padding-bottom: 5rem;
    color: var(--color-dark);
    padding: clamp(320px, 32vh, 480px) clamp(1rem, 4vw, 4.5rem) 5rem;

    @media (max-width: 1500px) and (min-width: 1229px) {
      padding: 350px 3rem 5rem;
    }

    @media (max-width: 1228px) and (min-width: 993px) {
      padding: 320px 3rem 5rem;
    }

    @media (max-width: 992px) {
      padding: 180px 1rem 5rem;
    }
  }

  .about-hero {
    width: 100vw;
    padding: 0rem 6rem 6rem 0vw;
    font-family: 'Neue Montreal', sans-serif;
    display: flex;
    gap: 15vw;
    margin-bottom: 5rem;

    @media (max-width: 1500px) and (min-width: 1229px) {
      gap: clamp(11rem, 10vw, 12.5rem);
      width: 100%;
    }

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 3vw;
      padding: 0rem;
      width: 100%;
    }
  }

  .interest {
    margin-left: -0.3rem;
  }

  .about-hero-top {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 15vw;

    @media (max-width: 1500px) and (min-width: 1229px) {
      column-gap: clamp(11rem, 10vw, 12.5rem);
    }

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      gap: 3vw;
      padding: 0rem;
      width: 100%;
    }
  }

  .about-hero-image {
    grid-column: 2;
    margin-top: clamp(5rem, 10vh, 11rem);
    margin-bottom: clamp(6rem, 16vh, 16rem);
    padding-left: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .hero-index {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  .hero-titles {
    display: flex;
    line-height: 0.85;
    align-items: flex-start;
    gap: 2rem;
  }

  .works {
    font-size: clamp(4rem, 12vw, 10rem);
    font-weight: 500;
    margin: 0;

    @media (max-width: 1389px) {
      font-size: 8rem;
    }

    @media (max-width: 1229px) {
      font-size: 6rem;
    }

    @media (max-width: 992px) {
      font-size: 4rem;
    }
  }

  .capabilities {

    @media (max-width: 560px) {
      font-size: 3.5rem;
    }

    @media (max-width: 400px) {
      font-size: 3rem;
    }
  }

  .works span {
    font-size: 2rem;
    vertical-align: super;
    margin-left: 0.4rem;
  }

  .hero-description {
    margin-top: clamp(3rem, 8vh, 8rem);
    margin-left: 0.5rem;
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 3rem;
    max-width: 800px;

    @media (max-width: 1229px) {
      margin-left: 0.3rem;
      gap: 1rem;
    }

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      max-width: none;
    }
  }

  .footer {
    margin-top: 5rem;
  }

  .left-label {
    font-size: 1rem;
    font-weight: 500;
  }

  .right-text {
    max-width: 600px;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 500;

    @media (max-width: 1389px) {
      font-size: 1.4rem;
      max-width: 500px;
    }

    @media (max-width: 1228px) {
      font-size: 1.3rem;
      max-width: 300px;
    }

    @media (max-width: 992px) {
      max-width: none;
      margin-right: 0;
      font-weight: 400;
    }
  }

  .f-text {
    margin-bottom: 1rem;
  }

  .about-content {
    width: 100%;
    margin-bottom: clamp(8rem, 18vh, 18rem);
  }

  .image-section {
    width: 100vw;
    height: 90vh;
    height: 100%;
    margin-bottom: clamp(8rem, 18vh, 18rem);
  }

  .about-myself {
    width: 60vw;
    max-width: 800px;

    height: clamp(80svh, 100svh, 120svh);

    @media (max-width: 1500px) {
      width: 55vw;
    }

    @media (max-width: 992px) {
      width: 100%;
      max-width: none;
      /* height: 50vh; */
    }
  }

  .about-myself img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-info {
    line-height: 1.2;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .skills-wrapper {
    display: flex;
    width: 100%;
    margin-bottom: clamp(6rem, 14vh, 14rem);

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 5rem;
    }
  }

  .skills__image {
    width: 600px;
    height: 500px;
    overflow: hidden;
    padding-left: var(--cap-pad-left);
    margin-right: calc(var(--cap-pad-left) + 5rem);

    @media (max-width: 1200px) {
      padding-left: 0rem;
      margin-right: 0rem;
    }

    @media (max-width: 768px) {
      height: 650px;
      width: clamp(340px, 92vw, 500px);
    }

    @media (max-width: 560px) {
      height: 500px;
    }
  }

  .skills__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .skills__list {
    width: 100%;

    @media (max-width: 1200px) {
      padding-left: 5rem;
    }

    @media (max-width: 992px) {
      padding-left: 3rem;
    }

    @media (max-width: 768px) {
      padding-left: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(3rem, 1vw + 2.7rem, 3.75rem);
    }

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  .skills__columns {
    width: 100%;
  }

  .cap-divider {
    width: 100%;
    height: 1px;
    background-color: #000;
    margin: clamp(4rem, 1.33vw + 3.6rem, 5rem) 0;

    @media (max-width: 768px) {
      height: 0px;
    }

    @media (max-width: 700px) {
      height: 1px;
    }
  }

  .skills__row {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 1280px) {
      width: 100%;
    }

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      gap: clamp(3rem, 1vw + 2.7rem, 3.75rem);
    }
  }

  .skills__title {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .skills__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .trip-images {
    width: 100%;
  }

  .full-image img {
    width: 100%;
  }

  .grid {
    margin-bottom: clamp(8rem, 18vh, 18rem);
  }

  @media (max-width: 1389px) {
    .grid {
      display: grid;
      height: auto;
      min-height: 100svh;
      grid-auto-rows: auto;
      grid-auto-columns: auto;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-template-rows: repeat(3, auto);
      justify-content: center;
      align-content: start;
      grid-gap: 1em;
    }

    .grid__item {
      position: relative;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      aspect-ratio: 4/3;
      overflow: hidden;
    }

    .grid--layout-1 .grid__item:nth-child(n + 6) {
      display: none;
    }

    .grid--layout-1 .grid__item:first-child,
    .grid--layout-1 .grid__item:nth-child(2),
    .grid--layout-1 .grid__item:nth-child(3),
    .grid--layout-1 .grid__item:nth-child(4),
    .grid--layout-1 .grid__item:nth-child(5),
    .grid--layout-1 .grid__item:nth-child(6),
    .grid--layout-1 .grid__item:nth-child(7),
    .grid--layout-1 .grid__item:nth-child(8),
    .grid--layout-1 .grid__item:nth-child(9),
    .grid--layout-1 .grid__item:nth-child(10),
    .grid--layout-1 .grid__item:nth-child(11),
    .grid--layout-1 .grid__item:nth-child(12),
    .grid--layout-1 .grid__item:nth-child(13) {
      grid-area: auto;
    }

    .grid--layout-1 .grid__item:first-child {
      grid-area: 1 / 1 / 2 / 3;
      background-image: url(images/trip/trip_1.webp);
    }
    .grid--layout-1 .grid__item:nth-child(2) {
      grid-area: 1 / 3 / 2 / 5;
      background-image: url(images/trip/trip_2.webp);
    }
    .grid--layout-1 .grid__item:nth-child(3) {
      grid-area: 2 / 1 / 3 / 3;
      background-image: url(images/trip/trip_3.webp);
    }
    .grid--layout-1 .grid__item:nth-child(4) {
      grid-area: 2 / 3 / 3 / 5;
      background-image: url(images/trip/trip_4.jpg);
    }
    .grid--layout-1 .grid__item:nth-child(5) {
      grid-column: 1 / -1;
      grid-row: 3;
      width: calc(100vw - 6rem);
      background-image: url(images/trip/trip_5.webp);

      @media (max-width: 992px) {
        width: calc(100vw - 2rem);
      }
    }

    .grid--layout-1 .grid__item--name {
      grid-area: 4 / 1 / 5 / 5;
      font-size: 5vw;
      text-align: center;
      margin: 1em 0;
      color: rgb(255, 100, 50);
    }

    .grid--layout-1 .grid__item--title {
      grid-area: 5 / 1 / 6 / 5;
      font-size: 2.5vh;
      -webkit-writing-mode: horizontal-tb;
      writing-mode: horizontal-tb;
      text-align: center;
      margin: 0.5em 0;
      justify-content: center;
    }

    .grid--layout-1 .grid__item--text {
      grid-area: 6 / 1 / 7 / 5;
      font-size: 0.9em;
      text-align: center;
      margin: 1em 0;
      padding: 0 1em;
      justify-content: center;
    }

    .grid--layout-1 .grid__item--nav {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, auto);
      /* margin-bottom: 10rem; */
    }

    .grid--layout-1 .grid__item:first-child,
    .grid--layout-1 .grid__item:nth-child(2),
    .grid--layout-1 .grid__item:nth-child(3),
    .grid--layout-1 .grid__item:nth-child(4),
    .grid--layout-1 .grid__item:nth-child(5) {
      grid-area: auto;
    }

    .grid--layout-1 .grid__item:first-child {
      grid-area: 1 / 1 / 2 / 2;
    }
    .grid--layout-1 .grid__item:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
    .grid--layout-1 .grid__item:nth-child(3) {
      grid-area: 3 / 1 / 4 / 2;
    }
    .grid--layout-1 .grid__item:nth-child(4) {
      grid-area: 4 / 1 / 5 / 2;
    }
    .grid--layout-1 .grid__item:nth-child(5) {
      grid-area: 5 / 1 / 6 / 2;
    }

    .grid--layout-1 .grid__item--name {
      grid-area: 6 / 1 / 7 / 2;
      font-size: 7vw;
    }

    .grid--layout-1 .grid__item--title {
      grid-area: 7 / 1 / 8 / 2;
      font-size: 1.8vh;
    }

    .grid--layout-1 .grid__item--text {
      grid-area: 8 / 1 / 9 / 2;
      font-size: 0.85em;
    }
  }

  @media (min-width: 1390px) {
    .grid {
      display: grid;
      width: calc(100% - 6em);
      height: calc(100svh - 6em);
      grid-auto-rows: calc((calc(100svh - 6em) / 30) - var(--gap));
      grid-auto-columns: calc((calc(100% - 6em) / 30) - var(--gap));
      justify-content: center;
      align-content: center;
      grid-gap: var(--gap);
      /* margin-bottom: 20rem; */
    }

    .grid__item {
      position: relative;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
    }

    .grid__item--name,
    .grid__item--title,
    .grid__item--text {
      padding: 0;
      margin: 0;
    }

    .grid__item--name,
    .grid__item--title {
      text-transform: uppercase;
      line-height: 0.8;
    }

    .grid__item--name {
      font-size: 7vw;
      color: rgb(255, 100, 50);
    }

    .grid__item--title {
      font-size: 3.5vh;
      text-transform: uppercase;
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;
      text-align: right;
      display: flex;
      justify-content: flex-end;
    }

    .grid__item--text {
      font-size: 0.85em;
      font-weight: 500;
      line-height: 1.2;
      display: flex;
    }

    .grid__item--nav {
      background: rgb(254, 233, 206);
      color: #fff;
      display: flex;
      align-items: center;
    }

    .grid__item--nav-next .icon--nav-arrow {
      margin: 0 0 0 auto;
    }

    .grid__item--nav-prev .icon--nav-arrow {
      transform: rotate(180deg);
      margin: 0;
    }

    .grid--layout-1 .grid__item:first-child {
      grid-area: 11 / 1 / 17 / 5;
      background-image: url(images/trip/trip_1.webp);
    }
    .grid--layout-1 .grid__item:nth-child(2) {
      grid-area: 22 / 6 / 28 / 10;
      background-image: url(images/trip/trip_2.webp);
    }
    .grid--layout-1 .grid__item:nth-child(3) {
      grid-area: 8 / 5 / 22 / 15;
      background-image: url(images/trip/trip_3.webp);
    }
    .grid--layout-1 .grid__item:nth-child(4) {
      grid-area: 22 / 10 / 29 / 15;
      background-image: url(images/trip/trip_4.jpg);
    }
    .grid--layout-1 .grid__item:nth-child(5) {
      grid-area: 1 / 11 / 8 / 15;
      background-image: url(images/trip/trip_5.webp);
    }
    .grid--layout-1 .grid__item:nth-child(6) {
      grid-area: 17 / 15 / 24 / 20;
      background-image: url(images/trip/trip_6.webp);
    }
    .grid--layout-1 .grid__item:nth-child(7) {
      grid-area: 9 / 15 / 17 / 23;
      background-image: url(images/trip/trip_7.jpg);
    }
    .grid--layout-1 .grid__item:nth-child(8) {
      grid-area: 2 / 18 / 9 / 23;
      background-image: url(images/trip/trip_8.webp);
    }
    .grid--layout-1 .grid__item:nth-child(9) {
      grid-area: 17 / 20 / 22 / 26;
      background-image: url(images/trip/trip_9.webp);
    }
    .grid--layout-1 .grid__item:nth-child(10) {
      grid-area: 22 / 20 / 28 / 23;
      background-image: url(images/trip/trip_10.webp);
    }
    .grid--layout-1 .grid__item:nth-child(11) {
      grid-area: 4 / 23 / 11 / 27;
      background-image: url(images/trip/trip_11.webp);
    }
    .grid--layout-1 .grid__item:nth-child(12) {
      grid-area: 11 / 23 / 17 / 30;
      background-image: url(images/trip/trip_12.jpg);
    }
    .grid--layout-1 .grid__item:nth-child(13) {
      grid-area: 17 / 26 / 22 / 28;
      background-image: url(images/trip/trip_13.jpg);
    }
    .grid--layout-1 .grid__item--name {
      grid-area: 6 / 12 / 30 / 25;
    }
    .grid--layout-1 .grid__item--title {
      grid-area: 1 / 27 / 11 / 29;
    }
    .grid--layout-1 .grid__item--text {
      grid-area: 22 / 23 / 30 / 26;
    }
    .grid--layout-1 .grid__item--nav-prev {
      grid-area: 3 / 6 / 8 / 11;
    }
    .grid--layout-1 .grid__item--nav-next {
      grid-area: 24 / 15 / 29 / 20;
    }
  }

  .footer-contact-info {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: clamp(3rem, 10vh, 8rem);

    @media (max-width: 1200px) {
      padding: 1rem 0;
    }

    /* @media (max-width: 992px) {
      margin-bottom: 4rem;
    } */

    @media (max-width: 768px) {
      font-size: clamp(0.75rem, 2.8vw, 0.9rem);
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #000;
  }

  .footer-col {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  .footer-col--right {
    @media (max-width: 992px) {
      align-items: flex-end;
    }
  }

  .title-footer {
    font-size: clamp(5rem, 25vw, 30rem);
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: center;

    font-family: 'FKScreamer', sans-serif;

    padding-inline: 1rem;
    max-width: calc(100vw - 2rem);

    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 992px) {
      margin-bottom: 6rem;

      line-height: 0.85;
    }

    @media (max-width: 768px) {
      padding-inline: 0rem;
    }
  }

  .back-btn {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;

    @media (max-width: 992px) {
      gap: 0.2rem;
    }
  }

  .scroll-progress {
    position: fixed;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: rgba(255, 255, 255, 0.08);
    z-index: 1;

    @media (max-width: 1200px) {
      width: 1px;
    }
  }

  .scroll-progress__bar {
    width: 100%;
    height: 100%;
    background: rgb(255, 100, 50);
    transform-origin: top;
    transform: scaleY(0);
    will-change: transform;
  }

  .title-footer .accent {
    color: #ff6a3d;
  }

  .image-container {
    transform-origin: top left;
    overflow: hidden;
  }

  .about-myself,
  .skills__image {
    overflow: hidden;
  }
`, W = { pageReady: !1 }; class K { constructor(e) { this.eventBus = e, this._handlers = new Map } on(e, t, { once: i = !1 } = {}) { this._handlers.has(e) || this._handlers.set(e, []); const r = i ? (...i) => { t(...i), this.off(e, r) } : t; return this._handlers.get(e).push({ original: t, wrapped: r }), this.eventBus.on(e, r), this } once(e, t) { return this.on(e, t, { once: !0 }) } off(e, t) { const i = this._handlers.get(e); if (!i) return; const r = i.findIndex(e => e.original === t || e.wrapped === t); -1 !== r && (this.eventBus.off(e, i[r].wrapped), i.splice(r, 1)) } destroy() { this._handlers.forEach((e, t) => { e.forEach(({ wrapped: e }) => this.eventBus.off(t, e)) }), this._handlers.clear() } } async function Q() { "loaded" !== document.fonts.status && (await document.fonts.load('1rem "Neue Montreal"'), await document.fonts.ready, await new Promise(requestAnimationFrame), await new Promise(requestAnimationFrame)) } function J(e) { return new Promise(t => { e ? s(e, { background: !0 }, () => t()) : t() }) } function Z(e) { const t = Array.from(e.querySelectorAll("img")).filter(e => e.getBoundingClientRect().top < window.innerHeight); return t.length ? Promise.all(t.map(e => e.complete ? Promise.resolve() : new Promise(t => { e.onload = t, e.onerror = t }))) : Promise.resolve() } class ee { constructor(e) { t(this, "initLenis", () => { this.lenis = new k({ wrapper: this.container, content: this.scroller, orientation: "vertical", lerp: .07, smoothWheel: !0, smooth: !0, wheelMultiplier: .5, touchMultiplier: 1.2, touchInertiaMultiplier: .85, wheelInertiaMultiplier: .75, duration: 1, easing: e => { if (e < .7) return e * (2 - .8 * e); { const t = (e - .7) / .3; return .79 + .21 * Math.pow(t, .3) } }, syncTouch: !1, gestureOrientation: "vertical", infinite: !1, autoResize: !0 }), this._renderState = { scrollProgress: 0, scrollCurrent: 0, tripProgress: 0 }, this.lenis.on("scroll", ({ scroll: e, limit: t }) => { this._renderState.scrollProgress = t ? e / t : 0, this._needsSTUpdate = !0 }), this._mainTickerFn = e => { this.lenis.raf(1e3 * e), this._needsSTUpdate && (w.update(), this._needsSTUpdate = !1); const t = this._renderState; t && this._progressBar && (this._progressBar.style.transform = `scaleY(${t.scrollProgress})`) }, f.ticker.add(this._mainTickerFn), f.ticker.lagSmoothing(0); let e, t = !1; const i = () => { t = !0, clearTimeout(e), .07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY }, r = () => { t = !1, .3 !== this.lenis.options.lerp && (this.lenis.options.lerp = .3), this.lenis.options.easing = this.EASE_BRAKE, e = setTimeout(() => { t || (.07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY) }, 150) }; let o; this._addEventListener(this.container, "wheel", () => { i(), clearTimeout(e), clearTimeout(o), o = setTimeout(() => { e = setTimeout(r, 100) }, 16) }, { passive: !0 }), this._addEventListener(this.container, "touchstart", i, { passive: !0 }), this._addEventListener(this.container, "touchmove", () => { i(), clearTimeout(e) }, { passive: !0 }), this._addEventListener(this.container, "touchend", r, { passive: !0 }) }), this.component = e, this.lenis = null, this.container = null, this.scroller = null, this.parallaxImages = [], this.parallaxItems = [], this.animatedElements = [], this.splitTextAnimations = [], this.splitTextInstances = [], this.textAnimators = [], this._eventBusHandlers = [], this._eventListeners = [], this.isExiting = !1, this._needsSTUpdate = !1, this._hoverCleanups = [], this.scrollTriggers = [], this.hasAnimatedHero = !1, this.EASE_HEAVY = e => 1 === e ? 1 : 1 - Math.pow(2, -12 * e), this.EASE_BRAKE = e => e < .2 ? 5 * e : 1, this.onNavClick = this.onNavClick.bind(this) } async init() { const e = () => { var e; return null == (e = this.lenis) ? void 0 : e.stop() }, t = () => { var e; return null == (e = this.lenis) ? void 0 : e.start() }; this.events = new K(S), this.events.on("page:ready", () => this.createHeroAnimation()).on("transition:start", () => e()).on("transition:end", () => t()).on("page:covered", ({ url: e }) => this.onNavClick({ url: e })), this.initElements(), this.initLenis(), w.defaults({ scroller: this.container }), await Q(), await Z(this.component.shadowRoot), W.pageReady = !0, requestAnimationFrame(() => { S.emit("page:ready") }), this.setupProgressBar(); const i = window.matchMedia("(min-width: 1200px)").matches; this.waitForImages = () => J(this.component.shadowRoot.querySelector(".about-page-content")), this.waitForImages().then(() => { i && (this.animateFadeIn(), this.setupUnifiedParallaxSystem(), this.animateCapabilities(), this.animateCapabilitiesContent(), this.animateInterest(), this.animateTripNotes(), this.setupHoverEvent(), this.setupFooterAnimation()) }), this.setupBackToTop() } async onNavClick({ url: e }) { var t; const i = window.location.pathname; if (!e || e === i) return; if (this.isExiting) return; this.isExiting = !0, null == (t = this.lenis) || t.stop(); window.matchMedia("(min-width: 1200px)").matches && await this.exit(), S.emit("page:exit:done", { url: e }) } exit() { return new Promise(e => { var t; this.scrollTriggers.forEach(e => null == e ? void 0 : e.kill()), null == (t = this.lenis) || t.stop(); const i = this.component.shadowRoot, r = i.querySelector(".about-hero-top"), o = i.querySelector(".about-hero-capabilitty"), s = i.querySelector(".skills"), a = i.querySelector(".interest"), n = i.querySelector(".grid.grid--layout-1"), l = i.querySelector(".title-footer"), c = i.querySelector(".about-page-content"), d = [l, n, a, s, o, r, c].filter(Boolean); f.set(d, { willChange: "transform, opacity", force3D: !0 }), requestAnimationFrame(() => { const t = f.timeline({ defaults: { ease: "power3.in", duration: .6 }, onComplete: () => { this.splitTextInstances.forEach(e => null == e ? void 0 : e.revert()), this.parallaxItems.forEach(e => e.el && (e.el.style.willChange = "auto")), f.set(d, { clearProps: "willChange,transform,opacity" }), e() } }); t.to(l, { y: -70 }, 0), t.to(n, { y: -55 }, .05), t.to(a, { y: -55 }, .1), t.to(s, { y: -50 }, .15), t.to(o, { y: -40 }, .18), t.to(r, { y: -40 }, .24), t.to(c, { y: -20, duration: .45 }, .3) }) }) } initElements() { this.container = this.component.shadowRoot.querySelector(".about-scroll-container"), this.scroller = this.component.shadowRoot.querySelector(".about-page-content") } _removeEventListeners() { this._eventBusHandlers.forEach(({ event: e, handler: t }) => { S.off(e, t) }), this._eventBusHandlers = [], this._eventListeners.forEach(({ element: e, type: t, handler: i }) => { e && e.removeEventListener && e.removeEventListener(t, i) }), this._eventListeners = [] } _addEventListener(e, t, i, r) { e.addEventListener(t, i, r), this._eventListeners.push({ element: e, type: t, handler: i }) } createHeroAnimation() { const e = this.component.shadowRoot.querySelectorAll(".about-hero-top"); this.animateSingleSection = async t => { var i; const r = t.querySelector(".hero-index"), o = t.querySelector(".works"), s = t.querySelector(".left-label"), a = t.querySelector(".right-text"); if (!(r && o && s && a)) return; !(t === e[0]) && (null == (i = document.fonts) ? void 0 : i.ready) && await document.fonts.ready, o && f.set(o, { willChange: "transform", force3D: !0 }), requestAnimationFrame(() => { var e; const t = new b(r, { type: "chars, lines", mask: "lines" }), i = new b(o, { type: "lines", mask: "lines" }), n = new b(s, { type: "lines", mask: "lines" }), l = new b(a, { type: "lines", mask: "lines", linesClass: "right-text__line" }); null == (e = this.splitTextInstances) || e.push(t, i, n, l), f.set(t.chars, { yPercent: 120 }), f.set(i.lines, { yPercent: 110, scaleY: 1.1, transformOrigin: "left bottom" }), f.set(n.lines, { yPercent: 100 }), f.set(l.lines, { yPercent: 100 }); const c = f.timeline(); return c.to(t.chars, { yPercent: 0, stagger: .04, duration: .7, ease: "power3.out" }, 0), c.to(i.lines, { yPercent: 0, scaleY: 1, duration: 1.1, ease: "expo.out", stagger: .06 }, .05), c.to(n.lines, { yPercent: 0, duration: .8, ease: "power3.out" }, .45), c.to(l.lines, { yPercent: 0, stagger: .04, duration: .75, ease: "power3.out" }, .55), c.call(() => { o && f.set(o, { willChange: "auto" }) }), c }) }, e.forEach(e => this.animateSingleSection(e)) } setupUnifiedParallaxSystem() { this.collectParallaxItems(); const e = new IntersectionObserver(e => { e.forEach(e => { const t = e.target.__parallax; t && (t.isVisible = e.isIntersecting, e.isIntersecting || (t.currentY = t.targetY)) }) }, { root: this.container, rootMargin: "40% 0px" }); this._parallaxObserver = e, this.parallaxItems.forEach(t => { t.isVisible = !1, t.targetY = 0, t.el.__parallax = t, e.observe(t.el), t.trigger = w.create({ trigger: t.el, scroller: this.container, start: "top bottom", end: "bottom top", scrub: !0, onUpdate: e => { if (!t.isVisible) return; const i = t.movableRange ?? t.range; t.targetY = -e.progress * i * t.speed } }), this.scrollTriggers.push(t.trigger) }), this._parallaxTickerFn = () => { this.parallaxItems.forEach(e => { if (!e.isVisible || !e.el) return; if (void 0 === e.targetY) return; const t = e.targetY - (e.currentY ?? e.targetY); e.currentY = (e.currentY ?? e.targetY) + t * (e.intensity ?? .1), Math.abs(t) < .01 || e.el._ySetter(e.currentY) }) }, f.ticker.add(this._parallaxTickerFn) } collectParallaxItems() { this.parallaxItems.forEach(e => { e.trigger && e.trigger.kill() }), this.parallaxItems = []; const e = this.component.shadowRoot.querySelectorAll("[data-parallax-image]"), t = this.component.shadowRoot.querySelectorAll("[data-parallax]:not(.grid.grid--layout-1)"); this.parallaxImages = Array.from(e).map(e => { const t = e.closest(".about-myself, .skills__image") || e.parentElement; t && (t.style.overflow = "hidden"), e.style.height = "120%", e.style.objectFit = "cover", f.set(e, { willChange: "transform" }), e._ySetter = f.quickSetter(e, "y", "px"); const i = (null == t ? void 0 : t.offsetHeight) || 0, r = e.offsetHeight, o = r - i; return { el: e, type: "image-content", speed: parseFloat(e.dataset.speed || .3), intensity: parseFloat(e.dataset.intensity || .1), range: parseFloat(e.dataset.range || 100), currentY: 0, targetY: 0, containerHeight: i, imageHeight: r, movableRange: o } }), this.parallaxSections = Array.from(t).map(e => (e._ySetter = f.quickSetter(e, "y", "px"), { el: e, type: "section", speed: parseFloat(e.dataset.speed || .15), intensity: parseFloat(e.dataset.intensity || .15), range: parseFloat(e.dataset.range || 180), currentY: 0, targetY: 0 })), this.parallaxItems = [...this.parallaxImages, ...this.parallaxSections] } animateFadeIn() { const e = this.component.shadowRoot.querySelector(".img-info"), t = this.component.shadowRoot.querySelector(".image-container"), i = this.component.shadowRoot.querySelector(".about-hero-image"); if (!e || !t || !i) return; f.set(t, { willChange: "transform, opacity", force3D: !0 }), f.set(t, { scale: .88, opacity: 0, y: -60, rotation: -8, transformOrigin: "center bottom" }); const r = new b(e, { type: "chars, lines", mask: "lines" }); this.splitTextInstances.push(r), f.set(r.lines, { yPercent: 100 }); const o = f.timeline(); o.to(t, { scale: 1, opacity: 1, y: 0, rotation: 0, duration: 1.2, ease: "back.out(1.4)", force3D: !0, onComplete: () => f.set(t, { willChange: "auto" }) }, 0), o.to(r.lines, { yPercent: 0, stagger: .05, duration: .7, ease: "power3.out" }, .5); const s = w.create({ trigger: i, scroller: this.container, start: "top 90%", once: !0, animation: o }); this.scrollTriggers.push(s) } animateCapabilities() { const e = this.component.shadowRoot.querySelectorAll(".hero-index")[1], t = this.component.shadowRoot.querySelector(".works.capabilities"), i = this.component.shadowRoot.querySelector(".about-hero-capabilitty"); if (!e || !t || !i) return; f.set(t, { willChange: "transform, opacity", force3D: !0 }); const r = new b(e, { type: "chars, lines", mask: "lines" }), o = new b(t, { type: "lines", mask: "lines" }); this.splitTextInstances.push(r, o), f.set(r.chars, { yPercent: -100 }), f.set(o.lines, { y: 80, opacity: 0, scaleY: 1.2, transformOrigin: "left bottom" }); const s = f.timeline({ paused: !0 }); s.to(r.chars, { yPercent: 0, stagger: { each: .08, from: "start" }, duration: .6, ease: "power3.out" }, 0), s.to(o.lines, { y: 0, opacity: 1, scaleY: 1, duration: 1.1, ease: "expo.out", stagger: .06 }, .2); const a = w.create({ trigger: i, scroller: this.container, start: "top 95%", once: !0, onEnter: () => s.play() }); this.scrollTriggers.push(a) } animateCapabilitiesContent() { const e = this.component.shadowRoot.querySelector(".skills__image img"), t = this.component.shadowRoot.querySelector(".skills__image"), i = this.component.shadowRoot.querySelectorAll(".skills__columns"); if (!e || !t || !i.length) return; f.set(t, { scale: .82, opacity: 0, transformOrigin: "center center", force3D: !0, willChange: "transform, opacity" }), f.set(e, { scale: 1.22, transformOrigin: "center center", force3D: !0, willChange: "transform" }); const r = Array.from(i).map((e, t) => { const i = e.querySelector(".skills__title"), r = e.querySelectorAll(".skills__content p"), o = e.querySelector(".cap-divider"); if (!i) return null; const s = new b(i, { type: "chars, lines", mask: "lines" }); this.splitTextInstances.push(s), f.set(s.chars, { yPercent: 120 }); const a = []; return r.forEach(e => { const t = new b(e, { type: "lines", mask: "lines" }); this.splitTextInstances.push(t), a.push(...t.lines) }), a.length && f.set(a, { yPercent: 100, opacity: 0 }), o && f.set(o, { scaleX: 0, transformOrigin: "left center" }), { column: e, titleSplit: s, allSplitLines: a, divider: o, delay: .12 * t } }).filter(Boolean), o = w.create({ trigger: t, scroller: this.container, start: "top 85%", once: !0, onEnter: () => { f.to(t, { scale: 1, opacity: 1, duration: 1.3, ease: "expo.out", onComplete: () => f.set(t, { willChange: "auto" }) }), f.to(e, { scale: 1, duration: 1.6, ease: "power3.out" }) } }); this.scrollTriggers.push(o); const s = w.create({ trigger: t, scroller: this.container, start: "top bottom", end: "bottom top", scrub: !0, onUpdate: t => { f.set(e, { yPercent: -22 * t.progress }) }, onLeave: () => f.set(e, { willChange: "auto" }) }); this.scrollTriggers.push(s), r.forEach(({ column: e, titleSplit: t, allSplitLines: i, divider: r, delay: o }) => { const s = f.timeline({ paused: !0, delay: o }); s.to(t.chars, { yPercent: 0, stagger: .025, duration: .8, ease: "expo.out" }, 0), r && s.to(r, { scaleX: 1, duration: 1, ease: "power3.inOut" }, .1), i.length > 0 && s.to(i, { yPercent: 0, opacity: 1, stagger: .05, duration: .7, ease: "power3.out" }, .25); const a = w.create({ trigger: e, scroller: this.container, start: "top 88%", once: !0, onEnter: () => s.play() }); this.scrollTriggers.push(a) }) } animateInterest() { const e = this.component.shadowRoot.querySelector(".interest"); if (!e) return; const t = e.querySelector(".hero-index"), i = e.querySelector(".works"), r = e.querySelectorAll(".hero-description"); if (!t || !i) return; f.set(i, { willChange: "transform", force3D: !0 }); const o = new b(t, { type: "chars, lines", mask: "lines" }), s = new b(i, { type: "lines", mask: "lines" }); this.splitTextInstances.push(o, s), f.set(o.chars, { yPercent: -100 }), f.set(s.lines, { y: 80, opacity: 0, scaleY: 1.2, transformOrigin: "left bottom" }); const a = f.timeline({ paused: !0 }); a.to(o.chars, { yPercent: 0, stagger: { each: .08, from: "start" }, duration: .6, ease: "power3.out" }, 0), a.to(s.lines, { y: 0, opacity: 1, scaleY: 1, duration: 1.1, ease: "expo.out", stagger: .06 }, .2), r.forEach((e, t) => { const i = e.querySelector(".left-label"), r = e.querySelectorAll(".right-text p"), o = .5 + .2 * t; if (i) { const e = new b(i, { type: "lines", mask: "lines" }); this.splitTextInstances.push(e), f.set(e.lines, { y: 40, opacity: 0 }), a.to(e.lines, { y: 0, opacity: 1, duration: .8, ease: "power3.out" }, o) } if (r.length) { const e = []; r.forEach(t => { const i = new b(t, { type: "lines", mask: "lines" }); this.splitTextInstances.push(i), e.push(...i.lines) }), f.set(e, { yPercent: 100 }), a.to(e, { yPercent: 0, stagger: .05, duration: .7, ease: "power3.out" }, o + .12) } }); const n = w.create({ trigger: e, scroller: this.container, start: "top 95%", once: !0, onEnter: () => a.play() }); this.scrollTriggers.push(n), a.call(() => f.set(i, { willChange: "auto" })) } animateTripNotes() { const e = this.component.shadowRoot.querySelector(".grid.grid--layout-1"), t = null == e ? void 0 : e.querySelectorAll(".grid__item"), i = null == e ? void 0 : e.querySelector(".grid__item--name"), r = null == e ? void 0 : e.querySelector(".grid__item--title"), o = null == e ? void 0 : e.querySelector(".grid__item--text"), s = null == e ? void 0 : e.querySelectorAll(".grid__item--nav"); if (!e || !(null == t ? void 0 : t.length)) return; const a = Array.from(t).slice(0, 13); f.set(a, { willChange: "transform, opacity", force3D: !0 }), f.set(a, { opacity: 0, y: 50, scale: .94, transformOrigin: "center center" }); const n = w.create({ trigger: e, scroller: this.container, start: "top 80%", once: !0, onEnter: () => { f.to(a, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "expo.out", stagger: { each: .06, from: "start" }, onComplete: () => { f.set(a, { willChange: "auto" }) } }) } }); this.scrollTriggers.push(n); const l = f.timeline({ scrollTrigger: { trigger: e, scroller: this.container, start: "top 80%", once: !0 } }); if (i) { const e = new b(i, { type: "lines", mask: "lines" }); this.splitTextInstances.push(e), f.set(e.lines, { y: 80, opacity: 0, scaleY: 1.15, transformOrigin: "left bottom" }), l.to(e.lines, { y: 0, opacity: 1, scaleY: 1, duration: 1.1, ease: "expo.out", stagger: .08 }, .4) } if (r) { const e = new b(r, { type: "lines", mask: "lines" }); this.splitTextInstances.push(e), f.set(e.lines, { y: 40, opacity: 0 }), l.to(e.lines, { y: 0, opacity: 1, duration: .8, ease: "power3.out" }, .65) } if (o) { const e = new b(o, { type: "lines", mask: "lines" }); this.splitTextInstances.push(e), f.set(e.lines, { yPercent: 100 }), l.to(e.lines, { yPercent: 0, stagger: .06, duration: .7, ease: "power3.out" }, .8) } l.scrollTrigger && this.scrollTriggers.push(l.scrollTrigger), (null == s ? void 0 : s.length) && (f.set(s, { opacity: 0, y: 20 }), l.to(s, { opacity: 1, y: 0, duration: .6, ease: "power2.out", stagger: .1 }, 1)), this._tripItems = a; const c = w.create({ trigger: e, scroller: this.container, start: "top bottom", end: "bottom top", scrub: !0, onUpdate: e => { this._renderState && (this._renderState.tripProgress = e.progress) } }); this.scrollTriggers.push(c), this._tripParallaxFn = () => { if (!this._tripItems || !this._renderState) return; const e = this._renderState.tripProgress; this._tripItems.forEach(t => { const i = parseFloat(t.dataset.delay || 0), r = "ttb" === t.dataset.direction ? 1 : -1, o = i > 300 ? .06 : i > 150 ? .12 : .2; f.set(t, { yPercent: 50 * -o * r * e }) }) }, f.ticker.add(this._tripParallaxFn) } setupHoverEvent() { const e = this.component.shadowRoot.querySelector(".back-btn"), t = this.component.shadowRoot.querySelectorAll(".footer-socials"); if (!e || !t) return; const i = () => S.emit("cursor:mode", { mode: "hover-nav" }), r = () => S.emit("cursor:mode", { mode: "default" }), o = () => S.emit("cursor:mode", { mode: "hover-nav" }), s = () => S.emit("cursor:mode", { mode: "default" }); e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", r), t.forEach(e => { e.addEventListener("mouseenter", o), e.addEventListener("mouseleave", s) }), this._hoverCleanups.push(() => { e.removeEventListener("mouseenter", i), e.removeEventListener("mouseleave", r), t.forEach(e => { e.removeEventListener("mouseenter", o), e.removeEventListener("mouseleave", s) }) }) } setupProgressBar() { const e = this.component.shadowRoot.querySelector(".scroll-progress__bar"); e && (this._progressBar = e) } setupFooterAnimation() { const e = this.component.shadowRoot.querySelector(".footer-contact-info"), t = this.component.shadowRoot.querySelector(".title-footer"), i = null == t ? void 0 : t.querySelector(".accent"); if (!e || !t || !i) return; f.set(e, { opacity: 0, y: 30 }), f.set(i, { opacity: 0, y: 20, color: "transparent" }); const r = w.create({ trigger: e, start: "top 85%", once: !0, onEnter: () => { f.to(e, { opacity: 1, y: 0, duration: .8, ease: "power3.out" }) } }); this.scrollTriggers.push(r); const o = window.matchMedia("(max-width: 1199px)").matches ? "top 55%" : "top 75%", s = w.create({ trigger: t, start: o, once: !0, onEnter: () => { f.to(i, { opacity: 1, y: 0, color: "#ff6a3d", duration: 1.2, ease: "back.out(1.2)" }) } }); this.scrollTriggers.push(s) } setupBackToTop() { const e = this.component.shadowRoot.querySelector(".back-btn"); if (!e || !this.lenis) return; this.isScrollingToTop = !1, this.scrollToTopAnimation = null; let t = null; const i = e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2; this._addEventListener(e, "click", () => { this.isScrollingToTop || (this.backToTopTimeout && clearTimeout(this.backToTopTimeout), this.isScrollingToTop = !0, t = this.lenis.options.lerp, this.lenis.options.lerp = .15, this.scrollToTopAnimation && this.scrollToTopAnimation.kill(), this.scrollToTopAnimation = this.lenis.scrollTo(0, { duration: 1.4, easing: i, immediate: !1, lock: !0, onComplete: () => { this.isScrollingToTop = !1, null !== t && (this.lenis.options.lerp = t), this.scrollToTopAnimation = null, this.lenis.velocity = 0, this.lenis.targetScroll = 0, this.backToTopTimeout = setTimeout(() => { this.isScrollingToTop = !1 }, 300) } }), this.backToTopTimeout = setTimeout(() => { this.isScrollingToTop = !1, null !== t && (this.lenis.options.lerp = t) }, 2e3)) }), this.setupBackToTopInterruption() } setupBackToTopInterruption() { const e = () => { var e, t; this.isScrollingToTop && (this.scrollToTopAnimation && (null == (t = null == (e = this.scrollToTopAnimation) ? void 0 : e.destroy) || t.call(e), this.scrollToTopAnimation = null), this.isScrollingToTop = !1) }; this._addEventListener(this.container, "wheel", e, { passive: !0 }), this._addEventListener(this.container, "touchmove", e, { passive: !0 }) } stop() { var e, t; this.isExiting = !1, this._mainTickerFn && (f.ticker.remove(this._mainTickerFn), this._mainTickerFn = null), this._parallaxTickerFn && (f.ticker.remove(this._parallaxTickerFn), this._parallaxTickerFn = null), this._tripParallaxFn && (f.ticker.remove(this._tripParallaxFn), this._tripParallaxFn = null), this._renderState = null, this._progressBar = null, this._tripItems = null, null == (e = this.lenis) || e.destroy(), this.lenis = null, this.scrollTriggers.forEach(e => { e && e.kill && e.kill() }), this.splitTextInstances.forEach(e => { e && e.revert && e.revert() }), this.textAnimators.forEach(e => { null == e || e.reset() }), this.events.destroy(), this._removeEventListeners(), this.parallaxItems.forEach(e => { e.el && (e.el.style.willChange = "auto") }), this.titleHoverEffects && (this.titleHoverEffects.forEach(e => { null == e || e.destroy() }), this.titleHoverEffects = []), null == (t = this._parallaxObserver) || t.disconnect(), this._hoverCleanups && (this._hoverCleanups.forEach(e => e()), this._hoverCleanups = []), this.splitTextInstances = [], this.scrollTriggers = [], this.textAnimators = [], this.parallaxItems = [] } } class te extends i {
  constructor() { super(), this.gsapAnimations = null, this.hasGSAPStarted = !1, this._isMounted = !1 } firstUpdated() { var e; null == (e = window.app) || e.queueAnimation(() => this.runHomeAnimations(), "about-page") } async runHomeAnimations() { this._isMounted && (this.hasGSAPStarted || (this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.gsapAnimations = new ee(this), window.currentAnimation = this.gsapAnimations, await this.gsapAnimations.init(), this.hasGSAPStarted = !0)) } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } disconnectedCallback() { super.disconnectedCallback(), this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.hasGSAPStarted = !1 } render() {
    return r`
  <nav-bar currentPage="/about"></nav-bar>

  <div class="scroll-progress">
    <div class="scroll-progress__bar"></div>
  </div>

  <div class="about-scroll-container">
    <div class="about-page-content">
      <section
        class="about-hero-top"
        data-parallax
        data-speed="0.15"
        data-intensity="0.15"
        data-range="180"
      >
        <div class="hero-row-left">
          <div class="hero-index">01/</div>
        </div>

        <div class="hero-row-right">
          <div class="hero-titles" style="display: flex; flex-wrap: nowrap; width: max-content;">
            <h1 class="works" style="white-space: nowrap;">
              NITHIN&nbsp;R
            </h1>
          </div>

          <div class="hero-description">
            <div class="left-label">HI THERE</div>
            <div class="right-text">
              <div class="f-text">
                <p>
                  I’m a software engineer focusing on intelligent full-stack systems, blending
                  engineering discipline with modern web craftsmanship.
                </p>
              </div>

              <div class="l-text">
                <p>
                  I care about simplicity, technical depth, and secure performance. Whether I’m
                  designing a REST API or shaping a frontend flow, I prioritize precision and a calm,
                  intentional pace.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-hero-image">
          <div class="img-info">Hoa Xa Tunnel, Da Lat</div>
          <div class="about-myself" data-scroll-image>
            <div class="image-container" style="overflow: hidden; height: 100%;">
              <img
                class="img-hero"
                src="/images/about_me.jpg"
                data-parallax-image
                data-speed="0.5"
                data-intensity="0.08"
                data-range="320"
                style="width: 100%; height: 120%; object-fit: cover;"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        class="about-content"
        data-parallax
        data-speed="0.2"
        data-intensity="0.15"
        data-range="180"
      >
        <section class="about-hero about-hero-capabilitty">
          <div class="hero-row-left">
            <div class="hero-index">02/</div>
          </div>

          <div class="hero-row-right">
            <div class="hero-titles">
              <h1 class="works capabilities">CAPABILITIES</h1>
            </div>
          </div>
        </section>

        <div class="skills">
          <div class="skills-wrapper">
            <div class="skills__image" data-scroll-image>
              <img src="/images/myself_2.jpg" />
            </div>

            <div class="skills__list">
              <div class="skills__columns">
                <div class="skills__row">
                  <div class="skills__title">Development</div>

                  <div class="skills__content">
                    <p>Backend Engineering</p>
                    <p>API Design</p>
                    <p>Database Design</p>
                    <p>REST API Development</p>
                    <p>Authentication & Security</p>
                    <p>Testing & QA</p>
                  </div>
                </div>

                <div class="cap-divider"></div>
              </div>

              <div class="skills__columns">
                <div class="skills__row">
                  <div class="skills__title">Interface</div>

                  <div class="skills__content">
                    <p>Frontend Engineering</p>
                    <p>Responsive UI Design</p>
                    <p>Component Architecture</p>
                    <p>UI Tooling</p>
                  </div>
                </div>

                <div class="cap-divider"></div>
              </div>

              <div class="skills__columns">
                <div class="skills__row">
                  <div class="skills__title">Technologies</div>

                  <div class="skills__content">
                    <p>React.js · Next.js · Angular · Node.js · Express.js · Flask</p>
                    <p>Python · Java · JavaScript · C</p>
                    <p>MySQL · MongoDB · Firebase · H2</p>
                    <p>AWS · Git · GitHub · Vercel · Netlify · n8n · Framer</p>
                  </div>
                </div>

                <div class="cap-divider"></div>
              </div>

              <div class="skills__columns">
                <div class="skills__row">
                  <div class="skills__title">AI & ML</div>

                  <div class="skills__content">
                    <p>Scalable ML inference · Deep Learning · LLM Integration</p>
                    <p>CNN · OpenCV · TensorFlow</p>
                    <p>SHAP · XGBoost</p>
                  </div>
                </div>

                <div class="cap-divider"></div>
              </div>

              <div class="skills__columns">
                <div class="skills__row">
                  <div class="skills__title">Others</div>

                  <div class="skills__content">
                    <p>OOP Principles</p>
                    <p>Code Readability, Maintainability, DRY</p>
                    <p>Web3 · Blockchain · AES Encryption · JWT Auth</p>
                    <p>Apache Kafka · Real-time Data Streaming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="about-hero interest"
        data-parallax
        data-speed="0.2"
        data-intensity="0.15"
        data-range="180"
      >
        <div class="hero-row-left">
          <div class="hero-index" style="white-space: nowrap;">03/</div>
        </div>

        <div class="hero-row-right">
          <div class="hero-titles" style="text-align: center;">
            <h1 class="works">ACHIEVEMENTS</h1>
          </div>

          <div class="hero-description">
            <div class="left-label">2025</div>
            <div class="right-text">
              <p>
                Achieved 6th Place at the EKAIVA 2025 National Hackathon, competing against 130+ teams nationwide. Secured a Top 5 finish at the CUK-CS National Hackathon among 80+ teams with <strong>TrustLens AI</strong>, an AI-powered bias detection platform focused on fairness, transparency, and explainable AI.
              </p>
            </div>
          </div>

          <div class="hero-description">
            <div class="left-label">2026</div>
            <div class="right-text">
              <p>
                Organized <strong>Xypheria 2026</strong>, a National-Level 24-Hour Hackathon at Alva's Institute of Engineering and Technology under the <strong>C-Maniax CSE Student Club</strong>, successfully managing a competition with <strong>60 participating teams</strong>. Led volunteer coordination, institutional approvals, logistics, and end-to-end event execution.
              </p>
            </div>
          </div>

          <div class="hero-description footer">
            <div class="left-label">Community</div>
            <div class="right-text">
              <p>
                Delivered cybersecurity awareness workshops to <strong>120+ college students</strong> and conducted digital safety sessions for <strong>150+ school students across three institutions</strong>, educating students on cyber hygiene, phishing awareness, password security, online privacy, and responsible digital practices.
              </p>
            </div>
          </div>
        </div>
      </section>

<div class="about-footer">
        <div class="divider"></div>
        <div class="footer-contact-info">
          <div class="footer-col footer-col--left">
            <p>nithinr123n8@gmail.com</p>
            <p>+91 9164733579</p>
          </div>

          <div class="footer-col footer-col--right">
            <p class='footer-socials'>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/Nithin-R08">Github</a>
            </p>
            <p class='footer-socials'>
              <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/nithin-rnitr/">LinkedIn</a>
            </p>

            <div class="back-btn">
              <span>Back to top</span>
              <div class="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="
                  width: clamp(12px, 1vw, 20px);
                  height: clamp(12px, 1vw, 20px);
                  transform: rotate(-90deg);
                "
                >
                  <path d="M13 19L19.5 12L13 5" stroke="black" stroke-miterlimit="10"></path>
                  <path d="M19 12H3" stroke="black" stroke-miterlimit="10"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="title-footer">Let<span class="accent">’</span>s have a chat</div>
      </div>
    </div>
  </div>

  <footer-nav></footer-nav>
`}
} function ie(e, t = {}) { if (!window.app) return; const { replace: i = !1 } = t; i ? (window.history.replaceState({}, "", e), window.app.loadPage(e, !1)) : window.app.coordinator.navigate(e) } t(te, "styles", [X]), customElements.define("about-page", te); const re = o`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    --font-neue: 'Neue Montreal', sans-serif;
    --bg-almost-white: #fefff8;
    --color-dark: #000;
    --color-gray: #555555;
    --background: #e3e4d8;

    font-family: 'Neue Montreal', sans-serif;
  }

  .work-scroll-container {
    width: 100vw;
    height: 100svh;
    background-color: var(--bg-almost-white);
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .work-scroll-container::-webkit-scrollbar {
    display: none;
  }

  .work-page-content {
    width: 100vw;
    background-color: var(--bg-almost-white);
    font-family: var(--font-neue);
    padding: clamp(320px, 32vh, 480px) clamp(1rem, 4vw, 4.5rem) 5rem;

    @media (max-width: 1500px) and (min-width: 1229px) {
      padding: 350px 3rem 5rem;
    }

    @media (max-width: 1228px) and (min-width: 993px) {
      padding: 320px 3rem 5rem;
    }

    @media (max-width: 992px) {
      padding: 180px 1rem 5rem;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .projects-hero {
    width: 100vw;
    padding: 0rem 6rem 6rem 0rem;
    font-family: 'Neue Montreal', sans-serif;
    display: flex;
    gap: 15vw;
    margin-bottom: clamp(6rem, 12vh, 13rem);

    @media (max-width: 1500px) and (min-width: 1229px) {
      gap: clamp(11rem, 10vw, 12.5rem);
      margin-bottom: 12.5rem;
      width: 100%;
    }

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 3vw;
      margin-bottom: 14.5rem;
      padding: 0rem;
      width: 100%;
    }
  }

  .hero-index {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  .hero-titles {
    display: flex;
    line-height: 0.85;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: 1389px) {
      gap: 1.5rem;
    }

    @media (max-width: 1229px) {
      gap: 1rem;
    }

    @media (max-width: 992px) {
      gap: 0.5rem;
    }
  }

  .hero-titles span {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1rem;

    @media (max-width: 1389px) {
      font-size: 1.7rem;
    }

    @media (max-width: 1229px) {
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }

    @media (max-width: 992px) {
      font-size: 1.3rem;
      margin-top: 0.1rem;
    }
  }

  .projects {
    font-size: clamp(4rem, 12vw, 10rem);
    font-weight: 500;
    margin: 0;

    @media (max-width: 1389px) {
      font-size: 8rem;
    }

    @media (max-width: 1229px) {
      font-size: 6rem;
    }

    @media (max-width: 992px) {
      font-size: 4rem;
    }

    @media (max-width: 390px) {
      font-size: 3.5rem;
    }
  }

  .projects p {
    font-size: clamp(4rem, 12vw, 10rem);
    font-weight: 500;
    color: #e0e0dc;
    margin: 0;

    @media (max-width: 1389px) {
      font-size: 8rem;
    }

    @media (max-width: 1229px) {
      font-size: 6rem;
    }

    @media (max-width: 992px) {
      font-size: 4rem;
    }
  }

  .projects span {
    font-size: 2rem;
    vertical-align: super;
    margin-left: 0.4rem;
  }

  .hero-description {
    margin-top: clamp(3rem, 8vh, 8rem);
    margin-left: 0.5rem;
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 3rem;

    @media (max-width: 1229px) {
      gap: 1rem;
    }

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
    }
  }

  .left-label {
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 992px) {
      font-size: 1.2rem;
    }
  }

  .right-text {
    max-width: 600px;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 500;
    margin-right: 4rem;

    @media (max-width: 1389px) {
      font-size: 1.4rem;
      max-width: 500px;
    }

    @media (max-width: 1228px) {
      font-size: 1.3rem;
      max-width: 400px;
    }

    @media (max-width: 992px) {
      max-width: none;
      margin-right: 0;
      font-weight: 400;
    }
  }

  .personal {
    margin-left: -0.3rem;
  }

  .divider-wrapper {
    padding: 0 1.5rem;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #000;
  }

  .item-divider {
    margin: 1rem 0rem;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      margin: 0.5rem 0rem;
    }
  }

  .top-divider {
    width: 100%;
    height: 1px;
    background-color: #000;
    opacity: 0.15;
    margin-bottom: 1rem;
  }

  .project-pair {
    width: 100%;
    height: auto;
    margin-bottom: clamp(8rem, 14vh, 12rem);
  }

  .project-card {
    display: block;
    width: 100%;
  }

  .project-card + .project-card {
    margin-top: clamp(4rem, 8vh, 6rem);
  }

  .flex-left {
    position: relative;
    display: flex;
    gap: clamp(2rem, 4vw, 4rem);
    width: 100%;
    min-height: auto;

    @media (max-width: 1500px) and (min-width: 993px) {
      gap: clamp(1.5rem, 3vw, 2.5rem);
      min-height: auto;
    }

    @media (max-width: 992px) {
      flex-direction: column-reverse;
      justify-content: flex-end;
      gap: 1.5rem;
      min-height: auto;
    }
  }

  .top {
    margin-bottom: clamp(3rem, 6vh, 4rem);
  }

  .project-card-media__1 {
    width: 40vw;
    height: 120vh;
    cursor: pointer;
    overflow: hidden;

    @media (max-width: 1500px) and (min-width: 993px) {
      width: 47vw;
      height: 120vh;
    }

    @media (max-width: 992px) {
      width: 100%;
      height: 50vh;
    }
  }

  .project-card-media__1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 992px) {
      object-fit: fill;
    }
  }

  .project-card-media__2 {
    width: 30vw;
    height: 80vh;
    border: 1px solid rgba(0, 0, 0, 0.07);
  }

  .project-card-media__2 img {
    width: 100%;
    height: 100%;
  }

  .project-card-info {
    display: flex;
    align-items: flex-start;
    width: min(30vw, 460px);
    min-width: 0;
    padding-bottom: 0;
  }

  .project-card-copy {
    width: 100%;
    max-width: 460px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .project-card-kicker {
    font-size: 0.75rem;
    line-height: 1.2;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.58);
  }

  .project-card-title {
    font-weight: 500;
    font-size: clamp(2.8rem, 4vw, 4.8rem);
    margin-bottom: 0;
    line-height: 0.92;
    cursor: pointer;
    max-width: 460px;

    @media (max-width: 1500px) and (min-width: 993px) {
      font-size: clamp(2.6rem, 3.8vw, 4.2rem);
    }

    @media (max-width: 992px) {
      font-size: 3rem;
      max-width: none;
    }
  }

  .project-card-title--hero {
    font-weight: 500;
    font-size: clamp(2.8rem, 4vw, 4.8rem);
    line-height: 0.92;
    letter-spacing: 0;
    cursor: default;
    white-space: nowrap;
    max-width: none;
  }

  .project-card-kicker--subtitle {
    text-transform: none;
    letter-spacing: 0;
    font-size: 1.25rem;
    line-height: 1.2;
    color: var(--color-dark);
    margin-top: 0.35rem;
  }
  .project-card-desc {
    font-size: 1rem;
    font-weight: 400;
    max-width: 460px;
    width: 100%;
    line-height: 1.5;
    margin-bottom: 0;
    color: var(--color-dark);
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: normal;

    @media (max-width: 992px) {
      max-width: none;
      font-size: 1.05rem;
    }
  }

  .project-card-desc p {
    max-width: 34rem;
    white-space: normal;
    text-wrap: pretty;
  }

  .project-role {
    font-weight: 550;
    font-size: 1rem;
    color: var(--color-gray);
    margin-bottom: 0.5rem;
  }

  .works-grid {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    margin-bottom: clamp(6rem, 12vh, 12rem);

    gap: clamp(1.5rem, 4vw, 2.5rem);
  }

  .work-grid-col__1,
  .work-grid-col__2 {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 860px;
    width: 100%;

    @media (max-width: 1500px) and (min-width: 993px) {
      height: 770px;
    }
  }

  .item-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 32%;
  }

  .item-2 {
    position: absolute;
    top: 0;
    left: 40%;
    width: 25%;

    @media (max-width: 1500px) and (min-width: 993px) {
      left: 41%;
      width: 25%;
    }
  }

  .item-3 {
    position: absolute;
    top: 0;
    right: 0;
    width: 15%;
  }

  .item-4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
  }

  .item-5 {
    position: absolute;
    top: 0;
    left: 20%;
    width: 25%;
  }

  .item-6 {
    position: absolute;
    top: 0;
    right: 0;
    width: 32%;
  }

  .work-item {
    display: flex;
    flex-direction: column;
  }

  .work-item-media {
    margin-bottom: 1rem;
    overflow: hidden;
  }

  .work-item-media img {
    width: 100%;
    height: 250px;
  }

  .item-1 .work-item-media img {
    width: 100%;
    height: 650px;

    @media (max-width: 1500px) and (min-width: 993px) {
      height: 550px;
    }
  }

  .item-2 .work-item-media img {
    width: 100%;
    height: 550px;

    @media (max-width: 1500px) and (min-width: 993px) {
      height: 450px;
    }
  }

  .item-3 .work-item-media img,
  .item-3 .work-item-media .code-block-container {
    width: 100%;
    height: 280px;

    @media (max-width: 1500px) and (min-width: 993px) {
      height: 230px;
    }
  }

  .item-4 .work-item-media img {
    width: 100%;
    height: 280px;

    @media (max-width: 1500px) and (min-width: 993px) {
      height: 230px;
    }
  }

  .item-5 .work-item-media img {
    width: 100%;
    height: 550px;

    @media (max-width: 1500px) and (min-width: 993px) {
      height: 450px;
    }
  }

  .item-6 .work-item-media img {
    width: 100%;
    height: 650px;

    @media (max-width: 1500px) and (min-width: 993px) {
      height: 550px;
    }
  }

  .work-item-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .work-item-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 0.8rem;
    letter-spacing: 0.02rem;
    margin-bottom: 0.5rem;
  }

  .work-year {
    width: fit-content;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;

    @media (max-width: 1500px) {
      font-size: 0.65rem;
    }
  }

  .work-meta {
    text-align: right;
    max-width: 160px;
    line-height: 1.2;
    font-weight: 500;

    @media (max-width: 1500px) and (min-width: 1229px) {
      font-size: 0.65rem;
    }

    @media (max-width: 1228px) and (min-width: 993px) {
      font-size: 0.55rem;
    }

    @media (max-width: 768px) and (min-width: 561px) {
      font-size: 0.5rem;
    }
  }

  .work-item-title {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;

    @media (max-width: 1500px) and (min-width: 1229px) {
      font-size: 0.85rem;
    }

    @media (max-width: 1228px) and (min-width: 993px) {
      font-size: 0.75rem;
    }

    @media (max-width: 768px) and (min-width: 561px) {
      font-size: 0.7rem;
    }
  }

  .work-item-sub {
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 1500px) and (min-width: 1229px) {
      font-size: 0.85rem;
    }

    @media (max-width: 1228px) and (min-width: 993px) {
      font-size: 0.75rem;
    }
  }

  .item-4 .work-item-top,
  .item-5 .work-item-top,
  .item-6 .work-item-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
    margin-bottom: 0.75rem;
  }

  .item-4 .work-meta,
  .item-5 .work-meta,
  .item-6 .work-meta {
    text-align: left;
    max-width: 100%;
    width: 100%;
  }

  .item-4 .work-item-title,
  .item-5 .work-item-title,
  .item-6 .work-item-title {
    max-width: 100%;
    line-height: 1.05;
  }

  .item-4 .work-item-sub,
  .item-5 .work-item-sub,
  .item-6 .work-item-sub {
    max-width: 100%;
    line-height: 1.35;
  }

  .item-1 .work-item-media img,
  .item-2 .work-item-media img {
    border: 1px solid rgba(0, 0, 0, 0.07);
  }

  .footer-contact-info {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: clamp(3rem, 10vh, 8rem);

    overflow: hidden;

    @media (max-width: 1200px) {
      padding: 1rem 0;
    }

    @media (max-width: 768px) {
      font-size: clamp(0.75rem, 2.8vw, 0.9rem);
    }
  }

  .footer-col {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  .footer-col--right {
    @media (max-width: 992px) {
      align-items: flex-end;
    }
  }

  .work-header-h2-footer {
    font-size: clamp(5rem, 25vw, 30rem);
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: center;

    font-family: 'FKScreamer', sans-serif;

    padding-inline: 1rem;
    max-width: calc(100vw - 2rem);

    white-space: nowrap;
    /* overflow: hidden; */

    @media (max-width: 992px) {
      margin-bottom: 6rem;

      line-height: 0.85;
    }

    @media (max-width: 768px) {
      padding-inline: 0rem;
    }
  }

  .work-header-h2-footer .accent {
    color: #ff6a3d;
  }

  @media (max-width: 992px) {
    .work-grid-col__1,
    .work-grid-col__2 {
      position: relative;
      height: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media (max-width: 992px) {
    .item-1,
    .item-2,
    .item-3,
    .item-4,
    .item-5,
    .item-6 {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      width: 100%;
    }
  }

  @media (max-width: 992px) and (min-width: 561px) {
    .work-grid-col__1::after {
      content: '';
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      align-self: flex-start;
      height: 1px;
      background-color: rgb(0, 0, 0);
      margin-top: 3rem;
    }

    .work-grid-col__2::before {
      content: '';
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      align-self: flex-start;
      height: 1px;
      background-color: rgb(0, 0, 0);
      margin-top: 3rem;
    }
  }

  @media (max-width: 992px) and (min-width: 561px) {
    .work-grid-col__2 .item-4 {
      grid-column-start: 2;
    }
  }

  @media (max-width: 992px) {
    .work-item-media {
      aspect-ratio: 1 / 1;
      width: 100%;
      overflow: hidden;
    }

    .work-item-media img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }
  }

  @media (max-width: 560px) {
    .work-grid-col__1,
    .work-grid-col__2 {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  .webgl-layer {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 10;
  }

  .title-line,
  .index-line,
  .number-line,
  .label-line,
  .desc-line {
    overflow: hidden;
    display: block;
  }

  .back-btn {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;

    @media (max-width: 992px) {
      gap: 0.2rem;
    }
  }

  .hover-effect {
    font-kerning: none;
    position: relative;
    white-space: nowrap;
    display: inline-block;
  }

  .hover-effect .word {
    white-space: nowrap;
    display: inline-block;
  }

  .hover-effect .char {
    position: relative;
    display: inline-block;
    --opa: 0;
  }

  .hover-effect--cursor-square .char::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1ch;
    height: 100%;
    background: currentColor;
    opacity: var(--opa);
    pointer-events: none;
  }

  .scroll-progress {
    position: fixed;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: rgba(255, 255, 255, 0.08);
    z-index: 1;

    @media (max-width: 1200px) {
      width: 1px;
    }
  }

  .scroll-progress__bar {
    width: 100%;
    height: 100%;
    background: rgb(255, 100, 50);
    transform-origin: top;
    transform: scaleY(0);
    will-change: transform;
  }

  .image-container {
    transform-origin: top left;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .project-pair {
      margin-bottom: clamp(8rem, 14vh, 14rem);
    }

    .projects-hero {
      margin-bottom: 11rem;
    }

    .works-grid {
      margin-bottom: clamp(6rem, 12vh, 10rem);
    }

    .work-header-h2-footer {
      margin-bottom: 6rem;
    }

    .top {
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 560px) {
    .project-pair {
      margin-bottom: clamp(7rem, 12vh, 10rem);
    }

    .projects-hero {
      margin-bottom: 9rem;
    }
  }
`; class oe { constructor(e) { this.el = e, this.split(), this.isAnimating = !1 } split() { this.splitter = new b(this.el, { type: "chars", charsClass: "shuffle-char" }), this.chars = this.splitter.chars, this.originalChars = this.chars.map(e => e.textContent), this.quickSetters = this.chars.map(e => f.quickSetter(e, "innerHTML")) } animate() { if (this.isAnimating) return; this.isAnimating = !0, f.killTweensOf(this.chars); const e = .04 * (this.chars.length - 1) + .02 + .1; f.delayedCall(e + .1, () => { this.isAnimating = !1 }), this.chars.forEach((e, t) => { let i = 0; const r = this.originalChars[t], o = this.quickSetters[t]; f.fromTo(e, { opacity: 0 }, { opacity: 1, duration: .1, delay: .04 * t, repeat: 2, repeatDelay: .03, repeatRefresh: !0, onUpdate: () => { f.getProperty(e, "opacity") > 0 && o(F[Math.floor(Math.random() * F.length)]) }, onStart: () => { f.set(e, { "--opa": 1 }) }, onRepeat: () => { i++, 1 === i && f.set(e, { "--opa": 0 }) }, onComplete: () => { o(r), f.set(e, { "--opa": 0 }) } }) }) } reset() { this.chars.forEach((e, t) => { f.killTweensOf(e), this.quickSetters[t](this.originalChars[t]), f.set(e, { "--opa": 0, opacity: 1 }) }), this.isAnimating = !1 } } const se = (e, t) => (Math.random() * (t - e) + e).toFixed(2); class ae { constructor(e) { this.DOM = { el: e }, this.DOM.reveal = document.createElement("div"), this.DOM.reveal.className = "hover-reveal", this.totalImages = 10, this.DOM.reveal.style.cssText = "\n      position: fixed;\n      width: 200px;\n      height: 150px;\n      pointer-events: none;\n      z-index: 1000;\n      opacity: 0;\n      top: 0;\n      left: 0;\n    "; let t = ""; for (let i = 0; i <= this.totalImages - 1; ++i)t += `<div class="hover-reveal__img" style="\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-image: url(${this.DOM.el.dataset.img});\n        background-size: cover;\n        background-position: center;\n        background-repeat: no-repeat;\n      "></div>`; this.DOM.reveal.innerHTML = t, document.body.appendChild(this.DOM.reveal), this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll(".hover-reveal__img")], this.initEvents() } initEvents() { this.positionElement = e => { const t = (e => { let t = 0, i = 0; return e || (e = window.event), e.pageX || e.pageY ? (t = e.pageX, i = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, i = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), { x: t, y: i } })(e), i = document.body.scrollLeft + document.documentElement.scrollLeft, r = document.body.scrollTop + document.documentElement.scrollTop; this.DOM.reveal.style.top = t.y + 20 - r + "px", this.DOM.reveal.style.left = t.x + 20 - i + "px" }, this.mouseenterFn = e => { this.positionElement(e), this.showImage() }, this.mousemoveFn = e => requestAnimationFrame(() => { this.positionElement(e) }), this.mouseleaveFn = () => { this.hideImage() }, this.DOM.el.addEventListener("mouseenter", this.mouseenterFn), this.DOM.el.addEventListener("mousemove", this.mousemoveFn), this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn) } showImage() { f.killTweensOf(this.DOM.revealImgs), this.tl = f.timeline({ onStart: () => { this.DOM.reveal.style.opacity = 1, f.set(this.DOM.el, { zIndex: 1e3 }) } }), this.tl.set(this.DOM.revealImgs, { opacity: 0, transformOrigin: "0% 100%" }); for (let e = 0; e <= this.totalImages - 1; ++e)f.set(this.DOM.revealImgs[e], { x: 15 * (this.totalImages - 1 - e) + "%", y: -10 * (this.totalImages - 1 - e) + "%", rotation: `${se(-7, 7)}deg`, scale: e === this.totalImages - 1 ? 1 : se(.2, 1) }), this.tl.add(f.to(this.DOM.revealImgs[e], { duration: e === this.totalImages - 1 ? .8 : .55, ease: e === this.totalImages - 1 ? "power4.out" : "power2.inOut", startAt: e === this.totalImages - 1 ? { opacity: 1, x: "5%", y: "-10%" } : { opacity: 1 }, opacity: e === this.totalImages - 1 ? 1 : 0, x: e === this.totalImages - 1 ? "0%" : null, y: e === this.totalImages - 1 ? "0%" : null }), .06 * e) } hideImage() { f.killTweensOf(this.DOM.revealImgs), this.tl = f.timeline({ onStart: () => { f.set(this.DOM.el, { zIndex: 999 }) }, onComplete: () => { f.set(this.DOM.el, { zIndex: "" }), f.set(this.DOM.reveal, { opacity: 0 }) } }), this.tl.add(f.to(this.DOM.revealImgs[this.totalImages - 1], { duration: .15, ease: "sine.out", opacity: 0 })) } destroy() { this.DOM.el.removeEventListener("mouseenter", this.mouseenterFn), this.DOM.el.removeEventListener("mousemove", this.mousemoveFn), this.DOM.el.removeEventListener("mouseleave", this.mouseleaveFn), this.DOM.reveal && this.DOM.reveal.parentNode && this.DOM.reveal.parentNode.removeChild(this.DOM.reveal), f.killTweensOf(this.DOM.revealImgs), f.killTweensOf(this.DOM.letters), this.tl && this.tl.kill() } } class ne { constructor() { this.store = new WeakMap } getRect(e) { if (this.store.has(e)) return this.store.get(e); const t = e.getBoundingClientRect(); return this.store.set(e, t), t } getImageMetrics(e, t) { if (this.store.has(e)) return this.store.get(e); const i = t || e.parentElement, r = (null == i ? void 0 : i.offsetHeight) || 0, o = e.offsetHeight, s = { containerHeight: r, imageHeight: o, movableRange: o - r }; return this.store.set(e, s), s } invalidate() { this.store = new WeakMap } destroy() { this.store = new WeakMap } } class le { constructor(e) { t(this, "initLenis", () => { this.lenis = new k({ wrapper: this.container, content: this.scroller, orientation: "vertical", lerp: .07, smoothWheel: !0, smooth: !0, wheelMultiplier: .5, touchMultiplier: 1.2, touchInertiaMultiplier: .85, wheelInertiaMultiplier: .75, duration: 1, easing: e => { if (e < .7) return e * (2 - .8 * e); { const t = (e - .7) / .3; return .79 + .21 * Math.pow(t, .3) } }, syncTouch: !1, gestureOrientation: "vertical", infinite: !1, autoResize: !0 }), this._renderState = { scrollProgress: 0, scrollCurrent: 0 }, this.lenis.on("scroll", ({ scroll: e, limit: t }) => { this._renderState.scrollProgress = t ? e / t : 0, this._needsSTUpdate = !0, this.animationCache.invalidate() }), this._mainTickerFn = e => { this.lenis.raf(1e3 * e), this._needsSTUpdate && (w.update(), this._needsSTUpdate = !1); const t = this._renderState; t && this._progressBar && (this._progressBar.style.transform = `scaleY(${t.scrollProgress})`) }, f.ticker.add(this._mainTickerFn), f.ticker.lagSmoothing(0); let e, t = !1; const i = () => { t = !0, clearTimeout(e), .07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY }, r = () => { t = !1, .3 !== this.lenis.options.lerp && (this.lenis.options.lerp = .3), this.lenis.options.easing = this.EASE_BRAKE, e = setTimeout(() => { t || (.07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY) }, 150) }; let o; this._addEventListener(this.container, "wheel", () => { i(), clearTimeout(e), clearTimeout(o), o = setTimeout(() => { e = setTimeout(r, 100) }, 16) }, { passive: !0 }), this._addEventListener(this.container, "touchstart", i, { passive: !0 }), this._addEventListener(this.container, "touchmove", () => { i(), clearTimeout(e) }, { passive: !0 }), this._addEventListener(this.container, "touchend", r, { passive: !0 }) }), this.component = e, this.lenis = null, this.container = null, this.scroller = null, this.parallaxImages = [], this.parallaxItems = [], this.splitTextInstances = [], this.textAnimators = [], this.scrollTriggers = [], this.titleHoverEffects = [], this.isScrollingToTop = !1, this.scrollToTopAnimation = null, this._eventListeners = [], this._hoverCleanups = [], this.isExiting = !1, this._isRunning = !1, this._needsSTUpdate = !1, this._rafId = null, this._ghostStarted = !1, this._blockTransitionProgress = !1, this.EASE_HEAVY = e => 1 === e ? 1 : 1 - Math.pow(2, -12 * e), this.EASE_BRAKE = e => e < .2 ? 5 * e : 1, this.onNavClick = this.onNavClick.bind(this), this.animationCache = new ne, this._resizeHandler = null } async init() { const e = () => { var e; return null == (e = this.lenis) ? void 0 : e.stop() }, t = () => { var e; return null == (e = this.lenis) ? void 0 : e.start() }; this.events = new K(S), this.initElements(), this.initLenis(), w.defaults({ scroller: this.container }), await Q(), this.events.on("page:ready", () => this.createSplitTextAnimation()).on("transition:start", () => e()).on("transition:end", () => t()).on("page:covered", ({ url: e }) => this.onNavClick({ url: e })), this.setupProgressBar(); const i = window.matchMedia("(min-width: 1200px)").matches; W.pageReady = !0, requestAnimationFrame(() => S.emit("page:ready")), this.waitForImages = () => J(this.component.shadowRoot.querySelector(".work-page-content")), this.waitForImages().then(() => { i && (this.setupUnifiedParallaxSystem(), this.animateProjectCards(), this.animateSection2(), this.animateWorksGrid(), this.setupTitleHoverEffects(), this.setupHoverEvent(), this.setupFooterAnimation()) }), this.setupBackToTop(), this._resizeHandler = () => { this.animationCache.invalidate() }, window.addEventListener("resize", this._resizeHandler) } initElements() { const e = this.component.shadowRoot; this.container = e.querySelector(".work-scroll-container"), this.scroller = e.querySelector(".work-page-content") } async onNavClick({ url: e }) { var t; const i = window.location.pathname; if (!e || e === i) return; if (this.isExiting) return; this.isExiting = !0, this._blockTransitionProgress = !0, null == (t = this.lenis) || t.stop(); window.matchMedia("(min-width: 1200px)").matches && await this.exit(), S.emit("page:exit:done", { url: e }) } exit() { return new Promise(e => { var t; this.scrollTriggers.forEach(e => null == e ? void 0 : e.kill()), null == (t = this.lenis) || t.stop(); const i = this.component.shadowRoot, r = i.querySelector(".projects-hero"), o = i.querySelectorAll(".projects-hero")[1], s = i.querySelectorAll(".project-pair"), a = i.querySelector(".works-grid"), n = i.querySelector(".work-footer-layer"), l = i.querySelector(".work-page-content"), c = [n, a, ...s, o, r, l].filter(Boolean); f.set(c, { willChange: "transform, opacity", force3D: !0 }), requestAnimationFrame(() => { const t = f.timeline({ defaults: { ease: "power3.in", duration: .6 }, onComplete: () => { this.splitTextInstances.forEach(e => null == e ? void 0 : e.revert()), this.parallaxItems.forEach(e => e.el && (e.el.style.willChange = "auto")), f.set(c, { clearProps: "willChange,transform,opacity" }), this._blockTransitionProgress = !1, this._ghostStarted = !1, e() } }); t.to(n, { y: -70 }, 0), t.to(a, { y: -55 }, .05), t.to(s, { y: -55 }, .1), t.to(o, { y: -40 }, .18), t.to(r, { y: -40 }, .24), t.to(l, { y: -20, duration: .45 }, .3) }) }) } _addEventListener(e, t, i, r) { e.addEventListener(t, i, r), this._eventListeners.push({ element: e, type: t, handler: i }) } createSplitTextAnimation() { const e = this.component.shadowRoot.querySelector(".projects-hero"); if (!e) return; const t = e.querySelector(".projects"), i = e.querySelector(".hero-index"), r = e.querySelector(".hero-titles span"), o = e.querySelector(".left-label"), s = e.querySelector(".right-text"); t && i && r && o && s && requestAnimationFrame(() => { var e; const a = new b(i, { type: "chars, lines", mask: "lines" }), n = new b(t, { type: "lines", mask: "lines" }), l = new b(r, { type: "chars, lines", mask: "lines" }), c = new b(o, { type: "lines", mask: "lines" }), d = new b(s, { type: "lines", mask: "lines" }); null == (e = this.splitTextInstances) || e.push(a, n, l, c, d), f.set(a.chars, { yPercent: 120 }), f.set(n.lines, { yPercent: 110, scaleY: 1.1, transformOrigin: "left bottom" }), f.set(l.chars, { yPercent: 120 }), f.set(c.lines, { yPercent: 100 }), f.set(d.lines, { yPercent: 100 }); const h = f.timeline({ onComplete: () => { f.set([a.chars, l.chars], { willChange: "auto" }) } }); return h.to(a.chars, { yPercent: 0, stagger: .04, duration: .7, ease: "power3.out" }, 0), h.to(n.lines, { yPercent: 0, scaleY: 1, duration: 1.1, ease: "expo.out", stagger: .06 }, .05), h.to(l.chars, { yPercent: 0, stagger: .06, duration: .8, ease: "power3.out" }, .1), h.to(c.lines, { yPercent: 0, duration: .8, ease: "power3.out" }, .45), h.to(d.lines, { yPercent: 0, stagger: .04, duration: .75, ease: "power3.out" }, .55), h }) } setupUnifiedParallaxSystem() { this.collectParallaxItems(); const e = new IntersectionObserver(e => { e.forEach(e => { const t = e.target.__parallax; t && (t.isVisible = e.isIntersecting, e.isIntersecting || (t.currentY = t.targetY)) }) }, { root: this.container, rootMargin: "40% 0px" }); this.parallaxItems.forEach(t => { t.isVisible = !1, t.el.__parallax = t, e.observe(t.el), t.trigger = w.create({ trigger: t.el, scroller: this.container, start: "top bottom", end: "bottom top", scrub: !0, onUpdate: e => { if (!t.isVisible) return; const i = t.movableRange ?? t.range; t.targetY = -e.progress * i * t.speed } }), this.scrollTriggers.push(t.trigger) }), this._parallaxTickerFn = () => { this.parallaxItems.forEach(e => { if (!e.isVisible || !e.el) return; if (void 0 === e.targetY) return; const t = e.targetY - (e.currentY ?? e.targetY); e.currentY = (e.currentY ?? e.targetY) + t * (e.intensity ?? .1), Math.abs(t) < .01 || e.el._ySetter(e.currentY) }) }, f.ticker.add(this._parallaxTickerFn), this._parallaxObserver = e } collectParallaxItems() { this.parallaxItems.forEach(e => { e.trigger && e.trigger.kill() }), this.parallaxItems = []; const e = this.component.shadowRoot.querySelectorAll("[data-parallax-image]"), t = this.component.shadowRoot.querySelectorAll("[data-parallax]"); this.parallaxImages = Array.from(e).map(e => { const t = e.closest(".project-card-media__1, .work-item-media") || e.parentElement; t && (t.style.overflow = "hidden"), e.style.height = "120%", e.style.objectFit = "cover", f.set(e, { willChange: "transform" }), e._ySetter = f.quickSetter(e, "y", "px"); const i = this.animationCache.getImageMetrics(e, t); return { el: e, type: "image-content", speed: parseFloat(e.dataset.speed || .3), intensity: parseFloat(e.dataset.intensity || .1), range: parseFloat(e.dataset.range || 100), currentY: 0, targetY: 0, containerHeight: i.containerHeight, imageHeight: i.imageHeight, movableRange: i.movableRange } }), this.parallaxSections = Array.from(t).map(e => (e._ySetter = f.quickSetter(e, "y", "px"), { el: e, type: "section", speed: parseFloat(e.dataset.speed || .15), intensity: parseFloat(e.dataset.intensity || .15), range: parseFloat(e.dataset.range || 180), currentY: 0, targetY: 0 })), this.parallaxItems = [...this.parallaxImages, ...this.parallaxSections] } animateProjectCards() { const e = () => { this._parallaxTickerFn && f.ticker.add(this._parallaxTickerFn) }; (() => { this._parallaxTickerFn && f.ticker.remove(this._parallaxTickerFn) })(); const t = this.component.shadowRoot.querySelectorAll(".project-card"); let i = 0; t.forEach(r => { const o = r.querySelector(".project-card-title"), s = r.querySelector(".project-card-desc p"), a = r.querySelector(".project-card-media__1"), n = r.querySelector(".project-card-media__1 img"); if (!o) return; a && n && (f.set(a, { willChange: "transform, opacity", force3D: !0 }), f.set(n, { willChange: "transform", force3D: !0 }), f.set(a, { scale: .6, opacity: 0, transformOrigin: "center center" }), f.set(n, { scale: 1.4, transformOrigin: "center center" })); const l = new b(o, { type: "chars, lines", mask: "lines", charsClass: "char-title" }); this.splitTextInstances.push(l), f.set(l.chars, { yPercent: -100 }); const c = f.timeline({ paused: !0 }); if (a && n && (c.to(a, { scale: 1, opacity: 1, duration: 1, ease: "expo.out", onComplete: () => { f.set(a, { willChange: "auto" }), i++, i >= t.length && e() } }, 0), c.to(n, { scale: 1, duration: 1.4, ease: "power3.out", onComplete: () => f.set(n, { willChange: "auto" }) }, 0)), c.to(l.chars, { yPercent: 0, stagger: { each: .05, from: "start" }, ease: "power3.out" }, .15), s) { s.classList.add("hover-effect", "hover-effect--cursor-square"), r.dataset.hasDescAnimation = "true"; const e = new oe(s); this.textAnimators.push(e), this.splitTextInstances.push(e.splitter), f.set(s, { opacity: 0, visibility: "hidden" }), f.set(e.chars, { opacity: 0, y: 15 }), c.to(s, { opacity: 1, visibility: "visible", duration: .1, ease: "none" }, .4), c.to(e.chars, { opacity: 1, y: 0, duration: .6, ease: "power3.out", stagger: .01 }, .45), c.call(() => { e.isAnimating || e.animate() }, null, .4) } const d = w.create({ trigger: r, scroller: this.container, start: "top 72%", toggleActions: "play none none reverse", animation: c }); this.scrollTriggers.push(d) }) } animateSection2() { const e = this.component.shadowRoot.querySelectorAll(".projects-hero")[1]; if (!e) return; const t = e.querySelector(".hero-titles span"), i = e.querySelector(".left-label"), r = e.querySelector(".right-text"); if (!t || !i || !r) return; const o = new b(t, { type: "chars, lines", mask: "lines" }), s = new b(i, { type: "lines", mask: "lines" }), a = new b(r, { type: "lines", mask: "lines" }); this.splitTextInstances.push(o, s, a), f.set(o.chars, { yPercent: -100 }), f.set(s.lines, { y: 40, opacity: 0 }), f.set(a.lines, { y: 50, opacity: 0 }); const n = f.timeline({ paused: !0 }); n.to(o.chars, { yPercent: 0, stagger: { each: .1, from: "start" }, ease: "power3.out" }, 0), n.to(s.lines, { y: 0, opacity: 1, duration: .8, ease: "power3.out" }, .4), n.to(a.lines, { y: 0, opacity: 1, stagger: { each: .1, from: "start" }, duration: .9, ease: "power2.out" }, .55); const l = w.create({ trigger: e, scroller: this.container, start: "top 80%", once: !0, onEnter: () => n.play() }); this.scrollTriggers.push(l) } animateWorksGrid() { this.component.shadowRoot.querySelectorAll(".work-item").forEach((e, t) => { const i = e.querySelector(".work-year"), r = e.querySelector(".work-item-title"), o = e.querySelector(".work-meta"), s = e.querySelector(".work-item-sub"), a = e.querySelector("[data-scroll-image]"), n = null == a ? void 0 : a.querySelector("img"); if (!(i && r && o && s)) return; const l = t >= 3, c = l ? t - 3 : t, d = (l ? .25 : 0) + (l ? .18 * (2 - c) : .18 * c); a && n && (f.set(a, { willChange: "transform, opacity", force3D: !0 }), f.set(n, { willChange: "transform", force3D: !0 }), f.set(a, { opacity: 0, y: -24, scale: .92, transformOrigin: "center top" }), f.set(n, { scale: 1.08, transformOrigin: "center center" })); const h = new b(i, { type: "lines", mask: "lines" }), p = new b(r, { type: "lines", mask: "lines" }), m = new b(o, { type: "lines", mask: "lines" }), u = new b(s, { type: "lines", mask: "lines" }); this.splitTextInstances.push(h, p, m, u), f.set([h.lines, p.lines, m.lines], { y: 40, opacity: 0 }), f.set(u.lines, { y: 30, opacity: 0 }); const g = f.timeline({ paused: !0, delay: d }); a && n && (g.to(a, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out", onComplete: () => f.set(a, { willChange: "auto" }) }, 0), g.to(n, { scale: 1, duration: 1.3, ease: "power3.out", onComplete: () => f.set(n, { willChange: "auto" }) }, 0)), g.to(h.lines, { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: .05 }, .2), g.to(p.lines, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", stagger: .03 }, .3), g.to(m.lines, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, .35), g.to(u.lines, { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: .05 }, .55); const v = w.create({ trigger: e, scroller: this.container, start: "top-=300 60%", once: !0, onEnter: () => g.play() }); this.scrollTriggers.push(v) }) } setupProgressBar() { const e = this.component.shadowRoot.querySelector(".scroll-progress__bar"); e && (this._progressBar = e) } setupTitleHoverEffects() { const e = this.component.shadowRoot.querySelectorAll(".project-card-title"); this.titleHoverEffects = [], e.forEach(e => { let t = null, i = null; const r = () => { i = setTimeout(() => { if (t) return; const i = e.dataset.img; t = new ae(e, { imgUrl: i, totalImages: 6 }), this.titleHoverEffects.push(t) }, 120) }, o = () => { clearTimeout(i) }; e.addEventListener("mouseenter", r), e.addEventListener("mouseleave", o), this._hoverCleanups.push(() => { e.removeEventListener("mouseenter", r), e.removeEventListener("mouseleave", o) }) }) } setupHoverEvent() { const e = this.component.shadowRoot.querySelector("[cursor-hover-1]"), t = this.component.shadowRoot.querySelector("[cursor-hover-2]"), i = this.component.shadowRoot.querySelector(".back-btn"), r = this.component.shadowRoot.querySelectorAll(".footer-socials"); if (!(e && t && i && r)) return; const o = () => { S.emit("cursor:mode", { mode: "hover-w-d-img" }), S.emit("link:hover", { url: "/works/hello-clever" }) }, s = () => S.emit("cursor:mode", { mode: "default" }), a = () => S.emit("cursor:mode", { mode: "hover-w-l-img" }), n = () => S.emit("cursor:mode", { mode: "default" }), l = () => S.emit("cursor:mode", { mode: "hover-nav" }), c = () => S.emit("cursor:mode", { mode: "default" }), d = () => S.emit("cursor:mode", { mode: "hover-nav" }), h = () => S.emit("cursor:mode", { mode: "default" }); e.addEventListener("mouseenter", o), e.addEventListener("mouseleave", s), t.addEventListener("mouseenter", a), t.addEventListener("mouseleave", n), i.addEventListener("mouseenter", l), i.addEventListener("mouseleave", c), r.forEach(e => { e.addEventListener("mouseenter", d), e.addEventListener("mouseleave", h) }), this._hoverCleanups.push(() => { e.removeEventListener("mouseenter", o), e.removeEventListener("mouseleave", s), t.removeEventListener("mouseenter", a), t.removeEventListener("mouseleave", n), i.removeEventListener("mouseenter", l), i.removeEventListener("mouseleave", c), r.forEach(e => { e.removeEventListener("mouseenter", d), e.removeEventListener("mouseleave", h) }) }) } setupFooterAnimation() { const e = this.component.shadowRoot.querySelector(".footer-contact-info"), t = this.component.shadowRoot.querySelector(".work-header-h2-footer"), i = null == t ? void 0 : t.querySelector(".accent"); if (!e || !t || !i) return; f.set(e, { opacity: 0, y: 30 }), f.set(i, { opacity: 0, y: 20, color: "transparent" }); const r = w.create({ trigger: e, start: "top 85%", once: !0, onEnter: () => { f.to(e, { opacity: 1, y: 0, duration: .8, ease: "power3.out" }) } }); this.scrollTriggers.push(r); const o = window.matchMedia("(max-width: 1199px)").matches ? "top 55%" : "top 75%", s = w.create({ trigger: t, start: o, once: !0, onEnter: () => { f.to(i, { opacity: 1, y: 0, color: "#ff6a3d", duration: 1.2, ease: "back.out(1.2)" }) } }); this.scrollTriggers.push(s) } setupBackToTop() { const e = this.component.shadowRoot.querySelector(".back-btn"); if (!e || !this.lenis) return; this.isScrollingToTop = !1, this.scrollToTopAnimation = null; let t = null; const i = e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2; this._addEventListener(e, "click", () => { this.isScrollingToTop || (this.backToTopTimeout && clearTimeout(this.backToTopTimeout), this.isScrollingToTop = !0, t = this.lenis.options.lerp, this.lenis.options.lerp = .15, this.scrollToTopAnimation && this.scrollToTopAnimation.kill(), this.scrollToTopAnimation = this.lenis.scrollTo(0, { duration: 1.4, easing: i, immediate: !1, lock: !0, onComplete: () => { this.isScrollingToTop = !1, null !== t && (this.lenis.options.lerp = t), this.scrollToTopAnimation = null, this.lenis.velocity = 0, this.lenis.targetScroll = 0, this.backToTopTimeout = setTimeout(() => { this.isScrollingToTop = !1 }, 300) } }), this.backToTopTimeout = setTimeout(() => { this.isScrollingToTop = !1, null !== t && (this.lenis.options.lerp = t) }, 2e3)) }), this.setupBackToTopInterruption() } setupBackToTopInterruption() { const e = () => { var e, t; this.isScrollingToTop && (this.scrollToTopAnimation && (null == (t = null == (e = this.scrollToTopAnimation) ? void 0 : e.destroy) || t.call(e), this.scrollToTopAnimation = null), this.isScrollingToTop = !1) }; this._addEventListener(this.container, "wheel", e, { passive: !0 }), this._addEventListener(this.container, "touchmove", e, { passive: !0 }) } stop() { var e, t; this._mainTickerFn && (f.ticker.remove(this._mainTickerFn), this._mainTickerFn = null), this._parallaxTickerFn && (f.ticker.remove(this._parallaxTickerFn), this._parallaxTickerFn = null), this._parallaxObserver && (this._parallaxObserver.disconnect(), this._parallaxObserver = null), this._renderState = null, this._progressBar = null, null == (e = this.lenis) || e.destroy(), this.lenis = null, this.scrollTriggers.forEach(e => null == e ? void 0 : e.kill()), this.splitTextInstances.forEach(e => { e && e.revert && e.revert() }), this.textAnimators.forEach(e => { null == e || e.reset() }), this.events.destroy(), this.parallaxItems.forEach(e => { e.el && (e.el.style.willChange = "auto") }), this.titleHoverEffects && (this.titleHoverEffects.forEach(e => { null == e || e.destroy() }), this.titleHoverEffects = []), this._resizeHandler && (window.removeEventListener("resize", this._resizeHandler), this._resizeHandler = null), null == (t = this.animationCache) || t.destroy(), this._hoverCleanups && (this._hoverCleanups.forEach(e => e()), this._hoverCleanups = []), this._eventListeners.forEach(({ element: e, type: t, handler: i }) => { e.removeEventListener(t, i) }), this._eventListeners = [], this.splitTextInstances = [], this.scrollTriggers = [], this.textAnimators = [], this.parallaxItems = [] } } class ce extends i {
  constructor() { super(), this.gsapAnimations = null, this.hasGSAPStarted = !1, this._isMounted = !1 } firstUpdated() { var e; null == (e = window.app) || e.queueAnimation(() => this.runHomeAnimations(), "work-page") } async runHomeAnimations() { this._isMounted && (this.hasGSAPStarted || (this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.gsapAnimations = new le(this), window.currentAnimation = this.gsapAnimations, await this.gsapAnimations.init(), this.hasGSAPStarted = !0)) } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } disconnectedCallback() { super.disconnectedCallback(), this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.hasGSAPStarted = !1 } render() {
    return r`
  <nav-bar currentPage="/works"></nav-bar>

  <div class="scroll-progress">
    <div class="scroll-progress__bar"></div>
  </div>

  <div class="work-scroll-container">
    <div class="work-page-content">
      <div class="content-wrapper">
        <section
          class="projects-hero"
          data-parallax
          data-speed="0.15"
          data-intensity="0.15"
          data-range="180"
        >
          <div class="hero-row-left">
            <div class="hero-index">01/</div>
          </div>

          <div class="hero-row-right">
            <div class="hero-titles">
              <h1 class="projects">
                PROJECTS
                <p>selected</p>
              </h1>
              <span>02</span>
            </div>

            <div class="hero-description">
              <div class="left-label">OVERVIEW</div>
              <div class="right-text">
                Transforming complex business requirements into elegant digital products through
                meticulous system design, thoughtful user experience, and cuttingedge technology
                implementation.
              </div>
            </div>
          </div>
        </section>

        <div class="work-main">
          <section class="project-pair">
            <a class="project-card top" href="https://vatsalya-eldercare.vercel.app/" target="_blank" rel="noopener noreferrer" style="cursor: pointer;">
              <div class="flex-left">
                <div
                  class="project-card-media__1"
                  data-scroll-image
                  
                >
                  <div
                    class="image-container"
                    style="overflow: hidden; height: 100%;"
                    cursor-hover-1
                  >
                    <img
                      src="/images/works/vatsalya-detail.png"
                      data-parallax-image
                      data-speed="0.5"
                      data-intensity="0.08"
                      data-range="320"
                      style="width: 100%; height: 120%; object-fit: cover;"
                    />
                  </div>
                </div>

                <div class="project-card-info">
                  <div class="project-card-copy">
                    <h4 class="project-card-title project-card-title--hero" data-img="/images/works/vatsalya-detail.png">VATSALYA</h4>
                    <p class="project-card-kicker project-card-kicker--subtitle">AI-Powered Elderly Care Platform</p>

                    <div class="project-card-desc">
                      <p>Vatsalya is a smart elderly care platform that helps families remotely monitor the health and safety of their loved ones. It provides real-time health tracking, SOS emergency alerts, medicine reminders, caregiver dashboards, voice assistance, and instant notifications, ensuring peace of mind for families.</p>
                    </div>
                  </div>
                </div>
              </div>
            </a><a class="project-card" href="https://trustlens-ai-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div class="flex-left">
                <div
                  class="project-card-media__1"
                  data-scroll-image
                  
                >
                  <div
                    class="image-container"
                    style="overflow: hidden; height: 100%;"
                    cursor-hover-2
                  >
                    <img
                      src="/images/works/trustlens-docs-1.png"
                      data-parallax-image
                      data-speed="0.5"
                      data-intensity="0.08"
                      data-range="320"
                      style="width: 100%; height: 120%; object-fit: cover;"
                    />
                  </div>
                </div>

                <div class="project-card-info">
                  <div class="project-card-copy">
                    <h4 class="project-card-title project-card-title--hero" data-img="/images/works/trustlens-docs-1.png">TRUSTLENS AI</h4>
                    <p class="project-card-kicker project-card-kicker--subtitle">AI Bias Detection Platform</p>

                    <div class="project-card-desc">
                      <p>TrustLens AI is an AI fairness and bias detection platform that analyzes datasets and machine learning models to identify hidden bias, evaluate fairness metrics, generate explainable reports, and help developers build transparent and trustworthy AI systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </section>

          <section
            class="projects-hero personal"
            data-parallax
            data-speed="0.2"
            data-intensity="0.15"
            data-range="180"
          >
            <div class="hero-row-left">
              <div class="hero-index">02/</div>
            </div>

            <div class="hero-row-right">
              <div class="hero-titles">
                <h1 class="projects">
                  PERSONAL <br />
                  PROJECTS
                </h1>
                <span>06</span>
              </div>

              <div class="hero-description">
                <div class="left-label">OVERVIEW</div>
                <div class="right-text">
                  Beyond my work, I actively explore emerging technologies through self-directed
                  projects to stay at the forefront of development practices.
                </div>
              </div>
            </div>
          </section>

          <section class="works-grid">
            <div class="work-grid-col__1">
              <div class="work-item item-1">
                <div class="work-year">01 / 06</div>

                <div style="display: block;">
                  <div class="work-item-top">
                    <div class="work-item-title">VATSALYA</div>

                    <div class="work-meta">AI • IoT • Full Stack</div>
                  </div>

                  <div class="work-item-media" data-scroll-image>
                    <img src="/images/works/vatsalya-detail.png" alt="Vatsalya" />
                  </div>
                </div>

                <div class="item-divider"></div>

                <div class="work-item-sub">AI-Powered Elderly Care Platform <a href='https://github.com/Nithin-R08/vatsalya' target='_blank' rel='noopener noreferrer'>Repository ↗</a></div>
              </div>

              <div class="work-item item-2">
                <div class="work-year">02 / 06</div>

                <div style="display: block; cursor: default;">
                  <div class="work-item-top">
                    <div class="work-item-title">TRUSTLENS AI</div>
                    <div class="work-meta">AI Bias Detection Platform</div>
                  </div>

                  <div class="work-item-media" data-scroll-image>
                    <img src="/images/works/trustlens-docs-1.png" alt="TrustLens AI" />
                  </div>
                </div>

                <div class="item-divider"></div>

                <div class="work-item-sub">TrustLens AI is an AI fairness and bias detection platform that analyzes datasets and machine learning models to identify hidden bias, evaluate fairness metrics, generate explainable reports, and improve trustworthy AI systems. <a href='https://github.com/Nithin-R08/Trustlens-ai' target='_blank' rel='noopener noreferrer'>Repository ↗</a></div>
              </div>

              <div class="work-item item-3">
                <div class="work-year">03 / 06</div>

                <div class="work-item-top">
                  <div class="work-item-title">ChurnGuard AI</div>
                  <div class="work-meta">Scalable ML inference • Data Science</div>
                </div>

                <div class="work-item-media" data-scroll-image>
                  <img src="/images/works/trello.jpg" alt="ChurnGuard AI" />
                </div>

                <div class="item-divider"></div>

                <div class="work-item-sub">Customer churn prediction with explainable retention insights <a href='https://github.com/Nithin-R08/ChurnGuard-AI' target='_blank' rel='noopener noreferrer'>Repository ↗</a></div>
              </div>
            </div>

            <div class="work-grid-col__2">
              <div class="work-item item-4">
                <div class="work-year">04 / 06</div>

                <div class="work-item-top">
                  <div class="work-item-title">TravelEase</div>
                  <div class="work-meta">Full Stack Web Application</div>
                </div>

                <div class="work-item-media" data-scroll-image>
                  <img src="/images/works/travelease-portfolio.png" alt="Nine Dash" />
                </div>

                <div class="item-divider"></div>

                <div class="work-item-sub">A travel planning platform with maps, routes, and destination discovery <a href='https://github.com/Nithin-R08/TravelEase_Travel-Maanagement-System' target='_blank' rel='noopener noreferrer'>Repository ↗</a></div>
              </div>

              <div class="work-item item-5">
                <div class="work-year">05 / 06</div>

                <div class="work-item-top">
                  <div class="work-item-title">Crypto Wallet for Newbies</div>
                  <div class="work-meta">Full Stack Web Application</div>
                </div>

                <div class="work-item-media" data-scroll-image>
                  <img src="/images/works/banklite-los.png" alt="Lane Line" />
                </div>

                <div class="item-divider"></div>

                <div class="work-item-sub">A secure beginner-friendly cryptocurrency wallet with PIN authentication, encrypted wallet creation, blockchain transactions, portfolio tracking, and digital asset management. <a href='https://github.com/Nithin-R08/Crypto-Wallet-for-Newbies' target='_blank' rel='noopener noreferrer'>Repository ↗</a></div>
              </div>

              <div class="work-item item-6">
                <div class="work-year">06 / 06</div>

                <div class="work-item-top">
                  <div class="work-item-title">Smart Crop Disease Detector</div>
                  <div class="work-meta">Machine Learning • Computer Vision</div>
                </div>

                <div class="work-item-media" data-scroll-image>
                  <img src="/images/works/wheelzonrent.png" alt="Traffic Light" />
                </div>

                <div class="item-divider"></div>

                <div class="work-item-sub">An AI-powered computer vision application that detects crop diseases from plant leaf images and provides actionable treatment insights for farmers. <a href='https://github.com/Nithin-R08/Crop-Disease-Detector' target='_blank' rel='noopener noreferrer'>Repository ↗</a></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="work-footer-layer">
        <div class="work-footer">
          <div class="divider"></div>
          <div class="footer-contact-info">
            <div class="footer-col footer-col--left">
              <p>nithinr123n8@gmail.com</p>
              <p>+91 9164733579</p>
            </div>

            <div class="footer-col footer-col--right">
              <p class='footer-socials'>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Nithin-R08">Github</a>
              </p>
              <p class='footer-socials'>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/nithin-rnitr/">LinkedIn</a>
              </p>
              <div class="back-btn">
                <span>Back to top</span>
                <div class="icon-container">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="
                  width: clamp(12px, 1vw, 20px);
                  height: clamp(12px, 1vw, 20px);
                  transform: rotate(-90deg);
                "
                  >
                    <path d="M13 19L19.5 12L13 5" stroke="black" stroke-miterlimit="10"></path>
                    <path d="M19 12H3" stroke="black" stroke-miterlimit="10"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="work-header-h2-footer">Let<span class="accent">’</span>s have a chat</div>
        </div>
      </div>
    </div>
  </div>

  <footer-nav></footer-nav>
`}
} t(ce, "styles", [re]), customElements.define("work-page", ce); const de = ({ project: e }) => r`
    <div class='hero-c'>
      <div class="hero">
        <h1 class="title">${e.title}</h1>
      </div>

      <div class="scroll-indicator">
        <p>(</p>
        <p>scroll</p>
        <p>)</p>
      </div>
    </div>

    <div class="hero-img">
      <div class="image-container" style="overflow: hidden; height: 100%;">
        <img
          src="${e.src}"
          alt="${e.title}"
          data-parallax-image
          data-intro-image
          data-speed="0.25"
          data-intensity="0.08"
          data-range="50"
          style="width: 100%; height: 120%; object-fit: cover;"
        />
      </div>
      <p>Image from ${e.company || "VATSALYA"}</p>
    </div>
  `, he = ({ project: e }) => {
    const { client: t, company: i, role: o, year: s } = e; return r`
    <div class="timeline-hero">
      <div class="mid-title">
        <p>${e.title}</p>
      </div>

      <div class="divider-wrapper">
        <div class="divider"></div>
      </div>

      <div class="project-info">
        <div class="info-col-left">
          <div class="client">
            <p class="info-title">client</p>
            <p class="info-desc second-text">${t || "VATSALYA"}</p>
          </div>
          <div class="company">
            <p class="info-title">company</p>
            <p class="info-desc second-text">${i || "rexy technology"}</p>
          </div>
        </div>
        <div class="info-col-right">
          <div class="role">
            <p class="info-title">role</p>
            <p class="info-desc second-text">${o || "backend development"}</p>
          </div>
          <div class="year">
            <p class="info-title">year</p>
            <p class="info-desc second-text">${s || "2024"}</p>
          </div>
        </div>
      </div>
    </div>
  `}, pe = ({ project: e }) => r`
    <div class="overview">
      <div class="hero-description">
        <div class="left-label">Overview</div>
        <div class="right-text second-text">
          ${e.paragraph.map(p => r`<p class="paragraph">${p}</p>`)}${e.title === "VATSALYA" ? v("<p class=\"paragraph\" style=\"margin-top:2.5rem\"><strong style=\"font-size:inherit\">Tech Stack</strong><br/>React.js • Node.js • Express.js • MongoDB • Tailwind CSS • Firebase Cloud Messaging • Twilio SMS • Web Speech API</p><p class=\"paragraph\" style=\"margin-top:1.5rem\"><strong style=\"font-size:inherit\">Key Features</strong><br/>• Real-time health monitoring dashboard for caregivers.<br/>• One-tap SOS with instant emergency alerts.<br/>• Voice-first interface for elderly users.<br/>• Medicine reminders and daily health tracking.<br/>• Multi-parent management with secure caregiver access.<br/>• Offline emergency SMS fallback for low-network areas.</p><p class=\"paragraph\" style=\"margin-top:1.5rem\"><strong style=\"font-size:inherit\">My Role</strong><br/>Designed and developed the complete full-stack application including authentication, caregiver dashboard, emergency notification system, and backend APIs.</p><p class=\"paragraph\" style=\"margin-top:1.5rem\"><strong style=\"font-size:inherit\">Challenges</strong><br/>Implemented reliable SOS communication with offline SMS fallback while maintaining a simple elderly-friendly user experience.</p><p class=\"paragraph\" style=\"margin-top:1.5rem\"><strong style=\"font-size:inherit\">Outcome</strong><br/>Built an AI-powered elderly care platform focused on accessibility, safety, and real-time family connectivity.</p>") : e.title === "TRUSTLENS AI" ? v("<p class=\"paragraph\" style=\"margin-top:2.5rem\"><strong style=\"font-size:inherit\">Tech Stack</strong><br/>Python • Flask • Scikit-learn • Pandas • NumPy • XGBoost • Fairlearn • SHAP • HTML • CSS • JavaScript</p><p class=\"paragraph\" style=\"margin-top:1.5rem\"><strong style=\"font-size:inherit\">Key Features</strong><br/>• Detects bias in machine learning datasets.<br/>• Computes multiple AI fairness metrics.<br/>• Generates explainable AI reports using SHAP.<br/>• Interactive dashboard for fairness visualization.<br/>• Bias comparison across protected attributes.<br/>• Supports responsible and transparent AI development.</p><p class=\"paragraph\" style=\"margin-top:1.5rem\"><strong style=\"font-size:inherit\">My Role</strong><br/>Designed and developed the complete platform including the ML pipeline, fairness analysis engine, explainability module, backend APIs, and frontend dashboard.</p><p class=\"paragraph\" style=\"margin-top:1.5rem\"><strong style=\"font-size:inherit\">Challenges</strong><br/>Integrated multiple fairness metrics and explainable AI into one unified developer-friendly platform.</p><p class=\"paragraph\" style=\"margin-top:1.5rem\"><strong style=\"font-size:inherit\">Outcome</strong><br/>Achieved a Top 5 finish at the CUK-CS Hackathon among 80+ teams with TrustLens AI, demonstrating practical AI fairness analysis for responsible machine learning.</p>") : ""}${(() => { let url = ""; if (e.title === "VATSALYA") url = "https://github.com/Nithin-R08/vatsalya"; else if (e.title === "TRUSTLENS AI") url = "https://github.com/Nithin-R08/Trustlens-ai"; else if (e.title === "ChurnGuard AI") url = "https://github.com/Nithin-R08/ChurnGuard-AI"; else if (e.title === "Smart Crop Disease Detector") url = "https://github.com/Nithin-R08/Crop-Disease-Detector"; else if (e.title === "Crypto Wallet for Newbies") url = "https://github.com/Nithin-R08/Crypto-Wallet-for-Newbies"; else if (e.title === "TravelEase") url = "https://github.com/Nithin-R08/TravelEase_Travel-Maanagement-System"; return url ? r`<p class="paragraph" style="margin-top:2rem"><a href="${url}" target="_blank" rel="noopener noreferrer">Repository ↗</a></p>` : ""; })()}
        </div>
      </div>
    </div>
  `, me = () => r`
    <div class="work-footer">
      <div class="f-divider-wrapper">
        <div class="divider visible"></div>
      </div>
      <div class="footer-contact-info">
        <div class="footer-col footer-col--left">
          <p>nithinr123n8@gmail.com</p>
          <p>+91 9164733579</p>
        </div>
        <div class="footer-col footer-col--right">
          <p class='footer-socials'>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/Nithin-R08">Github</a>
          </p>
          <p class='footer-socials'>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/nithin-rnitr/">LinkedIn</a>
          </p>
          <div class="back-btn">
            <span>Back to top</span>
            <div class="icon-container">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: clamp(12px, 1vw, 20px); height: clamp(12px, 1vw, 20px); transform: rotate(-90deg);"
              >
                <path d="M13 19L19.5 12L13 5" stroke="black" stroke-miterlimit="10"></path>
                <path d="M19 12H3" stroke="black" stroke-miterlimit="10"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="work-header-h2-footer">Let<span class="accent">’</span>s have a chat</div>
    </div>
  `, ue = Object.fromEntries(E.map(e => [e.slug, e])), ge = E.reduce((e, t) => (e[t.slug] = t, e), {}), ve = e => {
    const t = (e => { const t = ge[e]; return t && t.nextProject ? ge[t.nextProject] : null })(e); return r`
    <div class="next-project editorial-japanese">
      <div class="next-project-content">

        <div class="next-project-main">
          <div class="next-label-wrapper">
            <span class="next-label">Next Project</span>
            <div class="label-line"></div>
          </div>

          ${t ? r`
            <h2
              class="next-project-title"
              @click=${() => ie(`/works/${t.slug}`)}

            >
              <span class="title-text">${t.title}</span>
              <span class="title-arrow">?</span>
            </h2>
          `: r`
            <h2
              class="next-project-title"
              @click=${() => ie("/works")}

            >
              <span class="title-text">Return to Portfolio</span>
              <span class="title-arrow">?</span>
            </h2>
          `}
        </div>

        <div class="editorial-divider">
          <div class="divider-line"></div>
          <div class="divider-dot"></div>
          <div class="divider-line"></div>
        </div>

        <div class="pill-navigation">
          <button
            class="pill-button"
            @click=${() => ie("/works")}
            
          >
            <span class="pill-text">View All Projects</span>
            <span class="pill-count">02</span>
          </button>
        </div>
      </div>
    </div>
  `}, fe = o`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    --font-neue: 'Neue Montreal', sans-serif;
    --bg-almost-white: #fefff8;

    --section-mb: clamp(10rem, 16vh, 15rem);
    --hero-mb: clamp(12rem, 18vh, 18rem);
    --next-mt: clamp(14rem, 20vh, 20rem);

    font-family: 'Neue Montreal', sans-serif;
  }

  .scroll-container {
    width: 100vw;
    height: 100svh;
    background-color: var(--bg-almost-white);
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .work-scroll-container::-webkit-scrollbar {
    display: none;
  }

  .page-content {
    width: 100vw;
    background-color: var(--bg-almost-white);
    padding: 250px 0 5rem;
  }

  .project-detail {
    width: 100%;
    height: 100%;
  }

  .hero {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: var(--hero-mb);
  }

  .title {
    font-size: 11.127vw;
    font-weight: 400;
    line-height: 1em;
    letter-spacing: -10px;
    height: 0.68em;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .scroll-indicator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 4.5rem;
  }

  .scroll-indicator p {
    text-transform: uppercase;
    font-size: 14.5px;
    font-weight: 400;
  }

  .scroll-indicator p:nth-child(1) {
    padding-right: 0.05rem;
  }
  .scroll-indicator p:nth-child(3) {
    padding-left: 0.08rem;
  }

  .hero-img {
    height: 120dvh;
    margin-bottom: 4rem;
  }

  .hero-img img {
    width: 100%;
    height: 100%;
  }

  .hero-img p {
    text-align: right;
    margin-right: 2rem;
  }

  .image-container {
    margin-bottom: 0.5rem;
  }

  .mid-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 0.6;
    margin-bottom: 5rem;
  }

  .divider-wrapper {
    padding: 0 clamp(1rem, 4vw, 4.5rem);
    margin-bottom: 2rem;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #000;
    opacity: 0.15;
  }

  .visible {
    opacity: 1;
  }

  .project-info,
  .info-col-left,
  .info-col-right {
    display: flex;
  }

  .project-info {
    padding: 0 5rem;
    justify-content: center;
    gap: 20rem;
    margin-bottom: var(--section-mb);

    @media (max-width: 1500px) and (min-width: 1200px) {
      padding: 0 clamp(3rem, 4vw, 5rem);
      gap: clamp(8rem, 10vw, 20rem);
    }
  }

  .info-col-left,
  .info-col-right {
    gap: 20rem;

    @media (max-width: 1500px) and (min-width: 1200px) {
      gap: clamp(8rem, 10vw, 20rem);
    }
  }

  .info-title {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 500;
  }

  .info-desc {
    text-transform: uppercase;
    font-weight: 400;
  }

  .overview {
    width: 100%;
    height: 100%;
    padding: 0 5rem;
    display: flex;
    justify-content: center;
    margin-bottom: var(--section-mb);
  }

  .central {
    flex-direction: column;
    align-items: center;
  }

  .responsibilities {
    margin-bottom: 13rem;
  }

  .responsibility-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
  }

  .hero-description {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .res {
    margin-bottom: 3rem;
  }

  .left-label {
    font-size: 1.3rem;
    font-weight: 400;
    grid-column: 1;
    text-align: left;
  }

  .second-text {
    opacity: 0.85;
    color: rgba(20, 20, 20, 1);
  }

  .right-text {
    max-width: 850px;
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 400;
    margin-right: 4rem;
    grid-column: 2;
  }

  .side-img {
    display: flex;
    padding: 0 5rem;
    margin-bottom: var(--section-mb);
  }

  .img {
    width: 30vw;
  }

  .img-right img {
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .img-left img,
  .img-right img {
    width: 100%;
    height: 100%;
  }

  .res-item p {
    margin-bottom: 1rem;
  }

  .res-item p:last-child {
    margin-bottom: 0;
  }

  .f-divider-wrapper {
    padding: 0 clamp(1rem, 4vw, 4.5rem);

    @media (max-width: 1500px) {
      padding: 0;
    }
  }

  .footer-contact-info {
    padding: 1rem calc(clamp(1rem, 4vw, 4.5rem) + 1.5rem);
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: clamp(3rem, 10vh, 8rem);

    overflow: hidden;

    @media (max-width: 1500px) {
      padding: 1rem calc(clamp(1rem, 4vw, 4.5rem) - 1.5rem);
    }

    @media (max-width: 1200px) {
      padding: 1rem 0;
    }

    @media (max-width: 768px) {
      font-size: clamp(0.75rem, 2.8vw, 0.9rem);
    }
  }

  .footer-col {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  .footer-col--right {
    @media (max-width: 992px) {
      align-items: flex-end;
    }
  }

  .work-header-h2-footer {
    font-size: clamp(5rem, 25vw, 30rem);
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: center;

    font-family: 'FKScreamer', sans-serif;

    padding-inline: 1rem;
    max-width: calc(100vw - 2rem);

    white-space: nowrap;
    /* overflow: hidden; */

    @media (max-width: 992px) {
      margin-bottom: 6rem;

      line-height: 0.85;
    }

    @media (max-width: 768px) {
      padding-inline: 0rem;
      margin-bottom: 6rem;
    }
  }

  .back-btn {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;

    @media (max-width: 992px) {
      gap: 0.2rem;
    }
  }

  .project-img {
    display: flex;
    justify-content: center;
  }

  .img__1 {
    width: 100%;
    padding: 0 5rem;
    margin-bottom: var(--section-mb);
  }

  .img__1 img {
    width: 100%;
  }

  .editorial-collage {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 7rem;
    max-width: 1500px;
    margin: 0 auto;
    position: relative;
  }

  .img--top__bg {
    display: contents;
  }

  .img--top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    background-color: #dcd0c2;
    padding: 6rem;
    width: min(100%, 1200px);
  }

  .img--top > div,
  .img--bottom > div {
    width: 100%;
  }

  .img--top img,
  .img--bottom img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .editorial-stage {
    position: relative;
    width: min(100%, 1200px);
    margin: 0 auto;
  }

  .editorial-wrap {
    position: relative;
    width: min(1200px, 90vw);
    height: 70vh;
  }

  .card--main {
    position: relative;
    width: 70%;
    height: 90%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e9eaeb;
    overflow: hidden;
  }

  .card--main img {
    width: 70%;
    height: auto;
    object-fit: contain;
  }

  .card--stack {
    position: absolute;
    right: 0;
    bottom: -15%;
    width: 520px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    gap: 16px;
    z-index: 2;
    background: #f0f2f5;
    overflow: hidden;
  }

  .card--stack img {
    width: 340px;
    height: auto;
    object-fit: contain;
  }

  .docs-img-container {
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
    width: 100%;

    gap: 13rem;
  }

  .wrapper {
    width: 60vw;
  }

  .wrapper img {
    width: 100%;
    height: auto;
    display: block;
  }

  .wrapper:nth-child(odd) {
    align-self: flex-end;
  }
  .wrapper:nth-child(even) {
    align-self: flex-start;
  }

  .next-project.editorial-japanese {
    margin: var(--next-mt) 0 var(--section-mb);
    padding: 0 5rem;
    position: relative;
  }

  .next-project-content {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    position: relative;
  }

  .next-project-main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .next-label-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .next-label {
    font-size: 0.875rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    font-weight: 400;
    color: #666;
    white-space: nowrap;
  }

  .label-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #666 0%, transparent 100%);
    opacity: 0.3;
  }

  .next-project-title {
    font-size: clamp(3.5rem, 8vw, 9rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    line-height: 0.95;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
  }

  .title-text {
    flex: 1;
  }

  .title-arrow {
    font-size: 1.25rem;
    margin-left: 2rem;
  }

  .next-project-title .title-text {
    display: inline-block;
  }

  .next-project-title .title-text .char {
    display: inline-block;
  }

  .editorial-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
  }

  .divider-line {
    flex: 1;
    height: 1px;
    background: #000;
    opacity: 0.1;
  }

  .divider-dot {
    width: 4px;
    height: 4px;
    background: #000;
    border-radius: 50%;
    opacity: 0.3;
  }

  .pill-navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    max-width: 300px;
  }

  .pill-button {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 2rem;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .pill-text {
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
  }

  .pill-count {
    font-size: 0.75rem;
    font-weight: 600;
    color: #000;
    background: rgba(0, 0, 0, 0.05);
    padding: 0.25rem 0.75rem;
    border-radius: 100px;
    min-width: 2rem;
    text-align: center;
  }

  .pill-button.pill--hover {
    color: #fff;
    border-color: rgba(0, 0, 0, 0.3);
  }

  .scroll-progress {
    position: fixed;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: rgba(255, 255, 255, 0.08);
    z-index: 1;

    @media (max-width: 1200px) {
      width: 1px;
    }
  }

  .scroll-progress__bar {
    width: 100%;
    height: 100%;
    background: rgb(255, 100, 50);
    transform-origin: top;
    transform: scaleY(0);
    will-change: transform;
  }

  .work-header-h2-footer .accent {
    color: #ff6a3d;
  }

  @media (max-width: 1500px) and (min-width: 1229px) {
    .page-content {
      padding: 350px 3rem 5rem;
    }
  }

  @media (max-width: 1228px) and (min-width: 993px) {
    .page-content {
      padding: 320px 3rem 5rem;
    }
  }

  @media (max-width: 1199px) and (min-width: 993px) {
    :host {
      --section-mb: clamp(8rem, 14vh, 12rem);
      --hero-mb: clamp(10rem, 16vh, 14rem);
      --next-mt: clamp(10rem, 16vh, 14rem);
    }

    .title {
      white-space: normal;
      max-width: 90vw;
      text-align: center;
      letter-spacing: -0.06em;
      height: auto;
    }

    .project-info {
      gap: 8rem;
      padding: 0 3rem;
    }

    .info-col-left,
    .info-col-right {
      gap: 8rem;
    }

    .side-img {
      flex-direction: column;
      gap: 4rem;
      padding: 0 3rem;
    }

    .img {
      width: 100%;
    }

    .docs-img-container {
      gap: 8rem;
    }

    .img--top {
      padding: 3rem;
    }
  }

  @media (max-width: 992px) {
    :host {
      --section-mb: clamp(6rem, 12vh, 9rem);
      --hero-mb: clamp(5rem, 10vh, 7rem);
      --next-mt: clamp(7rem, 12vh, 10rem);
    }

    .page-content {
      padding: 180px 1rem 5rem;
    }

    .title {
      font-size: clamp(2.8rem, 12vw, 4.5rem);
      letter-spacing: -0.02em;
      line-height: 1.05;
      white-space: normal;
      height: auto;
      text-align: left;
      margin-bottom: 2rem;
    }

    .project-info {
      flex-direction: column;
      gap: 2rem;
      padding: 0;
    }

    .info-col-left,
    .info-col-right {
      flex-direction: column;
      gap: 2rem;
    }

    .overview {
      padding: 0;
    }

    .right-text {
      max-width: none;
      font-size: 1rem;
      line-height: 1.6;
      margin-right: 0;
    }

    .left-label {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .editorial-collage {
      gap: 3rem;
    }

    .img--top {
      grid-template-columns: 1fr;
      /* padding: 2rem; */
      gap: 2rem;
    }

    .side-img {
      flex-direction: column;
      padding: 0;
      gap: 2rem;
    }

    .img {
      width: 100%;
    }

    .docs-img-container {
      padding: 0;
      gap: 3rem;
    }

    .wrapper {
      width: 100%;
    }

    .wrapper:nth-child(odd),
    .wrapper:nth-child(even) {
      align-self: center;
    }

    .next-project.editorial-japanese {
      padding: 3rem 0;
    }

    .next-project-title {
      font-size: clamp(2.5rem, 10vw, 4rem);
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .title-arrow {
      margin-left: 0;
    }

    .next-project-content {
      gap: 3rem;
    }

    .pill-navigation {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    :host {
      --section-mb: clamp(5rem, 10vh, 7rem);
      --hero-mb: clamp(4rem, 8vh, 6rem);
      --next-mt: clamp(5rem, 10vh, 8rem);
    }

    .docs-img-container {
      gap: clamp(5rem, 10vh, 8rem);
    }

    .responsibilities {
      margin-bottom: clamp(6rem, 12vh, 9rem);
    }

    .editorial-collage {
      gap: clamp(2rem, 4vh, 3rem);
    }

    .img__1 {
      padding: 0;
    }

    .next-project.editorial-japanese {
      padding: 3rem 0;
    }

    .img--top {
      padding: 3rem;
    }

    .hero-description {
      gap: 1.5rem;
    }

    .info-desc,
    .scroll-indicator {
      font-size: 14.5px;
      opacity: 0.8;
    }
  }

  @media (max-width: 480px) {
    :host {
      --section-mb: clamp(4rem, 8vh, 6rem);
      --hero-mb: clamp(3rem, 6vh, 5rem);
      --next-mt: clamp(4rem, 8vh, 6rem);
    }

    .hero-c {
      min-height: 65svh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .image-container {
      margin-bottom: 0;
    }

    .hero-img {
      height: auto;
      margin-bottom: 4rem;
    }

    .hero-img p {
      margin-right: 0;
      font-size: 14px;
      opacity: 0.5;
    }

    .hero-img img {
      height: auto;
    }

    .title {
      font-size: calc(clamp(3.25em, 7vw, 8em) * 1);
      margin: 0 auto;
    }

    .right-text {
      font-size: 0.95rem;
    }

    .divider-wrapper {
      padding: 0;
    }

    .next-label-wrapper {
      gap: 1rem;
    }

    .next-project-title {
      font-size: clamp(2rem, 8vw, 2.5rem);
    }

    .pill-navigation {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pill-text {
      color: #000;
    }

    .img--top {
      padding: 2rem;
    }
  }

  .editorial-stage {
    position: relative;
    width: min(100%, 1200px);
    margin: 0 auto;
  }

  .editorial-wrap {
    position: relative;
    width: min(1200px, 90vw);
    height: 70vh;
  }

  .card--main {
    position: relative;
    width: 70%;
    height: 90%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e9eaeb;
    overflow: hidden;
  }

  .card--main img {
    width: 70%;
    height: auto;
    object-fit: contain;
  }

  .card--stack {
    position: absolute;
    right: 0;
    bottom: -15%;
    width: 520px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    gap: 16px;
    z-index: 2;
    background: #f0f2f5;
    overflow: hidden;
  }

  .card--stack img {
    width: 340px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 1400px) {
    .card--stack {
      width: 420px;
    }

    .card--stack img {
      width: 260px;
    }
  }

  @media (max-width: 1199px) {
    .editorial-wrap {
      height: 60vh;
    }

    .card--main {
      width: 75%;
      height: 85%;
    }

    .card--stack {
      width: clamp(280px, 36vw, 380px);
      padding: 1.5rem;
      gap: 12px;
      bottom: -10%;
    }

    .card--stack img {
      width: clamp(180px, 24vw, 260px);
    }
  }

  @media (max-width: 992px) {
    .editorial-stage,
    .card--stack {
      display: none;
    }
  }
`; class we { constructor(e) { t(this, "initLenis", () => { this.lenis = new k({ wrapper: this.container, content: this.scroller, orientation: "vertical", lerp: .07, smoothWheel: !0, smooth: !0, wheelMultiplier: .5, touchMultiplier: 1.2, touchInertiaMultiplier: .85, wheelInertiaMultiplier: .75, duration: 1, easing: e => { if (e < .7) return e * (2 - .8 * e); { const t = (e - .7) / .3; return .79 + .21 * Math.pow(t, .3) } }, syncTouch: !1, gestureOrientation: "vertical", infinite: !1, autoResize: !0 }), this._renderState = { scrollProgress: 0, scrollCurrent: 0, stageBgY: 0, mainCardY: 0, stackState: null }, this.lenis.on("scroll", ({ scroll: e, limit: t }) => { this._renderState.scrollProgress = t ? e / t : 0, this._needsSTUpdate = !0, this.animationCache.invalidate() }), this._mainTickerFn = e => { this.lenis.raf(1e3 * e), this._needsSTUpdate && (w.update(), this._needsSTUpdate = !1); const t = this._renderState; if (t) { if (t.scrollCurrent += .12 * (t.scrollProgress - t.scrollCurrent), this._progressBar && (this._progressBar.style.transform = `scaleY(${t.scrollCurrent})`), this._stageBg && f.set(this._stageBg, { y: -t.stageBgY }), this._mainCard && f.set(this._mainCard, { y: -t.mainCardY }), t.stackState && this._stackCard) { const e = t.stackState; e.currentY += (e.targetY - e.currentY) * e.intensityY, e.currentScale += (e.targetScale - e.currentScale) * e.intensityScale, f.set(this._stackCard, { y: e.currentY, scale: e.currentScale }) } this.inertiaStates && this.inertiaStates.forEach((e, t) => { t !== this._stackCard && (e.currentY += (e.targetY - e.currentY) * e.intensity, f.set(t, { y: e.currentY })) }) } }, f.ticker.add(this._mainTickerFn), f.ticker.lagSmoothing(0); let e, t = !1; const i = () => { t = !0, clearTimeout(e), .07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY }, r = () => { t = !1, .3 !== this.lenis.options.lerp && (this.lenis.options.lerp = .3), this.lenis.options.easing = this.EASE_BRAKE, e = setTimeout(() => { t || (.07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY) }, 150) }; let o; this._addEventListener(this.container, "wheel", () => { i(), clearTimeout(e), clearTimeout(o), o = setTimeout(() => { e = setTimeout(r, 100) }, 16) }, { passive: !0 }), this._addEventListener(this.container, "touchstart", i, { passive: !0 }), this._addEventListener(this.container, "touchmove", () => { i(), clearTimeout(e) }, { passive: !0 }), this._addEventListener(this.container, "touchend", r, { passive: !0 }) }), this.shadowRoot = e, this.lenis = null, this.scrollTriggers = [], this.parallaxItems = [], this.parallaxImages = [], this.inertiaStates = new Map, this.updateLoops = [], this.container = null, this.scroller = null, this.isExiting = !1, this._needsSTUpdate = !1, this._eventListeners = [], this._eventBusHandlers = [], this._hoverCleanups = [], this.EASE_HEAVY = e => 1 === e ? 1 : 1 - Math.pow(2, -12 * e), this.EASE_BRAKE = e => e < .2 ? 5 * e : 1, this.onNavClick = this.onNavClick.bind(this), this.animationCache = new ne } async init() { const e = () => { var e; return null == (e = this.lenis) ? void 0 : e.stop() }, t = () => { var e; return null == (e = this.lenis) ? void 0 : e.start() }; this.events = new K(S), this.events.on("page:ready", () => this.playIntroAnimation()).on("transition:start", () => e()).on("transition:end", () => t()).on("page:covered", ({ url: e }) => this.onNavClick({ url: e })), this.initElements(), this.initLenis(), w.defaults({ scroller: this.container }), await Q(), await Z(this.shadowRoot), this.setupProgressBar(); const i = window.matchMedia("(min-width: 1000px)").matches; this.waitForImages = () => J(this.shadowRoot.querySelector(".page-content")), this.waitForImages().then(() => { i && (this.setupAdvancedParallax(), this.setupEditorialSection(), this.setupHoverEvent(), this._setupNextProjectHover(), this.initPillNavigation(), this.setupFooterAnimation(), this.setupRevealAnimations()) }), this.setupBackToTop(), this.initResizeHandler(), W.pageReady = !0, requestAnimationFrame(() => { S.emit("page:ready") }) } async onNavClick({ url: e }) { var t; const i = window.location.pathname; if (!e || e === i) return; if (this.isExiting) return; this.isExiting = !0, null == (t = this.lenis) || t.stop(); window.matchMedia("(min-width: 1200px)").matches && await this.exit(), S.emit("page:exit:done", { url: e }) } exit() { return new Promise(e => { this.scrollTriggers.forEach(e => null == e ? void 0 : e.kill()); const t = this.shadowRoot.querySelector(".hero"), i = this.shadowRoot.querySelector(".timeline-hero"), r = this.shadowRoot.querySelector(".overview"), o = this.shadowRoot.querySelector(".editorial-collage"), s = this.shadowRoot.querySelector(".next-project"), a = this.shadowRoot.querySelector(".work-footer"), n = this.shadowRoot.querySelector(".page-content"), l = [a, s, o, r, i, t, n].filter(Boolean); f.set(l, { willChange: "transform, opacity", force3D: !0 }), requestAnimationFrame(() => { const c = f.timeline({ defaults: { ease: "power3.in", duration: .6 }, onComplete: () => { f.set(l, { clearProps: "willChange,transform,opacity" }), e() } }); c.to(a, { y: -70 }, 0), c.to(s, { y: -55 }, .04), c.to(o, { y: -45 }, .08), c.to(r, { y: -35 }, .12), c.to(i, { y: -25 }, .16), c.to(t, { y: -20 }, .2), c.to(n, { y: -10, duration: .45 }, .24) }) }) } initElements() { this.container = this.shadowRoot.querySelector(".scroll-container"), this.scroller = this.shadowRoot.querySelector(".page-content") } _removeEventListeners() { this._eventBusHandlers.forEach(({ event: e, handler: t }) => { S.off(e, t) }), this._eventBusHandlers = [], this._eventListeners.forEach(({ element: e, type: t, handler: i }) => { e && e.removeEventListener && e.removeEventListener(t, i) }), this._eventListeners = [] } _addEventListener(e, t, i, r) { e.addEventListener(t, i, r), this._eventListeners.push({ element: e, type: t, handler: i }) } playIntroAnimation() { const e = this.shadowRoot.querySelector(".hero-img img[data-intro-image]"); e && (f.set(e, { willChange: "transform, opacity", force3D: !0 }), f.set(e, { scale: .85, y: 50 }), f.to(e, { scale: 1, y: 0, duration: 1.6, ease: "power3.inOut", onComplete: () => f.set(e, { willChange: "auto" }) })) } collectParallaxItems() { const e = this.shadowRoot.querySelectorAll("[data-parallax-image]"); if (this.parallaxImages = [], this.parallaxItems = [], !e.length) return; this.parallaxImages = Array.from(e).map(e => { const t = e.closest(".image-container") || e.parentElement; t && (t.style.overflow = "hidden"), e.style.height = "120%", e.style.objectFit = "cover", f.set(e, { willChange: "transform" }), e._ySetter = f.quickSetter(e, "y", "px"); const i = (null == t ? void 0 : t.offsetHeight) || 0, r = e.offsetHeight, o = r - i; return { el: e, type: "image", speed: parseFloat(e.dataset.speed || .3), intensity: parseFloat(e.dataset.intensity || .1), range: parseFloat(e.dataset.range || 100), currentY: 0, targetY: 0, isVisible: !1, containerHeight: i, imageHeight: r, movableRange: o } }).filter(Boolean); this.globalItems = [{ selector: ".img--top .img--main", speed: .2, intensity: .12 }, { selector: ".img--top .img--bottom-center", speed: .15, intensity: .15 }].map(e => { const t = this.shadowRoot.querySelector(e.selector); return t ? (t._ySetter = f.quickSetter(t, "y", "px"), f.set(t, { willChange: "transform", force3D: !0 }), { el: t, speed: e.speed, intensity: e.intensity, currentY: 0, targetY: 0, isVisible: !1 }) : null }).filter(Boolean), this.parallaxItems = [...this.parallaxImages, ...this.globalItems] } setupAdvancedParallax() { requestAnimationFrame(() => { requestAnimationFrame(() => { this.collectParallaxItems(), this.parallaxItems.length && (this.setupParallaxObserver(), this.setupParallaxScrollTriggers(), this.setupParallaxLoop()) }) }) } setupParallaxObserver() { this._parallaxObserver = new IntersectionObserver(e => { e.forEach(e => { const t = e.target.__parallaxItem; t && (t.isVisible = e.isIntersecting, e.isIntersecting || (t.currentY = t.targetY)) }) }, { root: this.container, rootMargin: "40% 0px" }), this.parallaxItems.forEach(e => { e.el.__parallaxItem = e, this._parallaxObserver.observe(e.el) }) } setupParallaxScrollTriggers() { this.parallaxImages.forEach(e => { const t = w.create({ trigger: e.el, scroller: this.container, start: "top bottom", end: "bottom top", onUpdate: t => { if (!e.isVisible) return; const i = e.movableRange ?? e.range; e.targetY = -t.progress * i * e.speed } }); e.trigger = t, this.scrollTriggers.push(t) }), this.globalItems.forEach(e => { const t = w.create({ trigger: e.el, scroller: this.container, start: "top bottom", end: "bottom top", onUpdate: t => { e.isVisible && (e.targetY = 200 * -t.progress * e.speed) } }); e.trigger = t, this.scrollTriggers.push(t) }) } setupParallaxLoop() { const e = () => { this.parallaxItems.forEach(e => { if (!e.isVisible || !e.el) return; if (void 0 === e.targetY) return; const t = e.targetY - (e.currentY ?? e.targetY); e.currentY = (e.currentY ?? e.targetY) + t * (e.intensity ?? .1), Math.abs(t) < .01 || e.el._ySetter(e.currentY) }) }; f.ticker.add(e), this._parallaxTickerFn = e } setupGlobalParallax() { [{ selector: ".img--top .img--main", speed: .2, layer: "background", intensity: .12 }, { selector: ".img--top .img--bottom-center", speed: .15, layer: "background", intensity: .15 }].forEach(e => { const t = this.shadowRoot.querySelector(e.selector); if (!t) return; const i = { currentY: 0, targetY: 0, intensity: e.intensity }; this.inertiaStates.set(t, i), f.set(t, { willChange: "transform", force3D: !0 }); const r = w.create({ trigger: t, scroller: this.container, start: "top bottom", end: "bottom top", scrub: !0, onUpdate: t => { i.targetY = 200 * -t.progress * e.speed } }); this.scrollTriggers.push(r), this.parallaxItems.push({ element: t, speed: e.speed, trigger: r }); const o = () => { const e = this.inertiaStates.get(t); e && (e.currentY += (e.targetY - e.currentY) * e.intensity, f.set(t, { y: e.currentY })) }; f.ticker.add(o), this.updateLoops.push({ element: t, fn: o }) }) } setupEditorialSection() { const e = this.shadowRoot.querySelector(".editorial-collage"); if (!e) return; const t = this.shadowRoot.querySelector(".stage-bg"), i = this.shadowRoot.querySelector(".card--main"), r = this.shadowRoot.querySelector(".card--stack"); if (t) { this._stageBg = t, f.set(t, { willChange: "transform", force3D: !0 }); const i = w.create({ trigger: e, scroller: this.container, start: "top bottom", end: "bottom top", scrub: !0, onUpdate: e => { this._renderState.stageBgY = 150 * e.progress * .15 } }); this.scrollTriggers.push(i) } if (i) { this._mainCard = i, f.set(i, { willChange: "transform", force3D: !0 }); const t = w.create({ trigger: e, scroller: this.container, start: "top 60%", end: "bottom 40%", scrub: !0, onUpdate: e => { this._renderState.mainCardY = 180 * e.progress * .3 } }); this.scrollTriggers.push(t) } if (r) { this._stackCard = r; const t = { currentY: 0, targetY: 0, currentScale: 1, targetScale: 1, intensityY: .05, intensityScale: .03 }; this._renderState.stackState = t, f.set(r, { willChange: "transform", force3D: !0, transformOrigin: "center center" }); const i = w.create({ trigger: e, scroller: this.container, start: "top 50%", end: "bottom 30%", scrub: !0, onUpdate: e => { t.targetY = 240 * -e.progress, t.targetScale = 1 - .08 * e.progress } }); this.scrollTriggers.push(i) } } setupRevealAnimations() { const e = this.shadowRoot.querySelector(".scroll-indicator"); e && (f.set(e, { opacity: 0, y: 200, force3D: !0, visibility: "visible" }), f.to(e, { opacity: 1, y: 0, duration: .8, delay: .3, ease: "power3.out" })); const t = this.shadowRoot.querySelector(".title"); t && (f.set(t, { willChange: "transform", force3D: !0 }), f.set(t, { opacity: 0, y: 200, force3D: !0, visibility: "visible" }), f.to(t, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", onComplete: () => f.set(t, { willChange: "auto" }) })); const i = this.shadowRoot.querySelector(".overview .right-text"); if (i) { const e = i.querySelectorAll("p"); if (e.length > 0) { const t = w.create({ trigger: i, scroller: this.container, start: "top 95%", toggleActions: "play none none reverse", animation: f.from(e, { y: 40, opacity: 0, stagger: .12, duration: 1.2, ease: "power3.out" }) }); this.scrollTriggers.push(t) } } const r = this.shadowRoot.querySelector(".mid-title"); if (r) { const e = w.create({ trigger: r, scroller: this.container, start: "top 90%", toggleActions: "play none none reverse", animation: f.from(r, { opacity: 0, y: 20, duration: .8, ease: "power2.out" }) }); this.scrollTriggers.push(e) } const o = this.shadowRoot.querySelector(".divider"); if (o) { const e = w.create({ trigger: o.closest(".divider-wrapper"), scroller: this.container, start: "top 85%", toggleActions: "play none none reverse", animation: f.from(o, { scaleX: 0, duration: 1.5, ease: "power3.inOut" }) }); this.scrollTriggers.push(e) } const s = this.shadowRoot.querySelectorAll(".client, .company, .role, .year"), a = this.shadowRoot.querySelector(".project-info"); if (s.length > 0 && a) { const e = w.create({ trigger: a, scroller: this.container, start: "top 90%", toggleActions: "play none none reverse", animation: f.from(s, { y: 30, opacity: 0, stagger: .08, duration: 1, ease: "power3.out" }) }); this.scrollTriggers.push(e) } const n = this.shadowRoot.querySelectorAll(".res-item p"), l = this.shadowRoot.querySelector(".responsibilities"); if (n.length > 0 && l) { const e = w.create({ trigger: l, scroller: this.container, start: "top 80%", toggleActions: "play none none reverse", animation: f.from(n, { y: 40, opacity: 0, stagger: .1, duration: 1.2, ease: "power3.out" }) }); this.scrollTriggers.push(e) } const c = this.shadowRoot.querySelector(".next-project"); c && this._createNextProjectAnimation(c) } _createNextProjectAnimation(e) { const t = e.querySelector(".next-label"), i = e.querySelector(".label-line"), r = e.querySelector(".next-project-title"), o = e.querySelector(".title-arrow"), s = e.querySelector(".editorial-divider"), a = e.querySelector(".pill-button"); if (!r) return; f.set(r, { willChange: "transform", perspective: 1e3, transformStyle: "preserve-3d" }); const n = w.create({ trigger: e, scroller: this.container, start: "top 80%", toggleActions: "play none none none", markers: !1, animation: f.timeline().fromTo([t, i], { opacity: 0, y: 30, scaleX: 0 }, { opacity: 1, y: 0, scaleX: 1, duration: 3, ease: "power3.out", stagger: .1 }, "0").fromTo(r, { transformOrigin: "50% 0%", opacity: 0, rotationX: -90, z: -200 }, { ease: "power1", opacity: 1, stagger: .5, rotationX: 0, z: 0 }, "0.5").fromTo(o, { opacity: 0, x: -20, scale: .8 }, { opacity: 1, x: 0, scale: 1, duration: .9, ease: "back.out(1.7)" }, "0.5").fromTo(s, { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 1, ease: "power3.out" }, "0.8").fromTo(a, { opacity: 0, y: 30, scale: .9 }, { opacity: 1, y: 0, scale: 1, duration: .9, ease: "power3.out" }, "1.1").call(() => { f.set(r, { willChange: "auto" }) }) }); this.scrollTriggers.push(n) } setupHoverEvent() { const e = this.shadowRoot.querySelector(".back-btn"), t = this.shadowRoot.querySelectorAll(".footer-socials"); if (!e || !t) return; const i = () => S.emit("cursor:mode", { mode: "hover-nav" }), r = () => S.emit("cursor:mode", { mode: "default" }), o = () => S.emit("cursor:mode", { mode: "hover-nav" }), s = () => S.emit("cursor:mode", { mode: "default" }); e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", r), t.forEach(e => { e.addEventListener("mouseenter", o), e.addEventListener("mouseleave", s) }), this._hoverCleanups.push(() => { e.removeEventListener("mouseenter", i), e.removeEventListener("mouseleave", r), t.forEach(e => { e.removeEventListener("mouseenter", o), e.removeEventListener("mouseleave", s) }) }) } initPillNavigation() { const e = this.shadowRoot.querySelector(".pill-button"); if (!e) return; const t = e.innerHTML; e.innerHTML = `\n      <div class="pill__filler"></div>\n      <span class="pill__text-wrap">\n        <span class="pill__text-inner">${t}</span>\n      </span>\n    `, e.style.overflow = "hidden", e.style.position = "relative"; const i = e.querySelector(".pill__filler"), r = e.querySelector(".pill__text-inner"), o = e.querySelector(".pill__text-wrap"); i.style.cssText = "\n      background: #000;\n      position: absolute;\n      width: 150%;\n      height: 200%;\n      border-radius: 50%;\n      top: -50%;\n      left: -25%;\n      transform: translate3d(0, 75%, 0);\n      pointer-events: none;\n    ", o.style.cssText = "\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      height: 100%;\n      position: relative;\n      z-index: 1;\n    ", r.style.cssText = "\n      display: flex;\n      align-items: center;\n      gap: 1.5rem;\n    "; const s = { tx: { previous: 0, current: 0, amt: .1 }, ty: { previous: 0, current: 0, amt: .1 } }; let a = !1, n = null, l = this.animationCache.getRect(e); const c = .7 * l.width; let d = { x: 0, y: 0 }; const h = e => { d = { x: e.clientX, y: e.clientY } }; window.addEventListener("mousemove", h); const p = (e, t, i) => e + (t - e) * i, m = () => { l = e.getBoundingClientRect(); const t = d.x - (l.left + l.width / 2), h = d.y - (l.top + l.height / 2); let u = 0, g = 0; Math.sqrt(t * t + h * h) < c ? (a || (() => { a = !0, e.classList.add("pill--hover"), f.killTweensOf(i), f.killTweensOf(r); const t = e.querySelector(".pill-count"); t && f.to(t, { background: "rgba(255,255,255,0.2)", color: "#fff", duration: .3 }), f.timeline().to(i, { y: "0%", duration: .5, ease: "power3.out", startAt: { y: "75%" } }, 0).to(r, { opacity: 0, y: "-10%", duration: .1, ease: "power3.out" }, 0).to(r, { opacity: 1, y: "0%", duration: .25, ease: "power3.out", startAt: { y: "30%", opacity: 1 } }, .1) })(), u = .3 * t, g = .3 * h) : a && (() => { a = !1, e.classList.remove("pill--hover"), f.killTweensOf(i), f.killTweensOf(r); const t = e.querySelector(".pill-count"); t && f.to(t, { background: "rgba(0,0,0,0.05)", color: "#000", duration: .3 }), f.timeline().to(i, { y: "-75%", duration: .4, ease: "power3.out" }, 0).to(r, { opacity: 0, y: "10%", duration: .1, ease: "power3.out" }, 0).to(r, { opacity: 1, y: "0%", duration: .25, ease: "power3.out", startAt: { y: "-30%", opacity: 1 } }, .1) })(), s.tx.current = u, s.ty.current = g, s.tx.previous = p(s.tx.previous, s.tx.current, s.tx.amt), s.ty.previous = p(s.ty.previous, s.ty.current, s.ty.amt), e.style.transform = `translate3d(${s.tx.previous}px, ${s.ty.previous}px, 0)`, o.style.transform = `translate3d(${.6 * -s.tx.previous}px, ${.6 * -s.ty.previous}px, 0)`, n = requestAnimationFrame(m) }; n = requestAnimationFrame(m), this._hoverCleanups.push(() => { window.removeEventListener("mousemove", h), cancelAnimationFrame(n), e.classList.remove("pill--hover") }) } _setupNextProjectHover() { const e = this.shadowRoot.querySelector(".next-project-title"), t = e.querySelector(".title-text"); let i; e.addEventListener("mouseenter", () => i = e.getBoundingClientRect()), e.addEventListener("mousemove", e => { const r = (e.clientX - i.left) / i.width - .5, o = (e.clientY - i.top) / i.height - .5; f.to(t, { x: 20 * r, y: 10 * o, duration: .4, ease: "power3.out" }) }), e.addEventListener("mouseleave", () => { f.to(t, { x: 0, y: 0, duration: .6, ease: "power3.out" }) }) } setupProgressBar() { const e = this.shadowRoot.querySelector(".scroll-progress__bar"); e && (this._progressBar = e) } setupFooterAnimation() { const e = this.shadowRoot.querySelector(".footer-contact-info"), t = this.shadowRoot.querySelector(".work-header-h2-footer"), i = null == t ? void 0 : t.querySelector(".accent"); if (!e || !t || !i) return; f.set(e, { opacity: 0, y: 30 }), f.set(i, { opacity: 0, y: 20, color: "transparent" }); const r = w.create({ trigger: e, start: "top 85%", once: !0, onEnter: () => { f.to(e, { opacity: 1, y: 0, duration: .8, ease: "power3.out" }) } }); this.scrollTriggers.push(r); const o = window.matchMedia("(max-width: 1199px)").matches ? "top 55%" : "top 75%", s = w.create({ trigger: t, start: o, once: !0, onEnter: () => { f.to(i, { opacity: 1, y: 0, color: "#ff6a3d", duration: 1.2, ease: "back.out(1.2)" }) } }); this.scrollTriggers.push(s) } setupBackToTop() { const e = this.shadowRoot.querySelector(".back-btn"), t = e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2; this._addEventListener(e, "click", () => { this.lenis.scrollTo(0, { duration: 1.4, easing: t }) }) } initResizeHandler() { let e; window.addEventListener("resize", () => { clearTimeout(e), e = setTimeout(() => { this.refresh() }, 250) }) } refresh() { this.lenis && this.lenis.resize(), w.refresh() } destroy() { var e; this._mainTickerFn && (f.ticker.remove(this._mainTickerFn), this._mainTickerFn = null), this._renderState = null, this._progressBar = null, this._stageBg = null, this._mainCard = null, this._stackCard = null, this._parallaxTickerFn && (f.ticker.remove(this._parallaxTickerFn), this._parallaxTickerFn = null), this.inertiaStates && this.inertiaStates.clear(), this.scrollTriggers.forEach(e => { if (e && "function" == typeof e.kill) try { e.kill() } catch (t) { } }), this._parallaxTickerFn && (f.ticker.remove(this._parallaxTickerFn), this._parallaxTickerFn = null), this._parallaxObserver && (this._parallaxObserver.disconnect(), this._parallaxObserver = null), this.parallaxItems.forEach(e => { e.el && (delete e.el.__parallaxItem, f.set(e.el, { willChange: "auto", clearProps: "transform" })) }), this.scrollTriggers = [], this.parallaxItems = [], this.parallaxImages = [], this.lenis && (this.lenis.off("scroll", w.update), this.lenis.destroy(), this.lenis = null), this.wheelTimeout && (clearTimeout(this.wheelTimeout), this.wheelTimeout = null), this._removeEventListeners(), null == (e = this.animationCache) || e.destroy(), this.events.destroy(), this._hoverCleanups && (this._hoverCleanups.forEach(e => e()), this._hoverCleanups = []) } } class ye extends i {
  constructor() { super(), this.project = ue["hello-clever"], this.gsapAnimations = null, this.hasGSAPStarted = !1, this._isMounted = !1 } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } firstUpdated() { var e; null == (e = window.app) || e.queueAnimation(() => this.runHomeAnimations(), "hello-page") } async runHomeAnimations() { this._isMounted && (this.hasGSAPStarted || (this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.gsapAnimations = new we(this.shadowRoot), window.currentAnimation = this.gsapAnimations, await this.gsapAnimations.init(), this.hasGSAPStarted = !0)) } disconnectedCallback() { super.disconnectedCallback(), this.gsapAnimations && (this.gsapAnimations.destroy(), this.gsapAnimations = null), this.hasGSAPStarted = !1 } render() {
    return this.project ? r`
      <div class="scroll-progress">
        <div class="scroll-progress__bar"></div>
      </div>

      <div class="scroll-container">
        <div class="page-content">
          <section class="project-detail">
            ${de({ project: this.project })}
            ${he({ project: this.project })}
            ${pe({ project: this.project })} ${r`
    <div class="project-img">
      <div class="img__1">
        <div class="image-container" style="overflow: hidden; height: 100%;">
          <img
            src="/images/works/vatsalya-new-2.png"
            alt="Vatsalya"
            data-parallax-image
            data-speed="0.25"
            data-intensity="0.08"
            data-range="100"
            style="width: 100%; height: 120%; object-fit: cover;"
          />
        </div>
      </div>
    </div>
  `}
            ${r`
    <div class="overview responsibilities">
      <div class="responsibility-grid">
        <div class="hero-description res">
          <div class="left-label">Key Features</div>
          <div class="right-text res-item second-text">
            <p>
              Real-time Health Tracking (Heart Rate, SpO2), SOS Emergency Alerts, Fall Detection, Medicine Reminders, Caregiver Dashboard, Voice Assistance, Geofencing, Instant Notifications, Secure Health Data Encryption, Wearable Device Integration.
            </p>
          </div>
        </div>

        <div class="hero-description res">
          <div class="left-label">Tech Stack</div>
          <div class="right-text res-item second-text">
            <p>
              React.js, Next.js, Python, FastAPI, Firebase, MongoDB, TensorFlow, OpenCV, BLE, FCM, Tailwind CSS, JWT Authentication.
            </p>
          </div>
        </div>

        <div class="hero-description res">
          <div class="left-label">Role</div>
          <div class="right-text res-item second-text">
            <p>
              Full Stack Developer. Designed complete application architecture, built caregiver dashboard, developed secure backend APIs, implemented authentication system, integrated AI health prediction, developed multilingual interface, connected wearable devices, and built emergency notification workflow.
            </p>
          </div>
        </div>

        <div class="hero-description res">
          <div class="left-label">Highlights</div>
          <div class="right-text res-item second-text">
            <p>
              AI-powered health predictions, real-time vital monitoring, instant caregiver alerts, emergency SOS trigger workflow, BLE wearable synchronization, secure cloud data storage, and caregiver dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  `} ${r`
    <div class="editorial-collage">
      <div class="img--top__bg">
        <div class="img--top">
          <div class="img img--main" data-parallax-layer="background">
            <img src="/images/works/vatsalya-new-2.png" alt="Caregiver Dashboard" />
          </div>
          <div class="img img--bottom-center" data-parallax-layer="background">
            <img src="/images/works/vatsalya-new-2.png" alt="Emergency Alerts" />
          </div>
        </div>
      </div>

      <div class="editorial-stage">
        <div class="stage-bg" data-parallax-layer="deep-background"></div>

        <div class="editorial-wrap">
          <div class="card card--main" data-parallax-layer="midground">
            <img src="/images/works/vatsalya-new-2.png" alt="VATSALYA" />
          </div>

          <div class="card card--stack" data-parallax-layer="foreground">
            <img src="/images/works/vatsalya-new-2.png" alt="Vitals Tracking" />
          </div>
        </div>
      </div>
    </div>
  `}

            ${ve(this.project.slug)} ${me()}
          </section>
        </div>
      </div>
    `: r`<not-found-page></not-found-page>`
  }
} t(ye, "styles", fe), customElements.define("hello-clever-page", ye); class xe { constructor(e) { t(this, "initLenis", () => { this.lenis = new k({ wrapper: this.container, content: this.scroller, orientation: "vertical", lerp: .07, smoothWheel: !0, smooth: !0, wheelMultiplier: .5, touchMultiplier: 1.2, touchInertiaMultiplier: .85, wheelInertiaMultiplier: .75, duration: 1, easing: e => { if (e < .7) return e * (2 - .8 * e); { const t = (e - .7) / .3; return .79 + .21 * Math.pow(t, .3) } }, syncTouch: !1, gestureOrientation: "vertical", infinite: !1, autoResize: !0 }), this._renderState = { scrollProgress: 0, scrollCurrent: 0 }, this.lenis.on("scroll", ({ scroll: e, limit: t }) => { this._renderState.scrollProgress = e / t }), this.lenis.on("scroll", w.update), this._lenisTickerFn = e => { this.lenis.raf(1e3 * e) }, this._renderTickerFn = () => { const e = this._renderState; e && (e.scrollCurrent += .12 * (e.scrollProgress - e.scrollCurrent), this._progressBar && (this._progressBar.style.transform = `scaleY(${e.scrollCurrent})`)) }, f.ticker.add(this._lenisTickerFn), f.ticker.add(this._renderTickerFn), f.ticker.lagSmoothing(0); let e, t = !1; const i = () => { t = !0, clearTimeout(e), .07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY }, r = () => { t = !1, .3 !== this.lenis.options.lerp && (this.lenis.options.lerp = .3), this.lenis.options.easing = this.EASE_BRAKE, e = setTimeout(() => { t || (.07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY) }, 150) }; let o; this._addEventListener(this.container, "wheel", () => { i(), clearTimeout(e), clearTimeout(o), o = setTimeout(() => { e = setTimeout(r, 100) }, 16) }, { passive: !0 }), this._addEventListener(this.container, "touchstart", i, { passive: !0 }), this._addEventListener(this.container, "touchmove", () => { i(), clearTimeout(e) }, { passive: !0 }), this._addEventListener(this.container, "touchend", r, { passive: !0 }) }), this.shadowRoot = e, this.lenis = null, this.scrollTriggers = [], this.parallaxItems = [], this.parallaxImages = [], this.inertiaStates = new Map, this.updateLoops = [], this.container = null, this.scroller = null, this.isExiting = !1, this._eventListeners = [], this._eventBusHandlers = [], this._hoverCleanups = [], this.EASE_HEAVY = e => 1 === e ? 1 : 1 - Math.pow(2, -12 * e), this.EASE_BRAKE = e => e < .2 ? 5 * e : 1, this.onNavClick = this.onNavClick.bind(this), this.animationCache = new ne } async init() { const e = () => { var e; return null == (e = this.lenis) ? void 0 : e.stop() }, t = () => { var e; return null == (e = this.lenis) ? void 0 : e.start() }; this.events = new K(S), this.events.on("page:ready", () => this.playIntroAnimation()).on("transition:start", () => e()).on("transition:end", () => t()).on("page:covered", ({ url: e }) => this.onNavClick({ url: e })), this.initElements(), this.initLenis(), w.defaults({ scroller: this.container }), await Q(), await Z(this.shadowRoot), this.setupProgressBar(); const i = window.matchMedia("(min-width: 1000px)").matches; this.waitForImages = () => J(this.shadowRoot.querySelector(".page-content")), this.waitForImages().then(() => { i && (this.setupAdvancedParallax(), this.setupHoverEvent(), this._setupNextProjectHover(), this.initPillNavigation(), this.setupFooterAnimation(), this.setupRevealAnimations()) }), this.setupBackToTop(), this.initResizeHandler(), W.pageReady = !0, requestAnimationFrame(() => { S.emit("page:ready") }) } async onNavClick({ url: e }) { var t; const i = window.location.pathname; if (!e || e === i) return; if (this.isExiting) return; this.isExiting = !0, null == (t = this.lenis) || t.stop(); window.matchMedia("(min-width: 1200px)").matches && await this.exit(), S.emit("page:exit:done", { url: e }) } exit() { return new Promise(e => { this.scrollTriggers.forEach(e => null == e ? void 0 : e.kill()); const t = this.shadowRoot.querySelector(".hero"), i = this.shadowRoot.querySelector(".timeline-hero"), r = this.shadowRoot.querySelector(".overview"), o = this.shadowRoot.querySelector(".next-project"), s = this.shadowRoot.querySelector(".work-footer"), a = this.shadowRoot.querySelector(".page-content"), n = [s, o, r, i, t, a].filter(Boolean); f.set(n, { willChange: "transform, opacity", force3D: !0 }), requestAnimationFrame(() => { const l = f.timeline({ defaults: { ease: "power3.in", duration: .6 }, onComplete: () => { f.set(n, { clearProps: "willChange,transform,opacity" }), e() } }); l.to(s, { y: -70 }, 0), l.to(o, { y: -55 }, .04), l.to(r, { y: -35 }, .1), l.to(i, { y: -25 }, .14), l.to(t, { y: -20 }, .18), l.to(a, { y: -10, duration: .45 }, .22) }) }) } initElements() { this.container = this.shadowRoot.querySelector(".scroll-container"), this.scroller = this.shadowRoot.querySelector(".page-content") } _removeEventListeners() { this._eventBusHandlers.forEach(({ event: e, handler: t }) => { S.off(e, t) }), this._eventBusHandlers = [], this._eventListeners.forEach(({ element: e, type: t, handler: i }) => { e && e.removeEventListener && e.removeEventListener(t, i) }), this._eventListeners = [] } _addEventListener(e, t, i, r) { e.addEventListener(t, i, r), this._eventListeners.push({ element: e, type: t, handler: i }) } playIntroAnimation() { const e = this.shadowRoot.querySelector(".hero-img img[data-intro-image]"); e && (f.set(e, { scale: .85, y: 50 }), f.to(e, { scale: 1, y: 0, duration: 1.6, ease: "power3.inOut" })) } collectParallaxItems() { const e = this.shadowRoot.querySelectorAll("[data-parallax-image]"); this.parallaxImages = [], this.parallaxItems = [], e.length && (this.parallaxImages = Array.from(e).map(e => { const t = e.closest(".image-container") || e.parentElement; t && (t.style.overflow = "hidden"), e.style.height = "120%", e.style.objectFit = "cover", f.set(e, { willChange: "transform" }), e._ySetter = f.quickSetter(e, "y", "px"); const i = (null == t ? void 0 : t.offsetHeight) || 0, r = e.offsetHeight, o = r - i; return { el: e, type: "image", speed: parseFloat(e.dataset.speed || .3), intensity: parseFloat(e.dataset.intensity || .1), range: parseFloat(e.dataset.range || 100), currentY: 0, targetY: 0, isVisible: !1, containerHeight: i, imageHeight: r, movableRange: o } }).filter(Boolean), this.parallaxItems = [...this.parallaxImages]) } setupAdvancedParallax() { requestAnimationFrame(() => { requestAnimationFrame(() => { this.collectParallaxItems(), this.parallaxItems.length && (this.setupParallaxObserver(), this.setupParallaxScrollTriggers(), this.setupParallaxLoop()) }) }) } setupParallaxObserver() { this._parallaxObserver = new IntersectionObserver(e => { e.forEach(e => { const t = e.target.__parallaxItem; t && (t.isVisible = e.isIntersecting, e.isIntersecting || (t.currentY = t.targetY)) }) }, { root: this.container, rootMargin: "40% 0px" }), this.parallaxItems.forEach(e => { e.el.__parallaxItem = e, this._parallaxObserver.observe(e.el) }) } setupParallaxScrollTriggers() { this.parallaxImages.forEach(e => { const t = w.create({ trigger: e.el, scroller: this.container, start: "top bottom", end: "bottom top", onUpdate: t => { if (!e.isVisible) return; const i = e.movableRange ?? e.range; e.targetY = -t.progress * i * e.speed } }); e.trigger = t, this.scrollTriggers.push(t) }) } setupParallaxLoop() { const e = () => { this.parallaxItems.forEach(e => { if (!e.isVisible || !e.el) return; if (void 0 === e.targetY) return; const t = e.targetY - (e.currentY ?? e.targetY); e.currentY = (e.currentY ?? e.targetY) + t * (e.intensity ?? .1), Math.abs(t) < .01 || e.el._ySetter(e.currentY) }) }; f.ticker.add(e), this._parallaxTickerFn = e } setupRevealAnimations() { const e = this.shadowRoot.querySelector(".title"); e && (f.set(e, { opacity: 0, y: 200, force3D: !0, visibility: "visible" }), f.to(e, { opacity: 1, y: 0, duration: 1.5, delay: 0, ease: "power3.out" })); const t = this.shadowRoot.querySelector(".overview .right-text"); if (t) { const e = t.querySelectorAll("p"); if (e.length > 0) { const i = w.create({ trigger: t, scroller: this.container, start: "top 95%", toggleActions: "play none none reverse", animation: f.from(e, { y: 40, opacity: 0, stagger: .12, duration: 1.2, ease: "power3.out" }) }); this.scrollTriggers.push(i) } } const i = this.shadowRoot.querySelector(".mid-title"); if (i) { const e = w.create({ trigger: i, scroller: this.container, start: "top 90%", toggleActions: "play none none reverse", animation: f.from(i, { opacity: 0, y: 20, duration: .8, ease: "power2.out" }) }); this.scrollTriggers.push(e) } const r = this.shadowRoot.querySelector(".divider"); if (r) { const e = w.create({ trigger: r.closest(".divider-wrapper"), scroller: this.container, start: "top 85%", toggleActions: "play none none reverse", animation: f.from(r, { scaleX: 0, duration: 1.5, ease: "power3.inOut" }) }); this.scrollTriggers.push(e) } const o = this.shadowRoot.querySelectorAll(".client, .company, .role, .year"), s = this.shadowRoot.querySelector(".project-info"); if (o.length > 0 && s) { const e = w.create({ trigger: s, scroller: this.container, start: "top 90%", toggleActions: "play none none reverse", animation: f.from(o, { y: 30, opacity: 0, stagger: .08, duration: 1, ease: "power3.out" }) }); this.scrollTriggers.push(e) } const a = this.shadowRoot.querySelector(".scroll-indicator"); a && f.from(a, { opacity: 0, y: 20, duration: 1.5, delay: .5, ease: "power3.out" }); const n = this.shadowRoot.querySelector(".next-project"); n && this._createNextProjectAnimation(n) } _createNextProjectAnimation(e) { const t = e.querySelector(".next-label"), i = e.querySelector(".label-line"), r = e.querySelector(".next-project-title"), o = e.querySelector(".title-arrow"), s = e.querySelector(".editorial-divider"), a = e.querySelector(".pill-button"); if (!r) return; f.set(r, { perspective: 1e3, transformStyle: "preserve-3d" }); const n = w.create({ trigger: e, scroller: this.container, start: "top 80%", toggleActions: "play none none none", markers: !1, animation: f.timeline().fromTo([t, i], { opacity: 0, y: 30, scaleX: 0 }, { opacity: 1, y: 0, scaleX: 1, duration: 3, ease: "power3.out", stagger: .1 }, "0").fromTo(r, { transformOrigin: "50% 0%", opacity: 0, rotationX: -90, z: -200 }, { ease: "power1", opacity: 1, stagger: .5, rotationX: 0, z: 0 }, "0.5").fromTo(o, { opacity: 0, x: -20, scale: .8 }, { opacity: 1, x: 0, scale: 1, duration: .9, ease: "back.out(1.7)" }, "0.5").fromTo(s, { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 1, ease: "power3.out" }, "0.8").fromTo(a, { opacity: 0, y: 30, scale: .9 }, { opacity: 1, y: 0, scale: 1, duration: .9, ease: "power3.out" }, "1.1") }); this.scrollTriggers.push(n) } setupHoverEvent() { const e = this.shadowRoot.querySelector(".back-btn"), t = this.shadowRoot.querySelectorAll(".footer-socials"); if (!e || !t) return; const i = () => S.emit("cursor:mode", { mode: "hover-nav" }), r = () => S.emit("cursor:mode", { mode: "default" }), o = () => S.emit("cursor:mode", { mode: "hover-nav" }), s = () => S.emit("cursor:mode", { mode: "default" }); e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", r), t.forEach(e => { e.addEventListener("mouseenter", o), e.addEventListener("mouseleave", s) }), this._hoverCleanups.push(() => { e.removeEventListener("mouseenter", i), e.removeEventListener("mouseleave", r), t.forEach(e => { e.removeEventListener("mouseenter", o), e.removeEventListener("mouseleave", s) }) }) } initPillNavigation() { const e = this.shadowRoot.querySelector(".pill-button"); if (!e) return; const t = e.innerHTML; e.innerHTML = `\n      <div class="pill__filler"></div>\n      <span class="pill__text-wrap">\n        <span class="pill__text-inner">${t}</span>\n      </span>\n    `, e.style.overflow = "hidden", e.style.position = "relative"; const i = e.querySelector(".pill__filler"), r = e.querySelector(".pill__text-inner"), o = e.querySelector(".pill__text-wrap"); i.style.cssText = "\n      background: #000;\n      position: absolute;\n      width: 150%;\n      height: 200%;\n      border-radius: 50%;\n      top: -50%;\n      left: -25%;\n      transform: translate3d(0, 75%, 0);\n      pointer-events: none;\n    ", o.style.cssText = "\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      height: 100%;\n      position: relative;\n      z-index: 1;\n    ", r.style.cssText = "\n      display: flex;\n      align-items: center;\n      gap: 1.5rem;\n    "; const s = { tx: { previous: 0, current: 0, amt: .1 }, ty: { previous: 0, current: 0, amt: .1 } }; let a = !1, n = null, l = this.animationCache.getRect(e); const c = .7 * l.width; let d = { x: 0, y: 0 }; const h = e => { d = { x: e.clientX, y: e.clientY } }; window.addEventListener("mousemove", h); const p = (e, t, i) => e + (t - e) * i, m = () => { l = e.getBoundingClientRect(); const t = d.x - (l.left + l.width / 2), h = d.y - (l.top + l.height / 2); let u = 0, g = 0; Math.sqrt(t * t + h * h) < c ? (a || (() => { a = !0, e.classList.add("pill--hover"), f.killTweensOf(i), f.killTweensOf(r); const t = e.querySelector(".pill-count"); t && f.to(t, { background: "rgba(255,255,255,0.2)", color: "#fff", duration: .3 }), f.timeline().to(i, { y: "0%", duration: .5, ease: "power3.out", startAt: { y: "75%" } }, 0).to(r, { opacity: 0, y: "-10%", duration: .1, ease: "power3.out" }, 0).to(r, { opacity: 1, y: "0%", duration: .25, ease: "power3.out", startAt: { y: "30%", opacity: 1 } }, .1) })(), u = .3 * t, g = .3 * h) : a && (() => { a = !1, e.classList.remove("pill--hover"), f.killTweensOf(i), f.killTweensOf(r); const t = e.querySelector(".pill-count"); t && f.to(t, { background: "rgba(0,0,0,0.05)", color: "#000", duration: .3 }), f.timeline().to(i, { y: "-75%", duration: .4, ease: "power3.out" }, 0).to(r, { opacity: 0, y: "10%", duration: .1, ease: "power3.out" }, 0).to(r, { opacity: 1, y: "0%", duration: .25, ease: "power3.out", startAt: { y: "-30%", opacity: 1 } }, .1) })(), s.tx.current = u, s.ty.current = g, s.tx.previous = p(s.tx.previous, s.tx.current, s.tx.amt), s.ty.previous = p(s.ty.previous, s.ty.current, s.ty.amt), e.style.transform = `translate3d(${s.tx.previous}px, ${s.ty.previous}px, 0)`, o.style.transform = `translate3d(${.6 * -s.tx.previous}px, ${.6 * -s.ty.previous}px, 0)`, n = requestAnimationFrame(m) }; n = requestAnimationFrame(m), this._hoverCleanups.push(() => { window.removeEventListener("mousemove", h), cancelAnimationFrame(n), e.classList.remove("pill--hover") }) } _setupNextProjectHover() { const e = this.shadowRoot.querySelector(".next-project-title"), t = e.querySelector(".title-text"); if (!e || !t) return; let i; const r = () => i = e.getBoundingClientRect(), o = e => { const r = (e.clientX - i.left) / i.width - .5, o = (e.clientY - i.top) / i.height - .5; f.to(t, { x: 20 * r, y: 10 * o, duration: .4, ease: "power3.out" }) }, s = () => { f.to(t, { x: 0, y: 0, duration: .6, ease: "power3.out" }) }; e.addEventListener("mouseenter", r), e.addEventListener("mousemove", o), e.addEventListener("mouseleave", s), this._hoverCleanups.push(() => { e.removeEventListener("mouseenter", r), e.removeEventListener("mousemove", o), e.removeEventListener("mouseleave", s) }) } setupProgressBar() { const e = this.shadowRoot.querySelector(".scroll-progress__bar"); e && (this._progressBar = e) } setupFooterAnimation() { const e = this.shadowRoot.querySelector(".footer-contact-info"), t = this.shadowRoot.querySelector(".work-header-h2-footer"), i = null == t ? void 0 : t.querySelector(".accent"); if (!e || !t || !i) return; f.set(e, { opacity: 0, y: 30 }), f.set(i, { opacity: 0, y: 20, color: "transparent" }); const r = w.create({ trigger: e, start: "top 85%", once: !0, onEnter: () => { f.to(e, { opacity: 1, y: 0, duration: .8, ease: "power3.out" }) } }); this.scrollTriggers.push(r); const o = window.matchMedia("(max-width: 1199px)").matches ? "top 55%" : "top 75%", s = w.create({ trigger: t, start: o, once: !0, onEnter: () => { f.to(i, { opacity: 1, y: 0, color: "#ff6a3d", duration: 1.2, ease: "back.out(1.2)" }) } }); this.scrollTriggers.push(s) } setupBackToTop() { const e = this.shadowRoot.querySelector(".back-btn"), t = e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2; this._addEventListener(e, "click", () => { this.lenis.scrollTo(0, { duration: 1.4, easing: t }) }) } initResizeHandler() { this._resizeHandler = () => { clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(() => this.refresh(), 250) }, window.addEventListener("resize", this._resizeHandler) } refresh() { this.lenis && this.lenis.resize(), w.refresh() } destroy() { var e; this._lenisTickerFn && (f.ticker.remove(this._lenisTickerFn), this._lenisTickerFn = null), this._renderTickerFn && (f.ticker.remove(this._renderTickerFn), this._renderTickerFn = null), this._renderState = null, this._progressBar = null, this._parallaxTickerFn && (f.ticker.remove(this._parallaxTickerFn), this._parallaxTickerFn = null), this._parallaxObserver && (this._parallaxObserver.disconnect(), this._parallaxObserver = null), this.scrollTriggers.forEach(e => { if (e && "function" == typeof e.kill) try { e.kill() } catch (t) { } }), this.parallaxItems.forEach(e => { e.el && (delete e.el.__parallaxItem, f.set(e.el, { willChange: "auto", clearProps: "transform" })) }), this.scrollTriggers = [], this.parallaxItems = [], this.parallaxImages = [], this.lenis && (this.lenis.off("scroll", w.update), this.lenis.destroy(), this.lenis = null), this._removeEventListeners(), null == (e = this.animationCache) || e.destroy(), this.events.destroy(), this._resizeHandler && (clearTimeout(this._resizeTimeout), window.removeEventListener("resize", this._resizeHandler)), this._hoverCleanups && (this._hoverCleanups.forEach(e => e()), this._hoverCleanups = []) } } class be extends i {
  constructor() { super(), this.project = ue["clever-docs"], this.gsapAnimations = null, this.hasGSAPStarted = !1, this._isMounted = !1 } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } firstUpdated() { var e; null == (e = window.app) || e.queueAnimation(() => this.runHomeAnimations(), "docs-page") } async runHomeAnimations() { this._isMounted && (this.hasGSAPStarted || (this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.gsapAnimations = new xe(this.shadowRoot), window.currentAnimation = this.gsapAnimations, await this.gsapAnimations.init(), this.hasGSAPStarted = !0)) } disconnectedCallback() { super.disconnectedCallback(), this.gsapAnimations && (this.gsapAnimations.destroy(), this.gsapAnimations = null), this.hasGSAPStarted = !1 } render() {
    return this.project ? r`
      <div class="scroll-progress">
        <div class="scroll-progress__bar"></div>
      </div>

      <div class="scroll-container">
        <div class="page-content">
          <section class="project-detail">
            <!-- Docs Template -->
            ${de({ project: this.project })}
            ${he({ project: this.project })}
            ${pe({ project: this.project })}
            ${r`
    <div class="overview responsibilities">
      <div class="responsibility-grid">
        <div class="hero-description res">
          <div class="left-label">Key Features</div>
          <div class="right-text res-item second-text">
            <p>
              Fairness Metric Evaluation, Hidden Bias Identification, SHAP & LIME Explainability, Dataset Upload Pipeline, Model Accuracy Auditing, Disparate Impact Analysis, Demographics Parity Check, Interactive Bias Visualization, Explanatory Report Generation, Real-time Fairness Feedback, API Integration Support, Responsive Auditing UI.
            </p>
          </div>
        </div>

        <div class="hero-description res">
          <div class="left-label">Tech Stack</div>
          <div class="right-text res-item second-text">
            <p>
              Python, FastAPI, React.js, Tailwind CSS, Scikit-learn, SHAP, Pandas, NumPy, Matplotlib, Plotly, Docker, GitHub Actions.
            </p>
          </div>
        </div>

        <div class="hero-description res">
          <div class="left-label">Role</div>
          <div class="right-text res-item second-text">
            <p>
              AI Engineer. Designed end-to-end AI bias detection workflow, developed backend APIs using FastAPI, implemented fairness metric calculations, integrated SHAP explainability, built responsive React frontend, developed secure dataset upload pipeline, designed interactive analytics dashboard, and optimized model inference performance.
            </p>
          </div>
        </div>

        <div class="hero-description res">
          <div class="left-label">Highlights</div>
          <div class="right-text res-item second-text">
            <p>
              AI fairness diagnostics, Model bias mitigation, SHAP explainability integration, Disparate impact analysis, Automated auditing reports, Scalable ML evaluation, Interactive bias dashboard, and Ethical AI governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  `}
            ${r`
    <div class="docs-img-container">
      <div class="wrapper">
        <img
          src="/images/works/trustlens-docs-1.png"
        />
      </div>

      <div class="wrapper">
        <img src="/images/works/trustlens-docs-1.png" />
      </div>

      <div class="wrapper">
        <img src="/images/works/trustlens-docs-1.png" />
      </div>

      <div class="wrapper">
        <img src="/images/works/trustlens-docs-1.png" />
      </div>
    </div>
  `}

            <!-- Footer -->
            ${ve(this.project.slug)}
            ${me()}
          </section>
        </div>
      </div>
    `: r`<not-found-page></not-found-page>`
  }
} t(be, "styles", fe), customElements.define("clever-docs-page", be); class _e { constructor(e, i) { t(this, "initLenis", () => { this.lenis = new k({ wrapper: this.container, content: this.scroller, orientation: "vertical", lerp: .07, smoothWheel: !0, smooth: !0, wheelMultiplier: .5, touchMultiplier: 1.2, touchInertiaMultiplier: .85, wheelInertiaMultiplier: .75, duration: 1, easing: e => { if (e < .7) return e * (2 - .8 * e); { const t = (e - .7) / .3; return .79 + .21 * Math.pow(t, .3) } }, syncTouch: !1, gestureOrientation: "vertical", infinite: !1, autoResize: !0 }); let e, t = !1; const i = () => { t = !0, clearTimeout(e), .07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY }, r = () => { t = !1, .3 !== this.lenis.options.lerp && (this.lenis.options.lerp = .3), this.lenis.options.easing = this.EASE_BRAKE, e = setTimeout(() => { t || (.07 !== this.lenis.options.lerp && (this.lenis.options.lerp = .07), this.lenis.options.easing = this.EASE_HEAVY) }, 150) }; let o; this.container.addEventListener("wheel", () => { i(), clearTimeout(e), clearTimeout(o), o = setTimeout(() => { e = setTimeout(r, 100) }, 16) }, { passive: !0 }), this.container.addEventListener("touchstart", i, { passive: !0 }), this.container.addEventListener("touchmove", () => { i(), clearTimeout(e) }, { passive: !0 }), this.container.addEventListener("touchend", r, { passive: !0 }), this.lenis.on("scroll", w.update), this._isRunning = !0; const s = e => { this._isRunning && this.lenis && (this.lenis.raf(e), this._rafId = requestAnimationFrame(s)) }; this._rafId = requestAnimationFrame(s) }), this.shadowRoot = e, this.lenis = null, this.project = i, this.scrollTriggers = [], this.parallaxItems = [], this.isInitialized = !1, this.inertiaStates = new Map, this.updateLoops = [], this.container = null, this.scroller = null, this._rafId = null, this.EASE_HEAVY = e => 1 === e ? 1 : 1 - Math.pow(2, -12 * e), this.EASE_BRAKE = e => e < .2 ? 5 * e : 1 } async init() { this.isInitialized || (await this.waitForDOM(), S.on("transition:start", () => { var e; null == (e = this.lenis) || e.stop() }), S.on("transition:end", () => { var e; null == (e = this.lenis) || e.start() }), this.initElements(), this.initLenis(), this.setupGlobalParallax(), this.setupEditorialSection(), this.setupRevealAnimations(), this.setupBackToTop(), this.initResizeHandler(), this.isInitialized = !0) } async waitForDOM() { return new Promise(e => { if (this.shadowRoot.querySelector(".project-detail")) e(); else { const t = new MutationObserver(() => { this.shadowRoot.querySelector(".project-detail") && (t.disconnect(), e()) }); t.observe(this.shadowRoot, { childList: !0, subtree: !0 }) } }) } initElements() { this.container = this.shadowRoot.querySelector(".scroll-container"), this.scroller = this.shadowRoot.querySelector(".page-content") } overrideLenisInertia() { const e = this.lenis.raf.bind(this.lenis); this.setupWheelDetection(), this.lenis.raf = t => (this.isWheeling || this.lenis.isScrolling && this.lenis.velocity && (this.lenis.velocity *= .3, Math.abs(this.lenis.velocity) < .5 && (this.lenis.isScrolling = !1, this.lenis.velocity = 0, this.lenis.targetScroll = this.lenis.animatedScroll)), e(t)) } setupWheelDetection() { var e, t; const i = () => { this.isWheeling = !0, clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(() => { this.isWheeling = !1 }, 80) }; null == (e = this.container) || e.addEventListener("wheel", i, { passive: !0 }), null == (t = this.container) || t.addEventListener("touchmove", i, { passive: !0 }), this.wheelListener = i } setupGlobalParallax() { [{ selector: ".hero-img img", speed: .25, layer: "background" }, { selector: ".img__1 img", speed: .3, layer: "midground", intensity: .1 }, { selector: ".img--top .img--main", speed: .2, layer: "background", intensity: .12 }, { selector: ".img--top .img--bottom-center", speed: .15, layer: "background", intensity: .15 }].forEach(e => { const t = this.shadowRoot.querySelector(e.selector); if (!t) return; const i = { currentY: 0, targetY: 0, intensity: e.intensity }; this.inertiaStates.set(t, i), f.set(t, { willChange: "transform", force3D: !0 }); const r = w.create({ trigger: t, scroller: this.container, start: "top bottom", end: "bottom top", scrub: 1.2, onUpdate: t => { i.targetY = 200 * -t.progress * e.speed } }); this.scrollTriggers.push(r), this.parallaxItems.push({ element: t, speed: e.speed, trigger: r }); const o = () => { const e = this.inertiaStates.get(t); e && (e.currentY += (e.targetY - e.currentY) * e.intensity, f.set(t, { y: e.currentY })) }; f.ticker.add(o), this.updateLoops.push({ element: t, fn: o }) }) } setupEditorialSection() { const e = this.shadowRoot.querySelector(".editorial-collage"); if (!e) return; const t = this.shadowRoot.querySelector(".stage-bg"); if (t) { f.set(t, { willChange: "transform", force3D: !0 }); const i = w.create({ trigger: e, scroller: this.container, start: "top bottom", end: "bottom top", scrub: 1.5, onUpdate: e => { const i = 150 * e.progress * .15; f.set(t, { y: -i }) } }); this.scrollTriggers.push(i) } const i = this.shadowRoot.querySelector(".card--main"); if (i) { f.set(i, { willChange: "transform", force3D: !0 }); const t = w.create({ trigger: e, scroller: this.container, start: "top 60%", end: "bottom 40%", scrub: 1.8, onUpdate: e => { const t = 180 * e.progress * .3; f.set(i, { y: -t }) } }); this.scrollTriggers.push(t) } const r = this.shadowRoot.querySelector(".card--stack"); if (r) { const t = { currentY: 0, targetY: 0, currentScale: 1, targetScale: 1, intensityY: .05, intensityScale: .03 }; this.inertiaStates.set(r, t), f.set(r, { willChange: "transform", force3D: !0, transformOrigin: "center center" }); const i = w.create({ trigger: e, scroller: this.container, start: "top 50%", end: "bottom 30%", scrub: 2, onUpdate: e => { const i = e.progress; t.targetY = 240 * -i, t.targetScale = 1 - .08 * i } }); this.scrollTriggers.push(i); const o = () => { const e = this.inertiaStates.get(r); e && (e.currentY += (e.targetY - e.currentY) * e.intensityY, e.currentScale += (e.targetScale - e.currentScale) * e.intensityScale, f.set(r, { y: e.currentY, scale: e.currentScale })) }; f.ticker.add(o), this.updateLoops.push({ element: r, fn: o }) } } setupRevealAnimations() { const e = this.shadowRoot.querySelector(".title"); e && (f.set(e, { opacity: 0, y: 80, force3D: !0 }), f.to(e, { opacity: 1, y: 0, duration: 1.2, delay: .5, ease: "power3.out" })); const t = this.shadowRoot.querySelector(".overview .right-text"); if (t) { const e = t.querySelectorAll("p"); if (e.length > 0) { const i = w.create({ trigger: t, scroller: this.container, start: "top 75%", toggleActions: "play none none reverse", animation: f.from(e, { y: 40, opacity: 0, stagger: .12, duration: 1.2, ease: "power3.out" }) }); this.scrollTriggers.push(i) } } const i = this.shadowRoot.querySelector(".mid-title"); if (i) { const e = w.create({ trigger: i, scroller: this.container, start: "top 90%", toggleActions: "play none none reverse", animation: f.from(i, { opacity: 0, y: 20, duration: .8, ease: "power2.out" }) }); this.scrollTriggers.push(e) } const r = this.shadowRoot.querySelector(".divider"); if (r) { const e = w.create({ trigger: r.closest(".divider-wrapper"), scroller: this.container, start: "top 85%", toggleActions: "play none none reverse", animation: f.from(r, { scaleX: 0, duration: 1.5, ease: "power3.inOut" }) }); this.scrollTriggers.push(e) } const o = this.shadowRoot.querySelectorAll(".client, .company, .role, .year"), s = this.shadowRoot.querySelector(".project-info"); if (o.length > 0 && s) { const e = w.create({ trigger: s, scroller: this.container, start: "top 90%", toggleActions: "play none none reverse", animation: f.from(o, { y: 30, opacity: 0, stagger: .08, duration: 1, ease: "power3.out" }) }); this.scrollTriggers.push(e) } const a = this.shadowRoot.querySelectorAll(".res-item p"), n = this.shadowRoot.querySelector(".responsibilities"); if (a.length > 0 && n) { const e = w.create({ trigger: n, scroller: this.container, start: "top 80%", toggleActions: "play none none reverse", animation: f.from(a, { y: 40, opacity: 0, stagger: .1, duration: 1.2, ease: "power3.out" }) }); this.scrollTriggers.push(e) } const l = this.shadowRoot.querySelectorAll(".docs-img-container .wrapper"); if (l.length > 0) { const e = this.shadowRoot.querySelector(".docs-img-container"), t = w.create({ trigger: e, scroller: this.container, start: "top 80%", toggleActions: "play none none reverse", animation: f.from(l, { y: 100, opacity: 0, stagger: .15, duration: 1, ease: "power3.out" }) }); this.scrollTriggers.push(t) } const c = this.shadowRoot.querySelector(".scroll-indicator"); c && f.from(c, { opacity: 0, y: 20, duration: 1.5, delay: .5, ease: "power3.out" }); const d = this.shadowRoot.querySelector(".next-project"); d && this._createNextProjectAnimation(d) } _createNextProjectAnimation(e) { const t = e.querySelector(".next-label"), i = e.querySelector(".label-line"), r = e.querySelector(".next-project-title"), o = e.querySelector(".title-arrow"), s = e.querySelector(".editorial-divider"), a = e.querySelector(".pill-button"); if (!r) return; f.set(r, { perspective: 1e3, transformStyle: "preserve-3d" }); const n = w.create({ trigger: e, scroller: this.container, start: "top 90%", toggleActions: "play none none none", animation: f.timeline().fromTo([t, i], { opacity: 0, y: 30, scaleX: 0 }, { opacity: 1, y: 0, scaleX: 1, duration: 1.2, ease: "power3.out", stagger: .1 }, "0").fromTo(r, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "0.3").fromTo(o, { opacity: 0, x: -20, scale: .8 }, { opacity: 1, x: 0, scale: 1, duration: .9, ease: "back.out(1.7)" }, "0.5").fromTo(s, { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 1, ease: "power3.out" }, "0.8").fromTo(a, { opacity: 0, y: 30, scale: .9 }, { opacity: 1, y: 0, scale: 1, duration: .9, ease: "power3.out" }, "1.1") }); this.scrollTriggers.push(n) } setupBackToTop() { const e = this.shadowRoot.querySelector(".back-btn"), t = e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2; e.addEventListener("click", () => { this.lenis.scrollTo(0, { duration: 1.4, easing: t }) }) } initResizeHandler() { let e; window.addEventListener("resize", () => { clearTimeout(e), e = setTimeout(() => { this.refresh() }, 250) }) } refresh() { this.lenis && this.lenis.resize(), w.refresh() } destroy() { var e; this._rafId && cancelAnimationFrame(this._rafId), this.updateLoops.forEach(e => { f.ticker.remove(e.fn) }), this.updateLoops = [], this.inertiaStates.clear(), this.scrollTriggers.forEach(e => { e && e.kill && e.kill() }), this.scrollTriggers = [], this.parallaxItems = [], null == (e = this.lenis) || e.destroy(), this.lenis = null, w.killAll() } } class ke extends i {
  constructor() { super(), this.project = null, this.animationManager = null } connectedCallback() { super.connectedCallback(), this.slug && (this.project = ue[this.slug]) } willUpdate(e) { e.has("slug") && this.slug && (this.project = ue[this.slug]) } firstUpdated() { this.initAnimations() } initAnimations() { this.project && !this.animationManager && (this.animationManager = new _e(this.shadowRoot, this.project), this.animationManager.init()) } disconnectedCallback() { this.animationManager && (this.animationManager.destroy(), this.animationManager = null), super.disconnectedCallback() } render() {
    return this.project ? r`
      <div class="scroll-container">
        <div class="page-content">
          <section class="project-detail">
            <!-- Basic Template cho personal projects -->
            ${de({ project: this.project })}
            ${he({ project: this.project })}
            ${pe({ project: this.project })}

            <!-- Footer -->
            ${ve(this.project.slug)}
            ${me()}
          </section>
        </div>
      </div>
    `: r`<not-found-page></not-found-page>`
  }
} t(ke, "properties", { slug: { type: String } }), t(ke, "styles", fe), customElements.define("personal-project-page", ke); const Se = o`
  :host {
    --sage: #dde0d4;
    --sage-mid: #bfc4b4;
    --sage-dark: #8a9082;
    --paper: #e4e8d8;
    --ink: #1a1c16;
    --riso-red: #e8412a;
    --riso-blue: #1a5fb4;
    --riso-yell: #f5c800;
    --riso-grn: #2eaa6e;
    --bg-almost-white: #fefff8;
    display: block;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .page-404 {
    position: relative;
    width: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-almost-white);
    color: var(--ink);
    font-family: 'DM Mono', monospace;
    overflow: hidden;
  }

  .page-404::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E");
    z-index: 1;
    opacity: 0.5;
    mix-blend-mode: multiply;
  }

  .page {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overprint-stage {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .op-layer {
    position: absolute;
    font-family: 'BebasNeue', sans-serif;
    font-size: clamp(160px, 28vw, 500px);
    line-height: 0.85;
    letter-spacing: -0.01em;
    white-space: nowrap;
    user-select: none;
    mix-blend-mode: multiply;
  }

  .op-layer-1 {
    color: var(--riso-yell);
    transform: translate(-8px, -6px);
    opacity: 0.75;
    animation: glitch-op-1 6s 1s ease-in-out infinite;
  }
  .op-layer-2 {
    color: var(--riso-red);
    transform: translate(6px, 4px);
    opacity: 0.7;
    animation: glitch-op-2 7s 2.5s ease-in-out infinite;
  }
  .op-layer-3 {
    color: var(--riso-blue);
    transform: translate(-3px, 8px);
    opacity: 0.5;
    animation: glitch-op-3 9s 0.8s ease-in-out infinite;
  }
  .op-layer-4 {
    color: var(--riso-grn);
    transform: translate(10px, -4px);
    opacity: 0.3;
    animation: glitch-op-4 11s 3.5s ease-in-out infinite;
  }

  .content {
    position: relative;
    z-index: 20;
    width: 100%;
    padding: 0 clamp(20px, 3vw, 48px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 100%;
  }

  .content-left {
    padding-bottom: clamp(20px, 4vw, 60px);
  }

  .reg-mark {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: clamp(16px, 2.5vw, 36px);
  }

  .reg-circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.5px solid var(--ink);
    position: relative;
    flex-shrink: 0;
  }
  .reg-circle::before,
  .reg-circle::after {
    content: '';
    position: absolute;
    background: var(--ink);
  }
  .reg-circle::before {
    width: 1.5px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .reg-circle::after {
    height: 1.5px;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .reg-label {
    font-family: 'DM Mono', monospace;
    font-size: clamp(8px, 0.65vw, 10px);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--riso-red);
  }

  .headline {
    font-family: 'BebasNeue', sans-serif;
    font-size: clamp(64px, 11vw, 180px);
    line-height: 0.88;
    letter-spacing: -0.01em;
    color: var(--ink);
    margin-bottom: clamp(14px, 2vw, 28px);
    will-change: transform;
    position: relative;
  }
  .headline::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'BebasNeue', sans-serif;
    font-size: inherit;
    line-height: inherit;
    color: var(--riso-red);
    transform: translate(4px, 3px);
    mix-blend-mode: multiply;

    user-select: none;
    z-index: -1;
  }
  .headline::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'BebasNeue', sans-serif;
    font-size: inherit;
    line-height: inherit;
    color: var(--riso-blue);
    transform: translate(-3px, 5px);
    mix-blend-mode: multiply;

    user-select: none;
    z-index: -1;
    opacity: 0.6;
  }

  .headline em {
    font-family: 'DM Serif Display', serif;
    font-style: italic;
    font-size: clamp(50px, 9vw, 150px);
    display: block;
    line-height: 0.9;
    color: var(--sage-dark);
  }

  .headline em::before {
    display: none;
  }

  .sub {
    font-size: clamp(9px, 0.8vw, 12px);
    letter-spacing: 0.07em;
    line-height: 1.8;
    color: var(--sage-dark);
    max-width: 320px;
    margin-bottom: clamp(22px, 3vw, 44px);
  }

  .cta-row {
    display: flex;
    align-items: center;
    gap: clamp(14px, 2vw, 28px);
  }

  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Mono', monospace;
    font-size: clamp(9px, 0.8vw, 12px);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--paper);
    background: var(--ink);
    padding: clamp(10px, 1.1vw, 15px) clamp(16px, 2.2vw, 28px);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s;
  }
  .cta-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--riso-red);
    transform: translateX(-100%);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    mix-blend-mode: multiply;
    opacity: 0.6;
  }
  .cta-primary:hover::before {
    transform: translateX(0);
  }
  .cta-primary:hover {
    transform: translateY(-2px);
  }

  .cta-secondary {
    font-family: 'DM Mono', monospace;
    font-size: clamp(8px, 0.72vw, 11px);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--sage-dark);
    text-decoration: none;
    border-bottom: 1px solid rgba(138, 144, 130, 0.4);
    padding-bottom: 2px;
    transition:
      color 0.2s,
      border-color 0.2s;
  }
  .cta-secondary:hover {
    color: var(--ink);
    border-color: var(--ink);
  }

  .content-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: clamp(10px, 1.5vw, 20px);
    padding-left: 40px;
    border-left: 1px solid rgba(26, 28, 22, 0.1);
    height: 100%;
    justify-content: center;
    padding-bottom: clamp(20px, 4vw, 60px);
  }

  .print-spec {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: clamp(8px, 1.2vw, 16px);
    width: 100%;
    max-width: 300px;
  }

  .spec-title {
    font-family: 'DM Mono', monospace;
    font-size: clamp(7px, 0.58vw, 9px);
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--sage-dark);
    opacity: 0.45;
    margin-bottom: 4px;
  }

  .swatch-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .swatch-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .swatch-block {
    width: clamp(28px, 3vw, 44px);
    height: clamp(14px, 1.5vw, 22px);
    flex-shrink: 0;
    mix-blend-mode: multiply;
  }

  .swatch-name {
    font-family: 'DM Mono', monospace;
    font-size: clamp(7px, 0.58vw, 9px);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink);
    opacity: 0.5;
    flex: 1;
  }

  .swatch-pct {
    font-family: 'BebasNeue', sans-serif;
    font-size: clamp(14px, 1.5vw, 22px);
    color: var(--sage-dark);
  }

  .spec-divider {
    width: 100%;
    height: 1px;
    background: rgba(26, 28, 22, 0.08);
  }

  .spec-note {
    font-family: 'DM Serif Display', serif;
    font-style: italic;
    font-size: clamp(12px, 1.3vw, 20px);
    color: var(--sage-dark);
    text-align: right;
    line-height: 1.3;
  }

  .ticker-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 30;
    padding: clamp(6px, 0.8vw, 10px) 0;
    border-top: 1px solid rgba(26, 28, 22, 0.08);
    background-color: var(--bg-almost-white);
  }

  .ticker-track {
    display: flex;
    width: max-content;
    animation: ticker 22s linear infinite;

    will-change: transform;
  }

  .ticker-item {
    font-family: 'DM Mono', monospace;
    font-size: clamp(7px, 0.6vw, 9px);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--sage-dark);
    white-space: nowrap;
    padding: 0 clamp(16px, 2.5vw, 38px);
    opacity: 0.5;
  }
  .ticker-item.red {
    color: var(--riso-red);
    opacity: 0.7;
  }
  .ticker-item.blue {
    color: var(--riso-blue);
    opacity: 0.6;
  }

  footer {
    display: flex;
    justify-content: space-between;
    background-color: var(--bg-almost-white);
    align-items: center;
    padding: clamp(10px, 1.3vw, 16px) clamp(20px, 3vw, 48px);
    border-top: 1px solid rgba(26, 28, 22, 0.08);
    position: relative;
    z-index: 40;
  }
  .footer-col {
    font-family: 'DM Mono', monospace;
    font-size: clamp(7px, 0.6vw, 10px);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--sage-dark);
    opacity: 0.4;
  }

  .footer-center {
    font-family: 'DM Serif Display', serif;
    font-style: italic;
    font-size: clamp(10px, 0.95vw, 15px);
    color: var(--sage-dark);
    opacity: 0.5;
  }

  @keyframes ticker {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes glitch-red {
    0% {
      transform: translate(0px, 0px);
      opacity: 0;
      clip-path: inset(0 0 100% 0);
    }
    30% {
      transform: translate(-6px, 2px);
      opacity: 0.9;
      clip-path: inset(20% 0 40% 0);
    }
    55% {
      transform: translate(5px, -2px);
      opacity: 1;
      clip-path: inset(55% 0 10% 0);
    }
    80% {
      transform: translate(4px, 3px);
      opacity: 1;
      clip-path: none;
    }
    100% {
      transform: translate(4px, 3px);
      opacity: 1;
      clip-path: none;
    }
  }

  @keyframes glitch-blue {
    0% {
      transform: translate(0px, 0px);
      opacity: 0;
      clip-path: inset(0 0 100% 0);
    }
    30% {
      transform: translate(6px, -2px);
      opacity: 0.7;
      clip-path: inset(50% 0 15% 0);
    }
    55% {
      transform: translate(-4px, 4px);
      opacity: 0.5;
      clip-path: inset(10% 0 60% 0);
    }
    80% {
      transform: translate(-3px, 5px);
      opacity: 0.6;
      clip-path: none;
    }
    100% {
      transform: translate(-3px, 5px);
      opacity: 0.6;
      clip-path: none;
    }
  }

  @keyframes glitch-op-1 {
    0%,
    88%,
    100% {
      opacity: 0.75;
      clip-path: none;
    }
    89% {
      opacity: 0.3;
      clip-path: inset(25% 0 45% 0);
    }
    91% {
      opacity: 0.9;
      clip-path: inset(65% 0 8% 0);
    }
    93% {
      opacity: 0.75;
      clip-path: none;
    }
  }
  @keyframes glitch-op-2 {
    0%,
    81%,
    100% {
      opacity: 0.7;
      clip-path: none;
    }
    82% {
      opacity: 0.15;
      clip-path: inset(12% 0 60% 0);
    }
    84% {
      opacity: 0.85;
      clip-path: inset(50% 0 18% 0);
    }
    86% {
      opacity: 0.7;
      clip-path: none;
    }
  }
  @keyframes glitch-op-3 {
    0%,
    90%,
    100% {
      opacity: 0.5;
      clip-path: none;
    }
    91% {
      opacity: 0.8;
      clip-path: inset(40% 0 30% 0);
    }
    93% {
      opacity: 0.1;
      clip-path: inset(18% 0 58% 0);
    }
    95% {
      opacity: 0.5;
      clip-path: none;
    }
  }
  @keyframes glitch-op-4 {
    0%,
    85%,
    100% {
      opacity: 0.3;
      clip-path: none;
    }
    86% {
      opacity: 0.65;
      clip-path: inset(68% 0 6% 0);
    }
    88% {
      opacity: 0.1;
      clip-path: inset(8% 0 68% 0);
    }
    90% {
      opacity: 0.3;
      clip-path: none;
    }
  }

  @media (max-width: 1024px) {
    .content {
      grid-template-columns: 1fr;
    }
    .content-right {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .headline {
      font-size: clamp(52px, 14vw, 90px);
    }
    .op-layer {
      font-size: clamp(120px, 35vw, 320px);
    }
  }

  @media (max-width: 520px) {
    .footer-center,
    .footer-col:last-child {
      display: none;
    }
  }

  @media (min-width: 2000px) {
    .op-layer {
      font-size: clamp(400px, 30vw, 700px);
    }
    .headline {
      font-size: clamp(160px, 10vw, 240px);
    }
  }

  @media (max-width: 1024px) {
    .overprint-stage {
      opacity: 0.25;
    }

    .op-layer:not(.op-layer-1) {
      display: none;
    }

    .headline {
      white-space: normal;
      max-width: 12ch;
    }
  }

  @media (max-width: 768px) {
    .headline {
      font-size: clamp(42px, 16vw, 72px);
      line-height: 0.95;
      max-width: 10ch;
      word-break: break-word;
    }

    .headline::before,
    .headline::after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    main {
      align-items: flex-start;
      padding-top: 18vh;
    }

    .content {
      padding: 0 20px;
    }

    .reg-mark {
      margin-bottom: 12px;
    }
  }

  .op-layer {
    opacity: 0;
  }

  .headline {
    opacity: 0;
  }

  .reg-mark,
  .sub,
  .cta-row {
    opacity: 0;
  }

  .content-right {
    opacity: 0;
  }

  .ticker-wrap,
  footer {
    opacity: 0;
  }
`; class Te { constructor(e) { this.root = e, this.isExiting = !1, this.ctx = null, this.q = null, this._ghostStarted = !1, this._blockTransitionProgress = !1, this.onNavClick = this.onNavClick.bind(this), this.run = this.run.bind(this) } async init() { this.root && (await Q(), this.ctx = f.context(e => { this.q = e.selector, this.setup() }, this.root), this.events = new K(S), this.events.on("page:ready", () => this.run()).on("page:covered", ({ url: e }) => this.onNavClick({ url: e })), W.pageReady = !0, requestAnimationFrame(() => { S.emit("page:ready") })) } setup() { const e = this.q; f.set(e(".page"), { opacity: 1 }), f.set(e(".op-layer"), { willChange: "transform, opacity", opacity: 0, scale: 1.08, transformOrigin: "50% 50%", force3D: !0 }), f.set(e(".headline"), { opacity: 0, y: 24, force3D: !0 }), f.set(e(".reg-mark, .sub, .cta-row"), { opacity: 0, y: 18, force3D: !0 }), f.set(e(".content-right"), { opacity: 0, y: 24, force3D: !0 }), f.set(e(".ticker-wrap, footer"), { opacity: 0 }) } run() { if (!this.q) return; const e = this.q, t = f.timeline({ defaults: { ease: "power3.out" } }); t.to(e(".op-layer-1"), { opacity: .75, scale: 1, duration: .8 }, .1), t.to(e(".op-layer-2"), { opacity: .7, scale: 1, duration: .8 }, .18), t.to(e(".op-layer-3"), { opacity: .5, scale: 1, duration: .8 }, .26), t.to(e(".op-layer-4"), { opacity: .3, scale: 1, duration: .8 }, .34), t.to(e(".headline"), { opacity: 1, y: 0, duration: .9, ease: "power4.out" }, .55), t.to([e(".reg-mark"), e(".sub"), e(".cta-row")], { opacity: 1, y: 0, stagger: .12, duration: .6 }, .9), t.to(e(".content-right"), { opacity: 1, y: 0, duration: .7 }, 1.1), t.to([e(".ticker-wrap"), e("footer")], { opacity: 1, duration: .6, ease: "power2.out" }, 1.4), t.call(() => { f.set(e(".op-layer"), { willChange: "auto" }), this.initLayerHover() }, null, 1.4) } async onNavClick({ url: e }) { const t = window.location.pathname; e && e !== t && (this.isExiting || (this.isExiting = !0, this._blockTransitionProgress = !0, await this.exit(), S.emit("navigate", { url: e }))) } initLayerHover() { const e = [{ el: this.root.querySelector(".op-layer-1"), label: "Y · 75%", color: "#f5c800" }, { el: this.root.querySelector(".op-layer-2"), label: "R · 70%", color: "#e8412a" }, { el: this.root.querySelector(".op-layer-3"), label: "B · 50%", color: "#1a5fb4" }, { el: this.root.querySelector(".op-layer-4"), label: "G · 30%", color: "#2eaa6e" }].filter(({ el: e }) => e); let t = null; const i = i => { let r = null; for (let t = e.length - 1; t >= 0; t--) { const { el: o, label: s, color: a } = e[t], n = o.getBoundingClientRect(); if (i.clientX >= n.left && i.clientX <= n.right && i.clientY >= n.top && i.clientY <= n.bottom) { r = { label: s, color: a }; break } } r && r.label !== t ? (t = r.label, S.emit("cursor:mode", { mode: "label", label: r.label, color: r.color })) : r || null === t || (t = null, S.emit("cursor:mode", { mode: "default" })) }; document.addEventListener("mousemove", i), this._layerCleanups = this._layerCleanups || [], this._layerCleanups.push(() => { document.removeEventListener("mousemove", i), t = null }) } exit() { const e = this.q; return new Promise(t => { const i = [e(".content"), e(".op-layer"), e(".ticker-wrap"), e("footer")].filter(Boolean); f.set(i, { willChange: "transform, opacity", force3D: !0 }), requestAnimationFrame(() => { const r = f.timeline({ defaults: { ease: "power3.inOut" }, onComplete: () => { f.set(i, { clearProps: "willChange" }), t() } }); r.to(e(".content"), { opacity: 0, y: -20, duration: .4 }), r.to(e(".op-layer"), { opacity: 0, scale: .96, stagger: .05, duration: .4 }, "<"), r.to([e(".ticker-wrap"), e("footer")], { opacity: 0, duration: .3 }, "<+=0.1") }) }) } destroy() { var e, t, i; null == (e = this.events) || e.destroy(), null == (t = this.ctx) || t.revert(), null == (i = this._layerCleanups) || i.forEach(e => e()), this.q = null } } class Ee extends i {
  constructor() { super(), this.gsapAnimations = null, this.hasGSAPStarted = !1, this._isMounted = !1 } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } firstUpdated() { var e; null == (e = window.app) || e.queueAnimation(() => this.runHomeAnimations(), "404-page") } async runHomeAnimations() { this._isMounted && (this.hasGSAPStarted || (this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.gsapAnimations = new Te(this.shadowRoot), window.currentAnimation = this.gsapAnimations, await this.gsapAnimations.init(), this.hasGSAPStarted = !0)) } disconnectedCallback() { super.disconnectedCallback(), this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.hasGSAPStarted = !1 } render() {
    return r`
      <nav-bar></nav-bar>
      <div class="page-404">
        <div class="page">
          <main>
            <div class="overprint-stage">
              <div class="op-layer op-layer-1">404<br />NOT FOUND</div>
              <div class="op-layer op-layer-2">404<br />NOT FOUND</div>
              <div class="op-layer op-layer-3">404<br />NOT FOUND</div>
              <div class="op-layer op-layer-4">404<br />NOT FOUND</div>
            </div>

            <div class="content">
              <div class="content-left">
                <div class="reg-mark">
                  <div class="reg-circle"></div>
                  <span class="reg-label">Mis-registration · Error 404</span>
                </div>

                <h1 class="headline" data-text="Page">
                  Page
                  <em>not found.</em>
                </h1>

                <p class="sub">
                  Something got mis-printed.<br />
                  This URL doesn't exist — but the work does.
                </p>

                <div class="cta-row">
                  <a href="/" class="cta-primary">Back to Home ?</a>
                  <a href="/works" class="cta-secondary">View Works</a>
                </div>
              </div>

              <div class="content-right">
                <div class="print-spec">
                  <div class="spec-title">Print Specification</div>
                  <div class="swatch-row">
                    <div class="swatch-item">
                      <div class="swatch-block" style="background:#f5c800;"></div>
                      <span class="swatch-name">Yellow</span>
                      <span class="swatch-pct">75%</span>
                    </div>
                    <div class="swatch-item">
                      <div class="swatch-block" style="background:#e8412a;"></div>
                      <span class="swatch-name">Red</span>
                      <span class="swatch-pct">70%</span>
                    </div>
                    <div class="swatch-item">
                      <div class="swatch-block" style="background:#1a5fb4;"></div>
                      <span class="swatch-name">Blue</span>
                      <span class="swatch-pct">50%</span>
                    </div>
                    <div class="swatch-item">
                      <div class="swatch-block" style="background:#2eaa6e;"></div>
                      <span class="swatch-name">Green</span>
                      <span class="swatch-pct">30%</span>
                    </div>
                  </div>
                  <div class="spec-divider"></div>
                  <div class="spec-note">
                    "Even errors can be<br />beautiful when printed right."
                  </div>
                </div>
              </div>
            </div>

            <div class="ticker-wrap">
              <div class="ticker-track">
                <div class="ticker-item red">? Yellow</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item blue">? Red</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item">? Blue</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item">404 · Page Not Found</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item">Mis-registration Error</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item">Nithin · Portfolio</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item red">? Yellow</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item blue">? Red</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item">? Blue</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item">404 · Page Not Found</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item">Mis-registration Error</div>
                <div class="ticker-item">—</div>
                <div class="ticker-item">Nithin · Portfolio</div>
                <div class="ticker-item">—</div>
              </div>
            </div>
          </main>

          <footer>
            <div class="footer-col">Design & code with Nithin</div>
            <div class="footer-center">…the good stuff is one click away.</div>
            <div class="footer-col">© 2026</div>
          </footer>
        </div>
      </div>
    `}
} t(Ee, "styles", [Se]), customElements.define("not-found-page", Ee); const Ce = o`
  :host {
    --bg-primary: #fefff8;
    --bg-inverse: rgb(10, 10, 10);
    --brand-neutral: rgb(254, 233, 206);
    --brand-accent: rgb(255, 100, 50);

    --contact-ink: color-mix(in srgb, var(--bg-inverse) 88%, var(--bg-primary));
    --contact-ink-muted: color-mix(in srgb, var(--bg-inverse) 45%, var(--bg-primary));
    --contact-rule: color-mix(in srgb, var(--contact-ink) 12%, transparent);
    --contact-accent: color-mix(in srgb, var(--brand-accent) 35%, var(--bg-primary));
    --contact-green: #6a8f5a;

    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .contact-scroll-container {
    width: 100%;
    background-color: var(--bg-primary);
    overflow: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .contact-scroll-container::-webkit-scrollbar {
    display: none;
  }

  .contact-page-content {
    width: 100vw;
    background-color: var(--bg-primary);
    font-family: 'Neue Montreal', sans-serif;
    color: var(--contact-ink-muted);
  }

  .contact-hero {
    position: relative;
    height: 100dvh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    overflow: hidden;
  }

  .contact-hero::after {
    content: '';
    position: absolute;
    top: 15vh;
    right: 32vw;
    width: 1px;
    height: 65vh;
    background: var(--contact-rule);
    pointer-events: none;
  }

  .contact-hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 34vw;
    height: 100%;
    background: color-mix(in srgb, var(--bg-primary) 96%, var(--brand-neutral) 80%);
    opacity: 0.35;
    pointer-events: none;
  }

  .words {
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;

    perspective: 1200px;
    perspective-origin: 50% 100%;
  }

  .word-row {
    display: flex;
    align-items: flex-end;
    gap: clamp(16px, 2vw, 32px);
  }

  .word {
    display: block;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 0.82;
    letter-spacing: -0.04em;
    color: var(--contact-ink-muted);
    font-size: clamp(4rem, 13vw, 16rem);
    white-space: nowrap;
    flex-shrink: 0;

    perspective: 1000px;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .word--1 {
    margin-left: 0;
  }
  .word--2 {
    margin-left: clamp(32px, 6vw, 120px);
  }
  .word--3 {
    margin-left: clamp(80px, 14vw, 260px);
  }
  .word--4 {
    margin-left: 0;
  }

  .side-desc {
    display: flex;
    flex-direction: column;
    gap: clamp(6px, 0.8vw, 10px);
    padding-bottom: 0.15em;
  }

  .side-eyebrow {
    font-size: clamp(7px, 0.52vw, 9px);
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--contact-accent);
  }

  .side-text {
    font-size: clamp(10px, 0.9vw, 13px);
    line-height: 1.75;
    letter-spacing: 0.02em;
    color: var(--contact-ink-muted);
  }

  .side-info {
    display: flex;
    flex-direction: column;
    gap: clamp(6px, 0.8vw, 10px);
    padding-bottom: 0.1em;
  }

  .info-row {
    display: flex;
    align-items: baseline;
    gap: clamp(8px, 1.2vw, 18px);
  }

  .info-label {
    font-size: clamp(7px, 0.5vw, 8px);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--contact-ink-muted);
    opacity: 0.6;
    min-width: clamp(36px, 4vw, 52px);
    flex-shrink: 0;
  }

  .info-val {
    font-size: clamp(9px, 0.72vw, 11px);
    letter-spacing: 0.04em;
    color: var(--contact-ink);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    padding-bottom: 1px;
    transition: border-color 0.2s;
  }
  .info-val:hover {
    border-color: var(--contact-ink);
  }

  .info-socials {
    display: flex;
    gap: clamp(12px, 1.5vw, 20px);
    margin-top: clamp(4px, 0.5vw, 8px);
  }

  .social-link {
    font-size: clamp(8px, 0.62vw, 10px);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--contact-ink-muted);
    text-decoration: none;
    border-bottom: 1px solid var(--contact-rule);
    padding-bottom: 2px;
    transition:
      color 0.2s,
      border-color 0.2s;
  }
  .social-link:hover {
    color: var(--contact-ink);
    border-color: var(--contact-ink);
  }

  .avail-stamp {
    position: absolute;
    top: 50%;
    right: 4vw;
    transform: translateY(-50%) rotate(90deg);
    transform-origin: right center;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: clamp(7px, 0.55vw, 9px);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--contact-ink-muted);
  }

  .avail-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--contact-green);
    box-shadow: 0 0 6px rgba(106, 143, 90, 0.5);
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    .word {
      white-space: normal;
      max-width: 85vw;
      font-size: clamp(4rem, 15vw, 12rem);
    }

    .word--2 {
      margin-left: 4vw;
    }
    .word--3 {
      margin-left: 8vw;
    }

    .side-desc,
    .side-info {
      position: relative;
      margin-left: 4vw;
      margin-top: 1rem;
      max-width: 300px;
    }

    .word-row {
      gap: 1rem;
      flex-wrap: wrap;
    }

    .contact-hero::before {
      opacity: 0.2;
      width: 30vw;
    }

    .contact-hero::after {
      right: 28vw;
      height: 55vh;
    }

    .avail-stamp {
      right: 2vw;
      font-size: clamp(8px, 0.8vw, 10px);
    }
  }

  @media (max-width: 768px) {
    .contact-hero {
      height: auto;
      min-height: 100dvh;
      padding-top: 120px;
      padding-bottom: 80px;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .word {
      font-size: clamp(3.5rem, 20vw, 6rem);
      line-height: 0.95;
      white-space: normal;
      max-width: 100%;
    }

    .word--2,
    .word--3 {
      margin-left: 0;
    }

    .contact-hero::before,
    .contact-hero::after {
      display: none;
    }

    .word-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .side-desc {
      margin-left: 0;
      margin-top: 0.5rem;
      max-width: 100%;
    }

    .side-text {
      font-size: 1rem;
    }

    .side-info {
      position: relative;
      margin-left: 0;
      margin-top: 1.5rem;
      width: 100%;
      padding: 1.5rem 0;
      border-top: 1px solid var(--contact-rule);
      border-bottom: 1px solid var(--contact-rule);
    }

    .info-row {
      gap: 12px;
      flex-wrap: wrap;
    }

    .info-label {
      font-size: 0.7rem;
      min-width: 60px;
    }

    .info-val {
      font-size: 1rem;
    }

    .info-socials {
      margin-top: 1rem;
      gap: 1.5rem;
    }

    .social-link {
      font-size: 0.8rem;
    }

    .avail-stamp {
      position: relative;
      top: auto;
      right: auto;
      transform: none;
      margin-top: 3rem;
      justify-content: flex-start;
    }
  }

  @media (max-width: 480px) {
    .side-desc {
      display: none;
    }

    .word {
      font-size: clamp(2.5rem, 15vw, 4rem);
    }

    .info-row {
      flex-direction: column;
      gap: 4px;
    }

    .info-label {
      min-width: auto;
    }
  }
`; class Ae { constructor(e) { this.root = e, this.isExiting = !1, this._ghostStarted = !1, this._blockTransitionProgress = !1, this._hasRun = !1, this._sideDescSplit = null, this._infoRows = null, this._hoverCleanups = [], this.onNavClick = this.onNavClick.bind(this), this.run = this.run.bind(this) } async init() { this.root && (await Q(), this.setup(), this.events = new K(S), this.events.on("page:ready", () => this._triggerRun()).on("page:covered", ({ url: e }) => this.onNavClick({ url: e })), W.pageReady = !0, requestAnimationFrame(() => { S.emit("page:ready") }), this.setupHoverEvent()) } _triggerRun() { this._hasRun || (this._hasRun = !0, this.run()) } setup() { f.set(this.root.querySelectorAll(".word"), { willChange: "transform, opacity", opacity: 0, yPercent: 110, rotateX: -80, scaleY: 1.15, transformOrigin: "left bottom", force3D: !0 }); const e = this.root.querySelector(".side-desc"), t = this.root.querySelector(".side-info"); e && (this._sideDescSplit = new b(e, { type: "lines", mask: "lines" }), f.set(this._sideDescSplit.lines, { yPercent: 100, force3D: !0 })), t && (this._infoRows = Array.from(t.querySelectorAll(".info-row, .info-socials")), f.set(this._infoRows, { opacity: 0, y: 16, force3D: !0 })), f.set(this.root.querySelector(".avail-stamp"), { opacity: 0, y: 10 }) } onTransitionProgress() { this._blockTransitionProgress || this._ghostStarted || this.root && (this._ghostStarted = !0, this.run()) } run() { var e; const t = [this.root.querySelector(".word--1"), this.root.querySelector(".word--2"), this.root.querySelector(".word--3"), this.root.querySelector(".word--4")], i = [0, .14, .28, .42], r = f.timeline({ defaults: { force3D: !0 } }); t.forEach((e, t) => { e && r.to(e, { opacity: 1, yPercent: 0, transformOrigin: "left center", rotateX: 0, scaleY: 1, duration: 2.1, stagger: .035, ease: "expo.out", onComplete: () => f.set(e, { willChange: "auto", clearProps: "scaleY,rotateX" }) }, i[t]) }), this._sideDescSplit && r.to(this._sideDescSplit.lines, { yPercent: 0, duration: .75, ease: "power3.out", stagger: .05 }, i[1] + .2), (null == (e = this._infoRows) ? void 0 : e.length) && r.to(this._infoRows, { opacity: 1, y: 0, duration: .6, ease: "power3.out", stagger: .07 }, i[3] + .2), r.to(this.root.querySelector(".avail-stamp"), { opacity: 1, y: 0, duration: .5, ease: "power2.out" }, i[3] + .45) } async onNavClick({ url: e }) { const t = window.location.pathname; if (!e || e === t) return; if (this.isExiting) return; this.isExiting = !0, this._blockTransitionProgress = !0; window.matchMedia("(min-width: 1200px)").matches && await this.exit(), S.emit("navigate", { url: e }) } exit() { return new Promise(e => { const t = [this.root.querySelector(".word--1"), this.root.querySelector(".word--2"), this.root.querySelector(".word--3"), this.root.querySelector(".word--4")].filter(Boolean); f.set(t, { willChange: "transform, opacity", force3D: !0 }), requestAnimationFrame(() => { const i = f.timeline({ defaults: { ease: "power3.in", force3D: !0 }, onComplete: () => { f.set(t, { clearProps: "willChange" }), e() } }); i.to(t, { yPercent: -110, scale: .65, opacity: 0, transformOrigin: "left top", duration: .5, stagger: .07 }, 0), i.to([this.root.querySelector(".side-desc"), this.root.querySelector(".side-info"), this.root.querySelector(".avail-stamp")].filter(Boolean), { opacity: 0, x: 12, duration: .28, stagger: .04 }, .08) }) }) } setupHoverEvent() { const e = this.root.querySelectorAll(".info-socials"); if (!e) return; const t = () => S.emit("cursor:mode", { mode: "hover-nav" }), i = () => S.emit("cursor:mode", { mode: "default" }); e.forEach(e => { e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i) }), this._hoverCleanups.push(() => { e.forEach(e => { e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i) }) }) } destroy() { var e, t; null == (e = this._sideDescSplit) || e.revert(), this._sideDescSplit = null, this._infoRows = null, null == (t = this.events) || t.destroy(), this._hoverCleanups && (this._hoverCleanups.forEach(e => e()), this._hoverCleanups = []), this.root = null } } class Le extends i {
  constructor() { super(), this.gsapAnimations = null, this.hasGSAPStarted = !1, this._isMounted = !1 } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } firstUpdated() { var e; null == (e = window.app) || e.queueAnimation(() => this.runHomeAnimations(), "contact-page") } async runHomeAnimations() { this._isMounted && (this.hasGSAPStarted || (this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.gsapAnimations = new Ae(this.shadowRoot), window.currentAnimation = this.gsapAnimations, await this.gsapAnimations.init(), this.hasGSAPStarted = !0)) } disconnectedCallback() { super.disconnectedCallback(), this.gsapAnimations && (("function" == typeof this.gsapAnimations.stop ? this.gsapAnimations.stop() : "function" == typeof this.gsapAnimations.destroy && this.gsapAnimations.destroy()), this.gsapAnimations = null), this.hasGSAPStarted = !1 } render() {
    return r`
      <nav-bar currentPage="/contact"></nav-bar>

      <div class="scroll-progress">
        <div class="scroll-progress__bar"></div>
      </div>

      <div class="contact-scroll-container">
        <div class="contact-page-content">
          <main class="contact-hero">
            <section class="words">
              <div class="word word--1">REACH</div>

              <div class="word-row">
                <div class="word word--2">TALK</div>
                <aside class="side-desc">
                  <span class="side-eyebrow">Get in touch</span>
                  <p class="side-text">
                    Open to new projects,<br />collaborations &amp;<br />honest conversations.
                  </p>
                </aside>
              </div>

              <div class="word word--3">BUILD</div>

              <div class="word-row">
                <div class="word word--4">CONNECT</div>
                <aside class="side-info">
                  <div class="info-row">
                    <span class="info-label">Email</span>
                    <a class="info-val" href="mailto:nithinr123n8@gmail.com"
                      >nithinr123n8@gmail.com</a
                    >
                  </div>
                  <div class="info-row">
                    <span class="info-label">Phone</span>
                    <a class="info-val" href="tel:+919164733579">+91 9164733579</a>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Based</span>
                    <span class="info-val">Bangalore</span>
                  </div>
                  <div class="info-socials">
                    <a
                      class="social-link"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/Nithin-R08"
                      >GitHub ?</a
                    >
                    <a
                      class="social-link"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/nithin-rnitr/"
                      >LinkedIn ?</a
                    >
                  </div>
                </aside>
              </div>
            </section>

            <div class="avail-stamp">
              <span class="avail-dot"></span>
              Available for work · 2026
            </div>
          </main>
        </div>
      </div>

      <footer-nav></footer-nav>
    `}
} t(Le, "styles", [Ce]), customElements.define("contact-page", Le); const Pe = o`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    --font-neue: 'Neue Montreal';
    --font-screamer: 'FKScreamer', 'Avantt', sans-serif;
    --screamer-black: 900;
    --screamer-bold: 700;
    --screamer-medium: 500;
    --screamer-regular: 400;
    --bg-almost-dark: rgb(10, 10, 10);
    --bg-almost-white: #fefff8;
    --bg-divider: rgba(255, 255, 255, 0.1);
    --padding-base: 4rem;
    --color-cream: rgb(254, 233, 206);
    --color-warm-sunset: rgb(255, 100, 50);
    --color-dark: #1a1a1a;
    --color-highlight: #ff5d1f;

    --contact-info-bottom: 2rem;
    --contact-info-right: 4rem;

    --intro-bg: #ffffff;

    --bg-expert: #131312;

    --process-bg: #ffffff;
    --process-bg-t: #f9f9f9;
    --process-color: #000;
    --process-color-t: #000000;
    --process-padding-left: 8rem;

    --contact--bg: #ffffff;
    --contact-color: #000000;

    --color-default: #000;

    --img-width: 800px;
    --img-height: 250px;

    --size: 280px;
  }

  .support-text {
    font-size: clamp(14px, 1.1vw, 20px);
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 1.2;
    margin: 0;
  }

  .sub-accent {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .sub-accent span:nth-child(2) {
    max-width: 150px;
    font-weight: 600;
  }

  .expert-left {
    height: 100%;
  }

  .expert-heading {
    height: 100%;
    font-family: var(--font-neue);
    font-weight: 500;
    letter-spacing: 0.5px;
    color: var(--color-dark);
    line-height: 1.1;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .expert-heading h1 {
    font-size: 1rem;
    margin: 0;
    line-height: 1.5;
    font-weight: 500;
  }

  .subline-wrapper {
    display: flex;
    align-items: center;
  }

  .subline {
    display: inline-block;
    width: 60px;
    height: 1px;
    background: #000;
    flex-shrink: 0;
  }

  .line2 {
    margin: 0;
  }

  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .letter__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: -0.8rem;
  }

  .title-logo {
    display: flex;
    /* gap: 0.5rem; */
  }

  .letter {
    font-size: 20rem;
    font-family: var(--font-neue);
    line-height: 1;
    letter-spacing: -0.5rem;
    font-weight: 700;
  }

  .contact-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding-left: 4rem; */
    /* align-items: center; */
  }

  .contact-img {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .contact-role {
    display: flex;
    align-items: stretch;
    gap: 4rem;
    /* padding-left: 4rem; */
  }

  .contact-role span {
    font-size: 1.2vw;
    font-weight: 500;
  }

  .contact-role-left,
  .contact-role-right {
    display: flex;
    flex-direction: column;
  }

  .sologan {
    font-size: clamp(2.2rem, 4vw, 4.5rem);
    font-weight: 500;
    max-width: 800px;
    line-height: 1.1;
  }

  .title-highlight {
    font-family: 'Kalice';
    display: inline-block;
    transform: skewX(-6deg);
  }

  .work-big-image,
  .work-small-image {
    width: 100%;
    height: 500px;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
  }

  .work-big-image img,
  .work-small-image img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
`, Me = o`
  :host {
    --bg-almost-dark: rgb(10, 10, 10);
    --bg-almost-white: #fefff8;
    --color-cream: rgb(254, 233, 206);
    --color-warm-sunset: rgb(255, 100, 50);
    --background: #e3e4d8;

    --intro-width: 100vw;
    --process-width: 110vw;
    --expert-width: 105vw;
    --contact-width: 100vw;
    --outro-width: 100vw;
    --gradient-section: 70vw;

    --img-width: clamp(480px, 45vw, 800px);
    --img-height: clamp(160px, 18vw, 250px);

    font-family: 'Neue Montreal', sans-serif;
    color: #000;
  }

  @media (max-width: 1919px) and (min-width: 1600px) {
    :host {
      --process-width: 115vw;
      --expert-width: 110vw;
      --gradient-section: 70vw;
    }
  }

  @media (max-width: 1699px) and (min-width: 1501px) {
    :host {
      --expert-width: 105vw;
    }
  }

  @media (max-width: 1500px) and (min-width: 1401px) {
    :host {
      --process-width: 120vw;
      --expert-width: 115vw;
    }
  }

  @media (max-width: 1400px) and (min-width: 1201px) {
    :host {
      --expert-width: 108vw;
      --process-width: 120vw;
    }
  }

  .home-container {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100dvh;
    overflow: hidden;
  }

  .home-transform-wrapper {
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100dvh;
  }

  .home-page-content {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100dvh;
    width: calc(
      var(--intro-width) + var(--process-width) + var(--expert-width) + var(--contact-width) +
        var(--outro-width) + var(--gradient-section)
    );
    transform: translateX(0);
    background-color: var(--bg-almost-white);
  }

  .intro {
    width: var(--intro-width);
    height: 100dvh;
    padding: 5rem 5rem 4rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .process-slide {
    position: relative;
    height: 100dvh;
    width: var(--process-width);
    padding: 6rem 6rem 4rem 4rem;
    overflow: hidden;
    display: flex;
    gap: 10rem;
  }

  .expert {
    width: var(--expert-width);
    height: 100dvh;
    padding: 6rem 10rem 4rem 10rem;
    display: flex;
    overflow: hidden;
    min-width: 0;

    gap: 2rem;
  }

  .contact {
    position: relative;
    width: var(--contact-width);
    height: 100dvh;
    padding: 6rem 5rem 4rem 5rem;
    display: grid;
    grid-template-rows: 1fr auto;
    overflow: hidden;
  }

  .outro {
    width: var(--outro-width);
    height: 100dvh;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 5rem 8rem;
  }

  .gradient-section {
    width: var(--gradient-section);
    height: 100dvh;

    position: relative;
  }

  .scroll-progress {
    position: fixed;
    left: 50%;
    bottom: 32px;
    transform: translateX(-50%);
    width: 160px;
    height: 1px;
    pointer-events: none;
    z-index: 1000;
    background: rgba(26, 28, 22, 0.4);
    mix-blend-mode: difference;
  }

  .scroll-progress__bar {
    width: 100%;
    height: 100%;
    background: #ffffff;
    transform-origin: left center;
    transform: scaleX(0);
    will-change: transform;
    mix-blend-mode: difference;
  }

  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 0;
  }

  .contact-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .contact-img {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }

  .contact-role {
    display: flex;
    align-items: stretch;
    gap: 4rem;
  }

  .contact-role span {
    font-size: clamp(0.9rem, 1.2vw, 1.4rem);
    font-weight: 500;
  }

  .letter__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: -0.8rem;
    overflow: hidden;
    min-width: 0;
  }

  .title-logo {
    display: flex;
    align-items: baseline;
    gap: 0;
    min-width: 0;
    width: 100%;
  }

  .letter {
    font-size: clamp(120px, 20vw, 320px);
    font-family: var(--font-neue);
    line-height: 0.85;
    letter-spacing: -0.04em;
    font-weight: 700;
    flex-shrink: 1;
    min-width: 0;
  }

  .expert-left {
    flex: 0 0 40%;
    height: 100%;
  }

  .expert-heading {
    height: 100%;
    font-family: var(--font-neue);
    font-weight: 500;
    letter-spacing: 0.5px;
    color: var(--color-dark);
    line-height: 1.1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .expert-heading h1 {
    font-size: 1rem;
    margin: 0;
    line-height: 1.5;
    font-weight: 500;
  }

  .expert-title {
    max-width: 100%;
  }

  .expert-right {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .col {
    flex: 1;
    min-width: 0;
    border: none;
    transition: none;
    position: relative;
    overflow: visible;
  }

  .expert-shapes {
    display: flex;
    gap: 15px;
    flex-shrink: 0;
  }

  .square-container {
    width: var(--size);
    height: var(--size);
    background: #c6beac;
    border-radius: calc(var(--size) * 0.114);
    display: flex;
    padding: calc(var(--size) * 0.143);
  }

  .d3 {
    width: calc(var(--size) * 0.714);
    height: calc(var(--size) * 0.714);
    position: relative;
  }

  .shape03 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 20%;
  }

  .shape02 {
    position: absolute;
    width: 75%;
    height: 75%;
    left: 12.5%;
    top: 12.5%;
    background: #333;
    border-radius: 50%;
  }

  .shape01 {
    position: absolute;
    width: 33%;
    height: 33%;
    left: 33%;
    top: 33%;
    background: #ff5d1f;
    border-radius: 50%;
  }

  .shape-right {
    width: var(--size);
    height: var(--size);
  }

  .shape-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 32px;
  }

  .shape-wrapper__test {
    width: 100%;
    height: 100%;
  }

  .shape-left {
    width: var(--size);
    height: var(--size);
    flex-shrink: 0;
  }

  .shape-wrapper {
    width: 100%;
    height: 100%;
  }

  .cta-about {
    margin-left: 0.5rem;
  }

  .cta {
    border: 1px solid #000;
    width: fit-content;
    padding: 1rem 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    color: var(--color-dark);
    font-weight: 500;
  }

  .container-030 {
    width: 100%;
    max-width: 200px;
    margin: 0;
  }

  .container-030 svg {
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
  }

  .bullet1 {
    font-size: 1.5rem;
    padding-top: 1rem;
  }

  .bullet {
    font-size: 1.5rem;
  }

  .bullet3 {
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: -0.05rem;
    line-height: 0.8;
  }

  .process-col-right {
    width: 100%;
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .work-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }

  .work-col-left {
    flex: 2;
    min-width: 0;
  }
  .work-col-right {
    flex: 1;
    min-width: 0;
  }

  .work-title {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1;
    cursor: pointer;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .subtitle p {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .subtitle-role {
    display: flex;
    gap: 0.5rem;
  }

  .subtitle-role p {
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    opacity: 1;
    color: #000;
  }

  .work-col-footer {
    display: flex;
    width: 100%;
    justify-content: flex-start;
  }

  .work-desc {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    opacity: 0.9;
    max-width: 360px;
    margin-top: 1rem;
  }

  .anchor {
    margin-right: 2rem;
  }

  .anchor-arrow {
    position: relative;
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 1919px) and (min-width: 1600px) {
    .intro {
      padding: 4rem 4rem 3rem 4rem;
    }

    .process-slide {
      padding: 5rem 5rem 4rem 3rem;
      gap: 8rem;
    }

    .expert {
      padding: 5rem 8rem 4rem 8rem;
      gap: 3rem;
    }

    .contact {
      padding: 5rem 4rem 3rem 4rem;
    }

    .outro {
      padding: 4rem 6rem;
    }
  }

  @media (max-width: 1599px) and (min-width: 1400px) {
    :host {
      --process-width: 120vw;
      --expert-width: 100vw;
      --gradient-section: 65vw;

      --size: 220px;
    }

    .intro {
      padding: 4rem 3rem 3rem 3rem;
    }

    .hero-bottom {
      gap: 24px;
      width: 60%;
    }

    .process-slide {
      padding: 5rem 4rem 4rem 2rem;

      gap: 6rem;
    }

    .work-big-image,
    .work-small-image {
      height: clamp(280px, 50svh, 460px);
    }

    .expert {
      padding: 4rem 6rem 4rem 6rem;
      gap: 3rem;
    }

    .expert-left {
      flex: 0 0 38%;
    }

    .expert-title {
      max-width: 260px;
    }

    .contact {
      padding: 5rem 3rem 3rem 3rem;
    }

    .gradient-section {
      padding-left: 2rem;
    }

    .outro {
      padding: 4rem;
    }
  }

  @media (max-width: 1399px) and (min-width: 1200px) {
    :host {
      --process-width: 125vw;
      --expert-width: 105vw;
      --gradient-section: 65vw;
    }

    .intro {
      padding: 3rem 2rem 2rem 2rem;
    }

    .hero-bottom {
      gap: 20px;
      width: 70%;
      margin-top: 24px;
    }

    .arrow {
      font-size: 36px;
      flex-shrink: 0;
    }

    .process-slide {
      padding: 4rem 3rem 3rem 2rem;
      gap: 4rem;
    }

    .work-big-image,
    .work-small-image {
      height: clamp(260px, 48svh, 420px);
    }

    .work-title {
      font-size: 2.2rem;
    }

    .expert {
      padding: 4rem 4rem 3rem 8rem;
    }

    .expert-left {
      flex: 0 0 36%;
    }

    .expert-title {
      max-width: 240px;
    }

    .contact {
      padding: 4rem 2rem 2rem 2rem;
    }

    .gradient-section {
      padding-left: 2rem;
    }

    .name {
      font-size: 7rem;
    }

    .shape-left {
      width: calc(280px * 0.714);
      height: calc(280px * 0.714);
    }

    .shape-right {
      width: calc(280px * 0.714);
      height: calc(280px * 0.714);
    }

    .shape-wrapper {
      transform: scale(0.714);
      transform-origin: top left;
    }

    .container-030 {
      max-width: 150px;
    }

    .bullet3 {
      font-size: 6rem;
    }

    .anchor {
      letter-spacing: 0;
      margin-right: 2rem;
    }

    .anchor-arrow {
      position: relative;
      top: -1px;
      font-size: 1rem;
      font-weight: 400;
    }

    .letter {
      font-size: 15rem;
    }

    .sologan {
      font-size: 3.5rem;
      max-width: 800px;
    }

    .outro {
      padding: 3rem;
    }

    .pill,
    .pill-back {
      padding: 1.25rem 1.75rem;
    }
  }

  .name,
  .big-title {
    font-size: clamp(4.5rem, 7vw, 9rem);
    font-weight: 500;
    line-height: 0.9;

    overflow-wrap: break-word;
    word-break: keep-all;
  }

  .name {
    margin-left: -0.5rem;
    text-align: left;

    max-width: 100%;
  }

  .big-title {
    margin: 0;
    text-align: right;

    max-width: 100%;
  }

  .outro h1 {
    color: var(--color-cream);
    font-family: var(--font-screamer);
    font-size: clamp(5rem, 15vw, 15rem);
    line-height: 0.9;
    white-space: nowrap;
  }

  .content__drag-area {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .img-drag,
  .img-wrap {
    flex: none;
  }

  .img-wrap {
    width: clamp(320px, 45vw, 800px);
    height: clamp(140px, 18vw, 250px);
    position: relative;
    pointer-events: none;
    flex-shrink: 0;
  }

  .img-drag {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: auto;
    cursor: none !important;
  }

  .img-drag__inner {
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .img-trail {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .drag-hint {
    pointer-events: none;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.15em;
  }

  .hero {
    width: 100%;
    height: 100%;
    display: flex;
    min-height: 0;
  }

  .hero-left {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 30px;
    min-width: 0;
    min-height: 0;
  }

  .hero-bottom {
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 40px;
    margin-top: 40px;
    min-width: 0;
  }

  .hero-right {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 0;
  }

  .process-col-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
    min-width: 0;
  }

  .process-col-left p {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .work-big-image,
  .work-small-image {
    width: 100%;
    height: clamp(320px, 55svh, 500px);
    border-radius: 18px;
    overflow: hidden;
    position: relative;
  }

  .work-big-image img,
  .work-small-image img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .work-big-image,
  .work-small-image {
    cursor: pointer;
  }

  .magnetic-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background: transparent;
    overflow: hidden;
    isolation: isolate;
    color: #000;
    transition: color 0.8s ease;
  }

  .magnetic-btn.is-filled {
    color: #fff;
  }
  .magnetic-btn span {
    position: relative;
    z-index: 2;
  }

  .liquid-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .col {
    border: none;
    transition: none;
    position: relative;
    overflow: visible;
  }

  .menu__text {
    height: 120%;
    width: 100%;
    pointer-events: none;
    position: absolute;
  }

  .menu__text text {
    transform-origin: 50% 50%;
    transform-box: view-box;
  }
  .menu__text text:nth-child(2) {
    opacity: 0;
  }

  .monument {
    font-size: 9vw;
    font-weight: 700;
    line-height: 0.8;
    letter-spacing: -0.05rem;
    text-transform: uppercase;
  }

  .monument.highlight {
    color: var(--color-highlight);
  }

  .img-blocks {
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .blocks {
    opacity: 0;
    mix-blend-mode: hard-light;
    background-color: rgb(254, 233, 206);
    transition: opacity 0.3s ease-in;
  }

  .blocks.active {
    opacity: 0.65;
  }

      .gradient-filter {
    width: 100%;
    height: 100%;
    filter: hue-rotate(25deg) saturate(1.4) brightness(0.9);
  }

  .gradient {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .gradient img {
    position: absolute;
    top: 0;
    left: -1px;
    width: calc(100% + 2px);
    height: 100%;
    backface-visibility: hidden;
    will-change: transform;
    transform: translateZ(0);
  }

  .outro-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .divider {
    margin: clamp(1.5rem, 3vh, 3rem) 0 clamp(2.5rem, 4vh, 5rem);
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.15);
  }

  .outro-contact-info {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    align-items: center;
    min-width: 0;
  }

  .pill {
    padding: 1.75rem 2.5rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    text-decoration: none;
    font-size: clamp(0.9rem, 1vw, 1.25rem);
    background-color: #1c1d20;
    white-space: nowrap;

    position: relative;
    overflow: hidden;
  }

  .pill-back {
    padding: 1.75rem 2.5rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    text-decoration: none;
    font-size: clamp(0.9rem, 1vw, 1.25rem);
    background-color: #1c1d20;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .pill__filler {
    background: #fff; /* white fill trÃªn dark bg */
    position: absolute;
    width: 150%;
    height: 200%;
    border-radius: 50%;
    top: -50%;
    left: -25%;
    transform: translate3d(0, 75%, 0);
    pointer-events: none;
  }

  .pill__text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .pill__text-inner {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .pill--hover {
    color: #000;
    border-color: rgba(255, 255, 255, 0.8);
  }

  .pill-back svg {
    transition: stroke 0.1s ease;
  }

  .pill-back svg g {
    stroke: #fff;
    transition: stroke 0.3s ease;
  }

  .pill--hover.pill-back svg g {
    stroke: #000; /* Ä‘á»•i sang Ä‘en khi fill tráº¯ng */
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;

    align-items: center;
    width: 100%;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .c-highlight {
    color: var(--color-warm-sunset);
  }
  .arrow {
    font-size: 48px;
    font-weight: bold;
  }
`, Re = (e, t, i) => (1 - i) * e + i * t; let qe = 1; class Ie { constructor(e, t) { this.root = t, this.DOM = { el: e }, this.DOM.draggable = e.querySelector(".img-drag"), this.DOM.innerEl = e.querySelector(".img-drag__inner"), this._active = !1, this._rafId = null, this._createTrails(), this._initState(), this._initDraggable(), this._active = !0, this._rafId = requestAnimationFrame(() => this.render()) } _initState() { this.draggingPos = { previous: { x: 0, y: 0 }, current: { x: 0, y: 0 } }, this.innerScale = { previous: 1, current: 1, amt: .2 }, this.outerScale = { previous: 1, current: 1, amt: .2 }, this.threshold = 30, this.trailPosition = 0 } _createTrails() { var e; this.trailsTotal = 10; const t = null == (e = this.DOM.innerEl.style.backgroundImage.match(/url\(["']?([^"']*)["']?\)/)) ? void 0 : e[1]; if (t) { for (let e = 0; e < this.trailsTotal; e++) { const e = document.createElement("img"); e.className = "img-trail", e.src = t, e.style.cssText = "\n        position: absolute;\n        top: 0; left: 0;\n        width: 100%; height: 100%;\n        object-fit: cover;\n        opacity: 0;\n        pointer-events: none;\n        will-change: auto;\n      ", this.DOM.el.appendChild(e) } this.DOM.trails = [...this.DOM.el.querySelectorAll(".img-trail")] } else this.DOM.trails = [] } _initDraggable() { window.matchMedia("(hover: none) and (pointer: coarse)").matches ? this.draggable = null : this.draggable = _.create(this.DOM.draggable, { type: "x,y", inertia: !0, onPress: () => { var e; this.DOM.el.style.zIndex = qe++, this.innerScale.current = 1.5, this.outerScale.current = .8, this.DOM.draggable.style.willChange = "transform", this.DOM.innerEl.style.willChange = "transform", null == (e = this.root.host) || e.setAttribute("dragging", "") }, onRelease: () => { var e; this.innerScale.current = 1, this.outerScale.current = 1, this.DOM.draggable.style.willChange = "auto", this.DOM.innerEl.style.willChange = "auto", null == (e = this.root.host) || e.removeAttribute("dragging") }, onDrag: () => { var e, t; this.draggingPos.current = { x: (null == (e = this.draggable[0]) ? void 0 : e.x) ?? this.draggable.x, y: (null == (t = this.draggable[0]) ? void 0 : t.y) ?? this.draggable.y }; const i = this.draggable.pointerEvent; i && S.emit("cursor:position", { x: i.clientX, y: i.clientY }) } })[0] } render() { this._active && (this.innerScale.previous = Re(this.innerScale.previous, this.innerScale.current, this.innerScale.amt), this.outerScale.previous = Re(this.outerScale.previous, this.outerScale.current, this.outerScale.amt), this._layout(), this._rafId = requestAnimationFrame(() => this.render())) } _layout() { if (!this.draggable) return; const e = this.draggable.x ?? 0, t = this.draggable.y ?? 0, i = (r = this.draggingPos.previous.x, o = this.draggingPos.previous.y, s = this.draggingPos.current.x, a = this.draggingPos.current.y, Math.hypot(s - r, a - o)); var r, o, s, a; f.set(this.DOM.innerEl, { scale: this.innerScale.previous }), i > this.threshold && (this._showTrail(e, t), this.trailPosition = (this.trailPosition + 1) % this.trailsTotal, this.draggingPos.previous = { ...this.draggingPos.current }) } _showTrail(e, t) { var i; if (!(null == (i = this.DOM.trails) ? void 0 : i.length)) return; const r = this.DOM.trails[this.trailPosition]; r && (f.killTweensOf(r), f.timeline({ onComplete: () => this._resetTrail(r) }).set(r, { opacity: 1, x: e, y: t, scale: this.outerScale.previous, willChange: "transform, opacity" }).to(r, { opacity: 0, duration: .3, ease: "power1.out" }, .1)) } _resetTrail(e) { f.set(e, { opacity: 0, scale: 1, willChange: "auto" }) } destroy() { var e, t; this._active = !1, this._rafId && (cancelAnimationFrame(this._rafId), this._rafId = null), null == (e = this.draggable) || e.kill(), null == (t = this.DOM.trails) || t.forEach(e => { f.killTweensOf(e), e.remove() }), this.DOM.trails = [] } } class De { constructor(e) { t(this, "initLenis", () => { this.lenis = new k({ wrapper: this.container, content: this.scroller, orientation: "horizontal", lerp: .12, smooth: !0, smoothWheel: !0, wheelMultiplier: .6, touchMultiplier: 1.3, wheelInertiaMultiplier: .4, touchInertiaMultiplier: .6, duration: .8, easing: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e), infinite: !1 }), this._renderState = { scrollProgress: 0 }, this.lenis.on("scroll", ({ scroll: e }) => { this._renderState.scrollProgress = Math.min(1, Math.max(0, e / this.maxScrollX)), this._needsSTUpdate = !0, this.animationCache.invalidate() }), this._isRunning = !0; const e = t => { this._isRunning && this.lenis && (this.lenis.raf(t), this._rafId = requestAnimationFrame(e)) }; this._rafId = requestAnimationFrame(e), this.lenis.on("scroll", w.update), this._mainTickerFn = () => { const e = this._renderState; e && this._progressBar && (this._progressBar.style.transform = `scaleX(${e.scrollProgress})`) }, f.ticker.add(this._mainTickerFn), f.ticker.lagSmoothing(0); const t = this.lenis; w.scrollerProxy(this.container, { scrollLeft(e) { if (!arguments.length) return t.scroll; t.scrollTo(e, { immediate: !0 }) }, scrollTop: () => 0, getBoundingClientRect: () => ({ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }) }), this._resizeHandler = () => { clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(() => { var e; this.animationCache.invalidate(); const { maxScrollX: t } = this.setupDimensions(); this.maxScrollX = t, w.refresh(), null == (e = this.lenis) || e.resize() }, 200) }, window.addEventListener("resize", this._resizeHandler) }), this.component = e, this.ctx = null, this.splitTextInstances = [], this.draggables = [], this.blocks = [], this.imageEffects = [], this.container = null, this.scroller = null, this.sections = null, this.lenis = null, this.isExiting = !1, this._rafId = null, this._isRunning = !1, this._blockTransitionProgress = !1, this._ghostStarted = !1, this._imagesReady = !1, this._setupPendingHover = !1, this._exitAnimation = null, this._hoverCleanups = [], this.onNavClick = this.onNavClick.bind(this), this.animationCache = new ne } async init() { const e = () => { var e; return null == (e = this.lenis) ? void 0 : e.stop() }, t = () => { var e; return null == (e = this.lenis) ? void 0 : e.start() }; this.events = new K(S), this.initElements(); const { maxScrollX: i } = this.setupDimensions(); this.maxScrollX = i, this.initLenis(), w.defaults({ scroller: this.container }), await Q(), this.events.on("page:ready", () => this.createIntroAnimation()).on("transition:start", () => e()).on("transition:end", () => t()).on("page:covered", ({ url: e }) => this.onNavClick({ url: e })), this.setupProgressBar(), await this.setupCoreAnimations(), this.setupBack(), this.setupHoverEvent(), W.pageReady = !0, requestAnimationFrame(() => { S.emit("page:ready") }), this.waitForImages = () => J(this.component.shadowRoot.querySelectorAll(".img-drag__inner, img")), this.waitForImages().then(() => { this.initDraggables(), this._imagesReady = !0, this._setupPendingHover && (this.setupLiquidButton(this.btn), this.setupHoverImage(), this.initPillButtonMagnetic()) }) } createIntroAnimation() { var e, t, i; const r = this.component.shadowRoot, o = r.querySelector(".name"), s = r.querySelector(".big-title"), a = r.querySelector(".sub-accent"), n = null == a ? void 0 : a.querySelector(".bullet1"), l = null == a ? void 0 : a.querySelector("span:nth-child(2)"), c = r.querySelector(".img-wrap"), d = r.querySelector(".hero-bottom"); if (!o || !s) return; f.set([o, s], { willChange: "transform", force3D: !0 }); const h = new b(o, { type: "lines", mask: "lines" }), p = new b(s, { type: "lines", mask: "lines" }), m = n ? new b(n, { type: "lines", mask: "lines" }) : null, u = l ? new b(l, { type: "lines", mask: "lines" }) : null; null == (e = this.splitTextInstances) || e.push(h, p), m && (null == (t = this.splitTextInstances) || t.push(m)), u && (null == (i = this.splitTextInstances) || i.push(u)), f.set(h.lines, { yPercent: 110, scaleY: 1.12, transformOrigin: "left bottom", force3D: !0 }), f.set(p.lines, { yPercent: 110, scaleY: 1.12, transformOrigin: "left bottom", force3D: !0 }), m && f.set(m.lines, { yPercent: 100, force3D: !0 }), u && f.set(u.lines, { yPercent: 100, force3D: !0 }), c && f.set(c, { autoAlpha: 0, y: 30, scale: .95, force3D: !0 }), d && f.set(d, { autoAlpha: 0, y: 20, force3D: !0 }); const g = f.timeline(); if (g.to(h.lines, { yPercent: 0, scaleY: 1, duration: 1.1, ease: "expo.out", stagger: .06 }, 0), g.to(p.lines, { yPercent: 0, scaleY: 1, duration: 1.1, ease: "expo.out", stagger: .06 }, .08), m || u) { const e = [...(null == m ? void 0 : m.lines) || [], ...(null == u ? void 0 : u.lines) || []]; g.to(e, { yPercent: 0, duration: .8, ease: "power3.out", stagger: .04 }, .35) } c && g.to(c, { autoAlpha: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.4)" }, .3), d && g.to(d, { autoAlpha: 1, y: 0, duration: .7, ease: "power3.out" }, .6), g.call(() => { f.set([o, s], { willChange: "auto" }) }), g.call(() => { this._imagesReady ? (this.setupLiquidButton(this.btn), this.setupHoverImage(), this.initPillButtonMagnetic()) : this._setupPendingHover = !0 }) } async onNavClick({ url: e }) { var t; const i = window.location.pathname; e && e !== i && (this.isExiting || (this.isExiting = !0, this._blockTransitionProgress = !0, null == (t = this.lenis) || t.stop(), await this.exit(), S.emit("page:exit:done", { url: e }))) } exit() { return new Promise(e => { const t = this.component.shadowRoot, i = [t.querySelector(".intro"), t.querySelector(".expert"), t.querySelector(".process-slide"), t.querySelector(".contact"), t.querySelector(".gradient-section"), t.querySelector(".outro")].filter(Boolean); f.set(i, { willChange: "transform", force3D: !0 }), requestAnimationFrame(() => { this._exitAnimation = f.timeline({ onComplete: () => { f.set(i, { willChange: "auto" }), this.splitTextInstances.forEach(e => null == e ? void 0 : e.revert()), this.draggables.forEach(e => { var t; return null == (t = null == e ? void 0 : e.destroy) ? void 0 : t.call(e) }), this.destroyHoverImages(), this._exitAnimation = null, e() } }), this._exitAnimation.to(i, { y: -15, delay: .25, duration: .6, ease: "power3.in" }, 0) }) }) } initElements() { this.container = this.component.shadowRoot.querySelector(".home-container"), this.scroller = this.component.shadowRoot.querySelector(".home-page-content"), this.sections = Array.from(this.scroller.querySelectorAll("section")), this.btn = this.component.shadowRoot.querySelector(".magnetic-btn") } setupDimensions() { this.scroller.style.width = "", this.scroller.offsetWidth, this.scroller.querySelectorAll(".clone-section").forEach(e => e.remove()); const e = this.sections.map(e => e.offsetWidth).reduce((e, t) => e + t, 0), t = this.container.clientWidth, i = Math.max(0, e - t); return this.scroller.style.width = `${e}px`, { sequenceWidth: e, maxScrollX: i } } setupProgressBar() { const e = this.component.shadowRoot.querySelector(".scroll-progress__bar"); e && (this._progressBar = e) } initDraggables() { const e = this.component.shadowRoot; e.querySelectorAll(".img-wrap").forEach(t => { var i, r; const o = new Ie(t, e); null == (i = o.on) || i.call(o, "dragstart", () => { var e; t.style.willChange = "transform", null == (e = this.lenis) || e.stop() }), null == (r = o.on) || r.call(o, "dragend", () => { var e; t.style.willChange = "auto", null == (e = this.lenis) || e.start() }), this.draggables.push(o) }) } async setupCoreAnimations() { this.ctx = f.context(() => { this.setupGradientSection(), this.setupExpertAnimation(), this.setupProcessAnimation() }, this.component.shadowRoot) } async animateIntro() { const e = this.component.shadowRoot; if (!e) return; const t = e.querySelectorAll("[data-animate__170]"), i = e.querySelector("[data-animate__120]"); f.timeline({ defaults: { ease: "power3.out", duration: .8 }, onComplete: () => { t.forEach(e => e.style.willChange = ""), i.style.willChange = "" } }).to([t, i], { y: 0, opacity: 1 }) } setupExpertAnimation() { const e = this.scroller.querySelector(".expert"), t = e.querySelector(".expert-heading .line2"), i = new b(t, { type: "lines", mask: "lines" }); this.splitTextInstances.push(i), f.set(i.lines, { yPercent: 110, force3D: !0 }); const r = f.timeline({ paused: !0 }); r.to(i.lines, { yPercent: 0, duration: 1, ease: "expo.out", stagger: .05 }, 0), w.create({ trigger: e, scroller: this.container, horizontal: !0, start: "left 70%", once: !0, onEnter: () => { requestAnimationFrame(() => { r.play() }) } }) } setupProcessAnimation() { const e = this.scroller.querySelector(".process-slide"), t = e.querySelector(".work-big-image"), i = e.querySelector(".work-title"), r = e.querySelector(".bullet3"), o = e.querySelector(".subtitle"), s = t.querySelector("img"); f.set(t, { scale: .88, autoAlpha: 0, transformOrigin: "center center", force3D: !0, willChange: "transform, opacity" }), s && f.set(s, { scale: 1.14, transformOrigin: "center center", force3D: !0, willChange: "transform" }), f.set(o, { autoAlpha: 0, y: 20 }); const a = new b(i, { type: "lines", mask: "lines" }); this.splitTextInstances.push(a), f.set(a.lines, { yPercent: 110, transformOrigin: "left bottom" }), f.set(r, { autoAlpha: 0, y: 30 }); const n = f.timeline({ paused: !0 }); n.to(r, { autoAlpha: 1, y: 0, duration: .7, ease: "power3.out" }, 0), n.to(t, { scale: 1, autoAlpha: 1, duration: 1.2, ease: "expo.out" }, .35), (null == t ? void 0 : t.querySelector("img")) && n.to(t.querySelector("img"), { scale: 1, duration: 1.5, ease: "power3.out" }, .35), n.to(a.lines, { yPercent: 0, duration: 1, ease: "expo.out", stagger: .06 }, .75), n.to(o, { autoAlpha: 1, y: 0, duration: .7, ease: "power3.out" }, 1.1), w.create({ trigger: e, scroller: this.container, horizontal: !0, start: "left 75%", once: !0, onEnter: () => { n.play(), n.then(() => { [t].forEach(e => { if (!e) return; f.set(e, { willChange: "auto" }); const t = e.querySelector("img"); t && f.set(t, { willChange: "auto" }) }) }) } }) } setupContactSectionAnimation() { const e = this.scroller.querySelector(".contact"), t = e.querySelectorAll(".contact-role span"), i = e.querySelector(".sologan"), r = e.querySelectorAll(".letter"); f.set(r, { willChange: "transform, opacity", force3D: !0 }), f.set(i, { willChange: "transform, opacity", force3D: !0 }), f.set(t, { yPercent: 100, opacity: 0 }), f.set(i, { opacity: 0, y: 24 }), f.set(r, { yPercent: 100, opacity: 0, transformOrigin: "bottom center" }); const o = f.timeline({ paused: !0 }); o.to(t, { yPercent: 0, opacity: 1, duration: .9, ease: "expo.out", stagger: .07 }, 0), o.to(i, { opacity: 1, y: 0, duration: .8, ease: "power3.out" }, .3), o.to(r, { yPercent: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: { each: .06, from: "start" } }, .15), o.call(() => { f.set([r, i], { willChange: "auto" }) }), w.create({ trigger: e, scroller: this.container, horizontal: !0, start: "left 80%", once: !0, onEnter: () => o.play() }) } setupLiquidButton(e) { const t = e.querySelector(".liquid-svg"), i = t.querySelector(".liquid-group"); if (!t || !i) return; let r = [], o = 0; function s() { const t = performance.now() - o, i = Math.max(0, 220 - t); setTimeout(() => { e.classList.remove("is-filled"), function (e) { const t = r.filter(t => t._hoverId === e); t.length && (f.killTweensOf(t), f.to(t, { attr: { r: 0 }, duration: .4, stagger: .04, ease: "power2.in", onComplete: () => { t.forEach(e => { const t = r.indexOf(e); t > -1 && r.splice(t, 1), e.remove() }) } })) }() }, i) } function a() { const t = document.querySelector("custom-cursor"); if (!t) return; if (!(null == t ? void 0 : t.getPosition)) return; const { x: s, y: a } = t.getPosition(); o = performance.now(), requestAnimationFrame(() => { !function (t, o, s) { const a = e.getBoundingClientRect(), n = (t - a.left) / a.width * 100, l = (o - a.top) / a.height * 40, c = Math.max(6, Math.min(34, l)), d = document.createElementNS("http://www.w3.org/2000/svg", "circle"); d.setAttribute("cx", n), d.setAttribute("cy", c), d.setAttribute("r", 0), d._hoverId = s, i.appendChild(d), r.push(d), f.to(d, { attr: { r: 110 }, duration: 1, ease: "power3.out" }) }(s, a) }), e.classList.add("is-filled") } const n = () => a(); e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", s), e.addEventListener("pointerdown", s), this._hoverCleanups.push(() => { e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", s), e.removeEventListener("pointerdown", s) }) } setupHoverImage() { this.component.shadowRoot.querySelectorAll(".work-big-image, .work-small-image").forEach(e => { if (!e.querySelector("img")) return; let t, i, r, o, s = null, a = null, n = new Map, l = null; let c = !1; const d = () => { const { width: e, height: t } = s; a.clearRect(0, 0, e, t), a.fillStyle = "rgb(254, 233, 206)"; let i = !1; n.forEach((e, t) => { const [s, l] = t.split(",").map(Number); e > .01 ? (i = !0, a.fillRect(s * r, l * o, r, o), n.set(t, .92 * e)) : n.delete(t) }), l = i ? requestAnimationFrame(d) : null }, h = h => { if (!c && (c = (() => { const { width: n, height: l } = e.getBoundingClientRect(); if (0 === n || 0 === l) return !1; s && s.remove(), s = document.createElement("canvas"), a = s.getContext("2d", { alpha: !0 }), s.width = n, s.height = l, s.style.position = "absolute", s.style.top = "0", s.style.left = "0", s.style.pointerEvents = "none", s.style.mixBlendMode = "overlay", e.appendChild(s); const c = e.classList.contains("work-small-image") ? 20 : 30; return t = Math.floor(n / c), i = Math.floor(l / c), r = n / t, o = l / i, !0 })(), !c)) return; const p = e.getBoundingClientRect(), m = h.clientX - p.left, u = h.clientY - p.top, g = `${Math.max(0, Math.min(t - 1, Math.floor(m / r)))},${Math.max(0, Math.min(i - 1, Math.floor(u / o)))}`; n.set(g, 1), l || (l = requestAnimationFrame(d)) }; e.addEventListener("mousemove", h), this.imageEffects.push({ container: e, get canvas() { return s }, cleanup: () => { e.removeEventListener("mousemove", h), l && cancelAnimationFrame(l), null == s || s.remove(), c = !1 } }) }) } setupHoverEvent() { const e = this.component.shadowRoot.querySelector(".img-drag__inner"), t = this.component.shadowRoot.querySelector(".cta"), i = this.component.shadowRoot.querySelectorAll("[data-hover-img]"), r = this.component.shadowRoot.querySelectorAll(".work-title span"), o = this.component.shadowRoot.querySelector(".outro"), s = (e, t) => { const i = () => S.emit("cursor:mode", { mode: t }), r = () => S.emit("cursor:mode", { mode: "default" }); e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", r), this._hoverCleanups.push(() => { e.removeEventListener("mouseenter", i), e.removeEventListener("mouseleave", r) }) }; s(e, "hover-img"), s(t, "hover-cta"), s(o, "hover-outro"), i.forEach(e => s(e, "hover-img-p")), r.forEach(e => s(e, "hover-w-title")) } initPillButtonMagnetic() { const e = this.component.shadowRoot.querySelectorAll(".pill, .pill-back"); e && e.forEach(e => { const t = e.innerHTML; e.innerHTML = `\n      <div class="pill__filler"></div>\n      <span class="pill__text">\n        <span class="pill__text-inner">${t}</span>\n      </span>\n    `, e.style.overflow = "hidden", e.style.position = "relative"; const i = e.querySelector(".pill__filler"), r = e.querySelector(".pill__text-inner"), o = { tx: { previous: 0, current: 0, amt: .1 }, ty: { previous: 0, current: 0, amt: .1 } }; let s = !1, a = null, n = this.animationCache.getRect(e); const l = .7 * n.width; let c = { x: 0, y: 0 }; const d = e => { c = (e => ({ x: e.clientX, y: e.clientY }))(e) }; window.addEventListener("mousemove", d); const h = (e, t, i) => e + (t - e) * i, p = () => { n = e.getBoundingClientRect(); const t = c.x - (n.left + n.width / 2), d = c.y - (n.top + n.height / 2); let m = 0, u = 0; Math.sqrt(t * t + d * d) < l ? (s || (() => { s = !0, e.classList.add("pill--hover"), f.killTweensOf(i), f.killTweensOf(r); const t = e.querySelector("svg g"); t && f.to(t, { stroke: "#000", duration: .3, ease: "power2.out" }), f.timeline().to(i, { y: "0%", duration: .5, ease: "power3.out", startAt: { y: "75%" } }, 0).to(r, { opacity: 0, y: "-10%", duration: .1, ease: "power3.out" }, 0).to(r, { opacity: 1, y: "0%", duration: .25, ease: "power3.out", startAt: { y: "30%", opacity: 1 } }, .1) })(), m = .3 * t, u = .3 * d) : s && (() => { s = !1, e.classList.remove("pill--hover"), f.killTweensOf(i), f.killTweensOf(r); const t = e.querySelector("svg g"); t && f.to(t, { stroke: "#fff", duration: .3, ease: "power2.out" }), f.timeline().to(i, { y: "-75%", duration: .4, ease: "power3.out" }, 0).to(r, { opacity: 0, y: "10%", duration: .1, ease: "power3.out" }, 0).to(r, { opacity: 1, y: "0%", duration: .25, ease: "power3.out", startAt: { y: "-30%", opacity: 1 } }, .1) })(), o.tx.current = m, o.ty.current = u, o.tx.previous = h(o.tx.previous, o.tx.current, o.tx.amt), o.ty.previous = h(o.ty.previous, o.ty.current, o.ty.amt), e.style.transform = `translate3d(${o.tx.previous}px, ${o.ty.previous}px, 0)`; const g = e.querySelector(".pill__text"); g && (g.style.transform = `translate3d(${.6 * -o.tx.previous}px, ${.6 * -o.ty.previous}px, 0)`), a = requestAnimationFrame(p) }; a = requestAnimationFrame(p), this._hoverCleanups.push(() => { window.removeEventListener("mousemove", d), cancelAnimationFrame(a), e.classList.remove("pill--hover") }) }) } destroyHoverImages() { this.imageEffects && (this.imageEffects.forEach(e => { var t; return null == (t = e.cleanup) ? void 0 : t.call(e) }), this.imageEffects.length = 0) } setupGradientSection() { const e = this.component.shadowRoot.querySelector(".gradient-section"), t = e.querySelector(".gradient img"), i = this.component.shadowRoot.querySelector(".contact"); e && t && i && (f.set(t, { force3D: !0, transformOrigin: "0% 50%", willChange: "transform" }), f.fromTo(t, { scaleX: .05 }, { scaleX: 1.02, ease: "none", scrollTrigger: { trigger: i, scroller: this.container, horizontal: !0, start: "center center", end: "right+=100 center", scrub: !0, onLeave: () => { t.style.willChange = "auto" }, onEnterBack: () => { t.style.willChange = "transform" } } })) } setupBack() { const e = this.component.shadowRoot.querySelector(".pill-back"), t = () => this.lenis.scrollTo(0, { duration: 1.2, easing: e => 1 - Math.pow(1 - e, 3) }); e.addEventListener("click", t), this._hoverCleanups.push(() => e.removeEventListener("click", t)) } stop() { var e, t, i, r; this._exitAnimation && (this._exitAnimation.kill(), this._exitAnimation = null), null == (e = this.ctx) || e.revert(), this.ctx = null, null == (t = this.splitTextInstances) || t.forEach(e => null == e ? void 0 : e.revert()), this.splitTextInstances = [], this._mainTickerFn && (f.ticker.remove(this._mainTickerFn), this._mainTickerFn = null), this._renderState = null, this._progressBar = null, this._gradientImg = null, w.getAll().filter(e => e.scroller === this.container).forEach(e => e.kill()), null == (i = this.lenis) || i.destroy(), this.lenis = null, this.container = null, this.scroller = null, this.sections = null, this.draggables.forEach(e => { var t; return null == (t = null == e ? void 0 : e.destroy) ? void 0 : t.call(e) }), this.draggables = [], this.destroyHoverImages(), null == (r = this.animationCache) || r.destroy(), this.events.destroy(), this._hoverCleanups.forEach(e => e()), this._hoverCleanups = [], this._resizeHandler && (clearTimeout(this._resizeTimer), window.removeEventListener("resize", this._resizeHandler), this._resizeHandler = null), this.isExiting = !1 } } class ze extends i {
  constructor() { super(), this.animations = null, this.hasStarted = !1, this._isMounted = !1 } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } firstUpdated() { var e; null == (e = window.app) || e.queueAnimation(() => this.runHomeAnimations(), "home-desktop") } async runHomeAnimations() { var e; this._isMounted && !this.hasStarted && (null == (e = this.animations) || e.stop(), this.animations = new De(this), window.currentAnimation = this.animations, await this.animations.init(), this.hasStarted = !0) } disconnectedCallback() { var e; this._isMounted = !1, null == (e = this.animations) || e.stop(), this.animations = null, this.hasStarted = !1, super.disconnectedCallback() } render() {
    return r`
  <nav-bar currentPage="/"></nav-bar>

  <div class="home-container">
    <div class="home-transform-wrapper">
      <div class="home-page-content">
<section class="intro">
          <div class="content__drag-area">
            <div class="hero">
              <div class="hero-right">
                <div class="sub-accent" data-animate__170>
                  <span class="bullet1">01/</span>
                  <span>From India with Love</span>
                </div>
                <h1 class="name" data-animate__120 style="white-space: nowrap; width: max-content;">NITHIN&nbsp;R</h1>
              </div>

              <div class="hero-left">
                <h1 class="big-title" data-animate__170>FULL STACK<br />DEVELOPER</h1>

                <div class="img-wrap" data-animate__170>
                  <div class="img-drag">
                    <div class="drag-hint">DR<span class="c-highlight">A</span>G ME</div>
                    <div
                      class="img-drag__inner"
                      style="background-image: url(/images/landing_crop.jpg);"
                    ></div>
                  </div>
                </div>

                <div class="hero-bottom" data-animate__170>
                  
                  <p class="support-text">
                    I BASED IN<br />
                    BANGALORE,<br />
                    PASSIONATE IN ML & FULLSTACK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="expert">
          <div class="expert-left">
            <div class="expert-heading">
              <span class="bullet">02/</span>
              <div class="expert-title">
                <h1>ENGINEERING RELIABLE SOFTWARE</h1>

                <div class="subline-wrapper">
                  <h1 class="line2">
                    <span class="subline"></span> FOR PEOPLE, PRODUCTS, AND BUSINESSES.
                  </h1>
                </div>
              </div>

              <div class="expert-shapes">
                <div class="shape-left">
                  <div class="shape-wrapper">
                    <div class="square-container">
                      <div class="d3">
                        <div class="shape03"></div>
                        <div class="shape02"></div>
                        <div class="shape01"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="shape-right">
                  <div class="shape-wrapper__test">
                    <img src="/images/smile.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="expert-right">
            <div class="col">
              <div class="monument">Design</div>
            </div>
            <div class="col">
              <div class="monument highlight">Backend</div>
            </div>
            <div class="col">
              <div class="monument">Frontend</div>
            </div>
            <div class="col">
              <div class="monument">Fullstack</div>
            </div>

            <div class="cta-about">
              <a href="/about" class="cta magnetic-btn">
                <span>More About Me</span>

                <svg class="liquid-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="
                          1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 18 -7"
                        result="goo"
                      />
                    </filter>
                  </defs>

                  <g class="liquid-group" filter="url(#goo)"></g>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section class="process-slide">
          <div class="process-col-left">
            <div class="container-030">
              <svg
                width="280"
                height="280"
                viewBox="0 0 280 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="280" height="280" rx="32" fill="#C6BEAC" />
                <path
                  d="M181.525 198.475C181.525 221.408 162.934 240 140 240C117.066 240 98.4746 221.408 98.4746 198.475C98.4746 181.578 108.566 167.038 123.051 160.554V119.446C108.566 112.962 98.4746 98.422 98.4746 81.5254C98.4746 58.5916 117.066 40 140 40C162.934 40 181.525 58.5916 181.525 81.5254C181.525 98.0905 171.826 112.39 157.797 119.055V160.945C171.826 167.61 181.525 181.91 181.525 198.475Z"
                  fill="black"
                />
              </svg>
            </div>

            <span class="bullet bullet3">03/</span>
          </div>

          <div class="process-col-right">
            <div class="work-col work-col-left">
              <div>
                <div
                  class="work-big-image"
                  
                  data-hover-img
                >
                  <img src="/images/works/vatsalya-hero-new.png" />

                  <div class="img-blocks"></div>
                </div>

                <div class="subtitle">
                  <p>- Images from Vatsalya. Contact my email for any policy issues.</p>

                  <div class="subtitle-role">
                    <p>2026</p>

                    <p>Full Stack Dev</p>
                  </div>
                </div>
              </div>

              <div class="work-title" style="font-size: clamp(2.5rem, 6vw, 5rem);">
                <span>Vatsalya</span>
              </div>
            </div>

            <div class="work-col work-col-right">
              <div
                class="work-small-image"
                data-hover-img
                
              >
                <img src="/images/works/vatsalya-new-2.png" />

                <div class="img-blocks"></div>
              </div>

              <div class="work-col-footer">

              </div>
            </div>
          </div>
        </section>

        <section class="contact">
          <div class="contact-info">
            <div class="contact-content">
              <span class="bullet">04/</span>
            </div>

            <div class="contact-img">
              <div class="contact-role">
                <div class="contact-role-left">
                  <span>Creative</span>
                  <span>Developer</span>
                </div>

                <div class="contact-role-right">
                  <span> + Problem </span>

                  <span>Solver</span>
                </div>
              </div>

              <p class="sologan">ENGINEERING SOFTWARE THAT PEOPLE ACTUALLY USE.</p>
            </div>
          </div>

          <div class="letter__container">
            <div class="title-logo">
              <div class="letter__d letter">
                <span>N</span>
              </div>

              <div class="letter__o letter">
                <span>I</span>
              </div>

              <div class="letter__u letter">
                <span>T</span>
              </div>

              <div class="letter__g letter">
                <span>H</span>
              </div>

              <div class="letter__l letter">
                <span>I</span>
              </div>

              <div class="letter__u letter">
                <span>N</span>
              </div>
            </div>
          </div>
        </section>

        <section class="gradient-section">
          <div class="gradient-filter">
            <div class="gradient">
              <img src="/images/h_crop_gradient_.webp?v=1" />
            </div>
          </div>
        </section>

        <section class="outro">
          <div class="outro-wrapper">
            <h1 data-splitting>Let’s have a chat</h1>

            <div class="divider"></div>

            <div class="button-wrapper">
              <div class="outro-contact-info">
                <a href="mailto:nithinr123n8@gmail.com" class="pill">
                  nithinr123n8@gmail.com
                </a>
                <a href="tel:+919164733579" class="pill"> +91 9164733579 </a>
              </div>

              <div class="outro-back">
                <button class="pill pill-back">
                  <svg width="79" height="9" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#fff" fill="none" fill-rule="evenodd" stroke-linecap="square">
                      <path d="M1.5 4.5l5-3M1.5 4.5l5 3M78.5 4.5h-77" />
                    </g>
                  </svg>
                  <span>Back</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <div class="scroll-progress">
    <div class="scroll-progress__bar"></div>
  </div>

  <footer-nav></footer-nav>
`}
} t(ze, "styles", [Pe, Me]), customElements.define("home-desktop", ze); const Fe = o`
  :host {
    --cream: rgb(254, 233, 206);
    --accent: rgb(255, 93, 31);
    --dark: #0e0e0e;
    --bg: #fefff8;
    --ink: #0e0e0e;

    --px: 1.5rem;
    --section-gap: 7rem;
    --block-gap: 2.5rem;
    --elem-gap: 0.75rem;

    --t-xs: 0.7rem;
    --t-sm: 0.85rem;
    --t-base: 1rem;
    --t-lg: 1.25rem;
    --t-xl: 1.6rem;
    --t-2xl: 2rem;
    --t-3xl: 3rem;
    --t-4xl: 4.5rem;
    --t-huge: 10rem;

    --p-top: 320px;

    font-family: 'Neue Montreal', sans-serif;
    color: var(--ink);
    --size: 130px;
  }

  @media (max-width: 992px) {
    :host {
      --px: 1.25rem;
      --section-gap: 6rem;
      --block-gap: 2rem;
      --t-4xl: 3.5rem;
      --t-3xl: 2.5rem;
      --t-huge: 10rem;
      --size: 110px;

      --p-top: 180px;
    }
  }

  @media (max-width: 560px) {
    :host {
      --px: 1rem;
      --section-gap: 5rem;
      --block-gap: 1.75rem;
      --t-xl: 1.4rem;
      --t-3xl: 2.2rem;
      --t-4xl: 3rem;
      --t-huge: 8rem;
      --size: 90px;
    }
  }

  @media (max-width: 400px) {
    :host {
      --t-4xl: 2.6rem;
      --t-huge: 8rem;
    }
  }

  .mobile-container {
    width: 100vw;
    height: 100svh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: none;
    touch-action: pan-y;
  }
  .mobile-container::-webkit-scrollbar {
    display: none;
  }

  .mobile-page-content {
    width: 100%;
    background-color: var(--bg);
  }

  .m-label {
    font-size: var(--t-xs);
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    display: block;
    line-height: 1;
  }

  .m-intro {
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    margin-bottom: calc(var(--section-gap) * 1.4);
  }

  .m-intro__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 var(--px);
    margin-bottom: var(--block-gap);
  }

  .m-name {
    font-size: var(--t-4xl);
    font-weight: 500;
    line-height: 0.88;
    letter-spacing: -0.03em;
    margin: 0;
    transform: translateX(-0.04em);
  }

  .m-intro__image {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    margin-bottom: var(--block-gap);
    padding: 0 var(--px);
  }

  .m-intro__image .img-drag__inner {
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .m-intro__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0.75rem var(--px) 0;
    gap: var(--elem-gap);
  }

  .m-intro__meta {
    font-size: var(--t-xs);
    font-weight: 500;
    letter-spacing: 0.08em;
    line-height: 1.7;
    opacity: 0.35;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 0.15em;
  }

  .m-title {
    font-size: var(--t-4xl);
    font-weight: 500;
    line-height: 0.88;
    letter-spacing: -0.03em;
    text-align: right;
    margin: 0;
    transform: translateX(0.04em);
    flex-shrink: 0;
  }

  .m-expert {
    padding: 0 var(--px);
    margin-bottom: calc(var(--section-gap) * 1.6);
    display: flex;
    flex-direction: column;
  }

  .m-expert__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: calc(var(--block-gap) * 1.5);
  }

  .m-expert__caption {
    font-size: var(--t-xs);
    font-weight: 500;
    line-height: 1.7;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: right;
    margin: 0;
    max-width: 18ch;
  }

  .m-monuments {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: var(--block-gap);
    transform: translateX(-0.04em);
  }

  .m-monument {
    font-size: var(--t-4xl);
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }

  .m-monument--accent {
    color: var(--accent);
  }

  .m-expert__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--elem-gap);
  }

  .m-shapes {
    display: flex;
    gap: 0.6rem;
    align-items: flex-end;
  }

  .shape-left,
  .shape-right {
    width: var(--size);
    height: var(--size);
    flex-shrink: 0;
  }

  .shape-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 20px;
  }

  .square-container {
    width: var(--size);
    height: var(--size);
    background: #c6beac;
    border-radius: calc(var(--size) * 0.114);
    display: flex;
    padding: calc(var(--size) * 0.143);
  }

  .d3 {
    width: calc(var(--size) * 0.714);
    height: calc(var(--size) * 0.714);
    position: relative;
  }

  .shape03 {
    position: absolute;
    inset: 0;
    background: #000;
    border-radius: 20%;
  }
  .shape02 {
    position: absolute;
    width: 75%;
    height: 75%;
    left: 12.5%;
    top: 12.5%;
    background: #333;
    border-radius: 50%;
  }
  .shape01 {
    position: absolute;
    width: 33%;
    height: 33%;
    left: 33%;
    top: 33%;
    background: var(--accent);
    border-radius: 50%;
  }

  .m-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: var(--t-xs);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--ink);
    padding-bottom: 0.2rem;
    border-bottom: 1px solid currentColor;
    align-self: flex-end;
  }

  .m-process {
    margin-bottom: var(--section-gap);
    display: flex;
    flex-direction: column;

    margin-bottom: calc(var(--section-gap) * 1.4);
  }

  .m-process__image {
    width: 100%;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    margin-bottom: var(--block-gap);
    padding: 0 var(--px);
  }

  .m-process__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .m-process__body {
    padding: 0 var(--px);
    display: flex;
    flex-direction: column;
  }

  .m-process__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--block-gap);
  }

  .m-process__year {
    font-size: var(--t-xs);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .m-process__rule {
    display: block;
    width: 100%;
    height: 1px;
    background: var(--ink);
    opacity: 0.12;
    margin-bottom: var(--block-gap);
  }

  .m-process__title {
    font-size: calc(var(--t-3xl) * 1.2);
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.03em;
    margin: 0;
    margin-bottom: var(--block-gap);
    transform: translateX(-0.04em);
  }

  .m-process__desc p {
    font-size: var(--t-base);
    line-height: 1.6;
    font-weight: 400;
    margin: 0;
    max-width: 46ch;
  }

  .m-process__secondary {
    width: 60%;
    margin-left: 40%;
    margin-top: var(--block-gap);
    aspect-ratio: 4 / 5;
    overflow: hidden;
  }

  .m-process__secondary img {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (max-width: 560px) {
    .m-process__secondary {
      width: 65%;
      margin-left: 35%;
    }
  }

  .m-contact {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
  }

  .m-contact__body {
    padding: 0 var(--px);
    margin-bottom: calc(var(--block-gap) * 2);
    display: flex;
    flex-direction: column;
    gap: var(--block-gap);
  }

  .m-contact__roles {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .m-contact__roles span {
    font-size: var(--t-2xl);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }

  .m-contact__slogan {
    font-size: var(--t-lg);
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
    margin: 0;
  }

  .m-letters {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: baseline;
  }

  .m-letter {
    flex: 1;
    text-align: center;
    font-family: var(--font-neue, 'Neue Montreal', sans-serif);
    font-size: 14.28vw;
    font-weight: 700;
    line-height: 0.85;
    letter-spacing: -0.04em;
    min-width: 0;
  }

  .m-outro {
    min-height: 100svh;
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--block-gap) var(--px);
    padding-bottom: calc(var(--block-gap) + 4.5rem);
    position: relative;
    overflow: hidden;
  }

  .m-outro__title-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: var(--section-gap);
  }

  .m-outro__label {
    font-size: var(--t-xs);
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(254, 233, 206, 0.25);
    display: block;
    text-align: right;
    margin-bottom: var(--block-gap);
  }

  .m-outro__title {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 0;
  }

  .m-outro__t1,
  .m-outro__t2,
  .m-outro__t3 {
    font-family: 'FKScreamer', 'Neue Montreal', sans-serif;
    font-weight: 700;
    line-height: 0.88;
    letter-spacing: -0.02em;
    display: block;
  }

  .m-outro__t1 {
    font-size: calc(var(--t-huge) * 0.42);
    color: rgba(254, 233, 206, 0.45);
    text-align: left;
    margin-bottom: 0.15em;
  }
  .m-outro__t2 {
    font-size: calc(var(--t-huge) * 1.35);
    color: var(--cream);
    text-align: right;
    margin-right: -0.04em;
    line-height: 0.82;
    margin-bottom: 0.08em;
  }

  .m-outro__t3 {
    font-size: calc(var(--t-huge) * 0.6);
    color: rgba(254, 233, 206, 0.65);
    text-align: left;
    margin-left: 0.05em;
  }

  .m-outro__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--elem-gap);
  }

  .m-outro__links {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .m-outro__link {
    font-size: var(--t-sm);
    font-weight: 400;
    letter-spacing: 0.02em;
    color: rgba(254, 233, 206, 0.3);
    text-decoration: none;
    display: block;
    transition: color 0.15s ease;
  }

  .m-outro__link:active {
    color: var(--cream);
  }

  .m-outro__back {
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
    font-size: var(--t-xs);
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(254, 233, 206, 0.35);
    cursor: pointer;
    transition: color 0.15s ease;
    white-space: nowrap;
    flex-shrink: 0;
    padding-bottom: 0.05rem;
  }

  .m-outro__back:active {
    color: var(--cream);
  }

  .scroll-progress {
    position: fixed;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background: rgba(0, 0, 0, 0.06);
    z-index: 1;
    pointer-events: none;
  }

  .scroll-progress__bar {
    width: 100%;
    height: 100%;
    background: rgb(255, 93, 31);
    transform-origin: top;
    transform: scaleY(0);
    will-change: transform;
  }
`; class Oe { constructor(e) { t(this, "initLenis", () => { this.lenis = new k({ wrapper: this.container, content: this.scroller, orientation: "vertical", lerp: .07, smoothWheel: !0, smooth: !0, wheelMultiplier: .5, touchMultiplier: 1.2, touchInertiaMultiplier: .85, wheelInertiaMultiplier: .75, duration: 1, easing: e => { if (e < .7) return e * (2 - .8 * e); { const t = (e - .7) / .3; return .79 + .21 * Math.pow(t, .3) } }, syncTouch: !1, gestureOrientation: "vertical", infinite: !1, autoResize: !0 }); let e, t = !1; const i = () => { t = !0, clearTimeout(e), this.lenis.options.lerp = .07, this.lenis.options.easing = e => 1 === e ? 1 : 1 - Math.pow(2, -12 * e) }, r = () => { t = !1, this.lenis.options.lerp = .3, this.lenis.options.easing = e => e < .2 ? 5 * e : 1, e = setTimeout(() => { t || (this.lenis.options.lerp = .07, this.lenis.options.easing = e => 1 === e ? 1 : 1 - Math.pow(2, -12 * e)) }, 150) }; this.container.addEventListener("wheel", () => { i(), clearTimeout(e), e = setTimeout(r, 100) }, { passive: !0 }), this.container.addEventListener("touchstart", i, { passive: !0 }), this.container.addEventListener("touchmove", () => { i(), clearTimeout(e) }, { passive: !0 }), this.container.addEventListener("touchend", r, { passive: !0 }); const o = this.lenis.scrollTo; this.lenis.scrollTo = (e, i = {}) => (t || i.immediate || (i.lerp = .25, i.duration = .5), o.call(this.lenis, e, i)), this.lenis.on("scroll", w.update), this._isRunning = !0; const s = e => { this._isRunning && this.lenis && (this.lenis.raf(e), this._rafId = requestAnimationFrame(s)) }; this._rafId = requestAnimationFrame(s) }), this.component = e, this.lenis = null, this.draggables = [], this.container = null, this.scroller = null, this._isRunning = !1, this._rafId = null, this.isExiting = !1, this._ghostStarted = !1, this._blockTransitionProgress = !1, this._eventListeners = [], this.onNavClick = this.onNavClick.bind(this), this.onTransitionProgress = this.onTransitionProgress.bind(this) } async init() { S.on("page:ready", this.onTransitionProgress), S.on("page:covered", this.onNavClick), this.initElements(), this.initLenis(), await this.preloadImages(), W.pageReady = !0, requestAnimationFrame(() => { S.emit("page:ready") }), this.setupProgressBar(), this.playIntroAnimation(), this.setupBackToTop() } onTransitionProgress() { if (this._blockTransitionProgress) return; if (this._ghostStarted) return; if (!this.component) return; this._ghostStarted = !0; const e = this.component.shadowRoot, t = [e.querySelector(".hero-left"), e.querySelector(".hero-right"), e.querySelector(".big-title"), e.querySelector(".name")].filter(Boolean); t.length && f.fromTo(t, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: .6, ease: "power2.out", stagger: .06, overwrite: "auto" }) } async onNavClick({ url: e }) { var t; const i = window.location.pathname; if (!e || e === i) return; if (this.isExiting) return; this.isExiting = !0, this._blockTransitionProgress = !0, null == (t = this.lenis) || t.stop(); window.matchMedia("(min-width: 350px)").matches || (await this.exit(), S.emit("page:exit:done", { url: e })) } exit() { return new Promise(e => { const t = this.component.shadowRoot.querySelectorAll("section"); f.to(t, { y: -15, delay: .25, duration: .6, ease: "power3.in", onComplete: e }) }) } initElements() { this.container = this.component.shadowRoot.querySelector(".mobile-container"), this.scroller = this.component.shadowRoot.querySelector(".mobile-page-content") } _addEventListener(e, t, i, r) { e.addEventListener(t, i, r), this._eventListeners.push({ element: e, type: t, handler: i }) } setupProgressBar() { const e = this.component.shadowRoot.querySelector(".scroll-progress__bar"); e && (this._progressBar = e, this.lenis.on("scroll", ({ scroll: e, limit: t }) => { if (!this._progressBar) return; const i = t > 0 ? e / t : 0; this._progressBar.style.transform = `scaleY(${i})` })) } preloadImages() { return new Promise(e => { const t = this.component.shadowRoot; s(t.querySelectorAll(".img-drag__inner, img"), { background: !0 }, () => { e() }) }) } playIntroAnimation() { const e = this.component.shadowRoot, t = e.querySelector(".m-name"), i = e.querySelector(".m-intro__image"), r = e.querySelector(".m-intro__meta"), o = e.querySelector(".m-title"); if (!t || !i || !o) return; f.set([t, i, o], { willChange: "transform, opacity", force3D: !0 }), f.set(t, { y: 24, opacity: 0 }), f.set(i, { y: 40, opacity: 0, scale: .97, transformOrigin: "center bottom" }), f.set(o, { y: 24, opacity: 0 }), r && f.set(r, { opacity: 0 }); const s = f.timeline({ delay: .1, defaults: { ease: "power3.out" } }); s.to(t, { y: 0, opacity: 1, duration: .7 }, 0), s.to(i, { y: 0, opacity: 1, scale: 1, duration: .9, ease: "expo.out" }, .15), s.to(o, { y: 0, opacity: 1, duration: .7 }, .35), r && s.to(r, { opacity: 1, duration: .5 }, .45), s.call(() => { f.set([t, i, o], { willChange: "auto" }) }) } setupBackToTop() { const e = this.component.shadowRoot.querySelector(".m-outro__back"); if (!e || !this.lenis) return; let t = !1, i = null, r = null; const o = e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2; this._addEventListener(e, "click", () => { t || (this.backToTopTimeout && clearTimeout(this.backToTopTimeout), t = !0, r = this.lenis.options.lerp, this.lenis.options.lerp = .15, i && i.kill(), i = this.lenis.scrollTo(0, { duration: 1.4, easing: o, immediate: !1, lock: !0, onComplete: () => { t = !1, null !== r && (this.lenis.options.lerp = r), i = null, this.lenis.velocity = 0, this.lenis.targetScroll = 0, this.backToTopTimeout = setTimeout(() => { t = !1 }, 300) } }), this.backToTopTimeout = setTimeout(() => { t = !1, null !== r && (this.lenis.options.lerp = r) }, 2e3)) }), this.setupBackToTopInterruption() } setupBackToTopInterruption() { const e = () => { this.isScrollingToTop && (this.scrollToTopAnimation && (this.scrollToTopAnimation.destroy(), this.scrollToTopAnimation = null), this.isScrollingToTop = !1) }; this._addEventListener(this.container, "wheel", e, { passive: !0 }), this._addEventListener(this.container, "touchmove", e, { passive: !0 }) } stop() { var e; S.off("page:ready", this.onTransitionProgress), S.off("page:covered", this.onNavClick), this._isRunning = !1, this._rafId && (cancelAnimationFrame(this._rafId), this._rafId = null), null == (e = this.lenis) || e.destroy(), this.lenis = null, this.isExiting = !1 } } class je extends i {
  constructor() { super(), this.animations = null, this.hasStarted = !1, this._isMounted, this.handleNavClick = this.handleNavClick.bind(this) } firstUpdated() { var e; null == (e = window.app) || e.queueAnimation(() => this.runHomeAnimations(), "home-vertical"), window.currentAnimation = this.animations, requestAnimationFrame(() => this.setupNavigation()) } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } setupNavigation() { const e = this.shadowRoot.querySelector(".cta-about a"); e && e.addEventListener("click", this.handleNavClick) } async handleNavClick(e) { e.preventDefault(); let t = e.target; for (; t && "A" !== t.tagName;)t = t.parentElement; if (!t) return; const i = t.getAttribute("href"); i && window.app && window.app.handleNavigation(i) } async runHomeAnimations() { if (!this._isMounted) return; if (this.hasStarted) return; const e = this.shadowRoot.host; e.style.opacity = "1", e.style.visibility = "visible", this.animations && (this.animations.stop(), this.animations = null), this.animations = new Oe(this), window.currentAnimation = this.animations, await this.animations.init(), this.hasStarted = !0 } disconnectedCallback() { this._isMounted = !1, this.animations && (this.animations.stop(), this.animations = null), this.hasStarted = !1, super.disconnectedCallback() } render() {
    return r`
  <nav-bar currentPage="/"></nav-bar>

  <div class="scroll-progress">
    <div class="scroll-progress__bar"></div>
  </div>

  <div class="mobile-container">
    <div class="mobile-page-content">
      <section class="m-intro">
        <div class="m-intro__top">
          <h1 class="m-name" style="white-space: nowrap; width: max-content;">NITHIN&nbsp;R</h1>
          <span class="m-label">01/</span>
        </div>

        <div class="m-intro__image">
          <div
            class="img-drag__inner"
            style="background-image: url(/images/landing_crop.jpg);"
          ></div>
        </div>

        <div class="m-intro__bottom">
          <p class="m-intro__meta">BANGALORE · ML & FULLSTACK</p>
          <h1 class="m-title">CREATIVE<br />DEVELOPER</h1>
        </div>
      </section>

      <section class="m-expert">
        <div class="m-expert__header">
          <span class="m-label">02/</span>
          <p class="m-expert__caption">
            ENGINEERING RELIABLE SOFTWARE<br />
            FOR PEOPLE, PRODUCTS, AND BUSINESSES.
          </p>
        </div>

        <div class="m-monuments">
          <div class="m-monument">Fullstack</div>
          <div class="m-monument">Frontend</div>
          <div class="m-monument m-monument--accent">Backend</div>
          <div class="m-monument">Design</div>
        </div>

        <div class="m-expert__footer">
          <div class="m-shapes">
            <div class="shape-left">
              <div class="square-container">
                <div class="d3">
                  <div class="shape03"></div>
                  <div class="shape02"></div>
                  <div class="shape01"></div>
                </div>
              </div>
            </div>
            <div class="shape-right">
              <img src="/images/smile.webp" alt="" />
            </div>
          </div>

          <a href="/about" class="m-cta">
            <span>More About Me</span>
            <span class="m-cta__arrow">?</span>
          </a>
        </div>
      </section>

      <section class="m-process">
        <div class="m-process__image">
          <img src="/images/works/vatsalya-new-2.png" alt="VATSALYA" />
        </div>

        <div class="m-process__body">
          <div class="m-process__header">
            <span class="m-label">03/</span>
            <span class="m-process__year">2024 · Full Stack Dev</span>
          </div>

          <span class="m-process__rule"></span>
          <h2 class="m-process__title">VATSALYA</h2>

          <div class="m-process__desc">
            <p>
              Vatsalya is a smart elderly care platform that helps families remotely monitor the health and safety of their loved ones.
            </p>
          </div>

          <div class="m-process__secondary">
            <img src="/images/works/vatsalya-new-2.png" />
          </div>
        </div>
      </section>

      <section class="m-contact">
        <div class="m-contact__body">
          <span class="m-label">04/</span>

          <div class="m-contact__roles">
            <span>Creative Developer</span>
            <span>+ Problem Solver</span>
          </div>

          <p class="m-contact__slogan">ENGINEERING SOFTWARE<br />THAT PEOPLE<br />ACTUALLY USE.</p>
        </div>

        <div class="m-letters">
          <div class="m-letter">N</div>
          <div class="m-letter">I</div>
          <div class="m-letter">T</div>
          <div class="m-letter">H</div>
          <div class="m-letter">I</div>
          <div class="m-letter">N</div>
        </div>
      </section>

      <section class="m-outro">
        <div class="m-outro__title-block">
          <span class="m-outro__label">05/</span>
          <div class="m-outro__title">
            <span class="m-outro__t1">Let's</span>
            <span class="m-outro__t2">HAVE</span>
            <span class="m-outro__t3">a chat</span>
          </div>
        </div>

        <div class="m-outro__bottom">
          <div class="m-outro__links">
            <a href="mailto:nithinr123n8@gmail.com" class="m-outro__link">
              nithinr123n8@gmail.com
            </a>
            <a href="tel:+919164733579" class="m-outro__link"> +91 9164733579 </a>
          </div>

          <button class="m-outro__back">? Back to top</button>
        </div>
      </section>
    </div>
  </div>

  <footer-nav></footer-nav>
`}
} t(je, "styles", [Pe, Fe]), customElements.define("home-mobile", je); const He = Object.freeze(Object.defineProperty({
  __proto__: null, HomeMobile: function () { return r`<home-mobile></home-mobile>` }, about: function () { return r`<about-page></about-page>` }, contact: function () { return r`<contact-page></contact-page>` }, home: function () { return r`<home-page></home-page>` }, homeDesktop: function () { return r`<home-desktop></home-desktop>` }, notFound: function () { return r`<not-found-page></not-found-page>` }, project: function ({ slug: e }) {
    let t; switch (e) { case "hello-clever": t = r`<hello-clever-page></hello-clever-page>`; break; case "clever-docs": t = r`<clever-docs-page></clever-docs-page>`; break; default: t = r`<not-found-page></not-found-page>` }return r`
    <nav-bar currentPage="/works"></nav-bar>
    ${t}
    <footer-nav></footer-nav>
  `}, work: function () { return r`<work-page></work-page>` }
}, Symbol.toStringTag, { value: "Module" })), Be = o`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    --font-neue: 'Neue Montreal';
    --font-screamer: 'FKScreamer', 'Avantt', sans-serif;

    --bg-overlay: rgb(5, 5, 5);
    --color-overlay: #fefff8;
    --color-cream: rgb(254, 233, 206);
    --text-active: rgb(239, 81, 67);
    --text-default: #fefff8;
    --color-primary: #000;
    --color-secondary: #222222;
    --color-warm-sunset: rgb(255, 100, 50);
    --menu-text: rgb(254, 233, 206);
    --menu-color: rgb(239, 81, 67);
    --line: rgba(255, 255, 255, 0.5);

    --font-size-greeting: 20px;
    --font-size-icon: 20px;

    --padding-x: 20px;
    --padding-y: 15px;
  }

  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 5rem;
    display: flex;
    justify-content: center;
    z-index: 10;
    background: transparent;
    opacity: 1;
    font-family: var(--font-neue);
    mix-blend-mode: difference;
    pointer-events: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    opacity: 0.5;
  }

  .nav_item[data-active='true'] {
    font-weight: 900;
    opacity: 1;
  }

  .nav-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;

    @media (max-width: 1500px) {
      padding: 1rem 1.5rem;
    }

    @media (max-width: 992px) {
      padding: 2rem 1.2rem;
    }

    @media (max-width: 560px) {
      padding: 2rem 1rem;
    }
  }

  .logo,
  .logo a {
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    z-index: 3;
    opacity: 1;

    @media (max-width: 768px) {
      font-size: 1.15rem;
      font-weight: 400;
    }
  }

  .logo-link {
    display: inline-flex;
    align-items: baseline;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    position: relative;
  }

  .logo-first {
    flex-shrink: 0;
  }

  .logo-last {
    display: inline-flex;
    overflow: hidden;
    width: 0;
    opacity: 0;
    position: absolute;
    left: 100%;
    white-space: nowrap;
  }

  .logo-char {
    display: inline-block;
  }

  .nav_list_wrapper {
    display: flex;
    gap: 0.1rem;
  }

  .socials {
    height: fit-content;
    display: flex;
    gap: 0.5rem;
  }

  .socials a,
  .socials span {
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  .menu__link {
    position: relative;
  }

  .menu__link:focus,
  .menu__link:hover {
    color: #fff;
  }

  .menu__link-inner {
    display: block;
    position: relative;
    outline: 100px solid transparent;
  }

  .menu__link-deco {
    outline: 120px solid transparent;
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  .menu--line .menu__link-deco {
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: currentColor;
  }

  .menu--linethrough .menu__link-deco {
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: currentColor;
    opacity: 0;
  }

  .menu--linethrough .menu__link-deco {
    bottom: 50%;
    height: 2px;
  }

  .menu__link:hover .menu__link-deco {
    opacity: 1;
  }

  .tooltip {
    --tt-width: 200px;
    --tt-height: 250px;
    --tt-columns: 3;
    --tt-rows: 4;
    --tt-bg-color: rgb(255, 100, 50);
    --tt-text-color: rgb(254, 233, 206);
    position: absolute;
    opacity: 0;
    top: 5%;
    right: 10%;
    width: var(--tt-width);
    height: var(--tt-height);
    display: grid;
    grid-template-areas: 'tooltip';
    z-index: 1;
    pointer-events: none;

    @media (max-width: 1500px) {
      right: 12%;
    }

    @media (max-width: 1280px) {
      right: 14%;
    }

    @media (max-width: 1199px) {
      --tt-height: 180px;

      right: 10%;
    }
  }

  .tooltip__hitbox {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: transparent;
    z-index: 3;
  }

  .tooltip--show {
    opacity: 1;
    pointer-events: auto;
  }

  .tooltip--show .tooltip__hitbox {
    pointer-events: auto;
  }

  .tooltip__bg {
    grid-area: tooltip;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(var(--tt-columns), 1fr);
    grid-template-rows: repeat(var(--tt-rows), 1fr);
    background: transparent;
    will-change: transform, filter;
  }

  .tooltip__bg div {
    background: var(--tt-bg-color);
  }

  .tooltip__content {
    grid-area: tooltip;
    color: var(--tt-text-color);
    position: relative;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 0.5rem;
    opacity: 0;
  }

  .tooltip__content-title {
    font-weight: normal;
    margin: 0;
    font-size: 1.5rem;

    @media (max-width: 1199px) {
      font-size: 1.1rem;
    }
  }

  .tooltip__content-meta {
    margin: 0;
  }

  .tooltip__content-desc {
    margin: auto 0 0 0;
  }

  svg {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .menu-toggle {
    display: none;
    position: relative;
    width: 2.5rem;
    height: 1.5rem;
    color: var(--text-default);
    cursor: pointer;
    z-index: 10;
  }

  .menu-toggle p {
    position: absolute;
    transform-origin: top left;
    will-change: transform, opacity;
  }

  .menu-layout {
    position: fixed;
    width: 100vw;
    height: 100svh;
    background-color: var(--color-primary);
    color: var(--menu-text);
    z-index: 5;

    visibility: hidden;
    clip-path: inset(0 0 100% 0);
  }

  .menu-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    transform-origin: top;

    opacity: 0;
  }

  .menu-layout a {
    color: var(--menu-color);
    opacity: 1;
  }

  .menu-main {
    display: flex;
    align-items: center;
  }

  .menu-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (max-width: 768px) {
      gap: 2rem;
    }
  }

  .menu-item {
    display: flex;
    justify-content: center;

    font-size: clamp(4rem, 12vw, 10rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 0.75;

    text-decoration: none;
    color: inherit;
    padding: 1rem 0rem;
  }

  .menu-item-text {
    position: relative;
    display: inline-block;
  }

  .menu-item-text::before,
  .menu-item-text::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: var(--menu-text);
    top: 100%;
    left: 0;
    margin-top: 0.9rem;
    pointer-events: none;
  }

  .menu-item-text::before {
    content: '';
  }

  .menu-item-text::before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.5s;
  }

  .menu-item-text:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .menu-item-tiny {
    display: none;
    font-size: 1rem;
    letter-spacing: 0;
    color: var(--menu-text);

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  .menu-item[data-active='true'] .menu-item-tiny {
    display: inline-block;
  }

  .item-1,
  .item-2 {
    gap: 0.5rem;

    @media (max-width: 768px) {
      gap: 0.2rem;
    }
  }

  .item-3 span:nth-child(1) {
    margin-right: -1rem;

    @media (max-width: 768px) {
      margin-right: -0.5rem;
    }
  }

  .item-4 {
    gap: 1rem;

    @media (max-width: 768px) {
      gap: 0.5rem;
    }
  }

  .menu-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem 2rem;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }

  .footer-left,
  .footer-right {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-right {
    text-align: right;
  }

  .footer-right a {
    font-size: 0.85rem;
    color: var(--menu-text) !important;
  }

  .menu-toggle p#menu-close {
    opacity: 0;
  }

  @media (max-width: 1500px) and (min-width: 1200px) {
    a,
    .logo,
    .logo a {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1199px) {
    .nav {
      display: none;
    }

    .socials {
      display: none;
    }

    .menu-toggle {
      display: block;
    }

    .tooltip {
      display: none;
    }
  }

  .logo,
  .nav,
  .socials,
  .menu-toggle {
    pointer-events: auto;
  }
`; class Ne { constructor(e) { this.el = e, this.bg = e.querySelector(".tooltip__bg"), this.content = e.querySelector(".tooltip__content"), this.cells = [], this.isOpen = !1, this.tl = null, requestAnimationFrame(() => { this._layout() }) } _layout() { const e = +this.el.dataset.rows || 4, t = +this.el.dataset.cols || 4; this.bg.innerHTML = "", this.el.style.setProperty("--tt-rows", e), this.el.style.setProperty("--tt-columns", t); for (let i = 0; i < e * t; i++)this.bg.appendChild(document.createElement("div")); this.cells = [...this.bg.children] } open() { this.isOpen = !0, this._animate() } close() { this.isOpen = !1, this._animate() } _animate() { this.bg.style.filter = "url(#gooey)", this.tl && (this.tl.kill(), this.tl = null), this.tl = f.timeline({ defaults: { duration: .9, ease: "expo.out" }, onStart: () => { this.el.classList.add("tooltip--show") }, onComplete: () => { this.isOpen || this.el.classList.remove("tooltip--show") } }), this.isOpen ? (this.tl.fromTo(this.cells, { opacity: 0, scale: .3 }, { opacity: 1, scale: 1, stagger: { each: .08, from: "random", grid: "auto" } }, 0), this.tl.add(() => { this.isOpen && f.fromTo(this.content, { opacity: 0 }, { opacity: 1, duration: .25, ease: "power2.out" }) }, .6)) : (f.to(this.content, { opacity: 0, duration: .2, ease: "power2.in" }), this.tl.to(this.cells, { opacity: 0, scale: .3, stagger: { each: .04, from: "random", grid: "auto" } }, 0)) } } class Ye { constructor(e) { this.root = e, this.activeTooltip = null, this.handleDocumentClick = this.handleDocumentClick.bind(this), this.handleKeydown = this.handleKeydown.bind(this) } init() { this.root.querySelectorAll(".trigger").forEach(e => { const t = this.root.querySelector(`#${e.dataset.tooltip}`); if (!t) return; const i = new Ne(t); e.addEventListener("click", r => { r.stopPropagation(), this.toggleTooltip(i, t, e) }), t.addEventListener("click", e => e.stopPropagation()) }) } toggleTooltip(e, t, i) { this.activeTooltip !== e ? (this.close(), e.open(), this.activeTooltip = e, this.currentTooltipEl = t, this.currentTriggerEl = i, document.addEventListener("click", this.handleDocumentClick), document.addEventListener("keydown", this.handleKeydown)) : this.close() } handleDocumentClick(e) { const t = e.composedPath(); t.includes(this.currentTooltipEl) || t.includes(this.currentTriggerEl) || this.close() } handleKeydown(e) { "Escape" === e.key && this.close() } close() { var e; null == (e = this.activeTooltip) || e.close(), this.activeTooltip = null, document.removeEventListener("click", this.handleDocumentClick), document.removeEventListener("keydown", this.handleKeydown) } destroy() { this.close() } } class Ue { constructor(e, t) { this.el = e, this.root = t, this.filterId = "filter-5", this.DOM = { feDisplacementMap: t.querySelector(`#${this.filterId} feDisplacementMap`) }, this.DOM.feDisplacementMap && (this._wrapDOM(), this.primitiveValues = { scale: 0 }, this._createTimeline()) } _wrapDOM() { this.DOM.text = document.createElement("span"), this.DOM.text.className = "menu__link-inner", this.DOM.text.innerHTML = this.el.innerHTML, this.el.innerHTML = "", this.el.appendChild(this.DOM.text), this.DOM.line = document.createElement("span"), this.DOM.line.className = "menu__link-deco", this.el.appendChild(this.DOM.line) } _createTimeline() { this.tl = f.timeline({ paused: !0, onStart: () => { this.DOM.text.style.filter = `url(#${this.filterId})`, this.DOM.line.style.filter = `url(#${this.filterId})` }, onUpdate: () => { this.DOM.feDisplacementMap.scale.baseVal = this.primitiveValues.scale }, onComplete: () => { this.DOM.text.style.filter = "none", this.DOM.line.style.filter = "none" } }), this.tl.to(this.primitiveValues, { duration: .7, startAt: { scale: 40 }, ease: "rough({ strength:2, points:120, randomize:true })", scale: 0 }, 0), this.tl.to(this.DOM.line, { duration: .7, startAt: { y: -5 }, ease: "expo.out", y: 0 }, 0) } enter() { this.tl.restart() } leave() { this.tl.progress(1).kill() } } class Ve { constructor(e) { this.root = e, this.instances = [] } init() { this.root.querySelectorAll(".menu__link").forEach(e => { const t = new Ue(e, this.root), i = () => t.enter(), r = () => t.leave(); e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", r), this.instances.push({ el: e, enter: i, leave: r }) }) } destroy() { this.instances.forEach(({ el: e, enter: t, leave: i }) => { e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i) }), this.instances = [] } } class $e { constructor(e) { this.component = e, this.root = e.shadowRoot, this.tooltipCtrl = null, this.hoverCtrl = null, this.menuToggle = null, this.menuLayout = null, this.menuContent = null, this.menuLinks = null, this.socials = null, this.phone = null, this.isOpen = !1, this.isAnimating = !1, this.menuTl = null, this.menuState = "closed", this._hoverCleanups = [] } init() { window.matchMedia("(min-width: 1200px)").matches ? this.initDesktop() : this.initMobile(), this._mq = window.matchMedia("(min-width: 1200px)"), this._mqHandler = e => { this._destroyControllers(), e.matches ? this.initDesktop() : this.initMobile() }, this._mq.addEventListener("change", this._mqHandler) } initDesktop() { this.tooltipCtrl = new Ye(this.root), this.tooltipCtrl.init(), this.hoverCtrl = new Ve(this.root), this.hoverCtrl.init(), this.initLogoHover(), this.setupHoverEvent() } initMobile() { this.initElements(), this.menuToggle.addEventListener("click", () => { this.isAnimating || ("open" === this.menuState ? this.closeMenu() : this.openMenu()) }) } initElements() { this.menuToggle = this.root.querySelector(".menu-toggle"), this.menuLayout = this.root.querySelector(".menu-layout"), this.menuContent = this.root.querySelector(".menu-content"), this.menuLinks = this.root.querySelectorAll(".menu-list a"), this.phone = this.root.querySelectorAll(".footer-left p"), this.socials = this.root.querySelectorAll(".footer-right a") } openMenu() { var e; "open" !== this.menuState && "opening" !== this.menuState && (this.menuState = "opening", this.isAnimating = !0, null == (e = this.menuTl) || e.kill(), this._promoteMenuLayers(), this.animateMenuToggle(!0), this.menuTl = f.timeline({ defaults: { force3D: !0 }, onComplete: () => { this.menuState = "open", this.isAnimating = !1, f.set(this.menuLayout, { willChange: "auto" }), f.set(this.menuContent, { willChange: "auto" }) } }), this.menuTl.set(this.menuLayout, { visibility: "visible", clipPath: "inset(0 0 100% 0)" }).to(this.menuLayout, { clipPath: "inset(0 0 0% 0)", duration: .85, ease: "power4.inOut" }, 0).fromTo(this.menuContent, { opacity: 0, scale: .97 }, { opacity: 1, scale: 1, duration: .7, ease: "power3.out" }, .1).fromTo([this.menuLinks, this.phone, this.socials], { yPercent: 120, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: .55, stagger: .05, ease: "power3.out", onComplete: () => { f.set([this.menuLinks, this.phone, this.socials], { willChange: "auto" }) } }, .4)) } closeMenu({ onNavigate: e } = {}) { var t; if ("closed" === this.menuState || "closing" === this.menuState) return void (null == e || e()); this.menuState = "closing", this.isAnimating = !0, null == (t = this.menuTl) || t.kill(), this._promoteMenuLayers(), this.animateMenuToggle(!1); let i = !1; this.menuTl = f.timeline({ defaults: { force3D: !0 }, onComplete: () => { this.menuState = "closed", this.isAnimating = !1, f.set(this.menuLayout, { visibility: "hidden" }), this._clearMenuLayers() } }), this.menuTl.to([this.menuLinks, this.phone, this.socials], { yPercent: -120, autoAlpha: 0, duration: .3, stagger: .03, ease: "power3.in" }, 0).to(this.menuContent, { opacity: 0, scale: .97, duration: .5, ease: "power3.in" }, 0).to(this.menuLayout, { clipPath: "inset(0 0 100% 0)", duration: .65, ease: "power4.inOut", onUpdate: () => { this.menuTl.progress() > .4 && !i && (i = !0, null == e || e()) } }, .1) } animateMenuToggle(e) { const t = this.root.querySelector("p#menu-open"), i = this.root.querySelector("p#menu-close"); t && i && (f.killTweensOf([t, i]), f.to(e ? t : i, { opacity: 0, y: e ? -6 : 6, duration: .25, ease: "power2.out" }), f.to(e ? i : t, { opacity: 1, y: 0, duration: .25, delay: .2, ease: "power2.out" })) } initLogoHover() { const e = this.root, t = e.querySelector(".logo-link"); if (!t) return; const i = e.querySelector(".logo-last"); if (!i) return; const r = i.textContent.trim(); i.innerHTML = r.split("").map(e => `<span class="logo-char">${" " === e ? "&nbsp;" : e}</span>`).join(""); const o = i.querySelectorAll(".logo-char"); f.set(o, { yPercent: 120, opacity: 0 }), f.set(i, { width: 0, opacity: 1, paddingLeft: 0 }); let s = null; function a() { null == s || s.kill(), s = f.timeline(); f.getProperty(o[0], "yPercent") < 0 && f.set(o, { yPercent: 120, opacity: 0 }), s.to(i, { width: "auto", paddingLeft: "0.22em", duration: .05, ease: "none" }, 0), s.to(o, { yPercent: 0, opacity: 1, duration: .55, ease: "power3.out", stagger: .04 }, 0) } function n() { null == s || s.kill(), s = f.timeline(), s.to(o, { yPercent: -120, opacity: 0, duration: .35, ease: "power3.in", stagger: { each: .03, from: "end" } }, 0), s.to(i, { width: 0, paddingLeft: 0, duration: .2, ease: "power2.in" }, .18) } t.addEventListener("mouseenter", () => a()), t.addEventListener("mouseleave", () => n()), this._hoverCleanups.push(() => { t.removeEventListener("mouseenter", () => a()), t.removeEventListener("mouseleave", () => n()) }) } _promoteMenuLayers() { f.set(this.menuLayout, { willChange: "clip-path" }), f.set(this.menuContent, { willChange: "transform, opacity" }) } _clearMenuLayers() { f.set(this.menuLayout, { willChange: "auto" }), f.set(this.menuContent, { willChange: "auto" }), f.set([this.menuLinks, this.phone, this.socials], { willChange: "auto" }) } setupHoverEvent() { const e = this.root.querySelectorAll("[cursor-hover]"); e.forEach(e => { e.addEventListener("mouseenter", () => S.emit("cursor:mode", { mode: "hover-nav" })), e.addEventListener("mouseleave", () => S.emit("cursor:mode", { mode: "default" })) }), this._hoverCleanups.push(() => { e.forEach(e => { e.removeEventListener("mouseenter", () => S.emit("cursor:mode", { mode: "hover-nav" })), e.removeEventListener("mouseleave", () => S.emit("cursor:mode", { mode: "default" })) }) }) } _destroyControllers() { var e, t, i; null == (e = this.tooltipCtrl) || e.destroy(), null == (t = this.hoverCtrl) || t.destroy(), null == (i = this.menuTl) || i.kill(), this.menuTl = null, this._hoverCleanups.forEach(e => e()), this._hoverCleanups = [] } destroy() { var e, t, i, r; null == (e = this.tooltipCtrl) || e.destroy(), null == (t = this.hoverCtrl) || t.destroy(), null == (i = this.menuTl) || i.kill(), this.menuTl = null, this._hoverCleanups.forEach(e => e()), this._hoverCleanups = [], this._destroyControllers(), null == (r = this._mq) || r.removeEventListener("change", this._mqHandler) } } class Ge extends i {
  constructor() { super(), this.handleNavClick = this.handleNavClick.bind(this), this._handleMouseover = this._handleMouseover.bind(this), this._isMounted = !1, this.navAnimation = null } async initAnimations() { if (!this._isMounted) return; if (this.hasAnimationsStarted) return; this.navAnimation && (this.navAnimation = null); await new Promise(e => { var t; null == (t = window.app) || t.queueAnimation(async () => { this.navAnimation = new $e(this), this.navAnimation.init(), e() }, "navbar") }), this.hasAnimationsStarted = !0 } firstUpdated() { this.initAnimations() } connectedCallback() { super.connectedCallback(), this._isMounted = !0, this.hasAnimationsStarted = !1, requestAnimationFrame(() => { this.setupNavigation() }) } _handleMouseover(e) { e.stopPropagation(); let t = e.target; for (; t && "A" !== t.tagName;)t = t.parentElement; if (!t) return; const i = t.getAttribute("href"); i && i !== window.location.pathname && S.emit("link:hover", { url: i }) } setupNavigation() { this.shadowRoot.querySelectorAll(".nav_list a").forEach(e => { e.addEventListener("click", this.handleNavClick), e.addEventListener("mouseover", this._handleMouseover) }) } async handleNavClick(e) { e.preventDefault(), e.stopPropagation(); let t = e.target; for (; t && "A" !== t.tagName;)t = t.parentElement; if (!t) return; const i = t.getAttribute("href"); i && i !== window.location.pathname && S.emit("navbar:click", { url: i, timestamp: Date.now() }) } disconnectedCallback() { this._isMounted = !1; this.shadowRoot.querySelectorAll(".nav_list a").forEach(e => { e.removeEventListener("click", this.handleNavClick), e.removeEventListener("mouseover", this._handleMouseover) }), this.navAnimation && (this.navAnimation.destroy(), this.navAnimation = null), this.hasAnimationsStarted = !1, super.disconnectedCallback() } render() {
    return r`
      <div class="nav-container">
        <div class="nav-wrapper">
          <div class="logo">
            <a href="/" class="logo-link" cursor-hover>
              <span class="logo-first">Nithin</span>
              <span class="logo-last">R</span>
            </a>
          </div>

          <div class="nav">
            <div class="nav_list">
              <nav class="nav_list_wrapper menu--line">
                <a
                  href="/works"
                  class="nav_item menu__link menu__link--6"
                  data-active="${"/works" === this.currentPage}"
                  cursor-hover
                >
                  Works,
                </a>

                <a
                  href="/about"
                  class="nav_item menu__link menu__link--6"
                  data-active="${"/about" === this.currentPage}"
                  cursor-hover
                >
                  About,
                </a>

                <a
                  href="/contact"
                  class="nav_item menu__link menu__link--6"
                  data-active="${"/contact" === this.currentPage}"
                  cursor-hover
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>

          <div class="socials menu--linethrough">
            <a
              class="menu__link menu__link--6"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Nithin-R08"
              cursor-hover
              >Github</a
            >
            <a
              class="menu__link menu__link--6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nithin-rnitr/"
              cursor-hover
              >LinkedIn</a
            >
            <a
              class="menu__link menu__link--6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://leetcode.com/u/g9fMGpANx8/"
              cursor-hover
              ><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align: middle; margin-right: 6px; margin-bottom: 2px;"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>LeetCode</a
            >
            <a
              class="menu__link menu__link--6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.geeksforgeeks.org/profile/nithinr08?tab=overview"
              cursor-hover
              ><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align: middle; margin-right: 6px; margin-bottom: 2px;"><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"/></svg>GFG</a
            >
            <a
              class="menu__link menu__link--6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1ngnFsVU5fCJhxQNOnk5p1cPx4MYlhoZy/view?usp=drive_link"
              cursor-hover
              >Resume</a
            >
            <span
              class="trigger menu__link menu__link--6"
              data-tooltip="tooltip-6"
              data-effect="effect6"
              cursor-hover
              >Email</span
            >
          </div>

          <div class="menu-toggle">
            <p id="menu-open">Menu</p>
            <p id="menu-close">Close</p>
          </div>
        </div>
      </div>

      <div class="menu-layout">
        <div class="menu-content">
          <header class="menu-top"></header>

          <div class="menu-main">
            <nav class="menu-list nav_list">
              <div class="link">
                <a class="menu-item item-1" href="/" data-active="${"/" === this.currentPage}">
                  <span class="menu-item-tiny">intro</span>
                  <span class="menu-item-text">HOME</span>
                </a>
              </div>

              <div class="link">
                <a
                  class="menu-item item-2"
                  href="/works"
                  data-active="${"/works" === this.currentPage}"
                >
                  <span class="menu-item-text">WORKS</span>
                  <span class="menu-item-tiny">selected</span>
                </a>
              </div>

              <div class="link">
                <a
                  class="menu-item item-3"
                  href="/about"
                  data-active="${"/about" === this.currentPage}"
                >
                  <span class="menu-item-tiny">story</span>
                  <span class="menu-item-text">ABOUT</span>
                </a>
              </div>

              <div class="link">
                <a
                  class="menu-item item-4"
                  href="/contact"
                  data-active="${"/contact" === this.currentPage}"
                >
                  <span class="menu-item-text">CONTACT</span>
                  <span class="menu-item-tiny">say hi</span>
                </a>
              </div>
            </nav>
          </div>

          <footer class="menu-footer">
            <div class="footer-left">
              <div class="social">
                <p>nithinr123n8@gmail.com</p>
              </div>

              <div class="social">
                <p>+91 9164733579</p>
              </div>
            </div>

            <div class="footer-right">
              <div class="social">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Nithin-R08">Github</a>
              </div>

              <div class="social">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nithin-rnitr/">LinkedIn</a>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div id="tooltip-6" class="tooltip" data-rows="5" data-cols="3">
        <div class="tooltip__hitbox"></div>
        <div class="tooltip__bg"></div>
        <div class="tooltip__content">
          <h3 class="tooltip__content-title">nithinr123n8@gmail.com</h3>
          <h3 class="tooltip__content-title">+91 9164733579</h3>
          <h3 class="tooltip__content-title">Bangalore, INDIA</h3>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10.2" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <svg class="hidden">
        <defs>
          <filter id="filter-5">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.7"
              numOctaves="5"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="0"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
      </svg>
    `}
} t(Ge, "properties", { currentPage: { type: String } }), t(Ge, "styles", [Be]), customElements.define("nav-bar", Ge); const Xe = o`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host {
    --font-neue: 'Neue Montreal', sans-serif;
    --font-screamer: 'FKScreamer', 'Avantt', sans-serif;

    --bg-overlay: rgb(5, 5, 5);
    --color-overlay: #fefff8;
    --color-cream: rgb(254, 233, 206);
    --text-active: rgb(239, 81, 67);
    --text-default: #fefff8;
    --color-primary: #000;
    --color-secondary: #222222;
    --color-warm-sunset: rgb(255, 100, 50);

    --font-size-greeting: 20px;
    --font-size-icon: 20px;

    --padding-x: 20px;
    --padding-y: 15px;
  }

  .footer-nav-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 5em;
    display: flex;
    justify-content: center;
    z-index: 3;
    background: transparent;
    opacity: 1;
    font-family: var(--font-neue);
    mix-blend-mode: difference;
    pointer-events: none;

    @media (max-width: 1399px) {
      height: 4.5rem;
    }

    @media (max-width: 768px) {
      height: 4rem;
    }
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
  }

  .nav-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 3rem;
    position: relative;

    @media (max-width: 1500px) and (min-width: 1200px) {
      padding: 2.5rem 1.5rem;
    }

    @media (max-width: 992px) {
      padding: 2.5rem 1rem;
    }
  }

  .contact {
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
  }

  .welcome {
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
    will-change: transform;

    @media (max-width: 768px) {
      font-size: clamp(0.75rem, 2.8vw, 0.9rem);
    }
  }

  .welcome {
    pointer-events: auto;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`; class We { constructor(e) { this.component = e, this.tl = null, this.rotateSplit = null, this.idleTimer = null, this._scheduleIdle = null } async init() { const e = this.component.shadowRoot.getElementById("rotate"); if (!e) return; const t = { each: .05, repeat: 1, yoyo: !0 }; if (document.fonts && document.fonts.ready) try { await document.fonts.ready } catch (o) { } this.rotateSplit = b.create(e, { type: "chars" }), f.set(this.rotateSplit.chars, { transformPerspective: 180, transformStyle: "preserve-3d" }); const i = () => { this.tl.restart(!0) }, r = () => { clearTimeout(this.idleTimer), this.idleTimer = setTimeout(i, 5e3) }; this._scheduleIdle = r, this.tl = f.timeline({ defaults: { ease: "power1" }, paused: !0, onComplete: r }), this.tl.to(this.rotateSplit.chars, { z: 80, color: "#fff", duration: .2, stagger: t }), this.tl.to(this.rotateSplit.chars, { rotationY: 35, duration: .1, stagger: t }, 0), r(), window.addEventListener("mousemove", r), window.addEventListener("scroll", r) } destroy() { var e, t; clearTimeout(this.idleTimer), window.removeEventListener("mousemove", this._scheduleIdle), window.removeEventListener("scroll", this._scheduleIdle), null == (e = this.tl) || e.kill(), null == (t = this.rotateSplit) || t.revert() } } class Ke extends i {
  constructor() { super(), this._isMounted = !1, this.burgerNavAnimation = null } async initAnimations() { if (!this._isMounted) return; if (this.hasAnimationsStarted) return; this.burgerNavAnimation && (this.burgerNavAnimation = null); await new Promise(e => { var t; null == (t = window.app) || t.queueAnimation(async () => { this.burgerNavAnimation = new We(this), this.burgerNavAnimation.init(), e() }, "footer-nav") }), this.hasAnimationsStarted = !0 } firstUpdated() { this.initAnimations() } connectedCallback() { super.connectedCallback(), this._isMounted = !0 } disconnectedCallback() { this._isMounted = !1, this.burgerNavAnimation && (this.burgerNavAnimation.destroy(), this.burgerNavAnimation = null), this.hasAnimationsStarted = !0, super.disconnectedCallback() } render() {
    return r`
      <div class="footer-nav-container">
        <div class="nav-wrapper">
        

          <div id='rotate' class="welcome">Design & code with Nithin</div>
        </div>
      </div>
    `}
} function Qe(e, t) { const { width: i, height: r, wrapS: o, wrapT: s, minFilter: n = e.LINEAR, magFilter: l = n, type: c, format: d, internalFormat: h, depth: p = !1 } = t, m = { width: i, height: r, wrapS: o, wrapT: s, minFilter: n, magFilter: l, type: c, format: d, internalFormat: h, depth: p }, u = { read: new a(e, m), write: new a(e, m), swap() { const e = u.read; u.read = u.write, u.write = e } }; return u } function Je(e, t, i, r) { if (!function (e, t, i, r) { const o = e.createTexture(); e.bindTexture(e.TEXTURE_2D, o), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, t, 4, 4, 0, i, r, null); const s = e.createFramebuffer(); e.bindFramebuffer(e.FRAMEBUFFER, s), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, o, 0); const a = e.checkFramebufferStatus(e.FRAMEBUFFER); return a === e.FRAMEBUFFER_COMPLETE }(e, t, i, r)) switch (t) { case e.R16F: return Je(e, e.RG16F, e.RG, r); case e.RG16F: return Je(e, e.RGBA16F, e.RGBA, r); default: return null }return { internalFormat: t, format: i } } t(Ke, "properties", { currentPage: { type: String } }), t(Ke, "styles", [Xe]), customElements.define("footer-nav", Ke); class Ze extends i {
  static get properties() { return { fluidRadius: { type: Number }, fluidCurl: { type: Number }, fluidSwirl: { type: Number }, fluidForce: { type: Number }, fluidIntensity: { type: Number }, fluidRainbow: { type: Boolean }, nativeCursorEnabled: { type: Boolean, reflect: !0 } } } constructor() { super(), this.isTouchDevice = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window, this.isTouchDevice || (this.initializeProperties(), this.initializeState(), this.bindMethods(), this.nativeCursorEnabled = !1, this.hasMouseMovement = !1) } initializeProperties() { this.fluidRadius = .025, this.fluidCurl = 20, this.fluidSwirl = 3, this.fluidForce = 1.5, this.fluidIntensity = .8, this.fluidRainbow = !0 } initializeState() { this.coords = { x: 0, y: 0 }, this.circles = null, this.cursorText = null, this.currentScales = [], this.targetScales = [], this.currentMode = "default", this.targetMode = "default", this.rawMode = "default", this.modeLerp = 1, this.currentPage = window.location.pathname, this.clickTimeout = null, this.clickReturnDelay = 200, this.splatStack = [], this.prevMouse = { x: 0, y: 0 }, this.pointer = new n, this.color = new l, this.clock = { delta: 0, last: performance.now() }, this._domCircle = null, this._domDot = null, this._domText = null, this._leaveTimer = null, this._prevMode = "default", this._lerpDot = { x: 0, y: 0 }, this._lerpCircle = { x: 0, y: 0 }, this._AMT_DOT = .35, this._AMT_CIRCLE = .2 } bindMethods() { this.handleMouseMove = this.handleMouseMove.bind(this), this.handleResize = this.handleResize.bind(this), this.animate = this.animate.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseUp = this._onMouseUp.bind(this) } connectedCallback() { super.connectedCallback(), this.isTouchDevice ? this.remove() : (this.initOGL(), window.addEventListener("resize", this.handleResize), window.addEventListener("mousedown", this._onMouseDown), window.addEventListener("mouseup", this._onMouseUp), this._externalModeHandler = ({ mode: e, label: t, color: i }) => { "default" === e && (this._prevMode = "default"), this._setDomMode(e, { label: t, color: i }) }, S.on("cursor:mode", this._externalModeHandler), this._resetModeHandler = () => { this._prevMode = "default", this._setDomMode("default") }, S.on("transition:start", this._resetModeHandler), S.on("page:ready", this._resetModeHandler), this._onDocMouseLeave = () => { this._prevMode = "default", this._setDomMode("default") }, document.addEventListener("mouseleave", this._onDocMouseLeave), S.on("cursor:position", ({ x: e, y: t }) => { this.coords.x = e, this.coords.y = t })) } disconnectedCallback() { super.disconnectedCallback(), this.cleanup(), window.removeEventListener("mousedown", this._onMouseDown), window.removeEventListener("mouseup", this._onMouseUp), S.off("cursor:mode", this._externalModeHandler), S.off("transition:start", this._resetModeHandler), S.off("page:ready", this._resetModeHandler), document.removeEventListener("mouseleave", this._onDocMouseLeave) } cleanup() { var e, t; window.removeEventListener("resize", this.handleResize), window.removeEventListener("mousemove", this.handleMouseMove), cancelAnimationFrame(this.rafId), (null == (e = this.gl) ? void 0 : e.canvas) && this.gl.canvas.parentNode && this.gl.canvas.parentNode.removeChild(this.gl.canvas); const i = null == (t = this.gl) ? void 0 : t.getExtension("WEBGL_lose_context"); i && i.loseContext(), this.renderer = null, this.gl = null } firstUpdated() { if (this.isTouchDevice) return; this._domCircle = this.shadowRoot.querySelector(".cursor-circle"), this._domDot = this.shadowRoot.querySelector(".cursor-dot"), this._domText = this.shadowRoot.querySelector(".cursor-text"), this.startAnimations() } startAnimations() { this.rafId = requestAnimationFrame(this.animate) } render() {
    return r`
      <div class="cursor-circle"></div>
      <div class="cursor-dot"></div>
      <div class="cursor-text"></div>
    `} _updateDomPositions(e, t) { if (this._lerpDot.x += (e - this._lerpDot.x) * this._AMT_DOT, this._lerpDot.y += (t - this._lerpDot.y) * this._AMT_DOT, this._lerpCircle.x += (e - this._lerpCircle.x) * this._AMT_CIRCLE, this._lerpCircle.y += (t - this._lerpCircle.y) * this._AMT_CIRCLE, this._domDot && (this._domDot.style.transform = `translate3d(${this._lerpDot.x}px, ${this._lerpDot.y}px, 0) translate3d(-50%, -50%, 0)`), this._domCircle) { const e = "hover-img" === this.currentMode ? " rotate(45deg)" : ""; this._domCircle.style.transform = `translate3d(${this._lerpCircle.x}px, ${this._lerpCircle.y}px, 0) translate3d(-50%, -50%, 0)${e}` } if (this._domText && (this._domText.style.transform = `translate3d(${this._lerpCircle.x}px, ${this._lerpCircle.y}px, 0) translate3d(-50%, -50%, 0)`), this._currentCursorScale = this._currentCursorScale || 1, this._currentCursorScale += .12 * ((this._targetCursorScale || 1) - this._currentCursorScale), this._domCircle) { const e = "hover-img" === this.currentMode ? " rotate(45deg)" : ""; this._domCircle.style.transform = `translate3d(${this._lerpCircle.x}px, ${this._lerpCircle.y}px, 0) translate3d(-50%, -50%, 0) scale(${this._currentCursorScale})${e}` } } _setDomMode(e, t = {}) { this.currentMode !== e && (this.currentMode = e, this.rawMode = e, this._domCircle && (this._domCircle.className = "cursor-circle", "default" !== e && this._domCircle.classList.add(`cursor-circle--${e}`), this._domCircle.style.borderColor = ""), this._domDot && (this._domDot.style.opacity = "hover-img" === e ? "0" : "1"), this._domText && (this._domText.style.color = "", this._domText.classList.remove("is-visible"), "hover-img" === e ? (this._domText.textContent = "DRAG ME", this._domText.classList.add("is-visible")) : "hover-w-d-img" === e || "hover-w-l-img" === e ? (this._domText.textContent = "VIEW", this._domText.classList.add("is-visible")) : "label" === e && t.label ? (this._domText.textContent = t.label, this._domText.style.color = t.color || "#fff", this._domCircle.style.borderColor = t.color || "#fff", this._domText.classList.add("is-visible")) : (this._domText.style.color = "", this._domText.classList.remove("is-visible"))), this._targetCursorScale = O[e] ?? 1) } _onMouseDown() { this._prevMode = this.currentMode, this._setDomMode("active") } _onMouseUp() { this._setDomMode(this._prevMode ?? "default") } initOGL() { this.setupRenderer(), this.setupSimulationParameters(), this.setupTextures(), this.setupGeometry(), this.setupPrograms(), this.setupScene(), this.setupEventListeners() } setupRenderer() { this.renderer = new c({ dpr: Math.min(window.devicePixelRatio, 1.5), alpha: !0 }), this.gl = this.renderer.gl, this.gl.clearColor(0, 0, 0, 0), this.configureCanvas(), this.renderer.setSize(window.innerWidth, window.innerHeight), this.camera = new d(this.gl), this.camera.position.z = 1 } configureCanvas() { const e = this.gl.canvas, t = Y; e.style.position = t.POSITION, e.style.top = t.TOP, e.style.left = t.LEFT, e.style.width = t.WIDTH, e.style.height = t.HEIGHT, e.style.pointerEvents = t.POINTER_EVENTS, e.style.zIndex = t.Z_INDEX, e.style.mixBlendMode = "multiply", document.body.appendChild(e) } setupSimulationParameters() { const e = U; this.simRes = e.SIM_RESOLUTION, this.dyeRes = e.DYE_RESOLUTION, this.iterations = e.ITERATIONS, this.densityDissipation = e.DENSITY_DISSIPATION, this.velocityDissipation = e.VELOCITY_DISSIPATION, this.pressureDissipation = e.PRESSURE_DISSIPATION, this.curlStrength = e.CURL_STRENGTH, this.texelSize = { value: new n(1 / this.simRes) } } setupTextures() { const e = this.getTextureFormats(), t = this.getFilteringMode(); this.density = this.createDensityBuffer(e.rgba, t), this.velocity = this.createVelocityBuffer(e.rg, t), this.pressure = this.createPressureBuffer(e.r), this.divergence = this.createDivergenceBuffer(e.r), this.curl = this.createCurlBuffer(e.r) } getTextureFormats() { const { gl: e } = this, t = e.renderer.isWebgl2; if (this.halfFloat = t ? e.HALF_FLOAT : e.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES, this.supportLinearFiltering = e.renderer.extensions[`OES_texture_${t ? "" : "half_"}float_linear`], t) return { rgba: Je(e, e.RGBA16F, e.RGBA, this.halfFloat), rg: Je(e, e.RG16F, e.RG, this.halfFloat), r: Je(e, e.R16F, e.RED, this.halfFloat) }; const i = Je(e, e.RGBA, e.RGBA, this.halfFloat); return { rgba: i, rg: i, r: i } } getFilteringMode() { return this.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST } createDensityBuffer(e, t) { return Qe(this.gl, { width: this.dyeRes, height: this.dyeRes, type: this.halfFloat, format: null == e ? void 0 : e.format, internalFormat: null == e ? void 0 : e.internalFormat, minFilter: t, depth: !1 }) } createVelocityBuffer(e, t) { return Qe(this.gl, { width: this.simRes, height: this.simRes, type: this.halfFloat, format: null == e ? void 0 : e.format, internalFormat: null == e ? void 0 : e.internalFormat, minFilter: t, depth: !1 }) } createPressureBuffer(e) { return Qe(this.gl, { width: this.simRes, height: this.simRes, type: this.halfFloat, format: null == e ? void 0 : e.format, internalFormat: null == e ? void 0 : e.internalFormat, minFilter: this.gl.NEAREST, depth: !1 }) } createDivergenceBuffer(e) { return new a(this.gl, { width: this.simRes, height: this.simRes, type: this.halfFloat, format: null == e ? void 0 : e.format, internalFormat: null == e ? void 0 : e.internalFormat, minFilter: this.gl.NEAREST, depth: !1 }) } createCurlBuffer(e) { return new a(this.gl, { width: this.simRes, height: this.simRes, type: this.halfFloat, format: null == e ? void 0 : e.format, internalFormat: null == e ? void 0 : e.internalFormat, minFilter: this.gl.NEAREST, depth: !1 }) } setupGeometry() { this.triangle = new h(this.gl, { position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) }, uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) } }) } setupPrograms() { this.clearProgram = this.createClearProgram(), this.splatProgram = this.createSplatProgram(), this.advectionProgram = this.createAdvectionProgram(), this.divergenceProgram = this.createDivergenceProgram(), this.curlProgram = this.createCurlProgram(), this.vorticityProgram = this.createVorticityProgram(), this.pressureProgram = this.createPressureProgram(), this.gradientSubtractProgram = this.createGradientSubtractProgram(), this.compositeMesh = this.createCompositeProgram() } createClearProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision mediump float;\n  precision mediump sampler2D;\n  varying highp vec2 vUv;\n  uniform sampler2D uTexture;\n  uniform float value;\n  void main () {\n    gl_FragColor = value * texture2D(uTexture, vUv);\n  }\n", uniforms: { texelSize: this.texelSize, uTexture: { value: null }, value: { value: this.pressureDissipation } }, depthTest: !1, depthWrite: !1 }) }) } createSplatProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision highp float;\n  precision highp sampler2D;\n  varying vec2 vUv;\n  uniform sampler2D uTarget;\n  uniform float aspectRatio;\n  uniform vec3 color;\n  uniform vec2 point;\n  uniform float radius;\n  void main () {\n    vec2 p = vUv - point.xy;\n    p.x *= aspectRatio;\n    vec3 splat = exp(-dot(p, p) / radius) * color;\n    vec3 base = texture2D(uTarget, vUv).xyz;\n    gl_FragColor = vec4(base + splat, 1.0);\n  }\n", uniforms: { texelSize: this.texelSize, uTarget: { value: null }, aspectRatio: { value: 1 }, color: { value: this.color }, point: { value: this.pointer }, radius: { value: this.fluidRadius / 10 } }, depthTest: !1, depthWrite: !1 }) }) } createAdvectionProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision highp float;\n  precision highp sampler2D;\n  varying vec2 vUv;\n  uniform sampler2D uVelocity;\n  uniform sampler2D uSource;\n  uniform vec2 texelSize;\n  uniform vec2 dyeTexelSize;\n  uniform float dt;\n  uniform float dissipation;\n  vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n    vec2 st = uv / tsize - 0.5;\n    vec2 iuv = floor(st);\n    vec2 fuv = fract(st);\n    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n  }\n  void main () {\n    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n    gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n    gl_FragColor.a = 1.0;\n  }\n", uniforms: { texelSize: this.texelSize, dyeTexelSize: { value: new n(1 / this.dyeRes) }, uVelocity: { value: null }, uSource: { value: null }, dt: { value: .016 }, dissipation: { value: 1 } }, depthTest: !1, depthWrite: !1 }) }) } createDivergenceProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision mediump float;\n  precision mediump sampler2D;\n  varying highp vec2 vUv;\n  varying highp vec2 vL;\n  varying highp vec2 vR;\n  varying highp vec2 vT;\n  varying highp vec2 vB;\n  uniform sampler2D uVelocity;\n  void main () {\n    float L = texture2D(uVelocity, vL).x;\n    float R = texture2D(uVelocity, vR).x;\n    float T = texture2D(uVelocity, vT).y;\n    float B = texture2D(uVelocity, vB).y;\n    vec2 C = texture2D(uVelocity, vUv).xy;\n    if (vL.x < 0.0) { L = -C.x; }\n    if (vR.x > 1.0) { R = -C.x; }\n    if (vT.y > 1.0) { T = -C.y; }\n    if (vB.y < 0.0) { B = -C.y; }\n    float div = 0.5 * (R - L + T - B);\n    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n  }\n", uniforms: { texelSize: this.texelSize, uVelocity: { value: null } }, depthTest: !1, depthWrite: !1 }) }) } createCurlProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision mediump float;\n  precision mediump sampler2D;\n  varying highp vec2 vUv;\n  varying highp vec2 vL;\n  varying highp vec2 vR;\n  varying highp vec2 vT;\n  varying highp vec2 vB;\n  uniform sampler2D uVelocity;\n  void main () {\n    float L = texture2D(uVelocity, vL).y;\n    float R = texture2D(uVelocity, vR).y;\n    float T = texture2D(uVelocity, vT).x;\n    float B = texture2D(uVelocity, vB).x;\n    float vorticity = R - L - T + B;\n    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n  }\n", uniforms: { texelSize: this.texelSize, uVelocity: { value: null } }, depthTest: !1, depthWrite: !1 }) }) } createVorticityProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision highp float;\n  precision highp sampler2D;\n  varying vec2 vUv;\n  varying vec2 vL;\n  varying vec2 vR;\n  varying vec2 vT;\n  varying vec2 vB;\n  uniform sampler2D uVelocity;\n  uniform sampler2D uCurl;\n  uniform float curl;\n  uniform float dt;\n  void main () {\n    float L = texture2D(uCurl, vL).x;\n    float R = texture2D(uCurl, vR).x;\n    float T = texture2D(uCurl, vT).x;\n    float B = texture2D(uCurl, vB).x;\n    float C = texture2D(uCurl, vUv).x;\n    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n    force /= length(force) + 0.0001;\n    force *= curl * C;\n    force.y *= -1.0;\n    vec2 vel = texture2D(uVelocity, vUv).xy;\n    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n  }\n", uniforms: { texelSize: this.texelSize, uVelocity: { value: null }, uCurl: { value: null }, curl: { value: this.curlStrength }, dt: { value: .016 } }, depthTest: !1, depthWrite: !1 }) }) } createPressureProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision mediump float;\n  precision mediump sampler2D;\n  varying highp vec2 vUv;\n  varying highp vec2 vL;\n  varying highp vec2 vR;\n  varying highp vec2 vT;\n  varying highp vec2 vB;\n  uniform sampler2D uPressure;\n  uniform sampler2D uDivergence;\n  void main () {\n    float L = texture2D(uPressure, vL).x;\n    float R = texture2D(uPressure, vR).x;\n    float T = texture2D(uPressure, vT).x;\n    float B = texture2D(uPressure, vB).x;\n    float divergence = texture2D(uDivergence, vUv).x;\n    float pressure = (L + R + B + T - divergence) * 0.25;\n    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n  }\n", uniforms: { texelSize: this.texelSize, uPressure: { value: null }, uDivergence: { value: null } }, depthTest: !1, depthWrite: !1 }) }) } createGradientSubtractProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision mediump float;\n  precision mediump sampler2D;\n  varying highp vec2 vUv;\n  varying highp vec2 vL;\n  varying highp vec2 vR;\n  varying highp vec2 vT;\n  varying highp vec2 vB;\n  uniform sampler2D uPressure;\n  uniform sampler2D uVelocity;\n  void main () {\n    float L = texture2D(uPressure, vL).x;\n    float R = texture2D(uPressure, vR).x;\n    float T = texture2D(uPressure, vT).x;\n    float B = texture2D(uPressure, vB).x;\n    vec2 velocity = texture2D(uVelocity, vUv).xy;\n    velocity.xy -= vec2(R - L, T - B);\n    gl_FragColor = vec4(velocity, 0.0, 1.0);\n  }\n", uniforms: { texelSize: this.texelSize, uPressure: { value: null }, uVelocity: { value: null } }, depthTest: !1, depthWrite: !1 }) }) } createCompositeProgram() { return new p(this.gl, { geometry: this.triangle, program: new m(this.gl, { vertex: H, fragment: "\n  precision highp float;\n\n  uniform sampler2D tFluid;\n  uniform float uIntensity;\n  uniform float uTime;\n\n  varying vec2 vUv;\n  varying vec2 vL;\n  varying vec2 vR;\n  varying vec2 vT;\n  varying vec2 vB;\n\n  void main() {\n    vec2 v = texture2D(tFluid, vUv).xy;\n    float speed = length(v) * 2.0;\n\n    float c = speed;\n    float l = length(texture2D(tFluid, vL).xy);\n    float r = length(texture2D(tFluid, vR).xy);\n    float t = length(texture2D(tFluid, vT).xy);\n    float b = length(texture2D(tFluid, vB).xy);\n\n    float edge = abs((r - c) - (c - l)) + abs((t - c) - (c - b));\n\n    float curlL = texture2D(tFluid, vL).y;\n    float curlR = texture2D(tFluid, vR).y;\n    float curlT = texture2D(tFluid, vT).x;\n    float curlB = texture2D(tFluid, vB).x;\n    float curl = (curlR - curlL + curlB - curlT) * 0.5;\n\n    float hueShift = sin(uTime * 2.0 + curl * 10.0) * 0.5 + 0.5;\n\n    vec3 color1 = vec3(0.88, 0.90, 0.94);\n    vec3 color2 = vec3(0.82, 0.78, 0.88);\n\n    vec3 baseColor = mix(color1, color2, hueShift);\n\n    float spark = sin(dot(v, vUv) * 100.0 + uTime * 20.0) * 0.5 + 0.5;\n    spark = pow(spark, 2.0) * speed * 2.0;\n\n    float intensity = speed * 0.12 + edge * 0.2 + spark * 0.3;\n    intensity *= uIntensity;\n    intensity = clamp(intensity, 0.0, 1.0);\n\n    vec3 glow = vec3(0.95, 0.96, 1.0) * speed * 0.45;\n\n    gl_FragColor = vec4(baseColor * 0.7 + glow, intensity);\n  }\n", uniforms: { texelSize: this.texelSize, tFluid: { value: null }, uIntensity: { value: this.fluidIntensity }, uTime: { value: 0 } }, depthTest: !1, depthWrite: !1, transparent: !0 }) }) } setupScene() { this.scene = new u, this.scene.addChild(this.compositeMesh) } setupEventListeners() { window.addEventListener("mousemove", this.handleMouseMove, { passive: !0 }), this.handleResize() } handleMouseMove(e) { if (this.nativeCursorEnabled) return; this.hasMouseMovement = !0, this.coords.x = e.clientX, this.coords.y = e.clientY; const t = this.getNormalizedCoords(e); this.isPreviousMouseSet() && this.processSplatInput(t), this.prevMouse = t } updateCoords(e) { this.coords.x = e.clientX, this.coords.y = e.clientY } getNormalizedCoords(e) { return { x: e.clientX / window.innerWidth, y: 1 - e.clientY / window.innerHeight } } isPreviousMouseSet() { return 0 !== this.prevMouse.x || 0 !== this.prevMouse.y } processSplatInput(e) { const t = B, i = this.calculateDelta(e), r = this.getForceMult(), o = this.calculateSpeed(i); o > t.MIN_SPEED_THRESHOLD && (this.addSplat(e, i, r), this.updateColor(i, r, o)) } calculateDelta(e) { const { VELOCITY_MULTIPLIER: t } = B; return { dx: (e.x - this.prevMouse.x) * t, dy: (e.y - this.prevMouse.y) * t } } getForceMult() { return 1 } calculateSpeed(e) { return Math.sqrt(e.dx * e.dx + e.dy * e.dy) } addSplat(e, t, i) { this.splatStack.push({ x: e.x, y: e.y, dx: t.dx * i, dy: t.dy * i }) } updateColor(e, t, i) { const { COLOR_INTENSITY: r, COLOR_OFFSET: o, SPEED_TO_COLOR: s } = B; this.color.set(e.dx * t * r + o, e.dy * t * r + o, Math.min(i * s, 1)) } handleResize() { this.renderer && (this.renderer.setSize(window.innerWidth, window.innerHeight), this.camera.perspective({ aspect: window.innerWidth / window.innerHeight })) } splat({ x: e, y: t, dx: i, dy: r }) { this.splatProgram.program.uniforms.uTarget.value = this.velocity.read.texture, this.splatProgram.program.uniforms.aspectRatio.value = window.innerWidth / window.innerHeight, this.splatProgram.program.uniforms.point.value.set(e, t), this.splatProgram.program.uniforms.color.value.set(i, r, 0), this.renderPass(this.splatProgram, this.velocity.write), this.velocity.swap() } renderPass(e, t) { this.gl.renderer.render({ scene: e, target: t, sort: !1, update: !1 }) } animate() { this.rafId = requestAnimationFrame(this.animate), this.renderer && (this._updateDomPositions(this.coords.x, this.coords.y), this.nativeCursorEnabled || (this.updateTime(), this.processSplatStack(), this.hasMouseMovement && (this.runFluidSimulation(), this.renderComposite()))) } updateTime() { const e = performance.now(); this.dt = Math.min(.016, (e - this.clock.last) / 1e3), this.clock.last = e } processSplatStack() { for (; this.splatStack.length;)this.splat(this.splatStack.shift()) } runFluidSimulation() { this.gl.renderer.autoClear = !1, this.computeCurl(), this.applyVorticity(), this.computeDivergence(), this.clearPressure(), this.solvePressure(), this.subtractGradient(), this.advectVelocity() } computeCurl() { this.curlProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderPass(this.curlProgram, this.curl) } applyVorticity() { this.vorticityProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.vorticityProgram.program.uniforms.uCurl.value = this.curl.texture, this.renderPass(this.vorticityProgram, this.velocity.write), this.velocity.swap() } computeDivergence() { this.divergenceProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderPass(this.divergenceProgram, this.divergence) } clearPressure() { this.clearProgram.program.uniforms.uTexture.value = this.pressure.read.texture, this.renderPass(this.clearProgram, this.pressure.write), this.pressure.swap() } solvePressure() { this.pressureProgram.program.uniforms.uDivergence.value = this.divergence.texture; for (let e = 0; e < this.iterations; e++)this.pressureProgram.program.uniforms.uPressure.value = this.pressure.read.texture, this.renderPass(this.pressureProgram, this.pressure.write), this.pressure.swap() } subtractGradient() { this.gradientSubtractProgram.program.uniforms.uPressure.value = this.pressure.read.texture, this.gradientSubtractProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderPass(this.gradientSubtractProgram, this.velocity.write), this.velocity.swap() } advectVelocity() { this.advectionProgram.program.uniforms.dyeTexelSize.value.set(1 / this.simRes), this.advectionProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.advectionProgram.program.uniforms.uSource.value = this.velocity.read.texture, this.advectionProgram.program.uniforms.dissipation.value = this.velocityDissipation, this.advectionProgram.program.uniforms.dt.value = this.dt, this.renderPass(this.advectionProgram, this.velocity.write), this.velocity.swap() } renderComposite() { this.compositeMesh.program.uniforms.uTime.value = .001 * this.clock.last, this.compositeMesh.program.uniforms.tFluid.value = this.velocity.read.texture, this.compositeMesh.program.uniforms.uIntensity.value = this.fluidIntensity, this.gl.renderer.autoClear = !0, this.gl.renderer.render({ scene: this.scene, target: null }) } animateCircles() { if (!this.circles) return; const { x: e, y: t } = this.coords, i = this.isHoverMode(), r = V.CIRCLE_OFFSET; this.updateCirclePositions(e, t, i, r), this.updateCursorTextPosition(r), this.circlesRafId = requestAnimationFrame(this.animateCircles) } isHoverMode() { return "default" !== this.currentMode && "active" !== this.currentMode } updateCirclePositions(e, t, i, r) { let o = e, s = t; this.circles.forEach((e, t) => { this.updateCircleScale(t), this.applyCircleTransform(e, o, s, r, t); const a = this.circles[t + 1] || this.circles[0], n = this.getFollowSpeed(i); o += (a.x - o) * n, s += (a.y - s) * n }) } updateCircleScale(e) { this.targetScales[e] = this.getTargetScale(e), this.currentScales[e] = this.lerp(this.currentScales[e], this.targetScales[e], V.CIRCLE_LERP_FACTOR) } applyCircleTransform(e, t, i, r, o) { const s = this.currentScales[o]; e.style.transform = `translate3d(${t - r}px, ${i - r}px, 0) scale(${s})`, e.x = t, e.y = i } getFollowSpeed(e) { const t = V; return e ? t.HOVER_FOLLOW_SPEED : t.DEFAULT_FOLLOW_SPEED } updateCursorTextPosition(e) { this.cursorText && (this.cursorText.style.transform = `translate3d(${this.coords.x - e}px, ${this.coords.y - e}px, 0)`) } getTargetScale(e) { const t = this.isHoverMode(); return this.getBaseScale(t, e) * this.getModeScale(e) } getBaseScale(e, t) { return e ? 1 : (this.circles.length - t) / this.circles.length } getModeScale(e) { const t = N[this.currentMode] || { all: 1 }; return "all" in t ? t.all : 0 === e ? t.first : t.rest } lerp(e, t, i) { return e + (t - e) * i } updateCursorStyle() { if (!this.circles) return; const e = this.isHoverMode(); this.circles.forEach((t, i) => { this.updateCircleClassName(t), this.updateCircleVisibility(t, i, e) }), this.updateCursorText() } updateCircleClassName(e) { e.className = e.className.replace(/circle--\w+/g, "").trim(), "default" !== this.currentMode && e.classList.add(`circle--${this.currentMode}`) } updateCircleVisibility(e, t, i) { const r = V; "blob" !== this.currentMode ? i ? (e.style.opacity = 0 === t ? "1" : "0", e.style.transitionDelay = 0 === t ? "0s" : t * r.TRANSITION_DELAY_MULT + "s") : (e.style.opacity = "1", e.style.transitionDelay = t * r.TRANSITION_DELAY_MULT_DEFAULT + "s") : e.style.opacity = "0" } updateCursorText() { this.cursorText && ("hover-img" === this.rawMode ? (this.cursorText.classList.add("active"), this.cursorText.textContent = "DRAG ME") : this.cursorText.classList.remove("active")) } getPosition() { return { x: this.coords.x, y: this.coords.y } }
} t(Ze, "styles", o`
    :host {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 20;
    }

    .cursor-circle {
      position: fixed;
      top: 0;
      left: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      transform: translate3d(-50%, -50%, 0);
      pointer-events: none;
      will-change: transform;
      border: 1px solid #1c1d20;
      transition:
        opacity 0.3s ease,
        transform 0.05s ease,
        background-color 0.3s ease;
    }

    .cursor-circle.cursor-circle--filled {
      background-color: rgba(0, 0, 0, 0.08);
    }

    .cursor-circle.cursor-circle--hover-img,
    .cursor-circle.cursor-circle--hover-w-d-img {
      /* width: 94px;
      height: 94px; */
      border-color: rgba(255, 255, 255, 0.9);
      background-color: rgba(255, 255, 255, 0.15);
    }

    .cursor-circle.cursor-circle--hover-outro {
      border-color: #fff;
    }

    .cursor-circle.cursor-circle--hover-outro + .cursor-dot {
      background: #fff;
    }

    .cursor-circle.cursor-circle--hover-w-d-img + .cursor-dot,
    .cursor-circle.cursor-circle--hover-w-l-img + .cursor-dot {
      display: none;
    }

    .cursor-circle.cursor-circle--hover-w-l-img {
      /* width: 94px;
      height: 94px; */
      border-color: rgba(0, 0, 0, 0.8);
      background-color: rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(2px);
    }

    .cursor-circle.cursor-circle--hover-link {
      /* width: 48px;
      height: 48px; */
      border-color: rgba(0, 0, 0, 0.6);
    }

    .cursor-circle.cursor-circle--active {
      /* width: 22px;
      height: 22px; */
      background-color: rgba(0, 0, 0, 0.15);
    }

    .cursor-circle.cursor-circle--hover-cta {
      display: none;
    }

    .cursor-circle.cursor-circle--hover-img-p {
      /* width: 24px;
      height: 24px; */
      border-radius: 0;
      border-color: rgba(254, 233, 206, 0.9);
      background-color: rgba(254, 233, 206, 0.12);
    }

    /* .cursor-circle.cursor-circle--hover-w-title {
      width: 100px;
      height: 100px;
    }

    .cursor-circle.cursor-circle--hover-nav {
      width: 50px;
      height: 50px;
    } */

    .cursor-circle.cursor-circle--label {
      /* width: 80px;
      height: 80px; */
      border-color: v-bind;
    }

    .cursor-circle.cursor-circle--label {
      /* width: 80px;
      height: 80px; */
      background-color: transparent;
    }

    .cursor-circle.cursor-circle--label + .cursor-dot {
      display: none;
    }

    .cursor-dot {
      position: fixed;
      top: 0;
      left: 0;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #000;
      transform: translate3d(-50%, -50%, 0);
      pointer-events: none;
      transition:
        opacity 0.2s ease,
        width 0.2s ease,
        height 0.2s ease;
    }

    .cursor-circle.cursor-circle--hover-img + .cursor-dot {
      background: #fff;
    }

    .cursor-text {
      position: fixed;
      top: 0;
      left: 0;
      transform: translate3d(-50%, -50%, 0);
      pointer-events: none;
      font-family: 'Neue Montreal', sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #000;
      opacity: 0;
      transition: opacity 0.2s ease;
      white-space: nowrap;
      user-select: none;
    }

    .cursor-text.is-visible {
      opacity: 1;
      color: #fff;
    }
  `), customElements.define("custom-cursor", Ze); class et { constructor(e) { this.app = e, this.isTransitioning = !1, this._clickHandler = null, this._popHandler = null } init() { this._clickHandler = e => { const t = e.composedPath().find(e => { var t; return e instanceof HTMLAnchorElement && (null == (t = e.getAttribute("href")) ? void 0 : t.startsWith("/")) }); if (!t) return; e.preventDefault(); const i = t.getAttribute("href"); this.navigate(i) }, this._navbarClickHandler = ({ url: e }) => { e && this.navigate(e) }, this._popHandler = () => { this.navigate(window.location.pathname, { updateHistory: !1 }) }, document.addEventListener("click", this._clickHandler), window.addEventListener("popstate", this._popHandler), S.on("navbar:click", this._navbarClickHandler) } async navigate(e, { updateHistory: t = !0 } = {}) { var i; if (!this.isTransitioning && e !== this.app.currentPage) { this.isTransitioning = !0, function () { var e; document.body.classList.add("is-transitioning"), null == (e = document.getElementById("interaction-lock")) || e.classList.add("is-active") }(), W.pageReady = !1, S.emit("page:covered", { url: e }), null == (i = this.app.prefetcher) || i.preloadRouteEager(e); try { await this.app.modules.transition.cover(e), await this.app.loadPage(e, t), this.app.resetScrollBeforeTransition(), await this.app.waitForPageReady(), await this.app.modules.transition.reveal() } catch (r) { await this.app.modules.transition.reveal() } finally { this.isTransitioning = !1, function () { var e; document.body.classList.remove("is-transitioning"), null == (e = document.getElementById("interaction-lock")) || e.classList.remove("is-active") }() } } } destroy() { document.removeEventListener("click", this._clickHandler), window.removeEventListener("popstate", this._popHandler), S.off("navbar:click", this._navbarClickHandler) } } class tt { constructor() { this.modules = {}, this.currentPage = window.location.pathname || "/", this.animationQueue = [], this.isPreloaderComplete = !1, this.isFirstLoad = !0, this.pageLoadState = {}, this._queuedComponents = new Set, this._prefetched = new Set, this.init() } async init() { var e; await (null == (e = document.fonts) ? void 0 : e.ready), this.isFirstLoad && (this.modules.preloader = new $({ onComplete: () => this.onPreloaderComplete() })), this.modules.transition = new G, this.modules.pages = He, this.loadPage(this.currentPage), this.isFirstLoad = !1, S.on("transition:start", () => { w.getAll().forEach(e => { e.disable(!1) }) }), S.on("transition:end", () => { w.getAll().forEach(e => { e.enable(!1) }) }), this.coordinator = new et(this), this.coordinator.init() } resetScrollBeforeTransition() { var e; (null == (e = window.currentAnimation) ? void 0 : e.lenis) && window.currentAnimation.lenis.scrollTo(0, { immediate: !0 }); const t = document.querySelector(".scroll-container"); t && (t.scrollTop = 0), window.scrollTo(0, 0) } waitForPageReady() { return W.pageReady ? Promise.resolve() : new Promise(e => S.once("page:ready", e)) } async loadPage(e, t = !0) { try { const { page: i, params: r } = this.resolveRoute(e); t && window.history.pushState({}, "", e), document.title = j[e] || "Nithin - Error", this.currentPage = e, this.pageLoadState[e] = !0; const o = this.modules.pages[i], s = await o(r); this.renderPage(s) } catch (i) { } } resolveRoute(e) { const t = e.split("?")[0].split("#")[0]; return "/" === t ? { page: "home", params: {} } : "/about" === t ? { page: "about", params: {} } : "/works" === t ? { page: "work", params: {} } : "/contact" === t ? { page: "contact", params: {} } : t.startsWith("/works/") ? { page: "project", params: { slug: t.replace("/works/", "") } } : { page: "notFound", params: {} } } renderPage(e) { const t = document.querySelector(".container"); t && ("string" == typeof e ? g(r`${v(e)}`, t) : ((null == e ? void 0 : e.strings) || e instanceof HTMLElement) && g(e, t)) } removeInitialShell() { [".preloader", ".split-overlay", ".tags-overlay"].forEach(e => { const t = document.querySelector(e); t && (t.style.pointerEvents = "none", t.remove()) }) } onPreloaderComplete() { this.isPreloaderComplete = !0, sessionStorage.setItem("preloader_seen", "1"), this.removeInitialShell(), this.processAnimationQueue() } triggerAnimationsOnSlide() { this.isPreloaderComplete = !0, this.processAnimationQueue() } queueAnimation(e, t = "unknown") { this.isPreloaderComplete ? e() : this._queuedComponents.has(t) || (this._queuedComponents.add(t), this.animationQueue.push(e)) } processAnimationQueue() { this.animationQueue.forEach(e => e()), this.animationQueue = [], this._queuedComponents.clear() } } document.addEventListener("DOMContentLoaded", () => { window.app = new tt });
































