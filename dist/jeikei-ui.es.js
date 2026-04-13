import Ae, { useState as Me, useEffect as bt } from "react";
var G = { exports: {} }, z = {};
var Se;
function xt() {
  if (Se) return z;
  Se = 1;
  var s = Ae, n = /* @__PURE__ */ Symbol.for("react.element"), b = /* @__PURE__ */ Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, x = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(v, a, u) {
    var m, j = {}, R = null, T = null;
    u !== void 0 && (R = "" + u), a.key !== void 0 && (R = "" + a.key), a.ref !== void 0 && (T = a.ref);
    for (m in a) i.call(a, m) && !f.hasOwnProperty(m) && (j[m] = a[m]);
    if (v && v.defaultProps) for (m in a = v.defaultProps, a) j[m] === void 0 && (j[m] = a[m]);
    return { $$typeof: n, type: v, key: R, ref: T, props: j, _owner: x.current };
  }
  return z.Fragment = b, z.jsx = g, z.jsxs = g, z;
}
var V = {};
var $e;
function pt() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && (function() {
    var s = Ae, n = /* @__PURE__ */ Symbol.for("react.element"), b = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), g = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), u = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.suspense_list"), j = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.offscreen"), D = Symbol.iterator, F = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[F];
      return typeof r == "function" ? r : null;
    }
    var S = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          o[l - 1] = arguments[l];
        I("error", e, o);
      }
    }
    function I(e, r, o) {
      {
        var l = S.ReactDebugCurrentFrame, p = l.getStackAddendum();
        p !== "" && (r += "%s", o = o.concat([p]));
        var h = o.map(function(d) {
          return String(d);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var L = !1, oe = !1, K = !1, De = !1, Fe = !1, ne;
    ne = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === f || Fe || e === x || e === u || e === m || De || e === T || L || oe || K || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === j || e.$$typeof === g || e.$$typeof === v || e.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Le(e, r, o) {
      var l = e.displayName;
      if (l)
        return l;
      var p = r.displayName || r.name || "";
      return p !== "" ? o + "(" + p + ")" : o;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case b:
          return "Portal";
        case f:
          return "Profiler";
        case x:
          return "StrictMode";
        case u:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return se(r) + ".Consumer";
          case g:
            var o = e;
            return se(o._context) + ".Provider";
          case a:
            return Le(e, e.render, "ForwardRef");
          case j:
            var l = e.displayName || null;
            return l !== null ? l : $(e.type) || "Memo";
          case R: {
            var p = e, h = p._payload, d = p._init;
            try {
              return $(d(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, W = 0, ie, le, fe, ce, de, ue, be;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function We() {
      {
        if (W === 0) {
          ie = console.log, le = console.info, fe = console.warn, ce = console.error, de = console.group, ue = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
        W++;
      }
    }
    function Ye() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ie
            }),
            info: P({}, e, {
              value: le
            }),
            warn: P({}, e, {
              value: fe
            }),
            error: P({}, e, {
              value: ce
            }),
            group: P({}, e, {
              value: de
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: be
            })
          });
        }
        W < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = S.ReactCurrentDispatcher, H;
    function U(e, r, o) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (p) {
            var l = p.stack.trim().match(/\n( *(at )?)/);
            H = l && l[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, B;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      B = new ze();
    }
    function pe(e, r) {
      if (!e || Z)
        return "";
      {
        var o = B.get(e);
        if (o !== void 0)
          return o;
      }
      var l;
      Z = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = X.current, X.current = null, We();
      try {
        if (r) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (N) {
              l = N;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (N) {
              l = N;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            l = N;
          }
          e();
        }
      } catch (N) {
        if (N && l && typeof N.stack == "string") {
          for (var c = N.stack.split(`
`), E = l.stack.split(`
`), y = c.length - 1, _ = E.length - 1; y >= 1 && _ >= 0 && c[y] !== E[_]; )
            _--;
          for (; y >= 1 && _ >= 0; y--, _--)
            if (c[y] !== E[_]) {
              if (y !== 1 || _ !== 1)
                do
                  if (y--, _--, _ < 0 || c[y] !== E[_]) {
                    var k = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, k), k;
                  }
                while (y >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = h, Ye(), Error.prepareStackTrace = p;
      }
      var M = e ? e.displayName || e.name : "", O = M ? U(M) : "";
      return typeof e == "function" && B.set(e, O), O;
    }
    function Ve(e, r, o) {
      return pe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ue(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case u:
          return U("Suspense");
        case m:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return Ve(e.render);
          case j:
            return q(e.type, r, o);
          case R: {
            var l = e, p = l._payload, h = l._init;
            try {
              return q(h(p), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, he = {}, ge = S.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, o = q(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(o);
      } else
        ge.setExtraStackFrame(null);
    }
    function Be(e, r, o, l, p) {
      {
        var h = Function.call.bind(Y);
        for (var d in e)
          if (h(e, d)) {
            var c = void 0;
            try {
              if (typeof e[d] != "function") {
                var E = Error((l || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              c = e[d](r, d, l, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (J(p), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", o, d, typeof c), J(null)), c instanceof Error && !(c.message in he) && (he[c.message] = !0, J(p), w("Failed %s type: %s", o, c.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function Q(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Ge(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ve(e) {
      if (Ge(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), me(e);
    }
    var we = S.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, _e;
    function Xe(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && we.current;
    }
    function Qe(e, r) {
      {
        var o = function() {
          ye || (ye = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function et(e, r) {
      {
        var o = function() {
          _e || (_e = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var tt = function(e, r, o, l, p, h, d) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: d,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function rt(e, r, o, l, p) {
      {
        var h, d = {}, c = null, E = null;
        o !== void 0 && (ve(o), c = "" + o), He(r) && (ve(r.key), c = "" + r.key), Xe(r) && (E = r.ref, Ze(r, p));
        for (h in r)
          Y.call(r, h) && !Ke.hasOwnProperty(h) && (d[h] = r[h]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (h in y)
            d[h] === void 0 && (d[h] = y[h]);
        }
        if (c || E) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Qe(d, _), E && et(d, _);
        }
        return tt(e, c, E, p, l, we.current, d);
      }
    }
    var ee = S.ReactCurrentOwner, je = S.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, o = q(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(o);
      } else
        je.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ee() {
      {
        if (ee.current) {
          var e = $(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function at(e) {
      return "";
    }
    var Ne = {};
    function ot(e) {
      {
        var r = Ee();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = ot(r);
        if (Ne[o])
          return;
        Ne[o] = !0;
        var l = "";
        e && e._owner && e._owner !== ee.current && (l = " It was passed a child from " + $(e._owner.type) + "."), A(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), A(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            re(l) && Re(l, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = C(e);
          if (typeof p == "function" && p !== e.entries)
            for (var h = p.call(e), d; !(d = h.next()).done; )
              re(d.value) && Re(d.value, r);
        }
      }
    }
    function nt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          o = r.propTypes;
        else
          return;
        if (o) {
          var l = $(r);
          Be(o, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var p = $(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function st(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var l = r[o];
          if (l !== "children" && l !== "key") {
            A(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Ce = {};
    function ke(e, r, o, l, p, h) {
      {
        var d = Ie(e);
        if (!d) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = at();
          E ? c += E : c += Ee();
          var y;
          e === null ? y = "null" : Q(e) ? y = "array" : e !== void 0 && e.$$typeof === n ? (y = "<" + ($(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var _ = rt(e, r, o, p, h);
        if (_ == null)
          return _;
        if (d) {
          var k = r.children;
          if (k !== void 0)
            if (l)
              if (Q(k)) {
                for (var M = 0; M < k.length; M++)
                  Te(k[M], e);
                Object.freeze && Object.freeze(k);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(k, e);
        }
        if (Y.call(r, "key")) {
          var O = $(e), N = Object.keys(r).filter(function(ut) {
            return ut !== "key";
          }), ae = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[O + ae]) {
            var dt = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, O, dt, O), Ce[O + ae] = !0;
          }
        }
        return e === i ? st(_) : nt(_), _;
      }
    }
    function it(e, r, o) {
      return ke(e, r, o, !0);
    }
    function lt(e, r, o) {
      return ke(e, r, o, !1);
    }
    var ft = lt, ct = it;
    V.Fragment = i, V.jsx = ft, V.jsxs = ct;
  })()), V;
}
var Pe;
function ht() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? G.exports = xt() : G.exports = pt()), G.exports;
}
var t = ht();
function Oe({ children: s, variant: n = "cyan", className: b = "", ...i }) {
  const x = "px-6 py-2 uppercase tracking-[0.15em] text-xs font-bold font-mono transition-all duration-300 border backdrop-blur-sm relative overflow-hidden group", f = {
    // Sistema Estándar
    cyan: "bg-[#00e5ff]/10 text-[#00e5ff] text-glow-cyan border-[#00e5ff]/50 hover:bg-[#00e5ff]/20 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]",
    // Alertas y Datos Activos
    orange: "bg-[#ff6400]/10 text-[#ff6400] text-glow-orange border-[#ff6400]/50 hover:bg-[#ff6400]/20 hover:border-[#ff6400] hover:shadow-[0_0_20px_rgba(255,100,0,0.6)]",
    // Crítico / Peligro (Rojo Intenso)
    red: "bg-[#ff003c]/10 text-[#ff003c] text-glow-red border-[#ff003c]/50 hover:bg-[#ff003c]/20 hover:border-[#ff003c] hover:shadow-[0_0_20px_rgba(255,0,60,0.7)]",
    // Secundario/Invisible
    ghost: "bg-transparent text-white/40 border-white/10 hover:text-[#00e5ff] hover:text-glow-cyan hover:border-[#00e5ff]/50 hover:bg-black/40"
  };
  return /* @__PURE__ */ t.jsx("button", { className: `${x} ${f[n]} ${b}`, ...i, children: s });
}
function mt({ title: s, value: n, status: b = "OPTIMAL", color: i = "cyan" }) {
  const f = {
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
  }[i];
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "glass-panel p-5 flex flex-col relative group",
      style: { borderTopColor: f.edge },
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]" }),
        /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]" }),
        /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]" }),
        /* @__PURE__ */ t.jsx("div", { className: `h-[2px] w-12 ${f.bg} opacity-70 mb-3 relative z-10` }),
        /* @__PURE__ */ t.jsx("div", { className: "text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-1 relative z-10", children: s }),
        /* @__PURE__ */ t.jsx("div", { className: `text-4xl font-bold font-mono ${f.text} ${f.glow} relative z-10`, children: n }),
        /* @__PURE__ */ t.jsxs("div", { className: "mt-6 flex justify-between items-end border-t border-[#00e5ff]/20 pt-2 relative z-10", children: [
          /* @__PURE__ */ t.jsxs("span", { className: `text-[9px] font-mono tracking-widest ${f.text} opacity-80`, children: [
            "SYS: ",
            b
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex gap-[2px] items-end", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-1.5 h-2 ${f.bg} animate-pulse` }),
            /* @__PURE__ */ t.jsx("div", { className: "w-1.5 h-3 bg-[#00e5ff]/40" }),
            /* @__PURE__ */ t.jsx("div", { className: "w-1.5 h-4 bg-[#00e5ff]/20" })
          ] })
        ] })
      ]
    }
  );
}
function vt({ label: s, checked: n, onChange: b, color: i = "cyan" }) {
  const f = {
    cyan: "bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.6)]",
    orange: "bg-[#ff6400] shadow-[0_0_15px_rgba(255,100,0,0.6)]",
    red: "bg-[#ff003c] shadow-[0_0_15px_rgba(255,0,60,0.8)]"
  }[i];
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "flex items-center justify-between group cursor-pointer",
      onClick: () => b(!n),
      children: [
        /* @__PURE__ */ t.jsx("span", { className: `text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-300 ${n ? "text-white" : "text-white/40"}`, children: s }),
        /* @__PURE__ */ t.jsxs("div", { className: `relative w-12 h-4 border transition-all duration-300 ${n ? "border-white/20 bg-white/5" : "border-white/10 bg-black/40"}`, style: { clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }, children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute top-1/2 left-2 right-2 h-[1px] bg-white/10 -translate-y-1/2" }),
          /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: `absolute top-0 h-full w-5 transition-all duration-300 ease-out flex items-center justify-center ${n ? "left-[calc(100%-1.25rem)] " + f : "left-0 bg-white/10"}`,
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
function wt({ label: s, value: n, color: b = "cyan", segments: i = 20 }) {
  const f = {
    cyan: { active: "bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.6)]", inactive: "bg-[#00e5ff]/10", text: "text-[#00e5ff]" },
    orange: { active: "bg-[#ff6400] shadow-[0_0_10px_rgba(255,100,0,0.6)]", inactive: "bg-[#ff6400]/10", text: "text-[#ff6400]" },
    red: { active: "bg-[#ff003c] shadow-[0_0_10px_rgba(255,0,60,0.8)]", inactive: "bg-[#ff003c]/10", text: "text-[#ff003c]" }
  }[b], g = Math.round(Math.max(0, Math.min(100, n)) / 100 * i);
  return /* @__PURE__ */ t.jsxs("div", { className: "w-full flex flex-col gap-2 group", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-end border-b border-white/5 pb-1", children: [
      /* @__PURE__ */ t.jsx("span", { className: "text-[10px] text-white/60 font-mono tracking-[0.2em] uppercase", children: s }),
      /* @__PURE__ */ t.jsxs("span", { className: `text-xs font-bold font-mono ${f.text}`, children: [
        n.toFixed(1),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "flex gap-[2px] h-3 w-full", children: Array.from({ length: i }).map((v, a) => {
      const u = a < g;
      return /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `flex-1 h-full skew-x-[-15deg] transition-all duration-300 ${u ? f.active : f.inactive}`
        },
        a
      );
    }) })
  ] });
}
function yt({ headers: s, data: n, color: b = "cyan" }) {
  const i = {
    cyan: "hover:bg-[#00e5ff]/5 border-l-[#00e5ff] text-[#00e5ff]",
    orange: "hover:bg-[#ff6400]/5 border-l-[#ff6400] text-[#ff6400]",
    red: "hover:bg-[#ff003c]/5 border-l-[#ff003c] text-[#ff003c]"
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "glass-panel w-full overflow-hidden border-t border-white/10", children: [
    /* @__PURE__ */ t.jsxs("table", { className: "w-full text-left border-collapse", children: [
      /* @__PURE__ */ t.jsx("thead", { children: /* @__PURE__ */ t.jsx("tr", { className: "border-b border-[#00e5ff]/30 bg-[#00e5ff]/5", children: s.map((x, f) => /* @__PURE__ */ t.jsx("th", { className: "p-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[#00e5ff] text-glow-cyan font-bold", children: x }, f)) }) }),
      /* @__PURE__ */ t.jsx("tbody", { className: "font-mono text-[11px]", children: n.map((x, f) => /* @__PURE__ */ t.jsxs(
        "tr",
        {
          className: `group relative border-b border-white/5 transition-all duration-300 border-l-2 border-l-transparent ${i[b]}`,
          children: [
            Object.values(x).map((g, v) => /* @__PURE__ */ t.jsx("td", { className: "p-4 text-white/80 relative z-10", children: g }, v)),
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
        f
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
function _t({
  isOpen: s,
  onClose: n,
  onAction: b,
  title: i,
  children: x,
  actionText: f = "CONFIRM",
  color: g = "red"
}) {
  if (!s) return null;
  const a = {
    cyan: { text: "text-[#00e5ff]", glow: "text-glow-cyan", border: "rgba(0, 229, 255, 0.8)", bg: "bg-[#00e5ff]" },
    orange: { text: "text-[#ff6400]", glow: "text-glow-orange", border: "rgba(255, 100, 0, 0.8)", bg: "bg-[#ff6400]" },
    red: { text: "text-[#ff003c]", glow: "text-glow-red", border: "rgba(255, 0, 60, 0.8)", bg: "bg-[#ff003c]" }
  }[g];
  return (
    // Capa de bloqueo global (Oscurece y desenfoca la red neuronal)
    /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-[#010204]/80 backdrop-blur-md p-4 animate-in fade-in duration-200", children: /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "glass-panel w-full max-w-lg p-6 flex flex-col relative",
        style: { borderTopColor: a.border, borderBottomColor: a.border },
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-80", style: { borderColor: a.border } }),
          /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-80", style: { borderColor: a.border } }),
          /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-80", style: { borderColor: a.border } }),
          /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-80", style: { borderColor: a.border } }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3 border-b border-white/10 pb-3 mb-4 relative z-10", children: [
            /* @__PURE__ */ t.jsx("div", { className: `w-2 h-2 animate-ping ${a.bg}` }),
            /* @__PURE__ */ t.jsx("h2", { className: `text-lg font-mono font-bold tracking-[0.2em] uppercase ${a.text} ${a.glow}`, children: i })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "font-mono text-sm text-white/80 leading-relaxed mb-8 relative z-10", children: x }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end gap-4 mt-auto border-t border-white/10 pt-4 relative z-10", children: [
            /* @__PURE__ */ t.jsx(Oe, { variant: "ghost", onClick: n, children: "CANCEL" }),
            /* @__PURE__ */ t.jsx(Oe, { variant: g, onClick: b || n, children: f })
          ] })
        ]
      }
    ) })
  );
}
function jt({ color: s = "cyan", label: n, className: b = "", ...i }) {
  const f = {
    cyan: "text-[#00e5ff] border-[#00e5ff] focus:border-[#00e5ff] focus:shadow-[0_4px_15px_-3px_rgba(0,229,255,0.5)] placeholder:text-[#00e5ff]/30",
    orange: "text-[#ff6400] border-[#ff6400] focus:border-[#ff6400] focus:shadow-[0_4px_15px_-3px_rgba(255,100,0,0.5)] placeholder:text-[#ff6400]/30",
    red: "text-[#ff003c] border-[#ff003c] focus:border-[#ff003c] focus:shadow-[0_4px_15px_-3px_rgba(255,0,60,0.6)] placeholder:text-[#ff003c]/30"
  }[s], g = s === "cyan" ? "text-[#00e5ff]" : s === "orange" ? "text-[#ff6400]" : "text-[#ff003c]";
  return /* @__PURE__ */ t.jsxs("div", { className: `flex flex-col gap-1 w-full ${b}`, children: [
    n && /* @__PURE__ */ t.jsx("label", { className: "text-[9px] font-mono tracking-[0.2em] text-white/50 uppercase mb-1", children: n }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative flex items-center group", children: [
      /* @__PURE__ */ t.jsx("span", { className: `absolute left-0 top-1/2 -translate-y-1/2 font-mono font-bold text-sm opacity-70 group-focus-within:opacity-100 transition-opacity ${g}`, children: ">" }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          className: `w-full bg-transparent border-b border-white/20 pl-5 py-2 font-mono text-sm text-white focus:outline-none transition-all duration-300 ${f}`,
          spellCheck: "false",
          ...i
        }
      )
    ] })
  ] });
}
function Et({ color: s = "cyan", label: n, className: b = "", ...i }) {
  const f = {
    cyan: "focus:border-[#00e5ff] focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] placeholder:text-[#00e5ff]/30 text-[#00e5ff]",
    orange: "focus:border-[#ff6400] focus:shadow-[0_0_20px_rgba(255,100,0,0.2)] placeholder:text-[#ff6400]/30 text-[#ff6400]",
    red: "focus:border-[#ff003c] focus:shadow-[0_0_20px_rgba(255,0,60,0.3)] placeholder:text-[#ff003c]/30 text-[#ff003c]"
  }[s], g = s === "cyan" ? "border-[#00e5ff]" : s === "orange" ? "border-[#ff6400]" : "border-[#ff003c]";
  return /* @__PURE__ */ t.jsxs("div", { className: `flex flex-col gap-2 w-full ${b}`, children: [
    n && /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-end border-b border-white/10 pb-1", children: [
      /* @__PURE__ */ t.jsx("label", { className: "text-[10px] text-white/60 font-mono tracking-[0.2em] uppercase", children: n }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex gap-[2px]", children: [
        /* @__PURE__ */ t.jsx("div", { className: `w-1 h-1 ${s === "red" ? "bg-[#ff003c]" : s === "orange" ? "bg-[#ff6400]" : "bg-[#00e5ff]"} opacity-50` }),
        /* @__PURE__ */ t.jsx("div", { className: `w-3 h-1 ${s === "red" ? "bg-[#ff003c]" : s === "orange" ? "bg-[#ff6400]" : "bg-[#00e5ff]"} opacity-50` })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative group mt-1", children: [
      /* @__PURE__ */ t.jsx("div", { className: `absolute top-0 left-0 w-2 h-2 border-t border-l opacity-50 group-focus-within:opacity-100 transition-opacity z-10 ${g}` }),
      /* @__PURE__ */ t.jsx("div", { className: `absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-50 group-focus-within:opacity-100 transition-opacity z-10 ${g}` }),
      /* @__PURE__ */ t.jsx(
        "textarea",
        {
          className: `w-full bg-black/40 backdrop-blur-sm border border-white/10 p-3 pl-4 font-mono text-sm focus:outline-none transition-all duration-300 resize-none rounded-sm ${f}`,
          spellCheck: "false",
          ...i
        }
      )
    ] })
  ] });
}
function Nt({ message: s, type: n = "cyan", duration: b = 5e3, onClose: i }) {
  const [x, f] = Me(100);
  bt(() => {
    const a = setInterval(() => {
      f((m) => Math.max(0, m - 100 / (b / 10)));
    }, 10), u = setTimeout(i, b);
    return () => {
      clearInterval(a), clearTimeout(u);
    };
  }, [b, i]);
  const v = {
    cyan: { border: "border-[#00e5ff]", bg: "bg-[#00e5ff]", text: "text-[#00e5ff]", glow: "text-glow-cyan" },
    orange: { border: "border-[#ff6400]", bg: "bg-[#ff6400]", text: "text-[#ff6400]", glow: "text-glow-orange" },
    red: { border: "border-[#ff003c]", bg: "bg-[#ff003c]", text: "text-[#ff003c]", glow: "text-glow-red" }
  }[n];
  return /* @__PURE__ */ t.jsxs("div", { className: "glass-panel p-3 min-w-[280px] flex flex-col relative animate-in slide-in-from-right-full duration-300 mb-3", style: { borderLeftWidth: "4px", borderLeftColor: v.border.split("-")[1] }, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-start mb-2 relative z-10", children: [
      /* @__PURE__ */ t.jsxs("span", { className: `text-[9px] font-mono font-bold tracking-widest ${v.text} ${v.glow}`, children: [
        "SYSTEM_EVENT :: ",
        n.toUpperCase()
      ] }),
      /* @__PURE__ */ t.jsx("button", { onClick: i, className: "text-white/30 hover:text-white text-[10px] font-mono", children: "[X]" })
    ] }),
    /* @__PURE__ */ t.jsx("p", { className: "text-[11px] font-mono text-white/90 relative z-10", children: s }),
    /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 left-0 h-[1px] bg-white/10 w-full", children: /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `h-full ${v.bg} shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all linear`,
        style: { width: `${x}%` }
      }
    ) })
  ] });
}
function Rt({ text: s = "AWAITING_DATA", color: n = "cyan" }) {
  const i = {
    cyan: { text: "text-[#00e5ff]", border: "border-[#00e5ff]", bg: "bg-[#00e5ff]", glow: "shadow-[0_0_15px_rgba(0,229,255,0.5)]" },
    orange: { text: "text-[#ff6400]", border: "border-[#ff6400]", bg: "bg-[#ff6400]", glow: "shadow-[0_0_15px_rgba(255,100,0,0.5)]" },
    red: { text: "text-[#ff003c]", border: "border-[#ff003c]", bg: "bg-[#ff003c]", glow: "shadow-[0_0_15px_rgba(255,0,60,0.5)]" }
  }[n];
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 w-full py-6", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "relative w-12 h-12 flex items-center justify-center", children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `absolute inset-0 border ${i.border} opacity-40 animate-[spin_4s_linear_infinite]`,
          style: { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `absolute inset-2 border-t-2 border-b-2 border-l border-r border-transparent border-t-[#ffffff]/40 border-b-[#ffffff]/40 ${i.border} opacity-80 animate-[spin_2s_linear_infinite_reverse]`
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `absolute w-2 h-2 ${i.bg} ${i.glow} animate-ping`,
          style: { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: `w-1.5 h-1.5 ${i.bg} opacity-80` })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ t.jsx("span", { className: `text-[10px] font-mono tracking-[0.3em] uppercase ${i.text}`, children: s }),
      /* @__PURE__ */ t.jsx("span", { className: `w-[6px] h-[10px] ${i.bg} animate-pulse` })
    ] })
  ] });
}
function Tt({ tabs: s, activeTab: n, onChange: b, color: i = "cyan" }) {
  const f = {
    cyan: { text: "text-[#00e5ff]", glow: "text-glow-cyan", border: "bg-[#00e5ff]", shadow: "shadow-[0_0_15px_rgba(0,229,255,0.6)]" },
    orange: { text: "text-[#ff6400]", glow: "text-glow-orange", border: "bg-[#ff6400]", shadow: "shadow-[0_0_15px_rgba(255,100,0,0.6)]" },
    red: { text: "text-[#ff003c]", glow: "text-glow-red", border: "bg-[#ff003c]", shadow: "shadow-[0_0_15px_rgba(255,0,60,0.6)]" }
  }[i];
  return /* @__PURE__ */ t.jsx("div", { className: "flex gap-1 border-b border-white/10 relative w-fit mb-6", children: s.map((g) => {
    const v = n === g.id;
    return /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => b(g.id),
        className: `px-6 py-2 font-mono text-[10px] tracking-[0.3em] uppercase transition-all duration-300 relative group
              ${v ? f.text + " " + f.glow : "text-white/40 hover:text-white/70"}`,
        children: [
          g.label,
          v && /* @__PURE__ */ t.jsx("div", { className: `absolute bottom-[-1px] left-0 w-full h-[2px] ${f.border} ${f.shadow} animate-in fade-in zoom-in duration-300` }),
          !v && /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-[-1px] left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-300" })
        ]
      },
      g.id
    );
  }) });
}
function Ct({ content: s, children: n, position: b = "top" }) {
  const [i, x] = Me(!1), f = b === "top" ? "bottom-full mb-2" : "top-full mt-2";
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "relative flex items-center justify-center inline-block",
      onMouseEnter: () => x(!0),
      onMouseLeave: () => x(!1),
      children: [
        n,
        i && /* @__PURE__ */ t.jsx("div", { className: `absolute ${f} z-[100] animate-in fade-in zoom-in-95 duration-200 pointer-events-none`, children: /* @__PURE__ */ t.jsxs("div", { className: "glass-panel px-3 py-1.5 border-[#00e5ff]/40 bg-black/80 backdrop-blur-xl min-w-max", children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute top-0 left-0 w-1 h-1 border-t border-l border-[#00e5ff]" }),
          /* @__PURE__ */ t.jsx("div", { className: "absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#00e5ff]" }),
          /* @__PURE__ */ t.jsx("p", { className: "text-[9px] font-mono text-[#00e5ff] tracking-tight uppercase", children: s })
        ] }) })
      ]
    }
  );
}
function kt(s) {
  const n = s.getContext("2d"), b = () => {
    s.width = window.innerWidth, s.height = window.innerHeight;
  };
  b(), window.addEventListener("resize", b);
  const i = { x: 0, y: 0 };
  window.addEventListener("mousemove", (a) => {
    i.x = a.clientX, i.y = a.clientY;
  });
  const x = [], f = (a) => {
    if (!a) return "0, 229, 255";
    const u = a.outerHTML.toLowerCase();
    return u.includes("#ff003c") || u.includes("text-glow-red") || u.includes("bg-[#ff003c]") ? "255, 0, 60" : u.includes("#ff6400") || u.includes("text-glow-orange") || u.includes("bg-[#ff6400]") ? "255, 100, 0" : u.includes("#ff00ff") || u.includes("text-glow-magenta") ? "255, 0, 255" : "0, 229, 255";
  };
  window.addEventListener("click", (a) => {
    const m = a.target.closest("button, .glass-panel, input, textarea"), j = f(m);
    x.push({
      x: a.clientX,
      y: a.clientY,
      radius: 0,
      alpha: 1,
      // Onda fuerte para clics
      color: j,
      speed: 15
      // Velocidad estándar
    });
  }), window.addEventListener("keydown", (a) => {
    if (["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(a.key)) return;
    const u = document.activeElement;
    let m = Math.random() * s.width, j = s.height, R = "0, 229, 255";
    if (u && u.getBoundingClientRect && u.tagName !== "BODY") {
      const T = u.getBoundingClientRect();
      m = T.left + Math.random() * T.width, j = T.top + T.height / 2, R = f(u);
    }
    x.push({
      x: m,
      y: j,
      radius: 0,
      alpha: 0.4,
      // Ondas más suaves para el teclado (para no cegarte al escribir rápido)
      color: R,
      speed: 25
      // Ondas más rápidas, estilo "transmisión de datos"
    });
  });
  const g = Array.from({ length: 200 }).map(() => ({
    x: Math.random() * s.width,
    y: Math.random() * s.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  }));
  function v() {
    n.clearRect(0, 0, s.width, s.height), x.forEach((a) => {
      a.radius += a.speed, a.alpha -= a.speed * 12e-4;
    });
    for (let a = x.length - 1; a >= 0; a--)
      x[a].alpha <= 0 && x.splice(a, 1);
    g.forEach((a) => {
      a.x += a.vx, a.y += a.vy, (a.x < 0 || a.x > s.width) && (a.vx *= -1), (a.y < 0 || a.y > s.height) && (a.vy *= -1);
      let u = 0, m = "0, 229, 255";
      x.forEach((C) => {
        const S = Math.sqrt(Math.pow(a.x - C.x, 2) + Math.pow(a.y - C.y, 2)), w = Math.abs(S - C.radius);
        if (w < 80) {
          const L = (1 - w / 80) * C.alpha;
          L > u && (u = L, m = C.color);
        }
      }), g.forEach((C) => {
        const S = a.x - C.x, w = a.y - C.y, I = Math.sqrt(S * S + w * w);
        if (I < 140) {
          const K = (1 - I / 140) * 0.15 + u * 0.8;
          n.strokeStyle = `rgba(${m}, ${K})`, n.lineWidth = u > 0.1 ? 1.5 : 0.8, n.beginPath(), n.moveTo(a.x, a.y), n.lineTo(C.x, C.y), n.stroke();
        }
      });
      const j = a.x - i.x, R = a.y - i.y, T = Math.sqrt(j * j + R * R);
      T < 160 && (n.strokeStyle = `rgba(0, 229, 255, ${0.4 * (1 - T / 160)})`, n.lineWidth = 1, n.beginPath(), n.moveTo(a.x, a.y), n.lineTo(i.x, i.y), n.stroke());
      const D = 2 + u * 3, F = n.createRadialGradient(a.x, a.y, 0, a.x, a.y, D * 4);
      F.addColorStop(0, `rgba(${m}, ${0.6 + u})`), F.addColorStop(1, `rgba(${m}, 0)`), n.fillStyle = F, n.beginPath(), n.arc(a.x, a.y, D, 0, Math.PI * 2), n.fill();
    }), requestAnimationFrame(v);
  }
  v();
}
export {
  Nt as NeoAlert,
  Oe as NeoButton,
  mt as NeoCard,
  jt as NeoInput,
  Rt as NeoLoader,
  _t as NeoModal,
  wt as NeoProgressBar,
  yt as NeoTable,
  Tt as NeoTabs,
  Et as NeoTextArea,
  vt as NeoToggle,
  Ct as NeoTooltip,
  kt as initNeural
};
