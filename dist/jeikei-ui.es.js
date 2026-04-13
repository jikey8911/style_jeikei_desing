import re, { useState as X, useEffect as oe } from "react";
var C = { exports: {} }, R = {};
var V;
function ae() {
  if (V) return R;
  V = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(n, l, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      s = {};
      for (var x in l)
        x !== "key" && (s[x] = l[x]);
    } else s = l;
    return l = s.ref, {
      $$typeof: a,
      type: n,
      key: d,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return R.Fragment = o, R.jsx = c, R.jsxs = c, R;
}
var $ = {};
var B;
function se() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case y:
          return "Profiler";
        case _:
          return "StrictMode";
        case S:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case E:
            return "Portal";
          case T:
            return e.displayName || "Context";
          case k:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var i = e.render;
            return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return i = e.displayName || null, i !== null ? i : a(e.type) || "Memo";
          case P:
            i = e._payload, e = e._init;
            try {
              return a(e(i));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function c(e) {
      try {
        o(e);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var b = i.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return b.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), o(e);
      }
    }
    function n(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var i = a(e);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (L.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function x(e, i) {
      function b() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: b,
        configurable: !0
      });
    }
    function r() {
      var e = a(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function f(e, i, b, u, A, I) {
      var m = b.ref;
      return e = {
        $$typeof: N,
        type: e,
        key: i,
        props: b,
        _owner: u
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: r
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, i, b, u, A, I) {
      var m = i.children;
      if (m !== void 0)
        if (u)
          if (ee(m)) {
            for (u = 0; u < m.length; u++)
              w(m[u]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(m);
      if (L.call(i, "key")) {
        m = a(e);
        var j = Object.keys(i).filter(function(te) {
          return te !== "key";
        });
        u = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", U[m + u] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          m,
          j,
          m
        ), U[m + u] = !0);
      }
      if (m = null, b !== void 0 && (c(b), m = "" + b), d(i) && (c(i.key), m = "" + i.key), "key" in i) {
        b = {};
        for (var z in i)
          z !== "key" && (b[z] = i[z]);
      } else b = i;
      return m && x(
        b,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), f(
        e,
        m,
        b,
        l(),
        A,
        I
      );
    }
    function w(e) {
      v(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === P && (e._payload.status === "fulfilled" ? v(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function v(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    var g = re, N = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), y = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), H = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), Q = /* @__PURE__ */ Symbol.for("react.activity"), K = /* @__PURE__ */ Symbol.for("react.client.reference"), O = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, ee = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, D = {}, W = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), q = M(n(s)), U = {};
    $.Fragment = p, $.jsx = function(e, i, b) {
      var u = 1e4 > O.recentlyCreatedOwnerStacks++;
      return h(
        e,
        i,
        b,
        !1,
        u ? Error("react-stack-top-frame") : W,
        u ? M(n(e)) : q
      );
    }, $.jsxs = function(e, i, b) {
      var u = 1e4 > O.recentlyCreatedOwnerStacks++;
      return h(
        e,
        i,
        b,
        !0,
        u ? Error("react-stack-top-frame") : W,
        u ? M(n(e)) : q
      );
    };
  })()), $;
}
var G;
function ne() {
  return G || (G = 1, process.env.NODE_ENV === "production" ? C.exports = ae() : C.exports = se()), C.exports;
}
var t = ne();
function J({ children: a, variant: o = "cyan", className: c = "", ...n }) {
  const l = "px-6 py-2 uppercase tracking-[0.15em] text-xs font-bold font-mono transition-all duration-300 border backdrop-blur-sm relative overflow-hidden group", s = {
    // Sistema Estándar
    cyan: "bg-[#00e5ff]/10 text-[#00e5ff] text-glow-cyan border-[#00e5ff]/50 hover:bg-[#00e5ff]/20 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]",
    // Alertas y Datos Activos
    orange: "bg-[#ff6400]/10 text-[#ff6400] text-glow-orange border-[#ff6400]/50 hover:bg-[#ff6400]/20 hover:border-[#ff6400] hover:shadow-[0_0_20px_rgba(255,100,0,0.6)]",
    // Crítico / Peligro (Rojo Intenso)
    red: "bg-[#ff003c]/10 text-[#ff003c] text-glow-red border-[#ff003c]/50 hover:bg-[#ff003c]/20 hover:border-[#ff003c] hover:shadow-[0_0_20px_rgba(255,0,60,0.7)]",
    // Secundario/Invisible
    ghost: "bg-transparent text-white/40 border-white/10 hover:text-[#00e5ff] hover:text-glow-cyan hover:border-[#00e5ff]/50 hover:bg-black/40"
  };
  return /* @__PURE__ */ t.jsx("button", { className: `${l} ${s[o]} ${c}`, ...n, children: a });
}
function ie({ title: a, value: o, status: c = "OPTIMAL", color: n = "cyan" }) {
  const s = {
    cyan: {
      text: "text-[#00e5ff]",
      glow: "text-glow-cyan",
      bg: "bg-[#00e5ff]",
      edge: "rgba(0, 229, 255, 0.6)"
    },
    orange: {
      text: "text-[#ff6400]",
      glow: "text-glow-orange",
      bg: "bg-[#ff6400]",
      edge: "rgba(255, 100, 0, 0.6)"
    },
    red: {
      text: "text-[#ff003c]",
      glow: "text-glow-red",
      bg: "bg-[#ff003c]",
      edge: "rgba(255, 0, 60, 0.6)"
    }
  }[n];
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "glass-panel p-5 flex flex-col relative group",
      style: { borderTopColor: s.edge },
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]" }),
        /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]" }),
        /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]" }),
        /* @__PURE__ */ t.jsx("div", { className: `h-[2px] w-12 ${s.bg} opacity-70 mb-3 relative z-10` }),
        /* @__PURE__ */ t.jsx("div", { className: "text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-1 relative z-10", children: a }),
        /* @__PURE__ */ t.jsx("div", { className: `text-4xl font-bold font-mono ${s.text} ${s.glow} relative z-10`, children: o }),
        /* @__PURE__ */ t.jsxs("div", { className: "mt-6 flex justify-between items-end border-t border-[#00e5ff]/20 pt-2 relative z-10", children: [
          /* @__PURE__ */ t.jsxs("span", { className: `text-[9px] font-mono tracking-widest ${s.text} opacity-80`, children: [
            "SYS: ",
            c
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex gap-[2px] items-end", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-1.5 h-2 ${s.bg} animate-pulse` }),
            /* @__PURE__ */ t.jsx("div", { className: "w-1.5 h-3 bg-[#00e5ff]/40" }),
            /* @__PURE__ */ t.jsx("div", { className: "w-1.5 h-4 bg-[#00e5ff]/20" })
          ] })
        ] })
      ]
    }
  );
}
function ce({ label: a, checked: o, onChange: c, color: n = "cyan" }) {
  const s = {
    cyan: "bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.6)]",
    orange: "bg-[#ff6400] shadow-[0_0_15px_rgba(255,100,0,0.6)]",
    red: "bg-[#ff003c] shadow-[0_0_15px_rgba(255,0,60,0.8)]"
  }[n];
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "flex items-center justify-between group cursor-pointer",
      onClick: () => c(!o),
      children: [
        /* @__PURE__ */ t.jsx("span", { className: `text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-300 ${o ? "text-white" : "text-white/40"}`, children: a }),
        /* @__PURE__ */ t.jsxs("div", { className: `relative w-12 h-4 border transition-all duration-300 ${o ? "border-white/20 bg-white/5" : "border-white/10 bg-black/40"}`, style: { clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }, children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute top-1/2 left-2 right-2 h-[1px] bg-white/10 -translate-y-1/2" }),
          /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: `absolute top-0 h-full w-5 transition-all duration-300 ease-out flex items-center justify-center ${o ? "left-[calc(100%-1.25rem)] " + s : "left-0 bg-white/10"}`,
              style: { clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" },
              children: [
                /* @__PURE__ */ t.jsx("div", { className: "w-[1px] h-2 bg-black/50" }),
                /* @__PURE__ */ t.jsx("div", { className: "w-[1px] h-2 bg-black/50 ml-1" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function fe({ label: a, value: o, color: c = "cyan", segments: n = 20 }) {
  const s = {
    cyan: { active: "bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.6)]", inactive: "bg-[#00e5ff]/10", text: "text-[#00e5ff]" },
    orange: { active: "bg-[#ff6400] shadow-[0_0_10px_rgba(255,100,0,0.6)]", inactive: "bg-[#ff6400]/10", text: "text-[#ff6400]" },
    red: { active: "bg-[#ff003c] shadow-[0_0_10px_rgba(255,0,60,0.8)]", inactive: "bg-[#ff003c]/10", text: "text-[#ff003c]" }
  }[c], d = Math.round(Math.max(0, Math.min(100, o)) / 100 * n);
  return /* @__PURE__ */ t.jsxs("div", { className: "w-full flex flex-col gap-2 group", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-end border-b border-white/5 pb-1", children: [
      /* @__PURE__ */ t.jsx("span", { className: "text-[10px] text-white/60 font-mono tracking-[0.2em] uppercase", children: a }),
      /* @__PURE__ */ t.jsxs("span", { className: `text-xs font-bold font-mono ${s.text}`, children: [
        o.toFixed(1),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "flex gap-[2px] h-3 w-full", children: Array.from({ length: n }).map((x, r) => {
      const f = r < d;
      return /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `flex-1 h-full skew-x-[-15deg] transition-all duration-300 ${f ? s.active : s.inactive}`
        },
        r
      );
    }) })
  ] });
}
function de({ headers: a, data: o, color: c = "cyan" }) {
  const n = {
    cyan: "hover:bg-[#00e5ff]/5 border-l-[#00e5ff] text-[#00e5ff]",
    orange: "hover:bg-[#ff6400]/5 border-l-[#ff6400] text-[#ff6400]",
    red: "hover:bg-[#ff003c]/5 border-l-[#ff003c] text-[#ff003c]"
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "glass-panel w-full overflow-hidden border-t border-white/10", children: [
    /* @__PURE__ */ t.jsxs("table", { className: "w-full text-left border-collapse", children: [
      /* @__PURE__ */ t.jsx("thead", { children: /* @__PURE__ */ t.jsx("tr", { className: "border-b border-[#00e5ff]/30 bg-[#00e5ff]/5", children: a.map((l, s) => /* @__PURE__ */ t.jsx("th", { className: "p-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[#00e5ff] text-glow-cyan font-bold", children: l }, s)) }) }),
      /* @__PURE__ */ t.jsx("tbody", { className: "font-mono text-[11px]", children: o.map((l, s) => /* @__PURE__ */ t.jsxs(
        "tr",
        {
          className: `group relative border-b border-white/5 transition-all duration-300 border-l-2 border-l-transparent ${n[c]}`,
          children: [
            Object.values(l).map((d, x) => /* @__PURE__ */ t.jsx("td", { className: "p-4 text-white/80 relative z-10", children: d }, x)),
            /* @__PURE__ */ t.jsx("td", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "animate-scan",
                style: {
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 4}s`
                }
              }
            ) })
          ]
        },
        s
      )) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "p-2 bg-black/40 flex justify-between items-center border-t border-white/5", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex gap-1 items-center", children: [
        /* @__PURE__ */ t.jsx("div", { className: "w-1 h-1 bg-[#00e5ff] animate-pulse" }),
        /* @__PURE__ */ t.jsx("div", { className: "w-8 h-[1px] bg-[#00e5ff]/30" }),
        /* @__PURE__ */ t.jsx("span", { className: "text-[7px] font-mono text-[#00e5ff]/50 tracking-[0.3em]", children: "SECURE_DATA_STREAM" })
      ] }),
      /* @__PURE__ */ t.jsx("span", { className: "text-[8px] font-mono uppercase tracking-[0.4em] text-white/20", children: "END_OF_STREAM" })
    ] })
  ] });
}
function be({
  isOpen: a,
  onClose: o,
  onAction: c,
  title: n,
  children: l,
  actionText: s = "CONFIRM",
  color: d = "red"
}) {
  if (!a) return null;
  const r = {
    cyan: { text: "text-[#00e5ff]", glow: "text-glow-cyan", border: "rgba(0, 229, 255, 0.8)", bg: "bg-[#00e5ff]" },
    orange: { text: "text-[#ff6400]", glow: "text-glow-orange", border: "rgba(255, 100, 0, 0.8)", bg: "bg-[#ff6400]" },
    red: { text: "text-[#ff003c]", glow: "text-glow-red", border: "rgba(255, 0, 60, 0.8)", bg: "bg-[#ff003c]" }
  }[d];
  return (
    // Capa de bloqueo global (Oscurece y desenfoca la red neuronal)
    /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-[#010204]/80 backdrop-blur-md p-4 animate-in fade-in duration-200", children: /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "glass-panel w-full max-w-lg p-6 flex flex-col relative",
        style: { borderTopColor: r.border, borderBottomColor: r.border },
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-80", style: { borderColor: r.border } }),
          /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-80", style: { borderColor: r.border } }),
          /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-80", style: { borderColor: r.border } }),
          /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-80", style: { borderColor: r.border } }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3 border-b border-white/10 pb-3 mb-4 relative z-10", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-2 h-2 animate-ping ${r.bg}` }),
            /* @__PURE__ */ t.jsx("h2", { className: `text-lg font-mono font-bold tracking-[0.2em] uppercase ${r.text} ${r.glow}`, children: n })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "font-mono text-sm text-white/80 leading-relaxed mb-8 relative z-10", children: l }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end gap-4 mt-auto border-t border-white/10 pt-4 relative z-10", children: [
            /* @__PURE__ */ t.jsx(J, { variant: "ghost", onClick: o, children: "CANCEL" }),
            /* @__PURE__ */ t.jsx(J, { variant: d, onClick: c || o, children: s })
          ] })
        ]
      }
    ) })
  );
}
function xe({ color: a = "cyan", label: o, className: c = "", ...n }) {
  const s = {
    cyan: "text-[#00e5ff] border-[#00e5ff] focus:border-[#00e5ff] focus:shadow-[0_4px_15px_-3px_rgba(0,229,255,0.5)] placeholder:text-[#00e5ff]/30",
    orange: "text-[#ff6400] border-[#ff6400] focus:border-[#ff6400] focus:shadow-[0_4px_15px_-3px_rgba(255,100,0,0.5)] placeholder:text-[#ff6400]/30",
    red: "text-[#ff003c] border-[#ff003c] focus:border-[#ff003c] focus:shadow-[0_4px_15px_-3px_rgba(255,0,60,0.6)] placeholder:text-[#ff003c]/30"
  }[a], d = a === "cyan" ? "text-[#00e5ff]" : a === "orange" ? "text-[#ff6400]" : "text-[#ff003c]";
  return /* @__PURE__ */ t.jsxs("div", { className: `flex flex-col gap-1 w-full ${c}`, children: [
    o && /* @__PURE__ */ t.jsx("label", { className: "text-[9px] font-mono tracking-[0.2em] text-white/50 uppercase mb-1", children: o }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative flex items-center group", children: [
      /* @__PURE__ */ t.jsx("span", { className: `absolute left-0 top-1/2 -translate-y-1/2 font-mono font-bold text-sm opacity-70 group-focus-within:opacity-100 transition-opacity ${d}`, children: ">" }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          className: `w-full bg-transparent border-b border-white/20 pl-5 py-2 font-mono text-sm text-white focus:outline-none transition-all duration-300 ${s}`,
          spellCheck: "false",
          ...n
        }
      )
    ] })
  ] });
}
function ue({ color: a = "cyan", label: o, className: c = "", ...n }) {
  const s = {
    cyan: "focus:border-[#00e5ff] focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] placeholder:text-[#00e5ff]/30 text-[#00e5ff]",
    orange: "focus:border-[#ff6400] focus:shadow-[0_0_20px_rgba(255,100,0,0.2)] placeholder:text-[#ff6400]/30 text-[#ff6400]",
    red: "focus:border-[#ff003c] focus:shadow-[0_0_20px_rgba(255,0,60,0.3)] placeholder:text-[#ff003c]/30 text-[#ff003c]"
  }[a], d = a === "cyan" ? "border-[#00e5ff]" : a === "orange" ? "border-[#ff6400]" : "border-[#ff003c]";
  return /* @__PURE__ */ t.jsxs("div", { className: `flex flex-col gap-2 w-full ${c}`, children: [
    o && /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-end border-b border-white/10 pb-1", children: [
      /* @__PURE__ */ t.jsx("label", { className: "text-[10px] text-white/60 font-mono tracking-[0.2em] uppercase", children: o }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex gap-[2px]", children: [
        /* @__PURE__ */ t.jsx("div", { className: `w-1 h-1 ${a === "red" ? "bg-[#ff003c]" : a === "orange" ? "bg-[#ff6400]" : "bg-[#00e5ff]"} opacity-50` }),
        /* @__PURE__ */ t.jsx("div", { className: `w-3 h-1 ${a === "red" ? "bg-[#ff003c]" : a === "orange" ? "bg-[#ff6400]" : "bg-[#00e5ff]"} opacity-50` })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative group mt-1", children: [
      /* @__PURE__ */ t.jsx("div", { className: `absolute top-0 left-0 w-2 h-2 border-t border-l opacity-50 group-focus-within:opacity-100 transition-opacity z-10 ${d}` }),
      /* @__PURE__ */ t.jsx("div", { className: `absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-50 group-focus-within:opacity-100 transition-opacity z-10 ${d}` }),
      /* @__PURE__ */ t.jsx(
        "textarea",
        {
          className: `w-full bg-black/40 backdrop-blur-sm border border-white/10 p-3 pl-4 font-mono text-sm focus:outline-none transition-all duration-300 resize-none rounded-sm ${s}`,
          spellCheck: "false",
          ...n
        }
      )
    ] })
  ] });
}
function me({ message: a, type: o = "cyan", duration: c = 5e3, onClose: n }) {
  const [l, s] = X(100);
  oe(() => {
    const r = setInterval(() => {
      s((h) => Math.max(0, h - 100 / (c / 10)));
    }, 10), f = setTimeout(n, c);
    return () => {
      clearInterval(r), clearTimeout(f);
    };
  }, [c, n]);
  const x = {
    cyan: { border: "border-[#00e5ff]", bg: "bg-[#00e5ff]", text: "text-[#00e5ff]", glow: "text-glow-cyan" },
    orange: { border: "border-[#ff6400]", bg: "bg-[#ff6400]", text: "text-[#ff6400]", glow: "text-glow-orange" },
    red: { border: "border-[#ff003c]", bg: "bg-[#ff003c]", text: "text-[#ff003c]", glow: "text-glow-red" }
  }[o];
  return /* @__PURE__ */ t.jsxs("div", { className: "glass-panel p-3 min-w-[280px] flex flex-col relative animate-in slide-in-from-right-full duration-300 mb-3", style: { borderLeftWidth: "4px", borderLeftColor: x.border.split("-")[1] }, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-start mb-2 relative z-10", children: [
      /* @__PURE__ */ t.jsxs("span", { className: `text-[9px] font-mono font-bold tracking-widest ${x.text} ${x.glow}`, children: [
        "SYSTEM_EVENT :: ",
        o.toUpperCase()
      ] }),
      /* @__PURE__ */ t.jsx("button", { onClick: n, className: "text-white/30 hover:text-white text-[10px] font-mono", children: "[X]" })
    ] }),
    /* @__PURE__ */ t.jsx("p", { className: "text-[11px] font-mono text-white/90 relative z-10", children: a }),
    /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 left-0 h-[1px] bg-white/10 w-full", children: /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `h-full ${x.bg} shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all linear`,
        style: { width: `${l}%` }
      }
    ) })
  ] });
}
function he({ text: a = "AWAITING_DATA", color: o = "cyan" }) {
  const n = {
    cyan: { text: "text-[#00e5ff]", border: "border-[#00e5ff]", bg: "bg-[#00e5ff]", glow: "shadow-[0_0_15px_rgba(0,229,255,0.5)]" },
    orange: { text: "text-[#ff6400]", border: "border-[#ff6400]", bg: "bg-[#ff6400]", glow: "shadow-[0_0_15px_rgba(255,100,0,0.5)]" },
    red: { text: "text-[#ff003c]", border: "border-[#ff003c]", bg: "bg-[#ff003c]", glow: "shadow-[0_0_15px_rgba(255,0,60,0.5)]" }
  }[o];
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 w-full py-6", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "relative w-12 h-12 flex items-center justify-center", children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `absolute inset-0 border ${n.border} opacity-40 animate-[spin_4s_linear_infinite]`,
          style: { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `absolute inset-2 border-t-2 border-b-2 border-l border-r border-transparent border-t-[#ffffff]/40 border-b-[#ffffff]/40 ${n.border} opacity-80 animate-[spin_2s_linear_infinite_reverse]`
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `absolute w-2 h-2 ${n.bg} ${n.glow} animate-ping`,
          style: { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: `w-1.5 h-1.5 ${n.bg} opacity-80` })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ t.jsx("span", { className: `text-[10px] font-mono tracking-[0.3em] uppercase ${n.text}`, children: a }),
      /* @__PURE__ */ t.jsx("span", { className: `w-[6px] h-[10px] ${n.bg} animate-pulse` })
    ] })
  ] });
}
function pe({ tabs: a, activeTab: o, onChange: c, color: n = "cyan" }) {
  const s = {
    cyan: { text: "text-[#00e5ff]", glow: "text-glow-cyan", border: "bg-[#00e5ff]", shadow: "shadow-[0_0_15px_rgba(0,229,255,0.6)]" },
    orange: { text: "text-[#ff6400]", glow: "text-glow-orange", border: "bg-[#ff6400]", shadow: "shadow-[0_0_15px_rgba(255,100,0,0.6)]" },
    red: { text: "text-[#ff003c]", glow: "text-glow-red", border: "bg-[#ff003c]", shadow: "shadow-[0_0_15px_rgba(255,0,60,0.6)]" }
  }[n];
  return /* @__PURE__ */ t.jsx("div", { className: "flex gap-1 border-b border-white/10 relative w-fit mb-6", children: a.map((d) => {
    const x = o === d.id;
    return /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => c(d.id),
        className: `px-6 py-2 font-mono text-[10px] tracking-[0.3em] uppercase transition-all duration-300 relative group
              ${x ? s.text + " " + s.glow : "text-white/40 hover:text-white/70"}`,
        children: [
          d.label,
          x && /* @__PURE__ */ t.jsx("div", { className: `absolute bottom-[-1px] left-0 w-full h-[2px] ${s.border} ${s.shadow} animate-in fade-in zoom-in duration-300` }),
          !x && /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-[-1px] left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-300" })
        ]
      },
      d.id
    );
  }) });
}
function ge({ content: a, children: o, position: c = "top" }) {
  const [n, l] = X(!1), s = c === "top" ? "bottom-full mb-2" : "top-full mt-2";
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "relative flex items-center justify-center inline-block",
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      children: [
        o,
        n && /* @__PURE__ */ t.jsx("div", { className: `absolute ${s} z-[100] animate-in fade-in zoom-in-95 duration-200 pointer-events-none`, children: /* @__PURE__ */ t.jsxs("div", { className: "glass-panel px-3 py-1.5 border-[#00e5ff]/40 bg-black/80 backdrop-blur-xl min-w-max", children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 left-0 w-1 h-1 border-t border-l border-[#00e5ff]" }),
          /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#00e5ff]" }),
          /* @__PURE__ */ t.jsx("p", { className: "text-[9px] font-mono text-[#00e5ff] tracking-tight uppercase", children: a })
        ] }) })
      ]
    }
  );
}
function we(a) {
  const o = a.getContext("2d"), c = () => {
    a.width = window.innerWidth, a.height = window.innerHeight;
  };
  c(), window.addEventListener("resize", c);
  const n = { x: 0, y: 0 };
  window.addEventListener("mousemove", (r) => {
    n.x = r.clientX, n.y = r.clientY;
  });
  const l = [], s = (r) => {
    if (!r) return "0, 229, 255";
    const f = r.outerHTML.toLowerCase();
    return f.includes("#ff003c") || f.includes("text-glow-red") || f.includes("bg-[#ff003c]") ? "255, 0, 60" : f.includes("#ff6400") || f.includes("text-glow-orange") || f.includes("bg-[#ff6400]") ? "255, 100, 0" : f.includes("#ff00ff") || f.includes("text-glow-magenta") ? "255, 0, 255" : "0, 229, 255";
  };
  window.addEventListener("click", (r) => {
    const h = r.target.closest("button, .glass-panel, input, textarea"), w = s(h);
    l.push({
      x: r.clientX,
      y: r.clientY,
      radius: 0,
      alpha: 1,
      // Onda fuerte para clics
      color: w,
      speed: 15
      // Velocidad estándar
    });
  }), window.addEventListener("keydown", (r) => {
    if (["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(r.key)) return;
    const f = document.activeElement;
    let h = Math.random() * a.width, w = a.height, v = "0, 229, 255";
    if (f && f.getBoundingClientRect && f.tagName !== "BODY") {
      const g = f.getBoundingClientRect();
      h = g.left + Math.random() * g.width, w = g.top + g.height / 2, v = s(f);
    }
    l.push({
      x: h,
      y: w,
      radius: 0,
      alpha: 0.4,
      // Ondas más suaves para el teclado (para no cegarte al escribir rápido)
      color: v,
      speed: 25
      // Ondas más rápidas, estilo "transmisión de datos"
    });
  });
  const d = Array.from({ length: 200 }).map(() => ({
    x: Math.random() * a.width,
    y: Math.random() * a.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  }));
  function x() {
    o.clearRect(0, 0, a.width, a.height), l.forEach((r) => {
      r.radius += r.speed, r.alpha -= r.speed * 12e-4;
    });
    for (let r = l.length - 1; r >= 0; r--)
      l[r].alpha <= 0 && l.splice(r, 1);
    d.forEach((r) => {
      r.x += r.vx, r.y += r.vy, (r.x < 0 || r.x > a.width) && (r.vx *= -1), (r.y < 0 || r.y > a.height) && (r.vy *= -1);
      let f = 0, h = "0, 229, 255";
      l.forEach((p) => {
        const _ = Math.sqrt(Math.pow(r.x - p.x, 2) + Math.pow(r.y - p.y, 2)), y = Math.abs(_ - p.radius);
        if (y < 80) {
          const T = (1 - y / 80) * p.alpha;
          T > f && (f = T, h = p.color);
        }
      }), d.forEach((p) => {
        const _ = r.x - p.x, y = r.y - p.y, k = Math.sqrt(_ * _ + y * y);
        if (k < 140) {
          const S = (1 - k / 140) * 0.15 + f * 0.8;
          o.strokeStyle = `rgba(${h}, ${S})`, o.lineWidth = f > 0.1 ? 1.5 : 0.8, o.beginPath(), o.moveTo(r.x, r.y), o.lineTo(p.x, p.y), o.stroke();
        }
      });
      const w = r.x - n.x, v = r.y - n.y, g = Math.sqrt(w * w + v * v);
      g < 160 && (o.strokeStyle = `rgba(0, 229, 255, ${0.4 * (1 - g / 160)})`, o.lineWidth = 1, o.beginPath(), o.moveTo(r.x, r.y), o.lineTo(n.x, n.y), o.stroke());
      const N = 2 + f * 3, E = o.createRadialGradient(r.x, r.y, 0, r.x, r.y, N * 4);
      E.addColorStop(0, `rgba(${h}, ${0.6 + f})`), E.addColorStop(1, `rgba(${h}, 0)`), o.fillStyle = E, o.beginPath(), o.arc(r.x, r.y, N, 0, Math.PI * 2), o.fill();
    }), requestAnimationFrame(x);
  }
  x();
}
export {
  me as NeoAlert,
  J as NeoButton,
  ie as NeoCard,
  xe as NeoInput,
  he as NeoLoader,
  be as NeoModal,
  fe as NeoProgressBar,
  de as NeoTable,
  pe as NeoTabs,
  ue as NeoTextArea,
  ce as NeoToggle,
  ge as NeoTooltip,
  we as initNeural
};
