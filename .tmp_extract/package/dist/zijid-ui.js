import { defineComponent as h, computed as y, openBlock as o, createElementBlock as i, normalizeStyle as R, Fragment as V, renderList as C, normalizeClass as Z, createElementVNode as c, createBlock as g, createCommentVNode as _, renderSlot as w, createTextVNode as T, toDisplayString as z, ref as M, onMounted as ne, onUnmounted as X, withKeys as ae, withModifiers as O, createVNode as k, watch as le, withDirectives as _e, vShow as be, withCtx as F, resolveComponent as we } from "vue";
const j = {
  home: ["M3 10.5 12 3l9 7.5", "M5 9.5V21h5v-6h4v6h5V9.5"],
  search: ["M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z", "M16 16l5 5"],
  settings: [
    "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
    "M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.07a2 2 0 0 1-2.83 2.83l-.07-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.08a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.07.06a2 2 0 0 1-2.83-2.83l.06-.07A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.08a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.07a2 2 0 0 1 2.83-2.83l.07.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.08a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.07-.06a2 2 0 0 1 2.83 2.83l-.06.07A1.7 1.7 0 0 0 19.4 9c.22.6.83 1 1.55 1H21a2 2 0 0 1 0 4h-.08a1.7 1.7 0 0 0-1.52 1Z"
  ],
  user: ["M20 21a8 8 0 0 0-16 0", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"],
  folder: ["M3 6.5h6l2 2h10V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5Z", "M3 6.5V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1.5"],
  file: ["M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z", "M14 3v6h6"],
  close: ["M6 6l12 12", "M18 6 6 18"],
  minimize: ["M5 12h14"],
  maximize: ["M6 6h12v12H6Z"],
  restore: ["M8 8h10v10H8Z", "M6 16H5V5h11v1"],
  "window-minimize": ["M7 16h10"],
  "window-maximize": ["M8 8h8v8H8Z"],
  "window-restore": ["M9 10h7v7H9Z", "M8 14H7V7h7v1"],
  "window-close": ["M8 8l8 8", "M16 8l-8 8"],
  check: ["M20 6 9 17l-5-5"],
  info: ["M12 17v-6", "M12 7h.01", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"],
  warning: ["M12 9v4", "M12 17h.01", "M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"],
  error: ["M15 9l-6 6", "M9 9l6 6", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"],
  plus: ["M12 5v14", "M5 12h14"],
  minus: ["M5 12h14"],
  "arrow-left": ["M19 12H5", "M12 19l-7-7 7-7"],
  "arrow-right": ["M5 12h14", "M12 5l7 7-7 7"],
  "arrow-up": ["M12 19V5", "M5 12l7-7 7 7"],
  "arrow-down": ["M12 5v14", "M19 12l-7 7-7-7"],
  refresh: ["M21 12a9 9 0 0 1-15.3 6.4L3 16", "M3 21v-5h5", "M3 12A9 9 0 0 1 18.3 5.6L21 8", "M21 3v5h-5"],
  download: ["M12 3v12", "M7 10l5 5 5-5", "M5 21h14"],
  upload: ["M12 21V9", "M7 14l5-5 5 5", "M5 3h14"],
  trash: ["M4 7h16", "M10 11v6", "M14 11v6", "M6 7l1 14h10l1-14", "M9 7V4h6v3"],
  edit: ["M4 20h4L19 9l-4-4L4 16v4Z", "M13 7l4 4"],
  save: ["M5 3h12l2 2v16H5Z", "M8 3v6h8V3", "M8 21v-7h8v7"],
  lock: ["M7 11V8a5 5 0 0 1 10 0v3", "M5 11h14v10H5Z"],
  unlock: ["M7 11V8a5 5 0 0 1 9.5-2.2", "M5 11h14v10H5Z"],
  calendar: ["M7 3v4", "M17 3v4", "M4 8h16", "M5 5h14a1 1 0 0 1 1 1v15H4V6a1 1 0 0 1 1-1Z"],
  clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 6v6l4 2"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  star: ["M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2 7.5 14 3 9.6l6.2-.9Z"],
  heart: ["M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z"],
  window: ["M3 5h18v14H3Z", "M3 9h18", "M7 7h.01", "M10 7h.01"],
  cursor: ["M5 3l14 8-6 2.2L15.8 20l-2.8 1.2-2.8-6.8L5 18V3Z"],
  "menu-down": ["M7 10l5 5 5-5"],
  square: ["M6 6h12v12H6Z"],
  "circle-progress": ["M12 3a9 9 0 1 0 9 9", "M12 3v4"],
  "radio-button-on": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],
  "toggle-left": ["M8 7h8a5 5 0 0 1 0 10H8A5 5 0 0 1 8 7Z", "M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"],
  tab: ["M4 6h6l2 4h8v8H4V6Z"],
  slider: ["M4 7h10", "M18 7h2", "M4 17h2", "M10 17h10", "M14 5v4", "M8 15v4"],
  "text-box": ["M5 4h14v16H5Z", "M8 8h8", "M8 12h8", "M8 16h5"],
  bell: ["M6 9a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z", "M10 21h4"],
  list: ["M8 6h12", "M8 12h12", "M8 18h12", "M4 6h.01", "M4 12h.01", "M4 18h.01"],
  hamburger: ["M4 7h16", "M4 12h16", "M4 17h16"],
  tree: ["M12 4v6", "M8 10h8", "M8 10v6", "M16 10v6", "M6 20h4v-4H6Z", "M14 20h4v-4h-4Z"],
  columns: ["M4 5h16v14H4Z", "M12 5v14"],
  desktop: ["M3 5h18v12H3Z", "M9 21h6", "M12 17v4"],
  "dock-bottom": ["M4 4h16v16H4Z", "M4 15h16"],
  windows: ["M4 5l7-1v8H4Z", "M13 4l7-1v9h-7Z", "M4 14h7v6l-7-1Z", "M13 14h7v7l-7-1Z"],
  "file-image": ["M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z", "M14 3v6h6", "M8 15l2-2 2 2 2-3 3 4H7Z"],
  "context-menu": ["M5 7h14", "M5 12h14", "M5 17h8", "M17 17h.01"],
  scroll: ["M7 4h10a2 2 0 0 1 2 2v12a3 3 0 0 1-3 3H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z", "M9 8h6", "M9 12h6", "M9 16h4"],
  tools: ["M14.7 6.3l3-3 3 3-3 3", "M4 20l7-7", "M13 5l6 6"],
  eye: ["M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],
  "eye-off": ["M3 3l18 18", "M10.6 10.6a2 2 0 0 0 2.8 2.8", "M9.9 4.2A10.8 10.8 0 0 1 12 4c6 0 10 8 10 8a17.2 17.2 0 0 1-3.2 4.2", "M6.1 6.1C3.6 8 2 12 2 12s4 8 10 8c1.5 0 2.8-.4 4-1"]
}, zn = Object.keys(j), ze = ["d"], $ = /* @__PURE__ */ h({
  name: "ZIcon",
  __name: "ZIcon",
  props: {
    name: {},
    size: { default: 16 },
    color: { default: "currentColor" }
  },
  setup(e) {
    const l = e, n = y(() => j[l.name] ?? j.info), s = y(() => ({
      width: typeof l.size == "number" ? `${l.size}px` : l.size,
      height: typeof l.size == "number" ? `${l.size}px` : l.size,
      color: l.color
    }));
    return (a, t) => (o(), i("svg", {
      class: "z-icon",
      style: R(s.value),
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true"
    }, [
      (o(!0), i(V, null, C(n.value, (m) => (o(), i("path", {
        key: m,
        d: m
      }, null, 8, ze))), 128))
    ], 4));
  }
}), Me = ["disabled", "autofocus", "type"], $e = { class: "z-button__content" }, ye = {
  key: 1,
  class: "z-button__text"
}, K = /* @__PURE__ */ h({
  name: "ZButton",
  __name: "ZButton",
  props: {
    type: { default: "default" },
    size: { default: "medium" },
    nativeType: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const n = e, s = l, a = y(() => n.size === "small" ? 12 : n.size === "large" ? 16 : 14);
    function t(m) {
      s("click", m);
    }
    return (m, p) => (o(), i("button", {
      class: Z(["z-button", [
        `z-button--${e.type}`,
        e.size !== "medium" ? `z-button--${e.size}` : "",
        { "is-loading": e.loading }
      ]]),
      disabled: e.disabled || e.loading,
      autofocus: e.autofocus,
      type: e.nativeType,
      onClick: t
    }, [
      c("span", $e, [
        e.icon && !e.loading ? (o(), g($, {
          key: 0,
          name: e.icon,
          size: a.value
        }, null, 8, ["name", "size"])) : _("", !0),
        m.$slots.default ? (o(), i("span", ye, [
          w(m.$slots, "default")
        ])) : _("", !0)
      ])
    ], 10, Me));
  }
}), ke = ["checked", "disabled"], Ze = { class: "z-checkbox__label" }, xe = /* @__PURE__ */ h({
  name: "ZCheckbox",
  __name: "ZCheckbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("label", {
      class: Z(["z-checkbox", { "z-checkbox--disabled": e.disabled }])
    }, [
      c("input", {
        class: "z-checkbox__input",
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: a[0] || (a[0] = (t) => n("update:modelValue", t.target.checked))
      }, null, 40, ke),
      a[1] || (a[1] = c("span", { class: "z-checkbox__box" }, null, -1)),
      c("span", Ze, [
        w(s.$slots, "default", {}, () => [
          T(z(e.label), 1)
        ])
      ])
    ], 2));
  }
}), ge = { key: 0 }, Ve = ["disabled", "onClick"], Ce = /* @__PURE__ */ h({
  name: "ZContextMenu",
  __name: "ZContextMenu",
  props: {
    visible: { type: Boolean },
    x: {},
    y: {},
    items: {}
  },
  emits: ["select", "close"],
  setup(e, { emit: l }) {
    const n = l, s = M(null);
    function a(p) {
      n("select", p), n("close");
    }
    function t(p) {
      s.value && (s.value.contains(p.target) || n("close"));
    }
    function m(p) {
      p.key === "Escape" && n("close");
    }
    return ne(() => {
      document.addEventListener("click", t), document.addEventListener("keydown", m);
    }), X(() => {
      document.removeEventListener("click", t), document.removeEventListener("keydown", m);
    }), (p, b) => e.visible ? (o(), i("ul", {
      key: 0,
      ref_key: "menuRef",
      ref: s,
      class: "z-context-menu",
      style: R({ left: `${e.x}px`, top: `${e.y}px` }),
      onKeydown: b[0] || (b[0] = ae((f) => n("close"), ["esc"]))
    }, [
      (o(!0), i(V, null, C(e.items, (f) => (o(), i("li", {
        key: f.id
      }, [
        f.separator ? (o(), i("hr", ge)) : (o(), i("button", {
          key: 1,
          type: "button",
          disabled: f.disabled,
          onClick: (d) => a(f.id)
        }, [
          f.icon ? (o(), g($, {
            key: 0,
            name: f.icon,
            size: 16
          }, null, 8, ["name"])) : _("", !0),
          c("span", null, z(f.label), 1)
        ], 8, Ve))
      ]))), 128))
    ], 36)) : _("", !0);
  }
}), Be = { class: "z-desktop__icons" }, Ie = { class: "z-desktop__windows" }, Se = /* @__PURE__ */ h({
  name: "ZDesktop",
  __name: "ZDesktop",
  emits: ["contextmenu"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("section", {
      class: "z-desktop",
      onContextmenu: a[0] || (a[0] = O((t) => n("contextmenu", t), ["prevent"]))
    }, [
      c("div", Be, [
        w(s.$slots, "icons")
      ]),
      c("div", Ie, [
        w(s.$slots, "default")
      ]),
      w(s.$slots, "overlay")
    ], 32));
  }
}), Le = /* @__PURE__ */ h({
  name: "ZDesktopIcon",
  __name: "ZDesktopIcon",
  props: {
    label: {},
    icon: {},
    selected: { type: Boolean }
  },
  emits: ["select", "open", "contextmenu"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("button", {
      class: Z(["z-desktop-icon", { "z-desktop-icon--selected": e.selected }]),
      type: "button",
      onClick: a[0] || (a[0] = (t) => n("select")),
      onDblclick: a[1] || (a[1] = (t) => n("open")),
      onContextmenu: a[2] || (a[2] = O((t) => n("contextmenu", t), ["prevent"]))
    }, [
      k($, {
        name: e.icon,
        size: 32
      }, null, 8, ["name"]),
      c("span", null, z(e.label), 1)
    ], 34));
  }
});
function Te(e = {}) {
  const l = e.baseIndex ?? 1, n = M([]), s = y(
    () => n.value.map((d, u) => ({
      id: d.id,
      zIndex: l + u,
      active: u === n.value.length - 1
    }))
  ), a = y(() => {
    var d;
    return (d = s.value.find((u) => u.active)) == null ? void 0 : d.id;
  });
  function t() {
    n.value.forEach((d, u) => {
      var v, x;
      (v = d.setLayer) == null || v.call(d, l + u), (x = d.setActive) == null || x.call(d, u === n.value.length - 1);
    });
  }
  function m(d) {
    n.value.some((u) => u.id === d.id) || (n.value.push(d), t());
  }
  function p(d) {
    const u = n.value.findIndex((v) => v.id === d);
    u !== -1 && (n.value.splice(u, 1), t());
  }
  function b(d) {
    const u = n.value.findIndex((x) => x.id === d);
    if (u === -1)
      return;
    const [v] = n.value.splice(u, 1);
    n.value.push(v), t();
  }
  function f(d) {
    return s.value.find((u) => u.id === d);
  }
  return {
    layers: s,
    activeId: a,
    register: m,
    unregister: p,
    activate: b,
    getLayer: f
  };
}
const A = Te(), He = { class: "win10-window__title" }, Ee = {
  class: "win10-window__actions",
  "aria-label": "窗口操作"
}, De = ["aria-label"], Pe = { class: "win10-window__body" }, Re = /* @__PURE__ */ h({
  name: "ZWindow",
  __name: "ZWindow",
  props: {
    title: { default: "Window" },
    modelValue: { type: Boolean, default: void 0 },
    minimized: { type: Boolean, default: void 0 },
    maximized: { type: Boolean, default: void 0 },
    focused: { type: Boolean, default: void 0 },
    zIndex: {},
    x: {},
    y: {},
    width: { default: 400 },
    height: { default: 300 },
    draggable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "update:minimized", "update:maximized", "update:focused", "update:zIndex", "update:x", "update:y", "close", "minimize", "maximize", "restore", "focus", "layer-change", "move", "move-start", "move-end"],
  setup(e, { emit: l }) {
    let n = 0;
    const s = e, a = `z-window-${++n}`, t = l, m = M(!0), p = M(!1), b = M(!1), f = M(!1), d = M(0), u = M(0), v = M(0), x = M(!1), B = M({ pointerX: 0, pointerY: 0, x: 0, y: 0 }), D = M(null);
    let Y = !1;
    const q = y(() => s.modelValue ?? m.value), I = y(() => s.maximized ?? b.value), U = y(() => s.minimized ?? p.value), ue = y(() => s.focused ?? f.value), de = {
      id: a,
      setLayer(r) {
        v.value = r, t("update:zIndex", r), t("layer-change", r);
      },
      setActive(r) {
        f.value = r, t("update:focused", r);
      }
    };
    function G() {
      Y || (Y = !0, A.register(de));
    }
    function J() {
      Y && (Y = !1, A.unregister(a), f.value = !1, t("update:focused", !1));
    }
    le(
      q,
      (r) => {
        r ? (G(), A.activate(a)) : J();
      },
      { immediate: !0 }
    );
    const ce = y(() => v.value), S = y(() => d.value !== 0 ? d.value : s.x ?? 0), L = y(() => u.value !== 0 ? u.value : s.y ?? 0), re = y(() => {
      const r = {
        position: "absolute",
        zIndex: ce.value,
        width: I.value ? "auto" : typeof s.width == "number" ? `${s.width}px` : s.width,
        height: I.value ? "auto" : typeof s.height == "number" ? `${s.height}px` : s.height,
        backgroundColor: "#ffffff",
        borderRadius: "4px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
      };
      return I.value ? (r.top = "0", r.right = "0", r.bottom = "0", r.left = "0", r.borderRadius = "0", r.boxShadow = "none") : (r.top = `${L.value}px`, r.right = "auto", r.bottom = "auto", r.left = `${S.value}px`), r;
    });
    function Q(r) {
      p.value = r, t("update:minimized", r);
    }
    function N(r) {
      b.value = r, t("update:maximized", r);
    }
    function P() {
      G(), A.activate(a), t("focus", v.value);
    }
    function ee(r, E) {
      d.value = r, u.value = E, t("update:x", r), t("update:y", E), t("move", { x: r, y: E });
    }
    function me(r) {
      if (!(!s.draggable || r.button !== 0 || r.target.closest(".win10-window__actions"))) {
        if (P(), I.value) {
          D.value = { x: S.value, y: L.value }, N(!1), setTimeout(() => {
            x.value = !0, B.value = {
              pointerX: r.clientX,
              pointerY: r.clientY,
              x: S.value,
              y: L.value
            }, window.addEventListener("pointermove", W), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H), t("move-start", { x: S.value, y: L.value });
          }, 0);
          return;
        }
        x.value = !0, B.value = {
          pointerX: r.clientX,
          pointerY: r.clientY,
          x: S.value,
          y: L.value
        }, window.addEventListener("pointermove", W), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H), t("move-start", { x: S.value, y: L.value });
      }
    }
    function W(r) {
      if (!x.value)
        return;
      const E = B.value.x + r.clientX - B.value.pointerX, pe = B.value.y + r.clientY - B.value.pointerY;
      ee(E, pe);
    }
    function H() {
      x.value && (x.value = !1, window.removeEventListener("pointermove", W), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), t("move-end", { x: S.value, y: L.value }));
    }
    function ve() {
      m.value = !1, t("update:modelValue", !1), t("close");
    }
    function fe() {
      P(), Q(!0), t("minimize");
    }
    function he() {
      if (P(), I.value) {
        N(!1), D.value && (ee(D.value.x, D.value.y), D.value = null), t("restore");
        return;
      }
      D.value = { x: S.value, y: L.value }, Q(!1), N(!0), t("maximize");
    }
    return X(() => {
      H(), J();
    }), (r, E) => q.value ? (o(), i("section", {
      key: 0,
      class: Z(["win10-window", {
        "win10-window--focused": ue.value,
        "win10-window--maximized": I.value,
        "win10-window--minimized": U.value
      }]),
      style: R(re.value),
      tabindex: "0",
      onFocusin: P,
      onPointerdown: P
    }, [
      c("header", {
        class: "win10-window__titlebar",
        onPointerdown: me
      }, [
        c("div", He, [
          w(r.$slots, "title", {}, () => [
            T(z(e.title), 1)
          ], !0)
        ]),
        c("div", Ee, [
          c("button", {
            class: "win10-window__action win10-window__action--minimize",
            type: "button",
            "aria-label": "最小化",
            onClick: fe
          }, [
            k($, {
              name: "window-minimize",
              size: 16
            })
          ]),
          c("button", {
            class: "win10-window__action win10-window__action--maximize",
            type: "button",
            "aria-label": I.value ? "还原" : "最大化",
            onClick: he
          }, [
            k($, {
              name: I.value ? "window-restore" : "window-maximize",
              size: 16
            }, null, 8, ["name"])
          ], 8, De),
          c("button", {
            class: "win10-window__action win10-window__action--close",
            type: "button",
            "aria-label": "关闭",
            onClick: ve
          }, [
            k($, {
              name: "window-close",
              size: 16
            })
          ])
        ])
      ], 32),
      _e(c("div", Pe, [
        w(r.$slots, "default", {}, void 0, !0)
      ], 512), [
        [be, !U.value]
      ])
    ], 38)) : _("", !0);
  }
}), se = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of l)
    n[s] = a;
  return n;
}, oe = /* @__PURE__ */ se(Re, [["__scopeId", "data-v-bd2e11e0"]]), Xe = {
  key: 0,
  class: "z-dialog"
}, Ye = { class: "z-dialog__body" }, Ae = { class: "z-dialog__footer" }, Ne = /* @__PURE__ */ h({
  name: "ZDialog",
  __name: "ZDialog",
  props: {
    modelValue: { type: Boolean },
    title: { default: "提示" },
    closeOnBackdrop: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "confirm"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => e.modelValue ? (o(), i("div", Xe, [
      c("div", {
        class: "z-dialog__backdrop",
        onClick: a[0] || (a[0] = (t) => e.closeOnBackdrop && n("update:modelValue", !1))
      }),
      k(oe, {
        class: "z-dialog__window",
        title: e.title,
        draggable: !1,
        onClose: a[3] || (a[3] = (t) => n("update:modelValue", !1))
      }, {
        default: F(() => [
          c("div", Ye, [
            w(s.$slots, "default")
          ]),
          c("footer", Ae, [
            w(s.$slots, "footer", {}, () => [
              k(K, {
                onClick: a[1] || (a[1] = (t) => n("update:modelValue", !1))
              }, {
                default: F(() => [...a[4] || (a[4] = [
                  T("取消", -1)
                ])]),
                _: 1
              }),
              k(K, {
                type: "primary",
                onClick: a[2] || (a[2] = (t) => n("confirm"))
              }, {
                default: F(() => [...a[5] || (a[5] = [
                  T("确定", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ]),
        _: 3
      }, 8, ["title"])
    ])) : _("", !0);
  }
}), We = { class: "z-menu" }, Fe = {
  key: 0,
  class: "z-menu__separator"
}, je = ["disabled", "onClick"], Ke = {
  key: 1,
  class: "z-menu__shortcut"
}, ie = /* @__PURE__ */ h({
  name: "ZMenu",
  __name: "ZMenu",
  props: {
    items: {}
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("ul", We, [
      (o(!0), i(V, null, C(e.items, (t) => (o(), i("li", {
        key: t.id,
        class: "z-menu__item-wrap"
      }, [
        t.separator ? (o(), i("hr", Fe)) : (o(), i("button", {
          key: 1,
          class: "z-menu__item",
          type: "button",
          disabled: t.disabled,
          onClick: (m) => n("select", t.id)
        }, [
          t.icon ? (o(), g($, {
            key: 0,
            name: t.icon,
            size: 16
          }, null, 8, ["name"])) : _("", !0),
          c("span", null, z(t.label), 1),
          t.shortcut ? (o(), i("span", Ke, z(t.shortcut), 1)) : _("", !0)
        ], 8, je))
      ]))), 128))
    ]));
  }
}), Oe = {
  key: 0,
  class: "z-dropdown__content"
}, qe = /* @__PURE__ */ h({
  name: "ZDropdown",
  __name: "ZDropdown",
  props: {
    items: { default: () => [] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = l, s = M(!1), a = M(null);
    function t() {
      s.value = !s.value;
    }
    function m(b) {
      n("select", b), s.value = !1;
    }
    function p(b) {
      a.value && (a.value.contains(b.target) || (s.value = !1));
    }
    return ne(() => {
      document.addEventListener("click", p);
    }), X(() => {
      document.removeEventListener("click", p);
    }), (b, f) => (o(), i("span", {
      ref_key: "dropdownRef",
      ref: a,
      class: "z-dropdown",
      onKeydown: f[0] || (f[0] = ae((d) => s.value = !1, ["esc"]))
    }, [
      c("span", {
        class: "z-dropdown__trigger",
        onClick: t
      }, [
        w(b.$slots, "default")
      ]),
      s.value ? (o(), i("div", Oe, [
        w(b.$slots, "content", {}, () => [
          k(ie, {
            items: e.items,
            onSelect: m
          }, null, 8, ["items"])
        ])
      ])) : _("", !0)
    ], 544));
  }
}), Ue = {
  key: 0,
  class: "z-input__label"
}, Ge = { class: "z-input__wrapper" }, Je = {
  key: 0,
  class: "z-input__prefix"
}, Qe = ["disabled", "placeholder", "type", "value"], et = {
  key: 1,
  class: "z-input__suffix"
}, tt = /* @__PURE__ */ h({
  name: "ZInput",
  __name: "ZInput",
  props: {
    modelValue: { default: "" },
    label: {},
    placeholder: {},
    type: { default: "text" },
    disabled: { type: Boolean, default: !1 },
    prefixIcon: {},
    suffixIcon: {},
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "focus", "blur", "clear"],
  setup(e, { emit: l }) {
    const n = l, s = M(null), a = M(!1), t = M(!1);
    function m(u) {
      const v = u.target;
      n("update:modelValue", v.value);
    }
    function p(u) {
      a.value = !0, n("focus", u);
    }
    function b(u) {
      a.value = !1, n("blur", u);
    }
    function f() {
      var u;
      n("update:modelValue", ""), n("clear"), (u = s.value) == null || u.focus();
    }
    function d() {
      t.value = !t.value;
    }
    return (u, v) => (o(), i("div", {
      class: Z(["z-input", { "z-input--disabled": e.disabled, "z-input--focused": a.value }])
    }, [
      e.label ? (o(), i("label", Ue, z(e.label), 1)) : _("", !0),
      c("div", Ge, [
        u.$slots.prefix || e.prefixIcon ? (o(), i("span", Je, [
          w(u.$slots, "prefix", {}, () => [
            e.prefixIcon ? (o(), g($, {
              key: 0,
              name: e.prefixIcon
            }, null, 8, ["name"])) : _("", !0)
          ], !0)
        ])) : _("", !0),
        c("input", {
          ref_key: "inputRef",
          ref: s,
          class: "z-input__inner",
          disabled: e.disabled,
          placeholder: e.placeholder,
          type: e.showPassword ? t.value ? "text" : "password" : e.type,
          value: e.modelValue,
          onBlur: b,
          onFocus: p,
          onInput: m
        }, null, 40, Qe),
        u.$slots.suffix || e.suffixIcon || e.clearable || e.showPassword ? (o(), i("span", et, [
          w(u.$slots, "suffix", {}, () => [
            e.showPassword ? (o(), g($, {
              key: 0,
              name: t.value ? "eye-off" : "eye",
              class: "z-input__icon",
              onClick: d
            }, null, 8, ["name"])) : e.clearable && e.modelValue && !e.disabled ? (o(), g($, {
              key: 1,
              name: "close",
              class: "z-input__icon z-input__clear",
              onClick: f
            })) : _("", !0),
            e.suffixIcon && !e.clearable && !e.showPassword ? (o(), g($, {
              key: 2,
              name: e.suffixIcon
            }, null, 8, ["name"])) : _("", !0)
          ], !0)
        ])) : _("", !0)
      ])
    ], 2));
  }
}), nt = /* @__PURE__ */ se(tt, [["__scopeId", "data-v-93fcd3b8"]]), at = { class: "z-list" }, lt = ["onClick"], st = /* @__PURE__ */ h({
  name: "ZList",
  __name: "ZList",
  props: {
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("ul", at, [
      (o(!0), i(V, null, C(e.items, (t) => (o(), i("li", {
        key: t.id,
        class: Z(["z-list__item", { "z-list__item--active": t.id === e.modelValue }]),
        onClick: (m) => n("update:modelValue", t.id)
      }, [
        t.icon ? (o(), g($, {
          key: 0,
          name: t.icon,
          size: 18
        }, null, 8, ["name"])) : _("", !0),
        c("span", null, z(t.label), 1)
      ], 10, lt))), 128))
    ]));
  }
}), ot = { class: "z-panel" }, it = {
  key: 0,
  class: "z-panel__header"
}, ut = { class: "z-panel__body" }, dt = {
  key: 1,
  class: "z-panel__footer"
}, ct = /* @__PURE__ */ h({
  name: "ZPanel",
  __name: "ZPanel",
  props: {
    title: {}
  },
  setup(e) {
    return (l, n) => (o(), i("section", ot, [
      l.$slots.header || e.title ? (o(), i("header", it, [
        w(l.$slots, "header", {}, () => [
          T(z(e.title), 1)
        ])
      ])) : _("", !0),
      c("div", ut, [
        w(l.$slots, "default")
      ]),
      l.$slots.footer ? (o(), i("footer", dt, [
        w(l.$slots, "footer")
      ])) : _("", !0)
    ]));
  }
}), rt = { class: "z-progress" }, mt = /* @__PURE__ */ h({
  name: "ZProgress",
  __name: "ZProgress",
  props: {
    value: { default: 0 }
  },
  setup(e) {
    const l = e, n = y(() => Math.min(100, Math.max(0, l.value)));
    return (s, a) => (o(), i("div", rt, [
      c("div", {
        class: "z-progress__bar",
        style: R({ width: `${n.value}%` })
      }, null, 4)
    ]));
  }
}), vt = ["checked", "disabled"], ft = /* @__PURE__ */ h({
  name: "ZRadio",
  __name: "ZRadio",
  props: {
    modelValue: {},
    value: {},
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("label", {
      class: Z(["z-radio", { "z-radio--disabled": e.disabled }])
    }, [
      c("input", {
        class: "z-radio__input",
        type: "radio",
        checked: e.modelValue === e.value,
        disabled: e.disabled,
        onChange: a[0] || (a[0] = (t) => n("update:modelValue", e.value))
      }, null, 40, vt),
      a[1] || (a[1] = c("span", { class: "z-radio__dot" }, null, -1)),
      c("span", null, [
        w(s.$slots, "default", {}, () => [
          T(z(e.label), 1)
        ])
      ])
    ], 2));
  }
}), ht = { class: "z-scroll-area" }, pt = /* @__PURE__ */ h({
  name: "ZScrollArea",
  __name: "ZScrollArea",
  setup(e) {
    return (l, n) => (o(), i("div", ht, [
      w(l.$slots, "default")
    ]));
  }
}), _t = { class: "z-search-box" }, bt = ["placeholder", "value"], wt = /* @__PURE__ */ h({
  name: "ZSearchBox",
  __name: "ZSearchBox",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "搜索" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("label", _t, [
      k($, {
        name: "search",
        size: 16
      }),
      c("input", {
        placeholder: e.placeholder,
        value: e.modelValue,
        onInput: a[0] || (a[0] = (t) => n("update:modelValue", t.target.value))
      }, null, 40, bt),
      e.modelValue ? (o(), i("button", {
        key: 0,
        type: "button",
        onClick: a[1] || (a[1] = (t) => n("update:modelValue", ""))
      }, [
        k($, {
          name: "close",
          size: 14
        })
      ])) : _("", !0)
    ]));
  }
}), zt = { class: "z-select" }, Mt = {
  key: 0,
  class: "z-select__label"
}, $t = ["disabled", "value"], yt = {
  key: 0,
  disabled: "",
  value: ""
}, kt = ["disabled", "value"], Zt = /* @__PURE__ */ h({
  name: "ZSelect",
  __name: "ZSelect",
  props: {
    modelValue: { default: "" },
    label: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    options: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("label", zt, [
      e.label ? (o(), i("span", Mt, z(e.label), 1)) : _("", !0),
      c("select", {
        class: "z-select__control",
        disabled: e.disabled,
        value: e.modelValue,
        onChange: a[0] || (a[0] = (t) => n("update:modelValue", t.target.value))
      }, [
        e.placeholder ? (o(), i("option", yt, z(e.placeholder), 1)) : _("", !0),
        (o(!0), i(V, null, C(e.options, (t) => (o(), i("option", {
          key: t.value,
          disabled: t.disabled,
          value: t.value
        }, z(t.label), 9, kt))), 128))
      ], 40, $t)
    ]));
  }
}), xt = {
  key: 0,
  class: "z-start-menu"
}, gt = { class: "z-start-menu__search" }, Vt = ["value"], Ct = { class: "z-start-menu__apps" }, Bt = ["onClick"], It = { class: "z-start-menu__footer" }, St = /* @__PURE__ */ h({
  name: "ZStartMenu",
  __name: "ZStartMenu",
  props: {
    visible: { type: Boolean },
    search: {},
    apps: {}
  },
  emits: ["open", "update:search"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => e.visible ? (o(), i("aside", xt, [
      c("header", gt, [
        c("input", {
          value: e.search,
          placeholder: "搜索应用",
          onInput: a[0] || (a[0] = (t) => n("update:search", t.target.value))
        }, null, 40, Vt)
      ]),
      c("div", Ct, [
        (o(!0), i(V, null, C(e.apps, (t) => (o(), i("button", {
          key: t.id,
          type: "button",
          onClick: (m) => n("open", t.id)
        }, [
          k($, {
            name: t.icon ?? "window",
            size: 20
          }, null, 8, ["name"]),
          c("span", null, z(t.title), 1)
        ], 8, Bt))), 128))
      ]),
      c("footer", It, [
        w(s.$slots, "footer", {}, () => [
          a[1] || (a[1] = T("zijid-ui", -1))
        ])
      ])
    ])) : _("", !0);
  }
}), Lt = { class: "z-slider" }, Tt = { key: 0 }, Ht = ["min", "max", "step", "value"], Et = /* @__PURE__ */ h({
  name: "ZSlider",
  __name: "ZSlider",
  props: {
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    label: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("label", Lt, [
      e.label ? (o(), i("span", Tt, z(e.label), 1)) : _("", !0),
      c("input", {
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        value: e.modelValue,
        onInput: a[0] || (a[0] = (t) => n("update:modelValue", Number(t.target.value)))
      }, null, 40, Ht),
      c("output", null, z(e.modelValue), 1)
    ]));
  }
}), Dt = { class: "z-splitter__pane" }, Pt = /* @__PURE__ */ h({
  name: "ZSplitter",
  __name: "ZSplitter",
  props: {
    modelValue: { default: 40 },
    direction: { default: "horizontal" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, s = l, a = M(1), t = M(!1), m = y(() => ({ flexBasis: `${n.modelValue}%` }));
    function p(d) {
      const u = d.currentTarget.parentElement;
      if (!u) return;
      const v = u.getBoundingClientRect();
      a.value = n.direction === "horizontal" ? v.width : v.height, t.value = !0, window.addEventListener("pointermove", b), window.addEventListener("pointerup", f);
    }
    function b(d) {
      var B;
      if (!t.value) return;
      const u = (B = document.elementFromPoint(d.clientX, d.clientY)) == null ? void 0 : B.closest(".z-splitter"), v = u == null ? void 0 : u.getBoundingClientRect(), x = n.direction === "horizontal" ? d.clientX - ((v == null ? void 0 : v.left) ?? 0) : d.clientY - ((v == null ? void 0 : v.top) ?? 0);
      s("update:modelValue", Math.min(80, Math.max(20, x / a.value * 100)));
    }
    function f() {
      t.value = !1, window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", f);
    }
    return X(f), (d, u) => (o(), i("section", {
      class: Z(["z-splitter", `z-splitter--${e.direction}`])
    }, [
      c("div", {
        class: "z-splitter__pane",
        style: R(m.value)
      }, [
        w(d.$slots, "first")
      ], 4),
      c("div", {
        class: "z-splitter__handle",
        onPointerdown: p
      }, null, 32),
      c("div", Dt, [
        w(d.$slots, "second")
      ])
    ], 2));
  }
}), Rt = { class: "z-status-bar" }, Xt = /* @__PURE__ */ h({
  name: "ZStatusBar",
  __name: "ZStatusBar",
  setup(e) {
    return (l, n) => (o(), i("footer", Rt, [
      w(l.$slots, "default")
    ]));
  }
}), Yt = ["disabled"], At = {
  key: 0,
  class: "z-switch__label"
}, Nt = /* @__PURE__ */ h({
  name: "ZSwitch",
  __name: "ZSwitch",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, s = l;
    function a() {
      n.disabled || s("update:modelValue", !n.modelValue);
    }
    return (t, m) => (o(), i("button", {
      class: Z(["z-switch", { "z-switch--checked": e.modelValue }]),
      type: "button",
      disabled: e.disabled,
      onClick: a
    }, [
      m[0] || (m[0] = c("span", { class: "z-switch__track" }, [
        c("span", { class: "z-switch__thumb" })
      ], -1)),
      e.label ? (o(), i("span", At, z(e.label), 1)) : _("", !0)
    ], 10, Yt));
  }
}), Wt = { class: "z-tabs" }, Ft = {
  class: "z-tabs__nav",
  role: "tablist"
}, jt = ["onClick"], Kt = { class: "z-tabs__body" }, Ot = /* @__PURE__ */ h({
  name: "ZTabs",
  __name: "ZTabs",
  props: {
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("section", Wt, [
      c("div", Ft, [
        (o(!0), i(V, null, C(e.items, (t) => (o(), i("button", {
          key: t.value,
          class: Z(["z-tabs__tab", { "z-tabs__tab--active": t.value === e.modelValue }]),
          type: "button",
          role: "tab",
          onClick: (m) => n("update:modelValue", t.value)
        }, z(t.label), 11, jt))), 128))
      ]),
      c("div", Kt, [
        w(s.$slots, "default")
      ])
    ]));
  }
}), qt = { class: "z-taskbar" }, Ut = { class: "z-taskbar__apps" }, Gt = ["onClick"], Jt = { class: "z-taskbar__tray" }, Qt = /* @__PURE__ */ h({
  name: "ZTaskbar",
  __name: "ZTaskbar",
  props: {
    windows: {},
    time: {}
  },
  emits: ["start", "select"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("footer", qt, [
      c("button", {
        class: "z-taskbar__start",
        type: "button",
        onClick: a[0] || (a[0] = (t) => n("start"))
      }, [
        k($, {
          name: "window",
          size: 18
        })
      ]),
      c("div", Ut, [
        (o(!0), i(V, null, C(e.windows, (t) => (o(), i("button", {
          key: t.id,
          class: Z(["z-taskbar__app", { "z-taskbar__app--active": t.active }]),
          type: "button",
          onClick: (m) => n("select", t.id)
        }, [
          k($, {
            name: t.icon ?? "window",
            size: 16
          }, null, 8, ["name"]),
          c("span", null, z(t.title), 1)
        ], 10, Gt))), 128))
      ]),
      c("div", Jt, [
        w(s.$slots, "tray", {}, () => [
          T(z(e.time), 1)
        ])
      ])
    ]));
  }
}), en = { class: "z-textarea" }, tn = {
  key: 0,
  class: "z-textarea__label"
}, nn = ["rows", "placeholder", "value"], an = /* @__PURE__ */ h({
  name: "ZTextarea",
  __name: "ZTextarea",
  props: {
    modelValue: { default: "" },
    label: {},
    placeholder: {},
    rows: { default: 4 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("label", en, [
      e.label ? (o(), i("span", tn, z(e.label), 1)) : _("", !0),
      c("textarea", {
        class: "z-textarea__control",
        rows: e.rows,
        placeholder: e.placeholder,
        value: e.modelValue,
        onInput: a[0] || (a[0] = (t) => n("update:modelValue", t.target.value))
      }, null, 40, nn)
    ]));
  }
}), ln = { class: "z-toast__content" }, sn = { key: 0 }, on = /* @__PURE__ */ h({
  name: "ZToast",
  __name: "ZToast",
  props: {
    visible: { type: Boolean, default: !0 },
    title: {},
    message: {},
    type: { default: "info" },
    duration: { default: 4e3 }
  },
  emits: ["update:visible"],
  setup(e, { emit: l }) {
    const n = e, s = l, a = y(() => n.type === "success" ? "check" : n.type === "error" ? "error" : n.type);
    let t = null;
    function m() {
      p(), n.duration > 0 && n.visible && (t = setTimeout(() => {
        s("update:visible", !1);
      }, n.duration));
    }
    function p() {
      t !== null && (clearTimeout(t), t = null);
    }
    function b() {
      p(), s("update:visible", !1);
    }
    return le(() => n.visible, (f) => {
      f ? m() : p();
    }, { immediate: !0 }), X(() => {
      p();
    }), (f, d) => e.visible ? (o(), i("div", {
      key: 0,
      class: Z(["z-toast", `z-toast--${e.type}`])
    }, [
      k($, {
        name: a.value,
        size: 18
      }, null, 8, ["name"]),
      c("div", ln, [
        e.title ? (o(), i("strong", sn, z(e.title), 1)) : _("", !0),
        c("span", null, z(e.message), 1)
      ]),
      c("button", {
        type: "button",
        onClick: b
      }, [
        k($, {
          name: "close",
          size: 14
        })
      ])
    ], 2)) : _("", !0);
  }
}), un = { class: "z-toolbar" }, dn = /* @__PURE__ */ h({
  name: "ZToolbar",
  __name: "ZToolbar",
  setup(e) {
    return (l, n) => (o(), i("div", un, [
      w(l.$slots, "default")
    ]));
  }
}), cn = { class: "z-tooltip" }, rn = {
  class: "z-tooltip__content",
  role: "tooltip"
}, mn = /* @__PURE__ */ h({
  name: "ZTooltip",
  __name: "ZTooltip",
  props: {
    content: {}
  },
  setup(e) {
    return (l, n) => (o(), i("span", cn, [
      w(l.$slots, "default"),
      c("span", rn, z(e.content), 1)
    ]));
  }
}), vn = { class: "z-tree__node" }, fn = {
  key: 0,
  class: "z-tree__children"
}, hn = /* @__PURE__ */ h({
  name: "ZTreeNode",
  __name: "ZTreeNode",
  props: {
    item: {},
    selectedId: {}
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = l, s = M(!0);
    return (a, t) => {
      var p, b;
      const m = we("ZTreeNode", !0);
      return o(), i("li", vn, [
        c("button", {
          class: Z(["z-tree__row", { "z-tree__row--active": e.item.id === e.selectedId }]),
          type: "button",
          onClick: t[1] || (t[1] = (f) => n("select", e.item.id))
        }, [
          c("span", {
            class: "z-tree__twisty",
            onClick: t[0] || (t[0] = O((f) => s.value = !s.value, ["stop"]))
          }, z((p = e.item.children) != null && p.length ? s.value ? "▾" : "▸" : ""), 1),
          e.item.icon ? (o(), g($, {
            key: 0,
            name: e.item.icon,
            size: 16
          }, null, 8, ["name"])) : _("", !0),
          c("span", null, z(e.item.label), 1)
        ], 2),
        (b = e.item.children) != null && b.length && s.value ? (o(), i("ul", fn, [
          (o(!0), i(V, null, C(e.item.children, (f) => (o(), g(m, {
            key: f.id,
            item: f,
            "selected-id": e.selectedId,
            onSelect: t[2] || (t[2] = (d) => n("select", d))
          }, null, 8, ["item", "selected-id"]))), 128))
        ])) : _("", !0)
      ]);
    };
  }
}), pn = { class: "z-tree" }, _n = /* @__PURE__ */ h({
  name: "ZTree",
  __name: "ZTree",
  props: {
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = l;
    return (s, a) => (o(), i("ul", pn, [
      (o(!0), i(V, null, C(e.items, (t) => (o(), g(hn, {
        key: t.id,
        item: t,
        "selected-id": e.modelValue,
        onSelect: a[0] || (a[0] = (m) => n("update:modelValue", m))
      }, null, 8, ["item", "selected-id"]))), 128))
    ]));
  }
});
let te = 2e3;
function Mn(e = []) {
  const l = M(
    e.map((d, u) => ({
      icon: "window",
      visible: !1,
      minimized: !1,
      maximized: !1,
      active: !1,
      zIndex: ++te,
      x: u * 28,
      y: u * 28,
      ...d
    }))
  ), n = y(() => l.value.filter((d) => d.visible));
  function s(d) {
    return l.value.find((u) => u.id === d);
  }
  function a(d) {
    const u = s(d);
    u && (l.value.forEach((v) => {
      v.active = v.id === d;
    }), u.visible = !0, u.minimized = !1, u.zIndex = ++te);
  }
  function t(d) {
    a(d);
  }
  function m(d) {
    const u = s(d);
    u && (u.visible = !1, u.active = !1);
  }
  function p(d) {
    const u = s(d);
    u && (u.minimized = !0, u.active = !1);
  }
  function b(d, u) {
    const v = s(d);
    v && (v.maximized = u ?? !v.maximized, a(d));
  }
  function f(d, u) {
    const v = s(d);
    v && (v.x = u.x, v.y = u.y);
  }
  return {
    windows: l,
    taskbarWindows: n,
    getWindow: s,
    open: t,
    close: m,
    minimize: p,
    activate: a,
    toggleMaximize: b,
    move: f
  };
}
const bn = [
  K,
  xe,
  Ce,
  Se,
  Le,
  Ne,
  qe,
  $,
  nt,
  st,
  ie,
  ct,
  mt,
  ft,
  pt,
  wt,
  Zt,
  St,
  Et,
  Pt,
  Xt,
  Nt,
  Ot,
  Qt,
  an,
  on,
  dn,
  mn,
  _n,
  oe
], $n = {
  install(e) {
    bn.forEach((l) => {
      e.component(l.name, l);
    });
  }
};
export {
  K as ZButton,
  xe as ZCheckbox,
  Ce as ZContextMenu,
  Se as ZDesktop,
  Le as ZDesktopIcon,
  Ne as ZDialog,
  qe as ZDropdown,
  $ as ZIcon,
  nt as ZInput,
  st as ZList,
  ie as ZMenu,
  ct as ZPanel,
  mt as ZProgress,
  ft as ZRadio,
  pt as ZScrollArea,
  wt as ZSearchBox,
  Zt as ZSelect,
  Et as ZSlider,
  Pt as ZSplitter,
  St as ZStartMenu,
  Xt as ZStatusBar,
  Nt as ZSwitch,
  Ot as ZTabs,
  Qt as ZTaskbar,
  an as ZTextarea,
  on as ZToast,
  dn as ZToolbar,
  mn as ZTooltip,
  _n as ZTree,
  oe as ZWindow,
  $n as default,
  zn as iconNames,
  Mn as useWindowManager
};
