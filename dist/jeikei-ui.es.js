import ke from "react";
var B = { exports: {} }, Y = {};
var Ce;
function ur() {
  if (Ce) return Y;
  Ce = 1;
  var h = ke, o = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, b = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(a, u, T) {
    var x, E = {}, P = null, O = null;
    T !== void 0 && (P = "" + T), u.key !== void 0 && (P = "" + u.key), u.ref !== void 0 && (O = u.ref);
    for (x in u) d.call(u, x) && !v.hasOwnProperty(x) && (E[x] = u[x]);
    if (a && a.defaultProps) for (x in u = a.defaultProps, u) E[x] === void 0 && (E[x] = u[x]);
    return { $$typeof: o, type: a, key: P, ref: O, props: E, _owner: b.current };
  }
  return Y.Fragment = _, Y.jsx = C, Y.jsxs = C, Y;
}
var L = {};
var Pe;
function dr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && (function() {
    var h = ke, o = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), b = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.provider"), a = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.suspense_list"), E = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.offscreen"), R = Symbol.iterator, $ = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = R && e[R] || e[$];
      return typeof r == "function" ? r : null;
    }
    var S = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        te("error", e, t);
      }
    }
    function te(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var f = t.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var J = !1, Ne = !1, Ae = !1, Fe = !1, $e = !1, ae;
    ae = /* @__PURE__ */ Symbol.for("react.module.reference");
    function De(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === v || $e || e === b || e === T || e === x || Fe || e === O || J || Ne || Ae || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === E || e.$$typeof === C || e.$$typeof === a || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case _:
          return "Portal";
        case v:
          return "Profiler";
        case b:
          return "StrictMode";
        case T:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            var r = e;
            return ne(r) + ".Consumer";
          case C:
            var t = e;
            return ne(t._context) + ".Provider";
          case u:
            return Me(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : k(e.type) || "Memo";
          case P: {
            var l = e, f = l._payload, s = l._init;
            try {
              return k(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, I = 0, oe, ie, se, le, fe, ce, ue;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ie() {
      {
        if (I === 0) {
          oe = console.log, ie = console.info, se = console.warn, le = console.error, fe = console.group, ce = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function We() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: oe
            }),
            info: A({}, e, {
              value: ie
            }),
            warn: A({}, e, {
              value: se
            }),
            error: A({}, e, {
              value: le
            }),
            group: A({}, e, {
              value: fe
            }),
            groupCollapsed: A({}, e, {
              value: ce
            }),
            groupEnd: A({}, e, {
              value: ue
            })
          });
        }
        I < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = S.ReactCurrentDispatcher, G;
    function V(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var X = !1, U;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ye();
    }
    function ve(e, r) {
      if (!e || X)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = K.current, K.current = null, Ie();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (w) {
              n = w;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (w) {
              n = w;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            n = w;
          }
          e();
        }
      } catch (w) {
        if (w && n && typeof w.stack == "string") {
          for (var i = w.stack.split(`
`), y = n.stack.split(`
`), p = i.length - 1, g = y.length - 1; p >= 1 && g >= 0 && i[p] !== y[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (i[p] !== y[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || i[p] !== y[g]) {
                    var j = `
` + i[p].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, j), j;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        X = !1, K.current = f, We(), Error.prepareStackTrace = l;
      }
      var M = e ? e.displayName || e.name : "", F = M ? V(M) : "";
      return typeof e == "function" && U.set(e, F), F;
    }
    function Le(e, r, t) {
      return ve(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ve(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case T:
          return V("Suspense");
        case x:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Le(e.render);
          case E:
            return q(e.type, r, t);
          case P: {
            var n = e, l = n._payload, f = n._init;
            try {
              return q(f(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, he = {}, pe = S.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, l) {
      {
        var f = Function.call.bind(W);
        for (var s in e)
          if (f(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              i = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              i = p;
            }
            i && !(i instanceof Error) && (z(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof i), z(null)), i instanceof Error && !(i.message in he) && (he[i.message] = !0, z(l), m("Failed %s type: %s", t, i.message), z(null));
          }
      }
    }
    var qe = Array.isArray;
    function H(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function be(e) {
      if (Be(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ge(e);
    }
    var xe = S.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ye;
    function Ke(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && xe.current;
    }
    function He(e, r) {
      {
        var t = function() {
          me || (me = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ye || (ye = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, l, f, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function er(e, r, t, n, l) {
      {
        var f, s = {}, i = null, y = null;
        t !== void 0 && (be(t), i = "" + t), Ge(r) && (be(r.key), i = "" + r.key), Ke(r) && (y = r.ref, Xe(r, l));
        for (f in r)
          W.call(r, f) && !Je.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            s[f] === void 0 && (s[f] = p[f]);
        }
        if (i || y) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && He(s, g), y && Ze(s, g);
        }
        return Qe(e, i, y, l, n, xe.current, s);
      }
    }
    var Z = S.ReactCurrentOwner, _e = S.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function we() {
      {
        if (Z.current) {
          var e = k(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Ee = {};
    function tr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + k(e._owner.type) + "."), D(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && Re(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = N(e);
          if (typeof l == "function" && l !== e.entries)
            for (var f = l.call(e), s; !(s = f.next()).done; )
              ee(s.value) && Re(s.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = k(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var l = k(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Te = {};
    function Se(e, r, t, n, l, f) {
      {
        var s = De(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = rr();
          y ? i += y : i += we();
          var p;
          e === null ? p = "null" : H(e) ? p = "array" : e !== void 0 && e.$$typeof === o ? (p = "<" + (k(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var g = er(e, r, t, l, f);
        if (g == null)
          return g;
        if (s) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (H(j)) {
                for (var M = 0; M < j.length; M++)
                  je(j[M], e);
                Object.freeze && Object.freeze(j);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(j, e);
        }
        if (W.call(r, "key")) {
          var F = k(e), w = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), re = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[F + re]) {
            var fr = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, F, fr, F), Te[F + re] = !0;
          }
        }
        return e === d ? nr(g) : ar(g), g;
      }
    }
    function or(e, r, t) {
      return Se(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Se(e, r, t, !1);
    }
    var sr = ir, lr = or;
    L.Fragment = d, L.jsx = sr, L.jsxs = lr;
  })()), L;
}
var Oe;
function vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? B.exports = ur() : B.exports = dr()), B.exports;
}
var c = vr();
function pr({ children: h, variant: o = "cyan", className: _ = "", ...d }) {
  const b = "px-6 py-2 uppercase tracking-[0.15em] text-xs font-bold font-mono transition-all duration-300 border backdrop-blur-sm relative overflow-hidden group", v = {
    // Sistema Estándar
    cyan: "bg-[#00e5ff]/10 text-[#00e5ff] text-glow-cyan border-[#00e5ff]/50 hover:bg-[#00e5ff]/20 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]",
    // Alertas y Datos Activos
    orange: "bg-[#ff6400]/10 text-[#ff6400] text-glow-orange border-[#ff6400]/50 hover:bg-[#ff6400]/20 hover:border-[#ff6400] hover:shadow-[0_0_20px_rgba(255,100,0,0.6)]",
    // Crítico / Peligro (Rojo Intenso)
    red: "bg-[#ff003c]/10 text-[#ff003c] text-glow-red border-[#ff003c]/50 hover:bg-[#ff003c]/20 hover:border-[#ff003c] hover:shadow-[0_0_20px_rgba(255,0,60,0.7)]",
    // Secundario/Invisible
    ghost: "bg-transparent text-white/40 border-white/10 hover:text-[#00e5ff] hover:text-glow-cyan hover:border-[#00e5ff]/50 hover:bg-black/40"
  };
  return /* @__PURE__ */ c.jsx("button", { className: `${b} ${v[o]} ${_}`, ...d, children: h });
}
function gr({ title: h, value: o, status: _ = "OPTIMAL", color: d = "cyan" }) {
  const v = {
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
  }[d];
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "glass-panel p-5 flex flex-col relative group",
      style: { borderTopColor: v.edge },
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]" }),
        /* @__PURE__ */ c.jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]" }),
        /* @__PURE__ */ c.jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]" }),
        /* @__PURE__ */ c.jsx("div", { className: `h-[2px] w-12 ${v.bg} opacity-70 mb-3 relative z-10` }),
        /* @__PURE__ */ c.jsx("div", { className: "text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-1 relative z-10", children: h }),
        /* @__PURE__ */ c.jsx("div", { className: `text-4xl font-bold font-mono ${v.text} ${v.glow} relative z-10`, children: o }),
        /* @__PURE__ */ c.jsxs("div", { className: "mt-6 flex justify-between items-end border-t border-[#00e5ff]/20 pt-2 relative z-10", children: [
          /* @__PURE__ */ c.jsxs("span", { className: `text-[9px] font-mono tracking-widest ${v.text} opacity-80`, children: [
            "SYS: ",
            _
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex gap-[2px] items-end", children: [
            /* @__PURE__ */ c.jsx("div", { className: `w-1.5 h-2 ${v.bg} animate-pulse` }),
            /* @__PURE__ */ c.jsx("div", { className: "w-1.5 h-3 bg-[#00e5ff]/40" }),
            /* @__PURE__ */ c.jsx("div", { className: "w-1.5 h-4 bg-[#00e5ff]/20" })
          ] })
        ] })
      ]
    }
  );
}
function br({ label: h, checked: o, onChange: _, color: d = "cyan" }) {
  const v = {
    cyan: "bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.6)]",
    orange: "bg-[#ff6400] shadow-[0_0_15px_rgba(255,100,0,0.6)]",
    red: "bg-[#ff003c] shadow-[0_0_15px_rgba(255,0,60,0.8)]"
  }[d];
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "flex items-center justify-between group cursor-pointer",
      onClick: () => _(!o),
      children: [
        /* @__PURE__ */ c.jsx("span", { className: `text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-300 ${o ? "text-white" : "text-white/40"}`, children: h }),
        /* @__PURE__ */ c.jsxs("div", { className: `relative w-12 h-4 border transition-all duration-300 ${o ? "border-white/20 bg-white/5" : "border-white/10 bg-black/40"}`, style: { clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }, children: [
          /* @__PURE__ */ c.jsx("div", { className: "absolute top-1/2 left-2 right-2 h-[1px] bg-white/10 -translate-y-1/2" }),
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `absolute top-0 h-full w-5 transition-all duration-300 ease-out flex items-center justify-center ${o ? "left-[calc(100%-1.25rem)] " + v : "left-0 bg-white/10"}`,
              style: { clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" },
              children: [
                /* @__PURE__ */ c.jsx("div", { className: "w-[1px] h-2 bg-black/50" }),
                /* @__PURE__ */ c.jsx("div", { className: "w-[1px] h-2 bg-black/50 ml-1" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function xr({ label: h, value: o, color: _ = "cyan", segments: d = 20 }) {
  const v = {
    cyan: { active: "bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.6)]", inactive: "bg-[#00e5ff]/10", text: "text-[#00e5ff]" },
    orange: { active: "bg-[#ff6400] shadow-[0_0_10px_rgba(255,100,0,0.6)]", inactive: "bg-[#ff6400]/10", text: "text-[#ff6400]" },
    red: { active: "bg-[#ff003c] shadow-[0_0_10px_rgba(255,0,60,0.8)]", inactive: "bg-[#ff003c]/10", text: "text-[#ff003c]" }
  }[_], C = Math.round(Math.max(0, Math.min(100, o)) / 100 * d);
  return /* @__PURE__ */ c.jsxs("div", { className: "w-full flex flex-col gap-2 group", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-end border-b border-white/5 pb-1", children: [
      /* @__PURE__ */ c.jsx("span", { className: "text-[10px] text-white/60 font-mono tracking-[0.2em] uppercase", children: h }),
      /* @__PURE__ */ c.jsxs("span", { className: `text-xs font-bold font-mono ${v.text}`, children: [
        o.toFixed(1),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "flex gap-[2px] h-3 w-full", children: Array.from({ length: d }).map((a, u) => {
      const T = u < C;
      return /* @__PURE__ */ c.jsx(
        "div",
        {
          className: `flex-1 h-full skew-x-[-15deg] transition-all duration-300 ${T ? v.active : v.inactive}`
        },
        u
      );
    }) })
  ] });
}
function mr(h) {
  const o = h.getContext("2d"), _ = () => {
    h.width = window.innerWidth, h.height = window.innerHeight;
  };
  _(), window.addEventListener("resize", _);
  const d = { x: 0, y: 0 };
  window.addEventListener("mousemove", (a) => {
    d.x = a.clientX, d.y = a.clientY;
  });
  const b = [];
  window.addEventListener("click", (a) => {
    b.push({
      x: a.clientX,
      y: a.clientY,
      radius: 0,
      // Empieza en el punto del clic
      alpha: 1
      // Máxima intensidad inicial
    });
  });
  const v = Array.from({ length: 400 }).map(() => ({
    x: Math.random() * h.width,
    y: Math.random() * h.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  }));
  function C() {
    o.clearRect(0, 0, h.width, h.height), b.forEach((a) => {
      a.radius += 15, a.alpha -= 0.015;
    });
    for (let a = b.length - 1; a >= 0; a--)
      b[a].alpha <= 0 && b.splice(a, 1);
    v.forEach((a) => {
      a.x += a.vx, a.y += a.vy, (a.x < 0 || a.x > h.width) && (a.vx *= -1), (a.y < 0 || a.y > h.height) && (a.vy *= -1);
      let u = 0;
      b.forEach((R) => {
        const $ = Math.sqrt(Math.pow(a.x - R.x, 2) + Math.pow(a.y - R.y, 2)), N = Math.abs($ - R.radius);
        if (N < 80) {
          const S = 1 - N / 80;
          u = Math.max(u, S * R.alpha);
        }
      }), v.forEach((R) => {
        const $ = a.x - R.x, N = a.y - R.y, S = Math.sqrt($ * $ + N * N);
        if (S < 140) {
          const J = (1 - S / 140) * 0.15 + u * 0.8;
          o.strokeStyle = `rgba(37, 150, 190, ${J})`, o.lineWidth = u > 0.1 ? 1.5 : 0.8, o.beginPath(), o.moveTo(a.x, a.y), o.lineTo(R.x, R.y), o.stroke();
        }
      });
      const T = a.x - d.x, x = a.y - d.y, E = Math.sqrt(T * T + x * x);
      E < 160 && (o.strokeStyle = `rgba(37, 150, 190, ${1 - E / 160})`, o.lineWidth = 1, o.beginPath(), o.moveTo(a.x, a.y), o.lineTo(d.x, d.y), o.stroke());
      const P = 2 + u * 3, O = o.createRadialGradient(a.x, a.y, 0, a.x, a.y, P * 4);
      O.addColorStop(0, `rgba(37, 150, 190, ${0.6 + u})`), O.addColorStop(1, "rgba(37, 150, 190, 0)"), o.fillStyle = O, o.beginPath(), o.arc(a.x, a.y, P, 0, Math.PI * 2), o.fill();
    }), requestAnimationFrame(C);
  }
  C();
}
export {
  pr as NeoButton,
  gr as NeoCard,
  xr as NeoProgressBar,
  br as NeoToggle,
  mr as initNeural
};
