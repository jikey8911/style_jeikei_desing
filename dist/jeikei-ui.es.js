import $e from "react";
var K = { exports: {} }, V = {};
var Oe;
function ur() {
  if (Oe) return V;
  Oe = 1;
  var d = $e, o = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, m = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(S, a, l) {
    var v, y = {}, R = null, j = null;
    l !== void 0 && (R = "" + l), a.key !== void 0 && (R = "" + a.key), a.ref !== void 0 && (j = a.ref);
    for (v in a) h.call(a, v) && !g.hasOwnProperty(v) && (y[v] = a[v]);
    if (S && S.defaultProps) for (v in a = S.defaultProps, a) y[v] === void 0 && (y[v] = a[v]);
    return { $$typeof: o, type: S, key: R, ref: j, props: y, _owner: m.current };
  }
  return V.Fragment = _, V.jsx = O, V.jsxs = O, V;
}
var U = {};
var ke;
function dr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && (function() {
    var d = $e, o = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), m = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.provider"), S = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), l = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.suspense_list"), y = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), j = /* @__PURE__ */ Symbol.for("react.offscreen"), D = Symbol.iterator, M = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[M];
      return typeof r == "function" ? r : null;
    }
    var P = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        I("error", e, t);
      }
    }
    function I(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var c = t.map(function(s) {
          return String(s);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var W = !1, ne = !1, G = !1, Ae = !1, Fe = !1, oe;
    oe = /* @__PURE__ */ Symbol.for("react.module.reference");
    function De(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === g || Fe || e === m || e === l || e === v || Ae || e === j || W || ne || G || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === y || e.$$typeof === O || e.$$typeof === S || e.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case _:
          return "Portal";
        case g:
          return "Profiler";
        case m:
          return "StrictMode";
        case l:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return ie(r) + ".Consumer";
          case O:
            var t = e;
            return ie(t._context) + ".Provider";
          case a:
            return Me(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : k(e.type) || "Memo";
          case R: {
            var f = e, c = f._payload, s = f._init;
            try {
              return k(s(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, Y = 0, se, le, fe, ce, ue, de, ve;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ie() {
      {
        if (Y === 0) {
          se = console.log, le = console.info, fe = console.warn, ce = console.error, ue = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
        Y++;
      }
    }
    function We() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: se
            }),
            info: N({}, e, {
              value: le
            }),
            warn: N({}, e, {
              value: fe
            }),
            error: N({}, e, {
              value: ce
            }),
            group: N({}, e, {
              value: ue
            }),
            groupCollapsed: N({}, e, {
              value: de
            }),
            groupEnd: N({}, e, {
              value: ve
            })
          });
        }
        Y < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = P.ReactCurrentDispatcher, H;
    function q(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, B;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ye();
    }
    function ge(e, r) {
      if (!e || Z)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = X.current, X.current = null, Ie();
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
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (E) {
              n = E;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var i = E.stack.split(`
`), w = n.stack.split(`
`), b = i.length - 1, x = w.length - 1; b >= 1 && x >= 0 && i[b] !== w[x]; )
            x--;
          for (; b >= 1 && x >= 0; b--, x--)
            if (i[b] !== w[x]) {
              if (b !== 1 || x !== 1)
                do
                  if (b--, x--, x < 0 || i[b] !== w[x]) {
                    var C = `
` + i[b].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, C), C;
                  }
                while (b >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = c, We(), Error.prepareStackTrace = f;
      }
      var F = e ? e.displayName || e.name : "", $ = F ? q(F) : "";
      return typeof e == "function" && B.set(e, $), $;
    }
    function Le(e, r, t) {
      return ge(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ve(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case l:
          return q("Suspense");
        case v:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return Le(e.render);
          case y:
            return z(e.type, r, t);
          case R: {
            var n = e, f = n._payload, c = n._init;
            try {
              return z(c(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, pe = {}, be = P.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, f) {
      {
        var c = Function.call.bind(L);
        for (var s in e)
          if (c(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var w = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              i = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              i = b;
            }
            i && !(i instanceof Error) && (J(f), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof i), J(null)), i instanceof Error && !(i.message in pe) && (pe[i.message] = !0, J(f), p("Failed %s type: %s", t, i.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function Q(e) {
      return qe(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function me(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), xe(e);
    }
    var ye = P.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, _e;
    function Ke(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && ye.current;
    }
    function He(e, r) {
      {
        var t = function() {
          we || (we = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          _e || (_e = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, f, c, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: c
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
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function er(e, r, t, n, f) {
      {
        var c, s = {}, i = null, w = null;
        t !== void 0 && (me(t), i = "" + t), Ge(r) && (me(r.key), i = "" + r.key), Ke(r) && (w = r.ref, Xe(r, f));
        for (c in r)
          L.call(r, c) && !Je.hasOwnProperty(c) && (s[c] = r[c]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (c in b)
            s[c] === void 0 && (s[c] = b[c]);
        }
        if (i || w) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && He(s, x), w && Ze(s, x);
        }
        return Qe(e, i, w, f, n, ye.current, s);
      }
    }
    var ee = P.ReactCurrentOwner, Ee = P.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Re() {
      {
        if (ee.current) {
          var e = k(ee.current.type);
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
    var je = {};
    function tr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + k(e._owner.type) + "."), A(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Te(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = T(e);
          if (typeof f == "function" && f !== e.entries)
            for (var c = f.call(e), s; !(s = c.next()).done; )
              te(s.value) && Te(s.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = k(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var f = k(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Se = {};
    function Pe(e, r, t, n, f, c) {
      {
        var s = De(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = rr();
          w ? i += w : i += Re();
          var b;
          e === null ? b = "null" : Q(e) ? b = "array" : e !== void 0 && e.$$typeof === o ? (b = "<" + (k(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, i);
        }
        var x = er(e, r, t, f, c);
        if (x == null)
          return x;
        if (s) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (Q(C)) {
                for (var F = 0; F < C.length; F++)
                  Ce(C[F], e);
                Object.freeze && Object.freeze(C);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(C, e);
        }
        if (L.call(r, "key")) {
          var $ = k(e), E = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), ae = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[$ + ae]) {
            var fr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, $, fr, $), Se[$ + ae] = !0;
          }
        }
        return e === h ? nr(x) : ar(x), x;
      }
    }
    function or(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var sr = ir, lr = or;
    U.Fragment = h, U.jsx = sr, U.jsxs = lr;
  })()), U;
}
var Ne;
function vr() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? K.exports = ur() : K.exports = dr()), K.exports;
}
var u = vr();
function gr({ children: d, variant: o = "cyan", className: _ = "", ...h }) {
  const m = "px-6 py-2 uppercase tracking-[0.15em] text-xs font-bold font-mono transition-all duration-300 border backdrop-blur-sm relative overflow-hidden group", g = {
    // Sistema Estándar
    cyan: "bg-[#00e5ff]/10 text-[#00e5ff] text-glow-cyan border-[#00e5ff]/50 hover:bg-[#00e5ff]/20 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]",
    // Alertas y Datos Activos
    orange: "bg-[#ff6400]/10 text-[#ff6400] text-glow-orange border-[#ff6400]/50 hover:bg-[#ff6400]/20 hover:border-[#ff6400] hover:shadow-[0_0_20px_rgba(255,100,0,0.6)]",
    // Crítico / Peligro (Rojo Intenso)
    red: "bg-[#ff003c]/10 text-[#ff003c] text-glow-red border-[#ff003c]/50 hover:bg-[#ff003c]/20 hover:border-[#ff003c] hover:shadow-[0_0_20px_rgba(255,0,60,0.7)]",
    // Secundario/Invisible
    ghost: "bg-transparent text-white/40 border-white/10 hover:text-[#00e5ff] hover:text-glow-cyan hover:border-[#00e5ff]/50 hover:bg-black/40"
  };
  return /* @__PURE__ */ u.jsx("button", { className: `${m} ${g[o]} ${_}`, ...h, children: d });
}
function pr({ title: d, value: o, status: _ = "OPTIMAL", color: h = "cyan" }) {
  const g = {
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
  }[h];
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: "glass-panel p-5 flex flex-col relative group",
      style: { borderTopColor: g.edge },
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]" }),
        /* @__PURE__ */ u.jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]" }),
        /* @__PURE__ */ u.jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]" }),
        /* @__PURE__ */ u.jsx("div", { className: `h-[2px] w-12 ${g.bg} opacity-70 mb-3 relative z-10` }),
        /* @__PURE__ */ u.jsx("div", { className: "text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-1 relative z-10", children: d }),
        /* @__PURE__ */ u.jsx("div", { className: `text-4xl font-bold font-mono ${g.text} ${g.glow} relative z-10`, children: o }),
        /* @__PURE__ */ u.jsxs("div", { className: "mt-6 flex justify-between items-end border-t border-[#00e5ff]/20 pt-2 relative z-10", children: [
          /* @__PURE__ */ u.jsxs("span", { className: `text-[9px] font-mono tracking-widest ${g.text} opacity-80`, children: [
            "SYS: ",
            _
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex gap-[2px] items-end", children: [
            /* @__PURE__ */ u.jsx("div", { className: `w-1.5 h-2 ${g.bg} animate-pulse` }),
            /* @__PURE__ */ u.jsx("div", { className: "w-1.5 h-3 bg-[#00e5ff]/40" }),
            /* @__PURE__ */ u.jsx("div", { className: "w-1.5 h-4 bg-[#00e5ff]/20" })
          ] })
        ] })
      ]
    }
  );
}
function br({ label: d, checked: o, onChange: _, color: h = "cyan" }) {
  const g = {
    cyan: "bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.6)]",
    orange: "bg-[#ff6400] shadow-[0_0_15px_rgba(255,100,0,0.6)]",
    red: "bg-[#ff003c] shadow-[0_0_15px_rgba(255,0,60,0.8)]"
  }[h];
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: "flex items-center justify-between group cursor-pointer",
      onClick: () => _(!o),
      children: [
        /* @__PURE__ */ u.jsx("span", { className: `text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-300 ${o ? "text-white" : "text-white/40"}`, children: d }),
        /* @__PURE__ */ u.jsxs("div", { className: `relative w-12 h-4 border transition-all duration-300 ${o ? "border-white/20 bg-white/5" : "border-white/10 bg-black/40"}`, style: { clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }, children: [
          /* @__PURE__ */ u.jsx("div", { className: "absolute top-1/2 left-2 right-2 h-[1px] bg-white/10 -translate-y-1/2" }),
          /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `absolute top-0 h-full w-5 transition-all duration-300 ease-out flex items-center justify-center ${o ? "left-[calc(100%-1.25rem)] " + g : "left-0 bg-white/10"}`,
              style: { clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" },
              children: [
                /* @__PURE__ */ u.jsx("div", { className: "w-[1px] h-2 bg-black/50" }),
                /* @__PURE__ */ u.jsx("div", { className: "w-[1px] h-2 bg-black/50 ml-1" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function xr({ label: d, value: o, color: _ = "cyan", segments: h = 20 }) {
  const g = {
    cyan: { active: "bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.6)]", inactive: "bg-[#00e5ff]/10", text: "text-[#00e5ff]" },
    orange: { active: "bg-[#ff6400] shadow-[0_0_10px_rgba(255,100,0,0.6)]", inactive: "bg-[#ff6400]/10", text: "text-[#ff6400]" },
    red: { active: "bg-[#ff003c] shadow-[0_0_10px_rgba(255,0,60,0.8)]", inactive: "bg-[#ff003c]/10", text: "text-[#ff003c]" }
  }[_], O = Math.round(Math.max(0, Math.min(100, o)) / 100 * h);
  return /* @__PURE__ */ u.jsxs("div", { className: "w-full flex flex-col gap-2 group", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-end border-b border-white/5 pb-1", children: [
      /* @__PURE__ */ u.jsx("span", { className: "text-[10px] text-white/60 font-mono tracking-[0.2em] uppercase", children: d }),
      /* @__PURE__ */ u.jsxs("span", { className: `text-xs font-bold font-mono ${g.text}`, children: [
        o.toFixed(1),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "flex gap-[2px] h-3 w-full", children: Array.from({ length: h }).map((S, a) => {
      const l = a < O;
      return /* @__PURE__ */ u.jsx(
        "div",
        {
          className: `flex-1 h-full skew-x-[-15deg] transition-all duration-300 ${l ? g.active : g.inactive}`
        },
        a
      );
    }) })
  ] });
}
function mr(d) {
  const o = d.getContext("2d"), _ = () => {
    d.width = window.innerWidth, d.height = window.innerHeight;
  };
  _(), window.addEventListener("resize", _);
  const h = { x: 0, y: 0 };
  window.addEventListener("mousemove", (a) => {
    h.x = a.clientX, h.y = a.clientY;
  });
  const m = [], g = (a) => {
    if (!a) return "0, 229, 255";
    const l = a.outerHTML.toLowerCase();
    return l.includes("#ff003c") || l.includes("text-glow-red") || l.includes("bg-[#ff003c]") ? "255, 0, 60" : l.includes("#ff6400") || l.includes("text-glow-orange") || l.includes("bg-[#ff6400]") ? "255, 100, 0" : l.includes("#ff00ff") || l.includes("text-glow-magenta") ? "255, 0, 255" : "0, 229, 255";
  };
  window.addEventListener("click", (a) => {
    const v = a.target.closest("button, .glass-panel, input, textarea"), y = g(v);
    m.push({
      x: a.clientX,
      y: a.clientY,
      radius: 0,
      alpha: 1,
      // Onda fuerte para clics
      color: y,
      speed: 15
      // Velocidad estándar
    });
  }), window.addEventListener("keydown", (a) => {
    if (["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(a.key)) return;
    const l = document.activeElement;
    let v = Math.random() * d.width, y = d.height, R = "0, 229, 255";
    if (l && l.getBoundingClientRect && l.tagName !== "BODY") {
      const j = l.getBoundingClientRect();
      v = j.left + Math.random() * j.width, y = j.top + j.height / 2, R = g(l);
    }
    m.push({
      x: v,
      y,
      radius: 0,
      alpha: 0.4,
      // Ondas más suaves para el teclado (para no cegarte al escribir rápido)
      color: R,
      speed: 25
      // Ondas más rápidas, estilo "transmisión de datos"
    });
  });
  const O = Array.from({ length: 200 }).map(() => ({
    x: Math.random() * d.width,
    y: Math.random() * d.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  }));
  function S() {
    o.clearRect(0, 0, d.width, d.height), m.forEach((a) => {
      a.radius += a.speed, a.alpha -= a.speed * 12e-4;
    });
    for (let a = m.length - 1; a >= 0; a--)
      m[a].alpha <= 0 && m.splice(a, 1);
    O.forEach((a) => {
      a.x += a.vx, a.y += a.vy, (a.x < 0 || a.x > d.width) && (a.vx *= -1), (a.y < 0 || a.y > d.height) && (a.vy *= -1);
      let l = 0, v = "0, 229, 255";
      m.forEach((T) => {
        const P = Math.sqrt(Math.pow(a.x - T.x, 2) + Math.pow(a.y - T.y, 2)), p = Math.abs(P - T.radius);
        if (p < 80) {
          const W = (1 - p / 80) * T.alpha;
          W > l && (l = W, v = T.color);
        }
      }), O.forEach((T) => {
        const P = a.x - T.x, p = a.y - T.y, I = Math.sqrt(P * P + p * p);
        if (I < 140) {
          const G = (1 - I / 140) * 0.15 + l * 0.8;
          o.strokeStyle = `rgba(${v}, ${G})`, o.lineWidth = l > 0.1 ? 1.5 : 0.8, o.beginPath(), o.moveTo(a.x, a.y), o.lineTo(T.x, T.y), o.stroke();
        }
      });
      const y = a.x - h.x, R = a.y - h.y, j = Math.sqrt(y * y + R * R);
      j < 160 && (o.strokeStyle = `rgba(0, 229, 255, ${0.4 * (1 - j / 160)})`, o.lineWidth = 1, o.beginPath(), o.moveTo(a.x, a.y), o.lineTo(h.x, h.y), o.stroke());
      const D = 2 + l * 3, M = o.createRadialGradient(a.x, a.y, 0, a.x, a.y, D * 4);
      M.addColorStop(0, `rgba(${v}, ${0.6 + l})`), M.addColorStop(1, `rgba(${v}, 0)`), o.fillStyle = M, o.beginPath(), o.arc(a.x, a.y, D, 0, Math.PI * 2), o.fill();
    }), requestAnimationFrame(S);
  }
  S();
}
export {
  gr as NeoButton,
  pr as NeoCard,
  xr as NeoProgressBar,
  br as NeoToggle,
  mr as initNeural
};
