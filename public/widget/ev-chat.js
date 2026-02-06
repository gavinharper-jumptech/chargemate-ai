var of = (e) => {
  throw TypeError(e);
};
var ma = (e, t, n) => t.has(e) || of("Cannot " + n);
var O = (e, t, n) => (ma(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ae = (e, t, n) => t.has(e) ? of("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), J = (e, t, n, r) => (ma(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), $e = (e, t, n) => (ma(e, t, "access private method"), n);
var cl = (e, t, n, r) => ({
  set _(o) {
    J(e, t, o, n);
  },
  get _() {
    return O(e, t, r);
  }
});
function A0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Jl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ls(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yh = { exports: {} }, Ms = {}, Kh = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zi = Symbol.for("react.element"), _0 = Symbol.for("react.portal"), I0 = Symbol.for("react.fragment"), O0 = Symbol.for("react.strict_mode"), L0 = Symbol.for("react.profiler"), M0 = Symbol.for("react.provider"), D0 = Symbol.for("react.context"), z0 = Symbol.for("react.forward_ref"), j0 = Symbol.for("react.suspense"), F0 = Symbol.for("react.memo"), B0 = Symbol.for("react.lazy"), lf = Symbol.iterator;
function $0(e) {
  return e === null || typeof e != "object" ? null : (e = lf && e[lf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Xh = Object.assign, Gh = {};
function $o(e, t, n) {
  this.props = e, this.context = t, this.refs = Gh, this.updater = n || qh;
}
$o.prototype.isReactComponent = {};
$o.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
$o.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zh() {
}
Zh.prototype = $o.prototype;
function Tc(e, t, n) {
  this.props = e, this.context = t, this.refs = Gh, this.updater = n || qh;
}
var Nc = Tc.prototype = new Zh();
Nc.constructor = Tc;
Xh(Nc, $o.prototype);
Nc.isPureReactComponent = !0;
var sf = Array.isArray, Jh = Object.prototype.hasOwnProperty, Rc = { current: null }, em = { key: !0, ref: !0, __self: !0, __source: !0 };
function tm(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Jh.call(t, r) && !em.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Zi, type: e, key: i, ref: l, props: o, _owner: Rc.current };
}
function U0(e, t) {
  return { $$typeof: Zi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ac(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zi;
}
function H0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var af = /\/+/g;
function ga(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? H0("" + e.key) : t.toString(36);
}
function Dl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Zi:
        case _0:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + ga(l, 0) : r, sf(o) ? (n = "", e != null && (n = e.replace(af, "$&/") + "/"), Dl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Ac(o) && (o = U0(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(af, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", sf(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + ga(i, s);
    l += Dl(i, t, n, a, o);
  }
  else if (a = $0(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + ga(i, s++), l += Dl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function dl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Dl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function V0(e) {
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
var tt = { current: null }, zl = { transition: null }, W0 = { ReactCurrentDispatcher: tt, ReactCurrentBatchConfig: zl, ReactCurrentOwner: Rc };
function nm() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: dl, forEach: function(e, t, n) {
  dl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return dl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return dl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ac(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = $o;
re.Fragment = I0;
re.Profiler = L0;
re.PureComponent = Tc;
re.StrictMode = O0;
re.Suspense = j0;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W0;
re.act = nm;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Xh({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Rc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) Jh.call(t, a) && !em.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Zi, type: e.type, key: o, ref: i, props: r, _owner: l };
};
re.createContext = function(e) {
  return e = { $$typeof: D0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: M0, _context: e }, e.Consumer = e;
};
re.createElement = tm;
re.createFactory = function(e) {
  var t = tm.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: z0, render: e };
};
re.isValidElement = Ac;
re.lazy = function(e) {
  return { $$typeof: B0, _payload: { _status: -1, _result: e }, _init: V0 };
};
re.memo = function(e, t) {
  return { $$typeof: F0, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = zl.transition;
  zl.transition = {};
  try {
    e();
  } finally {
    zl.transition = t;
  }
};
re.unstable_act = nm;
re.useCallback = function(e, t) {
  return tt.current.useCallback(e, t);
};
re.useContext = function(e) {
  return tt.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return tt.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return tt.current.useEffect(e, t);
};
re.useId = function() {
  return tt.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return tt.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return tt.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return tt.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return tt.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return tt.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return tt.current.useRef(e);
};
re.useState = function(e) {
  return tt.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return tt.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return tt.current.useTransition();
};
re.version = "18.3.1";
Kh.exports = re;
var S = Kh.exports;
const $ = /* @__PURE__ */ Ls(S), Q0 = /* @__PURE__ */ A0({
  __proto__: null,
  default: $
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y0 = S, K0 = Symbol.for("react.element"), q0 = Symbol.for("react.fragment"), X0 = Object.prototype.hasOwnProperty, G0 = Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function rm(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) X0.call(t, r) && !Z0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: K0, type: e, key: i, ref: l, props: o, _owner: G0.current };
}
Ms.Fragment = q0;
Ms.jsx = rm;
Ms.jsxs = rm;
Yh.exports = Ms;
var C = Yh.exports, om = { exports: {} }, Et = {}, im = { exports: {} }, lm = {};
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
  function t(R, M) {
    var w = R.length;
    R.push(M);
    e: for (; 0 < w; ) {
      var K = w - 1 >>> 1, Q = R[K];
      if (0 < o(Q, M)) R[K] = M, R[w] = Q, w = K;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var M = R[0], w = R.pop();
    if (w !== M) {
      R[0] = w;
      e: for (var K = 0, Q = R.length, b = Q >>> 1; K < b; ) {
        var q = 2 * (K + 1) - 1, de = R[q], ie = q + 1, oe = R[ie];
        if (0 > o(de, w)) ie < Q && 0 > o(oe, de) ? (R[K] = oe, R[ie] = w, K = ie) : (R[K] = de, R[q] = w, K = q);
        else if (ie < Q && 0 > o(oe, w)) R[K] = oe, R[ie] = w, K = ie;
        else break e;
      }
    }
    return M;
  }
  function o(R, M) {
    var w = R.sortIndex - M.sortIndex;
    return w !== 0 ? w : R.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], c = 1, f = null, p = 3, d = !1, y = !1, m = !1, x = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= R) r(u), M.sortIndex = M.expirationTime, t(a, M);
      else break;
      M = n(u);
    }
  }
  function E(R) {
    if (m = !1, v(R), !y) if (n(a) !== null) y = !0, W(P);
    else {
      var M = n(u);
      M !== null && Y(E, M.startTime - R);
    }
  }
  function P(R, M) {
    y = !1, m && (m = !1, h(A), A = -1), d = !0;
    var w = p;
    try {
      for (v(M), f = n(a); f !== null && (!(f.expirationTime > M) || R && !D()); ) {
        var K = f.callback;
        if (typeof K == "function") {
          f.callback = null, p = f.priorityLevel;
          var Q = K(f.expirationTime <= M);
          M = e.unstable_now(), typeof Q == "function" ? f.callback = Q : f === n(a) && r(a), v(M);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var b = !0;
      else {
        var q = n(u);
        q !== null && Y(E, q.startTime - M), b = !1;
      }
      return b;
    } finally {
      f = null, p = w, d = !1;
    }
  }
  var k = !1, T = null, A = -1, _ = 5, L = -1;
  function D() {
    return !(e.unstable_now() - L < _);
  }
  function I() {
    if (T !== null) {
      var R = e.unstable_now();
      L = R;
      var M = !0;
      try {
        M = T(!0, R);
      } finally {
        M ? V() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var V;
  if (typeof g == "function") V = function() {
    g(I);
  };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), U = z.port2;
    z.port1.onmessage = I, V = function() {
      U.postMessage(null);
    };
  } else V = function() {
    x(I, 0);
  };
  function W(R) {
    T = R, k || (k = !0, V());
  }
  function Y(R, M) {
    A = x(function() {
      R(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    y || d || (y = !0, W(P));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(R) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = p;
    }
    var w = p;
    p = M;
    try {
      return R();
    } finally {
      p = w;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, M) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var w = p;
    p = R;
    try {
      return M();
    } finally {
      p = w;
    }
  }, e.unstable_scheduleCallback = function(R, M, w) {
    var K = e.unstable_now();
    switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? K + w : K) : w = K, R) {
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
    return Q = w + Q, R = { id: c++, callback: M, priorityLevel: R, startTime: w, expirationTime: Q, sortIndex: -1 }, w > K ? (R.sortIndex = w, t(u, R), n(a) === null && R === n(u) && (m ? (h(A), A = -1) : m = !0, Y(E, w - K))) : (R.sortIndex = Q, t(a, R), y || d || (y = !0, W(P))), R;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(R) {
    var M = p;
    return function() {
      var w = p;
      p = M;
      try {
        return R.apply(this, arguments);
      } finally {
        p = w;
      }
    };
  };
})(lm);
im.exports = lm;
var J0 = im.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ew = S, kt = J0;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var sm = /* @__PURE__ */ new Set(), Ni = {};
function Vr(e, t) {
  _o(e, t), _o(e + "Capture", t);
}
function _o(e, t) {
  for (Ni[e] = t, e = 0; e < t.length; e++) sm.add(t[e]);
}
var Pn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), au = Object.prototype.hasOwnProperty, tw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, uf = {}, cf = {};
function nw(e) {
  return au.call(cf, e) ? !0 : au.call(uf, e) ? !1 : tw.test(e) ? cf[e] = !0 : (uf[e] = !0, !1);
}
function rw(e, t, n, r) {
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
function ow(e, t, n, r) {
  if (t === null || typeof t > "u" || rw(e, t, n, r)) return !0;
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
function nt(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Fe[e] = new nt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Fe[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Fe[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Fe[e] = new nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Fe[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Fe[e] = new nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Fe[e] = new nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Fe[e] = new nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Fe[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _c = /[\-:]([a-z])/g;
function Ic(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    _c,
    Ic
  );
  Fe[t] = new nt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(_c, Ic);
  Fe[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(_c, Ic);
  Fe[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Oc(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ow(t, n, o, r) && (n = null), r || o === null ? nw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var On = ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fl = Symbol.for("react.element"), Jr = Symbol.for("react.portal"), eo = Symbol.for("react.fragment"), Lc = Symbol.for("react.strict_mode"), uu = Symbol.for("react.profiler"), am = Symbol.for("react.provider"), um = Symbol.for("react.context"), Mc = Symbol.for("react.forward_ref"), cu = Symbol.for("react.suspense"), du = Symbol.for("react.suspense_list"), Dc = Symbol.for("react.memo"), Wn = Symbol.for("react.lazy"), cm = Symbol.for("react.offscreen"), df = Symbol.iterator;
function Zo(e) {
  return e === null || typeof e != "object" ? null : (e = df && e[df] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, ya;
function di(e) {
  if (ya === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ya = t && t[1] || "";
  }
  return `
` + ya + e;
}
var va = !1;
function wa(e, t) {
  if (!e || va) return "";
  va = !0;
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
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; ) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== i[s]) {
        if (l !== 1 || s !== 1)
          do
            if (l--, s--, 0 > s || o[l] !== i[s]) {
              var a = `
` + o[l].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    va = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? di(e) : "";
}
function iw(e) {
  switch (e.tag) {
    case 5:
      return di(e.type);
    case 16:
      return di("Lazy");
    case 13:
      return di("Suspense");
    case 19:
      return di("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = wa(e.type, !1), e;
    case 11:
      return e = wa(e.type.render, !1), e;
    case 1:
      return e = wa(e.type, !0), e;
    default:
      return "";
  }
}
function fu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case eo:
      return "Fragment";
    case Jr:
      return "Portal";
    case uu:
      return "Profiler";
    case Lc:
      return "StrictMode";
    case cu:
      return "Suspense";
    case du:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case um:
      return (e.displayName || "Context") + ".Consumer";
    case am:
      return (e._context.displayName || "Context") + ".Provider";
    case Mc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Dc:
      return t = e.displayName || null, t !== null ? t : fu(e.type) || "Memo";
    case Wn:
      t = e._payload, e = e._init;
      try {
        return fu(e(t));
      } catch {
      }
  }
  return null;
}
function lw(e) {
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
      return fu(t);
    case 8:
      return t === Lc ? "StrictMode" : "Mode";
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
function cr(e) {
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
function dm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function sw(e) {
  var t = dm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function pl(e) {
  e._valueTracker || (e._valueTracker = sw(e));
}
function fm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = dm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function es(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pu(e, t) {
  var n = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ff(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = cr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pm(e, t) {
  t = t.checked, t != null && Oc(e, "checked", t, !1);
}
function hu(e, t) {
  pm(e, t);
  var n = cr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? mu(e, t.type, n) : t.hasOwnProperty("defaultValue") && mu(e, t.type, cr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function pf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function mu(e, t, n) {
  (t !== "number" || es(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fi = Array.isArray;
function fo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function gu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function hf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(j(92));
      if (fi(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: cr(n) };
}
function hm(e, t) {
  var n = cr(t.value), r = cr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function mf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? mm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hl, gm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hl = hl || document.createElement("div"), hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ri(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mi = {
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
}, aw = ["Webkit", "ms", "Moz", "O"];
Object.keys(mi).forEach(function(e) {
  aw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), mi[t] = mi[e];
  });
});
function ym(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mi.hasOwnProperty(e) && mi[e] ? ("" + t).trim() : t + "px";
}
function vm(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = ym(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var uw = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vu(e, t) {
  if (t) {
    if (uw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function wu(e, t) {
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
var xu = null;
function zc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Su = null, po = null, ho = null;
function gf(e) {
  if (e = tl(e)) {
    if (typeof Su != "function") throw Error(j(280));
    var t = e.stateNode;
    t && (t = Bs(t), Su(e.stateNode, e.type, t));
  }
}
function wm(e) {
  po ? ho ? ho.push(e) : ho = [e] : po = e;
}
function xm() {
  if (po) {
    var e = po, t = ho;
    if (ho = po = null, gf(e), t) for (e = 0; e < t.length; e++) gf(t[e]);
  }
}
function Sm(e, t) {
  return e(t);
}
function bm() {
}
var xa = !1;
function km(e, t, n) {
  if (xa) return e(t, n);
  xa = !0;
  try {
    return Sm(e, t, n);
  } finally {
    xa = !1, (po !== null || ho !== null) && (bm(), xm());
  }
}
function Ai(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bs(n);
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
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var bu = !1;
if (Pn) try {
  var Jo = {};
  Object.defineProperty(Jo, "passive", { get: function() {
    bu = !0;
  } }), window.addEventListener("test", Jo, Jo), window.removeEventListener("test", Jo, Jo);
} catch {
  bu = !1;
}
function cw(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var gi = !1, ts = null, ns = !1, ku = null, dw = { onError: function(e) {
  gi = !0, ts = e;
} };
function fw(e, t, n, r, o, i, l, s, a) {
  gi = !1, ts = null, cw.apply(dw, arguments);
}
function pw(e, t, n, r, o, i, l, s, a) {
  if (fw.apply(this, arguments), gi) {
    if (gi) {
      var u = ts;
      gi = !1, ts = null;
    } else throw Error(j(198));
    ns || (ns = !0, ku = u);
  }
}
function Wr(e) {
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
function Em(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function yf(e) {
  if (Wr(e) !== e) throw Error(j(188));
}
function hw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wr(e), t === null) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return yf(o), e;
        if (i === r) return yf(o), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = !1, s = o.child; s; ) {
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
      if (!l) {
        for (s = i.child; s; ) {
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
        if (!l) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Cm(e) {
  return e = hw(e), e !== null ? Pm(e) : null;
}
function Pm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tm = kt.unstable_scheduleCallback, vf = kt.unstable_cancelCallback, mw = kt.unstable_shouldYield, gw = kt.unstable_requestPaint, Te = kt.unstable_now, yw = kt.unstable_getCurrentPriorityLevel, jc = kt.unstable_ImmediatePriority, Nm = kt.unstable_UserBlockingPriority, rs = kt.unstable_NormalPriority, vw = kt.unstable_LowPriority, Rm = kt.unstable_IdlePriority, Ds = null, cn = null;
function ww(e) {
  if (cn && typeof cn.onCommitFiberRoot == "function") try {
    cn.onCommitFiberRoot(Ds, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Kt = Math.clz32 ? Math.clz32 : bw, xw = Math.log, Sw = Math.LN2;
function bw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (xw(e) / Sw | 0) | 0;
}
var ml = 64, gl = 4194304;
function pi(e) {
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
function os(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = pi(s) : (i &= l, i !== 0 && (r = pi(i)));
  } else l = n & ~o, l !== 0 ? r = pi(l) : i !== 0 && (r = pi(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Kt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function kw(e, t) {
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
function Ew(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Kt(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = kw(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Eu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Am() {
  var e = ml;
  return ml <<= 1, !(ml & 4194240) && (ml = 64), e;
}
function Sa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ji(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Kt(t), e[t] = n;
}
function Cw(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Kt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Fc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Kt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ce = 0;
function _m(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Im, Bc, Om, Lm, Mm, Cu = !1, yl = [], nr = null, rr = null, or = null, _i = /* @__PURE__ */ new Map(), Ii = /* @__PURE__ */ new Map(), Yn = [], Pw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nr = null;
      break;
    case "dragenter":
    case "dragleave":
      rr = null;
      break;
    case "mouseover":
    case "mouseout":
      or = null;
      break;
    case "pointerover":
    case "pointerout":
      _i.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ii.delete(t.pointerId);
  }
}
function ei(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = tl(t), t !== null && Bc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Tw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return nr = ei(nr, e, t, n, r, o), !0;
    case "dragenter":
      return rr = ei(rr, e, t, n, r, o), !0;
    case "mouseover":
      return or = ei(or, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return _i.set(i, ei(_i.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ii.set(i, ei(Ii.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Dm(e) {
  var t = Tr(e.target);
  if (t !== null) {
    var n = Wr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Em(n), t !== null) {
          e.blockedOn = t, Mm(e.priority, function() {
            Om(n);
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
function jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xu = r, n.target.dispatchEvent(r), xu = null;
    } else return t = tl(n), t !== null && Bc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xf(e, t, n) {
  jl(e) && n.delete(t);
}
function Nw() {
  Cu = !1, nr !== null && jl(nr) && (nr = null), rr !== null && jl(rr) && (rr = null), or !== null && jl(or) && (or = null), _i.forEach(xf), Ii.forEach(xf);
}
function ti(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Cu || (Cu = !0, kt.unstable_scheduleCallback(kt.unstable_NormalPriority, Nw)));
}
function Oi(e) {
  function t(o) {
    return ti(o, e);
  }
  if (0 < yl.length) {
    ti(yl[0], e);
    for (var n = 1; n < yl.length; n++) {
      var r = yl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nr !== null && ti(nr, e), rr !== null && ti(rr, e), or !== null && ti(or, e), _i.forEach(t), Ii.forEach(t), n = 0; n < Yn.length; n++) r = Yn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yn.length && (n = Yn[0], n.blockedOn === null); ) Dm(n), n.blockedOn === null && Yn.shift();
}
var mo = On.ReactCurrentBatchConfig, is = !0;
function Rw(e, t, n, r) {
  var o = ce, i = mo.transition;
  mo.transition = null;
  try {
    ce = 1, $c(e, t, n, r);
  } finally {
    ce = o, mo.transition = i;
  }
}
function Aw(e, t, n, r) {
  var o = ce, i = mo.transition;
  mo.transition = null;
  try {
    ce = 4, $c(e, t, n, r);
  } finally {
    ce = o, mo.transition = i;
  }
}
function $c(e, t, n, r) {
  if (is) {
    var o = Pu(e, t, n, r);
    if (o === null) _a(e, t, r, ls, n), wf(e, r);
    else if (Tw(o, e, t, n, r)) r.stopPropagation();
    else if (wf(e, r), t & 4 && -1 < Pw.indexOf(e)) {
      for (; o !== null; ) {
        var i = tl(o);
        if (i !== null && Im(i), i = Pu(e, t, n, r), i === null && _a(e, t, r, ls, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else _a(e, t, r, null, n);
  }
}
var ls = null;
function Pu(e, t, n, r) {
  if (ls = null, e = zc(r), e = Tr(e), e !== null) if (t = Wr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Em(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ls = e, null;
}
function zm(e) {
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
      switch (yw()) {
        case jc:
          return 1;
        case Nm:
          return 4;
        case rs:
        case vw:
          return 16;
        case Rm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var er = null, Uc = null, Fl = null;
function jm() {
  if (Fl) return Fl;
  var e, t = Uc, n = t.length, r, o = "value" in er ? er.value : er.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Fl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Bl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vl() {
  return !0;
}
function Sf() {
  return !1;
}
function Ct(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vl : Sf, this.isPropagationStopped = Sf, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vl);
  }, persist: function() {
  }, isPersistent: vl }), t;
}
var Uo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Hc = Ct(Uo), el = Ee({}, Uo, { view: 0, detail: 0 }), _w = Ct(el), ba, ka, ni, zs = Ee({}, el, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ni && (ni && e.type === "mousemove" ? (ba = e.screenX - ni.screenX, ka = e.screenY - ni.screenY) : ka = ba = 0, ni = e), ba);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ka;
} }), bf = Ct(zs), Iw = Ee({}, zs, { dataTransfer: 0 }), Ow = Ct(Iw), Lw = Ee({}, el, { relatedTarget: 0 }), Ea = Ct(Lw), Mw = Ee({}, Uo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dw = Ct(Mw), zw = Ee({}, Uo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), jw = Ct(zw), Fw = Ee({}, Uo, { data: 0 }), kf = Ct(Fw), Bw = {
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
}, $w = {
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
}, Uw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Hw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Uw[e]) ? !!t[e] : !1;
}
function Vc() {
  return Hw;
}
var Vw = Ee({}, el, { key: function(e) {
  if (e.key) {
    var t = Bw[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Bl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $w[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vc, charCode: function(e) {
  return e.type === "keypress" ? Bl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Bl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ww = Ct(Vw), Qw = Ee({}, zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ef = Ct(Qw), Yw = Ee({}, el, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vc }), Kw = Ct(Yw), qw = Ee({}, Uo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xw = Ct(qw), Gw = Ee({}, zs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zw = Ct(Gw), Jw = [9, 13, 27, 32], Wc = Pn && "CompositionEvent" in window, yi = null;
Pn && "documentMode" in document && (yi = document.documentMode);
var ex = Pn && "TextEvent" in window && !yi, Fm = Pn && (!Wc || yi && 8 < yi && 11 >= yi), Cf = " ", Pf = !1;
function Bm(e, t) {
  switch (e) {
    case "keyup":
      return Jw.indexOf(t.keyCode) !== -1;
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
function $m(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var to = !1;
function tx(e, t) {
  switch (e) {
    case "compositionend":
      return $m(t);
    case "keypress":
      return t.which !== 32 ? null : (Pf = !0, Cf);
    case "textInput":
      return e = t.data, e === Cf && Pf ? null : e;
    default:
      return null;
  }
}
function nx(e, t) {
  if (to) return e === "compositionend" || !Wc && Bm(e, t) ? (e = jm(), Fl = Uc = er = null, to = !1, e) : null;
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
      return Fm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rx = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rx[e.type] : t === "textarea";
}
function Um(e, t, n, r) {
  wm(r), t = ss(t, "onChange"), 0 < t.length && (n = new Hc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var vi = null, Li = null;
function ox(e) {
  Jm(e, 0);
}
function js(e) {
  var t = oo(e);
  if (fm(t)) return e;
}
function ix(e, t) {
  if (e === "change") return t;
}
var Hm = !1;
if (Pn) {
  var Ca;
  if (Pn) {
    var Pa = "oninput" in document;
    if (!Pa) {
      var Nf = document.createElement("div");
      Nf.setAttribute("oninput", "return;"), Pa = typeof Nf.oninput == "function";
    }
    Ca = Pa;
  } else Ca = !1;
  Hm = Ca && (!document.documentMode || 9 < document.documentMode);
}
function Rf() {
  vi && (vi.detachEvent("onpropertychange", Vm), Li = vi = null);
}
function Vm(e) {
  if (e.propertyName === "value" && js(Li)) {
    var t = [];
    Um(t, Li, e, zc(e)), km(ox, t);
  }
}
function lx(e, t, n) {
  e === "focusin" ? (Rf(), vi = t, Li = n, vi.attachEvent("onpropertychange", Vm)) : e === "focusout" && Rf();
}
function sx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return js(Li);
}
function ax(e, t) {
  if (e === "click") return js(t);
}
function ux(e, t) {
  if (e === "input" || e === "change") return js(t);
}
function cx(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xt = typeof Object.is == "function" ? Object.is : cx;
function Mi(e, t) {
  if (Xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!au.call(t, o) || !Xt(e[o], t[o])) return !1;
  }
  return !0;
}
function Af(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _f(e, t) {
  var n = Af(e);
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
    n = Af(n);
  }
}
function Wm(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Qm() {
  for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = es(e.document);
  }
  return t;
}
function Qc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function dx(e) {
  var t = Qm(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Wm(n.ownerDocument.documentElement, n)) {
    if (r !== null && Qc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = _f(n, i);
        var l = _f(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var fx = Pn && "documentMode" in document && 11 >= document.documentMode, no = null, Tu = null, wi = null, Nu = !1;
function If(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Nu || no == null || no !== es(r) || (r = no, "selectionStart" in r && Qc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wi && Mi(wi, r) || (wi = r, r = ss(Tu, "onSelect"), 0 < r.length && (t = new Hc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = no)));
}
function wl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ro = { animationend: wl("Animation", "AnimationEnd"), animationiteration: wl("Animation", "AnimationIteration"), animationstart: wl("Animation", "AnimationStart"), transitionend: wl("Transition", "TransitionEnd") }, Ta = {}, Ym = {};
Pn && (Ym = document.createElement("div").style, "AnimationEvent" in window || (delete ro.animationend.animation, delete ro.animationiteration.animation, delete ro.animationstart.animation), "TransitionEvent" in window || delete ro.transitionend.transition);
function Fs(e) {
  if (Ta[e]) return Ta[e];
  if (!ro[e]) return e;
  var t = ro[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ym) return Ta[e] = t[n];
  return e;
}
var Km = Fs("animationend"), qm = Fs("animationiteration"), Xm = Fs("animationstart"), Gm = Fs("transitionend"), Zm = /* @__PURE__ */ new Map(), Of = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gr(e, t) {
  Zm.set(e, t), Vr(t, [e]);
}
for (var Na = 0; Na < Of.length; Na++) {
  var Ra = Of[Na], px = Ra.toLowerCase(), hx = Ra[0].toUpperCase() + Ra.slice(1);
  gr(px, "on" + hx);
}
gr(Km, "onAnimationEnd");
gr(qm, "onAnimationIteration");
gr(Xm, "onAnimationStart");
gr("dblclick", "onDoubleClick");
gr("focusin", "onFocus");
gr("focusout", "onBlur");
gr(Gm, "onTransitionEnd");
_o("onMouseEnter", ["mouseout", "mouseover"]);
_o("onMouseLeave", ["mouseout", "mouseover"]);
_o("onPointerEnter", ["pointerout", "pointerover"]);
_o("onPointerLeave", ["pointerout", "pointerover"]);
Vr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mx = new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));
function Lf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, pw(r, t, void 0, e), e.currentTarget = null;
}
function Jm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Lf(o, s, u), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Lf(o, s, u), i = a;
      }
    }
  }
  if (ns) throw e = ku, ns = !1, ku = null, e;
}
function ve(e, t) {
  var n = t[Ou];
  n === void 0 && (n = t[Ou] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (eg(t, e, 2, !1), n.add(r));
}
function Aa(e, t, n) {
  var r = 0;
  t && (r |= 4), eg(n, e, r, t);
}
var xl = "_reactListening" + Math.random().toString(36).slice(2);
function Di(e) {
  if (!e[xl]) {
    e[xl] = !0, sm.forEach(function(n) {
      n !== "selectionchange" && (mx.has(n) || Aa(n, !1, e), Aa(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xl] || (t[xl] = !0, Aa("selectionchange", !1, t));
  }
}
function eg(e, t, n, r) {
  switch (zm(t)) {
    case 1:
      var o = Rw;
      break;
    case 4:
      o = Aw;
      break;
    default:
      o = $c;
  }
  n = o.bind(null, t, n, e), o = void 0, !bu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function _a(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        l = l.return;
      }
      for (; s !== null; ) {
        if (l = Tr(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  km(function() {
    var u = i, c = zc(n), f = [];
    e: {
      var p = Zm.get(e);
      if (p !== void 0) {
        var d = Hc, y = e;
        switch (e) {
          case "keypress":
            if (Bl(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = Ww;
            break;
          case "focusin":
            y = "focus", d = Ea;
            break;
          case "focusout":
            y = "blur", d = Ea;
            break;
          case "beforeblur":
          case "afterblur":
            d = Ea;
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
            d = bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Ow;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = Kw;
            break;
          case Km:
          case qm:
          case Xm:
            d = Dw;
            break;
          case Gm:
            d = Xw;
            break;
          case "scroll":
            d = _w;
            break;
          case "wheel":
            d = Zw;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = jw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Ef;
        }
        var m = (t & 4) !== 0, x = !m && e === "scroll", h = m ? p !== null ? p + "Capture" : null : p;
        m = [];
        for (var g = u, v; g !== null; ) {
          v = g;
          var E = v.stateNode;
          if (v.tag === 5 && E !== null && (v = E, h !== null && (E = Ai(g, h), E != null && m.push(zi(g, E, v)))), x) break;
          g = g.return;
        }
        0 < m.length && (p = new d(p, y, null, n, c), f.push({ event: p, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", p && n !== xu && (y = n.relatedTarget || n.fromElement) && (Tr(y) || y[Tn])) break e;
        if ((d || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, d ? (y = n.relatedTarget || n.toElement, d = u, y = y ? Tr(y) : null, y !== null && (x = Wr(y), y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (d = null, y = u), d !== y)) {
          if (m = bf, E = "onMouseLeave", h = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (m = Ef, E = "onPointerLeave", h = "onPointerEnter", g = "pointer"), x = d == null ? p : oo(d), v = y == null ? p : oo(y), p = new m(E, g + "leave", d, n, c), p.target = x, p.relatedTarget = v, E = null, Tr(c) === u && (m = new m(h, g + "enter", y, n, c), m.target = v, m.relatedTarget = x, E = m), x = E, d && y) t: {
            for (m = d, h = y, g = 0, v = m; v; v = Gr(v)) g++;
            for (v = 0, E = h; E; E = Gr(E)) v++;
            for (; 0 < g - v; ) m = Gr(m), g--;
            for (; 0 < v - g; ) h = Gr(h), v--;
            for (; g--; ) {
              if (m === h || h !== null && m === h.alternate) break t;
              m = Gr(m), h = Gr(h);
            }
            m = null;
          }
          else m = null;
          d !== null && Mf(f, p, d, m, !1), y !== null && x !== null && Mf(f, x, y, m, !0);
        }
      }
      e: {
        if (p = u ? oo(u) : window, d = p.nodeName && p.nodeName.toLowerCase(), d === "select" || d === "input" && p.type === "file") var P = ix;
        else if (Tf(p)) if (Hm) P = ux;
        else {
          P = sx;
          var k = lx;
        }
        else (d = p.nodeName) && d.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (P = ax);
        if (P && (P = P(e, u))) {
          Um(f, P, n, c);
          break e;
        }
        k && k(e, p, u), e === "focusout" && (k = p._wrapperState) && k.controlled && p.type === "number" && mu(p, "number", p.value);
      }
      switch (k = u ? oo(u) : window, e) {
        case "focusin":
          (Tf(k) || k.contentEditable === "true") && (no = k, Tu = u, wi = null);
          break;
        case "focusout":
          wi = Tu = no = null;
          break;
        case "mousedown":
          Nu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Nu = !1, If(f, n, c);
          break;
        case "selectionchange":
          if (fx) break;
        case "keydown":
        case "keyup":
          If(f, n, c);
      }
      var T;
      if (Wc) e: {
        switch (e) {
          case "compositionstart":
            var A = "onCompositionStart";
            break e;
          case "compositionend":
            A = "onCompositionEnd";
            break e;
          case "compositionupdate":
            A = "onCompositionUpdate";
            break e;
        }
        A = void 0;
      }
      else to ? Bm(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (Fm && n.locale !== "ko" && (to || A !== "onCompositionStart" ? A === "onCompositionEnd" && to && (T = jm()) : (er = c, Uc = "value" in er ? er.value : er.textContent, to = !0)), k = ss(u, A), 0 < k.length && (A = new kf(A, e, null, n, c), f.push({ event: A, listeners: k }), T ? A.data = T : (T = $m(n), T !== null && (A.data = T)))), (T = ex ? tx(e, n) : nx(e, n)) && (u = ss(u, "onBeforeInput"), 0 < u.length && (c = new kf("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = T));
    }
    Jm(f, t);
  });
}
function zi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ss(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ai(e, n), i != null && r.unshift(zi(e, i, o)), i = Ai(e, t), i != null && r.push(zi(e, i, o))), e = e.return;
  }
  return r;
}
function Gr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mf(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = Ai(n, i), a != null && l.unshift(zi(n, a, s))) : o || (a = Ai(n, i), a != null && l.push(zi(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var gx = /\r\n?/g, yx = /\u0000|\uFFFD/g;
function Df(e) {
  return (typeof e == "string" ? e : "" + e).replace(gx, `
`).replace(yx, "");
}
function Sl(e, t, n) {
  if (t = Df(t), Df(e) !== t && n) throw Error(j(425));
}
function as() {
}
var Ru = null, Au = null;
function _u(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Iu = typeof setTimeout == "function" ? setTimeout : void 0, vx = typeof clearTimeout == "function" ? clearTimeout : void 0, zf = typeof Promise == "function" ? Promise : void 0, wx = typeof queueMicrotask == "function" ? queueMicrotask : typeof zf < "u" ? function(e) {
  return zf.resolve(null).then(e).catch(xx);
} : Iu;
function xx(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ia(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Oi(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Oi(t);
}
function ir(e) {
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
function jf(e) {
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
var Ho = Math.random().toString(36).slice(2), an = "__reactFiber$" + Ho, ji = "__reactProps$" + Ho, Tn = "__reactContainer$" + Ho, Ou = "__reactEvents$" + Ho, Sx = "__reactListeners$" + Ho, bx = "__reactHandles$" + Ho;
function Tr(e) {
  var t = e[an];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Tn] || n[an]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = jf(e); e !== null; ) {
        if (n = e[an]) return n;
        e = jf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tl(e) {
  return e = e[an] || e[Tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function oo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Bs(e) {
  return e[ji] || null;
}
var Lu = [], io = -1;
function yr(e) {
  return { current: e };
}
function we(e) {
  0 > io || (e.current = Lu[io], Lu[io] = null, io--);
}
function me(e, t) {
  io++, Lu[io] = e.current, e.current = t;
}
var dr = {}, Qe = yr(dr), at = yr(!1), jr = dr;
function Io(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function ut(e) {
  return e = e.childContextTypes, e != null;
}
function us() {
  we(at), we(Qe);
}
function Ff(e, t, n) {
  if (Qe.current !== dr) throw Error(j(168));
  me(Qe, t), me(at, n);
}
function tg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, lw(e) || "Unknown", o));
  return Ee({}, n, r);
}
function cs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dr, jr = Qe.current, me(Qe, e), me(at, at.current), !0;
}
function Bf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ? (e = tg(e, t, jr), r.__reactInternalMemoizedMergedChildContext = e, we(at), we(Qe), me(Qe, e)) : we(at), me(at, n);
}
var Sn = null, $s = !1, Oa = !1;
function ng(e) {
  Sn === null ? Sn = [e] : Sn.push(e);
}
function kx(e) {
  $s = !0, ng(e);
}
function vr() {
  if (!Oa && Sn !== null) {
    Oa = !0;
    var e = 0, t = ce;
    try {
      var n = Sn;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Sn = null, $s = !1;
    } catch (o) {
      throw Sn !== null && (Sn = Sn.slice(e + 1)), Tm(jc, vr), o;
    } finally {
      ce = t, Oa = !1;
    }
  }
  return null;
}
var lo = [], so = 0, ds = null, fs = 0, Nt = [], Rt = 0, Fr = null, kn = 1, En = "";
function Er(e, t) {
  lo[so++] = fs, lo[so++] = ds, ds = e, fs = t;
}
function rg(e, t, n) {
  Nt[Rt++] = kn, Nt[Rt++] = En, Nt[Rt++] = Fr, Fr = e;
  var r = kn;
  e = En;
  var o = 32 - Kt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Kt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, kn = 1 << 32 - Kt(t) + o | n << o | r, En = i + e;
  } else kn = 1 << i | n << o | r, En = e;
}
function Yc(e) {
  e.return !== null && (Er(e, 1), rg(e, 1, 0));
}
function Kc(e) {
  for (; e === ds; ) ds = lo[--so], lo[so] = null, fs = lo[--so], lo[so] = null;
  for (; e === Fr; ) Fr = Nt[--Rt], Nt[Rt] = null, En = Nt[--Rt], Nt[Rt] = null, kn = Nt[--Rt], Nt[Rt] = null;
}
var St = null, wt = null, Se = !1, Yt = null;
function og(e, t) {
  var n = _t(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function $f(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, St = e, wt = ir(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, St = e, wt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Fr !== null ? { id: kn, overflow: En } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, St = e, wt = null, !0) : !1;
    default:
      return !1;
  }
}
function Mu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Du(e) {
  if (Se) {
    var t = wt;
    if (t) {
      var n = t;
      if (!$f(e, t)) {
        if (Mu(e)) throw Error(j(418));
        t = ir(n.nextSibling);
        var r = St;
        t && $f(e, t) ? og(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, St = e);
      }
    } else {
      if (Mu(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Se = !1, St = e;
    }
  }
}
function Uf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  St = e;
}
function bl(e) {
  if (e !== St) return !1;
  if (!Se) return Uf(e), Se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_u(e.type, e.memoizedProps)), t && (t = wt)) {
    if (Mu(e)) throw ig(), Error(j(418));
    for (; t; ) og(e, t), t = ir(t.nextSibling);
  }
  if (Uf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              wt = ir(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      wt = null;
    }
  } else wt = St ? ir(e.stateNode.nextSibling) : null;
  return !0;
}
function ig() {
  for (var e = wt; e; ) e = ir(e.nextSibling);
}
function Oo() {
  wt = St = null, Se = !1;
}
function qc(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
var Ex = On.ReactCurrentBatchConfig;
function ri(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function kl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hf(e) {
  var t = e._init;
  return t(e._payload);
}
function lg(e) {
  function t(h, g) {
    if (e) {
      var v = h.deletions;
      v === null ? (h.deletions = [g], h.flags |= 16) : v.push(g);
    }
  }
  function n(h, g) {
    if (!e) return null;
    for (; g !== null; ) t(h, g), g = g.sibling;
    return null;
  }
  function r(h, g) {
    for (h = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? h.set(g.key, g) : h.set(g.index, g), g = g.sibling;
    return h;
  }
  function o(h, g) {
    return h = ur(h, g), h.index = 0, h.sibling = null, h;
  }
  function i(h, g, v) {
    return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < g ? (h.flags |= 2, g) : v) : (h.flags |= 2, g)) : (h.flags |= 1048576, g);
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, g, v, E) {
    return g === null || g.tag !== 6 ? (g = Ba(v, h.mode, E), g.return = h, g) : (g = o(g, v), g.return = h, g);
  }
  function a(h, g, v, E) {
    var P = v.type;
    return P === eo ? c(h, g, v.props.children, E, v.key) : g !== null && (g.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Wn && Hf(P) === g.type) ? (E = o(g, v.props), E.ref = ri(h, g, v), E.return = h, E) : (E = Yl(v.type, v.key, v.props, null, h.mode, E), E.ref = ri(h, g, v), E.return = h, E);
  }
  function u(h, g, v, E) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== v.containerInfo || g.stateNode.implementation !== v.implementation ? (g = $a(v, h.mode, E), g.return = h, g) : (g = o(g, v.children || []), g.return = h, g);
  }
  function c(h, g, v, E, P) {
    return g === null || g.tag !== 7 ? (g = zr(v, h.mode, E, P), g.return = h, g) : (g = o(g, v), g.return = h, g);
  }
  function f(h, g, v) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return g = Ba("" + g, h.mode, v), g.return = h, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fl:
          return v = Yl(g.type, g.key, g.props, null, h.mode, v), v.ref = ri(h, null, g), v.return = h, v;
        case Jr:
          return g = $a(g, h.mode, v), g.return = h, g;
        case Wn:
          var E = g._init;
          return f(h, E(g._payload), v);
      }
      if (fi(g) || Zo(g)) return g = zr(g, h.mode, v, null), g.return = h, g;
      kl(h, g);
    }
    return null;
  }
  function p(h, g, v, E) {
    var P = g !== null ? g.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return P !== null ? null : s(h, g, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fl:
          return v.key === P ? a(h, g, v, E) : null;
        case Jr:
          return v.key === P ? u(h, g, v, E) : null;
        case Wn:
          return P = v._init, p(
            h,
            g,
            P(v._payload),
            E
          );
      }
      if (fi(v) || Zo(v)) return P !== null ? null : c(h, g, v, E, null);
      kl(h, v);
    }
    return null;
  }
  function d(h, g, v, E, P) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return h = h.get(v) || null, s(g, h, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case fl:
          return h = h.get(E.key === null ? v : E.key) || null, a(g, h, E, P);
        case Jr:
          return h = h.get(E.key === null ? v : E.key) || null, u(g, h, E, P);
        case Wn:
          var k = E._init;
          return d(h, g, v, k(E._payload), P);
      }
      if (fi(E) || Zo(E)) return h = h.get(v) || null, c(g, h, E, P, null);
      kl(g, E);
    }
    return null;
  }
  function y(h, g, v, E) {
    for (var P = null, k = null, T = g, A = g = 0, _ = null; T !== null && A < v.length; A++) {
      T.index > A ? (_ = T, T = null) : _ = T.sibling;
      var L = p(h, T, v[A], E);
      if (L === null) {
        T === null && (T = _);
        break;
      }
      e && T && L.alternate === null && t(h, T), g = i(L, g, A), k === null ? P = L : k.sibling = L, k = L, T = _;
    }
    if (A === v.length) return n(h, T), Se && Er(h, A), P;
    if (T === null) {
      for (; A < v.length; A++) T = f(h, v[A], E), T !== null && (g = i(T, g, A), k === null ? P = T : k.sibling = T, k = T);
      return Se && Er(h, A), P;
    }
    for (T = r(h, T); A < v.length; A++) _ = d(T, h, A, v[A], E), _ !== null && (e && _.alternate !== null && T.delete(_.key === null ? A : _.key), g = i(_, g, A), k === null ? P = _ : k.sibling = _, k = _);
    return e && T.forEach(function(D) {
      return t(h, D);
    }), Se && Er(h, A), P;
  }
  function m(h, g, v, E) {
    var P = Zo(v);
    if (typeof P != "function") throw Error(j(150));
    if (v = P.call(v), v == null) throw Error(j(151));
    for (var k = P = null, T = g, A = g = 0, _ = null, L = v.next(); T !== null && !L.done; A++, L = v.next()) {
      T.index > A ? (_ = T, T = null) : _ = T.sibling;
      var D = p(h, T, L.value, E);
      if (D === null) {
        T === null && (T = _);
        break;
      }
      e && T && D.alternate === null && t(h, T), g = i(D, g, A), k === null ? P = D : k.sibling = D, k = D, T = _;
    }
    if (L.done) return n(
      h,
      T
    ), Se && Er(h, A), P;
    if (T === null) {
      for (; !L.done; A++, L = v.next()) L = f(h, L.value, E), L !== null && (g = i(L, g, A), k === null ? P = L : k.sibling = L, k = L);
      return Se && Er(h, A), P;
    }
    for (T = r(h, T); !L.done; A++, L = v.next()) L = d(T, h, A, L.value, E), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? A : L.key), g = i(L, g, A), k === null ? P = L : k.sibling = L, k = L);
    return e && T.forEach(function(I) {
      return t(h, I);
    }), Se && Er(h, A), P;
  }
  function x(h, g, v, E) {
    if (typeof v == "object" && v !== null && v.type === eo && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fl:
          e: {
            for (var P = v.key, k = g; k !== null; ) {
              if (k.key === P) {
                if (P = v.type, P === eo) {
                  if (k.tag === 7) {
                    n(h, k.sibling), g = o(k, v.props.children), g.return = h, h = g;
                    break e;
                  }
                } else if (k.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Wn && Hf(P) === k.type) {
                  n(h, k.sibling), g = o(k, v.props), g.ref = ri(h, k, v), g.return = h, h = g;
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            v.type === eo ? (g = zr(v.props.children, h.mode, E, v.key), g.return = h, h = g) : (E = Yl(v.type, v.key, v.props, null, h.mode, E), E.ref = ri(h, g, v), E.return = h, h = E);
          }
          return l(h);
        case Jr:
          e: {
            for (k = v.key; g !== null; ) {
              if (g.key === k) if (g.tag === 4 && g.stateNode.containerInfo === v.containerInfo && g.stateNode.implementation === v.implementation) {
                n(h, g.sibling), g = o(g, v.children || []), g.return = h, h = g;
                break e;
              } else {
                n(h, g);
                break;
              }
              else t(h, g);
              g = g.sibling;
            }
            g = $a(v, h.mode, E), g.return = h, h = g;
          }
          return l(h);
        case Wn:
          return k = v._init, x(h, g, k(v._payload), E);
      }
      if (fi(v)) return y(h, g, v, E);
      if (Zo(v)) return m(h, g, v, E);
      kl(h, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, g !== null && g.tag === 6 ? (n(h, g.sibling), g = o(g, v), g.return = h, h = g) : (n(h, g), g = Ba(v, h.mode, E), g.return = h, h = g), l(h)) : n(h, g);
  }
  return x;
}
var Lo = lg(!0), sg = lg(!1), ps = yr(null), hs = null, ao = null, Xc = null;
function Gc() {
  Xc = ao = hs = null;
}
function Zc(e) {
  var t = ps.current;
  we(ps), e._currentValue = t;
}
function zu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function go(e, t) {
  hs = e, Xc = ao = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (st = !0), e.firstContext = null);
}
function Ot(e) {
  var t = e._currentValue;
  if (Xc !== e) if (e = { context: e, memoizedValue: t, next: null }, ao === null) {
    if (hs === null) throw Error(j(308));
    ao = e, hs.dependencies = { lanes: 0, firstContext: e };
  } else ao = ao.next = e;
  return t;
}
var Nr = null;
function Jc(e) {
  Nr === null ? Nr = [e] : Nr.push(e);
}
function ag(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Jc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Nn(e, r);
}
function Nn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Qn = !1;
function ed(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ug(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Cn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function lr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, le & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Nn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Jc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Nn(e, n);
}
function $l(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fc(e, n);
  }
}
function Vf(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ms(e, t, n, r) {
  var o = e.updateQueue;
  Qn = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? i = u : l.next = u, l = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var f = o.baseState;
    l = 0, c = u = a = null, s = i;
    do {
      var p = s.lane, d = s.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = {
          eventTime: d,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var y = e, m = s;
          switch (p = t, d = n, m.tag) {
            case 1:
              if (y = m.payload, typeof y == "function") {
                f = y.call(d, f, p);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = m.payload, p = typeof y == "function" ? y.call(d, f, p) : y, p == null) break e;
              f = Ee({}, f, p);
              break e;
            case 2:
              Qn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [s] : p.push(s));
      } else d = { eventTime: d, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = d, a = f) : c = c.next = d, l |= p;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        p = s, s = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    $r |= l, e.lanes = l, e.memoizedState = f;
  }
}
function Wf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(j(191, o));
      o.call(r);
    }
  }
}
var nl = {}, dn = yr(nl), Fi = yr(nl), Bi = yr(nl);
function Rr(e) {
  if (e === nl) throw Error(j(174));
  return e;
}
function td(e, t) {
  switch (me(Bi, t), me(Fi, e), me(dn, nl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yu(t, e);
  }
  we(dn), me(dn, t);
}
function Mo() {
  we(dn), we(Fi), we(Bi);
}
function cg(e) {
  Rr(Bi.current);
  var t = Rr(dn.current), n = yu(t, e.type);
  t !== n && (me(Fi, e), me(dn, n));
}
function nd(e) {
  Fi.current === e && (we(dn), we(Fi));
}
var be = yr(0);
function gs(e) {
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
var La = [];
function rd() {
  for (var e = 0; e < La.length; e++) La[e]._workInProgressVersionPrimary = null;
  La.length = 0;
}
var Ul = On.ReactCurrentDispatcher, Ma = On.ReactCurrentBatchConfig, Br = 0, ke = null, Ie = null, Me = null, ys = !1, xi = !1, $i = 0, Cx = 0;
function Ue() {
  throw Error(j(321));
}
function od(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Xt(e[n], t[n])) return !1;
  return !0;
}
function id(e, t, n, r, o, i) {
  if (Br = i, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ul.current = e === null || e.memoizedState === null ? Rx : Ax, e = n(r, o), xi) {
    i = 0;
    do {
      if (xi = !1, $i = 0, 25 <= i) throw Error(j(301));
      i += 1, Me = Ie = null, t.updateQueue = null, Ul.current = _x, e = n(r, o);
    } while (xi);
  }
  if (Ul.current = vs, t = Ie !== null && Ie.next !== null, Br = 0, Me = Ie = ke = null, ys = !1, t) throw Error(j(300));
  return e;
}
function ld() {
  var e = $i !== 0;
  return $i = 0, e;
}
function nn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? ke.memoizedState = Me = e : Me = Me.next = e, Me;
}
function Lt() {
  if (Ie === null) {
    var e = ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = Me === null ? ke.memoizedState : Me.next;
  if (t !== null) Me = t, Ie = e;
  else {
    if (e === null) throw Error(j(310));
    Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, Me === null ? ke.memoizedState = Me = e : Me = Me.next = e;
  }
  return Me;
}
function Ui(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Da(e) {
  var t = Lt(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Ie, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((Br & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = f, l = r) : a = a.next = f, ke.lanes |= c, $r |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, Xt(r, t.memoizedState) || (st = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ke.lanes |= i, $r |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function za(e) {
  var t = Lt(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    Xt(i, t.memoizedState) || (st = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function dg() {
}
function fg(e, t) {
  var n = ke, r = Lt(), o = t(), i = !Xt(r.memoizedState, o);
  if (i && (r.memoizedState = o, st = !0), r = r.queue, sd(mg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Me !== null && Me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Hi(9, hg.bind(null, n, r, o, t), void 0, null), De === null) throw Error(j(349));
    Br & 30 || pg(n, t, o);
  }
  return o;
}
function pg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function hg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, gg(t) && yg(e);
}
function mg(e, t, n) {
  return n(function() {
    gg(t) && yg(e);
  });
}
function gg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xt(e, n);
  } catch {
    return !0;
  }
}
function yg(e) {
  var t = Nn(e, 1);
  t !== null && qt(t, e, 1, -1);
}
function Qf(e) {
  var t = nn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ui, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nx.bind(null, ke, e), [t.memoizedState, e];
}
function Hi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vg() {
  return Lt().memoizedState;
}
function Hl(e, t, n, r) {
  var o = nn();
  ke.flags |= e, o.memoizedState = Hi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Us(e, t, n, r) {
  var o = Lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ie !== null) {
    var l = Ie.memoizedState;
    if (i = l.destroy, r !== null && od(r, l.deps)) {
      o.memoizedState = Hi(t, n, i, r);
      return;
    }
  }
  ke.flags |= e, o.memoizedState = Hi(1 | t, n, i, r);
}
function Yf(e, t) {
  return Hl(8390656, 8, e, t);
}
function sd(e, t) {
  return Us(2048, 8, e, t);
}
function wg(e, t) {
  return Us(4, 2, e, t);
}
function xg(e, t) {
  return Us(4, 4, e, t);
}
function Sg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Us(4, 4, Sg.bind(null, t, e), n);
}
function ad() {
}
function kg(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && od(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Eg(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && od(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Cg(e, t, n) {
  return Br & 21 ? (Xt(n, t) || (n = Am(), ke.lanes |= n, $r |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, st = !0), e.memoizedState = n);
}
function Px(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ma.transition;
  Ma.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, Ma.transition = r;
  }
}
function Pg() {
  return Lt().memoizedState;
}
function Tx(e, t, n) {
  var r = ar(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Tg(e)) Ng(t, n);
  else if (n = ag(e, t, n, r), n !== null) {
    var o = et();
    qt(n, e, r, o), Rg(n, t, r);
  }
}
function Nx(e, t, n) {
  var r = ar(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tg(e)) Ng(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, Xt(s, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Jc(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = ag(e, t, o, r), n !== null && (o = et(), qt(n, e, r, o), Rg(n, t, r));
  }
}
function Tg(e) {
  var t = e.alternate;
  return e === ke || t !== null && t === ke;
}
function Ng(e, t) {
  xi = ys = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Rg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fc(e, n);
  }
}
var vs = { readContext: Ot, useCallback: Ue, useContext: Ue, useEffect: Ue, useImperativeHandle: Ue, useInsertionEffect: Ue, useLayoutEffect: Ue, useMemo: Ue, useReducer: Ue, useRef: Ue, useState: Ue, useDebugValue: Ue, useDeferredValue: Ue, useTransition: Ue, useMutableSource: Ue, useSyncExternalStore: Ue, useId: Ue, unstable_isNewReconciler: !1 }, Rx = { readContext: Ot, useCallback: function(e, t) {
  return nn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ot, useEffect: Yf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hl(
    4194308,
    4,
    Sg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Hl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Hl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Tx.bind(null, ke, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qf, useDebugValue: ad, useDeferredValue: function(e) {
  return nn().memoizedState = e;
}, useTransition: function() {
  var e = Qf(!1), t = e[0];
  return e = Px.bind(null, e[1]), nn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ke, o = nn();
  if (Se) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error(j(349));
    Br & 30 || pg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Yf(mg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Hi(9, hg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = nn(), t = De.identifierPrefix;
  if (Se) {
    var n = En, r = kn;
    n = (r & ~(1 << 32 - Kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $i++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Cx++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ax = {
  readContext: Ot,
  useCallback: kg,
  useContext: Ot,
  useEffect: sd,
  useImperativeHandle: bg,
  useInsertionEffect: wg,
  useLayoutEffect: xg,
  useMemo: Eg,
  useReducer: Da,
  useRef: vg,
  useState: function() {
    return Da(Ui);
  },
  useDebugValue: ad,
  useDeferredValue: function(e) {
    var t = Lt();
    return Cg(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = Da(Ui)[0], t = Lt().memoizedState;
    return [e, t];
  },
  useMutableSource: dg,
  useSyncExternalStore: fg,
  useId: Pg,
  unstable_isNewReconciler: !1
}, _x = { readContext: Ot, useCallback: kg, useContext: Ot, useEffect: sd, useImperativeHandle: bg, useInsertionEffect: wg, useLayoutEffect: xg, useMemo: Eg, useReducer: za, useRef: vg, useState: function() {
  return za(Ui);
}, useDebugValue: ad, useDeferredValue: function(e) {
  var t = Lt();
  return Ie === null ? t.memoizedState = e : Cg(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = za(Ui)[0], t = Lt().memoizedState;
  return [e, t];
}, useMutableSource: dg, useSyncExternalStore: fg, useId: Pg, unstable_isNewReconciler: !1 };
function Ut(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ju(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hs = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = et(), o = ar(e), i = Cn(r, o);
  i.payload = t, n != null && (i.callback = n), t = lr(e, i, o), t !== null && (qt(t, e, o, r), $l(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = et(), o = ar(e), i = Cn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = lr(e, i, o), t !== null && (qt(t, e, o, r), $l(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = et(), r = ar(e), o = Cn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = lr(e, o, r), t !== null && (qt(t, e, r, n), $l(t, e, r));
} };
function Kf(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Mi(n, r) || !Mi(o, i) : !0;
}
function Ag(e, t, n) {
  var r = !1, o = dr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ot(i) : (o = ut(t) ? jr : Qe.current, r = t.contextTypes, i = (r = r != null) ? Io(e, o) : dr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function qf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
}
function Fu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ed(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Ot(i) : (i = ut(t) ? jr : Qe.current, o.context = Io(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ju(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Hs.enqueueReplaceState(o, o.state, null), ms(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Do(e, t) {
  try {
    var n = "", r = t;
    do
      n += iw(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ja(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Ix = typeof WeakMap == "function" ? WeakMap : Map;
function _g(e, t, n) {
  n = Cn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    xs || (xs = !0, Xu = r), Bu(e, t);
  }, n;
}
function Ig(e, t, n) {
  n = Cn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Bu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Bu(e, t), typeof r != "function" && (sr === null ? sr = /* @__PURE__ */ new Set([this]) : sr.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Xf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ix();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Qx.bind(null, e, t, n), t.then(e, e));
}
function Gf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zf(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cn(-1, 1), t.tag = 2, lr(n, t, 1))), n.lanes |= 1), e);
}
var Ox = On.ReactCurrentOwner, st = !1;
function Ge(e, t, n, r) {
  t.child = e === null ? sg(t, null, n, r) : Lo(t, e.child, n, r);
}
function Jf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return go(t, o), r = id(e, t, n, r, i, o), n = ld(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rn(e, t, o)) : (Se && n && Yc(t), t.flags |= 1, Ge(e, t, r, o), t.child);
}
function ep(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !gd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Og(e, t, i, r, o)) : (e = Yl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mi, n(l, r) && e.ref === t.ref) return Rn(e, t, o);
  }
  return t.flags |= 1, e = ur(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Og(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Mi(i, r) && e.ref === t.ref) if (st = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (st = !0);
    else return t.lanes = e.lanes, Rn(e, t, o);
  }
  return $u(e, t, n, r, o);
}
function Lg(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(co, yt), yt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me(co, yt), yt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, me(co, yt), yt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, me(co, yt), yt |= r;
  return Ge(e, t, o, n), t.child;
}
function Mg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function $u(e, t, n, r, o) {
  var i = ut(n) ? jr : Qe.current;
  return i = Io(t, i), go(t, o), n = id(e, t, n, r, i, o), r = ld(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rn(e, t, o)) : (Se && r && Yc(t), t.flags |= 1, Ge(e, t, n, o), t.child);
}
function tp(e, t, n, r, o) {
  if (ut(n)) {
    var i = !0;
    cs(t);
  } else i = !1;
  if (go(t, o), t.stateNode === null) Vl(e, t), Ag(t, n, r), Fu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ot(u) : (u = ut(n) ? jr : Qe.current, u = Io(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && qf(t, l, r, u), Qn = !1;
    var p = t.memoizedState;
    l.state = p, ms(t, r, l, o), a = t.memoizedState, s !== r || p !== a || at.current || Qn ? (typeof c == "function" && (ju(t, n, c, r), a = t.memoizedState), (s = Qn || Kf(t, n, s, r, p, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, ug(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Ut(t.type, s), l.props = u, f = t.pendingProps, p = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ot(a) : (a = ut(n) ? jr : Qe.current, a = Io(t, a));
    var d = n.getDerivedStateFromProps;
    (c = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || p !== a) && qf(t, l, r, a), Qn = !1, p = t.memoizedState, l.state = p, ms(t, r, l, o);
    var y = t.memoizedState;
    s !== f || p !== y || at.current || Qn ? (typeof d == "function" && (ju(t, n, d, r), y = t.memoizedState), (u = Qn || Kf(t, n, u, r, p, y, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Uu(e, t, n, r, i, o);
}
function Uu(e, t, n, r, o, i) {
  Mg(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Bf(t, n, !1), Rn(e, t, i);
  r = t.stateNode, Ox.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Lo(t, e.child, null, i), t.child = Lo(t, null, s, i)) : Ge(e, t, s, i), t.memoizedState = r.state, o && Bf(t, n, !0), t.child;
}
function Dg(e) {
  var t = e.stateNode;
  t.pendingContext ? Ff(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ff(e, t.context, !1), td(e, t.containerInfo);
}
function np(e, t, n, r, o) {
  return Oo(), qc(o), t.flags |= 256, Ge(e, t, n, r), t.child;
}
var Hu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zg(e, t, n) {
  var r = t.pendingProps, o = be.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), me(be, o & 1), e === null)
    return Du(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Qs(l, r, 0, null), e = zr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Vu(n), t.memoizedState = Hu, e) : ud(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Lx(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = ur(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = ur(s, i) : (i = zr(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Vu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Hu, r;
  }
  return i = e.child, e = i.sibling, r = ur(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ud(e, t) {
  return t = Qs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function El(e, t, n, r) {
  return r !== null && qc(r), Lo(t, e.child, null, n), e = ud(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Lx(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ja(Error(j(422))), El(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Qs({ mode: "visible", children: r.children }, o, 0, null), i = zr(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Lo(t, e.child, null, l), t.child.memoizedState = Vu(l), t.memoizedState = Hu, i);
  if (!(t.mode & 1)) return El(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(j(419)), r = ja(i, r, void 0), El(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, st || s) {
    if (r = De, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Nn(e, o), qt(r, e, o, -1));
    }
    return md(), r = ja(Error(j(421))), El(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yx.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, wt = ir(o.nextSibling), St = t, Se = !0, Yt = null, e !== null && (Nt[Rt++] = kn, Nt[Rt++] = En, Nt[Rt++] = Fr, kn = e.id, En = e.overflow, Fr = t), t = ud(t, r.children), t.flags |= 4096, t);
}
function rp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), zu(e.return, t, n);
}
function Fa(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function jg(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ge(e, t, r.children, n), r = be.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && rp(e, n, t);
      else if (e.tag === 19) rp(e, n, t);
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
  if (me(be, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && gs(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Fa(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && gs(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Fa(t, !0, n, null, i);
      break;
    case "together":
      Fa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Vl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), $r |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = ur(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ur(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Mx(e, t, n) {
  switch (t.tag) {
    case 3:
      Dg(t), Oo();
      break;
    case 5:
      cg(t);
      break;
    case 1:
      ut(t.type) && cs(t);
      break;
    case 4:
      td(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      me(ps, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (me(be, be.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? zg(e, t, n) : (me(be, be.current & 1), e = Rn(e, t, n), e !== null ? e.sibling : null);
      me(be, be.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return jg(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), me(be, be.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Lg(e, t, n);
  }
  return Rn(e, t, n);
}
var Fg, Wu, Bg, $g;
Fg = function(e, t) {
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
Wu = function() {
};
Bg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Rr(dn.current);
    var i = null;
    switch (n) {
      case "input":
        o = pu(e, o), r = pu(e, r), i = [];
        break;
      case "select":
        o = Ee({}, o, { value: void 0 }), r = Ee({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = gu(e, o), r = gu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = as);
    }
    vu(n, r);
    var l;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ni.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ni.hasOwnProperty(u) ? (a != null && u === "onScroll" && ve("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
$g = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function oi(e, t) {
  if (!Se) switch (e.tailMode) {
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
function He(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Dx(e, t, n) {
  var r = t.pendingProps;
  switch (Kc(t), t.tag) {
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
      return He(t), null;
    case 1:
      return ut(t.type) && us(), He(t), null;
    case 3:
      return r = t.stateNode, Mo(), we(at), we(Qe), rd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (bl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Yt !== null && (Ju(Yt), Yt = null))), Wu(e, t), He(t), null;
    case 5:
      nd(t);
      var o = Rr(Bi.current);
      if (n = t.type, e !== null && t.stateNode != null) Bg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return He(t), null;
        }
        if (e = Rr(dn.current), bl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[an] = t, r[ji] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ve("cancel", r), ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < hi.length; o++) ve(hi[o], r);
              break;
            case "source":
              ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ve(
                "error",
                r
              ), ve("load", r);
              break;
            case "details":
              ve("toggle", r);
              break;
            case "input":
              ff(r, i), ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ve("invalid", r);
              break;
            case "textarea":
              hf(r, i), ve("invalid", r);
          }
          vu(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Sl(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Sl(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Ni.hasOwnProperty(l) && s != null && l === "onScroll" && ve("scroll", r);
          }
          switch (n) {
            case "input":
              pl(r), pf(r, i, !0);
              break;
            case "textarea":
              pl(r), mf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = as);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[an] = t, e[ji] = r, Fg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = wu(n, r), n) {
              case "dialog":
                ve("cancel", e), ve("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < hi.length; o++) ve(hi[o], e);
                o = r;
                break;
              case "source":
                ve("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  e
                ), ve("load", e), o = r;
                break;
              case "details":
                ve("toggle", e), o = r;
                break;
              case "input":
                ff(e, r), o = pu(e, r), ve("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ee({}, r, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                hf(e, r), o = gu(e, r), ve("invalid", e);
                break;
              default:
                o = r;
            }
            vu(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? vm(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && gm(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ri(e, a) : typeof a == "number" && Ri(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ni.hasOwnProperty(i) ? a != null && i === "onScroll" && ve("scroll", e) : a != null && Oc(e, i, a, l));
            }
            switch (n) {
              case "input":
                pl(e), pf(e, r, !1);
                break;
              case "textarea":
                pl(e), mf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? fo(e, !!r.multiple, i, !1) : r.defaultValue != null && fo(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = as);
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
      return He(t), null;
    case 6:
      if (e && t.stateNode != null) $g(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (n = Rr(Bi.current), Rr(dn.current), bl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[an] = t, (i = r.nodeValue !== n) && (e = St, e !== null)) switch (e.tag) {
            case 3:
              Sl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[an] = t, t.stateNode = r;
      }
      return He(t), null;
    case 13:
      if (we(be), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Se && wt !== null && t.mode & 1 && !(t.flags & 128)) ig(), Oo(), t.flags |= 98560, i = !1;
        else if (i = bl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(j(317));
            i[an] = t;
          } else Oo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          He(t), i = !1;
        } else Yt !== null && (Ju(Yt), Yt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || be.current & 1 ? Oe === 0 && (Oe = 3) : md())), t.updateQueue !== null && (t.flags |= 4), He(t), null);
    case 4:
      return Mo(), Wu(e, t), e === null && Di(t.stateNode.containerInfo), He(t), null;
    case 10:
      return Zc(t.type._context), He(t), null;
    case 17:
      return ut(t.type) && us(), He(t), null;
    case 19:
      if (we(be), i = t.memoizedState, i === null) return He(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) oi(i, !1);
      else {
        if (Oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = gs(e), l !== null) {
            for (t.flags |= 128, oi(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return me(be, be.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Te() > zo && (t.flags |= 128, r = !0, oi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = gs(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), oi(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Se) return He(t), null;
        } else 2 * Te() - i.renderingStartTime > zo && n !== 1073741824 && (t.flags |= 128, r = !0, oi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Te(), t.sibling = null, n = be.current, me(be, r ? n & 1 | 2 : n & 1), t) : (He(t), null);
    case 22:
    case 23:
      return hd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? yt & 1073741824 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function zx(e, t) {
  switch (Kc(t), t.tag) {
    case 1:
      return ut(t.type) && us(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Mo(), we(at), we(Qe), rd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return nd(t), null;
    case 13:
      if (we(be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(j(340));
        Oo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return we(be), null;
    case 4:
      return Mo(), null;
    case 10:
      return Zc(t.type._context), null;
    case 22:
    case 23:
      return hd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cl = !1, We = !1, jx = typeof WeakSet == "function" ? WeakSet : Set, H = null;
function uo(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Pe(e, t, r);
  }
  else n.current = null;
}
function Qu(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var op = !1;
function Fx(e, t) {
  if (Ru = is, e = Qm(), Qc(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, s = -1, a = -1, u = 0, c = 0, f = e, p = null;
        t: for (; ; ) {
          for (var d; f !== n || o !== 0 && f.nodeType !== 3 || (s = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (d = f.firstChild) !== null; )
            p = f, f = d;
          for (; ; ) {
            if (f === e) break t;
            if (p === n && ++u === o && (s = l), p === i && ++c === r && (a = l), (d = f.nextSibling) !== null) break;
            f = p, p = f.parentNode;
          }
          f = d;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Au = { focusedElem: e, selectionRange: n }, is = !1, H = t; H !== null; ) if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
  else for (; H !== null; ) {
    t = H;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var m = y.memoizedProps, x = y.memoizedState, h = t.stateNode, g = h.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Ut(t.type, m), x);
            h.__reactInternalSnapshotBeforeUpdate = g;
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
          throw Error(j(163));
      }
    } catch (E) {
      Pe(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, H = e;
      break;
    }
    H = t.return;
  }
  return y = op, op = !1, y;
}
function Si(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Qu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Vs(e, t) {
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
function Yu(e) {
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
function Ug(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ug(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[an], delete t[ji], delete t[Ou], delete t[Sx], delete t[bx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Hg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ip(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hg(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ku(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = as));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ku(e, t, n), e = e.sibling; e !== null; ) Ku(e, t, n), e = e.sibling;
}
function qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (qu(e, t, n), e = e.sibling; e !== null; ) qu(e, t, n), e = e.sibling;
}
var ze = null, Qt = !1;
function Bn(e, t, n) {
  for (n = n.child; n !== null; ) Vg(e, t, n), n = n.sibling;
}
function Vg(e, t, n) {
  if (cn && typeof cn.onCommitFiberUnmount == "function") try {
    cn.onCommitFiberUnmount(Ds, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      We || uo(n, t);
    case 6:
      var r = ze, o = Qt;
      ze = null, Bn(e, t, n), ze = r, Qt = o, ze !== null && (Qt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null && (Qt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? Ia(e.parentNode, n) : e.nodeType === 1 && Ia(e, n), Oi(e)) : Ia(ze, n.stateNode));
      break;
    case 4:
      r = ze, o = Qt, ze = n.stateNode.containerInfo, Qt = !0, Bn(e, t, n), ze = r, Qt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!We && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Qu(n, t, l), o = o.next;
        } while (o !== r);
      }
      Bn(e, t, n);
      break;
    case 1:
      if (!We && (uo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Pe(n, t, s);
      }
      Bn(e, t, n);
      break;
    case 21:
      Bn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (We = (r = We) || n.memoizedState !== null, Bn(e, t, n), We = r) : Bn(e, t, n);
      break;
    default:
      Bn(e, t, n);
  }
}
function lp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jx()), t.forEach(function(r) {
      var o = Kx.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Bt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            ze = s.stateNode, Qt = !1;
            break e;
          case 3:
            ze = s.stateNode.containerInfo, Qt = !0;
            break e;
          case 4:
            ze = s.stateNode.containerInfo, Qt = !0;
            break e;
        }
        s = s.return;
      }
      if (ze === null) throw Error(j(160));
      Vg(i, l, o), ze = null, Qt = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      Pe(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wg(t, e), t = t.sibling;
}
function Wg(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Bt(t, e), tn(e), r & 4) {
        try {
          Si(3, e, e.return), Vs(3, e);
        } catch (m) {
          Pe(e, e.return, m);
        }
        try {
          Si(5, e, e.return);
        } catch (m) {
          Pe(e, e.return, m);
        }
      }
      break;
    case 1:
      Bt(t, e), tn(e), r & 512 && n !== null && uo(n, n.return);
      break;
    case 5:
      if (Bt(t, e), tn(e), r & 512 && n !== null && uo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ri(o, "");
        } catch (m) {
          Pe(e, e.return, m);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && pm(o, i), wu(s, l);
          var u = wu(s, i);
          for (l = 0; l < a.length; l += 2) {
            var c = a[l], f = a[l + 1];
            c === "style" ? vm(o, f) : c === "dangerouslySetInnerHTML" ? gm(o, f) : c === "children" ? Ri(o, f) : Oc(o, c, f, u);
          }
          switch (s) {
            case "input":
              hu(o, i);
              break;
            case "textarea":
              hm(o, i);
              break;
            case "select":
              var p = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? fo(o, !!i.multiple, d, !1) : p !== !!i.multiple && (i.defaultValue != null ? fo(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : fo(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[ji] = i;
        } catch (m) {
          Pe(e, e.return, m);
        }
      }
      break;
    case 6:
      if (Bt(t, e), tn(e), r & 4) {
        if (e.stateNode === null) throw Error(j(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (m) {
          Pe(e, e.return, m);
        }
      }
      break;
    case 3:
      if (Bt(t, e), tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Oi(t.containerInfo);
      } catch (m) {
        Pe(e, e.return, m);
      }
      break;
    case 4:
      Bt(t, e), tn(e);
      break;
    case 13:
      Bt(t, e), tn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (fd = Te())), r & 4 && lp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (u = We) || c, Bt(t, e), We = u) : Bt(t, e), tn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (H = e, c = e.child; c !== null; ) {
          for (f = H = c; H !== null; ) {
            switch (p = H, d = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Si(4, p, p.return);
                break;
              case 1:
                uo(p, p.return);
                var y = p.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (m) {
                    Pe(r, n, m);
                  }
                }
                break;
              case 5:
                uo(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  ap(f);
                  continue;
                }
            }
            d !== null ? (d.return = p, H = d) : ap(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = ym("display", l));
              } catch (m) {
                Pe(e, e.return, m);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (m) {
              Pe(e, e.return, m);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      Bt(t, e), tn(e), r & 4 && lp(e);
      break;
    case 21:
      break;
    default:
      Bt(
        t,
        e
      ), tn(e);
  }
}
function tn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ri(o, ""), r.flags &= -33);
          var i = ip(e);
          qu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = ip(e);
          Ku(e, s, l);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      Pe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bx(e, t, n) {
  H = e, Qg(e);
}
function Qg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var o = H, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Cl;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || We;
        s = Cl;
        var u = We;
        if (Cl = l, (We = a) && !u) for (H = o; H !== null; ) l = H, a = l.child, l.tag === 22 && l.memoizedState !== null ? up(o) : a !== null ? (a.return = l, H = a) : up(o);
        for (; i !== null; ) H = i, Qg(i), i = i.sibling;
        H = o, Cl = s, We = u;
      }
      sp(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, H = i) : sp(e);
  }
}
function sp(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            We || Vs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !We) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Ut(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Wf(t, i, r);
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
              Wf(t, l, n);
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
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && Oi(f);
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
            throw Error(j(163));
        }
        We || t.flags & 512 && Yu(t);
      } catch (p) {
        Pe(t, t.return, p);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function ap(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function up(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vs(4, t);
          } catch (a) {
            Pe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Pe(t, o, a);
            }
          }
          var i = t.return;
          try {
            Yu(t);
          } catch (a) {
            Pe(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Yu(t);
          } catch (a) {
            Pe(t, l, a);
          }
      }
    } catch (a) {
      Pe(t, t.return, a);
    }
    if (t === e) {
      H = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, H = s;
      break;
    }
    H = t.return;
  }
}
var $x = Math.ceil, ws = On.ReactCurrentDispatcher, cd = On.ReactCurrentOwner, It = On.ReactCurrentBatchConfig, le = 0, De = null, _e = null, je = 0, yt = 0, co = yr(0), Oe = 0, Vi = null, $r = 0, Ws = 0, dd = 0, bi = null, lt = null, fd = 0, zo = 1 / 0, xn = null, xs = !1, Xu = null, sr = null, Pl = !1, tr = null, Ss = 0, ki = 0, Gu = null, Wl = -1, Ql = 0;
function et() {
  return le & 6 ? Te() : Wl !== -1 ? Wl : Wl = Te();
}
function ar(e) {
  return e.mode & 1 ? le & 2 && je !== 0 ? je & -je : Ex.transition !== null ? (Ql === 0 && (Ql = Am()), Ql) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : zm(e.type)), e) : 1;
}
function qt(e, t, n, r) {
  if (50 < ki) throw ki = 0, Gu = null, Error(j(185));
  Ji(e, n, r), (!(le & 2) || e !== De) && (e === De && (!(le & 2) && (Ws |= n), Oe === 4 && Kn(e, je)), ct(e, r), n === 1 && le === 0 && !(t.mode & 1) && (zo = Te() + 500, $s && vr()));
}
function ct(e, t) {
  var n = e.callbackNode;
  Ew(e, t);
  var r = os(e, e === De ? je : 0);
  if (r === 0) n !== null && vf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && vf(n), t === 1) e.tag === 0 ? kx(cp.bind(null, e)) : ng(cp.bind(null, e)), wx(function() {
      !(le & 6) && vr();
    }), n = null;
    else {
      switch (_m(r)) {
        case 1:
          n = jc;
          break;
        case 4:
          n = Nm;
          break;
        case 16:
          n = rs;
          break;
        case 536870912:
          n = Rm;
          break;
        default:
          n = rs;
      }
      n = ey(n, Yg.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Yg(e, t) {
  if (Wl = -1, Ql = 0, le & 6) throw Error(j(327));
  var n = e.callbackNode;
  if (yo() && e.callbackNode !== n) return null;
  var r = os(e, e === De ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bs(e, r);
  else {
    t = r;
    var o = le;
    le |= 2;
    var i = qg();
    (De !== e || je !== t) && (xn = null, zo = Te() + 500, Dr(e, t));
    do
      try {
        Vx();
        break;
      } catch (s) {
        Kg(e, s);
      }
    while (!0);
    Gc(), ws.current = i, le = o, _e !== null ? t = 0 : (De = null, je = 0, t = Oe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Eu(e), o !== 0 && (r = o, t = Zu(e, o))), t === 1) throw n = Vi, Dr(e, 0), Kn(e, r), ct(e, Te()), n;
    if (t === 6) Kn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ux(o) && (t = bs(e, r), t === 2 && (i = Eu(e), i !== 0 && (r = i, t = Zu(e, i))), t === 1)) throw n = Vi, Dr(e, 0), Kn(e, r), ct(e, Te()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Cr(e, lt, xn);
          break;
        case 3:
          if (Kn(e, r), (r & 130023424) === r && (t = fd + 500 - Te(), 10 < t)) {
            if (os(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              et(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Iu(Cr.bind(null, e, lt, xn), t);
            break;
          }
          Cr(e, lt, xn);
          break;
        case 4:
          if (Kn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Kt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $x(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Iu(Cr.bind(null, e, lt, xn), r);
            break;
          }
          Cr(e, lt, xn);
          break;
        case 5:
          Cr(e, lt, xn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return ct(e, Te()), e.callbackNode === n ? Yg.bind(null, e) : null;
}
function Zu(e, t) {
  var n = bi;
  return e.current.memoizedState.isDehydrated && (Dr(e, t).flags |= 256), e = bs(e, t), e !== 2 && (t = lt, lt = n, t !== null && Ju(t)), e;
}
function Ju(e) {
  lt === null ? lt = e : lt.push.apply(lt, e);
}
function Ux(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Xt(i(), o)) return !1;
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
function Kn(e, t) {
  for (t &= ~dd, t &= ~Ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function cp(e) {
  if (le & 6) throw Error(j(327));
  yo();
  var t = os(e, 0);
  if (!(t & 1)) return ct(e, Te()), null;
  var n = bs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Eu(e);
    r !== 0 && (t = r, n = Zu(e, r));
  }
  if (n === 1) throw n = Vi, Dr(e, 0), Kn(e, t), ct(e, Te()), n;
  if (n === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Cr(e, lt, xn), ct(e, Te()), null;
}
function pd(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    le = n, le === 0 && (zo = Te() + 500, $s && vr());
  }
}
function Ur(e) {
  tr !== null && tr.tag === 0 && !(le & 6) && yo();
  var t = le;
  le |= 1;
  var n = It.transition, r = ce;
  try {
    if (It.transition = null, ce = 1, e) return e();
  } finally {
    ce = r, It.transition = n, le = t, !(le & 6) && vr();
  }
}
function hd() {
  yt = co.current, we(co);
}
function Dr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, vx(n)), _e !== null) for (n = _e.return; n !== null; ) {
    var r = n;
    switch (Kc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && us();
        break;
      case 3:
        Mo(), we(at), we(Qe), rd();
        break;
      case 5:
        nd(r);
        break;
      case 4:
        Mo();
        break;
      case 13:
        we(be);
        break;
      case 19:
        we(be);
        break;
      case 10:
        Zc(r.type._context);
        break;
      case 22:
      case 23:
        hd();
    }
    n = n.return;
  }
  if (De = e, _e = e = ur(e.current, null), je = yt = t, Oe = 0, Vi = null, dd = Ws = $r = 0, lt = bi = null, Nr !== null) {
    for (t = 0; t < Nr.length; t++) if (n = Nr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    Nr = null;
  }
  return e;
}
function Kg(e, t) {
  do {
    var n = _e;
    try {
      if (Gc(), Ul.current = vs, ys) {
        for (var r = ke.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ys = !1;
      }
      if (Br = 0, Me = Ie = ke = null, xi = !1, $i = 0, cd.current = null, n === null || n.return === null) {
        Oe = 1, Vi = t, _e = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, a = t;
        if (t = je, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var d = Gf(l);
          if (d !== null) {
            d.flags &= -257, Zf(d, l, s, i, t), d.mode & 1 && Xf(i, u, t), t = d, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var m = /* @__PURE__ */ new Set();
              m.add(a), t.updateQueue = m;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Xf(i, u, t), md();
              break e;
            }
            a = Error(j(426));
          }
        } else if (Se && s.mode & 1) {
          var x = Gf(l);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Zf(x, l, s, i, t), qc(Do(a, s));
            break e;
          }
        }
        i = a = Do(a, s), Oe !== 4 && (Oe = 2), bi === null ? bi = [i] : bi.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = _g(i, a, t);
              Vf(i, h);
              break e;
            case 1:
              s = a;
              var g = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (sr === null || !sr.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = Ig(i, s, t);
                Vf(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gg(n);
    } catch (P) {
      t = P, _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qg() {
  var e = ws.current;
  return ws.current = vs, e === null ? vs : e;
}
function md() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), De === null || !($r & 268435455) && !(Ws & 268435455) || Kn(De, je);
}
function bs(e, t) {
  var n = le;
  le |= 2;
  var r = qg();
  (De !== e || je !== t) && (xn = null, Dr(e, t));
  do
    try {
      Hx();
      break;
    } catch (o) {
      Kg(e, o);
    }
  while (!0);
  if (Gc(), le = n, ws.current = r, _e !== null) throw Error(j(261));
  return De = null, je = 0, Oe;
}
function Hx() {
  for (; _e !== null; ) Xg(_e);
}
function Vx() {
  for (; _e !== null && !mw(); ) Xg(_e);
}
function Xg(e) {
  var t = Jg(e.alternate, e, yt);
  e.memoizedProps = e.pendingProps, t === null ? Gg(e) : _e = t, cd.current = null;
}
function Gg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = zx(n, t), n !== null) {
        n.flags &= 32767, _e = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Oe = 6, _e = null;
        return;
      }
    } else if (n = Dx(n, t, yt), n !== null) {
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
function Cr(e, t, n) {
  var r = ce, o = It.transition;
  try {
    It.transition = null, ce = 1, Wx(e, t, n, r);
  } finally {
    It.transition = o, ce = r;
  }
  return null;
}
function Wx(e, t, n, r) {
  do
    yo();
  while (tr !== null);
  if (le & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Cw(e, i), e === De && (_e = De = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pl || (Pl = !0, ey(rs, function() {
    return yo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = It.transition, It.transition = null;
    var l = ce;
    ce = 1;
    var s = le;
    le |= 4, cd.current = null, Fx(e, n), Wg(n, e), dx(Au), is = !!Ru, Au = Ru = null, e.current = n, Bx(n), gw(), le = s, ce = l, It.transition = i;
  } else e.current = n;
  if (Pl && (Pl = !1, tr = e, Ss = o), i = e.pendingLanes, i === 0 && (sr = null), ww(n.stateNode), ct(e, Te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xs) throw xs = !1, e = Xu, Xu = null, e;
  return Ss & 1 && e.tag !== 0 && yo(), i = e.pendingLanes, i & 1 ? e === Gu ? ki++ : (ki = 0, Gu = e) : ki = 0, vr(), null;
}
function yo() {
  if (tr !== null) {
    var e = _m(Ss), t = It.transition, n = ce;
    try {
      if (It.transition = null, ce = 16 > e ? 16 : e, tr === null) var r = !1;
      else {
        if (e = tr, tr = null, Ss = 0, le & 6) throw Error(j(331));
        var o = le;
        for (le |= 4, H = e.current; H !== null; ) {
          var i = H, l = i.child;
          if (H.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (H = u; H !== null; ) {
                  var c = H;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Si(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, H = f;
                  else for (; H !== null; ) {
                    c = H;
                    var p = c.sibling, d = c.return;
                    if (Ug(c), c === u) {
                      H = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = d, H = p;
                      break;
                    }
                    H = d;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var m = y.child;
                if (m !== null) {
                  y.child = null;
                  do {
                    var x = m.sibling;
                    m.sibling = null, m = x;
                  } while (m !== null);
                }
              }
              H = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, H = l;
          else e: for (; H !== null; ) {
            if (i = H, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Si(9, i, i.return);
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, H = h;
              break e;
            }
            H = i.return;
          }
        }
        var g = e.current;
        for (H = g; H !== null; ) {
          l = H;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) v.return = l, H = v;
          else e: for (l = g; H !== null; ) {
            if (s = H, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Vs(9, s);
              }
            } catch (P) {
              Pe(s, s.return, P);
            }
            if (s === l) {
              H = null;
              break e;
            }
            var E = s.sibling;
            if (E !== null) {
              E.return = s.return, H = E;
              break e;
            }
            H = s.return;
          }
        }
        if (le = o, vr(), cn && typeof cn.onPostCommitFiberRoot == "function") try {
          cn.onPostCommitFiberRoot(Ds, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ce = n, It.transition = t;
    }
  }
  return !1;
}
function dp(e, t, n) {
  t = Do(n, t), t = _g(e, t, 1), e = lr(e, t, 1), t = et(), e !== null && (Ji(e, 1, t), ct(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) dp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      dp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sr === null || !sr.has(r))) {
        e = Do(n, e), e = Ig(t, e, 1), t = lr(t, e, 1), e = et(), t !== null && (Ji(t, 1, e), ct(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Qx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = et(), e.pingedLanes |= e.suspendedLanes & n, De === e && (je & n) === n && (Oe === 4 || Oe === 3 && (je & 130023424) === je && 500 > Te() - fd ? Dr(e, 0) : dd |= n), ct(e, t);
}
function Zg(e, t) {
  t === 0 && (e.mode & 1 ? (t = gl, gl <<= 1, !(gl & 130023424) && (gl = 4194304)) : t = 1);
  var n = et();
  e = Nn(e, t), e !== null && (Ji(e, t, n), ct(e, n));
}
function Yx(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Zg(e, n);
}
function Kx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Zg(e, n);
}
var Jg;
Jg = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || at.current) st = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return st = !1, Mx(e, t, n);
    st = !!(e.flags & 131072);
  }
  else st = !1, Se && t.flags & 1048576 && rg(t, fs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Vl(e, t), e = t.pendingProps;
      var o = Io(t, Qe.current);
      go(t, n), o = id(null, t, r, e, o, n);
      var i = ld();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ut(r) ? (i = !0, cs(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ed(t), o.updater = Hs, t.stateNode = o, o._reactInternals = t, Fu(t, r, e, n), t = Uu(null, t, r, !0, i, n)) : (t.tag = 0, Se && i && Yc(t), Ge(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Vl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Xx(r), e = Ut(r, e), o) {
          case 0:
            t = $u(null, t, r, e, n);
            break e;
          case 1:
            t = tp(null, t, r, e, n);
            break e;
          case 11:
            t = Jf(null, t, r, e, n);
            break e;
          case 14:
            t = ep(null, t, r, Ut(r.type, e), n);
            break e;
        }
        throw Error(j(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ut(r, o), $u(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ut(r, o), tp(e, t, r, o, n);
    case 3:
      e: {
        if (Dg(t), e === null) throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, ug(e, t), ms(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Do(Error(j(423)), t), t = np(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Do(Error(j(424)), t), t = np(e, t, r, n, o);
          break e;
        } else for (wt = ir(t.stateNode.containerInfo.firstChild), St = t, Se = !0, Yt = null, n = sg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Oo(), r === o) {
            t = Rn(e, t, n);
            break e;
          }
          Ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return cg(t), e === null && Du(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, _u(r, o) ? l = null : i !== null && _u(r, i) && (t.flags |= 32), Mg(e, t), Ge(e, t, l, n), t.child;
    case 6:
      return e === null && Du(t), null;
    case 13:
      return zg(e, t, n);
    case 4:
      return td(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Lo(t, null, r, n) : Ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ut(r, o), Jf(e, t, r, o, n);
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, me(ps, r._currentValue), r._currentValue = l, i !== null) if (Xt(i.value, l)) {
          if (i.children === o.children && !at.current) {
            t = Rn(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Cn(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), zu(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(j(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), zu(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        Ge(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, go(t, n), o = Ot(o), r = r(o), t.flags |= 1, Ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Ut(r, t.pendingProps), o = Ut(r.type, o), ep(e, t, r, o, n);
    case 15:
      return Og(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ut(r, o), Vl(e, t), t.tag = 1, ut(r) ? (e = !0, cs(t)) : e = !1, go(t, n), Ag(t, r, o), Fu(t, r, o, n), Uu(null, t, r, !0, e, n);
    case 19:
      return jg(e, t, n);
    case 22:
      return Lg(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function ey(e, t) {
  return Tm(e, t);
}
function qx(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _t(e, t, n, r) {
  return new qx(e, t, n, r);
}
function gd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Xx(e) {
  if (typeof e == "function") return gd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mc) return 11;
    if (e === Dc) return 14;
  }
  return 2;
}
function ur(e, t) {
  var n = e.alternate;
  return n === null ? (n = _t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Yl(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") gd(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case eo:
      return zr(n.children, o, i, t);
    case Lc:
      l = 8, o |= 8;
      break;
    case uu:
      return e = _t(12, n, t, o | 2), e.elementType = uu, e.lanes = i, e;
    case cu:
      return e = _t(13, n, t, o), e.elementType = cu, e.lanes = i, e;
    case du:
      return e = _t(19, n, t, o), e.elementType = du, e.lanes = i, e;
    case cm:
      return Qs(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case am:
          l = 10;
          break e;
        case um:
          l = 9;
          break e;
        case Mc:
          l = 11;
          break e;
        case Dc:
          l = 14;
          break e;
        case Wn:
          l = 16, r = null;
          break e;
      }
      throw Error(j(130, e == null ? e : typeof e, ""));
  }
  return t = _t(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function zr(e, t, n, r) {
  return e = _t(7, e, r, t), e.lanes = n, e;
}
function Qs(e, t, n, r) {
  return e = _t(22, e, r, t), e.elementType = cm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ba(e, t, n) {
  return e = _t(6, e, null, t), e.lanes = n, e;
}
function $a(e, t, n) {
  return t = _t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gx(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sa(0), this.expirationTimes = Sa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sa(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function yd(e, t, n, r, o, i, l, s, a) {
  return e = new Gx(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = _t(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ed(i), e;
}
function Zx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ty(e) {
  if (!e) return dr;
  e = e._reactInternals;
  e: {
    if (Wr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ut(n)) return tg(e, n, t);
  }
  return t;
}
function ny(e, t, n, r, o, i, l, s, a) {
  return e = yd(n, r, !0, e, o, i, l, s, a), e.context = ty(null), n = e.current, r = et(), o = ar(n), i = Cn(r, o), i.callback = t ?? null, lr(n, i, o), e.current.lanes = o, Ji(e, o, r), ct(e, r), e;
}
function Ys(e, t, n, r) {
  var o = t.current, i = et(), l = ar(o);
  return n = ty(n), t.context === null ? t.context = n : t.pendingContext = n, t = Cn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = lr(o, t, l), e !== null && (qt(e, o, l, i), $l(e, o, l)), l;
}
function ks(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function vd(e, t) {
  fp(e, t), (e = e.alternate) && fp(e, t);
}
function Jx() {
  return null;
}
var ry = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function wd(e) {
  this._internalRoot = e;
}
Ks.prototype.render = wd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Ys(e, t, null, null);
};
Ks.prototype.unmount = wd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ur(function() {
      Ys(null, e, null, null);
    }), t[Tn] = null;
  }
};
function Ks(e) {
  this._internalRoot = e;
}
Ks.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Lm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yn.length && t !== 0 && t < Yn[n].priority; n++) ;
    Yn.splice(n, 0, e), n === 0 && Dm(e);
  }
};
function xd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function qs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function pp() {
}
function e1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = ks(l);
        i.call(u);
      };
    }
    var l = ny(t, r, e, 0, null, !1, !1, "", pp);
    return e._reactRootContainer = l, e[Tn] = l.current, Di(e.nodeType === 8 ? e.parentNode : e), Ur(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = ks(a);
      s.call(u);
    };
  }
  var a = yd(e, 0, !1, null, null, !1, !1, "", pp);
  return e._reactRootContainer = a, e[Tn] = a.current, Di(e.nodeType === 8 ? e.parentNode : e), Ur(function() {
    Ys(t, a, n, r);
  }), a;
}
function Xs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = ks(l);
        s.call(a);
      };
    }
    Ys(t, l, e, o);
  } else l = e1(n, t, e, o, r);
  return ks(l);
}
Im = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pi(t.pendingLanes);
        n !== 0 && (Fc(t, n | 1), ct(t, Te()), !(le & 6) && (zo = Te() + 500, vr()));
      }
      break;
    case 13:
      Ur(function() {
        var r = Nn(e, 1);
        if (r !== null) {
          var o = et();
          qt(r, e, 1, o);
        }
      }), vd(e, 1);
  }
};
Bc = function(e) {
  if (e.tag === 13) {
    var t = Nn(e, 134217728);
    if (t !== null) {
      var n = et();
      qt(t, e, 134217728, n);
    }
    vd(e, 134217728);
  }
};
Om = function(e) {
  if (e.tag === 13) {
    var t = ar(e), n = Nn(e, t);
    if (n !== null) {
      var r = et();
      qt(n, e, t, r);
    }
    vd(e, t);
  }
};
Lm = function() {
  return ce;
};
Mm = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
Su = function(e, t, n) {
  switch (t) {
    case "input":
      if (hu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Bs(r);
            if (!o) throw Error(j(90));
            fm(r), hu(r, o);
          }
        }
      }
      break;
    case "textarea":
      hm(e, n);
      break;
    case "select":
      t = n.value, t != null && fo(e, !!n.multiple, t, !1);
  }
};
Sm = pd;
bm = Ur;
var t1 = { usingClientEntryPoint: !1, Events: [tl, oo, Bs, wm, xm, pd] }, ii = { findFiberByHostInstance: Tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, n1 = { bundleType: ii.bundleType, version: ii.version, rendererPackageName: ii.rendererPackageName, rendererConfig: ii.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: On.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Cm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ii.findFiberByHostInstance || Jx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tl.isDisabled && Tl.supportsFiber) try {
    Ds = Tl.inject(n1), cn = Tl;
  } catch {
  }
}
Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t1;
Et.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xd(t)) throw Error(j(200));
  return Zx(e, t, null, n);
};
Et.createRoot = function(e, t) {
  if (!xd(e)) throw Error(j(299));
  var n = !1, r = "", o = ry;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = yd(e, 1, !1, null, null, n, !1, r, o), e[Tn] = t.current, Di(e.nodeType === 8 ? e.parentNode : e), new wd(t);
};
Et.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Cm(t), e = e === null ? null : e.stateNode, e;
};
Et.flushSync = function(e) {
  return Ur(e);
};
Et.hydrate = function(e, t, n) {
  if (!qs(t)) throw Error(j(200));
  return Xs(null, e, t, !0, n);
};
Et.hydrateRoot = function(e, t, n) {
  if (!xd(e)) throw Error(j(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = ry;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ny(t, null, e, 1, n ?? null, o, !1, i, l), e[Tn] = t.current, Di(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Ks(t);
};
Et.render = function(e, t, n) {
  if (!qs(t)) throw Error(j(200));
  return Xs(null, e, t, !1, n);
};
Et.unmountComponentAtNode = function(e) {
  if (!qs(e)) throw Error(j(40));
  return e._reactRootContainer ? (Ur(function() {
    Xs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Tn] = null;
    });
  }), !0) : !1;
};
Et.unstable_batchedUpdates = pd;
Et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!qs(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Xs(e, t, n, !1, r);
};
Et.version = "18.3.1-next-f1338f8080-20240426";
function oy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy);
    } catch (e) {
      console.error(e);
    }
}
oy(), om.exports = Et;
var rl = om.exports;
const iy = /* @__PURE__ */ Ls(rl);
var ly, hp = rl;
ly = hp.createRoot, hp.hydrateRoot;
const r1 = 1, o1 = 1e6;
let Ua = 0;
function i1() {
  return Ua = (Ua + 1) % Number.MAX_SAFE_INTEGER, Ua.toString();
}
const Ha = /* @__PURE__ */ new Map(), mp = (e) => {
  if (Ha.has(e))
    return;
  const t = setTimeout(() => {
    Ha.delete(e), Ei({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, o1);
  Ha.set(e, t);
}, l1 = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, r1)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map((n) => n.id === t.toast.id ? { ...n, ...t.toast } : n)
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? mp(n) : e.toasts.forEach((r) => {
        mp(r.id);
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
}, Kl = [];
let ql = { toasts: [] };
function Ei(e) {
  ql = l1(ql, e), Kl.forEach((t) => {
    t(ql);
  });
}
function sy({ ...e }) {
  const t = i1(), n = (o) => Ei({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => Ei({ type: "DISMISS_TOAST", toastId: t });
  return Ei({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function s1() {
  const [e, t] = S.useState(ql);
  return S.useEffect(() => (Kl.push(t), () => {
    const n = Kl.indexOf(t);
    n > -1 && Kl.splice(n, 1);
  }), [e]), {
    ...e,
    toast: sy,
    dismiss: (n) => Ei({ type: "DISMISS_TOAST", toastId: n })
  };
}
function he(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function gp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ay(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = gp(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : gp(e[o], null);
        }
      };
  };
}
function Be(...e) {
  return S.useCallback(ay(...e), e);
}
function ol(e, t = []) {
  let n = [];
  function r(i, l) {
    const s = S.createContext(l), a = n.length;
    n = [...n, l];
    const u = (f) => {
      var h;
      const { scope: p, children: d, ...y } = f, m = ((h = p == null ? void 0 : p[e]) == null ? void 0 : h[a]) || s, x = S.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ C.jsx(m.Provider, { value: x, children: d });
    };
    u.displayName = i + "Provider";
    function c(f, p) {
      var m;
      const d = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[a]) || s, y = S.useContext(d);
      if (y) return y;
      if (l !== void 0) return l;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((l) => S.createContext(l));
    return function(s) {
      const a = (s == null ? void 0 : s[e]) || i;
      return S.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: a } }),
        [s, a]
      );
    };
  };
  return o.scopeName = e, [r, a1(o, ...t)];
}
function a1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const l = r.reduce((s, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Es(e) {
  const t = /* @__PURE__ */ c1(e), n = S.forwardRef((r, o) => {
    const { children: i, ...l } = r, s = S.Children.toArray(i), a = s.find(f1);
    if (a) {
      const u = a.props.children, c = s.map((f) => f === a ? S.Children.count(u) > 1 ? S.Children.only(null) : S.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ C.jsx(t, { ...l, ref: o, children: S.isValidElement(u) ? S.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ C.jsx(t, { ...l, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var u1 = /* @__PURE__ */ Es("Slot");
// @__NO_SIDE_EFFECTS__
function c1(e) {
  const t = S.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (S.isValidElement(o)) {
      const l = h1(o), s = p1(i, o.props);
      return o.type !== S.Fragment && (s.ref = r ? ay(r, l) : l), S.cloneElement(o, s);
    }
    return S.Children.count(o) > 1 ? S.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var uy = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function d1(e) {
  const t = ({ children: n }) => /* @__PURE__ */ C.jsx(C.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = uy, t;
}
function f1(e) {
  return S.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === uy;
}
function p1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const a = i(...s);
      return o(...s), a;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function h1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function m1(e) {
  const t = e + "CollectionProvider", [n, r] = ol(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (m) => {
    const { scope: x, children: h } = m, g = $.useRef(null), v = $.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ C.jsx(o, { scope: x, itemMap: v, collectionRef: g, children: h });
  };
  l.displayName = t;
  const s = e + "CollectionSlot", a = /* @__PURE__ */ Es(s), u = $.forwardRef(
    (m, x) => {
      const { scope: h, children: g } = m, v = i(s, h), E = Be(x, v.collectionRef);
      return /* @__PURE__ */ C.jsx(a, { ref: E, children: g });
    }
  );
  u.displayName = s;
  const c = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Es(c), d = $.forwardRef(
    (m, x) => {
      const { scope: h, children: g, ...v } = m, E = $.useRef(null), P = Be(x, E), k = i(c, h);
      return $.useEffect(() => (k.itemMap.set(E, { ref: E, ...v }), () => void k.itemMap.delete(E))), /* @__PURE__ */ C.jsx(p, { [f]: "", ref: P, children: g });
    }
  );
  d.displayName = c;
  function y(m) {
    const x = i(e + "CollectionConsumer", m);
    return $.useCallback(() => {
      const g = x.collectionRef.current;
      if (!g) return [];
      const v = Array.from(g.querySelectorAll(`[${f}]`));
      return Array.from(x.itemMap.values()).sort(
        (k, T) => v.indexOf(k.ref.current) - v.indexOf(T.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: l, Slot: u, ItemSlot: d },
    y,
    r
  ];
}
var g1 = [
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
], Le = g1.reduce((e, t) => {
  const n = /* @__PURE__ */ Es(`Primitive.${t}`), r = S.forwardRef((o, i) => {
    const { asChild: l, ...s } = o, a = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ C.jsx(a, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function cy(e, t) {
  e && rl.flushSync(() => e.dispatchEvent(t));
}
function Je(e) {
  const t = S.useRef(e);
  return S.useEffect(() => {
    t.current = e;
  }), S.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function y1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e);
  S.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var v1 = "DismissableLayer", ec = "dismissableLayer.update", w1 = "dismissableLayer.pointerDownOutside", x1 = "dismissableLayer.focusOutside", yp, dy = S.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Sd = S.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: l,
      onDismiss: s,
      ...a
    } = e, u = S.useContext(dy), [c, f] = S.useState(null), p = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, d] = S.useState({}), y = Be(t, (T) => f(T)), m = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), h = m.indexOf(x), g = c ? m.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, E = g >= h, P = b1((T) => {
      const A = T.target, _ = [...u.branches].some((L) => L.contains(A));
      !E || _ || (o == null || o(T), l == null || l(T), T.defaultPrevented || s == null || s());
    }, p), k = k1((T) => {
      const A = T.target;
      [...u.branches].some((L) => L.contains(A)) || (i == null || i(T), l == null || l(T), T.defaultPrevented || s == null || s());
    }, p);
    return y1((T) => {
      g === u.layers.size - 1 && (r == null || r(T), !T.defaultPrevented && s && (T.preventDefault(), s()));
    }, p), S.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (yp = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), vp(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = yp);
        };
    }, [c, p, n, u]), S.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), vp());
    }, [c, u]), S.useEffect(() => {
      const T = () => d({});
      return document.addEventListener(ec, T), () => document.removeEventListener(ec, T);
    }, []), /* @__PURE__ */ C.jsx(
      Le.div,
      {
        ...a,
        ref: y,
        style: {
          pointerEvents: v ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: he(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: he(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: he(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Sd.displayName = v1;
var S1 = "DismissableLayerBranch", fy = S.forwardRef((e, t) => {
  const n = S.useContext(dy), r = S.useRef(null), o = Be(t, r);
  return S.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ C.jsx(Le.div, { ...e, ref: o });
});
fy.displayName = S1;
function b1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = S.useRef(!1), o = S.useRef(() => {
  });
  return S.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let a = function() {
          py(
            w1,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, { once: !0 })) : a();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function k1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = S.useRef(!1);
  return S.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && py(x1, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function vp() {
  const e = new CustomEvent(ec);
  document.dispatchEvent(e);
}
function py(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? cy(o, i) : o.dispatchEvent(i);
}
var E1 = Sd, C1 = fy, An = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {
}, P1 = "Portal", hy = S.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, i] = S.useState(!1);
  An(() => i(!0), []);
  const l = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return l ? iy.createPortal(/* @__PURE__ */ C.jsx(Le.div, { ...r, ref: t }), l) : null;
});
hy.displayName = P1;
function T1(e, t) {
  return S.useReducer((n, r) => t[n][r] ?? n, e);
}
var Qr = (e) => {
  const { present: t, children: n } = e, r = N1(t), o = typeof n == "function" ? n({ present: r.isPresent }) : S.Children.only(n), i = Be(r.ref, R1(o));
  return typeof n == "function" || r.isPresent ? S.cloneElement(o, { ref: i }) : null;
};
Qr.displayName = "Presence";
function N1(e) {
  const [t, n] = S.useState(), r = S.useRef(null), o = S.useRef(e), i = S.useRef("none"), l = e ? "mounted" : "unmounted", [s, a] = T1(l, {
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
  return S.useEffect(() => {
    const u = Nl(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), An(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const p = i.current, d = Nl(u);
      e ? a("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && p !== d ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), An(() => {
    if (t) {
      let u;
      const c = t.ownerDocument.defaultView ?? window, f = (d) => {
        const m = Nl(r.current).includes(d.animationName);
        if (d.target === t && m && (a("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, p = (d) => {
        d.target === t && (i.current = Nl(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        c.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      a("ANIMATION_END");
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: S.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Nl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function R1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var A1 = Q0[" useInsertionEffect ".trim().toString()] || An;
function _1({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, l] = I1({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, a = s ? e : o;
  {
    const c = S.useRef(e !== void 0);
    S.useEffect(() => {
      const f = c.current;
      f !== s && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), c.current = s;
    }, [s, r]);
  }
  const u = S.useCallback(
    (c) => {
      var f;
      if (s) {
        const p = O1(c) ? c(e) : c;
        p !== e && ((f = l.current) == null || f.call(l, p));
      } else
        i(c);
    },
    [s, e, i, l]
  );
  return [a, u];
}
function I1({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = S.useState(e), o = S.useRef(n), i = S.useRef(t);
  return A1(() => {
    i.current = t;
  }, [t]), S.useEffect(() => {
    var l;
    o.current !== n && ((l = i.current) == null || l.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function O1(e) {
  return typeof e == "function";
}
var L1 = Object.freeze({
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
}), M1 = "VisuallyHidden", Gs = S.forwardRef(
  (e, t) => /* @__PURE__ */ C.jsx(
    Le.span,
    {
      ...e,
      ref: t,
      style: { ...L1, ...e.style }
    }
  )
);
Gs.displayName = M1;
var D1 = Gs, bd = "ToastProvider", [kd, z1, j1] = m1("Toast"), [my, BN] = ol("Toast", [j1]), [F1, Zs] = my(bd), gy = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: i = 50,
    children: l
  } = e, [s, a] = S.useState(null), [u, c] = S.useState(0), f = S.useRef(!1), p = S.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${bd}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ C.jsx(kd.Provider, { scope: t, children: /* @__PURE__ */ C.jsx(
    F1,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: i,
      toastCount: u,
      viewport: s,
      onViewportChange: a,
      onToastAdd: S.useCallback(() => c((d) => d + 1), []),
      onToastRemove: S.useCallback(() => c((d) => d - 1), []),
      isFocusedToastEscapeKeyDownRef: f,
      isClosePausedRef: p,
      children: l
    }
  ) });
};
gy.displayName = bd;
var yy = "ToastViewport", B1 = ["F8"], tc = "toast.viewportPause", nc = "toast.viewportResume", vy = S.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = B1,
      label: o = "Notifications ({hotkey})",
      ...i
    } = e, l = Zs(yy, n), s = z1(n), a = S.useRef(null), u = S.useRef(null), c = S.useRef(null), f = S.useRef(null), p = Be(t, f, l.onViewportChange), d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = l.toastCount > 0;
    S.useEffect(() => {
      const x = (h) => {
        var v;
        r.length !== 0 && r.every((E) => h[E] || h.code === E) && ((v = f.current) == null || v.focus());
      };
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
    }, [r]), S.useEffect(() => {
      const x = a.current, h = f.current;
      if (y && x && h) {
        const g = () => {
          if (!l.isClosePausedRef.current) {
            const k = new CustomEvent(tc);
            h.dispatchEvent(k), l.isClosePausedRef.current = !0;
          }
        }, v = () => {
          if (l.isClosePausedRef.current) {
            const k = new CustomEvent(nc);
            h.dispatchEvent(k), l.isClosePausedRef.current = !1;
          }
        }, E = (k) => {
          !x.contains(k.relatedTarget) && v();
        }, P = () => {
          x.contains(document.activeElement) || v();
        };
        return x.addEventListener("focusin", g), x.addEventListener("focusout", E), x.addEventListener("pointermove", g), x.addEventListener("pointerleave", P), window.addEventListener("blur", g), window.addEventListener("focus", v), () => {
          x.removeEventListener("focusin", g), x.removeEventListener("focusout", E), x.removeEventListener("pointermove", g), x.removeEventListener("pointerleave", P), window.removeEventListener("blur", g), window.removeEventListener("focus", v);
        };
      }
    }, [y, l.isClosePausedRef]);
    const m = S.useCallback(
      ({ tabbingDirection: x }) => {
        const g = s().map((v) => {
          const E = v.ref.current, P = [E, ...J1(E)];
          return x === "forwards" ? P : P.reverse();
        });
        return (x === "forwards" ? g.reverse() : g).flat();
      },
      [s]
    );
    return S.useEffect(() => {
      const x = f.current;
      if (x) {
        const h = (g) => {
          var P, k, T;
          const v = g.altKey || g.ctrlKey || g.metaKey;
          if (g.key === "Tab" && !v) {
            const A = document.activeElement, _ = g.shiftKey;
            if (g.target === x && _) {
              (P = u.current) == null || P.focus();
              return;
            }
            const I = m({ tabbingDirection: _ ? "backwards" : "forwards" }), V = I.findIndex((z) => z === A);
            Va(I.slice(V + 1)) ? g.preventDefault() : _ ? (k = u.current) == null || k.focus() : (T = c.current) == null || T.focus();
          }
        };
        return x.addEventListener("keydown", h), () => x.removeEventListener("keydown", h);
      }
    }, [s, m]), /* @__PURE__ */ C.jsxs(
      C1,
      {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ C.jsx(
            rc,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = m({
                  tabbingDirection: "forwards"
                });
                Va(x);
              }
            }
          ),
          /* @__PURE__ */ C.jsx(kd.Slot, { scope: n, children: /* @__PURE__ */ C.jsx(Le.ol, { tabIndex: -1, ...i, ref: p }) }),
          y && /* @__PURE__ */ C.jsx(
            rc,
            {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = m({
                  tabbingDirection: "backwards"
                });
                Va(x);
              }
            }
          )
        ]
      }
    );
  }
);
vy.displayName = yy;
var wy = "ToastFocusProxy", rc = S.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, i = Zs(wy, n);
    return /* @__PURE__ */ C.jsx(
      Gs,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (l) => {
          var u;
          const s = l.relatedTarget;
          !((u = i.viewport) != null && u.contains(s)) && r();
        }
      }
    );
  }
);
rc.displayName = wy;
var il = "Toast", $1 = "toast.swipeStart", U1 = "toast.swipeMove", H1 = "toast.swipeCancel", V1 = "toast.swipeEnd", xy = S.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...l } = e, [s, a] = _1({
      prop: r,
      defaultProp: o ?? !0,
      onChange: i,
      caller: il
    });
    return /* @__PURE__ */ C.jsx(Qr, { present: n || s, children: /* @__PURE__ */ C.jsx(
      Y1,
      {
        open: s,
        ...l,
        ref: t,
        onClose: () => a(!1),
        onPause: Je(e.onPause),
        onResume: Je(e.onResume),
        onSwipeStart: he(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: he(e.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: he(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: he(e.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), a(!1);
        })
      }
    ) });
  }
);
xy.displayName = il;
var [W1, Q1] = my(il, {
  onClose() {
  }
}), Y1 = S.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: i,
      onClose: l,
      onEscapeKeyDown: s,
      onPause: a,
      onResume: u,
      onSwipeStart: c,
      onSwipeMove: f,
      onSwipeCancel: p,
      onSwipeEnd: d,
      ...y
    } = e, m = Zs(il, n), [x, h] = S.useState(null), g = Be(t, (z) => h(z)), v = S.useRef(null), E = S.useRef(null), P = o || m.duration, k = S.useRef(0), T = S.useRef(P), A = S.useRef(0), { onToastAdd: _, onToastRemove: L } = m, D = Je(() => {
      var U;
      (x == null ? void 0 : x.contains(document.activeElement)) && ((U = m.viewport) == null || U.focus()), l();
    }), I = S.useCallback(
      (z) => {
        !z || z === 1 / 0 || (window.clearTimeout(A.current), k.current = (/* @__PURE__ */ new Date()).getTime(), A.current = window.setTimeout(D, z));
      },
      [D]
    );
    S.useEffect(() => {
      const z = m.viewport;
      if (z) {
        const U = () => {
          I(T.current), u == null || u();
        }, W = () => {
          const Y = (/* @__PURE__ */ new Date()).getTime() - k.current;
          T.current = T.current - Y, window.clearTimeout(A.current), a == null || a();
        };
        return z.addEventListener(tc, W), z.addEventListener(nc, U), () => {
          z.removeEventListener(tc, W), z.removeEventListener(nc, U);
        };
      }
    }, [m.viewport, P, a, u, I]), S.useEffect(() => {
      i && !m.isClosePausedRef.current && I(P);
    }, [i, P, m.isClosePausedRef, I]), S.useEffect(() => (_(), () => L()), [_, L]);
    const V = S.useMemo(() => x ? Ty(x) : null, [x]);
    return m.viewport ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
      V && /* @__PURE__ */ C.jsx(
        K1,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: V
        }
      ),
      /* @__PURE__ */ C.jsx(W1, { scope: n, onClose: D, children: rl.createPortal(
        /* @__PURE__ */ C.jsx(kd.ItemSlot, { scope: n, children: /* @__PURE__ */ C.jsx(
          E1,
          {
            asChild: !0,
            onEscapeKeyDown: he(s, () => {
              m.isFocusedToastEscapeKeyDownRef.current || D(), m.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ C.jsx(
              Le.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": m.swipeDirection,
                ...y,
                ref: g,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: he(e.onKeyDown, (z) => {
                  z.key === "Escape" && (s == null || s(z.nativeEvent), z.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, D()));
                }),
                onPointerDown: he(e.onPointerDown, (z) => {
                  z.button === 0 && (v.current = { x: z.clientX, y: z.clientY });
                }),
                onPointerMove: he(e.onPointerMove, (z) => {
                  if (!v.current) return;
                  const U = z.clientX - v.current.x, W = z.clientY - v.current.y, Y = !!E.current, R = ["left", "right"].includes(m.swipeDirection), M = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max, w = R ? M(0, U) : 0, K = R ? 0 : M(0, W), Q = z.pointerType === "touch" ? 10 : 2, b = { x: w, y: K }, q = { originalEvent: z, delta: b };
                  Y ? (E.current = b, Rl(U1, f, q, {
                    discrete: !1
                  })) : wp(b, m.swipeDirection, Q) ? (E.current = b, Rl($1, c, q, {
                    discrete: !1
                  }), z.target.setPointerCapture(z.pointerId)) : (Math.abs(U) > Q || Math.abs(W) > Q) && (v.current = null);
                }),
                onPointerUp: he(e.onPointerUp, (z) => {
                  const U = E.current, W = z.target;
                  if (W.hasPointerCapture(z.pointerId) && W.releasePointerCapture(z.pointerId), E.current = null, v.current = null, U) {
                    const Y = z.currentTarget, R = { originalEvent: z, delta: U };
                    wp(U, m.swipeDirection, m.swipeThreshold) ? Rl(V1, d, R, {
                      discrete: !0
                    }) : Rl(
                      H1,
                      p,
                      R,
                      {
                        discrete: !0
                      }
                    ), Y.addEventListener("click", (M) => M.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        m.viewport
      ) })
    ] }) : null;
  }
), K1 = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Zs(il, t), [i, l] = S.useState(!1), [s, a] = S.useState(!1);
  return G1(() => l(!0)), S.useEffect(() => {
    const u = window.setTimeout(() => a(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ C.jsx(hy, { asChild: !0, children: /* @__PURE__ */ C.jsx(Gs, { ...r, children: i && /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, q1 = "ToastTitle", Sy = S.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ C.jsx(Le.div, { ...r, ref: t });
  }
);
Sy.displayName = q1;
var X1 = "ToastDescription", by = S.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ C.jsx(Le.div, { ...r, ref: t });
  }
);
by.displayName = X1;
var ky = "ToastAction", Ey = S.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ C.jsx(Py, { altText: n, asChild: !0, children: /* @__PURE__ */ C.jsx(Ed, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${ky}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Ey.displayName = ky;
var Cy = "ToastClose", Ed = S.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = Q1(Cy, n);
    return /* @__PURE__ */ C.jsx(Py, { asChild: !0, children: /* @__PURE__ */ C.jsx(
      Le.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: he(e.onClick, o.onClose)
      }
    ) });
  }
);
Ed.displayName = Cy;
var Py = S.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ C.jsx(
    Le.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Ty(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Z1(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", i = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (i) {
          const l = r.dataset.radixToastAnnounceAlt;
          l && t.push(l);
        } else
          t.push(...Ty(r));
    }
  }), t;
}
function Rl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? cy(o, i) : o.dispatchEvent(i);
}
var wp = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function G1(e = () => {
}) {
  const t = Je(e);
  An(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Z1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function J1(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Va(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var eS = gy, Ny = vy, Ry = xy, Ay = Sy, _y = by, Iy = Ey, Oy = Ed;
function Ly(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ly(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function My() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ly(e)) && (r && (r += " "), r += t);
  return r;
}
const xp = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Sp = My, Dy = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Sp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, l = Object.keys(o).map((u) => {
    const c = n == null ? void 0 : n[u], f = i == null ? void 0 : i[u];
    if (c === null) return null;
    const p = xp(c) || xp(f);
    return o[u][p];
  }), s = n && Object.entries(n).reduce((u, c) => {
    let [f, p] = c;
    return p === void 0 || (u[f] = p), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: f, className: p, ...d } = c;
    return Object.entries(d).every((y) => {
      let [m, x] = y;
      return Array.isArray(x) ? x.includes({
        ...i,
        ...s
      }[m]) : {
        ...i,
        ...s
      }[m] === x;
    }) ? [
      ...u,
      f,
      p
    ] : u;
  }, []);
  return Sp(e, l, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zy = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nS = {
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
const rS = S.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: l,
    ...s
  }, a) => S.createElement(
    "svg",
    {
      ref: a,
      ...nS,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: zy("lucide", o),
      ...s
    },
    [
      ...l.map(([u, c]) => S.createElement(u, c)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = (e, t) => {
  const n = S.forwardRef(
    ({ className: r, ...o }, i) => S.createElement(rS, {
      ref: i,
      iconNode: t,
      className: zy(`lucide-${tS(e)}`, r),
      ...o
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
const oS = Vo("Leaf", [
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
const bp = Vo("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = Vo("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = Vo("Send", [
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
const ic = Vo("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iS = Vo("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Cd = "-", lS = (e) => {
  const t = aS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (l) => {
      const s = l.split(Cd);
      return s[0] === "" && s.length !== 1 && s.shift(), jy(s, t) || sS(l);
    },
    getConflictingClassGroupIds: (l, s) => {
      const a = n[l] || [];
      return s && r[l] ? [...a, ...r[l]] : a;
    }
  };
}, jy = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? jy(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Cd);
  return (l = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : l.classGroupId;
}, Ep = /^\[(.+)\]$/, sS = (e) => {
  if (Ep.test(e)) {
    const t = Ep.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, aS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return cS(Object.entries(e.classGroups), n).forEach(([i, l]) => {
    lc(l, r, i, t);
  }), r;
}, lc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Cp(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (uS(o)) {
        lc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, l]) => {
      lc(l, Cp(t, i), n, r);
    });
  });
}, Cp = (e, t) => {
  let n = e;
  return t.split(Cd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, uS = (e) => e.isThemeGetter, cS = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([l, s]) => [t + l, s])) : i);
  return [n, o];
}) : e, dS = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, l) => {
    n.set(i, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let l = n.get(i);
      if (l !== void 0)
        return l;
      if ((l = r.get(i)) !== void 0)
        return o(i, l), l;
    },
    set(i, l) {
      n.has(i) ? n.set(i, l) : o(i, l);
    }
  };
}, Fy = "!", fS = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, l = (s) => {
    const a = [];
    let u = 0, c = 0, f;
    for (let x = 0; x < s.length; x++) {
      let h = s[x];
      if (u === 0) {
        if (h === o && (r || s.slice(x, x + i) === t)) {
          a.push(s.slice(c, x)), c = x + i;
          continue;
        }
        if (h === "/") {
          f = x;
          continue;
        }
      }
      h === "[" ? u++ : h === "]" && u--;
    }
    const p = a.length === 0 ? s : s.substring(c), d = p.startsWith(Fy), y = d ? p.substring(1) : p, m = f && f > c ? f - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: d,
      baseClassName: y,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: l
  }) : l;
}, pS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, hS = (e) => ({
  cache: dS(e.cacheSize),
  parseClassName: fS(e),
  ...lS(e)
}), mS = /\s+/, gS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], l = e.trim().split(mS);
  let s = "";
  for (let a = l.length - 1; a >= 0; a -= 1) {
    const u = l[a], {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: d
    } = n(u);
    let y = !!d, m = r(y ? p.substring(0, d) : p);
    if (!m) {
      if (!y) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (m = r(p), !m) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      y = !1;
    }
    const x = pS(c).join(":"), h = f ? x + Fy : x, g = h + m;
    if (i.includes(g))
      continue;
    i.push(g);
    const v = o(m, y);
    for (let E = 0; E < v.length; ++E) {
      const P = v[E];
      i.push(h + P);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function yS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = By(t)) && (r && (r += " "), r += n);
  return r;
}
const By = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = By(e[r])) && (n && (n += " "), n += t);
  return n;
};
function vS(e, ...t) {
  let n, r, o, i = l;
  function l(a) {
    const u = t.reduce((c, f) => f(c), e());
    return n = hS(u), r = n.cache.get, o = n.cache.set, i = s, s(a);
  }
  function s(a) {
    const u = r(a);
    if (u)
      return u;
    const c = gS(a, n);
    return o(a, c), c;
  }
  return function() {
    return i(yS.apply(null, arguments));
  };
}
const ye = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, $y = /^\[(?:([a-z-]+):)?(.+)\]$/i, wS = /^\d+\/\d+$/, xS = /* @__PURE__ */ new Set(["px", "full", "screen"]), SS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ES = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, CS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vn = (e) => vo(e) || xS.has(e) || wS.test(e), $n = (e) => Wo(e, "length", OS), vo = (e) => !!e && !Number.isNaN(Number(e)), Wa = (e) => Wo(e, "number", vo), li = (e) => !!e && Number.isInteger(Number(e)), PS = (e) => e.endsWith("%") && vo(e.slice(0, -1)), ee = (e) => $y.test(e), Un = (e) => SS.test(e), TS = /* @__PURE__ */ new Set(["length", "size", "percentage"]), NS = (e) => Wo(e, TS, Uy), RS = (e) => Wo(e, "position", Uy), AS = /* @__PURE__ */ new Set(["image", "url"]), _S = (e) => Wo(e, AS, MS), IS = (e) => Wo(e, "", LS), si = () => !0, Wo = (e, t, n) => {
  const r = $y.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, OS = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bS.test(e) && !kS.test(e)
), Uy = () => !1, LS = (e) => ES.test(e), MS = (e) => CS.test(e), DS = () => {
  const e = ye("colors"), t = ye("spacing"), n = ye("blur"), r = ye("brightness"), o = ye("borderColor"), i = ye("borderRadius"), l = ye("borderSpacing"), s = ye("borderWidth"), a = ye("contrast"), u = ye("grayscale"), c = ye("hueRotate"), f = ye("invert"), p = ye("gap"), d = ye("gradientColorStops"), y = ye("gradientColorStopPositions"), m = ye("inset"), x = ye("margin"), h = ye("opacity"), g = ye("padding"), v = ye("saturate"), E = ye("scale"), P = ye("sepia"), k = ye("skew"), T = ye("space"), A = ye("translate"), _ = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", ee, t], I = () => [ee, t], V = () => ["", vn, $n], z = () => ["auto", vo, ee], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", ee], w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], K = () => [vo, ee];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [si],
      spacing: [vn, $n],
      blur: ["none", "", Un, ee],
      brightness: K(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Un, ee],
      borderSpacing: I(),
      borderWidth: V(),
      contrast: K(),
      grayscale: M(),
      hueRotate: K(),
      invert: M(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [PS, $n],
      inset: D(),
      margin: D(),
      opacity: K(),
      padding: I(),
      saturate: K(),
      scale: K(),
      sepia: M(),
      skew: K(),
      space: I(),
      translate: I()
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
        columns: [Un]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
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
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", li, ee]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: D()
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
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", li, ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [si]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", li, ee]
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
        "grid-rows": [si]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [li, ee]
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
        justify: ["normal", ...R()]
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
        content: ["normal", ...R(), "baseline"]
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
        "place-content": [...R(), "baseline"]
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
        p: [g]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [g]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [g]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [g]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [g]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [g]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [g]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [g]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [g]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
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
        "space-y": [T]
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
          screen: [Un]
        }, Un]
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
        text: ["base", Un, $n]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Wa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [si]
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
        "line-clamp": ["none", vo, Wa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", vn, ee]
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
        decoration: ["auto", "from-font", vn, $n]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", vn, ee]
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
        indent: I()
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
        bg: [...U(), RS]
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
        bg: ["auto", "cover", "contain", NS]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, _S]
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
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
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
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
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
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
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
        "outline-offset": [vn, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [vn, $n]
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
        ring: V()
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
        "ring-offset": [vn, $n]
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
        shadow: ["", "inner", "none", Un, IS]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [si]
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
        "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
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
        "drop-shadow": ["", "none", Un, ee]
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
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
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
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
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
        duration: K()
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
        delay: K()
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [li, ee]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        stroke: [vn, $n, Wa]
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
}, zS = /* @__PURE__ */ vS(DS);
function Ne(...e) {
  return zS(My(e));
}
const jS = eS, Hy = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ C.jsx(
  Ny,
  {
    ref: n,
    className: Ne(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
Hy.displayName = Ny.displayName;
const FS = Dy(
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
), Vy = S.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ C.jsx(Ry, { ref: r, className: Ne(FS({ variant: t }), e), ...n }));
Vy.displayName = Ry.displayName;
const BS = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ C.jsx(
  Iy,
  {
    ref: n,
    className: Ne(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
BS.displayName = Iy.displayName;
const Wy = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ C.jsx(
  Oy,
  {
    ref: n,
    className: Ne(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ C.jsx(ic, { className: "h-4 w-4" })
  }
));
Wy.displayName = Oy.displayName;
const Qy = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ C.jsx(Ay, { ref: n, className: Ne("text-sm font-semibold", e), ...t }));
Qy.displayName = Ay.displayName;
const Yy = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ C.jsx(_y, { ref: n, className: Ne("text-sm opacity-90", e), ...t }));
Yy.displayName = _y.displayName;
function $S() {
  const { toasts: e } = s1();
  return /* @__PURE__ */ C.jsxs(jS, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...i }) {
      return /* @__PURE__ */ C.jsxs(Vy, { ...i, children: [
        /* @__PURE__ */ C.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ C.jsx(Qy, { children: n }),
          r && /* @__PURE__ */ C.jsx(Yy, { children: r })
        ] }),
        o,
        /* @__PURE__ */ C.jsx(Wy, {})
      ] }, t);
    }),
    /* @__PURE__ */ C.jsx(Hy, {})
  ] });
}
var Pp = ["light", "dark"], US = "(prefers-color-scheme: dark)", HS = S.createContext(void 0), VS = { setTheme: (e) => {
}, themes: [] }, WS = () => {
  var e;
  return (e = S.useContext(HS)) != null ? e : VS;
};
S.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: l, attrs: s, nonce: a }) => {
  let u = i === "system", c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map((y) => `'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? Pp.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (y, m = !1, x = !0) => {
    let h = l ? l[y] : y, g = m ? y + "|| ''" : `'${h}'`, v = "";
    return o && x && !m && Pp.includes(y) && (v += `d.style.colorScheme = '${y}';`), n === "class" ? m || h ? v += `c.add(${g})` : v += "null" : h && (v += `d[s](n,${g})`), v;
  }, d = e ? `!function(){${c}${p(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${US}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${l ? `var x=${JSON.stringify(l)};` : ""}${p(l ? "x[e]" : "e", !0)}}${u ? "" : "else{" + p(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${l ? `var x=${JSON.stringify(l)};` : ""}${p(l ? "x[e]" : "e", !0)}}else{${p(i, !1, !1)};}${f}}catch(t){}}();`;
  return S.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: d } });
});
var QS = (e) => {
  switch (e) {
    case "success":
      return qS;
    case "info":
      return GS;
    case "warning":
      return XS;
    case "error":
      return ZS;
    default:
      return null;
  }
}, YS = Array(12).fill(0), KS = ({ visible: e, className: t }) => $.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, $.createElement("div", { className: "sonner-spinner" }, YS.map((n, r) => $.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), qS = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, $.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), XS = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, $.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), GS = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, $.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), ZS = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, $.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), JS = $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, $.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), $.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), eb = () => {
  let [e, t] = $.useState(document.hidden);
  return $.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, sc = 1, tb = class {
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
      let { message: n, ...r } = e, o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : sc++, i = this.toasts.find((s) => s.id === o), l = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), i ? this.toasts = this.toasts.map((s) => s.id === o ? (this.publish({ ...s, ...e, id: o, title: n }), { ...s, ...e, id: o, dismissible: l, title: n }) : s) : this.addToast({ title: n, ...r, dismissible: l, id: o }), o;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let r = e instanceof Promise ? e : e(), o = n !== void 0, i, l = r.then(async (a) => {
        if (i = ["resolve", a], $.isValidElement(a)) o = !1, this.create({ id: n, type: "default", message: a });
        else if (rb(a) && !a.ok) {
          o = !1;
          let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error, c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
          this.create({ id: n, type: "error", message: u, description: c });
        } else if (t.success !== void 0) {
          o = !1;
          let u = typeof t.success == "function" ? await t.success(a) : t.success, c = typeof t.description == "function" ? await t.description(a) : t.description;
          this.create({ id: n, type: "success", message: u, description: c });
        }
      }).catch(async (a) => {
        if (i = ["reject", a], t.error !== void 0) {
          o = !1;
          let u = typeof t.error == "function" ? await t.error(a) : t.error, c = typeof t.description == "function" ? await t.description(a) : t.description;
          this.create({ id: n, type: "error", message: u, description: c });
        }
      }).finally(() => {
        var a;
        o && (this.dismiss(n), n = void 0), (a = t.finally) == null || a.call(t);
      }), s = () => new Promise((a, u) => l.then(() => i[0] === "reject" ? u(i[1]) : a(i[1])).catch(u));
      return typeof n != "string" && typeof n != "number" ? { unwrap: s } : Object.assign(n, { unwrap: s });
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || sc++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, it = new tb(), nb = (e, t) => {
  let n = (t == null ? void 0 : t.id) || sc++;
  return it.addToast({ title: e, ...t, id: n }), n;
}, rb = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", ob = nb, ib = () => it.toasts, lb = () => it.getActiveToasts();
Object.assign(ob, { success: it.success, info: it.info, warning: it.warning, error: it.error, custom: it.custom, message: it.message, promise: it.promise, dismiss: it.dismiss, loading: it.loading }, { getHistory: ib, getToasts: lb });
function sb(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
sb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Al(e) {
  return e.label !== void 0;
}
var ab = 3, ub = "32px", cb = "16px", Tp = 4e3, db = 356, fb = 14, pb = 20, hb = 200;
function $t(...e) {
  return e.filter(Boolean).join(" ");
}
function mb(e) {
  let [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
var gb = (e) => {
  var t, n, r, o, i, l, s, a, u, c, f;
  let { invert: p, toast: d, unstyled: y, interacting: m, setHeights: x, visibleToasts: h, heights: g, index: v, toasts: E, expanded: P, removeToast: k, defaultRichColors: T, closeButton: A, style: _, cancelButtonStyle: L, actionButtonStyle: D, className: I = "", descriptionClassName: V = "", duration: z, position: U, gap: W, loadingIcon: Y, expandByDefault: R, classNames: M, icons: w, closeButtonAriaLabel: K = "Close toast", pauseWhenPageIsHidden: Q } = e, [b, q] = $.useState(null), [de, ie] = $.useState(null), [oe, Ke] = $.useState(!1), [qe, rt] = $.useState(!1), [pt, Ln] = $.useState(!1), [Jt, Kr] = $.useState(!1), [qr, xr] = $.useState(!1), [Xr, Sr] = $.useState(0), [gn, Go] = $.useState(0), br = $.useRef(d.duration || z || Tp), ul = $.useRef(null), yn = $.useRef(null), fa = v === 0, pa = v + 1 <= h, N = d.type, B = d.dismissible !== !1, G = d.className || "", ne = d.descriptionClassName || "", se = $.useMemo(() => g.findIndex((Z) => Z.toastId === d.id) || 0, [g, d.id]), ht = $.useMemo(() => {
    var Z;
    return (Z = d.closeButton) != null ? Z : A;
  }, [d.closeButton, A]), en = $.useMemo(() => d.duration || z || Tp, [d.duration, z]), mt = $.useRef(0), Pt = $.useRef(0), Mn = $.useRef(0), Re = $.useRef(null), [Dn, Dt] = U.split("-"), nf = $.useMemo(() => g.reduce((Z, fe, xe) => xe >= se ? Z : Z + fe.height, 0), [g, se]), rf = eb(), N0 = d.invert || p, ha = N === "loading";
  Pt.current = $.useMemo(() => se * W + nf, [se, nf]), $.useEffect(() => {
    br.current = en;
  }, [en]), $.useEffect(() => {
    Ke(!0);
  }, []), $.useEffect(() => {
    let Z = yn.current;
    if (Z) {
      let fe = Z.getBoundingClientRect().height;
      return Go(fe), x((xe) => [{ toastId: d.id, height: fe, position: d.position }, ...xe]), () => x((xe) => xe.filter((zt) => zt.toastId !== d.id));
    }
  }, [x, d.id]), $.useLayoutEffect(() => {
    if (!oe) return;
    let Z = yn.current, fe = Z.style.height;
    Z.style.height = "auto";
    let xe = Z.getBoundingClientRect().height;
    Z.style.height = fe, Go(xe), x((zt) => zt.find((jt) => jt.toastId === d.id) ? zt.map((jt) => jt.toastId === d.id ? { ...jt, height: xe } : jt) : [{ toastId: d.id, height: xe, position: d.position }, ...zt]);
  }, [oe, d.title, d.description, x, d.id]);
  let zn = $.useCallback(() => {
    rt(!0), Sr(Pt.current), x((Z) => Z.filter((fe) => fe.toastId !== d.id)), setTimeout(() => {
      k(d);
    }, hb);
  }, [d, k, x, Pt]);
  $.useEffect(() => {
    if (d.promise && N === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let Z;
    return P || m || Q && rf ? (() => {
      if (Mn.current < mt.current) {
        let fe = (/* @__PURE__ */ new Date()).getTime() - mt.current;
        br.current = br.current - fe;
      }
      Mn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : br.current !== 1 / 0 && (mt.current = (/* @__PURE__ */ new Date()).getTime(), Z = setTimeout(() => {
      var fe;
      (fe = d.onAutoClose) == null || fe.call(d, d), zn();
    }, br.current)), () => clearTimeout(Z);
  }, [P, m, d, N, Q, rf, zn]), $.useEffect(() => {
    d.delete && zn();
  }, [zn, d.delete]);
  function R0() {
    var Z, fe, xe;
    return w != null && w.loading ? $.createElement("div", { className: $t(M == null ? void 0 : M.loader, (Z = d == null ? void 0 : d.classNames) == null ? void 0 : Z.loader, "sonner-loader"), "data-visible": N === "loading" }, w.loading) : Y ? $.createElement("div", { className: $t(M == null ? void 0 : M.loader, (fe = d == null ? void 0 : d.classNames) == null ? void 0 : fe.loader, "sonner-loader"), "data-visible": N === "loading" }, Y) : $.createElement(KS, { className: $t(M == null ? void 0 : M.loader, (xe = d == null ? void 0 : d.classNames) == null ? void 0 : xe.loader), visible: N === "loading" });
  }
  return $.createElement("li", { tabIndex: 0, ref: yn, className: $t(I, G, M == null ? void 0 : M.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, M == null ? void 0 : M.default, M == null ? void 0 : M[N], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[N]), "data-sonner-toast": "", "data-rich-colors": (r = d.richColors) != null ? r : T, "data-styled": !(d.jsx || d.unstyled || y), "data-mounted": oe, "data-promise": !!d.promise, "data-swiped": qr, "data-removed": qe, "data-visible": pa, "data-y-position": Dn, "data-x-position": Dt, "data-index": v, "data-front": fa, "data-swiping": pt, "data-dismissible": B, "data-type": N, "data-invert": N0, "data-swipe-out": Jt, "data-swipe-direction": de, "data-expanded": !!(P || R && oe), style: { "--index": v, "--toasts-before": v, "--z-index": E.length - v, "--offset": `${qe ? Xr : Pt.current}px`, "--initial-height": R ? "auto" : `${gn}px`, ..._, ...d.style }, onDragEnd: () => {
    Ln(!1), q(null), Re.current = null;
  }, onPointerDown: (Z) => {
    ha || !B || (ul.current = /* @__PURE__ */ new Date(), Sr(Pt.current), Z.target.setPointerCapture(Z.pointerId), Z.target.tagName !== "BUTTON" && (Ln(!0), Re.current = { x: Z.clientX, y: Z.clientY }));
  }, onPointerUp: () => {
    var Z, fe, xe, zt;
    if (Jt || !B) return;
    Re.current = null;
    let jt = Number(((Z = yn.current) == null ? void 0 : Z.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), jn = Number(((fe = yn.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), kr = (/* @__PURE__ */ new Date()).getTime() - ((xe = ul.current) == null ? void 0 : xe.getTime()), Ft = b === "x" ? jt : jn, Fn = Math.abs(Ft) / kr;
    if (Math.abs(Ft) >= pb || Fn > 0.11) {
      Sr(Pt.current), (zt = d.onDismiss) == null || zt.call(d, d), ie(b === "x" ? jt > 0 ? "right" : "left" : jn > 0 ? "down" : "up"), zn(), Kr(!0), xr(!1);
      return;
    }
    Ln(!1), q(null);
  }, onPointerMove: (Z) => {
    var fe, xe, zt, jt;
    if (!Re.current || !B || ((fe = window.getSelection()) == null ? void 0 : fe.toString().length) > 0) return;
    let jn = Z.clientY - Re.current.y, kr = Z.clientX - Re.current.x, Ft = (xe = e.swipeDirections) != null ? xe : mb(U);
    !b && (Math.abs(kr) > 1 || Math.abs(jn) > 1) && q(Math.abs(kr) > Math.abs(jn) ? "x" : "y");
    let Fn = { x: 0, y: 0 };
    b === "y" ? (Ft.includes("top") || Ft.includes("bottom")) && (Ft.includes("top") && jn < 0 || Ft.includes("bottom") && jn > 0) && (Fn.y = jn) : b === "x" && (Ft.includes("left") || Ft.includes("right")) && (Ft.includes("left") && kr < 0 || Ft.includes("right") && kr > 0) && (Fn.x = kr), (Math.abs(Fn.x) > 0 || Math.abs(Fn.y) > 0) && xr(!0), (zt = yn.current) == null || zt.style.setProperty("--swipe-amount-x", `${Fn.x}px`), (jt = yn.current) == null || jt.style.setProperty("--swipe-amount-y", `${Fn.y}px`);
  } }, ht && !d.jsx ? $.createElement("button", { "aria-label": K, "data-disabled": ha, "data-close-button": !0, onClick: ha || !B ? () => {
  } : () => {
    var Z;
    zn(), (Z = d.onDismiss) == null || Z.call(d, d);
  }, className: $t(M == null ? void 0 : M.closeButton, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.closeButton) }, (i = w == null ? void 0 : w.close) != null ? i : JS) : null, d.jsx || S.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : $.createElement($.Fragment, null, N || d.icon || d.promise ? $.createElement("div", { "data-icon": "", className: $t(M == null ? void 0 : M.icon, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.icon) }, d.promise || d.type === "loading" && !d.icon ? d.icon || R0() : null, d.type !== "loading" ? d.icon || (w == null ? void 0 : w[N]) || QS(N) : null) : null, $.createElement("div", { "data-content": "", className: $t(M == null ? void 0 : M.content, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.content) }, $.createElement("div", { "data-title": "", className: $t(M == null ? void 0 : M.title, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.title) }, typeof d.title == "function" ? d.title() : d.title), d.description ? $.createElement("div", { "data-description": "", className: $t(V, ne, M == null ? void 0 : M.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description) }, typeof d.description == "function" ? d.description() : d.description) : null), S.isValidElement(d.cancel) ? d.cancel : d.cancel && Al(d.cancel) ? $.createElement("button", { "data-button": !0, "data-cancel": !0, style: d.cancelButtonStyle || L, onClick: (Z) => {
    var fe, xe;
    Al(d.cancel) && B && ((xe = (fe = d.cancel).onClick) == null || xe.call(fe, Z), zn());
  }, className: $t(M == null ? void 0 : M.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton) }, d.cancel.label) : null, S.isValidElement(d.action) ? d.action : d.action && Al(d.action) ? $.createElement("button", { "data-button": !0, "data-action": !0, style: d.actionButtonStyle || D, onClick: (Z) => {
    var fe, xe;
    Al(d.action) && ((xe = (fe = d.action).onClick) == null || xe.call(fe, Z), !Z.defaultPrevented && zn());
  }, className: $t(M == null ? void 0 : M.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton) }, d.action.label) : null));
};
function Np() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function yb(e, t) {
  let n = {};
  return [e, t].forEach((r, o) => {
    let i = o === 1, l = i ? "--mobile-offset" : "--offset", s = i ? cb : ub;
    function a(u) {
      ["top", "right", "bottom", "left"].forEach((c) => {
        n[`${l}-${c}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach((u) => {
      r[u] === void 0 ? n[`${l}-${u}`] = s : n[`${l}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u];
    }) : a(s);
  }), n;
}
var vb = S.forwardRef(function(e, t) {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: i, closeButton: l, className: s, offset: a, mobileOffset: u, theme: c = "light", richColors: f, duration: p, style: d, visibleToasts: y = ab, toastOptions: m, dir: x = Np(), gap: h = fb, loadingIcon: g, icons: v, containerAriaLabel: E = "Notifications", pauseWhenPageIsHidden: P } = e, [k, T] = $.useState([]), A = $.useMemo(() => Array.from(new Set([r].concat(k.filter((Q) => Q.position).map((Q) => Q.position)))), [k, r]), [_, L] = $.useState([]), [D, I] = $.useState(!1), [V, z] = $.useState(!1), [U, W] = $.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Y = $.useRef(null), R = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), M = $.useRef(null), w = $.useRef(!1), K = $.useCallback((Q) => {
    T((b) => {
      var q;
      return (q = b.find((de) => de.id === Q.id)) != null && q.delete || it.dismiss(Q.id), b.filter(({ id: de }) => de !== Q.id);
    });
  }, []);
  return $.useEffect(() => it.subscribe((Q) => {
    if (Q.dismiss) {
      T((b) => b.map((q) => q.id === Q.id ? { ...q, delete: !0 } : q));
      return;
    }
    setTimeout(() => {
      iy.flushSync(() => {
        T((b) => {
          let q = b.findIndex((de) => de.id === Q.id);
          return q !== -1 ? [...b.slice(0, q), { ...b[q], ...Q }, ...b.slice(q + 1)] : [Q, ...b];
        });
      });
    });
  }), []), $.useEffect(() => {
    if (c !== "system") {
      W(c);
      return;
    }
    if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? W("dark") : W("light")), typeof window > "u") return;
    let Q = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      Q.addEventListener("change", ({ matches: b }) => {
        W(b ? "dark" : "light");
      });
    } catch {
      Q.addListener(({ matches: q }) => {
        try {
          W(q ? "dark" : "light");
        } catch (de) {
          console.error(de);
        }
      });
    }
  }, [c]), $.useEffect(() => {
    k.length <= 1 && I(!1);
  }, [k]), $.useEffect(() => {
    let Q = (b) => {
      var q, de;
      o.every((ie) => b[ie] || b.code === ie) && (I(!0), (q = Y.current) == null || q.focus()), b.code === "Escape" && (document.activeElement === Y.current || (de = Y.current) != null && de.contains(document.activeElement)) && I(!1);
    };
    return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
  }, [o]), $.useEffect(() => {
    if (Y.current) return () => {
      M.current && (M.current.focus({ preventScroll: !0 }), M.current = null, w.current = !1);
    };
  }, [Y.current]), $.createElement("section", { ref: t, "aria-label": `${E} ${R}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, A.map((Q, b) => {
    var q;
    let [de, ie] = Q.split("-");
    return k.length ? $.createElement("ol", { key: Q, dir: x === "auto" ? Np() : x, tabIndex: -1, ref: Y, className: s, "data-sonner-toaster": !0, "data-theme": U, "data-y-position": de, "data-lifted": D && k.length > 1 && !i, "data-x-position": ie, style: { "--front-toast-height": `${((q = _[0]) == null ? void 0 : q.height) || 0}px`, "--width": `${db}px`, "--gap": `${h}px`, ...d, ...yb(a, u) }, onBlur: (oe) => {
      w.current && !oe.currentTarget.contains(oe.relatedTarget) && (w.current = !1, M.current && (M.current.focus({ preventScroll: !0 }), M.current = null));
    }, onFocus: (oe) => {
      oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || w.current || (w.current = !0, M.current = oe.relatedTarget);
    }, onMouseEnter: () => I(!0), onMouseMove: () => I(!0), onMouseLeave: () => {
      V || I(!1);
    }, onDragEnd: () => I(!1), onPointerDown: (oe) => {
      oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || z(!0);
    }, onPointerUp: () => z(!1) }, k.filter((oe) => !oe.position && b === 0 || oe.position === Q).map((oe, Ke) => {
      var qe, rt;
      return $.createElement(gb, { key: oe.id, icons: v, index: Ke, toast: oe, defaultRichColors: f, duration: (qe = m == null ? void 0 : m.duration) != null ? qe : p, className: m == null ? void 0 : m.className, descriptionClassName: m == null ? void 0 : m.descriptionClassName, invert: n, visibleToasts: y, closeButton: (rt = m == null ? void 0 : m.closeButton) != null ? rt : l, interacting: V, position: Q, style: m == null ? void 0 : m.style, unstyled: m == null ? void 0 : m.unstyled, classNames: m == null ? void 0 : m.classNames, cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle, actionButtonStyle: m == null ? void 0 : m.actionButtonStyle, removeToast: K, toasts: k.filter((pt) => pt.position == oe.position), heights: _.filter((pt) => pt.position == oe.position), setHeights: L, expandByDefault: i, gap: h, loadingIcon: g, expanded: D, pauseWhenPageIsHidden: P, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const wb = ({ ...e }) => {
  const { theme: t = "system" } = WS();
  return /* @__PURE__ */ C.jsx(
    vb,
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
}, xb = ["top", "right", "bottom", "left"], fr = Math.min, vt = Math.max, Cs = Math.round, _l = Math.floor, pr = (e) => ({
  x: e,
  y: e
}), Sb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bb = {
  start: "end",
  end: "start"
};
function ac(e, t, n) {
  return vt(e, fr(t, n));
}
function _n(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function In(e) {
  return e.split("-")[0];
}
function Qo(e) {
  return e.split("-")[1];
}
function Pd(e) {
  return e === "x" ? "y" : "x";
}
function Td(e) {
  return e === "y" ? "height" : "width";
}
function hr(e) {
  return ["top", "bottom"].includes(In(e)) ? "y" : "x";
}
function Nd(e) {
  return Pd(hr(e));
}
function kb(e, t, n) {
  n === void 0 && (n = !1);
  const r = Qo(e), o = Nd(e), i = Td(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Ps(l)), [l, Ps(l)];
}
function Eb(e) {
  const t = Ps(e);
  return [uc(e), t, uc(t)];
}
function uc(e) {
  return e.replace(/start|end/g, (t) => bb[t]);
}
function Cb(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function Pb(e, t, n, r) {
  const o = Qo(e);
  let i = Cb(In(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(uc)))), i;
}
function Ps(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Sb[t]);
}
function Tb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ky(e) {
  return typeof e != "number" ? Tb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ts(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Rp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = hr(t), l = Nd(t), s = Td(l), a = In(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (Qo(t)) {
    case "start":
      d[l] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      d[l] += p * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const Nb = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: f
  } = Rp(u, r, a), p = r, d = {}, y = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: x,
      fn: h
    } = s[m], {
      x: g,
      y: v,
      data: E,
      reset: P
    } = await h({
      x: c,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: d,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = g ?? c, f = v ?? f, d = {
      ...d,
      [x]: {
        ...d[x],
        ...E
      }
    }, P && y <= 50 && (y++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (u = P.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: c,
      y: f
    } = Rp(u, p, a)), m = -1);
  }
  return {
    x: c,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: d
  };
};
async function Wi(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = _n(t, e), y = Ky(d), x = s[p ? f === "floating" ? "reference" : "floating" : f], h = Ts(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: a
  })), g = f === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), E = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Ts(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: g,
    offsetParent: v,
    strategy: a
  }) : g);
  return {
    top: (h.top - P.top + y.top) / E.y,
    bottom: (P.bottom - h.bottom + y.bottom) / E.y,
    left: (h.left - P.left + y.left) / E.x,
    right: (P.right - h.right + y.right) / E.x
  };
}
const Rb = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: l,
      elements: s,
      middlewareData: a
    } = t, {
      element: u,
      padding: c = 0
    } = _n(e, t) || {};
    if (u == null)
      return {};
    const f = Ky(c), p = {
      x: n,
      y: r
    }, d = Nd(o), y = Td(d), m = await l.getDimensions(u), x = d === "y", h = x ? "top" : "left", g = x ? "bottom" : "right", v = x ? "clientHeight" : "clientWidth", E = i.reference[y] + i.reference[d] - p[d] - i.floating[y], P = p[d] - i.reference[d], k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let T = k ? k[v] : 0;
    (!T || !await (l.isElement == null ? void 0 : l.isElement(k))) && (T = s.floating[v] || i.floating[y]);
    const A = E / 2 - P / 2, _ = T / 2 - m[y] / 2 - 1, L = fr(f[h], _), D = fr(f[g], _), I = L, V = T - m[y] - D, z = T / 2 - m[y] / 2 + A, U = ac(I, z, V), W = !a.arrow && Qo(o) != null && z !== U && i.reference[y] / 2 - (z < I ? L : D) - m[y] / 2 < 0, Y = W ? z < I ? z - I : z - V : 0;
    return {
      [d]: p[d] + Y,
      data: {
        [d]: U,
        centerOffset: z - U - Y,
        ...W && {
          alignmentOffset: Y
        }
      },
      reset: W
    };
  }
}), Ab = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: l,
        initialPlacement: s,
        platform: a,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: m = !0,
        ...x
      } = _n(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const h = In(o), g = hr(s), v = In(s) === s, E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), P = p || (v || !m ? [Ps(s)] : Eb(s)), k = y !== "none";
      !p && k && P.push(...Pb(s, m, y, E));
      const T = [s, ...P], A = await Wi(t, x), _ = [];
      let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && _.push(A[h]), f) {
        const z = kb(o, l, E);
        _.push(A[z[0]], A[z[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: _
      }], !_.every((z) => z <= 0)) {
        var D, I;
        const z = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, U = T[z];
        if (U)
          return {
            data: {
              index: z,
              overflows: L
            },
            reset: {
              placement: U
            }
          };
        let W = (I = L.filter((Y) => Y.overflows[0] <= 0).sort((Y, R) => Y.overflows[1] - R.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!W)
          switch (d) {
            case "bestFit": {
              var V;
              const Y = (V = L.filter((R) => {
                if (k) {
                  const M = hr(R.placement);
                  return M === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((M) => M > 0).reduce((M, w) => M + w, 0)]).sort((R, M) => R[1] - M[1])[0]) == null ? void 0 : V[0];
              Y && (W = Y);
              break;
            }
            case "initialPlacement":
              W = s;
              break;
          }
        if (o !== W)
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
function Ap(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _p(e) {
  return xb.some((t) => e[t] >= 0);
}
const _b = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = _n(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Wi(t, {
            ...o,
            elementContext: "reference"
          }), l = Ap(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: _p(l)
            }
          };
        }
        case "escaped": {
          const i = await Wi(t, {
            ...o,
            altBoundary: !0
          }), l = Ap(i, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: _p(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ib(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = In(n), s = Qo(n), a = hr(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = i && a ? -1 : 1, f = _n(t, e);
  let {
    mainAxis: p,
    crossAxis: d,
    alignmentAxis: y
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof y == "number" && (d = s === "end" ? y * -1 : y), a ? {
    x: d * c,
    y: p * u
  } : {
    x: p * u,
    y: d * c
  };
}
const Ob = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: l,
        middlewareData: s
      } = t, a = await Ib(t, e);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: l
        }
      };
    }
  };
}, Lb = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (x) => {
            let {
              x: h,
              y: g
            } = x;
            return {
              x: h,
              y: g
            };
          }
        },
        ...a
      } = _n(e, t), u = {
        x: n,
        y: r
      }, c = await Wi(t, a), f = hr(In(o)), p = Pd(f);
      let d = u[p], y = u[f];
      if (i) {
        const x = p === "y" ? "top" : "left", h = p === "y" ? "bottom" : "right", g = d + c[x], v = d - c[h];
        d = ac(g, d, v);
      }
      if (l) {
        const x = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", g = y + c[x], v = y - c[h];
        y = ac(g, y, v);
      }
      const m = s.fn({
        ...t,
        [p]: d,
        [f]: y
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [p]: i,
            [f]: l
          }
        }
      };
    }
  };
}, Mb = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: l
      } = t, {
        offset: s = 0,
        mainAxis: a = !0,
        crossAxis: u = !0
      } = _n(e, t), c = {
        x: n,
        y: r
      }, f = hr(o), p = Pd(f);
      let d = c[p], y = c[f];
      const m = _n(s, t), x = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (a) {
        const v = p === "y" ? "height" : "width", E = i.reference[p] - i.floating[v] + x.mainAxis, P = i.reference[p] + i.reference[v] - x.mainAxis;
        d < E ? d = E : d > P && (d = P);
      }
      if (u) {
        var h, g;
        const v = p === "y" ? "width" : "height", E = ["top", "left"].includes(In(o)), P = i.reference[f] - i.floating[v] + (E && ((h = l.offset) == null ? void 0 : h[f]) || 0) + (E ? 0 : x.crossAxis), k = i.reference[f] + i.reference[v] + (E ? 0 : ((g = l.offset) == null ? void 0 : g[f]) || 0) - (E ? x.crossAxis : 0);
        y < P ? y = P : y > k && (y = k);
      }
      return {
        [p]: d,
        [f]: y
      };
    }
  };
}, Db = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: l,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...u
      } = _n(e, t), c = await Wi(t, u), f = In(o), p = Qo(o), d = hr(o) === "y", {
        width: y,
        height: m
      } = i.floating;
      let x, h;
      f === "top" || f === "bottom" ? (x = f, h = p === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h = f, x = p === "end" ? "top" : "bottom");
      const g = m - c.top - c.bottom, v = y - c.left - c.right, E = fr(m - c[x], g), P = fr(y - c[h], v), k = !t.middlewareData.shift;
      let T = E, A = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = v), (r = t.middlewareData.shift) != null && r.enabled.y && (T = g), k && !p) {
        const L = vt(c.left, 0), D = vt(c.right, 0), I = vt(c.top, 0), V = vt(c.bottom, 0);
        d ? A = y - 2 * (L !== 0 || D !== 0 ? L + D : vt(c.left, c.right)) : T = m - 2 * (I !== 0 || V !== 0 ? I + V : vt(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: A,
        availableHeight: T
      });
      const _ = await l.getDimensions(s.floating);
      return y !== _.width || m !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Js() {
  return typeof window < "u";
}
function Yo(e) {
  return qy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function hn(e) {
  var t;
  return (t = (qy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function qy(e) {
  return Js() ? e instanceof Node || e instanceof bt(e).Node : !1;
}
function Gt(e) {
  return Js() ? e instanceof Element || e instanceof bt(e).Element : !1;
}
function fn(e) {
  return Js() ? e instanceof HTMLElement || e instanceof bt(e).HTMLElement : !1;
}
function Ip(e) {
  return !Js() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof bt(e).ShadowRoot;
}
function ll(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function zb(e) {
  return ["table", "td", "th"].includes(Yo(e));
}
function ea(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Rd(e) {
  const t = Ad(), n = Gt(e) ? Zt(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function jb(e) {
  let t = mr(e);
  for (; fn(t) && !jo(t); ) {
    if (Rd(t))
      return t;
    if (ea(t))
      return null;
    t = mr(t);
  }
  return null;
}
function Ad() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function jo(e) {
  return ["html", "body", "#document"].includes(Yo(e));
}
function Zt(e) {
  return bt(e).getComputedStyle(e);
}
function ta(e) {
  return Gt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mr(e) {
  if (Yo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ip(e) && e.host || // Fallback.
    hn(e)
  );
  return Ip(t) ? t.host : t;
}
function Xy(e) {
  const t = mr(e);
  return jo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && ll(t) ? t : Xy(t);
}
function Qi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Xy(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = bt(o);
  if (i) {
    const s = cc(l);
    return t.concat(l, l.visualViewport || [], ll(o) ? o : [], s && n ? Qi(s) : []);
  }
  return t.concat(o, Qi(o, [], n));
}
function cc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gy(e) {
  const t = Zt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = fn(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = Cs(n) !== i || Cs(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function _d(e) {
  return Gt(e) ? e : e.contextElement;
}
function wo(e) {
  const t = _d(e);
  if (!fn(t))
    return pr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Gy(t);
  let l = (i ? Cs(n.width) : n.width) / r, s = (i ? Cs(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Fb = /* @__PURE__ */ pr(0);
function Zy(e) {
  const t = bt(e);
  return !Ad() || !t.visualViewport ? Fb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Bb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== bt(e) ? !1 : t;
}
function Hr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = _d(e);
  let l = pr(1);
  t && (r ? Gt(r) && (l = wo(r)) : l = wo(e));
  const s = Bb(i, n, r) ? Zy(i) : pr(0);
  let a = (o.left + s.x) / l.x, u = (o.top + s.y) / l.y, c = o.width / l.x, f = o.height / l.y;
  if (i) {
    const p = bt(i), d = r && Gt(r) ? bt(r) : r;
    let y = p, m = cc(y);
    for (; m && r && d !== y; ) {
      const x = wo(m), h = m.getBoundingClientRect(), g = Zt(m), v = h.left + (m.clientLeft + parseFloat(g.paddingLeft)) * x.x, E = h.top + (m.clientTop + parseFloat(g.paddingTop)) * x.y;
      a *= x.x, u *= x.y, c *= x.x, f *= x.y, a += v, u += E, y = bt(m), m = cc(y);
    }
  }
  return Ts({
    width: c,
    height: f,
    x: a,
    y: u
  });
}
function $b(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = hn(r), s = t ? ea(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = pr(1);
  const c = pr(0), f = fn(r);
  if ((f || !f && !i) && ((Yo(r) !== "body" || ll(l)) && (a = ta(r)), fn(r))) {
    const p = Hr(r);
    u = wo(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y
  };
}
function Ub(e) {
  return Array.from(e.getClientRects());
}
function dc(e, t) {
  const n = ta(e).scrollLeft;
  return t ? t.left + n : Hr(hn(e)).left + n;
}
function Hb(e) {
  const t = hn(e), n = ta(e), r = e.ownerDocument.body, o = vt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = vt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + dc(e);
  const s = -n.scrollTop;
  return Zt(r).direction === "rtl" && (l += vt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function Vb(e, t) {
  const n = bt(e), r = hn(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Ad();
    (!u || u && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Wb(e, t) {
  const n = Hr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = fn(e) ? wo(e) : pr(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: u
  };
}
function Op(e, t, n) {
  let r;
  if (t === "viewport")
    r = Vb(e, n);
  else if (t === "document")
    r = Hb(hn(e));
  else if (Gt(t))
    r = Wb(t, n);
  else {
    const o = Zy(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ts(r);
}
function Jy(e, t) {
  const n = mr(e);
  return n === t || !Gt(n) || jo(n) ? !1 : Zt(n).position === "fixed" || Jy(n, t);
}
function Qb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Qi(e, [], !1).filter((s) => Gt(s) && Yo(s) !== "body"), o = null;
  const i = Zt(e).position === "fixed";
  let l = i ? mr(e) : e;
  for (; Gt(l) && !jo(l); ) {
    const s = Zt(l), a = Rd(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ll(l) && !a && Jy(e, l)) ? r = r.filter((c) => c !== l) : o = s, l = mr(l);
  }
  return t.set(e, r), r;
}
function Yb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? ea(t) ? [] : Qb(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((u, c) => {
    const f = Op(t, c, o);
    return u.top = vt(f.top, u.top), u.right = fr(f.right, u.right), u.bottom = fr(f.bottom, u.bottom), u.left = vt(f.left, u.left), u;
  }, Op(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Kb(e) {
  const {
    width: t,
    height: n
  } = Gy(e);
  return {
    width: t,
    height: n
  };
}
function qb(e, t, n) {
  const r = fn(t), o = hn(t), i = n === "fixed", l = Hr(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = pr(0);
  if (r || !r && !i)
    if ((Yo(t) !== "body" || ll(o)) && (s = ta(t)), r) {
      const d = Hr(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && (a.x = dc(o));
  let u = 0, c = 0;
  if (o && !r && !i) {
    const d = o.getBoundingClientRect();
    c = d.top + s.scrollTop, u = d.left + s.scrollLeft - // RTL <body> scrollbar.
    dc(o, d);
  }
  const f = l.left + s.scrollLeft - a.x - u, p = l.top + s.scrollTop - a.y - c;
  return {
    x: f,
    y: p,
    width: l.width,
    height: l.height
  };
}
function Qa(e) {
  return Zt(e).position === "static";
}
function Lp(e, t) {
  if (!fn(e) || Zt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return hn(e) === n && (n = n.ownerDocument.body), n;
}
function ev(e, t) {
  const n = bt(e);
  if (ea(e))
    return n;
  if (!fn(e)) {
    let o = mr(e);
    for (; o && !jo(o); ) {
      if (Gt(o) && !Qa(o))
        return o;
      o = mr(o);
    }
    return n;
  }
  let r = Lp(e, t);
  for (; r && zb(r) && Qa(r); )
    r = Lp(r, t);
  return r && jo(r) && Qa(r) && !Rd(r) ? n : r || jb(e) || n;
}
const Xb = async function(e) {
  const t = this.getOffsetParent || ev, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: qb(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Gb(e) {
  return Zt(e).direction === "rtl";
}
const Zb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $b,
  getDocumentElement: hn,
  getClippingRect: Yb,
  getOffsetParent: ev,
  getElementRects: Xb,
  getClientRects: Ub,
  getDimensions: Kb,
  getScale: wo,
  isElement: Gt,
  isRTL: Gb
};
function Jb(e, t) {
  let n = null, r;
  const o = hn(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const {
      left: u,
      top: c,
      width: f,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !f || !p)
      return;
    const d = _l(c), y = _l(o.clientWidth - (u + f)), m = _l(o.clientHeight - (c + p)), x = _l(u), g = {
      rootMargin: -d + "px " + -y + "px " + -m + "px " + -x + "px",
      threshold: vt(0, fr(1, a)) || 1
    };
    let v = !0;
    function E(P) {
      const k = P[0].intersectionRatio;
      if (k !== a) {
        if (!v)
          return l();
        k ? l(!1, k) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...g,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, g);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function ek(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = _d(e), c = o || i ? [...u ? Qi(u) : [], ...Qi(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  const f = u && s ? Jb(u, n) : null;
  let p = -1, d = null;
  l && (d = new ResizeObserver((h) => {
    let [g] = h;
    g && g.target === u && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var v;
      (v = d) == null || v.observe(t);
    })), n();
  }), u && !a && d.observe(u), d.observe(t));
  let y, m = a ? Hr(e) : null;
  a && x();
  function x() {
    const h = Hr(e);
    m && (h.x !== m.x || h.y !== m.y || h.width !== m.width || h.height !== m.height) && n(), m = h, y = requestAnimationFrame(x);
  }
  return n(), () => {
    var h;
    c.forEach((g) => {
      o && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n);
    }), f == null || f(), (h = d) == null || h.disconnect(), d = null, a && cancelAnimationFrame(y);
  };
}
const tk = Ob, nk = Lb, rk = Ab, ok = Db, ik = _b, Mp = Rb, lk = Mb, sk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Zb,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Nb(e, t, {
    ...o,
    platform: i
  });
};
var Xl = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function Ns(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ns(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ns(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dp(e, t) {
  const n = tv(e);
  return Math.round(t * n) / n;
}
function Ya(e) {
  const t = S.useRef(e);
  return Xl(() => {
    t.current = e;
  }), t;
}
function ak(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: l
    } = {},
    transform: s = !0,
    whileElementsMounted: a,
    open: u
  } = e, [c, f] = S.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = S.useState(r);
  Ns(p, r) || d(r);
  const [y, m] = S.useState(null), [x, h] = S.useState(null), g = S.useCallback((R) => {
    R !== k.current && (k.current = R, m(R));
  }, []), v = S.useCallback((R) => {
    R !== T.current && (T.current = R, h(R));
  }, []), E = i || y, P = l || x, k = S.useRef(null), T = S.useRef(null), A = S.useRef(c), _ = a != null, L = Ya(a), D = Ya(o), I = Ya(u), V = S.useCallback(() => {
    if (!k.current || !T.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: p
    };
    D.current && (R.platform = D.current), sk(k.current, T.current, R).then((M) => {
      const w = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      z.current && !Ns(A.current, w) && (A.current = w, rl.flushSync(() => {
        f(w);
      }));
    });
  }, [p, t, n, D, I]);
  Xl(() => {
    u === !1 && A.current.isPositioned && (A.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const z = S.useRef(!1);
  Xl(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Xl(() => {
    if (E && (k.current = E), P && (T.current = P), E && P) {
      if (L.current)
        return L.current(E, P, V);
      V();
    }
  }, [E, P, V, L, _]);
  const U = S.useMemo(() => ({
    reference: k,
    floating: T,
    setReference: g,
    setFloating: v
  }), [g, v]), W = S.useMemo(() => ({
    reference: E,
    floating: P
  }), [E, P]), Y = S.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return R;
    const M = Dp(W.floating, c.x), w = Dp(W.floating, c.y);
    return s ? {
      ...R,
      transform: "translate(" + M + "px, " + w + "px)",
      ...tv(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: w
    };
  }, [n, s, W.floating, c.x, c.y]);
  return S.useMemo(() => ({
    ...c,
    update: V,
    refs: U,
    elements: W,
    floatingStyles: Y
  }), [c, V, U, W, Y]);
}
const uk = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Mp({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Mp({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, ck = (e, t) => ({
  ...tk(e),
  options: [e, t]
}), dk = (e, t) => ({
  ...nk(e),
  options: [e, t]
}), fk = (e, t) => ({
  ...lk(e),
  options: [e, t]
}), pk = (e, t) => ({
  ...rk(e),
  options: [e, t]
}), hk = (e, t) => ({
  ...ok(e),
  options: [e, t]
}), mk = (e, t) => ({
  ...ik(e),
  options: [e, t]
}), gk = (e, t) => ({
  ...uk(e),
  options: [e, t]
});
var yk = "Arrow", nv = S.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ C.jsx(
    Le.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ C.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
nv.displayName = yk;
var vk = nv;
function wk(e) {
  const [t, n] = S.useState(void 0);
  return An(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let l, s;
        if ("borderBoxSize" in i) {
          const a = i.borderBoxSize, u = Array.isArray(a) ? a[0] : a;
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
var rv = "Popper", [ov, iv] = ol(rv), [$N, lv] = ov(rv), sv = "PopperAnchor", av = S.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = lv(sv, n), l = S.useRef(null), s = Be(t, l);
    return S.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
    }), r ? null : /* @__PURE__ */ C.jsx(Le.div, { ...o, ref: s });
  }
);
av.displayName = sv;
var Id = "PopperContent", [xk, Sk] = ov(Id), uv = S.forwardRef(
  (e, t) => {
    var oe, Ke, qe, rt, pt, Ln;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: l = 0,
      arrowPadding: s = 0,
      avoidCollisions: a = !0,
      collisionBoundary: u = [],
      collisionPadding: c = 0,
      sticky: f = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: d = "optimized",
      onPlaced: y,
      ...m
    } = e, x = lv(Id, n), [h, g] = S.useState(null), v = Be(t, (Jt) => g(Jt)), [E, P] = S.useState(null), k = wk(E), T = (k == null ? void 0 : k.width) ?? 0, A = (k == null ? void 0 : k.height) ?? 0, _ = r + (i !== "center" ? "-" + i : ""), L = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, D = Array.isArray(u) ? u : [u], I = D.length > 0, V = {
      padding: L,
      boundary: D.filter(kk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: z, floatingStyles: U, placement: W, isPositioned: Y, middlewareData: R } = ak({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...Jt) => ek(...Jt, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        ck({ mainAxis: o + A, alignmentAxis: l }),
        a && dk({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? fk() : void 0,
          ...V
        }),
        a && pk({ ...V }),
        hk({
          ...V,
          apply: ({ elements: Jt, rects: Kr, availableWidth: qr, availableHeight: xr }) => {
            const { width: Xr, height: Sr } = Kr.reference, gn = Jt.floating.style;
            gn.setProperty("--radix-popper-available-width", `${qr}px`), gn.setProperty("--radix-popper-available-height", `${xr}px`), gn.setProperty("--radix-popper-anchor-width", `${Xr}px`), gn.setProperty("--radix-popper-anchor-height", `${Sr}px`);
          }
        }),
        E && gk({ element: E, padding: s }),
        Ek({ arrowWidth: T, arrowHeight: A }),
        p && mk({ strategy: "referenceHidden", ...V })
      ]
    }), [M, w] = fv(W), K = Je(y);
    An(() => {
      Y && (K == null || K());
    }, [Y, K]);
    const Q = (oe = R.arrow) == null ? void 0 : oe.x, b = (Ke = R.arrow) == null ? void 0 : Ke.y, q = ((qe = R.arrow) == null ? void 0 : qe.centerOffset) !== 0, [de, ie] = S.useState();
    return An(() => {
      h && ie(window.getComputedStyle(h).zIndex);
    }, [h]), /* @__PURE__ */ C.jsx(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: Y ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: de,
          "--radix-popper-transform-origin": [
            (rt = R.transformOrigin) == null ? void 0 : rt.x,
            (pt = R.transformOrigin) == null ? void 0 : pt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Ln = R.hide) == null ? void 0 : Ln.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ C.jsx(
          xk,
          {
            scope: n,
            placedSide: M,
            onArrowChange: P,
            arrowX: Q,
            arrowY: b,
            shouldHideArrow: q,
            children: /* @__PURE__ */ C.jsx(
              Le.div,
              {
                "data-side": M,
                "data-align": w,
                ...m,
                ref: v,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Y ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
uv.displayName = Id;
var cv = "PopperArrow", bk = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, dv = S.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Sk(cv, r), l = bk[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ C.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [l]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ C.jsx(
          vk,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
dv.displayName = cv;
function kk(e) {
  return e !== null;
}
var Ek = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, h, g;
    const { placement: n, rects: r, middlewareData: o } = t, l = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, s = l ? 0 : e.arrowWidth, a = l ? 0 : e.arrowHeight, [u, c] = fv(n), f = { start: "0%", center: "50%", end: "100%" }[c], p = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + s / 2, d = (((g = o.arrow) == null ? void 0 : g.y) ?? 0) + a / 2;
    let y = "", m = "";
    return u === "bottom" ? (y = l ? f : `${p}px`, m = `${-a}px`) : u === "top" ? (y = l ? f : `${p}px`, m = `${r.floating.height + a}px`) : u === "right" ? (y = `${-a}px`, m = l ? f : `${d}px`) : u === "left" && (y = `${r.floating.width + a}px`, m = l ? f : `${d}px`), { data: { x: y, y: m } };
  }
});
function fv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ck = av, Pk = uv, Tk = dv, [na, UN] = ol("Tooltip", [
  iv
]), Od = iv(), pv = "TooltipProvider", Nk = 700, zp = "tooltip.open", [Rk, hv] = na(pv), mv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Nk,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, l = S.useRef(!0), s = S.useRef(!1), a = S.useRef(0);
  return S.useEffect(() => {
    const u = a.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ C.jsx(
    Rk,
    {
      scope: t,
      isOpenDelayedRef: l,
      delayDuration: n,
      onOpen: S.useCallback(() => {
        window.clearTimeout(a.current), l.current = !1;
      }, []),
      onClose: S.useCallback(() => {
        window.clearTimeout(a.current), a.current = window.setTimeout(
          () => l.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: S.useCallback((u) => {
        s.current = u;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
mv.displayName = pv;
var gv = "Tooltip", [HN, ra] = na(gv), fc = "TooltipTrigger", Ak = S.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ra(fc, n), i = hv(fc, n), l = Od(n), s = S.useRef(null), a = Be(t, s, o.onTriggerChange), u = S.useRef(!1), c = S.useRef(!1), f = S.useCallback(() => u.current = !1, []);
    return S.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ C.jsx(Ck, { asChild: !0, ...l, children: /* @__PURE__ */ C.jsx(
      Le.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: a,
        onPointerMove: he(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), c.current = !0);
        }),
        onPointerLeave: he(e.onPointerLeave, () => {
          o.onTriggerLeave(), c.current = !1;
        }),
        onPointerDown: he(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: he(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: he(e.onBlur, o.onClose),
        onClick: he(e.onClick, o.onClose)
      }
    ) });
  }
);
Ak.displayName = fc;
var _k = "TooltipPortal", [VN, Ik] = na(_k, {
  forceMount: void 0
}), Fo = "TooltipContent", yv = S.forwardRef(
  (e, t) => {
    const n = Ik(Fo, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, l = ra(Fo, e.__scopeTooltip);
    return /* @__PURE__ */ C.jsx(Qr, { present: r || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ C.jsx(vv, { side: o, ...i, ref: t }) : /* @__PURE__ */ C.jsx(Ok, { side: o, ...i, ref: t }) });
  }
), Ok = S.forwardRef((e, t) => {
  const n = ra(Fo, e.__scopeTooltip), r = hv(Fo, e.__scopeTooltip), o = S.useRef(null), i = Be(t, o), [l, s] = S.useState(null), { trigger: a, onClose: u } = n, c = o.current, { onPointerInTransitChange: f } = r, p = S.useCallback(() => {
    s(null), f(!1);
  }, [f]), d = S.useCallback(
    (y, m) => {
      const x = y.currentTarget, h = { x: y.clientX, y: y.clientY }, g = jk(h, x.getBoundingClientRect()), v = Fk(h, g), E = Bk(m.getBoundingClientRect()), P = Uk([...v, ...E]);
      s(P), f(!0);
    },
    [f]
  );
  return S.useEffect(() => () => p(), [p]), S.useEffect(() => {
    if (a && c) {
      const y = (x) => d(x, c), m = (x) => d(x, a);
      return a.addEventListener("pointerleave", y), c.addEventListener("pointerleave", m), () => {
        a.removeEventListener("pointerleave", y), c.removeEventListener("pointerleave", m);
      };
    }
  }, [a, c, d, p]), S.useEffect(() => {
    if (l) {
      const y = (m) => {
        const x = m.target, h = { x: m.clientX, y: m.clientY }, g = (a == null ? void 0 : a.contains(x)) || (c == null ? void 0 : c.contains(x)), v = !$k(h, l);
        g ? p() : v && (p(), u());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [a, c, l, u, p]), /* @__PURE__ */ C.jsx(vv, { ...e, ref: i });
}), [Lk, Mk] = na(gv, { isInside: !1 }), Dk = /* @__PURE__ */ d1("TooltipContent"), vv = S.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      ...s
    } = e, a = ra(Fo, n), u = Od(n), { onClose: c } = a;
    return S.useEffect(() => (document.addEventListener(zp, c), () => document.removeEventListener(zp, c)), [c]), S.useEffect(() => {
      if (a.trigger) {
        const f = (p) => {
          const d = p.target;
          d != null && d.contains(a.trigger) && c();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [a.trigger, c]), /* @__PURE__ */ C.jsx(
      Sd,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: /* @__PURE__ */ C.jsxs(
          Pk,
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
              /* @__PURE__ */ C.jsx(Dk, { children: r }),
              /* @__PURE__ */ C.jsx(Lk, { scope: n, isInside: !0, children: /* @__PURE__ */ C.jsx(D1, { id: a.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
yv.displayName = Fo;
var wv = "TooltipArrow", zk = S.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Od(n);
    return Mk(
      wv,
      n
    ).isInside ? null : /* @__PURE__ */ C.jsx(Tk, { ...o, ...r, ref: t });
  }
);
zk.displayName = wv;
function jk(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Fk(e, t, n = 5) {
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
function Bk(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function $k(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
    const s = t[i], a = t[l], u = s.x, c = s.y, f = a.x, p = a.y;
    c > r != p > r && n < (f - u) * (r - c) / (p - c) + u && (o = !o);
  }
  return o;
}
function Uk(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Hk(t);
}
function Hk(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], l = t[t.length - 2];
      if ((i.x - l.x) * (o.y - l.y) >= (i.y - l.y) * (o.x - l.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], l = n[n.length - 2];
      if ((i.x - l.x) * (o.y - l.y) >= (i.y - l.y) * (o.x - l.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Vk = mv, xv = yv;
const Wk = Vk, Qk = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ C.jsx(
  xv,
  {
    ref: r,
    sideOffset: t,
    className: Ne(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Qk.displayName = xv.displayName;
var oa = class {
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
}, ia = typeof window > "u" || "Deno" in globalThis;
function Ht() {
}
function Yk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Kk(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function qk(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function pc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: l,
    stale: s
  } = e;
  if (l) {
    if (r) {
      if (t.queryHash !== Ld(l, t.options))
        return !1;
    } else if (!Ki(t.queryKey, l))
      return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if (n === "active" && !a || n === "inactive" && a)
      return !1;
  }
  return !(typeof s == "boolean" && t.isStale() !== s || o && o !== t.state.fetchStatus || i && !i(t));
}
function Fp(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (Yi(t.options.mutationKey) !== Yi(i))
        return !1;
    } else if (!Ki(t.options.mutationKey, i))
      return !1;
  }
  return !(r && t.state.status !== r || o && !o(t));
}
function Ld(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Yi)(e);
}
function Yi(e) {
  return JSON.stringify(
    e,
    (t, n) => hc(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n
  );
}
function Ki(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((n) => Ki(e[n], t[n])) : !1;
}
function Sv(e, t) {
  if (e === t)
    return e;
  const n = Bp(e) && Bp(t);
  if (n || hc(e) && hc(t)) {
    const r = n ? e : Object.keys(e), o = r.length, i = n ? t : Object.keys(t), l = i.length, s = n ? [] : {}, a = new Set(r);
    let u = 0;
    for (let c = 0; c < l; c++) {
      const f = n ? c : i[c];
      (!n && a.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (s[f] = void 0, u++) : (s[f] = Sv(e[f], t[f]), s[f] === e[f] && e[f] !== void 0 && u++);
    }
    return o === l && u === o ? e : s;
  }
  return t;
}
function Bp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function hc(e) {
  if (!$p(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!$p(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function $p(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Gk(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Zk(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Sv(e, t) : t;
}
function Jk(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function eE(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Md = Symbol();
function bv(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Md ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Ar, qn, ko, Fh, tE = (Fh = class extends oa {
  constructor() {
    super();
    ae(this, Ar);
    ae(this, qn);
    ae(this, ko);
    J(this, ko, (t) => {
      if (!ia && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    O(this, qn) || this.setEventListener(O(this, ko));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, qn)) == null || t.call(this), J(this, qn, void 0));
  }
  setEventListener(t) {
    var n;
    J(this, ko, t), (n = O(this, qn)) == null || n.call(this), J(this, qn, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    O(this, Ar) !== t && (J(this, Ar, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof O(this, Ar) == "boolean" ? O(this, Ar) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Ar = new WeakMap(), qn = new WeakMap(), ko = new WeakMap(), Fh), kv = new tE(), Eo, Xn, Co, Bh, nE = (Bh = class extends oa {
  constructor() {
    super();
    ae(this, Eo, !0);
    ae(this, Xn);
    ae(this, Co);
    J(this, Co, (t) => {
      if (!ia && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Xn) || this.setEventListener(O(this, Co));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Xn)) == null || t.call(this), J(this, Xn, void 0));
  }
  setEventListener(t) {
    var n;
    J(this, Co, t), (n = O(this, Xn)) == null || n.call(this), J(this, Xn, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    O(this, Eo) !== t && (J(this, Eo, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return O(this, Eo);
  }
}, Eo = new WeakMap(), Xn = new WeakMap(), Co = new WeakMap(), Bh), Rs = new nE();
function rE() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  n.status = "pending", n.catch(() => {
  });
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return n.resolve = (o) => {
    r({
      status: "fulfilled",
      value: o
    }), e(o);
  }, n.reject = (o) => {
    r({
      status: "rejected",
      reason: o
    }), t(o);
  }, n;
}
function oE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ev(e) {
  return (e ?? "online") === "online" ? Rs.isOnline() : !0;
}
var Cv = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Ka(e) {
  return e instanceof Cv;
}
function Pv(e) {
  let t = !1, n = 0, r = !1, o;
  const i = rE(), l = (m) => {
    var x;
    r || (p(new Cv(m)), (x = e.abort) == null || x.call(e));
  }, s = () => {
    t = !0;
  }, a = () => {
    t = !1;
  }, u = () => kv.isFocused() && (e.networkMode === "always" || Rs.isOnline()) && e.canRun(), c = () => Ev(e.networkMode) && e.canRun(), f = (m) => {
    var x;
    r || (r = !0, (x = e.onSuccess) == null || x.call(e, m), o == null || o(), i.resolve(m));
  }, p = (m) => {
    var x;
    r || (r = !0, (x = e.onError) == null || x.call(e, m), o == null || o(), i.reject(m));
  }, d = () => new Promise((m) => {
    var x;
    o = (h) => {
      (r || u()) && m(h);
    }, (x = e.onPause) == null || x.call(e);
  }).then(() => {
    var m;
    o = void 0, r || (m = e.onContinue) == null || m.call(e);
  }), y = () => {
    if (r)
      return;
    let m;
    const x = n === 0 ? e.initialPromise : void 0;
    try {
      m = x ?? e.fn();
    } catch (h) {
      m = Promise.reject(h);
    }
    Promise.resolve(m).then(f).catch((h) => {
      var k;
      if (r)
        return;
      const g = e.retry ?? (ia ? 0 : 3), v = e.retryDelay ?? oE, E = typeof v == "function" ? v(n, h) : v, P = g === !0 || typeof g == "number" && n < g || typeof g == "function" && g(n, h);
      if (t || !P) {
        p(h);
        return;
      }
      n++, (k = e.onFail) == null || k.call(e, n, h), Gk(E).then(() => u() ? void 0 : d()).then(() => {
        t ? p(h) : y();
      });
    });
  };
  return {
    promise: i,
    cancel: l,
    continue: () => (o == null || o(), i),
    cancelRetry: s,
    continueRetry: a,
    canStart: c,
    start: () => (c() ? y() : d().then(y), i)
  };
}
var iE = (e) => setTimeout(e, 0);
function lE() {
  let e = [], t = 0, n = (s) => {
    s();
  }, r = (s) => {
    s();
  }, o = iE;
  const i = (s) => {
    t ? e.push(s) : o(() => {
      n(s);
    });
  }, l = () => {
    const s = e;
    e = [], s.length && o(() => {
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
      i(() => {
        s(...a);
      });
    },
    schedule: i,
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
      o = s;
    }
  };
}
var Ze = lE(), _r, $h, Tv = ($h = class {
  constructor() {
    ae(this, _r);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Kk(this.gcTime) && J(this, _r, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (ia ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    O(this, _r) && (clearTimeout(O(this, _r)), J(this, _r, void 0));
  }
}, _r = new WeakMap(), $h), Po, Ir, Tt, Or, Ve, Xi, Lr, Vt, wn, Uh, sE = (Uh = class extends Tv {
  constructor(t) {
    super();
    ae(this, Vt);
    ae(this, Po);
    ae(this, Ir);
    ae(this, Tt);
    ae(this, Or);
    ae(this, Ve);
    ae(this, Xi);
    ae(this, Lr);
    J(this, Lr, !1), J(this, Xi, t.defaultOptions), this.setOptions(t.options), this.observers = [], J(this, Or, t.client), J(this, Tt, O(this, Or).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, J(this, Po, uE(this.options)), this.state = t.state ?? O(this, Po), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = O(this, Ve)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...O(this, Xi), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && O(this, Tt).remove(this);
  }
  setData(t, n) {
    const r = Zk(this.state.data, t, this.options);
    return $e(this, Vt, wn).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    $e(this, Vt, wn).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, o;
    const n = (r = O(this, Ve)) == null ? void 0 : r.promise;
    return (o = O(this, Ve)) == null || o.cancel(t), n ? n.then(Ht).catch(Ht) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(O(this, Po));
  }
  isActive() {
    return this.observers.some(
      (t) => Xk(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Md || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (t) => pc(t.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !qk(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = O(this, Ve)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = O(this, Ve)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), O(this, Tt).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (O(this, Ve) && (O(this, Lr) ? O(this, Ve).cancel({ revert: !0 }) : O(this, Ve).cancelRetry()), this.scheduleGc()), O(this, Tt).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || $e(this, Vt, wn).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var u, c, f;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (O(this, Ve))
        return O(this, Ve).continueRetry(), O(this, Ve).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const p = this.observers.find((d) => d.options.queryFn);
      p && this.setOptions(p.options);
    }
    const r = new AbortController(), o = (p) => {
      Object.defineProperty(p, "signal", {
        enumerable: !0,
        get: () => (J(this, Lr, !0), r.signal)
      });
    }, i = () => {
      const p = bv(this.options, n), y = (() => {
        const m = {
          client: O(this, Or),
          queryKey: this.queryKey,
          meta: this.meta
        };
        return o(m), m;
      })();
      return J(this, Lr, !1), this.options.persister ? this.options.persister(
        p,
        y,
        this
      ) : p(y);
    }, s = (() => {
      const p = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        client: O(this, Or),
        state: this.state,
        fetchFn: i
      };
      return o(p), p;
    })();
    (u = this.options.behavior) == null || u.onFetch(s, this), J(this, Ir, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = s.fetchOptions) == null ? void 0 : c.meta)) && $e(this, Vt, wn).call(this, { type: "fetch", meta: (f = s.fetchOptions) == null ? void 0 : f.meta });
    const a = (p) => {
      var d, y, m, x;
      Ka(p) && p.silent || $e(this, Vt, wn).call(this, {
        type: "error",
        error: p
      }), Ka(p) || ((y = (d = O(this, Tt).config).onError) == null || y.call(
        d,
        p,
        this
      ), (x = (m = O(this, Tt).config).onSettled) == null || x.call(
        m,
        this.state.data,
        p,
        this
      )), this.scheduleGc();
    };
    return J(this, Ve, Pv({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: s.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (p) => {
        var d, y, m, x;
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
        (y = (d = O(this, Tt).config).onSuccess) == null || y.call(d, p, this), (x = (m = O(this, Tt).config).onSettled) == null || x.call(
          m,
          p,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: a,
      onFail: (p, d) => {
        $e(this, Vt, wn).call(this, { type: "failed", failureCount: p, error: d });
      },
      onPause: () => {
        $e(this, Vt, wn).call(this, { type: "pause" });
      },
      onContinue: () => {
        $e(this, Vt, wn).call(this, { type: "continue" });
      },
      retry: s.options.retry,
      retryDelay: s.options.retryDelay,
      networkMode: s.options.networkMode,
      canRun: () => !0
    })), O(this, Ve).start();
  }
}, Po = new WeakMap(), Ir = new WeakMap(), Tt = new WeakMap(), Or = new WeakMap(), Ve = new WeakMap(), Xi = new WeakMap(), Lr = new WeakMap(), Vt = new WeakSet(), wn = function(t) {
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
          ...aE(r.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return J(this, Ir, void 0), {
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
        const o = t.error;
        return Ka(o) && o.revert && O(this, Ir) ? { ...O(this, Ir), fetchStatus: "idle" } : {
          ...r,
          error: o,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          fetchFailureReason: o,
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
  this.state = n(this.state), Ze.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), O(this, Tt).notify({ query: this, type: "updated", action: t });
  });
}, Uh);
function aE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ev(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function uE(e) {
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
var on, Hh, cE = (Hh = class extends oa {
  constructor(t = {}) {
    super();
    ae(this, on);
    this.config = t, J(this, on, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const o = n.queryKey, i = n.queryHash ?? Ld(o, n);
    let l = this.get(i);
    return l || (l = new sE({
      client: t,
      queryKey: o,
      queryHash: i,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(l)), l;
  }
  add(t) {
    O(this, on).has(t.queryHash) || (O(this, on).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = O(this, on).get(t.queryHash);
    n && (t.destroy(), n === t && O(this, on).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Ze.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return O(this, on).get(t);
  }
  getAll() {
    return [...O(this, on).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => jp(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => jp(t, r)) : n;
  }
  notify(t) {
    Ze.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    Ze.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ze.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, on = new WeakMap(), Hh), ln, Xe, Mr, sn, Vn, Vh, dE = (Vh = class extends Tv {
  constructor(t) {
    super();
    ae(this, sn);
    ae(this, ln);
    ae(this, Xe);
    ae(this, Mr);
    this.mutationId = t.mutationId, J(this, Xe, t.mutationCache), J(this, ln, []), this.state = t.state || fE(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    O(this, ln).includes(t) || (O(this, ln).push(t), this.clearGcTimeout(), O(this, Xe).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    J(this, ln, O(this, ln).filter((n) => n !== t)), this.scheduleGc(), O(this, Xe).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    O(this, ln).length || (this.state.status === "pending" ? this.scheduleGc() : O(this, Xe).remove(this));
  }
  continue() {
    var t;
    return ((t = O(this, Mr)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var i, l, s, a, u, c, f, p, d, y, m, x, h, g, v, E, P, k, T, A;
    const n = () => {
      $e(this, sn, Vn).call(this, { type: "continue" });
    };
    J(this, Mr, Pv({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (_, L) => {
        $e(this, sn, Vn).call(this, { type: "failed", failureCount: _, error: L });
      },
      onPause: () => {
        $e(this, sn, Vn).call(this, { type: "pause" });
      },
      onContinue: n,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => O(this, Xe).canRun(this)
    }));
    const r = this.state.status === "pending", o = !O(this, Mr).canStart();
    try {
      if (r)
        n();
      else {
        $e(this, sn, Vn).call(this, { type: "pending", variables: t, isPaused: o }), await ((l = (i = O(this, Xe).config).onMutate) == null ? void 0 : l.call(
          i,
          t,
          this
        ));
        const L = await ((a = (s = this.options).onMutate) == null ? void 0 : a.call(s, t));
        L !== this.state.context && $e(this, sn, Vn).call(this, {
          type: "pending",
          context: L,
          variables: t,
          isPaused: o
        });
      }
      const _ = await O(this, Mr).start();
      return await ((c = (u = O(this, Xe).config).onSuccess) == null ? void 0 : c.call(
        u,
        _,
        t,
        this.state.context,
        this
      )), await ((p = (f = this.options).onSuccess) == null ? void 0 : p.call(f, _, t, this.state.context)), await ((y = (d = O(this, Xe).config).onSettled) == null ? void 0 : y.call(
        d,
        _,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((x = (m = this.options).onSettled) == null ? void 0 : x.call(m, _, null, t, this.state.context)), $e(this, sn, Vn).call(this, { type: "success", data: _ }), _;
    } catch (_) {
      try {
        throw await ((g = (h = O(this, Xe).config).onError) == null ? void 0 : g.call(
          h,
          _,
          t,
          this.state.context,
          this
        )), await ((E = (v = this.options).onError) == null ? void 0 : E.call(
          v,
          _,
          t,
          this.state.context
        )), await ((k = (P = O(this, Xe).config).onSettled) == null ? void 0 : k.call(
          P,
          void 0,
          _,
          this.state.variables,
          this.state.context,
          this
        )), await ((A = (T = this.options).onSettled) == null ? void 0 : A.call(
          T,
          void 0,
          _,
          t,
          this.state.context
        )), _;
      } finally {
        $e(this, sn, Vn).call(this, { type: "error", error: _ });
      }
    } finally {
      O(this, Xe).runNext(this);
    }
  }
}, ln = new WeakMap(), Xe = new WeakMap(), Mr = new WeakMap(), sn = new WeakSet(), Vn = function(t) {
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
  this.state = n(this.state), Ze.batch(() => {
    O(this, ln).forEach((r) => {
      r.onMutationUpdate(t);
    }), O(this, Xe).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Vh);
function fE() {
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
var bn, Wt, Gi, Wh, pE = (Wh = class extends oa {
  constructor(t = {}) {
    super();
    ae(this, bn);
    ae(this, Wt);
    ae(this, Gi);
    this.config = t, J(this, bn, /* @__PURE__ */ new Set()), J(this, Wt, /* @__PURE__ */ new Map()), J(this, Gi, 0);
  }
  build(t, n, r) {
    const o = new dE({
      mutationCache: this,
      mutationId: ++cl(this, Gi)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(o), o;
  }
  add(t) {
    O(this, bn).add(t);
    const n = Il(t);
    if (typeof n == "string") {
      const r = O(this, Wt).get(n);
      r ? r.push(t) : O(this, Wt).set(n, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (O(this, bn).delete(t)) {
      const n = Il(t);
      if (typeof n == "string") {
        const r = O(this, Wt).get(n);
        if (r)
          if (r.length > 1) {
            const o = r.indexOf(t);
            o !== -1 && r.splice(o, 1);
          } else r[0] === t && O(this, Wt).delete(n);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const n = Il(t);
    if (typeof n == "string") {
      const r = O(this, Wt).get(n), o = r == null ? void 0 : r.find(
        (i) => i.state.status === "pending"
      );
      return !o || o === t;
    } else
      return !0;
  }
  runNext(t) {
    var r;
    const n = Il(t);
    if (typeof n == "string") {
      const o = (r = O(this, Wt).get(n)) == null ? void 0 : r.find((i) => i !== t && i.state.isPaused);
      return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    Ze.batch(() => {
      O(this, bn).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), O(this, bn).clear(), O(this, Wt).clear();
    });
  }
  getAll() {
    return Array.from(O(this, bn));
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Fp(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => Fp(t, n));
  }
  notify(t) {
    Ze.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return Ze.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(Ht))
      )
    );
  }
}, bn = new WeakMap(), Wt = new WeakMap(), Gi = new WeakMap(), Wh);
function Il(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Up(e) {
  return {
    onFetch: (t, n) => {
      var c, f, p, d, y;
      const r = t.options, o = (p = (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : p.direction, i = ((d = t.state.data) == null ? void 0 : d.pages) || [], l = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let s = { pages: [], pageParams: [] }, a = 0;
      const u = async () => {
        let m = !1;
        const x = (v) => {
          Object.defineProperty(v, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
              m = !0;
            }), t.signal)
          });
        }, h = bv(t.options, t.fetchOptions), g = async (v, E, P) => {
          if (m)
            return Promise.reject();
          if (E == null && v.pages.length)
            return Promise.resolve(v);
          const T = (() => {
            const D = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: E,
              direction: P ? "backward" : "forward",
              meta: t.options.meta
            };
            return x(D), D;
          })(), A = await h(T), { maxPages: _ } = t.options, L = P ? eE : Jk;
          return {
            pages: L(v.pages, A, _),
            pageParams: L(v.pageParams, E, _)
          };
        };
        if (o && i.length) {
          const v = o === "backward", E = v ? hE : Hp, P = {
            pages: i,
            pageParams: l
          }, k = E(r, P);
          s = await g(P, k, v);
        } else {
          const v = e ?? i.length;
          do {
            const E = a === 0 ? l[0] ?? r.initialPageParam : Hp(r, s);
            if (a > 0 && E == null)
              break;
            s = await g(s, E), a++;
          } while (a < v);
        }
        return s;
      };
      t.options.persister ? t.fetchFn = () => {
        var m, x;
        return (x = (m = t.options).persister) == null ? void 0 : x.call(
          m,
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
function Hp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function hE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var Ce, Gn, Zn, To, No, Jn, Ro, Ao, Qh, mE = (Qh = class {
  constructor(e = {}) {
    ae(this, Ce);
    ae(this, Gn);
    ae(this, Zn);
    ae(this, To);
    ae(this, No);
    ae(this, Jn);
    ae(this, Ro);
    ae(this, Ao);
    J(this, Ce, e.queryCache || new cE()), J(this, Gn, e.mutationCache || new pE()), J(this, Zn, e.defaultOptions || {}), J(this, To, /* @__PURE__ */ new Map()), J(this, No, /* @__PURE__ */ new Map()), J(this, Jn, 0);
  }
  mount() {
    cl(this, Jn)._++, O(this, Jn) === 1 && (J(this, Ro, kv.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, Ce).onFocus());
    })), J(this, Ao, Rs.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, Ce).onOnline());
    })));
  }
  unmount() {
    var e, t;
    cl(this, Jn)._--, O(this, Jn) === 0 && ((e = O(this, Ro)) == null || e.call(this), J(this, Ro, void 0), (t = O(this, Ao)) == null || t.call(this), J(this, Ao, void 0));
  }
  isFetching(e) {
    return O(this, Ce).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return O(this, Gn).findAll({ ...e, status: "pending" }).length;
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
    return (n = O(this, Ce).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), n = O(this, Ce).build(this, t), r = n.state.data;
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(pc(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
  }
  getQueriesData(e) {
    return O(this, Ce).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), o = O(this, Ce).get(
      r.queryHash
    ), i = o == null ? void 0 : o.state.data, l = Yk(t, i);
    if (l !== void 0)
      return O(this, Ce).build(this, r).setData(l, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return Ze.batch(
      () => O(this, Ce).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = O(this, Ce).get(
      t.queryHash
    )) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = O(this, Ce);
    Ze.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = O(this, Ce);
    return Ze.batch(() => (n.findAll(e).forEach((r) => {
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
    const n = { revert: !0, ...t }, r = Ze.batch(
      () => O(this, Ce).findAll(e).map((o) => o.cancel(n))
    );
    return Promise.all(r).then(Ht).catch(Ht);
  }
  invalidateQueries(e, t = {}) {
    return Ze.batch(() => (O(this, Ce).findAll(e).forEach((n) => {
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
    }, r = Ze.batch(
      () => O(this, Ce).findAll(e).filter((o) => !o.isDisabled() && !o.isStatic()).map((o) => {
        let i = o.fetch(void 0, n);
        return n.throwOnError || (i = i.catch(Ht)), o.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(r).then(Ht);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = O(this, Ce).build(this, t);
    return n.isStaleByTime(
      pc(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Ht).catch(Ht);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Up(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Ht).catch(Ht);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Up(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Rs.isOnline() ? O(this, Gn).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return O(this, Ce);
  }
  getMutationCache() {
    return O(this, Gn);
  }
  getDefaultOptions() {
    return O(this, Zn);
  }
  setDefaultOptions(e) {
    J(this, Zn, e);
  }
  setQueryDefaults(e, t) {
    O(this, To).set(Yi(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...O(this, To).values()], n = {};
    return t.forEach((r) => {
      Ki(e, r.queryKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  setMutationDefaults(e, t) {
    O(this, No).set(Yi(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...O(this, No).values()], n = {};
    return t.forEach((r) => {
      Ki(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...O(this, Zn).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Ld(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Md && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...O(this, Zn).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    O(this, Ce).clear(), O(this, Gn).clear();
  }
}, Ce = new WeakMap(), Gn = new WeakMap(), Zn = new WeakMap(), To = new WeakMap(), No = new WeakMap(), Jn = new WeakMap(), Ro = new WeakMap(), Ao = new WeakMap(), Qh), gE = S.createContext(
  void 0
), yE = ({
  client: e,
  children: t
}) => (S.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ C.jsx(gE.Provider, { value: e, children: t }));
const vE = "https://jt-eco.app.n8n.cloud/webhook/1cd4ac0b-7a32-4c9f-9307-d0501ff02822", wE = [
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
], qa = {
  title: "Hi! I'm your EV Home Charging Assistant 🔌",
  subtitle: "I can help you with everything about charging your electric vehicle at home — from installation tips to cost calculations and product recommendations.",
  inputPlaceholder: "Type your message...",
  getStarted: "Choose a topic to get started"
};
function Dd(e) {
  var r, o;
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
    webhookUrl: n.webhookUrl || vE,
    // Content
    categories: n.categories && n.categories.length > 0 ? n.categories : wE,
    initialMessages: n.initialMessages,
    // i18n - merge with defaults
    i18n: {
      ...qa,
      ...n.i18n
    },
    // Legacy support
    brandName: n.brandName,
    welcomeTitle: n.welcomeTitle || ((r = n.i18n) == null ? void 0 : r.title) || qa.title,
    welcomeMessage: n.welcomeMessage || ((o = n.i18n) == null ? void 0 : o.subtitle) || qa.subtitle
  };
}
function xE() {
  var e, t;
  return !!((e = window.EVChatConfig) != null && e.container || (t = window.EVChatConfig) != null && t.target);
}
function SE(e) {
  return {
    ...Dd(e),
    isEmbedded: xE() || !!e
  };
}
const Nv = S.createContext(null);
function bE() {
  if (typeof window > "u") return !1;
  const e = new URLSearchParams(window.location.search);
  return e.get("embedded") === "true" || e.get("embed") === "true";
}
function kE({
  children: e,
  overrideConfig: t
}) {
  const n = S.useMemo(() => {
    const r = SE(t), o = bE();
    return t ? {
      ...r,
      ...t,
      isEmbedded: t.isEmbedded ?? o ?? r.isEmbedded
    } : {
      ...r,
      isEmbedded: o || r.isEmbedded
    };
  }, [t]);
  return /* @__PURE__ */ C.jsx(Nv.Provider, { value: n, children: e });
}
function Ko() {
  const e = S.useContext(Nv);
  if (!e)
    throw new Error("useChatConfig must be used within a ChatConfigProvider");
  return e;
}
const EE = () => {
  const e = sessionStorage.getItem("n8n-session-id");
  if (e) return e;
  const t = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  return sessionStorage.setItem("n8n-session-id", t), t;
}, CE = () => {
  const [e, t] = S.useState([]), [n, r] = S.useState(!1), [o, i] = S.useState(EE), l = S.useCallback(
    async (a) => {
      if (!a.trim()) return;
      const { webhookUrl: u } = Dd(), c = {
        id: `user-${Date.now()}`,
        role: "user",
        content: a.trim()
      };
      t((f) => [...f, c]), r(!0);
      try {
        const f = await fetch(u, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: a.trim(),
            sessionId: o
          })
        });
        if (!f.ok)
          throw new Error(`HTTP error! status: ${f.status}`);
        const p = await f.text();
        let d;
        const y = (x) => {
          if (typeof x == "string") return x;
          if (x == null) return "";
          if (Array.isArray(x))
            return x.length > 0 ? y(x[0]) : "";
          if (typeof x == "object") {
            const h = x, g = h.output || h.response || h.text || h.message || h.content;
            return g ? y(g) : JSON.stringify(x);
          }
          return String(x);
        };
        try {
          const x = JSON.parse(p);
          d = y(x);
        } catch {
          d = p;
        }
        const m = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: d
        };
        t((x) => [...x, m]);
      } catch (f) {
        console.error("n8n webhook error:", f), sy({
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
    [o]
  ), s = S.useCallback(() => {
    t([]);
    const a = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem("n8n-session-id", a), i(a);
  }, []);
  return {
    messages: e,
    isLoading: n,
    sendMessage: l,
    clearMessages: s,
    sessionId: o
  };
}, Vp = ({ onNewChat: e }) => /* @__PURE__ */ C.jsxs("header", { className: "flex items-center gap-3 border-b border-border bg-card px-6 py-4", children: [
  /* @__PURE__ */ C.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ C.jsx(iS, { className: "h-5 w-5 text-primary-foreground" }) }),
  /* @__PURE__ */ C.jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ C.jsx("h1", { className: "text-lg font-semibold text-foreground", children: "EV Home Charging Assistant" }),
    /* @__PURE__ */ C.jsx("p", { className: "text-sm text-muted-foreground", children: "Your friendly guide to home EV charging" })
  ] }),
  e && /* @__PURE__ */ C.jsx(
    "button",
    {
      onClick: e,
      className: "p-2 rounded-lg hover:bg-muted transition-colors",
      "aria-label": "Start new chat",
      title: "New chat",
      children: /* @__PURE__ */ C.jsx(oc, { className: "h-5 w-5 text-muted-foreground" })
    }
  ),
  /* @__PURE__ */ C.jsx(oS, { className: "h-6 w-6 text-primary opacity-60" })
] });
var PE = S.createContext(void 0);
function TE(e) {
  const t = S.useContext(PE);
  return e || t || "ltr";
}
function NE(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function RE(e, t) {
  return S.useReducer((n, r) => t[n][r] ?? n, e);
}
var zd = "ScrollArea", [Rv, WN] = ol(zd), [AE, Mt] = Rv(zd), Av = S.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...l
    } = e, [s, a] = S.useState(null), [u, c] = S.useState(null), [f, p] = S.useState(null), [d, y] = S.useState(null), [m, x] = S.useState(null), [h, g] = S.useState(0), [v, E] = S.useState(0), [P, k] = S.useState(!1), [T, A] = S.useState(!1), _ = Be(t, (D) => a(D)), L = TE(o);
    return /* @__PURE__ */ C.jsx(
      AE,
      {
        scope: n,
        type: r,
        dir: L,
        scrollHideDelay: i,
        scrollArea: s,
        viewport: u,
        onViewportChange: c,
        content: f,
        onContentChange: p,
        scrollbarX: d,
        onScrollbarXChange: y,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: k,
        scrollbarY: m,
        onScrollbarYChange: x,
        scrollbarYEnabled: T,
        onScrollbarYEnabledChange: A,
        onCornerWidthChange: g,
        onCornerHeightChange: E,
        children: /* @__PURE__ */ C.jsx(
          Le.div,
          {
            dir: L,
            ...l,
            ref: _,
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
Av.displayName = zd;
var _v = "ScrollAreaViewport", Iv = S.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, l = Mt(_v, n), s = S.useRef(null), a = Be(t, s, l.onViewportChange);
    return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
      /* @__PURE__ */ C.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ C.jsx(
        Le.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...i,
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
          children: /* @__PURE__ */ C.jsx("div", { ref: l.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Iv.displayName = _v;
var mn = "ScrollAreaScrollbar", jd = S.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Mt(mn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, s = e.orientation === "horizontal";
    return S.useEffect(() => (s ? i(!0) : l(!0), () => {
      s ? i(!1) : l(!1);
    }), [s, i, l]), o.type === "hover" ? /* @__PURE__ */ C.jsx(_E, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ C.jsx(IE, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ C.jsx(Ov, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ C.jsx(Fd, { ...r, ref: t }) : null;
  }
);
jd.displayName = mn;
var _E = S.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Mt(mn, e.__scopeScrollArea), [i, l] = S.useState(!1);
  return S.useEffect(() => {
    const s = o.scrollArea;
    let a = 0;
    if (s) {
      const u = () => {
        window.clearTimeout(a), l(!0);
      }, c = () => {
        a = window.setTimeout(() => l(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", u), s.addEventListener("pointerleave", c), () => {
        window.clearTimeout(a), s.removeEventListener("pointerenter", u), s.removeEventListener("pointerleave", c);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ C.jsx(Qr, { present: n || i, children: /* @__PURE__ */ C.jsx(
    Ov,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), IE = S.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Mt(mn, e.__scopeScrollArea), i = e.orientation === "horizontal", l = sa(() => a("SCROLL_END"), 100), [s, a] = RE("hidden", {
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
  return S.useEffect(() => {
    if (s === "idle") {
      const u = window.setTimeout(() => a("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [s, o.scrollHideDelay, a]), S.useEffect(() => {
    const u = o.viewport, c = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[c];
      const p = () => {
        const d = u[c];
        f !== d && (a("SCROLL"), l()), f = d;
      };
      return u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
    }
  }, [o.viewport, i, a, l]), /* @__PURE__ */ C.jsx(Qr, { present: n || s !== "hidden", children: /* @__PURE__ */ C.jsx(
    Fd,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: he(e.onPointerEnter, () => a("POINTER_ENTER")),
      onPointerLeave: he(e.onPointerLeave, () => a("POINTER_LEAVE"))
    }
  ) });
}), Ov = S.forwardRef((e, t) => {
  const n = Mt(mn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, l] = S.useState(!1), s = e.orientation === "horizontal", a = sa(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, c = n.viewport.offsetHeight < n.viewport.scrollHeight;
      l(s ? u : c);
    }
  }, 10);
  return Bo(n.viewport, a), Bo(n.content, a), /* @__PURE__ */ C.jsx(Qr, { present: r || i, children: /* @__PURE__ */ C.jsx(
    Fd,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Fd = S.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Mt(mn, e.__scopeScrollArea), i = S.useRef(null), l = S.useRef(0), [s, a] = S.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = jv(s.viewport, s.content), c = {
    ...r,
    sizes: s,
    onSizesChange: a,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => i.current = p,
    onThumbPointerUp: () => l.current = 0,
    onThumbPointerDown: (p) => l.current = p
  };
  function f(p, d) {
    return jE(p, l.current, s, d);
  }
  return n === "horizontal" ? /* @__PURE__ */ C.jsx(
    OE,
    {
      ...c,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollLeft, d = Wp(p, s, o.dir);
          i.current.style.transform = `translate3d(${d}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ C.jsx(
    LE,
    {
      ...c,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollTop, d = Wp(p, s);
          i.current.style.transform = `translate3d(0, ${d}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = f(p));
      }
    }
  ) : null;
}), OE = S.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Mt(mn, e.__scopeScrollArea), [l, s] = S.useState(), a = S.useRef(null), u = Be(t, a, i.onScrollbarXChange);
  return S.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [a]), /* @__PURE__ */ C.jsx(
    Mv,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": la(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
      onDragScroll: (c) => e.onDragScroll(c.x),
      onWheelScroll: (c, f) => {
        if (i.viewport) {
          const p = i.viewport.scrollLeft + c.deltaX;
          e.onWheelScroll(p), Bv(p, f) && c.preventDefault();
        }
      },
      onResize: () => {
        a.current && i.viewport && l && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: a.current.clientWidth,
            paddingStart: _s(l.paddingLeft),
            paddingEnd: _s(l.paddingRight)
          }
        });
      }
    }
  );
}), LE = S.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Mt(mn, e.__scopeScrollArea), [l, s] = S.useState(), a = S.useRef(null), u = Be(t, a, i.onScrollbarYChange);
  return S.useEffect(() => {
    a.current && s(getComputedStyle(a.current));
  }, [a]), /* @__PURE__ */ C.jsx(
    Mv,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": la(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
      onDragScroll: (c) => e.onDragScroll(c.y),
      onWheelScroll: (c, f) => {
        if (i.viewport) {
          const p = i.viewport.scrollTop + c.deltaY;
          e.onWheelScroll(p), Bv(p, f) && c.preventDefault();
        }
      },
      onResize: () => {
        a.current && i.viewport && l && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: a.current.clientHeight,
            paddingStart: _s(l.paddingTop),
            paddingEnd: _s(l.paddingBottom)
          }
        });
      }
    }
  );
}), [ME, Lv] = Rv(mn), Mv = S.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: i,
    onThumbPointerUp: l,
    onThumbPointerDown: s,
    onThumbPositionChange: a,
    onDragScroll: u,
    onWheelScroll: c,
    onResize: f,
    ...p
  } = e, d = Mt(mn, n), [y, m] = S.useState(null), x = Be(t, (_) => m(_)), h = S.useRef(null), g = S.useRef(""), v = d.viewport, E = r.content - r.viewport, P = Je(c), k = Je(a), T = sa(f, 10);
  function A(_) {
    if (h.current) {
      const L = _.clientX - h.current.left, D = _.clientY - h.current.top;
      u({ x: L, y: D });
    }
  }
  return S.useEffect(() => {
    const _ = (L) => {
      const D = L.target;
      (y == null ? void 0 : y.contains(D)) && P(L, E);
    };
    return document.addEventListener("wheel", _, { passive: !1 }), () => document.removeEventListener("wheel", _, { passive: !1 });
  }, [v, y, E, P]), S.useEffect(k, [r, k]), Bo(y, T), Bo(d.content, T), /* @__PURE__ */ C.jsx(
    ME,
    {
      scope: n,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: Je(i),
      onThumbPointerUp: Je(l),
      onThumbPositionChange: k,
      onThumbPointerDown: Je(s),
      children: /* @__PURE__ */ C.jsx(
        Le.div,
        {
          ...p,
          ref: x,
          style: { position: "absolute", ...p.style },
          onPointerDown: he(e.onPointerDown, (_) => {
            _.button === 0 && (_.target.setPointerCapture(_.pointerId), h.current = y.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", d.viewport && (d.viewport.style.scrollBehavior = "auto"), A(_));
          }),
          onPointerMove: he(e.onPointerMove, A),
          onPointerUp: he(e.onPointerUp, (_) => {
            const L = _.target;
            L.hasPointerCapture(_.pointerId) && L.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = g.current, d.viewport && (d.viewport.style.scrollBehavior = ""), h.current = null;
          })
        }
      )
    }
  );
}), As = "ScrollAreaThumb", Dv = S.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Lv(As, e.__scopeScrollArea);
    return /* @__PURE__ */ C.jsx(Qr, { present: n || o.hasThumb, children: /* @__PURE__ */ C.jsx(DE, { ref: t, ...r }) });
  }
), DE = S.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = Mt(As, n), l = Lv(As, n), { onThumbPositionChange: s } = l, a = Be(
      t,
      (f) => l.onThumbChange(f)
    ), u = S.useRef(void 0), c = sa(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return S.useEffect(() => {
      const f = i.viewport;
      if (f) {
        const p = () => {
          if (c(), !u.current) {
            const d = FE(f, s);
            u.current = d, s();
          }
        };
        return s(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
      }
    }, [i.viewport, c, s]), /* @__PURE__ */ C.jsx(
      Le.div,
      {
        "data-state": l.hasThumb ? "visible" : "hidden",
        ...o,
        ref: a,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: he(e.onPointerDownCapture, (f) => {
          const d = f.target.getBoundingClientRect(), y = f.clientX - d.left, m = f.clientY - d.top;
          l.onThumbPointerDown({ x: y, y: m });
        }),
        onPointerUp: he(e.onPointerUp, l.onThumbPointerUp)
      }
    );
  }
);
Dv.displayName = As;
var Bd = "ScrollAreaCorner", zv = S.forwardRef(
  (e, t) => {
    const n = Mt(Bd, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ C.jsx(zE, { ...e, ref: t }) : null;
  }
);
zv.displayName = Bd;
var zE = S.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Mt(Bd, n), [i, l] = S.useState(0), [s, a] = S.useState(0), u = !!(i && s);
  return Bo(o.scrollbarX, () => {
    var f;
    const c = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(c), a(c);
  }), Bo(o.scrollbarY, () => {
    var f;
    const c = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(c), l(c);
  }), u ? /* @__PURE__ */ C.jsx(
    Le.div,
    {
      ...r,
      ref: t,
      style: {
        width: i,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function _s(e) {
  return e ? parseInt(e, 10) : 0;
}
function jv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function la(e) {
  const t = jv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function jE(e, t, n, r = "ltr") {
  const o = la(n), i = o / 2, l = t || i, s = o - l, a = n.scrollbar.paddingStart + l, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, c = n.content - n.viewport, f = r === "ltr" ? [0, c] : [c * -1, 0];
  return Fv([a, u], f)(e);
}
function Wp(e, t, n = "ltr") {
  const r = la(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, s = i - r, a = n === "ltr" ? [0, l] : [l * -1, 0], u = NE(e, a);
  return Fv([0, l], [0, s])(u);
}
function Fv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Bv(e, t) {
  return e > 0 && e < t;
}
var FE = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, l = n.left !== i.left, s = n.top !== i.top;
    (l || s) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function sa(e, t) {
  const n = Je(e), r = S.useRef(0);
  return S.useEffect(() => () => window.clearTimeout(r.current), []), S.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Bo(e, t) {
  const n = Je(t);
  An(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var $v = Av, BE = Iv, $E = zv;
const Uv = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ C.jsxs($v, { ref: r, className: Ne("relative overflow-hidden", e), ...n, children: [
  /* @__PURE__ */ C.jsx(BE, { className: "h-full w-full rounded-[inherit]", children: t }),
  /* @__PURE__ */ C.jsx(Hv, {}),
  /* @__PURE__ */ C.jsx($E, {})
] }));
Uv.displayName = $v.displayName;
const Hv = S.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ C.jsx(
  jd,
  {
    ref: r,
    orientation: t,
    className: Ne(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ C.jsx(Dv, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Hv.displayName = jd.displayName;
function UE(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const HE = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, VE = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, WE = {};
function Qp(e, t) {
  return (WE.jsx ? VE : HE).test(e);
}
const QE = /[ \t\n\f\r]/g;
function YE(e) {
  return typeof e == "object" ? e.type === "text" ? Yp(e.value) : !1 : Yp(e);
}
function Yp(e) {
  return e.replace(QE, "") === "";
}
class sl {
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
sl.prototype.normal = {};
sl.prototype.property = {};
sl.prototype.space = void 0;
function Vv(e, t) {
  const n = {}, r = {};
  for (const o of e)
    Object.assign(n, o.property), Object.assign(r, o.normal);
  return new sl(n, r, t);
}
function mc(e) {
  return e.toLowerCase();
}
class ft {
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
ft.prototype.attribute = "";
ft.prototype.booleanish = !1;
ft.prototype.boolean = !1;
ft.prototype.commaOrSpaceSeparated = !1;
ft.prototype.commaSeparated = !1;
ft.prototype.defined = !1;
ft.prototype.mustUseProperty = !1;
ft.prototype.number = !1;
ft.prototype.overloadedBoolean = !1;
ft.prototype.property = "";
ft.prototype.spaceSeparated = !1;
ft.prototype.space = void 0;
let KE = 0;
const te = Yr(), Ae = Yr(), gc = Yr(), F = Yr(), pe = Yr(), xo = Yr(), gt = Yr();
function Yr() {
  return 2 ** ++KE;
}
const yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: te,
  booleanish: Ae,
  commaOrSpaceSeparated: gt,
  commaSeparated: xo,
  number: F,
  overloadedBoolean: gc,
  spaceSeparated: pe
}, Symbol.toStringTag, { value: "Module" })), Xa = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(yc)
);
class $d extends ft {
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
  constructor(t, n, r, o) {
    let i = -1;
    if (super(t, n), Kp(this, "space", o), typeof r == "number")
      for (; ++i < Xa.length; ) {
        const l = Xa[i];
        Kp(this, Xa[i], (r & yc[l]) === yc[l]);
      }
  }
}
$d.prototype.defined = !0;
function Kp(e, t, n) {
  n && (e[t] = n);
}
function qo(e) {
  const t = {}, n = {};
  for (const [r, o] of Object.entries(e.properties)) {
    const i = new $d(
      r,
      e.transform(e.attributes || {}, r),
      o,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[mc(r)] = r, n[mc(i.attribute)] = r;
  }
  return new sl(t, n, e.space);
}
const Wv = qo({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ae,
    ariaAutoComplete: null,
    ariaBusy: Ae,
    ariaChecked: Ae,
    ariaColCount: F,
    ariaColIndex: F,
    ariaColSpan: F,
    ariaControls: pe,
    ariaCurrent: null,
    ariaDescribedBy: pe,
    ariaDetails: null,
    ariaDisabled: Ae,
    ariaDropEffect: pe,
    ariaErrorMessage: null,
    ariaExpanded: Ae,
    ariaFlowTo: pe,
    ariaGrabbed: Ae,
    ariaHasPopup: null,
    ariaHidden: Ae,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: pe,
    ariaLevel: F,
    ariaLive: null,
    ariaModal: Ae,
    ariaMultiLine: Ae,
    ariaMultiSelectable: Ae,
    ariaOrientation: null,
    ariaOwns: pe,
    ariaPlaceholder: null,
    ariaPosInSet: F,
    ariaPressed: Ae,
    ariaReadOnly: Ae,
    ariaRelevant: null,
    ariaRequired: Ae,
    ariaRoleDescription: pe,
    ariaRowCount: F,
    ariaRowIndex: F,
    ariaRowSpan: F,
    ariaSelected: Ae,
    ariaSetSize: F,
    ariaSort: null,
    ariaValueMax: F,
    ariaValueMin: F,
    ariaValueNow: F,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Qv(e, t) {
  return t in e ? e[t] : t;
}
function Yv(e, t) {
  return Qv(e, t.toLowerCase());
}
const qE = qo({
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
    accept: xo,
    acceptCharset: pe,
    accessKey: pe,
    action: null,
    allow: null,
    allowFullScreen: te,
    allowPaymentRequest: te,
    allowUserMedia: te,
    alt: null,
    as: null,
    async: te,
    autoCapitalize: null,
    autoComplete: pe,
    autoFocus: te,
    autoPlay: te,
    blocking: pe,
    capture: null,
    charSet: null,
    checked: te,
    cite: null,
    className: pe,
    cols: F,
    colSpan: null,
    content: null,
    contentEditable: Ae,
    controls: te,
    controlsList: pe,
    coords: F | xo,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: te,
    defer: te,
    dir: null,
    dirName: null,
    disabled: te,
    download: gc,
    draggable: Ae,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: te,
    formTarget: null,
    headers: pe,
    height: F,
    hidden: gc,
    high: F,
    href: null,
    hrefLang: null,
    htmlFor: pe,
    httpEquiv: pe,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: te,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: te,
    itemId: null,
    itemProp: pe,
    itemRef: pe,
    itemScope: te,
    itemType: pe,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: te,
    low: F,
    manifest: null,
    max: null,
    maxLength: F,
    media: null,
    method: null,
    min: null,
    minLength: F,
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
    optimum: F,
    pattern: null,
    ping: pe,
    placeholder: null,
    playsInline: te,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: te,
    referrerPolicy: null,
    rel: pe,
    required: te,
    reversed: te,
    rows: F,
    rowSpan: F,
    sandbox: pe,
    scope: null,
    scoped: te,
    seamless: te,
    selected: te,
    shadowRootClonable: te,
    shadowRootDelegatesFocus: te,
    shadowRootMode: null,
    shape: null,
    size: F,
    sizes: null,
    slot: null,
    span: F,
    spellCheck: Ae,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: F,
    step: null,
    style: null,
    tabIndex: F,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: te,
    useMap: null,
    value: Ae,
    width: F,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: pe,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: F,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: F,
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
    hSpace: F,
    // `<img>` and `<object>`
    leftMargin: F,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: F,
    // `<body>`
    marginWidth: F,
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
    rightMargin: F,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ae,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: F,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: F,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: te,
    disableRemotePlayback: te,
    prefix: null,
    property: null,
    results: F,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Yv
}), XE = qo({
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
    about: gt,
    accentHeight: F,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: F,
    amplitude: F,
    arabicForm: null,
    ascent: F,
    attributeName: null,
    attributeType: null,
    azimuth: F,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: F,
    by: null,
    calcMode: null,
    capHeight: F,
    className: pe,
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
    descent: F,
    diffuseConstant: F,
    direction: null,
    display: null,
    dur: null,
    divisor: F,
    dominantBaseline: null,
    download: te,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: F,
    enableBackground: null,
    end: null,
    event: null,
    exponent: F,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: F,
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
    g1: xo,
    g2: xo,
    glyphName: xo,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: F,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: F,
    horizOriginX: F,
    horizOriginY: F,
    id: null,
    ideographic: F,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: F,
    k: F,
    k1: F,
    k2: F,
    k3: F,
    k4: F,
    kernelMatrix: gt,
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
    limitingConeAngle: F,
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
    mediaSize: F,
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
    overlinePosition: F,
    overlineThickness: F,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: F,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: pe,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: F,
    pointsAtY: F,
    pointsAtZ: F,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: gt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: gt,
    rev: gt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: gt,
    requiredFeatures: gt,
    requiredFonts: gt,
    requiredFormats: gt,
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
    specularConstant: F,
    specularExponent: F,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: F,
    strikethroughThickness: F,
    string: null,
    stroke: null,
    strokeDashArray: gt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: F,
    strokeOpacity: F,
    strokeWidth: null,
    style: null,
    surfaceScale: F,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: gt,
    tabIndex: F,
    tableValues: null,
    target: null,
    targetX: F,
    targetY: F,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: gt,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: F,
    underlineThickness: F,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: F,
    values: null,
    vAlphabetic: F,
    vMathematical: F,
    vectorEffect: null,
    vHanging: F,
    vIdeographic: F,
    version: null,
    vertAdvY: F,
    vertOriginX: F,
    vertOriginY: F,
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
    xHeight: F,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Qv
}), Kv = qo({
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
}), qv = qo({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Yv
}), Xv = qo({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), GE = {
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
}, ZE = /[A-Z]/g, qp = /-[a-z]/g, JE = /^data[-\w.:]+$/i;
function eC(e, t) {
  const n = mc(t);
  let r = t, o = ft;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && JE.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(qp, nC);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!qp.test(i)) {
        let l = i.replace(ZE, tC);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = $d;
  }
  return new o(r, t);
}
function tC(e) {
  return "-" + e.toLowerCase();
}
function nC(e) {
  return e.charAt(1).toUpperCase();
}
const rC = Vv([Wv, qE, Kv, qv, Xv], "html"), Ud = Vv([Wv, XE, Kv, qv, Xv], "svg");
function oC(e) {
  return e.join(" ").trim();
}
var Hd = {}, Xp = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, iC = /\n/g, lC = /^\s*/, sC = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, aC = /^:\s*/, uC = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, cC = /^[;\s]*/, dC = /^\s+|\s+$/g, fC = `
`, Gp = "/", Zp = "*", Pr = "", pC = "comment", hC = "declaration";
function mC(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function o(y) {
    var m = y.match(iC);
    m && (n += m.length);
    var x = y.lastIndexOf(fC);
    r = ~x ? y.length - x : r + y.length;
  }
  function i() {
    var y = { line: n, column: r };
    return function(m) {
      return m.position = new l(y), u(), m;
    };
  }
  function l(y) {
    this.start = y, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function s(y) {
    var m = new Error(
      t.source + ":" + n + ":" + r + ": " + y
    );
    if (m.reason = y, m.filename = t.source, m.line = n, m.column = r, m.source = e, !t.silent) throw m;
  }
  function a(y) {
    var m = y.exec(e);
    if (m) {
      var x = m[0];
      return o(x), e = e.slice(x.length), m;
    }
  }
  function u() {
    a(lC);
  }
  function c(y) {
    var m;
    for (y = y || []; m = f(); )
      m !== !1 && y.push(m);
    return y;
  }
  function f() {
    var y = i();
    if (!(Gp != e.charAt(0) || Zp != e.charAt(1))) {
      for (var m = 2; Pr != e.charAt(m) && (Zp != e.charAt(m) || Gp != e.charAt(m + 1)); )
        ++m;
      if (m += 2, Pr === e.charAt(m - 1))
        return s("End of comment missing");
      var x = e.slice(2, m - 2);
      return r += 2, o(x), e = e.slice(m), r += 2, y({
        type: pC,
        comment: x
      });
    }
  }
  function p() {
    var y = i(), m = a(sC);
    if (m) {
      if (f(), !a(aC)) return s("property missing ':'");
      var x = a(uC), h = y({
        type: hC,
        property: Jp(m[0].replace(Xp, Pr)),
        value: x ? Jp(x[0].replace(Xp, Pr)) : Pr
      });
      return a(cC), h;
    }
  }
  function d() {
    var y = [];
    c(y);
    for (var m; m = p(); )
      m !== !1 && (y.push(m), c(y));
    return y;
  }
  return u(), d();
}
function Jp(e) {
  return e ? e.replace(dC, Pr) : Pr;
}
var gC = mC, yC = Jl && Jl.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Hd, "__esModule", { value: !0 });
Hd.default = wC;
const vC = yC(gC);
function wC(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, vC.default)(e), o = typeof t == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: l, value: s } = i;
    o ? t(l, s, i) : s && (n = n || {}, n[l] = s);
  }), n;
}
var aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.camelCase = void 0;
var xC = /^--[a-zA-Z0-9_-]+$/, SC = /-([a-z])/g, bC = /^[^-]+$/, kC = /^-(webkit|moz|ms|o|khtml)-/, EC = /^-(ms)-/, CC = function(e) {
  return !e || bC.test(e) || xC.test(e);
}, PC = function(e, t) {
  return t.toUpperCase();
}, eh = function(e, t) {
  return "".concat(t, "-");
}, TC = function(e, t) {
  return t === void 0 && (t = {}), CC(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(EC, eh) : e = e.replace(kC, eh), e.replace(SC, PC));
};
aa.camelCase = TC;
var NC = Jl && Jl.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, RC = NC(Hd), AC = aa;
function vc(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, RC.default)(e, function(r, o) {
    r && o && (n[(0, AC.camelCase)(r, t)] = o);
  }), n;
}
vc.default = vc;
var _C = vc;
const IC = /* @__PURE__ */ Ls(_C), Gv = Zv("end"), Vd = Zv("start");
function Zv(e) {
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
function OC(e) {
  const t = Vd(e), n = Gv(e);
  if (t && n)
    return { start: t, end: n };
}
function Ci(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? th(e.position) : "start" in e || "end" in e ? th(e) : "line" in e || "column" in e ? wc(e) : "";
}
function wc(e) {
  return nh(e && e.line) + ":" + nh(e && e.column);
}
function th(e) {
  return wc(e && e.start) + "-" + wc(e && e.end);
}
function nh(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ye extends Error {
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
    let o = "", i = {}, l = !1;
    if (n && ("line" in n && "column" in n ? i = { place: n } : "start" in n && "end" in n ? i = { place: n } : "type" in n ? i = {
      ancestors: [n],
      place: n.position
    } : i = { ...n }), typeof t == "string" ? o = t : !i.cause && t && (l = !0, o = t.message, i.cause = t), !i.ruleId && !i.source && typeof r == "string") {
      const a = r.indexOf(":");
      a === -1 ? i.ruleId = r : (i.source = r.slice(0, a), i.ruleId = r.slice(a + 1));
    }
    if (!i.place && i.ancestors && i.ancestors) {
      const a = i.ancestors[i.ancestors.length - 1];
      a && (i.place = a.position);
    }
    const s = i.place && "start" in i.place ? i.place.start : i.place;
    this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file = "", this.message = o, this.line = s ? s.line : void 0, this.name = Ci(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = l && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Ye.prototype.file = "";
Ye.prototype.name = "";
Ye.prototype.reason = "";
Ye.prototype.message = "";
Ye.prototype.stack = "";
Ye.prototype.column = void 0;
Ye.prototype.line = void 0;
Ye.prototype.ancestors = void 0;
Ye.prototype.cause = void 0;
Ye.prototype.fatal = void 0;
Ye.prototype.place = void 0;
Ye.prototype.ruleId = void 0;
Ye.prototype.source = void 0;
const Wd = {}.hasOwnProperty, LC = /* @__PURE__ */ new Map(), MC = /[A-Z]/g, DC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), zC = /* @__PURE__ */ new Set(["td", "th"]), Jv = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function jC(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = QC(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = WC(n, t.jsx, t.jsxs);
  }
  const o = {
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
    schema: t.space === "svg" ? Ud : rC,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, i = e0(o, e, void 0);
  return i && typeof i != "string" ? i : o.create(
    e,
    o.Fragment,
    { children: i || void 0 },
    void 0
  );
}
function e0(e, t, n) {
  if (t.type === "element")
    return FC(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return BC(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return UC(e, t, n);
  if (t.type === "mdxjsEsm")
    return $C(e, t);
  if (t.type === "root")
    return HC(e, t, n);
  if (t.type === "text")
    return VC(e, t);
}
function FC(e, t, n) {
  const r = e.schema;
  let o = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (o = Ud, e.schema = o), e.ancestors.push(t);
  const i = n0(e, t.tagName, !1), l = YC(e, t);
  let s = Yd(e, t);
  return DC.has(t.tagName) && (s = s.filter(function(a) {
    return typeof a == "string" ? !YE(a) : !0;
  })), t0(e, l, i, t), Qd(l, s), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
}
function BC(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  qi(e, t.position);
}
function $C(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  qi(e, t.position);
}
function UC(e, t, n) {
  const r = e.schema;
  let o = r;
  t.name === "svg" && r.space === "html" && (o = Ud, e.schema = o), e.ancestors.push(t);
  const i = t.name === null ? e.Fragment : n0(e, t.name, !0), l = KC(e, t), s = Yd(e, t);
  return t0(e, l, i, t), Qd(l, s), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
}
function HC(e, t, n) {
  const r = {};
  return Qd(r, Yd(e, t)), e.create(t, e.Fragment, r, n);
}
function VC(e, t) {
  return t.value;
}
function t0(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Qd(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function WC(e, t, n) {
  return r;
  function r(o, i, l, s) {
    const u = Array.isArray(l.children) ? n : t;
    return s ? u(i, l, s) : u(i, l);
  }
}
function QC(e, t) {
  return n;
  function n(r, o, i, l) {
    const s = Array.isArray(i.children), a = Vd(r);
    return t(
      o,
      i,
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
function YC(e, t) {
  const n = {};
  let r, o;
  for (o in t.properties)
    if (o !== "children" && Wd.call(t.properties, o)) {
      const i = qC(e, o, t.properties[o]);
      if (i) {
        const [l, s] = i;
        e.tableCellAlignToStyle && l === "align" && typeof s == "string" && zC.has(t.tagName) ? r = s : n[l] = s;
      }
    }
  if (r) {
    const i = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    i[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function KC(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const i = r.data.estree.body[0];
        i.type;
        const l = i.expression;
        l.type;
        const s = l.properties[0];
        s.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        qi(e, t.position);
    else {
      const o = r.name;
      let i;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, i = e.evaluater.evaluateExpression(s.expression);
        } else
          qi(e, t.position);
      else
        i = r.value === null ? !0 : r.value;
      n[o] = /** @type {Props[keyof Props]} */
      i;
    }
  return n;
}
function Yd(e, t) {
  const n = [];
  let r = -1;
  const o = e.passKeys ? /* @__PURE__ */ new Map() : LC;
  for (; ++r < t.children.length; ) {
    const i = t.children[r];
    let l;
    if (e.passKeys) {
      const a = i.type === "element" ? i.tagName : i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement" ? i.name : void 0;
      if (a) {
        const u = o.get(a) || 0;
        l = a + "-" + u, o.set(a, u + 1);
      }
    }
    const s = e0(e, i, l);
    s !== void 0 && n.push(s);
  }
  return n;
}
function qC(e, t, n) {
  const r = eC(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? UE(n) : oC(n)), r.property === "style") {
      let o = typeof n == "object" ? n : XC(e, String(n));
      return e.stylePropertyNameCase === "css" && (o = GC(o)), ["style", o];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? GE[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function XC(e, t) {
  try {
    return IC(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), o = new Ye("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw o.file = e.filePath || void 0, o.url = Jv + "#cannot-parse-style-attribute", o;
  }
}
function n0(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let i = -1, l;
    for (; ++i < o.length; ) {
      const s = Qp(o[i]) ? { type: "Identifier", name: o[i] } : { type: "Literal", value: o[i] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: s,
        computed: !!(i && s.type === "Literal"),
        optional: !1
      } : s;
    }
    r = l;
  } else
    r = Qp(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const o = (
      /** @type {string | number} */
      r.value
    );
    return Wd.call(e.components, o) ? e.components[o] : o;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  qi(e);
}
function qi(e, t) {
  const n = new Ye(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Jv + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function GC(e) {
  const t = {};
  let n;
  for (n in e)
    Wd.call(e, n) && (t[ZC(n)] = e[n]);
  return t;
}
function ZC(e) {
  let t = e.replace(MC, JC);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function JC(e) {
  return "-" + e.toLowerCase();
}
const Ga = {
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
}, eP = {};
function tP(e, t) {
  const n = eP, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return r0(e, r, o);
}
function r0(e, t, n) {
  if (nP(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return rh(e.children, t, n);
  }
  return Array.isArray(e) ? rh(e, t, n) : "";
}
function rh(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = r0(e[o], t, n);
  return r.join("");
}
function nP(e) {
  return !!(e && typeof e == "object");
}
const oh = document.createElement("i");
function Kd(e) {
  const t = "&" + e + ";";
  oh.innerHTML = t;
  const n = oh.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function pn(e, t, n, r) {
  const o = e.length;
  let i = 0, l;
  if (t < 0 ? t = -t > o ? 0 : o + t : t = t > o ? o : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); i < r.length; )
      l = r.slice(i, i + 1e4), l.unshift(t, 0), e.splice(...l), i += 1e4, t += 1e4;
}
function At(e, t) {
  return e.length > 0 ? (pn(e, e.length, 0, t), e) : t;
}
const ih = {}.hasOwnProperty;
function rP(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    oP(t, e[n]);
  return t;
}
function oP(e, t) {
  let n;
  for (n in t) {
    const o = (ih.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let l;
    if (i)
      for (l in i) {
        ih.call(o, l) || (o[l] = []);
        const s = i[l];
        iP(
          // @ts-expect-error Looks like a list.
          o[l],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function iP(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  pn(e, 0, 0, r);
}
function o0(e, t) {
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
function So(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const un = wr(/[A-Za-z]/), xt = wr(/[\dA-Za-z]/), lP = wr(/[#-'*+\--9=?A-Z^-~]/);
function xc(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Sc = wr(/\d/), sP = wr(/[\dA-Fa-f]/), aP = wr(/[!-/:-@[-`{-~]/);
function X(e) {
  return e !== null && e < -2;
}
function dt(e) {
  return e !== null && (e < 0 || e === 32);
}
function ue(e) {
  return e === -2 || e === -1 || e === 32;
}
const uP = wr(new RegExp("\\p{P}|\\p{S}", "u")), cP = wr(/\s/);
function wr(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Xo(e) {
  const t = [];
  let n = -1, r = 0, o = 0;
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n);
    let l = "";
    if (i === 37 && xt(e.charCodeAt(n + 1)) && xt(e.charCodeAt(n + 2)))
      o = 2;
    else if (i < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (l = String.fromCharCode(i));
    else if (i > 55295 && i < 57344) {
      const s = e.charCodeAt(n + 1);
      i < 56320 && s > 56319 && s < 57344 ? (l = String.fromCharCode(i, s), o = 1) : l = "�";
    } else
      l = String.fromCharCode(i);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + o + 1, l = ""), o && (n += o, o = 0);
  }
  return t.join("") + e.slice(r);
}
function ge(e, t, n, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return l;
  function l(a) {
    return ue(a) ? (e.enter(n), s(a)) : t(a);
  }
  function s(a) {
    return ue(a) && i++ < o ? (e.consume(a), s) : (e.exit(n), t(a));
  }
}
const dP = {
  tokenize: fP
};
function fP(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, o);
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
  function o(s) {
    return e.enter("paragraph"), i(s);
  }
  function i(s) {
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
    return X(s) ? (e.consume(s), e.exit("chunkText"), i) : (e.consume(s), l);
  }
}
const pP = {
  tokenize: hP
}, lh = {
  tokenize: mP
};
function hP(e) {
  const t = this, n = [];
  let r = 0, o, i, l;
  return s;
  function s(v) {
    if (r < n.length) {
      const E = n[r];
      return t.containerState = E[1], e.attempt(E[0].continuation, a, u)(v);
    }
    return u(v);
  }
  function a(v) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, o && g();
      const E = t.events.length;
      let P = E, k;
      for (; P--; )
        if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
          k = t.events[P][1].end;
          break;
        }
      h(r);
      let T = E;
      for (; T < t.events.length; )
        t.events[T][1].end = {
          ...k
        }, T++;
      return pn(t.events, P + 1, 0, t.events.slice(E)), t.events.length = T, u(v);
    }
    return s(v);
  }
  function u(v) {
    if (r === n.length) {
      if (!o)
        return p(v);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return y(v);
      t.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(lh, c, f)(v);
  }
  function c(v) {
    return o && g(), h(r), p(v);
  }
  function f(v) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, y(v);
  }
  function p(v) {
    return t.containerState = {}, e.attempt(lh, d, y)(v);
  }
  function d(v) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(v);
  }
  function y(v) {
    if (v === null) {
      o && g(), h(0), e.consume(v);
      return;
    }
    return o = o || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: o,
      contentType: "flow",
      previous: i
    }), m(v);
  }
  function m(v) {
    if (v === null) {
      x(e.exit("chunkFlow"), !0), h(0), e.consume(v);
      return;
    }
    return X(v) ? (e.consume(v), x(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(v), m);
  }
  function x(v, E) {
    const P = t.sliceStream(v);
    if (E && P.push(null), v.previous = i, i && (i.next = v), i = v, o.defineSkip(v.start), o.write(P), t.parser.lazy[v.start.line]) {
      let k = o.events.length;
      for (; k--; )
        if (
          // The token starts before the line ending…
          o.events[k][1].start.offset < l && // …and either is not ended yet…
          (!o.events[k][1].end || // …or ends after it.
          o.events[k][1].end.offset > l)
        )
          return;
      const T = t.events.length;
      let A = T, _, L;
      for (; A--; )
        if (t.events[A][0] === "exit" && t.events[A][1].type === "chunkFlow") {
          if (_) {
            L = t.events[A][1].end;
            break;
          }
          _ = !0;
        }
      for (h(r), k = T; k < t.events.length; )
        t.events[k][1].end = {
          ...L
        }, k++;
      pn(t.events, A + 1, 0, t.events.slice(T)), t.events.length = k;
    }
  }
  function h(v) {
    let E = n.length;
    for (; E-- > v; ) {
      const P = n[E];
      t.containerState = P[1], P[0].exit.call(t, e);
    }
    n.length = v;
  }
  function g() {
    o.write([null]), i = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function mP(e, t, n) {
  return ge(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function sh(e) {
  if (e === null || dt(e) || cP(e))
    return 1;
  if (uP(e))
    return 2;
}
function qd(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const i = e[o].resolveAll;
    i && !r.includes(i) && (t = i(t, n), r.push(i));
  }
  return t;
}
const bc = {
  name: "attention",
  resolveAll: gP,
  tokenize: yP
};
function gP(e, t) {
  let n = -1, r, o, i, l, s, a, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, p = {
            ...e[n][1].start
          };
          ah(f, -a), ah(p, a), l = {
            type: a > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, s = {
            type: a > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: p
          }, i = {
            type: a > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, o = {
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
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = At(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = At(u, [["enter", o, t], ["enter", l, t], ["exit", l, t], ["enter", i, t]]), u = At(u, qd(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = At(u, [["exit", i, t], ["enter", s, t], ["exit", s, t], ["exit", o, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = At(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, pn(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function yP(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = sh(r);
  let i;
  return l;
  function l(a) {
    return i = a, e.enter("attentionSequence"), s(a);
  }
  function s(a) {
    if (a === i)
      return e.consume(a), s;
    const u = e.exit("attentionSequence"), c = sh(a), f = !c || c === 2 && o || n.includes(a), p = !o || o === 2 && c || n.includes(r);
    return u._open = !!(i === 42 ? f : f && (o || !p)), u._close = !!(i === 42 ? p : p && (c || !f)), t(a);
  }
}
function ah(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const vP = {
  name: "autolink",
  tokenize: wP
};
function wP(e, t, n) {
  let r = 0;
  return o;
  function o(d) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
  }
  function i(d) {
    return un(d) ? (e.consume(d), l) : d === 64 ? n(d) : u(d);
  }
  function l(d) {
    return d === 43 || d === 45 || d === 46 || xt(d) ? (r = 1, s(d)) : u(d);
  }
  function s(d) {
    return d === 58 ? (e.consume(d), r = 0, a) : (d === 43 || d === 45 || d === 46 || xt(d)) && r++ < 32 ? (e.consume(d), s) : (r = 0, u(d));
  }
  function a(d) {
    return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || xc(d) ? n(d) : (e.consume(d), a);
  }
  function u(d) {
    return d === 64 ? (e.consume(d), c) : lP(d) ? (e.consume(d), u) : n(d);
  }
  function c(d) {
    return xt(d) ? f(d) : n(d);
  }
  function f(d) {
    return d === 46 ? (e.consume(d), r = 0, c) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(d);
  }
  function p(d) {
    if ((d === 45 || xt(d)) && r++ < 63) {
      const y = d === 45 ? p : f;
      return e.consume(d), y;
    }
    return n(d);
  }
}
const ua = {
  partial: !0,
  tokenize: xP
};
function xP(e, t, n) {
  return r;
  function r(i) {
    return ue(i) ? ge(e, o, "linePrefix")(i) : o(i);
  }
  function o(i) {
    return i === null || X(i) ? t(i) : n(i);
  }
}
const i0 = {
  continuation: {
    tokenize: bP
  },
  exit: kP,
  name: "blockQuote",
  tokenize: SP
};
function SP(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    if (l === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), i;
    }
    return n(l);
  }
  function i(l) {
    return ue(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function bP(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return ue(l) ? ge(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : i(l);
  }
  function i(l) {
    return e.attempt(i0, t, n)(l);
  }
}
function kP(e) {
  e.exit("blockQuote");
}
const l0 = {
  name: "characterEscape",
  tokenize: EP
};
function EP(e, t, n) {
  return r;
  function r(i) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(i), e.exit("escapeMarker"), o;
  }
  function o(i) {
    return aP(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
  }
}
const s0 = {
  name: "characterReference",
  tokenize: CP
};
function CP(e, t, n) {
  const r = this;
  let o = 0, i, l;
  return s;
  function s(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), a;
  }
  function a(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), i = 31, l = xt, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, l = sP, c) : (e.enter("characterReferenceValue"), i = 7, l = Sc, c(f));
  }
  function c(f) {
    if (f === 59 && o) {
      const p = e.exit("characterReferenceValue");
      return l === xt && !Kd(r.sliceSerialize(p)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(f) && o++ < i ? (e.consume(f), c) : n(f);
  }
}
const uh = {
  partial: !0,
  tokenize: TP
}, ch = {
  concrete: !0,
  name: "codeFenced",
  tokenize: PP
};
function PP(e, t, n) {
  const r = this, o = {
    partial: !0,
    tokenize: P
  };
  let i = 0, l = 0, s;
  return a;
  function a(k) {
    return u(k);
  }
  function u(k) {
    const T = r.events[r.events.length - 1];
    return i = T && T[1].type === "linePrefix" ? T[2].sliceSerialize(T[1], !0).length : 0, s = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(k);
  }
  function c(k) {
    return k === s ? (l++, e.consume(k), c) : l < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), ue(k) ? ge(e, f, "whitespace")(k) : f(k));
  }
  function f(k) {
    return k === null || X(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(uh, m, E)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === null || X(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(k)) : ue(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ge(e, d, "whitespace")(k)) : k === 96 && k === s ? n(k) : (e.consume(k), p);
  }
  function d(k) {
    return k === null || X(k) ? f(k) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(k));
  }
  function y(k) {
    return k === null || X(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(k)) : k === 96 && k === s ? n(k) : (e.consume(k), y);
  }
  function m(k) {
    return e.attempt(o, E, x)(k);
  }
  function x(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), h;
  }
  function h(k) {
    return i > 0 && ue(k) ? ge(e, g, "linePrefix", i + 1)(k) : g(k);
  }
  function g(k) {
    return k === null || X(k) ? e.check(uh, m, E)(k) : (e.enter("codeFlowValue"), v(k));
  }
  function v(k) {
    return k === null || X(k) ? (e.exit("codeFlowValue"), g(k)) : (e.consume(k), v);
  }
  function E(k) {
    return e.exit("codeFenced"), t(k);
  }
  function P(k, T, A) {
    let _ = 0;
    return L;
    function L(U) {
      return k.enter("lineEnding"), k.consume(U), k.exit("lineEnding"), D;
    }
    function D(U) {
      return k.enter("codeFencedFence"), ue(U) ? ge(k, I, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : I(U);
    }
    function I(U) {
      return U === s ? (k.enter("codeFencedFenceSequence"), V(U)) : A(U);
    }
    function V(U) {
      return U === s ? (_++, k.consume(U), V) : _ >= l ? (k.exit("codeFencedFenceSequence"), ue(U) ? ge(k, z, "whitespace")(U) : z(U)) : A(U);
    }
    function z(U) {
      return U === null || X(U) ? (k.exit("codeFencedFence"), T(U)) : A(U);
    }
  }
}
function TP(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i);
  }
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const Za = {
  name: "codeIndented",
  tokenize: RP
}, NP = {
  partial: !0,
  tokenize: AP
};
function RP(e, t, n) {
  const r = this;
  return o;
  function o(u) {
    return e.enter("codeIndented"), ge(e, i, "linePrefix", 5)(u);
  }
  function i(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? a(u) : X(u) ? e.attempt(NP, l, a)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || X(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), s);
  }
  function a(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function AP(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ge(e, i, "linePrefix", 5)(l);
  }
  function i(l) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : X(l) ? o(l) : n(l);
  }
}
const _P = {
  name: "codeText",
  previous: OP,
  resolve: IP,
  tokenize: LP
};
function IP(e) {
  let t = e.length - 4, n = 3, r, o;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    o === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (o = r) : (r === t || e[r][1].type === "lineEnding") && (e[o][1].type = "codeTextData", r !== o + 2 && (e[o][1].end = e[r - 1][1].end, e.splice(o + 2, r - o - 2), t -= r - o - 2, r = o + 2), o = void 0);
  return e;
}
function OP(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function LP(e, t, n) {
  let r = 0, o, i;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(f);
  }
  function s(f) {
    return f === 96 ? (e.consume(f), r++, s) : (e.exit("codeTextSequence"), a(f));
  }
  function a(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), a) : f === 96 ? (i = e.enter("codeTextSequence"), o = 0, c(f)) : X(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), a) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || X(f) ? (e.exit("codeTextData"), a(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), o++, c) : o === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (i.type = "codeTextData", u(f));
  }
}
class MP {
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
    const o = n || 0;
    this.setCursor(Math.trunc(t));
    const i = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return r && ai(this.left, r), i.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), ai(this.left, t);
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
    this.setCursor(0), ai(this.right, t.reverse());
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
        ai(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        ai(this.left, n.reverse());
      }
  }
}
function ai(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function a0(e) {
  const t = {};
  let n = -1, r, o, i, l, s, a, u;
  const c = new MP(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, i = 0, i < a.length && a[i][1].type === "lineEndingBlank" && (i += 2), i < a.length && a[i][1].type === "content"))
      for (; ++i < a.length && a[i][1].type !== "content"; )
        a[i][1].type === "chunkText" && (a[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, DP(c, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (i = n, o = void 0; i--; )
        if (l = c.get(i), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (o && (c.get(o)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = i);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      o && (r[1].end = {
        ...c.get(o)[1].start
      }, s = c.slice(o, n), s.unshift(r), c.splice(o, n - o + 1, s));
    }
  }
  return pn(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
}
function DP(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let o = t - 1;
  const i = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const s = l.events, a = [], u = {};
  let c, f, p = -1, d = n, y = 0, m = 0;
  const x = [m];
  for (; d; ) {
    for (; e.get(++o)[1] !== d; )
      ;
    i.push(o), d._tokenizer || (c = r.sliceStream(d), d.next || c.push(null), f && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = d, d = d.next;
  }
  for (d = n; ++p < s.length; )
    // Find a void token that includes a break.
    s[p][0] === "exit" && s[p - 1][0] === "enter" && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (m = p + 1, x.push(m), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (l.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : x.pop(), p = x.length; p--; ) {
    const h = s.slice(x[p], x[p + 1]), g = i.pop();
    a.push([g, g + h.length - 1]), e.splice(g, 2, h);
  }
  for (a.reverse(), p = -1; ++p < a.length; )
    u[y + a[p][0]] = y + a[p][1], y += a[p][1] - a[p][0] - 1;
  return u;
}
const zP = {
  resolve: FP,
  tokenize: BP
}, jP = {
  partial: !0,
  tokenize: $P
};
function FP(e) {
  return a0(e), e;
}
function BP(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(s);
  }
  function o(s) {
    return s === null ? i(s) : X(s) ? e.check(jP, l, i)(s) : (e.consume(s), o);
  }
  function i(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function l(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, o;
  }
}
function $P(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ge(e, i, "linePrefix");
  }
  function i(l) {
    if (l === null || X(l))
      return n(l);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function u0(e, t, n, r, o, i, l, s, a) {
  const u = a || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(h) {
    return h === 60 ? (e.enter(r), e.enter(o), e.enter(i), e.consume(h), e.exit(i), p) : h === null || h === 32 || h === 41 || xc(h) ? n(h) : (e.enter(r), e.enter(l), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), m(h));
  }
  function p(h) {
    return h === 62 ? (e.enter(i), e.consume(h), e.exit(i), e.exit(o), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), d(h));
  }
  function d(h) {
    return h === 62 ? (e.exit("chunkString"), e.exit(s), p(h)) : h === null || h === 60 || X(h) ? n(h) : (e.consume(h), h === 92 ? y : d);
  }
  function y(h) {
    return h === 60 || h === 62 || h === 92 ? (e.consume(h), d) : d(h);
  }
  function m(h) {
    return !c && (h === null || h === 41 || dt(h)) ? (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(h)) : c < u && h === 40 ? (e.consume(h), c++, m) : h === 41 ? (e.consume(h), c--, m) : h === null || h === 32 || h === 40 || xc(h) ? n(h) : (e.consume(h), h === 92 ? x : m);
  }
  function x(h) {
    return h === 40 || h === 41 || h === 92 ? (e.consume(h), m) : m(h);
  }
}
function c0(e, t, n, r, o, i) {
  const l = this;
  let s = 0, a;
  return u;
  function u(d) {
    return e.enter(r), e.enter(o), e.consume(d), e.exit(o), e.enter(i), c;
  }
  function c(d) {
    return s > 999 || d === null || d === 91 || d === 93 && !a || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !s && "_hiddenFootnoteSupport" in l.parser.constructs ? n(d) : d === 93 ? (e.exit(i), e.enter(o), e.consume(d), e.exit(o), e.exit(r), t) : X(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(d));
  }
  function f(d) {
    return d === null || d === 91 || d === 93 || X(d) || s++ > 999 ? (e.exit("chunkString"), c(d)) : (e.consume(d), a || (a = !ue(d)), d === 92 ? p : f);
  }
  function p(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), s++, f) : f(d);
  }
}
function d0(e, t, n, r, o, i) {
  let l;
  return s;
  function s(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(o), e.consume(p), e.exit(o), l = p === 40 ? 41 : p, a) : n(p);
  }
  function a(p) {
    return p === l ? (e.enter(o), e.consume(p), e.exit(o), e.exit(r), t) : (e.enter(i), u(p));
  }
  function u(p) {
    return p === l ? (e.exit(i), a(l)) : p === null ? n(p) : X(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), ge(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(p));
  }
  function c(p) {
    return p === l || p === null || X(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? f : c);
  }
  function f(p) {
    return p === l || p === 92 ? (e.consume(p), c) : c(p);
  }
}
function Pi(e, t) {
  let n;
  return r;
  function r(o) {
    return X(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n = !0, r) : ue(o) ? ge(e, r, n ? "linePrefix" : "lineSuffix")(o) : t(o);
  }
}
const UP = {
  name: "definition",
  tokenize: VP
}, HP = {
  partial: !0,
  tokenize: WP
};
function VP(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(d) {
    return e.enter("definition"), l(d);
  }
  function l(d) {
    return c0.call(
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
    return o = So(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), a) : n(d);
  }
  function a(d) {
    return dt(d) ? Pi(e, u)(d) : u(d);
  }
  function u(d) {
    return u0(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function c(d) {
    return e.attempt(HP, f, f)(d);
  }
  function f(d) {
    return ue(d) ? ge(e, p, "whitespace")(d) : p(d);
  }
  function p(d) {
    return d === null || X(d) ? (e.exit("definition"), r.parser.defined.push(o), t(d)) : n(d);
  }
}
function WP(e, t, n) {
  return r;
  function r(s) {
    return dt(s) ? Pi(e, o)(s) : n(s);
  }
  function o(s) {
    return d0(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function i(s) {
    return ue(s) ? ge(e, l, "whitespace")(s) : l(s);
  }
  function l(s) {
    return s === null || X(s) ? t(s) : n(s);
  }
}
const QP = {
  name: "hardBreakEscape",
  tokenize: YP
};
function YP(e, t, n) {
  return r;
  function r(i) {
    return e.enter("hardBreakEscape"), e.consume(i), o;
  }
  function o(i) {
    return X(i) ? (e.exit("hardBreakEscape"), t(i)) : n(i);
  }
}
const KP = {
  name: "headingAtx",
  resolve: qP,
  tokenize: XP
};
function qP(e, t) {
  let n = e.length - 2, r = 3, o, i;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (o = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, i = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, pn(e, r, n - r + 1, [["enter", o, t], ["enter", i, t], ["exit", i, t], ["exit", o, t]])), e;
}
function XP(e, t, n) {
  let r = 0;
  return o;
  function o(c) {
    return e.enter("atxHeading"), i(c);
  }
  function i(c) {
    return e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), l) : c === null || dt(c) ? (e.exit("atxHeadingSequence"), s(c)) : n(c);
  }
  function s(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), a(c)) : c === null || X(c) ? (e.exit("atxHeading"), t(c)) : ue(c) ? ge(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function a(c) {
    return c === 35 ? (e.consume(c), a) : (e.exit("atxHeadingSequence"), s(c));
  }
  function u(c) {
    return c === null || c === 35 || dt(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), u);
  }
}
const GP = [
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
], dh = ["pre", "script", "style", "textarea"], ZP = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: tT,
  tokenize: nT
}, JP = {
  partial: !0,
  tokenize: oT
}, eT = {
  partial: !0,
  tokenize: rT
};
function tT(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function nT(e, t, n) {
  const r = this;
  let o, i, l, s, a;
  return u;
  function u(b) {
    return c(b);
  }
  function c(b) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(b), f;
  }
  function f(b) {
    return b === 33 ? (e.consume(b), p) : b === 47 ? (e.consume(b), i = !0, m) : b === 63 ? (e.consume(b), o = 3, r.interrupt ? t : w) : un(b) ? (e.consume(b), l = String.fromCharCode(b), x) : n(b);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), o = 2, d) : b === 91 ? (e.consume(b), o = 5, s = 0, y) : un(b) ? (e.consume(b), o = 4, r.interrupt ? t : w) : n(b);
  }
  function d(b) {
    return b === 45 ? (e.consume(b), r.interrupt ? t : w) : n(b);
  }
  function y(b) {
    const q = "CDATA[";
    return b === q.charCodeAt(s++) ? (e.consume(b), s === q.length ? r.interrupt ? t : I : y) : n(b);
  }
  function m(b) {
    return un(b) ? (e.consume(b), l = String.fromCharCode(b), x) : n(b);
  }
  function x(b) {
    if (b === null || b === 47 || b === 62 || dt(b)) {
      const q = b === 47, de = l.toLowerCase();
      return !q && !i && dh.includes(de) ? (o = 1, r.interrupt ? t(b) : I(b)) : GP.includes(l.toLowerCase()) ? (o = 6, q ? (e.consume(b), h) : r.interrupt ? t(b) : I(b)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(b) : i ? g(b) : v(b));
    }
    return b === 45 || xt(b) ? (e.consume(b), l += String.fromCharCode(b), x) : n(b);
  }
  function h(b) {
    return b === 62 ? (e.consume(b), r.interrupt ? t : I) : n(b);
  }
  function g(b) {
    return ue(b) ? (e.consume(b), g) : L(b);
  }
  function v(b) {
    return b === 47 ? (e.consume(b), L) : b === 58 || b === 95 || un(b) ? (e.consume(b), E) : ue(b) ? (e.consume(b), v) : L(b);
  }
  function E(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || xt(b) ? (e.consume(b), E) : P(b);
  }
  function P(b) {
    return b === 61 ? (e.consume(b), k) : ue(b) ? (e.consume(b), P) : v(b);
  }
  function k(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), a = b, T) : ue(b) ? (e.consume(b), k) : A(b);
  }
  function T(b) {
    return b === a ? (e.consume(b), a = null, _) : b === null || X(b) ? n(b) : (e.consume(b), T);
  }
  function A(b) {
    return b === null || b === 34 || b === 39 || b === 47 || b === 60 || b === 61 || b === 62 || b === 96 || dt(b) ? P(b) : (e.consume(b), A);
  }
  function _(b) {
    return b === 47 || b === 62 || ue(b) ? v(b) : n(b);
  }
  function L(b) {
    return b === 62 ? (e.consume(b), D) : n(b);
  }
  function D(b) {
    return b === null || X(b) ? I(b) : ue(b) ? (e.consume(b), D) : n(b);
  }
  function I(b) {
    return b === 45 && o === 2 ? (e.consume(b), W) : b === 60 && o === 1 ? (e.consume(b), Y) : b === 62 && o === 4 ? (e.consume(b), K) : b === 63 && o === 3 ? (e.consume(b), w) : b === 93 && o === 5 ? (e.consume(b), M) : X(b) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check(JP, Q, V)(b)) : b === null || X(b) ? (e.exit("htmlFlowData"), V(b)) : (e.consume(b), I);
  }
  function V(b) {
    return e.check(eT, z, Q)(b);
  }
  function z(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), U;
  }
  function U(b) {
    return b === null || X(b) ? V(b) : (e.enter("htmlFlowData"), I(b));
  }
  function W(b) {
    return b === 45 ? (e.consume(b), w) : I(b);
  }
  function Y(b) {
    return b === 47 ? (e.consume(b), l = "", R) : I(b);
  }
  function R(b) {
    if (b === 62) {
      const q = l.toLowerCase();
      return dh.includes(q) ? (e.consume(b), K) : I(b);
    }
    return un(b) && l.length < 8 ? (e.consume(b), l += String.fromCharCode(b), R) : I(b);
  }
  function M(b) {
    return b === 93 ? (e.consume(b), w) : I(b);
  }
  function w(b) {
    return b === 62 ? (e.consume(b), K) : b === 45 && o === 2 ? (e.consume(b), w) : I(b);
  }
  function K(b) {
    return b === null || X(b) ? (e.exit("htmlFlowData"), Q(b)) : (e.consume(b), K);
  }
  function Q(b) {
    return e.exit("htmlFlow"), t(b);
  }
}
function rT(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : n(l);
  }
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function oT(e, t, n) {
  return r;
  function r(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(ua, t, n);
  }
}
const iT = {
  name: "htmlText",
  tokenize: lT
};
function lT(e, t, n) {
  const r = this;
  let o, i, l;
  return s;
  function s(w) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), a;
  }
  function a(w) {
    return w === 33 ? (e.consume(w), u) : w === 47 ? (e.consume(w), P) : w === 63 ? (e.consume(w), v) : un(w) ? (e.consume(w), A) : n(w);
  }
  function u(w) {
    return w === 45 ? (e.consume(w), c) : w === 91 ? (e.consume(w), i = 0, y) : un(w) ? (e.consume(w), g) : n(w);
  }
  function c(w) {
    return w === 45 ? (e.consume(w), d) : n(w);
  }
  function f(w) {
    return w === null ? n(w) : w === 45 ? (e.consume(w), p) : X(w) ? (l = f, Y(w)) : (e.consume(w), f);
  }
  function p(w) {
    return w === 45 ? (e.consume(w), d) : f(w);
  }
  function d(w) {
    return w === 62 ? W(w) : w === 45 ? p(w) : f(w);
  }
  function y(w) {
    const K = "CDATA[";
    return w === K.charCodeAt(i++) ? (e.consume(w), i === K.length ? m : y) : n(w);
  }
  function m(w) {
    return w === null ? n(w) : w === 93 ? (e.consume(w), x) : X(w) ? (l = m, Y(w)) : (e.consume(w), m);
  }
  function x(w) {
    return w === 93 ? (e.consume(w), h) : m(w);
  }
  function h(w) {
    return w === 62 ? W(w) : w === 93 ? (e.consume(w), h) : m(w);
  }
  function g(w) {
    return w === null || w === 62 ? W(w) : X(w) ? (l = g, Y(w)) : (e.consume(w), g);
  }
  function v(w) {
    return w === null ? n(w) : w === 63 ? (e.consume(w), E) : X(w) ? (l = v, Y(w)) : (e.consume(w), v);
  }
  function E(w) {
    return w === 62 ? W(w) : v(w);
  }
  function P(w) {
    return un(w) ? (e.consume(w), k) : n(w);
  }
  function k(w) {
    return w === 45 || xt(w) ? (e.consume(w), k) : T(w);
  }
  function T(w) {
    return X(w) ? (l = T, Y(w)) : ue(w) ? (e.consume(w), T) : W(w);
  }
  function A(w) {
    return w === 45 || xt(w) ? (e.consume(w), A) : w === 47 || w === 62 || dt(w) ? _(w) : n(w);
  }
  function _(w) {
    return w === 47 ? (e.consume(w), W) : w === 58 || w === 95 || un(w) ? (e.consume(w), L) : X(w) ? (l = _, Y(w)) : ue(w) ? (e.consume(w), _) : W(w);
  }
  function L(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || xt(w) ? (e.consume(w), L) : D(w);
  }
  function D(w) {
    return w === 61 ? (e.consume(w), I) : X(w) ? (l = D, Y(w)) : ue(w) ? (e.consume(w), D) : _(w);
  }
  function I(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? n(w) : w === 34 || w === 39 ? (e.consume(w), o = w, V) : X(w) ? (l = I, Y(w)) : ue(w) ? (e.consume(w), I) : (e.consume(w), z);
  }
  function V(w) {
    return w === o ? (e.consume(w), o = void 0, U) : w === null ? n(w) : X(w) ? (l = V, Y(w)) : (e.consume(w), V);
  }
  function z(w) {
    return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? n(w) : w === 47 || w === 62 || dt(w) ? _(w) : (e.consume(w), z);
  }
  function U(w) {
    return w === 47 || w === 62 || dt(w) ? _(w) : n(w);
  }
  function W(w) {
    return w === 62 ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(w);
  }
  function Y(w) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), R;
  }
  function R(w) {
    return ue(w) ? ge(e, M, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : M(w);
  }
  function M(w) {
    return e.enter("htmlTextData"), l(w);
  }
}
const Xd = {
  name: "labelEnd",
  resolveAll: cT,
  resolveTo: dT,
  tokenize: fT
}, sT = {
  tokenize: pT
}, aT = {
  tokenize: hT
}, uT = {
  tokenize: mT
};
function cT(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const o = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += o;
    }
  }
  return e.length !== n.length && pn(e, 0, e.length, n), e;
}
function dT(e, t) {
  let n = e.length, r = 0, o, i, l, s;
  for (; n--; )
    if (o = e[n][1], i) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      e[n][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (i = n, o.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else o.type === "labelEnd" && (l = n);
  const a = {
    type: e[i][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[i][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[i][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[i + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return s = [["enter", a, t], ["enter", u, t]], s = At(s, e.slice(i + 1, i + r + 3)), s = At(s, [["enter", c, t]]), s = At(s, qd(t.parser.constructs.insideSpan.null, e.slice(i + r + 4, l - 3), t)), s = At(s, [["exit", c, t], e[l - 2], e[l - 1], ["exit", u, t]]), s = At(s, e.slice(l + 1)), s = At(s, [["exit", a, t]]), pn(e, i, e.length, s), e;
}
function fT(e, t, n) {
  const r = this;
  let o = r.events.length, i, l;
  for (; o--; )
    if ((r.events[o][1].type === "labelImage" || r.events[o][1].type === "labelLink") && !r.events[o][1]._balanced) {
      i = r.events[o][1];
      break;
    }
  return s;
  function s(p) {
    return i ? i._inactive ? f(p) : (l = r.parser.defined.includes(So(r.sliceSerialize({
      start: i.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(p);
  }
  function a(p) {
    return p === 40 ? e.attempt(sT, c, l ? c : f)(p) : p === 91 ? e.attempt(aT, c, l ? u : f)(p) : l ? c(p) : f(p);
  }
  function u(p) {
    return e.attempt(uT, c, f)(p);
  }
  function c(p) {
    return t(p);
  }
  function f(p) {
    return i._balanced = !0, n(p);
  }
}
function pT(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), o;
  }
  function o(f) {
    return dt(f) ? Pi(e, i)(f) : i(f);
  }
  function i(f) {
    return f === 41 ? c(f) : u0(e, l, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function l(f) {
    return dt(f) ? Pi(e, a)(f) : c(f);
  }
  function s(f) {
    return n(f);
  }
  function a(f) {
    return f === 34 || f === 39 || f === 40 ? d0(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function u(f) {
    return dt(f) ? Pi(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function hT(e, t, n) {
  const r = this;
  return o;
  function o(s) {
    return c0.call(r, e, i, l, "reference", "referenceMarker", "referenceString")(s);
  }
  function i(s) {
    return r.parser.defined.includes(So(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s);
  }
  function l(s) {
    return n(s);
  }
}
function mT(e, t, n) {
  return r;
  function r(i) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), o;
  }
  function o(i) {
    return i === 93 ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i);
  }
}
const gT = {
  name: "labelStartImage",
  resolveAll: Xd.resolveAll,
  tokenize: yT
};
function yT(e, t, n) {
  const r = this;
  return o;
  function o(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), i;
  }
  function i(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), l) : n(s);
  }
  function l(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const vT = {
  name: "labelStartLink",
  resolveAll: Xd.resolveAll,
  tokenize: wT
};
function wT(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), i;
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Ja = {
  name: "lineEnding",
  tokenize: xT
};
function xT(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
}
const Gl = {
  name: "thematicBreak",
  tokenize: ST
};
function ST(e, t, n) {
  let r = 0, o;
  return i;
  function i(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return o = u, s(u);
  }
  function s(u) {
    return u === o ? (e.enter("thematicBreakSequence"), a(u)) : r >= 3 && (u === null || X(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function a(u) {
    return u === o ? (e.consume(u), r++, a) : (e.exit("thematicBreakSequence"), ue(u) ? ge(e, s, "whitespace")(u) : s(u));
  }
}
const ot = {
  continuation: {
    tokenize: CT
  },
  exit: TT,
  name: "list",
  tokenize: ET
}, bT = {
  partial: !0,
  tokenize: NT
}, kT = {
  partial: !0,
  tokenize: PT
};
function ET(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let i = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return s;
  function s(d) {
    const y = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : Sc(d)) {
      if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(Gl, n, u)(d) : u(d);
      if (!r.interrupt || d === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), a(d);
    }
    return n(d);
  }
  function a(d) {
    return Sc(d) && ++l < 10 ? (e.consume(d), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), u(d)) : n(d);
  }
  function u(d) {
    return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, e.check(
      ua,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(bT, p, f)
    );
  }
  function c(d) {
    return r.containerState.initialBlankLine = !0, i++, p(d);
  }
  function f(d) {
    return ue(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), p) : n(d);
  }
  function p(d) {
    return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(d);
  }
}
function CT(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(ua, o, i);
  function o(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ge(e, t, "listItemIndent", r.containerState.size + 1)(s);
  }
  function i(s) {
    return r.containerState.furtherBlankLines || !ue(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(kT, t, l)(s));
  }
  function l(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ge(e, e.attempt(ot, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function PT(e, t, n) {
  const r = this;
  return ge(e, o, "listItemIndent", r.containerState.size + 1);
  function o(i) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(i) : n(i);
  }
}
function TT(e) {
  e.exit(this.containerState.type);
}
function NT(e, t, n) {
  const r = this;
  return ge(e, o, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(i) {
    const l = r.events[r.events.length - 1];
    return !ue(i) && l && l[1].type === "listItemPrefixWhitespace" ? t(i) : n(i);
  }
}
const fh = {
  name: "setextUnderline",
  resolveTo: RT,
  tokenize: AT
};
function RT(e, t) {
  let n = e.length, r, o, i;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (o = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !i && e[n][1].type === "definition" && (i = n);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[o][1].type = "setextHeadingText", i ? (e.splice(o, 0, ["enter", l, t]), e.splice(i + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[i][1].end
  }) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function AT(e, t, n) {
  const r = this;
  let o;
  return i;
  function i(u) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), o = u, l(u)) : n(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), s(u);
  }
  function s(u) {
    return u === o ? (e.consume(u), s) : (e.exit("setextHeadingLineSequence"), ue(u) ? ge(e, a, "lineSuffix")(u) : a(u));
  }
  function a(u) {
    return u === null || X(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const _T = {
  tokenize: IT
};
function IT(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    ua,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, o, ge(e, e.attempt(this.parser.constructs.flow, o, e.attempt(zP, o)), "linePrefix"))
  );
  return n;
  function r(i) {
    if (i === null) {
      e.consume(i);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function o(i) {
    if (i === null) {
      e.consume(i);
      return;
    }
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const OT = {
  resolveAll: p0()
}, LT = f0("string"), MT = f0("text");
function f0(e) {
  return {
    resolveAll: p0(e === "text" ? DT : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, o = this.parser.constructs[e], i = n.attempt(o, l, s);
    return l;
    function l(c) {
      return u(c) ? i(c) : s(c);
    }
    function s(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), a;
    }
    function a(c) {
      return u(c) ? (n.exit("data"), i(c)) : (n.consume(c), a);
    }
    function u(c) {
      if (c === null)
        return !0;
      const f = o[c];
      let p = -1;
      if (f)
        for (; ++p < f.length; ) {
          const d = f[p];
          if (!d.previous || d.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function p0(e) {
  return t;
  function t(n, r) {
    let o = -1, i;
    for (; ++o <= n.length; )
      i === void 0 ? n[o] && n[o][1].type === "data" && (i = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== i + 2 && (n[i][1].end = n[o - 1][1].end, n.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
    return e ? e(n, r) : n;
  }
}
function DT(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], o = t.sliceStream(r);
      let i = o.length, l = -1, s = 0, a;
      for (; i--; ) {
        const u = o[i];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            s++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2)
          a = !0, s++;
        else if (u !== -1) {
          i++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
        const u = {
          type: n === e.length || a || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: i ? l : r.start._bufferIndex + l,
            _index: r.start._index + i,
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
const zT = {
  42: ot,
  43: ot,
  45: ot,
  48: ot,
  49: ot,
  50: ot,
  51: ot,
  52: ot,
  53: ot,
  54: ot,
  55: ot,
  56: ot,
  57: ot,
  62: i0
}, jT = {
  91: UP
}, FT = {
  [-2]: Za,
  [-1]: Za,
  32: Za
}, BT = {
  35: KP,
  42: Gl,
  45: [fh, Gl],
  60: ZP,
  61: fh,
  95: Gl,
  96: ch,
  126: ch
}, $T = {
  38: s0,
  92: l0
}, UT = {
  [-5]: Ja,
  [-4]: Ja,
  [-3]: Ja,
  33: gT,
  38: s0,
  42: bc,
  60: [vP, iT],
  91: vT,
  92: [QP, l0],
  93: Xd,
  95: bc,
  96: _P
}, HT = {
  null: [bc, OT]
}, VT = {
  null: [42, 95]
}, WT = {
  null: []
}, QT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: VT,
  contentInitial: jT,
  disable: WT,
  document: zT,
  flow: BT,
  flowInitial: FT,
  insideSpan: HT,
  string: $T,
  text: UT
}, Symbol.toStringTag, { value: "Module" }));
function YT(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const o = {}, i = [];
  let l = [], s = [];
  const a = {
    attempt: T(P),
    check: T(k),
    consume: g,
    enter: v,
    exit: E,
    interrupt: T(k, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: m,
    events: [],
    now: y,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: d,
    write: f
  };
  let c = t.tokenize.call(u, a);
  return t.resolveAll && i.push(t), u;
  function f(D) {
    return l = At(l, D), x(), l[l.length - 1] !== null ? [] : (A(t, 0), u.events = qd(i, u.events, u), u.events);
  }
  function p(D, I) {
    return qT(d(D), I);
  }
  function d(D) {
    return KT(l, D);
  }
  function y() {
    const {
      _bufferIndex: D,
      _index: I,
      line: V,
      column: z,
      offset: U
    } = r;
    return {
      _bufferIndex: D,
      _index: I,
      line: V,
      column: z,
      offset: U
    };
  }
  function m(D) {
    o[D.line] = D.column, L();
  }
  function x() {
    let D;
    for (; r._index < l.length; ) {
      const I = l[r._index];
      if (typeof I == "string")
        for (D = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === D && r._bufferIndex < I.length; )
          h(I.charCodeAt(r._bufferIndex));
      else
        h(I);
    }
  }
  function h(D) {
    c = c(D);
  }
  function g(D) {
    X(D) ? (r.line++, r.column = 1, r.offset += D === -3 ? 2 : 1, L()) : D !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = D;
  }
  function v(D, I) {
    const V = I || {};
    return V.type = D, V.start = y(), u.events.push(["enter", V, u]), s.push(V), V;
  }
  function E(D) {
    const I = s.pop();
    return I.end = y(), u.events.push(["exit", I, u]), I;
  }
  function P(D, I) {
    A(D, I.from);
  }
  function k(D, I) {
    I.restore();
  }
  function T(D, I) {
    return V;
    function V(z, U, W) {
      let Y, R, M, w;
      return Array.isArray(z) ? (
        /* c8 ignore next 1 */
        Q(z)
      ) : "tokenize" in z ? (
        // Looks like a construct.
        Q([
          /** @type {Construct} */
          z
        ])
      ) : K(z);
      function K(ie) {
        return oe;
        function oe(Ke) {
          const qe = Ke !== null && ie[Ke], rt = Ke !== null && ie.null, pt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(qe) ? qe : qe ? [qe] : [],
            ...Array.isArray(rt) ? rt : rt ? [rt] : []
          ];
          return Q(pt)(Ke);
        }
      }
      function Q(ie) {
        return Y = ie, R = 0, ie.length === 0 ? W : b(ie[R]);
      }
      function b(ie) {
        return oe;
        function oe(Ke) {
          return w = _(), M = ie, ie.partial || (u.currentConstruct = ie), ie.name && u.parser.constructs.disable.null.includes(ie.name) ? de() : ie.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            I ? Object.assign(Object.create(u), I) : u,
            a,
            q,
            de
          )(Ke);
        }
      }
      function q(ie) {
        return D(M, w), U;
      }
      function de(ie) {
        return w.restore(), ++R < Y.length ? b(Y[R]) : W;
      }
    }
  }
  function A(D, I) {
    D.resolveAll && !i.includes(D) && i.push(D), D.resolve && pn(u.events, I, u.events.length - I, D.resolve(u.events.slice(I), u)), D.resolveTo && (u.events = D.resolveTo(u.events, u));
  }
  function _() {
    const D = y(), I = u.previous, V = u.currentConstruct, z = u.events.length, U = Array.from(s);
    return {
      from: z,
      restore: W
    };
    function W() {
      r = D, u.previous = I, u.currentConstruct = V, u.events.length = z, s = U, L();
    }
  }
  function L() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function KT(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex;
  let l;
  if (n === o)
    l = [e[n].slice(r, i)];
  else {
    if (l = e.slice(n, o), r > -1) {
      const s = l[0];
      typeof s == "string" ? l[0] = s.slice(r) : l.shift();
    }
    i > 0 && l.push(e[o].slice(0, i));
  }
  return l;
}
function qT(e, t) {
  let n = -1;
  const r = [];
  let o;
  for (; ++n < e.length; ) {
    const i = e[n];
    let l;
    if (typeof i == "string")
      l = i;
    else switch (i) {
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
        if (!t && o) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(i);
    }
    o = i === -2, r.push(l);
  }
  return r.join("");
}
function XT(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      rP([QT, ...(e || {}).extensions || []])
    ),
    content: o(dP),
    defined: [],
    document: o(pP),
    flow: o(_T),
    lazy: {},
    string: o(LT),
    text: o(MT)
  };
  return r;
  function o(i) {
    return l;
    function l(s) {
      return YT(r, i, s);
    }
  }
}
function GT(e) {
  for (; !a0(e); )
    ;
  return e;
}
const ph = /[\0\t\n\r]/g;
function ZT() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(i, l, s) {
    const a = [];
    let u, c, f, p, d;
    for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(l || void 0).decode(i)), f = 0, t = "", n && (i.charCodeAt(0) === 65279 && f++, n = void 0); f < i.length; ) {
      if (ph.lastIndex = f, u = ph.exec(i), p = u && u.index !== void 0 ? u.index : i.length, d = i.charCodeAt(p), !u) {
        t = i.slice(f);
        break;
      }
      if (d === 10 && f === p && r)
        a.push(-3), r = void 0;
      else
        switch (r && (a.push(-5), r = void 0), f < p && (a.push(i.slice(f, p)), e += p - f), d) {
          case 0: {
            a.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, a.push(-2); e++ < c; ) a.push(-1);
            break;
          }
          case 10: {
            a.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = p + 1;
    }
    return s && (r && a.push(-5), t && a.push(t), a.push(null)), a;
  }
}
const JT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function e2(e) {
  return e.replace(JT, t2);
}
function t2(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), i = o === 120 || o === 88;
    return o0(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return Kd(n) || e;
}
const h0 = {}.hasOwnProperty;
function n2(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), r2(n)(GT(XT(n).document().write(ZT()(e, t, !0))));
}
function r2(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: i(gn),
      autolinkProtocol: _,
      autolinkEmail: _,
      atxHeading: i(qr),
      blockQuote: i(rt),
      characterEscape: _,
      characterReference: _,
      codeFenced: i(pt),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: i(pt, l),
      codeText: i(Ln, l),
      codeTextData: _,
      data: _,
      codeFlowValue: _,
      definition: i(Jt),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: i(Kr),
      hardBreakEscape: i(xr),
      hardBreakTrailing: i(xr),
      htmlFlow: i(Xr, l),
      htmlFlowData: _,
      htmlText: i(Xr, l),
      htmlTextData: _,
      image: i(Sr),
      label: l,
      link: i(gn),
      listItem: i(br),
      listItemValue: p,
      listOrdered: i(Go, f),
      listUnordered: i(Go),
      paragraph: i(ul),
      reference: b,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: i(qr),
      strong: i(yn),
      thematicBreak: i(pa)
    },
    exit: {
      atxHeading: a(),
      atxHeadingSequence: P,
      autolink: a(),
      autolinkEmail: qe,
      autolinkProtocol: Ke,
      blockQuote: a(),
      characterEscapeValue: L,
      characterReferenceMarkerHexadecimal: de,
      characterReferenceMarkerNumeric: de,
      characterReferenceValue: ie,
      characterReference: oe,
      codeFenced: a(x),
      codeFencedFence: m,
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: y,
      codeFlowValue: L,
      codeIndented: a(h),
      codeText: a(U),
      codeTextData: L,
      data: L,
      definition: a(),
      definitionDestinationString: E,
      definitionLabelString: g,
      definitionTitleString: v,
      emphasis: a(),
      hardBreakEscape: a(I),
      hardBreakTrailing: a(I),
      htmlFlow: a(V),
      htmlFlowData: L,
      htmlText: a(z),
      htmlTextData: L,
      image: a(Y),
      label: M,
      labelText: R,
      lineEnding: D,
      link: a(W),
      listItem: a(),
      listOrdered: a(),
      listUnordered: a(),
      paragraph: a(),
      referenceString: q,
      resourceDestinationString: w,
      resourceTitleString: K,
      resource: Q,
      setextHeading: a(A),
      setextHeadingLineSequence: T,
      setextHeadingText: k,
      strong: a(),
      thematicBreak: a()
    }
  };
  m0(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(N) {
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
      resume: c,
      data: n
    }, ne = [];
    let se = -1;
    for (; ++se < N.length; )
      if (N[se][1].type === "listOrdered" || N[se][1].type === "listUnordered")
        if (N[se][0] === "enter")
          ne.push(se);
        else {
          const ht = ne.pop();
          se = o(N, ht, se);
        }
    for (se = -1; ++se < N.length; ) {
      const ht = t[N[se][0]];
      h0.call(ht, N[se][1].type) && ht[N[se][1].type].call(Object.assign({
        sliceSerialize: N[se][2].sliceSerialize
      }, G), N[se][1]);
    }
    if (G.tokenStack.length > 0) {
      const ht = G.tokenStack[G.tokenStack.length - 1];
      (ht[1] || hh).call(G, void 0, ht[0]);
    }
    for (B.position = {
      start: Hn(N.length > 0 ? N[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Hn(N.length > 0 ? N[N.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, se = -1; ++se < t.transforms.length; )
      B = t.transforms[se](B) || B;
    return B;
  }
  function o(N, B, G) {
    let ne = B - 1, se = -1, ht = !1, en, mt, Pt, Mn;
    for (; ++ne <= G; ) {
      const Re = N[ne];
      switch (Re[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Re[0] === "enter" ? se++ : se--, Mn = void 0;
          break;
        }
        case "lineEndingBlank": {
          Re[0] === "enter" && (en && !Mn && !se && !Pt && (Pt = ne), Mn = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Mn = void 0;
      }
      if (!se && Re[0] === "enter" && Re[1].type === "listItemPrefix" || se === -1 && Re[0] === "exit" && (Re[1].type === "listUnordered" || Re[1].type === "listOrdered")) {
        if (en) {
          let Dn = ne;
          for (mt = void 0; Dn--; ) {
            const Dt = N[Dn];
            if (Dt[1].type === "lineEnding" || Dt[1].type === "lineEndingBlank") {
              if (Dt[0] === "exit") continue;
              mt && (N[mt][1].type = "lineEndingBlank", ht = !0), Dt[1].type = "lineEnding", mt = Dn;
            } else if (!(Dt[1].type === "linePrefix" || Dt[1].type === "blockQuotePrefix" || Dt[1].type === "blockQuotePrefixWhitespace" || Dt[1].type === "blockQuoteMarker" || Dt[1].type === "listItemIndent")) break;
          }
          Pt && (!mt || Pt < mt) && (en._spread = !0), en.end = Object.assign({}, mt ? N[mt][1].start : Re[1].end), N.splice(mt || ne, 0, ["exit", en, Re[2]]), ne++, G++;
        }
        if (Re[1].type === "listItemPrefix") {
          const Dn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Re[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          en = Dn, N.splice(ne, 0, ["enter", Dn, Re[2]]), ne++, G++, Pt = void 0, Mn = !0;
        }
      }
    }
    return N[B][1]._spread = ht, G;
  }
  function i(N, B) {
    return G;
    function G(ne) {
      s.call(this, N(ne), ne), B && B.call(this, ne);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(N, B, G) {
    this.stack[this.stack.length - 1].children.push(N), this.stack.push(N), this.tokenStack.push([B, G || void 0]), N.position = {
      start: Hn(B.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function a(N) {
    return B;
    function B(G) {
      N && N.call(this, G), u.call(this, G);
    }
  }
  function u(N, B) {
    const G = this.stack.pop(), ne = this.tokenStack.pop();
    if (ne)
      ne[0].type !== N.type && (B ? B.call(this, N, ne[0]) : (ne[1] || hh).call(this, N, ne[0]));
    else throw new Error("Cannot close `" + N.type + "` (" + Ci({
      start: N.start,
      end: N.end
    }) + "): it’s not open");
    G.position.end = Hn(N.end);
  }
  function c() {
    return tP(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(N) {
    if (this.data.expectingFirstListItemValue) {
      const B = this.stack[this.stack.length - 2];
      B.start = Number.parseInt(this.sliceSerialize(N), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function d() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.lang = N;
  }
  function y() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.meta = N;
  }
  function m() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function x() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function h() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = N.replace(/(\r?\n|\r)$/g, "");
  }
  function g(N) {
    const B = this.resume(), G = this.stack[this.stack.length - 1];
    G.label = B, G.identifier = So(this.sliceSerialize(N)).toLowerCase();
  }
  function v() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.title = N;
  }
  function E() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.url = N;
  }
  function P(N) {
    const B = this.stack[this.stack.length - 1];
    if (!B.depth) {
      const G = this.sliceSerialize(N).length;
      B.depth = G;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function T(N) {
    const B = this.stack[this.stack.length - 1];
    B.depth = this.sliceSerialize(N).codePointAt(0) === 61 ? 1 : 2;
  }
  function A() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function _(N) {
    const G = this.stack[this.stack.length - 1].children;
    let ne = G[G.length - 1];
    (!ne || ne.type !== "text") && (ne = fa(), ne.position = {
      start: Hn(N.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, G.push(ne)), this.stack.push(ne);
  }
  function L(N) {
    const B = this.stack.pop();
    B.value += this.sliceSerialize(N), B.position.end = Hn(N.end);
  }
  function D(N) {
    const B = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const G = B.children[B.children.length - 1];
      G.position.end = Hn(N.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(B.type) && (_.call(this, N), L.call(this, N));
  }
  function I() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = N;
  }
  function z() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = N;
  }
  function U() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.value = N;
  }
  function W() {
    const N = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const B = this.data.referenceType || "shortcut";
      N.type += "Reference", N.referenceType = B, delete N.url, delete N.title;
    } else
      delete N.identifier, delete N.label;
    this.data.referenceType = void 0;
  }
  function Y() {
    const N = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const B = this.data.referenceType || "shortcut";
      N.type += "Reference", N.referenceType = B, delete N.url, delete N.title;
    } else
      delete N.identifier, delete N.label;
    this.data.referenceType = void 0;
  }
  function R(N) {
    const B = this.sliceSerialize(N), G = this.stack[this.stack.length - 2];
    G.label = e2(B), G.identifier = So(B).toLowerCase();
  }
  function M() {
    const N = this.stack[this.stack.length - 1], B = this.resume(), G = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, G.type === "link") {
      const ne = N.children;
      G.children = ne;
    } else
      G.alt = B;
  }
  function w() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.url = N;
  }
  function K() {
    const N = this.resume(), B = this.stack[this.stack.length - 1];
    B.title = N;
  }
  function Q() {
    this.data.inReference = void 0;
  }
  function b() {
    this.data.referenceType = "collapsed";
  }
  function q(N) {
    const B = this.resume(), G = this.stack[this.stack.length - 1];
    G.label = B, G.identifier = So(this.sliceSerialize(N)).toLowerCase(), this.data.referenceType = "full";
  }
  function de(N) {
    this.data.characterReferenceType = N.type;
  }
  function ie(N) {
    const B = this.sliceSerialize(N), G = this.data.characterReferenceType;
    let ne;
    G ? (ne = o0(B, G === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ne = Kd(B);
    const se = this.stack[this.stack.length - 1];
    se.value += ne;
  }
  function oe(N) {
    const B = this.stack.pop();
    B.position.end = Hn(N.end);
  }
  function Ke(N) {
    L.call(this, N);
    const B = this.stack[this.stack.length - 1];
    B.url = this.sliceSerialize(N);
  }
  function qe(N) {
    L.call(this, N);
    const B = this.stack[this.stack.length - 1];
    B.url = "mailto:" + this.sliceSerialize(N);
  }
  function rt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function pt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Ln() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Jt() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Kr() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function qr() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function xr() {
    return {
      type: "break"
    };
  }
  function Xr() {
    return {
      type: "html",
      value: ""
    };
  }
  function Sr() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function gn() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Go(N) {
    return {
      type: "list",
      ordered: N.type === "listOrdered",
      start: null,
      spread: N._spread,
      children: []
    };
  }
  function br(N) {
    return {
      type: "listItem",
      spread: N._spread,
      checked: null,
      children: []
    };
  }
  function ul() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function yn() {
    return {
      type: "strong",
      children: []
    };
  }
  function fa() {
    return {
      type: "text",
      value: ""
    };
  }
  function pa() {
    return {
      type: "thematicBreak"
    };
  }
}
function Hn(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function m0(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? m0(e, r) : o2(e, r);
  }
}
function o2(e, t) {
  let n;
  for (n in t)
    if (h0.call(t, n))
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
function hh(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Ci({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Ci({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Ci({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function i2(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return n2(r, {
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
function l2(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function s2(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function a2(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, o = t.lang ? t.lang.split(/\s+/) : [];
  o.length > 0 && (r.className = ["language-" + o[0]]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function u2(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function c2(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function d2(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), o = Xo(r.toLowerCase()), i = e.footnoteOrder.indexOf(r);
  let l, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = i + 1, s += 1, e.footnoteCounts.set(r, s);
  const a = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + o,
      id: n + "fnref-" + o + (s > 1 ? "-" + s : ""),
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
function f2(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function p2(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function g0(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const o = e.all(t), i = o[0];
  i && i.type === "text" ? i.value = "[" + i.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += r : o.push({ type: "text", value: r }), o;
}
function h2(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return g0(e, t);
  const o = { src: Xo(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const i = { type: "element", tagName: "img", properties: o, children: [] };
  return e.patch(t, i), e.applyData(t, i);
}
function m2(e, t) {
  const n = { src: Xo(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function g2(e, t) {
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
function y2(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return g0(e, t);
  const o = { href: Xo(r.url || "") };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: o,
    children: e.all(t)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function v2(e, t) {
  const n = { href: Xo(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function w2(e, t, n) {
  const r = e.all(t), o = n ? x2(n) : y0(t), i = {}, l = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), i.className = ["task-list-item"];
  }
  let s = -1;
  for (; ++s < r.length; ) {
    const c = r[s];
    (o || s !== 0 || c.type !== "element" || c.tagName !== "p") && l.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !o ? l.push(...c.children) : l.push(c);
  }
  const a = r[r.length - 1];
  a && (o || a.type !== "element" || a.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: i, children: l };
  return e.patch(t, u), e.applyData(t, u);
}
function x2(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = y0(n[r]);
  }
  return t;
}
function y0(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function S2(e, t) {
  const n = {}, r = e.all(t);
  let o = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++o < r.length; ) {
    const l = r[o];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const i = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function b2(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function k2(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function E2(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function C2(e, t) {
  const n = e.all(t), r = n.shift(), o = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), o.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, s = Vd(t.children[1]), a = Gv(t.children[t.children.length - 1]);
    s && a && (l.position = { start: s, end: a }), o.push(l);
  }
  const i = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(o, !0)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function P2(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, s = l ? l.length : t.children.length;
  let a = -1;
  const u = [];
  for (; ++a < s; ) {
    const f = t.children[a], p = {}, d = l ? l[a] : void 0;
    d && (p.align = d);
    let y = { type: "element", tagName: i, properties: p, children: [] };
    f && (y.children = e.all(f), e.patch(f, y), y = e.applyData(f, y)), u.push(y);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function T2(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const mh = 9, gh = 32;
function N2(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const i = [];
  for (; r; )
    i.push(
      yh(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return i.push(yh(t.slice(o), o > 0, !1)), i.join("");
}
function yh(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let i = e.codePointAt(r);
    for (; i === mh || i === gh; )
      r++, i = e.codePointAt(r);
  }
  if (n) {
    let i = e.codePointAt(o - 1);
    for (; i === mh || i === gh; )
      o--, i = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function R2(e, t) {
  const n = { type: "text", value: N2(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function A2(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const _2 = {
  blockquote: l2,
  break: s2,
  code: a2,
  delete: u2,
  emphasis: c2,
  footnoteReference: d2,
  heading: f2,
  html: p2,
  imageReference: h2,
  image: m2,
  inlineCode: g2,
  linkReference: y2,
  link: v2,
  listItem: w2,
  list: S2,
  paragraph: b2,
  // @ts-expect-error: root is different, but hard to type.
  root: k2,
  strong: E2,
  table: C2,
  tableCell: T2,
  tableRow: P2,
  text: R2,
  thematicBreak: A2,
  toml: Ol,
  yaml: Ol,
  definition: Ol,
  footnoteDefinition: Ol
};
function Ol() {
}
const v0 = -1, ca = 0, Ti = 1, Is = 2, Gd = 3, Zd = 4, Jd = 5, ef = 6, w0 = 7, x0 = 8, vh = typeof self == "object" ? self : globalThis, I2 = (e, t) => {
  const n = (o, i) => (e.set(i, o), o), r = (o) => {
    if (e.has(o))
      return e.get(o);
    const [i, l] = t[o];
    switch (i) {
      case ca:
      case v0:
        return n(l, o);
      case Ti: {
        const s = n([], o);
        for (const a of l)
          s.push(r(a));
        return s;
      }
      case Is: {
        const s = n({}, o);
        for (const [a, u] of l)
          s[r(a)] = r(u);
        return s;
      }
      case Gd:
        return n(new Date(l), o);
      case Zd: {
        const { source: s, flags: a } = l;
        return n(new RegExp(s, a), o);
      }
      case Jd: {
        const s = n(/* @__PURE__ */ new Map(), o);
        for (const [a, u] of l)
          s.set(r(a), r(u));
        return s;
      }
      case ef: {
        const s = n(/* @__PURE__ */ new Set(), o);
        for (const a of l)
          s.add(r(a));
        return s;
      }
      case w0: {
        const { name: s, message: a } = l;
        return n(new vh[s](a), o);
      }
      case x0:
        return n(BigInt(l), o);
      case "BigInt":
        return n(Object(BigInt(l)), o);
      case "ArrayBuffer":
        return n(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: s } = new Uint8Array(l);
        return n(new DataView(s), l);
      }
    }
    return n(new vh[i](l), o);
  };
  return r;
}, wh = (e) => I2(/* @__PURE__ */ new Map(), e)(0), Zr = "", { toString: O2 } = {}, { keys: L2 } = Object, ui = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [ca, t];
  const n = O2.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Ti, Zr];
    case "Object":
      return [Is, Zr];
    case "Date":
      return [Gd, Zr];
    case "RegExp":
      return [Zd, Zr];
    case "Map":
      return [Jd, Zr];
    case "Set":
      return [ef, Zr];
    case "DataView":
      return [Ti, n];
  }
  return n.includes("Array") ? [Ti, n] : n.includes("Error") ? [w0, n] : [Is, n];
}, Ll = ([e, t]) => e === ca && (t === "function" || t === "symbol"), M2 = (e, t, n, r) => {
  const o = (l, s) => {
    const a = r.push(l) - 1;
    return n.set(s, a), a;
  }, i = (l) => {
    if (n.has(l))
      return n.get(l);
    let [s, a] = ui(l);
    switch (s) {
      case ca: {
        let c = l;
        switch (a) {
          case "bigint":
            s = x0, c = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + a);
            c = null;
            break;
          case "undefined":
            return o([v0], l);
        }
        return o([s, c], l);
      }
      case Ti: {
        if (a) {
          let p = l;
          return a === "DataView" ? p = new Uint8Array(l.buffer) : a === "ArrayBuffer" && (p = new Uint8Array(l)), o([a, [...p]], l);
        }
        const c = [], f = o([s, c], l);
        for (const p of l)
          c.push(i(p));
        return f;
      }
      case Is: {
        if (a)
          switch (a) {
            case "BigInt":
              return o([a, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return o([a, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return i(l.toJSON());
        const c = [], f = o([s, c], l);
        for (const p of L2(l))
          (e || !Ll(ui(l[p]))) && c.push([i(p), i(l[p])]);
        return f;
      }
      case Gd:
        return o([s, l.toISOString()], l);
      case Zd: {
        const { source: c, flags: f } = l;
        return o([s, { source: c, flags: f }], l);
      }
      case Jd: {
        const c = [], f = o([s, c], l);
        for (const [p, d] of l)
          (e || !(Ll(ui(p)) || Ll(ui(d)))) && c.push([i(p), i(d)]);
        return f;
      }
      case ef: {
        const c = [], f = o([s, c], l);
        for (const p of l)
          (e || !Ll(ui(p))) && c.push(i(p));
        return f;
      }
    }
    const { message: u } = l;
    return o([s, { name: a, message: u }], l);
  };
  return i;
}, xh = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return M2(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Os = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? wh(xh(e, t)) : structuredClone(e)
) : (e, t) => wh(xh(e, t));
function D2(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function z2(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function j2(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || D2, r = e.options.footnoteBackLabel || z2, o = e.options.footnoteLabel || "Footnotes", i = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let a = -1;
  for (; ++a < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[a]
    );
    if (!u)
      continue;
    const c = e.all(u), f = String(u.identifier).toUpperCase(), p = Xo(f.toLowerCase());
    let d = 0;
    const y = [], m = e.footnoteCounts.get(f);
    for (; m !== void 0 && ++d <= m; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let g = typeof n == "string" ? n : n(a, d);
      typeof g == "string" && (g = { type: "text", value: g }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (d > 1 ? "-" + d : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(a, d),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(g) ? g : [g]
      });
    }
    const x = c[c.length - 1];
    if (x && x.type === "element" && x.tagName === "p") {
      const g = x.children[x.children.length - 1];
      g && g.type === "text" ? g.value += " " : x.children.push({ type: "text", value: " " }), x.children.push(...y);
    } else
      c.push(...y);
    const h = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(c, !0)
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
          tagName: i,
          properties: {
            ...Os(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: o }]
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
const S0 = (
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
      return U2;
    if (typeof e == "function")
      return da(e);
    if (typeof e == "object")
      return Array.isArray(e) ? F2(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        B2(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return $2(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function F2(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = S0(e[n]);
  return da(r);
  function r(...o) {
    let i = -1;
    for (; ++i < t.length; )
      if (t[i].apply(this, o)) return !0;
    return !1;
  }
}
function B2(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return da(n);
  function n(r) {
    const o = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let i;
    for (i in e)
      if (o[i] !== t[i]) return !1;
    return !0;
  }
}
function $2(e) {
  return da(t);
  function t(n) {
    return n && n.type === e;
  }
}
function da(e) {
  return t;
  function t(n, r, o) {
    return !!(H2(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      o || void 0
    ));
  }
}
function U2() {
  return !0;
}
function H2(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const b0 = [], V2 = !0, Sh = !1, W2 = "skip";
function Q2(e, t, n, r) {
  let o;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : o = t;
  const i = S0(o), l = r ? -1 : 1;
  s(e, void 0, [])();
  function s(a, u, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      a && typeof a == "object" ? a : {}
    );
    if (typeof f.type == "string") {
      const d = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (a.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let d = b0, y, m, x;
      if ((!t || i(a, u, c[c.length - 1] || void 0)) && (d = Y2(n(a, c)), d[0] === Sh))
        return d;
      if ("children" in a && a.children) {
        const h = (
          /** @type {UnistParent} */
          a
        );
        if (h.children && d[0] !== W2)
          for (m = (r ? h.children.length : -1) + l, x = c.concat(h); m > -1 && m < h.children.length; ) {
            const g = h.children[m];
            if (y = s(g, m, x)(), y[0] === Sh)
              return y;
            m = typeof y[1] == "number" ? y[1] : m + l;
          }
      }
      return d;
    }
  }
}
function Y2(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [V2, e] : e == null ? b0 : [e];
}
function k0(e, t, n, r) {
  let o, i, l;
  typeof t == "function" && typeof n != "function" ? (i = void 0, l = t, o = n) : (i = t, l = n, o = r), Q2(e, i, s, o);
  function s(a, u) {
    const c = u[u.length - 1], f = c ? c.children.indexOf(a) : void 0;
    return l(a, f, c);
  }
}
const kc = {}.hasOwnProperty, K2 = {};
function q2(e, t) {
  const n = t || K2, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = { ..._2, ...n.handlers }, s = {
    all: u,
    applyData: G2,
    definitionById: r,
    footnoteById: o,
    footnoteCounts: i,
    footnoteOrder: [],
    handlers: l,
    one: a,
    options: n,
    patch: X2,
    wrap: J2
  };
  return k0(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : o, p = String(c.identifier).toUpperCase();
      f.has(p) || f.set(p, c);
    }
  }), s;
  function a(c, f) {
    const p = c.type, d = s.handlers[p];
    if (kc.call(s.handlers, p) && d)
      return d(s, c, f);
    if (s.options.passThrough && s.options.passThrough.includes(p)) {
      if ("children" in c) {
        const { children: m, ...x } = c, h = Os(x);
        return h.children = s.all(c), h;
      }
      return Os(c);
    }
    return (s.options.unknownHandler || Z2)(s, c, f);
  }
  function u(c) {
    const f = [];
    if ("children" in c) {
      const p = c.children;
      let d = -1;
      for (; ++d < p.length; ) {
        const y = s.one(p[d], c);
        if (y) {
          if (d && p[d - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = bh(y.value)), !Array.isArray(y) && y.type === "element")) {
            const m = y.children[0];
            m && m.type === "text" && (m.value = bh(m.value));
          }
          Array.isArray(y) ? f.push(...y) : f.push(y);
        }
      }
    }
    return f;
  }
}
function X2(e, t) {
  e.position && (t.position = OC(e));
}
function G2(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, o = e.data.hChildren, i = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && i && Object.assign(n.properties, Os(i)), "children" in n && n.children && o !== null && o !== void 0 && (n.children = o);
  }
  return n;
}
function Z2(e, t) {
  const n = t.data || {}, r = "value" in t && !(kc.call(n, "hProperties") || kc.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function J2(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function bh(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function kh(e, t) {
  const n = q2(e, t), r = n.one(e, void 0), o = j2(n), i = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return o && i.children.push({ type: "text", value: `
` }, o), i;
}
function eN(e, t) {
  return e && "run" in e ? async function(n, r) {
    const o = (
      /** @type {HastRoot} */
      kh(n, { file: r, ...t })
    );
    await e.run(o, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      kh(n, { file: r, ...e || t })
    );
  };
}
function Eh(e) {
  if (e)
    throw e;
}
var Zl = Object.prototype.hasOwnProperty, E0 = Object.prototype.toString, Ch = Object.defineProperty, Ph = Object.getOwnPropertyDescriptor, Th = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : E0.call(t) === "[object Array]";
}, Nh = function(t) {
  if (!t || E0.call(t) !== "[object Object]")
    return !1;
  var n = Zl.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Zl.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || Zl.call(t, o);
}, Rh = function(t, n) {
  Ch && n.name === "__proto__" ? Ch(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Ah = function(t, n) {
  if (n === "__proto__")
    if (Zl.call(t, n)) {
      if (Ph)
        return Ph(t, n).value;
    } else return;
  return t[n];
}, tN = function e() {
  var t, n, r, o, i, l, s = arguments[0], a = 1, u = arguments.length, c = !1;
  for (typeof s == "boolean" && (c = s, s = arguments[1] || {}, a = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); a < u; ++a)
    if (t = arguments[a], t != null)
      for (n in t)
        r = Ah(s, n), o = Ah(t, n), s !== o && (c && o && (Nh(o) || (i = Th(o))) ? (i ? (i = !1, l = r && Th(r) ? r : []) : l = r && Nh(r) ? r : {}, Rh(s, { name: n, newValue: e(c, l, o) })) : typeof o < "u" && Rh(s, { name: n, newValue: o }));
  return s;
};
const eu = /* @__PURE__ */ Ls(tN);
function Ec(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function nN() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...o) {
    let i = -1;
    const l = o.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    s(null, ...o);
    function s(a, ...u) {
      const c = e[++i];
      let f = -1;
      if (a) {
        l(a);
        return;
      }
      for (; ++f < o.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = o[f]);
      o = u, c ? rN(c, s)(...u) : l(null, ...u);
    }
  }
  function r(o) {
    if (typeof o != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + o
      );
    return e.push(o), t;
  }
}
function rN(e, t) {
  let n;
  return r;
  function r(...l) {
    const s = e.length > l.length;
    let a;
    s && l.push(o);
    try {
      a = e.apply(this, l);
    } catch (u) {
      const c = (
        /** @type {Error} */
        u
      );
      if (s && n)
        throw c;
      return o(c);
    }
    s || (a && a.then && typeof a.then == "function" ? a.then(i, o) : a instanceof Error ? o(a) : i(a));
  }
  function o(l, ...s) {
    n || (n = !0, t(l, ...s));
  }
  function i(l) {
    o(null, l);
  }
}
const rn = { basename: oN, dirname: iN, extname: lN, join: sN, sep: "/" };
function oN(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  al(e);
  let n = 0, r = -1, o = e.length, i;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; o--; )
      if (e.codePointAt(o) === 47) {
        if (i) {
          n = o + 1;
          break;
        }
      } else r < 0 && (i = !0, r = o + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, s = t.length - 1;
  for (; o--; )
    if (e.codePointAt(o) === 47) {
      if (i) {
        n = o + 1;
        break;
      }
    } else
      l < 0 && (i = !0, l = o + 1), s > -1 && (e.codePointAt(o) === t.codePointAt(s--) ? s < 0 && (r = o) : (s = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function iN(e) {
  if (al(e), e.length === 0)
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
function lN(e) {
  al(e);
  let t = e.length, n = -1, r = 0, o = -1, i = 0, l;
  for (; t--; ) {
    const s = e.codePointAt(t);
    if (s === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), s === 46 ? o < 0 ? o = t : i !== 1 && (i = 1) : o > -1 && (i = -1);
  }
  return o < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  i === 0 || // The (right-most) trimmed path component is exactly `..`.
  i === 1 && o === n - 1 && o === r + 1 ? "" : e.slice(o, n);
}
function sN(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    al(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : aN(n);
}
function aN(e) {
  al(e);
  const t = e.codePointAt(0) === 47;
  let n = uN(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function uN(e, t) {
  let n = "", r = 0, o = -1, i = 0, l = -1, s, a;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      s = e.codePointAt(l);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(o === l - 1 || i === 1)) if (o !== l - 1 && i === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (a = n.lastIndexOf("/"), a !== n.length - 1) {
              a < 0 ? (n = "", r = 0) : (n = n.slice(0, a), r = n.length - 1 - n.lastIndexOf("/")), o = l, i = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, o = l, i = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(o + 1, l) : n = e.slice(o + 1, l), r = l - o - 1;
      o = l, i = 0;
    } else s === 46 && i > -1 ? i++ : i = -1;
  }
  return n;
}
function al(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const cN = { cwd: dN };
function dN() {
  return "/";
}
function Cc(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function fN(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Cc(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return pN(e);
}
function pN(e) {
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
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw o.code = "ERR_INVALID_FILE_URL_PATH", o;
      }
    }
  return decodeURIComponent(t);
}
const tu = (
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
class C0 {
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
    t ? Cc(t) ? n = { path: t } : typeof t == "string" || hN(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : cN.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < tu.length; ) {
      const i = tu[r];
      i in n && n[i] !== void 0 && n[i] !== null && (this[i] = i === "history" ? [...n[i]] : n[i]);
    }
    let o;
    for (o in n)
      tu.includes(o) || (this[o] = n[o]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? rn.basename(this.path) : void 0;
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
    ru(t, "basename"), nu(t, "basename"), this.path = rn.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? rn.dirname(this.path) : void 0;
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
    _h(this.basename, "dirname"), this.path = rn.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? rn.extname(this.path) : void 0;
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
    if (nu(t, "extname"), _h(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = rn.join(this.dirname, this.stem + (t || ""));
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
    Cc(t) && (t = fN(t)), ru(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? rn.basename(this.path, this.extname) : void 0;
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
    ru(t, "stem"), nu(t, "stem"), this.path = rn.join(this.dirname || "", t + (this.extname || ""));
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
    const o = this.message(t, n, r);
    throw o.fatal = !0, o;
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
    const o = this.message(t, n, r);
    return o.fatal = void 0, o;
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
    const o = new Ye(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (o.name = this.path + ":" + o.name, o.file = this.path), o.fatal = !1, this.messages.push(o), o;
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
function nu(e, t) {
  if (e && e.includes(rn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + rn.sep + "`"
    );
}
function ru(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function _h(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function hN(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const mN = (
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
    ), o = r[e], i = function() {
      return o.apply(i, arguments);
    };
    return Object.setPrototypeOf(i, r), i;
  }
), gN = {}.hasOwnProperty;
class tf extends mN {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = nN();
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
      new tf()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(eu(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (lu("data", this.frozen), this.namespace[t] = n, this) : gN.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (lu("data", this.frozen), this.namespace = t, this) : this.namespace;
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
      const o = n.call(t, ...r);
      typeof o == "function" && this.transformers.use(o);
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
    const n = Ml(t), r = this.parser || this.Parser;
    return ou("parse", r), r(String(n), n);
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
    return this.freeze(), ou("process", this.parser || this.Parser), iu("process", this.compiler || this.Compiler), n ? o(void 0, n) : new Promise(o);
    function o(i, l) {
      const s = Ml(t), a = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(a, s, function(c, f, p) {
        if (c || !f || !p)
          return u(c);
        const d = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), y = r.stringify(d, p);
        wN(y) ? p.value = y : p.result = y, u(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function u(c, f) {
        c || !f ? l(c) : i ? i(f) : n(void 0, f);
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
    return this.freeze(), ou("processSync", this.parser || this.Parser), iu("processSync", this.compiler || this.Compiler), this.process(t, o), Oh("processSync", "process", n), r;
    function o(i, l) {
      n = !0, Eh(i), r = l;
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
    Ih(t), this.freeze();
    const o = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? i(void 0, r) : new Promise(i);
    function i(l, s) {
      const a = Ml(n);
      o.run(t, a, u);
      function u(c, f, p) {
        const d = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        c ? s(c) : l ? l(d) : r(void 0, d, p);
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
    let r = !1, o;
    return this.run(t, n, i), Oh("runSync", "run", r), o;
    function i(l, s) {
      Eh(l), o = s, r = !0;
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
    const r = Ml(n), o = this.compiler || this.Compiler;
    return iu("stringify", o), Ih(t), o(t, r);
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
    const r = this.attachers, o = this.namespace;
    if (lu("use", this.frozen), t != null) if (typeof t == "function")
      a(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? s(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function i(u) {
      if (typeof u == "function")
        a(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [c, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          a(c, f);
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
      s(u.plugins), u.settings && (o.settings = eu(!0, o.settings, u.settings));
    }
    function s(u) {
      let c = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++c < u.length; ) {
          const f = u[c];
          i(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function a(u, c) {
      let f = -1, p = -1;
      for (; ++f < r.length; )
        if (r[f][0] === u) {
          p = f;
          break;
        }
      if (p === -1)
        r.push([u, ...c]);
      else if (c.length > 0) {
        let [d, ...y] = c;
        const m = r[p][1];
        Ec(m) && Ec(d) && (d = eu(!0, m, d)), r[p] = [u, d, ...y];
      }
    }
  }
}
const yN = new tf().freeze();
function ou(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function iu(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function lu(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ih(e) {
  if (!Ec(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Oh(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Ml(e) {
  return vN(e) ? e : new C0(e);
}
function vN(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function wN(e) {
  return typeof e == "string" || xN(e);
}
function xN(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const SN = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Lh = [], Mh = { allowDangerousHtml: !0 }, bN = /^(https?|ircs?|mailto|xmpp)$/i, kN = [
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
function EN(e) {
  const t = CN(e), n = PN(e);
  return TN(t.runSync(t.parse(n), n), e);
}
function CN(e) {
  const t = e.rehypePlugins || Lh, n = e.remarkPlugins || Lh, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Mh } : Mh;
  return yN().use(i2).use(n).use(eN, r).use(t);
}
function PN(e) {
  const t = e.children || "", n = new C0();
  return typeof t == "string" && (n.value = t), n;
}
function TN(e, t) {
  const n = t.allowedElements, r = t.allowElement, o = t.components, i = t.disallowedElements, l = t.skipHtml, s = t.unwrapDisallowed, a = t.urlTransform || NN;
  for (const c of kN)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + SN + c.id, void 0);
  return k0(e, u), jC(e, {
    Fragment: C.Fragment,
    components: o,
    ignoreInvalidStyle: !0,
    jsx: C.jsx,
    jsxs: C.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(c, f, p) {
    if (c.type === "raw" && p && typeof f == "number")
      return l ? p.children.splice(f, 1) : p.children[f] = { type: "text", value: c.value }, f;
    if (c.type === "element") {
      let d;
      for (d in Ga)
        if (Object.hasOwn(Ga, d) && Object.hasOwn(c.properties, d)) {
          const y = c.properties[d], m = Ga[d];
          (m === null || m.includes(c.tagName)) && (c.properties[d] = a(String(y || ""), d, c));
        }
    }
    if (c.type === "element") {
      let d = n ? !n.includes(c.tagName) : i ? i.includes(c.tagName) : !1;
      if (!d && r && typeof f == "number" && (d = !r(c, f, p)), d && p && typeof f == "number")
        return s && c.children ? p.children.splice(f, 1, ...c.children) : p.children.splice(f, 1), f;
    }
  }
}
function NN(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), o = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && t > o || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    bN.test(e.slice(0, t)) ? e : ""
  );
}
const RN = ({ content: e, role: t }) => {
  const n = t === "user";
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      className: Ne(
        "flex w-full animate-fade-in",
        n ? "justify-end" : "justify-start"
      ),
      children: /* @__PURE__ */ C.jsx(
        "div",
        {
          className: Ne(
            "max-w-[85%] px-4 py-3 md:max-w-[70%]",
            n ? "bg-chat-user text-chat-user-foreground" : "bg-chat-assistant text-chat-assistant-foreground"
          ),
          style: {
            borderRadius: `var(--message-bubble-radius) var(--message-bubble-radius) ${n ? "var(--message-bubble-tail-radius) var(--message-bubble-radius)" : "var(--message-bubble-radius) var(--message-bubble-tail-radius)"}`
          },
          children: n ? /* @__PURE__ */ C.jsx("p", { className: "text-sm leading-relaxed", children: e }) : /* @__PURE__ */ C.jsx("div", { className: "prose prose-sm max-w-none text-chat-assistant-foreground prose-headings:text-chat-assistant-foreground prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2 prose-h1:text-lg prose-h2:text-base prose-p:text-chat-assistant-foreground prose-p:my-2 prose-p:leading-relaxed prose-strong:text-chat-assistant-foreground prose-ul:my-2 prose-ul:pl-6 prose-ul:list-disc prose-ol:my-2 prose-ol:pl-6 prose-ol:list-decimal prose-li:text-chat-assistant-foreground prose-li:my-1 prose-li:marker:text-chat-assistant-foreground", children: /* @__PURE__ */ C.jsx(EN, { children: e }) })
        }
      )
    }
  );
}, AN = () => /* @__PURE__ */ C.jsx("div", { className: "flex items-center gap-1 px-4 py-3", children: /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-1 rounded-2xl rounded-bl-md bg-chat-assistant px-4 py-3", children: [
  /* @__PURE__ */ C.jsx(
    "span",
    {
      className: "h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot",
      style: { animationDelay: "0s" }
    }
  ),
  /* @__PURE__ */ C.jsx(
    "span",
    {
      className: "h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot",
      style: { animationDelay: "0.16s" }
    }
  ),
  /* @__PURE__ */ C.jsx(
    "span",
    {
      className: "h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot",
      style: { animationDelay: "0.32s" }
    }
  )
] }) }), _N = Dy(
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
), bo = S.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
    const l = r ? u1 : "button";
    return /* @__PURE__ */ C.jsx(l, { className: Ne(_N({ variant: t, size: n, className: e })), ref: i, ...o });
  }
);
bo.displayName = "Button";
const su = 768;
function IN() {
  const [e, t] = S.useState(void 0);
  return S.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${su - 1}px)`), r = () => {
      t(window.innerWidth < su);
    };
    return n.addEventListener("change", r), t(window.innerWidth < su), () => n.removeEventListener("change", r);
  }, []), !!e;
}
const P0 = ({ onSelect: e }) => {
  const { categories: t, mode: n } = Ko(), r = IN(), [o, i] = S.useState(
    () => {
      var a;
      return ((a = t == null ? void 0 : t[0]) == null ? void 0 : a.title) ?? "";
    }
  ), l = S.useMemo(() => {
    const a = t == null ? void 0 : t.find((u) => u.title === o);
    return (a == null ? void 0 : a.questions) ?? [];
  }, [t, o]);
  if (!t || t.length === 0)
    return null;
  const s = (a) => {
    const u = a.target.value;
    u && (e(u), a.target.value = "");
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ C.jsx(
      "div",
      {
        className: Ne(
          "flex overflow-x-auto overflow-y-hidden scrollbar-hide",
          n !== "window" && "justify-center"
        ),
        style: { borderBottom: "1px solid var(--tab-container-border)" },
        children: t.map((a) => /* @__PURE__ */ C.jsx(
          "button",
          {
            type: "button",
            onClick: () => i(a.title),
            className: Ne(
              "px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors",
              "-mb-px flex-shrink-0",
              o === a.title ? "text-primary" : "border-b-2 border-transparent text-muted-foreground hover:text-foreground"
            ),
            style: o === a.title ? { borderBottom: "2px solid hsl(var(--tab-active-border))" } : void 0,
            children: a.title.toUpperCase()
          },
          a.title
        ))
      }
    ),
    /* @__PURE__ */ C.jsx("div", { className: "p-4", children: r ? /* @__PURE__ */ C.jsxs(
      "select",
      {
        onChange: s,
        defaultValue: "",
        className: "w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        children: [
          /* @__PURE__ */ C.jsx("option", { value: "", disabled: !0, children: "Select a question..." }),
          l.map((a) => /* @__PURE__ */ C.jsx("option", { value: a, children: a }, a))
        ]
      }
    ) : /* @__PURE__ */ C.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: l.map((a) => /* @__PURE__ */ C.jsx(
      bo,
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
}, ON = ({ suggestions: e, onSelect: t }) => e.length === 0 ? null : /* @__PURE__ */ C.jsx("div", { className: "flex flex-wrap gap-2 px-4 py-2", children: e.map((n) => /* @__PURE__ */ C.jsx(
  bo,
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
function LN(e) {
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
  let o = "";
  for (const a of r) {
    const u = n.match(a);
    if (u) {
      o = u[u.length - 1];
      break;
    }
  }
  if (!o) return [];
  const l = o.split(/,\s*(?:or|and)?\s*|\s+or\s+|\s+and\s+/).map((a) => a.trim()).filter((a) => a.length > 0 && a.length < 100).map((a) => {
    let u = a.replace(/^(explain |tell me |learn |hear |know |more )/i, "").replace(/^(about |more about )/i, "").trim();
    return u = u.charAt(0).toUpperCase() + u.slice(1), u = u.replace(/[?.!]+$/, ""), u;
  });
  return [...new Set(l)].filter((a) => a.length >= 3).slice(0, 4);
}
const MN = () => {
  const { welcomeTitle: e, welcomeMessage: t } = Ko();
  return /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col items-center justify-center gap-2 px-4 py-6 text-center", children: [
    /* @__PURE__ */ C.jsx("h2", { className: "text-xl font-semibold text-foreground", children: e }),
    /* @__PURE__ */ C.jsx("p", { className: "max-w-md text-muted-foreground", children: t })
  ] });
}, Dh = ({
  messages: e,
  isLoading: t,
  onQuickAction: n,
  hideWelcome: r = !1
}) => {
  const o = S.useRef(null), i = S.useRef(/* @__PURE__ */ new Map()), l = S.useRef(0), s = S.useRef(!1), { mode: a } = Ko(), u = a !== "window", c = S.useMemo(
    () => e.filter((p) => p.role === "user" || p.role === "assistant"),
    [e]
  ), f = S.useMemo(() => {
    if (t) return [];
    const p = c[c.length - 1];
    return (p == null ? void 0 : p.role) === "assistant" ? LN(p.content) : [];
  }, [c, t]);
  return S.useEffect(() => {
    var x;
    const p = (x = o.current) == null ? void 0 : x.querySelector("[data-radix-scroll-area-viewport]");
    if (!p) return;
    const d = c.length, y = l.current, m = s.current;
    if (d > y) {
      const h = c[d - 1];
      if (h.role === "user")
        p.scrollTop = p.scrollHeight;
      else if (h.role === "assistant") {
        const g = i.current.get(h.id);
        g && requestAnimationFrame(() => {
          const v = p.getBoundingClientRect(), E = g.getBoundingClientRect(), P = p.scrollTop + (E.top - v.top);
          p.scrollTo({ top: P, behavior: "smooth" });
        });
      }
    } else t && !m && (p.scrollTop = p.scrollHeight);
    l.current = d, s.current = t;
  }, [c, t]), S.useEffect(() => {
    var p;
    if (!t && f.length > 0) {
      const d = (p = o.current) == null ? void 0 : p.querySelector("[data-radix-scroll-area-viewport]");
      if (d) {
        const y = d.scrollHeight - d.scrollTop - d.clientHeight;
        y > 0 && y < 100 && (d.scrollTop = d.scrollHeight);
      }
    }
  }, [f, t]), /* @__PURE__ */ C.jsx(Uv, { className: "flex-1 min-h-0", ref: o, children: /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col gap-4 p-4", children: [
    !r && /* @__PURE__ */ C.jsx(MN, {}),
    !r && /* @__PURE__ */ C.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ C.jsx(P0, { onSelect: n }) }),
    /* @__PURE__ */ C.jsxs(
      "div",
      {
        className: Ne(
          "flex flex-col gap-4",
          u && "p-4 mx-auto bg-[hsl(var(--message-container-bg))]"
        ),
        style: u ? {
          border: "var(--message-container-border)",
          maxWidth: "var(--message-container-max-width)",
          minHeight: "var(--message-container-min-height)",
          width: "100%"
        } : void 0,
        children: [
          c.map((p) => /* @__PURE__ */ C.jsx(
            "div",
            {
              ref: (d) => {
                d ? i.current.set(p.id, d) : i.current.delete(p.id);
              },
              children: /* @__PURE__ */ C.jsx(
                RN,
                {
                  content: p.content,
                  role: p.role
                }
              )
            },
            p.id
          )),
          t && /* @__PURE__ */ C.jsx(AN, {}),
          !t && f.length > 0 && /* @__PURE__ */ C.jsx(
            ON,
            {
              suggestions: f,
              onSelect: n
            }
          )
        ]
      }
    )
  ] }) });
}, Pc = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ C.jsx(
  "textarea",
  {
    className: Ne(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t
  }
));
Pc.displayName = "Textarea";
const zh = ({ onSend: e, isLoading: t }) => {
  var u, c, f, p, d;
  const n = Ko(), [r, o] = S.useState(""), i = n.mode !== "window" && n.inputLayout === "embedded", l = n.mode !== "window" && ((u = n.i18n) == null ? void 0 : u.sendButtonText), s = (y) => {
    y.preventDefault(), r.trim() && !t && (e(r.trim()), o(""));
  }, a = (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), s(y));
  };
  return i ? /* @__PURE__ */ C.jsx(
    "form",
    {
      onSubmit: s,
      className: "bg-card p-4",
      style: { borderTop: "1px solid var(--input-container-border)" },
      children: /* @__PURE__ */ C.jsxs(
        "div",
        {
          className: "flex items-stretch border border-input bg-[hsl(var(--input-container-bg))] overflow-hidden",
          style: { borderRadius: "var(--input-radius)" },
          children: [
            /* @__PURE__ */ C.jsx(
              Pc,
              {
                value: r,
                onChange: (y) => o(y.target.value),
                onKeyDown: a,
                placeholder: ((c = n.i18n) == null ? void 0 : c.inputPlaceholder) || "Ask me anything about EV home charging...",
                className: "min-h-[44px] max-h-32 resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 text-[hsl(var(--input-text))]",
                disabled: t
              }
            ),
            /* @__PURE__ */ C.jsx(
              bo,
              {
                type: "submit",
                disabled: !r.trim() || t,
                className: Ne(
                  "h-auto shrink-0 px-6 self-stretch hover:bg-[hsl(var(--primary-hover))]",
                  l ? "min-w-[140px]" : "w-14"
                ),
                style: {
                  borderRadius: "var(--button-radius)",
                  backgroundColor: "hsl(var(--primary))"
                },
                children: l ? (f = n.i18n) == null ? void 0 : f.sendButtonText : /* @__PURE__ */ C.jsx(kp, { className: "h-5 w-5" })
              }
            )
          ]
        }
      )
    }
  ) : /* @__PURE__ */ C.jsxs(
    "form",
    {
      onSubmit: s,
      className: "flex items-end gap-2 bg-card p-4",
      style: { borderTop: "1px solid var(--input-container-border)" },
      children: [
        /* @__PURE__ */ C.jsx(
          Pc,
          {
            value: r,
            onChange: (y) => o(y.target.value),
            onKeyDown: a,
            placeholder: ((p = n.i18n) == null ? void 0 : p.inputPlaceholder) || "Ask me anything about EV home charging...",
            className: "min-h-[44px] max-h-32 resize-none border-input bg-background text-[hsl(var(--input-text))]",
            style: { borderRadius: "var(--input-radius)" },
            disabled: t
          }
        ),
        l ? /* @__PURE__ */ C.jsx(
          bo,
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
        ) : /* @__PURE__ */ C.jsx(
          bo,
          {
            type: "submit",
            size: "icon",
            disabled: !r.trim() || t,
            className: "h-11 w-11 shrink-0 hover:bg-[hsl(var(--primary-hover))]",
            style: {
              borderRadius: "var(--button-radius)",
              backgroundColor: "hsl(var(--primary))"
            },
            children: /* @__PURE__ */ C.jsx(kp, { className: "h-5 w-5" })
          }
        )
      ]
    }
  );
}, DN = () => {
  const { welcomeTitle: e, welcomeMessage: t } = Ko();
  return /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col items-center justify-center gap-2 px-4 py-6 text-center", children: [
    /* @__PURE__ */ C.jsx("h2", { className: "text-xl font-semibold text-foreground", children: e }),
    /* @__PURE__ */ C.jsx("p", { className: "max-w-md text-muted-foreground", children: t })
  ] });
}, T0 = ({ className: e, onClearMessagesRef: t }) => {
  const { messages: n, sendMessage: r, isLoading: o, clearMessages: i } = CE(), { isEmbedded: l, mode: s, inputPosition: a } = Ko();
  S.useEffect(() => {
    t == null || t(i);
  }, [t, i]);
  const u = (p) => {
    r(p);
  }, c = (p) => {
    u(p);
  }, f = !l && s !== "window" && s !== "fullscreen";
  return a === "above" && s !== "window" ? /* @__PURE__ */ C.jsxs("div", { className: e || "flex h-full flex-col bg-background relative", children: [
    f && /* @__PURE__ */ C.jsx(Vp, { onNewChat: i }),
    !f && n.length > 0 && /* @__PURE__ */ C.jsx(
      "button",
      {
        onClick: i,
        className: "absolute top-2 right-2 p-2 rounded-lg hover:bg-muted transition-colors z-10",
        "aria-label": "Start new chat",
        title: "New chat",
        children: /* @__PURE__ */ C.jsx(oc, { className: "h-5 w-5 text-muted-foreground" })
      }
    ),
    /* @__PURE__ */ C.jsxs("div", { className: "flex-shrink-0", children: [
      /* @__PURE__ */ C.jsx(DN, {}),
      /* @__PURE__ */ C.jsx("div", { className: "flex justify-center px-4 pb-4", children: /* @__PURE__ */ C.jsx(P0, { onSelect: c }) }),
      /* @__PURE__ */ C.jsx(zh, { onSend: u, isLoading: o })
    ] }),
    /* @__PURE__ */ C.jsx(
      Dh,
      {
        messages: n,
        isLoading: o,
        onQuickAction: c,
        hideWelcome: !0
      }
    )
  ] }) : /* @__PURE__ */ C.jsxs("div", { className: e || "flex h-full flex-col bg-background relative", children: [
    f && /* @__PURE__ */ C.jsx(Vp, { onNewChat: i }),
    !f && n.length > 0 && /* @__PURE__ */ C.jsx(
      "button",
      {
        onClick: i,
        className: "absolute top-2 right-2 p-2 rounded-lg hover:bg-muted transition-colors z-10",
        "aria-label": "Start new chat",
        title: "New chat",
        children: /* @__PURE__ */ C.jsx(oc, { className: "h-5 w-5 text-muted-foreground" })
      }
    ),
    /* @__PURE__ */ C.jsx(
      Dh,
      {
        messages: n,
        isLoading: o,
        onQuickAction: c
      }
    ),
    /* @__PURE__ */ C.jsx(zh, { onSend: u, isLoading: o })
  ] });
}, zN = ({ position: e = "bottom-right" }) => {
  const [t, n] = S.useState(!1), r = {
    "bottom-right": "right-4 bottom-4",
    "bottom-left": "left-4 bottom-4"
  }, o = {
    "bottom-right": "right-4 bottom-20",
    "bottom-left": "left-4 bottom-20"
  };
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs(
      "div",
      {
        className: Ne(
          "fixed z-50 w-[380px] h-[600px] max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden",
          "bg-background border border-border",
          "transition-all duration-300 ease-out",
          o[e],
          t ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        ),
        children: [
          /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border bg-card", children: [
            /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ C.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ C.jsx(bp, { className: "h-4 w-4 text-primary-foreground" }) }),
              /* @__PURE__ */ C.jsx("span", { className: "font-medium text-foreground", children: "Chat Assistant" })
            ] }),
            /* @__PURE__ */ C.jsx(
              "button",
              {
                onClick: () => n(!1),
                className: "p-1.5 rounded-lg hover:bg-muted transition-colors",
                "aria-label": "Close chat",
                children: /* @__PURE__ */ C.jsx(ic, { className: "h-5 w-5 text-muted-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ C.jsx("div", { className: "h-[calc(100%-56px)]", children: /* @__PURE__ */ C.jsx(T0, {}) })
        ]
      }
    ),
    /* @__PURE__ */ C.jsxs(
      "button",
      {
        onClick: () => n(!t),
        className: Ne(
          "fixed z-50 flex items-center justify-center",
          "w-14 h-14 rounded-full shadow-lg",
          "bg-primary text-primary-foreground",
          "hover:scale-105 active:scale-95",
          "transition-all duration-200 ease-out",
          r[e]
        ),
        "aria-label": t ? "Close chat" : "Open chat",
        children: [
          /* @__PURE__ */ C.jsx(
            "div",
            {
              className: Ne(
                "transition-transform duration-200",
                t ? "rotate-90 scale-0" : "rotate-0 scale-100"
              ),
              children: /* @__PURE__ */ C.jsx(bp, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ C.jsx(
            "div",
            {
              className: Ne(
                "absolute transition-transform duration-200",
                t ? "rotate-0 scale-100" : "-rotate-90 scale-0"
              ),
              children: /* @__PURE__ */ C.jsx(ic, { className: "h-6 w-6" })
            }
          )
        ]
      }
    )
  ] });
};
let ci = null;
function jN(e = {}) {
  const t = Dd(e), n = new mE(), r = t.mode === "window" ? t.target || "body" : t.target, o = document.querySelector(r);
  if (!o)
    return console.error(`[EV Chat Widget] Container not found: ${r}`), () => {
    };
  const i = document.createElement("div");
  i.className = "jt-ev-chat-widget", i.setAttribute("data-ev-chat-root", "true"), t.mode === "window" ? document.body.appendChild(i) : o.appendChild(i), ci = ly(i);
  const l = t.mode === "window" ? /* @__PURE__ */ C.jsx(zN, { position: t.position }) : /* @__PURE__ */ C.jsx(T0, {});
  return ci.render(
    /* @__PURE__ */ C.jsx(S.StrictMode, { children: /* @__PURE__ */ C.jsx(yE, { client: n, children: /* @__PURE__ */ C.jsx(Wk, { children: /* @__PURE__ */ C.jsxs(
      kE,
      {
        overrideConfig: {
          ...t,
          isEmbedded: !0
        },
        children: [
          l,
          /* @__PURE__ */ C.jsx($S, {}),
          /* @__PURE__ */ C.jsx(wb, {})
        ]
      }
    ) }) }) })
  ), () => {
    ci && (ci.unmount(), ci = null), i.remove();
  };
}
function jh() {
  const e = window.EVChatConfig;
  (e != null && e.container || e != null && e.target) && jN(e);
}
typeof window < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", jh) : setTimeout(jh, 0));
export {
  jN as createChat,
  jN as default
};
//# sourceMappingURL=ev-chat.js.map
