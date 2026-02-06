var Pd = (e) => {
  throw TypeError(e);
};
var Aa = (e, t, n) => t.has(e) || Pd("Cannot " + n);
var O = (e, t, n) => (Aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ce = (e, t, n) => t.has(e) ? Pd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), J = (e, t, n, r) => (Aa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ue = (e, t, n) => (Aa(e, t, "access private method"), n);
var vl = (e, t, n, r) => ({
  set _(i) {
    J(e, t, i, n);
  },
  get _() {
    return O(e, t, r);
  }
});
function Tw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var as = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ws(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xm = { exports: {} }, Qs = {}, km = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol = Symbol.for("react.element"), Pw = Symbol.for("react.portal"), Aw = Symbol.for("react.fragment"), Rw = Symbol.for("react.strict_mode"), Nw = Symbol.for("react.profiler"), Iw = Symbol.for("react.provider"), _w = Symbol.for("react.context"), Lw = Symbol.for("react.forward_ref"), Ow = Symbol.for("react.suspense"), Dw = Symbol.for("react.memo"), Mw = Symbol.for("react.lazy"), Ad = Symbol.iterator;
function zw(e) {
  return e === null || typeof e != "object" ? null : (e = Ad && e[Ad] || e["@@iterator"], typeof e == "function" ? e : null);
}
var bm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Sm = Object.assign, Cm = {};
function Qi(e, t, n) {
  this.props = e, this.context = t, this.refs = Cm, this.updater = n || bm;
}
Qi.prototype.isReactComponent = {};
Qi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Em() {
}
Em.prototype = Qi.prototype;
function Wc(e, t, n) {
  this.props = e, this.context = t, this.refs = Cm, this.updater = n || bm;
}
var Qc = Wc.prototype = new Em();
Qc.constructor = Wc;
Sm(Qc, Qi.prototype);
Qc.isPureReactComponent = !0;
var Rd = Array.isArray, Tm = Object.prototype.hasOwnProperty, qc = { current: null }, Pm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Am(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) Tm.call(t, r) && !Pm.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: ol, type: e, key: o, ref: l, props: i, _owner: qc.current };
}
function Fw(e, t) {
  return { $$typeof: ol, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ol;
}
function jw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Nd = /\/+/g;
function Ra(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jw("" + e.key) : t.toString(36);
}
function Wl(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (o) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ol:
        case Pw:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Ra(l, 0) : r, Rd(i) ? (n = "", e != null && (n = e.replace(Nd, "$&/") + "/"), Wl(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Yc(i) && (i = Fw(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Nd, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Rd(e)) for (var s = 0; s < e.length; s++) {
    o = e[s];
    var a = r + Ra(o, s);
    l += Wl(o, t, n, a, i);
  }
  else if (a = zw(e), typeof a == "function") for (e = a.call(e), s = 0; !(o = e.next()).done; ) o = o.value, a = r + Ra(o, s++), l += Wl(o, t, n, a, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function wl(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Wl(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Bw(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var it = { current: null }, Ql = { transition: null }, $w = { ReactCurrentDispatcher: it, ReactCurrentBatchConfig: Ql, ReactCurrentOwner: qc };
function Rm() {
  throw Error("act(...) is not supported in production builds of React.");
}
ie.Children = { map: wl, forEach: function(e, t, n) {
  wl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return wl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return wl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Yc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ie.Component = Qi;
ie.Fragment = Aw;
ie.Profiler = Nw;
ie.PureComponent = Wc;
ie.StrictMode = Rw;
ie.Suspense = Ow;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $w;
ie.act = Rm;
ie.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sm({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = qc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) Tm.call(t, a) && !Pm.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ol, type: e.type, key: i, ref: o, props: r, _owner: l };
};
ie.createContext = function(e) {
  return e = { $$typeof: _w, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Iw, _context: e }, e.Consumer = e;
};
ie.createElement = Am;
ie.createFactory = function(e) {
  var t = Am.bind(null, e);
  return t.type = e, t;
};
ie.createRef = function() {
  return { current: null };
};
ie.forwardRef = function(e) {
  return { $$typeof: Lw, render: e };
};
ie.isValidElement = Yc;
ie.lazy = function(e) {
  return { $$typeof: Mw, _payload: { _status: -1, _result: e }, _init: Bw };
};
ie.memo = function(e, t) {
  return { $$typeof: Dw, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function(e) {
  var t = Ql.transition;
  Ql.transition = {};
  try {
    e();
  } finally {
    Ql.transition = t;
  }
};
ie.unstable_act = Rm;
ie.useCallback = function(e, t) {
  return it.current.useCallback(e, t);
};
ie.useContext = function(e) {
  return it.current.useContext(e);
};
ie.useDebugValue = function() {
};
ie.useDeferredValue = function(e) {
  return it.current.useDeferredValue(e);
};
ie.useEffect = function(e, t) {
  return it.current.useEffect(e, t);
};
ie.useId = function() {
  return it.current.useId();
};
ie.useImperativeHandle = function(e, t, n) {
  return it.current.useImperativeHandle(e, t, n);
};
ie.useInsertionEffect = function(e, t) {
  return it.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function(e, t) {
  return it.current.useLayoutEffect(e, t);
};
ie.useMemo = function(e, t) {
  return it.current.useMemo(e, t);
};
ie.useReducer = function(e, t, n) {
  return it.current.useReducer(e, t, n);
};
ie.useRef = function(e) {
  return it.current.useRef(e);
};
ie.useState = function(e) {
  return it.current.useState(e);
};
ie.useSyncExternalStore = function(e, t, n) {
  return it.current.useSyncExternalStore(e, t, n);
};
ie.useTransition = function() {
  return it.current.useTransition();
};
ie.version = "18.3.1";
km.exports = ie;
var k = km.exports;
const $ = /* @__PURE__ */ Ws(k), Uw = /* @__PURE__ */ Tw({
  __proto__: null,
  default: $
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hw = k, Vw = Symbol.for("react.element"), Ww = Symbol.for("react.fragment"), Qw = Object.prototype.hasOwnProperty, qw = Hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Yw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nm(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Qw.call(t, r) && !Yw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Vw, type: e, key: o, ref: l, props: i, _owner: qw.current };
}
Qs.Fragment = Ww;
Qs.jsx = Nm;
Qs.jsxs = Nm;
xm.exports = Qs;
var T = xm.exports, Im = { exports: {} }, Tt = {}, _m = { exports: {} }, Lm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(_, D) {
    var x = _.length;
    _.push(D);
    e: for (; 0 < x; ) {
      var Y = x - 1 >>> 1, Q = _[Y];
      if (0 < i(Q, D)) _[Y] = D, _[x] = Q, x = Y;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var D = _[0], x = _.pop();
    if (x !== D) {
      _[0] = x;
      e: for (var Y = 0, Q = _.length, S = Q >>> 1; Y < S; ) {
        var X = 2 * (Y + 1) - 1, de = _[X], le = X + 1, oe = _[le];
        if (0 > i(de, x)) le < Q && 0 > i(oe, de) ? (_[Y] = oe, _[le] = x, Y = le) : (_[Y] = de, _[X] = x, Y = X);
        else if (le < Q && 0 > i(oe, x)) _[Y] = oe, _[le] = x, Y = le;
        else break e;
      }
    }
    return D;
  }
  function i(_, D) {
    var x = _.sortIndex - D.sortIndex;
    return x !== 0 ? x : _.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], f = 1, c = null, p = 3, d = !1, m = !1, g = !1, w = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(_) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= _) r(u), D.sortIndex = D.expirationTime, t(a, D);
      else break;
      D = n(u);
    }
  }
  function C(_) {
    if (g = !1, v(_), !m) if (n(a) !== null) m = !0, W(P);
    else {
      var D = n(u);
      D !== null && q(C, D.startTime - _);
    }
  }
  function P(_, D) {
    m = !1, g && (g = !1, h(N), N = -1), d = !0;
    var x = p;
    try {
      for (v(D), c = n(a); c !== null && (!(c.expirationTime > D) || _ && !M()); ) {
        var Y = c.callback;
        if (typeof Y == "function") {
          c.callback = null, p = c.priorityLevel;
          var Q = Y(c.expirationTime <= D);
          D = e.unstable_now(), typeof Q == "function" ? c.callback = Q : c === n(a) && r(a), v(D);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var S = !0;
      else {
        var X = n(u);
        X !== null && q(C, X.startTime - D), S = !1;
      }
      return S;
    } finally {
      c = null, p = x, d = !1;
    }
  }
  var b = !1, A = null, N = -1, I = 5, E = -1;
  function M() {
    return !(e.unstable_now() - E < I);
  }
  function L() {
    if (A !== null) {
      var _ = e.unstable_now();
      E = _;
      var D = !0;
      try {
        D = A(!0, _);
      } finally {
        D ? H() : (b = !1, A = null);
      }
    } else b = !1;
  }
  var H;
  if (typeof y == "function") H = function() {
    y(L);
  };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), U = z.port2;
    z.port1.onmessage = L, H = function() {
      U.postMessage(null);
    };
  } else H = function() {
    w(L, 0);
  };
  function W(_) {
    A = _, b || (b = !0, H());
  }
  function q(_, D) {
    N = w(function() {
      _(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    m || d || (m = !0, W(P));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = p;
    }
    var x = p;
    p = D;
    try {
      return _();
    } finally {
      p = x;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, D) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var x = p;
    p = _;
    try {
      return D();
    } finally {
      p = x;
    }
  }, e.unstable_scheduleCallback = function(_, D, x) {
    var Y = e.unstable_now();
    switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? Y + x : Y) : x = Y, _) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = x + Q, _ = { id: f++, callback: D, priorityLevel: _, startTime: x, expirationTime: Q, sortIndex: -1 }, x > Y ? (_.sortIndex = x, t(u, _), n(a) === null && _ === n(u) && (g ? (h(N), N = -1) : g = !0, q(C, x - Y))) : (_.sortIndex = Q, t(a, _), m || d || (m = !0, W(P))), _;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(_) {
    var D = p;
    return function() {
      var x = p;
      p = D;
      try {
        return _.apply(this, arguments);
      } finally {
        p = x;
      }
    };
  };
})(Lm);
_m.exports = Lm;
var Kw = _m.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xw = k, Et = Kw;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Om = /* @__PURE__ */ new Set(), Oo = {};
function Kr(e, t) {
  Di(e, t), Di(e + "Capture", t);
}
function Di(e, t) {
  for (Oo[e] = t, e = 0; e < t.length; e++) Om.add(t[e]);
}
var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Eu = Object.prototype.hasOwnProperty, Gw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Id = {}, _d = {};
function Zw(e) {
  return Eu.call(_d, e) ? !0 : Eu.call(Id, e) ? !1 : Gw.test(e) ? _d[e] = !0 : (Id[e] = !0, !1);
}
function Jw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ex(e, t, n, r) {
  if (t === null || typeof t > "u" || Jw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ot(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Be[e] = new ot(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Be[t] = new ot(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Be[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Be[e] = new ot(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Be[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Be[e] = new ot(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Be[e] = new ot(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Be[e] = new ot(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Be[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kc = /[\-:]([a-z])/g;
function Xc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Kc,
    Xc
  );
  Be[t] = new ot(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Kc, Xc);
  Be[t] = new ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Kc, Xc);
  Be[t] = new ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Be[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new ot("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Be[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gc(e, t, n, r) {
  var i = Be.hasOwnProperty(t) ? Be[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ex(t, n, i, r) && (n = null), r || i === null ? Zw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dn = Xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xl = Symbol.for("react.element"), oi = Symbol.for("react.portal"), li = Symbol.for("react.fragment"), Zc = Symbol.for("react.strict_mode"), Tu = Symbol.for("react.profiler"), Dm = Symbol.for("react.provider"), Mm = Symbol.for("react.context"), Jc = Symbol.for("react.forward_ref"), Pu = Symbol.for("react.suspense"), Au = Symbol.for("react.suspense_list"), ef = Symbol.for("react.memo"), Yn = Symbol.for("react.lazy"), zm = Symbol.for("react.offscreen"), Ld = Symbol.iterator;
function ro(e) {
  return e === null || typeof e != "object" ? null : (e = Ld && e[Ld] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, Na;
function yo(e) {
  if (Na === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Na = t && t[1] || "";
  }
  return `
` + Na + e;
}
var Ia = !1;
function _a(e, t) {
  if (!e || Ia) return "";
  Ia = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, s = o.length - 1; 1 <= l && 0 <= s && i[l] !== o[s]; ) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (i[l] !== o[s]) {
        if (l !== 1 || s !== 1)
          do
            if (l--, s--, 0 > s || i[l] !== o[s]) {
              var a = `
` + i[l].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    Ia = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? yo(e) : "";
}
function tx(e) {
  switch (e.tag) {
    case 5:
      return yo(e.type);
    case 16:
      return yo("Lazy");
    case 13:
      return yo("Suspense");
    case 19:
      return yo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _a(e.type, !1), e;
    case 11:
      return e = _a(e.type.render, !1), e;
    case 1:
      return e = _a(e.type, !0), e;
    default:
      return "";
  }
}
function Ru(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case li:
      return "Fragment";
    case oi:
      return "Portal";
    case Tu:
      return "Profiler";
    case Zc:
      return "StrictMode";
    case Pu:
      return "Suspense";
    case Au:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Mm:
      return (e.displayName || "Context") + ".Consumer";
    case Dm:
      return (e._context.displayName || "Context") + ".Provider";
    case Jc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ef:
      return t = e.displayName || null, t !== null ? t : Ru(e.type) || "Memo";
    case Yn:
      t = e._payload, e = e._init;
      try {
        return Ru(e(t));
      } catch {
      }
  }
  return null;
}
function nx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ru(t);
    case 8:
      return t === Zc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function rx(e) {
  var t = Fm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function kl(e) {
  e._valueTracker || (e._valueTracker = rx(e));
}
function jm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Fm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function us(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nu(e, t) {
  var n = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Od(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Bm(e, t) {
  t = t.checked, t != null && Gc(e, "checked", t, !1);
}
function Iu(e, t) {
  Bm(e, t);
  var n = pr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? _u(e, t.type, n) : t.hasOwnProperty("defaultValue") && _u(e, t.type, pr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Dd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function _u(e, t, n) {
  (t !== "number" || us(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vo = Array.isArray;
function yi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Lu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Md(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(F(92));
      if (vo(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: pr(n) };
}
function $m(e, t) {
  var n = pr(t.value), r = pr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function zd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Um(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ou(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Um(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var bl, Hm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (bl = bl || document.createElement("div"), bl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = bl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Do(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ko = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, ix = ["Webkit", "ms", "Moz", "O"];
Object.keys(ko).forEach(function(e) {
  ix.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ko[t] = ko[e];
  });
});
function Vm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ko.hasOwnProperty(e) && ko[e] ? ("" + t).trim() : t + "px";
}
function Wm(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Vm(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var ox = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Du(e, t) {
  if (t) {
    if (ox[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Mu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zu = null;
function tf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fu = null, vi = null, wi = null;
function Fd(e) {
  if (e = al(e)) {
    if (typeof Fu != "function") throw Error(F(280));
    var t = e.stateNode;
    t && (t = Gs(t), Fu(e.stateNode, e.type, t));
  }
}
function Qm(e) {
  vi ? wi ? wi.push(e) : wi = [e] : vi = e;
}
function qm() {
  if (vi) {
    var e = vi, t = wi;
    if (wi = vi = null, Fd(e), t) for (e = 0; e < t.length; e++) Fd(t[e]);
  }
}
function Ym(e, t) {
  return e(t);
}
function Km() {
}
var La = !1;
function Xm(e, t, n) {
  if (La) return e(t, n);
  La = !0;
  try {
    return Ym(e, t, n);
  } finally {
    La = !1, (vi !== null || wi !== null) && (Km(), qm());
  }
}
function Mo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var ju = !1;
if (An) try {
  var io = {};
  Object.defineProperty(io, "passive", { get: function() {
    ju = !0;
  } }), window.addEventListener("test", io, io), window.removeEventListener("test", io, io);
} catch {
  ju = !1;
}
function lx(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var bo = !1, cs = null, fs = !1, Bu = null, sx = { onError: function(e) {
  bo = !0, cs = e;
} };
function ax(e, t, n, r, i, o, l, s, a) {
  bo = !1, cs = null, lx.apply(sx, arguments);
}
function ux(e, t, n, r, i, o, l, s, a) {
  if (ax.apply(this, arguments), bo) {
    if (bo) {
      var u = cs;
      bo = !1, cs = null;
    } else throw Error(F(198));
    fs || (fs = !0, Bu = u);
  }
}
function Xr(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function jd(e) {
  if (Xr(e) !== e) throw Error(F(188));
}
function cx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Xr(e), t === null) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return jd(i), e;
        if (o === r) return jd(i), t;
        o = o.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          l = !0, n = i, r = o;
          break;
        }
        if (s === r) {
          l = !0, r = i, n = o;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            l = !0, n = o, r = i;
            break;
          }
          if (s === r) {
            l = !0, r = o, n = i;
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function Zm(e) {
  return e = cx(e), e !== null ? Jm(e) : null;
}
function Jm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var eg = Et.unstable_scheduleCallback, Bd = Et.unstable_cancelCallback, fx = Et.unstable_shouldYield, dx = Et.unstable_requestPaint, Ae = Et.unstable_now, px = Et.unstable_getCurrentPriorityLevel, nf = Et.unstable_ImmediatePriority, tg = Et.unstable_UserBlockingPriority, ds = Et.unstable_NormalPriority, hx = Et.unstable_LowPriority, ng = Et.unstable_IdlePriority, qs = null, dn = null;
function mx(e) {
  if (dn && typeof dn.onCommitFiberRoot == "function") try {
    dn.onCommitFiberRoot(qs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xt = Math.clz32 ? Math.clz32 : vx, gx = Math.log, yx = Math.LN2;
function vx(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gx(e) / yx | 0) | 0;
}
var Sl = 64, Cl = 4194304;
function wo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ps(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? r = wo(s) : (o &= l, o !== 0 && (r = wo(o)));
  } else l = n & ~i, l !== 0 ? r = wo(l) : o !== 0 && (r = wo(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function wx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xx(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - Xt(o), s = 1 << l, a = i[l];
    a === -1 ? (!(s & n) || s & r) && (i[l] = wx(s, t)) : a <= t && (e.expiredLanes |= s), o &= ~s;
  }
}
function $u(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function rg() {
  var e = Sl;
  return Sl <<= 1, !(Sl & 4194240) && (Sl = 64), e;
}
function Oa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ll(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xt(t), e[t] = n;
}
function kx(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Xt(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function rf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var fe = 0;
function ig(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var og, of, lg, sg, ag, Uu = !1, El = [], or = null, lr = null, sr = null, zo = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), Xn = [], bx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $d(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      or = null;
      break;
    case "dragenter":
    case "dragleave":
      lr = null;
      break;
    case "mouseover":
    case "mouseout":
      sr = null;
      break;
    case "pointerover":
    case "pointerout":
      zo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fo.delete(t.pointerId);
  }
}
function oo(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = al(t), t !== null && of(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Sx(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return or = oo(or, e, t, n, r, i), !0;
    case "dragenter":
      return lr = oo(lr, e, t, n, r, i), !0;
    case "mouseover":
      return sr = oo(sr, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return zo.set(o, oo(zo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Fo.set(o, oo(Fo.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function ug(e) {
  var t = Ir(e.target);
  if (t !== null) {
    var n = Xr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Gm(n), t !== null) {
          e.blockedOn = t, ag(e.priority, function() {
            lg(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ql(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zu = r, n.target.dispatchEvent(r), zu = null;
    } else return t = al(n), t !== null && of(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ud(e, t, n) {
  ql(e) && n.delete(t);
}
function Cx() {
  Uu = !1, or !== null && ql(or) && (or = null), lr !== null && ql(lr) && (lr = null), sr !== null && ql(sr) && (sr = null), zo.forEach(Ud), Fo.forEach(Ud);
}
function lo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Uu || (Uu = !0, Et.unstable_scheduleCallback(Et.unstable_NormalPriority, Cx)));
}
function jo(e) {
  function t(i) {
    return lo(i, e);
  }
  if (0 < El.length) {
    lo(El[0], e);
    for (var n = 1; n < El.length; n++) {
      var r = El[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (or !== null && lo(or, e), lr !== null && lo(lr, e), sr !== null && lo(sr, e), zo.forEach(t), Fo.forEach(t), n = 0; n < Xn.length; n++) r = Xn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xn.length && (n = Xn[0], n.blockedOn === null); ) ug(n), n.blockedOn === null && Xn.shift();
}
var xi = Dn.ReactCurrentBatchConfig, hs = !0;
function Ex(e, t, n, r) {
  var i = fe, o = xi.transition;
  xi.transition = null;
  try {
    fe = 1, lf(e, t, n, r);
  } finally {
    fe = i, xi.transition = o;
  }
}
function Tx(e, t, n, r) {
  var i = fe, o = xi.transition;
  xi.transition = null;
  try {
    fe = 4, lf(e, t, n, r);
  } finally {
    fe = i, xi.transition = o;
  }
}
function lf(e, t, n, r) {
  if (hs) {
    var i = Hu(e, t, n, r);
    if (i === null) Va(e, t, r, ms, n), $d(e, r);
    else if (Sx(i, e, t, n, r)) r.stopPropagation();
    else if ($d(e, r), t & 4 && -1 < bx.indexOf(e)) {
      for (; i !== null; ) {
        var o = al(i);
        if (o !== null && og(o), o = Hu(e, t, n, r), o === null && Va(e, t, r, ms, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Va(e, t, r, null, n);
  }
}
var ms = null;
function Hu(e, t, n, r) {
  if (ms = null, e = tf(r), e = Ir(e), e !== null) if (t = Xr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Gm(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ms = e, null;
}
function cg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (px()) {
        case nf:
          return 1;
        case tg:
          return 4;
        case ds:
        case hx:
          return 16;
        case ng:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rr = null, sf = null, Yl = null;
function fg() {
  if (Yl) return Yl;
  var e, t = sf, n = t.length, r, i = "value" in rr ? rr.value : rr.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return Yl = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Kl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Tl() {
  return !0;
}
function Hd() {
  return !1;
}
function Pt(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Tl : Hd, this.isPropagationStopped = Hd, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Tl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Tl);
  }, persist: function() {
  }, isPersistent: Tl }), t;
}
var qi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, af = Pt(qi), sl = Ee({}, qi, { view: 0, detail: 0 }), Px = Pt(sl), Da, Ma, so, Ys = Ee({}, sl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== so && (so && e.type === "mousemove" ? (Da = e.screenX - so.screenX, Ma = e.screenY - so.screenY) : Ma = Da = 0, so = e), Da);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ma;
} }), Vd = Pt(Ys), Ax = Ee({}, Ys, { dataTransfer: 0 }), Rx = Pt(Ax), Nx = Ee({}, sl, { relatedTarget: 0 }), za = Pt(Nx), Ix = Ee({}, qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _x = Pt(Ix), Lx = Ee({}, qi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ox = Pt(Lx), Dx = Ee({}, qi, { data: 0 }), Wd = Pt(Dx), Mx = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, zx = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Fx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fx[e]) ? !!t[e] : !1;
}
function uf() {
  return jx;
}
var Bx = Ee({}, sl, { key: function(e) {
  if (e.key) {
    var t = Mx[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Kl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zx[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uf, charCode: function(e) {
  return e.type === "keypress" ? Kl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $x = Pt(Bx), Ux = Ee({}, Ys, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qd = Pt(Ux), Hx = Ee({}, sl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uf }), Vx = Pt(Hx), Wx = Ee({}, qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qx = Pt(Wx), qx = Ee({}, Ys, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yx = Pt(qx), Kx = [9, 13, 27, 32], cf = An && "CompositionEvent" in window, So = null;
An && "documentMode" in document && (So = document.documentMode);
var Xx = An && "TextEvent" in window && !So, dg = An && (!cf || So && 8 < So && 11 >= So), qd = " ", Yd = !1;
function pg(e, t) {
  switch (e) {
    case "keyup":
      return Kx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function hg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var si = !1;
function Gx(e, t) {
  switch (e) {
    case "compositionend":
      return hg(t);
    case "keypress":
      return t.which !== 32 ? null : (Yd = !0, qd);
    case "textInput":
      return e = t.data, e === qd && Yd ? null : e;
    default:
      return null;
  }
}
function Zx(e, t) {
  if (si) return e === "compositionend" || !cf && pg(e, t) ? (e = fg(), Yl = sf = rr = null, si = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jx = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Kd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jx[e.type] : t === "textarea";
}
function mg(e, t, n, r) {
  Qm(r), t = gs(t, "onChange"), 0 < t.length && (n = new af("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Co = null, Bo = null;
function e1(e) {
  Tg(e, 0);
}
function Ks(e) {
  var t = ci(e);
  if (jm(t)) return e;
}
function t1(e, t) {
  if (e === "change") return t;
}
var gg = !1;
if (An) {
  var Fa;
  if (An) {
    var ja = "oninput" in document;
    if (!ja) {
      var Xd = document.createElement("div");
      Xd.setAttribute("oninput", "return;"), ja = typeof Xd.oninput == "function";
    }
    Fa = ja;
  } else Fa = !1;
  gg = Fa && (!document.documentMode || 9 < document.documentMode);
}
function Gd() {
  Co && (Co.detachEvent("onpropertychange", yg), Bo = Co = null);
}
function yg(e) {
  if (e.propertyName === "value" && Ks(Bo)) {
    var t = [];
    mg(t, Bo, e, tf(e)), Xm(e1, t);
  }
}
function n1(e, t, n) {
  e === "focusin" ? (Gd(), Co = t, Bo = n, Co.attachEvent("onpropertychange", yg)) : e === "focusout" && Gd();
}
function r1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ks(Bo);
}
function i1(e, t) {
  if (e === "click") return Ks(t);
}
function o1(e, t) {
  if (e === "input" || e === "change") return Ks(t);
}
function l1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Jt = typeof Object.is == "function" ? Object.is : l1;
function $o(e, t) {
  if (Jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Eu.call(t, i) || !Jt(e[i], t[i])) return !1;
  }
  return !0;
}
function Zd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jd(e, t) {
  var n = Zd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Zd(n);
  }
}
function vg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function wg() {
  for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = us(e.document);
  }
  return t;
}
function ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function s1(e) {
  var t = wg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && vg(n.ownerDocument.documentElement, n)) {
    if (r !== null && ff(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Jd(n, o);
        var l = Jd(
          n,
          r
        );
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var a1 = An && "documentMode" in document && 11 >= document.documentMode, ai = null, Vu = null, Eo = null, Wu = !1;
function ep(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wu || ai == null || ai !== us(r) || (r = ai, "selectionStart" in r && ff(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Eo && $o(Eo, r) || (Eo = r, r = gs(Vu, "onSelect"), 0 < r.length && (t = new af("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ai)));
}
function Pl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ui = { animationend: Pl("Animation", "AnimationEnd"), animationiteration: Pl("Animation", "AnimationIteration"), animationstart: Pl("Animation", "AnimationStart"), transitionend: Pl("Transition", "TransitionEnd") }, Ba = {}, xg = {};
An && (xg = document.createElement("div").style, "AnimationEvent" in window || (delete ui.animationend.animation, delete ui.animationiteration.animation, delete ui.animationstart.animation), "TransitionEvent" in window || delete ui.transitionend.transition);
function Xs(e) {
  if (Ba[e]) return Ba[e];
  if (!ui[e]) return e;
  var t = ui[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in xg) return Ba[e] = t[n];
  return e;
}
var kg = Xs("animationend"), bg = Xs("animationiteration"), Sg = Xs("animationstart"), Cg = Xs("transitionend"), Eg = /* @__PURE__ */ new Map(), tp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function wr(e, t) {
  Eg.set(e, t), Kr(t, [e]);
}
for (var $a = 0; $a < tp.length; $a++) {
  var Ua = tp[$a], u1 = Ua.toLowerCase(), c1 = Ua[0].toUpperCase() + Ua.slice(1);
  wr(u1, "on" + c1);
}
wr(kg, "onAnimationEnd");
wr(bg, "onAnimationIteration");
wr(Sg, "onAnimationStart");
wr("dblclick", "onDoubleClick");
wr("focusin", "onFocus");
wr("focusout", "onBlur");
wr(Cg, "onTransitionEnd");
Di("onMouseEnter", ["mouseout", "mouseover"]);
Di("onMouseLeave", ["mouseout", "mouseover"]);
Di("onPointerEnter", ["pointerout", "pointerover"]);
Di("onPointerLeave", ["pointerout", "pointerover"]);
Kr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), f1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
function np(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ux(r, t, void 0, e), e.currentTarget = null;
}
function Tg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== o && i.isPropagationStopped()) break e;
        np(i, s, u), o = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== o && i.isPropagationStopped()) break e;
        np(i, s, u), o = a;
      }
    }
  }
  if (fs) throw e = Bu, fs = !1, Bu = null, e;
}
function we(e, t) {
  var n = t[Xu];
  n === void 0 && (n = t[Xu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Pg(t, e, 2, !1), n.add(r));
}
function Ha(e, t, n) {
  var r = 0;
  t && (r |= 4), Pg(n, e, r, t);
}
var Al = "_reactListening" + Math.random().toString(36).slice(2);
function Uo(e) {
  if (!e[Al]) {
    e[Al] = !0, Om.forEach(function(n) {
      n !== "selectionchange" && (f1.has(n) || Ha(n, !1, e), Ha(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Al] || (t[Al] = !0, Ha("selectionchange", !1, t));
  }
}
function Pg(e, t, n, r) {
  switch (cg(t)) {
    case 1:
      var i = Ex;
      break;
    case 4:
      i = Tx;
      break;
    default:
      i = lf;
  }
  n = i.bind(null, t, n, e), i = void 0, !ju || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Va(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var s = r.stateNode.containerInfo;
      if (s === i || s.nodeType === 8 && s.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        l = l.return;
      }
      for (; s !== null; ) {
        if (l = Ir(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = o = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Xm(function() {
    var u = o, f = tf(n), c = [];
    e: {
      var p = Eg.get(e);
      if (p !== void 0) {
        var d = af, m = e;
        switch (e) {
          case "keypress":
            if (Kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = $x;
            break;
          case "focusin":
            m = "focus", d = za;
            break;
          case "focusout":
            m = "blur", d = za;
            break;
          case "beforeblur":
          case "afterblur":
            d = za;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = Vd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Rx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = Vx;
            break;
          case kg:
          case bg:
          case Sg:
            d = _x;
            break;
          case Cg:
            d = Qx;
            break;
          case "scroll":
            d = Px;
            break;
          case "wheel":
            d = Yx;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = Ox;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Qd;
        }
        var g = (t & 4) !== 0, w = !g && e === "scroll", h = g ? p !== null ? p + "Capture" : null : p;
        g = [];
        for (var y = u, v; y !== null; ) {
          v = y;
          var C = v.stateNode;
          if (v.tag === 5 && C !== null && (v = C, h !== null && (C = Mo(y, h), C != null && g.push(Ho(y, C, v)))), w) break;
          y = y.return;
        }
        0 < g.length && (p = new d(p, m, null, n, f), c.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", p && n !== zu && (m = n.relatedTarget || n.fromElement) && (Ir(m) || m[Rn])) break e;
        if ((d || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window, d ? (m = n.relatedTarget || n.toElement, d = u, m = m ? Ir(m) : null, m !== null && (w = Xr(m), m !== w || m.tag !== 5 && m.tag !== 6) && (m = null)) : (d = null, m = u), d !== m)) {
          if (g = Vd, C = "onMouseLeave", h = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (g = Qd, C = "onPointerLeave", h = "onPointerEnter", y = "pointer"), w = d == null ? p : ci(d), v = m == null ? p : ci(m), p = new g(C, y + "leave", d, n, f), p.target = w, p.relatedTarget = v, C = null, Ir(f) === u && (g = new g(h, y + "enter", m, n, f), g.target = v, g.relatedTarget = w, C = g), w = C, d && m) t: {
            for (g = d, h = m, y = 0, v = g; v; v = ni(v)) y++;
            for (v = 0, C = h; C; C = ni(C)) v++;
            for (; 0 < y - v; ) g = ni(g), y--;
            for (; 0 < v - y; ) h = ni(h), v--;
            for (; y--; ) {
              if (g === h || h !== null && g === h.alternate) break t;
              g = ni(g), h = ni(h);
            }
            g = null;
          }
          else g = null;
          d !== null && rp(c, p, d, g, !1), m !== null && w !== null && rp(c, w, m, g, !0);
        }
      }
      e: {
        if (p = u ? ci(u) : window, d = p.nodeName && p.nodeName.toLowerCase(), d === "select" || d === "input" && p.type === "file") var P = t1;
        else if (Kd(p)) if (gg) P = o1;
        else {
          P = r1;
          var b = n1;
        }
        else (d = p.nodeName) && d.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (P = i1);
        if (P && (P = P(e, u))) {
          mg(c, P, n, f);
          break e;
        }
        b && b(e, p, u), e === "focusout" && (b = p._wrapperState) && b.controlled && p.type === "number" && _u(p, "number", p.value);
      }
      switch (b = u ? ci(u) : window, e) {
        case "focusin":
          (Kd(b) || b.contentEditable === "true") && (ai = b, Vu = u, Eo = null);
          break;
        case "focusout":
          Eo = Vu = ai = null;
          break;
        case "mousedown":
          Wu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Wu = !1, ep(c, n, f);
          break;
        case "selectionchange":
          if (a1) break;
        case "keydown":
        case "keyup":
          ep(c, n, f);
      }
      var A;
      if (cf) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else si ? pg(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (dg && n.locale !== "ko" && (si || N !== "onCompositionStart" ? N === "onCompositionEnd" && si && (A = fg()) : (rr = f, sf = "value" in rr ? rr.value : rr.textContent, si = !0)), b = gs(u, N), 0 < b.length && (N = new Wd(N, e, null, n, f), c.push({ event: N, listeners: b }), A ? N.data = A : (A = hg(n), A !== null && (N.data = A)))), (A = Xx ? Gx(e, n) : Zx(e, n)) && (u = gs(u, "onBeforeInput"), 0 < u.length && (f = new Wd("onBeforeInput", "beforeinput", null, n, f), c.push({ event: f, listeners: u }), f.data = A));
    }
    Tg(c, t);
  });
}
function Ho(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Mo(e, n), o != null && r.unshift(Ho(e, o, i)), o = Mo(e, t), o != null && r.push(Ho(e, o, i))), e = e.return;
  }
  return r;
}
function ni(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rp(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, i ? (a = Mo(n, o), a != null && l.unshift(Ho(n, a, s))) : i || (a = Mo(n, o), a != null && l.push(Ho(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var d1 = /\r\n?/g, p1 = /\u0000|\uFFFD/g;
function ip(e) {
  return (typeof e == "string" ? e : "" + e).replace(d1, `
`).replace(p1, "");
}
function Rl(e, t, n) {
  if (t = ip(t), ip(e) !== t && n) throw Error(F(425));
}
function ys() {
}
var Qu = null, qu = null;
function Yu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ku = typeof setTimeout == "function" ? setTimeout : void 0, h1 = typeof clearTimeout == "function" ? clearTimeout : void 0, op = typeof Promise == "function" ? Promise : void 0, m1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof op < "u" ? function(e) {
  return op.resolve(null).then(e).catch(g1);
} : Ku;
function g1(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wa(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), jo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  jo(t);
}
function ar(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function lp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yi = Math.random().toString(36).slice(2), fn = "__reactFiber$" + Yi, Vo = "__reactProps$" + Yi, Rn = "__reactContainer$" + Yi, Xu = "__reactEvents$" + Yi, y1 = "__reactListeners$" + Yi, v1 = "__reactHandles$" + Yi;
function Ir(e) {
  var t = e[fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Rn] || n[fn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = lp(e); e !== null; ) {
        if (n = e[fn]) return n;
        e = lp(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function al(e) {
  return e = e[fn] || e[Rn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ci(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function Gs(e) {
  return e[Vo] || null;
}
var Gu = [], fi = -1;
function xr(e) {
  return { current: e };
}
function xe(e) {
  0 > fi || (e.current = Gu[fi], Gu[fi] = null, fi--);
}
function ye(e, t) {
  fi++, Gu[fi] = e.current, e.current = t;
}
var hr = {}, Ye = xr(hr), ft = xr(!1), Ur = hr;
function Mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function dt(e) {
  return e = e.childContextTypes, e != null;
}
function vs() {
  xe(ft), xe(Ye);
}
function sp(e, t, n) {
  if (Ye.current !== hr) throw Error(F(168));
  ye(Ye, t), ye(ft, n);
}
function Ag(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(F(108, nx(e) || "Unknown", i));
  return Ee({}, n, r);
}
function ws(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hr, Ur = Ye.current, ye(Ye, e), ye(ft, ft.current), !0;
}
function ap(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n ? (e = Ag(e, t, Ur), r.__reactInternalMemoizedMergedChildContext = e, xe(ft), xe(Ye), ye(Ye, e)) : xe(ft), ye(ft, n);
}
var Sn = null, Zs = !1, Qa = !1;
function Rg(e) {
  Sn === null ? Sn = [e] : Sn.push(e);
}
function w1(e) {
  Zs = !0, Rg(e);
}
function kr() {
  if (!Qa && Sn !== null) {
    Qa = !0;
    var e = 0, t = fe;
    try {
      var n = Sn;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Sn = null, Zs = !1;
    } catch (i) {
      throw Sn !== null && (Sn = Sn.slice(e + 1)), eg(nf, kr), i;
    } finally {
      fe = t, Qa = !1;
    }
  }
  return null;
}
var di = [], pi = 0, xs = null, ks = 0, Nt = [], It = 0, Hr = null, En = 1, Tn = "";
function Ar(e, t) {
  di[pi++] = ks, di[pi++] = xs, xs = e, ks = t;
}
function Ng(e, t, n) {
  Nt[It++] = En, Nt[It++] = Tn, Nt[It++] = Hr, Hr = e;
  var r = En;
  e = Tn;
  var i = 32 - Xt(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Xt(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, En = 1 << 32 - Xt(t) + i | n << i | r, Tn = o + e;
  } else En = 1 << o | n << i | r, Tn = e;
}
function df(e) {
  e.return !== null && (Ar(e, 1), Ng(e, 1, 0));
}
function pf(e) {
  for (; e === xs; ) xs = di[--pi], di[pi] = null, ks = di[--pi], di[pi] = null;
  for (; e === Hr; ) Hr = Nt[--It], Nt[It] = null, Tn = Nt[--It], Nt[It] = null, En = Nt[--It], Nt[It] = null;
}
var bt = null, kt = null, be = !1, Kt = null;
function Ig(e, t) {
  var n = Lt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function up(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, bt = e, kt = ar(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, bt = e, kt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Hr !== null ? { id: En, overflow: Tn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, bt = e, kt = null, !0) : !1;
    default:
      return !1;
  }
}
function Zu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ju(e) {
  if (be) {
    var t = kt;
    if (t) {
      var n = t;
      if (!up(e, t)) {
        if (Zu(e)) throw Error(F(418));
        t = ar(n.nextSibling);
        var r = bt;
        t && up(e, t) ? Ig(r, n) : (e.flags = e.flags & -4097 | 2, be = !1, bt = e);
      }
    } else {
      if (Zu(e)) throw Error(F(418));
      e.flags = e.flags & -4097 | 2, be = !1, bt = e;
    }
  }
}
function cp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  bt = e;
}
function Nl(e) {
  if (e !== bt) return !1;
  if (!be) return cp(e), be = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yu(e.type, e.memoizedProps)), t && (t = kt)) {
    if (Zu(e)) throw _g(), Error(F(418));
    for (; t; ) Ig(e, t), t = ar(t.nextSibling);
  }
  if (cp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              kt = ar(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      kt = null;
    }
  } else kt = bt ? ar(e.stateNode.nextSibling) : null;
  return !0;
}
function _g() {
  for (var e = kt; e; ) e = ar(e.nextSibling);
}
function zi() {
  kt = bt = null, be = !1;
}
function hf(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
var x1 = Dn.ReactCurrentBatchConfig;
function ao(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var s = i.refs;
        l === null ? delete s[o] : s[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function Il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function fp(e) {
  var t = e._init;
  return t(e._payload);
}
function Lg(e) {
  function t(h, y) {
    if (e) {
      var v = h.deletions;
      v === null ? (h.deletions = [y], h.flags |= 16) : v.push(y);
    }
  }
  function n(h, y) {
    if (!e) return null;
    for (; y !== null; ) t(h, y), y = y.sibling;
    return null;
  }
  function r(h, y) {
    for (h = /* @__PURE__ */ new Map(); y !== null; ) y.key !== null ? h.set(y.key, y) : h.set(y.index, y), y = y.sibling;
    return h;
  }
  function i(h, y) {
    return h = dr(h, y), h.index = 0, h.sibling = null, h;
  }
  function o(h, y, v) {
    return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < y ? (h.flags |= 2, y) : v) : (h.flags |= 2, y)) : (h.flags |= 1048576, y);
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, y, v, C) {
    return y === null || y.tag !== 6 ? (y = Ja(v, h.mode, C), y.return = h, y) : (y = i(y, v), y.return = h, y);
  }
  function a(h, y, v, C) {
    var P = v.type;
    return P === li ? f(h, y, v.props.children, C, v.key) : y !== null && (y.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Yn && fp(P) === y.type) ? (C = i(y, v.props), C.ref = ao(h, y, v), C.return = h, C) : (C = ns(v.type, v.key, v.props, null, h.mode, C), C.ref = ao(h, y, v), C.return = h, C);
  }
  function u(h, y, v, C) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== v.containerInfo || y.stateNode.implementation !== v.implementation ? (y = eu(v, h.mode, C), y.return = h, y) : (y = i(y, v.children || []), y.return = h, y);
  }
  function f(h, y, v, C, P) {
    return y === null || y.tag !== 7 ? (y = $r(v, h.mode, C, P), y.return = h, y) : (y = i(y, v), y.return = h, y);
  }
  function c(h, y, v) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return y = Ja("" + y, h.mode, v), y.return = h, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case xl:
          return v = ns(y.type, y.key, y.props, null, h.mode, v), v.ref = ao(h, null, y), v.return = h, v;
        case oi:
          return y = eu(y, h.mode, v), y.return = h, y;
        case Yn:
          var C = y._init;
          return c(h, C(y._payload), v);
      }
      if (vo(y) || ro(y)) return y = $r(y, h.mode, v, null), y.return = h, y;
      Il(h, y);
    }
    return null;
  }
  function p(h, y, v, C) {
    var P = y !== null ? y.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return P !== null ? null : s(h, y, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case xl:
          return v.key === P ? a(h, y, v, C) : null;
        case oi:
          return v.key === P ? u(h, y, v, C) : null;
        case Yn:
          return P = v._init, p(
            h,
            y,
            P(v._payload),
            C
          );
      }
      if (vo(v) || ro(v)) return P !== null ? null : f(h, y, v, C, null);
      Il(h, v);
    }
    return null;
  }
  function d(h, y, v, C, P) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return h = h.get(v) || null, s(y, h, "" + C, P);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case xl:
          return h = h.get(C.key === null ? v : C.key) || null, a(y, h, C, P);
        case oi:
          return h = h.get(C.key === null ? v : C.key) || null, u(y, h, C, P);
        case Yn:
          var b = C._init;
          return d(h, y, v, b(C._payload), P);
      }
      if (vo(C) || ro(C)) return h = h.get(v) || null, f(y, h, C, P, null);
      Il(y, C);
    }
    return null;
  }
  function m(h, y, v, C) {
    for (var P = null, b = null, A = y, N = y = 0, I = null; A !== null && N < v.length; N++) {
      A.index > N ? (I = A, A = null) : I = A.sibling;
      var E = p(h, A, v[N], C);
      if (E === null) {
        A === null && (A = I);
        break;
      }
      e && A && E.alternate === null && t(h, A), y = o(E, y, N), b === null ? P = E : b.sibling = E, b = E, A = I;
    }
    if (N === v.length) return n(h, A), be && Ar(h, N), P;
    if (A === null) {
      for (; N < v.length; N++) A = c(h, v[N], C), A !== null && (y = o(A, y, N), b === null ? P = A : b.sibling = A, b = A);
      return be && Ar(h, N), P;
    }
    for (A = r(h, A); N < v.length; N++) I = d(A, h, N, v[N], C), I !== null && (e && I.alternate !== null && A.delete(I.key === null ? N : I.key), y = o(I, y, N), b === null ? P = I : b.sibling = I, b = I);
    return e && A.forEach(function(M) {
      return t(h, M);
    }), be && Ar(h, N), P;
  }
  function g(h, y, v, C) {
    var P = ro(v);
    if (typeof P != "function") throw Error(F(150));
    if (v = P.call(v), v == null) throw Error(F(151));
    for (var b = P = null, A = y, N = y = 0, I = null, E = v.next(); A !== null && !E.done; N++, E = v.next()) {
      A.index > N ? (I = A, A = null) : I = A.sibling;
      var M = p(h, A, E.value, C);
      if (M === null) {
        A === null && (A = I);
        break;
      }
      e && A && M.alternate === null && t(h, A), y = o(M, y, N), b === null ? P = M : b.sibling = M, b = M, A = I;
    }
    if (E.done) return n(
      h,
      A
    ), be && Ar(h, N), P;
    if (A === null) {
      for (; !E.done; N++, E = v.next()) E = c(h, E.value, C), E !== null && (y = o(E, y, N), b === null ? P = E : b.sibling = E, b = E);
      return be && Ar(h, N), P;
    }
    for (A = r(h, A); !E.done; N++, E = v.next()) E = d(A, h, N, E.value, C), E !== null && (e && E.alternate !== null && A.delete(E.key === null ? N : E.key), y = o(E, y, N), b === null ? P = E : b.sibling = E, b = E);
    return e && A.forEach(function(L) {
      return t(h, L);
    }), be && Ar(h, N), P;
  }
  function w(h, y, v, C) {
    if (typeof v == "object" && v !== null && v.type === li && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case xl:
          e: {
            for (var P = v.key, b = y; b !== null; ) {
              if (b.key === P) {
                if (P = v.type, P === li) {
                  if (b.tag === 7) {
                    n(h, b.sibling), y = i(b, v.props.children), y.return = h, h = y;
                    break e;
                  }
                } else if (b.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Yn && fp(P) === b.type) {
                  n(h, b.sibling), y = i(b, v.props), y.ref = ao(h, b, v), y.return = h, h = y;
                  break e;
                }
                n(h, b);
                break;
              } else t(h, b);
              b = b.sibling;
            }
            v.type === li ? (y = $r(v.props.children, h.mode, C, v.key), y.return = h, h = y) : (C = ns(v.type, v.key, v.props, null, h.mode, C), C.ref = ao(h, y, v), C.return = h, h = C);
          }
          return l(h);
        case oi:
          e: {
            for (b = v.key; y !== null; ) {
              if (y.key === b) if (y.tag === 4 && y.stateNode.containerInfo === v.containerInfo && y.stateNode.implementation === v.implementation) {
                n(h, y.sibling), y = i(y, v.children || []), y.return = h, h = y;
                break e;
              } else {
                n(h, y);
                break;
              }
              else t(h, y);
              y = y.sibling;
            }
            y = eu(v, h.mode, C), y.return = h, h = y;
          }
          return l(h);
        case Yn:
          return b = v._init, w(h, y, b(v._payload), C);
      }
      if (vo(v)) return m(h, y, v, C);
      if (ro(v)) return g(h, y, v, C);
      Il(h, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, y !== null && y.tag === 6 ? (n(h, y.sibling), y = i(y, v), y.return = h, h = y) : (n(h, y), y = Ja(v, h.mode, C), y.return = h, h = y), l(h)) : n(h, y);
  }
  return w;
}
var Fi = Lg(!0), Og = Lg(!1), bs = xr(null), Ss = null, hi = null, mf = null;
function gf() {
  mf = hi = Ss = null;
}
function yf(e) {
  var t = bs.current;
  xe(bs), e._currentValue = t;
}
function ec(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ki(e, t) {
  Ss = e, mf = hi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ct = !0), e.firstContext = null);
}
function Dt(e) {
  var t = e._currentValue;
  if (mf !== e) if (e = { context: e, memoizedValue: t, next: null }, hi === null) {
    if (Ss === null) throw Error(F(308));
    hi = e, Ss.dependencies = { lanes: 0, firstContext: e };
  } else hi = hi.next = e;
  return t;
}
var _r = null;
function vf(e) {
  _r === null ? _r = [e] : _r.push(e);
}
function Dg(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, vf(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Nn(e, r);
}
function Nn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Kn = !1;
function wf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Mg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ur(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Nn(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, vf(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Nn(e, n);
}
function Xl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rf(e, n);
  }
}
function dp(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Cs(e, t, n, r) {
  var i = e.updateQueue;
  Kn = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? o = u : l.next = u, l = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== l && (s === null ? f.firstBaseUpdate = u : s.next = u, f.lastBaseUpdate = a));
  }
  if (o !== null) {
    var c = i.baseState;
    l = 0, f = u = a = null, s = o;
    do {
      var p = s.lane, d = s.eventTime;
      if ((r & p) === p) {
        f !== null && (f = f.next = {
          eventTime: d,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var m = e, g = s;
          switch (p = t, d = n, g.tag) {
            case 1:
              if (m = g.payload, typeof m == "function") {
                c = m.call(d, c, p);
                break e;
              }
              c = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = g.payload, p = typeof m == "function" ? m.call(d, c, p) : m, p == null) break e;
              c = Ee({}, c, p);
              break e;
            case 2:
              Kn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [s] : p.push(s));
      } else d = { eventTime: d, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, f === null ? (u = f = d, a = c) : f = f.next = d, l |= p;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
      }
    } while (!0);
    if (f === null && (a = c), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    Wr |= l, e.lanes = l, e.memoizedState = c;
  }
}
function pp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(F(191, i));
      i.call(r);
    }
  }
}
var ul = {}, pn = xr(ul), Wo = xr(ul), Qo = xr(ul);
function Lr(e) {
  if (e === ul) throw Error(F(174));
  return e;
}
function xf(e, t) {
  switch (ye(Qo, t), ye(Wo, e), ye(pn, ul), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ou(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ou(t, e);
  }
  xe(pn), ye(pn, t);
}
function ji() {
  xe(pn), xe(Wo), xe(Qo);
}
function zg(e) {
  Lr(Qo.current);
  var t = Lr(pn.current), n = Ou(t, e.type);
  t !== n && (ye(Wo, e), ye(pn, n));
}
function kf(e) {
  Wo.current === e && (xe(pn), xe(Wo));
}
var Se = xr(0);
function Es(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var qa = [];
function bf() {
  for (var e = 0; e < qa.length; e++) qa[e]._workInProgressVersionPrimary = null;
  qa.length = 0;
}
var Gl = Dn.ReactCurrentDispatcher, Ya = Dn.ReactCurrentBatchConfig, Vr = 0, Ce = null, Le = null, Me = null, Ts = !1, To = !1, qo = 0, k1 = 0;
function He() {
  throw Error(F(321));
}
function Sf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Jt(e[n], t[n])) return !1;
  return !0;
}
function Cf(e, t, n, r, i, o) {
  if (Vr = o, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gl.current = e === null || e.memoizedState === null ? E1 : T1, e = n(r, i), To) {
    o = 0;
    do {
      if (To = !1, qo = 0, 25 <= o) throw Error(F(301));
      o += 1, Me = Le = null, t.updateQueue = null, Gl.current = P1, e = n(r, i);
    } while (To);
  }
  if (Gl.current = Ps, t = Le !== null && Le.next !== null, Vr = 0, Me = Le = Ce = null, Ts = !1, t) throw Error(F(300));
  return e;
}
function Ef() {
  var e = qo !== 0;
  return qo = 0, e;
}
function ln() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? Ce.memoizedState = Me = e : Me = Me.next = e, Me;
}
function Mt() {
  if (Le === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = Me === null ? Ce.memoizedState : Me.next;
  if (t !== null) Me = t, Le = e;
  else {
    if (e === null) throw Error(F(310));
    Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, Me === null ? Ce.memoizedState = Me = e : Me = Me.next = e;
  }
  return Me;
}
function Yo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ka(e) {
  var t = Mt(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Le, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var s = l = null, a = null, u = o;
    do {
      var f = u.lane;
      if ((Vr & f) === f) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = c, l = r) : a = a.next = c, Ce.lanes |= f, Wr |= f;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? l = r : a.next = s, Jt(r, t.memoizedState) || (ct = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Ce.lanes |= o, Wr |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xa(e) {
  var t = Mt(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    Jt(o, t.memoizedState) || (ct = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Fg() {
}
function jg(e, t) {
  var n = Ce, r = Mt(), i = t(), o = !Jt(r.memoizedState, i);
  if (o && (r.memoizedState = i, ct = !0), r = r.queue, Tf(Ug.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Me !== null && Me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ko(9, $g.bind(null, n, r, i, t), void 0, null), ze === null) throw Error(F(349));
    Vr & 30 || Bg(n, t, i);
  }
  return i;
}
function Bg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function $g(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Hg(t) && Vg(e);
}
function Ug(e, t, n) {
  return n(function() {
    Hg(t) && Vg(e);
  });
}
function Hg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Jt(e, n);
  } catch {
    return !0;
  }
}
function Vg(e) {
  var t = Nn(e, 1);
  t !== null && Gt(t, e, 1, -1);
}
function hp(e) {
  var t = ln();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yo, lastRenderedState: e }, t.queue = e, e = e.dispatch = C1.bind(null, Ce, e), [t.memoizedState, e];
}
function Ko(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Wg() {
  return Mt().memoizedState;
}
function Zl(e, t, n, r) {
  var i = ln();
  Ce.flags |= e, i.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r);
}
function Js(e, t, n, r) {
  var i = Mt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Le !== null) {
    var l = Le.memoizedState;
    if (o = l.destroy, r !== null && Sf(r, l.deps)) {
      i.memoizedState = Ko(t, n, o, r);
      return;
    }
  }
  Ce.flags |= e, i.memoizedState = Ko(1 | t, n, o, r);
}
function mp(e, t) {
  return Zl(8390656, 8, e, t);
}
function Tf(e, t) {
  return Js(2048, 8, e, t);
}
function Qg(e, t) {
  return Js(4, 2, e, t);
}
function qg(e, t) {
  return Js(4, 4, e, t);
}
function Yg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Kg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Js(4, 4, Yg.bind(null, t, e), n);
}
function Pf() {
}
function Xg(e, t) {
  var n = Mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Gg(e, t) {
  var n = Mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Zg(e, t, n) {
  return Vr & 21 ? (Jt(n, t) || (n = rg(), Ce.lanes |= n, Wr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ct = !0), e.memoizedState = n);
}
function b1(e, t) {
  var n = fe;
  fe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ya.transition;
  Ya.transition = {};
  try {
    e(!1), t();
  } finally {
    fe = n, Ya.transition = r;
  }
}
function Jg() {
  return Mt().memoizedState;
}
function S1(e, t, n) {
  var r = fr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ey(e)) ty(t, n);
  else if (n = Dg(e, t, n, r), n !== null) {
    var i = rt();
    Gt(n, e, r, i), ny(n, t, r);
  }
}
function C1(e, t, n) {
  var r = fr(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ey(e)) ty(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, s = o(l, n);
      if (i.hasEagerState = !0, i.eagerState = s, Jt(s, l)) {
        var a = t.interleaved;
        a === null ? (i.next = i, vf(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Dg(e, t, i, r), n !== null && (i = rt(), Gt(n, e, r, i), ny(n, t, r));
  }
}
function ey(e) {
  var t = e.alternate;
  return e === Ce || t !== null && t === Ce;
}
function ty(e, t) {
  To = Ts = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ny(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rf(e, n);
  }
}
var Ps = { readContext: Dt, useCallback: He, useContext: He, useEffect: He, useImperativeHandle: He, useInsertionEffect: He, useLayoutEffect: He, useMemo: He, useReducer: He, useRef: He, useState: He, useDebugValue: He, useDeferredValue: He, useTransition: He, useMutableSource: He, useSyncExternalStore: He, useId: He, unstable_isNewReconciler: !1 }, E1 = { readContext: Dt, useCallback: function(e, t) {
  return ln().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Dt, useEffect: mp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Zl(
    4194308,
    4,
    Yg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Zl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Zl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ln();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ln();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = S1.bind(null, Ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ln();
  return e = { current: e }, t.memoizedState = e;
}, useState: hp, useDebugValue: Pf, useDeferredValue: function(e) {
  return ln().memoizedState = e;
}, useTransition: function() {
  var e = hp(!1), t = e[0];
  return e = b1.bind(null, e[1]), ln().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ce, i = ln();
  if (be) {
    if (n === void 0) throw Error(F(407));
    n = n();
  } else {
    if (n = t(), ze === null) throw Error(F(349));
    Vr & 30 || Bg(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, mp(Ug.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Ko(9, $g.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ln(), t = ze.identifierPrefix;
  if (be) {
    var n = Tn, r = En;
    n = (r & ~(1 << 32 - Xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = k1++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, T1 = {
  readContext: Dt,
  useCallback: Xg,
  useContext: Dt,
  useEffect: Tf,
  useImperativeHandle: Kg,
  useInsertionEffect: Qg,
  useLayoutEffect: qg,
  useMemo: Gg,
  useReducer: Ka,
  useRef: Wg,
  useState: function() {
    return Ka(Yo);
  },
  useDebugValue: Pf,
  useDeferredValue: function(e) {
    var t = Mt();
    return Zg(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = Ka(Yo)[0], t = Mt().memoizedState;
    return [e, t];
  },
  useMutableSource: Fg,
  useSyncExternalStore: jg,
  useId: Jg,
  unstable_isNewReconciler: !1
}, P1 = { readContext: Dt, useCallback: Xg, useContext: Dt, useEffect: Tf, useImperativeHandle: Kg, useInsertionEffect: Qg, useLayoutEffect: qg, useMemo: Gg, useReducer: Xa, useRef: Wg, useState: function() {
  return Xa(Yo);
}, useDebugValue: Pf, useDeferredValue: function(e) {
  var t = Mt();
  return Le === null ? t.memoizedState = e : Zg(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = Xa(Yo)[0], t = Mt().memoizedState;
  return [e, t];
}, useMutableSource: Fg, useSyncExternalStore: jg, useId: Jg, unstable_isNewReconciler: !1 };
function Vt(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function tc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ea = { isMounted: function(e) {
  return (e = e._reactInternals) ? Xr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = rt(), i = fr(e), o = Pn(r, i);
  o.payload = t, n != null && (o.callback = n), t = ur(e, o, i), t !== null && (Gt(t, e, i, r), Xl(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = rt(), i = fr(e), o = Pn(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ur(e, o, i), t !== null && (Gt(t, e, i, r), Xl(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = rt(), r = fr(e), i = Pn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = ur(e, i, r), t !== null && (Gt(t, e, r, n), Xl(t, e, r));
} };
function gp(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !$o(n, r) || !$o(i, o) : !0;
}
function ry(e, t, n) {
  var r = !1, i = hr, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Dt(o) : (i = dt(t) ? Ur : Ye.current, r = t.contextTypes, o = (r = r != null) ? Mi(e, i) : hr), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ea, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function yp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ea.enqueueReplaceState(t, t.state, null);
}
function nc(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, wf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Dt(o) : (o = dt(t) ? Ur : Ye.current, i.context = Mi(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (tc(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ea.enqueueReplaceState(i, i.state, null), Cs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bi(e, t) {
  try {
    var n = "", r = t;
    do
      n += tx(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ga(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var A1 = typeof WeakMap == "function" ? WeakMap : Map;
function iy(e, t, n) {
  n = Pn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Rs || (Rs = !0, pc = r), rc(e, t);
  }, n;
}
function oy(e, t, n) {
  n = Pn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      rc(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    rc(e, t), typeof r != "function" && (cr === null ? cr = /* @__PURE__ */ new Set([this]) : cr.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function vp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new A1();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = U1.bind(null, e, t, n), t.then(e, e));
}
function wp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xp(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pn(-1, 1), t.tag = 2, ur(n, t, 1))), n.lanes |= 1), e);
}
var R1 = Dn.ReactCurrentOwner, ct = !1;
function Je(e, t, n, r) {
  t.child = e === null ? Og(t, null, n, r) : Fi(t, e.child, n, r);
}
function kp(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return ki(t, i), r = Cf(e, t, n, r, o, i), n = Ef(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, In(e, t, i)) : (be && n && df(t), t.flags |= 1, Je(e, t, r, i), t.child);
}
function bp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Df(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ly(e, t, o, r, i)) : (e = ns(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $o, n(l, r) && e.ref === t.ref) return In(e, t, i);
  }
  return t.flags |= 1, e = dr(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ly(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($o(o, r) && e.ref === t.ref) if (ct = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (ct = !0);
    else return t.lanes = e.lanes, In(e, t, i);
  }
  return ic(e, t, n, r, i);
}
function sy(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(gi, wt), wt |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(gi, wt), wt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ye(gi, wt), wt |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ye(gi, wt), wt |= r;
  return Je(e, t, i, n), t.child;
}
function ay(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ic(e, t, n, r, i) {
  var o = dt(n) ? Ur : Ye.current;
  return o = Mi(t, o), ki(t, i), n = Cf(e, t, n, r, o, i), r = Ef(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, In(e, t, i)) : (be && r && df(t), t.flags |= 1, Je(e, t, n, i), t.child);
}
function Sp(e, t, n, r, i) {
  if (dt(n)) {
    var o = !0;
    ws(t);
  } else o = !1;
  if (ki(t, i), t.stateNode === null) Jl(e, t), ry(t, n, r), nc(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Dt(u) : (u = dt(n) ? Ur : Ye.current, u = Mi(t, u));
    var f = n.getDerivedStateFromProps, c = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    c || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && yp(t, l, r, u), Kn = !1;
    var p = t.memoizedState;
    l.state = p, Cs(t, r, l, i), a = t.memoizedState, s !== r || p !== a || ft.current || Kn ? (typeof f == "function" && (tc(t, n, f, r), a = t.memoizedState), (s = Kn || gp(t, n, s, r, p, a, u)) ? (c || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Mg(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Vt(t.type, s), l.props = u, c = t.pendingProps, p = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Dt(a) : (a = dt(n) ? Ur : Ye.current, a = Mi(t, a));
    var d = n.getDerivedStateFromProps;
    (f = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== c || p !== a) && yp(t, l, r, a), Kn = !1, p = t.memoizedState, l.state = p, Cs(t, r, l, i);
    var m = t.memoizedState;
    s !== c || p !== m || ft.current || Kn ? (typeof d == "function" && (tc(t, n, d, r), m = t.memoizedState), (u = Kn || gp(t, n, u, r, p, m, a) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, m, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, m, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return oc(e, t, n, r, o, i);
}
function oc(e, t, n, r, i, o) {
  ay(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && ap(t, n, !1), In(e, t, o);
  r = t.stateNode, R1.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Fi(t, e.child, null, o), t.child = Fi(t, null, s, o)) : Je(e, t, s, o), t.memoizedState = r.state, i && ap(t, n, !0), t.child;
}
function uy(e) {
  var t = e.stateNode;
  t.pendingContext ? sp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sp(e, t.context, !1), xf(e, t.containerInfo);
}
function Cp(e, t, n, r, i) {
  return zi(), hf(i), t.flags |= 256, Je(e, t, n, r), t.child;
}
var lc = { dehydrated: null, treeContext: null, retryLane: 0 };
function sc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cy(e, t, n) {
  var r = t.pendingProps, i = Se.current, o = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ye(Se, i & 1), e === null)
    return Ju(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = ra(l, r, 0, null), e = $r(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = sc(n), t.memoizedState = lc, e) : Af(t, l));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return N1(e, t, l, r, s, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, s = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = dr(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = dr(s, o) : (o = $r(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? sc(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = lc, r;
  }
  return o = e.child, e = o.sibling, r = dr(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Af(e, t) {
  return t = ra({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function _l(e, t, n, r) {
  return r !== null && hf(r), Fi(t, e.child, null, n), e = Af(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function N1(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ga(Error(F(422))), _l(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = ra({ mode: "visible", children: r.children }, i, 0, null), o = $r(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Fi(t, e.child, null, l), t.child.memoizedState = sc(l), t.memoizedState = lc, o);
  if (!(t.mode & 1)) return _l(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
    return r = s, o = Error(F(419)), r = Ga(o, r, void 0), _l(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, ct || s) {
    if (r = ze, r !== null) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Nn(e, i), Gt(r, e, i, -1));
    }
    return Of(), r = Ga(Error(F(421))), _l(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = H1.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, kt = ar(i.nextSibling), bt = t, be = !0, Kt = null, e !== null && (Nt[It++] = En, Nt[It++] = Tn, Nt[It++] = Hr, En = e.id, Tn = e.overflow, Hr = t), t = Af(t, r.children), t.flags |= 4096, t);
}
function Ep(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ec(e.return, t, n);
}
function Za(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function fy(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Je(e, t, r.children, n), r = Se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ep(e, n, t);
      else if (e.tag === 19) Ep(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ye(Se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Es(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Za(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Es(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Za(t, !0, n, null, o);
      break;
    case "together":
      Za(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Jl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function In(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Wr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = dr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function I1(e, t, n) {
  switch (t.tag) {
    case 3:
      uy(t), zi();
      break;
    case 5:
      zg(t);
      break;
    case 1:
      dt(t.type) && ws(t);
      break;
    case 4:
      xf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      ye(bs, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ye(Se, Se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? cy(e, t, n) : (ye(Se, Se.current & 1), e = In(e, t, n), e !== null ? e.sibling : null);
      ye(Se, Se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return fy(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ye(Se, Se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, sy(e, t, n);
  }
  return In(e, t, n);
}
var dy, ac, py, hy;
dy = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
ac = function() {
};
py = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Lr(pn.current);
    var o = null;
    switch (n) {
      case "input":
        i = Nu(e, i), r = Nu(e, r), o = [];
        break;
      case "select":
        i = Ee({}, i, { value: void 0 }), r = Ee({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Lu(e, i), r = Lu(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ys);
    }
    Du(n, r);
    var l;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Oo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Oo.hasOwnProperty(u) ? (a != null && u === "onScroll" && we("scroll", e), o || s === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
hy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function uo(e, t) {
  if (!be) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function _1(e, t, n) {
  var r = t.pendingProps;
  switch (pf(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ve(t), null;
    case 1:
      return dt(t.type) && vs(), Ve(t), null;
    case 3:
      return r = t.stateNode, ji(), xe(ft), xe(Ye), bf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Kt !== null && (gc(Kt), Kt = null))), ac(e, t), Ve(t), null;
    case 5:
      kf(t);
      var i = Lr(Qo.current);
      if (n = t.type, e !== null && t.stateNode != null) py(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return Ve(t), null;
        }
        if (e = Lr(pn.current), Nl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[fn] = t, r[Vo] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < xo.length; i++) we(xo[i], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we(
                "error",
                r
              ), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              Od(r, o), we("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, we("invalid", r);
              break;
            case "textarea":
              Md(r, o), we("invalid", r);
          }
          Du(n, o), i = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var s = o[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Rl(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Rl(
              r.textContent,
              s,
              e
            ), i = ["children", "" + s]) : Oo.hasOwnProperty(l) && s != null && l === "onScroll" && we("scroll", r);
          }
          switch (n) {
            case "input":
              kl(r), Dd(r, o, !0);
              break;
            case "textarea":
              kl(r), zd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ys);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Um(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[fn] = t, e[Vo] = r, dy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Mu(n, r), n) {
              case "dialog":
                we("cancel", e), we("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < xo.length; i++) we(xo[i], e);
                i = r;
                break;
              case "source":
                we("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                we(
                  "error",
                  e
                ), we("load", e), i = r;
                break;
              case "details":
                we("toggle", e), i = r;
                break;
              case "input":
                Od(e, r), i = Nu(e, r), we("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Ee({}, r, { value: void 0 }), we("invalid", e);
                break;
              case "textarea":
                Md(e, r), i = Lu(e, r), we("invalid", e);
                break;
              default:
                i = r;
            }
            Du(n, i), s = i;
            for (o in s) if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "style" ? Wm(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Hm(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Do(e, a) : typeof a == "number" && Do(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Oo.hasOwnProperty(o) ? a != null && o === "onScroll" && we("scroll", e) : a != null && Gc(e, o, a, l));
            }
            switch (n) {
              case "input":
                kl(e), Dd(e, r, !1);
                break;
              case "textarea":
                kl(e), zd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? yi(e, !!r.multiple, o, !1) : r.defaultValue != null && yi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ys);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) hy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (n = Lr(Qo.current), Lr(pn.current), Nl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[fn] = t, (o = r.nodeValue !== n) && (e = bt, e !== null)) switch (e.tag) {
            case 3:
              Rl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Rl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[fn] = t, t.stateNode = r;
      }
      return Ve(t), null;
    case 13:
      if (xe(Se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (be && kt !== null && t.mode & 1 && !(t.flags & 128)) _g(), zi(), t.flags |= 98560, o = !1;
        else if (o = Nl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(F(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(F(317));
            o[fn] = t;
          } else zi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ve(t), o = !1;
        } else Kt !== null && (gc(Kt), Kt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? Oe === 0 && (Oe = 3) : Of())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
    case 4:
      return ji(), ac(e, t), e === null && Uo(t.stateNode.containerInfo), Ve(t), null;
    case 10:
      return yf(t.type._context), Ve(t), null;
    case 17:
      return dt(t.type) && vs(), Ve(t), null;
    case 19:
      if (xe(Se), o = t.memoizedState, o === null) return Ve(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) uo(o, !1);
      else {
        if (Oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Es(e), l !== null) {
            for (t.flags |= 128, uo(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ye(Se, Se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Ae() > $i && (t.flags |= 128, r = !0, uo(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Es(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), uo(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !be) return Ve(t), null;
        } else 2 * Ae() - o.renderingStartTime > $i && n !== 1073741824 && (t.flags |= 128, r = !0, uo(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ae(), t.sibling = null, n = Se.current, ye(Se, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
    case 22:
    case 23:
      return Lf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? wt & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function L1(e, t) {
  switch (pf(t), t.tag) {
    case 1:
      return dt(t.type) && vs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ji(), xe(ft), xe(Ye), bf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return kf(t), null;
    case 13:
      if (xe(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(F(340));
        zi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(Se), null;
    case 4:
      return ji(), null;
    case 10:
      return yf(t.type._context), null;
    case 22:
    case 23:
      return Lf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ll = !1, Qe = !1, O1 = typeof WeakSet == "function" ? WeakSet : Set, V = null;
function mi(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Pe(e, t, r);
  }
  else n.current = null;
}
function uc(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var Tp = !1;
function D1(e, t) {
  if (Qu = hs, e = wg(), ff(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, s = -1, a = -1, u = 0, f = 0, c = e, p = null;
        t: for (; ; ) {
          for (var d; c !== n || i !== 0 && c.nodeType !== 3 || (s = l + i), c !== o || r !== 0 && c.nodeType !== 3 || (a = l + r), c.nodeType === 3 && (l += c.nodeValue.length), (d = c.firstChild) !== null; )
            p = c, c = d;
          for (; ; ) {
            if (c === e) break t;
            if (p === n && ++u === i && (s = l), p === o && ++f === r && (a = l), (d = c.nextSibling) !== null) break;
            c = p, p = c.parentNode;
          }
          c = d;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qu = { focusedElem: e, selectionRange: n }, hs = !1, V = t; V !== null; ) if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
  else for (; V !== null; ) {
    t = V;
    try {
      var m = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (m !== null) {
            var g = m.memoizedProps, w = m.memoizedState, h = t.stateNode, y = h.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Vt(t.type, g), w);
            h.__reactInternalSnapshotBeforeUpdate = y;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(F(163));
      }
    } catch (C) {
      Pe(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, V = e;
      break;
    }
    V = t.return;
  }
  return m = Tp, Tp = !1, m;
}
function Po(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && uc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ta(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function my(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, my(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[fn], delete t[Vo], delete t[Xu], delete t[y1], delete t[v1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function gy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || gy(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ys));
  else if (r !== 4 && (e = e.child, e !== null)) for (fc(e, t, n), e = e.sibling; e !== null; ) fc(e, t, n), e = e.sibling;
}
function dc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (dc(e, t, n), e = e.sibling; e !== null; ) dc(e, t, n), e = e.sibling;
}
var Fe = null, Yt = !1;
function Hn(e, t, n) {
  for (n = n.child; n !== null; ) yy(e, t, n), n = n.sibling;
}
function yy(e, t, n) {
  if (dn && typeof dn.onCommitFiberUnmount == "function") try {
    dn.onCommitFiberUnmount(qs, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Qe || mi(n, t);
    case 6:
      var r = Fe, i = Yt;
      Fe = null, Hn(e, t, n), Fe = r, Yt = i, Fe !== null && (Yt ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null && (Yt ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? Wa(e.parentNode, n) : e.nodeType === 1 && Wa(e, n), jo(e)) : Wa(Fe, n.stateNode));
      break;
    case 4:
      r = Fe, i = Yt, Fe = n.stateNode.containerInfo, Yt = !0, Hn(e, t, n), Fe = r, Yt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && uc(n, t, l), i = i.next;
        } while (i !== r);
      }
      Hn(e, t, n);
      break;
    case 1:
      if (!Qe && (mi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Pe(n, t, s);
      }
      Hn(e, t, n);
      break;
    case 21:
      Hn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Qe = (r = Qe) || n.memoizedState !== null, Hn(e, t, n), Qe = r) : Hn(e, t, n);
      break;
    default:
      Hn(e, t, n);
  }
}
function Ap(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new O1()), t.forEach(function(r) {
      var i = V1.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ut(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Fe = s.stateNode, Yt = !1;
            break e;
          case 3:
            Fe = s.stateNode.containerInfo, Yt = !0;
            break e;
          case 4:
            Fe = s.stateNode.containerInfo, Yt = !0;
            break e;
        }
        s = s.return;
      }
      if (Fe === null) throw Error(F(160));
      yy(o, l, i), Fe = null, Yt = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (u) {
      Pe(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vy(t, e), t = t.sibling;
}
function vy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ut(t, e), on(e), r & 4) {
        try {
          Po(3, e, e.return), ta(3, e);
        } catch (g) {
          Pe(e, e.return, g);
        }
        try {
          Po(5, e, e.return);
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 1:
      Ut(t, e), on(e), r & 512 && n !== null && mi(n, n.return);
      break;
    case 5:
      if (Ut(t, e), on(e), r & 512 && n !== null && mi(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Do(i, "");
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && o.type === "radio" && o.name != null && Bm(i, o), Mu(s, l);
          var u = Mu(s, o);
          for (l = 0; l < a.length; l += 2) {
            var f = a[l], c = a[l + 1];
            f === "style" ? Wm(i, c) : f === "dangerouslySetInnerHTML" ? Hm(i, c) : f === "children" ? Do(i, c) : Gc(i, f, c, u);
          }
          switch (s) {
            case "input":
              Iu(i, o);
              break;
            case "textarea":
              $m(i, o);
              break;
            case "select":
              var p = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var d = o.value;
              d != null ? yi(i, !!o.multiple, d, !1) : p !== !!o.multiple && (o.defaultValue != null ? yi(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : yi(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Vo] = o;
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Ut(t, e), on(e), r & 4) {
        if (e.stateNode === null) throw Error(F(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ut(t, e), on(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        jo(t.containerInfo);
      } catch (g) {
        Pe(e, e.return, g);
      }
      break;
    case 4:
      Ut(t, e), on(e);
      break;
    case 13:
      Ut(t, e), on(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (If = Ae())), r & 4 && Ap(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Qe = (u = Qe) || f, Ut(t, e), Qe = u) : Ut(t, e), on(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1) for (V = e, f = e.child; f !== null; ) {
          for (c = V = f; V !== null; ) {
            switch (p = V, d = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Po(4, p, p.return);
                break;
              case 1:
                mi(p, p.return);
                var m = p.stateNode;
                if (typeof m.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                  } catch (g) {
                    Pe(r, n, g);
                  }
                }
                break;
              case 5:
                mi(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Np(c);
                  continue;
                }
            }
            d !== null ? (d.return = p, V = d) : Np(c);
          }
          f = f.sibling;
        }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                i = c.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = c.stateNode, a = c.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Vm("display", l));
              } catch (g) {
                Pe(e, e.return, g);
              }
            }
          } else if (c.tag === 6) {
            if (f === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (g) {
              Pe(e, e.return, g);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), c = c.return;
          }
          f === c && (f = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      Ut(t, e), on(e), r & 4 && Ap(e);
      break;
    case 21:
      break;
    default:
      Ut(
        t,
        e
      ), on(e);
  }
}
function on(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Do(i, ""), r.flags &= -33);
          var o = Pp(e);
          dc(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = Pp(e);
          fc(e, s, l);
          break;
        default:
          throw Error(F(161));
      }
    } catch (a) {
      Pe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function M1(e, t, n) {
  V = e, wy(e);
}
function wy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Ll;
      if (!l) {
        var s = i.alternate, a = s !== null && s.memoizedState !== null || Qe;
        s = Ll;
        var u = Qe;
        if (Ll = l, (Qe = a) && !u) for (V = i; V !== null; ) l = V, a = l.child, l.tag === 22 && l.memoizedState !== null ? Ip(i) : a !== null ? (a.return = l, V = a) : Ip(i);
        for (; o !== null; ) V = o, wy(o), o = o.sibling;
        V = i, Ll = s, Qe = u;
      }
      Rp(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, V = o) : Rp(e);
  }
}
function Rp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Qe || ta(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Qe) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Vt(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && pp(t, o, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              pp(t, l, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var f = u.memoizedState;
                if (f !== null) {
                  var c = f.dehydrated;
                  c !== null && jo(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(F(163));
        }
        Qe || t.flags & 512 && cc(t);
      } catch (p) {
        Pe(t, t.return, p);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Np(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Ip(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ta(4, t);
          } catch (a) {
            Pe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Pe(t, i, a);
            }
          }
          var o = t.return;
          try {
            cc(t);
          } catch (a) {
            Pe(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            cc(t);
          } catch (a) {
            Pe(t, l, a);
          }
      }
    } catch (a) {
      Pe(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, V = s;
      break;
    }
    V = t.return;
  }
}
var z1 = Math.ceil, As = Dn.ReactCurrentDispatcher, Rf = Dn.ReactCurrentOwner, Ot = Dn.ReactCurrentBatchConfig, ae = 0, ze = null, _e = null, je = 0, wt = 0, gi = xr(0), Oe = 0, Xo = null, Wr = 0, na = 0, Nf = 0, Ao = null, ut = null, If = 0, $i = 1 / 0, bn = null, Rs = !1, pc = null, cr = null, Ol = !1, ir = null, Ns = 0, Ro = 0, hc = null, es = -1, ts = 0;
function rt() {
  return ae & 6 ? Ae() : es !== -1 ? es : es = Ae();
}
function fr(e) {
  return e.mode & 1 ? ae & 2 && je !== 0 ? je & -je : x1.transition !== null ? (ts === 0 && (ts = rg()), ts) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : cg(e.type)), e) : 1;
}
function Gt(e, t, n, r) {
  if (50 < Ro) throw Ro = 0, hc = null, Error(F(185));
  ll(e, n, r), (!(ae & 2) || e !== ze) && (e === ze && (!(ae & 2) && (na |= n), Oe === 4 && Gn(e, je)), pt(e, r), n === 1 && ae === 0 && !(t.mode & 1) && ($i = Ae() + 500, Zs && kr()));
}
function pt(e, t) {
  var n = e.callbackNode;
  xx(e, t);
  var r = ps(e, e === ze ? je : 0);
  if (r === 0) n !== null && Bd(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bd(n), t === 1) e.tag === 0 ? w1(_p.bind(null, e)) : Rg(_p.bind(null, e)), m1(function() {
      !(ae & 6) && kr();
    }), n = null;
    else {
      switch (ig(r)) {
        case 1:
          n = nf;
          break;
        case 4:
          n = tg;
          break;
        case 16:
          n = ds;
          break;
        case 536870912:
          n = ng;
          break;
        default:
          n = ds;
      }
      n = Py(n, xy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function xy(e, t) {
  if (es = -1, ts = 0, ae & 6) throw Error(F(327));
  var n = e.callbackNode;
  if (bi() && e.callbackNode !== n) return null;
  var r = ps(e, e === ze ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Is(e, r);
  else {
    t = r;
    var i = ae;
    ae |= 2;
    var o = by();
    (ze !== e || je !== t) && (bn = null, $i = Ae() + 500, Br(e, t));
    do
      try {
        B1();
        break;
      } catch (s) {
        ky(e, s);
      }
    while (!0);
    gf(), As.current = o, ae = i, _e !== null ? t = 0 : (ze = null, je = 0, t = Oe);
  }
  if (t !== 0) {
    if (t === 2 && (i = $u(e), i !== 0 && (r = i, t = mc(e, i))), t === 1) throw n = Xo, Br(e, 0), Gn(e, r), pt(e, Ae()), n;
    if (t === 6) Gn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !F1(i) && (t = Is(e, r), t === 2 && (o = $u(e), o !== 0 && (r = o, t = mc(e, o))), t === 1)) throw n = Xo, Br(e, 0), Gn(e, r), pt(e, Ae()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Rr(e, ut, bn);
          break;
        case 3:
          if (Gn(e, r), (r & 130023424) === r && (t = If + 500 - Ae(), 10 < t)) {
            if (ps(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              rt(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Ku(Rr.bind(null, e, ut, bn), t);
            break;
          }
          Rr(e, ut, bn);
          break;
        case 4:
          if (Gn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Xt(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = Ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * z1(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ku(Rr.bind(null, e, ut, bn), r);
            break;
          }
          Rr(e, ut, bn);
          break;
        case 5:
          Rr(e, ut, bn);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return pt(e, Ae()), e.callbackNode === n ? xy.bind(null, e) : null;
}
function mc(e, t) {
  var n = Ao;
  return e.current.memoizedState.isDehydrated && (Br(e, t).flags |= 256), e = Is(e, t), e !== 2 && (t = ut, ut = n, t !== null && gc(t)), e;
}
function gc(e) {
  ut === null ? ut = e : ut.push.apply(ut, e);
}
function F1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Jt(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Gn(e, t) {
  for (t &= ~Nf, t &= ~na, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _p(e) {
  if (ae & 6) throw Error(F(327));
  bi();
  var t = ps(e, 0);
  if (!(t & 1)) return pt(e, Ae()), null;
  var n = Is(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $u(e);
    r !== 0 && (t = r, n = mc(e, r));
  }
  if (n === 1) throw n = Xo, Br(e, 0), Gn(e, t), pt(e, Ae()), n;
  if (n === 6) throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rr(e, ut, bn), pt(e, Ae()), null;
}
function _f(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && ($i = Ae() + 500, Zs && kr());
  }
}
function Qr(e) {
  ir !== null && ir.tag === 0 && !(ae & 6) && bi();
  var t = ae;
  ae |= 1;
  var n = Ot.transition, r = fe;
  try {
    if (Ot.transition = null, fe = 1, e) return e();
  } finally {
    fe = r, Ot.transition = n, ae = t, !(ae & 6) && kr();
  }
}
function Lf() {
  wt = gi.current, xe(gi);
}
function Br(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, h1(n)), _e !== null) for (n = _e.return; n !== null; ) {
    var r = n;
    switch (pf(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && vs();
        break;
      case 3:
        ji(), xe(ft), xe(Ye), bf();
        break;
      case 5:
        kf(r);
        break;
      case 4:
        ji();
        break;
      case 13:
        xe(Se);
        break;
      case 19:
        xe(Se);
        break;
      case 10:
        yf(r.type._context);
        break;
      case 22:
      case 23:
        Lf();
    }
    n = n.return;
  }
  if (ze = e, _e = e = dr(e.current, null), je = wt = t, Oe = 0, Xo = null, Nf = na = Wr = 0, ut = Ao = null, _r !== null) {
    for (t = 0; t < _r.length; t++) if (n = _r[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = i, r.next = l;
      }
      n.pending = r;
    }
    _r = null;
  }
  return e;
}
function ky(e, t) {
  do {
    var n = _e;
    try {
      if (gf(), Gl.current = Ps, Ts) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Ts = !1;
      }
      if (Vr = 0, Me = Le = Ce = null, To = !1, qo = 0, Rf.current = null, n === null || n.return === null) {
        Oe = 1, Xo = t, _e = null;
        break;
      }
      e: {
        var o = e, l = n.return, s = n, a = t;
        if (t = je, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, f = s, c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = f.alternate;
            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var d = wp(l);
          if (d !== null) {
            d.flags &= -257, xp(d, l, s, o, t), d.mode & 1 && vp(o, u, t), t = d, a = u;
            var m = t.updateQueue;
            if (m === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(a), t.updateQueue = g;
            } else m.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              vp(o, u, t), Of();
              break e;
            }
            a = Error(F(426));
          }
        } else if (be && s.mode & 1) {
          var w = wp(l);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), xp(w, l, s, o, t), hf(Bi(a, s));
            break e;
          }
        }
        o = a = Bi(a, s), Oe !== 4 && (Oe = 2), Ao === null ? Ao = [o] : Ao.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var h = iy(o, a, t);
              dp(o, h);
              break e;
            case 1:
              s = a;
              var y = o.type, v = o.stateNode;
              if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (cr === null || !cr.has(v)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var C = oy(o, s, t);
                dp(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Cy(n);
    } catch (P) {
      t = P, _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function by() {
  var e = As.current;
  return As.current = Ps, e === null ? Ps : e;
}
function Of() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), ze === null || !(Wr & 268435455) && !(na & 268435455) || Gn(ze, je);
}
function Is(e, t) {
  var n = ae;
  ae |= 2;
  var r = by();
  (ze !== e || je !== t) && (bn = null, Br(e, t));
  do
    try {
      j1();
      break;
    } catch (i) {
      ky(e, i);
    }
  while (!0);
  if (gf(), ae = n, As.current = r, _e !== null) throw Error(F(261));
  return ze = null, je = 0, Oe;
}
function j1() {
  for (; _e !== null; ) Sy(_e);
}
function B1() {
  for (; _e !== null && !fx(); ) Sy(_e);
}
function Sy(e) {
  var t = Ty(e.alternate, e, wt);
  e.memoizedProps = e.pendingProps, t === null ? Cy(e) : _e = t, Rf.current = null;
}
function Cy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = L1(n, t), n !== null) {
        n.flags &= 32767, _e = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Oe = 6, _e = null;
        return;
      }
    } else if (n = _1(n, t, wt), n !== null) {
      _e = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function Rr(e, t, n) {
  var r = fe, i = Ot.transition;
  try {
    Ot.transition = null, fe = 1, $1(e, t, n, r);
  } finally {
    Ot.transition = i, fe = r;
  }
  return null;
}
function $1(e, t, n, r) {
  do
    bi();
  while (ir !== null);
  if (ae & 6) throw Error(F(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(F(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (kx(e, o), e === ze && (_e = ze = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ol || (Ol = !0, Py(ds, function() {
    return bi(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ot.transition, Ot.transition = null;
    var l = fe;
    fe = 1;
    var s = ae;
    ae |= 4, Rf.current = null, D1(e, n), vy(n, e), s1(qu), hs = !!Qu, qu = Qu = null, e.current = n, M1(n), dx(), ae = s, fe = l, Ot.transition = o;
  } else e.current = n;
  if (Ol && (Ol = !1, ir = e, Ns = i), o = e.pendingLanes, o === 0 && (cr = null), mx(n.stateNode), pt(e, Ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Rs) throw Rs = !1, e = pc, pc = null, e;
  return Ns & 1 && e.tag !== 0 && bi(), o = e.pendingLanes, o & 1 ? e === hc ? Ro++ : (Ro = 0, hc = e) : Ro = 0, kr(), null;
}
function bi() {
  if (ir !== null) {
    var e = ig(Ns), t = Ot.transition, n = fe;
    try {
      if (Ot.transition = null, fe = 16 > e ? 16 : e, ir === null) var r = !1;
      else {
        if (e = ir, ir = null, Ns = 0, ae & 6) throw Error(F(331));
        var i = ae;
        for (ae |= 4, V = e.current; V !== null; ) {
          var o = V, l = o.child;
          if (V.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (V = u; V !== null; ) {
                  var f = V;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Po(8, f, o);
                  }
                  var c = f.child;
                  if (c !== null) c.return = f, V = c;
                  else for (; V !== null; ) {
                    f = V;
                    var p = f.sibling, d = f.return;
                    if (my(f), f === u) {
                      V = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = d, V = p;
                      break;
                    }
                    V = d;
                  }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var w = g.sibling;
                    g.sibling = null, g = w;
                  } while (g !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, V = l;
          else e: for (; V !== null; ) {
            if (o = V, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Po(9, o, o.return);
            }
            var h = o.sibling;
            if (h !== null) {
              h.return = o.return, V = h;
              break e;
            }
            V = o.return;
          }
        }
        var y = e.current;
        for (V = y; V !== null; ) {
          l = V;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) v.return = l, V = v;
          else e: for (l = y; V !== null; ) {
            if (s = V, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  ta(9, s);
              }
            } catch (P) {
              Pe(s, s.return, P);
            }
            if (s === l) {
              V = null;
              break e;
            }
            var C = s.sibling;
            if (C !== null) {
              C.return = s.return, V = C;
              break e;
            }
            V = s.return;
          }
        }
        if (ae = i, kr(), dn && typeof dn.onPostCommitFiberRoot == "function") try {
          dn.onPostCommitFiberRoot(qs, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      fe = n, Ot.transition = t;
    }
  }
  return !1;
}
function Lp(e, t, n) {
  t = Bi(n, t), t = iy(e, t, 1), e = ur(e, t, 1), t = rt(), e !== null && (ll(e, 1, t), pt(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) Lp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Lp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cr === null || !cr.has(r))) {
        e = Bi(n, e), e = oy(t, e, 1), t = ur(t, e, 1), e = rt(), t !== null && (ll(t, 1, e), pt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function U1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = rt(), e.pingedLanes |= e.suspendedLanes & n, ze === e && (je & n) === n && (Oe === 4 || Oe === 3 && (je & 130023424) === je && 500 > Ae() - If ? Br(e, 0) : Nf |= n), pt(e, t);
}
function Ey(e, t) {
  t === 0 && (e.mode & 1 ? (t = Cl, Cl <<= 1, !(Cl & 130023424) && (Cl = 4194304)) : t = 1);
  var n = rt();
  e = Nn(e, t), e !== null && (ll(e, t, n), pt(e, n));
}
function H1(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ey(e, n);
}
function V1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Ey(e, n);
}
var Ty;
Ty = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ft.current) ct = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ct = !1, I1(e, t, n);
    ct = !!(e.flags & 131072);
  }
  else ct = !1, be && t.flags & 1048576 && Ng(t, ks, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Jl(e, t), e = t.pendingProps;
      var i = Mi(t, Ye.current);
      ki(t, n), i = Cf(null, t, r, e, i, n);
      var o = Ef();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, dt(r) ? (o = !0, ws(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, wf(t), i.updater = ea, t.stateNode = i, i._reactInternals = t, nc(t, r, e, n), t = oc(null, t, r, !0, o, n)) : (t.tag = 0, be && o && df(t), Je(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Jl(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Q1(r), e = Vt(r, e), i) {
          case 0:
            t = ic(null, t, r, e, n);
            break e;
          case 1:
            t = Sp(null, t, r, e, n);
            break e;
          case 11:
            t = kp(null, t, r, e, n);
            break e;
          case 14:
            t = bp(null, t, r, Vt(r.type, e), n);
            break e;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vt(r, i), ic(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vt(r, i), Sp(e, t, r, i, n);
    case 3:
      e: {
        if (uy(t), e === null) throw Error(F(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Mg(e, t), Cs(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Bi(Error(F(423)), t), t = Cp(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Bi(Error(F(424)), t), t = Cp(e, t, r, n, i);
          break e;
        } else for (kt = ar(t.stateNode.containerInfo.firstChild), bt = t, be = !0, Kt = null, n = Og(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (zi(), r === i) {
            t = In(e, t, n);
            break e;
          }
          Je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return zg(t), e === null && Ju(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Yu(r, i) ? l = null : o !== null && Yu(r, o) && (t.flags |= 32), ay(e, t), Je(e, t, l, n), t.child;
    case 6:
      return e === null && Ju(t), null;
    case 13:
      return cy(e, t, n);
    case 4:
      return xf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Fi(t, null, r, n) : Je(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vt(r, i), kp(e, t, r, i, n);
    case 7:
      return Je(e, t, t.pendingProps, n), t.child;
    case 8:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, ye(bs, r._currentValue), r._currentValue = l, o !== null) if (Jt(o.value, l)) {
          if (o.children === i.children && !ft.current) {
            t = In(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var s = o.dependencies;
          if (s !== null) {
            l = o.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = Pn(-1, n & -n), a.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var f = u.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), u.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ec(
                  o.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(F(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), ec(l, n, t), l = o.sibling;
          } else l = o.child;
          if (l !== null) l.return = o;
          else for (l = o; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (o = l.sibling, o !== null) {
              o.return = l.return, l = o;
              break;
            }
            l = l.return;
          }
          o = l;
        }
        Je(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, ki(t, n), i = Dt(i), r = r(i), t.flags |= 1, Je(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Vt(r, t.pendingProps), i = Vt(r.type, i), bp(e, t, r, i, n);
    case 15:
      return ly(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vt(r, i), Jl(e, t), t.tag = 1, dt(r) ? (e = !0, ws(t)) : e = !1, ki(t, n), ry(t, r, i), nc(t, r, i, n), oc(null, t, r, !0, e, n);
    case 19:
      return fy(e, t, n);
    case 22:
      return sy(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Py(e, t) {
  return eg(e, t);
}
function W1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Lt(e, t, n, r) {
  return new W1(e, t, n, r);
}
function Df(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Q1(e) {
  if (typeof e == "function") return Df(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Jc) return 11;
    if (e === ef) return 14;
  }
  return 2;
}
function dr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ns(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") Df(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case li:
      return $r(n.children, i, o, t);
    case Zc:
      l = 8, i |= 8;
      break;
    case Tu:
      return e = Lt(12, n, t, i | 2), e.elementType = Tu, e.lanes = o, e;
    case Pu:
      return e = Lt(13, n, t, i), e.elementType = Pu, e.lanes = o, e;
    case Au:
      return e = Lt(19, n, t, i), e.elementType = Au, e.lanes = o, e;
    case zm:
      return ra(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Dm:
          l = 10;
          break e;
        case Mm:
          l = 9;
          break e;
        case Jc:
          l = 11;
          break e;
        case ef:
          l = 14;
          break e;
        case Yn:
          l = 16, r = null;
          break e;
      }
      throw Error(F(130, e == null ? e : typeof e, ""));
  }
  return t = Lt(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function $r(e, t, n, r) {
  return e = Lt(7, e, r, t), e.lanes = n, e;
}
function ra(e, t, n, r) {
  return e = Lt(22, e, r, t), e.elementType = zm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ja(e, t, n) {
  return e = Lt(6, e, null, t), e.lanes = n, e;
}
function eu(e, t, n) {
  return t = Lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function q1(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oa(0), this.expirationTimes = Oa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oa(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Mf(e, t, n, r, i, o, l, s, a) {
  return e = new q1(e, t, n, s, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Lt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wf(o), e;
}
function Y1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: oi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ay(e) {
  if (!e) return hr;
  e = e._reactInternals;
  e: {
    if (Xr(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return Ag(e, n, t);
  }
  return t;
}
function Ry(e, t, n, r, i, o, l, s, a) {
  return e = Mf(n, r, !0, e, i, o, l, s, a), e.context = Ay(null), n = e.current, r = rt(), i = fr(n), o = Pn(r, i), o.callback = t ?? null, ur(n, o, i), e.current.lanes = i, ll(e, i, r), pt(e, r), e;
}
function ia(e, t, n, r) {
  var i = t.current, o = rt(), l = fr(i);
  return n = Ay(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pn(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ur(i, t, l), e !== null && (Gt(e, i, l, o), Xl(e, i, l)), l;
}
function _s(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Op(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zf(e, t) {
  Op(e, t), (e = e.alternate) && Op(e, t);
}
function K1() {
  return null;
}
var Ny = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ff(e) {
  this._internalRoot = e;
}
oa.prototype.render = Ff.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  ia(e, t, null, null);
};
oa.prototype.unmount = Ff.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qr(function() {
      ia(null, e, null, null);
    }), t[Rn] = null;
  }
};
function oa(e) {
  this._internalRoot = e;
}
oa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = sg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xn.length && t !== 0 && t < Xn[n].priority; n++) ;
    Xn.splice(n, 0, e), n === 0 && ug(e);
  }
};
function jf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function la(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Dp() {
}
function X1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = _s(l);
        o.call(u);
      };
    }
    var l = Ry(t, r, e, 0, null, !1, !1, "", Dp);
    return e._reactRootContainer = l, e[Rn] = l.current, Uo(e.nodeType === 8 ? e.parentNode : e), Qr(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = _s(a);
      s.call(u);
    };
  }
  var a = Mf(e, 0, !1, null, null, !1, !1, "", Dp);
  return e._reactRootContainer = a, e[Rn] = a.current, Uo(e.nodeType === 8 ? e.parentNode : e), Qr(function() {
    ia(t, a, n, r);
  }), a;
}
function sa(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var a = _s(l);
        s.call(a);
      };
    }
    ia(t, l, e, i);
  } else l = X1(n, t, e, i, r);
  return _s(l);
}
og = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wo(t.pendingLanes);
        n !== 0 && (rf(t, n | 1), pt(t, Ae()), !(ae & 6) && ($i = Ae() + 500, kr()));
      }
      break;
    case 13:
      Qr(function() {
        var r = Nn(e, 1);
        if (r !== null) {
          var i = rt();
          Gt(r, e, 1, i);
        }
      }), zf(e, 1);
  }
};
of = function(e) {
  if (e.tag === 13) {
    var t = Nn(e, 134217728);
    if (t !== null) {
      var n = rt();
      Gt(t, e, 134217728, n);
    }
    zf(e, 134217728);
  }
};
lg = function(e) {
  if (e.tag === 13) {
    var t = fr(e), n = Nn(e, t);
    if (n !== null) {
      var r = rt();
      Gt(n, e, t, r);
    }
    zf(e, t);
  }
};
sg = function() {
  return fe;
};
ag = function(e, t) {
  var n = fe;
  try {
    return fe = e, t();
  } finally {
    fe = n;
  }
};
Fu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Iu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Gs(r);
            if (!i) throw Error(F(90));
            jm(r), Iu(r, i);
          }
        }
      }
      break;
    case "textarea":
      $m(e, n);
      break;
    case "select":
      t = n.value, t != null && yi(e, !!n.multiple, t, !1);
  }
};
Ym = _f;
Km = Qr;
var G1 = { usingClientEntryPoint: !1, Events: [al, ci, Gs, Qm, qm, _f] }, co = { findFiberByHostInstance: Ir, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Z1 = { bundleType: co.bundleType, version: co.version, rendererPackageName: co.rendererPackageName, rendererConfig: co.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Zm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: co.findFiberByHostInstance || K1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber) try {
    qs = Dl.inject(Z1), dn = Dl;
  } catch {
  }
}
Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G1;
Tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jf(t)) throw Error(F(200));
  return Y1(e, t, null, n);
};
Tt.createRoot = function(e, t) {
  if (!jf(e)) throw Error(F(299));
  var n = !1, r = "", i = Ny;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Mf(e, 1, !1, null, null, n, !1, r, i), e[Rn] = t.current, Uo(e.nodeType === 8 ? e.parentNode : e), new Ff(t);
};
Tt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = Zm(t), e = e === null ? null : e.stateNode, e;
};
Tt.flushSync = function(e) {
  return Qr(e);
};
Tt.hydrate = function(e, t, n) {
  if (!la(t)) throw Error(F(200));
  return sa(null, e, t, !0, n);
};
Tt.hydrateRoot = function(e, t, n) {
  if (!jf(e)) throw Error(F(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = Ny;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Ry(t, null, e, 1, n ?? null, i, !1, o, l), e[Rn] = t.current, Uo(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new oa(t);
};
Tt.render = function(e, t, n) {
  if (!la(t)) throw Error(F(200));
  return sa(null, e, t, !1, n);
};
Tt.unmountComponentAtNode = function(e) {
  if (!la(e)) throw Error(F(40));
  return e._reactRootContainer ? (Qr(function() {
    sa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Rn] = null;
    });
  }), !0) : !1;
};
Tt.unstable_batchedUpdates = _f;
Tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!la(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return sa(e, t, n, !1, r);
};
Tt.version = "18.3.1-next-f1338f8080-20240426";
function Iy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iy);
    } catch (e) {
      console.error(e);
    }
}
Iy(), Im.exports = Tt;
var cl = Im.exports;
const _y = /* @__PURE__ */ Ws(cl);
var Ly, Mp = cl;
Ly = Mp.createRoot, Mp.hydrateRoot;
const J1 = 1, ek = 1e6;
let tu = 0;
function tk() {
  return tu = (tu + 1) % Number.MAX_SAFE_INTEGER, tu.toString();
}
const nu = /* @__PURE__ */ new Map(), zp = (e) => {
  if (nu.has(e))
    return;
  const t = setTimeout(() => {
    nu.delete(e), No({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, ek);
  nu.set(e, t);
}, nk = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, J1)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map((n) => n.id === t.toast.id ? { ...n, ...t.toast } : n)
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? zp(n) : e.toasts.forEach((r) => {
        zp(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, rs = [];
let is = { toasts: [] };
function No(e) {
  is = nk(is, e), rs.forEach((t) => {
    t(is);
  });
}
function Oy({ ...e }) {
  const t = tk(), n = (i) => No({
    type: "UPDATE_TOAST",
    toast: { ...i, id: t }
  }), r = () => No({ type: "DISMISS_TOAST", toastId: t });
  return No({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (i) => {
        i || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function rk() {
  const [e, t] = k.useState(is);
  return k.useEffect(() => (rs.push(t), () => {
    const n = rs.indexOf(t);
    n > -1 && rs.splice(n, 1);
  }), [e]), {
    ...e,
    toast: Oy,
    dismiss: (n) => No({ type: "DISMISS_TOAST", toastId: n })
  };
}
function ge(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function Fp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Dy(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = Fp(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : Fp(e[i], null);
        }
      };
  };
}
function $e(...e) {
  return k.useCallback(Dy(...e), e);
}
function fl(e, t = []) {
  let n = [];
  function r(o, l) {
    const s = k.createContext(l), a = n.length;
    n = [...n, l];
    const u = (c) => {
      var h;
      const { scope: p, children: d, ...m } = c, g = ((h = p == null ? void 0 : p[e]) == null ? void 0 : h[a]) || s, w = k.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ T.jsx(g.Provider, { value: w, children: d });
    };
    u.displayName = o + "Provider";
    function f(c, p) {
      var g;
      const d = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[a]) || s, m = k.useContext(d);
      if (m) return m;
      if (l !== void 0) return l;
      throw new Error(`\`${c}\` must be used within \`${o}\``);
    }
    return [u, f];
  }
  const i = () => {
    const o = n.map((l) => k.createContext(l));
    return function(s) {
      const a = (s == null ? void 0 : s[e]) || o;
      return k.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: a } }),
        [s, a]
      );
    };
  };
  return i.scopeName = e, [r, ik(i, ...t)];
}
function ik(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const l = r.reduce((s, { useScope: a, scopeName: u }) => {
        const c = a(o)[`__scope${u}`];
        return { ...s, ...c };
      }, {});
      return k.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  const t = /* @__PURE__ */ lk(e), n = k.forwardRef((r, i) => {
    const { children: o, ...l } = r, s = k.Children.toArray(o), a = s.find(ak);
    if (a) {
      const u = a.props.children, f = s.map((c) => c === a ? k.Children.count(u) > 1 ? k.Children.only(null) : k.isValidElement(u) ? u.props.children : null : c);
      return /* @__PURE__ */ T.jsx(t, { ...l, ref: i, children: k.isValidElement(u) ? k.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ T.jsx(t, { ...l, ref: i, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
var ok = /* @__PURE__ */ Ls("Slot");
// @__NO_SIDE_EFFECTS__
function lk(e) {
  const t = k.forwardRef((n, r) => {
    const { children: i, ...o } = n;
    if (k.isValidElement(i)) {
      const l = ck(i), s = uk(o, i.props);
      return i.type !== k.Fragment && (s.ref = r ? Dy(r, l) : l), k.cloneElement(i, s);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var My = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function sk(e) {
  const t = ({ children: n }) => /* @__PURE__ */ T.jsx(T.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = My, t;
}
function ak(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === My;
}
function uk(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? i && o ? n[r] = (...s) => {
      const a = o(...s);
      return i(...s), a;
    } : i && (n[r] = i) : r === "style" ? n[r] = { ...i, ...o } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ck(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function fk(e) {
  const t = e + "CollectionProvider", [n, r] = fl(t), [i, o] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (g) => {
    const { scope: w, children: h } = g, y = $.useRef(null), v = $.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ T.jsx(i, { scope: w, itemMap: v, collectionRef: y, children: h });
  };
  l.displayName = t;
  const s = e + "CollectionSlot", a = /* @__PURE__ */ Ls(s), u = $.forwardRef(
    (g, w) => {
      const { scope: h, children: y } = g, v = o(s, h), C = $e(w, v.collectionRef);
      return /* @__PURE__ */ T.jsx(a, { ref: C, children: y });
    }
  );
  u.displayName = s;
  const f = e + "CollectionItemSlot", c = "data-radix-collection-item", p = /* @__PURE__ */ Ls(f), d = $.forwardRef(
    (g, w) => {
      const { scope: h, children: y, ...v } = g, C = $.useRef(null), P = $e(w, C), b = o(f, h);
      return $.useEffect(() => (b.itemMap.set(C, { ref: C, ...v }), () => void b.itemMap.delete(C))), /* @__PURE__ */ T.jsx(p, { [c]: "", ref: P, children: y });
    }
  );
  d.displayName = f;
  function m(g) {
    const w = o(e + "CollectionConsumer", g);
    return $.useCallback(() => {
      const y = w.collectionRef.current;
      if (!y) return [];
      const v = Array.from(y.querySelectorAll(`[${c}]`));
      return Array.from(w.itemMap.values()).sort(
        (b, A) => v.indexOf(b.ref.current) - v.indexOf(A.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: l, Slot: u, ItemSlot: d },
    m,
    r
  ];
}
var dk = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], De = dk.reduce((e, t) => {
  const n = /* @__PURE__ */ Ls(`Primitive.${t}`), r = k.forwardRef((i, o) => {
    const { asChild: l, ...s } = i, a = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ T.jsx(a, { ...s, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function zy(e, t) {
  e && cl.flushSync(() => e.dispatchEvent(t));
}
function tt(e) {
  const t = k.useRef(e);
  return k.useEffect(() => {
    t.current = e;
  }), k.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function pk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e);
  k.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var hk = "DismissableLayer", yc = "dismissableLayer.update", mk = "dismissableLayer.pointerDownOutside", gk = "dismissableLayer.focusOutside", jp, Fy = k.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bf = k.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: i,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: s,
      ...a
    } = e, u = k.useContext(Fy), [f, c] = k.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, d] = k.useState({}), m = $e(t, (A) => c(A)), g = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), h = g.indexOf(w), y = f ? g.indexOf(f) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= h, P = vk((A) => {
      const N = A.target, I = [...u.branches].some((E) => E.contains(N));
      !C || I || (i == null || i(A), l == null || l(A), A.defaultPrevented || s == null || s());
    }, p), b = wk((A) => {
      const N = A.target;
      [...u.branches].some((E) => E.contains(N)) || (o == null || o(A), l == null || l(A), A.defaultPrevented || s == null || s());
    }, p);
    return pk((A) => {
      y === u.layers.size - 1 && (r == null || r(A), !A.defaultPrevented && s && (A.preventDefault(), s()));
    }, p), k.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (jp = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Bp(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = jp);
        };
    }, [f, p, n, u]), k.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Bp());
    }, [f, u]), k.useEffect(() => {
      const A = () => d({});
      return document.addEventListener(yc, A), () => document.removeEventListener(yc, A);
    }, []), /* @__PURE__ */ T.jsx(
      De.div,
      {
        ...a,
        ref: m,
        style: {
          pointerEvents: v ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ge(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: ge(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: ge(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Bf.displayName = hk;
var yk = "DismissableLayerBranch", jy = k.forwardRef((e, t) => {
  const n = k.useContext(Fy), r = k.useRef(null), i = $e(t, r);
  return k.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ T.jsx(De.div, { ...e, ref: i });
});
jy.displayName = yk;
function vk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e), r = k.useRef(!1), i = k.useRef(() => {
  });
  return k.useEffect(() => {
    const o = (s) => {
      if (s.target && !r.current) {
        let a = function() {
          By(
            mk,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = a, t.addEventListener("click", i.current, { once: !0 })) : a();
      } else
        t.removeEventListener("click", i.current);
      r.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", o), t.removeEventListener("click", i.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function wk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e), r = k.useRef(!1);
  return k.useEffect(() => {
    const i = (o) => {
      o.target && !r.current && By(gk, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Bp() {
  const e = new CustomEvent(yc);
  document.dispatchEvent(e);
}
function By(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? zy(i, o) : i.dispatchEvent(o);
}
var xk = Bf, kk = jy, _n = globalThis != null && globalThis.document ? k.useLayoutEffect : () => {
}, bk = "Portal", $y = k.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [i, o] = k.useState(!1);
  _n(() => o(!0), []);
  const l = n || i && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return l ? _y.createPortal(/* @__PURE__ */ T.jsx(De.div, { ...r, ref: t }), l) : null;
});
$y.displayName = bk;
function Sk(e, t) {
  return k.useReducer((n, r) => t[n][r] ?? n, e);
}
var Gr = (e) => {
  const { present: t, children: n } = e, r = Ck(t), i = typeof n == "function" ? n({ present: r.isPresent }) : k.Children.only(n), o = $e(r.ref, Ek(i));
  return typeof n == "function" || r.isPresent ? k.cloneElement(i, { ref: o }) : null;
};
Gr.displayName = "Presence";
function Ck(e) {
  const [t, n] = k.useState(), r = k.useRef(null), i = k.useRef(e), o = k.useRef("none"), l = e ? "mounted" : "unmounted", [s, a] = Sk(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return k.useEffect(() => {
    const u = Ml(r.current);
    o.current = s === "mounted" ? u : "none";
  }, [s]), _n(() => {
    const u = r.current, f = i.current;
    if (f !== e) {
      const p = o.current, d = Ml(u);
      e ? a("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(f && p !== d ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, a]), _n(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, c = (d) => {
        const g = Ml(r.current).includes(d.animationName);
        if (d.target === t && g && (a("ANIMATION_END"), !i.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, p = (d) => {
        d.target === t && (o.current = Ml(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      a("ANIMATION_END");
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: k.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Ml(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ek(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Tk = Uw[" useInsertionEffect ".trim().toString()] || _n;
function Pk({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [i, o, l] = Ak({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, a = s ? e : i;
  {
    const f = k.useRef(e !== void 0);
    k.useEffect(() => {
      const c = f.current;
      c !== s && console.warn(
        `${r} is changing from ${c ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const u = k.useCallback(
    (f) => {
      var c;
      if (s) {
        const p = Rk(f) ? f(e) : f;
        p !== e && ((c = l.current) == null || c.call(l, p));
      } else
        o(f);
    },
    [s, e, o, l]
  );
  return [a, u];
}
function Ak({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = k.useState(e), i = k.useRef(n), o = k.useRef(t);
  return Tk(() => {
    o.current = t;
  }, [t]), k.useEffect(() => {
    var l;
    i.current !== n && ((l = o.current) == null || l.call(o, n), i.current = n);
  }, [n, i]), [n, r, o];
}
function Rk(e) {
  return typeof e == "function";
}
var Nk = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Ik = "VisuallyHidden", aa = k.forwardRef(
  (e, t) => /* @__PURE__ */ T.jsx(
    De.span,
    {
      ...e,
      ref: t,
      style: { ...Nk, ...e.style }
    }
  )
);
aa.displayName = Ik;
var _k = aa, $f = "ToastProvider", [Uf, Lk, Ok] = fk("Toast"), [Uy, BI] = fl("Toast", [Ok]), [Dk, ua] = Uy($f), Hy = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: i = "right",
    swipeThreshold: o = 50,
    children: l
  } = e, [s, a] = k.useState(null), [u, f] = k.useState(0), c = k.useRef(!1), p = k.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${$f}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ T.jsx(Uf.Provider, { scope: t, children: /* @__PURE__ */ T.jsx(
    Dk,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: i,
      swipeThreshold: o,
      toastCount: u,
      viewport: s,
      onViewportChange: a,
      onToastAdd: k.useCallback(() => f((d) => d + 1), []),
      onToastRemove: k.useCallback(() => f((d) => d - 1), []),
      isFocusedToastEscapeKeyDownRef: c,
      isClosePausedRef: p,
      children: l
    }
  ) });
};
Hy.displayName = $f;
var Vy = "ToastViewport", Mk = ["F8"], vc = "toast.viewportPause", wc = "toast.viewportResume", Wy = k.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Mk,
      label: i = "Notifications ({hotkey})",
      ...o
    } = e, l = ua(Vy, n), s = Lk(n), a = k.useRef(null), u = k.useRef(null), f = k.useRef(null), c = k.useRef(null), p = $e(t, c, l.onViewportChange), d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = l.toastCount > 0;
    k.useEffect(() => {
      const w = (h) => {
        var v;
        r.length !== 0 && r.every((C) => h[C] || h.code === C) && ((v = c.current) == null || v.focus());
      };
      return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
    }, [r]), k.useEffect(() => {
      const w = a.current, h = c.current;
      if (m && w && h) {
        const y = () => {
          if (!l.isClosePausedRef.current) {
            const b = new CustomEvent(vc);
            h.dispatchEvent(b), l.isClosePausedRef.current = !0;
          }
        }, v = () => {
          if (l.isClosePausedRef.current) {
            const b = new CustomEvent(wc);
            h.dispatchEvent(b), l.isClosePausedRef.current = !1;
          }
        }, C = (b) => {
          !w.contains(b.relatedTarget) && v();
        }, P = () => {
          w.contains(document.activeElement) || v();
        };
        return w.addEventListener("focusin", y), w.addEventListener("focusout", C), w.addEventListener("pointermove", y), w.addEventListener("pointerleave", P), window.addEventListener("blur", y), window.addEventListener("focus", v), () => {
          w.removeEventListener("focusin", y), w.removeEventListener("focusout", C), w.removeEventListener("pointermove", y), w.removeEventListener("pointerleave", P), window.removeEventListener("blur", y), window.removeEventListener("focus", v);
        };
      }
    }, [m, l.isClosePausedRef]);
    const g = k.useCallback(
      ({ tabbingDirection: w }) => {
        const y = s().map((v) => {
          const C = v.ref.current, P = [C, ...Kk(C)];
          return w === "forwards" ? P : P.reverse();
        });
        return (w === "forwards" ? y.reverse() : y).flat();
      },
      [s]
    );
    return k.useEffect(() => {
      const w = c.current;
      if (w) {
        const h = (y) => {
          var P, b, A;
          const v = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !v) {
            const N = document.activeElement, I = y.shiftKey;
            if (y.target === w && I) {
              (P = u.current) == null || P.focus();
              return;
            }
            const L = g({ tabbingDirection: I ? "backwards" : "forwards" }), H = L.findIndex((z) => z === N);
            ru(L.slice(H + 1)) ? y.preventDefault() : I ? (b = u.current) == null || b.focus() : (A = f.current) == null || A.focus();
          }
        };
        return w.addEventListener("keydown", h), () => w.removeEventListener("keydown", h);
      }
    }, [s, g]), /* @__PURE__ */ T.jsxs(
      kk,
      {
        ref: a,
        role: "region",
        "aria-label": i.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: m ? void 0 : "none" },
        children: [
          m && /* @__PURE__ */ T.jsx(
            xc,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = g({
                  tabbingDirection: "forwards"
                });
                ru(w);
              }
            }
          ),
          /* @__PURE__ */ T.jsx(Uf.Slot, { scope: n, children: /* @__PURE__ */ T.jsx(De.ol, { tabIndex: -1, ...o, ref: p }) }),
          m && /* @__PURE__ */ T.jsx(
            xc,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const w = g({
                  tabbingDirection: "backwards"
                });
                ru(w);
              }
            }
          )
        ]
      }
    );
  }
);
Wy.displayName = Vy;
var Qy = "ToastFocusProxy", xc = k.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e, o = ua(Qy, n);
    return /* @__PURE__ */ T.jsx(
      aa,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...i,
        ref: t,
        style: { position: "fixed" },
        onFocus: (l) => {
          var u;
          const s = l.relatedTarget;
          !((u = o.viewport) != null && u.contains(s)) && r();
        }
      }
    );
  }
);
xc.displayName = Qy;
var dl = "Toast", zk = "toast.swipeStart", Fk = "toast.swipeMove", jk = "toast.swipeCancel", Bk = "toast.swipeEnd", qy = k.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...l } = e, [s, a] = Pk({
      prop: r,
      defaultProp: i ?? !0,
      onChange: o,
      caller: dl
    });
    return /* @__PURE__ */ T.jsx(Gr, { present: n || s, children: /* @__PURE__ */ T.jsx(
      Hk,
      {
        open: s,
        ...l,
        ref: t,
        onClose: () => a(!1),
        onPause: tt(e.onPause),
        onResume: tt(e.onResume),
        onSwipeStart: ge(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ge(e.onSwipeMove, (u) => {
          const { x: f, y: c } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
        }),
        onSwipeCancel: ge(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ge(e.onSwipeEnd, (u) => {
          const { x: f, y: c } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), a(!1);
        })
      }
    ) });
  }
);
qy.displayName = dl;
var [$k, Uk] = Uy(dl, {
  onClose() {
  }
}), Hk = k.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: i,
      open: o,
      onClose: l,
      onEscapeKeyDown: s,
      onPause: a,
      onResume: u,
      onSwipeStart: f,
      onSwipeMove: c,
      onSwipeCancel: p,
      onSwipeEnd: d,
      ...m
    } = e, g = ua(dl, n), [w, h] = k.useState(null), y = $e(t, (z) => h(z)), v = k.useRef(null), C = k.useRef(null), P = i || g.duration, b = k.useRef(0), A = k.useRef(P), N = k.useRef(0), { onToastAdd: I, onToastRemove: E } = g, M = tt(() => {
      var U;
      (w == null ? void 0 : w.contains(document.activeElement)) && ((U = g.viewport) == null || U.focus()), l();
    }), L = k.useCallback(
      (z) => {
        !z || z === 1 / 0 || (window.clearTimeout(N.current), b.current = (/* @__PURE__ */ new Date()).getTime(), N.current = window.setTimeout(M, z));
      },
      [M]
    );
    k.useEffect(() => {
      const z = g.viewport;
      if (z) {
        const U = () => {
          L(A.current), u == null || u();
        }, W = () => {
          const q = (/* @__PURE__ */ new Date()).getTime() - b.current;
          A.current = A.current - q, window.clearTimeout(N.current), a == null || a();
        };
        return z.addEventListener(vc, W), z.addEventListener(wc, U), () => {
          z.removeEventListener(vc, W), z.removeEventListener(wc, U);
        };
      }
    }, [g.viewport, P, a, u, L]), k.useEffect(() => {
      o && !g.isClosePausedRef.current && L(P);
    }, [o, P, g.isClosePausedRef, L]), k.useEffect(() => (I(), () => E()), [I, E]);
    const H = k.useMemo(() => w ? ev(w) : null, [w]);
    return g.viewport ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
      H && /* @__PURE__ */ T.jsx(
        Vk,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: H
        }
      ),
      /* @__PURE__ */ T.jsx($k, { scope: n, onClose: M, children: cl.createPortal(
        /* @__PURE__ */ T.jsx(Uf.ItemSlot, { scope: n, children: /* @__PURE__ */ T.jsx(
          xk,
          {
            asChild: !0,
            onEscapeKeyDown: ge(s, () => {
              g.isFocusedToastEscapeKeyDownRef.current || M(), g.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ T.jsx(
              De.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": o ? "open" : "closed",
                "data-swipe-direction": g.swipeDirection,
                ...m,
                ref: y,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: ge(e.onKeyDown, (z) => {
                  z.key === "Escape" && (s == null || s(z.nativeEvent), z.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0, M()));
                }),
                onPointerDown: ge(e.onPointerDown, (z) => {
                  z.button === 0 && (v.current = { x: z.clientX, y: z.clientY });
                }),
                onPointerMove: ge(e.onPointerMove, (z) => {
                  if (!v.current) return;
                  const U = z.clientX - v.current.x, W = z.clientY - v.current.y, q = !!C.current, _ = ["left", "right"].includes(g.swipeDirection), D = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max, x = _ ? D(0, U) : 0, Y = _ ? 0 : D(0, W), Q = z.pointerType === "touch" ? 10 : 2, S = { x, y: Y }, X = { originalEvent: z, delta: S };
                  q ? (C.current = S, zl(Fk, c, X, {
                    discrete: !1
                  })) : $p(S, g.swipeDirection, Q) ? (C.current = S, zl(zk, f, X, {
                    discrete: !1
                  }), z.target.setPointerCapture(z.pointerId)) : (Math.abs(U) > Q || Math.abs(W) > Q) && (v.current = null);
                }),
                onPointerUp: ge(e.onPointerUp, (z) => {
                  const U = C.current, W = z.target;
                  if (W.hasPointerCapture(z.pointerId) && W.releasePointerCapture(z.pointerId), C.current = null, v.current = null, U) {
                    const q = z.currentTarget, _ = { originalEvent: z, delta: U };
                    $p(U, g.swipeDirection, g.swipeThreshold) ? zl(Bk, d, _, {
                      discrete: !0
                    }) : zl(
                      jk,
                      p,
                      _,
                      {
                        discrete: !0
                      }
                    ), q.addEventListener("click", (D) => D.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        g.viewport
      ) })
    ] }) : null;
  }
), Vk = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, i = ua(dl, t), [o, l] = k.useState(!1), [s, a] = k.useState(!1);
  return qk(() => l(!0)), k.useEffect(() => {
    const u = window.setTimeout(() => a(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ T.jsx($y, { asChild: !0, children: /* @__PURE__ */ T.jsx(aa, { ...r, children: o && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    i.label,
    " ",
    n
  ] }) }) });
}, Wk = "ToastTitle", Yy = k.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ T.jsx(De.div, { ...r, ref: t });
  }
);
Yy.displayName = Wk;
var Qk = "ToastDescription", Ky = k.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ T.jsx(De.div, { ...r, ref: t });
  }
);
Ky.displayName = Qk;
var Xy = "ToastAction", Gy = k.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ T.jsx(Jy, { altText: n, asChild: !0, children: /* @__PURE__ */ T.jsx(Hf, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Xy}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Gy.displayName = Xy;
var Zy = "ToastClose", Hf = k.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, i = Uk(Zy, n);
    return /* @__PURE__ */ T.jsx(Jy, { asChild: !0, children: /* @__PURE__ */ T.jsx(
      De.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ge(e.onClick, i.onClose)
      }
    ) });
  }
);
Hf.displayName = Zy;
var Jy = k.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return /* @__PURE__ */ T.jsx(
    De.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...i,
      ref: t
    }
  );
});
function ev(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Yk(r)) {
      const i = r.ariaHidden || r.hidden || r.style.display === "none", o = r.dataset.radixToastAnnounceExclude === "";
      if (!i)
        if (o) {
          const l = r.dataset.radixToastAnnounceAlt;
          l && t.push(l);
        } else
          t.push(...ev(r));
    }
  }), t;
}
function zl(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget, o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? zy(i, o) : i.dispatchEvent(o);
}
var $p = (e, t, n = 0) => {
  const r = Math.abs(e.x), i = Math.abs(e.y), o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function qk(e = () => {
}) {
  const t = tt(e);
  _n(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Yk(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Kk(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ru(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var Xk = Hy, tv = Wy, nv = qy, rv = Yy, iv = Ky, ov = Gy, lv = Hf;
function sv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = sv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function av() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = sv(e)) && (r && (r += " "), r += t);
  return r;
}
const Up = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Hp = av, uv = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Hp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: o } = t, l = Object.keys(i).map((u) => {
    const f = n == null ? void 0 : n[u], c = o == null ? void 0 : o[u];
    if (f === null) return null;
    const p = Up(f) || Up(c);
    return i[u][p];
  }), s = n && Object.entries(n).reduce((u, f) => {
    let [c, p] = f;
    return p === void 0 || (u[c] = p), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
    let { class: c, className: p, ...d } = f;
    return Object.entries(d).every((m) => {
      let [g, w] = m;
      return Array.isArray(w) ? w.includes({
        ...o,
        ...s
      }[g]) : {
        ...o,
        ...s
      }[g] === w;
    }) ? [
      ...u,
      c,
      p
    ] : u;
  }, []);
  return Hp(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gk = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), cv = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jk = k.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: l,
    ...s
  }, a) => k.createElement(
    "svg",
    {
      ref: a,
      ...Zk,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: cv("lucide", i),
      ...s
    },
    [
      ...l.map(([u, f]) => k.createElement(u, f)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = (e, t) => {
  const n = k.forwardRef(
    ({ className: r, ...i }, o) => k.createElement(Jk, {
      ref: o,
      iconNode: t,
      className: cv(`lucide-${Gk(e)}`, r),
      ...i
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eb = Ki("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = Ki("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = Ki("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = Ki("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = Ki("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tb = Ki("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Vf = "-", nb = (e) => {
  const t = ib(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (l) => {
      const s = l.split(Vf);
      return s[0] === "" && s.length !== 1 && s.shift(), fv(s, t) || rb(l);
    },
    getConflictingClassGroupIds: (l, s) => {
      const a = n[l] || [];
      return s && r[l] ? [...a, ...r[l]] : a;
    }
  };
}, fv = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), i = r ? fv(e.slice(1), r) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(Vf);
  return (l = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : l.classGroupId;
}, Qp = /^\[(.+)\]$/, rb = (e) => {
  if (Qp.test(e)) {
    const t = Qp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ib = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return lb(Object.entries(e.classGroups), n).forEach(([o, l]) => {
    Sc(l, r, o, t);
  }), r;
}, Sc = (e, t, n, r) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : qp(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (ob(i)) {
        Sc(i(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([o, l]) => {
      Sc(l, qp(t, o), n, r);
    });
  });
}, qp = (e, t) => {
  let n = e;
  return t.split(Vf).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ob = (e) => e.isThemeGetter, lb = (e, t) => t ? e.map(([n, r]) => {
  const i = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([l, s]) => [t + l, s])) : o);
  return [n, i];
}) : e, sb = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (o, l) => {
    n.set(o, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let l = n.get(o);
      if (l !== void 0)
        return l;
      if ((l = r.get(o)) !== void 0)
        return i(o, l), l;
    },
    set(o, l) {
      n.has(o) ? n.set(o, l) : i(o, l);
    }
  };
}, dv = "!", ab = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, i = t[0], o = t.length, l = (s) => {
    const a = [];
    let u = 0, f = 0, c;
    for (let w = 0; w < s.length; w++) {
      let h = s[w];
      if (u === 0) {
        if (h === i && (r || s.slice(w, w + o) === t)) {
          a.push(s.slice(f, w)), f = w + o;
          continue;
        }
        if (h === "/") {
          c = w;
          continue;
        }
      }
      h === "[" ? u++ : h === "]" && u--;
    }
    const p = a.length === 0 ? s : s.substring(f), d = p.startsWith(dv), m = d ? p.substring(1) : p, g = c && c > f ? c - f : void 0;
    return {
      modifiers: a,
      hasImportantModifier: d,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: l
  }) : l;
}, ub = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, cb = (e) => ({
  cache: sb(e.cacheSize),
  parseClassName: ab(e),
  ...nb(e)
}), fb = /\s+/, db = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: i
  } = t, o = [], l = e.trim().split(fb);
  let s = "";
  for (let a = l.length - 1; a >= 0; a -= 1) {
    const u = l[a], {
      modifiers: f,
      hasImportantModifier: c,
      baseClassName: p,
      maybePostfixModifierPosition: d
    } = n(u);
    let m = !!d, g = r(m ? p.substring(0, d) : p);
    if (!g) {
      if (!m) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = r(p), !g) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      m = !1;
    }
    const w = ub(f).join(":"), h = c ? w + dv : w, y = h + g;
    if (o.includes(y))
      continue;
    o.push(y);
    const v = i(g, m);
    for (let C = 0; C < v.length; ++C) {
      const P = v[C];
      o.push(h + P);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function pb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = pv(t)) && (r && (r += " "), r += n);
  return r;
}
const pv = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = pv(e[r])) && (n && (n += " "), n += t);
  return n;
};
function hb(e, ...t) {
  let n, r, i, o = l;
  function l(a) {
    const u = t.reduce((f, c) => c(f), e());
    return n = cb(u), r = n.cache.get, i = n.cache.set, o = s, s(a);
  }
  function s(a) {
    const u = r(a);
    if (u)
      return u;
    const f = db(a, n);
    return i(a, f), f;
  }
  return function() {
    return o(pb.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, hv = /^\[(?:([a-z-]+):)?(.+)\]$/i, mb = /^\d+\/\d+$/, gb = /* @__PURE__ */ new Set(["px", "full", "screen"]), yb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, xb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, kb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xn = (e) => Si(e) || gb.has(e) || mb.test(e), Vn = (e) => Xi(e, "length", Rb), Si = (e) => !!e && !Number.isNaN(Number(e)), iu = (e) => Xi(e, "number", Si), fo = (e) => !!e && Number.isInteger(Number(e)), bb = (e) => e.endsWith("%") && Si(e.slice(0, -1)), ee = (e) => hv.test(e), Wn = (e) => yb.test(e), Sb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Cb = (e) => Xi(e, Sb, mv), Eb = (e) => Xi(e, "position", mv), Tb = /* @__PURE__ */ new Set(["image", "url"]), Pb = (e) => Xi(e, Tb, Ib), Ab = (e) => Xi(e, "", Nb), po = () => !0, Xi = (e, t, n) => {
  const r = hv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Rb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  vb.test(e) && !wb.test(e)
), mv = () => !1, Nb = (e) => xb.test(e), Ib = (e) => kb.test(e), _b = () => {
  const e = ve("colors"), t = ve("spacing"), n = ve("blur"), r = ve("brightness"), i = ve("borderColor"), o = ve("borderRadius"), l = ve("borderSpacing"), s = ve("borderWidth"), a = ve("contrast"), u = ve("grayscale"), f = ve("hueRotate"), c = ve("invert"), p = ve("gap"), d = ve("gradientColorStops"), m = ve("gradientColorStopPositions"), g = ve("inset"), w = ve("margin"), h = ve("opacity"), y = ve("padding"), v = ve("saturate"), C = ve("scale"), P = ve("sepia"), b = ve("skew"), A = ve("space"), N = ve("translate"), I = () => ["auto", "contain", "none"], E = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", ee, t], L = () => [ee, t], H = () => ["", xn, Vn], z = () => ["auto", Si, ee], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], D = () => ["", "0", ee], x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [Si, ee];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [po],
      spacing: [xn, Vn],
      blur: ["none", "", Wn, ee],
      brightness: Y(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Wn, ee],
      borderSpacing: L(),
      borderWidth: H(),
      contrast: Y(),
      grayscale: D(),
      hueRotate: Y(),
      invert: D(),
      gap: L(),
      gradientColorStops: [e],
      gradientColorStopPositions: [bb, Vn],
      inset: M(),
      margin: M(),
      opacity: Y(),
      padding: L(),
      saturate: Y(),
      scale: Y(),
      sepia: D(),
      skew: Y(),
      space: L(),
      translate: L()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ee]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Wn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...U(), ee]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", fo, ee]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", fo, ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [po]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", fo, ee]
        }, ee]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [po]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [fo, ee]
        }, ee]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ee]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ee]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ..._()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ..._(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [..._(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [A]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ee, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ee, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ee, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Wn]
        }, Wn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ee, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ee, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Wn, Vn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", iu]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [po]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Si, iu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", xn, ee]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ee]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [h]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [h]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", xn, Vn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", xn, ee]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: L()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ee]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [h]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...U(), Eb]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Cb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Pb]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [d]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [d]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [d]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [h]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [h]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: W()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [xn, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xn, Vn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: H()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [h]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [xn, Vn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Wn, Ab]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [po]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [h]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...q(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": q()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Wn, ee]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [v]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [P]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [a]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [h]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [P]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ee]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ee]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [fo, ee]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [b]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [b]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ee]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": L()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ee]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [xn, Vn, iu]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Lb = /* @__PURE__ */ hb(_b);
function Re(...e) {
  return Lb(av(e));
}
const Ob = Xk, gv = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ T.jsx(
  tv,
  {
    ref: n,
    className: Re(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
gv.displayName = tv.displayName;
const Db = uv(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), yv = k.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ T.jsx(nv, { ref: r, className: Re(Db({ variant: t }), e), ...n }));
yv.displayName = nv.displayName;
const Mb = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ T.jsx(
  ov,
  {
    ref: n,
    className: Re(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
Mb.displayName = ov.displayName;
const vv = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ T.jsx(
  lv,
  {
    ref: n,
    className: Re(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ T.jsx(bc, { className: "h-4 w-4" })
  }
));
vv.displayName = lv.displayName;
const wv = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ T.jsx(rv, { ref: n, className: Re("text-sm font-semibold", e), ...t }));
wv.displayName = rv.displayName;
const xv = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ T.jsx(iv, { ref: n, className: Re("text-sm opacity-90", e), ...t }));
xv.displayName = iv.displayName;
function zb() {
  const { toasts: e } = rk();
  return /* @__PURE__ */ T.jsxs(Ob, { children: [
    e.map(function({ id: t, title: n, description: r, action: i, ...o }) {
      return /* @__PURE__ */ T.jsxs(yv, { ...o, children: [
        /* @__PURE__ */ T.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ T.jsx(wv, { children: n }),
          r && /* @__PURE__ */ T.jsx(xv, { children: r })
        ] }),
        i,
        /* @__PURE__ */ T.jsx(vv, {})
      ] }, t);
    }),
    /* @__PURE__ */ T.jsx(gv, {})
  ] });
}
var Yp = ["light", "dark"], Fb = "(prefers-color-scheme: dark)", jb = k.createContext(void 0), Bb = { setTheme: (e) => {
}, themes: [] }, $b = () => {
  var e;
  return (e = k.useContext(jb)) != null ? e : Bb;
};
k.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: o, value: l, attrs: s, nonce: a }) => {
  let u = o === "system", f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map((m) => `'${m}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, c = i ? Yp.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (m, g = !1, w = !0) => {
    let h = l ? l[m] : m, y = g ? m + "|| ''" : `'${h}'`, v = "";
    return i && w && !g && Yp.includes(m) && (v += `d.style.colorScheme = '${m}';`), n === "class" ? g || h ? v += `c.add(${y})` : v += "null" : h && (v += `d[s](n,${y})`), v;
  }, d = e ? `!function(){${f}${p(e)}}()` : r ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Fb}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${l ? `var x=${JSON.stringify(l)};` : ""}${p(l ? "x[e]" : "e", !0)}}${u ? "" : "else{" + p(o, !1, !1) + "}"}${c}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${l ? `var x=${JSON.stringify(l)};` : ""}${p(l ? "x[e]" : "e", !0)}}else{${p(o, !1, !1)};}${c}}catch(t){}}();`;
  return k.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: d } });
});
var Ub = (e) => {
  switch (e) {
    case "success":
      return Wb;
    case "info":
      return qb;
    case "warning":
      return Qb;
    case "error":
      return Yb;
    default:
      return null;
  }
}, Hb = Array(12).fill(0), Vb = ({ visible: e, className: t }) => $.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, $.createElement("div", { className: "sonner-spinner" }, Hb.map((n, r) => $.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), Wb = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, $.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Qb = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, $.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), qb = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, $.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Yb = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, $.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Kb = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, $.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), $.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), Xb = () => {
  let [e, t] = $.useState(document.hidden);
  return $.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, Cc = 1, Gb = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: n, ...r } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Cc++, o = this.toasts.find((s) => s.id === i), l = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), o ? this.toasts = this.toasts.map((s) => s.id === i ? (this.publish({ ...s, ...e, id: i, title: n }), { ...s, ...e, id: i, dismissible: l, title: n }) : s) : this.addToast({ title: n, ...r, dismissible: l, id: i }), i;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let r = e instanceof Promise ? e : e(), i = n !== void 0, o, l = r.then(async (a) => {
        if (o = ["resolve", a], $.isValidElement(a)) i = !1, this.create({ id: n, type: "default", message: a });
        else if (Jb(a) && !a.ok) {
          i = !1;
          let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error, f = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
          this.create({ id: n, type: "error", message: u, description: f });
        } else if (t.success !== void 0) {
          i = !1;
          let u = typeof t.success == "function" ? await t.success(a) : t.success, f = typeof t.description == "function" ? await t.description(a) : t.description;
          this.create({ id: n, type: "success", message: u, description: f });
        }
      }).catch(async (a) => {
        if (o = ["reject", a], t.error !== void 0) {
          i = !1;
          let u = typeof t.error == "function" ? await t.error(a) : t.error, f = typeof t.description == "function" ? await t.description(a) : t.description;
          this.create({ id: n, type: "error", message: u, description: f });
        }
      }).finally(() => {
        var a;
        i && (this.dismiss(n), n = void 0), (a = t.finally) == null || a.call(t);
      }), s = () => new Promise((a, u) => l.then(() => o[0] === "reject" ? u(o[1]) : a(o[1])).catch(u));
      return typeof n != "string" && typeof n != "number" ? { unwrap: s } : Object.assign(n, { unwrap: s });
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || Cc++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, at = new Gb(), Zb = (e, t) => {
  let n = (t == null ? void 0 : t.id) || Cc++;
  return at.addToast({ title: e, ...t, id: n }), n;
}, Jb = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", eS = Zb, tS = () => at.toasts, nS = () => at.getActiveToasts();
Object.assign(eS, { success: at.success, info: at.info, warning: at.warning, error: at.error, custom: at.custom, message: at.message, promise: at.promise, dismiss: at.dismiss, loading: at.loading }, { getHistory: tS, getToasts: nS });
function rS(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
rS(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Fl(e) {
  return e.label !== void 0;
}
var iS = 3, oS = "32px", lS = "16px", Kp = 4e3, sS = 356, aS = 14, uS = 20, cS = 200;
function Ht(...e) {
  return e.filter(Boolean).join(" ");
}
function fS(e) {
  let [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
var dS = (e) => {
  var t, n, r, i, o, l, s, a, u, f, c;
  let { invert: p, toast: d, unstyled: m, interacting: g, setHeights: w, visibleToasts: h, heights: y, index: v, toasts: C, expanded: P, removeToast: b, defaultRichColors: A, closeButton: N, style: I, cancelButtonStyle: E, actionButtonStyle: M, className: L = "", descriptionClassName: H = "", duration: z, position: U, gap: W, loadingIcon: q, expandByDefault: _, classNames: D, icons: x, closeButtonAriaLabel: Y = "Close toast", pauseWhenPageIsHidden: Q } = e, [S, X] = $.useState(null), [de, le] = $.useState(null), [oe, Xe] = $.useState(!1), [Ge, lt] = $.useState(!1), [mt, zn] = $.useState(!1), [nn, Jr] = $.useState(!1), [ei, Sr] = $.useState(!1), [ti, Cr] = $.useState(0), [vn, no] = $.useState(0), Er = $.useRef(d.duration || z || Kp), yl = $.useRef(null), wn = $.useRef(null), Ea = v === 0, Ta = v + 1 <= h, R = d.type, B = d.dismissible !== !1, G = d.className || "", ne = d.descriptionClassName || "", ue = $.useMemo(() => y.findIndex((Z) => Z.toastId === d.id) || 0, [y, d.id]), gt = $.useMemo(() => {
    var Z;
    return (Z = d.closeButton) != null ? Z : N;
  }, [d.closeButton, N]), rn = $.useMemo(() => d.duration || z || Kp, [d.duration, z]), yt = $.useRef(0), At = $.useRef(0), Fn = $.useRef(0), Ne = $.useRef(null), [jn, Ft] = U.split("-"), Ed = $.useMemo(() => y.reduce((Z, pe, ke) => ke >= ue ? Z : Z + pe.height, 0), [y, ue]), Td = Xb(), Cw = d.invert || p, Pa = R === "loading";
  At.current = $.useMemo(() => ue * W + Ed, [ue, Ed]), $.useEffect(() => {
    Er.current = rn;
  }, [rn]), $.useEffect(() => {
    Xe(!0);
  }, []), $.useEffect(() => {
    let Z = wn.current;
    if (Z) {
      let pe = Z.getBoundingClientRect().height;
      return no(pe), w((ke) => [{ toastId: d.id, height: pe, position: d.position }, ...ke]), () => w((ke) => ke.filter((jt) => jt.toastId !== d.id));
    }
  }, [w, d.id]), $.useLayoutEffect(() => {
    if (!oe) return;
    let Z = wn.current, pe = Z.style.height;
    Z.style.height = "auto";
    let ke = Z.getBoundingClientRect().height;
    Z.style.height = pe, no(ke), w((jt) => jt.find((Bt) => Bt.toastId === d.id) ? jt.map((Bt) => Bt.toastId === d.id ? { ...Bt, height: ke } : Bt) : [{ toastId: d.id, height: ke, position: d.position }, ...jt]);
  }, [oe, d.title, d.description, w, d.id]);
  let Bn = $.useCallback(() => {
    lt(!0), Cr(At.current), w((Z) => Z.filter((pe) => pe.toastId !== d.id)), setTimeout(() => {
      b(d);
    }, cS);
  }, [d, b, w, At]);
  $.useEffect(() => {
    if (d.promise && R === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let Z;
    return P || g || Q && Td ? (() => {
      if (Fn.current < yt.current) {
        let pe = (/* @__PURE__ */ new Date()).getTime() - yt.current;
        Er.current = Er.current - pe;
      }
      Fn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Er.current !== 1 / 0 && (yt.current = (/* @__PURE__ */ new Date()).getTime(), Z = setTimeout(() => {
      var pe;
      (pe = d.onAutoClose) == null || pe.call(d, d), Bn();
    }, Er.current)), () => clearTimeout(Z);
  }, [P, g, d, R, Q, Td, Bn]), $.useEffect(() => {
    d.delete && Bn();
  }, [Bn, d.delete]);
  function Ew() {
    var Z, pe, ke;
    return x != null && x.loading ? $.createElement("div", { className: Ht(D == null ? void 0 : D.loader, (Z = d == null ? void 0 : d.classNames) == null ? void 0 : Z.loader, "sonner-loader"), "data-visible": R === "loading" }, x.loading) : q ? $.createElement("div", { className: Ht(D == null ? void 0 : D.loader, (pe = d == null ? void 0 : d.classNames) == null ? void 0 : pe.loader, "sonner-loader"), "data-visible": R === "loading" }, q) : $.createElement(Vb, { className: Ht(D == null ? void 0 : D.loader, (ke = d == null ? void 0 : d.classNames) == null ? void 0 : ke.loader), visible: R === "loading" });
  }
  return $.createElement("li", { tabIndex: 0, ref: wn, className: Ht(L, G, D == null ? void 0 : D.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, D == null ? void 0 : D.default, D == null ? void 0 : D[R], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[R]), "data-sonner-toast": "", "data-rich-colors": (r = d.richColors) != null ? r : A, "data-styled": !(d.jsx || d.unstyled || m), "data-mounted": oe, "data-promise": !!d.promise, "data-swiped": ei, "data-removed": Ge, "data-visible": Ta, "data-y-position": jn, "data-x-position": Ft, "data-index": v, "data-front": Ea, "data-swiping": mt, "data-dismissible": B, "data-type": R, "data-invert": Cw, "data-swipe-out": nn, "data-swipe-direction": de, "data-expanded": !!(P || _ && oe), style: { "--index": v, "--toasts-before": v, "--z-index": C.length - v, "--offset": `${Ge ? ti : At.current}px`, "--initial-height": _ ? "auto" : `${vn}px`, ...I, ...d.style }, onDragEnd: () => {
    zn(!1), X(null), Ne.current = null;
  }, onPointerDown: (Z) => {
    Pa || !B || (yl.current = /* @__PURE__ */ new Date(), Cr(At.current), Z.target.setPointerCapture(Z.pointerId), Z.target.tagName !== "BUTTON" && (zn(!0), Ne.current = { x: Z.clientX, y: Z.clientY }));
  }, onPointerUp: () => {
    var Z, pe, ke, jt;
    if (nn || !B) return;
    Ne.current = null;
    let Bt = Number(((Z = wn.current) == null ? void 0 : Z.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), $n = Number(((pe = wn.current) == null ? void 0 : pe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Tr = (/* @__PURE__ */ new Date()).getTime() - ((ke = yl.current) == null ? void 0 : ke.getTime()), $t = S === "x" ? Bt : $n, Un = Math.abs($t) / Tr;
    if (Math.abs($t) >= uS || Un > 0.11) {
      Cr(At.current), (jt = d.onDismiss) == null || jt.call(d, d), le(S === "x" ? Bt > 0 ? "right" : "left" : $n > 0 ? "down" : "up"), Bn(), Jr(!0), Sr(!1);
      return;
    }
    zn(!1), X(null);
  }, onPointerMove: (Z) => {
    var pe, ke, jt, Bt;
    if (!Ne.current || !B || ((pe = window.getSelection()) == null ? void 0 : pe.toString().length) > 0) return;
    let $n = Z.clientY - Ne.current.y, Tr = Z.clientX - Ne.current.x, $t = (ke = e.swipeDirections) != null ? ke : fS(U);
    !S && (Math.abs(Tr) > 1 || Math.abs($n) > 1) && X(Math.abs(Tr) > Math.abs($n) ? "x" : "y");
    let Un = { x: 0, y: 0 };
    S === "y" ? ($t.includes("top") || $t.includes("bottom")) && ($t.includes("top") && $n < 0 || $t.includes("bottom") && $n > 0) && (Un.y = $n) : S === "x" && ($t.includes("left") || $t.includes("right")) && ($t.includes("left") && Tr < 0 || $t.includes("right") && Tr > 0) && (Un.x = Tr), (Math.abs(Un.x) > 0 || Math.abs(Un.y) > 0) && Sr(!0), (jt = wn.current) == null || jt.style.setProperty("--swipe-amount-x", `${Un.x}px`), (Bt = wn.current) == null || Bt.style.setProperty("--swipe-amount-y", `${Un.y}px`);
  } }, gt && !d.jsx ? $.createElement("button", { "aria-label": Y, "data-disabled": Pa, "data-close-button": !0, onClick: Pa || !B ? () => {
  } : () => {
    var Z;
    Bn(), (Z = d.onDismiss) == null || Z.call(d, d);
  }, className: Ht(D == null ? void 0 : D.closeButton, (i = d == null ? void 0 : d.classNames) == null ? void 0 : i.closeButton) }, (o = x == null ? void 0 : x.close) != null ? o : Kb) : null, d.jsx || k.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : $.createElement($.Fragment, null, R || d.icon || d.promise ? $.createElement("div", { "data-icon": "", className: Ht(D == null ? void 0 : D.icon, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.icon) }, d.promise || d.type === "loading" && !d.icon ? d.icon || Ew() : null, d.type !== "loading" ? d.icon || (x == null ? void 0 : x[R]) || Ub(R) : null) : null, $.createElement("div", { "data-content": "", className: Ht(D == null ? void 0 : D.content, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.content) }, $.createElement("div", { "data-title": "", className: Ht(D == null ? void 0 : D.title, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.title) }, typeof d.title == "function" ? d.title() : d.title), d.description ? $.createElement("div", { "data-description": "", className: Ht(H, ne, D == null ? void 0 : D.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description) }, typeof d.description == "function" ? d.description() : d.description) : null), k.isValidElement(d.cancel) ? d.cancel : d.cancel && Fl(d.cancel) ? $.createElement("button", { "data-button": !0, "data-cancel": !0, style: d.cancelButtonStyle || E, onClick: (Z) => {
    var pe, ke;
    Fl(d.cancel) && B && ((ke = (pe = d.cancel).onClick) == null || ke.call(pe, Z), Bn());
  }, className: Ht(D == null ? void 0 : D.cancelButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.cancelButton) }, d.cancel.label) : null, k.isValidElement(d.action) ? d.action : d.action && Fl(d.action) ? $.createElement("button", { "data-button": !0, "data-action": !0, style: d.actionButtonStyle || M, onClick: (Z) => {
    var pe, ke;
    Fl(d.action) && ((ke = (pe = d.action).onClick) == null || ke.call(pe, Z), !Z.defaultPrevented && Bn());
  }, className: Ht(D == null ? void 0 : D.actionButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.actionButton) }, d.action.label) : null));
};
function Xp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function pS(e, t) {
  let n = {};
  return [e, t].forEach((r, i) => {
    let o = i === 1, l = o ? "--mobile-offset" : "--offset", s = o ? lS : oS;
    function a(u) {
      ["top", "right", "bottom", "left"].forEach((f) => {
        n[`${l}-${f}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach((u) => {
      r[u] === void 0 ? n[`${l}-${u}`] = s : n[`${l}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u];
    }) : a(s);
  }), n;
}
var hS = k.forwardRef(function(e, t) {
  let { invert: n, position: r = "bottom-right", hotkey: i = ["altKey", "KeyT"], expand: o, closeButton: l, className: s, offset: a, mobileOffset: u, theme: f = "light", richColors: c, duration: p, style: d, visibleToasts: m = iS, toastOptions: g, dir: w = Xp(), gap: h = aS, loadingIcon: y, icons: v, containerAriaLabel: C = "Notifications", pauseWhenPageIsHidden: P } = e, [b, A] = $.useState([]), N = $.useMemo(() => Array.from(new Set([r].concat(b.filter((Q) => Q.position).map((Q) => Q.position)))), [b, r]), [I, E] = $.useState([]), [M, L] = $.useState(!1), [H, z] = $.useState(!1), [U, W] = $.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), q = $.useRef(null), _ = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), D = $.useRef(null), x = $.useRef(!1), Y = $.useCallback((Q) => {
    A((S) => {
      var X;
      return (X = S.find((de) => de.id === Q.id)) != null && X.delete || at.dismiss(Q.id), S.filter(({ id: de }) => de !== Q.id);
    });
  }, []);
  return $.useEffect(() => at.subscribe((Q) => {
    if (Q.dismiss) {
      A((S) => S.map((X) => X.id === Q.id ? { ...X, delete: !0 } : X));
      return;
    }
    setTimeout(() => {
      _y.flushSync(() => {
        A((S) => {
          let X = S.findIndex((de) => de.id === Q.id);
          return X !== -1 ? [...S.slice(0, X), { ...S[X], ...Q }, ...S.slice(X + 1)] : [Q, ...S];
        });
      });
    });
  }), []), $.useEffect(() => {
    if (f !== "system") {
      W(f);
      return;
    }
    if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? W("dark") : W("light")), typeof window > "u") return;
    let Q = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      Q.addEventListener("change", ({ matches: S }) => {
        W(S ? "dark" : "light");
      });
    } catch {
      Q.addListener(({ matches: X }) => {
        try {
          W(X ? "dark" : "light");
        } catch (de) {
          console.error(de);
        }
      });
    }
  }, [f]), $.useEffect(() => {
    b.length <= 1 && L(!1);
  }, [b]), $.useEffect(() => {
    let Q = (S) => {
      var X, de;
      i.every((le) => S[le] || S.code === le) && (L(!0), (X = q.current) == null || X.focus()), S.code === "Escape" && (document.activeElement === q.current || (de = q.current) != null && de.contains(document.activeElement)) && L(!1);
    };
    return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
  }, [i]), $.useEffect(() => {
    if (q.current) return () => {
      D.current && (D.current.focus({ preventScroll: !0 }), D.current = null, x.current = !1);
    };
  }, [q.current]), $.createElement("section", { ref: t, "aria-label": `${C} ${_}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, N.map((Q, S) => {
    var X;
    let [de, le] = Q.split("-");
    return b.length ? $.createElement("ol", { key: Q, dir: w === "auto" ? Xp() : w, tabIndex: -1, ref: q, className: s, "data-sonner-toaster": !0, "data-theme": U, "data-y-position": de, "data-lifted": M && b.length > 1 && !o, "data-x-position": le, style: { "--front-toast-height": `${((X = I[0]) == null ? void 0 : X.height) || 0}px`, "--width": `${sS}px`, "--gap": `${h}px`, ...d, ...pS(a, u) }, onBlur: (oe) => {
      x.current && !oe.currentTarget.contains(oe.relatedTarget) && (x.current = !1, D.current && (D.current.focus({ preventScroll: !0 }), D.current = null));
    }, onFocus: (oe) => {
      oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || x.current || (x.current = !0, D.current = oe.relatedTarget);
    }, onMouseEnter: () => L(!0), onMouseMove: () => L(!0), onMouseLeave: () => {
      H || L(!1);
    }, onDragEnd: () => L(!1), onPointerDown: (oe) => {
      oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || z(!0);
    }, onPointerUp: () => z(!1) }, b.filter((oe) => !oe.position && S === 0 || oe.position === Q).map((oe, Xe) => {
      var Ge, lt;
      return $.createElement(dS, { key: oe.id, icons: v, index: Xe, toast: oe, defaultRichColors: c, duration: (Ge = g == null ? void 0 : g.duration) != null ? Ge : p, className: g == null ? void 0 : g.className, descriptionClassName: g == null ? void 0 : g.descriptionClassName, invert: n, visibleToasts: m, closeButton: (lt = g == null ? void 0 : g.closeButton) != null ? lt : l, interacting: H, position: Q, style: g == null ? void 0 : g.style, unstyled: g == null ? void 0 : g.unstyled, classNames: g == null ? void 0 : g.classNames, cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle, actionButtonStyle: g == null ? void 0 : g.actionButtonStyle, removeToast: Y, toasts: b.filter((mt) => mt.position == oe.position), heights: I.filter((mt) => mt.position == oe.position), setHeights: E, expandByDefault: o, gap: h, loadingIcon: y, expanded: M, pauseWhenPageIsHidden: P, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const mS = ({ ...e }) => {
  const { theme: t = "system" } = $b();
  return /* @__PURE__ */ T.jsx(
    hS,
    {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...e
    }
  );
}, gS = ["top", "right", "bottom", "left"], mr = Math.min, xt = Math.max, Os = Math.round, jl = Math.floor, gr = (e) => ({
  x: e,
  y: e
}), yS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, vS = {
  start: "end",
  end: "start"
};
function Ec(e, t, n) {
  return xt(e, mr(t, n));
}
function Ln(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function On(e) {
  return e.split("-")[0];
}
function Gi(e) {
  return e.split("-")[1];
}
function Wf(e) {
  return e === "x" ? "y" : "x";
}
function Qf(e) {
  return e === "y" ? "height" : "width";
}
function yr(e) {
  return ["top", "bottom"].includes(On(e)) ? "y" : "x";
}
function qf(e) {
  return Wf(yr(e));
}
function wS(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gi(e), i = qf(e), o = Qf(i);
  let l = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = Ds(l)), [l, Ds(l)];
}
function xS(e) {
  const t = Ds(e);
  return [Tc(e), t, Tc(t)];
}
function Tc(e) {
  return e.replace(/start|end/g, (t) => vS[t]);
}
function kS(e, t, n) {
  const r = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? o : l;
    default:
      return [];
  }
}
function bS(e, t, n, r) {
  const i = Gi(e);
  let o = kS(On(e), n === "start", r);
  return i && (o = o.map((l) => l + "-" + i), t && (o = o.concat(o.map(Tc)))), o;
}
function Ds(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yS[t]);
}
function SS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function kv(e) {
  return typeof e != "number" ? SS(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ms(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function Gp(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = yr(t), l = qf(t), s = Qf(l), a = On(t), u = o === "y", f = r.x + r.width / 2 - i.width / 2, c = r.y + r.height / 2 - i.height / 2, p = r[s] / 2 - i[s] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: f,
        y: r.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: c
      };
      break;
    case "left":
      d = {
        x: r.x - i.width,
        y: c
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gi(t)) {
    case "start":
      d[l] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      d[l] += p * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const CS = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: l
  } = n, s = o.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: f,
    y: c
  } = Gp(u, r, a), p = r, d = {}, m = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: w,
      fn: h
    } = s[g], {
      x: y,
      y: v,
      data: C,
      reset: P
    } = await h({
      x: f,
      y: c,
      initialPlacement: r,
      placement: p,
      strategy: i,
      middlewareData: d,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, c = v ?? c, d = {
      ...d,
      [w]: {
        ...d[w],
        ...C
      }
    }, P && m <= 50 && (m++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (u = P.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : P.rects), {
      x: f,
      y: c
    } = Gp(u, p, a)), g = -1);
  }
  return {
    x: f,
    y: c,
    placement: p,
    strategy: i,
    middlewareData: d
  };
};
async function Go(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: c = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = Ln(t, e), m = kv(d), w = s[p ? c === "floating" ? "reference" : "floating" : c], h = Ms(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: a
  })), y = c === "floating" ? {
    x: r,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), C = await (o.isElement == null ? void 0 : o.isElement(v)) ? await (o.getScale == null ? void 0 : o.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Ms(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: v,
    strategy: a
  }) : y);
  return {
    top: (h.top - P.top + m.top) / C.y,
    bottom: (P.bottom - h.bottom + m.bottom) / C.y,
    left: (h.left - P.left + m.left) / C.x,
    right: (P.right - h.right + m.right) / C.x
  };
}
const ES = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: o,
      platform: l,
      elements: s,
      middlewareData: a
    } = t, {
      element: u,
      padding: f = 0
    } = Ln(e, t) || {};
    if (u == null)
      return {};
    const c = kv(f), p = {
      x: n,
      y: r
    }, d = qf(i), m = Qf(d), g = await l.getDimensions(u), w = d === "y", h = w ? "top" : "left", y = w ? "bottom" : "right", v = w ? "clientHeight" : "clientWidth", C = o.reference[m] + o.reference[d] - p[d] - o.floating[m], P = p[d] - o.reference[d], b = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let A = b ? b[v] : 0;
    (!A || !await (l.isElement == null ? void 0 : l.isElement(b))) && (A = s.floating[v] || o.floating[m]);
    const N = C / 2 - P / 2, I = A / 2 - g[m] / 2 - 1, E = mr(c[h], I), M = mr(c[y], I), L = E, H = A - g[m] - M, z = A / 2 - g[m] / 2 + N, U = Ec(L, z, H), W = !a.arrow && Gi(i) != null && z !== U && o.reference[m] / 2 - (z < L ? E : M) - g[m] / 2 < 0, q = W ? z < L ? z - L : z - H : 0;
    return {
      [d]: p[d] + q,
      data: {
        [d]: U,
        centerOffset: z - U - q,
        ...W && {
          alignmentOffset: q
        }
      },
      reset: W
    };
  }
}), TS = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        middlewareData: o,
        rects: l,
        initialPlacement: s,
        platform: a,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: c = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...w
      } = Ln(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const h = On(i), y = yr(s), v = On(s) === s, C = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), P = p || (v || !g ? [Ds(s)] : xS(s)), b = m !== "none";
      !p && b && P.push(...bS(s, g, m, C));
      const A = [s, ...P], N = await Go(t, w), I = [];
      let E = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (f && I.push(N[h]), c) {
        const z = wS(i, l, C);
        I.push(N[z[0]], N[z[1]]);
      }
      if (E = [...E, {
        placement: i,
        overflows: I
      }], !I.every((z) => z <= 0)) {
        var M, L;
        const z = (((M = o.flip) == null ? void 0 : M.index) || 0) + 1, U = A[z];
        if (U)
          return {
            data: {
              index: z,
              overflows: E
            },
            reset: {
              placement: U
            }
          };
        let W = (L = E.filter((q) => q.overflows[0] <= 0).sort((q, _) => q.overflows[1] - _.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!W)
          switch (d) {
            case "bestFit": {
              var H;
              const q = (H = E.filter((_) => {
                if (b) {
                  const D = yr(_.placement);
                  return D === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((_) => [_.placement, _.overflows.filter((D) => D > 0).reduce((D, x) => D + x, 0)]).sort((_, D) => _[1] - D[1])[0]) == null ? void 0 : H[0];
              q && (W = q);
              break;
            }
            case "initialPlacement":
              W = s;
              break;
          }
        if (i !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function Zp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Jp(e) {
  return gS.some((t) => e[t] >= 0);
}
const PS = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = Ln(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await Go(t, {
            ...i,
            elementContext: "reference"
          }), l = Zp(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Jp(l)
            }
          };
        }
        case "escaped": {
          const o = await Go(t, {
            ...i,
            altBoundary: !0
          }), l = Zp(o, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Jp(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function AS(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), l = On(n), s = Gi(n), a = yr(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, f = o && a ? -1 : 1, c = Ln(t, e);
  let {
    mainAxis: p,
    crossAxis: d,
    alignmentAxis: m
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return s && typeof m == "number" && (d = s === "end" ? m * -1 : m), a ? {
    x: d * f,
    y: p * u
  } : {
    x: p * u,
    y: d * f
  };
}
const RS = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: i,
        y: o,
        placement: l,
        middlewareData: s
      } = t, a = await AS(t, e);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: i + a.x,
        y: o + a.y,
        data: {
          ...a,
          placement: l
        }
      };
    }
  };
}, NS = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (w) => {
            let {
              x: h,
              y
            } = w;
            return {
              x: h,
              y
            };
          }
        },
        ...a
      } = Ln(e, t), u = {
        x: n,
        y: r
      }, f = await Go(t, a), c = yr(On(i)), p = Wf(c);
      let d = u[p], m = u[c];
      if (o) {
        const w = p === "y" ? "top" : "left", h = p === "y" ? "bottom" : "right", y = d + f[w], v = d - f[h];
        d = Ec(y, d, v);
      }
      if (l) {
        const w = c === "y" ? "top" : "left", h = c === "y" ? "bottom" : "right", y = m + f[w], v = m - f[h];
        m = Ec(y, m, v);
      }
      const g = s.fn({
        ...t,
        [p]: d,
        [c]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [p]: o,
            [c]: l
          }
        }
      };
    }
  };
}, IS = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: i,
        rects: o,
        middlewareData: l
      } = t, {
        offset: s = 0,
        mainAxis: a = !0,
        crossAxis: u = !0
      } = Ln(e, t), f = {
        x: n,
        y: r
      }, c = yr(i), p = Wf(c);
      let d = f[p], m = f[c];
      const g = Ln(s, t), w = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (a) {
        const v = p === "y" ? "height" : "width", C = o.reference[p] - o.floating[v] + w.mainAxis, P = o.reference[p] + o.reference[v] - w.mainAxis;
        d < C ? d = C : d > P && (d = P);
      }
      if (u) {
        var h, y;
        const v = p === "y" ? "width" : "height", C = ["top", "left"].includes(On(i)), P = o.reference[c] - o.floating[v] + (C && ((h = l.offset) == null ? void 0 : h[c]) || 0) + (C ? 0 : w.crossAxis), b = o.reference[c] + o.reference[v] + (C ? 0 : ((y = l.offset) == null ? void 0 : y[c]) || 0) - (C ? w.crossAxis : 0);
        m < P ? m = P : m > b && (m = b);
      }
      return {
        [p]: d,
        [c]: m
      };
    }
  };
}, _S = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        rects: o,
        platform: l,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...u
      } = Ln(e, t), f = await Go(t, u), c = On(i), p = Gi(i), d = yr(i) === "y", {
        width: m,
        height: g
      } = o.floating;
      let w, h;
      c === "top" || c === "bottom" ? (w = c, h = p === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h = c, w = p === "end" ? "top" : "bottom");
      const y = g - f.top - f.bottom, v = m - f.left - f.right, C = mr(g - f[w], y), P = mr(m - f[h], v), b = !t.middlewareData.shift;
      let A = C, N = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = v), (r = t.middlewareData.shift) != null && r.enabled.y && (A = y), b && !p) {
        const E = xt(f.left, 0), M = xt(f.right, 0), L = xt(f.top, 0), H = xt(f.bottom, 0);
        d ? N = m - 2 * (E !== 0 || M !== 0 ? E + M : xt(f.left, f.right)) : A = g - 2 * (L !== 0 || H !== 0 ? L + H : xt(f.top, f.bottom));
      }
      await a({
        ...t,
        availableWidth: N,
        availableHeight: A
      });
      const I = await l.getDimensions(s.floating);
      return m !== I.width || g !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ca() {
  return typeof window < "u";
}
function Zi(e) {
  return bv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function St(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mn(e) {
  var t;
  return (t = (bv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bv(e) {
  return ca() ? e instanceof Node || e instanceof St(e).Node : !1;
}
function en(e) {
  return ca() ? e instanceof Element || e instanceof St(e).Element : !1;
}
function hn(e) {
  return ca() ? e instanceof HTMLElement || e instanceof St(e).HTMLElement : !1;
}
function eh(e) {
  return !ca() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof St(e).ShadowRoot;
}
function pl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = tn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function LS(e) {
  return ["table", "td", "th"].includes(Zi(e));
}
function fa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Yf(e) {
  const t = Kf(), n = en(e) ? tn(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function OS(e) {
  let t = vr(e);
  for (; hn(t) && !Ui(t); ) {
    if (Yf(t))
      return t;
    if (fa(t))
      return null;
    t = vr(t);
  }
  return null;
}
function Kf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ui(e) {
  return ["html", "body", "#document"].includes(Zi(e));
}
function tn(e) {
  return St(e).getComputedStyle(e);
}
function da(e) {
  return en(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function vr(e) {
  if (Zi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    eh(e) && e.host || // Fallback.
    mn(e)
  );
  return eh(t) ? t.host : t;
}
function Sv(e) {
  const t = vr(e);
  return Ui(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hn(t) && pl(t) ? t : Sv(t);
}
function Zo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = Sv(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), l = St(i);
  if (o) {
    const s = Pc(l);
    return t.concat(l, l.visualViewport || [], pl(i) ? i : [], s && n ? Zo(s) : []);
  }
  return t.concat(i, Zo(i, [], n));
}
function Pc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cv(e) {
  const t = tn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = hn(e), o = i ? e.offsetWidth : n, l = i ? e.offsetHeight : r, s = Os(n) !== o || Os(r) !== l;
  return s && (n = o, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function Xf(e) {
  return en(e) ? e : e.contextElement;
}
function Ci(e) {
  const t = Xf(e);
  if (!hn(t))
    return gr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = Cv(t);
  let l = (o ? Os(n.width) : n.width) / r, s = (o ? Os(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const DS = /* @__PURE__ */ gr(0);
function Ev(e) {
  const t = St(e);
  return !Kf() || !t.visualViewport ? DS : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function MS(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== St(e) ? !1 : t;
}
function qr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = Xf(e);
  let l = gr(1);
  t && (r ? en(r) && (l = Ci(r)) : l = Ci(e));
  const s = MS(o, n, r) ? Ev(o) : gr(0);
  let a = (i.left + s.x) / l.x, u = (i.top + s.y) / l.y, f = i.width / l.x, c = i.height / l.y;
  if (o) {
    const p = St(o), d = r && en(r) ? St(r) : r;
    let m = p, g = Pc(m);
    for (; g && r && d !== m; ) {
      const w = Ci(g), h = g.getBoundingClientRect(), y = tn(g), v = h.left + (g.clientLeft + parseFloat(y.paddingLeft)) * w.x, C = h.top + (g.clientTop + parseFloat(y.paddingTop)) * w.y;
      a *= w.x, u *= w.y, f *= w.x, c *= w.y, a += v, u += C, m = St(g), g = Pc(m);
    }
  }
  return Ms({
    width: f,
    height: c,
    x: a,
    y: u
  });
}
function zS(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", l = mn(r), s = t ? fa(t.floating) : !1;
  if (r === l || s && o)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = gr(1);
  const f = gr(0), c = hn(r);
  if ((c || !c && !o) && ((Zi(r) !== "body" || pl(l)) && (a = da(r)), hn(r))) {
    const p = qr(r);
    u = Ci(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + f.x,
    y: n.y * u.y - a.scrollTop * u.y + f.y
  };
}
function FS(e) {
  return Array.from(e.getClientRects());
}
function Ac(e, t) {
  const n = da(e).scrollLeft;
  return t ? t.left + n : qr(mn(e)).left + n;
}
function jS(e) {
  const t = mn(e), n = da(e), r = e.ownerDocument.body, i = xt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = xt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Ac(e);
  const s = -n.scrollTop;
  return tn(r).direction === "rtl" && (l += xt(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function BS(e, t) {
  const n = St(e), r = mn(e), i = n.visualViewport;
  let o = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (i) {
    o = i.width, l = i.height;
    const u = Kf();
    (!u || u && t === "fixed") && (s = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: s,
    y: a
  };
}
function $S(e, t) {
  const n = qr(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = hn(e) ? Ci(e) : gr(1), l = e.clientWidth * o.x, s = e.clientHeight * o.y, a = i * o.x, u = r * o.y;
  return {
    width: l,
    height: s,
    x: a,
    y: u
  };
}
function th(e, t, n) {
  let r;
  if (t === "viewport")
    r = BS(e, n);
  else if (t === "document")
    r = jS(mn(e));
  else if (en(t))
    r = $S(t, n);
  else {
    const i = Ev(e);
    r = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Ms(r);
}
function Tv(e, t) {
  const n = vr(e);
  return n === t || !en(n) || Ui(n) ? !1 : tn(n).position === "fixed" || Tv(n, t);
}
function US(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Zo(e, [], !1).filter((s) => en(s) && Zi(s) !== "body"), i = null;
  const o = tn(e).position === "fixed";
  let l = o ? vr(e) : e;
  for (; en(l) && !Ui(l); ) {
    const s = tn(l), a = Yf(l);
    !a && s.position === "fixed" && (i = null), (o ? !a && !i : !a && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || pl(l) && !a && Tv(e, l)) ? r = r.filter((f) => f !== l) : i = s, l = vr(l);
  }
  return t.set(e, r), r;
}
function HS(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? fa(t) ? [] : US(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, f) => {
    const c = th(t, f, i);
    return u.top = xt(c.top, u.top), u.right = mr(c.right, u.right), u.bottom = mr(c.bottom, u.bottom), u.left = xt(c.left, u.left), u;
  }, th(t, s, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function VS(e) {
  const {
    width: t,
    height: n
  } = Cv(e);
  return {
    width: t,
    height: n
  };
}
function WS(e, t, n) {
  const r = hn(t), i = mn(t), o = n === "fixed", l = qr(e, !0, o, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = gr(0);
  if (r || !r && !o)
    if ((Zi(t) !== "body" || pl(i)) && (s = da(t)), r) {
      const d = qr(t, !0, o, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else i && (a.x = Ac(i));
  let u = 0, f = 0;
  if (i && !r && !o) {
    const d = i.getBoundingClientRect();
    f = d.top + s.scrollTop, u = d.left + s.scrollLeft - // RTL <body> scrollbar.
    Ac(i, d);
  }
  const c = l.left + s.scrollLeft - a.x - u, p = l.top + s.scrollTop - a.y - f;
  return {
    x: c,
    y: p,
    width: l.width,
    height: l.height
  };
}
function ou(e) {
  return tn(e).position === "static";
}
function nh(e, t) {
  if (!hn(e) || tn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mn(e) === n && (n = n.ownerDocument.body), n;
}
function Pv(e, t) {
  const n = St(e);
  if (fa(e))
    return n;
  if (!hn(e)) {
    let i = vr(e);
    for (; i && !Ui(i); ) {
      if (en(i) && !ou(i))
        return i;
      i = vr(i);
    }
    return n;
  }
  let r = nh(e, t);
  for (; r && LS(r) && ou(r); )
    r = nh(r, t);
  return r && Ui(r) && ou(r) && !Yf(r) ? n : r || OS(e) || n;
}
const QS = async function(e) {
  const t = this.getOffsetParent || Pv, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: WS(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function qS(e) {
  return tn(e).direction === "rtl";
}
const YS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zS,
  getDocumentElement: mn,
  getClippingRect: HS,
  getOffsetParent: Pv,
  getElementRects: QS,
  getClientRects: FS,
  getDimensions: VS,
  getScale: Ci,
  isElement: en,
  isRTL: qS
};
function KS(e, t) {
  let n = null, r;
  const i = mn(e);
  function o() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), o();
    const {
      left: u,
      top: f,
      width: c,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !c || !p)
      return;
    const d = jl(f), m = jl(i.clientWidth - (u + c)), g = jl(i.clientHeight - (f + p)), w = jl(u), y = {
      rootMargin: -d + "px " + -m + "px " + -g + "px " + -w + "px",
      threshold: xt(0, mr(1, a)) || 1
    };
    let v = !0;
    function C(P) {
      const b = P[0].intersectionRatio;
      if (b !== a) {
        if (!v)
          return l();
        b ? l(!1, b) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...y,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return l(!0), o;
}
function XS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = Xf(e), f = i || o ? [...u ? Zo(u) : [], ...Zo(t)] : [];
  f.forEach((h) => {
    i && h.addEventListener("scroll", n, {
      passive: !0
    }), o && h.addEventListener("resize", n);
  });
  const c = u && s ? KS(u, n) : null;
  let p = -1, d = null;
  l && (d = new ResizeObserver((h) => {
    let [y] = h;
    y && y.target === u && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var v;
      (v = d) == null || v.observe(t);
    })), n();
  }), u && !a && d.observe(u), d.observe(t));
  let m, g = a ? qr(e) : null;
  a && w();
  function w() {
    const h = qr(e);
    g && (h.x !== g.x || h.y !== g.y || h.width !== g.width || h.height !== g.height) && n(), g = h, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var h;
    f.forEach((y) => {
      i && y.removeEventListener("scroll", n), o && y.removeEventListener("resize", n);
    }), c == null || c(), (h = d) == null || h.disconnect(), d = null, a && cancelAnimationFrame(m);
  };
}
const GS = RS, ZS = NS, JS = TS, eC = _S, tC = PS, rh = ES, nC = IS, rC = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: YS,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return CS(e, t, {
    ...i,
    platform: o
  });
};
var os = typeof document < "u" ? k.useLayoutEffect : k.useEffect;
function zs(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!zs(e[r], t[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !zs(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Av(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ih(e, t) {
  const n = Av(e);
  return Math.round(t * n) / n;
}
function lu(e) {
  const t = k.useRef(e);
  return os(() => {
    t.current = e;
  }), t;
}
function iC(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: i,
    elements: {
      reference: o,
      floating: l
    } = {},
    transform: s = !0,
    whileElementsMounted: a,
    open: u
  } = e, [f, c] = k.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = k.useState(r);
  zs(p, r) || d(r);
  const [m, g] = k.useState(null), [w, h] = k.useState(null), y = k.useCallback((_) => {
    _ !== b.current && (b.current = _, g(_));
  }, []), v = k.useCallback((_) => {
    _ !== A.current && (A.current = _, h(_));
  }, []), C = o || m, P = l || w, b = k.useRef(null), A = k.useRef(null), N = k.useRef(f), I = a != null, E = lu(a), M = lu(i), L = lu(u), H = k.useCallback(() => {
    if (!b.current || !A.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: p
    };
    M.current && (_.platform = M.current), rC(b.current, A.current, _).then((D) => {
      const x = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      z.current && !zs(N.current, x) && (N.current = x, cl.flushSync(() => {
        c(x);
      }));
    });
  }, [p, t, n, M, L]);
  os(() => {
    u === !1 && N.current.isPositioned && (N.current.isPositioned = !1, c((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [u]);
  const z = k.useRef(!1);
  os(() => (z.current = !0, () => {
    z.current = !1;
  }), []), os(() => {
    if (C && (b.current = C), P && (A.current = P), C && P) {
      if (E.current)
        return E.current(C, P, H);
      H();
    }
  }, [C, P, H, E, I]);
  const U = k.useMemo(() => ({
    reference: b,
    floating: A,
    setReference: y,
    setFloating: v
  }), [y, v]), W = k.useMemo(() => ({
    reference: C,
    floating: P
  }), [C, P]), q = k.useMemo(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return _;
    const D = ih(W.floating, f.x), x = ih(W.floating, f.y);
    return s ? {
      ..._,
      transform: "translate(" + D + "px, " + x + "px)",
      ...Av(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: x
    };
  }, [n, s, W.floating, f.x, f.y]);
  return k.useMemo(() => ({
    ...f,
    update: H,
    refs: U,
    elements: W,
    floatingStyles: q
  }), [f, H, U, W, q]);
}
const oC = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: i
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? rh({
        element: r.current,
        padding: i
      }).fn(n) : {} : r ? rh({
        element: r,
        padding: i
      }).fn(n) : {};
    }
  };
}, lC = (e, t) => ({
  ...GS(e),
  options: [e, t]
}), sC = (e, t) => ({
  ...ZS(e),
  options: [e, t]
}), aC = (e, t) => ({
  ...nC(e),
  options: [e, t]
}), uC = (e, t) => ({
  ...JS(e),
  options: [e, t]
}), cC = (e, t) => ({
  ...eC(e),
  options: [e, t]
}), fC = (e, t) => ({
  ...tC(e),
  options: [e, t]
}), dC = (e, t) => ({
  ...oC(e),
  options: [e, t]
});
var pC = "Arrow", Rv = k.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: i = 5, ...o } = e;
  return /* @__PURE__ */ T.jsx(
    De.svg,
    {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ T.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Rv.displayName = pC;
var hC = Rv;
function mC(e) {
  const [t, n] = k.useState(void 0);
  return _n(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const o = i[0];
        let l, s;
        if ("borderBoxSize" in o) {
          const a = o.borderBoxSize, u = Array.isArray(a) ? a[0] : a;
          l = u.inlineSize, s = u.blockSize;
        } else
          l = e.offsetWidth, s = e.offsetHeight;
        n({ width: l, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Nv = "Popper", [Iv, _v] = fl(Nv), [$I, Lv] = Iv(Nv), Ov = "PopperAnchor", Dv = k.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e, o = Lv(Ov, n), l = k.useRef(null), s = $e(t, l);
    return k.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || l.current);
    }), r ? null : /* @__PURE__ */ T.jsx(De.div, { ...i, ref: s });
  }
);
Dv.displayName = Ov;
var Gf = "PopperContent", [gC, yC] = Iv(Gf), Mv = k.forwardRef(
  (e, t) => {
    var oe, Xe, Ge, lt, mt, zn;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: i = 0,
      align: o = "center",
      alignOffset: l = 0,
      arrowPadding: s = 0,
      avoidCollisions: a = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: c = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: d = "optimized",
      onPlaced: m,
      ...g
    } = e, w = Lv(Gf, n), [h, y] = k.useState(null), v = $e(t, (nn) => y(nn)), [C, P] = k.useState(null), b = mC(C), A = (b == null ? void 0 : b.width) ?? 0, N = (b == null ? void 0 : b.height) ?? 0, I = r + (o !== "center" ? "-" + o : ""), E = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, M = Array.isArray(u) ? u : [u], L = M.length > 0, H = {
      padding: E,
      boundary: M.filter(wC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: z, floatingStyles: U, placement: W, isPositioned: q, middlewareData: _ } = iC({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...nn) => XS(...nn, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        lC({ mainAxis: i + N, alignmentAxis: l }),
        a && sC({
          mainAxis: !0,
          crossAxis: !1,
          limiter: c === "partial" ? aC() : void 0,
          ...H
        }),
        a && uC({ ...H }),
        cC({
          ...H,
          apply: ({ elements: nn, rects: Jr, availableWidth: ei, availableHeight: Sr }) => {
            const { width: ti, height: Cr } = Jr.reference, vn = nn.floating.style;
            vn.setProperty("--radix-popper-available-width", `${ei}px`), vn.setProperty("--radix-popper-available-height", `${Sr}px`), vn.setProperty("--radix-popper-anchor-width", `${ti}px`), vn.setProperty("--radix-popper-anchor-height", `${Cr}px`);
          }
        }),
        C && dC({ element: C, padding: s }),
        xC({ arrowWidth: A, arrowHeight: N }),
        p && fC({ strategy: "referenceHidden", ...H })
      ]
    }), [D, x] = jv(W), Y = tt(m);
    _n(() => {
      q && (Y == null || Y());
    }, [q, Y]);
    const Q = (oe = _.arrow) == null ? void 0 : oe.x, S = (Xe = _.arrow) == null ? void 0 : Xe.y, X = ((Ge = _.arrow) == null ? void 0 : Ge.centerOffset) !== 0, [de, le] = k.useState();
    return _n(() => {
      h && le(window.getComputedStyle(h).zIndex);
    }, [h]), /* @__PURE__ */ T.jsx(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: q ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: de,
          "--radix-popper-transform-origin": [
            (lt = _.transformOrigin) == null ? void 0 : lt.x,
            (mt = _.transformOrigin) == null ? void 0 : mt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((zn = _.hide) == null ? void 0 : zn.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ T.jsx(
          gC,
          {
            scope: n,
            placedSide: D,
            onArrowChange: P,
            arrowX: Q,
            arrowY: S,
            shouldHideArrow: X,
            children: /* @__PURE__ */ T.jsx(
              De.div,
              {
                "data-side": D,
                "data-align": x,
                ...g,
                ref: v,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: q ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Mv.displayName = Gf;
var zv = "PopperArrow", vC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Fv = k.forwardRef(function(t, n) {
  const { __scopePopper: r, ...i } = t, o = yC(zv, r), l = vC[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ T.jsx(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [l]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ T.jsx(
          hC,
          {
            ...i,
            ref: n,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Fv.displayName = zv;
function wC(e) {
  return e !== null;
}
var xC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, h, y;
    const { placement: n, rects: r, middlewareData: i } = t, l = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, s = l ? 0 : e.arrowWidth, a = l ? 0 : e.arrowHeight, [u, f] = jv(n), c = { start: "0%", center: "50%", end: "100%" }[f], p = (((h = i.arrow) == null ? void 0 : h.x) ?? 0) + s / 2, d = (((y = i.arrow) == null ? void 0 : y.y) ?? 0) + a / 2;
    let m = "", g = "";
    return u === "bottom" ? (m = l ? c : `${p}px`, g = `${-a}px`) : u === "top" ? (m = l ? c : `${p}px`, g = `${r.floating.height + a}px`) : u === "right" ? (m = `${-a}px`, g = l ? c : `${d}px`) : u === "left" && (m = `${r.floating.width + a}px`, g = l ? c : `${d}px`), { data: { x: m, y: g } };
  }
});
function jv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var kC = Dv, bC = Mv, SC = Fv, [pa, UI] = fl("Tooltip", [
  _v
]), Zf = _v(), Bv = "TooltipProvider", CC = 700, oh = "tooltip.open", [EC, $v] = pa(Bv), Uv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = CC,
    skipDelayDuration: r = 300,
    disableHoverableContent: i = !1,
    children: o
  } = e, l = k.useRef(!0), s = k.useRef(!1), a = k.useRef(0);
  return k.useEffect(() => {
    const u = a.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ T.jsx(
    EC,
    {
      scope: t,
      isOpenDelayedRef: l,
      delayDuration: n,
      onOpen: k.useCallback(() => {
        window.clearTimeout(a.current), l.current = !1;
      }, []),
      onClose: k.useCallback(() => {
        window.clearTimeout(a.current), a.current = window.setTimeout(
          () => l.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: k.useCallback((u) => {
        s.current = u;
      }, []),
      disableHoverableContent: i,
      children: o
    }
  );
};
Uv.displayName = Bv;
var Hv = "Tooltip", [HI, ha] = pa(Hv), Rc = "TooltipTrigger", TC = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, i = ha(Rc, n), o = $v(Rc, n), l = Zf(n), s = k.useRef(null), a = $e(t, s, i.onTriggerChange), u = k.useRef(!1), f = k.useRef(!1), c = k.useCallback(() => u.current = !1, []);
    return k.useEffect(() => () => document.removeEventListener("pointerup", c), [c]), /* @__PURE__ */ T.jsx(kC, { asChild: !0, ...l, children: /* @__PURE__ */ T.jsx(
      De.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...r,
        ref: a,
        onPointerMove: ge(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !o.isPointerInTransitRef.current && (i.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: ge(e.onPointerLeave, () => {
          i.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: ge(e.onPointerDown, () => {
          i.open && i.onClose(), u.current = !0, document.addEventListener("pointerup", c, { once: !0 });
        }),
        onFocus: ge(e.onFocus, () => {
          u.current || i.onOpen();
        }),
        onBlur: ge(e.onBlur, i.onClose),
        onClick: ge(e.onClick, i.onClose)
      }
    ) });
  }
);
TC.displayName = Rc;
var PC = "TooltipPortal", [VI, AC] = pa(PC, {
  forceMount: void 0
}), Hi = "TooltipContent", Vv = k.forwardRef(
  (e, t) => {
    const n = AC(Hi, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...o } = e, l = ha(Hi, e.__scopeTooltip);
    return /* @__PURE__ */ T.jsx(Gr, { present: r || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ T.jsx(Wv, { side: i, ...o, ref: t }) : /* @__PURE__ */ T.jsx(RC, { side: i, ...o, ref: t }) });
  }
), RC = k.forwardRef((e, t) => {
  const n = ha(Hi, e.__scopeTooltip), r = $v(Hi, e.__scopeTooltip), i = k.useRef(null), o = $e(t, i), [l, s] = k.useState(null), { trigger: a, onClose: u } = n, f = i.current, { onPointerInTransitChange: c } = r, p = k.useCallback(() => {
    s(null), c(!1);
  }, [c]), d = k.useCallback(
    (m, g) => {
      const w = m.currentTarget, h = { x: m.clientX, y: m.clientY }, y = OC(h, w.getBoundingClientRect()), v = DC(h, y), C = MC(g.getBoundingClientRect()), P = FC([...v, ...C]);
      s(P), c(!0);
    },
    [c]
  );
  return k.useEffect(() => () => p(), [p]), k.useEffect(() => {
    if (a && f) {
      const m = (w) => d(w, f), g = (w) => d(w, a);
      return a.addEventListener("pointerleave", m), f.addEventListener("pointerleave", g), () => {
        a.removeEventListener("pointerleave", m), f.removeEventListener("pointerleave", g);
      };
    }
  }, [a, f, d, p]), k.useEffect(() => {
    if (l) {
      const m = (g) => {
        const w = g.target, h = { x: g.clientX, y: g.clientY }, y = (a == null ? void 0 : a.contains(w)) || (f == null ? void 0 : f.contains(w)), v = !zC(h, l);
        y ? p() : v && (p(), u());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [a, f, l, u, p]), /* @__PURE__ */ T.jsx(Wv, { ...e, ref: o });
}), [NC, IC] = pa(Hv, { isInside: !1 }), _C = /* @__PURE__ */ sk("TooltipContent"), Wv = k.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": i,
      onEscapeKeyDown: o,
      onPointerDownOutside: l,
      ...s
    } = e, a = ha(Hi, n), u = Zf(n), { onClose: f } = a;
    return k.useEffect(() => (document.addEventListener(oh, f), () => document.removeEventListener(oh, f)), [f]), k.useEffect(() => {
      if (a.trigger) {
        const c = (p) => {
          const d = p.target;
          d != null && d.contains(a.trigger) && f();
        };
        return window.addEventListener("scroll", c, { capture: !0 }), () => window.removeEventListener("scroll", c, { capture: !0 });
      }
    }, [a.trigger, f]), /* @__PURE__ */ T.jsx(
      Bf,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: l,
        onFocusOutside: (c) => c.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ T.jsxs(
          bC,
          {
            "data-state": a.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ T.jsx(_C, { children: r }),
              /* @__PURE__ */ T.jsx(NC, { scope: n, isInside: !0, children: /* @__PURE__ */ T.jsx(_k, { id: a.contentId, role: "tooltip", children: i || r }) })
            ]
          }
        )
      }
    );
  }
);
Vv.displayName = Hi;
var Qv = "TooltipArrow", LC = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, i = Zf(n);
    return IC(
      Qv,
      n
    ).isInside ? null : /* @__PURE__ */ T.jsx(SC, { ...i, ...r, ref: t });
  }
);
LC.displayName = Qv;
function OC(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), o = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, o)) {
    case o:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function DC(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function MC(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r }
  ];
}
function zC(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, l = t.length - 1; o < t.length; l = o++) {
    const s = t[o], a = t[l], u = s.x, f = s.y, c = a.x, p = a.y;
    f > r != p > r && n < (c - u) * (r - f) / (p - f) + u && (i = !i);
  }
  return i;
}
function FC(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), jC(t);
}
function jC(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1], l = t[t.length - 2];
      if ((o.x - l.x) * (i.y - l.y) >= (o.y - l.y) * (i.x - l.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2; ) {
      const o = n[n.length - 1], l = n[n.length - 2];
      if ((o.x - l.x) * (i.y - l.y) >= (o.y - l.y) * (i.x - l.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var BC = Uv, qv = Vv;
const $C = BC, UC = k.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ T.jsx(
  qv,
  {
    ref: r,
    sideOffset: t,
    className: Re(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
UC.displayName = qv.displayName;
var ma = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, ga = typeof window > "u" || "Deno" in globalThis;
function Wt() {
}
function HC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function VC(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function WC(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Nc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function QC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lh(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: l,
    stale: s
  } = e;
  if (l) {
    if (r) {
      if (t.queryHash !== Jf(l, t.options))
        return !1;
    } else if (!el(t.queryKey, l))
      return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if (n === "active" && !a || n === "inactive" && a)
      return !1;
  }
  return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || o && !o(t));
}
function sh(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (Jo(t.options.mutationKey) !== Jo(o))
        return !1;
    } else if (!el(t.options.mutationKey, o))
      return !1;
  }
  return !(r && t.state.status !== r || i && !i(t));
}
function Jf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e);
}
function Jo(e) {
  return JSON.stringify(
    e,
    (t, n) => Ic(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n
  );
}
function el(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((n) => el(e[n], t[n])) : !1;
}
function Yv(e, t) {
  if (e === t)
    return e;
  const n = ah(e) && ah(t);
  if (n || Ic(e) && Ic(t)) {
    const r = n ? e : Object.keys(e), i = r.length, o = n ? t : Object.keys(t), l = o.length, s = n ? [] : {}, a = new Set(r);
    let u = 0;
    for (let f = 0; f < l; f++) {
      const c = n ? f : o[f];
      (!n && a.has(c) || n) && e[c] === void 0 && t[c] === void 0 ? (s[c] = void 0, u++) : (s[c] = Yv(e[c], t[c]), s[c] === e[c] && e[c] !== void 0 && u++);
    }
    return i === l && u === i ? e : s;
  }
  return t;
}
function ah(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ic(e) {
  if (!uh(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!uh(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function uh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function qC(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function YC(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Yv(e, t) : t;
}
function KC(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function XC(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ed = Symbol();
function Kv(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ed ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Or, Zn, Pi, dm, GC = (dm = class extends ma {
  constructor() {
    super();
    ce(this, Or);
    ce(this, Zn);
    ce(this, Pi);
    J(this, Pi, (t) => {
      if (!ga && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Zn) || this.setEventListener(O(this, Pi));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Zn)) == null || t.call(this), J(this, Zn, void 0));
  }
  setEventListener(t) {
    var n;
    J(this, Pi, t), (n = O(this, Zn)) == null || n.call(this), J(this, Zn, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    O(this, Or) !== t && (J(this, Or, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof O(this, Or) == "boolean" ? O(this, Or) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Or = new WeakMap(), Zn = new WeakMap(), Pi = new WeakMap(), dm), Xv = new GC(), Ai, Jn, Ri, pm, ZC = (pm = class extends ma {
  constructor() {
    super();
    ce(this, Ai, !0);
    ce(this, Jn);
    ce(this, Ri);
    J(this, Ri, (t) => {
      if (!ga && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Jn) || this.setEventListener(O(this, Ri));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Jn)) == null || t.call(this), J(this, Jn, void 0));
  }
  setEventListener(t) {
    var n;
    J(this, Ri, t), (n = O(this, Jn)) == null || n.call(this), J(this, Jn, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    O(this, Ai) !== t && (J(this, Ai, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return O(this, Ai);
  }
}, Ai = new WeakMap(), Jn = new WeakMap(), Ri = new WeakMap(), pm), Fs = new ZC();
function JC() {
  let e, t;
  const n = new Promise((i, o) => {
    e = i, t = o;
  });
  n.status = "pending", n.catch(() => {
  });
  function r(i) {
    Object.assign(n, i), delete n.resolve, delete n.reject;
  }
  return n.resolve = (i) => {
    r({
      status: "fulfilled",
      value: i
    }), e(i);
  }, n.reject = (i) => {
    r({
      status: "rejected",
      reason: i
    }), t(i);
  }, n;
}
function eE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Gv(e) {
  return (e ?? "online") === "online" ? Fs.isOnline() : !0;
}
var Zv = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function su(e) {
  return e instanceof Zv;
}
function Jv(e) {
  let t = !1, n = 0, r = !1, i;
  const o = JC(), l = (g) => {
    var w;
    r || (p(new Zv(g)), (w = e.abort) == null || w.call(e));
  }, s = () => {
    t = !0;
  }, a = () => {
    t = !1;
  }, u = () => Xv.isFocused() && (e.networkMode === "always" || Fs.isOnline()) && e.canRun(), f = () => Gv(e.networkMode) && e.canRun(), c = (g) => {
    var w;
    r || (r = !0, (w = e.onSuccess) == null || w.call(e, g), i == null || i(), o.resolve(g));
  }, p = (g) => {
    var w;
    r || (r = !0, (w = e.onError) == null || w.call(e, g), i == null || i(), o.reject(g));
  }, d = () => new Promise((g) => {
    var w;
    i = (h) => {
      (r || u()) && g(h);
    }, (w = e.onPause) == null || w.call(e);
  }).then(() => {
    var g;
    i = void 0, r || (g = e.onContinue) == null || g.call(e);
  }), m = () => {
    if (r)
      return;
    let g;
    const w = n === 0 ? e.initialPromise : void 0;
    try {
      g = w ?? e.fn();
    } catch (h) {
      g = Promise.reject(h);
    }
    Promise.resolve(g).then(c).catch((h) => {
      var b;
      if (r)
        return;
      const y = e.retry ?? (ga ? 0 : 3), v = e.retryDelay ?? eE, C = typeof v == "function" ? v(n, h) : v, P = y === !0 || typeof y == "number" && n < y || typeof y == "function" && y(n, h);
      if (t || !P) {
        p(h);
        return;
      }
      n++, (b = e.onFail) == null || b.call(e, n, h), qC(C).then(() => u() ? void 0 : d()).then(() => {
        t ? p(h) : m();
      });
    });
  };
  return {
    promise: o,
    cancel: l,
    continue: () => (i == null || i(), o),
    cancelRetry: s,
    continueRetry: a,
    canStart: f,
    start: () => (f() ? m() : d().then(m), o)
  };
}
var tE = (e) => setTimeout(e, 0);
function nE() {
  let e = [], t = 0, n = (s) => {
    s();
  }, r = (s) => {
    s();
  }, i = tE;
  const o = (s) => {
    t ? e.push(s) : i(() => {
      n(s);
    });
  }, l = () => {
    const s = e;
    e = [], s.length && i(() => {
      r(() => {
        s.forEach((a) => {
          n(a);
        });
      });
    });
  };
  return {
    batch: (s) => {
      let a;
      t++;
      try {
        a = s();
      } finally {
        t--, t || l();
      }
      return a;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (s) => (...a) => {
      o(() => {
        s(...a);
      });
    },
    schedule: o,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (s) => {
      n = s;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (s) => {
      r = s;
    },
    setScheduler: (s) => {
      i = s;
    }
  };
}
var et = nE(), Dr, hm, e0 = (hm = class {
  constructor() {
    ce(this, Dr);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), VC(this.gcTime) && J(this, Dr, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (ga ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    O(this, Dr) && (clearTimeout(O(this, Dr)), J(this, Dr, void 0));
  }
}, Dr = new WeakMap(), hm), Ni, Mr, Rt, zr, We, rl, Fr, Qt, kn, mm, rE = (mm = class extends e0 {
  constructor(t) {
    super();
    ce(this, Qt);
    ce(this, Ni);
    ce(this, Mr);
    ce(this, Rt);
    ce(this, zr);
    ce(this, We);
    ce(this, rl);
    ce(this, Fr);
    J(this, Fr, !1), J(this, rl, t.defaultOptions), this.setOptions(t.options), this.observers = [], J(this, zr, t.client), J(this, Rt, O(this, zr).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, J(this, Ni, oE(this.options)), this.state = t.state ?? O(this, Ni), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = O(this, We)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...O(this, rl), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && O(this, Rt).remove(this);
  }
  setData(t, n) {
    const r = YC(this.state.data, t, this.options);
    return Ue(this, Qt, kn).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    Ue(this, Qt, kn).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, i;
    const n = (r = O(this, We)) == null ? void 0 : r.promise;
    return (i = O(this, We)) == null || i.cancel(t), n ? n.then(Wt).catch(Wt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(O(this, Ni));
  }
  isActive() {
    return this.observers.some(
      (t) => QC(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ed || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (t) => Nc(t.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !WC(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = O(this, We)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = O(this, We)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), O(this, Rt).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (O(this, We) && (O(this, Fr) ? O(this, We).cancel({ revert: !0 }) : O(this, We).cancelRetry()), this.scheduleGc()), O(this, Rt).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Ue(this, Qt, kn).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var u, f, c;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (O(this, We))
        return O(this, We).continueRetry(), O(this, We).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const p = this.observers.find((d) => d.options.queryFn);
      p && this.setOptions(p.options);
    }
    const r = new AbortController(), i = (p) => {
      Object.defineProperty(p, "signal", {
        enumerable: !0,
        get: () => (J(this, Fr, !0), r.signal)
      });
    }, o = () => {
      const p = Kv(this.options, n), m = (() => {
        const g = {
          client: O(this, zr),
          queryKey: this.queryKey,
          meta: this.meta
        };
        return i(g), g;
      })();
      return J(this, Fr, !1), this.options.persister ? this.options.persister(
        p,
        m,
        this
      ) : p(m);
    }, s = (() => {
      const p = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        client: O(this, zr),
        state: this.state,
        fetchFn: o
      };
      return i(p), p;
    })();
    (u = this.options.behavior) == null || u.onFetch(s, this), J(this, Mr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((f = s.fetchOptions) == null ? void 0 : f.meta)) && Ue(this, Qt, kn).call(this, { type: "fetch", meta: (c = s.fetchOptions) == null ? void 0 : c.meta });
    const a = (p) => {
      var d, m, g, w;
      su(p) && p.silent || Ue(this, Qt, kn).call(this, {
        type: "error",
        error: p
      }), su(p) || ((m = (d = O(this, Rt).config).onError) == null || m.call(
        d,
        p,
        this
      ), (w = (g = O(this, Rt).config).onSettled) == null || w.call(
        g,
        this.state.data,
        p,
        this
      )), this.scheduleGc();
    };
    return J(this, We, Jv({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: s.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (p) => {
        var d, m, g, w;
        if (p === void 0) {
          a(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(p);
        } catch (h) {
          a(h);
          return;
        }
        (m = (d = O(this, Rt).config).onSuccess) == null || m.call(d, p, this), (w = (g = O(this, Rt).config).onSettled) == null || w.call(
          g,
          p,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: a,
      onFail: (p, d) => {
        Ue(this, Qt, kn).call(this, { type: "failed", failureCount: p, error: d });
      },
      onPause: () => {
        Ue(this, Qt, kn).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ue(this, Qt, kn).call(this, { type: "continue" });
      },
      retry: s.options.retry,
      retryDelay: s.options.retryDelay,
      networkMode: s.options.networkMode,
      canRun: () => !0
    })), O(this, We).start();
  }
}, Ni = new WeakMap(), Mr = new WeakMap(), Rt = new WeakMap(), zr = new WeakMap(), We = new WeakMap(), rl = new WeakMap(), Fr = new WeakMap(), Qt = new WeakSet(), kn = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...r,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...r,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...r,
          ...iE(r.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return J(this, Mr, void 0), {
          ...r,
          data: t.data,
          dataUpdateCount: r.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const i = t.error;
        return su(i) && i.revert && O(this, Mr) ? { ...O(this, Mr), fetchStatus: "idle" } : {
          ...r,
          error: i,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          fetchFailureReason: i,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...r,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...r,
          ...t.state
        };
    }
  };
  this.state = n(this.state), et.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), O(this, Rt).notify({ query: this, type: "updated", action: t });
  });
}, mm);
function iE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Gv(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function oE(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var an, gm, lE = (gm = class extends ma {
  constructor(t = {}) {
    super();
    ce(this, an);
    this.config = t, J(this, an, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const i = n.queryKey, o = n.queryHash ?? Jf(i, n);
    let l = this.get(o);
    return l || (l = new rE({
      client: t,
      queryKey: i,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(i)
    }), this.add(l)), l;
  }
  add(t) {
    O(this, an).has(t.queryHash) || (O(this, an).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = O(this, an).get(t.queryHash);
    n && (t.destroy(), n === t && O(this, an).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    et.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return O(this, an).get(t);
  }
  getAll() {
    return [...O(this, an).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => lh(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => lh(t, r)) : n;
  }
  notify(t) {
    et.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    et.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    et.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, an = new WeakMap(), gm), un, Ze, jr, cn, qn, ym, sE = (ym = class extends e0 {
  constructor(t) {
    super();
    ce(this, cn);
    ce(this, un);
    ce(this, Ze);
    ce(this, jr);
    this.mutationId = t.mutationId, J(this, Ze, t.mutationCache), J(this, un, []), this.state = t.state || aE(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    O(this, un).includes(t) || (O(this, un).push(t), this.clearGcTimeout(), O(this, Ze).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    J(this, un, O(this, un).filter((n) => n !== t)), this.scheduleGc(), O(this, Ze).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    O(this, un).length || (this.state.status === "pending" ? this.scheduleGc() : O(this, Ze).remove(this));
  }
  continue() {
    var t;
    return ((t = O(this, jr)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var o, l, s, a, u, f, c, p, d, m, g, w, h, y, v, C, P, b, A, N;
    const n = () => {
      Ue(this, cn, qn).call(this, { type: "continue" });
    };
    J(this, jr, Jv({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (I, E) => {
        Ue(this, cn, qn).call(this, { type: "failed", failureCount: I, error: E });
      },
      onPause: () => {
        Ue(this, cn, qn).call(this, { type: "pause" });
      },
      onContinue: n,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => O(this, Ze).canRun(this)
    }));
    const r = this.state.status === "pending", i = !O(this, jr).canStart();
    try {
      if (r)
        n();
      else {
        Ue(this, cn, qn).call(this, { type: "pending", variables: t, isPaused: i }), await ((l = (o = O(this, Ze).config).onMutate) == null ? void 0 : l.call(
          o,
          t,
          this
        ));
        const E = await ((a = (s = this.options).onMutate) == null ? void 0 : a.call(s, t));
        E !== this.state.context && Ue(this, cn, qn).call(this, {
          type: "pending",
          context: E,
          variables: t,
          isPaused: i
        });
      }
      const I = await O(this, jr).start();
      return await ((f = (u = O(this, Ze).config).onSuccess) == null ? void 0 : f.call(
        u,
        I,
        t,
        this.state.context,
        this
      )), await ((p = (c = this.options).onSuccess) == null ? void 0 : p.call(c, I, t, this.state.context)), await ((m = (d = O(this, Ze).config).onSettled) == null ? void 0 : m.call(
        d,
        I,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((w = (g = this.options).onSettled) == null ? void 0 : w.call(g, I, null, t, this.state.context)), Ue(this, cn, qn).call(this, { type: "success", data: I }), I;
    } catch (I) {
      try {
        throw await ((y = (h = O(this, Ze).config).onError) == null ? void 0 : y.call(
          h,
          I,
          t,
          this.state.context,
          this
        )), await ((C = (v = this.options).onError) == null ? void 0 : C.call(
          v,
          I,
          t,
          this.state.context
        )), await ((b = (P = O(this, Ze).config).onSettled) == null ? void 0 : b.call(
          P,
          void 0,
          I,
          this.state.variables,
          this.state.context,
          this
        )), await ((N = (A = this.options).onSettled) == null ? void 0 : N.call(
          A,
          void 0,
          I,
          t,
          this.state.context
        )), I;
      } finally {
        Ue(this, cn, qn).call(this, { type: "error", error: I });
      }
    } finally {
      O(this, Ze).runNext(this);
    }
  }
}, un = new WeakMap(), Ze = new WeakMap(), jr = new WeakMap(), cn = new WeakSet(), qn = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...r,
          isPaused: !0
        };
      case "continue":
        return {
          ...r,
          isPaused: !1
        };
      case "pending":
        return {
          ...r,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...r,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...r,
          data: void 0,
          error: t.error,
          failureCount: r.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = n(this.state), et.batch(() => {
    O(this, un).forEach((r) => {
      r.onMutationUpdate(t);
    }), O(this, Ze).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, ym);
function aE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var Cn, qt, il, vm, uE = (vm = class extends ma {
  constructor(t = {}) {
    super();
    ce(this, Cn);
    ce(this, qt);
    ce(this, il);
    this.config = t, J(this, Cn, /* @__PURE__ */ new Set()), J(this, qt, /* @__PURE__ */ new Map()), J(this, il, 0);
  }
  build(t, n, r) {
    const i = new sE({
      mutationCache: this,
      mutationId: ++vl(this, il)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(i), i;
  }
  add(t) {
    O(this, Cn).add(t);
    const n = Bl(t);
    if (typeof n == "string") {
      const r = O(this, qt).get(n);
      r ? r.push(t) : O(this, qt).set(n, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (O(this, Cn).delete(t)) {
      const n = Bl(t);
      if (typeof n == "string") {
        const r = O(this, qt).get(n);
        if (r)
          if (r.length > 1) {
            const i = r.indexOf(t);
            i !== -1 && r.splice(i, 1);
          } else r[0] === t && O(this, qt).delete(n);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const n = Bl(t);
    if (typeof n == "string") {
      const r = O(this, qt).get(n), i = r == null ? void 0 : r.find(
        (o) => o.state.status === "pending"
      );
      return !i || i === t;
    } else
      return !0;
  }
  runNext(t) {
    var r;
    const n = Bl(t);
    if (typeof n == "string") {
      const i = (r = O(this, qt).get(n)) == null ? void 0 : r.find((o) => o !== t && o.state.isPaused);
      return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    et.batch(() => {
      O(this, Cn).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), O(this, Cn).clear(), O(this, qt).clear();
    });
  }
  getAll() {
    return Array.from(O(this, Cn));
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => sh(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => sh(t, n));
  }
  notify(t) {
    et.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return et.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(Wt))
      )
    );
  }
}, Cn = new WeakMap(), qt = new WeakMap(), il = new WeakMap(), vm);
function Bl(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function ch(e) {
  return {
    onFetch: (t, n) => {
      var f, c, p, d, m;
      const r = t.options, i = (p = (c = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : c.fetchMore) == null ? void 0 : p.direction, o = ((d = t.state.data) == null ? void 0 : d.pages) || [], l = ((m = t.state.data) == null ? void 0 : m.pageParams) || [];
      let s = { pages: [], pageParams: [] }, a = 0;
      const u = async () => {
        let g = !1;
        const w = (v) => {
          Object.defineProperty(v, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
              g = !0;
            }), t.signal)
          });
        }, h = Kv(t.options, t.fetchOptions), y = async (v, C, P) => {
          if (g)
            return Promise.reject();
          if (C == null && v.pages.length)
            return Promise.resolve(v);
          const A = (() => {
            const M = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: C,
              direction: P ? "backward" : "forward",
              meta: t.options.meta
            };
            return w(M), M;
          })(), N = await h(A), { maxPages: I } = t.options, E = P ? XC : KC;
          return {
            pages: E(v.pages, N, I),
            pageParams: E(v.pageParams, C, I)
          };
        };
        if (i && o.length) {
          const v = i === "backward", C = v ? cE : fh, P = {
            pages: o,
            pageParams: l
          }, b = C(r, P);
          s = await y(P, b, v);
        } else {
          const v = e ?? o.length;
          do {
            const C = a === 0 ? l[0] ?? r.initialPageParam : fh(r, s);
            if (a > 0 && C == null)
              break;
            s = await y(s, C), a++;
          } while (a < v);
        }
        return s;
      };
      t.options.persister ? t.fetchFn = () => {
        var g, w;
        return (w = (g = t.options).persister) == null ? void 0 : w.call(
          g,
          u,
          {
            client: t.client,
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          n
        );
      } : t.fetchFn = u;
    }
  };
}
function fh(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function cE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var Te, er, tr, Ii, _i, nr, Li, Oi, wm, fE = (wm = class {
  constructor(e = {}) {
    ce(this, Te);
    ce(this, er);
    ce(this, tr);
    ce(this, Ii);
    ce(this, _i);
    ce(this, nr);
    ce(this, Li);
    ce(this, Oi);
    J(this, Te, e.queryCache || new lE()), J(this, er, e.mutationCache || new uE()), J(this, tr, e.defaultOptions || {}), J(this, Ii, /* @__PURE__ */ new Map()), J(this, _i, /* @__PURE__ */ new Map()), J(this, nr, 0);
  }
  mount() {
    vl(this, nr)._++, O(this, nr) === 1 && (J(this, Li, Xv.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, Te).onFocus());
    })), J(this, Oi, Fs.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, Te).onOnline());
    })));
  }
  unmount() {
    var e, t;
    vl(this, nr)._--, O(this, nr) === 0 && ((e = O(this, Li)) == null || e.call(this), J(this, Li, void 0), (t = O(this, Oi)) == null || t.call(this), J(this, Oi, void 0));
  }
  isFetching(e) {
    return O(this, Te).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return O(this, er).findAll({ ...e, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = O(this, Te).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), n = O(this, Te).build(this, t), r = n.state.data;
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Nc(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
  }
  getQueriesData(e) {
    return O(this, Te).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), i = O(this, Te).get(
      r.queryHash
    ), o = i == null ? void 0 : i.state.data, l = HC(t, o);
    if (l !== void 0)
      return O(this, Te).build(this, r).setData(l, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return et.batch(
      () => O(this, Te).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = O(this, Te).get(
      t.queryHash
    )) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = O(this, Te);
    et.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = O(this, Te);
    return et.batch(() => (n.findAll(e).forEach((r) => {
      r.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...e
      },
      t
    )));
  }
  cancelQueries(e, t = {}) {
    const n = { revert: !0, ...t }, r = et.batch(
      () => O(this, Te).findAll(e).map((i) => i.cancel(n))
    );
    return Promise.all(r).then(Wt).catch(Wt);
  }
  invalidateQueries(e, t = {}) {
    return et.batch(() => (O(this, Te).findAll(e).forEach((n) => {
      n.invalidate();
    }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...e,
        type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
      },
      t
    )));
  }
  refetchQueries(e, t = {}) {
    const n = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, r = et.batch(
      () => O(this, Te).findAll(e).filter((i) => !i.isDisabled() && !i.isStatic()).map((i) => {
        let o = i.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(Wt)), i.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(r).then(Wt);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = O(this, Te).build(this, t);
    return n.isStaleByTime(
      Nc(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Wt).catch(Wt);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = ch(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Wt).catch(Wt);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = ch(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Fs.isOnline() ? O(this, er).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return O(this, Te);
  }
  getMutationCache() {
    return O(this, er);
  }
  getDefaultOptions() {
    return O(this, tr);
  }
  setDefaultOptions(e) {
    J(this, tr, e);
  }
  setQueryDefaults(e, t) {
    O(this, Ii).set(Jo(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...O(this, Ii).values()], n = {};
    return t.forEach((r) => {
      el(e, r.queryKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  setMutationDefaults(e, t) {
    O(this, _i).set(Jo(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...O(this, _i).values()], n = {};
    return t.forEach((r) => {
      el(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...O(this, tr).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Jf(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === ed && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...O(this, tr).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    O(this, Te).clear(), O(this, er).clear();
  }
}, Te = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), Ii = new WeakMap(), _i = new WeakMap(), nr = new WeakMap(), Li = new WeakMap(), Oi = new WeakMap(), wm), dE = k.createContext(
  void 0
), pE = ({
  client: e,
  children: t
}) => (k.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ T.jsx(dE.Provider, { value: e, children: t }));
const hE = "https://jt-eco.app.n8n.cloud/webhook/1cd4ac0b-7a32-4c9f-9307-d0501ff02822", mE = [
  {
    title: "Installation",
    icon: "Plug",
    questions: [
      "How do I install a home charger?",
      "What electrical work is needed?"
    ]
  },
  {
    title: "Costs & Savings",
    icon: "DollarSign",
    questions: [
      "What does home charging cost?",
      "Are there any grants available?"
    ]
  },
  {
    title: "Products",
    icon: "ShoppingCart",
    questions: [
      "Which charger should I buy?",
      "What features should I look for?"
    ]
  }
], au = {
  title: "Hi! I'm your EV Home Charging Assistant 🔌",
  subtitle: "I can help you with everything about charging your electric vehicle at home — from installation tips to cost calculations and product recommendations.",
  inputPlaceholder: "Type your message...",
  getStarted: "Choose a topic to get started"
};
function td(e) {
  var r, i;
  const n = { ...window.EVChatConfig || {}, ...e };
  return {
    // Target/container
    target: n.target || n.container || "#ev-chat",
    container: n.container,
    // Mode and position
    mode: n.mode || "fullscreen",
    position: n.position || "bottom-right",
    // Layout
    inputPosition: n.inputPosition || "below",
    inputLayout: n.inputLayout || "separate",
    // Webhook
    webhookUrl: n.webhookUrl || hE,
    // Content
    categories: n.categories && n.categories.length > 0 ? n.categories : mE,
    initialMessages: n.initialMessages,
    // i18n - merge with defaults
    i18n: {
      ...au,
      ...n.i18n
    },
    // Legacy support
    brandName: n.brandName,
    welcomeTitle: n.welcomeTitle || ((r = n.i18n) == null ? void 0 : r.title) || au.title,
    welcomeMessage: n.welcomeMessage || ((i = n.i18n) == null ? void 0 : i.subtitle) || au.subtitle
  };
}
function gE() {
  var e, t;
  return !!((e = window.EVChatConfig) != null && e.container || (t = window.EVChatConfig) != null && t.target);
}
function yE(e) {
  return {
    ...td(e),
    isEmbedded: gE() || !!e
  };
}
const t0 = k.createContext(null);
function vE() {
  if (typeof window > "u") return !1;
  const e = new URLSearchParams(window.location.search);
  return e.get("embedded") === "true" || e.get("embed") === "true";
}
function wE({
  children: e,
  overrideConfig: t
}) {
  const n = k.useMemo(() => {
    const r = yE(t), i = vE();
    return t ? {
      ...r,
      ...t,
      isEmbedded: t.isEmbedded ?? i ?? r.isEmbedded
    } : {
      ...r,
      isEmbedded: i || r.isEmbedded
    };
  }, [t]);
  return /* @__PURE__ */ T.jsx(t0.Provider, { value: n, children: e });
}
function Ji() {
  const e = k.useContext(t0);
  if (!e)
    throw new Error("useChatConfig must be used within a ChatConfigProvider");
  return e;
}
const xE = () => {
  const e = sessionStorage.getItem("n8n-session-id");
  if (e) return e;
  const t = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  return sessionStorage.setItem("n8n-session-id", t), t;
}, kE = () => {
  const [e, t] = k.useState([]), [n, r] = k.useState(!1), [i, o] = k.useState(xE), l = k.useCallback(
    async (a) => {
      if (!a.trim()) return;
      const { webhookUrl: u } = td(), f = {
        id: `user-${Date.now()}`,
        role: "user",
        content: a.trim()
      };
      t((c) => [...c, f]), r(!0);
      try {
        const c = await fetch(u, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: a.trim(),
            sessionId: i
          })
        });
        if (!c.ok)
          throw new Error(`HTTP error! status: ${c.status}`);
        const p = await c.text();
        let d;
        const m = (w) => {
          if (typeof w == "string") return w;
          if (w == null) return "";
          if (Array.isArray(w))
            return w.length > 0 ? m(w[0]) : "";
          if (typeof w == "object") {
            const h = w, y = h.output || h.response || h.text || h.message || h.content;
            return y ? m(y) : JSON.stringify(w);
          }
          return String(w);
        };
        try {
          const w = JSON.parse(p);
          d = m(w);
        } catch {
          d = p;
        }
        const g = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: d
        };
        t((w) => [...w, g]);
      } catch (c) {
        console.error("n8n webhook error:", c), Oy({
          title: "Connection failed",
          description: "Could not connect to the AI assistant. Please try again.",
          variant: "destructive"
        });
        const p = {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: "Sorry, I couldn't connect to the server. Please check your connection and try again."
        };
        t((d) => [...d, p]);
      } finally {
        r(!1);
      }
    },
    [i]
  ), s = k.useCallback(() => {
    t([]);
    const a = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem("n8n-session-id", a), o(a);
  }, []);
  return {
    messages: e,
    isLoading: n,
    sendMessage: l,
    clearMessages: s,
    sessionId: i
  };
}, dh = ({ onNewChat: e }) => /* @__PURE__ */ T.jsxs("header", { className: "flex items-center gap-3 border-b border-border bg-card px-6 py-4", children: [
  /* @__PURE__ */ T.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ T.jsx(tb, { className: "h-5 w-5 text-primary-foreground" }) }),
  /* @__PURE__ */ T.jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ T.jsx("h1", { className: "text-lg font-semibold text-foreground", children: "EV Home Charging Assistant" }),
    /* @__PURE__ */ T.jsx("p", { className: "text-sm text-muted-foreground", children: "Your friendly guide to home EV charging" })
  ] }),
  e && /* @__PURE__ */ T.jsx(
    "button",
    {
      onClick: e,
      className: "p-2 rounded-lg hover:bg-muted transition-colors",
      "aria-label": "Start new chat",
      title: "New chat",
      children: /* @__PURE__ */ T.jsx(kc, { className: "h-5 w-5 text-muted-foreground" })
    }
  ),
  /* @__PURE__ */ T.jsx(eb, { className: "h-6 w-6 text-primary opacity-60" })
] });
var bE = k.createContext(void 0);
function SE(e) {
  const t = k.useContext(bE);
  return e || t || "ltr";
}
function CE(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function EE(e, t) {
  return k.useReducer((n, r) => t[n][r] ?? n, e);
}
var nd = "ScrollArea", [n0, WI] = fl(nd), [TE, zt] = n0(nd), r0 = k.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: i,
      scrollHideDelay: o = 600,
      ...l
    } = e, [s, a] = k.useState(null), [u, f] = k.useState(null), [c, p] = k.useState(null), [d, m] = k.useState(null), [g, w] = k.useState(null), [h, y] = k.useState(0), [v, C] = k.useState(0), [P, b] = k.useState(!1), [A, N] = k.useState(!1), I = $e(t, (M) => a(M)), E = SE(i);
    return /* @__PURE__ */ T.jsx(
      TE,
      {
        scope: n,
        type: r,
        dir: E,
        scrollHideDelay: o,
        scrollArea: s,
        viewport: u,
        onViewportChange: f,
        content: c,
        onContentChange: p,
        scrollbarX: d,
        onScrollbarXChange: m,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: b,
        scrollbarY: g,
        onScrollbarYChange: w,
        scrollbarYEnabled: A,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: y,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ T.jsx(
          De.div,
          {
            dir: E,
            ...l,
            ref: I,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": h + "px",
              "--radix-scroll-area-corner-height": v + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
r0.displayName = nd;
var i0 = "ScrollAreaViewport", o0 = k.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: i, ...o } = e, l = zt(i0, n), s = k.useRef(null), a = $e(t, s, l.onViewportChange);
    return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
      /* @__PURE__ */ T.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: i
        }
      ),
      /* @__PURE__ */ T.jsx(
        De.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...o,
          ref: a,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ T.jsx("div", { ref: l.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
o0.displayName = i0;
var gn = "ScrollAreaScrollbar", rd = k.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, i = zt(gn, e.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: l } = i, s = e.orientation === "horizontal";
    return k.useEffect(() => (s ? o(!0) : l(!0), () => {
      s ? o(!1) : l(!1);
    }), [s, o, l]), i.type === "hover" ? /* @__PURE__ */ T.jsx(PE, { ...r, ref: t, forceMount: n }) : i.type === "scroll" ? /* @__PURE__ */ T.jsx(AE, { ...r, ref: t, forceMount: n }) : i.type === "auto" ? /* @__PURE__ */ T.jsx(l0, { ...r, ref: t, forceMount: n }) : i.type === "always" ? /* @__PURE__ */ T.jsx(id, { ...r, ref: t }) : null;
  }
);
rd.displayName = gn;
var PE = k.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = zt(gn, e.__scopeScrollArea), [o, l] = k.useState(!1);
  return k.useEffect(() => {
    const s = i.scrollArea;
    let a = 0;
    if (s) {
      const u = () => {
        window.clearTimeout(a), l(!0);
      }, f = () => {
        a = window.setTimeout(() => l(!1), i.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", u), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(a), s.removeEventListener("pointerenter", u), s.removeEventListener("pointerleave", f);
      };
    }
  }, [i.scrollArea, i.scrollHideDelay]), /* @__PURE__ */ T.jsx(Gr, { present: n || o, children: /* @__PURE__ */ T.jsx(
    l0,
    {
      "data-state": o ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), AE = k.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = zt(gn, e.__scopeScrollArea), o = e.orientation === "horizontal", l = va(() => a("SCROLL_END"), 100), [s, a] = EE("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return k.useEffect(() => {
    if (s === "idle") {
      const u = window.setTimeout(() => a("HIDE"), i.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [s, i.scrollHideDelay, a]), k.useEffect(() => {
    const u = i.viewport, f = o ? "scrollLeft" : "scrollTop";
    if (u) {
      let c = u[f];
      const p = () => {
        const d = u[f];
        c !== d && (a("SCROLL"), l()), c = d;
      };
      return u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
    }
  }, [i.viewport, o, a, l]), /* @__PURE__ */ T.jsx(Gr, { present: n || s !== "hidden", children: /* @__PURE__ */ T.jsx(
    id,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: ge(e.onPointerEnter, () => a("POINTER_ENTER")),
      onPointerLeave: ge(e.onPointerLeave, () => a("POINTER_LEAVE"))
    }
  ) });
}), l0 = k.forwardRef((e, t) => {
  const n = zt(gn, e.__scopeScrollArea), { forceMount: r, ...i } = e, [o, l] = k.useState(!1), s = e.orientation === "horizontal", a = va(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(s ? u : f);
    }
  }, 10);
  return Vi(n.viewport, a), Vi(n.content, a), /* @__PURE__ */ T.jsx(Gr, { present: r || o, children: /* @__PURE__ */ T.jsx(
    id,
    {
      "data-state": o ? "visible" : "hidden",
      ...i,
      ref: t
    }
  ) });
}), id = k.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, i = zt(gn, e.__scopeScrollArea), o = k.useRef(null), l = k.useRef(0), [s, a] = k.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = f0(s.viewport, s.content), f = {
    ...r,
    sizes: s,
    onSizesChange: a,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => o.current = p,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (p) => l.current = p
  };
  function c(p, d) {
    return OE(p, l.current, s, d);
  }
  return n === "horizontal" ? /* @__PURE__ */ T.jsx(
    RE,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && o.current) {
          const p = i.viewport.scrollLeft, d = ph(p, s, i.dir);
          o.current.style.transform = `translate3d(${d}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        i.viewport && (i.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        i.viewport && (i.viewport.scrollLeft = c(p, i.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ T.jsx(
    NE,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && o.current) {
          const p = i.viewport.scrollTop, d = ph(p, s);
          o.current.style.transform = `translate3d(0, ${d}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        i.viewport && (i.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        i.viewport && (i.viewport.scrollTop = c(p));
      }
    }
  ) : null;
}), RE = k.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...i } = e, o = zt(gn, e.__scopeScrollArea), [l, s] = k.useState(), a = k.useRef(null), u = $e(t, a, o.onScrollbarXChange);
  return k.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [a]), /* @__PURE__ */ T.jsx(
    a0,
    {
      "data-orientation": "horizontal",
      ...i,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ya(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, c) => {
        if (o.viewport) {
          const p = o.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(p), p0(p, c) && f.preventDefault();
        }
      },
      onResize: () => {
        a.current && o.viewport && l && r({
          content: o.viewport.scrollWidth,
          viewport: o.viewport.offsetWidth,
          scrollbar: {
            size: a.current.clientWidth,
            paddingStart: Bs(l.paddingLeft),
            paddingEnd: Bs(l.paddingRight)
          }
        });
      }
    }
  );
}), NE = k.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...i } = e, o = zt(gn, e.__scopeScrollArea), [l, s] = k.useState(), a = k.useRef(null), u = $e(t, a, o.onScrollbarYChange);
  return k.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [a]), /* @__PURE__ */ T.jsx(
    a0,
    {
      "data-orientation": "vertical",
      ...i,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": ya(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, c) => {
        if (o.viewport) {
          const p = o.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(p), p0(p, c) && f.preventDefault();
        }
      },
      onResize: () => {
        a.current && o.viewport && l && r({
          content: o.viewport.scrollHeight,
          viewport: o.viewport.offsetHeight,
          scrollbar: {
            size: a.current.clientHeight,
            paddingStart: Bs(l.paddingTop),
            paddingEnd: Bs(l.paddingBottom)
          }
        });
      }
    }
  );
}), [IE, s0] = n0(gn), a0 = k.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: i,
    onThumbChange: o,
    onThumbPointerUp: l,
    onThumbPointerDown: s,
    onThumbPositionChange: a,
    onDragScroll: u,
    onWheelScroll: f,
    onResize: c,
    ...p
  } = e, d = zt(gn, n), [m, g] = k.useState(null), w = $e(t, (I) => g(I)), h = k.useRef(null), y = k.useRef(""), v = d.viewport, C = r.content - r.viewport, P = tt(f), b = tt(a), A = va(c, 10);
  function N(I) {
    if (h.current) {
      const E = I.clientX - h.current.left, M = I.clientY - h.current.top;
      u({ x: E, y: M });
    }
  }
  return k.useEffect(() => {
    const I = (E) => {
      const M = E.target;
      (m == null ? void 0 : m.contains(M)) && P(E, C);
    };
    return document.addEventListener("wheel", I, { passive: !1 }), () => document.removeEventListener("wheel", I, { passive: !1 });
  }, [v, m, C, P]), k.useEffect(b, [r, b]), Vi(m, A), Vi(d.content, A), /* @__PURE__ */ T.jsx(
    IE,
    {
      scope: n,
      scrollbar: m,
      hasThumb: i,
      onThumbChange: tt(o),
      onThumbPointerUp: tt(l),
      onThumbPositionChange: b,
      onThumbPointerDown: tt(s),
      children: /* @__PURE__ */ T.jsx(
        De.div,
        {
          ...p,
          ref: w,
          style: { position: "absolute", ...p.style },
          onPointerDown: ge(e.onPointerDown, (I) => {
            I.button === 0 && (I.target.setPointerCapture(I.pointerId), h.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", d.viewport && (d.viewport.style.scrollBehavior = "auto"), N(I));
          }),
          onPointerMove: ge(e.onPointerMove, N),
          onPointerUp: ge(e.onPointerUp, (I) => {
            const E = I.target;
            E.hasPointerCapture(I.pointerId) && E.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = y.current, d.viewport && (d.viewport.style.scrollBehavior = ""), h.current = null;
          })
        }
      )
    }
  );
}), js = "ScrollAreaThumb", u0 = k.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, i = s0(js, e.__scopeScrollArea);
    return /* @__PURE__ */ T.jsx(Gr, { present: n || i.hasThumb, children: /* @__PURE__ */ T.jsx(_E, { ref: t, ...r }) });
  }
), _E = k.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...i } = e, o = zt(js, n), l = s0(js, n), { onThumbPositionChange: s } = l, a = $e(
      t,
      (c) => l.onThumbChange(c)
    ), u = k.useRef(void 0), f = va(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return k.useEffect(() => {
      const c = o.viewport;
      if (c) {
        const p = () => {
          if (f(), !u.current) {
            const d = DE(c, s);
            u.current = d, s();
          }
        };
        return s(), c.addEventListener("scroll", p), () => c.removeEventListener("scroll", p);
      }
    }, [o.viewport, f, s]), /* @__PURE__ */ T.jsx(
      De.div,
      {
        "data-state": l.hasThumb ? "visible" : "hidden",
        ...i,
        ref: a,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: ge(e.onPointerDownCapture, (c) => {
          const d = c.target.getBoundingClientRect(), m = c.clientX - d.left, g = c.clientY - d.top;
          l.onThumbPointerDown({ x: m, y: g });
        }),
        onPointerUp: ge(e.onPointerUp, l.onThumbPointerUp)
      }
    );
  }
);
u0.displayName = js;
var od = "ScrollAreaCorner", c0 = k.forwardRef(
  (e, t) => {
    const n = zt(od, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ T.jsx(LE, { ...e, ref: t }) : null;
  }
);
c0.displayName = od;
var LE = k.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, i = zt(od, n), [o, l] = k.useState(0), [s, a] = k.useState(0), u = !!(o && s);
  return Vi(i.scrollbarX, () => {
    var c;
    const f = ((c = i.scrollbarX) == null ? void 0 : c.offsetHeight) || 0;
    i.onCornerHeightChange(f), a(f);
  }), Vi(i.scrollbarY, () => {
    var c;
    const f = ((c = i.scrollbarY) == null ? void 0 : c.offsetWidth) || 0;
    i.onCornerWidthChange(f), l(f);
  }), u ? /* @__PURE__ */ T.jsx(
    De.div,
    {
      ...r,
      ref: t,
      style: {
        width: o,
        height: s,
        position: "absolute",
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Bs(e) {
  return e ? parseInt(e, 10) : 0;
}
function f0(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ya(e) {
  const t = f0(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function OE(e, t, n, r = "ltr") {
  const i = ya(n), o = i / 2, l = t || o, s = i - l, a = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, f = n.content - n.viewport, c = r === "ltr" ? [0, f] : [f * -1, 0];
  return d0([a, u], c)(e);
}
function ph(e, t, n = "ltr") {
  const r = ya(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, o = t.scrollbar.size - i, l = t.content - t.viewport, s = o - r, a = n === "ltr" ? [0, l] : [l * -1, 0], u = CE(e, a);
  return d0([0, l], [0, s])(u);
}
function d0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function p0(e, t) {
  return e > 0 && e < t;
}
var DE = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function i() {
    const o = { left: e.scrollLeft, top: e.scrollTop }, l = n.left !== o.left, s = n.top !== o.top;
    (l || s) && t(), n = o, r = window.requestAnimationFrame(i);
  }(), () => window.cancelAnimationFrame(r);
};
function va(e, t) {
  const n = tt(e), r = k.useRef(0);
  return k.useEffect(() => () => window.clearTimeout(r.current), []), k.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Vi(e, t) {
  const n = tt(t);
  _n(() => {
    let r = 0;
    if (e) {
      const i = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return i.observe(e), () => {
        window.cancelAnimationFrame(r), i.unobserve(e);
      };
    }
  }, [e, n]);
}
var h0 = r0, ME = o0, zE = c0;
const m0 = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ T.jsxs(h0, { ref: r, className: Re("relative overflow-hidden", e), ...n, children: [
  /* @__PURE__ */ T.jsx(ME, { className: "h-full w-full rounded-[inherit]", children: t }),
  /* @__PURE__ */ T.jsx(g0, {}),
  /* @__PURE__ */ T.jsx(zE, {})
] }));
m0.displayName = h0.displayName;
const g0 = k.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ T.jsx(
  rd,
  {
    ref: r,
    orientation: t,
    className: Re(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ T.jsx(u0, { className: "relative flex-1 rounded-full bg-border" })
  }
));
g0.displayName = rd.displayName;
function FE(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const jE = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, BE = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, $E = {};
function hh(e, t) {
  return ($E.jsx ? BE : jE).test(e);
}
const UE = /[ \t\n\f\r]/g;
function HE(e) {
  return typeof e == "object" ? e.type === "text" ? mh(e.value) : !1 : mh(e);
}
function mh(e) {
  return e.replace(UE, "") === "";
}
class hl {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
hl.prototype.normal = {};
hl.prototype.property = {};
hl.prototype.space = void 0;
function y0(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new hl(n, r, t);
}
function _c(e) {
  return e.toLowerCase();
}
class ht {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
ht.prototype.attribute = "";
ht.prototype.booleanish = !1;
ht.prototype.boolean = !1;
ht.prototype.commaOrSpaceSeparated = !1;
ht.prototype.commaSeparated = !1;
ht.prototype.defined = !1;
ht.prototype.mustUseProperty = !1;
ht.prototype.number = !1;
ht.prototype.overloadedBoolean = !1;
ht.prototype.property = "";
ht.prototype.spaceSeparated = !1;
ht.prototype.space = void 0;
let VE = 0;
const te = Zr(), Ie = Zr(), Lc = Zr(), j = Zr(), me = Zr(), Ei = Zr(), vt = Zr();
function Zr() {
  return 2 ** ++VE;
}
const Oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: te,
  booleanish: Ie,
  commaOrSpaceSeparated: vt,
  commaSeparated: Ei,
  number: j,
  overloadedBoolean: Lc,
  spaceSeparated: me
}, Symbol.toStringTag, { value: "Module" })), uu = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Oc)
);
class ld extends ht {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), gh(this, "space", i), typeof r == "number")
      for (; ++o < uu.length; ) {
        const l = uu[o];
        gh(this, uu[o], (r & Oc[l]) === Oc[l]);
      }
  }
}
ld.prototype.defined = !0;
function gh(e, t, n) {
  n && (e[t] = n);
}
function eo(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new ld(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[_c(r)] = r, n[_c(o.attribute)] = r;
  }
  return new hl(t, n, e.space);
}
const v0 = eo({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ie,
    ariaAutoComplete: null,
    ariaBusy: Ie,
    ariaChecked: Ie,
    ariaColCount: j,
    ariaColIndex: j,
    ariaColSpan: j,
    ariaControls: me,
    ariaCurrent: null,
    ariaDescribedBy: me,
    ariaDetails: null,
    ariaDisabled: Ie,
    ariaDropEffect: me,
    ariaErrorMessage: null,
    ariaExpanded: Ie,
    ariaFlowTo: me,
    ariaGrabbed: Ie,
    ariaHasPopup: null,
    ariaHidden: Ie,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: me,
    ariaLevel: j,
    ariaLive: null,
    ariaModal: Ie,
    ariaMultiLine: Ie,
    ariaMultiSelectable: Ie,
    ariaOrientation: null,
    ariaOwns: me,
    ariaPlaceholder: null,
    ariaPosInSet: j,
    ariaPressed: Ie,
    ariaReadOnly: Ie,
    ariaRelevant: null,
    ariaRequired: Ie,
    ariaRoleDescription: me,
    ariaRowCount: j,
    ariaRowIndex: j,
    ariaRowSpan: j,
    ariaSelected: Ie,
    ariaSetSize: j,
    ariaSort: null,
    ariaValueMax: j,
    ariaValueMin: j,
    ariaValueNow: j,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function w0(e, t) {
  return t in e ? e[t] : t;
}
function x0(e, t) {
  return w0(e, t.toLowerCase());
}
const WE = eo({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Ei,
    acceptCharset: me,
    accessKey: me,
    action: null,
    allow: null,
    allowFullScreen: te,
    allowPaymentRequest: te,
    allowUserMedia: te,
    alt: null,
    as: null,
    async: te,
    autoCapitalize: null,
    autoComplete: me,
    autoFocus: te,
    autoPlay: te,
    blocking: me,
    capture: null,
    charSet: null,
    checked: te,
    cite: null,
    className: me,
    cols: j,
    colSpan: null,
    content: null,
    contentEditable: Ie,
    controls: te,
    controlsList: me,
    coords: j | Ei,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: te,
    defer: te,
    dir: null,
    dirName: null,
    disabled: te,
    download: Lc,
    draggable: Ie,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: te,
    formTarget: null,
    headers: me,
    height: j,
    hidden: Lc,
    high: j,
    href: null,
    hrefLang: null,
    htmlFor: me,
    httpEquiv: me,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: te,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: te,
    itemId: null,
    itemProp: me,
    itemRef: me,
    itemScope: te,
    itemType: me,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: te,
    low: j,
    manifest: null,
    max: null,
    maxLength: j,
    media: null,
    method: null,
    min: null,
    minLength: j,
    multiple: te,
    muted: te,
    name: null,
    nonce: null,
    noModule: te,
    noValidate: te,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: te,
    optimum: j,
    pattern: null,
    ping: me,
    placeholder: null,
    playsInline: te,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: te,
    referrerPolicy: null,
    rel: me,
    required: te,
    reversed: te,
    rows: j,
    rowSpan: j,
    sandbox: me,
    scope: null,
    scoped: te,
    seamless: te,
    selected: te,
    shadowRootClonable: te,
    shadowRootDelegatesFocus: te,
    shadowRootMode: null,
    shape: null,
    size: j,
    sizes: null,
    slot: null,
    span: j,
    spellCheck: Ie,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: j,
    step: null,
    style: null,
    tabIndex: j,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: te,
    useMap: null,
    value: Ie,
    width: j,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: me,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: j,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: j,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: te,
    // Lists. Use CSS to reduce space between items instead
    declare: te,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: j,
    // `<img>` and `<object>`
    leftMargin: j,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: j,
    // `<body>`
    marginWidth: j,
    // `<body>`
    noResize: te,
    // `<frame>`
    noHref: te,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: te,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: te,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: j,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ie,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: j,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: j,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: te,
    disableRemotePlayback: te,
    prefix: null,
    property: null,
    results: j,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: x0
}), QE = eo({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: vt,
    accentHeight: j,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: j,
    amplitude: j,
    arabicForm: null,
    ascent: j,
    attributeName: null,
    attributeType: null,
    azimuth: j,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: j,
    by: null,
    calcMode: null,
    capHeight: j,
    className: me,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: j,
    diffuseConstant: j,
    direction: null,
    display: null,
    dur: null,
    divisor: j,
    dominantBaseline: null,
    download: te,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: j,
    enableBackground: null,
    end: null,
    event: null,
    exponent: j,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: j,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Ei,
    g2: Ei,
    glyphName: Ei,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: j,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: j,
    horizOriginX: j,
    horizOriginY: j,
    id: null,
    ideographic: j,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: j,
    k: j,
    k1: j,
    k2: j,
    k3: j,
    k4: j,
    kernelMatrix: vt,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: j,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: j,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: j,
    overlineThickness: j,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: j,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: me,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: j,
    pointsAtY: j,
    pointsAtZ: j,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: vt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: vt,
    rev: vt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: vt,
    requiredFeatures: vt,
    requiredFonts: vt,
    requiredFormats: vt,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: j,
    specularExponent: j,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: j,
    strikethroughThickness: j,
    string: null,
    stroke: null,
    strokeDashArray: vt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: j,
    strokeOpacity: j,
    strokeWidth: null,
    style: null,
    surfaceScale: j,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: vt,
    tabIndex: j,
    tableValues: null,
    target: null,
    targetX: j,
    targetY: j,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: vt,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: j,
    underlineThickness: j,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: j,
    values: null,
    vAlphabetic: j,
    vMathematical: j,
    vectorEffect: null,
    vHanging: j,
    vIdeographic: j,
    version: null,
    vertAdvY: j,
    vertOriginX: j,
    vertOriginY: j,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: j,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: w0
}), k0 = eo({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), b0 = eo({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: x0
}), S0 = eo({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), qE = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, YE = /[A-Z]/g, yh = /-[a-z]/g, KE = /^data[-\w.:]+$/i;
function XE(e, t) {
  const n = _c(t);
  let r = t, i = ht;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && KE.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(yh, ZE);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!yh.test(o)) {
        let l = o.replace(YE, GE);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = ld;
  }
  return new i(r, t);
}
function GE(e) {
  return "-" + e.toLowerCase();
}
function ZE(e) {
  return e.charAt(1).toUpperCase();
}
const JE = y0([v0, WE, k0, b0, S0], "html"), sd = y0([v0, QE, k0, b0, S0], "svg");
function eT(e) {
  return e.join(" ").trim();
}
var ad = {}, vh = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, tT = /\n/g, nT = /^\s*/, rT = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, iT = /^:\s*/, oT = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, lT = /^[;\s]*/, sT = /^\s+|\s+$/g, aT = `
`, wh = "/", xh = "*", Nr = "", uT = "comment", cT = "declaration";
function fT(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(m) {
    var g = m.match(tT);
    g && (n += g.length);
    var w = m.lastIndexOf(aT);
    r = ~w ? m.length - w : r + m.length;
  }
  function o() {
    var m = { line: n, column: r };
    return function(g) {
      return g.position = new l(m), u(), g;
    };
  }
  function l(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function s(m) {
    var g = new Error(
      t.source + ":" + n + ":" + r + ": " + m
    );
    if (g.reason = m, g.filename = t.source, g.line = n, g.column = r, g.source = e, !t.silent) throw g;
  }
  function a(m) {
    var g = m.exec(e);
    if (g) {
      var w = g[0];
      return i(w), e = e.slice(w.length), g;
    }
  }
  function u() {
    a(nT);
  }
  function f(m) {
    var g;
    for (m = m || []; g = c(); )
      g !== !1 && m.push(g);
    return m;
  }
  function c() {
    var m = o();
    if (!(wh != e.charAt(0) || xh != e.charAt(1))) {
      for (var g = 2; Nr != e.charAt(g) && (xh != e.charAt(g) || wh != e.charAt(g + 1)); )
        ++g;
      if (g += 2, Nr === e.charAt(g - 1))
        return s("End of comment missing");
      var w = e.slice(2, g - 2);
      return r += 2, i(w), e = e.slice(g), r += 2, m({
        type: uT,
        comment: w
      });
    }
  }
  function p() {
    var m = o(), g = a(rT);
    if (g) {
      if (c(), !a(iT)) return s("property missing ':'");
      var w = a(oT), h = m({
        type: cT,
        property: kh(g[0].replace(vh, Nr)),
        value: w ? kh(w[0].replace(vh, Nr)) : Nr
      });
      return a(lT), h;
    }
  }
  function d() {
    var m = [];
    f(m);
    for (var g; g = p(); )
      g !== !1 && (m.push(g), f(m));
    return m;
  }
  return u(), d();
}
function kh(e) {
  return e ? e.replace(sT, Nr) : Nr;
}
var dT = fT, pT = as && as.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ad, "__esModule", { value: !0 });
ad.default = mT;
const hT = pT(dT);
function mT(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, hT.default)(e), i = typeof t == "function";
  return r.forEach((o) => {
    if (o.type !== "declaration")
      return;
    const { property: l, value: s } = o;
    i ? t(l, s, o) : s && (n = n || {}, n[l] = s);
  }), n;
}
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.camelCase = void 0;
var gT = /^--[a-zA-Z0-9_-]+$/, yT = /-([a-z])/g, vT = /^[^-]+$/, wT = /^-(webkit|moz|ms|o|khtml)-/, xT = /^-(ms)-/, kT = function(e) {
  return !e || vT.test(e) || gT.test(e);
}, bT = function(e, t) {
  return t.toUpperCase();
}, bh = function(e, t) {
  return "".concat(t, "-");
}, ST = function(e, t) {
  return t === void 0 && (t = {}), kT(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(xT, bh) : e = e.replace(wT, bh), e.replace(yT, bT));
};
wa.camelCase = ST;
var CT = as && as.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, ET = CT(ad), TT = wa;
function Dc(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, ET.default)(e, function(r, i) {
    r && i && (n[(0, TT.camelCase)(r, t)] = i);
  }), n;
}
Dc.default = Dc;
var PT = Dc;
const AT = /* @__PURE__ */ Ws(PT), C0 = E0("end"), ud = E0("start");
function E0(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function RT(e) {
  const t = ud(e), n = C0(e);
  if (t && n)
    return { start: t, end: n };
}
function Io(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Sh(e.position) : "start" in e || "end" in e ? Sh(e) : "line" in e || "column" in e ? Mc(e) : "";
}
function Mc(e) {
  return Ch(e && e.line) + ":" + Ch(e && e.column);
}
function Sh(e) {
  return Mc(e && e.start) + "-" + Mc(e && e.end);
}
function Ch(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ke extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, l = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (l = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const a = r.indexOf(":");
      a === -1 ? o.ruleId = r : (o.source = r.slice(0, a), o.ruleId = r.slice(a + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const a = o.ancestors[o.ancestors.length - 1];
      a && (o.place = a.position);
    }
    const s = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = s ? s.line : void 0, this.name = Io(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Ke.prototype.file = "";
Ke.prototype.name = "";
Ke.prototype.reason = "";
Ke.prototype.message = "";
Ke.prototype.stack = "";
Ke.prototype.column = void 0;
Ke.prototype.line = void 0;
Ke.prototype.ancestors = void 0;
Ke.prototype.cause = void 0;
Ke.prototype.fatal = void 0;
Ke.prototype.place = void 0;
Ke.prototype.ruleId = void 0;
Ke.prototype.source = void 0;
const cd = {}.hasOwnProperty, NT = /* @__PURE__ */ new Map(), IT = /[A-Z]/g, _T = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), LT = /* @__PURE__ */ new Set(["td", "th"]), T0 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function OT(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = UT(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = $T(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? sd : JE,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = P0(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function P0(e, t, n) {
  if (t.type === "element")
    return DT(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return MT(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return FT(e, t, n);
  if (t.type === "mdxjsEsm")
    return zT(e, t);
  if (t.type === "root")
    return jT(e, t, n);
  if (t.type === "text")
    return BT(e, t);
}
function DT(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = sd, e.schema = i), e.ancestors.push(t);
  const o = R0(e, t.tagName, !1), l = HT(e, t);
  let s = dd(e, t);
  return _T.has(t.tagName) && (s = s.filter(function(a) {
    return typeof a == "string" ? !HE(a) : !0;
  })), A0(e, l, o, t), fd(l, s), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function MT(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  tl(e, t.position);
}
function zT(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  tl(e, t.position);
}
function FT(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = sd, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : R0(e, t.name, !0), l = VT(e, t), s = dd(e, t);
  return A0(e, l, o, t), fd(l, s), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function jT(e, t, n) {
  const r = {};
  return fd(r, dd(e, t)), e.create(t, e.Fragment, r, n);
}
function BT(e, t) {
  return t.value;
}
function A0(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function fd(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function $T(e, t, n) {
  return r;
  function r(i, o, l, s) {
    const u = Array.isArray(l.children) ? n : t;
    return s ? u(o, l, s) : u(o, l);
  }
}
function UT(e, t) {
  return n;
  function n(r, i, o, l) {
    const s = Array.isArray(o.children), a = ud(r);
    return t(
      i,
      o,
      l,
      s,
      {
        columnNumber: a ? a.column - 1 : void 0,
        fileName: e,
        lineNumber: a ? a.line : void 0
      },
      void 0
    );
  }
}
function HT(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && cd.call(t.properties, i)) {
      const o = WT(e, i, t.properties[i]);
      if (o) {
        const [l, s] = o;
        e.tableCellAlignToStyle && l === "align" && typeof s == "string" && LT.has(t.tagName) ? r = s : n[l] = s;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function VT(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const s = l.properties[0];
        s.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        tl(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, o = e.evaluater.evaluateExpression(s.expression);
        } else
          tl(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function dd(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : NT;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let l;
    if (e.passKeys) {
      const a = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (a) {
        const u = i.get(a) || 0;
        l = a + "-" + u, i.set(a, u + 1);
      }
    }
    const s = P0(e, o, l);
    s !== void 0 && n.push(s);
  }
  return n;
}
function WT(e, t, n) {
  const r = XE(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? FE(n) : eT(n)), r.property === "style") {
      let i = typeof n == "object" ? n : QT(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = qT(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? qE[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function QT(e, t) {
  try {
    return AT(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new Ke("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = T0 + "#cannot-parse-style-attribute", i;
  }
}
function R0(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const s = hh(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: s,
        computed: !!(o && s.type === "Literal"),
        optional: !1
      } : s;
    }
    r = l;
  } else
    r = hh(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return cd.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  tl(e);
}
function tl(e, t) {
  const n = new Ke(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = T0 + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function qT(e) {
  const t = {};
  let n;
  for (n in e)
    cd.call(e, n) && (t[YT(n)] = e[n]);
  return t;
}
function YT(e) {
  let t = e.replace(IT, KT);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function KT(e) {
  return "-" + e.toLowerCase();
}
const cu = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, XT = {};
function pd(e, t) {
  const n = XT, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return N0(e, r, i);
}
function N0(e, t, n) {
  if (GT(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Eh(e.children, t, n);
  }
  return Array.isArray(e) ? Eh(e, t, n) : "";
}
function Eh(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = N0(e[i], t, n);
  return r.join("");
}
function GT(e) {
  return !!(e && typeof e == "object");
}
const Th = document.createElement("i");
function hd(e) {
  const t = "&" + e + ";";
  Th.innerHTML = t;
  const n = Th.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Ct(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
function _t(e, t) {
  return e.length > 0 ? (Ct(e, e.length, 0, t), e) : t;
}
const Ph = {}.hasOwnProperty;
function I0(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    ZT(t, e[n]);
  return t;
}
function ZT(e, t) {
  let n;
  for (n in t) {
    const i = (Ph.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        Ph.call(i, l) || (i[l] = []);
        const s = o[l];
        JT(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function JT(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ct(e, 0, 0, r);
}
function _0(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Zt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const nt = br(/[A-Za-z]/), qe = br(/[\dA-Za-z]/), eP = br(/[#-'*+\--9=?A-Z^-~]/);
function $s(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const zc = br(/\d/), tP = br(/[\dA-Fa-f]/), nP = br(/[!-/:-@[-`{-~]/);
function K(e) {
  return e !== null && e < -2;
}
function he(e) {
  return e !== null && (e < 0 || e === 32);
}
function re(e) {
  return e === -2 || e === -1 || e === 32;
}
const xa = br(new RegExp("\\p{P}|\\p{S}", "u")), Yr = br(/\s/);
function br(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function to(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && qe(e.charCodeAt(n + 1)) && qe(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const s = e.charCodeAt(n + 1);
      o < 56320 && s > 56319 && s < 57344 ? (l = String.fromCharCode(o, s), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function se(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(a) {
    return re(a) ? (e.enter(n), s(a)) : t(a);
  }
  function s(a) {
    return re(a) && o++ < i ? (e.consume(a), s) : (e.exit(n), t(a));
  }
}
const rP = {
  tokenize: iP
};
function iP(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), se(e, t, "linePrefix");
  }
  function i(s) {
    return e.enter("paragraph"), o(s);
  }
  function o(s) {
    const a = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = a), n = a, l(s);
  }
  function l(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return K(s) ? (e.consume(s), e.exit("chunkText"), o) : (e.consume(s), l);
  }
}
const oP = {
  tokenize: lP
}, Ah = {
  tokenize: sP
};
function lP(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return s;
  function s(v) {
    if (r < n.length) {
      const C = n[r];
      return t.containerState = C[1], e.attempt(C[0].continuation, a, u)(v);
    }
    return u(v);
  }
  function a(v) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && y();
      const C = t.events.length;
      let P = C, b;
      for (; P--; )
        if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
          b = t.events[P][1].end;
          break;
        }
      h(r);
      let A = C;
      for (; A < t.events.length; )
        t.events[A][1].end = {
          ...b
        }, A++;
      return Ct(t.events, P + 1, 0, t.events.slice(C)), t.events.length = A, u(v);
    }
    return s(v);
  }
  function u(v) {
    if (r === n.length) {
      if (!i)
        return p(v);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(v);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Ah, f, c)(v);
  }
  function f(v) {
    return i && y(), h(r), p(v);
  }
  function c(v) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, m(v);
  }
  function p(v) {
    return t.containerState = {}, e.attempt(Ah, d, m)(v);
  }
  function d(v) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(v);
  }
  function m(v) {
    if (v === null) {
      i && y(), h(0), e.consume(v);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), g(v);
  }
  function g(v) {
    if (v === null) {
      w(e.exit("chunkFlow"), !0), h(0), e.consume(v);
      return;
    }
    return K(v) ? (e.consume(v), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(v), g);
  }
  function w(v, C) {
    const P = t.sliceStream(v);
    if (C && P.push(null), v.previous = o, o && (o.next = v), o = v, i.defineSkip(v.start), i.write(P), t.parser.lazy[v.start.line]) {
      let b = i.events.length;
      for (; b--; )
        if (
          // The token starts before the line ending…
          i.events[b][1].start.offset < l && // …and either is not ended yet…
          (!i.events[b][1].end || // …or ends after it.
          i.events[b][1].end.offset > l)
        )
          return;
      const A = t.events.length;
      let N = A, I, E;
      for (; N--; )
        if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
          if (I) {
            E = t.events[N][1].end;
            break;
          }
          I = !0;
        }
      for (h(r), b = A; b < t.events.length; )
        t.events[b][1].end = {
          ...E
        }, b++;
      Ct(t.events, N + 1, 0, t.events.slice(A)), t.events.length = b;
    }
  }
  function h(v) {
    let C = n.length;
    for (; C-- > v; ) {
      const P = n[C];
      t.containerState = P[1], P[0].exit.call(t, e);
    }
    n.length = v;
  }
  function y() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function sP(e, t, n) {
  return se(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Wi(e) {
  if (e === null || he(e) || Yr(e))
    return 1;
  if (xa(e))
    return 2;
}
function ka(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const Fc = {
  name: "attention",
  resolveAll: aP,
  tokenize: uP
};
function aP(e, t) {
  let n = -1, r, i, o, l, s, a, u, f;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...e[r][1].end
          }, p = {
            ...e[n][1].start
          };
          Rh(c, -a), Rh(p, a), l = {
            type: a > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...e[r][1].end
            }
          }, s = {
            type: a > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: p
          }, o = {
            type: a > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: a > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...s.end
            }
          }, e[r][1].end = {
            ...l.start
          }, e[n][1].start = {
            ...s.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = _t(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = _t(u, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", o, t]]), u = _t(u, ka(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = _t(u, [["exit", o, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, u = _t(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : f = 0, Ct(e, r - 1, n - r + 3, u), n = r + u.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function uP(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Wi(r);
  let o;
  return l;
  function l(a) {
    return o = a, e.enter("attentionSequence"), s(a);
  }
  function s(a) {
    if (a === o)
      return e.consume(a), s;
    const u = e.exit("attentionSequence"), f = Wi(a), c = !f || f === 2 && i || n.includes(a), p = !i || i === 2 && f || n.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !p)), u._close = !!(o === 42 ? p : p && (f || !c)), t(a);
  }
}
function Rh(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const cP = {
  name: "autolink",
  tokenize: fP
};
function fP(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(d) {
    return nt(d) ? (e.consume(d), l) : d === 64 ? n(d) : u(d);
  }
  function l(d) {
    return d === 43 || d === 45 || d === 46 || qe(d) ? (r = 1, s(d)) : u(d);
  }
  function s(d) {
    return d === 58 ? (e.consume(d), r = 0, a) : (d === 43 || d === 45 || d === 46 || qe(d)) && r++ < 32 ? (e.consume(d), s) : (r = 0, u(d));
  }
  function a(d) {
    return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || $s(d) ? n(d) : (e.consume(d), a);
  }
  function u(d) {
    return d === 64 ? (e.consume(d), f) : eP(d) ? (e.consume(d), u) : n(d);
  }
  function f(d) {
    return qe(d) ? c(d) : n(d);
  }
  function c(d) {
    return d === 46 ? (e.consume(d), r = 0, f) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(d);
  }
  function p(d) {
    if ((d === 45 || qe(d)) && r++ < 63) {
      const m = d === 45 ? p : c;
      return e.consume(d), m;
    }
    return n(d);
  }
}
const ml = {
  partial: !0,
  tokenize: dP
};
function dP(e, t, n) {
  return r;
  function r(o) {
    return re(o) ? se(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || K(o) ? t(o) : n(o);
  }
}
const L0 = {
  continuation: {
    tokenize: hP
  },
  exit: mP,
  name: "blockQuote",
  tokenize: pP
};
function pP(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return n(l);
  }
  function o(l) {
    return re(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function hP(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return re(l) ? se(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(L0, t, n)(l);
  }
}
function mP(e) {
  e.exit("blockQuote");
}
const O0 = {
  name: "characterEscape",
  tokenize: gP
};
function gP(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return nP(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const D0 = {
  name: "characterReference",
  tokenize: yP
};
function yP(e, t, n) {
  const r = this;
  let i = 0, o, l;
  return s;
  function s(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), a;
  }
  function a(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, l = qe, f(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = tP, f) : (e.enter("characterReferenceValue"), o = 7, l = zc, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return l === qe && !hd(r.sliceSerialize(p)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(c) && i++ < o ? (e.consume(c), f) : n(c);
  }
}
const Nh = {
  partial: !0,
  tokenize: wP
}, Ih = {
  concrete: !0,
  name: "codeFenced",
  tokenize: vP
};
function vP(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: P
  };
  let o = 0, l = 0, s;
  return a;
  function a(b) {
    return u(b);
  }
  function u(b) {
    const A = r.events[r.events.length - 1];
    return o = A && A[1].type === "linePrefix" ? A[2].sliceSerialize(A[1], !0).length : 0, s = b, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(b);
  }
  function f(b) {
    return b === s ? (l++, e.consume(b), f) : l < 3 ? n(b) : (e.exit("codeFencedFenceSequence"), re(b) ? se(e, c, "whitespace")(b) : c(b));
  }
  function c(b) {
    return b === null || K(b) ? (e.exit("codeFencedFence"), r.interrupt ? t(b) : e.check(Nh, g, C)(b)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(b));
  }
  function p(b) {
    return b === null || K(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(b)) : re(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), se(e, d, "whitespace")(b)) : b === 96 && b === s ? n(b) : (e.consume(b), p);
  }
  function d(b) {
    return b === null || K(b) ? c(b) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(b));
  }
  function m(b) {
    return b === null || K(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(b)) : b === 96 && b === s ? n(b) : (e.consume(b), m);
  }
  function g(b) {
    return e.attempt(i, C, w)(b);
  }
  function w(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), h;
  }
  function h(b) {
    return o > 0 && re(b) ? se(e, y, "linePrefix", o + 1)(b) : y(b);
  }
  function y(b) {
    return b === null || K(b) ? e.check(Nh, g, C)(b) : (e.enter("codeFlowValue"), v(b));
  }
  function v(b) {
    return b === null || K(b) ? (e.exit("codeFlowValue"), y(b)) : (e.consume(b), v);
  }
  function C(b) {
    return e.exit("codeFenced"), t(b);
  }
  function P(b, A, N) {
    let I = 0;
    return E;
    function E(U) {
      return b.enter("lineEnding"), b.consume(U), b.exit("lineEnding"), M;
    }
    function M(U) {
      return b.enter("codeFencedFence"), re(U) ? se(b, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : L(U);
    }
    function L(U) {
      return U === s ? (b.enter("codeFencedFenceSequence"), H(U)) : N(U);
    }
    function H(U) {
      return U === s ? (I++, b.consume(U), H) : I >= l ? (b.exit("codeFencedFenceSequence"), re(U) ? se(b, z, "whitespace")(U) : z(U)) : N(U);
    }
    function z(U) {
      return U === null || K(U) ? (b.exit("codeFencedFence"), A(U)) : N(U);
    }
  }
}
function wP(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const fu = {
  name: "codeIndented",
  tokenize: kP
}, xP = {
  partial: !0,
  tokenize: bP
};
function kP(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), se(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? a(u) : K(u) ? e.attempt(xP, l, a)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || K(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), s);
  }
  function a(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function bP(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : K(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : se(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : K(l) ? i(l) : n(l);
  }
}
const SP = {
  name: "codeText",
  previous: EP,
  resolve: CP,
  tokenize: TP
};
function CP(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function EP(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function TP(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(c);
  }
  function s(c) {
    return c === 96 ? (e.consume(c), r++, s) : (e.exit("codeTextSequence"), a(c));
  }
  function a(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), a) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, f(c)) : K(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), a) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || K(c) ? (e.exit("codeTextData"), a(c)) : (e.consume(c), u);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", u(c));
  }
}
class PP {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && ho(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), ho(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), ho(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        ho(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        ho(this.left, n.reverse());
      }
  }
}
function ho(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function M0(e) {
  const t = {};
  let n = -1, r, i, o, l, s, a, u;
  const f = new PP(e);
  for (; ++n < f.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = f.get(n), n && r[1].type === "chunkFlow" && f.get(n - 1)[1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, o = 0, o < a.length && a[o][1].type === "lineEndingBlank" && (o += 2), o < a.length && a[o][1].type === "content"))
      for (; ++o < a.length && a[o][1].type !== "content"; )
        a[o][1].type === "chunkText" && (a[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, AP(f, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (l = f.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (f.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...f.get(i)[1].start
      }, s = f.slice(i, n), s.unshift(r), f.splice(i, n - i + 1, s));
    }
  }
  return Ct(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !u;
}
function AP(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const s = l.events, a = [], u = {};
  let f, c, p = -1, d = n, m = 0, g = 0;
  const w = [g];
  for (; d; ) {
    for (; e.get(++i)[1] !== d; )
      ;
    o.push(i), d._tokenizer || (f = r.sliceStream(d), d.next || f.push(null), c && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(f), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = d, d = d.next;
  }
  for (d = n; ++p < s.length; )
    // Find a void token that includes a break.
    s[p][0] === "exit" && s[p - 1][0] === "enter" && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (g = p + 1, w.push(g), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (l.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : w.pop(), p = w.length; p--; ) {
    const h = s.slice(w[p], w[p + 1]), y = o.pop();
    a.push([y, y + h.length - 1]), e.splice(y, 2, h);
  }
  for (a.reverse(), p = -1; ++p < a.length; )
    u[m + a[p][0]] = m + a[p][1], m += a[p][1] - a[p][0] - 1;
  return u;
}
const RP = {
  resolve: IP,
  tokenize: _P
}, NP = {
  partial: !0,
  tokenize: LP
};
function IP(e) {
  return M0(e), e;
}
function _P(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(s);
  }
  function i(s) {
    return s === null ? o(s) : K(s) ? e.check(NP, l, o)(s) : (e.consume(s), i);
  }
  function o(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function l(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function LP(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), se(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || K(l))
      return n(l);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function z0(e, t, n, r, i, o, l, s, a) {
  const u = a || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(h) {
    return h === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(h), e.exit(o), p) : h === null || h === 32 || h === 41 || $s(h) ? n(h) : (e.enter(r), e.enter(l), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), g(h));
  }
  function p(h) {
    return h === 62 ? (e.enter(o), e.consume(h), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), d(h));
  }
  function d(h) {
    return h === 62 ? (e.exit("chunkString"), e.exit(s), p(h)) : h === null || h === 60 || K(h) ? n(h) : (e.consume(h), h === 92 ? m : d);
  }
  function m(h) {
    return h === 60 || h === 62 || h === 92 ? (e.consume(h), d) : d(h);
  }
  function g(h) {
    return !f && (h === null || h === 41 || he(h)) ? (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(h)) : f < u && h === 40 ? (e.consume(h), f++, g) : h === 41 ? (e.consume(h), f--, g) : h === null || h === 32 || h === 40 || $s(h) ? n(h) : (e.consume(h), h === 92 ? w : g);
  }
  function w(h) {
    return h === 40 || h === 41 || h === 92 ? (e.consume(h), g) : g(h);
  }
}
function F0(e, t, n, r, i, o) {
  const l = this;
  let s = 0, a;
  return u;
  function u(d) {
    return e.enter(r), e.enter(i), e.consume(d), e.exit(i), e.enter(o), f;
  }
  function f(d) {
    return s > 999 || d === null || d === 91 || d === 93 && !a || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !s && "_hiddenFootnoteSupport" in l.parser.constructs ? n(d) : d === 93 ? (e.exit(o), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : K(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === null || d === 91 || d === 93 || K(d) || s++ > 999 ? (e.exit("chunkString"), f(d)) : (e.consume(d), a || (a = !re(d)), d === 92 ? p : c);
  }
  function p(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), s++, c) : c(d);
  }
}
function j0(e, t, n, r, i, o) {
  let l;
  return s;
  function s(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), l = p === 40 ? 41 : p, a) : n(p);
  }
  function a(p) {
    return p === l ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), u(p));
  }
  function u(p) {
    return p === l ? (e.exit(o), a(l)) : p === null ? n(p) : K(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), se(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === l || p === null || K(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : f);
  }
  function c(p) {
    return p === l || p === 92 ? (e.consume(p), f) : f(p);
  }
}
function _o(e, t) {
  let n;
  return r;
  function r(i) {
    return K(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : re(i) ? se(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const OP = {
  name: "definition",
  tokenize: MP
}, DP = {
  partial: !0,
  tokenize: zP
};
function MP(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(d) {
    return e.enter("definition"), l(d);
  }
  function l(d) {
    return F0.call(
      r,
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function s(d) {
    return i = Zt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), a) : n(d);
  }
  function a(d) {
    return he(d) ? _o(e, u)(d) : u(d);
  }
  function u(d) {
    return z0(
      e,
      f,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function f(d) {
    return e.attempt(DP, c, c)(d);
  }
  function c(d) {
    return re(d) ? se(e, p, "whitespace")(d) : p(d);
  }
  function p(d) {
    return d === null || K(d) ? (e.exit("definition"), r.parser.defined.push(i), t(d)) : n(d);
  }
}
function zP(e, t, n) {
  return r;
  function r(s) {
    return he(s) ? _o(e, i)(s) : n(s);
  }
  function i(s) {
    return j0(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function o(s) {
    return re(s) ? se(e, l, "whitespace")(s) : l(s);
  }
  function l(s) {
    return s === null || K(s) ? t(s) : n(s);
  }
}
const FP = {
  name: "hardBreakEscape",
  tokenize: jP
};
function jP(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return K(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const BP = {
  name: "headingAtx",
  resolve: $P,
  tokenize: UP
};
function $P(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Ct(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function UP(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), l(f);
  }
  function l(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), l) : f === null || he(f) ? (e.exit("atxHeadingSequence"), s(f)) : n(f);
  }
  function s(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), a(f)) : f === null || K(f) ? (e.exit("atxHeading"), t(f)) : re(f) ? se(e, s, "whitespace")(f) : (e.enter("atxHeadingText"), u(f));
  }
  function a(f) {
    return f === 35 ? (e.consume(f), a) : (e.exit("atxHeadingSequence"), s(f));
  }
  function u(f) {
    return f === null || f === 35 || he(f) ? (e.exit("atxHeadingText"), s(f)) : (e.consume(f), u);
  }
}
const HP = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], _h = ["pre", "script", "style", "textarea"], VP = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: qP,
  tokenize: YP
}, WP = {
  partial: !0,
  tokenize: XP
}, QP = {
  partial: !0,
  tokenize: KP
};
function qP(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function YP(e, t, n) {
  const r = this;
  let i, o, l, s, a;
  return u;
  function u(S) {
    return f(S);
  }
  function f(S) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(S), c;
  }
  function c(S) {
    return S === 33 ? (e.consume(S), p) : S === 47 ? (e.consume(S), o = !0, g) : S === 63 ? (e.consume(S), i = 3, r.interrupt ? t : x) : nt(S) ? (e.consume(S), l = String.fromCharCode(S), w) : n(S);
  }
  function p(S) {
    return S === 45 ? (e.consume(S), i = 2, d) : S === 91 ? (e.consume(S), i = 5, s = 0, m) : nt(S) ? (e.consume(S), i = 4, r.interrupt ? t : x) : n(S);
  }
  function d(S) {
    return S === 45 ? (e.consume(S), r.interrupt ? t : x) : n(S);
  }
  function m(S) {
    const X = "CDATA[";
    return S === X.charCodeAt(s++) ? (e.consume(S), s === X.length ? r.interrupt ? t : L : m) : n(S);
  }
  function g(S) {
    return nt(S) ? (e.consume(S), l = String.fromCharCode(S), w) : n(S);
  }
  function w(S) {
    if (S === null || S === 47 || S === 62 || he(S)) {
      const X = S === 47, de = l.toLowerCase();
      return !X && !o && _h.includes(de) ? (i = 1, r.interrupt ? t(S) : L(S)) : HP.includes(l.toLowerCase()) ? (i = 6, X ? (e.consume(S), h) : r.interrupt ? t(S) : L(S)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(S) : o ? y(S) : v(S));
    }
    return S === 45 || qe(S) ? (e.consume(S), l += String.fromCharCode(S), w) : n(S);
  }
  function h(S) {
    return S === 62 ? (e.consume(S), r.interrupt ? t : L) : n(S);
  }
  function y(S) {
    return re(S) ? (e.consume(S), y) : E(S);
  }
  function v(S) {
    return S === 47 ? (e.consume(S), E) : S === 58 || S === 95 || nt(S) ? (e.consume(S), C) : re(S) ? (e.consume(S), v) : E(S);
  }
  function C(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || qe(S) ? (e.consume(S), C) : P(S);
  }
  function P(S) {
    return S === 61 ? (e.consume(S), b) : re(S) ? (e.consume(S), P) : v(S);
  }
  function b(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? n(S) : S === 34 || S === 39 ? (e.consume(S), a = S, A) : re(S) ? (e.consume(S), b) : N(S);
  }
  function A(S) {
    return S === a ? (e.consume(S), a = null, I) : S === null || K(S) ? n(S) : (e.consume(S), A);
  }
  function N(S) {
    return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || he(S) ? P(S) : (e.consume(S), N);
  }
  function I(S) {
    return S === 47 || S === 62 || re(S) ? v(S) : n(S);
  }
  function E(S) {
    return S === 62 ? (e.consume(S), M) : n(S);
  }
  function M(S) {
    return S === null || K(S) ? L(S) : re(S) ? (e.consume(S), M) : n(S);
  }
  function L(S) {
    return S === 45 && i === 2 ? (e.consume(S), W) : S === 60 && i === 1 ? (e.consume(S), q) : S === 62 && i === 4 ? (e.consume(S), Y) : S === 63 && i === 3 ? (e.consume(S), x) : S === 93 && i === 5 ? (e.consume(S), D) : K(S) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(WP, Q, H)(S)) : S === null || K(S) ? (e.exit("htmlFlowData"), H(S)) : (e.consume(S), L);
  }
  function H(S) {
    return e.check(QP, z, Q)(S);
  }
  function z(S) {
    return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), U;
  }
  function U(S) {
    return S === null || K(S) ? H(S) : (e.enter("htmlFlowData"), L(S));
  }
  function W(S) {
    return S === 45 ? (e.consume(S), x) : L(S);
  }
  function q(S) {
    return S === 47 ? (e.consume(S), l = "", _) : L(S);
  }
  function _(S) {
    if (S === 62) {
      const X = l.toLowerCase();
      return _h.includes(X) ? (e.consume(S), Y) : L(S);
    }
    return nt(S) && l.length < 8 ? (e.consume(S), l += String.fromCharCode(S), _) : L(S);
  }
  function D(S) {
    return S === 93 ? (e.consume(S), x) : L(S);
  }
  function x(S) {
    return S === 62 ? (e.consume(S), Y) : S === 45 && i === 2 ? (e.consume(S), x) : L(S);
  }
  function Y(S) {
    return S === null || K(S) ? (e.exit("htmlFlowData"), Q(S)) : (e.consume(S), Y);
  }
  function Q(S) {
    return e.exit("htmlFlow"), t(S);
  }
}
function KP(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return K(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function XP(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(ml, t, n);
  }
}
const GP = {
  name: "htmlText",
  tokenize: ZP
};
function ZP(e, t, n) {
  const r = this;
  let i, o, l;
  return s;
  function s(x) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(x), a;
  }
  function a(x) {
    return x === 33 ? (e.consume(x), u) : x === 47 ? (e.consume(x), P) : x === 63 ? (e.consume(x), v) : nt(x) ? (e.consume(x), N) : n(x);
  }
  function u(x) {
    return x === 45 ? (e.consume(x), f) : x === 91 ? (e.consume(x), o = 0, m) : nt(x) ? (e.consume(x), y) : n(x);
  }
  function f(x) {
    return x === 45 ? (e.consume(x), d) : n(x);
  }
  function c(x) {
    return x === null ? n(x) : x === 45 ? (e.consume(x), p) : K(x) ? (l = c, q(x)) : (e.consume(x), c);
  }
  function p(x) {
    return x === 45 ? (e.consume(x), d) : c(x);
  }
  function d(x) {
    return x === 62 ? W(x) : x === 45 ? p(x) : c(x);
  }
  function m(x) {
    const Y = "CDATA[";
    return x === Y.charCodeAt(o++) ? (e.consume(x), o === Y.length ? g : m) : n(x);
  }
  function g(x) {
    return x === null ? n(x) : x === 93 ? (e.consume(x), w) : K(x) ? (l = g, q(x)) : (e.consume(x), g);
  }
  function w(x) {
    return x === 93 ? (e.consume(x), h) : g(x);
  }
  function h(x) {
    return x === 62 ? W(x) : x === 93 ? (e.consume(x), h) : g(x);
  }
  function y(x) {
    return x === null || x === 62 ? W(x) : K(x) ? (l = y, q(x)) : (e.consume(x), y);
  }
  function v(x) {
    return x === null ? n(x) : x === 63 ? (e.consume(x), C) : K(x) ? (l = v, q(x)) : (e.consume(x), v);
  }
  function C(x) {
    return x === 62 ? W(x) : v(x);
  }
  function P(x) {
    return nt(x) ? (e.consume(x), b) : n(x);
  }
  function b(x) {
    return x === 45 || qe(x) ? (e.consume(x), b) : A(x);
  }
  function A(x) {
    return K(x) ? (l = A, q(x)) : re(x) ? (e.consume(x), A) : W(x);
  }
  function N(x) {
    return x === 45 || qe(x) ? (e.consume(x), N) : x === 47 || x === 62 || he(x) ? I(x) : n(x);
  }
  function I(x) {
    return x === 47 ? (e.consume(x), W) : x === 58 || x === 95 || nt(x) ? (e.consume(x), E) : K(x) ? (l = I, q(x)) : re(x) ? (e.consume(x), I) : W(x);
  }
  function E(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || qe(x) ? (e.consume(x), E) : M(x);
  }
  function M(x) {
    return x === 61 ? (e.consume(x), L) : K(x) ? (l = M, q(x)) : re(x) ? (e.consume(x), M) : I(x);
  }
  function L(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? n(x) : x === 34 || x === 39 ? (e.consume(x), i = x, H) : K(x) ? (l = L, q(x)) : re(x) ? (e.consume(x), L) : (e.consume(x), z);
  }
  function H(x) {
    return x === i ? (e.consume(x), i = void 0, U) : x === null ? n(x) : K(x) ? (l = H, q(x)) : (e.consume(x), H);
  }
  function z(x) {
    return x === null || x === 34 || x === 39 || x === 60 || x === 61 || x === 96 ? n(x) : x === 47 || x === 62 || he(x) ? I(x) : (e.consume(x), z);
  }
  function U(x) {
    return x === 47 || x === 62 || he(x) ? I(x) : n(x);
  }
  function W(x) {
    return x === 62 ? (e.consume(x), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(x);
  }
  function q(x) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), _;
  }
  function _(x) {
    return re(x) ? se(e, D, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : D(x);
  }
  function D(x) {
    return e.enter("htmlTextData"), l(x);
  }
}
const md = {
  name: "labelEnd",
  resolveAll: n2,
  resolveTo: r2,
  tokenize: i2
}, JP = {
  tokenize: o2
}, e2 = {
  tokenize: l2
}, t2 = {
  tokenize: s2
};
function n2(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Ct(e, 0, e.length, n), e;
}
function r2(e, t) {
  let n = e.length, r = 0, i, o, l, s;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
  const a = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, f = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return s = [["enter", a, t], ["enter", u, t]], s = _t(s, e.slice(o + 1, o + r + 3)), s = _t(s, [["enter", f, t]]), s = _t(s, ka(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), s = _t(s, [["exit", f, t], e[l - 2], e[l - 1], ["exit", u, t]]), s = _t(s, e.slice(l + 1)), s = _t(s, [["exit", a, t]]), Ct(e, o, e.length, s), e;
}
function i2(e, t, n) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return s;
  function s(p) {
    return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(Zt(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(p);
  }
  function a(p) {
    return p === 40 ? e.attempt(JP, f, l ? f : c)(p) : p === 91 ? e.attempt(e2, f, l ? u : c)(p) : l ? f(p) : c(p);
  }
  function u(p) {
    return e.attempt(t2, f, c)(p);
  }
  function f(p) {
    return t(p);
  }
  function c(p) {
    return o._balanced = !0, n(p);
  }
}
function o2(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return he(c) ? _o(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? f(c) : z0(e, l, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return he(c) ? _o(e, a)(c) : f(c);
  }
  function s(c) {
    return n(c);
  }
  function a(c) {
    return c === 34 || c === 39 || c === 40 ? j0(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function u(c) {
    return he(c) ? _o(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function l2(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return F0.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(s);
  }
  function o(s) {
    return r.parser.defined.includes(Zt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s);
  }
  function l(s) {
    return n(s);
  }
}
function s2(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const a2 = {
  name: "labelStartImage",
  resolveAll: md.resolveAll,
  tokenize: u2
};
function u2(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), o;
  }
  function o(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), l) : n(s);
  }
  function l(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const c2 = {
  name: "labelStartLink",
  resolveAll: md.resolveAll,
  tokenize: f2
};
function f2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const du = {
  name: "lineEnding",
  tokenize: d2
};
function d2(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), se(e, t, "linePrefix");
  }
}
const ls = {
  name: "thematicBreak",
  tokenize: p2
};
function p2(e, t, n) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, s(u);
  }
  function s(u) {
    return u === i ? (e.enter("thematicBreakSequence"), a(u)) : r >= 3 && (u === null || K(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), r++, a) : (e.exit("thematicBreakSequence"), re(u) ? se(e, s, "whitespace")(u) : s(u));
  }
}
const st = {
  continuation: {
    tokenize: y2
  },
  exit: w2,
  name: "list",
  tokenize: g2
}, h2 = {
  partial: !0,
  tokenize: x2
}, m2 = {
  partial: !0,
  tokenize: v2
};
function g2(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return s;
  function s(d) {
    const m = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : zc(d)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(ls, n, u)(d) : u(d);
      if (!r.interrupt || d === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), a(d);
    }
    return n(d);
  }
  function a(d) {
    return zc(d) && ++l < 10 ? (e.consume(d), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), u(d)) : n(d);
  }
  function u(d) {
    return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, e.check(
      ml,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(h2, p, c)
    );
  }
  function f(d) {
    return r.containerState.initialBlankLine = !0, o++, p(d);
  }
  function c(d) {
    return re(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), p) : n(d);
  }
  function p(d) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(d);
  }
}
function y2(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(ml, i, o);
  function i(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, se(e, t, "listItemIndent", r.containerState.size + 1)(s);
  }
  function o(s) {
    return r.containerState.furtherBlankLines || !re(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(m2, t, l)(s));
  }
  function l(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, se(e, e.attempt(st, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function v2(e, t, n) {
  const r = this;
  return se(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function w2(e) {
  e.exit(this.containerState.type);
}
function x2(e, t, n) {
  const r = this;
  return se(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !re(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Lh = {
  name: "setextUnderline",
  resolveTo: k2,
  tokenize: b2
};
function k2(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function b2(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let f = r.events.length, c;
    for (; f--; )
      if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
        c = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, l(u)) : n(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), s(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), s) : (e.exit("setextHeadingLineSequence"), re(u) ? se(e, a, "lineSuffix")(u) : a(u));
  }
  function a(u) {
    return u === null || K(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const S2 = {
  tokenize: C2
};
function C2(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    ml,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, se(e, e.attempt(this.parser.constructs.flow, i, e.attempt(RP, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const E2 = {
  resolveAll: $0()
}, T2 = B0("string"), P2 = B0("text");
function B0(e) {
  return {
    resolveAll: $0(e === "text" ? A2 : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, l, s);
    return l;
    function l(f) {
      return u(f) ? o(f) : s(f);
    }
    function s(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("data"), n.consume(f), a;
    }
    function a(f) {
      return u(f) ? (n.exit("data"), o(f)) : (n.consume(f), a);
    }
    function u(f) {
      if (f === null)
        return !0;
      const c = i[f];
      let p = -1;
      if (c)
        for (; ++p < c.length; ) {
          const d = c[p];
          if (!d.previous || d.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function $0(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function A2(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, l = -1, s = 0, a;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            s++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2)
          a = !0, s++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
        const u = {
          type: n === e.length || a || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? l : r.start._bufferIndex + l,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2);
      }
      n++;
    }
  return e;
}
const R2 = {
  42: st,
  43: st,
  45: st,
  48: st,
  49: st,
  50: st,
  51: st,
  52: st,
  53: st,
  54: st,
  55: st,
  56: st,
  57: st,
  62: L0
}, N2 = {
  91: OP
}, I2 = {
  [-2]: fu,
  [-1]: fu,
  32: fu
}, _2 = {
  35: BP,
  42: ls,
  45: [Lh, ls],
  60: VP,
  61: Lh,
  95: ls,
  96: Ih,
  126: Ih
}, L2 = {
  38: D0,
  92: O0
}, O2 = {
  [-5]: du,
  [-4]: du,
  [-3]: du,
  33: a2,
  38: D0,
  42: Fc,
  60: [cP, GP],
  91: c2,
  92: [FP, O0],
  93: md,
  95: Fc,
  96: SP
}, D2 = {
  null: [Fc, E2]
}, M2 = {
  null: [42, 95]
}, z2 = {
  null: []
}, F2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: M2,
  contentInitial: N2,
  disable: z2,
  document: R2,
  flow: _2,
  flowInitial: I2,
  insideSpan: D2,
  string: L2,
  text: O2
}, Symbol.toStringTag, { value: "Module" }));
function j2(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let l = [], s = [];
  const a = {
    attempt: A(P),
    check: A(b),
    consume: y,
    enter: v,
    exit: C,
    interrupt: A(b, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: g,
    events: [],
    now: m,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: d,
    write: c
  };
  let f = t.tokenize.call(u, a);
  return t.resolveAll && o.push(t), u;
  function c(M) {
    return l = _t(l, M), w(), l[l.length - 1] !== null ? [] : (N(t, 0), u.events = ka(o, u.events, u), u.events);
  }
  function p(M, L) {
    return $2(d(M), L);
  }
  function d(M) {
    return B2(l, M);
  }
  function m() {
    const {
      _bufferIndex: M,
      _index: L,
      line: H,
      column: z,
      offset: U
    } = r;
    return {
      _bufferIndex: M,
      _index: L,
      line: H,
      column: z,
      offset: U
    };
  }
  function g(M) {
    i[M.line] = M.column, E();
  }
  function w() {
    let M;
    for (; r._index < l.length; ) {
      const L = l[r._index];
      if (typeof L == "string")
        for (M = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === M && r._bufferIndex < L.length; )
          h(L.charCodeAt(r._bufferIndex));
      else
        h(L);
    }
  }
  function h(M) {
    f = f(M);
  }
  function y(M) {
    K(M) ? (r.line++, r.column = 1, r.offset += M === -3 ? 2 : 1, E()) : M !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = M;
  }
  function v(M, L) {
    const H = L || {};
    return H.type = M, H.start = m(), u.events.push(["enter", H, u]), s.push(H), H;
  }
  function C(M) {
    const L = s.pop();
    return L.end = m(), u.events.push(["exit", L, u]), L;
  }
  function P(M, L) {
    N(M, L.from);
  }
  function b(M, L) {
    L.restore();
  }
  function A(M, L) {
    return H;
    function H(z, U, W) {
      let q, _, D, x;
      return Array.isArray(z) ? (
        /* c8 ignore next 1 */
        Q(z)
      ) : "tokenize" in z ? (
        // Looks like a construct.
        Q([
          /** @type {Construct} */
          z
        ])
      ) : Y(z);
      function Y(le) {
        return oe;
        function oe(Xe) {
          const Ge = Xe !== null && le[Xe], lt = Xe !== null && le.null, mt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Ge) ? Ge : Ge ? [Ge] : [],
            ...Array.isArray(lt) ? lt : lt ? [lt] : []
          ];
          return Q(mt)(Xe);
        }
      }
      function Q(le) {
        return q = le, _ = 0, le.length === 0 ? W : S(le[_]);
      }
      function S(le) {
        return oe;
        function oe(Xe) {
          return x = I(), D = le, le.partial || (u.currentConstruct = le), le.name && u.parser.constructs.disable.null.includes(le.name) ? de() : le.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            L ? Object.assign(Object.create(u), L) : u,
            a,
            X,
            de
          )(Xe);
        }
      }
      function X(le) {
        return M(D, x), U;
      }
      function de(le) {
        return x.restore(), ++_ < q.length ? S(q[_]) : W;
      }
    }
  }
  function N(M, L) {
    M.resolveAll && !o.includes(M) && o.push(M), M.resolve && Ct(u.events, L, u.events.length - L, M.resolve(u.events.slice(L), u)), M.resolveTo && (u.events = M.resolveTo(u.events, u));
  }
  function I() {
    const M = m(), L = u.previous, H = u.currentConstruct, z = u.events.length, U = Array.from(s);
    return {
      from: z,
      restore: W
    };
    function W() {
      r = M, u.previous = L, u.currentConstruct = H, u.events.length = z, s = U, E();
    }
  }
  function E() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function B2(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let l;
  if (n === i)
    l = [e[n].slice(r, o)];
  else {
    if (l = e.slice(n, i), r > -1) {
      const s = l[0];
      typeof s == "string" ? l[0] = s.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function $2(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let l;
    if (typeof o == "string")
      l = o;
    else switch (o) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(o);
    }
    i = o === -2, r.push(l);
  }
  return r.join("");
}
function U2(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      I0([F2, ...(e || {}).extensions || []])
    ),
    content: i(rP),
    defined: [],
    document: i(oP),
    flow: i(S2),
    lazy: {},
    string: i(T2),
    text: i(P2)
  };
  return r;
  function i(o) {
    return l;
    function l(s) {
      return j2(r, o, s);
    }
  }
}
function H2(e) {
  for (; !M0(e); )
    ;
  return e;
}
const Oh = /[\0\t\n\r]/g;
function V2() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, s) {
    const a = [];
    let u, f, c, p, d;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (Oh.lastIndex = c, u = Oh.exec(o), p = u && u.index !== void 0 ? u.index : o.length, d = o.charCodeAt(p), !u) {
        t = o.slice(c);
        break;
      }
      if (d === 10 && c === p && r)
        a.push(-3), r = void 0;
      else
        switch (r && (a.push(-5), r = void 0), c < p && (a.push(o.slice(c, p)), e += p - c), d) {
          case 0: {
            a.push(65533), e++;
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, a.push(-2); e++ < f; ) a.push(-1);
            break;
          }
          case 10: {
            a.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = p + 1;
    }
    return s && (r && a.push(-5), t && a.push(t), a.push(null)), a;
  }
}
const W2 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Q2(e) {
  return e.replace(W2, q2);
}
function q2(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return _0(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return hd(n) || e;
}
const U0 = {}.hasOwnProperty;
function Y2(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), K2(n)(H2(U2(n).document().write(V2()(e, t, !0))));
}
function K2(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(vn),
      autolinkProtocol: I,
      autolinkEmail: I,
      atxHeading: o(ei),
      blockQuote: o(lt),
      characterEscape: I,
      characterReference: I,
      codeFenced: o(mt),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(mt, l),
      codeText: o(zn, l),
      codeTextData: I,
      data: I,
      codeFlowValue: I,
      definition: o(nn),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Jr),
      hardBreakEscape: o(Sr),
      hardBreakTrailing: o(Sr),
      htmlFlow: o(ti, l),
      htmlFlowData: I,
      htmlText: o(ti, l),
      htmlTextData: I,
      image: o(Cr),
      label: l,
      link: o(vn),
      listItem: o(Er),
      listItemValue: p,
      listOrdered: o(no, c),
      listUnordered: o(no),
      paragraph: o(yl),
      reference: S,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(ei),
      strong: o(wn),
      thematicBreak: o(Ta)
    },
    exit: {
      atxHeading: a(),
      atxHeadingSequence: P,
      autolink: a(),
      autolinkEmail: Ge,
      autolinkProtocol: Xe,
      blockQuote: a(),
      characterEscapeValue: E,
      characterReferenceMarkerHexadecimal: de,
      characterReferenceMarkerNumeric: de,
      characterReferenceValue: le,
      characterReference: oe,
      codeFenced: a(w),
      codeFencedFence: g,
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: m,
      codeFlowValue: E,
      codeIndented: a(h),
      codeText: a(U),
      codeTextData: E,
      data: E,
      definition: a(),
      definitionDestinationString: C,
      definitionLabelString: y,
      definitionTitleString: v,
      emphasis: a(),
      hardBreakEscape: a(L),
      hardBreakTrailing: a(L),
      htmlFlow: a(H),
      htmlFlowData: E,
      htmlText: a(z),
      htmlTextData: E,
      image: a(q),
      label: D,
      labelText: _,
      lineEnding: M,
      link: a(W),
      listItem: a(),
      listOrdered: a(),
      listUnordered: a(),
      paragraph: a(),
      referenceString: X,
      resourceDestinationString: x,
      resourceTitleString: Y,
      resource: Q,
      setextHeading: a(N),
      setextHeadingLineSequence: A,
      setextHeadingText: b,
      strong: a(),
      thematicBreak: a()
    }
  };
  H0(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(R) {
    let B = {
      type: "root",
      children: []
    };
    const G = {
      stack: [B],
      tokenStack: [],
      config: t,
      enter: s,
      exit: u,
      buffer: l,
      resume: f,
      data: n
    }, ne = [];
    let ue = -1;
    for (; ++ue < R.length; )
      if (R[ue][1].type === "listOrdered" || R[ue][1].type === "listUnordered")
        if (R[ue][0] === "enter")
          ne.push(ue);
        else {
          const gt = ne.pop();
          ue = i(R, gt, ue);
        }
    for (ue = -1; ++ue < R.length; ) {
      const gt = t[R[ue][0]];
      U0.call(gt, R[ue][1].type) && gt[R[ue][1].type].call(Object.assign({
        sliceSerialize: R[ue][2].sliceSerialize
      }, G), R[ue][1]);
    }
    if (G.tokenStack.length > 0) {
      const gt = G.tokenStack[G.tokenStack.length - 1];
      (gt[1] || Dh).call(G, void 0, gt[0]);
    }
    for (B.position = {
      start: Qn(R.length > 0 ? R[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Qn(R.length > 0 ? R[R.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ue = -1; ++ue < t.transforms.length; )
      B = t.transforms[ue](B) || B;
    return B;
  }
  function i(R, B, G) {
    let ne = B - 1, ue = -1, gt = !1, rn, yt, At, Fn;
    for (; ++ne <= G; ) {
      const Ne = R[ne];
      switch (Ne[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ne[0] === "enter" ? ue++ : ue--, Fn = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ne[0] === "enter" && (rn && !Fn && !ue && !At && (At = ne), Fn = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Fn = void 0;
      }
      if (!ue && Ne[0] === "enter" && Ne[1].type === "listItemPrefix" || ue === -1 && Ne[0] === "exit" && (Ne[1].type === "listUnordered" || Ne[1].type === "listOrdered")) {
        if (rn) {
          let jn = ne;
          for (yt = void 0; jn--; ) {
            const Ft = R[jn];
            if (Ft[1].type === "lineEnding" || Ft[1].type === "lineEndingBlank") {
              if (Ft[0] === "exit") continue;
              yt && (R[yt][1].type = "lineEndingBlank", gt = !0), Ft[1].type = "lineEnding", yt = jn;
            } else if (!(Ft[1].type === "linePrefix" || Ft[1].type === "blockQuotePrefix" || Ft[1].type === "blockQuotePrefixWhitespace" || Ft[1].type === "blockQuoteMarker" || Ft[1].type === "listItemIndent")) break;
          }
          At && (!yt || At < yt) && (rn._spread = !0), rn.end = Object.assign({}, yt ? R[yt][1].start : Ne[1].end), R.splice(yt || ne, 0, ["exit", rn, Ne[2]]), ne++, G++;
        }
        if (Ne[1].type === "listItemPrefix") {
          const jn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ne[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          rn = jn, R.splice(ne, 0, ["enter", jn, Ne[2]]), ne++, G++, At = void 0, Fn = !0;
        }
      }
    }
    return R[B][1]._spread = gt, G;
  }
  function o(R, B) {
    return G;
    function G(ne) {
      s.call(this, R(ne), ne), B && B.call(this, ne);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(R, B, G) {
    this.stack[this.stack.length - 1].children.push(R), this.stack.push(R), this.tokenStack.push([B, G || void 0]), R.position = {
      start: Qn(B.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function a(R) {
    return B;
    function B(G) {
      R && R.call(this, G), u.call(this, G);
    }
  }
  function u(R, B) {
    const G = this.stack.pop(), ne = this.tokenStack.pop();
    if (ne)
      ne[0].type !== R.type && (B ? B.call(this, R, ne[0]) : (ne[1] || Dh).call(this, R, ne[0]));
    else throw new Error("Cannot close `" + R.type + "` (" + Io({
      start: R.start,
      end: R.end
    }) + "): it’s not open");
    G.position.end = Qn(R.end);
  }
  function f() {
    return pd(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(R) {
    if (this.data.expectingFirstListItemValue) {
      const B = this.stack[this.stack.length - 2];
      B.start = Number.parseInt(this.sliceSerialize(R), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function d() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.lang = R;
  }
  function m() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.meta = R;
  }
  function g() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function w() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = R.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function h() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = R.replace(/(\r?\n|\r)$/g, "");
  }
  function y(R) {
    const B = this.resume(), G = this.stack[this.stack.length - 1];
    G.label = B, G.identifier = Zt(this.sliceSerialize(R)).toLowerCase();
  }
  function v() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.title = R;
  }
  function C() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.url = R;
  }
  function P(R) {
    const B = this.stack[this.stack.length - 1];
    if (!B.depth) {
      const G = this.sliceSerialize(R).length;
      B.depth = G;
    }
  }
  function b() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function A(R) {
    const B = this.stack[this.stack.length - 1];
    B.depth = this.sliceSerialize(R).codePointAt(0) === 61 ? 1 : 2;
  }
  function N() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function I(R) {
    const G = this.stack[this.stack.length - 1].children;
    let ne = G[G.length - 1];
    (!ne || ne.type !== "text") && (ne = Ea(), ne.position = {
      start: Qn(R.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, G.push(ne)), this.stack.push(ne);
  }
  function E(R) {
    const B = this.stack.pop();
    B.value += this.sliceSerialize(R), B.position.end = Qn(R.end);
  }
  function M(R) {
    const B = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const G = B.children[B.children.length - 1];
      G.position.end = Qn(R.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(B.type) && (I.call(this, R), E.call(this, R));
  }
  function L() {
    this.data.atHardBreak = !0;
  }
  function H() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = R;
  }
  function z() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = R;
  }
  function U() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = R;
  }
  function W() {
    const R = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const B = this.data.referenceType || "shortcut";
      R.type += "Reference", R.referenceType = B, delete R.url, delete R.title;
    } else
      delete R.identifier, delete R.label;
    this.data.referenceType = void 0;
  }
  function q() {
    const R = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const B = this.data.referenceType || "shortcut";
      R.type += "Reference", R.referenceType = B, delete R.url, delete R.title;
    } else
      delete R.identifier, delete R.label;
    this.data.referenceType = void 0;
  }
  function _(R) {
    const B = this.sliceSerialize(R), G = this.stack[this.stack.length - 2];
    G.label = Q2(B), G.identifier = Zt(B).toLowerCase();
  }
  function D() {
    const R = this.stack[this.stack.length - 1], B = this.resume(), G = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, G.type === "link") {
      const ne = R.children;
      G.children = ne;
    } else
      G.alt = B;
  }
  function x() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.url = R;
  }
  function Y() {
    const R = this.resume(), B = this.stack[this.stack.length - 1];
    B.title = R;
  }
  function Q() {
    this.data.inReference = void 0;
  }
  function S() {
    this.data.referenceType = "collapsed";
  }
  function X(R) {
    const B = this.resume(), G = this.stack[this.stack.length - 1];
    G.label = B, G.identifier = Zt(this.sliceSerialize(R)).toLowerCase(), this.data.referenceType = "full";
  }
  function de(R) {
    this.data.characterReferenceType = R.type;
  }
  function le(R) {
    const B = this.sliceSerialize(R), G = this.data.characterReferenceType;
    let ne;
    G ? (ne = _0(B, G === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ne = hd(B);
    const ue = this.stack[this.stack.length - 1];
    ue.value += ne;
  }
  function oe(R) {
    const B = this.stack.pop();
    B.position.end = Qn(R.end);
  }
  function Xe(R) {
    E.call(this, R);
    const B = this.stack[this.stack.length - 1];
    B.url = this.sliceSerialize(R);
  }
  function Ge(R) {
    E.call(this, R);
    const B = this.stack[this.stack.length - 1];
    B.url = "mailto:" + this.sliceSerialize(R);
  }
  function lt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function mt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function zn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function nn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Jr() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function ei() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Sr() {
    return {
      type: "break"
    };
  }
  function ti() {
    return {
      type: "html",
      value: ""
    };
  }
  function Cr() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function vn() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function no(R) {
    return {
      type: "list",
      ordered: R.type === "listOrdered",
      start: null,
      spread: R._spread,
      children: []
    };
  }
  function Er(R) {
    return {
      type: "listItem",
      spread: R._spread,
      checked: null,
      children: []
    };
  }
  function yl() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function wn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Ea() {
    return {
      type: "text",
      value: ""
    };
  }
  function Ta() {
    return {
      type: "thematicBreak"
    };
  }
}
function Qn(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function H0(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? H0(e, r) : X2(e, r);
  }
}
function X2(e, t) {
  let n;
  for (n in t)
    if (U0.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Dh(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Io({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Io({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Io({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function G2(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Y2(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function Z2(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function J2(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function eA(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function tA(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function nA(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function rA(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = to(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let l, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, s += 1, e.footnoteCounts.set(r, s);
  const a = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(t, a);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [a]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function iA(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function oA(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function V0(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function lA(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return V0(e, t);
  const i = { src: to(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function sA(e, t) {
  const n = { src: to(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function aA(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function uA(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return V0(e, t);
  const i = { href: to(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function cA(e, t) {
  const n = { href: to(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function fA(e, t, n) {
  const r = e.all(t), i = n ? dA(n) : W0(t), o = {}, l = [];
  if (typeof t.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p" ? c = f : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let s = -1;
  for (; ++s < r.length; ) {
    const f = r[s];
    (i || s !== 0 || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? l.push(...f.children) : l.push(f);
  }
  const a = r[r.length - 1];
  a && (i || a.type !== "element" || a.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(t, u), e.applyData(t, u);
}
function dA(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = W0(n[r]);
  }
  return t;
}
function W0(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function pA(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function hA(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function mA(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function gA(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function yA(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, s = ud(t.children[1]), a = C0(t.children[t.children.length - 1]);
    s && a && (l.position = { start: s, end: a }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function vA(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, s = l ? l.length : t.children.length;
  let a = -1;
  const u = [];
  for (; ++a < s; ) {
    const c = t.children[a], p = {}, d = l ? l[a] : void 0;
    d && (p.align = d);
    let m = { type: "element", tagName: o, properties: p, children: [] };
    c && (m.children = e.all(c), e.patch(c, m), m = e.applyData(c, m)), u.push(m);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, f), e.applyData(t, f);
}
function wA(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Mh = 9, zh = 32;
function xA(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Fh(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Fh(t.slice(i), i > 0, !1)), o.join("");
}
function Fh(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Mh || o === zh; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Mh || o === zh; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function kA(e, t) {
  const n = { type: "text", value: xA(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function bA(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const SA = {
  blockquote: Z2,
  break: J2,
  code: eA,
  delete: tA,
  emphasis: nA,
  footnoteReference: rA,
  heading: iA,
  html: oA,
  imageReference: lA,
  image: sA,
  inlineCode: aA,
  linkReference: uA,
  link: cA,
  listItem: fA,
  list: pA,
  paragraph: hA,
  // @ts-expect-error: root is different, but hard to type.
  root: mA,
  strong: gA,
  table: yA,
  tableCell: wA,
  tableRow: vA,
  text: kA,
  thematicBreak: bA,
  toml: $l,
  yaml: $l,
  definition: $l,
  footnoteDefinition: $l
};
function $l() {
}
const Q0 = -1, ba = 0, Lo = 1, Us = 2, gd = 3, yd = 4, vd = 5, wd = 6, q0 = 7, Y0 = 8, jh = typeof self == "object" ? self : globalThis, CA = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = t[i];
    switch (o) {
      case ba:
      case Q0:
        return n(l, i);
      case Lo: {
        const s = n([], i);
        for (const a of l)
          s.push(r(a));
        return s;
      }
      case Us: {
        const s = n({}, i);
        for (const [a, u] of l)
          s[r(a)] = r(u);
        return s;
      }
      case gd:
        return n(new Date(l), i);
      case yd: {
        const { source: s, flags: a } = l;
        return n(new RegExp(s, a), i);
      }
      case vd: {
        const s = n(/* @__PURE__ */ new Map(), i);
        for (const [a, u] of l)
          s.set(r(a), r(u));
        return s;
      }
      case wd: {
        const s = n(/* @__PURE__ */ new Set(), i);
        for (const a of l)
          s.add(r(a));
        return s;
      }
      case q0: {
        const { name: s, message: a } = l;
        return n(new jh[s](a), i);
      }
      case Y0:
        return n(BigInt(l), i);
      case "BigInt":
        return n(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: s } = new Uint8Array(l);
        return n(new DataView(s), l);
      }
    }
    return n(new jh[o](l), i);
  };
  return r;
}, Bh = (e) => CA(/* @__PURE__ */ new Map(), e)(0), ri = "", { toString: EA } = {}, { keys: TA } = Object, mo = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [ba, t];
  const n = EA.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Lo, ri];
    case "Object":
      return [Us, ri];
    case "Date":
      return [gd, ri];
    case "RegExp":
      return [yd, ri];
    case "Map":
      return [vd, ri];
    case "Set":
      return [wd, ri];
    case "DataView":
      return [Lo, n];
  }
  return n.includes("Array") ? [Lo, n] : n.includes("Error") ? [q0, n] : [Us, n];
}, Ul = ([e, t]) => e === ba && (t === "function" || t === "symbol"), PA = (e, t, n, r) => {
  const i = (l, s) => {
    const a = r.push(l) - 1;
    return n.set(s, a), a;
  }, o = (l) => {
    if (n.has(l))
      return n.get(l);
    let [s, a] = mo(l);
    switch (s) {
      case ba: {
        let f = l;
        switch (a) {
          case "bigint":
            s = Y0, f = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + a);
            f = null;
            break;
          case "undefined":
            return i([Q0], l);
        }
        return i([s, f], l);
      }
      case Lo: {
        if (a) {
          let p = l;
          return a === "DataView" ? p = new Uint8Array(l.buffer) : a === "ArrayBuffer" && (p = new Uint8Array(l)), i([a, [...p]], l);
        }
        const f = [], c = i([s, f], l);
        for (const p of l)
          f.push(o(p));
        return c;
      }
      case Us: {
        if (a)
          switch (a) {
            case "BigInt":
              return i([a, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([a, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return o(l.toJSON());
        const f = [], c = i([s, f], l);
        for (const p of TA(l))
          (e || !Ul(mo(l[p]))) && f.push([o(p), o(l[p])]);
        return c;
      }
      case gd:
        return i([s, l.toISOString()], l);
      case yd: {
        const { source: f, flags: c } = l;
        return i([s, { source: f, flags: c }], l);
      }
      case vd: {
        const f = [], c = i([s, f], l);
        for (const [p, d] of l)
          (e || !(Ul(mo(p)) || Ul(mo(d)))) && f.push([o(p), o(d)]);
        return c;
      }
      case wd: {
        const f = [], c = i([s, f], l);
        for (const p of l)
          (e || !Ul(mo(p))) && f.push(o(p));
        return c;
      }
    }
    const { message: u } = l;
    return i([s, { name: a, message: u }], l);
  };
  return o;
}, $h = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return PA(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Hs = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Bh($h(e, t)) : structuredClone(e)
) : (e, t) => Bh($h(e, t));
function AA(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function RA(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function NA(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || AA, r = e.options.footnoteBackLabel || RA, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let a = -1;
  for (; ++a < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[a]
    );
    if (!u)
      continue;
    const f = e.all(u), c = String(u.identifier).toUpperCase(), p = to(c.toLowerCase());
    let d = 0;
    const m = [], g = e.footnoteCounts.get(c);
    for (; g !== void 0 && ++d <= g; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let y = typeof n == "string" ? n : n(a, d);
      typeof y == "string" && (y = { type: "text", value: y }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (d > 1 ? "-" + d : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(a, d),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(y) ? y : [y]
      });
    }
    const w = f[f.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const y = w.children[w.children.length - 1];
      y && y.type === "text" ? y.value += " " : w.children.push({ type: "text", value: " " }), w.children.push(...m);
    } else
      f.push(...m);
    const h = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(f, !0)
    };
    e.patch(u, h), s.push(h);
  }
  if (s.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Hs(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(s, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Sa = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return OA;
    if (typeof e == "function")
      return Ca(e);
    if (typeof e == "object")
      return Array.isArray(e) ? IA(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        _A(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return LA(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function IA(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Sa(e[n]);
  return Ca(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function _A(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ca(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function LA(e) {
  return Ca(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ca(e) {
  return t;
  function t(n, r, i) {
    return !!(DA(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function OA() {
  return !0;
}
function DA(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const K0 = [], MA = !0, jc = !1, zA = "skip";
function X0(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Sa(i), l = r ? -1 : 1;
  s(e, void 0, [])();
  function s(a, u, f) {
    const c = (
      /** @type {Record<string, unknown>} */
      a && typeof a == "object" ? a : {}
    );
    if (typeof c.type == "string") {
      const d = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (a.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let d = K0, m, g, w;
      if ((!t || o(a, u, f[f.length - 1] || void 0)) && (d = FA(n(a, f)), d[0] === jc))
        return d;
      if ("children" in a && a.children) {
        const h = (
          /** @type {UnistParent} */
          a
        );
        if (h.children && d[0] !== zA)
          for (g = (r ? h.children.length : -1) + l, w = f.concat(h); g > -1 && g < h.children.length; ) {
            const y = h.children[g];
            if (m = s(y, g, w)(), m[0] === jc)
              return m;
            g = typeof m[1] == "number" ? m[1] : g + l;
          }
      }
      return d;
    }
  }
}
function FA(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [MA, e] : e == null ? K0 : [e];
}
function xd(e, t, n, r) {
  let i, o, l;
  typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), X0(e, o, s, i);
  function s(a, u) {
    const f = u[u.length - 1], c = f ? f.children.indexOf(a) : void 0;
    return l(a, c, f);
  }
}
const Bc = {}.hasOwnProperty, jA = {};
function BA(e, t) {
  const n = t || jA, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...SA, ...n.handlers }, s = {
    all: u,
    applyData: UA,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: a,
    options: n,
    patch: $A,
    wrap: VA
  };
  return xd(e, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, p = String(f.identifier).toUpperCase();
      c.has(p) || c.set(p, f);
    }
  }), s;
  function a(f, c) {
    const p = f.type, d = s.handlers[p];
    if (Bc.call(s.handlers, p) && d)
      return d(s, f, c);
    if (s.options.passThrough && s.options.passThrough.includes(p)) {
      if ("children" in f) {
        const { children: g, ...w } = f, h = Hs(w);
        return h.children = s.all(f), h;
      }
      return Hs(f);
    }
    return (s.options.unknownHandler || HA)(s, f, c);
  }
  function u(f) {
    const c = [];
    if ("children" in f) {
      const p = f.children;
      let d = -1;
      for (; ++d < p.length; ) {
        const m = s.one(p[d], f);
        if (m) {
          if (d && p[d - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = Uh(m.value)), !Array.isArray(m) && m.type === "element")) {
            const g = m.children[0];
            g && g.type === "text" && (g.value = Uh(g.value));
          }
          Array.isArray(m) ? c.push(...m) : c.push(m);
        }
      }
    }
    return c;
  }
}
function $A(e, t) {
  e.position && (t.position = RT(e));
}
function UA(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && o && Object.assign(n.properties, Hs(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function HA(e, t) {
  const n = t.data || {}, r = "value" in t && !(Bc.call(n, "hProperties") || Bc.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function VA(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Uh(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Hh(e, t) {
  const n = BA(e, t), r = n.one(e, void 0), i = NA(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function WA(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Hh(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Hh(n, { file: r, ...e || t })
    );
  };
}
function Vh(e) {
  if (e)
    throw e;
}
var ss = Object.prototype.hasOwnProperty, G0 = Object.prototype.toString, Wh = Object.defineProperty, Qh = Object.getOwnPropertyDescriptor, qh = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : G0.call(t) === "[object Array]";
}, Yh = function(t) {
  if (!t || G0.call(t) !== "[object Object]")
    return !1;
  var n = ss.call(t, "constructor"), r = t.constructor && t.constructor.prototype && ss.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || ss.call(t, i);
}, Kh = function(t, n) {
  Wh && n.name === "__proto__" ? Wh(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Xh = function(t, n) {
  if (n === "__proto__")
    if (ss.call(t, n)) {
      if (Qh)
        return Qh(t, n).value;
    } else return;
  return t[n];
}, QA = function e() {
  var t, n, r, i, o, l, s = arguments[0], a = 1, u = arguments.length, f = !1;
  for (typeof s == "boolean" && (f = s, s = arguments[1] || {}, a = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); a < u; ++a)
    if (t = arguments[a], t != null)
      for (n in t)
        r = Xh(s, n), i = Xh(t, n), s !== i && (f && i && (Yh(i) || (o = qh(i))) ? (o ? (o = !1, l = r && qh(r) ? r : []) : l = r && Yh(r) ? r : {}, Kh(s, { name: n, newValue: e(f, l, i) })) : typeof i < "u" && Kh(s, { name: n, newValue: i }));
  return s;
};
const pu = /* @__PURE__ */ Ws(QA);
function $c(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function qA() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    s(null, ...i);
    function s(a, ...u) {
      const f = e[++o];
      let c = -1;
      if (a) {
        l(a);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, f ? YA(f, s)(...u) : l(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function YA(e, t) {
  let n;
  return r;
  function r(...l) {
    const s = e.length > l.length;
    let a;
    s && l.push(i);
    try {
      a = e.apply(this, l);
    } catch (u) {
      const f = (
        /** @type {Error} */
        u
      );
      if (s && n)
        throw f;
      return i(f);
    }
    s || (a && a.then && typeof a.then == "function" ? a.then(o, i) : a instanceof Error ? i(a) : o(a));
  }
  function i(l, ...s) {
    n || (n = !0, t(l, ...s));
  }
  function o(l) {
    i(null, l);
  }
}
const sn = { basename: KA, dirname: XA, extname: GA, join: ZA, sep: "/" };
function KA(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  gl(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, s = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function XA(e) {
  if (gl(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function GA(e) {
  gl(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, l;
  for (; t--; ) {
    const s = e.codePointAt(t);
    if (s === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), s === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function ZA(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    gl(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : JA(n);
}
function JA(e) {
  gl(e);
  const t = e.codePointAt(0) === 47;
  let n = eR(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function eR(e, t) {
  let n = "", r = 0, i = -1, o = 0, l = -1, s, a;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      s = e.codePointAt(l);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (a = n.lastIndexOf("/"), a !== n.length - 1) {
              a < 0 ? (n = "", r = 0) : (n = n.slice(0, a), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else s === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function gl(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const tR = { cwd: nR };
function nR() {
  return "/";
}
function Uc(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function rR(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Uc(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return iR(e);
}
function iR(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const hu = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Z0 {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? Uc(t) ? n = { path: t } : typeof t == "string" || oR(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : tR.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < hu.length; ) {
      const o = hu[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      hu.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? sn.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    gu(t, "basename"), mu(t, "basename"), this.path = sn.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? sn.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    Gh(this.basename, "dirname"), this.path = sn.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? sn.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (mu(t, "extname"), Gh(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = sn.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Uc(t) && (t = rR(t)), gu(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? sn.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    gu(t, "stem"), mu(t, "stem"), this.path = sn.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Ke(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function mu(e, t) {
  if (e && e.includes(sn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + sn.sep + "`"
    );
}
function gu(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Gh(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function oR(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const lR = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), sR = {}.hasOwnProperty;
class kd extends lR {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = qA();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new kd()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(pu(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (wu("data", this.frozen), this.namespace[t] = n, this) : sR.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (wu("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Hl(t), r = this.parser || this.Parser;
    return yu("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), yu("process", this.parser || this.Parser), vu("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, l) {
      const s = Hl(t), a = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(a, s, function(f, c, p) {
        if (f || !c || !p)
          return u(f);
        const d = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), m = r.stringify(d, p);
        cR(m) ? p.value = m : p.result = m, u(
          f,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function u(f, c) {
        f || !c ? l(f) : o ? o(c) : n(void 0, c);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), yu("processSync", this.parser || this.Parser), vu("processSync", this.compiler || this.Compiler), this.process(t, i), Jh("processSync", "process", n), r;
    function i(o, l) {
      n = !0, Vh(o), r = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    Zh(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, s) {
      const a = Hl(n);
      i.run(t, a, u);
      function u(f, c, p) {
        const d = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        f ? s(f) : l ? l(d) : r(void 0, d, p);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), Jh("runSync", "run", r), i;
    function o(l, s) {
      Vh(l), i = s, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Hl(n), i = this.compiler || this.Compiler;
    return vu("stringify", i), Zh(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (wu("use", this.frozen), t != null) if (typeof t == "function")
      a(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? s(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(u) {
      if (typeof u == "function")
        a(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [f, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          a(f, c);
        } else
          l(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function l(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      s(u.plugins), u.settings && (i.settings = pu(!0, i.settings, u.settings));
    }
    function s(u) {
      let f = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++f < u.length; ) {
          const c = u[f];
          o(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function a(u, f) {
      let c = -1, p = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          p = c;
          break;
        }
      if (p === -1)
        r.push([u, ...f]);
      else if (f.length > 0) {
        let [d, ...m] = f;
        const g = r[p][1];
        $c(g) && $c(d) && (d = pu(!0, g, d)), r[p] = [u, d, ...m];
      }
    }
  }
}
const aR = new kd().freeze();
function yu(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function vu(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function wu(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Zh(e) {
  if (!$c(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Jh(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Hl(e) {
  return uR(e) ? e : new Z0(e);
}
function uR(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function cR(e) {
  return typeof e == "string" || fR(e);
}
function fR(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const dR = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", em = [], tm = { allowDangerousHtml: !0 }, pR = /^(https?|ircs?|mailto|xmpp)$/i, hR = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function mR(e) {
  const t = gR(e), n = yR(e);
  return vR(t.runSync(t.parse(n), n), e);
}
function gR(e) {
  const t = e.rehypePlugins || em, n = e.remarkPlugins || em, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...tm } : tm;
  return aR().use(G2).use(n).use(WA, r).use(t);
}
function yR(e) {
  const t = e.children || "", n = new Z0();
  return typeof t == "string" && (n.value = t), n;
}
function vR(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, l = t.skipHtml, s = t.unwrapDisallowed, a = t.urlTransform || wR;
  for (const f of hR)
    Object.hasOwn(t, f.from) && ("" + f.from + (f.to ? "use `" + f.to + "` instead" : "remove it") + dR + f.id, void 0);
  return xd(e, u), OT(e, {
    Fragment: T.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: T.jsx,
    jsxs: T.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(f, c, p) {
    if (f.type === "raw" && p && typeof c == "number")
      return l ? p.children.splice(c, 1) : p.children[c] = { type: "text", value: f.value }, c;
    if (f.type === "element") {
      let d;
      for (d in cu)
        if (Object.hasOwn(cu, d) && Object.hasOwn(f.properties, d)) {
          const m = f.properties[d], g = cu[d];
          (g === null || g.includes(f.tagName)) && (f.properties[d] = a(String(m || ""), d, f));
        }
    }
    if (f.type === "element") {
      let d = n ? !n.includes(f.tagName) : o ? o.includes(f.tagName) : !1;
      if (!d && r && typeof c == "number" && (d = !r(f, c, p)), d && p && typeof c == "number")
        return s && f.children ? p.children.splice(c, 1, ...f.children) : p.children.splice(c, 1), c;
    }
  }
}
function wR(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    pR.test(e.slice(0, t)) ? e : ""
  );
}
function nm(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function xR(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function kR(e, t, n) {
  const i = Sa((n || {}).ignore || []), o = bR(t);
  let l = -1;
  for (; ++l < o.length; )
    X0(e, "text", s);
  function s(u, f) {
    let c = -1, p;
    for (; ++c < f.length; ) {
      const d = f[c], m = p ? p.children : void 0;
      if (i(
        d,
        m ? m.indexOf(d) : void 0,
        p
      ))
        return;
      p = d;
    }
    if (p)
      return a(u, f);
  }
  function a(u, f) {
    const c = f[f.length - 1], p = o[l][0], d = o[l][1];
    let m = 0;
    const w = c.children.indexOf(u);
    let h = !1, y = [];
    p.lastIndex = 0;
    let v = p.exec(u.value);
    for (; v; ) {
      const C = v.index, P = {
        index: v.index,
        input: v.input,
        stack: [...f, u]
      };
      let b = d(...v, P);
      if (typeof b == "string" && (b = b.length > 0 ? { type: "text", value: b } : void 0), b === !1 ? p.lastIndex = C + 1 : (m !== C && y.push({
        type: "text",
        value: u.value.slice(m, C)
      }), Array.isArray(b) ? y.push(...b) : b && y.push(b), m = C + v[0].length, h = !0), !p.global)
        break;
      v = p.exec(u.value);
    }
    return h ? (m < u.value.length && y.push({ type: "text", value: u.value.slice(m) }), c.children.splice(w, 1, ...y)) : y = [u], w + y.length;
  }
}
function bR(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([SR(i[0]), CR(i[1])]);
  }
  return t;
}
function SR(e) {
  return typeof e == "string" ? new RegExp(xR(e), "g") : e;
}
function CR(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const xu = "phrasing", ku = ["autolink", "link", "image", "label"];
function ER() {
  return {
    transforms: [_R],
    enter: {
      literalAutolink: PR,
      literalAutolinkEmail: bu,
      literalAutolinkHttp: bu,
      literalAutolinkWww: bu
    },
    exit: {
      literalAutolink: IR,
      literalAutolinkEmail: NR,
      literalAutolinkHttp: AR,
      literalAutolinkWww: RR
    }
  };
}
function TR() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: xu,
        notInConstruct: ku
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: xu,
        notInConstruct: ku
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: xu,
        notInConstruct: ku
      }
    ]
  };
}
function PR(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function bu(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function AR(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function RR(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function NR(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function IR(e) {
  this.exit(e);
}
function _R(e) {
  kR(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, LR],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), OR]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function LR(e, t, n, r, i) {
  let o = "";
  if (!J0(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !DR(n)))
    return !1;
  const l = MR(n + r);
  if (!l[0]) return !1;
  const s = {
    type: "link",
    title: null,
    url: o + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [s, { type: "text", value: l[1] }] : s;
}
function OR(e, t, n, r) {
  return (
    // Not an expected previous character.
    !J0(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function DR(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function MR(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = nm(e, "(");
  let o = nm(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function J0(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Yr(n) || xa(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
ew.peek = WR;
function zR() {
  this.buffer();
}
function FR(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function jR() {
  this.buffer();
}
function BR(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function $R(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Zt(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function UR(e) {
  this.exit(e);
}
function HR(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Zt(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function VR(e) {
  this.exit(e);
}
function WR() {
  return "[";
}
function ew(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteReference"), s = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), s(), l(), o += i.move("]"), o;
}
function QR() {
  return {
    enter: {
      gfmFootnoteCallString: zR,
      gfmFootnoteCall: FR,
      gfmFootnoteDefinitionLabelString: jR,
      gfmFootnoteDefinition: BR
    },
    exit: {
      gfmFootnoteCallString: $R,
      gfmFootnoteCall: UR,
      gfmFootnoteDefinitionLabelString: HR,
      gfmFootnoteDefinition: VR
    }
  };
}
function qR(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: ew },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, o, l) {
    const s = o.createTracker(l);
    let a = s.move("[^");
    const u = o.enter("footnoteDefinition"), f = o.enter("label");
    return a += s.move(
      o.safe(o.associationId(r), { before: a, after: "]" })
    ), f(), a += s.move("]:"), r.children && r.children.length > 0 && (s.shift(4), a += s.move(
      (t ? `
` : " ") + o.indentLines(
        o.containerFlow(r, s.current()),
        t ? tw : YR
      )
    )), u(), a;
  }
}
function YR(e, t, n) {
  return t === 0 ? e : tw(e, t, n);
}
function tw(e, t, n) {
  return (n ? "" : "    ") + e;
}
const KR = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
nw.peek = eN;
function XR() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: ZR },
    exit: { strikethrough: JR }
  };
}
function GR() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: KR
      }
    ],
    handlers: { delete: nw }
  };
}
function ZR(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function JR(e) {
  this.exit(e);
}
function nw(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let l = i.move("~~");
  return l += n.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function eN() {
  return "~";
}
function tN(e) {
  return e.length;
}
function nN(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || tN, o = [], l = [], s = [], a = [];
  let u = 0, f = -1;
  for (; ++f < e.length; ) {
    const g = [], w = [];
    let h = -1;
    for (e[f].length > u && (u = e[f].length); ++h < e[f].length; ) {
      const y = rN(e[f][h]);
      if (n.alignDelimiters !== !1) {
        const v = i(y);
        w[h] = v, (a[h] === void 0 || v > a[h]) && (a[h] = v);
      }
      g.push(y);
    }
    l[f] = g, s[f] = w;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      o[c] = rm(r[c]);
  else {
    const g = rm(r);
    for (; ++c < u; )
      o[c] = g;
  }
  c = -1;
  const p = [], d = [];
  for (; ++c < u; ) {
    const g = o[c];
    let w = "", h = "";
    g === 99 ? (w = ":", h = ":") : g === 108 ? w = ":" : g === 114 && (h = ":");
    let y = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[c] - w.length - h.length
    );
    const v = w + "-".repeat(y) + h;
    n.alignDelimiters !== !1 && (y = w.length + y + h.length, y > a[c] && (a[c] = y), d[c] = y), p[c] = v;
  }
  l.splice(1, 0, p), s.splice(1, 0, d), f = -1;
  const m = [];
  for (; ++f < l.length; ) {
    const g = l[f], w = s[f];
    c = -1;
    const h = [];
    for (; ++c < u; ) {
      const y = g[c] || "";
      let v = "", C = "";
      if (n.alignDelimiters !== !1) {
        const P = a[c] - (w[c] || 0), b = o[c];
        b === 114 ? v = " ".repeat(P) : b === 99 ? P % 2 ? (v = " ".repeat(P / 2 + 0.5), C = " ".repeat(P / 2 - 0.5)) : (v = " ".repeat(P / 2), C = v) : C = " ".repeat(P);
      }
      n.delimiterStart !== !1 && !c && h.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && y === "") && (n.delimiterStart !== !1 || c) && h.push(" "), n.alignDelimiters !== !1 && h.push(v), h.push(y), n.alignDelimiters !== !1 && h.push(C), n.padding !== !1 && h.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && h.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? h.join("").replace(/ +$/, "") : h.join("")
    );
  }
  return m.join(`
`);
}
function rN(e) {
  return e == null ? "" : String(e);
}
function rm(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function iN(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const l = n.indentLines(
    n.containerFlow(e, o.current()),
    oN
  );
  return i(), l;
}
function oN(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function lN(e, t) {
  return im(e, t.inConstruct, !0) && !im(e, t.notInConstruct, !1);
}
function im(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function om(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && lN(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function sN(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return l;
}
function aN(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function uN(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function cN(e, t, n, r) {
  const i = uN(n), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (aN(e, n)) {
    const c = n.enter("codeIndented"), p = n.indentLines(o, fN);
    return c(), p;
  }
  const s = n.createTracker(r), a = i.repeat(Math.max(sN(o, i) + 1, 3)), u = n.enter("codeFenced");
  let f = s.move(a);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${l}`);
    f += s.move(
      n.safe(e.lang, {
        before: f,
        after: " ",
        encode: ["`"],
        ...s.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${l}`);
    f += s.move(" "), f += s.move(
      n.safe(e.meta, {
        before: f,
        after: `
`,
        encode: ["`"],
        ...s.current()
      })
    ), c();
  }
  return f += s.move(`
`), o && (f += s.move(o + `
`)), f += s.move(a), u(), f;
}
function fN(e, t, n) {
  return (n ? "" : "    ") + e;
}
function bd(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function dN(e, t, n, r) {
  const i = bd(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("definition");
  let s = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("[");
  return u += a.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...a.current()
    })
  ), u += a.move("]: "), s(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += a.move("<"), u += a.move(
    n.safe(e.url, { before: u, after: ">", ...a.current() })
  ), u += a.move(">")) : (s = n.enter("destinationRaw"), u += a.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...a.current()
    })
  )), s(), e.title && (s = n.enter(`title${o}`), u += a.move(" " + i), u += a.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...a.current()
    })
  ), u += a.move(i), s()), l(), u;
}
function pN(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function nl(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Vs(e, t, n) {
  const r = Wi(e), i = Wi(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
rw.peek = hN;
function rw(e, t, n, r) {
  const i = pN(n), o = n.enter("emphasis"), l = n.createTracker(r), s = l.move(i);
  let a = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: s,
      ...l.current()
    })
  );
  const u = a.charCodeAt(0), f = Vs(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  f.inside && (a = nl(u) + a.slice(1));
  const c = a.charCodeAt(a.length - 1), p = Vs(r.after.charCodeAt(0), c, i);
  p.inside && (a = a.slice(0, -1) + nl(c));
  const d = l.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: f.outside
  }, s + a + d;
}
function hN(e, t, n) {
  return n.options.emphasis || "*";
}
function mN(e, t) {
  let n = !1;
  return xd(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, jc;
  }), !!((!e.depth || e.depth < 3) && pd(e) && (t.options.setext || n));
}
function gN(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (mN(e, n)) {
    const f = n.enter("headingSetext"), c = n.enter("phrasing"), p = n.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return c(), f(), p + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      p.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), s = n.enter("headingAtx"), a = n.enter("phrasing");
  o.move(l + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(u) && (u = nl(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, n.options.closeAtx && (u += " " + l), a(), s(), u;
}
iw.peek = yN;
function iw(e) {
  return e.value || "";
}
function yN() {
  return "<";
}
ow.peek = vN;
function ow(e, t, n, r) {
  const i = bd(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("image");
  let s = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("![");
  return u += a.move(
    n.safe(e.alt, { before: u, after: "]", ...a.current() })
  ), u += a.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += a.move("<"), u += a.move(
    n.safe(e.url, { before: u, after: ">", ...a.current() })
  ), u += a.move(">")) : (s = n.enter("destinationRaw"), u += a.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...a.current()
    })
  )), s(), e.title && (s = n.enter(`title${o}`), u += a.move(" " + i), u += a.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...a.current()
    })
  ), u += a.move(i), s()), u += a.move(")"), l(), u;
}
function vN() {
  return "!";
}
lw.peek = wN;
function lw(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let a = s.move("![");
  const u = n.safe(e.alt, {
    before: a,
    after: "]",
    ...s.current()
  });
  a += s.move(u + "]["), l();
  const f = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: a,
    after: "]",
    ...s.current()
  });
  return l(), n.stack = f, o(), i === "full" || !u || u !== c ? a += s.move(c + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += s.move("]"), a;
}
function wN() {
  return "!";
}
sw.peek = xN;
function sw(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const l = n.unsafe[o], s = n.compilePattern(l);
    let a;
    if (l.atBreak)
      for (; a = s.exec(r); ) {
        let u = a.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(a.index + 1);
      }
  }
  return i + r + i;
}
function xN() {
  return "`";
}
function aw(e, t) {
  const n = pd(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
uw.peek = kN;
function uw(e, t, n, r) {
  const i = bd(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.createTracker(r);
  let s, a;
  if (aw(e, n)) {
    const f = n.stack;
    n.stack = [], s = n.enter("autolink");
    let c = l.move("<");
    return c += l.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })
    ), c += l.move(">"), s(), n.stack = f, c;
  }
  s = n.enter("link"), a = n.enter("label");
  let u = l.move("[");
  return u += l.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })
  ), u += l.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    n.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (a = n.enter("destinationRaw"), u += l.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), u += l.move(" " + i), u += l.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), a()), u += l.move(")"), s(), u;
}
function kN(e, t, n) {
  return aw(e, n) ? "<" : "[";
}
cw.peek = bN;
function cw(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let a = s.move("[");
  const u = n.containerPhrasing(e, {
    before: a,
    after: "]",
    ...s.current()
  });
  a += s.move(u + "]["), l();
  const f = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: a,
    after: "]",
    ...s.current()
  });
  return l(), n.stack = f, o(), i === "full" || !u || u !== c ? a += s.move(c + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += s.move("]"), a;
}
function bN() {
  return "[";
}
function Sd(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function SN(e) {
  const t = Sd(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function CN(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function fw(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function EN(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let l = e.ordered ? CN(n) : Sd(n);
  const s = e.ordered ? l === "." ? ")" : "." : SN(n);
  let a = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (a = !0), fw(n) === l && f
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const p = e.children[c];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
          a = !0;
          break;
        }
      }
    }
  }
  a && (l = s), n.bulletCurrent = l;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = l, n.bulletCurrent = o, i(), u;
}
function TN(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function PN(e, t, n, r) {
  const i = TN(n);
  let o = n.bulletCurrent || Sd(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const s = n.createTracker(r);
  s.move(o + " ".repeat(l - o.length)), s.shift(l);
  const a = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, s.current()),
    f
  );
  return a(), u;
  function f(c, p, d) {
    return p ? (d ? "" : " ".repeat(l)) + c : (d ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function AN(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), l = n.containerPhrasing(e, r);
  return o(), i(), l;
}
const RN = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Sa([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function NN(e, t, n, r) {
  return (e.children.some(function(l) {
    return RN(l);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function IN(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
dw.peek = _N;
function dw(e, t, n, r) {
  const i = IN(n), o = n.enter("strong"), l = n.createTracker(r), s = l.move(i + i);
  let a = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: s,
      ...l.current()
    })
  );
  const u = a.charCodeAt(0), f = Vs(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  f.inside && (a = nl(u) + a.slice(1));
  const c = a.charCodeAt(a.length - 1), p = Vs(r.after.charCodeAt(0), c, i);
  p.inside && (a = a.slice(0, -1) + nl(c));
  const d = l.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: f.outside
  }, s + a + d;
}
function _N(e, t, n) {
  return n.options.strong || "*";
}
function LN(e, t, n, r) {
  return n.safe(e.value, r);
}
function ON(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function DN(e, t, n) {
  const r = (fw(n) + (n.options.ruleSpaces ? " " : "")).repeat(ON(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const pw = {
  blockquote: iN,
  break: om,
  code: cN,
  definition: dN,
  emphasis: rw,
  hardBreak: om,
  heading: gN,
  html: iw,
  image: ow,
  imageReference: lw,
  inlineCode: sw,
  link: uw,
  linkReference: cw,
  list: EN,
  listItem: PN,
  paragraph: AN,
  root: NN,
  strong: dw,
  text: LN,
  thematicBreak: DN
};
function MN() {
  return {
    enter: {
      table: zN,
      tableData: lm,
      tableHeader: lm,
      tableRow: jN
    },
    exit: {
      codeText: BN,
      table: FN,
      tableData: Su,
      tableHeader: Su,
      tableRow: Su
    }
  };
}
function zN(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function FN(e) {
  this.exit(e), this.data.inTable = void 0;
}
function jN(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Su(e) {
  this.exit(e);
}
function lm(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function BN(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, $N));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function $N(e, t) {
  return t === "|" ? t : e;
}
function UN(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: p,
      table: l,
      tableCell: a,
      tableRow: s
    }
  };
  function l(d, m, g, w) {
    return u(f(d, g, w), d.align);
  }
  function s(d, m, g, w) {
    const h = c(d, g, w), y = u([h]);
    return y.slice(0, y.indexOf(`
`));
  }
  function a(d, m, g, w) {
    const h = g.enter("tableCell"), y = g.enter("phrasing"), v = g.containerPhrasing(d, {
      ...w,
      before: o,
      after: o
    });
    return y(), h(), v;
  }
  function u(d, m) {
    return nN(d, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(d, m, g) {
    const w = d.children;
    let h = -1;
    const y = [], v = m.enter("table");
    for (; ++h < w.length; )
      y[h] = c(w[h], m, g);
    return v(), y;
  }
  function c(d, m, g) {
    const w = d.children;
    let h = -1;
    const y = [], v = m.enter("tableRow");
    for (; ++h < w.length; )
      y[h] = a(w[h], d, m, g);
    return v(), y;
  }
  function p(d, m, g) {
    let w = pw.inlineCode(d, m, g);
    return g.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function HN() {
  return {
    exit: {
      taskListCheckValueChecked: sm,
      taskListCheckValueUnchecked: sm,
      paragraph: WN
    }
  };
}
function VN() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: QN }
  };
}
function sm(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function WN(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const s = i[o];
        if (s.type === "paragraph") {
          l = s;
          break;
        }
      }
      l === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function QN(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
  o && s.move(l);
  let a = pw.listItem(e, t, n, {
    ...r,
    ...s.current()
  });
  return o && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), a;
  function u(f) {
    return f + l;
  }
}
function qN() {
  return [
    ER(),
    QR(),
    XR(),
    MN(),
    HN()
  ];
}
function YN(e) {
  return {
    extensions: [
      TR(),
      qR(e),
      GR(),
      UN(e),
      VN()
    ]
  };
}
const KN = {
  tokenize: tI,
  partial: !0
}, hw = {
  tokenize: nI,
  partial: !0
}, mw = {
  tokenize: rI,
  partial: !0
}, gw = {
  tokenize: iI,
  partial: !0
}, XN = {
  tokenize: oI,
  partial: !0
}, yw = {
  name: "wwwAutolink",
  tokenize: JN,
  previous: ww
}, vw = {
  name: "protocolAutolink",
  tokenize: eI,
  previous: xw
}, Mn = {
  name: "emailAutolink",
  tokenize: ZN,
  previous: kw
}, yn = {};
function GN() {
  return {
    text: yn
  };
}
let Pr = 48;
for (; Pr < 123; )
  yn[Pr] = Mn, Pr++, Pr === 58 ? Pr = 65 : Pr === 91 && (Pr = 97);
yn[43] = Mn;
yn[45] = Mn;
yn[46] = Mn;
yn[95] = Mn;
yn[72] = [Mn, vw];
yn[104] = [Mn, vw];
yn[87] = [Mn, yw];
yn[119] = [Mn, yw];
function ZN(e, t, n) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !Hc(c) || !kw.call(r, r.previous) || Cd(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(c));
  }
  function s(c) {
    return Hc(c) ? (e.consume(c), s) : c === 64 ? (e.consume(c), a) : n(c);
  }
  function a(c) {
    return c === 46 ? e.check(XN, f, u)(c) : c === 45 || c === 95 || qe(c) ? (o = !0, e.consume(c), a) : f(c);
  }
  function u(c) {
    return e.consume(c), i = !0, a;
  }
  function f(c) {
    return o && i && nt(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function JN(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !ww.call(r, r.previous) || Cd(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(KN, e.attempt(hw, e.attempt(mw, o), n), n)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function eI(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && xw.call(r, r.previous) && !Cd(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), s) : n(c);
  }
  function s(c) {
    if (nt(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), s;
    if (c === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(c), a;
    }
    return n(c);
  }
  function a(c) {
    return c === 47 ? (e.consume(c), o ? u : (o = !0, a)) : n(c);
  }
  function u(c) {
    return c === null || $s(c) || he(c) || Yr(c) || xa(c) ? n(c) : e.attempt(hw, e.attempt(mw, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function tI(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : n(l);
  }
  function o(l) {
    return l === null ? n(l) : t(l);
  }
}
function nI(e, t, n) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(gw, a, s)(u) : u === null || he(u) || Yr(u) || u !== 45 && xa(u) ? a(u) : (o = !0, e.consume(u), l);
  }
  function s(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function a(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function rI(e, t) {
  let n = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (n++, e.consume(l), i) : l === 41 && r < n ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(gw, t, o)(l) : l === null || he(l) || Yr(l) ? t(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function iI(e, t, n) {
  return r;
  function r(s) {
    return s === 33 || s === 34 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 63 || s === 95 || s === 126 ? (e.consume(s), r) : s === 38 ? (e.consume(s), o) : s === 93 ? (e.consume(s), i) : (
      // `<` is an end.
      s === 60 || // So is whitespace.
      s === null || he(s) || Yr(s) ? t(s) : n(s)
    );
  }
  function i(s) {
    return s === null || s === 40 || s === 91 || he(s) || Yr(s) ? t(s) : r(s);
  }
  function o(s) {
    return nt(s) ? l(s) : n(s);
  }
  function l(s) {
    return s === 59 ? (e.consume(s), r) : nt(s) ? (e.consume(s), l) : n(s);
  }
}
function oI(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return qe(o) ? n(o) : t(o);
  }
}
function ww(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || he(e);
}
function xw(e) {
  return !nt(e);
}
function kw(e) {
  return !(e === 47 || Hc(e));
}
function Hc(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || qe(e);
}
function Cd(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const lI = {
  tokenize: hI,
  partial: !0
};
function sI() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: fI,
        continuation: {
          tokenize: dI
        },
        exit: pI
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: cI
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: aI,
        resolveTo: uI
      }
    }
  };
}
function aI(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const a = r.events[i][1];
    if (a.type === "labelImage") {
      l = a;
      break;
    }
    if (a.type === "gfmFootnoteCall" || a.type === "labelLink" || a.type === "label" || a.type === "image" || a.type === "link")
      break;
  }
  return s;
  function s(a) {
    if (!l || !l._balanced)
      return n(a);
    const u = Zt(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? n(a) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a));
  }
}
function uI(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, s = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", o, t],
    ["enter", l, t],
    ["exit", l, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...s), e;
}
function cI(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return s;
  function s(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), a;
  }
  function a(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || he(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(Zt(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return he(c) || (l = !0), o++, e.consume(c), c === 92 ? f : u;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function fI(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, s;
  return a;
  function a(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", f) : n(m);
  }
  function f(m) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      m === 93 && !s || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || he(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Zt(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return he(m) || (s = !0), l++, e.consume(m), m === 92 ? c : f;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, f) : f(m);
  }
  function p(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), se(e, d, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function d(m) {
    return t(m);
  }
}
function dI(e, t, n) {
  return e.check(ml, t, e.attempt(lI, t, n));
}
function pI(e) {
  e.exit("gfmFootnoteDefinition");
}
function hI(e, t, n) {
  const r = this;
  return se(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(o) : n(o);
  }
}
function mI(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(l, s) {
    let a = -1;
    for (; ++a < l.length; )
      if (l[a][0] === "enter" && l[a][1].type === "strikethroughSequenceTemporary" && l[a][1]._close) {
        let u = a;
        for (; u--; )
          if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && // If the sizes are the same:
          l[a][1].end.offset - l[a][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
            l[a][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, l[u][1].start),
              end: Object.assign({}, l[a][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, l[u][1].end),
              end: Object.assign({}, l[a][1].start)
            }, p = [["enter", f, s], ["enter", l[u][1], s], ["exit", l[u][1], s], ["enter", c, s]], d = s.parser.constructs.insideSpan.null;
            d && Ct(p, p.length, 0, ka(d, l.slice(u + 1, a), s)), Ct(p, p.length, 0, [["exit", c, s], ["enter", l[a][1], s], ["exit", l[a][1], s], ["exit", f, s]]), Ct(l, u - 1, a - u + 3, p), a = u + p.length - 2;
            break;
          }
      }
    for (a = -1; ++a < l.length; )
      l[a][1].type === "strikethroughSequenceTemporary" && (l[a][1].type = "data");
    return l;
  }
  function o(l, s, a) {
    const u = this.previous, f = this.events;
    let c = 0;
    return p;
    function p(m) {
      return u === 126 && f[f.length - 1][1].type !== "characterEscape" ? a(m) : (l.enter("strikethroughSequenceTemporary"), d(m));
    }
    function d(m) {
      const g = Wi(u);
      if (m === 126)
        return c > 1 ? a(m) : (l.consume(m), c++, d);
      if (c < 2 && !n) return a(m);
      const w = l.exit("strikethroughSequenceTemporary"), h = Wi(m);
      return w._open = !h || h === 2 && !!g, w._close = !g || g === 2 && !!h, s(m);
    }
  }
}
class gI {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    yI(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        t.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function yI(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function vI(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function wI() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: xI,
        resolveAll: kI
      }
    }
  };
}
function xI(e, t, n) {
  const r = this;
  let i = 0, o = 0, l;
  return s;
  function s(E) {
    let M = r.events.length - 1;
    for (; M > -1; ) {
      const z = r.events[M][1].type;
      if (z === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      z === "linePrefix") M--;
      else break;
    }
    const L = M > -1 ? r.events[M][1].type : null, H = L === "tableHead" || L === "tableRow" ? b : a;
    return H === b && r.parser.lazy[r.now().line] ? n(E) : H(E);
  }
  function a(E) {
    return e.enter("tableHead"), e.enter("tableRow"), u(E);
  }
  function u(E) {
    return E === 124 || (l = !0, o += 1), f(E);
  }
  function f(E) {
    return E === null ? n(E) : K(E) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), d) : n(E) : re(E) ? se(e, f, "whitespace")(E) : (o += 1, l && (l = !1, i += 1), E === 124 ? (e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), l = !0, f) : (e.enter("data"), c(E)));
  }
  function c(E) {
    return E === null || E === 124 || he(E) ? (e.exit("data"), f(E)) : (e.consume(E), E === 92 ? p : c);
  }
  function p(E) {
    return E === 92 || E === 124 ? (e.consume(E), c) : c(E);
  }
  function d(E) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(E) : (e.enter("tableDelimiterRow"), l = !1, re(E) ? se(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(E) : m(E));
  }
  function m(E) {
    return E === 45 || E === 58 ? w(E) : E === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), g) : P(E);
  }
  function g(E) {
    return re(E) ? se(e, w, "whitespace")(E) : w(E);
  }
  function w(E) {
    return E === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(E), e.exit("tableDelimiterMarker"), h) : E === 45 ? (o += 1, h(E)) : E === null || K(E) ? C(E) : P(E);
  }
  function h(E) {
    return E === 45 ? (e.enter("tableDelimiterFiller"), y(E)) : P(E);
  }
  function y(E) {
    return E === 45 ? (e.consume(E), y) : E === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(E), e.exit("tableDelimiterMarker"), v) : (e.exit("tableDelimiterFiller"), v(E));
  }
  function v(E) {
    return re(E) ? se(e, C, "whitespace")(E) : C(E);
  }
  function C(E) {
    return E === 124 ? m(E) : E === null || K(E) ? !l || i !== o ? P(E) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(E)) : P(E);
  }
  function P(E) {
    return n(E);
  }
  function b(E) {
    return e.enter("tableRow"), A(E);
  }
  function A(E) {
    return E === 124 ? (e.enter("tableCellDivider"), e.consume(E), e.exit("tableCellDivider"), A) : E === null || K(E) ? (e.exit("tableRow"), t(E)) : re(E) ? se(e, A, "whitespace")(E) : (e.enter("data"), N(E));
  }
  function N(E) {
    return E === null || E === 124 || he(E) ? (e.exit("data"), A(E)) : (e.consume(E), E === 92 ? I : N);
  }
  function I(E) {
    return E === 92 || E === 124 ? (e.consume(E), N) : N(E);
  }
}
function kI(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], s = !1, a = 0, u, f, c;
  const p = new gI();
  for (; ++n < e.length; ) {
    const d = e[n], m = d[1];
    d[0] === "enter" ? m.type === "tableHead" ? (s = !1, a !== 0 && (am(p, t, a, u, f), f = void 0, a = 0), u = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, p.add(n, 0, [["enter", u, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], l = [0, n + 1, 0, 0], s && (s = !1, f = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, p.add(n, 0, [["enter", f, t]])), i = m.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = Vl(p, t, o, i, void 0, c), o = [0, 0, 0, 0]), l[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], c = Vl(p, t, o, i, void 0, c)), o = l, l = [o[1], n, 0, 0])) : m.type === "tableHead" ? (s = !0, a = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (a = n, o[1] !== 0 ? (l[0] = l[1], c = Vl(p, t, o, i, n, c)) : l[1] !== 0 && (c = Vl(p, t, l, i, n, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (l[3] = n);
  }
  for (a !== 0 && am(p, t, a, u, f), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const d = t.events[n];
    d[0] === "enter" && d[1].type === "table" && (d[1]._align = vI(t.events, n));
  }
  return e;
}
function Vl(e, t, n, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", s = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, ii(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const a = ii(t.events, n[1]);
  if (o = {
    type: l,
    start: Object.assign({}, a),
    // Note: correct end is set later.
    end: Object.assign({}, a)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const u = ii(t.events, n[2]), f = ii(t.events, n[3]), c = {
      type: s,
      start: Object.assign({}, u),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const p = t.events[n[2]], d = t.events[n[3]];
      if (p[1].end = Object.assign({}, d[1].end), p[1].type = "chunkText", p[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, g = n[3] - n[2] - 1;
        e.add(m, g, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, ii(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function am(e, t, n, r, i) {
  const o = [], l = ii(t.events, n);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, t])), r.end = Object.assign({}, l), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function ii(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const bI = {
  name: "tasklistCheck",
  tokenize: CI
};
function SI() {
  return {
    text: {
      91: bI
    }
  };
}
function CI(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(a) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(a) {
    return he(a) ? (e.enter("taskListCheckValueUnchecked"), e.consume(a), e.exit("taskListCheckValueUnchecked"), l) : a === 88 || a === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(a), e.exit("taskListCheckValueChecked"), l) : n(a);
  }
  function l(a) {
    return a === 93 ? (e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(a);
  }
  function s(a) {
    return K(a) ? t(a) : re(a) ? e.check({
      tokenize: EI
    }, t, n)(a) : n(a);
  }
}
function EI(e, t, n) {
  return se(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function TI(e) {
  return I0([
    GN(),
    sI(),
    mI(e),
    wI(),
    SI()
  ]);
}
const PI = {};
function AI(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || PI, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(TI(n)), o.push(qN()), l.push(YN(n));
}
const RI = ({ content: e, role: t }) => {
  const n = t === "user";
  return /* @__PURE__ */ T.jsx(
    "div",
    {
      className: Re(
        "flex w-full animate-fade-in",
        n ? "justify-end" : "justify-start"
      ),
      children: /* @__PURE__ */ T.jsx(
        "div",
        {
          className: Re(
            "max-w-[85%] px-4 py-3 md:max-w-[70%] text-left",
            n ? "bg-chat-user text-chat-user-foreground" : "bg-chat-assistant text-chat-assistant-foreground"
          ),
          style: {
            borderRadius: `var(--message-bubble-radius) var(--message-bubble-radius) ${n ? "var(--message-bubble-tail-radius) var(--message-bubble-radius)" : "var(--message-bubble-radius) var(--message-bubble-tail-radius)"}`
          },
          children: n ? /* @__PURE__ */ T.jsx("p", { className: "text-sm leading-relaxed", children: e }) : /* @__PURE__ */ T.jsx("div", { className: "prose prose-sm max-w-none text-left text-chat-assistant-foreground prose-headings:text-chat-assistant-foreground prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2 prose-h1:text-lg prose-h2:text-base prose-p:text-chat-assistant-foreground prose-p:my-2 prose-p:leading-relaxed prose-strong:text-chat-assistant-foreground prose-ul:my-2 prose-ul:pl-6 prose-ul:list-disc prose-ol:my-2 prose-ol:pl-6 prose-ol:list-decimal prose-li:text-chat-assistant-foreground prose-li:my-1 prose-li:marker:text-chat-assistant-foreground prose-img:rounded prose-img:max-w-full prose-img:h-auto prose-img:my-2 [&>*]:text-left", children: /* @__PURE__ */ T.jsx(
            mR,
            {
              remarkPlugins: [AI],
              components: {
                a: ({ href: r, children: i }) => /* @__PURE__ */ T.jsx(
                  "a",
                  {
                    href: r,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline break-all opacity-90 hover:opacity-100",
                    children: i
                  }
                ),
                img: ({ src: r, alt: i }) => /* @__PURE__ */ T.jsx(
                  "img",
                  {
                    src: r,
                    alt: i || "",
                    className: "rounded max-w-full h-auto my-2",
                    loading: "lazy"
                  }
                )
              },
              children: e
            }
          ) })
        }
      )
    }
  );
}, NI = () => /* @__PURE__ */ T.jsx("div", { className: "flex items-center gap-1 px-4 py-3", children: /* @__PURE__ */ T.jsxs("div", { className: "flex items-center gap-1 rounded-2xl rounded-bl-md bg-chat-assistant px-4 py-3", children: [
  /* @__PURE__ */ T.jsx(
    "span",
    {
      className: "h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot",
      style: { animationDelay: "0s" }
    }
  ),
  /* @__PURE__ */ T.jsx(
    "span",
    {
      className: "h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot",
      style: { animationDelay: "0.16s" }
    }
  ),
  /* @__PURE__ */ T.jsx(
    "span",
    {
      className: "h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot",
      style: { animationDelay: "0.32s" }
    }
  )
] }) }), II = uv(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ti = k.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => {
    const l = r ? ok : "button";
    return /* @__PURE__ */ T.jsx(l, { className: Re(II({ variant: t, size: n, className: e })), ref: o, ...i });
  }
);
Ti.displayName = "Button";
const Cu = 768;
function _I() {
  const [e, t] = k.useState(void 0);
  return k.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Cu - 1}px)`), r = () => {
      t(window.innerWidth < Cu);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Cu), () => n.removeEventListener("change", r);
  }, []), !!e;
}
const bw = ({ onSelect: e }) => {
  const { categories: t, mode: n } = Ji(), r = _I(), [i, o] = k.useState(
    () => {
      var a;
      return ((a = t == null ? void 0 : t[0]) == null ? void 0 : a.title) ?? "";
    }
  ), l = k.useMemo(() => {
    const a = t == null ? void 0 : t.find((u) => u.title === i);
    return (a == null ? void 0 : a.questions) ?? [];
  }, [t, i]);
  if (!t || t.length === 0)
    return null;
  const s = (a) => {
    const u = a.target.value;
    u && (e(u), a.target.value = "");
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ T.jsx(
      "div",
      {
        className: Re(
          "flex overflow-x-auto overflow-y-hidden scrollbar-hide",
          n !== "window" && "justify-center"
        ),
        style: { borderBottom: "1px solid var(--tab-container-border)" },
        children: t.map((a) => /* @__PURE__ */ T.jsx(
          "button",
          {
            type: "button",
            onClick: () => o(a.title),
            className: Re(
              "px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors",
              "-mb-px flex-shrink-0",
              i === a.title ? "text-primary" : "border-b-2 border-transparent text-muted-foreground hover:text-foreground"
            ),
            style: i === a.title ? { borderBottom: "2px solid hsl(var(--tab-active-border))" } : void 0,
            children: a.title.toUpperCase()
          },
          a.title
        ))
      }
    ),
    /* @__PURE__ */ T.jsx("div", { className: "p-4", children: r ? /* @__PURE__ */ T.jsxs(
      "select",
      {
        onChange: s,
        defaultValue: "",
        className: "w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        children: [
          /* @__PURE__ */ T.jsx("option", { value: "", disabled: !0, children: "Select a question..." }),
          l.map((a) => /* @__PURE__ */ T.jsx("option", { value: a, children: a }, a))
        ]
      }
    ) : /* @__PURE__ */ T.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: l.map((a) => /* @__PURE__ */ T.jsx(
      Ti,
      {
        variant: "outline",
        size: "sm",
        onClick: () => e(a),
        className: "border-[var(--chip-border)] bg-[hsl(var(--chip-bg))] text-[hsl(var(--chip-text))] transition-colors h-auto py-2 px-3 hover:bg-[hsl(var(--chip-hover-bg))] hover:border-[hsl(var(--chip-hover-border))] hover:text-[hsl(var(--chip-hover-text))]",
        style: { borderRadius: "var(--chip-radius)" },
        children: a
      },
      a
    )) }) })
  ] });
}, LI = ({ suggestions: e, onSelect: t }) => e.length === 0 ? null : /* @__PURE__ */ T.jsx("div", { className: "flex flex-wrap gap-2 px-4 py-2", children: e.map((n) => /* @__PURE__ */ T.jsx(
  Ti,
  {
    variant: "outline",
    size: "sm",
    onClick: () => t(n),
    className: "border-[var(--chip-border)] bg-[hsl(var(--chip-bg))] text-[hsl(var(--chip-text))] transition-colors h-auto py-2 px-3 hover:bg-[hsl(var(--chip-hover-bg))] hover:border-[hsl(var(--chip-hover-border))] hover:text-[hsl(var(--chip-hover-text))]",
    style: { borderRadius: "var(--chip-radius)" },
    children: n
  },
  n
)) });
function OI(e) {
  if (!e) return [];
  const n = e.split(new RegExp("(?<=[.!?])\\s+")).reverse().find((a) => a.includes("?"));
  if (!n) return [];
  const r = [
    /would you like (?:me to |to )?(.+)\?/i,
    /do you want (?:me to |to )?(?:know |learn |hear )?(about |more about )?(.+)\?/i,
    /i can (?:explain|help with|provide information about|tell you about) (.+)\?/i,
    /shall i (?:explain|go into|cover) (.+)\?/i,
    /interested in (?:learning about |hearing about )?(.+)\?/i
  ];
  let i = "";
  for (const a of r) {
    const u = n.match(a);
    if (u) {
      i = u[u.length - 1];
      break;
    }
  }
  if (!i) return [];
  const l = i.split(/,\s*(?:or|and)?\s*|\s+or\s+|\s+and\s+/).map((a) => a.trim()).filter((a) => a.length > 0 && a.length < 100).map((a) => {
    let u = a.replace(/^(explain |tell me |learn |hear |know |more )/i, "").replace(/^(about |more about )/i, "").trim();
    return u = u.charAt(0).toUpperCase() + u.slice(1), u = u.replace(/[?.!]+$/, ""), u;
  });
  return [...new Set(l)].filter((a) => a.length >= 3).slice(0, 4);
}
const DI = () => {
  const { welcomeTitle: e, welcomeMessage: t } = Ji();
  return /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center justify-center gap-2 px-4 py-6 text-center", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "text-xl font-semibold text-foreground", children: e }),
    /* @__PURE__ */ T.jsx("p", { className: "max-w-md text-muted-foreground", children: t })
  ] });
}, um = ({
  messages: e,
  isLoading: t,
  onQuickAction: n,
  hideWelcome: r = !1
}) => {
  const i = k.useRef(null), o = k.useRef(/* @__PURE__ */ new Map()), l = k.useRef(0), s = k.useRef(!1), { mode: a } = Ji(), u = a !== "window", f = k.useMemo(
    () => e.filter((p) => p.role === "user" || p.role === "assistant"),
    [e]
  ), c = k.useMemo(() => {
    if (t) return [];
    const p = f[f.length - 1];
    return (p == null ? void 0 : p.role) === "assistant" ? OI(p.content) : [];
  }, [f, t]);
  return k.useEffect(() => {
    var w;
    const p = (w = i.current) == null ? void 0 : w.querySelector("[data-radix-scroll-area-viewport]");
    if (!p) return;
    const d = f.length, m = l.current, g = s.current;
    if (d > m) {
      const h = f[d - 1];
      if (h.role === "user")
        p.scrollTop = p.scrollHeight;
      else if (h.role === "assistant") {
        const y = o.current.get(h.id);
        y && requestAnimationFrame(() => {
          const v = p.getBoundingClientRect(), C = y.getBoundingClientRect(), P = p.scrollTop + (C.top - v.top);
          p.scrollTo({ top: P, behavior: "smooth" });
        });
      }
    } else t && !g && (p.scrollTop = p.scrollHeight);
    l.current = d, s.current = t;
  }, [f, t]), k.useEffect(() => {
    var p;
    if (!t && c.length > 0) {
      const d = (p = i.current) == null ? void 0 : p.querySelector("[data-radix-scroll-area-viewport]");
      if (d) {
        const m = d.scrollHeight - d.scrollTop - d.clientHeight;
        m > 0 && m < 100 && (d.scrollTop = d.scrollHeight);
      }
    }
  }, [c, t]), /* @__PURE__ */ T.jsxs("div", { className: "flex-1 min-h-0 flex flex-col gap-4 p-4 overflow-hidden", children: [
    !r && /* @__PURE__ */ T.jsx(DI, {}),
    !r && /* @__PURE__ */ T.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ T.jsx(bw, { onSelect: n }) }),
    /* @__PURE__ */ T.jsx(
      "div",
      {
        className: Re(
          "flex-1 min-h-0 flex flex-col overflow-hidden",
          u && "mx-auto bg-[hsl(var(--message-container-bg))]"
        ),
        style: u ? {
          border: "var(--message-container-border)",
          maxWidth: "var(--message-container-max-width)",
          minHeight: "var(--message-container-min-height)",
          width: "100%"
        } : void 0,
        children: /* @__PURE__ */ T.jsx(m0, { className: "flex-1 min-h-0", ref: i, children: /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col gap-4 p-4", children: [
          f.map((p) => /* @__PURE__ */ T.jsx(
            "div",
            {
              ref: (d) => {
                d ? o.current.set(p.id, d) : o.current.delete(p.id);
              },
              children: /* @__PURE__ */ T.jsx(
                RI,
                {
                  content: p.content,
                  role: p.role
                }
              )
            },
            p.id
          )),
          t && /* @__PURE__ */ T.jsx(NI, {}),
          !t && c.length > 0 && /* @__PURE__ */ T.jsx(
            LI,
            {
              suggestions: c,
              onSelect: n
            }
          )
        ] }) })
      }
    )
  ] });
}, Vc = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ T.jsx(
  "textarea",
  {
    className: Re(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t
  }
));
Vc.displayName = "Textarea";
const cm = ({ onSend: e, isLoading: t }) => {
  var u, f, c, p, d;
  const n = Ji(), [r, i] = k.useState(""), o = n.mode !== "window" && n.inputLayout === "embedded", l = n.mode !== "window" && ((u = n.i18n) == null ? void 0 : u.sendButtonText), s = (m) => {
    m.preventDefault(), r.trim() && !t && (e(r.trim()), i(""));
  }, a = (m) => {
    m.key === "Enter" && !m.shiftKey && (m.preventDefault(), s(m));
  };
  return o ? /* @__PURE__ */ T.jsx(
    "form",
    {
      onSubmit: s,
      className: "bg-card p-4",
      style: { borderTop: "1px solid var(--input-container-border)" },
      children: /* @__PURE__ */ T.jsxs(
        "div",
        {
          className: "flex items-stretch border border-input bg-[hsl(var(--input-container-bg))] overflow-hidden",
          style: { borderRadius: "var(--input-radius)" },
          children: [
            /* @__PURE__ */ T.jsx(
              Vc,
              {
                value: r,
                onChange: (m) => i(m.target.value),
                onKeyDown: a,
                placeholder: ((f = n.i18n) == null ? void 0 : f.inputPlaceholder) || "Ask me anything about EV home charging...",
                className: "min-h-[44px] max-h-32 resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 text-[hsl(var(--input-text))]",
                disabled: t
              }
            ),
            /* @__PURE__ */ T.jsx(
              Ti,
              {
                type: "submit",
                disabled: !r.trim() || t,
                className: Re(
                  "h-auto shrink-0 px-6 self-stretch hover:bg-[hsl(var(--primary-hover))]",
                  l ? "min-w-[140px]" : "w-14"
                ),
                style: {
                  borderRadius: "var(--button-radius)",
                  backgroundColor: "hsl(var(--primary))"
                },
                children: l ? (c = n.i18n) == null ? void 0 : c.sendButtonText : /* @__PURE__ */ T.jsx(Wp, { className: "h-5 w-5" })
              }
            )
          ]
        }
      )
    }
  ) : /* @__PURE__ */ T.jsxs(
    "form",
    {
      onSubmit: s,
      className: "flex items-end gap-2 bg-card p-4",
      style: { borderTop: "1px solid var(--input-container-border)" },
      children: [
        /* @__PURE__ */ T.jsx(
          Vc,
          {
            value: r,
            onChange: (m) => i(m.target.value),
            onKeyDown: a,
            placeholder: ((p = n.i18n) == null ? void 0 : p.inputPlaceholder) || "Ask me anything about EV home charging...",
            className: "min-h-[44px] max-h-32 resize-none border-input bg-background text-[hsl(var(--input-text))]",
            style: { borderRadius: "var(--input-radius)" },
            disabled: t
          }
        ),
        l ? /* @__PURE__ */ T.jsx(
          Ti,
          {
            type: "submit",
            disabled: !r.trim() || t,
            className: "h-11 shrink-0 px-4 hover:bg-[hsl(var(--primary-hover))]",
            style: {
              borderRadius: "var(--button-radius)",
              backgroundColor: "hsl(var(--primary))"
            },
            children: (d = n.i18n) == null ? void 0 : d.sendButtonText
          }
        ) : /* @__PURE__ */ T.jsx(
          Ti,
          {
            type: "submit",
            size: "icon",
            disabled: !r.trim() || t,
            className: "h-11 w-11 shrink-0 hover:bg-[hsl(var(--primary-hover))]",
            style: {
              borderRadius: "var(--button-radius)",
              backgroundColor: "hsl(var(--primary))"
            },
            children: /* @__PURE__ */ T.jsx(Wp, { className: "h-5 w-5" })
          }
        )
      ]
    }
  );
}, MI = () => {
  const { welcomeTitle: e, welcomeMessage: t } = Ji();
  return /* @__PURE__ */ T.jsxs("div", { className: "flex flex-col items-center justify-center gap-2 px-4 py-6 text-center", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "text-xl font-semibold text-foreground", children: e }),
    /* @__PURE__ */ T.jsx("p", { className: "max-w-md text-muted-foreground", children: t })
  ] });
}, Sw = ({ className: e, onClearMessagesRef: t }) => {
  const { messages: n, sendMessage: r, isLoading: i, clearMessages: o } = kE(), { isEmbedded: l, mode: s, inputPosition: a } = Ji();
  k.useEffect(() => {
    t == null || t(o);
  }, [t, o]);
  const u = (p) => {
    r(p);
  }, f = (p) => {
    u(p);
  }, c = !l && s !== "window" && s !== "fullscreen";
  return a === "above" && s !== "window" ? /* @__PURE__ */ T.jsxs("div", { className: e || "flex h-full flex-col bg-background relative overflow-hidden", children: [
    c && /* @__PURE__ */ T.jsx(dh, { onNewChat: o }),
    !c && n.length > 0 && /* @__PURE__ */ T.jsx(
      "button",
      {
        onClick: o,
        className: "absolute top-2 right-2 p-2 rounded-lg hover:bg-muted transition-colors z-10",
        "aria-label": "Start new chat",
        title: "New chat",
        children: /* @__PURE__ */ T.jsx(kc, { className: "h-5 w-5 text-muted-foreground" })
      }
    ),
    /* @__PURE__ */ T.jsxs("div", { className: "flex-shrink-0", children: [
      /* @__PURE__ */ T.jsx(MI, {}),
      /* @__PURE__ */ T.jsx("div", { className: "flex justify-center px-4 pb-4", children: /* @__PURE__ */ T.jsx(bw, { onSelect: f }) }),
      /* @__PURE__ */ T.jsx(cm, { onSend: u, isLoading: i })
    ] }),
    /* @__PURE__ */ T.jsx(
      um,
      {
        messages: n,
        isLoading: i,
        onQuickAction: f,
        hideWelcome: !0
      }
    )
  ] }) : /* @__PURE__ */ T.jsxs("div", { className: e || "flex h-full flex-col bg-background relative overflow-hidden", children: [
    c && /* @__PURE__ */ T.jsx(dh, { onNewChat: o }),
    !c && n.length > 0 && /* @__PURE__ */ T.jsx(
      "button",
      {
        onClick: o,
        className: "absolute top-2 right-2 p-2 rounded-lg hover:bg-muted transition-colors z-10",
        "aria-label": "Start new chat",
        title: "New chat",
        children: /* @__PURE__ */ T.jsx(kc, { className: "h-5 w-5 text-muted-foreground" })
      }
    ),
    /* @__PURE__ */ T.jsx(
      um,
      {
        messages: n,
        isLoading: i,
        onQuickAction: f
      }
    ),
    /* @__PURE__ */ T.jsx(cm, { onSend: u, isLoading: i })
  ] });
}, zI = ({ position: e = "bottom-right" }) => {
  const [t, n] = k.useState(!1), r = {
    "bottom-right": "right-4 bottom-4",
    "bottom-left": "left-4 bottom-4"
  }, i = {
    "bottom-right": "right-4 bottom-20",
    "bottom-left": "left-4 bottom-20"
  };
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: Re(
          "fixed z-50 w-[380px] h-[600px] max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden",
          "bg-background border border-border",
          "transition-all duration-300 ease-out",
          i[e],
          t ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        ),
        children: [
          /* @__PURE__ */ T.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border bg-card", children: [
            /* @__PURE__ */ T.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ T.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ T.jsx(Vp, { className: "h-4 w-4 text-primary-foreground" }) }),
              /* @__PURE__ */ T.jsx("span", { className: "font-medium text-foreground", children: "Chat Assistant" })
            ] }),
            /* @__PURE__ */ T.jsx(
              "button",
              {
                onClick: () => n(!1),
                className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                "aria-label": "Close chat",
                children: /* @__PURE__ */ T.jsx(bc, { className: "h-5 w-5 text-muted-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ T.jsx("div", { className: "h-[calc(100%-56px)]", children: /* @__PURE__ */ T.jsx(Sw, {}) })
        ]
      }
    ),
    /* @__PURE__ */ T.jsxs(
      "button",
      {
        onClick: () => n(!t),
        className: Re(
          "fixed z-50 flex items-center justify-center",
          "w-14 h-14 rounded-full shadow-lg",
          "bg-primary text-primary-foreground",
          "hover:scale-105 active:scale-95",
          "transition-all duration-200 ease-out",
          r[e]
        ),
        "aria-label": t ? "Close chat" : "Open chat",
        children: [
          /* @__PURE__ */ T.jsx(
            "div",
            {
              className: Re(
                "transition-transform duration-200",
                t ? "rotate-90 scale-0" : "rotate-0 scale-100"
              ),
              children: /* @__PURE__ */ T.jsx(Vp, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ T.jsx(
            "div",
            {
              className: Re(
                "absolute transition-transform duration-200",
                t ? "rotate-0 scale-100" : "-rotate-90 scale-0"
              ),
              children: /* @__PURE__ */ T.jsx(bc, { className: "h-6 w-6" })
            }
          )
        ]
      }
    )
  ] });
};
let go = null;
function FI(e = {}) {
  const t = td(e), n = new fE(), r = t.mode === "window" ? t.target || "body" : t.target, i = document.querySelector(r);
  if (!i)
    return console.error(`[EV Chat Widget] Container not found: ${r}`), () => {
    };
  const o = document.createElement("div");
  o.className = "jt-ev-chat-widget", o.setAttribute("data-ev-chat-root", "true"), t.mode === "window" ? document.body.appendChild(o) : i.appendChild(o), go = Ly(o);
  const l = t.mode === "window" ? /* @__PURE__ */ T.jsx(zI, { position: t.position }) : /* @__PURE__ */ T.jsx(Sw, {});
  return go.render(
    /* @__PURE__ */ T.jsx(k.StrictMode, { children: /* @__PURE__ */ T.jsx(pE, { client: n, children: /* @__PURE__ */ T.jsx($C, { children: /* @__PURE__ */ T.jsxs(
      wE,
      {
        overrideConfig: {
          ...t,
          isEmbedded: !0
        },
        children: [
          l,
          /* @__PURE__ */ T.jsx(zb, {}),
          /* @__PURE__ */ T.jsx(mS, {})
        ]
      }
    ) }) }) })
  ), () => {
    go && (go.unmount(), go = null), o.remove();
  };
}
function fm() {
  const e = window.EVChatConfig;
  (e != null && e.container || e != null && e.target) && FI(e);
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", fm) : setTimeout(fm, 0));
export {
  FI as createChat,
  FI as default
};
//# sourceMappingURL=ev-chat.js.map
