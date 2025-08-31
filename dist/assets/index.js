(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const u of i.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Bo = { exports: {} },
  nl = {},
  Qo = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = Symbol.for("react.element"),
  ic = Symbol.for("react.portal"),
  uc = Symbol.for("react.fragment"),
  oc = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  ac = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  fc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.memo"),
  mc = Symbol.for("react.lazy"),
  Ou = Symbol.iterator;
function hc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ou && e[Ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ko = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yo = Object.assign,
  Go = {};
function ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Go),
    (this.updater = n || Ko);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xo() {}
Xo.prototype = ln.prototype;
function $i(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Go),
    (this.updater = n || Ko);
}
var Ai = ($i.prototype = new Xo());
Ai.constructor = $i;
Yo(Ai, ln.prototype);
Ai.isPureReactComponent = !0;
var Du = Array.isArray,
  Zo = Object.prototype.hasOwnProperty,
  Vi = { current: null },
  Jo = { key: !0, ref: !0, __self: !0, __source: !0 };
function qo(e, t, n) {
  var r,
    l = {},
    i = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Zo.call(t, r) && !Jo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: i,
    ref: u,
    props: l,
    _owner: Vi.current,
  };
}
function vc(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function yc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fu = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yc("" + e.key)
    : t.toString(36);
}
function xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (i) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gn:
          case ic:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (l = l(u)),
      (e = r === "" ? "." + kl(u, 0) : r),
      Du(l)
        ? ((n = ""),
          e != null && (n = e.replace(Fu, "$&/") + "/"),
          xr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Hi(l) &&
            (l = vc(
              l,
              n +
                (!l.key || (u && u.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), Du(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var s = r + kl(i, o);
      u += xr(i, t, n, s, l);
    }
  else if (((s = hc(e)), typeof s == "function"))
    for (e = s.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + kl(i, o++)), (u += xr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    xr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  kr = { transition: null },
  wc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: kr,
    ReactCurrentOwner: Vi,
  };
function bo() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: rr,
  forEach: function (e, t, n) {
    rr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = ln;
L.Fragment = uc;
L.Profiler = sc;
L.PureComponent = $i;
L.StrictMode = oc;
L.Suspense = dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
L.act = bo;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Yo({}, e.props),
    l = e.key,
    i = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (u = Vi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (s in t)
      Zo.call(t, s) &&
        !Jo.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && o !== void 0 ? o[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    o = Array(s);
    for (var c = 0; c < s; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Gn, type: e.type, key: l, ref: i, props: r, _owner: u };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: cc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ac, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = qo;
L.createFactory = function (e) {
  var t = qo.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: fc, render: e };
};
L.isValidElement = Hi;
L.lazy = function (e) {
  return { $$typeof: mc, _payload: { _status: -1, _result: e }, _init: gc };
};
L.memo = function (e, t) {
  return { $$typeof: pc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = t;
  }
};
L.unstable_act = bo;
L.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
L.useContext = function (e) {
  return se.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
L.useId = function () {
  return se.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return se.current.useRef(e);
};
L.useState = function (e) {
  return se.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return se.current.useTransition();
};
L.version = "18.3.1";
Qo.exports = L;
var Xn = Qo.exports;
const xc = lc(Xn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = Xn,
  Sc = Symbol.for("react.element"),
  Ec = Symbol.for("react.fragment"),
  Nc = Object.prototype.hasOwnProperty,
  Cc = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _c = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    l = {},
    i = null,
    u = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) Nc.call(t, r) && !_c.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Sc,
    type: e,
    key: i,
    ref: u,
    props: l,
    _owner: Cc.current,
  };
}
nl.Fragment = Ec;
nl.jsx = es;
nl.jsxs = es;
Bo.exports = nl;
var p = Bo.exports,
  ts = { exports: {} },
  we = {},
  ns = { exports: {} },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, P) {
    var z = N.length;
    N.push(P);
    e: for (; 0 < z; ) {
      var B = (z - 1) >>> 1,
        Z = N[B];
      if (0 < l(Z, P)) (N[B] = P), (N[z] = Z), (z = B);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var P = N[0],
      z = N.pop();
    if (z !== P) {
      N[0] = z;
      e: for (var B = 0, Z = N.length, tr = Z >>> 1; B < tr; ) {
        var vt = 2 * (B + 1) - 1,
          xl = N[vt],
          yt = vt + 1,
          nr = N[yt];
        if (0 > l(xl, z))
          yt < Z && 0 > l(nr, xl)
            ? ((N[B] = nr), (N[yt] = z), (B = yt))
            : ((N[B] = xl), (N[vt] = z), (B = vt));
        else if (yt < Z && 0 > l(nr, z)) (N[B] = nr), (N[yt] = z), (B = yt);
        else break e;
      }
    }
    return P;
  }
  function l(N, P) {
    var z = N.sortIndex - P.sortIndex;
    return z !== 0 ? z : N.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var u = Date,
      o = u.now();
    e.unstable_now = function () {
      return u.now() - o;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    m = 3,
    w = !1,
    x = !1,
    k = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= N)
        r(c), (P.sortIndex = P.expirationTime), t(s, P);
      else break;
      P = n(c);
    }
  }
  function y(N) {
    if (((k = !1), d(N), !x))
      if (n(s) !== null) (x = !0), gl(E);
      else {
        var P = n(c);
        P !== null && wl(y, P.startTime - N);
      }
  }
  function E(N, P) {
    (x = !1), k && ((k = !1), f(j), (j = -1)), (w = !0);
    var z = m;
    try {
      for (
        d(P), h = n(s);
        h !== null && (!(h.expirationTime > P) || (N && !je()));

      ) {
        var B = h.callback;
        if (typeof B == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Z = B(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(s) && r(s),
            d(P);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var tr = !0;
      else {
        var vt = n(c);
        vt !== null && wl(y, vt.startTime - P), (tr = !1);
      }
      return tr;
    } finally {
      (h = null), (m = z), (w = !1);
    }
  }
  var C = !1,
    _ = null,
    j = -1,
    W = 5,
    T = -1;
  function je() {
    return !(e.unstable_now() - T < W);
  }
  function sn() {
    if (_ !== null) {
      var N = e.unstable_now();
      T = N;
      var P = !0;
      try {
        P = _(!0, N);
      } finally {
        P ? an() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var an;
  if (typeof a == "function")
    an = function () {
      a(sn);
    };
  else if (typeof MessageChannel < "u") {
    var Mu = new MessageChannel(),
      rc = Mu.port2;
    (Mu.port1.onmessage = sn),
      (an = function () {
        rc.postMessage(null);
      });
  } else
    an = function () {
      I(sn, 0);
    };
  function gl(N) {
    (_ = N), C || ((C = !0), an());
  }
  function wl(N, P) {
    j = I(function () {
      N(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), gl(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var z = m;
      m = P;
      try {
        return N();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, P) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = m;
      m = N;
      try {
        return P();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (N, P, z) {
      var B = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? B + z : B))
          : (z = B),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = z + Z),
        (N = {
          id: v++,
          callback: P,
          priorityLevel: N,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > B
          ? ((N.sortIndex = z),
            t(c, N),
            n(s) === null &&
              N === n(c) &&
              (k ? (f(j), (j = -1)) : (k = !0), wl(y, z - B)))
          : ((N.sortIndex = Z), t(s, N), x || w || ((x = !0), gl(E))),
        N
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (N) {
      var P = m;
      return function () {
        var z = m;
        m = P;
        try {
          return N.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(rs);
ns.exports = rs;
var jc = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc = Xn,
  ge = jc;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ls = new Set(),
  Tn = {};
function Lt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (Tn[e] = t, e = 0; e < t.length; e++) ls.add(t[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yl = Object.prototype.hasOwnProperty,
  zc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Iu = {},
  Uu = {};
function Lc(e) {
  return Yl.call(Uu, e)
    ? !0
    : Yl.call(Iu, e)
    ? !1
    : zc.test(e)
    ? (Uu[e] = !0)
    : ((Iu[e] = !0), !1);
}
function Tc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rc(e, t, n, r) {
  if (t === null || typeof t > "u" || Tc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function ae(e, t, n, r, l, i, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wi = /[\-:]([a-z])/g;
function Bi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wi, Bi);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wi, Bi);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wi, Bi);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rc(t, n, l, r) && (n = null),
    r || l === null
      ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  Mt = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  Ki = Symbol.for("react.strict_mode"),
  Gl = Symbol.for("react.profiler"),
  is = Symbol.for("react.provider"),
  us = Symbol.for("react.context"),
  Yi = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  Gi = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  os = Symbol.for("react.offscreen"),
  $u = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($u && e[$u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Sl;
function gn(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sl = (t && t[1]) || "";
    }
  return (
    `
` +
    Sl +
    e
  );
}
var El = !1;
function Nl(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          u = l.length - 1,
          o = i.length - 1;
        1 <= u && 0 <= o && l[u] !== i[o];

      )
        o--;
      for (; 1 <= u && 0 <= o; u--, o--)
        if (l[u] !== i[o]) {
          if (u !== 1 || o !== 1)
            do
              if ((u--, o--, 0 > o || l[u] !== i[o])) {
                var s =
                  `
` + l[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= o);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? gn(e) : "";
}
function Mc(e) {
  switch (e.tag) {
    case 5:
      return gn(e.type);
    case 16:
      return gn("Lazy");
    case 13:
      return gn("Suspense");
    case 19:
      return gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Mt:
      return "Portal";
    case Gl:
      return "Profiler";
    case Ki:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case us:
        return (e.displayName || "Context") + ".Consumer";
      case is:
        return (e._context.displayName || "Context") + ".Provider";
      case Yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gi:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function Oc(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Jl(t);
    case 8:
      return t === Ki ? "StrictMode" : "Mode";
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
function ft(e) {
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
function ss(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dc(e) {
  var t = ss(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = "" + u), i.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Dc(e));
}
function as(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ss(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Rr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cs(e, t) {
  (t = t.checked), t != null && Qi(e, "checked", t, !1);
}
function bl(e, t) {
  cs(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ei(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ei(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Vu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ei(e, t, n) {
  (t !== "number" || Rr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function fs(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ds(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ni(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ds(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ur,
  ps = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ur = ur || document.createElement("div"),
          ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sn = {
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
    strokeWidth: !0,
  },
  Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sn).forEach(function (e) {
  Fc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sn[t] = Sn[e]);
  });
});
function ms(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Sn.hasOwnProperty(e) && Sn[e])
    ? ("" + t).trim()
    : t + "px";
}
function hs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ms(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ic = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ri(e, t) {
  if (t) {
    if (Ic[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function li(e, t) {
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
var ii = null;
function Xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ui = null,
  Kt = null,
  Yt = null;
function Bu(e) {
  if ((e = qn(e))) {
    if (typeof ui != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = ol(t)), ui(e.stateNode, e.type, t));
  }
}
function vs(e) {
  Kt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Kt = e);
}
function ys() {
  if (Kt) {
    var e = Kt,
      t = Yt;
    if (((Yt = Kt = null), Bu(e), t)) for (e = 0; e < t.length; e++) Bu(t[e]);
  }
}
function gs(e, t) {
  return e(t);
}
function ws() {}
var Cl = !1;
function xs(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return gs(e, t, n);
  } finally {
    (Cl = !1), (Kt !== null || Yt !== null) && (ws(), ys());
  }
}
function Mn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var oi = !1;
if (Qe)
  try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener("test", fn, fn),
      window.removeEventListener("test", fn, fn);
  } catch {
    oi = !1;
  }
function Uc(e, t, n, r, l, i, u, o, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var En = !1,
  Mr = null,
  Or = !1,
  si = null,
  $c = {
    onError: function (e) {
      (En = !0), (Mr = e);
    },
  };
function Ac(e, t, n, r, l, i, u, o, s) {
  (En = !1), (Mr = null), Uc.apply($c, arguments);
}
function Vc(e, t, n, r, l, i, u, o, s) {
  if ((Ac.apply(this, arguments), En)) {
    if (En) {
      var c = Mr;
      (En = !1), (Mr = null);
    } else throw Error(g(198));
    Or || ((Or = !0), (si = c));
  }
}
function Tt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ks(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qu(e) {
  if (Tt(e) !== e) throw Error(g(188));
}
function Hc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tt(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Qu(l), e;
        if (i === r) return Qu(l), t;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var u = !1, o = l.child; o; ) {
        if (o === n) {
          (u = !0), (n = l), (r = i);
          break;
        }
        if (o === r) {
          (u = !0), (r = l), (n = i);
          break;
        }
        o = o.sibling;
      }
      if (!u) {
        for (o = i.child; o; ) {
          if (o === n) {
            (u = !0), (n = i), (r = l);
            break;
          }
          if (o === r) {
            (u = !0), (r = i), (n = l);
            break;
          }
          o = o.sibling;
        }
        if (!u) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Ss(e) {
  return (e = Hc(e)), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Es(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ns = ge.unstable_scheduleCallback,
  Ku = ge.unstable_cancelCallback,
  Wc = ge.unstable_shouldYield,
  Bc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Qc = ge.unstable_getCurrentPriorityLevel,
  Zi = ge.unstable_ImmediatePriority,
  Cs = ge.unstable_UserBlockingPriority,
  Dr = ge.unstable_NormalPriority,
  Kc = ge.unstable_LowPriority,
  _s = ge.unstable_IdlePriority,
  rl = null,
  Ue = null;
function Yc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Zc,
  Gc = Math.log,
  Xc = Math.LN2;
function Zc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gc(e) / Xc) | 0)) | 0;
}
var or = 64,
  sr = 4194304;
function xn(e) {
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
function Fr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var o = u & ~l;
    o !== 0 ? (r = xn(o)) : ((i &= u), i !== 0 && (r = xn(i)));
  } else (u = n & ~l), u !== 0 ? (r = xn(u)) : i !== 0 && (r = xn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Jc(e, t) {
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
function qc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - Re(i),
      o = 1 << u,
      s = l[u];
    s === -1
      ? (!(o & n) || o & r) && (l[u] = Jc(o, t))
      : s <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function ai(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function js() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function bc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ji(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function Ps(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zs,
  qi,
  Ls,
  Ts,
  Rs,
  ci = !1,
  ar = [],
  rt = null,
  lt = null,
  it = null,
  On = new Map(),
  Dn = new Map(),
  be = [],
  ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dn.delete(t.pointerId);
  }
}
function dn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = qn(t)), t !== null && qi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function tf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = dn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = dn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (it = dn(it, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return On.set(i, dn(On.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Dn.set(i, dn(Dn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Tt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ks(n)), t !== null)) {
          (e.blockedOn = t),
            Rs(e.priority, function () {
              Ls(n);
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
function Sr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ii = r), n.target.dispatchEvent(r), (ii = null);
    } else return (t = qn(n)), t !== null && qi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gu(e, t, n) {
  Sr(e) && n.delete(t);
}
function nf() {
  (ci = !1),
    rt !== null && Sr(rt) && (rt = null),
    lt !== null && Sr(lt) && (lt = null),
    it !== null && Sr(it) && (it = null),
    On.forEach(Gu),
    Dn.forEach(Gu);
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ci ||
      ((ci = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, nf)));
}
function Fn(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < ar.length) {
    pn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && pn(rt, e),
      lt !== null && pn(lt, e),
      it !== null && pn(it, e),
      On.forEach(t),
      Dn.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Ms(n), n.blockedOn === null && be.shift();
}
var Gt = Xe.ReactCurrentBatchConfig,
  Ir = !0;
function rf(e, t, n, r) {
  var l = M,
    i = Gt.transition;
  Gt.transition = null;
  try {
    (M = 1), bi(e, t, n, r);
  } finally {
    (M = l), (Gt.transition = i);
  }
}
function lf(e, t, n, r) {
  var l = M,
    i = Gt.transition;
  Gt.transition = null;
  try {
    (M = 4), bi(e, t, n, r);
  } finally {
    (M = l), (Gt.transition = i);
  }
}
function bi(e, t, n, r) {
  if (Ir) {
    var l = fi(e, t, n, r);
    if (l === null) Fl(e, t, r, Ur, n), Yu(e, r);
    else if (tf(l, e, t, n, r)) r.stopPropagation();
    else if ((Yu(e, r), t & 4 && -1 < ef.indexOf(e))) {
      for (; l !== null; ) {
        var i = qn(l);
        if (
          (i !== null && zs(i),
          (i = fi(e, t, n, r)),
          i === null && Fl(e, t, r, Ur, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, t, r, null, n);
  }
}
var Ur = null;
function fi(e, t, n, r) {
  if (((Ur = null), (e = Xi(r)), (e = xt(e)), e !== null))
    if (((t = Tt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ks(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ur = e), null;
}
function Os(e) {
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
      switch (Qc()) {
        case Zi:
          return 1;
        case Cs:
          return 4;
        case Dr:
        case Kc:
          return 16;
        case _s:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  eu = null,
  Er = null;
function Ds() {
  if (Er) return Er;
  var e,
    t = eu,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function Xu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, u) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? cr
        : Xu),
      (this.isPropagationStopped = Xu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tu = xe(un),
  Jn = V({}, un, { view: 0, detail: 0 }),
  uf = xe(Jn),
  jl,
  Pl,
  mn,
  ll = V({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mn &&
            (mn && e.type === "mousemove"
              ? ((jl = e.screenX - mn.screenX), (Pl = e.screenY - mn.screenY))
              : (Pl = jl = 0),
            (mn = e)),
          jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  Zu = xe(ll),
  of = V({}, ll, { dataTransfer: 0 }),
  sf = xe(of),
  af = V({}, Jn, { relatedTarget: 0 }),
  zl = xe(af),
  cf = V({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ff = xe(cf),
  df = V({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pf = xe(df),
  mf = V({}, un, { data: 0 }),
  Ju = xe(mf),
  hf = {
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
    MozPrintableKey: "Unidentified",
  },
  vf = {
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
    224: "Meta",
  },
  yf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yf[e]) ? !!t[e] : !1;
}
function nu() {
  return gf;
}
var wf = V({}, Jn, {
    key: function (e) {
      if (e.key) {
        var t = hf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nu,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xf = xe(wf),
  kf = V({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = xe(kf),
  Sf = V({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nu,
  }),
  Ef = xe(Sf),
  Nf = V({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cf = xe(Nf),
  _f = V({}, ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jf = xe(_f),
  Pf = [9, 13, 27, 32],
  ru = Qe && "CompositionEvent" in window,
  Nn = null;
Qe && "documentMode" in document && (Nn = document.documentMode);
var zf = Qe && "TextEvent" in window && !Nn,
  Fs = Qe && (!ru || (Nn && 8 < Nn && 11 >= Nn)),
  bu = " ",
  eo = !1;
function Is(e, t) {
  switch (e) {
    case "keyup":
      return Pf.indexOf(t.keyCode) !== -1;
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
function Us(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dt = !1;
function Lf(e, t) {
  switch (e) {
    case "compositionend":
      return Us(t);
    case "keypress":
      return t.which !== 32 ? null : ((eo = !0), bu);
    case "textInput":
      return (e = t.data), e === bu && eo ? null : e;
    default:
      return null;
  }
}
function Tf(e, t) {
  if (Dt)
    return e === "compositionend" || (!ru && Is(e, t))
      ? ((e = Ds()), (Er = eu = tt = null), (Dt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Fs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function to(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rf[e.type] : t === "textarea";
}
function $s(e, t, n, r) {
  vs(r),
    (t = $r(t, "onChange")),
    0 < t.length &&
      ((n = new tu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cn = null,
  In = null;
function Mf(e) {
  Zs(e, 0);
}
function il(e) {
  var t = Ut(e);
  if (as(t)) return e;
}
function Of(e, t) {
  if (e === "change") return t;
}
var As = !1;
if (Qe) {
  var Ll;
  if (Qe) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var no = document.createElement("div");
      no.setAttribute("oninput", "return;"),
        (Tl = typeof no.oninput == "function");
    }
    Ll = Tl;
  } else Ll = !1;
  As = Ll && (!document.documentMode || 9 < document.documentMode);
}
function ro() {
  Cn && (Cn.detachEvent("onpropertychange", Vs), (In = Cn = null));
}
function Vs(e) {
  if (e.propertyName === "value" && il(In)) {
    var t = [];
    $s(t, In, e, Xi(e)), xs(Mf, t);
  }
}
function Df(e, t, n) {
  e === "focusin"
    ? (ro(), (Cn = t), (In = n), Cn.attachEvent("onpropertychange", Vs))
    : e === "focusout" && ro();
}
function Ff(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il(In);
}
function If(e, t) {
  if (e === "click") return il(t);
}
function Uf(e, t) {
  if (e === "input" || e === "change") return il(t);
}
function $f(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == "function" ? Object.is : $f;
function Un(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Yl.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function lo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function io(e, t) {
  var n = lo(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = lo(n);
  }
}
function Hs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ws() {
  for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Rr(e.document);
  }
  return t;
}
function lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Af(e) {
  var t = Ws(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && lu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = io(n, i));
        var u = io(n, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Vf = Qe && "documentMode" in document && 11 >= document.documentMode,
  Ft = null,
  di = null,
  _n = null,
  pi = !1;
function uo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pi ||
    Ft == null ||
    Ft !== Rr(r) ||
    ((r = Ft),
    "selectionStart" in r && lu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_n && Un(_n, r)) ||
      ((_n = r),
      (r = $r(di, "onSelect")),
      0 < r.length &&
        ((t = new tu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ft))));
}
function fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var It = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  Rl = {},
  Bs = {};
Qe &&
  ((Bs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete It.animationend.animation,
    delete It.animationiteration.animation,
    delete It.animationstart.animation),
  "TransitionEvent" in window || delete It.transitionend.transition);
function ul(e) {
  if (Rl[e]) return Rl[e];
  if (!It[e]) return e;
  var t = It[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bs) return (Rl[e] = t[n]);
  return e;
}
var Qs = ul("animationend"),
  Ks = ul("animationiteration"),
  Ys = ul("animationstart"),
  Gs = ul("transitionend"),
  Xs = new Map(),
  oo =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  Xs.set(e, t), Lt(t, [e]);
}
for (var Ml = 0; Ml < oo.length; Ml++) {
  var Ol = oo[Ml],
    Hf = Ol.toLowerCase(),
    Wf = Ol[0].toUpperCase() + Ol.slice(1);
  pt(Hf, "on" + Wf);
}
pt(Qs, "onAnimationEnd");
pt(Ks, "onAnimationIteration");
pt(Ys, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Gs, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function so(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vc(r, t, void 0, e), (e.currentTarget = null);
}
function Zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var o = r[u],
            s = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), s !== i && l.isPropagationStopped())) break e;
          so(l, o, c), (i = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((o = r[u]),
            (s = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          so(l, o, c), (i = s);
        }
    }
  }
  if (Or) throw ((e = si), (Or = !1), (si = null), e);
}
function D(e, t) {
  var n = t[gi];
  n === void 0 && (n = t[gi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Js(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), Js(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      ls.forEach(function (n) {
        n !== "selectionchange" && (Bf.has(n) || Dl(n, !1, e), Dl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || ((t[dr] = !0), Dl("selectionchange", !1, t));
  }
}
function Js(e, t, n, r) {
  switch (Os(t)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = lf;
      break;
    default:
      l = bi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !oi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; o !== null; ) {
          if (((u = xt(o)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = i = u;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  xs(function () {
    var c = i,
      v = Xi(n),
      h = [];
    e: {
      var m = Xs.get(e);
      if (m !== void 0) {
        var w = tu,
          x = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = xf;
            break;
          case "focusin":
            (x = "focus"), (w = zl);
            break;
          case "focusout":
            (x = "blur"), (w = zl);
            break;
          case "beforeblur":
          case "afterblur":
            w = zl;
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
            w = Zu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ef;
            break;
          case Qs:
          case Ks:
          case Ys:
            w = ff;
            break;
          case Gs:
            w = Cf;
            break;
          case "scroll":
            w = uf;
            break;
          case "wheel":
            w = jf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = qu;
        }
        var k = (t & 4) !== 0,
          I = !k && e === "scroll",
          f = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Mn(a, f)), y != null && k.push(An(a, y, d)))),
            I)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((m = new w(m, x, null, n, v)), h.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ii &&
            (x = n.relatedTarget || n.fromElement) &&
            (xt(x) || x[Ke]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? xt(x) : null),
              x !== null &&
                ((I = Tt(x)), x !== I || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((k = Zu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = qu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (I = w == null ? m : Ut(w)),
            (d = x == null ? m : Ut(x)),
            (m = new k(y, a + "leave", w, n, v)),
            (m.target = I),
            (m.relatedTarget = d),
            (y = null),
            xt(v) === c &&
              ((k = new k(f, a + "enter", x, n, v)),
              (k.target = d),
              (k.relatedTarget = I),
              (y = k)),
            (I = y),
            w && x)
          )
            t: {
              for (k = w, f = x, a = 0, d = k; d; d = Rt(d)) a++;
              for (d = 0, y = f; y; y = Rt(y)) d++;
              for (; 0 < a - d; ) (k = Rt(k)), a--;
              for (; 0 < d - a; ) (f = Rt(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Rt(k)), (f = Rt(f));
              }
              k = null;
            }
          else k = null;
          w !== null && ao(h, m, w, k, !1),
            x !== null && I !== null && ao(h, I, x, k, !0);
        }
      }
      e: {
        if (
          ((m = c ? Ut(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var E = Of;
        else if (to(m))
          if (As) E = Uf;
          else {
            E = Ff;
            var C = Df;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = If);
        if (E && (E = E(e, c))) {
          $s(h, E, n, v);
          break e;
        }
        C && C(e, m, c),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            ei(m, "number", m.value);
      }
      switch (((C = c ? Ut(c) : window), e)) {
        case "focusin":
          (to(C) || C.contentEditable === "true") &&
            ((Ft = C), (di = c), (_n = null));
          break;
        case "focusout":
          _n = di = Ft = null;
          break;
        case "mousedown":
          pi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pi = !1), uo(h, n, v);
          break;
        case "selectionchange":
          if (Vf) break;
        case "keydown":
        case "keyup":
          uo(h, n, v);
      }
      var _;
      if (ru)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Dt
          ? Is(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Fs &&
          n.locale !== "ko" &&
          (Dt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Dt && (_ = Ds())
            : ((tt = v),
              (eu = "value" in tt ? tt.value : tt.textContent),
              (Dt = !0))),
        (C = $r(c, j)),
        0 < C.length &&
          ((j = new Ju(j, e, null, n, v)),
          h.push({ event: j, listeners: C }),
          _ ? (j.data = _) : ((_ = Us(n)), _ !== null && (j.data = _)))),
        (_ = zf ? Lf(e, n) : Tf(e, n)) &&
          ((c = $r(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new Ju("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: c }),
            (v.data = _)));
    }
    Zs(h, t);
  });
}
function An(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $r(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Mn(e, n)),
      i != null && r.unshift(An(e, i, l)),
      (i = Mn(e, t)),
      i != null && r.push(An(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ao(e, t, n, r, l) {
  for (var i = t._reactName, u = []; n !== null && n !== r; ) {
    var o = n,
      s = o.alternate,
      c = o.stateNode;
    if (s !== null && s === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      l
        ? ((s = Mn(n, i)), s != null && u.unshift(An(n, s, o)))
        : l || ((s = Mn(n, i)), s != null && u.push(An(n, s, o)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var Qf = /\r\n?/g,
  Kf = /\u0000|\uFFFD/g;
function co(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qf,
      `
`
    )
    .replace(Kf, "");
}
function pr(e, t, n) {
  if (((t = co(t)), co(e) !== t && n)) throw Error(g(425));
}
function Ar() {}
var mi = null,
  hi = null;
function vi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yi = typeof setTimeout == "function" ? setTimeout : void 0,
  Yf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fo = typeof Promise == "function" ? Promise : void 0,
  Gf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fo < "u"
      ? function (e) {
          return fo.resolve(null).then(e).catch(Xf);
        }
      : yi;
function Xf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Fn(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function po(e) {
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
var on = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + on,
  Vn = "__reactProps$" + on,
  Ke = "__reactContainer$" + on,
  gi = "__reactEvents$" + on,
  Zf = "__reactListeners$" + on,
  Jf = "__reactHandles$" + on;
function xt(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Ie])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = po(e); e !== null; ) {
          if ((n = e[Ie])) return n;
          e = po(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qn(e) {
  return (
    (e = e[Ie] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function ol(e) {
  return e[Vn] || null;
}
var wi = [],
  $t = -1;
function mt(e) {
  return { current: e };
}
function F(e) {
  0 > $t || ((e.current = wi[$t]), (wi[$t] = null), $t--);
}
function O(e, t) {
  $t++, (wi[$t] = e.current), (e.current = t);
}
var dt = {},
  ie = mt(dt),
  de = mt(!1),
  Ct = dt;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Vr() {
  F(de), F(ie);
}
function mo(e, t, n) {
  if (ie.current !== dt) throw Error(g(168));
  O(ie, t), O(de, n);
}
function qs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Oc(e) || "Unknown", l));
  return V({}, n, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Ct = ie.current),
    O(ie, e),
    O(de, de.current),
    !0
  );
}
function ho(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = qs(e, t, Ct)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(de),
      F(ie),
      O(ie, e))
    : F(de),
    O(de, n);
}
var Ve = null,
  sl = !1,
  Ul = !1;
function bs(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function qf(e) {
  (sl = !0), bs(e);
}
function ht() {
  if (!Ul && Ve !== null) {
    Ul = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (sl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ns(Zi, ht), l);
    } finally {
      (M = t), (Ul = !1);
    }
  }
  return null;
}
var At = [],
  Vt = 0,
  Wr = null,
  Br = 0,
  ke = [],
  Se = 0,
  _t = null,
  He = 1,
  We = "";
function gt(e, t) {
  (At[Vt++] = Br), (At[Vt++] = Wr), (Wr = e), (Br = t);
}
function ea(e, t, n) {
  (ke[Se++] = He), (ke[Se++] = We), (ke[Se++] = _t), (_t = e);
  var r = He;
  e = We;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Re(t) + l;
  if (30 < i) {
    var u = l - (l % 5);
    (i = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (He = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (We = i + e);
  } else (He = (1 << i) | (n << l) | r), (We = e);
}
function iu(e) {
  e.return !== null && (gt(e, 1), ea(e, 1, 0));
}
function uu(e) {
  for (; e === Wr; )
    (Wr = At[--Vt]), (At[Vt] = null), (Br = At[--Vt]), (At[Vt] = null);
  for (; e === _t; )
    (_t = ke[--Se]),
      (ke[Se] = null),
      (We = ke[--Se]),
      (ke[Se] = null),
      (He = ke[--Se]),
      (ke[Se] = null);
}
var ye = null,
  ve = null,
  U = !1,
  Te = null;
function ta(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _t !== null ? { id: He, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ki(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!vo(e, t)) {
        if (xi(e)) throw Error(g(418));
        t = ut(n.nextSibling);
        var r = ye;
        t && vo(e, t)
          ? ta(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (xi(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function yo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function mr(e) {
  if (e !== ye) return !1;
  if (!U) return yo(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vi(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (xi(e)) throw (na(), Error(g(418)));
    for (; t; ) ta(e, t), (t = ut(t.nextSibling));
  }
  if ((yo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function na() {
  for (var e = ve; e; ) e = ut(e.nextSibling);
}
function bt() {
  (ve = ye = null), (U = !1);
}
function ou(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var bf = Xe.ReactCurrentBatchConfig;
function hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (u) {
            var o = l.refs;
            u === null ? delete o[i] : (o[i] = u);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function go(e) {
  var t = e._init;
  return t(e._payload);
}
function ra(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function u(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Ql(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, y) {
    var E = d.type;
    return E === Ot
      ? v(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Je &&
            go(E) === a.type))
      ? ((y = l(a, d.props)), (y.ref = hn(f, a, d)), (y.return = f), y)
      : ((y = Tr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = hn(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Kl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, y, E) {
    return a === null || a.tag !== 7
      ? ((a = Nt(d, f.mode, y, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Ql("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return (
            (d = Tr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = hn(f, null, a)),
            (d.return = f),
            d
          );
        case Mt:
          return (a = Kl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var y = a._init;
          return h(f, y(a._payload), d);
      }
      if (wn(a) || cn(a))
        return (a = Nt(a, f.mode, d, null)), (a.return = f), a;
      hr(f, a);
    }
    return null;
  }
  function m(f, a, d, y) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : o(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === E ? s(f, a, d, y) : null;
        case Mt:
          return d.key === E ? c(f, a, d, y) : null;
        case Je:
          return (E = d._init), m(f, a, E(d._payload), y);
      }
      if (wn(d) || cn(d)) return E !== null ? null : v(f, a, d, y, null);
      hr(f, d);
    }
    return null;
  }
  function w(f, a, d, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), o(a, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case lr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, E);
        case Mt:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, E);
        case Je:
          var C = y._init;
          return w(f, a, d, C(y._payload), E);
      }
      if (wn(y) || cn(y)) return (f = f.get(d) || null), v(a, f, y, E, null);
      hr(a, y);
    }
    return null;
  }
  function x(f, a, d, y) {
    for (
      var E = null, C = null, _ = a, j = (a = 0), W = null;
      _ !== null && j < d.length;
      j++
    ) {
      _.index > j ? ((W = _), (_ = null)) : (W = _.sibling);
      var T = m(f, _, d[j], y);
      if (T === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && T.alternate === null && t(f, _),
        (a = i(T, a, j)),
        C === null ? (E = T) : (C.sibling = T),
        (C = T),
        (_ = W);
    }
    if (j === d.length) return n(f, _), U && gt(f, j), E;
    if (_ === null) {
      for (; j < d.length; j++)
        (_ = h(f, d[j], y)),
          _ !== null &&
            ((a = i(_, a, j)), C === null ? (E = _) : (C.sibling = _), (C = _));
      return U && gt(f, j), E;
    }
    for (_ = r(f, _); j < d.length; j++)
      (W = w(_, f, j, d[j], y)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? j : W.key),
          (a = i(W, a, j)),
          C === null ? (E = W) : (C.sibling = W),
          (C = W));
    return (
      e &&
        _.forEach(function (je) {
          return t(f, je);
        }),
      U && gt(f, j),
      E
    );
  }
  function k(f, a, d, y) {
    var E = cn(d);
    if (typeof E != "function") throw Error(g(150));
    if (((d = E.call(d)), d == null)) throw Error(g(151));
    for (
      var C = (E = null), _ = a, j = (a = 0), W = null, T = d.next();
      _ !== null && !T.done;
      j++, T = d.next()
    ) {
      _.index > j ? ((W = _), (_ = null)) : (W = _.sibling);
      var je = m(f, _, T.value, y);
      if (je === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && je.alternate === null && t(f, _),
        (a = i(je, a, j)),
        C === null ? (E = je) : (C.sibling = je),
        (C = je),
        (_ = W);
    }
    if (T.done) return n(f, _), U && gt(f, j), E;
    if (_ === null) {
      for (; !T.done; j++, T = d.next())
        (T = h(f, T.value, y)),
          T !== null &&
            ((a = i(T, a, j)), C === null ? (E = T) : (C.sibling = T), (C = T));
      return U && gt(f, j), E;
    }
    for (_ = r(f, _); !T.done; j++, T = d.next())
      (T = w(_, f, j, T.value, y)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? j : T.key),
          (a = i(T, a, j)),
          C === null ? (E = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        _.forEach(function (sn) {
          return t(f, sn);
        }),
      U && gt(f, j),
      E
    );
  }
  function I(f, a, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ot &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === Ot)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Je &&
                    go(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = hn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Ot
              ? ((a = Nt(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = Tr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = hn(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return u(f);
        case Mt:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Kl(d, f.mode, y)), (a.return = f), (f = a);
          }
          return u(f);
        case Je:
          return (C = d._init), I(f, a, C(d._payload), y);
      }
      if (wn(d)) return x(f, a, d, y);
      if (cn(d)) return k(f, a, d, y);
      hr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Ql(d, f.mode, y)), (a.return = f), (f = a)),
        u(f))
      : n(f, a);
  }
  return I;
}
var en = ra(!0),
  la = ra(!1),
  Qr = mt(null),
  Kr = null,
  Ht = null,
  su = null;
function au() {
  su = Ht = Kr = null;
}
function cu(e) {
  var t = Qr.current;
  F(Qr), (e._currentValue = t);
}
function Si(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xt(e, t) {
  (Kr = e),
    (su = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ce(e) {
  var t = e._currentValue;
  if (su !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Kr === null) throw Error(g(308));
      (Ht = e), (Kr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var kt = null;
function fu(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function ia(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), fu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function du(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ua(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Be(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), fu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
  }
}
function wo(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = u) : (i = i.next = u), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var i = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var s = o,
      c = s.next;
    (s.next = null), u === null ? (i = c) : (u.next = c), (u = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (o = v.lastBaseUpdate),
      o !== u &&
        (o === null ? (v.firstBaseUpdate = c) : (o.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (u = 0), (v = c = s = null), (o = i);
    do {
      var m = o.lane,
        w = o.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var x = e,
            k = o;
          switch (((m = t), (w = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == "function")) {
                h = x.call(w, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (m = typeof x == "function" ? x.call(w, h, m) : x),
                m == null)
              )
                break e;
              h = V({}, h, m);
              break e;
            case 2:
              qe = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [o]) : m.push(o));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = h)) : (v = v.next = w),
          (u |= m);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (m = o),
          (o = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (u |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Pt |= u), (e.lanes = u), (e.memoizedState = h);
  }
}
function xo(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var bn = {},
  $e = mt(bn),
  Hn = mt(bn),
  Wn = mt(bn);
function St(e) {
  if (e === bn) throw Error(g(174));
  return e;
}
function pu(e, t) {
  switch ((O(Wn, t), O(Hn, e), O($e, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ni(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ni(t, e));
  }
  F($e), O($e, t);
}
function tn() {
  F($e), F(Hn), F(Wn);
}
function oa(e) {
  St(Wn.current);
  var t = St($e.current),
    n = ni(t, e.type);
  t !== n && (O(Hn, e), O($e, n));
}
function mu(e) {
  Hn.current === e && (F($e), F(Hn));
}
var $ = mt(0);
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function hu() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var _r = Xe.ReactCurrentDispatcher,
  Al = Xe.ReactCurrentBatchConfig,
  jt = 0,
  A = null,
  G = null,
  J = null,
  Xr = !1,
  jn = !1,
  Bn = 0,
  ed = 0;
function ne() {
  throw Error(g(321));
}
function vu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function yu(e, t, n, r, l, i) {
  if (
    ((jt = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? ld : id),
    (e = n(r, l)),
    jn)
  ) {
    i = 0;
    do {
      if (((jn = !1), (Bn = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (J = G = null),
        (t.updateQueue = null),
        (_r.current = ud),
        (e = n(r, l));
    } while (jn);
  }
  if (
    ((_r.current = Zr),
    (t = G !== null && G.next !== null),
    (jt = 0),
    (J = G = A = null),
    (Xr = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function gu() {
  var e = Bn !== 0;
  return (Bn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (A.memoizedState = J = e) : (J = J.next = e), J;
}
function _e() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = J === null ? A.memoizedState : J.next;
  if (t !== null) (J = t), (G = e);
  else {
    if (e === null) throw Error(g(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      J === null ? (A.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = i.next), (i.next = u);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var o = (u = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((jt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((o = s = h), (u = r)) : (s = s.next = h),
          (A.lanes |= v),
          (Pt |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (u = r) : (s.next = o),
      Oe(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (Pt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var u = (l = l.next);
    do (i = e(i, u.action)), (u = u.next);
    while (u !== l);
    Oe(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function sa() {}
function aa(e, t) {
  var n = A,
    r = _e(),
    l = t(),
    i = !Oe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    wu(da.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, fa.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(g(349));
    jt & 30 || ca(n, t, l);
  }
  return l;
}
function ca(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), pa(t) && ma(e);
}
function da(e, t, n) {
  return n(function () {
    pa(t) && ma(e);
  });
}
function pa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function ma(e) {
  var t = Ye(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function ko(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ha() {
  return _e().memoizedState;
}
function jr(e, t, n, r) {
  var l = Fe();
  (A.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function al(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var u = G.memoizedState;
    if (((i = u.destroy), r !== null && vu(r, u.deps))) {
      l.memoizedState = Kn(t, n, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Kn(1 | t, n, i, r));
}
function So(e, t) {
  return jr(8390656, 8, e, t);
}
function wu(e, t) {
  return al(2048, 8, e, t);
}
function va(e, t) {
  return al(4, 2, e, t);
}
function ya(e, t) {
  return al(4, 4, e, t);
}
function ga(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), al(4, 4, ga.bind(null, t, e), n)
  );
}
function xu() {}
function xa(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ka(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sa(e, t, n) {
  return jt & 21
    ? (Oe(n, t) || ((n = js()), (A.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function td(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (Al.transition = r);
  }
}
function Ea() {
  return _e().memoizedState;
}
function nd(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Na(e))
  )
    Ca(t, n);
  else if (((n = ia(e, t, n, r)), n !== null)) {
    var l = oe();
    Me(n, e, r, l), _a(n, t, r);
  }
}
function rd(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Na(e)) Ca(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var u = t.lastRenderedState,
          o = i(u, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), Oe(o, u))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), fu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ia(e, t, l, r)),
      n !== null && ((l = oe()), Me(n, e, r, l), _a(n, t, r));
  }
}
function Na(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function Ca(e, t) {
  jn = Xr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _a(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
  }
}
var Zr = {
    readContext: Ce,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: Ce,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ce,
    useEffect: So,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        jr(4194308, 4, ga.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return jr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return jr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ko,
    useDebugValue: xu,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = ko(!1),
        t = e[0];
      return (e = td.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Fe();
      if (U) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(g(349));
        jt & 30 || ca(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        So(da.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kn(9, fa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = q.identifierPrefix;
      if (U) {
        var n = We,
          r = He;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ed++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: wu,
    useImperativeHandle: wa,
    useInsertionEffect: va,
    useLayoutEffect: ya,
    useMemo: ka,
    useReducer: Vl,
    useRef: ha,
    useState: function () {
      return Vl(Qn);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = _e();
      return Sa(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Qn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: sa,
    useSyncExternalStore: aa,
    useId: Ea,
    unstable_isNewReconciler: !1,
  },
  ud = {
    readContext: Ce,
    useCallback: xa,
    useContext: Ce,
    useEffect: wu,
    useImperativeHandle: wa,
    useInsertionEffect: va,
    useLayoutEffect: ya,
    useMemo: ka,
    useReducer: Hl,
    useRef: ha,
    useState: function () {
      return Hl(Qn);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = _e();
      return G === null ? (t.memoizedState = e) : Sa(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Qn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: sa,
    useSyncExternalStore: aa,
    useId: Ea,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ei(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = at(e),
      i = Be(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Me(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = at(e),
      i = Be(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Me(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = at(e),
      l = Be(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ot(e, l, r)),
      t !== null && (Me(t, e, r, n), Cr(t, e, r));
  },
};
function Eo(e, t, n, r, l, i, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, r) || !Un(l, i)
      : !0
  );
}
function ja(e, t, n) {
  var r = !1,
    l = dt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ce(i))
      : ((l = pe(t) ? Ct : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qt(e, l) : dt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function No(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), du(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ce(i))
    : ((i = pe(t) ? Ct : ie.current), (l.context = qt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ei(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Yr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ci(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var od = typeof WeakMap == "function" ? WeakMap : Map;
function Pa(e, t, n) {
  (n = Be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      qr || ((qr = !0), (Di = r)), Ci(e, t);
    }),
    n
  );
}
function za(e, t, n) {
  (n = Be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ci(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ci(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
function Co(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new od();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kd.bind(null, e, t, n)), t.then(e, e));
}
function _o(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function jo(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Be(-1, 1)), (t.tag = 2), ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sd = Xe.ReactCurrentOwner,
  fe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? la(t, null, n, r) : en(t, e.child, n, r);
}
function Po(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Xt(t, l),
    (r = yu(e, t, n, r, i, l)),
    (n = gu()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && n && iu(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function zo(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Pu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), La(e, t, i, r, l))
      : ((e = Tr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var u = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Un), n(u, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function La(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Un(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return _i(e, t, n, r, l);
}
function Ta(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Bt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(Bt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        O(Bt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(Bt, he),
      (he |= r);
  return ue(e, t, l, n), t.child;
}
function Ra(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _i(e, t, n, r, l) {
  var i = pe(n) ? Ct : ie.current;
  return (
    (i = qt(t, i)),
    Xt(t, l),
    (n = yu(e, t, n, r, i, l)),
    (r = gu()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && r && iu(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Lo(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Hr(t);
  } else i = !1;
  if ((Xt(t, l), t.stateNode === null))
    Pr(e, t), ja(t, n, r), Ni(t, n, r, l), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      o = t.memoizedProps;
    u.props = o;
    var s = u.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ce(c))
      : ((c = pe(n) ? Ct : ie.current), (c = qt(t, c)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((o !== r || s !== c) && No(t, u, r, c)),
      (qe = !1);
    var m = t.memoizedState;
    (u.state = m),
      Yr(t, r, u, l),
      (s = t.memoizedState),
      o !== r || m !== s || de.current || qe
        ? (typeof v == "function" && (Ei(t, n, v, r), (s = t.memoizedState)),
          (o = qe || Eo(t, n, o, r, m, s, c))
            ? (h ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = c),
          (r = o))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      ua(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : ze(t.type, o)),
      (u.props = c),
      (h = t.pendingProps),
      (m = u.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ce(s))
        : ((s = pe(n) ? Ct : ie.current), (s = qt(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((o !== h || m !== s) && No(t, u, r, s)),
      (qe = !1),
      (m = t.memoizedState),
      (u.state = m),
      Yr(t, r, u, l);
    var x = t.memoizedState;
    o !== h || m !== x || de.current || qe
      ? (typeof w == "function" && (Ei(t, n, w, r), (x = t.memoizedState)),
        (c = qe || Eo(t, n, c, r, m, x, s) || !1)
          ? (v ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, x, s),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, x, s)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (u.props = r),
        (u.state = x),
        (u.context = s),
        (r = c))
      : (typeof u.componentDidUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ji(e, t, n, r, i, l);
}
function ji(e, t, n, r, l, i) {
  Ra(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return l && ho(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (sd.current = t);
  var o =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = en(t, e.child, null, i)), (t.child = en(t, null, o, i)))
      : ue(e, t, o, i),
    (t.memoizedState = r.state),
    l && ho(t, n, !0),
    t.child
  );
}
function Ma(e) {
  var t = e.stateNode;
  t.pendingContext
    ? mo(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mo(e, t.context, !1),
    pu(e, t.containerInfo);
}
function To(e, t, n, r, l) {
  return bt(), ou(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oa(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    i = !1,
    u = (t.flags & 128) !== 0,
    o;
  if (
    ((o = u) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O($, l & 1),
    e === null)
  )
    return (
      ki(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = pl(u, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zi(n)),
              (t.memoizedState = Pi),
              e)
            : ku(t, u))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return ad(e, t, u, r, o, l, n);
  if (i) {
    (i = r.fallback), (u = t.mode), (l = e.child), (o = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = ct(o, i)) : ((i = Nt(i, u, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? zi(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (i.memoizedState = u),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ct(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ku(e, t) {
  return (
    (t = pl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vr(e, t, n, r) {
  return (
    r !== null && ou(r),
    en(t, e.child, null, n),
    (e = ku(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ad(e, t, n, r, l, i, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(g(422)))), vr(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = pl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Nt(i, l, u, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && en(t, e.child, null, u),
        (t.child.memoizedState = zi(u)),
        (t.memoizedState = Pi),
        i);
  if (!(t.mode & 1)) return vr(e, t, u, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(g(419))), (r = Wl(i, r, void 0)), vr(e, t, u, r);
  }
  if (((o = (u & e.childLanes) !== 0), fe || o)) {
    if (((r = q), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ye(e, l), Me(r, e, l, -1));
    }
    return ju(), (r = Wl(Error(g(421)))), vr(e, t, u, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ve = ut(l.nextSibling)),
      (ye = t),
      (U = !0),
      (Te = null),
      e !== null &&
        ((ke[Se++] = He),
        (ke[Se++] = We),
        (ke[Se++] = _t),
        (He = e.id),
        (We = e.overflow),
        (_t = t)),
      (t = ku(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ro(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Si(e.return, t, n);
}
function Bl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ro(e, n, t);
        else if (e.tag === 19) Ro(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Bl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Bl(t, !0, n, null, i);
        break;
      case "together":
        Bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ma(t), bt();
      break;
    case 5:
      oa(t);
      break;
    case 1:
      pe(t.type) && Hr(t);
      break;
    case 4:
      pu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      O(Qr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Oa(e, t, n)
          : (O($, $.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      O($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Da(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ta(e, t, n);
  }
  return Ge(e, t, n);
}
var Fa, Li, Ia, Ua;
Fa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Li = function () {};
Ia = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), St($e.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ql(e, l)), (r = ql(e, r)), (i = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ti(e, l)), (r = ti(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ar);
    }
    ri(n, r);
    var u;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var o = l[c];
          for (u in o) o.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Tn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((o = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== o && (s != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (u in o)
              !o.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                o[u] !== s[u] &&
                (n || (n = {}), (n[u] = s[u]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (o = o ? o.__html : void 0),
              s != null && o !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Tn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && D("scroll", e),
                  i || o === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ua = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fd(e, t, n) {
  var r = t.pendingProps;
  switch ((uu(t), t.tag)) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && Vr(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        F(de),
        F(ie),
        hu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (Ui(Te), (Te = null)))),
        Li(e, t),
        re(t),
        null
      );
    case 5:
      mu(t);
      var l = St(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ia(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return re(t), null;
        }
        if (((e = St($e.current)), mr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ie] = t), (r[Vn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) D(kn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Au(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Hu(r, i), D("invalid", r);
          }
          ri(n, i), (l = null);
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var o = i[u];
              u === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : Tn.hasOwnProperty(u) &&
                  o != null &&
                  u === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              ir(r), Vu(r, i, !0);
              break;
            case "textarea":
              ir(r), Wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ar);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ds(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[Ie] = t),
            (e[Vn] = r),
            Fa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = li(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) D(kn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Au(e, r), (l = ql(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Hu(e, r), (l = ti(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            ri(n, l), (o = l);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var s = o[i];
                i === "style"
                  ? hs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ps(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Tn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && D("scroll", e)
                      : s != null && Qi(e, i, s, u));
              }
            switch (n) {
              case "input":
                ir(e), Vu(e, r, !1);
                break;
              case "textarea":
                ir(e), Wu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = St(Wn.current)), St($e.current), mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ie] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ie] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (F($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          na(), bt(), (t.flags |= 98560), (i = !1);
        else if (((i = mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Ie] = t;
          } else
            bt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Te !== null && (Ui(Te), (Te = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : ju())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        tn(), Li(e, t), e === null && $n(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return cu(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Vr(), re(t), null;
    case 19:
      if ((F($), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
        if (r) vn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = Gr(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    vn(i, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (e = u.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return O($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > rn &&
            ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gr(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !u.alternate && !U)
            )
              return re(t), null;
          } else
            2 * Q() - i.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = i.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (i.last = u));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          O($, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        _u(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function dd(e, t) {
  switch ((uu(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Vr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        F(de),
        F(ie),
        hu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mu(t), null;
    case 13:
      if ((F($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        bt();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F($), null;
    case 4:
      return tn(), null;
    case 10:
      return cu(t.type._context), null;
    case 22:
    case 23:
      return _u(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1,
  le = !1,
  pd = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function Ti(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Mo = !1;
function md(e, t) {
  if (((mi = Ir), (e = Ws()), lu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            o = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (o = u + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = u + r),
                h.nodeType === 3 && (u += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (o = u),
                m === i && ++v === r && (s = u),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n = o === -1 || s === -1 ? null : { start: o, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hi = { focusedElem: e, selectionRange: n }, Ir = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    I = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ze(t.type, k),
                      I
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          H(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (x = Mo), (Mo = !1), x;
}
function Pn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ti(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ri(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $a(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $a(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ie], delete t[Vn], delete t[gi], delete t[Zf], delete t[Jf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Aa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Oo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Aa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ar));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), (e = e.sibling);
}
function Oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
var b = null,
  Le = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Va(e, t, n), (n = n.sibling);
}
function Va(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Wt(n, t);
    case 6:
      var r = b,
        l = Le;
      (b = null),
        Ze(e, t, n),
        (b = r),
        (Le = l),
        b !== null &&
          (Le
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Le
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Il(e.parentNode, n)
              : e.nodeType === 1 && Il(e, n),
            Fn(e))
          : Il(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Le),
        (b = n.stateNode.containerInfo),
        (Le = !0),
        Ze(e, t, n),
        (b = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            u = i.destroy;
          (i = i.tag),
            u !== void 0 && (i & 2 || i & 4) && Ti(n, t, u),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          H(n, t, o);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Do(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pd()),
      t.forEach(function (r) {
        var l = Ed.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          u = t,
          o = u;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (b = o.stateNode), (Le = !1);
              break e;
            case 3:
              (b = o.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (b = o.stateNode.containerInfo), (Le = !0);
              break e;
          }
          o = o.return;
        }
        if (b === null) throw Error(g(160));
        Va(i, u, l), (b = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        H(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ha(t, e), (t = t.sibling);
}
function Ha(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), De(e), r & 4)) {
        try {
          Pn(3, e, e.return), fl(3, e);
        } catch (k) {
          H(e, e.return, k);
        }
        try {
          Pn(5, e, e.return);
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 1:
      Pe(t, e), De(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        De(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (k) {
          H(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          u = n !== null ? n.memoizedProps : i,
          o = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && cs(l, i),
              li(o, u);
            var c = li(o, i);
            for (u = 0; u < s.length; u += 2) {
              var v = s[u],
                h = s[u + 1];
              v === "style"
                ? hs(l, h)
                : v === "dangerouslySetInnerHTML"
                ? ps(l, h)
                : v === "children"
                ? Rn(l, h)
                : Qi(l, v, h, c);
            }
            switch (o) {
              case "input":
                bl(l, i);
                break;
              case "textarea":
                fs(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Qt(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Qt(l, !!i.multiple, i.defaultValue, !0)
                      : Qt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Vn] = i;
          } catch (k) {
            H(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fn(t.containerInfo);
        } catch (k) {
          H(e, e.return, k);
        }
      break;
    case 4:
      Pe(t, e), De(e);
      break;
    case 13:
      Pe(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Nu = Q())),
        r & 4 && Do(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || v), Pe(t, e), (le = c)) : Pe(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (h = S = v; S !== null; ) {
              switch (((m = S), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pn(4, m, m.return);
                  break;
                case 1:
                  Wt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (k) {
                      H(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Wt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Io(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (S = w)) : Io(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = h.stateNode),
                      (s = h.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (o.style.display = ms("display", u)));
              } catch (k) {
                H(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (k) {
                H(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), De(e), r & 4 && Do(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Aa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var i = Oo(e);
          Oi(e, i, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            o = Oo(e);
          Mi(e, o, u);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hd(e, t, n) {
  (S = e), Wa(e);
}
function Wa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || yr;
      if (!u) {
        var o = l.alternate,
          s = (o !== null && o.memoizedState !== null) || le;
        o = yr;
        var c = le;
        if (((yr = u), (le = s) && !c))
          for (S = l; S !== null; )
            (u = S),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Uo(l)
                : s !== null
                ? ((s.return = u), (S = s))
                : Uo(l);
        for (; i !== null; ) (S = i), Wa(i), (i = i.sibling);
        (S = l), (yr = o), (le = c);
      }
      Fo(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Fo(e);
  }
}
function Fo(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && xo(t, i, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xo(t, u, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Fn(h);
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
              throw Error(g(163));
          }
        le || (t.flags & 512 && Ri(t));
      } catch (m) {
        H(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Io(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Uo(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ri(t);
          } catch (s) {
            H(t, i, s);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Ri(t);
          } catch (s) {
            H(t, u, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (S = o);
      break;
    }
    S = t.return;
  }
}
var vd = Math.ceil,
  Jr = Xe.ReactCurrentDispatcher,
  Su = Xe.ReactCurrentOwner,
  Ne = Xe.ReactCurrentBatchConfig,
  R = 0,
  q = null,
  Y = null,
  ee = 0,
  he = 0,
  Bt = mt(0),
  X = 0,
  Yn = null,
  Pt = 0,
  dl = 0,
  Eu = 0,
  zn = null,
  ce = null,
  Nu = 0,
  rn = 1 / 0,
  Ae = null,
  qr = !1,
  Di = null,
  st = null,
  gr = !1,
  nt = null,
  br = 0,
  Ln = 0,
  Fi = null,
  zr = -1,
  Lr = 0;
function oe() {
  return R & 6 ? Q() : zr !== -1 ? zr : (zr = Q());
}
function at(e) {
  return e.mode & 1
    ? R & 2 && ee !== 0
      ? ee & -ee
      : bf.transition !== null
      ? (Lr === 0 && (Lr = js()), Lr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Os(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Ln) throw ((Ln = 0), (Fi = null), Error(g(185)));
  Zn(e, n, r),
    (!(R & 2) || e !== q) &&
      (e === q && (!(R & 2) && (dl |= n), X === 4 && et(e, ee)),
      me(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((rn = Q() + 500), sl && ht()));
}
function me(e, t) {
  var n = e.callbackNode;
  qc(e, t);
  var r = Fr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && Ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ku(n), t === 1))
      e.tag === 0 ? qf($o.bind(null, e)) : bs($o.bind(null, e)),
        Gf(function () {
          !(R & 6) && ht();
        }),
        (n = null);
    else {
      switch (Ps(r)) {
        case 1:
          n = Zi;
          break;
        case 4:
          n = Cs;
          break;
        case 16:
          n = Dr;
          break;
        case 536870912:
          n = _s;
          break;
        default:
          n = Dr;
      }
      n = Ja(n, Ba.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ba(e, t) {
  if (((zr = -1), (Lr = 0), R & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Fr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = Ka();
    (q !== e || ee !== t) && ((Ae = null), (rn = Q() + 500), Et(e, t));
    do
      try {
        wd();
        break;
      } catch (o) {
        Qa(e, o);
      }
    while (!0);
    au(),
      (Jr.current = i),
      (R = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ai(e)), l !== 0 && ((r = l), (t = Ii(e, l)))), t === 1)
    )
      throw ((n = Yn), Et(e, 0), et(e, r), me(e, Q()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !yd(l) &&
          ((t = el(e, r)),
          t === 2 && ((i = ai(e)), i !== 0 && ((r = i), (t = Ii(e, i)))),
          t === 1))
      )
        throw ((n = Yn), Et(e, 0), et(e, r), me(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          wt(e, ce, Ae);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Nu + 500 - Q()), 10 < t))
          ) {
            if (Fr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = yi(wt.bind(null, e, ce, Ae), t);
            break;
          }
          wt(e, ce, Ae);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Re(r);
            (i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yi(wt.bind(null, e, ce, Ae), r);
            break;
          }
          wt(e, ce, Ae);
          break;
        case 5:
          wt(e, ce, Ae);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? Ba.bind(null, e) : null;
}
function Ii(e, t) {
  var n = zn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = el(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Ui(t)),
    e
  );
}
function Ui(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function yd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~Eu,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $o(e) {
  if (R & 6) throw Error(g(327));
  Zt();
  var t = Fr(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = el(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ai(e);
    r !== 0 && ((t = r), (n = Ii(e, r)));
  }
  if (n === 1) throw ((n = Yn), Et(e, 0), et(e, t), me(e, Q()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ce, Ae),
    me(e, Q()),
    null
  );
}
function Cu(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((rn = Q() + 500), sl && ht());
  }
}
function zt(e) {
  nt !== null && nt.tag === 0 && !(R & 6) && Zt();
  var t = R;
  R |= 1;
  var n = Ne.transition,
    r = M;
  try {
    if (((Ne.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ne.transition = n), (R = t), !(R & 6) && ht();
  }
}
function _u() {
  (he = Bt.current), F(Bt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Yf(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((uu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vr();
          break;
        case 3:
          tn(), F(de), F(ie), hu();
          break;
        case 5:
          mu(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          F($);
          break;
        case 19:
          F($);
          break;
        case 10:
          cu(r.type._context);
          break;
        case 22:
        case 23:
          _u();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = ct(e.current, null)),
    (ee = he = t),
    (X = 0),
    (Yn = null),
    (Eu = dl = Pt = 0),
    (ce = zn = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var u = i.next;
          (i.next = l), (r.next = u);
        }
        n.pending = r;
      }
    kt = null;
  }
  return e;
}
function Qa(e, t) {
  do {
    var n = Y;
    try {
      if ((au(), (_r.current = Zr), Xr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((jt = 0),
        (J = G = A = null),
        (jn = !1),
        (Bn = 0),
        (Su.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Yn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          u = n.return,
          o = n,
          s = t;
        if (
          ((t = ee),
          (o.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = o,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = _o(u);
          if (w !== null) {
            (w.flags &= -257),
              jo(w, u, o, i, t),
              w.mode & 1 && Co(i, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Co(i, c, t), ju();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && o.mode & 1) {
          var I = _o(u);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              jo(I, u, o, i, t),
              ou(nn(s, o));
            break e;
          }
        }
        (i = s = nn(s, o)),
          X !== 4 && (X = 2),
          zn === null ? (zn = [i]) : zn.push(i),
          (i = u);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Pa(i, s, t);
              wo(i, f);
              break e;
            case 1:
              o = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = za(i, o, t);
                wo(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ga(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ka() {
  var e = Jr.current;
  return (Jr.current = Zr), e === null ? Zr : e;
}
function ju() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Pt & 268435455) && !(dl & 268435455)) || et(q, ee);
}
function el(e, t) {
  var n = R;
  R |= 2;
  var r = Ka();
  (q !== e || ee !== t) && ((Ae = null), Et(e, t));
  do
    try {
      gd();
      break;
    } catch (l) {
      Qa(e, l);
    }
  while (!0);
  if ((au(), (R = n), (Jr.current = r), Y !== null)) throw Error(g(261));
  return (q = null), (ee = 0), X;
}
function gd() {
  for (; Y !== null; ) Ya(Y);
}
function wd() {
  for (; Y !== null && !Wc(); ) Ya(Y);
}
function Ya(e) {
  var t = Za(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ga(e) : (Y = t),
    (Su.current = null);
}
function Ga(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = fd(n, t, he)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function wt(e, t, n) {
  var r = M,
    l = Ne.transition;
  try {
    (Ne.transition = null), (M = 1), xd(e, t, n, r);
  } finally {
    (Ne.transition = l), (M = r);
  }
  return null;
}
function xd(e, t, n, r) {
  do Zt();
  while (nt !== null);
  if (R & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (bc(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      Ja(Dr, function () {
        return Zt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var u = M;
    M = 1;
    var o = R;
    (R |= 4),
      (Su.current = null),
      md(e, n),
      Ha(n, e),
      Af(hi),
      (Ir = !!mi),
      (hi = mi = null),
      (e.current = n),
      hd(n),
      Bc(),
      (R = o),
      (M = u),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (gr && ((gr = !1), (nt = e), (br = l)),
    (i = e.pendingLanes),
    i === 0 && (st = null),
    Yc(n.stateNode),
    me(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr) throw ((qr = !1), (e = Di), (Di = null), e);
  return (
    br & 1 && e.tag !== 0 && Zt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Fi ? Ln++ : ((Ln = 0), (Fi = e))) : (Ln = 0),
    ht(),
    null
  );
}
function Zt() {
  if (nt !== null) {
    var e = Ps(br),
      t = Ne.transition,
      n = M;
    try {
      if (((Ne.transition = null), (M = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (br = 0), R & 6)) throw Error(g(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var i = S,
            u = i.child;
          if (S.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var s = 0; s < o.length; s++) {
                var c = o[s];
                for (S = c; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pn(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (S = h);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var m = v.sibling,
                        w = v.return;
                      if (($a(v), v === c)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (S = m);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var I = k.sibling;
                    (k.sibling = null), (k = I);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (S = u);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          u = S;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null) (d.return = u), (S = d);
          else
            e: for (u = a; S !== null; ) {
              if (((o = S), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, o);
                  }
                } catch (E) {
                  H(o, o.return, E);
                }
              if (o === u) {
                S = null;
                break e;
              }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (S = y);
                break e;
              }
              S = o.return;
            }
        }
        if (
          ((R = l), ht(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ne.transition = t);
    }
  }
  return !1;
}
function Ao(e, t, n) {
  (t = nn(n, t)),
    (t = Pa(e, t, 1)),
    (e = ot(e, t, 1)),
    (t = oe()),
    e !== null && (Zn(e, 1, t), me(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) Ao(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ao(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = nn(n, e)),
            (e = za(t, e, 1)),
            (t = ot(t, e, 1)),
            (e = oe()),
            t !== null && (Zn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > Q() - Nu)
        ? Et(e, 0)
        : (Eu |= n)),
    me(e, t);
}
function Xa(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ye(e, t)), e !== null && (Zn(e, t, n), me(e, n));
}
function Sd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xa(e, n);
}
function Ed(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), Xa(e, n);
}
var Za;
Za = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), cd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), U && t.flags & 1048576 && ea(t, Br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = qt(t, ie.current);
      Xt(t, n), (l = yu(null, t, r, e, l, n));
      var i = gu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((i = !0), Hr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            du(t),
            (l.updater = cl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ni(t, r, e, n),
            (t = ji(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && iu(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Cd(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = _i(null, t, r, e, n);
            break e;
          case 1:
            t = Lo(null, t, r, e, n);
            break e;
          case 11:
            t = Po(null, t, r, e, n);
            break e;
          case 14:
            t = zo(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        _i(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Lo(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ma(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ua(e, t),
          Yr(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = nn(Error(g(423)), t)), (t = To(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(g(424)), t)), (t = To(e, t, r, n, l));
            break e;
          } else
            for (
              ve = ut(t.stateNode.containerInfo.firstChild),
                ye = t,
                U = !0,
                Te = null,
                n = la(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bt(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        oa(t),
        e === null && ki(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (u = l.children),
        vi(r, l) ? (u = null) : i !== null && vi(r, i) && (t.flags |= 32),
        Ra(e, t),
        ue(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && ki(t), null;
    case 13:
      return Oa(e, t, n);
    case 4:
      return (
        pu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Po(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (u = l.value),
          O(Qr, r._currentValue),
          (r._currentValue = u),
          i !== null)
        )
          if (Oe(i.value, u)) {
            if (i.children === l.children && !de.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                u = i.child;
                for (var s = o.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Be(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Si(i.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error(g(341));
                (u.lanes |= n),
                  (o = u.alternate),
                  o !== null && (o.lanes |= n),
                  Si(u, n, t),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((i = u.sibling), i !== null)) {
                    (i.return = u.return), (u = i);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Xt(t, n),
        (l = Ce(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        zo(e, t, r, l, n)
      );
    case 15:
      return La(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Pr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Hr(t)) : (e = !1),
        Xt(t, n),
        ja(t, r, l),
        Ni(t, r, l, n),
        ji(null, t, r, !0, e, n)
      );
    case 19:
      return Da(e, t, n);
    case 22:
      return Ta(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function Ja(e, t) {
  return Ns(e, t);
}
function Nd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new Nd(e, t, n, r);
}
function Pu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cd(e) {
  if (typeof e == "function") return Pu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yi)) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Tr(e, t, n, r, l, i) {
  var u = 2;
  if (((r = e), typeof e == "function")) Pu(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case Ot:
        return Nt(n.children, l, i, t);
      case Ki:
        (u = 8), (l |= 8);
        break;
      case Gl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Gl), (e.lanes = i), e
        );
      case Xl:
        return (e = Ee(13, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
      case Zl:
        return (e = Ee(19, n, t, l)), (e.elementType = Zl), (e.lanes = i), e;
      case os:
        return pl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case is:
              u = 10;
              break e;
            case us:
              u = 9;
              break e;
            case Yi:
              u = 11;
              break e;
            case Gi:
              u = 14;
              break e;
            case Je:
              (u = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Nt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function pl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = os),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ql(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _d(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function zu(e, t, n, r, l, i, u, o, s) {
  return (
    (e = new _d(e, t, n, o, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    du(i),
    e
  );
}
function jd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qa(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Tt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return qs(e, n, t);
  }
  return t;
}
function ba(e, t, n, r, l, i, u, o, s) {
  return (
    (e = zu(n, r, !0, e, l, i, u, o, s)),
    (e.context = qa(null)),
    (n = e.current),
    (r = oe()),
    (l = at(n)),
    (i = Be(r, l)),
    (i.callback = t ?? null),
    ot(n, i, l),
    (e.current.lanes = l),
    Zn(e, l, r),
    me(e, r),
    e
  );
}
function ml(e, t, n, r) {
  var l = t.current,
    i = oe(),
    u = at(l);
  return (
    (n = qa(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Be(i, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ot(l, t, u)),
    e !== null && (Me(e, l, u, i), Cr(e, l, u)),
    u
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Lu(e, t) {
  Vo(e, t), (e = e.alternate) && Vo(e, t);
}
function Pd() {
  return null;
}
var ec =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Tu(e) {
  this._internalRoot = e;
}
hl.prototype.render = Tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  ml(e, t, null, null);
};
hl.prototype.unmount = Tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function () {
      ml(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ts();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Ms(e);
  }
};
function Ru(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ho() {}
function zd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = tl(u);
        i.call(c);
      };
    }
    var u = ba(t, r, e, 0, null, !1, !1, "", Ho);
    return (
      (e._reactRootContainer = u),
      (e[Ke] = u.current),
      $n(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = tl(s);
      o.call(c);
    };
  }
  var s = zu(e, 0, !1, null, null, !1, !1, "", Ho);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    zt(function () {
      ml(t, s, n, r);
    }),
    s
  );
}
function yl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var s = tl(u);
        o.call(s);
      };
    }
    ml(t, u, e, l);
  } else u = zd(n, t, e, l, r);
  return tl(u);
}
zs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 &&
          (Ji(t, n | 1), me(t, Q()), !(R & 6) && ((rn = Q() + 500), ht()));
      }
      break;
    case 13:
      zt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          Me(r, e, 1, l);
        }
      }),
        Lu(e, 1);
  }
};
qi = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = oe();
      Me(t, e, 134217728, n);
    }
    Lu(e, 134217728);
  }
};
Ls = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = oe();
      Me(n, e, t, r);
    }
    Lu(e, t);
  }
};
Ts = function () {
  return M;
};
Rs = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
ui = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(g(90));
            as(r), bl(r, l);
          }
        }
      }
      break;
    case "textarea":
      fs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qt(e, !!n.multiple, t, !1);
  }
};
gs = Cu;
ws = zt;
var Ld = { usingClientEntryPoint: !1, Events: [qn, Ut, ol, vs, ys, Cu] },
  yn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Td = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ss(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Pd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (rl = wr.inject(Td)), (Ue = wr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ru(t)) throw Error(g(200));
  return jd(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Ru(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = ec;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = zu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    new Tu(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = Ss(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return zt(e);
};
we.hydrate = function (e, t, n) {
  if (!vl(t)) throw Error(g(200));
  return yl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Ru(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    u = ec;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = ba(t, null, e, 1, n ?? null, l, !1, i, u)),
    (e[Ke] = t.current),
    $n(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new hl(t);
};
we.render = function (e, t, n) {
  if (!vl(t)) throw Error(g(200));
  return yl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (zt(function () {
        yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Cu;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return yl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function tc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
    } catch (e) {
      console.error(e);
    }
}
tc(), (ts.exports = we);
var Rd = ts.exports,
  nc,
  Wo = Rd;
(nc = Wo.createRoot), Wo.hydrateRoot;
function Md() {
  return p.jsx("header", {
    className:
      "sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200",
    children: p.jsxs("nav", {
      className: "container flex items-center justify-between py-3",
      children: [
        p.jsxs("a", {
          href: "#",
          className: "flex items-center gap-3",
          children: [
            p.jsx("img", {
              src: "/images/logo.png",
              alt: "Logo",
              className: "w-10 h-10 rounded-xl border",
            }),
            p.jsxs("div", {
              className: "leading-tight",
              children: [
                p.jsx("p", {
                  className: "font-bold text-slate-900",
                  children: "Gram Panchayat",
                }),
                p.jsx("p", {
                  className: "text-brand-700 font-semibold -mt-1",
                  children: "Devnagar",
                }),
              ],
            }),
          ],
        }),
        p.jsxs("div", {
          className: "hidden md:flex items-center gap-1",
          children: [
            p.jsx("a", {
              className: "nav-link",
              href: "#about",
              children: "About",
            }),
            p.jsx("a", {
              className: "nav-link",
              href: "#gallery",
              children: "Gallery",
            }),
            p.jsx("a", {
              className: "nav-link",
              href: "#news",
              children: "News",
            }),
            p.jsx("a", {
              className: "nav-link",
              href: "#members",
              children: "Members",
            }),
            p.jsx("a", {
              className: "nav-link",
              href: "#contact",
              children: "Contact",
            }),
          ],
        }),
        p.jsx("a", {
          href: "#contact",
          className: "btn btn-primary",
          children: "Contact",
        }),
      ],
    }),
  });
}
function Od() {
  return p.jsxs("section", {
    className: "relative",
    children: [
      p.jsx("div", {
        className:
          "absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-white",
      }),
      p.jsxs("div", {
        className:
          "container grid md:grid-cols-2 gap-8 items-center pt-12 md:pt-20",
        children: [
          p.jsxs("div", {
            children: [
              p.jsxs("h1", {
                className:
                  "text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight",
                children: [
                  "Gram Panchayat ",
                  p.jsx("span", {
                    className: "text-brand-700",
                    children: "Devnagar",
                  }),
                ],
              }),
              p.jsx("p", {
                className: "mt-4 text-slate-700 text-lg",
                children:
                  "Empowering local governance with transparency, inclusion and digital services for every citizen of Devnagar.",
              }),
              p.jsxs("div", {
                className: "mt-6 flex gap-3",
                children: [
                  p.jsx("a", {
                    href: "#news",
                    className: "btn btn-primary",
                    children: "Latest News",
                  }),
                  p.jsx("a", {
                    href: "#gallery",
                    className: "btn border-slate-200 hover:border-brand-300",
                    children: "View Gallery",
                  }),
                ],
              }),
              p.jsxs("ul", {
                className: "mt-6 grid grid-cols-3 gap-4 text-sm text-slate-700",
                children: [
                  p.jsxs("li", {
                    className: "card p-4 text-center",
                    children: [
                      p.jsx("span", {
                        className: "font-bold text-2xl",
                        children: "12",
                      }),
                      p.jsx("p", { children: "Schemes" }),
                    ],
                  }),
                  p.jsxs("li", {
                    className: "card p-4 text-center",
                    children: [
                      p.jsx("span", {
                        className: "font-bold text-2xl",
                        children: "8",
                      }),
                      p.jsx("p", { children: "Wards" }),
                    ],
                  }),
                  p.jsxs("li", {
                    className: "card p-4 text-center",
                    children: [
                      p.jsx("span", {
                        className: "font-bold text-2xl",
                        children: "5k+",
                      }),
                      p.jsx("p", { children: "Residents" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          p.jsx("div", {
            className: "relative",
            children: p.jsx("img", {
              src: "/images/hero.jpg",
              alt: "Devnagar",
              className: "rounded-3xl shadow-md border border-slate-200",
            }),
          }),
        ],
      }),
    ],
  });
}
function er({ eyebrow: e, title: t, sub: n }) {
  return p.jsxs("div", {
    className: "text-center mb-10",
    children: [
      e && p.jsx("div", { className: "badge mb-3", children: e }),
      p.jsx("h2", {
        className: "text-3xl md:text-4xl font-bold text-slate-900",
        children: t,
      }),
      n &&
        p.jsx("p", {
          className: "text-slate-600 mt-3 max-w-2xl mx-auto",
          children: n,
        }),
    ],
  });
}
const Dd = {
    name: "Devnagar",
    about: `Devnagar is a progressive Gram Panchayat focused on clean water, paved roads, education, and e‑governance. Our mission is to deliver essential services transparently and to engage residents through digital platforms.

देवनगर ग्राम पंचायत स्वच्छ जल, पक्की सड़कें, शिक्षा और ई‑गवर्नेंस पर केंद्रित है। हमारा उद्देश्य पारदर्शिता के साथ सेवाएं देना और डिजिटल माध्यम से नागरिकों की भागीदारी सुनिश्चित करना है।`,
  },
  Fd = [
    {
      src: "/images/gallery-1.jpg",
      alt: "Panchayat-office",
      caption: "Panchayat-office",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Plantation Drive (वृक्षारोपण)",
      caption: "Plantation Drive (वृक्षारोपण)",
    },
    { src: "/images/gallery-3.jpg", alt: "Cleanliness Drive (स्वच्छता अभियान)", caption: "Cleanliness Drive (स्वच्छता अभियान)" },
    {
      src: "/images/gallery-4.jpg",
      alt: "Panchayat Members Group Photo",
      caption: "Panchayat Members Group Photo",
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Development Work",
      caption: "Development Work",
    },
  ],
  Id = [
    {
      id: "n1",
      title: "Ward-wise Road Repair Tender Published",
      date: "2025-08-15",
      excerpt:
        "Inviting bids for patchwork and side-drain cleaning across 8 wards.",
      link: "",
    },
    {
      id: "n2",
      title: "Health Camp on Sunday",
      date: "2025-08-27",
      excerpt:
        "Free general check-up, vaccination awareness and blood group testing at Community Hall.",
      link: "",
    },
  ],
  Ud = [
    { id: "m1", name: "Saraswati Devi", role: "Sarpanch" },
    { id: "m2", name: "Ramesh Kumar", role: "Up-Sarpanch" },
    { id: "m3", name: "Asha Chauhan", role: "Ward Member - 1" },
    { id: "m4", name: "Mohit Singh", role: "Ward Member - 2" },
    { id: "m5", name: "Kavita Yadav", role: "Ward Member - 3" },
    { id: "m6", name: "Shyam Lal", role: "Ward Member - 4" },
  ],
  $d = {
    address:
      "Gram Panchayat Office, Devnagar, Tehsil — Ajmer, Rajasthan 305001",
    phone: "+91 98765 43210",
    email: "office@gpdevnagar.in",
    hours: "Mon–Sat, 10:00 AM – 5:00 PM",
    map: "https://www.google.com/maps?q=Ajmer,+Rajasthan&output=embed",
  },
  Ad = {
    facebook: "https://facebook.com/gpdevnagar",
    instagram: "https://instagram.com/gpdevnagar",
    twitter: "https://x.com/gpdevnagar",
  },
  K = {
    panchayat: Dd,
    gallery: Fd,
    news: Id,
    members: Ud,
    contact: $d,
    social: Ad,
  };
function Vd() {
  return p.jsx("section", {
    id: "about",
    className: "section",
    children: p.jsxs("div", {
      className: "container",
      children: [
        p.jsx(er, {
          eyebrow: "About",
          title: `About ${K.panchayat.name}`,
          sub: "सशक्त ग्राम, सशक्त भारत — Strong villages build a stronger nation.",
        }),
        p.jsxs("div", {
          className: "grid md:grid-cols-3 gap-6",
          children: [
            p.jsx("div", {
              className:
                "md:col-span-2 card p-6 leading-relaxed text-slate-700 whitespace-pre-line",
              children: K.panchayat.about,
            }),
            p.jsxs("div", {
              className: "card p-6",
              children: [
                p.jsx("h3", {
                  className: "font-semibold text-slate-900 mb-3",
                  children: "Contact",
                }),
                p.jsxs("p", {
                  className: "text-sm text-slate-700",
                  children: [
                    p.jsx("span", {
                      className: "font-medium",
                      children: "Address:",
                    }),
                    p.jsx("br", {}),
                    K.contact.address,
                  ],
                }),
                p.jsxs("p", {
                  className: "text-sm text-slate-700 mt-3",
                  children: [
                    p.jsx("span", {
                      className: "font-medium",
                      children: "Phone:",
                    }),
                    " ",
                    K.contact.phone,
                  ],
                }),
                p.jsxs("p", {
                  className: "text-sm text-slate-700",
                  children: [
                    p.jsx("span", {
                      className: "font-medium",
                      children: "Email:",
                    }),
                    " ",
                    K.contact.email,
                  ],
                }),
                p.jsxs("div", {
                  className: "mt-4 flex gap-2",
                  children: [
                    p.jsx("a", {
                      className: "badge",
                      href: K.social.facebook,
                      target: "_blank",
                      children: "Facebook",
                    }),
                    p.jsx("a", {
                      className: "badge",
                      href: K.social.instagram,
                      target: "_blank",
                      children: "Instagram",
                    }),
                    p.jsx("a", {
                      className: "badge",
                      href: K.social.twitter,
                      target: "_blank",
                      children: "X",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Hd({ src: e, alt: t, onClose: n }) {
  return (
    Xn.useEffect(() => {
      const r = (l) => {
        l.key === "Escape" && n();
      };
      return (
        window.addEventListener("keydown", r),
        () => window.removeEventListener("keydown", r)
      );
    }, [n]),
    e
      ? p.jsx("div", {
          className:
            "fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",
          onClick: n,
          children: p.jsx("img", {
            src: e,
            alt: t,
            className: "max-h-full max-w-full rounded-2xl shadow-lg border",
          }),
        })
      : null
  );
}
function Wd() {
  const [e, t] = Xn.useState(null);
  return p.jsxs("section", {
    id: "gallery",
    className: "section bg-slate-50",
    children: [
      p.jsxs("div", {
        className: "container",
        children: [
          p.jsx(er, {
            eyebrow: "Gallery",
            title: "Photo Gallery",
            sub: "Snapshots from community life and development works.",
          }),
          p.jsx("div", {
            className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4",
            children: K.gallery.map((n, r) =>
              p.jsxs(
                "button",
                {
                  onClick: () => t(n.src),
                  className: "group relative card overflow-hidden",
                  children: [
                    p.jsx("img", {
                      loading: "lazy",
                      src: n.src,
                      alt: n.alt,
                      className:
                        "w-full h-56 object-cover group-hover:scale-105 transition",
                    }),
                    p.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent",
                    }),
                    p.jsx("div", {
                      className: "absolute bottom-2 left-2 text-white text-sm",
                      children: n.caption,
                    }),
                  ],
                },
                r
              )
            ),
          }),
        ],
      }),
      p.jsx(Hd, { src: e, alt: "", onClose: () => t(null) }),
    ],
  });
}
function Bd({ post: e }) {
  const n = new Date(e.date).toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return p.jsxs("article", {
    className: "card p-6 flex flex-col",
    children: [
      p.jsx("div", { className: "text-xs text-slate-500", children: n }),
      p.jsx("h3", {
        className: "mt-1 font-semibold text-slate-900",
        children: e.title,
      }),
      p.jsx("p", { className: "mt-2 text-slate-700", children: e.excerpt }),
      e.link &&
        p.jsx("a", {
          className: "mt-3 text-brand-700 font-medium hover:underline",
          href: e.link,
          target: "_blank",
          children: "Read more →",
        }),
    ],
  });
}
function Qd() {
  return p.jsx("section", {
    id: "news",
    className: "section",
    children: p.jsxs("div", {
      className: "container",
      children: [
        p.jsx(er, {
          eyebrow: "Updates",
          title: "News & Notices",
          sub: "Recent announcements and development updates from the Panchayat.",
        }),
        p.jsx("div", {
          className: "grid md:grid-cols-2 gap-6",
          children: K.news.map((e) => p.jsx(Bd, { post: e }, e.id)),
        }),
      ],
    }),
  });
}
function Kd() {
  return p.jsx("section", {
    id: "members",
    className: "section bg-slate-50",
    children: p.jsxs("div", {
      className: "container",
      children: [
        p.jsx(er, {
          eyebrow: "Team",
          title: "Panchayat Members",
          sub: "Elected representatives serving Devnagar.",
        }),
        p.jsx("div", {
          className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6",
          children: K.members.map((e) =>
            p.jsxs(
              "div",
              {
                className: "card p-5",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      p.jsx("div", {
                        className:
                          "w-14 h-14 rounded-xl bg-brand-100 text-brand-800 font-bold grid place-items-center",
                        children: e.name
                          .split(" ")
                          .map((t) => t[0])
                          .slice(0, 2)
                          .join(""),
                      }),
                      p.jsxs("div", {
                        children: [
                          p.jsx("div", {
                            className: "font-semibold text-slate-900",
                            children: e.name,
                          }),
                          p.jsx("div", {
                            className: "text-sm text-slate-600",
                            children: e.role,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.phone &&
                    p.jsxs("div", {
                      className: "text-sm text-slate-700 mt-3",
                      children: [
                        p.jsx("span", {
                          className: "font-medium",
                          children: "Phone:",
                        }),
                        " ",
                        e.phone,
                      ],
                    }),
                ],
              },
              e.id
            )
          ),
        }),
      ],
    }),
  });
}
function Yd() {
  return p.jsx("section", {
    id: "contact",
    className: "section",
    children: p.jsxs("div", {
      className: "container",
      children: [
        p.jsx(er, {
          eyebrow: "Contact",
          title: "Get in touch",
          sub: "Reach out for certificates, grievances, or information requests.",
        }),
        p.jsxs("div", {
          className: "grid md:grid-cols-2 gap-6",
          children: [
            p.jsxs("form", {
              className: "card p-6 grid gap-3",
              onSubmit: (e) => e.preventDefault(),
              children: [
                p.jsx("input", {
                  className: "border rounded-xl px-4 py-2",
                  placeholder: "Your Name",
                  required: !0,
                }),
                p.jsx("input", {
                  className: "border rounded-xl px-4 py-2",
                  type: "email",
                  placeholder: "Email",
                  required: !0,
                }),
                p.jsx("input", {
                  className: "border rounded-xl px-4 py-2",
                  placeholder: "Phone",
                }),
                p.jsx("textarea", {
                  className: "border rounded-xl px-4 py-2 min-h-[120px]",
                  placeholder: "Your Message",
                }),
                p.jsx("button", {
                  className: "btn btn-primary w-max",
                  children: "Send Message",
                }),
                p.jsx("p", {
                  className: "text-xs text-slate-500",
                  children: "Demo only — form not connected.",
                }),
              ],
            }),
            p.jsxs("div", {
              className: "card p-6",
              children: [
                p.jsx("h3", {
                  className: "font-semibold text-slate-900 mb-3",
                  children: "Office Address",
                }),
                p.jsx("p", {
                  className: "text-slate-700",
                  children: K.contact.address,
                }),
                p.jsxs("div", {
                  className: "mt-4 text-sm text-slate-700 space-y-1",
                  children: [
                    p.jsxs("p", {
                      children: [
                        p.jsx("span", {
                          className: "font-medium",
                          children: "Phone:",
                        }),
                        " ",
                        K.contact.phone,
                      ],
                    }),
                    p.jsxs("p", {
                      children: [
                        p.jsx("span", {
                          className: "font-medium",
                          children: "Email:",
                        }),
                        " ",
                        K.contact.email,
                      ],
                    }),
                    p.jsxs("p", {
                      children: [
                        p.jsx("span", {
                          className: "font-medium",
                          children: "Office Hours:",
                        }),
                        " ",
                        K.contact.hours,
                      ],
                    }),
                  ],
                }),
                p.jsx("iframe", {
                  title: "map",
                  className: "mt-4 rounded-xl w-full h-64 border",
                  src: K.contact.map,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Gd() {
  return p.jsx("footer", {
    className: "mt-10 border-t border-slate-200",
    children: p.jsxs("div", {
      className:
        "container py-8 flex flex-col md:flex-row items-center gap-4 justify-between text-sm text-slate-600",
      children: [
        p.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            p.jsx("img", {
              src: "/images/logo.png",
              className: "w-8 h-8 rounded-lg border",
            }),
            p.jsxs("span", {
              children: [
                "© ",
                new Date().getFullYear(),
                " Gram Panchayat ",
                K.panchayat.name,
              ],
            }),
          ],
        }),
        p.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            p.jsx("a", {
              href: K.social.facebook,
              className: "hover:underline",
              children: "Facebook",
            }),
            p.jsx("a", {
              href: K.social.instagram,
              className: "hover:underline",
              children: "Instagram",
            }),
            p.jsx("a", {
              href: K.social.twitter,
              className: "hover:underline",
              children: "X",
            }),
          ],
        }),
      ],
    }),
  });
}
function Xd() {
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx(Md, {}),
      p.jsx(Od, {}),
      p.jsx(Vd, {}),
      p.jsx(Wd, {}),
      p.jsx(Qd, {}),
      p.jsx(Kd, {}),
      p.jsx(Yd, {}),
      p.jsx(Gd, {}),
    ],
  });
}
nc(document.getElementById("root")).render(
  p.jsx(xc.StrictMode, { children: p.jsx(Xd, {}) })
);
