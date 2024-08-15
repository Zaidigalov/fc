function Do(u, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const r in n)
        if (r !== "default" && !(r in u)) {
          const i = Object.getOwnPropertyDescriptor(n, r);
          i &&
            Object.defineProperty(
              u,
              r,
              i.get ? i : { enumerable: !0, get: () => n[r] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(u, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = t(r);
    fetch(r.href, i);
  }
})();
var Q3 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function gr(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
function Dc(u) {
  var e = u.default;
  if (typeof e == "function") {
    var t = function () {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(u).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(u, n);
      Object.defineProperty(
        t,
        n,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return u[n];
              },
            }
      );
    }),
    t
  );
}
var N = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z3 = Symbol.for("react.element"),
  hc = Symbol.for("react.portal"),
  vc = Symbol.for("react.fragment"),
  Bc = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  gc = Symbol.for("react.provider"),
  Fc = Symbol.for("react.context"),
  yc = Symbol.for("react.forward_ref"),
  Cc = Symbol.for("react.suspense"),
  _c = Symbol.for("react.memo"),
  Ac = Symbol.for("react.lazy"),
  _i = Symbol.iterator;
function Sc(u) {
  return u === null || typeof u != "object"
    ? null
    : ((u = (_i && u[_i]) || u["@@iterator"]),
      typeof u == "function" ? u : null);
}
var ho = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vo = Object.assign,
  Bo = {};
function Q0(u, e, t) {
  (this.props = u),
    (this.context = e),
    (this.refs = Bo),
    (this.updater = t || ho);
}
Q0.prototype.isReactComponent = {};
Q0.prototype.setState = function (u, e) {
  if (typeof u != "object" && typeof u != "function" && u != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, u, e, "setState");
};
Q0.prototype.forceUpdate = function (u) {
  this.updater.enqueueForceUpdate(this, u, "forceUpdate");
};
function mo() {}
mo.prototype = Q0.prototype;
function Fr(u, e, t) {
  (this.props = u),
    (this.context = e),
    (this.refs = Bo),
    (this.updater = t || ho);
}
var yr = (Fr.prototype = new mo());
yr.constructor = Fr;
vo(yr, Q0.prototype);
yr.isPureReactComponent = !0;
var Ai = Array.isArray,
  go = Object.prototype.hasOwnProperty,
  Cr = { current: null },
  Fo = { key: !0, ref: !0, __self: !0, __source: !0 };
function yo(u, e, t) {
  var n,
    r = {},
    i = null,
    l = null;
  if (e != null)
    for (n in (e.ref !== void 0 && (l = e.ref),
    e.key !== void 0 && (i = "" + e.key),
    e))
      go.call(e, n) && !Fo.hasOwnProperty(n) && (r[n] = e[n]);
  var o = arguments.length - 2;
  if (o === 1) r.children = t;
  else if (1 < o) {
    for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  if (u && u.defaultProps)
    for (n in ((o = u.defaultProps), o)) r[n] === void 0 && (r[n] = o[n]);
  return {
    $$typeof: z3,
    type: u,
    key: i,
    ref: l,
    props: r,
    _owner: Cr.current,
  };
}
function wc(u, e) {
  return {
    $$typeof: z3,
    type: u.type,
    key: e,
    ref: u.ref,
    props: u.props,
    _owner: u._owner,
  };
}
function _r(u) {
  return typeof u == "object" && u !== null && u.$$typeof === z3;
}
function kc(u) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    u.replace(/[=:]/g, function (t) {
      return e[t];
    })
  );
}
var Si = /\/+/g;
function Nt(u, e) {
  return typeof u == "object" && u !== null && u.key != null
    ? kc("" + u.key)
    : e.toString(36);
}
function de(u, e, t, n, r) {
  var i = typeof u;
  (i === "undefined" || i === "boolean") && (u = null);
  var l = !1;
  if (u === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (u.$$typeof) {
          case z3:
          case hc:
            l = !0;
        }
    }
  if (l)
    return (
      (l = u),
      (r = r(l)),
      (u = n === "" ? "." + Nt(l, 0) : n),
      Ai(r)
        ? ((t = ""),
          u != null && (t = u.replace(Si, "$&/") + "/"),
          de(r, e, t, "", function (c) {
            return c;
          }))
        : r != null &&
          (_r(r) &&
            (r = wc(
              r,
              t +
                (!r.key || (l && l.key === r.key)
                  ? ""
                  : ("" + r.key).replace(Si, "$&/") + "/") +
                u
            )),
          e.push(r)),
      1
    );
  if (((l = 0), (n = n === "" ? "." : n + ":"), Ai(u)))
    for (var o = 0; o < u.length; o++) {
      i = u[o];
      var s = n + Nt(i, o);
      l += de(i, e, t, s, r);
    }
  else if (((s = Sc(u)), typeof s == "function"))
    for (u = s.call(u), o = 0; !(i = u.next()).done; )
      (i = i.value), (s = n + Nt(i, o++)), (l += de(i, e, t, s, r));
  else if (i === "object")
    throw (
      ((e = String(u)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(u).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function q3(u, e, t) {
  if (u == null) return u;
  var n = [],
    r = 0;
  return (
    de(u, n, "", "", function (i) {
      return e.call(t, i, r++);
    }),
    n
  );
}
function xc(u) {
  if (u._status === -1) {
    var e = u._result;
    (e = e()),
      e.then(
        function (t) {
          (u._status === 0 || u._status === -1) &&
            ((u._status = 1), (u._result = t));
        },
        function (t) {
          (u._status === 0 || u._status === -1) &&
            ((u._status = 2), (u._result = t));
        }
      ),
      u._status === -1 && ((u._status = 0), (u._result = e));
  }
  if (u._status === 1) return u._result.default;
  throw u._result;
}
var _4 = { current: null },
  fe = { transition: null },
  Oc = {
    ReactCurrentDispatcher: _4,
    ReactCurrentBatchConfig: fe,
    ReactCurrentOwner: Cr,
  };
function Co() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = {
  map: q3,
  forEach: function (u, e, t) {
    q3(
      u,
      function () {
        e.apply(this, arguments);
      },
      t
    );
  },
  count: function (u) {
    var e = 0;
    return (
      q3(u, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (u) {
    return (
      q3(u, function (e) {
        return e;
      }) || []
    );
  },
  only: function (u) {
    if (!_r(u))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return u;
  },
};
W.Component = Q0;
W.Fragment = vc;
W.Profiler = mc;
W.PureComponent = Fr;
W.StrictMode = Bc;
W.Suspense = Cc;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
W.act = Co;
W.cloneElement = function (u, e, t) {
  if (u == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        u +
        "."
    );
  var n = vo({}, u.props),
    r = u.key,
    i = u.ref,
    l = u._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (l = Cr.current)),
      e.key !== void 0 && (r = "" + e.key),
      u.type && u.type.defaultProps)
    )
      var o = u.type.defaultProps;
    for (s in e)
      go.call(e, s) &&
        !Fo.hasOwnProperty(s) &&
        (n[s] = e[s] === void 0 && o !== void 0 ? o[s] : e[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = t;
  else if (1 < s) {
    o = Array(s);
    for (var c = 0; c < s; c++) o[c] = arguments[c + 2];
    n.children = o;
  }
  return { $$typeof: z3, type: u.type, key: r, ref: i, props: n, _owner: l };
};
W.createContext = function (u) {
  return (
    (u = {
      $$typeof: Fc,
      _currentValue: u,
      _currentValue2: u,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (u.Provider = { $$typeof: gc, _context: u }),
    (u.Consumer = u)
  );
};
W.createElement = yo;
W.createFactory = function (u) {
  var e = yo.bind(null, u);
  return (e.type = u), e;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (u) {
  return { $$typeof: yc, render: u };
};
W.isValidElement = _r;
W.lazy = function (u) {
  return { $$typeof: Ac, _payload: { _status: -1, _result: u }, _init: xc };
};
W.memo = function (u, e) {
  return { $$typeof: _c, type: u, compare: e === void 0 ? null : e };
};
W.startTransition = function (u) {
  var e = fe.transition;
  fe.transition = {};
  try {
    u();
  } finally {
    fe.transition = e;
  }
};
W.unstable_act = Co;
W.useCallback = function (u, e) {
  return _4.current.useCallback(u, e);
};
W.useContext = function (u) {
  return _4.current.useContext(u);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (u) {
  return _4.current.useDeferredValue(u);
};
W.useEffect = function (u, e) {
  return _4.current.useEffect(u, e);
};
W.useId = function () {
  return _4.current.useId();
};
W.useImperativeHandle = function (u, e, t) {
  return _4.current.useImperativeHandle(u, e, t);
};
W.useInsertionEffect = function (u, e) {
  return _4.current.useInsertionEffect(u, e);
};
W.useLayoutEffect = function (u, e) {
  return _4.current.useLayoutEffect(u, e);
};
W.useMemo = function (u, e) {
  return _4.current.useMemo(u, e);
};
W.useReducer = function (u, e, t) {
  return _4.current.useReducer(u, e, t);
};
W.useRef = function (u) {
  return _4.current.useRef(u);
};
W.useState = function (u) {
  return _4.current.useState(u);
};
W.useSyncExternalStore = function (u, e, t) {
  return _4.current.useSyncExternalStore(u, e, t);
};
W.useTransition = function () {
  return _4.current.useTransition();
};
W.version = "18.3.1";
(function (u) {
  u.exports = W;
})(N);
const Pc = gr(N.exports),
  Ar = Do({ __proto__: null, default: Pc }, [N.exports]);
var at = { exports: {} },
  z4 = {},
  _o = { exports: {} },
  Ao = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (u) {
  function e(O, R) {
    var $ = O.length;
    O.push(R);
    u: for (; 0 < $; ) {
      var Q = ($ - 1) >>> 1,
        r4 = O[Q];
      if (0 < r(r4, R)) (O[Q] = R), (O[$] = r4), ($ = Q);
      else break u;
    }
  }
  function t(O) {
    return O.length === 0 ? null : O[0];
  }
  function n(O) {
    if (O.length === 0) return null;
    var R = O[0],
      $ = O.pop();
    if ($ !== R) {
      O[0] = $;
      u: for (var Q = 0, r4 = O.length, j4 = r4 >>> 1; Q < j4; ) {
        var lu = 2 * (Q + 1) - 1,
          ou = O[lu],
          Uu = lu + 1,
          V3 = O[Uu];
        if (0 > r(ou, $))
          Uu < r4 && 0 > r(V3, ou)
            ? ((O[Q] = V3), (O[Uu] = $), (Q = Uu))
            : ((O[Q] = ou), (O[lu] = $), (Q = lu));
        else if (Uu < r4 && 0 > r(V3, $)) (O[Q] = V3), (O[Uu] = $), (Q = Uu);
        else break u;
      }
    }
    return R;
  }
  function r(O, R) {
    var $ = O.sortIndex - R.sortIndex;
    return $ !== 0 ? $ : O.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    u.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      o = l.now();
    u.unstable_now = function () {
      return l.now() - o;
    };
  }
  var s = [],
    c = [],
    D = 1,
    f = null,
    p = 3,
    v = !1,
    B = !1,
    m = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    E = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var R = t(c); R !== null; ) {
      if (R.callback === null) n(c);
      else if (R.startTime <= O)
        n(c), (R.sortIndex = R.expirationTime), e(s, R);
      else break;
      R = t(c);
    }
  }
  function g(O) {
    if (((m = !1), h(O), !B))
      if (t(s) !== null) (B = !0), l4(y);
      else {
        var R = t(c);
        R !== null && N4(g, R.startTime - O);
      }
  }
  function y(O, R) {
    (B = !1), m && ((m = !1), E(P), (P = -1)), (v = !0);
    var $ = p;
    try {
      for (
        h(R), f = t(s);
        f !== null && (!(f.expirationTime > R) || (O && !T()));

      ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var r4 = Q(f.expirationTime <= R);
          (R = u.unstable_now()),
            typeof r4 == "function" ? (f.callback = r4) : f === t(s) && n(s),
            h(R);
        } else n(s);
        f = t(s);
      }
      if (f !== null) var j4 = !0;
      else {
        var lu = t(c);
        lu !== null && N4(g, lu.startTime - R), (j4 = !1);
      }
      return j4;
    } finally {
      (f = null), (p = $), (v = !1);
    }
  }
  var _ = !1,
    w = null,
    P = -1,
    S = 5,
    C = -1;
  function T() {
    return !(u.unstable_now() - C < S);
  }
  function L() {
    if (w !== null) {
      var O = u.unstable_now();
      C = O;
      var R = !0;
      try {
        R = w(!0, O);
      } finally {
        R ? M() : ((_ = !1), (w = null));
      }
    } else _ = !1;
  }
  var M;
  if (typeof d == "function")
    M = function () {
      d(L);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      iu = j.port2;
    (j.port1.onmessage = L),
      (M = function () {
        iu.postMessage(null);
      });
  } else
    M = function () {
      F(L, 0);
    };
  function l4(O) {
    (w = O), _ || ((_ = !0), M());
  }
  function N4(O, R) {
    P = F(function () {
      O(u.unstable_now());
    }, R);
  }
  (u.unstable_IdlePriority = 5),
    (u.unstable_ImmediatePriority = 1),
    (u.unstable_LowPriority = 4),
    (u.unstable_NormalPriority = 3),
    (u.unstable_Profiling = null),
    (u.unstable_UserBlockingPriority = 2),
    (u.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (u.unstable_continueExecution = function () {
      B || v || ((B = !0), l4(y));
    }),
    (u.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (S = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (u.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (u.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (u.unstable_next = function (O) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = p;
      }
      var $ = p;
      p = R;
      try {
        return O();
      } finally {
        p = $;
      }
    }),
    (u.unstable_pauseExecution = function () {}),
    (u.unstable_requestPaint = function () {}),
    (u.unstable_runWithPriority = function (O, R) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var $ = p;
      p = O;
      try {
        return R();
      } finally {
        p = $;
      }
    }),
    (u.unstable_scheduleCallback = function (O, R, $) {
      var Q = u.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? Q + $ : Q))
          : ($ = Q),
        O)
      ) {
        case 1:
          var r4 = -1;
          break;
        case 2:
          r4 = 250;
          break;
        case 5:
          r4 = 1073741823;
          break;
        case 4:
          r4 = 1e4;
          break;
        default:
          r4 = 5e3;
      }
      return (
        (r4 = $ + r4),
        (O = {
          id: D++,
          callback: R,
          priorityLevel: O,
          startTime: $,
          expirationTime: r4,
          sortIndex: -1,
        }),
        $ > Q
          ? ((O.sortIndex = $),
            e(c, O),
            t(s) === null &&
              O === t(c) &&
              (m ? (E(P), (P = -1)) : (m = !0), N4(g, $ - Q)))
          : ((O.sortIndex = r4), e(s, O), B || v || ((B = !0), l4(y))),
        O
      );
    }),
    (u.unstable_shouldYield = T),
    (u.unstable_wrapCallback = function (O) {
      var R = p;
      return function () {
        var $ = p;
        p = R;
        try {
          return O.apply(this, arguments);
        } finally {
          p = $;
        }
      };
    });
})(Ao);
(function (u) {
  u.exports = Ao;
})(_o);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nc = N.exports,
  R4 = _o.exports;
function A(u) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + u, t = 1;
    t < arguments.length;
    t++
  )
    e += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    u +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var So = new Set(),
  v3 = {};
function r0(u, e) {
  T0(u, e), T0(u + "Capture", e);
}
function T0(u, e) {
  for (v3[u] = e, u = 0; u < e.length; u++) So.add(e[u]);
}
var Eu = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hn = Object.prototype.hasOwnProperty,
  bc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wi = {},
  ki = {};
function Tc(u) {
  return hn.call(ki, u)
    ? !0
    : hn.call(wi, u)
    ? !1
    : bc.test(u)
    ? (ki[u] = !0)
    : ((wi[u] = !0), !1);
}
function Lc(u, e, t, n) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((u = u.toLowerCase().slice(0, 5)), u !== "data-" && u !== "aria-");
    default:
      return !1;
  }
}
function Rc(u, e, t, n) {
  if (e === null || typeof e > "u" || Lc(u, e, t, n)) return !0;
  if (n) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function A4(u, e, t, n, r, i, l) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = n),
    (this.attributeNamespace = r),
    (this.mustUseProperty = t),
    (this.propertyName = u),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var D4 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (u) {
    D4[u] = new A4(u, 0, !1, u, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (u) {
  var e = u[0];
  D4[e] = new A4(e, 1, !1, u[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (u) {
  D4[u] = new A4(u, 2, !1, u.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (u) {
  D4[u] = new A4(u, 2, !1, u, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (u) {
    D4[u] = new A4(u, 3, !1, u.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (u) {
  D4[u] = new A4(u, 3, !0, u, null, !1, !1);
});
["capture", "download"].forEach(function (u) {
  D4[u] = new A4(u, 4, !1, u, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (u) {
  D4[u] = new A4(u, 6, !1, u, null, !1, !1);
});
["rowSpan", "start"].forEach(function (u) {
  D4[u] = new A4(u, 5, !1, u.toLowerCase(), null, !1, !1);
});
var Sr = /[\-:]([a-z])/g;
function wr(u) {
  return u[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (u) {
    var e = u.replace(Sr, wr);
    D4[e] = new A4(e, 1, !1, u, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (u) {
    var e = u.replace(Sr, wr);
    D4[e] = new A4(e, 1, !1, u, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (u) {
  var e = u.replace(Sr, wr);
  D4[e] = new A4(e, 1, !1, u, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (u) {
  D4[u] = new A4(u, 1, !1, u.toLowerCase(), null, !1, !1);
});
D4.xlinkHref = new A4(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (u) {
  D4[u] = new A4(u, 1, !1, u.toLowerCase(), null, !0, !0);
});
function kr(u, e, t, n) {
  var r = D4.hasOwnProperty(e) ? D4[e] : null;
  (r !== null
    ? r.type !== 0
    : n ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Rc(e, t, r, n) && (t = null),
    n || r === null
      ? Tc(e) && (t === null ? u.removeAttribute(e) : u.setAttribute(e, "" + t))
      : r.mustUseProperty
      ? (u[r.propertyName] = t === null ? (r.type === 3 ? !1 : "") : t)
      : ((e = r.attributeName),
        (n = r.attributeNamespace),
        t === null
          ? u.removeAttribute(e)
          : ((r = r.type),
            (t = r === 3 || (r === 4 && t === !0) ? "" : "" + t),
            n ? u.setAttributeNS(n, e, t) : u.setAttribute(e, t))));
}
var vu = Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  K3 = Symbol.for("react.element"),
  p0 = Symbol.for("react.portal"),
  D0 = Symbol.for("react.fragment"),
  xr = Symbol.for("react.strict_mode"),
  vn = Symbol.for("react.profiler"),
  wo = Symbol.for("react.provider"),
  ko = Symbol.for("react.context"),
  Or = Symbol.for("react.forward_ref"),
  Bn = Symbol.for("react.suspense"),
  mn = Symbol.for("react.suspense_list"),
  Pr = Symbol.for("react.memo"),
  Fu = Symbol.for("react.lazy"),
  xo = Symbol.for("react.offscreen"),
  xi = Symbol.iterator;
function Y0(u) {
  return u === null || typeof u != "object"
    ? null
    : ((u = (xi && u[xi]) || u["@@iterator"]),
      typeof u == "function" ? u : null);
}
var t4 = Object.assign,
  bt;
function r3(u) {
  if (bt === void 0)
    try {
      throw Error();
    } catch (t) {
      var e = t.stack.trim().match(/\n( *(at )?)/);
      bt = (e && e[1]) || "";
    }
  return (
    `
` +
    bt +
    u
  );
}
var Tt = !1;
function Lt(u, e) {
  if (!u || Tt) return "";
  Tt = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (c) {
          var n = c;
        }
        Reflect.construct(u, [], e);
      } else {
        try {
          e.call();
        } catch (c) {
          n = c;
        }
        u.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        n = c;
      }
      u();
    }
  } catch (c) {
    if (c && n && typeof c.stack == "string") {
      for (
        var r = c.stack.split(`
`),
          i = n.stack.split(`
`),
          l = r.length - 1,
          o = i.length - 1;
        1 <= l && 0 <= o && r[l] !== i[o];

      )
        o--;
      for (; 1 <= l && 0 <= o; l--, o--)
        if (r[l] !== i[o]) {
          if (l !== 1 || o !== 1)
            do
              if ((l--, o--, 0 > o || r[l] !== i[o])) {
                var s =
                  `
` + r[l].replace(" at new ", " at ");
                return (
                  u.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", u.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= o);
          break;
        }
    }
  } finally {
    (Tt = !1), (Error.prepareStackTrace = t);
  }
  return (u = u ? u.displayName || u.name : "") ? r3(u) : "";
}
function zc(u) {
  switch (u.tag) {
    case 5:
      return r3(u.type);
    case 16:
      return r3("Lazy");
    case 13:
      return r3("Suspense");
    case 19:
      return r3("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (u = Lt(u.type, !1)), u;
    case 11:
      return (u = Lt(u.type.render, !1)), u;
    case 1:
      return (u = Lt(u.type, !0)), u;
    default:
      return "";
  }
}
function gn(u) {
  if (u == null) return null;
  if (typeof u == "function") return u.displayName || u.name || null;
  if (typeof u == "string") return u;
  switch (u) {
    case D0:
      return "Fragment";
    case p0:
      return "Portal";
    case vn:
      return "Profiler";
    case xr:
      return "StrictMode";
    case Bn:
      return "Suspense";
    case mn:
      return "SuspenseList";
  }
  if (typeof u == "object")
    switch (u.$$typeof) {
      case ko:
        return (u.displayName || "Context") + ".Consumer";
      case wo:
        return (u._context.displayName || "Context") + ".Provider";
      case Or:
        var e = u.render;
        return (
          (u = u.displayName),
          u ||
            ((u = e.displayName || e.name || ""),
            (u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef")),
          u
        );
      case Pr:
        return (
          (e = u.displayName || null), e !== null ? e : gn(u.type) || "Memo"
        );
      case Fu:
        (e = u._payload), (u = u._init);
        try {
          return gn(u(e));
        } catch {}
    }
  return null;
}
function Mc(u) {
  var e = u.type;
  switch (u.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (u = e.render),
        (u = u.displayName || u.name || ""),
        e.displayName || (u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gn(e);
    case 8:
      return e === xr ? "StrictMode" : "Mode";
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
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Mu(u) {
  switch (typeof u) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return u;
    case "object":
      return u;
    default:
      return "";
  }
}
function Oo(u) {
  var e = u.type;
  return (
    (u = u.nodeName) &&
    u.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function jc(u) {
  var e = Oo(u) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(u.constructor.prototype, e),
    n = "" + u[e];
  if (
    !u.hasOwnProperty(e) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var r = t.get,
      i = t.set;
    return (
      Object.defineProperty(u, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (l) {
          (n = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(u, e, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (u._valueTracker = null), delete u[e];
        },
      }
    );
  }
}
function Y3(u) {
  u._valueTracker || (u._valueTracker = jc(u));
}
function Po(u) {
  if (!u) return !1;
  var e = u._valueTracker;
  if (!e) return !0;
  var t = e.getValue(),
    n = "";
  return (
    u && (n = Oo(u) ? (u.checked ? "true" : "false") : u.value),
    (u = n),
    u !== t ? (e.setValue(u), !0) : !1
  );
}
function Ae(u) {
  if (((u = u || (typeof document < "u" ? document : void 0)), typeof u > "u"))
    return null;
  try {
    return u.activeElement || u.body;
  } catch {
    return u.body;
  }
}
function Fn(u, e) {
  var t = e.checked;
  return t4({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t != null ? t : u._wrapperState.initialChecked,
  });
}
function Oi(u, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue,
    n = e.checked != null ? e.checked : e.defaultChecked;
  (t = Mu(e.value != null ? e.value : t)),
    (u._wrapperState = {
      initialChecked: n,
      initialValue: t,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function No(u, e) {
  (e = e.checked), e != null && kr(u, "checked", e, !1);
}
function yn(u, e) {
  No(u, e);
  var t = Mu(e.value),
    n = e.type;
  if (t != null)
    n === "number"
      ? ((t === 0 && u.value === "") || u.value != t) && (u.value = "" + t)
      : u.value !== "" + t && (u.value = "" + t);
  else if (n === "submit" || n === "reset") {
    u.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Cn(u, e.type, t)
    : e.hasOwnProperty("defaultValue") && Cn(u, e.type, Mu(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (u.defaultChecked = !!e.defaultChecked);
}
function Pi(u, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + u._wrapperState.initialValue),
      t || e === u.value || (u.value = e),
      (u.defaultValue = e);
  }
  (t = u.name),
    t !== "" && (u.name = ""),
    (u.defaultChecked = !!u._wrapperState.initialChecked),
    t !== "" && (u.name = t);
}
function Cn(u, e, t) {
  (e !== "number" || Ae(u.ownerDocument) !== u) &&
    (t == null
      ? (u.defaultValue = "" + u._wrapperState.initialValue)
      : u.defaultValue !== "" + t && (u.defaultValue = "" + t));
}
var i3 = Array.isArray;
function S0(u, e, t, n) {
  if (((u = u.options), e)) {
    e = {};
    for (var r = 0; r < t.length; r++) e["$" + t[r]] = !0;
    for (t = 0; t < u.length; t++)
      (r = e.hasOwnProperty("$" + u[t].value)),
        u[t].selected !== r && (u[t].selected = r),
        r && n && (u[t].defaultSelected = !0);
  } else {
    for (t = "" + Mu(t), e = null, r = 0; r < u.length; r++) {
      if (u[r].value === t) {
        (u[r].selected = !0), n && (u[r].defaultSelected = !0);
        return;
      }
      e !== null || u[r].disabled || (e = u[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function _n(u, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(A(91));
  return t4({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + u._wrapperState.initialValue,
  });
}
function Ni(u, e) {
  var t = e.value;
  if (t == null) {
    if (((t = e.children), (e = e.defaultValue), t != null)) {
      if (e != null) throw Error(A(92));
      if (i3(t)) {
        if (1 < t.length) throw Error(A(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), (t = e);
  }
  u._wrapperState = { initialValue: Mu(t) };
}
function bo(u, e) {
  var t = Mu(e.value),
    n = Mu(e.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== u.value && (u.value = t),
    e.defaultValue == null && u.defaultValue !== t && (u.defaultValue = t)),
    n != null && (u.defaultValue = "" + n);
}
function bi(u) {
  var e = u.textContent;
  e === u._wrapperState.initialValue && e !== "" && e !== null && (u.value = e);
}
function To(u) {
  switch (u) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function An(u, e) {
  return u == null || u === "http://www.w3.org/1999/xhtml"
    ? To(e)
    : u === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : u;
}
var X3,
  Lo = (function (u) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return u(e, t, n, r);
          });
        }
      : u;
  })(function (u, e) {
    if (u.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in u)
      u.innerHTML = e;
    else {
      for (
        X3 = X3 || document.createElement("div"),
          X3.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = X3.firstChild;
        u.firstChild;

      )
        u.removeChild(u.firstChild);
      for (; e.firstChild; ) u.appendChild(e.firstChild);
    }
  });
function B3(u, e) {
  if (e) {
    var t = u.firstChild;
    if (t && t === u.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  u.textContent = e;
}
var a3 = {
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
  $c = ["Webkit", "ms", "Moz", "O"];
Object.keys(a3).forEach(function (u) {
  $c.forEach(function (e) {
    (e = e + u.charAt(0).toUpperCase() + u.substring(1)), (a3[e] = a3[u]);
  });
});
function Ro(u, e, t) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : t || typeof e != "number" || e === 0 || (a3.hasOwnProperty(u) && a3[u])
    ? ("" + e).trim()
    : e + "px";
}
function zo(u, e) {
  u = u.style;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var n = t.indexOf("--") === 0,
        r = Ro(t, e[t], n);
      t === "float" && (t = "cssFloat"), n ? u.setProperty(t, r) : (u[t] = r);
    }
}
var Ic = t4(
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
function Sn(u, e) {
  if (e) {
    if (Ic[u] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(A(137, u));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(A(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(A(62));
  }
}
function wn(u, e) {
  if (u.indexOf("-") === -1) return typeof e.is == "string";
  switch (u) {
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
var kn = null;
function Nr(u) {
  return (
    (u = u.target || u.srcElement || window),
    u.correspondingUseElement && (u = u.correspondingUseElement),
    u.nodeType === 3 ? u.parentNode : u
  );
}
var xn = null,
  w0 = null,
  k0 = null;
function Ti(u) {
  if ((u = $3(u))) {
    if (typeof xn != "function") throw Error(A(280));
    var e = u.stateNode;
    e && ((e = Et(e)), xn(u.stateNode, u.type, e));
  }
}
function Mo(u) {
  w0 ? (k0 ? k0.push(u) : (k0 = [u])) : (w0 = u);
}
function jo() {
  if (w0) {
    var u = w0,
      e = k0;
    if (((k0 = w0 = null), Ti(u), e)) for (u = 0; u < e.length; u++) Ti(e[u]);
  }
}
function $o(u, e) {
  return u(e);
}
function Io() {}
var Rt = !1;
function Ho(u, e, t) {
  if (Rt) return u(e, t);
  Rt = !0;
  try {
    return $o(u, e, t);
  } finally {
    (Rt = !1), (w0 !== null || k0 !== null) && (Io(), jo());
  }
}
function m3(u, e) {
  var t = u.stateNode;
  if (t === null) return null;
  var n = Et(t);
  if (n === null) return null;
  t = n[e];
  u: switch (e) {
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
      (n = !n.disabled) ||
        ((u = u.type),
        (n = !(
          u === "button" ||
          u === "input" ||
          u === "select" ||
          u === "textarea"
        ))),
        (u = !n);
      break u;
    default:
      u = !1;
  }
  if (u) return null;
  if (t && typeof t != "function") throw Error(A(231, e, typeof t));
  return t;
}
var On = !1;
if (Eu)
  try {
    var X0 = {};
    Object.defineProperty(X0, "passive", {
      get: function () {
        On = !0;
      },
    }),
      window.addEventListener("test", X0, X0),
      window.removeEventListener("test", X0, X0);
  } catch {
    On = !1;
  }
function Hc(u, e, t, n, r, i, l, o, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, c);
  } catch (D) {
    this.onError(D);
  }
}
var s3 = !1,
  Se = null,
  we = !1,
  Pn = null,
  Wc = {
    onError: function (u) {
      (s3 = !0), (Se = u);
    },
  };
function Uc(u, e, t, n, r, i, l, o, s) {
  (s3 = !1), (Se = null), Hc.apply(Wc, arguments);
}
function Vc(u, e, t, n, r, i, l, o, s) {
  if ((Uc.apply(this, arguments), s3)) {
    if (s3) {
      var c = Se;
      (s3 = !1), (Se = null);
    } else throw Error(A(198));
    we || ((we = !0), (Pn = c));
  }
}
function i0(u) {
  var e = u,
    t = u;
  if (u.alternate) for (; e.return; ) e = e.return;
  else {
    u = e;
    do (e = u), (e.flags & 4098) !== 0 && (t = e.return), (u = e.return);
    while (u);
  }
  return e.tag === 3 ? t : null;
}
function Wo(u) {
  if (u.tag === 13) {
    var e = u.memoizedState;
    if (
      (e === null && ((u = u.alternate), u !== null && (e = u.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Li(u) {
  if (i0(u) !== u) throw Error(A(188));
}
function Qc(u) {
  var e = u.alternate;
  if (!e) {
    if (((e = i0(u)), e === null)) throw Error(A(188));
    return e !== u ? null : u;
  }
  for (var t = u, n = e; ; ) {
    var r = t.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (((n = r.return), n !== null)) {
        t = n;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === t) return Li(r), u;
        if (i === n) return Li(r), e;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (t.return !== n.return) (t = r), (n = i);
    else {
      for (var l = !1, o = r.child; o; ) {
        if (o === t) {
          (l = !0), (t = r), (n = i);
          break;
        }
        if (o === n) {
          (l = !0), (n = r), (t = i);
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = i.child; o; ) {
          if (o === t) {
            (l = !0), (t = i), (n = r);
            break;
          }
          if (o === n) {
            (l = !0), (n = i), (t = r);
            break;
          }
          o = o.sibling;
        }
        if (!l) throw Error(A(189));
      }
    }
    if (t.alternate !== n) throw Error(A(190));
  }
  if (t.tag !== 3) throw Error(A(188));
  return t.stateNode.current === t ? u : e;
}
function Uo(u) {
  return (u = Qc(u)), u !== null ? Vo(u) : null;
}
function Vo(u) {
  if (u.tag === 5 || u.tag === 6) return u;
  for (u = u.child; u !== null; ) {
    var e = Vo(u);
    if (e !== null) return e;
    u = u.sibling;
  }
  return null;
}
var Qo = R4.unstable_scheduleCallback,
  Ri = R4.unstable_cancelCallback,
  qc = R4.unstable_shouldYield,
  Kc = R4.unstable_requestPaint,
  i4 = R4.unstable_now,
  Yc = R4.unstable_getCurrentPriorityLevel,
  br = R4.unstable_ImmediatePriority,
  qo = R4.unstable_UserBlockingPriority,
  ke = R4.unstable_NormalPriority,
  Xc = R4.unstable_LowPriority,
  Ko = R4.unstable_IdlePriority,
  st = null,
  nu = null;
function Gc(u) {
  if (nu && typeof nu.onCommitFiberRoot == "function")
    try {
      nu.onCommitFiberRoot(st, u, void 0, (u.current.flags & 128) === 128);
    } catch {}
}
var G4 = Math.clz32 ? Math.clz32 : ud,
  Zc = Math.log,
  Jc = Math.LN2;
function ud(u) {
  return (u >>>= 0), u === 0 ? 32 : (31 - ((Zc(u) / Jc) | 0)) | 0;
}
var G3 = 64,
  Z3 = 4194304;
function l3(u) {
  switch (u & -u) {
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
      return u & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return u & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return u;
  }
}
function xe(u, e) {
  var t = u.pendingLanes;
  if (t === 0) return 0;
  var n = 0,
    r = u.suspendedLanes,
    i = u.pingedLanes,
    l = t & 268435455;
  if (l !== 0) {
    var o = l & ~r;
    o !== 0 ? (n = l3(o)) : ((i &= l), i !== 0 && (n = l3(i)));
  } else (l = t & ~r), l !== 0 ? (n = l3(l)) : i !== 0 && (n = l3(i));
  if (n === 0) return 0;
  if (
    e !== 0 &&
    e !== n &&
    (e & r) === 0 &&
    ((r = n & -n), (i = e & -e), r >= i || (r === 16 && (i & 4194240) !== 0))
  )
    return e;
  if (((n & 4) !== 0 && (n |= t & 16), (e = u.entangledLanes), e !== 0))
    for (u = u.entanglements, e &= n; 0 < e; )
      (t = 31 - G4(e)), (r = 1 << t), (n |= u[t]), (e &= ~r);
  return n;
}
function ed(u, e) {
  switch (u) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function td(u, e) {
  for (
    var t = u.suspendedLanes,
      n = u.pingedLanes,
      r = u.expirationTimes,
      i = u.pendingLanes;
    0 < i;

  ) {
    var l = 31 - G4(i),
      o = 1 << l,
      s = r[l];
    s === -1
      ? ((o & t) === 0 || (o & n) !== 0) && (r[l] = ed(o, e))
      : s <= e && (u.expiredLanes |= o),
      (i &= ~o);
  }
}
function Nn(u) {
  return (
    (u = u.pendingLanes & -1073741825),
    u !== 0 ? u : u & 1073741824 ? 1073741824 : 0
  );
}
function Yo() {
  var u = G3;
  return (G3 <<= 1), (G3 & 4194240) === 0 && (G3 = 64), u;
}
function zt(u) {
  for (var e = [], t = 0; 31 > t; t++) e.push(u);
  return e;
}
function M3(u, e, t) {
  (u.pendingLanes |= e),
    e !== 536870912 && ((u.suspendedLanes = 0), (u.pingedLanes = 0)),
    (u = u.eventTimes),
    (e = 31 - G4(e)),
    (u[e] = t);
}
function nd(u, e) {
  var t = u.pendingLanes & ~e;
  (u.pendingLanes = e),
    (u.suspendedLanes = 0),
    (u.pingedLanes = 0),
    (u.expiredLanes &= e),
    (u.mutableReadLanes &= e),
    (u.entangledLanes &= e),
    (e = u.entanglements);
  var n = u.eventTimes;
  for (u = u.expirationTimes; 0 < t; ) {
    var r = 31 - G4(t),
      i = 1 << r;
    (e[r] = 0), (n[r] = -1), (u[r] = -1), (t &= ~i);
  }
}
function Tr(u, e) {
  var t = (u.entangledLanes |= e);
  for (u = u.entanglements; t; ) {
    var n = 31 - G4(t),
      r = 1 << n;
    (r & e) | (u[n] & e) && (u[n] |= e), (t &= ~r);
  }
}
var V = 0;
function Xo(u) {
  return (
    (u &= -u),
    1 < u ? (4 < u ? ((u & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Go,
  Lr,
  Zo,
  Jo,
  ua,
  bn = !1,
  J3 = [],
  xu = null,
  Ou = null,
  Pu = null,
  g3 = new Map(),
  F3 = new Map(),
  _u = [],
  rd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zi(u, e) {
  switch (u) {
    case "focusin":
    case "focusout":
      xu = null;
      break;
    case "dragenter":
    case "dragleave":
      Ou = null;
      break;
    case "mouseover":
    case "mouseout":
      Pu = null;
      break;
    case "pointerover":
    case "pointerout":
      g3.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      F3.delete(e.pointerId);
  }
}
function G0(u, e, t, n, r, i) {
  return u === null || u.nativeEvent !== i
    ? ((u = {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [r],
      }),
      e !== null && ((e = $3(e)), e !== null && Lr(e)),
      u)
    : ((u.eventSystemFlags |= n),
      (e = u.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      u);
}
function id(u, e, t, n, r) {
  switch (e) {
    case "focusin":
      return (xu = G0(xu, u, e, t, n, r)), !0;
    case "dragenter":
      return (Ou = G0(Ou, u, e, t, n, r)), !0;
    case "mouseover":
      return (Pu = G0(Pu, u, e, t, n, r)), !0;
    case "pointerover":
      var i = r.pointerId;
      return g3.set(i, G0(g3.get(i) || null, u, e, t, n, r)), !0;
    case "gotpointercapture":
      return (
        (i = r.pointerId), F3.set(i, G0(F3.get(i) || null, u, e, t, n, r)), !0
      );
  }
  return !1;
}
function ea(u) {
  var e = qu(u.target);
  if (e !== null) {
    var t = i0(e);
    if (t !== null) {
      if (((e = t.tag), e === 13)) {
        if (((e = Wo(t)), e !== null)) {
          (u.blockedOn = e),
            ua(u.priority, function () {
              Zo(t);
            });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        u.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  u.blockedOn = null;
}
function Ee(u) {
  if (u.blockedOn !== null) return !1;
  for (var e = u.targetContainers; 0 < e.length; ) {
    var t = Tn(u.domEventName, u.eventSystemFlags, e[0], u.nativeEvent);
    if (t === null) {
      t = u.nativeEvent;
      var n = new t.constructor(t.type, t);
      (kn = n), t.target.dispatchEvent(n), (kn = null);
    } else return (e = $3(t)), e !== null && Lr(e), (u.blockedOn = t), !1;
    e.shift();
  }
  return !0;
}
function Mi(u, e, t) {
  Ee(u) && t.delete(e);
}
function ld() {
  (bn = !1),
    xu !== null && Ee(xu) && (xu = null),
    Ou !== null && Ee(Ou) && (Ou = null),
    Pu !== null && Ee(Pu) && (Pu = null),
    g3.forEach(Mi),
    F3.forEach(Mi);
}
function Z0(u, e) {
  u.blockedOn === e &&
    ((u.blockedOn = null),
    bn ||
      ((bn = !0),
      R4.unstable_scheduleCallback(R4.unstable_NormalPriority, ld)));
}
function y3(u) {
  function e(r) {
    return Z0(r, u);
  }
  if (0 < J3.length) {
    Z0(J3[0], u);
    for (var t = 1; t < J3.length; t++) {
      var n = J3[t];
      n.blockedOn === u && (n.blockedOn = null);
    }
  }
  for (
    xu !== null && Z0(xu, u),
      Ou !== null && Z0(Ou, u),
      Pu !== null && Z0(Pu, u),
      g3.forEach(e),
      F3.forEach(e),
      t = 0;
    t < _u.length;
    t++
  )
    (n = _u[t]), n.blockedOn === u && (n.blockedOn = null);
  for (; 0 < _u.length && ((t = _u[0]), t.blockedOn === null); )
    ea(t), t.blockedOn === null && _u.shift();
}
var x0 = vu.ReactCurrentBatchConfig,
  Oe = !0;
function od(u, e, t, n) {
  var r = V,
    i = x0.transition;
  x0.transition = null;
  try {
    (V = 1), Rr(u, e, t, n);
  } finally {
    (V = r), (x0.transition = i);
  }
}
function ad(u, e, t, n) {
  var r = V,
    i = x0.transition;
  x0.transition = null;
  try {
    (V = 4), Rr(u, e, t, n);
  } finally {
    (V = r), (x0.transition = i);
  }
}
function Rr(u, e, t, n) {
  if (Oe) {
    var r = Tn(u, e, t, n);
    if (r === null) qt(u, e, n, Pe, t), zi(u, n);
    else if (id(r, u, e, t, n)) n.stopPropagation();
    else if ((zi(u, n), e & 4 && -1 < rd.indexOf(u))) {
      for (; r !== null; ) {
        var i = $3(r);
        if (
          (i !== null && Go(i),
          (i = Tn(u, e, t, n)),
          i === null && qt(u, e, n, Pe, t),
          i === r)
        )
          break;
        r = i;
      }
      r !== null && n.stopPropagation();
    } else qt(u, e, n, null, t);
  }
}
var Pe = null;
function Tn(u, e, t, n) {
  if (((Pe = null), (u = Nr(n)), (u = qu(u)), u !== null))
    if (((e = i0(u)), e === null)) u = null;
    else if (((t = e.tag), t === 13)) {
      if (((u = Wo(e)), u !== null)) return u;
      u = null;
    } else if (t === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      u = null;
    } else e !== u && (u = null);
  return (Pe = u), null;
}
function ta(u) {
  switch (u) {
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
      switch (Yc()) {
        case br:
          return 1;
        case qo:
          return 4;
        case ke:
        case Xc:
          return 16;
        case Ko:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Su = null,
  zr = null,
  pe = null;
function na() {
  if (pe) return pe;
  var u,
    e = zr,
    t = e.length,
    n,
    r = "value" in Su ? Su.value : Su.textContent,
    i = r.length;
  for (u = 0; u < t && e[u] === r[u]; u++);
  var l = t - u;
  for (n = 1; n <= l && e[t - n] === r[i - n]; n++);
  return (pe = r.slice(u, 1 < n ? 1 - n : void 0));
}
function De(u) {
  var e = u.keyCode;
  return (
    "charCode" in u
      ? ((u = u.charCode), u === 0 && e === 13 && (u = 13))
      : (u = e),
    u === 10 && (u = 13),
    32 <= u || u === 13 ? u : 0
  );
}
function ue() {
  return !0;
}
function ji() {
  return !1;
}
function M4(u) {
  function e(t, n, r, i, l) {
    (this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var o in u)
      u.hasOwnProperty(o) && ((t = u[o]), (this[o] = t ? t(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ue
        : ji),
      (this.isPropagationStopped = ji),
      this
    );
  }
  return (
    t4(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = ue));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = ue));
      },
      persist: function () {},
      isPersistent: ue,
    }),
    e
  );
}
var q0 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (u) {
      return u.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mr = M4(q0),
  j3 = t4({}, q0, { view: 0, detail: 0 }),
  sd = M4(j3),
  Mt,
  jt,
  J0,
  ct = t4({}, j3, {
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
    getModifierState: jr,
    button: 0,
    buttons: 0,
    relatedTarget: function (u) {
      return u.relatedTarget === void 0
        ? u.fromElement === u.srcElement
          ? u.toElement
          : u.fromElement
        : u.relatedTarget;
    },
    movementX: function (u) {
      return "movementX" in u
        ? u.movementX
        : (u !== J0 &&
            (J0 && u.type === "mousemove"
              ? ((Mt = u.screenX - J0.screenX), (jt = u.screenY - J0.screenY))
              : (jt = Mt = 0),
            (J0 = u)),
          Mt);
    },
    movementY: function (u) {
      return "movementY" in u ? u.movementY : jt;
    },
  }),
  $i = M4(ct),
  cd = t4({}, ct, { dataTransfer: 0 }),
  dd = M4(cd),
  fd = t4({}, j3, { relatedTarget: 0 }),
  $t = M4(fd),
  Ed = t4({}, q0, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pd = M4(Ed),
  Dd = t4({}, q0, {
    clipboardData: function (u) {
      return "clipboardData" in u ? u.clipboardData : window.clipboardData;
    },
  }),
  hd = M4(Dd),
  vd = t4({}, q0, { data: 0 }),
  Ii = M4(vd),
  Bd = {
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
  md = {
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
  gd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Fd(u) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(u) : (u = gd[u]) ? !!e[u] : !1;
}
function jr() {
  return Fd;
}
var yd = t4({}, j3, {
    key: function (u) {
      if (u.key) {
        var e = Bd[u.key] || u.key;
        if (e !== "Unidentified") return e;
      }
      return u.type === "keypress"
        ? ((u = De(u)), u === 13 ? "Enter" : String.fromCharCode(u))
        : u.type === "keydown" || u.type === "keyup"
        ? md[u.keyCode] || "Unidentified"
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
    getModifierState: jr,
    charCode: function (u) {
      return u.type === "keypress" ? De(u) : 0;
    },
    keyCode: function (u) {
      return u.type === "keydown" || u.type === "keyup" ? u.keyCode : 0;
    },
    which: function (u) {
      return u.type === "keypress"
        ? De(u)
        : u.type === "keydown" || u.type === "keyup"
        ? u.keyCode
        : 0;
    },
  }),
  Cd = M4(yd),
  _d = t4({}, ct, {
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
  Hi = M4(_d),
  Ad = t4({}, j3, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jr,
  }),
  Sd = M4(Ad),
  wd = t4({}, q0, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kd = M4(wd),
  xd = t4({}, ct, {
    deltaX: function (u) {
      return "deltaX" in u ? u.deltaX : "wheelDeltaX" in u ? -u.wheelDeltaX : 0;
    },
    deltaY: function (u) {
      return "deltaY" in u
        ? u.deltaY
        : "wheelDeltaY" in u
        ? -u.wheelDeltaY
        : "wheelDelta" in u
        ? -u.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Od = M4(xd),
  Pd = [9, 13, 27, 32],
  $r = Eu && "CompositionEvent" in window,
  c3 = null;
Eu && "documentMode" in document && (c3 = document.documentMode);
var Nd = Eu && "TextEvent" in window && !c3,
  ra = Eu && (!$r || (c3 && 8 < c3 && 11 >= c3)),
  Wi = String.fromCharCode(32),
  Ui = !1;
function ia(u, e) {
  switch (u) {
    case "keyup":
      return Pd.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function la(u) {
  return (u = u.detail), typeof u == "object" && "data" in u ? u.data : null;
}
var h0 = !1;
function bd(u, e) {
  switch (u) {
    case "compositionend":
      return la(e);
    case "keypress":
      return e.which !== 32 ? null : ((Ui = !0), Wi);
    case "textInput":
      return (u = e.data), u === Wi && Ui ? null : u;
    default:
      return null;
  }
}
function Td(u, e) {
  if (h0)
    return u === "compositionend" || (!$r && ia(u, e))
      ? ((u = na()), (pe = zr = Su = null), (h0 = !1), u)
      : null;
  switch (u) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return ra && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Ld = {
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
function Vi(u) {
  var e = u && u.nodeName && u.nodeName.toLowerCase();
  return e === "input" ? !!Ld[u.type] : e === "textarea";
}
function oa(u, e, t, n) {
  Mo(n),
    (e = Ne(e, "onChange")),
    0 < e.length &&
      ((t = new Mr("onChange", "change", null, t, n)),
      u.push({ event: t, listeners: e }));
}
var d3 = null,
  C3 = null;
function Rd(u) {
  Ba(u, 0);
}
function dt(u) {
  var e = m0(u);
  if (Po(e)) return u;
}
function zd(u, e) {
  if (u === "change") return e;
}
var aa = !1;
if (Eu) {
  var It;
  if (Eu) {
    var Ht = "oninput" in document;
    if (!Ht) {
      var Qi = document.createElement("div");
      Qi.setAttribute("oninput", "return;"),
        (Ht = typeof Qi.oninput == "function");
    }
    It = Ht;
  } else It = !1;
  aa = It && (!document.documentMode || 9 < document.documentMode);
}
function qi() {
  d3 && (d3.detachEvent("onpropertychange", sa), (C3 = d3 = null));
}
function sa(u) {
  if (u.propertyName === "value" && dt(C3)) {
    var e = [];
    oa(e, C3, u, Nr(u)), Ho(Rd, e);
  }
}
function Md(u, e, t) {
  u === "focusin"
    ? (qi(), (d3 = e), (C3 = t), d3.attachEvent("onpropertychange", sa))
    : u === "focusout" && qi();
}
function jd(u) {
  if (u === "selectionchange" || u === "keyup" || u === "keydown")
    return dt(C3);
}
function $d(u, e) {
  if (u === "click") return dt(e);
}
function Id(u, e) {
  if (u === "input" || u === "change") return dt(e);
}
function Hd(u, e) {
  return (u === e && (u !== 0 || 1 / u === 1 / e)) || (u !== u && e !== e);
}
var J4 = typeof Object.is == "function" ? Object.is : Hd;
function _3(u, e) {
  if (J4(u, e)) return !0;
  if (typeof u != "object" || u === null || typeof e != "object" || e === null)
    return !1;
  var t = Object.keys(u),
    n = Object.keys(e);
  if (t.length !== n.length) return !1;
  for (n = 0; n < t.length; n++) {
    var r = t[n];
    if (!hn.call(e, r) || !J4(u[r], e[r])) return !1;
  }
  return !0;
}
function Ki(u) {
  for (; u && u.firstChild; ) u = u.firstChild;
  return u;
}
function Yi(u, e) {
  var t = Ki(u);
  u = 0;
  for (var n; t; ) {
    if (t.nodeType === 3) {
      if (((n = u + t.textContent.length), u <= e && n >= e))
        return { node: t, offset: e - u };
      u = n;
    }
    u: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break u;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Ki(t);
  }
}
function ca(u, e) {
  return u && e
    ? u === e
      ? !0
      : u && u.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? ca(u, e.parentNode)
      : "contains" in u
      ? u.contains(e)
      : u.compareDocumentPosition
      ? !!(u.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function da() {
  for (var u = window, e = Ae(); e instanceof u.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) u = e.contentWindow;
    else break;
    e = Ae(u.document);
  }
  return e;
}
function Ir(u) {
  var e = u && u.nodeName && u.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (u.type === "text" ||
        u.type === "search" ||
        u.type === "tel" ||
        u.type === "url" ||
        u.type === "password")) ||
      e === "textarea" ||
      u.contentEditable === "true")
  );
}
function Wd(u) {
  var e = da(),
    t = u.focusedElem,
    n = u.selectionRange;
  if (
    e !== t &&
    t &&
    t.ownerDocument &&
    ca(t.ownerDocument.documentElement, t)
  ) {
    if (n !== null && Ir(t)) {
      if (
        ((e = n.start),
        (u = n.end),
        u === void 0 && (u = e),
        "selectionStart" in t)
      )
        (t.selectionStart = e), (t.selectionEnd = Math.min(u, t.value.length));
      else if (
        ((u = ((e = t.ownerDocument || document) && e.defaultView) || window),
        u.getSelection)
      ) {
        u = u.getSelection();
        var r = t.textContent.length,
          i = Math.min(n.start, r);
        (n = n.end === void 0 ? i : Math.min(n.end, r)),
          !u.extend && i > n && ((r = n), (n = i), (i = r)),
          (r = Yi(t, i));
        var l = Yi(t, n);
        r &&
          l &&
          (u.rangeCount !== 1 ||
            u.anchorNode !== r.node ||
            u.anchorOffset !== r.offset ||
            u.focusNode !== l.node ||
            u.focusOffset !== l.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          u.removeAllRanges(),
          i > n
            ? (u.addRange(e), u.extend(l.node, l.offset))
            : (e.setEnd(l.node, l.offset), u.addRange(e)));
      }
    }
    for (e = [], u = t; (u = u.parentNode); )
      u.nodeType === 1 &&
        e.push({ element: u, left: u.scrollLeft, top: u.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
      (u = e[t]),
        (u.element.scrollLeft = u.left),
        (u.element.scrollTop = u.top);
  }
}
var Ud = Eu && "documentMode" in document && 11 >= document.documentMode,
  v0 = null,
  Ln = null,
  f3 = null,
  Rn = !1;
function Xi(u, e, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Rn ||
    v0 == null ||
    v0 !== Ae(n) ||
    ((n = v0),
    "selectionStart" in n && Ir(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (f3 && _3(f3, n)) ||
      ((f3 = n),
      (n = Ne(Ln, "onSelect")),
      0 < n.length &&
        ((e = new Mr("onSelect", "select", null, e, t)),
        u.push({ event: e, listeners: n }),
        (e.target = v0))));
}
function ee(u, e) {
  var t = {};
  return (
    (t[u.toLowerCase()] = e.toLowerCase()),
    (t["Webkit" + u] = "webkit" + e),
    (t["Moz" + u] = "moz" + e),
    t
  );
}
var B0 = {
    animationend: ee("Animation", "AnimationEnd"),
    animationiteration: ee("Animation", "AnimationIteration"),
    animationstart: ee("Animation", "AnimationStart"),
    transitionend: ee("Transition", "TransitionEnd"),
  },
  Wt = {},
  fa = {};
Eu &&
  ((fa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete B0.animationend.animation,
    delete B0.animationiteration.animation,
    delete B0.animationstart.animation),
  "TransitionEvent" in window || delete B0.transitionend.transition);
function ft(u) {
  if (Wt[u]) return Wt[u];
  if (!B0[u]) return u;
  var e = B0[u],
    t;
  for (t in e) if (e.hasOwnProperty(t) && t in fa) return (Wt[u] = e[t]);
  return u;
}
var Ea = ft("animationend"),
  pa = ft("animationiteration"),
  Da = ft("animationstart"),
  ha = ft("transitionend"),
  va = new Map(),
  Gi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Iu(u, e) {
  va.set(u, e), r0(e, [u]);
}
for (var Ut = 0; Ut < Gi.length; Ut++) {
  var Vt = Gi[Ut],
    Vd = Vt.toLowerCase(),
    Qd = Vt[0].toUpperCase() + Vt.slice(1);
  Iu(Vd, "on" + Qd);
}
Iu(Ea, "onAnimationEnd");
Iu(pa, "onAnimationIteration");
Iu(Da, "onAnimationStart");
Iu("dblclick", "onDoubleClick");
Iu("focusin", "onFocus");
Iu("focusout", "onBlur");
Iu(ha, "onTransitionEnd");
T0("onMouseEnter", ["mouseout", "mouseover"]);
T0("onMouseLeave", ["mouseout", "mouseover"]);
T0("onPointerEnter", ["pointerout", "pointerover"]);
T0("onPointerLeave", ["pointerout", "pointerover"]);
r0(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
r0(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
r0("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
r0(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
r0(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
r0(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var o3 =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(o3));
function Zi(u, e, t) {
  var n = u.type || "unknown-event";
  (u.currentTarget = t), Vc(n, e, void 0, u), (u.currentTarget = null);
}
function Ba(u, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < u.length; t++) {
    var n = u[t],
      r = n.event;
    n = n.listeners;
    u: {
      var i = void 0;
      if (e)
        for (var l = n.length - 1; 0 <= l; l--) {
          var o = n[l],
            s = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), s !== i && r.isPropagationStopped())) break u;
          Zi(r, o, c), (i = s);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (
            ((o = n[l]),
            (s = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            s !== i && r.isPropagationStopped())
          )
            break u;
          Zi(r, o, c), (i = s);
        }
    }
  }
  if (we) throw ((u = Pn), (we = !1), (Pn = null), u);
}
function K(u, e) {
  var t = e[In];
  t === void 0 && (t = e[In] = new Set());
  var n = u + "__bubble";
  t.has(n) || (ma(e, u, 2, !1), t.add(n));
}
function Qt(u, e, t) {
  var n = 0;
  e && (n |= 4), ma(t, u, n, e);
}
var te = "_reactListening" + Math.random().toString(36).slice(2);
function A3(u) {
  if (!u[te]) {
    (u[te] = !0),
      So.forEach(function (t) {
        t !== "selectionchange" && (qd.has(t) || Qt(t, !1, u), Qt(t, !0, u));
      });
    var e = u.nodeType === 9 ? u : u.ownerDocument;
    e === null || e[te] || ((e[te] = !0), Qt("selectionchange", !1, e));
  }
}
function ma(u, e, t, n) {
  switch (ta(e)) {
    case 1:
      var r = od;
      break;
    case 4:
      r = ad;
      break;
    default:
      r = Rr;
  }
  (t = r.bind(null, e, t, u)),
    (r = void 0),
    !On ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (r = !0),
    n
      ? r !== void 0
        ? u.addEventListener(e, t, { capture: !0, passive: r })
        : u.addEventListener(e, t, !0)
      : r !== void 0
      ? u.addEventListener(e, t, { passive: r })
      : u.addEventListener(e, t, !1);
}
function qt(u, e, t, n, r) {
  var i = n;
  if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
    u: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var o = n.stateNode.containerInfo;
        if (o === r || (o.nodeType === 8 && o.parentNode === r)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === r || (s.nodeType === 8 && s.parentNode === r))
            )
              return;
            l = l.return;
          }
        for (; o !== null; ) {
          if (((l = qu(o)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            n = i = l;
            continue u;
          }
          o = o.parentNode;
        }
      }
      n = n.return;
    }
  Ho(function () {
    var c = i,
      D = Nr(t),
      f = [];
    u: {
      var p = va.get(u);
      if (p !== void 0) {
        var v = Mr,
          B = u;
        switch (u) {
          case "keypress":
            if (De(t) === 0) break u;
          case "keydown":
          case "keyup":
            v = Cd;
            break;
          case "focusin":
            (B = "focus"), (v = $t);
            break;
          case "focusout":
            (B = "blur"), (v = $t);
            break;
          case "beforeblur":
          case "afterblur":
            v = $t;
            break;
          case "click":
            if (t.button === 2) break u;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = $i;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Sd;
            break;
          case Ea:
          case pa:
          case Da:
            v = pd;
            break;
          case ha:
            v = kd;
            break;
          case "scroll":
            v = sd;
            break;
          case "wheel":
            v = Od;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = hd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Hi;
        }
        var m = (e & 4) !== 0,
          F = !m && u === "scroll",
          E = m ? (p !== null ? p + "Capture" : null) : p;
        m = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var g = h.stateNode;
          if (
            (h.tag === 5 &&
              g !== null &&
              ((h = g),
              E !== null && ((g = m3(d, E)), g != null && m.push(S3(d, g, h)))),
            F)
          )
            break;
          d = d.return;
        }
        0 < m.length &&
          ((p = new v(p, B, null, t, D)), f.push({ event: p, listeners: m }));
      }
    }
    if ((e & 7) === 0) {
      u: {
        if (
          ((p = u === "mouseover" || u === "pointerover"),
          (v = u === "mouseout" || u === "pointerout"),
          p &&
            t !== kn &&
            (B = t.relatedTarget || t.fromElement) &&
            (qu(B) || B[pu]))
        )
          break u;
        if (
          (v || p) &&
          ((p =
            D.window === D
              ? D
              : (p = D.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          v
            ? ((B = t.relatedTarget || t.toElement),
              (v = c),
              (B = B ? qu(B) : null),
              B !== null &&
                ((F = i0(B)), B !== F || (B.tag !== 5 && B.tag !== 6)) &&
                (B = null))
            : ((v = null), (B = c)),
          v !== B)
        ) {
          if (
            ((m = $i),
            (g = "onMouseLeave"),
            (E = "onMouseEnter"),
            (d = "mouse"),
            (u === "pointerout" || u === "pointerover") &&
              ((m = Hi),
              (g = "onPointerLeave"),
              (E = "onPointerEnter"),
              (d = "pointer")),
            (F = v == null ? p : m0(v)),
            (h = B == null ? p : m0(B)),
            (p = new m(g, d + "leave", v, t, D)),
            (p.target = F),
            (p.relatedTarget = h),
            (g = null),
            qu(D) === c &&
              ((m = new m(E, d + "enter", B, t, D)),
              (m.target = h),
              (m.relatedTarget = F),
              (g = m)),
            (F = g),
            v && B)
          )
            e: {
              for (m = v, E = B, d = 0, h = m; h; h = s0(h)) d++;
              for (h = 0, g = E; g; g = s0(g)) h++;
              for (; 0 < d - h; ) (m = s0(m)), d--;
              for (; 0 < h - d; ) (E = s0(E)), h--;
              for (; d--; ) {
                if (m === E || (E !== null && m === E.alternate)) break e;
                (m = s0(m)), (E = s0(E));
              }
              m = null;
            }
          else m = null;
          v !== null && Ji(f, p, v, m, !1),
            B !== null && F !== null && Ji(f, F, B, m, !0);
        }
      }
      u: {
        if (
          ((p = c ? m0(c) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var y = zd;
        else if (Vi(p))
          if (aa) y = Id;
          else {
            y = jd;
            var _ = Md;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (y = $d);
        if (y && (y = y(u, c))) {
          oa(f, y, t, D);
          break u;
        }
        _ && _(u, p, c),
          u === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            Cn(p, "number", p.value);
      }
      switch (((_ = c ? m0(c) : window), u)) {
        case "focusin":
          (Vi(_) || _.contentEditable === "true") &&
            ((v0 = _), (Ln = c), (f3 = null));
          break;
        case "focusout":
          f3 = Ln = v0 = null;
          break;
        case "mousedown":
          Rn = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Rn = !1), Xi(f, t, D);
          break;
        case "selectionchange":
          if (Ud) break;
        case "keydown":
        case "keyup":
          Xi(f, t, D);
      }
      var w;
      if ($r)
        u: {
          switch (u) {
            case "compositionstart":
              var P = "onCompositionStart";
              break u;
            case "compositionend":
              P = "onCompositionEnd";
              break u;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break u;
          }
          P = void 0;
        }
      else
        h0
          ? ia(u, t) && (P = "onCompositionEnd")
          : u === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (ra &&
          t.locale !== "ko" &&
          (h0 || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && h0 && (w = na())
            : ((Su = D),
              (zr = "value" in Su ? Su.value : Su.textContent),
              (h0 = !0))),
        (_ = Ne(c, P)),
        0 < _.length &&
          ((P = new Ii(P, u, null, t, D)),
          f.push({ event: P, listeners: _ }),
          w ? (P.data = w) : ((w = la(t)), w !== null && (P.data = w)))),
        (w = Nd ? bd(u, t) : Td(u, t)) &&
          ((c = Ne(c, "onBeforeInput")),
          0 < c.length &&
            ((D = new Ii("onBeforeInput", "beforeinput", null, t, D)),
            f.push({ event: D, listeners: c }),
            (D.data = w)));
    }
    Ba(f, e);
  });
}
function S3(u, e, t) {
  return { instance: u, listener: e, currentTarget: t };
}
function Ne(u, e) {
  for (var t = e + "Capture", n = []; u !== null; ) {
    var r = u,
      i = r.stateNode;
    r.tag === 5 &&
      i !== null &&
      ((r = i),
      (i = m3(u, t)),
      i != null && n.unshift(S3(u, i, r)),
      (i = m3(u, e)),
      i != null && n.push(S3(u, i, r))),
      (u = u.return);
  }
  return n;
}
function s0(u) {
  if (u === null) return null;
  do u = u.return;
  while (u && u.tag !== 5);
  return u || null;
}
function Ji(u, e, t, n, r) {
  for (var i = e._reactName, l = []; t !== null && t !== n; ) {
    var o = t,
      s = o.alternate,
      c = o.stateNode;
    if (s !== null && s === n) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      r
        ? ((s = m3(t, i)), s != null && l.unshift(S3(t, s, o)))
        : r || ((s = m3(t, i)), s != null && l.push(S3(t, s, o)))),
      (t = t.return);
  }
  l.length !== 0 && u.push({ event: e, listeners: l });
}
var Kd = /\r\n?/g,
  Yd = /\u0000|\uFFFD/g;
function ul(u) {
  return (typeof u == "string" ? u : "" + u)
    .replace(
      Kd,
      `
`
    )
    .replace(Yd, "");
}
function ne(u, e, t) {
  if (((e = ul(e)), ul(u) !== e && t)) throw Error(A(425));
}
function be() {}
var zn = null,
  Mn = null;
function jn(u, e) {
  return (
    u === "textarea" ||
    u === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var $n = typeof setTimeout == "function" ? setTimeout : void 0,
  Xd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  el = typeof Promise == "function" ? Promise : void 0,
  Gd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof el < "u"
      ? function (u) {
          return el.resolve(null).then(u).catch(Zd);
        }
      : $n;
function Zd(u) {
  setTimeout(function () {
    throw u;
  });
}
function Kt(u, e) {
  var t = e,
    n = 0;
  do {
    var r = t.nextSibling;
    if ((u.removeChild(t), r && r.nodeType === 8))
      if (((t = r.data), t === "/$")) {
        if (n === 0) {
          u.removeChild(r), y3(e);
          return;
        }
        n--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || n++;
    t = r;
  } while (t);
  y3(e);
}
function Nu(u) {
  for (; u != null; u = u.nextSibling) {
    var e = u.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = u.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return u;
}
function tl(u) {
  u = u.previousSibling;
  for (var e = 0; u; ) {
    if (u.nodeType === 8) {
      var t = u.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return u;
        e--;
      } else t === "/$" && e++;
    }
    u = u.previousSibling;
  }
  return null;
}
var K0 = Math.random().toString(36).slice(2),
  tu = "__reactFiber$" + K0,
  w3 = "__reactProps$" + K0,
  pu = "__reactContainer$" + K0,
  In = "__reactEvents$" + K0,
  Jd = "__reactListeners$" + K0,
  uf = "__reactHandles$" + K0;
function qu(u) {
  var e = u[tu];
  if (e) return e;
  for (var t = u.parentNode; t; ) {
    if ((e = t[pu] || t[tu])) {
      if (
        ((t = e.alternate),
        e.child !== null || (t !== null && t.child !== null))
      )
        for (u = tl(u); u !== null; ) {
          if ((t = u[tu])) return t;
          u = tl(u);
        }
      return e;
    }
    (u = t), (t = u.parentNode);
  }
  return null;
}
function $3(u) {
  return (
    (u = u[tu] || u[pu]),
    !u || (u.tag !== 5 && u.tag !== 6 && u.tag !== 13 && u.tag !== 3) ? null : u
  );
}
function m0(u) {
  if (u.tag === 5 || u.tag === 6) return u.stateNode;
  throw Error(A(33));
}
function Et(u) {
  return u[w3] || null;
}
var Hn = [],
  g0 = -1;
function Hu(u) {
  return { current: u };
}
function X(u) {
  0 > g0 || ((u.current = Hn[g0]), (Hn[g0] = null), g0--);
}
function q(u, e) {
  g0++, (Hn[g0] = u.current), (u.current = e);
}
var ju = {},
  m4 = Hu(ju),
  x4 = Hu(!1),
  Zu = ju;
function L0(u, e) {
  var t = u.type.contextTypes;
  if (!t) return ju;
  var n = u.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e)
    return n.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    i;
  for (i in t) r[i] = e[i];
  return (
    n &&
      ((u = u.stateNode),
      (u.__reactInternalMemoizedUnmaskedChildContext = e),
      (u.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function O4(u) {
  return (u = u.childContextTypes), u != null;
}
function Te() {
  X(x4), X(m4);
}
function nl(u, e, t) {
  if (m4.current !== ju) throw Error(A(168));
  q(m4, e), q(x4, t);
}
function ga(u, e, t) {
  var n = u.stateNode;
  if (((e = e.childContextTypes), typeof n.getChildContext != "function"))
    return t;
  n = n.getChildContext();
  for (var r in n) if (!(r in e)) throw Error(A(108, Mc(u) || "Unknown", r));
  return t4({}, t, n);
}
function Le(u) {
  return (
    (u =
      ((u = u.stateNode) && u.__reactInternalMemoizedMergedChildContext) || ju),
    (Zu = m4.current),
    q(m4, u),
    q(x4, x4.current),
    !0
  );
}
function rl(u, e, t) {
  var n = u.stateNode;
  if (!n) throw Error(A(169));
  t
    ? ((u = ga(u, e, Zu)),
      (n.__reactInternalMemoizedMergedChildContext = u),
      X(x4),
      X(m4),
      q(m4, u))
    : X(x4),
    q(x4, t);
}
var su = null,
  pt = !1,
  Yt = !1;
function Fa(u) {
  su === null ? (su = [u]) : su.push(u);
}
function ef(u) {
  (pt = !0), Fa(u);
}
function Wu() {
  if (!Yt && su !== null) {
    Yt = !0;
    var u = 0,
      e = V;
    try {
      var t = su;
      for (V = 1; u < t.length; u++) {
        var n = t[u];
        do n = n(!0);
        while (n !== null);
      }
      (su = null), (pt = !1);
    } catch (r) {
      throw (su !== null && (su = su.slice(u + 1)), Qo(br, Wu), r);
    } finally {
      (V = e), (Yt = !1);
    }
  }
  return null;
}
var F0 = [],
  y0 = 0,
  Re = null,
  ze = 0,
  I4 = [],
  H4 = 0,
  Ju = null,
  cu = 1,
  du = "";
function Vu(u, e) {
  (F0[y0++] = ze), (F0[y0++] = Re), (Re = u), (ze = e);
}
function ya(u, e, t) {
  (I4[H4++] = cu), (I4[H4++] = du), (I4[H4++] = Ju), (Ju = u);
  var n = cu;
  u = du;
  var r = 32 - G4(n) - 1;
  (n &= ~(1 << r)), (t += 1);
  var i = 32 - G4(e) + r;
  if (30 < i) {
    var l = r - (r % 5);
    (i = (n & ((1 << l) - 1)).toString(32)),
      (n >>= l),
      (r -= l),
      (cu = (1 << (32 - G4(e) + r)) | (t << r) | n),
      (du = i + u);
  } else (cu = (1 << i) | (t << r) | n), (du = u);
}
function Hr(u) {
  u.return !== null && (Vu(u, 1), ya(u, 1, 0));
}
function Wr(u) {
  for (; u === Re; )
    (Re = F0[--y0]), (F0[y0] = null), (ze = F0[--y0]), (F0[y0] = null);
  for (; u === Ju; )
    (Ju = I4[--H4]),
      (I4[H4] = null),
      (du = I4[--H4]),
      (I4[H4] = null),
      (cu = I4[--H4]),
      (I4[H4] = null);
}
var L4 = null,
  T4 = null,
  Z = !1,
  X4 = null;
function Ca(u, e) {
  var t = W4(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = e),
    (t.return = u),
    (e = u.deletions),
    e === null ? ((u.deletions = [t]), (u.flags |= 16)) : e.push(t);
}
function il(u, e) {
  switch (u.tag) {
    case 5:
      var t = u.type;
      return (
        (e =
          e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((u.stateNode = e), (L4 = u), (T4 = Nu(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = u.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((u.stateNode = e), (L4 = u), (T4 = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((t = Ju !== null ? { id: cu, overflow: du } : null),
            (u.memoizedState = {
              dehydrated: e,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = W4(18, null, null, 0)),
            (t.stateNode = e),
            (t.return = u),
            (u.child = t),
            (L4 = u),
            (T4 = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wn(u) {
  return (u.mode & 1) !== 0 && (u.flags & 128) === 0;
}
function Un(u) {
  if (Z) {
    var e = T4;
    if (e) {
      var t = e;
      if (!il(u, e)) {
        if (Wn(u)) throw Error(A(418));
        e = Nu(t.nextSibling);
        var n = L4;
        e && il(u, e)
          ? Ca(n, t)
          : ((u.flags = (u.flags & -4097) | 2), (Z = !1), (L4 = u));
      }
    } else {
      if (Wn(u)) throw Error(A(418));
      (u.flags = (u.flags & -4097) | 2), (Z = !1), (L4 = u);
    }
  }
}
function ll(u) {
  for (u = u.return; u !== null && u.tag !== 5 && u.tag !== 3 && u.tag !== 13; )
    u = u.return;
  L4 = u;
}
function re(u) {
  if (u !== L4) return !1;
  if (!Z) return ll(u), (Z = !0), !1;
  var e;
  if (
    ((e = u.tag !== 3) &&
      !(e = u.tag !== 5) &&
      ((e = u.type),
      (e = e !== "head" && e !== "body" && !jn(u.type, u.memoizedProps))),
    e && (e = T4))
  ) {
    if (Wn(u)) throw (_a(), Error(A(418)));
    for (; e; ) Ca(u, e), (e = Nu(e.nextSibling));
  }
  if ((ll(u), u.tag === 13)) {
    if (((u = u.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
      throw Error(A(317));
    u: {
      for (u = u.nextSibling, e = 0; u; ) {
        if (u.nodeType === 8) {
          var t = u.data;
          if (t === "/$") {
            if (e === 0) {
              T4 = Nu(u.nextSibling);
              break u;
            }
            e--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || e++;
        }
        u = u.nextSibling;
      }
      T4 = null;
    }
  } else T4 = L4 ? Nu(u.stateNode.nextSibling) : null;
  return !0;
}
function _a() {
  for (var u = T4; u; ) u = Nu(u.nextSibling);
}
function R0() {
  (T4 = L4 = null), (Z = !1);
}
function Ur(u) {
  X4 === null ? (X4 = [u]) : X4.push(u);
}
var tf = vu.ReactCurrentBatchConfig;
function u3(u, e, t) {
  if (
    ((u = t.ref), u !== null && typeof u != "function" && typeof u != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(A(309));
        var n = t.stateNode;
      }
      if (!n) throw Error(A(147, u));
      var r = n,
        i = "" + u;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (l) {
            var o = r.refs;
            l === null ? delete o[i] : (o[i] = l);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof u != "string") throw Error(A(284));
    if (!t._owner) throw Error(A(290, u));
  }
  return u;
}
function ie(u, e) {
  throw (
    ((u = Object.prototype.toString.call(e)),
    Error(
      A(
        31,
        u === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : u
      )
    ))
  );
}
function ol(u) {
  var e = u._init;
  return e(u._payload);
}
function Aa(u) {
  function e(E, d) {
    if (u) {
      var h = E.deletions;
      h === null ? ((E.deletions = [d]), (E.flags |= 16)) : h.push(d);
    }
  }
  function t(E, d) {
    if (!u) return null;
    for (; d !== null; ) e(E, d), (d = d.sibling);
    return null;
  }
  function n(E, d) {
    for (E = new Map(); d !== null; )
      d.key !== null ? E.set(d.key, d) : E.set(d.index, d), (d = d.sibling);
    return E;
  }
  function r(E, d) {
    return (E = Ru(E, d)), (E.index = 0), (E.sibling = null), E;
  }
  function i(E, d, h) {
    return (
      (E.index = h),
      u
        ? ((h = E.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((E.flags |= 2), d) : h)
            : ((E.flags |= 2), d))
        : ((E.flags |= 1048576), d)
    );
  }
  function l(E) {
    return u && E.alternate === null && (E.flags |= 2), E;
  }
  function o(E, d, h, g) {
    return d === null || d.tag !== 6
      ? ((d = tn(h, E.mode, g)), (d.return = E), d)
      : ((d = r(d, h)), (d.return = E), d);
  }
  function s(E, d, h, g) {
    var y = h.type;
    return y === D0
      ? D(E, d, h.props.children, g, h.key)
      : d !== null &&
        (d.elementType === y ||
          (typeof y == "object" &&
            y !== null &&
            y.$$typeof === Fu &&
            ol(y) === d.type))
      ? ((g = r(d, h.props)), (g.ref = u3(E, d, h)), (g.return = E), g)
      : ((g = ye(h.type, h.key, h.props, null, E.mode, g)),
        (g.ref = u3(E, d, h)),
        (g.return = E),
        g);
  }
  function c(E, d, h, g) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = nn(h, E.mode, g)), (d.return = E), d)
      : ((d = r(d, h.children || [])), (d.return = E), d);
  }
  function D(E, d, h, g, y) {
    return d === null || d.tag !== 7
      ? ((d = Gu(h, E.mode, g, y)), (d.return = E), d)
      : ((d = r(d, h)), (d.return = E), d);
  }
  function f(E, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = tn("" + d, E.mode, h)), (d.return = E), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case K3:
          return (
            (h = ye(d.type, d.key, d.props, null, E.mode, h)),
            (h.ref = u3(E, null, d)),
            (h.return = E),
            h
          );
        case p0:
          return (d = nn(d, E.mode, h)), (d.return = E), d;
        case Fu:
          var g = d._init;
          return f(E, g(d._payload), h);
      }
      if (i3(d) || Y0(d))
        return (d = Gu(d, E.mode, h, null)), (d.return = E), d;
      ie(E, d);
    }
    return null;
  }
  function p(E, d, h, g) {
    var y = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return y !== null ? null : o(E, d, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case K3:
          return h.key === y ? s(E, d, h, g) : null;
        case p0:
          return h.key === y ? c(E, d, h, g) : null;
        case Fu:
          return (y = h._init), p(E, d, y(h._payload), g);
      }
      if (i3(h) || Y0(h)) return y !== null ? null : D(E, d, h, g, null);
      ie(E, h);
    }
    return null;
  }
  function v(E, d, h, g, y) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (E = E.get(h) || null), o(d, E, "" + g, y);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case K3:
          return (E = E.get(g.key === null ? h : g.key) || null), s(d, E, g, y);
        case p0:
          return (E = E.get(g.key === null ? h : g.key) || null), c(d, E, g, y);
        case Fu:
          var _ = g._init;
          return v(E, d, h, _(g._payload), y);
      }
      if (i3(g) || Y0(g)) return (E = E.get(h) || null), D(d, E, g, y, null);
      ie(d, g);
    }
    return null;
  }
  function B(E, d, h, g) {
    for (
      var y = null, _ = null, w = d, P = (d = 0), S = null;
      w !== null && P < h.length;
      P++
    ) {
      w.index > P ? ((S = w), (w = null)) : (S = w.sibling);
      var C = p(E, w, h[P], g);
      if (C === null) {
        w === null && (w = S);
        break;
      }
      u && w && C.alternate === null && e(E, w),
        (d = i(C, d, P)),
        _ === null ? (y = C) : (_.sibling = C),
        (_ = C),
        (w = S);
    }
    if (P === h.length) return t(E, w), Z && Vu(E, P), y;
    if (w === null) {
      for (; P < h.length; P++)
        (w = f(E, h[P], g)),
          w !== null &&
            ((d = i(w, d, P)), _ === null ? (y = w) : (_.sibling = w), (_ = w));
      return Z && Vu(E, P), y;
    }
    for (w = n(E, w); P < h.length; P++)
      (S = v(w, E, P, h[P], g)),
        S !== null &&
          (u && S.alternate !== null && w.delete(S.key === null ? P : S.key),
          (d = i(S, d, P)),
          _ === null ? (y = S) : (_.sibling = S),
          (_ = S));
    return (
      u &&
        w.forEach(function (T) {
          return e(E, T);
        }),
      Z && Vu(E, P),
      y
    );
  }
  function m(E, d, h, g) {
    var y = Y0(h);
    if (typeof y != "function") throw Error(A(150));
    if (((h = y.call(h)), h == null)) throw Error(A(151));
    for (
      var _ = (y = null), w = d, P = (d = 0), S = null, C = h.next();
      w !== null && !C.done;
      P++, C = h.next()
    ) {
      w.index > P ? ((S = w), (w = null)) : (S = w.sibling);
      var T = p(E, w, C.value, g);
      if (T === null) {
        w === null && (w = S);
        break;
      }
      u && w && T.alternate === null && e(E, w),
        (d = i(T, d, P)),
        _ === null ? (y = T) : (_.sibling = T),
        (_ = T),
        (w = S);
    }
    if (C.done) return t(E, w), Z && Vu(E, P), y;
    if (w === null) {
      for (; !C.done; P++, C = h.next())
        (C = f(E, C.value, g)),
          C !== null &&
            ((d = i(C, d, P)), _ === null ? (y = C) : (_.sibling = C), (_ = C));
      return Z && Vu(E, P), y;
    }
    for (w = n(E, w); !C.done; P++, C = h.next())
      (C = v(w, E, P, C.value, g)),
        C !== null &&
          (u && C.alternate !== null && w.delete(C.key === null ? P : C.key),
          (d = i(C, d, P)),
          _ === null ? (y = C) : (_.sibling = C),
          (_ = C));
    return (
      u &&
        w.forEach(function (L) {
          return e(E, L);
        }),
      Z && Vu(E, P),
      y
    );
  }
  function F(E, d, h, g) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === D0 &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case K3:
          u: {
            for (var y = h.key, _ = d; _ !== null; ) {
              if (_.key === y) {
                if (((y = h.type), y === D0)) {
                  if (_.tag === 7) {
                    t(E, _.sibling),
                      (d = r(_, h.props.children)),
                      (d.return = E),
                      (E = d);
                    break u;
                  }
                } else if (
                  _.elementType === y ||
                  (typeof y == "object" &&
                    y !== null &&
                    y.$$typeof === Fu &&
                    ol(y) === _.type)
                ) {
                  t(E, _.sibling),
                    (d = r(_, h.props)),
                    (d.ref = u3(E, _, h)),
                    (d.return = E),
                    (E = d);
                  break u;
                }
                t(E, _);
                break;
              } else e(E, _);
              _ = _.sibling;
            }
            h.type === D0
              ? ((d = Gu(h.props.children, E.mode, g, h.key)),
                (d.return = E),
                (E = d))
              : ((g = ye(h.type, h.key, h.props, null, E.mode, g)),
                (g.ref = u3(E, d, h)),
                (g.return = E),
                (E = g));
          }
          return l(E);
        case p0:
          u: {
            for (_ = h.key; d !== null; ) {
              if (d.key === _)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  t(E, d.sibling),
                    (d = r(d, h.children || [])),
                    (d.return = E),
                    (E = d);
                  break u;
                } else {
                  t(E, d);
                  break;
                }
              else e(E, d);
              d = d.sibling;
            }
            (d = nn(h, E.mode, g)), (d.return = E), (E = d);
          }
          return l(E);
        case Fu:
          return (_ = h._init), F(E, d, _(h._payload), g);
      }
      if (i3(h)) return B(E, d, h, g);
      if (Y0(h)) return m(E, d, h, g);
      ie(E, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (t(E, d.sibling), (d = r(d, h)), (d.return = E), (E = d))
          : (t(E, d), (d = tn(h, E.mode, g)), (d.return = E), (E = d)),
        l(E))
      : t(E, d);
  }
  return F;
}
var z0 = Aa(!0),
  Sa = Aa(!1),
  Me = Hu(null),
  je = null,
  C0 = null,
  Vr = null;
function Qr() {
  Vr = C0 = je = null;
}
function qr(u) {
  var e = Me.current;
  X(Me), (u._currentValue = e);
}
function Vn(u, e, t) {
  for (; u !== null; ) {
    var n = u.alternate;
    if (
      ((u.childLanes & e) !== e
        ? ((u.childLanes |= e), n !== null && (n.childLanes |= e))
        : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
      u === t)
    )
      break;
    u = u.return;
  }
}
function O0(u, e) {
  (je = u),
    (Vr = C0 = null),
    (u = u.dependencies),
    u !== null &&
      u.firstContext !== null &&
      ((u.lanes & e) !== 0 && (k4 = !0), (u.firstContext = null));
}
function V4(u) {
  var e = u._currentValue;
  if (Vr !== u)
    if (((u = { context: u, memoizedValue: e, next: null }), C0 === null)) {
      if (je === null) throw Error(A(308));
      (C0 = u), (je.dependencies = { lanes: 0, firstContext: u });
    } else C0 = C0.next = u;
  return e;
}
var Ku = null;
function Kr(u) {
  Ku === null ? (Ku = [u]) : Ku.push(u);
}
function wa(u, e, t, n) {
  var r = e.interleaved;
  return (
    r === null ? ((t.next = t), Kr(e)) : ((t.next = r.next), (r.next = t)),
    (e.interleaved = t),
    Du(u, n)
  );
}
function Du(u, e) {
  u.lanes |= e;
  var t = u.alternate;
  for (t !== null && (t.lanes |= e), t = u, u = u.return; u !== null; )
    (u.childLanes |= e),
      (t = u.alternate),
      t !== null && (t.childLanes |= e),
      (t = u),
      (u = u.return);
  return t.tag === 3 ? t.stateNode : null;
}
var yu = !1;
function Yr(u) {
  u.updateQueue = {
    baseState: u.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ka(u, e) {
  (u = u.updateQueue),
    e.updateQueue === u &&
      (e.updateQueue = {
        baseState: u.baseState,
        firstBaseUpdate: u.firstBaseUpdate,
        lastBaseUpdate: u.lastBaseUpdate,
        shared: u.shared,
        effects: u.effects,
      });
}
function fu(u, e) {
  return {
    eventTime: u,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bu(u, e, t) {
  var n = u.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), (U & 2) !== 0)) {
    var r = n.pending;
    return (
      r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (n.pending = e),
      Du(u, t)
    );
  }
  return (
    (r = n.interleaved),
    r === null ? ((e.next = e), Kr(n)) : ((e.next = r.next), (r.next = e)),
    (n.interleaved = e),
    Du(u, t)
  );
}
function he(u, e, t) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194240) !== 0))
  ) {
    var n = e.lanes;
    (n &= u.pendingLanes), (t |= n), (e.lanes = t), Tr(u, t);
  }
}
function al(u, e) {
  var t = u.updateQueue,
    n = u.alternate;
  if (n !== null && ((n = n.updateQueue), t === n)) {
    var r = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var l = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (r = i = l) : (i = i.next = l), (t = t.next);
      } while (t !== null);
      i === null ? (r = i = e) : (i = i.next = e);
    } else r = i = e;
    (t = {
      baseState: n.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (u.updateQueue = t);
    return;
  }
  (u = t.lastBaseUpdate),
    u === null ? (t.firstBaseUpdate = e) : (u.next = e),
    (t.lastBaseUpdate = e);
}
function $e(u, e, t, n) {
  var r = u.updateQueue;
  yu = !1;
  var i = r.firstBaseUpdate,
    l = r.lastBaseUpdate,
    o = r.shared.pending;
  if (o !== null) {
    r.shared.pending = null;
    var s = o,
      c = s.next;
    (s.next = null), l === null ? (i = c) : (l.next = c), (l = s);
    var D = u.alternate;
    D !== null &&
      ((D = D.updateQueue),
      (o = D.lastBaseUpdate),
      o !== l &&
        (o === null ? (D.firstBaseUpdate = c) : (o.next = c),
        (D.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var f = r.baseState;
    (l = 0), (D = c = s = null), (o = i);
    do {
      var p = o.lane,
        v = o.eventTime;
      if ((n & p) === p) {
        D !== null &&
          (D = D.next =
            {
              eventTime: v,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        u: {
          var B = u,
            m = o;
          switch (((p = e), (v = t), m.tag)) {
            case 1:
              if (((B = m.payload), typeof B == "function")) {
                f = B.call(v, f, p);
                break u;
              }
              f = B;
              break u;
            case 3:
              B.flags = (B.flags & -65537) | 128;
            case 0:
              if (
                ((B = m.payload),
                (p = typeof B == "function" ? B.call(v, f, p) : B),
                p == null)
              )
                break u;
              f = t4({}, f, p);
              break u;
            case 2:
              yu = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((u.flags |= 64),
          (p = r.effects),
          p === null ? (r.effects = [o]) : p.push(o));
      } else
        (v = {
          eventTime: v,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          D === null ? ((c = D = v), (s = f)) : (D = D.next = v),
          (l |= p);
      if (((o = o.next), o === null)) {
        if (((o = r.shared.pending), o === null)) break;
        (p = o),
          (o = p.next),
          (p.next = null),
          (r.lastBaseUpdate = p),
          (r.shared.pending = null);
      }
    } while (1);
    if (
      (D === null && (s = f),
      (r.baseState = s),
      (r.firstBaseUpdate = c),
      (r.lastBaseUpdate = D),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (l |= r.lane), (r = r.next);
      while (r !== e);
    } else i === null && (r.shared.lanes = 0);
    (e0 |= l), (u.lanes = l), (u.memoizedState = f);
  }
}
function sl(u, e, t) {
  if (((u = e.effects), (e.effects = null), u !== null))
    for (e = 0; e < u.length; e++) {
      var n = u[e],
        r = n.callback;
      if (r !== null) {
        if (((n.callback = null), (n = t), typeof r != "function"))
          throw Error(A(191, r));
        r.call(n);
      }
    }
}
var I3 = {},
  ru = Hu(I3),
  k3 = Hu(I3),
  x3 = Hu(I3);
function Yu(u) {
  if (u === I3) throw Error(A(174));
  return u;
}
function Xr(u, e) {
  switch ((q(x3, e), q(k3, u), q(ru, I3), (u = e.nodeType), u)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : An(null, "");
      break;
    default:
      (u = u === 8 ? e.parentNode : e),
        (e = u.namespaceURI || null),
        (u = u.tagName),
        (e = An(e, u));
  }
  X(ru), q(ru, e);
}
function M0() {
  X(ru), X(k3), X(x3);
}
function xa(u) {
  Yu(x3.current);
  var e = Yu(ru.current),
    t = An(e, u.type);
  e !== t && (q(k3, u), q(ru, t));
}
function Gr(u) {
  k3.current === u && (X(ru), X(k3));
}
var u4 = Hu(0);
function Ie(u) {
  for (var e = u; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if ((e.flags & 128) !== 0) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === u) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === u) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Xt = [];
function Zr() {
  for (var u = 0; u < Xt.length; u++)
    Xt[u]._workInProgressVersionPrimary = null;
  Xt.length = 0;
}
var ve = vu.ReactCurrentDispatcher,
  Gt = vu.ReactCurrentBatchConfig,
  u0 = 0,
  e4 = null,
  s4 = null,
  d4 = null,
  He = !1,
  E3 = !1,
  O3 = 0,
  nf = 0;
function h4() {
  throw Error(A(321));
}
function Jr(u, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < u.length; t++)
    if (!J4(u[t], e[t])) return !1;
  return !0;
}
function ui(u, e, t, n, r, i) {
  if (
    ((u0 = i),
    (e4 = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (ve.current = u === null || u.memoizedState === null ? af : sf),
    (u = t(n, r)),
    E3)
  ) {
    i = 0;
    do {
      if (((E3 = !1), (O3 = 0), 25 <= i)) throw Error(A(301));
      (i += 1),
        (d4 = s4 = null),
        (e.updateQueue = null),
        (ve.current = cf),
        (u = t(n, r));
    } while (E3);
  }
  if (
    ((ve.current = We),
    (e = s4 !== null && s4.next !== null),
    (u0 = 0),
    (d4 = s4 = e4 = null),
    (He = !1),
    e)
  )
    throw Error(A(300));
  return u;
}
function ei() {
  var u = O3 !== 0;
  return (O3 = 0), u;
}
function eu() {
  var u = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return d4 === null ? (e4.memoizedState = d4 = u) : (d4 = d4.next = u), d4;
}
function Q4() {
  if (s4 === null) {
    var u = e4.alternate;
    u = u !== null ? u.memoizedState : null;
  } else u = s4.next;
  var e = d4 === null ? e4.memoizedState : d4.next;
  if (e !== null) (d4 = e), (s4 = u);
  else {
    if (u === null) throw Error(A(310));
    (s4 = u),
      (u = {
        memoizedState: s4.memoizedState,
        baseState: s4.baseState,
        baseQueue: s4.baseQueue,
        queue: s4.queue,
        next: null,
      }),
      d4 === null ? (e4.memoizedState = d4 = u) : (d4 = d4.next = u);
  }
  return d4;
}
function P3(u, e) {
  return typeof e == "function" ? e(u) : e;
}
function Zt(u) {
  var e = Q4(),
    t = e.queue;
  if (t === null) throw Error(A(311));
  t.lastRenderedReducer = u;
  var n = s4,
    r = n.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (r !== null) {
      var l = r.next;
      (r.next = i.next), (i.next = l);
    }
    (n.baseQueue = r = i), (t.pending = null);
  }
  if (r !== null) {
    (i = r.next), (n = n.baseState);
    var o = (l = null),
      s = null,
      c = i;
    do {
      var D = c.lane;
      if ((u0 & D) === D)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (n = c.hasEagerState ? c.eagerState : u(n, c.action));
      else {
        var f = {
          lane: D,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((o = s = f), (l = n)) : (s = s.next = f),
          (e4.lanes |= D),
          (e0 |= D);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (l = n) : (s.next = o),
      J4(n, e.memoizedState) || (k4 = !0),
      (e.memoizedState = n),
      (e.baseState = l),
      (e.baseQueue = s),
      (t.lastRenderedState = n);
  }
  if (((u = t.interleaved), u !== null)) {
    r = u;
    do (i = r.lane), (e4.lanes |= i), (e0 |= i), (r = r.next);
    while (r !== u);
  } else r === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function Jt(u) {
  var e = Q4(),
    t = e.queue;
  if (t === null) throw Error(A(311));
  t.lastRenderedReducer = u;
  var n = t.dispatch,
    r = t.pending,
    i = e.memoizedState;
  if (r !== null) {
    t.pending = null;
    var l = (r = r.next);
    do (i = u(i, l.action)), (l = l.next);
    while (l !== r);
    J4(i, e.memoizedState) || (k4 = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, n];
}
function Oa() {}
function Pa(u, e) {
  var t = e4,
    n = Q4(),
    r = e(),
    i = !J4(n.memoizedState, r);
  if (
    (i && ((n.memoizedState = r), (k4 = !0)),
    (n = n.queue),
    ti(Ta.bind(null, t, n, u), [u]),
    n.getSnapshot !== e || i || (d4 !== null && d4.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      N3(9, ba.bind(null, t, n, r, e), void 0, null),
      f4 === null)
    )
      throw Error(A(349));
    (u0 & 30) !== 0 || Na(t, e, r);
  }
  return r;
}
function Na(u, e, t) {
  (u.flags |= 16384),
    (u = { getSnapshot: e, value: t }),
    (e = e4.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (e4.updateQueue = e),
        (e.stores = [u]))
      : ((t = e.stores), t === null ? (e.stores = [u]) : t.push(u));
}
function ba(u, e, t, n) {
  (e.value = t), (e.getSnapshot = n), La(e) && Ra(u);
}
function Ta(u, e, t) {
  return t(function () {
    La(e) && Ra(u);
  });
}
function La(u) {
  var e = u.getSnapshot;
  u = u.value;
  try {
    var t = e();
    return !J4(u, t);
  } catch {
    return !0;
  }
}
function Ra(u) {
  var e = Du(u, 1);
  e !== null && Z4(e, u, 1, -1);
}
function cl(u) {
  var e = eu();
  return (
    typeof u == "function" && (u = u()),
    (e.memoizedState = e.baseState = u),
    (u = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: P3,
      lastRenderedState: u,
    }),
    (e.queue = u),
    (u = u.dispatch = of.bind(null, e4, u)),
    [e.memoizedState, u]
  );
}
function N3(u, e, t, n) {
  return (
    (u = { tag: u, create: e, destroy: t, deps: n, next: null }),
    (e = e4.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (e4.updateQueue = e),
        (e.lastEffect = u.next = u))
      : ((t = e.lastEffect),
        t === null
          ? (e.lastEffect = u.next = u)
          : ((n = t.next), (t.next = u), (u.next = n), (e.lastEffect = u))),
    u
  );
}
function za() {
  return Q4().memoizedState;
}
function Be(u, e, t, n) {
  var r = eu();
  (e4.flags |= u),
    (r.memoizedState = N3(1 | e, t, void 0, n === void 0 ? null : n));
}
function Dt(u, e, t, n) {
  var r = Q4();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (s4 !== null) {
    var l = s4.memoizedState;
    if (((i = l.destroy), n !== null && Jr(n, l.deps))) {
      r.memoizedState = N3(e, t, i, n);
      return;
    }
  }
  (e4.flags |= u), (r.memoizedState = N3(1 | e, t, i, n));
}
function dl(u, e) {
  return Be(8390656, 8, u, e);
}
function ti(u, e) {
  return Dt(2048, 8, u, e);
}
function Ma(u, e) {
  return Dt(4, 2, u, e);
}
function ja(u, e) {
  return Dt(4, 4, u, e);
}
function $a(u, e) {
  if (typeof e == "function")
    return (
      (u = u()),
      e(u),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (u = u()),
      (e.current = u),
      function () {
        e.current = null;
      }
    );
}
function Ia(u, e, t) {
  return (
    (t = t != null ? t.concat([u]) : null), Dt(4, 4, $a.bind(null, e, u), t)
  );
}
function ni() {}
function Ha(u, e) {
  var t = Q4();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && Jr(e, n[1])
    ? n[0]
    : ((t.memoizedState = [u, e]), u);
}
function Wa(u, e) {
  var t = Q4();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && Jr(e, n[1])
    ? n[0]
    : ((u = u()), (t.memoizedState = [u, e]), u);
}
function Ua(u, e, t) {
  return (u0 & 21) === 0
    ? (u.baseState && ((u.baseState = !1), (k4 = !0)), (u.memoizedState = t))
    : (J4(t, e) || ((t = Yo()), (e4.lanes |= t), (e0 |= t), (u.baseState = !0)),
      e);
}
function rf(u, e) {
  var t = V;
  (V = t !== 0 && 4 > t ? t : 4), u(!0);
  var n = Gt.transition;
  Gt.transition = {};
  try {
    u(!1), e();
  } finally {
    (V = t), (Gt.transition = n);
  }
}
function Va() {
  return Q4().memoizedState;
}
function lf(u, e, t) {
  var n = Lu(u);
  if (
    ((t = {
      lane: n,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qa(u))
  )
    qa(e, t);
  else if (((t = wa(u, e, t, n)), t !== null)) {
    var r = C4();
    Z4(t, u, n, r), Ka(t, e, n);
  }
}
function of(u, e, t) {
  var n = Lu(u),
    r = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Qa(u)) qa(e, r);
  else {
    var i = u.alternate;
    if (
      u.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var l = e.lastRenderedState,
          o = i(l, t);
        if (((r.hasEagerState = !0), (r.eagerState = o), J4(o, l))) {
          var s = e.interleaved;
          s === null
            ? ((r.next = r), Kr(e))
            : ((r.next = s.next), (s.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (t = wa(u, e, r, n)),
      t !== null && ((r = C4()), Z4(t, u, n, r), Ka(t, e, n));
  }
}
function Qa(u) {
  var e = u.alternate;
  return u === e4 || (e !== null && e === e4);
}
function qa(u, e) {
  E3 = He = !0;
  var t = u.pending;
  t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)),
    (u.pending = e);
}
function Ka(u, e, t) {
  if ((t & 4194240) !== 0) {
    var n = e.lanes;
    (n &= u.pendingLanes), (t |= n), (e.lanes = t), Tr(u, t);
  }
}
var We = {
    readContext: V4,
    useCallback: h4,
    useContext: h4,
    useEffect: h4,
    useImperativeHandle: h4,
    useInsertionEffect: h4,
    useLayoutEffect: h4,
    useMemo: h4,
    useReducer: h4,
    useRef: h4,
    useState: h4,
    useDebugValue: h4,
    useDeferredValue: h4,
    useTransition: h4,
    useMutableSource: h4,
    useSyncExternalStore: h4,
    useId: h4,
    unstable_isNewReconciler: !1,
  },
  af = {
    readContext: V4,
    useCallback: function (u, e) {
      return (eu().memoizedState = [u, e === void 0 ? null : e]), u;
    },
    useContext: V4,
    useEffect: dl,
    useImperativeHandle: function (u, e, t) {
      return (
        (t = t != null ? t.concat([u]) : null),
        Be(4194308, 4, $a.bind(null, e, u), t)
      );
    },
    useLayoutEffect: function (u, e) {
      return Be(4194308, 4, u, e);
    },
    useInsertionEffect: function (u, e) {
      return Be(4, 2, u, e);
    },
    useMemo: function (u, e) {
      var t = eu();
      return (
        (e = e === void 0 ? null : e), (u = u()), (t.memoizedState = [u, e]), u
      );
    },
    useReducer: function (u, e, t) {
      var n = eu();
      return (
        (e = t !== void 0 ? t(e) : e),
        (n.memoizedState = n.baseState = e),
        (u = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: u,
          lastRenderedState: e,
        }),
        (n.queue = u),
        (u = u.dispatch = lf.bind(null, e4, u)),
        [n.memoizedState, u]
      );
    },
    useRef: function (u) {
      var e = eu();
      return (u = { current: u }), (e.memoizedState = u);
    },
    useState: cl,
    useDebugValue: ni,
    useDeferredValue: function (u) {
      return (eu().memoizedState = u);
    },
    useTransition: function () {
      var u = cl(!1),
        e = u[0];
      return (u = rf.bind(null, u[1])), (eu().memoizedState = u), [e, u];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (u, e, t) {
      var n = e4,
        r = eu();
      if (Z) {
        if (t === void 0) throw Error(A(407));
        t = t();
      } else {
        if (((t = e()), f4 === null)) throw Error(A(349));
        (u0 & 30) !== 0 || Na(n, e, t);
      }
      r.memoizedState = t;
      var i = { value: t, getSnapshot: e };
      return (
        (r.queue = i),
        dl(Ta.bind(null, n, i, u), [u]),
        (n.flags |= 2048),
        N3(9, ba.bind(null, n, i, t, e), void 0, null),
        t
      );
    },
    useId: function () {
      var u = eu(),
        e = f4.identifierPrefix;
      if (Z) {
        var t = du,
          n = cu;
        (t = (n & ~(1 << (32 - G4(n) - 1))).toString(32) + t),
          (e = ":" + e + "R" + t),
          (t = O3++),
          0 < t && (e += "H" + t.toString(32)),
          (e += ":");
      } else (t = nf++), (e = ":" + e + "r" + t.toString(32) + ":");
      return (u.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  sf = {
    readContext: V4,
    useCallback: Ha,
    useContext: V4,
    useEffect: ti,
    useImperativeHandle: Ia,
    useInsertionEffect: Ma,
    useLayoutEffect: ja,
    useMemo: Wa,
    useReducer: Zt,
    useRef: za,
    useState: function () {
      return Zt(P3);
    },
    useDebugValue: ni,
    useDeferredValue: function (u) {
      var e = Q4();
      return Ua(e, s4.memoizedState, u);
    },
    useTransition: function () {
      var u = Zt(P3)[0],
        e = Q4().memoizedState;
      return [u, e];
    },
    useMutableSource: Oa,
    useSyncExternalStore: Pa,
    useId: Va,
    unstable_isNewReconciler: !1,
  },
  cf = {
    readContext: V4,
    useCallback: Ha,
    useContext: V4,
    useEffect: ti,
    useImperativeHandle: Ia,
    useInsertionEffect: Ma,
    useLayoutEffect: ja,
    useMemo: Wa,
    useReducer: Jt,
    useRef: za,
    useState: function () {
      return Jt(P3);
    },
    useDebugValue: ni,
    useDeferredValue: function (u) {
      var e = Q4();
      return s4 === null ? (e.memoizedState = u) : Ua(e, s4.memoizedState, u);
    },
    useTransition: function () {
      var u = Jt(P3)[0],
        e = Q4().memoizedState;
      return [u, e];
    },
    useMutableSource: Oa,
    useSyncExternalStore: Pa,
    useId: Va,
    unstable_isNewReconciler: !1,
  };
function K4(u, e) {
  if (u && u.defaultProps) {
    (e = t4({}, e)), (u = u.defaultProps);
    for (var t in u) e[t] === void 0 && (e[t] = u[t]);
    return e;
  }
  return e;
}
function Qn(u, e, t, n) {
  (e = u.memoizedState),
    (t = t(n, e)),
    (t = t == null ? e : t4({}, e, t)),
    (u.memoizedState = t),
    u.lanes === 0 && (u.updateQueue.baseState = t);
}
var ht = {
  isMounted: function (u) {
    return (u = u._reactInternals) ? i0(u) === u : !1;
  },
  enqueueSetState: function (u, e, t) {
    u = u._reactInternals;
    var n = C4(),
      r = Lu(u),
      i = fu(n, r);
    (i.payload = e),
      t != null && (i.callback = t),
      (e = bu(u, i, r)),
      e !== null && (Z4(e, u, r, n), he(e, u, r));
  },
  enqueueReplaceState: function (u, e, t) {
    u = u._reactInternals;
    var n = C4(),
      r = Lu(u),
      i = fu(n, r);
    (i.tag = 1),
      (i.payload = e),
      t != null && (i.callback = t),
      (e = bu(u, i, r)),
      e !== null && (Z4(e, u, r, n), he(e, u, r));
  },
  enqueueForceUpdate: function (u, e) {
    u = u._reactInternals;
    var t = C4(),
      n = Lu(u),
      r = fu(t, n);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = bu(u, r, n)),
      e !== null && (Z4(e, u, n, t), he(e, u, n));
  },
};
function fl(u, e, t, n, r, i, l) {
  return (
    (u = u.stateNode),
    typeof u.shouldComponentUpdate == "function"
      ? u.shouldComponentUpdate(n, i, l)
      : e.prototype && e.prototype.isPureReactComponent
      ? !_3(t, n) || !_3(r, i)
      : !0
  );
}
function Ya(u, e, t) {
  var n = !1,
    r = ju,
    i = e.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = V4(i))
      : ((r = O4(e) ? Zu : m4.current),
        (n = e.contextTypes),
        (i = (n = n != null) ? L0(u, r) : ju)),
    (e = new e(t, i)),
    (u.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ht),
    (u.stateNode = e),
    (e._reactInternals = u),
    n &&
      ((u = u.stateNode),
      (u.__reactInternalMemoizedUnmaskedChildContext = r),
      (u.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function El(u, e, t, n) {
  (u = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(t, n),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(t, n),
    e.state !== u && ht.enqueueReplaceState(e, e.state, null);
}
function qn(u, e, t, n) {
  var r = u.stateNode;
  (r.props = t), (r.state = u.memoizedState), (r.refs = {}), Yr(u);
  var i = e.contextType;
  typeof i == "object" && i !== null
    ? (r.context = V4(i))
    : ((i = O4(e) ? Zu : m4.current), (r.context = L0(u, i))),
    (r.state = u.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == "function" && (Qn(u, e, i, t), (r.state = u.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      e !== r.state && ht.enqueueReplaceState(r, r.state, null),
      $e(u, t, r, n),
      (r.state = u.memoizedState)),
    typeof r.componentDidMount == "function" && (u.flags |= 4194308);
}
function j0(u, e) {
  try {
    var t = "",
      n = e;
    do (t += zc(n)), (n = n.return);
    while (n);
    var r = t;
  } catch (i) {
    r =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: u, source: e, stack: r, digest: null };
}
function un(u, e, t) {
  return {
    value: u,
    source: null,
    stack: t != null ? t : null,
    digest: e != null ? e : null,
  };
}
function Kn(u, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var df = typeof WeakMap == "function" ? WeakMap : Map;
function Xa(u, e, t) {
  (t = fu(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var n = e.value;
  return (
    (t.callback = function () {
      Ve || ((Ve = !0), (rr = n)), Kn(u, e);
    }),
    t
  );
}
function Ga(u, e, t) {
  (t = fu(-1, t)), (t.tag = 3);
  var n = u.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var r = e.value;
    (t.payload = function () {
      return n(r);
    }),
      (t.callback = function () {
        Kn(u, e);
      });
  }
  var i = u.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Kn(u, e),
          typeof n != "function" &&
            (Tu === null ? (Tu = new Set([this])) : Tu.add(this));
        var l = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    t
  );
}
function pl(u, e, t) {
  var n = u.pingCache;
  if (n === null) {
    n = u.pingCache = new df();
    var r = new Set();
    n.set(e, r);
  } else (r = n.get(e)), r === void 0 && ((r = new Set()), n.set(e, r));
  r.has(t) || (r.add(t), (u = Af.bind(null, u, e, t)), e.then(u, u));
}
function Dl(u) {
  do {
    var e;
    if (
      ((e = u.tag === 13) &&
        ((e = u.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return u;
    u = u.return;
  } while (u !== null);
  return null;
}
function hl(u, e, t, n, r) {
  return (u.mode & 1) === 0
    ? (u === e
        ? (u.flags |= 65536)
        : ((u.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((e = fu(-1, 1)), (e.tag = 2), bu(t, e, 1))),
          (t.lanes |= 1)),
      u)
    : ((u.flags |= 65536), (u.lanes = r), u);
}
var ff = vu.ReactCurrentOwner,
  k4 = !1;
function y4(u, e, t, n) {
  e.child = u === null ? Sa(e, null, t, n) : z0(e, u.child, t, n);
}
function vl(u, e, t, n, r) {
  t = t.render;
  var i = e.ref;
  return (
    O0(e, r),
    (n = ui(u, e, t, n, i, r)),
    (t = ei()),
    u !== null && !k4
      ? ((e.updateQueue = u.updateQueue),
        (e.flags &= -2053),
        (u.lanes &= ~r),
        hu(u, e, r))
      : (Z && t && Hr(e), (e.flags |= 1), y4(u, e, n, r), e.child)
  );
}
function Bl(u, e, t, n, r) {
  if (u === null) {
    var i = t.type;
    return typeof i == "function" &&
      !di(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), Za(u, e, i, n, r))
      : ((u = ye(t.type, null, n, e, e.mode, r)),
        (u.ref = e.ref),
        (u.return = e),
        (e.child = u));
  }
  if (((i = u.child), (u.lanes & r) === 0)) {
    var l = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : _3), t(l, n) && u.ref === e.ref)
    )
      return hu(u, e, r);
  }
  return (
    (e.flags |= 1),
    (u = Ru(i, n)),
    (u.ref = e.ref),
    (u.return = e),
    (e.child = u)
  );
}
function Za(u, e, t, n, r) {
  if (u !== null) {
    var i = u.memoizedProps;
    if (_3(i, n) && u.ref === e.ref)
      if (((k4 = !1), (e.pendingProps = n = i), (u.lanes & r) !== 0))
        (u.flags & 131072) !== 0 && (k4 = !0);
      else return (e.lanes = u.lanes), hu(u, e, r);
  }
  return Yn(u, e, t, n, r);
}
function Ja(u, e, t) {
  var n = e.pendingProps,
    r = n.children,
    i = u !== null ? u.memoizedState : null;
  if (n.mode === "hidden")
    if ((e.mode & 1) === 0)
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(A0, b4),
        (b4 |= t);
    else {
      if ((t & 1073741824) === 0)
        return (
          (u = i !== null ? i.baseLanes | t : t),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: u,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          q(A0, b4),
          (b4 |= u),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : t),
        q(A0, b4),
        (b4 |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | t), (e.memoizedState = null)) : (n = t),
      q(A0, b4),
      (b4 |= n);
  return y4(u, e, r, t), e.child;
}
function us(u, e) {
  var t = e.ref;
  ((u === null && t !== null) || (u !== null && u.ref !== t)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Yn(u, e, t, n, r) {
  var i = O4(t) ? Zu : m4.current;
  return (
    (i = L0(e, i)),
    O0(e, r),
    (t = ui(u, e, t, n, i, r)),
    (n = ei()),
    u !== null && !k4
      ? ((e.updateQueue = u.updateQueue),
        (e.flags &= -2053),
        (u.lanes &= ~r),
        hu(u, e, r))
      : (Z && n && Hr(e), (e.flags |= 1), y4(u, e, t, r), e.child)
  );
}
function ml(u, e, t, n, r) {
  if (O4(t)) {
    var i = !0;
    Le(e);
  } else i = !1;
  if ((O0(e, r), e.stateNode === null))
    me(u, e), Ya(e, t, n), qn(e, t, n, r), (n = !0);
  else if (u === null) {
    var l = e.stateNode,
      o = e.memoizedProps;
    l.props = o;
    var s = l.context,
      c = t.contextType;
    typeof c == "object" && c !== null
      ? (c = V4(c))
      : ((c = O4(t) ? Zu : m4.current), (c = L0(e, c)));
    var D = t.getDerivedStateFromProps,
      f =
        typeof D == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== n || s !== c) && El(e, l, n, c)),
      (yu = !1);
    var p = e.memoizedState;
    (l.state = p),
      $e(e, n, l, r),
      (s = e.memoizedState),
      o !== n || p !== s || x4.current || yu
        ? (typeof D == "function" && (Qn(e, t, D, n), (s = e.memoizedState)),
          (o = yu || fl(e, t, o, n, p, s, c))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = n),
              (e.memoizedState = s)),
          (l.props = n),
          (l.state = s),
          (l.context = c),
          (n = o))
        : (typeof l.componentDidMount == "function" && (e.flags |= 4194308),
          (n = !1));
  } else {
    (l = e.stateNode),
      ka(u, e),
      (o = e.memoizedProps),
      (c = e.type === e.elementType ? o : K4(e.type, o)),
      (l.props = c),
      (f = e.pendingProps),
      (p = l.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = V4(s))
        : ((s = O4(t) ? Zu : m4.current), (s = L0(e, s)));
    var v = t.getDerivedStateFromProps;
    (D =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== f || p !== s) && El(e, l, n, s)),
      (yu = !1),
      (p = e.memoizedState),
      (l.state = p),
      $e(e, n, l, r);
    var B = e.memoizedState;
    o !== f || p !== B || x4.current || yu
      ? (typeof v == "function" && (Qn(e, t, v, n), (B = e.memoizedState)),
        (c = yu || fl(e, t, c, n, p, B, s) || !1)
          ? (D ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(n, B, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(n, B, s)),
            typeof l.componentDidUpdate == "function" && (e.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (o === u.memoizedProps && p === u.memoizedState) ||
              (e.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (o === u.memoizedProps && p === u.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = n),
            (e.memoizedState = B)),
        (l.props = n),
        (l.state = B),
        (l.context = s),
        (n = c))
      : (typeof l.componentDidUpdate != "function" ||
          (o === u.memoizedProps && p === u.memoizedState) ||
          (e.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (o === u.memoizedProps && p === u.memoizedState) ||
          (e.flags |= 1024),
        (n = !1));
  }
  return Xn(u, e, t, n, i, r);
}
function Xn(u, e, t, n, r, i) {
  us(u, e);
  var l = (e.flags & 128) !== 0;
  if (!n && !l) return r && rl(e, t, !1), hu(u, e, i);
  (n = e.stateNode), (ff.current = e);
  var o =
    l && typeof t.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (e.flags |= 1),
    u !== null && l
      ? ((e.child = z0(e, u.child, null, i)), (e.child = z0(e, null, o, i)))
      : y4(u, e, o, i),
    (e.memoizedState = n.state),
    r && rl(e, t, !0),
    e.child
  );
}
function es(u) {
  var e = u.stateNode;
  e.pendingContext
    ? nl(u, e.pendingContext, e.pendingContext !== e.context)
    : e.context && nl(u, e.context, !1),
    Xr(u, e.containerInfo);
}
function gl(u, e, t, n, r) {
  return R0(), Ur(r), (e.flags |= 256), y4(u, e, t, n), e.child;
}
var Gn = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zn(u) {
  return { baseLanes: u, cachePool: null, transitions: null };
}
function ts(u, e, t) {
  var n = e.pendingProps,
    r = u4.current,
    i = !1,
    l = (e.flags & 128) !== 0,
    o;
  if (
    ((o = l) ||
      (o = u !== null && u.memoizedState === null ? !1 : (r & 2) !== 0),
    o
      ? ((i = !0), (e.flags &= -129))
      : (u === null || u.memoizedState !== null) && (r |= 1),
    q(u4, r & 1),
    u === null)
  )
    return (
      Un(e),
      (u = e.memoizedState),
      u !== null && ((u = u.dehydrated), u !== null)
        ? ((e.mode & 1) === 0
            ? (e.lanes = 1)
            : u.data === "$!"
            ? (e.lanes = 8)
            : (e.lanes = 1073741824),
          null)
        : ((l = n.children),
          (u = n.fallback),
          i
            ? ((n = e.mode),
              (i = e.child),
              (l = { mode: "hidden", children: l }),
              (n & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = mt(l, n, 0, null)),
              (u = Gu(u, n, t, null)),
              (i.return = e),
              (u.return = e),
              (i.sibling = u),
              (e.child = i),
              (e.child.memoizedState = Zn(t)),
              (e.memoizedState = Gn),
              u)
            : ri(e, l))
    );
  if (((r = u.memoizedState), r !== null && ((o = r.dehydrated), o !== null)))
    return Ef(u, e, l, n, o, r, t);
  if (i) {
    (i = n.fallback), (l = e.mode), (r = u.child), (o = r.sibling);
    var s = { mode: "hidden", children: n.children };
    return (
      (l & 1) === 0 && e.child !== r
        ? ((n = e.child),
          (n.childLanes = 0),
          (n.pendingProps = s),
          (e.deletions = null))
        : ((n = Ru(r, s)), (n.subtreeFlags = r.subtreeFlags & 14680064)),
      o !== null ? (i = Ru(o, i)) : ((i = Gu(i, l, t, null)), (i.flags |= 2)),
      (i.return = e),
      (n.return = e),
      (n.sibling = i),
      (e.child = n),
      (n = i),
      (i = e.child),
      (l = u.child.memoizedState),
      (l =
        l === null
          ? Zn(t)
          : {
              baseLanes: l.baseLanes | t,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = u.childLanes & ~t),
      (e.memoizedState = Gn),
      n
    );
  }
  return (
    (i = u.child),
    (u = i.sibling),
    (n = Ru(i, { mode: "visible", children: n.children })),
    (e.mode & 1) === 0 && (n.lanes = t),
    (n.return = e),
    (n.sibling = null),
    u !== null &&
      ((t = e.deletions),
      t === null ? ((e.deletions = [u]), (e.flags |= 16)) : t.push(u)),
    (e.child = n),
    (e.memoizedState = null),
    n
  );
}
function ri(u, e) {
  return (
    (e = mt({ mode: "visible", children: e }, u.mode, 0, null)),
    (e.return = u),
    (u.child = e)
  );
}
function le(u, e, t, n) {
  return (
    n !== null && Ur(n),
    z0(e, u.child, null, t),
    (u = ri(e, e.pendingProps.children)),
    (u.flags |= 2),
    (e.memoizedState = null),
    u
  );
}
function Ef(u, e, t, n, r, i, l) {
  if (t)
    return e.flags & 256
      ? ((e.flags &= -257), (n = un(Error(A(422)))), le(u, e, l, n))
      : e.memoizedState !== null
      ? ((e.child = u.child), (e.flags |= 128), null)
      : ((i = n.fallback),
        (r = e.mode),
        (n = mt({ mode: "visible", children: n.children }, r, 0, null)),
        (i = Gu(i, r, l, null)),
        (i.flags |= 2),
        (n.return = e),
        (i.return = e),
        (n.sibling = i),
        (e.child = n),
        (e.mode & 1) !== 0 && z0(e, u.child, null, l),
        (e.child.memoizedState = Zn(l)),
        (e.memoizedState = Gn),
        i);
  if ((e.mode & 1) === 0) return le(u, e, l, null);
  if (r.data === "$!") {
    if (((n = r.nextSibling && r.nextSibling.dataset), n)) var o = n.dgst;
    return (n = o), (i = Error(A(419))), (n = un(i, n, void 0)), le(u, e, l, n);
  }
  if (((o = (l & u.childLanes) !== 0), k4 || o)) {
    if (((n = f4), n !== null)) {
      switch (l & -l) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
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
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = (r & (n.suspendedLanes | l)) !== 0 ? 0 : r),
        r !== 0 &&
          r !== i.retryLane &&
          ((i.retryLane = r), Du(u, r), Z4(n, u, r, -1));
    }
    return ci(), (n = un(Error(A(421)))), le(u, e, l, n);
  }
  return r.data === "$?"
    ? ((e.flags |= 128),
      (e.child = u.child),
      (e = Sf.bind(null, u)),
      (r._reactRetry = e),
      null)
    : ((u = i.treeContext),
      (T4 = Nu(r.nextSibling)),
      (L4 = e),
      (Z = !0),
      (X4 = null),
      u !== null &&
        ((I4[H4++] = cu),
        (I4[H4++] = du),
        (I4[H4++] = Ju),
        (cu = u.id),
        (du = u.overflow),
        (Ju = e)),
      (e = ri(e, n.children)),
      (e.flags |= 4096),
      e);
}
function Fl(u, e, t) {
  u.lanes |= e;
  var n = u.alternate;
  n !== null && (n.lanes |= e), Vn(u.return, e, t);
}
function en(u, e, t, n, r) {
  var i = u.memoizedState;
  i === null
    ? (u.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: t,
        tailMode: r,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = t),
      (i.tailMode = r));
}
function ns(u, e, t) {
  var n = e.pendingProps,
    r = n.revealOrder,
    i = n.tail;
  if ((y4(u, e, n.children, t), (n = u4.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (e.flags |= 128);
  else {
    if (u !== null && (u.flags & 128) !== 0)
      u: for (u = e.child; u !== null; ) {
        if (u.tag === 13) u.memoizedState !== null && Fl(u, t, e);
        else if (u.tag === 19) Fl(u, t, e);
        else if (u.child !== null) {
          (u.child.return = u), (u = u.child);
          continue;
        }
        if (u === e) break u;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === e) break u;
          u = u.return;
        }
        (u.sibling.return = u.return), (u = u.sibling);
      }
    n &= 1;
  }
  if ((q(u4, n), (e.mode & 1) === 0)) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (t = e.child, r = null; t !== null; )
          (u = t.alternate),
            u !== null && Ie(u) === null && (r = t),
            (t = t.sibling);
        (t = r),
          t === null
            ? ((r = e.child), (e.child = null))
            : ((r = t.sibling), (t.sibling = null)),
          en(e, !1, r, t, i);
        break;
      case "backwards":
        for (t = null, r = e.child, e.child = null; r !== null; ) {
          if (((u = r.alternate), u !== null && Ie(u) === null)) {
            e.child = r;
            break;
          }
          (u = r.sibling), (r.sibling = t), (t = r), (r = u);
        }
        en(e, !0, t, null, i);
        break;
      case "together":
        en(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function me(u, e) {
  (e.mode & 1) === 0 &&
    u !== null &&
    ((u.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function hu(u, e, t) {
  if (
    (u !== null && (e.dependencies = u.dependencies),
    (e0 |= e.lanes),
    (t & e.childLanes) === 0)
  )
    return null;
  if (u !== null && e.child !== u.child) throw Error(A(153));
  if (e.child !== null) {
    for (
      u = e.child, t = Ru(u, u.pendingProps), e.child = t, t.return = e;
      u.sibling !== null;

    )
      (u = u.sibling), (t = t.sibling = Ru(u, u.pendingProps)), (t.return = e);
    t.sibling = null;
  }
  return e.child;
}
function pf(u, e, t) {
  switch (e.tag) {
    case 3:
      es(e), R0();
      break;
    case 5:
      xa(e);
      break;
    case 1:
      O4(e.type) && Le(e);
      break;
    case 4:
      Xr(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context,
        r = e.memoizedProps.value;
      q(Me, n._currentValue), (n._currentValue = r);
      break;
    case 13:
      if (((n = e.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (q(u4, u4.current & 1), (e.flags |= 128), null)
          : (t & e.child.childLanes) !== 0
          ? ts(u, e, t)
          : (q(u4, u4.current & 1),
            (u = hu(u, e, t)),
            u !== null ? u.sibling : null);
      q(u4, u4.current & 1);
      break;
    case 19:
      if (((n = (t & e.childLanes) !== 0), (u.flags & 128) !== 0)) {
        if (n) return ns(u, e, t);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        q(u4, u4.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Ja(u, e, t);
  }
  return hu(u, e, t);
}
var rs, Jn, is, ls;
rs = function (u, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) u.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Jn = function () {};
is = function (u, e, t, n) {
  var r = u.memoizedProps;
  if (r !== n) {
    (u = e.stateNode), Yu(ru.current);
    var i = null;
    switch (t) {
      case "input":
        (r = Fn(u, r)), (n = Fn(u, n)), (i = []);
        break;
      case "select":
        (r = t4({}, r, { value: void 0 })),
          (n = t4({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (r = _n(u, r)), (n = _n(u, n)), (i = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof n.onClick == "function" &&
          (u.onclick = be);
    }
    Sn(t, n);
    var l;
    t = null;
    for (c in r)
      if (!n.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
        if (c === "style") {
          var o = r[c];
          for (l in o) o.hasOwnProperty(l) && (t || (t = {}), (t[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (v3.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in n) {
      var s = n[c];
      if (
        ((o = r != null ? r[c] : void 0),
        n.hasOwnProperty(c) && s !== o && (s != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (t || (t = {}), (t[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                o[l] !== s[l] &&
                (t || (t = {}), (t[l] = s[l]));
          } else t || (i || (i = []), i.push(c, t)), (t = s);
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
              (v3.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && K("scroll", u),
                  i || o === s || (i = []))
                : (i = i || []).push(c, s));
    }
    t && (i = i || []).push("style", t);
    var c = i;
    (e.updateQueue = c) && (e.flags |= 4);
  }
};
ls = function (u, e, t, n) {
  t !== n && (e.flags |= 4);
};
function e3(u, e) {
  if (!Z)
    switch (u.tailMode) {
      case "hidden":
        e = u.tail;
        for (var t = null; e !== null; )
          e.alternate !== null && (t = e), (e = e.sibling);
        t === null ? (u.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = u.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null
          ? e || u.tail === null
            ? (u.tail = null)
            : (u.tail.sibling = null)
          : (n.sibling = null);
    }
}
function v4(u) {
  var e = u.alternate !== null && u.alternate.child === u.child,
    t = 0,
    n = 0;
  if (e)
    for (var r = u.child; r !== null; )
      (t |= r.lanes | r.childLanes),
        (n |= r.subtreeFlags & 14680064),
        (n |= r.flags & 14680064),
        (r.return = u),
        (r = r.sibling);
  else
    for (r = u.child; r !== null; )
      (t |= r.lanes | r.childLanes),
        (n |= r.subtreeFlags),
        (n |= r.flags),
        (r.return = u),
        (r = r.sibling);
  return (u.subtreeFlags |= n), (u.childLanes = t), e;
}
function Df(u, e, t) {
  var n = e.pendingProps;
  switch ((Wr(e), e.tag)) {
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
      return v4(e), null;
    case 1:
      return O4(e.type) && Te(), v4(e), null;
    case 3:
      return (
        (n = e.stateNode),
        M0(),
        X(x4),
        X(m4),
        Zr(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (u === null || u.child === null) &&
          (re(e)
            ? (e.flags |= 4)
            : u === null ||
              (u.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
              ((e.flags |= 1024), X4 !== null && (or(X4), (X4 = null)))),
        Jn(u, e),
        v4(e),
        null
      );
    case 5:
      Gr(e);
      var r = Yu(x3.current);
      if (((t = e.type), u !== null && e.stateNode != null))
        is(u, e, t, n, r),
          u.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!n) {
          if (e.stateNode === null) throw Error(A(166));
          return v4(e), null;
        }
        if (((u = Yu(ru.current)), re(e))) {
          (n = e.stateNode), (t = e.type);
          var i = e.memoizedProps;
          switch (((n[tu] = e), (n[w3] = i), (u = (e.mode & 1) !== 0), t)) {
            case "dialog":
              K("cancel", n), K("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", n);
              break;
            case "video":
            case "audio":
              for (r = 0; r < o3.length; r++) K(o3[r], n);
              break;
            case "source":
              K("error", n);
              break;
            case "img":
            case "image":
            case "link":
              K("error", n), K("load", n);
              break;
            case "details":
              K("toggle", n);
              break;
            case "input":
              Oi(n, i), K("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                K("invalid", n);
              break;
            case "textarea":
              Ni(n, i), K("invalid", n);
          }
          Sn(t, i), (r = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var o = i[l];
              l === "children"
                ? typeof o == "string"
                  ? n.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      ne(n.textContent, o, u),
                    (r = ["children", o]))
                  : typeof o == "number" &&
                    n.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      ne(n.textContent, o, u),
                    (r = ["children", "" + o]))
                : v3.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  K("scroll", n);
            }
          switch (t) {
            case "input":
              Y3(n), Pi(n, i, !0);
              break;
            case "textarea":
              Y3(n), bi(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = be);
          }
          (n = r), (e.updateQueue = n), n !== null && (e.flags |= 4);
        } else {
          (l = r.nodeType === 9 ? r : r.ownerDocument),
            u === "http://www.w3.org/1999/xhtml" && (u = To(t)),
            u === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((u = l.createElement("div")),
                  (u.innerHTML = "<script></script>"),
                  (u = u.removeChild(u.firstChild)))
                : typeof n.is == "string"
                ? (u = l.createElement(t, { is: n.is }))
                : ((u = l.createElement(t)),
                  t === "select" &&
                    ((l = u),
                    n.multiple
                      ? (l.multiple = !0)
                      : n.size && (l.size = n.size)))
              : (u = l.createElementNS(u, t)),
            (u[tu] = e),
            (u[w3] = n),
            rs(u, e, !1, !1),
            (e.stateNode = u);
          u: {
            switch (((l = wn(t, n)), t)) {
              case "dialog":
                K("cancel", u), K("close", u), (r = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", u), (r = n);
                break;
              case "video":
              case "audio":
                for (r = 0; r < o3.length; r++) K(o3[r], u);
                r = n;
                break;
              case "source":
                K("error", u), (r = n);
                break;
              case "img":
              case "image":
              case "link":
                K("error", u), K("load", u), (r = n);
                break;
              case "details":
                K("toggle", u), (r = n);
                break;
              case "input":
                Oi(u, n), (r = Fn(u, n)), K("invalid", u);
                break;
              case "option":
                r = n;
                break;
              case "select":
                (u._wrapperState = { wasMultiple: !!n.multiple }),
                  (r = t4({}, n, { value: void 0 })),
                  K("invalid", u);
                break;
              case "textarea":
                Ni(u, n), (r = _n(u, n)), K("invalid", u);
                break;
              default:
                r = n;
            }
            Sn(t, r), (o = r);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var s = o[i];
                i === "style"
                  ? zo(u, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Lo(u, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && B3(u, s)
                    : typeof s == "number" && B3(u, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (v3.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && K("scroll", u)
                      : s != null && kr(u, i, s, l));
              }
            switch (t) {
              case "input":
                Y3(u), Pi(u, n, !1);
                break;
              case "textarea":
                Y3(u), bi(u);
                break;
              case "option":
                n.value != null && u.setAttribute("value", "" + Mu(n.value));
                break;
              case "select":
                (u.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? S0(u, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      S0(u, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (u.onclick = be);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break u;
              case "img":
                n = !0;
                break u;
              default:
                n = !1;
            }
          }
          n && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return v4(e), null;
    case 6:
      if (u && e.stateNode != null) ls(u, e, u.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error(A(166));
        if (((t = Yu(x3.current)), Yu(ru.current), re(e))) {
          if (
            ((n = e.stateNode),
            (t = e.memoizedProps),
            (n[tu] = e),
            (i = n.nodeValue !== t) && ((u = L4), u !== null))
          )
            switch (u.tag) {
              case 3:
                ne(n.nodeValue, t, (u.mode & 1) !== 0);
                break;
              case 5:
                u.memoizedProps.suppressHydrationWarning !== !0 &&
                  ne(n.nodeValue, t, (u.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          (n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n)),
            (n[tu] = e),
            (e.stateNode = n);
      }
      return v4(e), null;
    case 13:
      if (
        (X(u4),
        (n = e.memoizedState),
        u === null ||
          (u.memoizedState !== null && u.memoizedState.dehydrated !== null))
      ) {
        if (Z && T4 !== null && (e.mode & 1) !== 0 && (e.flags & 128) === 0)
          _a(), R0(), (e.flags |= 98560), (i = !1);
        else if (((i = re(e)), n !== null && n.dehydrated !== null)) {
          if (u === null) {
            if (!i) throw Error(A(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317));
            i[tu] = e;
          } else
            R0(),
              (e.flags & 128) === 0 && (e.memoizedState = null),
              (e.flags |= 4);
          v4(e), (i = !1);
        } else X4 !== null && (or(X4), (X4 = null)), (i = !0);
        if (!i) return e.flags & 65536 ? e : null;
      }
      return (e.flags & 128) !== 0
        ? ((e.lanes = t), e)
        : ((n = n !== null),
          n !== (u !== null && u.memoizedState !== null) &&
            n &&
            ((e.child.flags |= 8192),
            (e.mode & 1) !== 0 &&
              (u === null || (u4.current & 1) !== 0
                ? c4 === 0 && (c4 = 3)
                : ci())),
          e.updateQueue !== null && (e.flags |= 4),
          v4(e),
          null);
    case 4:
      return (
        M0(), Jn(u, e), u === null && A3(e.stateNode.containerInfo), v4(e), null
      );
    case 10:
      return qr(e.type._context), v4(e), null;
    case 17:
      return O4(e.type) && Te(), v4(e), null;
    case 19:
      if ((X(u4), (i = e.memoizedState), i === null)) return v4(e), null;
      if (((n = (e.flags & 128) !== 0), (l = i.rendering), l === null))
        if (n) e3(i, !1);
        else {
          if (c4 !== 0 || (u !== null && (u.flags & 128) !== 0))
            for (u = e.child; u !== null; ) {
              if (((l = Ie(u)), l !== null)) {
                for (
                  e.flags |= 128,
                    e3(i, !1),
                    n = l.updateQueue,
                    n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    n = t,
                    t = e.child;
                  t !== null;

                )
                  (i = t),
                    (u = n),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = u),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (u = l.dependencies),
                        (i.dependencies =
                          u === null
                            ? null
                            : {
                                lanes: u.lanes,
                                firstContext: u.firstContext,
                              })),
                    (t = t.sibling);
                return q(u4, (u4.current & 1) | 2), e.child;
              }
              u = u.sibling;
            }
          i.tail !== null &&
            i4() > $0 &&
            ((e.flags |= 128), (n = !0), e3(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!n)
          if (((u = Ie(l)), u !== null)) {
            if (
              ((e.flags |= 128),
              (n = !0),
              (t = u.updateQueue),
              t !== null && ((e.updateQueue = t), (e.flags |= 4)),
              e3(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !Z)
            )
              return v4(e), null;
          } else
            2 * i4() - i.renderingStartTime > $0 &&
              t !== 1073741824 &&
              ((e.flags |= 128), (n = !0), e3(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = e.child), (e.child = l))
          : ((t = i.last),
            t !== null ? (t.sibling = l) : (e.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = i4()),
          (e.sibling = null),
          (t = u4.current),
          q(u4, n ? (t & 1) | 2 : t & 1),
          e)
        : (v4(e), null);
    case 22:
    case 23:
      return (
        si(),
        (n = e.memoizedState !== null),
        u !== null && (u.memoizedState !== null) !== n && (e.flags |= 8192),
        n && (e.mode & 1) !== 0
          ? (b4 & 1073741824) !== 0 &&
            (v4(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : v4(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, e.tag));
}
function hf(u, e) {
  switch ((Wr(e), e.tag)) {
    case 1:
      return (
        O4(e.type) && Te(),
        (u = e.flags),
        u & 65536 ? ((e.flags = (u & -65537) | 128), e) : null
      );
    case 3:
      return (
        M0(),
        X(x4),
        X(m4),
        Zr(),
        (u = e.flags),
        (u & 65536) !== 0 && (u & 128) === 0
          ? ((e.flags = (u & -65537) | 128), e)
          : null
      );
    case 5:
      return Gr(e), null;
    case 13:
      if ((X(u4), (u = e.memoizedState), u !== null && u.dehydrated !== null)) {
        if (e.alternate === null) throw Error(A(340));
        R0();
      }
      return (
        (u = e.flags), u & 65536 ? ((e.flags = (u & -65537) | 128), e) : null
      );
    case 19:
      return X(u4), null;
    case 4:
      return M0(), null;
    case 10:
      return qr(e.type._context), null;
    case 22:
    case 23:
      return si(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oe = !1,
  B4 = !1,
  vf = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function _0(u, e) {
  var t = u.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        n4(u, e, n);
      }
    else t.current = null;
}
function ur(u, e, t) {
  try {
    t();
  } catch (n) {
    n4(u, e, n);
  }
}
var yl = !1;
function Bf(u, e) {
  if (((zn = Oe), (u = da()), Ir(u))) {
    if ("selectionStart" in u)
      var t = { start: u.selectionStart, end: u.selectionEnd };
    else
      u: {
        t = ((t = u.ownerDocument) && t.defaultView) || window;
        var n = t.getSelection && t.getSelection();
        if (n && n.rangeCount !== 0) {
          t = n.anchorNode;
          var r = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break u;
          }
          var l = 0,
            o = -1,
            s = -1,
            c = 0,
            D = 0,
            f = u,
            p = null;
          e: for (;;) {
            for (
              var v;
              f !== t || (r !== 0 && f.nodeType !== 3) || (o = l + r),
                f !== i || (n !== 0 && f.nodeType !== 3) || (s = l + n),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (p = f), (f = v);
            for (;;) {
              if (f === u) break e;
              if (
                (p === t && ++c === r && (o = l),
                p === i && ++D === n && (s = l),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = v;
          }
          t = o === -1 || s === -1 ? null : { start: o, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Mn = { focusedElem: u, selectionRange: t }, Oe = !1, b = e; b !== null; )
    if (((e = b), (u = e.child), (e.subtreeFlags & 1028) !== 0 && u !== null))
      (u.return = e), (b = u);
    else
      for (; b !== null; ) {
        e = b;
        try {
          var B = e.alternate;
          if ((e.flags & 1024) !== 0)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (B !== null) {
                  var m = B.memoizedProps,
                    F = B.memoizedState,
                    E = e.stateNode,
                    d = E.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? m : K4(e.type, m),
                      F
                    );
                  E.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = e.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (g) {
          n4(e, e.return, g);
        }
        if (((u = e.sibling), u !== null)) {
          (u.return = e.return), (b = u);
          break;
        }
        b = e.return;
      }
  return (B = yl), (yl = !1), B;
}
function p3(u, e, t) {
  var n = e.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var r = (n = n.next);
    do {
      if ((r.tag & u) === u) {
        var i = r.destroy;
        (r.destroy = void 0), i !== void 0 && ur(e, t, i);
      }
      r = r.next;
    } while (r !== n);
  }
}
function vt(u, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var t = (e = e.next);
    do {
      if ((t.tag & u) === u) {
        var n = t.create;
        t.destroy = n();
      }
      t = t.next;
    } while (t !== e);
  }
}
function er(u) {
  var e = u.ref;
  if (e !== null) {
    var t = u.stateNode;
    switch (u.tag) {
      case 5:
        u = t;
        break;
      default:
        u = t;
    }
    typeof e == "function" ? e(u) : (e.current = u);
  }
}
function os(u) {
  var e = u.alternate;
  e !== null && ((u.alternate = null), os(e)),
    (u.child = null),
    (u.deletions = null),
    (u.sibling = null),
    u.tag === 5 &&
      ((e = u.stateNode),
      e !== null &&
        (delete e[tu], delete e[w3], delete e[In], delete e[Jd], delete e[uf])),
    (u.stateNode = null),
    (u.return = null),
    (u.dependencies = null),
    (u.memoizedProps = null),
    (u.memoizedState = null),
    (u.pendingProps = null),
    (u.stateNode = null),
    (u.updateQueue = null);
}
function as(u) {
  return u.tag === 5 || u.tag === 3 || u.tag === 4;
}
function Cl(u) {
  u: for (;;) {
    for (; u.sibling === null; ) {
      if (u.return === null || as(u.return)) return null;
      u = u.return;
    }
    for (
      u.sibling.return = u.return, u = u.sibling;
      u.tag !== 5 && u.tag !== 6 && u.tag !== 18;

    ) {
      if (u.flags & 2 || u.child === null || u.tag === 4) continue u;
      (u.child.return = u), (u = u.child);
    }
    if (!(u.flags & 2)) return u.stateNode;
  }
}
function tr(u, e, t) {
  var n = u.tag;
  if (n === 5 || n === 6)
    (u = u.stateNode),
      e
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(u, e)
          : t.insertBefore(u, e)
        : (t.nodeType === 8
            ? ((e = t.parentNode), e.insertBefore(u, t))
            : ((e = t), e.appendChild(u)),
          (t = t._reactRootContainer),
          t != null || e.onclick !== null || (e.onclick = be));
  else if (n !== 4 && ((u = u.child), u !== null))
    for (tr(u, e, t), u = u.sibling; u !== null; ) tr(u, e, t), (u = u.sibling);
}
function nr(u, e, t) {
  var n = u.tag;
  if (n === 5 || n === 6)
    (u = u.stateNode), e ? t.insertBefore(u, e) : t.appendChild(u);
  else if (n !== 4 && ((u = u.child), u !== null))
    for (nr(u, e, t), u = u.sibling; u !== null; ) nr(u, e, t), (u = u.sibling);
}
var E4 = null,
  Y4 = !1;
function Bu(u, e, t) {
  for (t = t.child; t !== null; ) ss(u, e, t), (t = t.sibling);
}
function ss(u, e, t) {
  if (nu && typeof nu.onCommitFiberUnmount == "function")
    try {
      nu.onCommitFiberUnmount(st, t);
    } catch {}
  switch (t.tag) {
    case 5:
      B4 || _0(t, e);
    case 6:
      var n = E4,
        r = Y4;
      (E4 = null),
        Bu(u, e, t),
        (E4 = n),
        (Y4 = r),
        E4 !== null &&
          (Y4
            ? ((u = E4),
              (t = t.stateNode),
              u.nodeType === 8 ? u.parentNode.removeChild(t) : u.removeChild(t))
            : E4.removeChild(t.stateNode));
      break;
    case 18:
      E4 !== null &&
        (Y4
          ? ((u = E4),
            (t = t.stateNode),
            u.nodeType === 8
              ? Kt(u.parentNode, t)
              : u.nodeType === 1 && Kt(u, t),
            y3(u))
          : Kt(E4, t.stateNode));
      break;
    case 4:
      (n = E4),
        (r = Y4),
        (E4 = t.stateNode.containerInfo),
        (Y4 = !0),
        Bu(u, e, t),
        (E4 = n),
        (Y4 = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !B4 &&
        ((n = t.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        r = n = n.next;
        do {
          var i = r,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ur(t, e, l),
            (r = r.next);
        } while (r !== n);
      }
      Bu(u, e, t);
      break;
    case 1:
      if (
        !B4 &&
        (_0(t, e),
        (n = t.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = t.memoizedProps),
            (n.state = t.memoizedState),
            n.componentWillUnmount();
        } catch (o) {
          n4(t, e, o);
        }
      Bu(u, e, t);
      break;
    case 21:
      Bu(u, e, t);
      break;
    case 22:
      t.mode & 1
        ? ((B4 = (n = B4) || t.memoizedState !== null), Bu(u, e, t), (B4 = n))
        : Bu(u, e, t);
      break;
    default:
      Bu(u, e, t);
  }
}
function _l(u) {
  var e = u.updateQueue;
  if (e !== null) {
    u.updateQueue = null;
    var t = u.stateNode;
    t === null && (t = u.stateNode = new vf()),
      e.forEach(function (n) {
        var r = wf.bind(null, u, n);
        t.has(n) || (t.add(n), n.then(r, r));
      });
  }
}
function q4(u, e) {
  var t = e.deletions;
  if (t !== null)
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      try {
        var i = u,
          l = e,
          o = l;
        u: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (E4 = o.stateNode), (Y4 = !1);
              break u;
            case 3:
              (E4 = o.stateNode.containerInfo), (Y4 = !0);
              break u;
            case 4:
              (E4 = o.stateNode.containerInfo), (Y4 = !0);
              break u;
          }
          o = o.return;
        }
        if (E4 === null) throw Error(A(160));
        ss(i, l, r), (E4 = null), (Y4 = !1);
        var s = r.alternate;
        s !== null && (s.return = null), (r.return = null);
      } catch (c) {
        n4(r, e, c);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) cs(e, u), (e = e.sibling);
}
function cs(u, e) {
  var t = u.alternate,
    n = u.flags;
  switch (u.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((q4(e, u), uu(u), n & 4)) {
        try {
          p3(3, u, u.return), vt(3, u);
        } catch (m) {
          n4(u, u.return, m);
        }
        try {
          p3(5, u, u.return);
        } catch (m) {
          n4(u, u.return, m);
        }
      }
      break;
    case 1:
      q4(e, u), uu(u), n & 512 && t !== null && _0(t, t.return);
      break;
    case 5:
      if (
        (q4(e, u),
        uu(u),
        n & 512 && t !== null && _0(t, t.return),
        u.flags & 32)
      ) {
        var r = u.stateNode;
        try {
          B3(r, "");
        } catch (m) {
          n4(u, u.return, m);
        }
      }
      if (n & 4 && ((r = u.stateNode), r != null)) {
        var i = u.memoizedProps,
          l = t !== null ? t.memoizedProps : i,
          o = u.type,
          s = u.updateQueue;
        if (((u.updateQueue = null), s !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && No(r, i),
              wn(o, l);
            var c = wn(o, i);
            for (l = 0; l < s.length; l += 2) {
              var D = s[l],
                f = s[l + 1];
              D === "style"
                ? zo(r, f)
                : D === "dangerouslySetInnerHTML"
                ? Lo(r, f)
                : D === "children"
                ? B3(r, f)
                : kr(r, D, f, c);
            }
            switch (o) {
              case "input":
                yn(r, i);
                break;
              case "textarea":
                bo(r, i);
                break;
              case "select":
                var p = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? S0(r, !!i.multiple, v, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? S0(r, !!i.multiple, i.defaultValue, !0)
                      : S0(r, !!i.multiple, i.multiple ? [] : "", !1));
            }
            r[w3] = i;
          } catch (m) {
            n4(u, u.return, m);
          }
      }
      break;
    case 6:
      if ((q4(e, u), uu(u), n & 4)) {
        if (u.stateNode === null) throw Error(A(162));
        (r = u.stateNode), (i = u.memoizedProps);
        try {
          r.nodeValue = i;
        } catch (m) {
          n4(u, u.return, m);
        }
      }
      break;
    case 3:
      if (
        (q4(e, u), uu(u), n & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          y3(e.containerInfo);
        } catch (m) {
          n4(u, u.return, m);
        }
      break;
    case 4:
      q4(e, u), uu(u);
      break;
    case 13:
      q4(e, u),
        uu(u),
        (r = u.child),
        r.flags & 8192 &&
          ((i = r.memoizedState !== null),
          (r.stateNode.isHidden = i),
          !i ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (oi = i4())),
        n & 4 && _l(u);
      break;
    case 22:
      if (
        ((D = t !== null && t.memoizedState !== null),
        u.mode & 1 ? ((B4 = (c = B4) || D), q4(e, u), (B4 = c)) : q4(e, u),
        uu(u),
        n & 8192)
      ) {
        if (
          ((c = u.memoizedState !== null),
          (u.stateNode.isHidden = c) && !D && (u.mode & 1) !== 0)
        )
          for (b = u, D = u.child; D !== null; ) {
            for (f = b = D; b !== null; ) {
              switch (((p = b), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  p3(4, p, p.return);
                  break;
                case 1:
                  _0(p, p.return);
                  var B = p.stateNode;
                  if (typeof B.componentWillUnmount == "function") {
                    (n = p), (t = p.return);
                    try {
                      (e = n),
                        (B.props = e.memoizedProps),
                        (B.state = e.memoizedState),
                        B.componentWillUnmount();
                    } catch (m) {
                      n4(n, t, m);
                    }
                  }
                  break;
                case 5:
                  _0(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Sl(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (b = v)) : Sl(f);
            }
            D = D.sibling;
          }
        u: for (D = null, f = u; ; ) {
          if (f.tag === 5) {
            if (D === null) {
              D = f;
              try {
                (r = f.stateNode),
                  c
                    ? ((i = r.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = f.stateNode),
                      (s = f.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (o.style.display = Ro("display", l)));
              } catch (m) {
                n4(u, u.return, m);
              }
            }
          } else if (f.tag === 6) {
            if (D === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (m) {
                n4(u, u.return, m);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === u) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === u) break u;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === u) break u;
            D === f && (D = null), (f = f.return);
          }
          D === f && (D = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      q4(e, u), uu(u), n & 4 && _l(u);
      break;
    case 21:
      break;
    default:
      q4(e, u), uu(u);
  }
}
function uu(u) {
  var e = u.flags;
  if (e & 2) {
    try {
      u: {
        for (var t = u.return; t !== null; ) {
          if (as(t)) {
            var n = t;
            break u;
          }
          t = t.return;
        }
        throw Error(A(160));
      }
      switch (n.tag) {
        case 5:
          var r = n.stateNode;
          n.flags & 32 && (B3(r, ""), (n.flags &= -33));
          var i = Cl(u);
          nr(u, i, r);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo,
            o = Cl(u);
          tr(u, o, l);
          break;
        default:
          throw Error(A(161));
      }
    } catch (s) {
      n4(u, u.return, s);
    }
    u.flags &= -3;
  }
  e & 4096 && (u.flags &= -4097);
}
function mf(u, e, t) {
  (b = u), ds(u);
}
function ds(u, e, t) {
  for (var n = (u.mode & 1) !== 0; b !== null; ) {
    var r = b,
      i = r.child;
    if (r.tag === 22 && n) {
      var l = r.memoizedState !== null || oe;
      if (!l) {
        var o = r.alternate,
          s = (o !== null && o.memoizedState !== null) || B4;
        o = oe;
        var c = B4;
        if (((oe = l), (B4 = s) && !c))
          for (b = r; b !== null; )
            (l = b),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? wl(r)
                : s !== null
                ? ((s.return = l), (b = s))
                : wl(r);
        for (; i !== null; ) (b = i), ds(i), (i = i.sibling);
        (b = r), (oe = o), (B4 = c);
      }
      Al(u);
    } else
      (r.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = r), (b = i))
        : Al(u);
  }
}
function Al(u) {
  for (; b !== null; ) {
    var e = b;
    if ((e.flags & 8772) !== 0) {
      var t = e.alternate;
      try {
        if ((e.flags & 8772) !== 0)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              B4 || vt(5, e);
              break;
            case 1:
              var n = e.stateNode;
              if (e.flags & 4 && !B4)
                if (t === null) n.componentDidMount();
                else {
                  var r =
                    e.elementType === e.type
                      ? t.memoizedProps
                      : K4(e.type, t.memoizedProps);
                  n.componentDidUpdate(
                    r,
                    t.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = e.updateQueue;
              i !== null && sl(e, i, n);
              break;
            case 3:
              var l = e.updateQueue;
              if (l !== null) {
                if (((t = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      t = e.child.stateNode;
                      break;
                    case 1:
                      t = e.child.stateNode;
                  }
                sl(e, l, t);
              }
              break;
            case 5:
              var o = e.stateNode;
              if (t === null && e.flags & 4) {
                t = o;
                var s = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
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
              if (e.memoizedState === null) {
                var c = e.alternate;
                if (c !== null) {
                  var D = c.memoizedState;
                  if (D !== null) {
                    var f = D.dehydrated;
                    f !== null && y3(f);
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
              throw Error(A(163));
          }
        B4 || (e.flags & 512 && er(e));
      } catch (p) {
        n4(e, e.return, p);
      }
    }
    if (e === u) {
      b = null;
      break;
    }
    if (((t = e.sibling), t !== null)) {
      (t.return = e.return), (b = t);
      break;
    }
    b = e.return;
  }
}
function Sl(u) {
  for (; b !== null; ) {
    var e = b;
    if (e === u) {
      b = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      (t.return = e.return), (b = t);
      break;
    }
    b = e.return;
  }
}
function wl(u) {
  for (; b !== null; ) {
    var e = b;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            vt(4, e);
          } catch (s) {
            n4(e, t, s);
          }
          break;
        case 1:
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var r = e.return;
            try {
              n.componentDidMount();
            } catch (s) {
              n4(e, r, s);
            }
          }
          var i = e.return;
          try {
            er(e);
          } catch (s) {
            n4(e, i, s);
          }
          break;
        case 5:
          var l = e.return;
          try {
            er(e);
          } catch (s) {
            n4(e, l, s);
          }
      }
    } catch (s) {
      n4(e, e.return, s);
    }
    if (e === u) {
      b = null;
      break;
    }
    var o = e.sibling;
    if (o !== null) {
      (o.return = e.return), (b = o);
      break;
    }
    b = e.return;
  }
}
var gf = Math.ceil,
  Ue = vu.ReactCurrentDispatcher,
  ii = vu.ReactCurrentOwner,
  U4 = vu.ReactCurrentBatchConfig,
  U = 0,
  f4 = null,
  o4 = null,
  p4 = 0,
  b4 = 0,
  A0 = Hu(0),
  c4 = 0,
  b3 = null,
  e0 = 0,
  Bt = 0,
  li = 0,
  D3 = null,
  w4 = null,
  oi = 0,
  $0 = 1 / 0,
  au = null,
  Ve = !1,
  rr = null,
  Tu = null,
  ae = !1,
  wu = null,
  Qe = 0,
  h3 = 0,
  ir = null,
  ge = -1,
  Fe = 0;
function C4() {
  return (U & 6) !== 0 ? i4() : ge !== -1 ? ge : (ge = i4());
}
function Lu(u) {
  return (u.mode & 1) === 0
    ? 1
    : (U & 2) !== 0 && p4 !== 0
    ? p4 & -p4
    : tf.transition !== null
    ? (Fe === 0 && (Fe = Yo()), Fe)
    : ((u = V),
      u !== 0 || ((u = window.event), (u = u === void 0 ? 16 : ta(u.type))),
      u);
}
function Z4(u, e, t, n) {
  if (50 < h3) throw ((h3 = 0), (ir = null), Error(A(185)));
  M3(u, t, n),
    ((U & 2) === 0 || u !== f4) &&
      (u === f4 && ((U & 2) === 0 && (Bt |= t), c4 === 4 && Au(u, p4)),
      P4(u, n),
      t === 1 &&
        U === 0 &&
        (e.mode & 1) === 0 &&
        (($0 = i4() + 500), pt && Wu()));
}
function P4(u, e) {
  var t = u.callbackNode;
  td(u, e);
  var n = xe(u, u === f4 ? p4 : 0);
  if (n === 0)
    t !== null && Ri(t), (u.callbackNode = null), (u.callbackPriority = 0);
  else if (((e = n & -n), u.callbackPriority !== e)) {
    if ((t != null && Ri(t), e === 1))
      u.tag === 0 ? ef(kl.bind(null, u)) : Fa(kl.bind(null, u)),
        Gd(function () {
          (U & 6) === 0 && Wu();
        }),
        (t = null);
    else {
      switch (Xo(n)) {
        case 1:
          t = br;
          break;
        case 4:
          t = qo;
          break;
        case 16:
          t = ke;
          break;
        case 536870912:
          t = Ko;
          break;
        default:
          t = ke;
      }
      t = ms(t, fs.bind(null, u));
    }
    (u.callbackPriority = e), (u.callbackNode = t);
  }
}
function fs(u, e) {
  if (((ge = -1), (Fe = 0), (U & 6) !== 0)) throw Error(A(327));
  var t = u.callbackNode;
  if (P0() && u.callbackNode !== t) return null;
  var n = xe(u, u === f4 ? p4 : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & u.expiredLanes) !== 0 || e) e = qe(u, n);
  else {
    e = n;
    var r = U;
    U |= 2;
    var i = ps();
    (f4 !== u || p4 !== e) && ((au = null), ($0 = i4() + 500), Xu(u, e));
    do
      try {
        Cf();
        break;
      } catch (o) {
        Es(u, o);
      }
    while (1);
    Qr(),
      (Ue.current = i),
      (U = r),
      o4 !== null ? (e = 0) : ((f4 = null), (p4 = 0), (e = c4));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((r = Nn(u)), r !== 0 && ((n = r), (e = lr(u, r)))), e === 1)
    )
      throw ((t = b3), Xu(u, 0), Au(u, n), P4(u, i4()), t);
    if (e === 6) Au(u, n);
    else {
      if (
        ((r = u.current.alternate),
        (n & 30) === 0 &&
          !Ff(r) &&
          ((e = qe(u, n)),
          e === 2 && ((i = Nn(u)), i !== 0 && ((n = i), (e = lr(u, i)))),
          e === 1))
      )
        throw ((t = b3), Xu(u, 0), Au(u, n), P4(u, i4()), t);
      switch (((u.finishedWork = r), (u.finishedLanes = n), e)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Qu(u, w4, au);
          break;
        case 3:
          if (
            (Au(u, n), (n & 130023424) === n && ((e = oi + 500 - i4()), 10 < e))
          ) {
            if (xe(u, 0) !== 0) break;
            if (((r = u.suspendedLanes), (r & n) !== n)) {
              C4(), (u.pingedLanes |= u.suspendedLanes & r);
              break;
            }
            u.timeoutHandle = $n(Qu.bind(null, u, w4, au), e);
            break;
          }
          Qu(u, w4, au);
          break;
        case 4:
          if ((Au(u, n), (n & 4194240) === n)) break;
          for (e = u.eventTimes, r = -1; 0 < n; ) {
            var l = 31 - G4(n);
            (i = 1 << l), (l = e[l]), l > r && (r = l), (n &= ~i);
          }
          if (
            ((n = r),
            (n = i4() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * gf(n / 1960)) - n),
            10 < n)
          ) {
            u.timeoutHandle = $n(Qu.bind(null, u, w4, au), n);
            break;
          }
          Qu(u, w4, au);
          break;
        case 5:
          Qu(u, w4, au);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return P4(u, i4()), u.callbackNode === t ? fs.bind(null, u) : null;
}
function lr(u, e) {
  var t = D3;
  return (
    u.current.memoizedState.isDehydrated && (Xu(u, e).flags |= 256),
    (u = qe(u, e)),
    u !== 2 && ((e = w4), (w4 = t), e !== null && or(e)),
    u
  );
}
function or(u) {
  w4 === null ? (w4 = u) : w4.push.apply(w4, u);
}
function Ff(u) {
  for (var e = u; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            i = r.getSnapshot;
          r = r.value;
          try {
            if (!J4(i(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = e.child), e.subtreeFlags & 16384 && t !== null))
      (t.return = e), (e = t);
    else {
      if (e === u) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === u) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Au(u, e) {
  for (
    e &= ~li,
      e &= ~Bt,
      u.suspendedLanes |= e,
      u.pingedLanes &= ~e,
      u = u.expirationTimes;
    0 < e;

  ) {
    var t = 31 - G4(e),
      n = 1 << t;
    (u[t] = -1), (e &= ~n);
  }
}
function kl(u) {
  if ((U & 6) !== 0) throw Error(A(327));
  P0();
  var e = xe(u, 0);
  if ((e & 1) === 0) return P4(u, i4()), null;
  var t = qe(u, e);
  if (u.tag !== 0 && t === 2) {
    var n = Nn(u);
    n !== 0 && ((e = n), (t = lr(u, n)));
  }
  if (t === 1) throw ((t = b3), Xu(u, 0), Au(u, e), P4(u, i4()), t);
  if (t === 6) throw Error(A(345));
  return (
    (u.finishedWork = u.current.alternate),
    (u.finishedLanes = e),
    Qu(u, w4, au),
    P4(u, i4()),
    null
  );
}
function ai(u, e) {
  var t = U;
  U |= 1;
  try {
    return u(e);
  } finally {
    (U = t), U === 0 && (($0 = i4() + 500), pt && Wu());
  }
}
function t0(u) {
  wu !== null && wu.tag === 0 && (U & 6) === 0 && P0();
  var e = U;
  U |= 1;
  var t = U4.transition,
    n = V;
  try {
    if (((U4.transition = null), (V = 1), u)) return u();
  } finally {
    (V = n), (U4.transition = t), (U = e), (U & 6) === 0 && Wu();
  }
}
function si() {
  (b4 = A0.current), X(A0);
}
function Xu(u, e) {
  (u.finishedWork = null), (u.finishedLanes = 0);
  var t = u.timeoutHandle;
  if ((t !== -1 && ((u.timeoutHandle = -1), Xd(t)), o4 !== null))
    for (t = o4.return; t !== null; ) {
      var n = t;
      switch ((Wr(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Te();
          break;
        case 3:
          M0(), X(x4), X(m4), Zr();
          break;
        case 5:
          Gr(n);
          break;
        case 4:
          M0();
          break;
        case 13:
          X(u4);
          break;
        case 19:
          X(u4);
          break;
        case 10:
          qr(n.type._context);
          break;
        case 22:
        case 23:
          si();
      }
      t = t.return;
    }
  if (
    ((f4 = u),
    (o4 = u = Ru(u.current, null)),
    (p4 = b4 = e),
    (c4 = 0),
    (b3 = null),
    (li = Bt = e0 = 0),
    (w4 = D3 = null),
    Ku !== null)
  ) {
    for (e = 0; e < Ku.length; e++)
      if (((t = Ku[e]), (n = t.interleaved), n !== null)) {
        t.interleaved = null;
        var r = n.next,
          i = t.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = r), (n.next = l);
        }
        t.pending = n;
      }
    Ku = null;
  }
  return u;
}
function Es(u, e) {
  do {
    var t = o4;
    try {
      if ((Qr(), (ve.current = We), He)) {
        for (var n = e4.memoizedState; n !== null; ) {
          var r = n.queue;
          r !== null && (r.pending = null), (n = n.next);
        }
        He = !1;
      }
      if (
        ((u0 = 0),
        (d4 = s4 = e4 = null),
        (E3 = !1),
        (O3 = 0),
        (ii.current = null),
        t === null || t.return === null)
      ) {
        (c4 = 1), (b3 = e), (o4 = null);
        break;
      }
      u: {
        var i = u,
          l = t.return,
          o = t,
          s = e;
        if (
          ((e = p4),
          (o.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            D = o,
            f = D.tag;
          if ((D.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var p = D.alternate;
            p
              ? ((D.updateQueue = p.updateQueue),
                (D.memoizedState = p.memoizedState),
                (D.lanes = p.lanes))
              : ((D.updateQueue = null), (D.memoizedState = null));
          }
          var v = Dl(l);
          if (v !== null) {
            (v.flags &= -257),
              hl(v, l, o, i, e),
              v.mode & 1 && pl(i, c, e),
              (e = v),
              (s = c);
            var B = e.updateQueue;
            if (B === null) {
              var m = new Set();
              m.add(s), (e.updateQueue = m);
            } else B.add(s);
            break u;
          } else {
            if ((e & 1) === 0) {
              pl(i, c, e), ci();
              break u;
            }
            s = Error(A(426));
          }
        } else if (Z && o.mode & 1) {
          var F = Dl(l);
          if (F !== null) {
            (F.flags & 65536) === 0 && (F.flags |= 256),
              hl(F, l, o, i, e),
              Ur(j0(s, o));
            break u;
          }
        }
        (i = s = j0(s, o)),
          c4 !== 4 && (c4 = 2),
          D3 === null ? (D3 = [i]) : D3.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (e &= -e), (i.lanes |= e);
              var E = Xa(i, s, e);
              al(i, E);
              break u;
            case 1:
              o = s;
              var d = i.type,
                h = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Tu === null || !Tu.has(h))))
              ) {
                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                var g = Ga(i, o, e);
                al(i, g);
                break u;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      hs(t);
    } catch (y) {
      (e = y), o4 === t && t !== null && (o4 = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function ps() {
  var u = Ue.current;
  return (Ue.current = We), u === null ? We : u;
}
function ci() {
  (c4 === 0 || c4 === 3 || c4 === 2) && (c4 = 4),
    f4 === null ||
      ((e0 & 268435455) === 0 && (Bt & 268435455) === 0) ||
      Au(f4, p4);
}
function qe(u, e) {
  var t = U;
  U |= 2;
  var n = ps();
  (f4 !== u || p4 !== e) && ((au = null), Xu(u, e));
  do
    try {
      yf();
      break;
    } catch (r) {
      Es(u, r);
    }
  while (1);
  if ((Qr(), (U = t), (Ue.current = n), o4 !== null)) throw Error(A(261));
  return (f4 = null), (p4 = 0), c4;
}
function yf() {
  for (; o4 !== null; ) Ds(o4);
}
function Cf() {
  for (; o4 !== null && !qc(); ) Ds(o4);
}
function Ds(u) {
  var e = Bs(u.alternate, u, b4);
  (u.memoizedProps = u.pendingProps),
    e === null ? hs(u) : (o4 = e),
    (ii.current = null);
}
function hs(u) {
  var e = u;
  do {
    var t = e.alternate;
    if (((u = e.return), (e.flags & 32768) === 0)) {
      if (((t = Df(t, e, b4)), t !== null)) {
        o4 = t;
        return;
      }
    } else {
      if (((t = hf(t, e)), t !== null)) {
        (t.flags &= 32767), (o4 = t);
        return;
      }
      if (u !== null)
        (u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null);
      else {
        (c4 = 6), (o4 = null);
        return;
      }
    }
    if (((e = e.sibling), e !== null)) {
      o4 = e;
      return;
    }
    o4 = e = u;
  } while (e !== null);
  c4 === 0 && (c4 = 5);
}
function Qu(u, e, t) {
  var n = V,
    r = U4.transition;
  try {
    (U4.transition = null), (V = 1), _f(u, e, t, n);
  } finally {
    (U4.transition = r), (V = n);
  }
  return null;
}
function _f(u, e, t, n) {
  do P0();
  while (wu !== null);
  if ((U & 6) !== 0) throw Error(A(327));
  t = u.finishedWork;
  var r = u.finishedLanes;
  if (t === null) return null;
  if (((u.finishedWork = null), (u.finishedLanes = 0), t === u.current))
    throw Error(A(177));
  (u.callbackNode = null), (u.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (nd(u, i),
    u === f4 && ((o4 = f4 = null), (p4 = 0)),
    ((t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0) ||
      ae ||
      ((ae = !0),
      ms(ke, function () {
        return P0(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    (t.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = U4.transition), (U4.transition = null);
    var l = V;
    V = 1;
    var o = U;
    (U |= 4),
      (ii.current = null),
      Bf(u, t),
      cs(t, u),
      Wd(Mn),
      (Oe = !!zn),
      (Mn = zn = null),
      (u.current = t),
      mf(t),
      Kc(),
      (U = o),
      (V = l),
      (U4.transition = i);
  } else u.current = t;
  if (
    (ae && ((ae = !1), (wu = u), (Qe = r)),
    (i = u.pendingLanes),
    i === 0 && (Tu = null),
    Gc(t.stateNode),
    P4(u, i4()),
    e !== null)
  )
    for (n = u.onRecoverableError, t = 0; t < e.length; t++)
      (r = e[t]), n(r.value, { componentStack: r.stack, digest: r.digest });
  if (Ve) throw ((Ve = !1), (u = rr), (rr = null), u);
  return (
    (Qe & 1) !== 0 && u.tag !== 0 && P0(),
    (i = u.pendingLanes),
    (i & 1) !== 0 ? (u === ir ? h3++ : ((h3 = 0), (ir = u))) : (h3 = 0),
    Wu(),
    null
  );
}
function P0() {
  if (wu !== null) {
    var u = Xo(Qe),
      e = U4.transition,
      t = V;
    try {
      if (((U4.transition = null), (V = 16 > u ? 16 : u), wu === null))
        var n = !1;
      else {
        if (((u = wu), (wu = null), (Qe = 0), (U & 6) !== 0))
          throw Error(A(331));
        var r = U;
        for (U |= 4, b = u.current; b !== null; ) {
          var i = b,
            l = i.child;
          if ((b.flags & 16) !== 0) {
            var o = i.deletions;
            if (o !== null) {
              for (var s = 0; s < o.length; s++) {
                var c = o[s];
                for (b = c; b !== null; ) {
                  var D = b;
                  switch (D.tag) {
                    case 0:
                    case 11:
                    case 15:
                      p3(8, D, i);
                  }
                  var f = D.child;
                  if (f !== null) (f.return = D), (b = f);
                  else
                    for (; b !== null; ) {
                      D = b;
                      var p = D.sibling,
                        v = D.return;
                      if ((os(D), D === c)) {
                        b = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (b = p);
                        break;
                      }
                      b = v;
                    }
                }
              }
              var B = i.alternate;
              if (B !== null) {
                var m = B.child;
                if (m !== null) {
                  B.child = null;
                  do {
                    var F = m.sibling;
                    (m.sibling = null), (m = F);
                  } while (m !== null);
                }
              }
              b = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && l !== null)
            (l.return = i), (b = l);
          else
            u: for (; b !== null; ) {
              if (((i = b), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    p3(9, i, i.return);
                }
              var E = i.sibling;
              if (E !== null) {
                (E.return = i.return), (b = E);
                break u;
              }
              b = i.return;
            }
        }
        var d = u.current;
        for (b = d; b !== null; ) {
          l = b;
          var h = l.child;
          if ((l.subtreeFlags & 2064) !== 0 && h !== null)
            (h.return = l), (b = h);
          else
            u: for (l = d; b !== null; ) {
              if (((o = b), (o.flags & 2048) !== 0))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vt(9, o);
                  }
                } catch (y) {
                  n4(o, o.return, y);
                }
              if (o === l) {
                b = null;
                break u;
              }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (b = g);
                break u;
              }
              b = o.return;
            }
        }
        if (
          ((U = r), Wu(), nu && typeof nu.onPostCommitFiberRoot == "function")
        )
          try {
            nu.onPostCommitFiberRoot(st, u);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (V = t), (U4.transition = e);
    }
  }
  return !1;
}
function xl(u, e, t) {
  (e = j0(t, e)),
    (e = Xa(u, e, 1)),
    (u = bu(u, e, 1)),
    (e = C4()),
    u !== null && (M3(u, 1, e), P4(u, e));
}
function n4(u, e, t) {
  if (u.tag === 3) xl(u, u, t);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        xl(e, u, t);
        break;
      } else if (e.tag === 1) {
        var n = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Tu === null || !Tu.has(n)))
        ) {
          (u = j0(t, u)),
            (u = Ga(e, u, 1)),
            (e = bu(e, u, 1)),
            (u = C4()),
            e !== null && (M3(e, 1, u), P4(e, u));
          break;
        }
      }
      e = e.return;
    }
}
function Af(u, e, t) {
  var n = u.pingCache;
  n !== null && n.delete(e),
    (e = C4()),
    (u.pingedLanes |= u.suspendedLanes & t),
    f4 === u &&
      (p4 & t) === t &&
      (c4 === 4 || (c4 === 3 && (p4 & 130023424) === p4 && 500 > i4() - oi)
        ? Xu(u, 0)
        : (li |= t)),
    P4(u, e);
}
function vs(u, e) {
  e === 0 &&
    ((u.mode & 1) === 0
      ? (e = 1)
      : ((e = Z3), (Z3 <<= 1), (Z3 & 130023424) === 0 && (Z3 = 4194304)));
  var t = C4();
  (u = Du(u, e)), u !== null && (M3(u, e, t), P4(u, t));
}
function Sf(u) {
  var e = u.memoizedState,
    t = 0;
  e !== null && (t = e.retryLane), vs(u, t);
}
function wf(u, e) {
  var t = 0;
  switch (u.tag) {
    case 13:
      var n = u.stateNode,
        r = u.memoizedState;
      r !== null && (t = r.retryLane);
      break;
    case 19:
      n = u.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  n !== null && n.delete(e), vs(u, t);
}
var Bs;
Bs = function (u, e, t) {
  if (u !== null)
    if (u.memoizedProps !== e.pendingProps || x4.current) k4 = !0;
    else {
      if ((u.lanes & t) === 0 && (e.flags & 128) === 0)
        return (k4 = !1), pf(u, e, t);
      k4 = (u.flags & 131072) !== 0;
    }
  else (k4 = !1), Z && (e.flags & 1048576) !== 0 && ya(e, ze, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var n = e.type;
      me(u, e), (u = e.pendingProps);
      var r = L0(e, m4.current);
      O0(e, t), (r = ui(null, e, n, u, r, t));
      var i = ei();
      return (
        (e.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            O4(n) ? ((i = !0), Le(e)) : (i = !1),
            (e.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Yr(e),
            (r.updater = ht),
            (e.stateNode = r),
            (r._reactInternals = e),
            qn(e, n, u, t),
            (e = Xn(null, e, n, !0, i, t)))
          : ((e.tag = 0), Z && i && Hr(e), y4(null, e, r, t), (e = e.child)),
        e
      );
    case 16:
      n = e.elementType;
      u: {
        switch (
          (me(u, e),
          (u = e.pendingProps),
          (r = n._init),
          (n = r(n._payload)),
          (e.type = n),
          (r = e.tag = xf(n)),
          (u = K4(n, u)),
          r)
        ) {
          case 0:
            e = Yn(null, e, n, u, t);
            break u;
          case 1:
            e = ml(null, e, n, u, t);
            break u;
          case 11:
            e = vl(null, e, n, u, t);
            break u;
          case 14:
            e = Bl(null, e, n, K4(n.type, u), t);
            break u;
        }
        throw Error(A(306, n, ""));
      }
      return e;
    case 0:
      return (
        (n = e.type),
        (r = e.pendingProps),
        (r = e.elementType === n ? r : K4(n, r)),
        Yn(u, e, n, r, t)
      );
    case 1:
      return (
        (n = e.type),
        (r = e.pendingProps),
        (r = e.elementType === n ? r : K4(n, r)),
        ml(u, e, n, r, t)
      );
    case 3:
      u: {
        if ((es(e), u === null)) throw Error(A(387));
        (n = e.pendingProps),
          (i = e.memoizedState),
          (r = i.element),
          ka(u, e),
          $e(e, n, null, t);
        var l = e.memoizedState;
        if (((n = l.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            (r = j0(Error(A(423)), e)), (e = gl(u, e, n, t, r));
            break u;
          } else if (n !== r) {
            (r = j0(Error(A(424)), e)), (e = gl(u, e, n, t, r));
            break u;
          } else
            for (
              T4 = Nu(e.stateNode.containerInfo.firstChild),
                L4 = e,
                Z = !0,
                X4 = null,
                t = Sa(e, null, n, t),
                e.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((R0(), n === r)) {
            e = hu(u, e, t);
            break u;
          }
          y4(u, e, n, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        xa(e),
        u === null && Un(e),
        (n = e.type),
        (r = e.pendingProps),
        (i = u !== null ? u.memoizedProps : null),
        (l = r.children),
        jn(n, r) ? (l = null) : i !== null && jn(n, i) && (e.flags |= 32),
        us(u, e),
        y4(u, e, l, t),
        e.child
      );
    case 6:
      return u === null && Un(e), null;
    case 13:
      return ts(u, e, t);
    case 4:
      return (
        Xr(e, e.stateNode.containerInfo),
        (n = e.pendingProps),
        u === null ? (e.child = z0(e, null, n, t)) : y4(u, e, n, t),
        e.child
      );
    case 11:
      return (
        (n = e.type),
        (r = e.pendingProps),
        (r = e.elementType === n ? r : K4(n, r)),
        vl(u, e, n, r, t)
      );
    case 7:
      return y4(u, e, e.pendingProps, t), e.child;
    case 8:
      return y4(u, e, e.pendingProps.children, t), e.child;
    case 12:
      return y4(u, e, e.pendingProps.children, t), e.child;
    case 10:
      u: {
        if (
          ((n = e.type._context),
          (r = e.pendingProps),
          (i = e.memoizedProps),
          (l = r.value),
          q(Me, n._currentValue),
          (n._currentValue = l),
          i !== null)
        )
          if (J4(i.value, l)) {
            if (i.children === r.children && !x4.current) {
              e = hu(u, e, t);
              break u;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                l = i.child;
                for (var s = o.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (i.tag === 1) {
                      (s = fu(-1, t & -t)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var D = c.pending;
                        D === null
                          ? (s.next = s)
                          : ((s.next = D.next), (D.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      Vn(i.return, t, e),
                      (o.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(A(341));
                (l.lanes |= t),
                  (o = l.alternate),
                  o !== null && (o.lanes |= t),
                  Vn(l, t, e),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === e) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        y4(u, e, r.children, t), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (n = e.pendingProps.children),
        O0(e, t),
        (r = V4(r)),
        (n = n(r)),
        (e.flags |= 1),
        y4(u, e, n, t),
        e.child
      );
    case 14:
      return (
        (n = e.type),
        (r = K4(n, e.pendingProps)),
        (r = K4(n.type, r)),
        Bl(u, e, n, r, t)
      );
    case 15:
      return Za(u, e, e.type, e.pendingProps, t);
    case 17:
      return (
        (n = e.type),
        (r = e.pendingProps),
        (r = e.elementType === n ? r : K4(n, r)),
        me(u, e),
        (e.tag = 1),
        O4(n) ? ((u = !0), Le(e)) : (u = !1),
        O0(e, t),
        Ya(e, n, r),
        qn(e, n, r, t),
        Xn(null, e, n, !0, u, t)
      );
    case 19:
      return ns(u, e, t);
    case 22:
      return Ja(u, e, t);
  }
  throw Error(A(156, e.tag));
};
function ms(u, e) {
  return Qo(u, e);
}
function kf(u, e, t, n) {
  (this.tag = u),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function W4(u, e, t, n) {
  return new kf(u, e, t, n);
}
function di(u) {
  return (u = u.prototype), !(!u || !u.isReactComponent);
}
function xf(u) {
  if (typeof u == "function") return di(u) ? 1 : 0;
  if (u != null) {
    if (((u = u.$$typeof), u === Or)) return 11;
    if (u === Pr) return 14;
  }
  return 2;
}
function Ru(u, e) {
  var t = u.alternate;
  return (
    t === null
      ? ((t = W4(u.tag, e, u.key, u.mode)),
        (t.elementType = u.elementType),
        (t.type = u.type),
        (t.stateNode = u.stateNode),
        (t.alternate = u),
        (u.alternate = t))
      : ((t.pendingProps = e),
        (t.type = u.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = u.flags & 14680064),
    (t.childLanes = u.childLanes),
    (t.lanes = u.lanes),
    (t.child = u.child),
    (t.memoizedProps = u.memoizedProps),
    (t.memoizedState = u.memoizedState),
    (t.updateQueue = u.updateQueue),
    (e = u.dependencies),
    (t.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (t.sibling = u.sibling),
    (t.index = u.index),
    (t.ref = u.ref),
    t
  );
}
function ye(u, e, t, n, r, i) {
  var l = 2;
  if (((n = u), typeof u == "function")) di(u) && (l = 1);
  else if (typeof u == "string") l = 5;
  else
    u: switch (u) {
      case D0:
        return Gu(t.children, r, i, e);
      case xr:
        (l = 8), (r |= 8);
        break;
      case vn:
        return (
          (u = W4(12, t, e, r | 2)), (u.elementType = vn), (u.lanes = i), u
        );
      case Bn:
        return (u = W4(13, t, e, r)), (u.elementType = Bn), (u.lanes = i), u;
      case mn:
        return (u = W4(19, t, e, r)), (u.elementType = mn), (u.lanes = i), u;
      case xo:
        return mt(t, r, i, e);
      default:
        if (typeof u == "object" && u !== null)
          switch (u.$$typeof) {
            case wo:
              l = 10;
              break u;
            case ko:
              l = 9;
              break u;
            case Or:
              l = 11;
              break u;
            case Pr:
              l = 14;
              break u;
            case Fu:
              (l = 16), (n = null);
              break u;
          }
        throw Error(A(130, u == null ? u : typeof u, ""));
    }
  return (
    (e = W4(l, t, e, r)), (e.elementType = u), (e.type = n), (e.lanes = i), e
  );
}
function Gu(u, e, t, n) {
  return (u = W4(7, u, n, e)), (u.lanes = t), u;
}
function mt(u, e, t, n) {
  return (
    (u = W4(22, u, n, e)),
    (u.elementType = xo),
    (u.lanes = t),
    (u.stateNode = { isHidden: !1 }),
    u
  );
}
function tn(u, e, t) {
  return (u = W4(6, u, null, e)), (u.lanes = t), u;
}
function nn(u, e, t) {
  return (
    (e = W4(4, u.children !== null ? u.children : [], u.key, e)),
    (e.lanes = t),
    (e.stateNode = {
      containerInfo: u.containerInfo,
      pendingChildren: null,
      implementation: u.implementation,
    }),
    e
  );
}
function Of(u, e, t, n, r) {
  (this.tag = e),
    (this.containerInfo = u),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zt(0)),
    (this.expirationTimes = zt(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zt(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function fi(u, e, t, n, r, i, l, o, s) {
  return (
    (u = new Of(u, e, t, o, s)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = W4(3, null, null, e)),
    (u.current = i),
    (i.stateNode = u),
    (i.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Yr(i),
    u
  );
}
function Pf(u, e, t) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: p0,
    key: n == null ? null : "" + n,
    children: u,
    containerInfo: e,
    implementation: t,
  };
}
function gs(u) {
  if (!u) return ju;
  u = u._reactInternals;
  u: {
    if (i0(u) !== u || u.tag !== 1) throw Error(A(170));
    var e = u;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break u;
        case 1:
          if (O4(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break u;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(A(171));
  }
  if (u.tag === 1) {
    var t = u.type;
    if (O4(t)) return ga(u, t, e);
  }
  return e;
}
function Fs(u, e, t, n, r, i, l, o, s) {
  return (
    (u = fi(t, n, !0, u, r, i, l, o, s)),
    (u.context = gs(null)),
    (t = u.current),
    (n = C4()),
    (r = Lu(t)),
    (i = fu(n, r)),
    (i.callback = e != null ? e : null),
    bu(t, i, r),
    (u.current.lanes = r),
    M3(u, r, n),
    P4(u, n),
    u
  );
}
function gt(u, e, t, n) {
  var r = e.current,
    i = C4(),
    l = Lu(r);
  return (
    (t = gs(t)),
    e.context === null ? (e.context = t) : (e.pendingContext = t),
    (e = fu(i, l)),
    (e.payload = { element: u }),
    (n = n === void 0 ? null : n),
    n !== null && (e.callback = n),
    (u = bu(r, e, l)),
    u !== null && (Z4(u, r, l, i), he(u, r, l)),
    l
  );
}
function Ke(u) {
  if (((u = u.current), !u.child)) return null;
  switch (u.child.tag) {
    case 5:
      return u.child.stateNode;
    default:
      return u.child.stateNode;
  }
}
function Ol(u, e) {
  if (((u = u.memoizedState), u !== null && u.dehydrated !== null)) {
    var t = u.retryLane;
    u.retryLane = t !== 0 && t < e ? t : e;
  }
}
function Ei(u, e) {
  Ol(u, e), (u = u.alternate) && Ol(u, e);
}
function Nf() {
  return null;
}
var ys =
  typeof reportError == "function"
    ? reportError
    : function (u) {
        console.error(u);
      };
function pi(u) {
  this._internalRoot = u;
}
Ft.prototype.render = pi.prototype.render = function (u) {
  var e = this._internalRoot;
  if (e === null) throw Error(A(409));
  gt(u, e, null, null);
};
Ft.prototype.unmount = pi.prototype.unmount = function () {
  var u = this._internalRoot;
  if (u !== null) {
    this._internalRoot = null;
    var e = u.containerInfo;
    t0(function () {
      gt(null, u, null, null);
    }),
      (e[pu] = null);
  }
};
function Ft(u) {
  this._internalRoot = u;
}
Ft.prototype.unstable_scheduleHydration = function (u) {
  if (u) {
    var e = Jo();
    u = { blockedOn: null, target: u, priority: e };
    for (var t = 0; t < _u.length && e !== 0 && e < _u[t].priority; t++);
    _u.splice(t, 0, u), t === 0 && ea(u);
  }
};
function Di(u) {
  return !(!u || (u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11));
}
function yt(u) {
  return !(
    !u ||
    (u.nodeType !== 1 &&
      u.nodeType !== 9 &&
      u.nodeType !== 11 &&
      (u.nodeType !== 8 || u.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pl() {}
function bf(u, e, t, n, r) {
  if (r) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var c = Ke(l);
        i.call(c);
      };
    }
    var l = Fs(e, n, u, 0, null, !1, !1, "", Pl);
    return (
      (u._reactRootContainer = l),
      (u[pu] = l.current),
      A3(u.nodeType === 8 ? u.parentNode : u),
      t0(),
      l
    );
  }
  for (; (r = u.lastChild); ) u.removeChild(r);
  if (typeof n == "function") {
    var o = n;
    n = function () {
      var c = Ke(s);
      o.call(c);
    };
  }
  var s = fi(u, 0, !1, null, null, !1, !1, "", Pl);
  return (
    (u._reactRootContainer = s),
    (u[pu] = s.current),
    A3(u.nodeType === 8 ? u.parentNode : u),
    t0(function () {
      gt(e, s, t, n);
    }),
    s
  );
}
function Ct(u, e, t, n, r) {
  var i = t._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Ke(l);
        o.call(s);
      };
    }
    gt(e, l, u, r);
  } else l = bf(t, e, u, r, n);
  return Ke(l);
}
Go = function (u) {
  switch (u.tag) {
    case 3:
      var e = u.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = l3(e.pendingLanes);
        t !== 0 &&
          (Tr(e, t | 1),
          P4(e, i4()),
          (U & 6) === 0 && (($0 = i4() + 500), Wu()));
      }
      break;
    case 13:
      t0(function () {
        var n = Du(u, 1);
        if (n !== null) {
          var r = C4();
          Z4(n, u, 1, r);
        }
      }),
        Ei(u, 1);
  }
};
Lr = function (u) {
  if (u.tag === 13) {
    var e = Du(u, 134217728);
    if (e !== null) {
      var t = C4();
      Z4(e, u, 134217728, t);
    }
    Ei(u, 134217728);
  }
};
Zo = function (u) {
  if (u.tag === 13) {
    var e = Lu(u),
      t = Du(u, e);
    if (t !== null) {
      var n = C4();
      Z4(t, u, e, n);
    }
    Ei(u, e);
  }
};
Jo = function () {
  return V;
};
ua = function (u, e) {
  var t = V;
  try {
    return (V = u), e();
  } finally {
    V = t;
  }
};
xn = function (u, e, t) {
  switch (e) {
    case "input":
      if ((yn(u, t), (e = t.name), t.type === "radio" && e != null)) {
        for (t = u; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < t.length;
          e++
        ) {
          var n = t[e];
          if (n !== u && n.form === u.form) {
            var r = Et(n);
            if (!r) throw Error(A(90));
            Po(n), yn(n, r);
          }
        }
      }
      break;
    case "textarea":
      bo(u, t);
      break;
    case "select":
      (e = t.value), e != null && S0(u, !!t.multiple, e, !1);
  }
};
$o = ai;
Io = t0;
var Tf = { usingClientEntryPoint: !1, Events: [$3, m0, Et, Mo, jo, ai] },
  t3 = {
    findFiberByHostInstance: qu,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Lf = {
    bundleType: t3.bundleType,
    version: t3.version,
    rendererPackageName: t3.rendererPackageName,
    rendererConfig: t3.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vu.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (u) {
      return (u = Uo(u)), u === null ? null : u.stateNode;
    },
    findFiberByHostInstance: t3.findFiberByHostInstance || Nf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var se = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!se.isDisabled && se.supportsFiber)
    try {
      (st = se.inject(Lf)), (nu = se);
    } catch {}
}
z4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tf;
z4.createPortal = function (u, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Di(e)) throw Error(A(200));
  return Pf(u, e, null, t);
};
z4.createRoot = function (u, e) {
  if (!Di(u)) throw Error(A(299));
  var t = !1,
    n = "",
    r = ys;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (t = !0),
      e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = fi(u, 1, !1, null, null, t, !1, n, r)),
    (u[pu] = e.current),
    A3(u.nodeType === 8 ? u.parentNode : u),
    new pi(e)
  );
};
z4.findDOMNode = function (u) {
  if (u == null) return null;
  if (u.nodeType === 1) return u;
  var e = u._reactInternals;
  if (e === void 0)
    throw typeof u.render == "function"
      ? Error(A(188))
      : ((u = Object.keys(u).join(",")), Error(A(268, u)));
  return (u = Uo(e)), (u = u === null ? null : u.stateNode), u;
};
z4.flushSync = function (u) {
  return t0(u);
};
z4.hydrate = function (u, e, t) {
  if (!yt(e)) throw Error(A(200));
  return Ct(null, u, e, !0, t);
};
z4.hydrateRoot = function (u, e, t) {
  if (!Di(u)) throw Error(A(405));
  var n = (t != null && t.hydratedSources) || null,
    r = !1,
    i = "",
    l = ys;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (e = Fs(e, null, u, 1, t != null ? t : null, r, !1, i, l)),
    (u[pu] = e.current),
    A3(u),
    n)
  )
    for (u = 0; u < n.length; u++)
      (t = n[u]),
        (r = t._getVersion),
        (r = r(t._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [t, r])
          : e.mutableSourceEagerHydrationData.push(t, r);
  return new Ft(e);
};
z4.render = function (u, e, t) {
  if (!yt(e)) throw Error(A(200));
  return Ct(null, u, e, !1, t);
};
z4.unmountComponentAtNode = function (u) {
  if (!yt(u)) throw Error(A(40));
  return u._reactRootContainer
    ? (t0(function () {
        Ct(null, null, u, !1, function () {
          (u._reactRootContainer = null), (u[pu] = null);
        });
      }),
      !0)
    : !1;
};
z4.unstable_batchedUpdates = ai;
z4.unstable_renderSubtreeIntoContainer = function (u, e, t, n) {
  if (!yt(t)) throw Error(A(200));
  if (u == null || u._reactInternals === void 0) throw Error(A(38));
  return Ct(u, e, t, !1, n);
};
z4.version = "18.3.1-next-f1338f8080-20240426";
(function (u) {
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  e(), (u.exports = z4);
})(at);
const Rf = gr(at.exports),
  zf = Do({ __proto__: null, default: Rf }, [at.exports]);
var Cs,
  Nl = at.exports;
(Cs = Nl.createRoot), Nl.hydrateRoot;
const Mf = "_root_j22i8_71",
  jf = { root: Mf },
  $f = "_styleResets_ujemy_1",
  If = { styleResets: $f };
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function T3() {
  return (
    (T3 = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
          }
          return u;
        }),
    T3.apply(this, arguments)
  );
}
var ku;
(function (u) {
  (u.Pop = "POP"), (u.Push = "PUSH"), (u.Replace = "REPLACE");
})(ku || (ku = {}));
const bl = "popstate";
function Hf(u) {
  u === void 0 && (u = {});
  function e(r, i) {
    let {
      pathname: l = "/",
      search: o = "",
      hash: s = "",
    } = l0(r.location.hash.substr(1));
    return (
      !l.startsWith("/") && !l.startsWith(".") && (l = "/" + l),
      ar(
        "",
        { pathname: l, search: o, hash: s },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function t(r, i) {
    let l = r.document.querySelector("base"),
      o = "";
    if (l && l.getAttribute("href")) {
      let s = r.location.href,
        c = s.indexOf("#");
      o = c === -1 ? s : s.slice(0, c);
    }
    return o + "#" + (typeof i == "string" ? i : Ye(i));
  }
  function n(r, i) {
    hi(
      r.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return Uf(e, t, n, u);
}
function a4(u, e) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(e);
}
function hi(u, e) {
  if (!u) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function Wf() {
  return Math.random().toString(36).substr(2, 8);
}
function Tl(u, e) {
  return { usr: u.state, key: u.key, idx: e };
}
function ar(u, e, t, n) {
  return (
    t === void 0 && (t = null),
    T3(
      { pathname: typeof u == "string" ? u : u.pathname, search: "", hash: "" },
      typeof e == "string" ? l0(e) : e,
      { state: t, key: (e && e.key) || n || Wf() }
    )
  );
}
function Ye(u) {
  let { pathname: e = "/", search: t = "", hash: n = "" } = u;
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function l0(u) {
  let e = {};
  if (u) {
    let t = u.indexOf("#");
    t >= 0 && ((e.hash = u.substr(t)), (u = u.substr(0, t)));
    let n = u.indexOf("?");
    n >= 0 && ((e.search = u.substr(n)), (u = u.substr(0, n))),
      u && (e.pathname = u);
  }
  return e;
}
function Uf(u, e, t, n) {
  n === void 0 && (n = {});
  let { window: r = document.defaultView, v5Compat: i = !1 } = n,
    l = r.history,
    o = ku.Pop,
    s = null,
    c = D();
  c == null && ((c = 0), l.replaceState(T3({}, l.state, { idx: c }), ""));
  function D() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    o = ku.Pop;
    let F = D(),
      E = F == null ? null : F - c;
    (c = F), s && s({ action: o, location: m.location, delta: E });
  }
  function p(F, E) {
    o = ku.Push;
    let d = ar(m.location, F, E);
    t && t(d, F), (c = D() + 1);
    let h = Tl(d, c),
      g = m.createHref(d);
    try {
      l.pushState(h, "", g);
    } catch (y) {
      if (y instanceof DOMException && y.name === "DataCloneError") throw y;
      r.location.assign(g);
    }
    i && s && s({ action: o, location: m.location, delta: 1 });
  }
  function v(F, E) {
    o = ku.Replace;
    let d = ar(m.location, F, E);
    t && t(d, F), (c = D());
    let h = Tl(d, c),
      g = m.createHref(d);
    l.replaceState(h, "", g),
      i && s && s({ action: o, location: m.location, delta: 0 });
  }
  function B(F) {
    let E = r.location.origin !== "null" ? r.location.origin : r.location.href,
      d = typeof F == "string" ? F : Ye(F);
    return (
      (d = d.replace(/ $/, "%20")),
      a4(
        E,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, E)
    );
  }
  let m = {
    get action() {
      return o;
    },
    get location() {
      return u(r, l);
    },
    listen(F) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(bl, f),
        (s = F),
        () => {
          r.removeEventListener(bl, f), (s = null);
        }
      );
    },
    createHref(F) {
      return e(r, F);
    },
    createURL: B,
    encodeLocation(F) {
      let E = B(F);
      return { pathname: E.pathname, search: E.search, hash: E.hash };
    },
    push: p,
    replace: v,
    go(F) {
      return l.go(F);
    },
  };
  return m;
}
var Ll;
(function (u) {
  (u.data = "data"),
    (u.deferred = "deferred"),
    (u.redirect = "redirect"),
    (u.error = "error");
})(Ll || (Ll = {}));
function Vf(u, e, t) {
  return t === void 0 && (t = "/"), Qf(u, e, t, !1);
}
function Qf(u, e, t, n) {
  let r = typeof e == "string" ? l0(e) : e,
    i = vi(r.pathname || "/", t);
  if (i == null) return null;
  let l = _s(u);
  qf(l);
  let o = null;
  for (let s = 0; o == null && s < l.length; ++s) {
    let c = r1(i);
    o = t1(l[s], c, n);
  }
  return o;
}
function _s(u, e, t, n) {
  e === void 0 && (e = []), t === void 0 && (t = []), n === void 0 && (n = "");
  let r = (i, l, o) => {
    let s = {
      relativePath: o === void 0 ? i.path || "" : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (a4(
        s.relativePath.startsWith(n),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(n.length)));
    let c = zu([n, s.relativePath]),
      D = t.concat(s);
    i.children &&
      i.children.length > 0 &&
      (a4(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      _s(i.children, e, D, c)),
      !(i.path == null && !i.index) &&
        e.push({ path: c, score: u1(c, i.index), routesMeta: D });
  };
  return (
    u.forEach((i, l) => {
      var o;
      if (i.path === "" || !((o = i.path) != null && o.includes("?"))) r(i, l);
      else for (let s of As(i.path)) r(i, l, s);
    }),
    e
  );
}
function As(u) {
  let e = u.split("/");
  if (e.length === 0) return [];
  let [t, ...n] = e,
    r = t.endsWith("?"),
    i = t.replace(/\?$/, "");
  if (n.length === 0) return r ? [i, ""] : [i];
  let l = As(n.join("/")),
    o = [];
  return (
    o.push(...l.map((s) => (s === "" ? i : [i, s].join("/")))),
    r && o.push(...l),
    o.map((s) => (u.startsWith("/") && s === "" ? "/" : s))
  );
}
function qf(u) {
  u.sort((e, t) =>
    e.score !== t.score
      ? t.score - e.score
      : e1(
          e.routesMeta.map((n) => n.childrenIndex),
          t.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const Kf = /^:[\w-]+$/,
  Yf = 3,
  Xf = 2,
  Gf = 1,
  Zf = 10,
  Jf = -2,
  Rl = (u) => u === "*";
function u1(u, e) {
  let t = u.split("/"),
    n = t.length;
  return (
    t.some(Rl) && (n += Jf),
    e && (n += Xf),
    t
      .filter((r) => !Rl(r))
      .reduce((r, i) => r + (Kf.test(i) ? Yf : i === "" ? Gf : Zf), n)
  );
}
function e1(u, e) {
  return u.length === e.length && u.slice(0, -1).every((n, r) => n === e[r])
    ? u[u.length - 1] - e[e.length - 1]
    : 0;
}
function t1(u, e, t) {
  t === void 0 && (t = !1);
  let { routesMeta: n } = u,
    r = {},
    i = "/",
    l = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      c = o === n.length - 1,
      D = i === "/" ? e : e.slice(i.length) || "/",
      f = zl(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        D
      ),
      p = s.route;
    if (
      (!f &&
        c &&
        t &&
        !n[n.length - 1].route.index &&
        (f = zl(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          D
        )),
      !f)
    )
      return null;
    Object.assign(r, f.params),
      l.push({
        params: r,
        pathname: zu([i, f.pathname]),
        pathnameBase: a1(zu([i, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (i = zu([i, f.pathnameBase]));
  }
  return l;
}
function zl(u, e) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [t, n] = n1(u.path, u.caseSensitive, u.end),
    r = e.match(t);
  if (!r) return null;
  let i = r[0],
    l = i.replace(/(.)\/+$/, "$1"),
    o = r.slice(1);
  return {
    params: n.reduce((c, D, f) => {
      let { paramName: p, isOptional: v } = D;
      if (p === "*") {
        let m = o[f] || "";
        l = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const B = o[f];
      return (
        v && !B ? (c[p] = void 0) : (c[p] = (B || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: u,
  };
}
function n1(u, e, t) {
  e === void 0 && (e = !1),
    t === void 0 && (t = !0),
    hi(
      u === "*" || !u.endsWith("*") || u.endsWith("/*"),
      'Route path "' +
        u +
        '" will be treated as if it were ' +
        ('"' + u.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + u.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    r =
      "^" +
      u
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, o, s) => (
            n.push({ paramName: o, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    u.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (r += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : t
      ? (r += "\\/*$")
      : u !== "" && u !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, e ? void 0 : "i"), n]
  );
}
function r1(u) {
  try {
    return u
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      hi(
        !1,
        'The URL path "' +
          u +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      u
    );
  }
}
function vi(u, e) {
  if (e === "/") return u;
  if (!u.toLowerCase().startsWith(e.toLowerCase())) return null;
  let t = e.endsWith("/") ? e.length - 1 : e.length,
    n = u.charAt(t);
  return n && n !== "/" ? null : u.slice(t) || "/";
}
function i1(u, e) {
  e === void 0 && (e = "/");
  let {
    pathname: t,
    search: n = "",
    hash: r = "",
  } = typeof u == "string" ? l0(u) : u;
  return {
    pathname: t ? (t.startsWith("/") ? t : l1(t, e)) : e,
    search: s1(n),
    hash: c1(r),
  };
}
function l1(u, e) {
  let t = e.replace(/\/+$/, "").split("/");
  return (
    u.split("/").forEach((r) => {
      r === ".." ? t.length > 1 && t.pop() : r !== "." && t.push(r);
    }),
    t.length > 1 ? t.join("/") : "/"
  );
}
function rn(u, e, t, n) {
  return (
    "Cannot include a '" +
    u +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + t + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function o1(u) {
  return u.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Ss(u, e) {
  let t = o1(u);
  return e
    ? t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase))
    : t.map((n) => n.pathnameBase);
}
function ws(u, e, t, n) {
  n === void 0 && (n = !1);
  let r;
  typeof u == "string"
    ? (r = l0(u))
    : ((r = T3({}, u)),
      a4(
        !r.pathname || !r.pathname.includes("?"),
        rn("?", "pathname", "search", r)
      ),
      a4(
        !r.pathname || !r.pathname.includes("#"),
        rn("#", "pathname", "hash", r)
      ),
      a4(!r.search || !r.search.includes("#"), rn("#", "search", "hash", r)));
  let i = u === "" || r.pathname === "",
    l = i ? "/" : r.pathname,
    o;
  if (l == null) o = t;
  else {
    let f = e.length - 1;
    if (!n && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      r.pathname = p.join("/");
    }
    o = f >= 0 ? e[f] : "/";
  }
  let s = i1(r, o),
    c = l && l !== "/" && l.endsWith("/"),
    D = (i || l === ".") && t.endsWith("/");
  return !s.pathname.endsWith("/") && (c || D) && (s.pathname += "/"), s;
}
const zu = (u) => u.join("/").replace(/\/\/+/g, "/"),
  a1 = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"),
  s1 = (u) => (!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u),
  c1 = (u) => (!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u);
function d1(u) {
  return (
    u != null &&
    typeof u.status == "number" &&
    typeof u.statusText == "string" &&
    typeof u.internal == "boolean" &&
    "data" in u
  );
}
const f1 = ["post", "put", "patch", "delete"];
[...f1];
var _t = { exports: {} },
  At = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var E1 = N.exports,
  p1 = Symbol.for("react.element"),
  D1 = Symbol.for("react.fragment"),
  h1 = Object.prototype.hasOwnProperty,
  v1 = E1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  B1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ks(u, e, t) {
  var n,
    r = {},
    i = null,
    l = null;
  t !== void 0 && (i = "" + t),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (l = e.ref);
  for (n in e) h1.call(e, n) && !B1.hasOwnProperty(n) && (r[n] = e[n]);
  if (u && u.defaultProps)
    for (n in ((e = u.defaultProps), e)) r[n] === void 0 && (r[n] = e[n]);
  return {
    $$typeof: p1,
    type: u,
    key: i,
    ref: l,
    props: r,
    _owner: v1.current,
  };
}
At.Fragment = D1;
At.jsx = ks;
At.jsxs = ks;
(function (u) {
  u.exports = At;
})(_t);
const Bi = _t.exports.Fragment,
  a = _t.exports.jsx,
  x = _t.exports.jsxs;
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function L3() {
  return (
    (L3 = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
          }
          return u;
        }),
    L3.apply(this, arguments)
  );
}
const mi = N.exports.createContext(null),
  m1 = N.exports.createContext(null),
  o0 = N.exports.createContext(null),
  St = N.exports.createContext(null),
  a0 = N.exports.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xs = N.exports.createContext(null);
function g1(u, e) {
  let { relative: t } = e === void 0 ? {} : e;
  H3() || a4(!1);
  let { basename: n, navigator: r } = N.exports.useContext(o0),
    { hash: i, pathname: l, search: o } = Ps(u, { relative: t }),
    s = l;
  return (
    n !== "/" && (s = l === "/" ? n : zu([n, l])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function H3() {
  return N.exports.useContext(St) != null;
}
function wt() {
  return H3() || a4(!1), N.exports.useContext(St).location;
}
function Os(u) {
  N.exports.useContext(o0).static || N.exports.useLayoutEffect(u);
}
function F1() {
  let { isDataRoute: u } = N.exports.useContext(a0);
  return u ? T1() : y1();
}
function y1() {
  H3() || a4(!1);
  let u = N.exports.useContext(mi),
    { basename: e, future: t, navigator: n } = N.exports.useContext(o0),
    { matches: r } = N.exports.useContext(a0),
    { pathname: i } = wt(),
    l = JSON.stringify(Ss(r, t.v7_relativeSplatPath)),
    o = N.exports.useRef(!1);
  return (
    Os(() => {
      o.current = !0;
    }),
    N.exports.useCallback(
      function (c, D) {
        if ((D === void 0 && (D = {}), !o.current)) return;
        if (typeof c == "number") {
          n.go(c);
          return;
        }
        let f = ws(c, JSON.parse(l), i, D.relative === "path");
        u == null &&
          e !== "/" &&
          (f.pathname = f.pathname === "/" ? e : zu([e, f.pathname])),
          (D.replace ? n.replace : n.push)(f, D.state, D);
      },
      [e, n, l, i, u]
    )
  );
}
function Ps(u, e) {
  let { relative: t } = e === void 0 ? {} : e,
    { future: n } = N.exports.useContext(o0),
    { matches: r } = N.exports.useContext(a0),
    { pathname: i } = wt(),
    l = JSON.stringify(Ss(r, n.v7_relativeSplatPath));
  return N.exports.useMemo(
    () => ws(u, JSON.parse(l), i, t === "path"),
    [u, l, i, t]
  );
}
function C1(u, e) {
  return _1(u, e);
}
function _1(u, e, t, n) {
  H3() || a4(!1);
  let { navigator: r } = N.exports.useContext(o0),
    { matches: i } = N.exports.useContext(a0),
    l = i[i.length - 1],
    o = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let c = wt(),
    D;
  if (e) {
    var f;
    let F = typeof e == "string" ? l0(e) : e;
    s === "/" ||
      ((f = F.pathname) == null ? void 0 : f.startsWith(s)) ||
      a4(!1),
      (D = F);
  } else D = c;
  let p = D.pathname || "/",
    v = p;
  if (s !== "/") {
    let F = s.replace(/^\//, "").split("/");
    v = "/" + p.replace(/^\//, "").split("/").slice(F.length).join("/");
  }
  let B = Vf(u, { pathname: v }),
    m = x1(
      B &&
        B.map((F) =>
          Object.assign({}, F, {
            params: Object.assign({}, o, F.params),
            pathname: zu([
              s,
              r.encodeLocation
                ? r.encodeLocation(F.pathname).pathname
                : F.pathname,
            ]),
            pathnameBase:
              F.pathnameBase === "/"
                ? s
                : zu([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(F.pathnameBase).pathname
                      : F.pathnameBase,
                  ]),
          })
        ),
      i,
      t,
      n
    );
  return e && m
    ? a(St.Provider, {
        value: {
          location: L3(
            {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
            },
            D
          ),
          navigationType: ku.Pop,
        },
        children: m,
      })
    : m;
}
function A1() {
  let u = b1(),
    e = d1(u)
      ? u.status + " " + u.statusText
      : u instanceof Error
      ? u.message
      : JSON.stringify(u),
    t = u instanceof Error ? u.stack : null;
  return x(Bi, {
    children: [
      a("h2", { children: "Unexpected Application Error!" }),
      a("h3", { style: { fontStyle: "italic" }, children: e }),
      t
        ? a("pre", {
            style: {
              padding: "0.5rem",
              backgroundColor: "rgba(200,200,200, 0.5)",
            },
            children: t,
          })
        : null,
      null,
    ],
  });
}
const S1 = a(A1, {});
class w1 extends N.exports.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ||
      (t.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : t.error,
          location: t.location,
          revalidation: e.revalidation || t.revalidation,
        };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0
      ? a(a0.Provider, {
          value: this.props.routeContext,
          children: a(xs.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        })
      : this.props.children;
  }
}
function k1(u) {
  let { routeContext: e, match: t, children: n } = u,
    r = N.exports.useContext(mi);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    a(a0.Provider, { value: e, children: n })
  );
}
function x1(u, e, t, n) {
  var r;
  if (
    (e === void 0 && (e = []),
    t === void 0 && (t = null),
    n === void 0 && (n = null),
    u == null)
  ) {
    var i;
    if (!t) return null;
    if (t.errors) u = t.matches;
    else if (
      (i = n) != null &&
      i.v7_partialHydration &&
      e.length === 0 &&
      !t.initialized &&
      t.matches.length > 0
    )
      u = t.matches;
    else return null;
  }
  let l = u,
    o = (r = t) == null ? void 0 : r.errors;
  if (o != null) {
    let D = l.findIndex(
      (f) => f.route.id && (o == null ? void 0 : o[f.route.id]) !== void 0
    );
    D >= 0 || a4(!1), (l = l.slice(0, Math.min(l.length, D + 1)));
  }
  let s = !1,
    c = -1;
  if (t && n && n.v7_partialHydration)
    for (let D = 0; D < l.length; D++) {
      let f = l[D];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = D),
        f.route.id)
      ) {
        let { loaderData: p, errors: v } = t,
          B =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || B) {
          (s = !0), c >= 0 ? (l = l.slice(0, c + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((D, f, p) => {
    let v,
      B = !1,
      m = null,
      F = null;
    t &&
      ((v = o && f.route.id ? o[f.route.id] : void 0),
      (m = f.route.errorElement || S1),
      s &&
        (c < 0 && p === 0
          ? (L1("route-fallback", !1), (B = !0), (F = null))
          : c === p &&
            ((B = !0), (F = f.route.hydrateFallbackElement || null))));
    let E = e.concat(l.slice(0, p + 1)),
      d = () => {
        let h;
        return (
          v
            ? (h = m)
            : B
            ? (h = F)
            : f.route.Component
            ? (h = N.exports.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = D),
          a(k1, {
            match: f,
            routeContext: { outlet: D, matches: E, isDataRoute: t != null },
            children: h,
          })
        );
      };
    return t && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? a(w1, {
          location: t.location,
          revalidation: t.revalidation,
          component: m,
          error: v,
          children: d(),
          routeContext: { outlet: null, matches: E, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Ns = (function (u) {
    return (
      (u.UseBlocker = "useBlocker"),
      (u.UseRevalidator = "useRevalidator"),
      (u.UseNavigateStable = "useNavigate"),
      u
    );
  })(Ns || {}),
  Xe = (function (u) {
    return (
      (u.UseBlocker = "useBlocker"),
      (u.UseLoaderData = "useLoaderData"),
      (u.UseActionData = "useActionData"),
      (u.UseRouteError = "useRouteError"),
      (u.UseNavigation = "useNavigation"),
      (u.UseRouteLoaderData = "useRouteLoaderData"),
      (u.UseMatches = "useMatches"),
      (u.UseRevalidator = "useRevalidator"),
      (u.UseNavigateStable = "useNavigate"),
      (u.UseRouteId = "useRouteId"),
      u
    );
  })(Xe || {});
function O1(u) {
  let e = N.exports.useContext(mi);
  return e || a4(!1), e;
}
function P1(u) {
  let e = N.exports.useContext(m1);
  return e || a4(!1), e;
}
function N1(u) {
  let e = N.exports.useContext(a0);
  return e || a4(!1), e;
}
function bs(u) {
  let e = N1(),
    t = e.matches[e.matches.length - 1];
  return t.route.id || a4(!1), t.route.id;
}
function b1() {
  var u;
  let e = N.exports.useContext(xs),
    t = P1(Xe.UseRouteError),
    n = bs(Xe.UseRouteError);
  return e !== void 0 ? e : (u = t.errors) == null ? void 0 : u[n];
}
function T1() {
  let { router: u } = O1(Ns.UseNavigateStable),
    e = bs(Xe.UseNavigateStable),
    t = N.exports.useRef(!1);
  return (
    Os(() => {
      t.current = !0;
    }),
    N.exports.useCallback(
      function (r, i) {
        i === void 0 && (i = {}),
          t.current &&
            (typeof r == "number"
              ? u.navigate(r)
              : u.navigate(r, L3({ fromRouteId: e }, i)));
      },
      [u, e]
    )
  );
}
const Ml = {};
function L1(u, e, t) {
  !e && !Ml[u] && (Ml[u] = !0);
}
const R1 = "startTransition";
Ar[R1];
function Ce(u) {
  a4(!1);
}
function z1(u) {
  let {
    basename: e = "/",
    children: t = null,
    location: n,
    navigationType: r = ku.Pop,
    navigator: i,
    static: l = !1,
    future: o,
  } = u;
  H3() && a4(!1);
  let s = e.replace(/^\/*/, "/"),
    c = N.exports.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: l,
        future: L3({ v7_relativeSplatPath: !1 }, o),
      }),
      [s, o, i, l]
    );
  typeof n == "string" && (n = l0(n));
  let {
      pathname: D = "/",
      search: f = "",
      hash: p = "",
      state: v = null,
      key: B = "default",
    } = n,
    m = N.exports.useMemo(() => {
      let F = vi(D, s);
      return F == null
        ? null
        : {
            location: { pathname: F, search: f, hash: p, state: v, key: B },
            navigationType: r,
          };
    }, [s, D, f, p, v, B, r]);
  return m == null
    ? null
    : a(o0.Provider, {
        value: c,
        children: a(St.Provider, { children: t, value: m }),
      });
}
function M1(u) {
  let { children: e, location: t } = u;
  return C1(sr(e), t);
}
new Promise(() => {});
function sr(u, e) {
  e === void 0 && (e = []);
  let t = [];
  return (
    N.exports.Children.forEach(u, (n, r) => {
      if (!N.exports.isValidElement(n)) return;
      let i = [...e, r];
      if (n.type === N.exports.Fragment) {
        t.push.apply(t, sr(n.props.children, i));
        return;
      }
      n.type !== Ce && a4(!1), !n.props.index || !n.props.children || a4(!1);
      let l = {
        id: n.props.id || i.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (l.children = sr(n.props.children, i)), t.push(l);
    }),
    t
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function j1(u, e) {
  if (u == null) return {};
  var t = {},
    n = Object.keys(u),
    r,
    i;
  for (i = 0; i < n.length; i++)
    (r = n[i]), !(e.indexOf(r) >= 0) && (t[r] = u[r]);
  return t;
}
function $1(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function I1(u, e) {
  return u.button === 0 && (!e || e === "_self") && !$1(u);
}
const H1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  W1 = "6";
try {
  window.__reactRouterVersion = W1;
} catch {}
const U1 = "startTransition",
  jl = Ar[U1],
  V1 = "flushSync";
zf[V1];
const Q1 = "useId";
Ar[Q1];
function q1(u) {
  let { basename: e, children: t, future: n, window: r } = u,
    i = N.exports.useRef();
  i.current == null && (i.current = Hf({ window: r, v5Compat: !0 }));
  let l = i.current,
    [o, s] = N.exports.useState({ action: l.action, location: l.location }),
    { v7_startTransition: c } = n || {},
    D = N.exports.useCallback(
      (f) => {
        c && jl ? jl(() => s(f)) : s(f);
      },
      [s, c]
    );
  return (
    N.exports.useLayoutEffect(() => l.listen(D), [l, D]),
    a(z1, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l,
      future: n,
    })
  );
}
const K1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Y1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  F4 = N.exports.forwardRef(function (e, t) {
    let {
        onClick: n,
        relative: r,
        reloadDocument: i,
        replace: l,
        state: o,
        target: s,
        to: c,
        preventScrollReset: D,
        unstable_viewTransition: f,
      } = e,
      p = j1(e, H1),
      { basename: v } = N.exports.useContext(o0),
      B,
      m = !1;
    if (typeof c == "string" && Y1.test(c) && ((B = c), K1))
      try {
        let h = new URL(window.location.href),
          g = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c),
          y = vi(g.pathname, v);
        g.origin === h.origin && y != null
          ? (c = y + g.search + g.hash)
          : (m = !0);
      } catch {}
    let F = g1(c, { relative: r }),
      E = X1(c, {
        replace: l,
        state: o,
        target: s,
        preventScrollReset: D,
        relative: r,
        unstable_viewTransition: f,
      });
    function d(h) {
      n && n(h), h.defaultPrevented || E(h);
    }
    return a("a", {
      ...p,
      href: B || F,
      onClick: m || i ? n : d,
      ref: t,
      target: s,
    });
  });
var $l;
(function (u) {
  (u.UseScrollRestoration = "useScrollRestoration"),
    (u.UseSubmit = "useSubmit"),
    (u.UseSubmitFetcher = "useSubmitFetcher"),
    (u.UseFetcher = "useFetcher"),
    (u.useViewTransitionState = "useViewTransitionState");
})($l || ($l = {}));
var Il;
(function (u) {
  (u.UseFetcher = "useFetcher"),
    (u.UseFetchers = "useFetchers"),
    (u.UseScrollRestoration = "useScrollRestoration");
})(Il || (Il = {}));
function X1(u, e) {
  let {
      target: t,
      replace: n,
      state: r,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: o,
    } = e === void 0 ? {} : e,
    s = F1(),
    c = wt(),
    D = Ps(u, { relative: l });
  return N.exports.useCallback(
    (f) => {
      if (I1(f, t)) {
        f.preventDefault();
        let p = n !== void 0 ? n : Ye(c) === Ye(D);
        s(u, {
          replace: p,
          state: r,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: o,
        });
      }
    },
    [c, s, D, n, r, t, u, i, l, o]
  );
}
function gi({ full: u, transparent: e }) {
  const [t, n] = N.exports.useState(!1),
    r = document.querySelector("body"),
    i = {
      true: [
        "header_transparent",
        "header__button_transparent",
        "header__logo_invert",
        "header__navigation_transparent",
        "header_absolute",
      ],
      false: ["", "", "", ""],
    },
    l = {
      burger: "header__burger",
      burger_pressed: "header__burger_pressed",
      menu_showed: "header__menu_showed",
    },
    [o, s] = N.exports.useState(l.burger),
    [c, D] = N.exports.useState(""),
    f = () => {
      o === l.burger ? s(l.burger_pressed) : s(l.burger),
        n((B) => !B),
        D(t ? "" : "header__menu_showed");
    };
  function p(B) {
    t && B.preventDefault();
  }
  function v(B) {
    t && { 37: 1, 38: 1, 39: 1, 40: 1 }[B.keyCode] && B.preventDefault();
  }
  return (
    N.exports.useEffect(
      () => (
        t
          ? (window.addEventListener("wheel", p, { passive: !1 }),
            window.addEventListener("scroll", p, { passive: !1 }),
            window.addEventListener("keydown", v, !1),
            u ||
              ((r.style.position = "fixed"),
              (r.style.overflowY = "scroll"),
              (r.style.width = "100%")))
          : (window.removeEventListener("wheel", p),
            window.removeEventListener("scroll", p),
            window.removeEventListener("keydown", v),
            (r.style.position = "relative"),
            (r.style.overflowY = "auto")),
        () => {
          window.removeEventListener("wheel", p),
            window.removeEventListener("scroll", p),
            window.removeEventListener("keydown", v);
        }
      ),
      [t]
    ),
    x("header", {
      className: `header ${i[e][0]}`,
      children: [
        a("div", {
          className: `header__menu ${c}`,
          children: x("div", {
            className: "header-menu__container",
            children: [
              a("div", {
                className: "header-menu__header",
                children: x("div", {
                  className: "header__buttons",
                  children: [
                    a("button", {
                      className: `header__button ${i[e][1]}`,
                      children: "Eng",
                    }),
                    a("button", {
                      className: `header__button ${i[e][1]}`,
                      children: a("img", {
                        src: "./images/icons/change-theme.svg",
                      }),
                    }),
                  ],
                }),
              }),
              a("nav", {
                className: `header-menu__navigation ${i[e][3]}`,
                children: x("ul", {
                  className: "header-menu-navigation__list",
                  children: [
                    a("li", {
                      className: "header-menu-navigation__item",
                      children: x(F4, {
                        to: "/",
                        className: "header-menu-navigation__link",
                        children: [
                          "Ho",
                          a("span", { className: "cursive", children: "me" }),
                        ],
                      }),
                    }),
                    a("li", {
                      className: "header-menu-navigation__item",
                      children: x(F4, {
                        to: "/",
                        className: "header-menu-navigation__link",
                        children: [
                          a("span", { className: "cursive", children: "Ab" }),
                          "out",
                        ],
                      }),
                    }),
                    a("li", {
                      className: "header-menu-navigation__item",
                      children: x(F4, {
                        to: "/",
                        className: "header-menu-navigation__link",
                        children: [
                          "Con",
                          a("span", {
                            className: "cursive",
                            children: "tacts",
                          }),
                        ],
                      }),
                    }),
                    a("li", {
                      className: "header-menu-navigation__item",
                      children: x(F4, {
                        to: "/",
                        className: "header-menu-navigation__link",
                        children: [
                          a("span", { className: "cursive", children: "Hot" }),
                          "els",
                        ],
                      }),
                    }),
                    a("li", {
                      className: "header-menu-navigation__item",
                      children: x(F4, {
                        to: "/",
                        className: "header-menu-navigation__link",
                        children: [
                          "Visa S",
                          a("span", {
                            className: "cursive",
                            children: "ervices",
                          }),
                        ],
                      }),
                    }),
                    a("li", {
                      className: "header-menu-navigation__item",
                      children: x(F4, {
                        to: "/",
                        className: "header-menu-navigation__link",
                        children: [
                          a("span", { className: "cursive", children: "To" }),
                          "urs",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        x("div", {
          className: "header__container",
          children: [
            a(F4, {
              to: "/",
              className: `header__logo ${i[e][2]}`,
              children: a("img", { src: "./images/icons/Logo.svg" }),
            }),
            x("nav", {
              className: `header__navigation ${i[e][3]}`,
              children: [
                x(F4, {
                  to: "/",
                  className: "header-navigation__find-hotel",
                  children: [
                    a("div", {
                      className: `header__button find-hotel__button ${i[e][1]}`,
                      children: a("img", {
                        src: "./images/icons/Airplane.svg",
                      }),
                    }),
                    a("p", {
                      className: "find-hotel__normal",
                      children: "Find a hotel for a trip",
                    }),
                  ],
                }),
                x("div", {
                  className: "header-navigation__main-links",
                  children: [
                    x(F4, {
                      to: "/destinations",
                      className: "header-navigation__link",
                      children: [
                        a("p", { children: "Destinations" }),
                        a("span", { children: "+" }),
                      ],
                    }),
                    x(F4, {
                      to: "/rent",
                      className: "header-navigation__link",
                      children: [
                        a("p", { children: "Rentals" }),
                        a("span", { children: "+" }),
                      ],
                    }),
                    x(F4, {
                      to: "/types",
                      className: "header-navigation__link",
                      children: [
                        a("p", { children: "Types of trips" }),
                        a("span", { children: "+" }),
                      ],
                    }),
                  ],
                }),
                a(F4, {
                  to: "/meet",
                  className: "header-navigation__meet",
                  children: "Meet + Greet Services",
                }),
              ],
            }),
            x("div", {
              className: "header__buttons",
              children: [
                a("button", {
                  className: `header__button ${i[e][1]}`,
                  children: a("img", { src: "./images/icons/Phone.svg" }),
                }),
                a("button", {
                  className: `header__button ${i[e][1]}`,
                  children: a("img", { src: "./images/icons/Email.svg" }),
                }),
                x("button", {
                  className: `header__button ${o} ${i[e][1]}`,
                  onClick: f,
                  children: [
                    a("div", { className: "burger__slice burger__top" }),
                    a("div", { className: "burger__slice burger__middle" }),
                    a("div", { className: "burger__slice burger__bottom" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const G1 = "_Section_1Welcome_330_3149_3lbal_5",
  Z1 = "_full_3lbal_37",
  J1 = "_ManPhoto_330_3150_3lbal_55",
  uE = "_Country_330_3151_3lbal_75",
  eE = "_button_3lbal_107",
  n3 = {
    Section_1Welcome_330_3149: G1,
    full: Z1,
    ManPhoto_330_3150: J1,
    Country_330_3151: uE,
    button: eE,
  };
function $u(u) {
  const e = /\/(.*?)\//g;
  let t = [];
  const n = (o, s, c) => {
    s < c && t.push(o.slice(s, c).trim());
  };
  let r = 0;
  u.replace(e, (o, s, c) => {
    n(u, r, c), (r = c + o.length);
  }),
    n(u, r, u.length);
  const i = (o, s) => `<span class="cursive">${s}</span>`;
  return u.replace(e, i);
}
function tE({ image: u, country: e, isButtonExist: t, full: n }) {
  let r;
  return (
    n && (r = n3.full),
    x("section", {
      className: `${n3.Section_1Welcome_330_3149} ${r} `,
      "data-figma-node": "330:3149",
      children: [
        a("img", {
          className: n3.ManPhoto_330_3150,
          "data-figma-node": "330:3150",
          src: u,
          alt: "",
        }),
        a("h1", {
          className: `${n3.Country_330_3151} title`,
          "data-figma-node": "330:3151",
          dangerouslySetInnerHTML: { __html: $u(e) },
        }),
        t && a("button", { className: n3.button, children: "Explore" }),
      ],
    })
  );
}
function nE({ title: u, places: e, full: t }) {
  let n;
  t && (n = "full");
  let r = 0;
  const i = N.exports.useRef(null),
    l = N.exports.useRef([]),
    o = N.exports.useRef([]);
  N.exports.useEffect(() => {
    (l.current = Array.from(document.querySelectorAll(".slide__location"))),
      (o.current = Array.from(document.querySelectorAll(".circle__slide")));
  }, []),
    N.exports.useEffect(() => {
      const v = (B) => {
        const m = B.target && B.target.parentNode;
        let F;
        m.classList.contains("circle__slide_active") ||
          (m.classList.contains("circle__slide_next")
            ? (F = "next")
            : (F = "prev"),
          p(m),
          f(F),
          D(m));
      };
      return (
        o.current.forEach((B) => {
          !B || B.addEventListener("click", v);
        }),
        () => {
          o.current.forEach((B) => {
            !B || B.removeEventListener("click", v);
          });
        }
      );
    }, []);
  function s() {
    if (!i || !i.current) return;
    const v = r + 60;
    return (
      (r = v),
      (i.current.style.transform = `rotate(${v}deg)`),
      l.current.forEach((B) => {
        B.style.transform = `rotate(${-v}deg)`;
      }),
      v
    );
  }
  function c() {
    if (!i || !i.current) return;
    const v = r - 60;
    return (
      (r = v),
      (i.current.style.transform = `rotate(${v}deg)`),
      l.current.forEach((B) => {
        B.style.transform = `rotate(${-v}deg)`;
      }),
      v
    );
  }
  function D(v) {
    var E, d, h, g, y, _, w, P;
    let B = +v.classList.value.slice(v.classList.value.indexOf("-") + 1)[0];
    const m = {
        1: [6, 2, 3],
        2: [1, 3, 4],
        3: [2, 4, 5],
        4: [3, 5, 6],
        5: [4, 6, 1],
        6: [5, 1, 2],
      },
      F = {
        1: [2, 6, 5],
        2: [3, 1, 6],
        3: [4, 2, 1],
        4: [5, 3, 2],
        5: [6, 4, 3],
        6: [1, 5, 4],
      };
    v.classList.contains("circle__slide_next") &&
      (v.classList.remove("circle__slide_next"),
      v.classList.add("circle__slide_active"),
      (E = document.querySelector(`.circle__slide-${m[B][0]}`)) == null ||
        E.classList.add("circle__slide_next"),
      (d = document.querySelector(`.circle__slide-${m[B][1]}`)) == null ||
        d.classList.remove("circle__slide_active"),
      (h = document.querySelector(`.circle__slide-${m[B][1]}`)) == null ||
        h.classList.add("circle__slide_prev"),
      (g = document.querySelector(`.circle__slide-${m[B][2]}`)) == null ||
        g.classList.remove("circle__slide_prev")),
      v.classList.contains("circle__slide_prev") &&
        (v.classList.remove("circle__slide_prev"),
        v.classList.add("circle__slide_active"),
        (y = document.querySelector(`.circle__slide-${F[B][0]}`)) == null ||
          y.classList.add("circle__slide_prev"),
        (_ = document.querySelector(`.circle__slide-${F[B][1]}`)) == null ||
          _.classList.remove("circle__slide_active"),
        (w = document.querySelector(`.circle__slide-${F[B][1]}`)) == null ||
          w.classList.add("circle__slide_next"),
        (P = document.querySelector(`.circle__slide-${F[B][2]}`)) == null ||
          P.classList.remove("circle__slide_next"));
  }
  function f(v) {
    const B = document.querySelector(".circle__slide_active");
    if (!B) return;
    let m = +B.classList.value.slice(B.classList.value.indexOf("-") + 1)[0];
    v === "next" && (m -= 1),
      v === "prev" && (m += 1),
      m === 0 && (m = 6),
      m === 7 && (m = 1);
    const F = document.querySelector(".directions__background"),
      E = document.querySelector(".directions-background__image"),
      d = document.querySelector(".directions-background__image_next");
    !F ||
      !E ||
      !d ||
      (v === "next"
        ? (d.classList.remove("prev-slide"), d.classList.add("next-slide"))
        : v === "prev" &&
          (d.classList.remove("next-slide"), d.classList.add("prev-slide")),
      setTimeout(() => {
        d.classList.add("directions-background__image"),
          d.setAttribute("src", `${e[m][3]}`),
          v === "next"
            ? d.classList.add("directions-background__image_animate-from-next")
            : v === "prev" &&
              d.classList.add("directions-background__image_animate-from-prev"),
          setTimeout(() => {
            E.setAttribute("src", `${e[m][3]}`),
              d.classList.add("directions-background__image_current"),
              d.classList.remove("prev-slide"),
              d.classList.remove("next-slide"),
              d.classList.remove(
                "directions-background__image_animate-from-next"
              ),
              d.classList.remove(
                "directions-background__image_animate-from-prev"
              );
          }, 500),
          setTimeout(() => {
            d.classList.remove("directions-background__image_current");
          }, 500);
      }, 10));
  }
  function p(v) {
    v.classList.contains("circle__slide_next") && s(),
      v.classList.contains("circle__slide_prev") && c();
  }
  return x("section", {
    className: `directions noselect ${n}`,
    children: [
      u &&
        a("h2", {
          className: "directions__title title",
          dangerouslySetInnerHTML: { __html: $u(u) },
        }),
      x("div", {
        className: "directions__background",
        children: [
          a("img", {
            className:
              "directions-background__image directions-background__image_current",
            src: e[2][3],
          }),
          a("img", {
            className:
              "directions-background__image directions-background__image_next",
          }),
        ],
      }),
      x("div", {
        className: "direction",
        children: [
          x("div", {
            className: "direction__arrows",
            children: [
              a("img", { src: "./images/circle/circle-arrow.svg", alt: "" }),
              a("img", { src: "./images/circle/circle-arrow.svg", alt: "" }),
              a("img", { src: "./images/circle/circle-arrow.svg", alt: "" }),
              a("img", { src: "./images/circle/circle-arrow.svg", alt: "" }),
            ],
          }),
          x("div", {
            className: "direction__circle",
            ref: i,
            children: [
              x("div", {
                className: "circle__slide circle__slide-1 circle__slide_next",
                children: [
                  x("div", {
                    className: "slide__location",
                    children: [
                      a("img", { src: e[1][2], alt: "" }),
                      x("div", {
                        className: "location__place",
                        children: [
                          a("span", {
                            className: "place__city",
                            children: e[1][0],
                          }),
                          a("span", {
                            className: "place__country",
                            children: e[1][1],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("button", { className: "slide__point" }),
                ],
              }),
              x("div", {
                className: "circle__slide circle__slide-2 circle__slide_active",
                children: [
                  x("div", {
                    className: "slide__location",
                    children: [
                      a("img", { src: e[2][2], alt: "" }),
                      x("div", {
                        className: "location__place",
                        children: [
                          a("span", {
                            className: "place__city",
                            children: e[2][0],
                          }),
                          a("span", {
                            className: "place__country",
                            children: e[2][1],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("button", { className: "slide__point" }),
                ],
              }),
              x("div", {
                className: "circle__slide circle__slide-3 circle__slide_prev",
                children: [
                  x("div", {
                    className: "slide__location",
                    children: [
                      a("img", { src: e[3][2], alt: "" }),
                      x("div", {
                        className: "location__place",
                        children: [
                          a("span", {
                            className: "place__city",
                            children: e[3][0],
                          }),
                          a("span", {
                            className: "place__country",
                            children: e[3][1],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("button", { className: "slide__point" }),
                ],
              }),
              x("div", {
                className: "circle__slide circle__slide-4",
                children: [
                  x("div", {
                    className: "slide__location",
                    children: [
                      a("img", { src: e[4][2], alt: "" }),
                      x("div", {
                        className: "location__place",
                        children: [
                          a("span", {
                            className: "place__city",
                            children: e[4][0],
                          }),
                          a("span", {
                            className: "place__country",
                            children: e[4][1],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("button", { className: "slide__point" }),
                ],
              }),
              x("div", {
                className: "circle__slide circle__slide-5",
                children: [
                  x("div", {
                    className: "slide__location",
                    children: [
                      a("img", { src: e[5][2], alt: "" }),
                      x("div", {
                        className: "location__place",
                        children: [
                          a("span", {
                            className: "place__city",
                            children: e[5][0],
                          }),
                          a("span", {
                            className: "place__country",
                            children: e[5][1],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("button", { className: "slide__point" }),
                ],
              }),
              x("div", {
                className: "circle__slide circle__slide-6",
                children: [
                  x("div", {
                    className: "slide__location",
                    children: [
                      a("img", { src: e[6][2], alt: "" }),
                      x("div", {
                        className: "location__place",
                        children: [
                          a("span", {
                            className: "place__city",
                            children: e[6][0],
                          }),
                          a("span", {
                            className: "place__country",
                            children: e[6][1],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("button", { className: "slide__point" }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const rE = "_hotels_9od1t_1",
  iE = "_title_9od1t_25",
  Hl = { hotels: rE, title: iE };
var Ts = {},
  Ls = {},
  kt = {},
  Rs = {};
(function (u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
  var e = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  u.default = e;
})(Rs);
var lE = "Expected a function",
  Wl = 0 / 0,
  oE = "[object Symbol]",
  aE = /^\s+|\s+$/g,
  sE = /^[-+]0x[0-9a-f]+$/i,
  cE = /^0b[01]+$/i,
  dE = /^0o[0-7]+$/i,
  fE = parseInt,
  EE = typeof Q3 == "object" && Q3 && Q3.Object === Object && Q3,
  pE = typeof self == "object" && self && self.Object === Object && self,
  DE = EE || pE || Function("return this")(),
  hE = Object.prototype,
  vE = hE.toString,
  BE = Math.max,
  mE = Math.min,
  ln = function () {
    return DE.Date.now();
  };
function gE(u, e, t) {
  var n,
    r,
    i,
    l,
    o,
    s,
    c = 0,
    D = !1,
    f = !1,
    p = !0;
  if (typeof u != "function") throw new TypeError(lE);
  (e = Ul(e) || 0),
    cr(t) &&
      ((D = !!t.leading),
      (f = "maxWait" in t),
      (i = f ? BE(Ul(t.maxWait) || 0, e) : i),
      (p = "trailing" in t ? !!t.trailing : p));
  function v(_) {
    var w = n,
      P = r;
    return (n = r = void 0), (c = _), (l = u.apply(P, w)), l;
  }
  function B(_) {
    return (c = _), (o = setTimeout(E, e)), D ? v(_) : l;
  }
  function m(_) {
    var w = _ - s,
      P = _ - c,
      S = e - w;
    return f ? mE(S, i - P) : S;
  }
  function F(_) {
    var w = _ - s,
      P = _ - c;
    return s === void 0 || w >= e || w < 0 || (f && P >= i);
  }
  function E() {
    var _ = ln();
    if (F(_)) return d(_);
    o = setTimeout(E, m(_));
  }
  function d(_) {
    return (o = void 0), p && n ? v(_) : ((n = r = void 0), l);
  }
  function h() {
    o !== void 0 && clearTimeout(o), (c = 0), (n = s = r = o = void 0);
  }
  function g() {
    return o === void 0 ? l : d(ln());
  }
  function y() {
    var _ = ln(),
      w = F(_);
    if (((n = arguments), (r = this), (s = _), w)) {
      if (o === void 0) return B(s);
      if (f) return (o = setTimeout(E, e)), v(s);
    }
    return o === void 0 && (o = setTimeout(E, e)), l;
  }
  return (y.cancel = h), (y.flush = g), y;
}
function cr(u) {
  var e = typeof u;
  return !!u && (e == "object" || e == "function");
}
function FE(u) {
  return !!u && typeof u == "object";
}
function yE(u) {
  return typeof u == "symbol" || (FE(u) && vE.call(u) == oE);
}
function Ul(u) {
  if (typeof u == "number") return u;
  if (yE(u)) return Wl;
  if (cr(u)) {
    var e = typeof u.valueOf == "function" ? u.valueOf() : u;
    u = cr(e) ? e + "" : e;
  }
  if (typeof u != "string") return u === 0 ? u : +u;
  u = u.replace(aE, "");
  var t = cE.test(u);
  return t || dE.test(u) ? fE(u.slice(2), t ? 2 : 8) : sE.test(u) ? Wl : +u;
}
var CE = gE,
  W3 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (u) {
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var i = "", l = 0; l < arguments.length; l++) {
        var o = arguments[l];
        o && (i = r(i, n(o)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number") return i;
      if (typeof i != "object") return "";
      if (Array.isArray(i)) return t.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes("[native code]")
      )
        return i.toString();
      var l = "";
      for (var o in i) e.call(i, o) && i[o] && (l = r(l, o));
      return l;
    }
    function r(i, l) {
      return l ? (i ? i + " " + l : i + l) : i;
    }
    u.exports ? ((t.default = t), (u.exports = t)) : (window.classNames = t);
  })();
})(W3);
var k = {},
  Fi = {};
(function (u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
  var e = t(N.exports);
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (i) {
      return e.default.createElement("ul", { style: { display: "block" } }, i);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (i) {
      return e.default.createElement("button", null, i + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
  };
  u.default = n;
})(Fi);
Object.defineProperty(k, "__esModule", { value: !0 });
k.checkSpecKeys =
  k.checkNavigable =
  k.changeSlide =
  k.canUseDOM =
  k.canGoNext =
    void 0;
k.clamp = Ms;
k.extractObject = void 0;
k.filterSettings = ME;
k.validSettings =
  k.swipeStart =
  k.swipeMove =
  k.swipeEnd =
  k.slidesOnRight =
  k.slidesOnLeft =
  k.slideHandler =
  k.siblingDirection =
  k.safePreventDefault =
  k.lazyStartIndex =
  k.lazySlidesOnRight =
  k.lazySlidesOnLeft =
  k.lazyEndIndex =
  k.keyHandler =
  k.initializedState =
  k.getWidth =
  k.getTrackLeft =
  k.getTrackCSS =
  k.getTrackAnimateCSS =
  k.getTotalSlides =
  k.getSwipeDirection =
  k.getSlideCount =
  k.getRequiredLazySlides =
  k.getPreClones =
  k.getPostClones =
  k.getOnDemandLazySlides =
  k.getNavigableIndexes =
  k.getHeight =
    void 0;
var _E = zs(N.exports),
  AE = zs(Fi);
function zs(u) {
  return u && u.__esModule ? u : { default: u };
}
function R3(u) {
  return (
    (R3 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    R3(u)
  );
}
function Vl(u, e) {
  var t = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(u);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(u, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function G(u) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vl(Object(t), !0).forEach(function (n) {
          SE(u, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
      : Vl(Object(t)).forEach(function (n) {
          Object.defineProperty(u, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return u;
}
function SE(u, e, t) {
  return (
    (e = wE(e)),
    e in u
      ? Object.defineProperty(u, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[e] = t),
    u
  );
}
function wE(u) {
  var e = kE(u, "string");
  return R3(e) == "symbol" ? e : String(e);
}
function kE(u, e) {
  if (R3(u) != "object" || !u) return u;
  var t = u[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(u, e || "default");
    if (R3(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(u);
}
function Ms(u, e, t) {
  return Math.max(e, Math.min(u, t));
}
var N0 = (k.safePreventDefault = function (e) {
    var t = ["onTouchStart", "onTouchMove", "onWheel"];
    t.includes(e._reactName) || e.preventDefault();
  }),
  js = (k.getOnDemandLazySlides = function (e) {
    for (var t = [], n = $s(e), r = Is(e), i = n; i < r; i++)
      e.lazyLoadedList.indexOf(i) < 0 && t.push(i);
    return t;
  });
k.getRequiredLazySlides = function (e) {
  for (var t = [], n = $s(e), r = Is(e), i = n; i < r; i++) t.push(i);
  return t;
};
var $s = (k.lazyStartIndex = function (e) {
    return e.currentSlide - xE(e);
  }),
  Is = (k.lazyEndIndex = function (e) {
    return e.currentSlide + OE(e);
  }),
  xE = (k.lazySlidesOnLeft = function (e) {
    return e.centerMode
      ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  OE = (k.lazySlidesOnRight = function (e) {
    return e.centerMode
      ? Math.floor((e.slidesToShow - 1) / 2) +
          1 +
          (parseInt(e.centerPadding) > 0 ? 1 : 0)
      : e.slidesToShow;
  }),
  dr = (k.getWidth = function (e) {
    return (e && e.offsetWidth) || 0;
  }),
  Hs = (k.getHeight = function (e) {
    return (e && e.offsetHeight) || 0;
  }),
  Ws = (k.getSwipeDirection = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n,
      r,
      i,
      l;
    return (
      (n = e.startX - e.curX),
      (r = e.startY - e.curY),
      (i = Math.atan2(r, n)),
      (l = Math.round((i * 180) / Math.PI)),
      l < 0 && (l = 360 - Math.abs(l)),
      (l <= 45 && l >= 0) || (l <= 360 && l >= 315)
        ? "left"
        : l >= 135 && l <= 225
        ? "right"
        : t === !0
        ? l >= 35 && l <= 135
          ? "up"
          : "down"
        : "vertical"
    );
  }),
  Us = (k.canGoNext = function (e) {
    var t = !0;
    return (
      e.infinite ||
        (((e.centerMode && e.currentSlide >= e.slideCount - 1) ||
          e.slideCount <= e.slidesToShow ||
          e.currentSlide >= e.slideCount - e.slidesToShow) &&
          (t = !1)),
      t
    );
  });
k.extractObject = function (e, t) {
  var n = {};
  return (
    t.forEach(function (r) {
      return (n[r] = e[r]);
    }),
    n
  );
};
k.initializedState = function (e) {
  var t = _E.default.Children.count(e.children),
    n = e.listRef,
    r = Math.ceil(dr(n)),
    i = e.trackRef && e.trackRef.node,
    l = Math.ceil(dr(i)),
    o;
  if (e.vertical) o = r;
  else {
    var s = e.centerMode && parseInt(e.centerPadding) * 2;
    typeof e.centerPadding == "string" &&
      e.centerPadding.slice(-1) === "%" &&
      (s *= r / 100),
      (o = Math.ceil((r - s) / e.slidesToShow));
  }
  var c = n && Hs(n.querySelector('[data-index="0"]')),
    D = c * e.slidesToShow,
    f = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
  e.rtl && e.currentSlide === void 0 && (f = t - 1 - e.initialSlide);
  var p = e.lazyLoadedList || [],
    v = js(G(G({}, e), {}, { currentSlide: f, lazyLoadedList: p }));
  p = p.concat(v);
  var B = {
    slideCount: t,
    slideWidth: o,
    listWidth: r,
    trackWidth: l,
    currentSlide: f,
    slideHeight: c,
    listHeight: D,
    lazyLoadedList: p,
  };
  return e.autoplaying === null && e.autoplay && (B.autoplaying = "playing"), B;
};
k.slideHandler = function (e) {
  var t = e.waitForAnimate,
    n = e.animating,
    r = e.fade,
    i = e.infinite,
    l = e.index,
    o = e.slideCount,
    s = e.lazyLoad,
    c = e.currentSlide,
    D = e.centerMode,
    f = e.slidesToScroll,
    p = e.slidesToShow,
    v = e.useCSS,
    B = e.lazyLoadedList;
  if (t && n) return {};
  var m = l,
    F,
    E,
    d,
    h = {},
    g = {},
    y = i ? l : Ms(l, 0, o - 1);
  if (r) {
    if (!i && (l < 0 || l >= o)) return {};
    l < 0 ? (m = l + o) : l >= o && (m = l - o),
      s && B.indexOf(m) < 0 && (B = B.concat(m)),
      (h = {
        animating: !0,
        currentSlide: m,
        lazyLoadedList: B,
        targetSlide: m,
      }),
      (g = { animating: !1, targetSlide: m });
  } else
    (F = m),
      m < 0
        ? ((F = m + o), i ? o % f !== 0 && (F = o - (o % f)) : (F = 0))
        : !Us(e) && m > c
        ? (m = F = c)
        : D && m >= o
        ? ((m = i ? o : o - 1), (F = i ? 0 : o - 1))
        : m >= o && ((F = m - o), i ? o % f !== 0 && (F = 0) : (F = o - p)),
      !i && m + p >= o && (F = o - p),
      (E = Ze(G(G({}, e), {}, { slideIndex: m }))),
      (d = Ze(G(G({}, e), {}, { slideIndex: F }))),
      i || (E === d && (m = F), (E = d)),
      s && (B = B.concat(js(G(G({}, e), {}, { currentSlide: m })))),
      v
        ? ((h = {
            animating: !0,
            currentSlide: F,
            trackStyle: Vs(G(G({}, e), {}, { left: E })),
            lazyLoadedList: B,
            targetSlide: y,
          }),
          (g = {
            animating: !1,
            currentSlide: F,
            trackStyle: Ge(G(G({}, e), {}, { left: d })),
            swipeLeft: null,
            targetSlide: y,
          }))
        : (h = {
            currentSlide: F,
            trackStyle: Ge(G(G({}, e), {}, { left: d })),
            lazyLoadedList: B,
            targetSlide: y,
          });
  return { state: h, nextState: g };
};
k.changeSlide = function (e, t) {
  var n,
    r,
    i,
    l,
    o,
    s = e.slidesToScroll,
    c = e.slidesToShow,
    D = e.slideCount,
    f = e.currentSlide,
    p = e.targetSlide,
    v = e.lazyLoad,
    B = e.infinite;
  if (((l = D % s !== 0), (n = l ? 0 : (D - f) % s), t.message === "previous"))
    (i = n === 0 ? s : c - n),
      (o = f - i),
      v && !B && ((r = f - i), (o = r === -1 ? D - 1 : r)),
      B || (o = p - s);
  else if (t.message === "next")
    (i = n === 0 ? s : n),
      (o = f + i),
      v && !B && (o = ((f + s) % D) + n),
      B || (o = p + s);
  else if (t.message === "dots") o = t.index * t.slidesToScroll;
  else if (t.message === "children") {
    if (((o = t.index), B)) {
      var m = TE(G(G({}, e), {}, { targetSlide: o }));
      o > t.currentSlide && m === "left"
        ? (o = o - D)
        : o < t.currentSlide && m === "right" && (o = o + D);
    }
  } else t.message === "index" && (o = Number(t.index));
  return o;
};
k.keyHandler = function (e, t, n) {
  return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t
    ? ""
    : e.keyCode === 37
    ? n
      ? "next"
      : "previous"
    : e.keyCode === 39
    ? n
      ? "previous"
      : "next"
    : "";
};
k.swipeStart = function (e, t, n) {
  return (
    e.target.tagName === "IMG" && N0(e),
    !t || (!n && e.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: e.touches ? e.touches[0].pageX : e.clientX,
            startY: e.touches ? e.touches[0].pageY : e.clientY,
            curX: e.touches ? e.touches[0].pageX : e.clientX,
            curY: e.touches ? e.touches[0].pageY : e.clientY,
          },
        }
  );
};
k.swipeMove = function (e, t) {
  var n = t.scrolling,
    r = t.animating,
    i = t.vertical,
    l = t.swipeToSlide,
    o = t.verticalSwiping,
    s = t.rtl,
    c = t.currentSlide,
    D = t.edgeFriction,
    f = t.edgeDragged,
    p = t.onEdge,
    v = t.swiped,
    B = t.swiping,
    m = t.slideCount,
    F = t.slidesToScroll,
    E = t.infinite,
    d = t.touchObject,
    h = t.swipeEvent,
    g = t.listHeight,
    y = t.listWidth;
  if (!n) {
    if (r) return N0(e);
    i && l && o && N0(e);
    var _,
      w = {},
      P = Ze(t);
    (d.curX = e.touches ? e.touches[0].pageX : e.clientX),
      (d.curY = e.touches ? e.touches[0].pageY : e.clientY),
      (d.swipeLength = Math.round(Math.sqrt(Math.pow(d.curX - d.startX, 2))));
    var S = Math.round(Math.sqrt(Math.pow(d.curY - d.startY, 2)));
    if (!o && !B && S > 10) return { scrolling: !0 };
    o && (d.swipeLength = S);
    var C = (s ? -1 : 1) * (d.curX > d.startX ? 1 : -1);
    o && (C = d.curY > d.startY ? 1 : -1);
    var T = Math.ceil(m / F),
      L = Ws(t.touchObject, o),
      M = d.swipeLength;
    return (
      E ||
        (((c === 0 && (L === "right" || L === "down")) ||
          (c + 1 >= T && (L === "left" || L === "up")) ||
          (!Us(t) && (L === "left" || L === "up"))) &&
          ((M = d.swipeLength * D),
          f === !1 && p && (p(L), (w.edgeDragged = !0)))),
      !v && h && (h(L), (w.swiped = !0)),
      i ? (_ = P + M * (g / y) * C) : s ? (_ = P - M * C) : (_ = P + M * C),
      o && (_ = P + M * C),
      (w = G(
        G({}, w),
        {},
        {
          touchObject: d,
          swipeLeft: _,
          trackStyle: Ge(G(G({}, t), {}, { left: _ })),
        }
      )),
      Math.abs(d.curX - d.startX) < Math.abs(d.curY - d.startY) * 0.8 ||
        (d.swipeLength > 10 && ((w.swiping = !0), N0(e))),
      w
    );
  }
};
k.swipeEnd = function (e, t) {
  var n = t.dragging,
    r = t.swipe,
    i = t.touchObject,
    l = t.listWidth,
    o = t.touchThreshold,
    s = t.verticalSwiping,
    c = t.listHeight,
    D = t.swipeToSlide,
    f = t.scrolling,
    p = t.onSwipe,
    v = t.targetSlide,
    B = t.currentSlide,
    m = t.infinite;
  if (!n) return r && N0(e), {};
  var F = s ? c / o : l / o,
    E = Ws(i, s),
    d = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (f || !i.swipeLength) return d;
  if (i.swipeLength > F) {
    N0(e), p && p(E);
    var h,
      g,
      y = m ? B : v;
    switch (E) {
      case "left":
      case "up":
        (g = y + ql(t)), (h = D ? Ql(t, g) : g), (d.currentDirection = 0);
        break;
      case "right":
      case "down":
        (g = y - ql(t)), (h = D ? Ql(t, g) : g), (d.currentDirection = 1);
        break;
      default:
        h = y;
    }
    d.triggerSlideHandler = h;
  } else {
    var _ = Ze(t);
    d.trackStyle = Vs(G(G({}, t), {}, { left: _ }));
  }
  return d;
};
var PE = (k.getNavigableIndexes = function (e) {
    for (
      var t = e.infinite ? e.slideCount * 2 : e.slideCount,
        n = e.infinite ? e.slidesToShow * -1 : 0,
        r = e.infinite ? e.slidesToShow * -1 : 0,
        i = [];
      n < t;

    )
      i.push(n),
        (n = r + e.slidesToScroll),
        (r += Math.min(e.slidesToScroll, e.slidesToShow));
    return i;
  }),
  Ql = (k.checkNavigable = function (e, t) {
    var n = PE(e),
      r = 0;
    if (t > n[n.length - 1]) t = n[n.length - 1];
    else
      for (var i in n) {
        if (t < n[i]) {
          t = r;
          break;
        }
        r = n[i];
      }
    return t;
  }),
  ql = (k.getSlideCount = function (e) {
    var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var n,
        r = e.listRef,
        i = (r.querySelectorAll && r.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(i).every(function (s) {
          if (e.vertical) {
            if (s.offsetTop + Hs(s) / 2 > e.swipeLeft * -1) return (n = s), !1;
          } else if (s.offsetLeft - t + dr(s) / 2 > e.swipeLeft * -1) return (n = s), !1;
          return !0;
        }),
        !n)
      )
        return 0;
      var l = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide,
        o = Math.abs(n.dataset.index - l) || 1;
      return o;
    } else return e.slidesToScroll;
  }),
  yi = (k.checkSpecKeys = function (e, t) {
    return t.reduce(function (n, r) {
      return n && e.hasOwnProperty(r);
    }, !0)
      ? null
      : console.error("Keys Missing:", e);
  }),
  Ge = (k.getTrackCSS = function (e) {
    yi(e, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var t,
      n,
      r = e.slideCount + 2 * e.slidesToShow;
    e.vertical ? (n = r * e.slideHeight) : (t = bE(e) * e.slideWidth);
    var i = { opacity: 1, transition: "", WebkitTransition: "" };
    if (e.useTransform) {
      var l = e.vertical
          ? "translate3d(0px, " + e.left + "px, 0px)"
          : "translate3d(" + e.left + "px, 0px, 0px)",
        o = e.vertical
          ? "translate3d(0px, " + e.left + "px, 0px)"
          : "translate3d(" + e.left + "px, 0px, 0px)",
        s = e.vertical
          ? "translateY(" + e.left + "px)"
          : "translateX(" + e.left + "px)";
      i = G(G({}, i), {}, { WebkitTransform: l, transform: o, msTransform: s });
    } else e.vertical ? (i.top = e.left) : (i.left = e.left);
    return (
      e.fade && (i = { opacity: 1 }),
      t && (i.width = t),
      n && (i.height = n),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (e.vertical
          ? (i.marginTop = e.left + "px")
          : (i.marginLeft = e.left + "px")),
      i
    );
  }),
  Vs = (k.getTrackAnimateCSS = function (e) {
    yi(e, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var t = Ge(e);
    return (
      e.useTransform
        ? ((t.WebkitTransition =
            "-webkit-transform " + e.speed + "ms " + e.cssEase),
          (t.transition = "transform " + e.speed + "ms " + e.cssEase))
        : e.vertical
        ? (t.transition = "top " + e.speed + "ms " + e.cssEase)
        : (t.transition = "left " + e.speed + "ms " + e.cssEase),
      t
    );
  }),
  Ze = (k.getTrackLeft = function (e) {
    if (e.unslick) return 0;
    yi(e, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var t = e.slideIndex,
      n = e.trackRef,
      r = e.infinite,
      i = e.centerMode,
      l = e.slideCount,
      o = e.slidesToShow,
      s = e.slidesToScroll,
      c = e.slideWidth,
      D = e.listWidth,
      f = e.variableWidth,
      p = e.slideHeight,
      v = e.fade,
      B = e.vertical,
      m = 0,
      F,
      E,
      d = 0;
    if (v || e.slideCount === 1) return 0;
    var h = 0;
    if (
      (r
        ? ((h = -_e(e)),
          l % s !== 0 && t + s > l && (h = -(t > l ? o - (t - l) : l % s)),
          i && (h += parseInt(o / 2)))
        : (l % s !== 0 && t + s > l && (h = o - (l % s)),
          i && (h = parseInt(o / 2))),
      (m = h * c),
      (d = h * p),
      B ? (F = t * p * -1 + d) : (F = t * c * -1 + m),
      f === !0)
    ) {
      var g,
        y = n && n.node;
      if (
        ((g = t + _e(e)),
        (E = y && y.childNodes[g]),
        (F = E ? E.offsetLeft * -1 : 0),
        i === !0)
      ) {
        (g = r ? t + _e(e) : t), (E = y && y.children[g]), (F = 0);
        for (var _ = 0; _ < g; _++)
          F -= y && y.children[_] && y.children[_].offsetWidth;
        (F -= parseInt(e.centerPadding)), (F += E && (D - E.offsetWidth) / 2);
      }
    }
    return F;
  }),
  _e = (k.getPreClones = function (e) {
    return e.unslick || !e.infinite
      ? 0
      : e.variableWidth
      ? e.slideCount
      : e.slidesToShow + (e.centerMode ? 1 : 0);
  }),
  NE = (k.getPostClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.slideCount;
  }),
  bE = (k.getTotalSlides = function (e) {
    return e.slideCount === 1 ? 1 : _e(e) + e.slideCount + NE(e);
  }),
  TE = (k.siblingDirection = function (e) {
    return e.targetSlide > e.currentSlide
      ? e.targetSlide > e.currentSlide + LE(e)
        ? "left"
        : "right"
      : e.targetSlide < e.currentSlide - RE(e)
      ? "right"
      : "left";
  }),
  LE = (k.slidesOnRight = function (e) {
    var t = e.slidesToShow,
      n = e.centerMode,
      r = e.rtl,
      i = e.centerPadding;
    if (n) {
      var l = (t - 1) / 2 + 1;
      return parseInt(i) > 0 && (l += 1), r && t % 2 === 0 && (l += 1), l;
    }
    return r ? 0 : t - 1;
  }),
  RE = (k.slidesOnLeft = function (e) {
    var t = e.slidesToShow,
      n = e.centerMode,
      r = e.rtl,
      i = e.centerPadding;
    if (n) {
      var l = (t - 1) / 2 + 1;
      return parseInt(i) > 0 && (l += 1), !r && t % 2 === 0 && (l += 1), l;
    }
    return r ? t - 1 : 0;
  });
k.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var zE = (k.validSettings = Object.keys(AE.default));
function ME(u) {
  return zE.reduce(function (e, t) {
    return u.hasOwnProperty(t) && (e[t] = u[t]), e;
  }, {});
}
var xt = {};
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.Track = void 0;
var Cu = Qs(N.exports),
  on = Qs(W3.exports),
  an = k;
function Qs(u) {
  return u && u.__esModule ? u : { default: u };
}
function I0(u) {
  return (
    (I0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    I0(u)
  );
}
function fr() {
  return (
    (fr = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
          }
          return u;
        }),
    fr.apply(this, arguments)
  );
}
function jE(u, e) {
  if (!(u instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Kl(u, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(u, Ks(n.key), n);
  }
}
function $E(u, e, t) {
  return (
    e && Kl(u.prototype, e),
    t && Kl(u, t),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    u
  );
}
function IE(u, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (u.prototype = Object.create(e && e.prototype, {
    constructor: { value: u, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    e && Er(u, e);
}
function Er(u, e) {
  return (
    (Er = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Er(u, e)
  );
}
function HE(u) {
  var e = qs();
  return function () {
    var n = Je(u),
      r;
    if (e) {
      var i = Je(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return WE(this, r);
  };
}
function WE(u, e) {
  if (e && (I0(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return pr(u);
}
function pr(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function qs() {
  try {
    var u = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (qs = function () {
    return !!u;
  })();
}
function Je(u) {
  return (
    (Je = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Je(u)
  );
}
function Yl(u, e) {
  var t = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(u);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(u, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function S4(u) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Yl(Object(t), !0).forEach(function (n) {
          Dr(u, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
      : Yl(Object(t)).forEach(function (n) {
          Object.defineProperty(u, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return u;
}
function Dr(u, e, t) {
  return (
    (e = Ks(e)),
    e in u
      ? Object.defineProperty(u, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[e] = t),
    u
  );
}
function Ks(u) {
  var e = UE(u, "string");
  return I0(e) == "symbol" ? e : String(e);
}
function UE(u, e) {
  if (I0(u) != "object" || !u) return u;
  var t = u[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(u, e || "default");
    if (I0(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(u);
}
var sn = function (e) {
    var t, n, r, i, l;
    e.rtl ? (l = e.slideCount - 1 - e.index) : (l = e.index),
      (r = l < 0 || l >= e.slideCount),
      e.centerMode
        ? ((i = Math.floor(e.slidesToShow / 2)),
          (n = (l - e.currentSlide) % e.slideCount === 0),
          l > e.currentSlide - i - 1 && l <= e.currentSlide + i && (t = !0))
        : (t = e.currentSlide <= l && l < e.currentSlide + e.slidesToShow);
    var o;
    e.targetSlide < 0
      ? (o = e.targetSlide + e.slideCount)
      : e.targetSlide >= e.slideCount
      ? (o = e.targetSlide - e.slideCount)
      : (o = e.targetSlide);
    var s = l === o;
    return {
      "slick-slide": !0,
      "slick-active": t,
      "slick-center": n,
      "slick-cloned": r,
      "slick-current": s,
    };
  },
  VE = function (e) {
    var t = {};
    return (
      (e.variableWidth === void 0 || e.variableWidth === !1) &&
        (t.width = e.slideWidth),
      e.fade &&
        ((t.position = "relative"),
        e.vertical
          ? (t.top = -e.index * parseInt(e.slideHeight))
          : (t.left = -e.index * parseInt(e.slideWidth)),
        (t.opacity = e.currentSlide === e.index ? 1 : 0),
        (t.zIndex = e.currentSlide === e.index ? 999 : 998),
        e.useCSS &&
          (t.transition =
            "opacity " +
            e.speed +
            "ms " +
            e.cssEase +
            ", visibility " +
            e.speed +
            "ms " +
            e.cssEase)),
      t
    );
  },
  cn = function (e, t) {
    return e.key || t;
  },
  QE = function (e) {
    var t,
      n = [],
      r = [],
      i = [],
      l = Cu.default.Children.count(e.children),
      o = (0, an.lazyStartIndex)(e),
      s = (0, an.lazyEndIndex)(e);
    return (
      Cu.default.Children.forEach(e.children, function (c, D) {
        var f,
          p = {
            message: "children",
            index: D,
            slidesToScroll: e.slidesToScroll,
            currentSlide: e.currentSlide,
          };
        !e.lazyLoad || (e.lazyLoad && e.lazyLoadedList.indexOf(D) >= 0)
          ? (f = c)
          : (f = Cu.default.createElement("div", null));
        var v = VE(S4(S4({}, e), {}, { index: D })),
          B = f.props.className || "",
          m = sn(S4(S4({}, e), {}, { index: D }));
        if (
          (n.push(
            Cu.default.cloneElement(f, {
              key: "original" + cn(f, D),
              "data-index": D,
              className: (0, on.default)(m, B),
              tabIndex: "-1",
              "aria-hidden": !m["slick-active"],
              style: S4(S4({ outline: "none" }, f.props.style || {}), v),
              onClick: function (d) {
                f.props && f.props.onClick && f.props.onClick(d),
                  e.focusOnSelect && e.focusOnSelect(p);
              },
            })
          ),
          e.infinite && e.fade === !1)
        ) {
          var F = l - D;
          F <= (0, an.getPreClones)(e) &&
            ((t = -F),
            t >= o && (f = c),
            (m = sn(S4(S4({}, e), {}, { index: t }))),
            r.push(
              Cu.default.cloneElement(f, {
                key: "precloned" + cn(f, t),
                "data-index": t,
                tabIndex: "-1",
                className: (0, on.default)(m, B),
                "aria-hidden": !m["slick-active"],
                style: S4(S4({}, f.props.style || {}), v),
                onClick: function (d) {
                  f.props && f.props.onClick && f.props.onClick(d),
                    e.focusOnSelect && e.focusOnSelect(p);
                },
              })
            )),
            (t = l + D),
            t < s && (f = c),
            (m = sn(S4(S4({}, e), {}, { index: t }))),
            i.push(
              Cu.default.cloneElement(f, {
                key: "postcloned" + cn(f, t),
                "data-index": t,
                tabIndex: "-1",
                className: (0, on.default)(m, B),
                "aria-hidden": !m["slick-active"],
                style: S4(S4({}, f.props.style || {}), v),
                onClick: function (d) {
                  f.props && f.props.onClick && f.props.onClick(d),
                    e.focusOnSelect && e.focusOnSelect(p);
                },
              })
            );
        }
      }),
      e.rtl ? r.concat(n, i).reverse() : r.concat(n, i)
    );
  };
xt.Track = (function (u) {
  IE(t, u);
  var e = HE(t);
  function t() {
    var n;
    jE(this, t);
    for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
      i[l] = arguments[l];
    return (
      (n = e.call.apply(e, [this].concat(i))),
      Dr(pr(n), "node", null),
      Dr(pr(n), "handleRef", function (o) {
        n.node = o;
      }),
      n
    );
  }
  return (
    $E(t, [
      {
        key: "render",
        value: function () {
          var r = QE(this.props),
            i = this.props,
            l = i.onMouseEnter,
            o = i.onMouseOver,
            s = i.onMouseLeave,
            c = { onMouseEnter: l, onMouseOver: o, onMouseLeave: s };
          return Cu.default.createElement(
            "div",
            fr(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              c
            ),
            r
          );
        },
      },
    ]),
    t
  );
})(Cu.default.PureComponent);
var Ot = {};
function H0(u) {
  return (
    (H0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    H0(u)
  );
}
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.Dots = void 0;
var ce = Ys(N.exports),
  qE = Ys(W3.exports),
  Xl = k;
function Ys(u) {
  return u && u.__esModule ? u : { default: u };
}
function Gl(u, e) {
  var t = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(u);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(u, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function KE(u) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Gl(Object(t), !0).forEach(function (n) {
          YE(u, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
      : Gl(Object(t)).forEach(function (n) {
          Object.defineProperty(u, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return u;
}
function YE(u, e, t) {
  return (
    (e = Xs(e)),
    e in u
      ? Object.defineProperty(u, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[e] = t),
    u
  );
}
function XE(u, e) {
  if (!(u instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zl(u, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(u, Xs(n.key), n);
  }
}
function GE(u, e, t) {
  return (
    e && Zl(u.prototype, e),
    t && Zl(u, t),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    u
  );
}
function Xs(u) {
  var e = ZE(u, "string");
  return H0(e) == "symbol" ? e : String(e);
}
function ZE(u, e) {
  if (H0(u) != "object" || !u) return u;
  var t = u[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(u, e || "default");
    if (H0(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(u);
}
function JE(u, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (u.prototype = Object.create(e && e.prototype, {
    constructor: { value: u, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    e && hr(u, e);
}
function hr(u, e) {
  return (
    (hr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    hr(u, e)
  );
}
function u2(u) {
  var e = Gs();
  return function () {
    var n = ut(u),
      r;
    if (e) {
      var i = ut(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return e2(this, r);
  };
}
function e2(u, e) {
  if (e && (H0(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return t2(u);
}
function t2(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function Gs() {
  try {
    var u = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Gs = function () {
    return !!u;
  })();
}
function ut(u) {
  return (
    (ut = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ut(u)
  );
}
var n2 = function (e) {
  var t;
  return (
    e.infinite
      ? (t = Math.ceil(e.slideCount / e.slidesToScroll))
      : (t = Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1),
    t
  );
};
Ot.Dots = (function (u) {
  JE(t, u);
  var e = u2(t);
  function t() {
    return XE(this, t), e.apply(this, arguments);
  }
  return (
    GE(t, [
      {
        key: "clickHandler",
        value: function (r, i) {
          i.preventDefault(), this.props.clickHandler(r);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var r = this.props,
              i = r.onMouseEnter,
              l = r.onMouseOver,
              o = r.onMouseLeave,
              s = r.infinite,
              c = r.slidesToScroll,
              D = r.slidesToShow,
              f = r.slideCount,
              p = r.currentSlide,
              v = n2({
                slideCount: f,
                slidesToScroll: c,
                slidesToShow: D,
                infinite: s,
              }),
              B = { onMouseEnter: i, onMouseOver: l, onMouseLeave: o },
              m = [],
              F = 0;
            F < v;
            F++
          ) {
            var E = (F + 1) * c - 1,
              d = s ? E : (0, Xl.clamp)(E, 0, f - 1),
              h = d - (c - 1),
              g = s ? h : (0, Xl.clamp)(h, 0, f - 1),
              y = (0, qE.default)({
                "slick-active": s ? p >= g && p <= d : p === g,
              }),
              _ = {
                message: "dots",
                index: F,
                slidesToScroll: c,
                currentSlide: p,
              },
              w = this.clickHandler.bind(this, _);
            m = m.concat(
              ce.default.createElement(
                "li",
                { key: F, className: y },
                ce.default.cloneElement(this.props.customPaging(F), {
                  onClick: w,
                })
              )
            );
          }
          return ce.default.cloneElement(
            this.props.appendDots(m),
            KE({ className: this.props.dotsClass }, B)
          );
        },
      },
    ]),
    t
  );
})(ce.default.PureComponent);
var W0 = {};
function U0(u) {
  return (
    (U0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    U0(u)
  );
}
Object.defineProperty(W0, "__esModule", { value: !0 });
W0.PrevArrow = W0.NextArrow = void 0;
var b0 = Js(N.exports),
  Zs = Js(W3.exports),
  r2 = k;
function Js(u) {
  return u && u.__esModule ? u : { default: u };
}
function et() {
  return (
    (et = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
          }
          return u;
        }),
    et.apply(this, arguments)
  );
}
function Jl(u, e) {
  var t = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(u);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(u, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function tt(u) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Jl(Object(t), !0).forEach(function (n) {
          i2(u, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
      : Jl(Object(t)).forEach(function (n) {
          Object.defineProperty(u, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return u;
}
function i2(u, e, t) {
  return (
    (e = tc(e)),
    e in u
      ? Object.defineProperty(u, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[e] = t),
    u
  );
}
function uc(u, e) {
  if (!(u instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function uo(u, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(u, tc(n.key), n);
  }
}
function ec(u, e, t) {
  return (
    e && uo(u.prototype, e),
    t && uo(u, t),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    u
  );
}
function tc(u) {
  var e = l2(u, "string");
  return U0(e) == "symbol" ? e : String(e);
}
function l2(u, e) {
  if (U0(u) != "object" || !u) return u;
  var t = u[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(u, e || "default");
    if (U0(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(u);
}
function nc(u, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (u.prototype = Object.create(e && e.prototype, {
    constructor: { value: u, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    e && vr(u, e);
}
function vr(u, e) {
  return (
    (vr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    vr(u, e)
  );
}
function rc(u) {
  var e = ic();
  return function () {
    var n = nt(u),
      r;
    if (e) {
      var i = nt(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return o2(this, r);
  };
}
function o2(u, e) {
  if (e && (U0(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return a2(u);
}
function a2(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function ic() {
  try {
    var u = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (ic = function () {
    return !!u;
  })();
}
function nt(u) {
  return (
    (nt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    nt(u)
  );
}
W0.PrevArrow = (function (u) {
  nc(t, u);
  var e = rc(t);
  function t() {
    return uc(this, t), e.apply(this, arguments);
  }
  return (
    ec(t, [
      {
        key: "clickHandler",
        value: function (r, i) {
          i && i.preventDefault(), this.props.clickHandler(r, i);
        },
      },
      {
        key: "render",
        value: function () {
          var r = { "slick-arrow": !0, "slick-prev": !0 },
            i = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((r["slick-disabled"] = !0), (i = null));
          var l = {
              key: "0",
              "data-role": "none",
              className: (0, Zs.default)(r),
              style: { display: "block" },
              onClick: i,
            },
            o = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            s;
          return (
            this.props.prevArrow
              ? (s = b0.default.cloneElement(
                  this.props.prevArrow,
                  tt(tt({}, l), o)
                ))
              : (s = b0.default.createElement(
                  "button",
                  et({ key: "0", type: "button" }, l),
                  " ",
                  "Previous"
                )),
            s
          );
        },
      },
    ]),
    t
  );
})(b0.default.PureComponent);
W0.NextArrow = (function (u) {
  nc(t, u);
  var e = rc(t);
  function t() {
    return uc(this, t), e.apply(this, arguments);
  }
  return (
    ec(t, [
      {
        key: "clickHandler",
        value: function (r, i) {
          i && i.preventDefault(), this.props.clickHandler(r, i);
        },
      },
      {
        key: "render",
        value: function () {
          var r = { "slick-arrow": !0, "slick-next": !0 },
            i = this.clickHandler.bind(this, { message: "next" });
          (0, r2.canGoNext)(this.props) ||
            ((r["slick-disabled"] = !0), (i = null));
          var l = {
              key: "1",
              "data-role": "none",
              className: (0, Zs.default)(r),
              style: { display: "block" },
              onClick: i,
            },
            o = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            s;
          return (
            this.props.nextArrow
              ? (s = b0.default.cloneElement(
                  this.props.nextArrow,
                  tt(tt({}, l), o)
                ))
              : (s = b0.default.createElement(
                  "button",
                  et({ key: "1", type: "button" }, l),
                  " ",
                  "Next"
                )),
            s
          );
        },
      },
    ]),
    t
  );
})(b0.default.PureComponent);
var lc = (function () {
    if (typeof Map < "u") return Map;
    function u(e, t) {
      var n = -1;
      return (
        e.some(function (r, i) {
          return r[0] === t ? ((n = i), !0) : !1;
        }),
        n
      );
    }
    return (function () {
      function e() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(e.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.get = function (t) {
          var n = u(this.__entries__, t),
            r = this.__entries__[n];
          return r && r[1];
        }),
        (e.prototype.set = function (t, n) {
          var r = u(this.__entries__, t);
          ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n]);
        }),
        (e.prototype.delete = function (t) {
          var n = this.__entries__,
            r = u(n, t);
          ~r && n.splice(r, 1);
        }),
        (e.prototype.has = function (t) {
          return !!~u(this.__entries__, t);
        }),
        (e.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (e.prototype.forEach = function (t, n) {
          n === void 0 && (n = null);
          for (var r = 0, i = this.__entries__; r < i.length; r++) {
            var l = i[r];
            t.call(n, l[1], l[0]);
          }
        }),
        e
      );
    })();
  })(),
  Br =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  rt = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  s2 = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(rt)
      : function (u) {
          return setTimeout(function () {
            return u(Date.now());
          }, 1e3 / 60);
        };
  })(),
  c2 = 2;
function d2(u, e) {
  var t = !1,
    n = !1,
    r = 0;
  function i() {
    t && ((t = !1), u()), n && o();
  }
  function l() {
    s2(i);
  }
  function o() {
    var s = Date.now();
    if (t) {
      if (s - r < c2) return;
      n = !0;
    } else (t = !0), (n = !1), setTimeout(l, e);
    r = s;
  }
  return o;
}
var f2 = 20,
  E2 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  p2 = typeof MutationObserver < "u",
  D2 = (function () {
    function u() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = d2(this.refresh.bind(this), f2));
    }
    return (
      (u.prototype.addObserver = function (e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e),
          this.connected_ || this.connect_();
      }),
      (u.prototype.removeObserver = function (e) {
        var t = this.observers_,
          n = t.indexOf(e);
        ~n && t.splice(n, 1),
          !t.length && this.connected_ && this.disconnect_();
      }),
      (u.prototype.refresh = function () {
        var e = this.updateObservers_();
        e && this.refresh();
      }),
      (u.prototype.updateObservers_ = function () {
        var e = this.observers_.filter(function (t) {
          return t.gatherActive(), t.hasActive();
        });
        return (
          e.forEach(function (t) {
            return t.broadcastActive();
          }),
          e.length > 0
        );
      }),
      (u.prototype.connect_ = function () {
        !Br ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          p2
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (u.prototype.disconnect_ = function () {
        !Br ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (u.prototype.onTransitionEnd_ = function (e) {
        var t = e.propertyName,
          n = t === void 0 ? "" : t,
          r = E2.some(function (i) {
            return !!~n.indexOf(i);
          });
        r && this.refresh();
      }),
      (u.getInstance = function () {
        return this.instance_ || (this.instance_ = new u()), this.instance_;
      }),
      (u.instance_ = null),
      u
    );
  })(),
  oc = function (u, e) {
    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
      var r = n[t];
      Object.defineProperty(u, r, {
        value: e[r],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return u;
  },
  V0 = function (u) {
    var e = u && u.ownerDocument && u.ownerDocument.defaultView;
    return e || rt;
  },
  ac = Pt(0, 0, 0, 0);
function it(u) {
  return parseFloat(u) || 0;
}
function eo(u) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  return e.reduce(function (n, r) {
    var i = u["border-" + r + "-width"];
    return n + it(i);
  }, 0);
}
function h2(u) {
  for (
    var e = ["top", "right", "bottom", "left"], t = {}, n = 0, r = e;
    n < r.length;
    n++
  ) {
    var i = r[n],
      l = u["padding-" + i];
    t[i] = it(l);
  }
  return t;
}
function v2(u) {
  var e = u.getBBox();
  return Pt(0, 0, e.width, e.height);
}
function B2(u) {
  var e = u.clientWidth,
    t = u.clientHeight;
  if (!e && !t) return ac;
  var n = V0(u).getComputedStyle(u),
    r = h2(n),
    i = r.left + r.right,
    l = r.top + r.bottom,
    o = it(n.width),
    s = it(n.height);
  if (
    (n.boxSizing === "border-box" &&
      (Math.round(o + i) !== e && (o -= eo(n, "left", "right") + i),
      Math.round(s + l) !== t && (s -= eo(n, "top", "bottom") + l)),
    !g2(u))
  ) {
    var c = Math.round(o + i) - e,
      D = Math.round(s + l) - t;
    Math.abs(c) !== 1 && (o -= c), Math.abs(D) !== 1 && (s -= D);
  }
  return Pt(r.left, r.top, o, s);
}
var m2 = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (u) {
        return u instanceof V0(u).SVGGraphicsElement;
      }
    : function (u) {
        return u instanceof V0(u).SVGElement && typeof u.getBBox == "function";
      };
})();
function g2(u) {
  return u === V0(u).document.documentElement;
}
function F2(u) {
  return Br ? (m2(u) ? v2(u) : B2(u)) : ac;
}
function y2(u) {
  var e = u.x,
    t = u.y,
    n = u.width,
    r = u.height,
    i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    l = Object.create(i.prototype);
  return (
    oc(l, {
      x: e,
      y: t,
      width: n,
      height: r,
      top: t,
      right: e + n,
      bottom: r + t,
      left: e,
    }),
    l
  );
}
function Pt(u, e, t, n) {
  return { x: u, y: e, width: t, height: n };
}
var C2 = (function () {
    function u(e) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Pt(0, 0, 0, 0)),
        (this.target = e);
    }
    return (
      (u.prototype.isActive = function () {
        var e = F2(this.target);
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        );
      }),
      (u.prototype.broadcastRect = function () {
        var e = this.contentRect_;
        return (
          (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e
        );
      }),
      u
    );
  })(),
  _2 = (function () {
    function u(e, t) {
      var n = y2(t);
      oc(this, { target: e, contentRect: n });
    }
    return u;
  })(),
  A2 = (function () {
    function u(e, t, n) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new lc()),
        typeof e != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
    }
    return (
      (u.prototype.observe = function (e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(e instanceof V0(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) ||
            (t.set(e, new C2(e)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (u.prototype.unobserve = function (e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(e instanceof V0(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          !t.has(e) ||
            (t.delete(e), t.size || this.controller_.removeObserver(this));
        }
      }),
      (u.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (u.prototype.gatherActive = function () {
        var e = this;
        this.clearActive(),
          this.observations_.forEach(function (t) {
            t.isActive() && e.activeObservations_.push(t);
          });
      }),
      (u.prototype.broadcastActive = function () {
        if (!!this.hasActive()) {
          var e = this.callbackCtx_,
            t = this.activeObservations_.map(function (n) {
              return new _2(n.target, n.broadcastRect());
            });
          this.callback_.call(e, t, e), this.clearActive();
        }
      }),
      (u.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (u.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      u
    );
  })(),
  sc = typeof WeakMap < "u" ? new WeakMap() : new lc(),
  cc = (function () {
    function u(e) {
      if (!(this instanceof u))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = D2.getInstance(),
        n = new A2(e, t, this);
      sc.set(this, n);
    }
    return u;
  })();
["observe", "unobserve", "disconnect"].forEach(function (u) {
  cc.prototype[u] = function () {
    var e;
    return (e = sc.get(this))[u].apply(e, arguments);
  };
});
var S2 = (function () {
  return typeof rt.ResizeObserver < "u" ? rt.ResizeObserver : cc;
})();
const w2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: S2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  k2 = Dc(w2);
Object.defineProperty(kt, "__esModule", { value: !0 });
kt.InnerSlider = void 0;
var g4 = U3(N.exports),
  x2 = U3(Rs),
  O2 = U3(CE),
  P2 = U3(W3.exports),
  J = k,
  N2 = xt,
  b2 = Ot,
  to = W0,
  T2 = U3(k2);
function U3(u) {
  return u && u.__esModule ? u : { default: u };
}
function n0(u) {
  return (
    (n0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    n0(u)
  );
}
function lt() {
  return (
    (lt = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
          }
          return u;
        }),
    lt.apply(this, arguments)
  );
}
function L2(u, e) {
  if (u == null) return {};
  var t = R2(u, e),
    n,
    r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(u);
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        !(e.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(u, n) || (t[n] = u[n]));
  }
  return t;
}
function R2(u, e) {
  if (u == null) return {};
  var t = {},
    n = Object.keys(u),
    r,
    i;
  for (i = 0; i < n.length; i++)
    (r = n[i]), !(e.indexOf(r) >= 0) && (t[r] = u[r]);
  return t;
}
function no(u, e) {
  var t = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(u);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(u, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function z(u) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? no(Object(t), !0).forEach(function (n) {
          H(u, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
      : no(Object(t)).forEach(function (n) {
          Object.defineProperty(u, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return u;
}
function z2(u, e) {
  if (!(u instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ro(u, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(u, fc(n.key), n);
  }
}
function M2(u, e, t) {
  return (
    e && ro(u.prototype, e),
    t && ro(u, t),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    u
  );
}
function j2(u, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (u.prototype = Object.create(e && e.prototype, {
    constructor: { value: u, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(u, "prototype", { writable: !1 }),
    e && mr(u, e);
}
function mr(u, e) {
  return (
    (mr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    mr(u, e)
  );
}
function $2(u) {
  var e = dc();
  return function () {
    var n = ot(u),
      r;
    if (e) {
      var i = ot(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return I2(this, r);
  };
}
function I2(u, e) {
  if (e && (n0(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return I(u);
}
function I(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function dc() {
  try {
    var u = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (dc = function () {
    return !!u;
  })();
}
function ot(u) {
  return (
    (ot = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ot(u)
  );
}
function H(u, e, t) {
  return (
    (e = fc(e)),
    e in u
      ? Object.defineProperty(u, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[e] = t),
    u
  );
}
function fc(u) {
  var e = H2(u, "string");
  return n0(e) == "symbol" ? e : String(e);
}
function H2(u, e) {
  if (n0(u) != "object" || !u) return u;
  var t = u[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(u, e || "default");
    if (n0(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(u);
}
kt.InnerSlider = (function (u) {
  j2(t, u);
  var e = $2(t);
  function t(n) {
    var r;
    z2(this, t),
      (r = e.call(this, n)),
      H(I(r), "listRefHandler", function (l) {
        return (r.list = l);
      }),
      H(I(r), "trackRefHandler", function (l) {
        return (r.track = l);
      }),
      H(I(r), "adaptHeight", function () {
        if (r.props.adaptiveHeight && r.list) {
          var l = r.list.querySelector(
            '[data-index="'.concat(r.state.currentSlide, '"]')
          );
          r.list.style.height = (0, J.getHeight)(l) + "px";
        }
      }),
      H(I(r), "componentDidMount", function () {
        if ((r.props.onInit && r.props.onInit(), r.props.lazyLoad)) {
          var l = (0, J.getOnDemandLazySlides)(z(z({}, r.props), r.state));
          l.length > 0 &&
            (r.setState(function (s) {
              return { lazyLoadedList: s.lazyLoadedList.concat(l) };
            }),
            r.props.onLazyLoad && r.props.onLazyLoad(l));
        }
        var o = z({ listRef: r.list, trackRef: r.track }, r.props);
        r.updateState(o, !0, function () {
          r.adaptHeight(), r.props.autoplay && r.autoPlay("update");
        }),
          r.props.lazyLoad === "progressive" &&
            (r.lazyLoadTimer = setInterval(r.progressiveLazyLoad, 1e3)),
          (r.ro = new T2.default(function () {
            r.state.animating
              ? (r.onWindowResized(!1),
                r.callbackTimers.push(
                  setTimeout(function () {
                    return r.onWindowResized();
                  }, r.props.speed)
                ))
              : r.onWindowResized();
          })),
          r.ro.observe(r.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (s) {
                (s.onfocus = r.props.pauseOnFocus ? r.onSlideFocus : null),
                  (s.onblur = r.props.pauseOnFocus ? r.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", r.onWindowResized)
            : window.attachEvent("onresize", r.onWindowResized);
      }),
      H(I(r), "componentWillUnmount", function () {
        r.animationEndCallback && clearTimeout(r.animationEndCallback),
          r.lazyLoadTimer && clearInterval(r.lazyLoadTimer),
          r.callbackTimers.length &&
            (r.callbackTimers.forEach(function (l) {
              return clearTimeout(l);
            }),
            (r.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", r.onWindowResized)
            : window.detachEvent("onresize", r.onWindowResized),
          r.autoplayTimer && clearInterval(r.autoplayTimer),
          r.ro.disconnect();
      }),
      H(I(r), "componentDidUpdate", function (l) {
        if (
          (r.checkImagesLoad(),
          r.props.onReInit && r.props.onReInit(),
          r.props.lazyLoad)
        ) {
          var o = (0, J.getOnDemandLazySlides)(z(z({}, r.props), r.state));
          o.length > 0 &&
            (r.setState(function (D) {
              return { lazyLoadedList: D.lazyLoadedList.concat(o) };
            }),
            r.props.onLazyLoad && r.props.onLazyLoad(o));
        }
        r.adaptHeight();
        var s = z(z({ listRef: r.list, trackRef: r.track }, r.props), r.state),
          c = r.didPropsChange(l);
        c &&
          r.updateState(s, c, function () {
            r.state.currentSlide >=
              g4.default.Children.count(r.props.children) &&
              r.changeSlide({
                message: "index",
                index:
                  g4.default.Children.count(r.props.children) -
                  r.props.slidesToShow,
                currentSlide: r.state.currentSlide,
              }),
              r.props.autoplay ? r.autoPlay("update") : r.pause("paused");
          });
      }),
      H(I(r), "onWindowResized", function (l) {
        r.debouncedResize && r.debouncedResize.cancel(),
          (r.debouncedResize = (0, O2.default)(function () {
            return r.resizeWindow(l);
          }, 50)),
          r.debouncedResize();
      }),
      H(I(r), "resizeWindow", function () {
        var l =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          o = Boolean(r.track && r.track.node);
        if (!!o) {
          var s = z(
            z({ listRef: r.list, trackRef: r.track }, r.props),
            r.state
          );
          r.updateState(s, l, function () {
            r.props.autoplay ? r.autoPlay("update") : r.pause("paused");
          }),
            r.setState({ animating: !1 }),
            clearTimeout(r.animationEndCallback),
            delete r.animationEndCallback;
        }
      }),
      H(I(r), "updateState", function (l, o, s) {
        var c = (0, J.initializedState)(l);
        l = z(z(z({}, l), c), {}, { slideIndex: c.currentSlide });
        var D = (0, J.getTrackLeft)(l);
        l = z(z({}, l), {}, { left: D });
        var f = (0, J.getTrackCSS)(l);
        (o ||
          g4.default.Children.count(r.props.children) !==
            g4.default.Children.count(l.children)) &&
          (c.trackStyle = f),
          r.setState(c, s);
      }),
      H(I(r), "ssrInit", function () {
        if (r.props.variableWidth) {
          var l = 0,
            o = 0,
            s = [],
            c = (0, J.getPreClones)(
              z(
                z(z({}, r.props), r.state),
                {},
                { slideCount: r.props.children.length }
              )
            ),
            D = (0, J.getPostClones)(
              z(
                z(z({}, r.props), r.state),
                {},
                { slideCount: r.props.children.length }
              )
            );
          r.props.children.forEach(function (w) {
            s.push(w.props.style.width), (l += w.props.style.width);
          });
          for (var f = 0; f < c; f++)
            (o += s[s.length - 1 - f]), (l += s[s.length - 1 - f]);
          for (var p = 0; p < D; p++) l += s[p];
          for (var v = 0; v < r.state.currentSlide; v++) o += s[v];
          var B = { width: l + "px", left: -o + "px" };
          if (r.props.centerMode) {
            var m = "".concat(s[r.state.currentSlide], "px");
            B.left = "calc("
              .concat(B.left, " + (100% - ")
              .concat(m, ") / 2 ) ");
          }
          return { trackStyle: B };
        }
        var F = g4.default.Children.count(r.props.children),
          E = z(z(z({}, r.props), r.state), {}, { slideCount: F }),
          d = (0, J.getPreClones)(E) + (0, J.getPostClones)(E) + F,
          h = (100 / r.props.slidesToShow) * d,
          g = 100 / d,
          y = (-g * ((0, J.getPreClones)(E) + r.state.currentSlide) * h) / 100;
        r.props.centerMode && (y += (100 - (g * h) / 100) / 2);
        var _ = { width: h + "%", left: y + "%" };
        return { slideWidth: g + "%", trackStyle: _ };
      }),
      H(I(r), "checkImagesLoad", function () {
        var l =
            (r.list &&
              r.list.querySelectorAll &&
              r.list.querySelectorAll(".slick-slide img")) ||
            [],
          o = l.length,
          s = 0;
        Array.prototype.forEach.call(l, function (c) {
          var D = function () {
            return ++s && s >= o && r.onWindowResized();
          };
          if (!c.onclick)
            c.onclick = function () {
              return c.parentNode.focus();
            };
          else {
            var f = c.onclick;
            c.onclick = function (p) {
              f(p), c.parentNode.focus();
            };
          }
          c.onload ||
            (r.props.lazyLoad
              ? (c.onload = function () {
                  r.adaptHeight(),
                    r.callbackTimers.push(
                      setTimeout(r.onWindowResized, r.props.speed)
                    );
                })
              : ((c.onload = D),
                (c.onerror = function () {
                  D(), r.props.onLazyLoadError && r.props.onLazyLoadError();
                })));
        });
      }),
      H(I(r), "progressiveLazyLoad", function () {
        for (
          var l = [], o = z(z({}, r.props), r.state), s = r.state.currentSlide;
          s < r.state.slideCount + (0, J.getPostClones)(o);
          s++
        )
          if (r.state.lazyLoadedList.indexOf(s) < 0) {
            l.push(s);
            break;
          }
        for (
          var c = r.state.currentSlide - 1;
          c >= -(0, J.getPreClones)(o);
          c--
        )
          if (r.state.lazyLoadedList.indexOf(c) < 0) {
            l.push(c);
            break;
          }
        l.length > 0
          ? (r.setState(function (D) {
              return { lazyLoadedList: D.lazyLoadedList.concat(l) };
            }),
            r.props.onLazyLoad && r.props.onLazyLoad(l))
          : r.lazyLoadTimer &&
            (clearInterval(r.lazyLoadTimer), delete r.lazyLoadTimer);
      }),
      H(I(r), "slideHandler", function (l) {
        var o =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          s = r.props,
          c = s.asNavFor,
          D = s.beforeChange,
          f = s.onLazyLoad,
          p = s.speed,
          v = s.afterChange,
          B = r.state.currentSlide,
          m = (0, J.slideHandler)(
            z(
              z(z({ index: l }, r.props), r.state),
              {},
              { trackRef: r.track, useCSS: r.props.useCSS && !o }
            )
          ),
          F = m.state,
          E = m.nextState;
        if (!!F) {
          D && D(B, F.currentSlide);
          var d = F.lazyLoadedList.filter(function (h) {
            return r.state.lazyLoadedList.indexOf(h) < 0;
          });
          f && d.length > 0 && f(d),
            !r.props.waitForAnimate &&
              r.animationEndCallback &&
              (clearTimeout(r.animationEndCallback),
              v && v(B),
              delete r.animationEndCallback),
            r.setState(F, function () {
              c &&
                r.asNavForIndex !== l &&
                ((r.asNavForIndex = l), c.innerSlider.slideHandler(l)),
                E &&
                  (r.animationEndCallback = setTimeout(function () {
                    var h = E.animating,
                      g = L2(E, ["animating"]);
                    r.setState(g, function () {
                      r.callbackTimers.push(
                        setTimeout(function () {
                          return r.setState({ animating: h });
                        }, 10)
                      ),
                        v && v(F.currentSlide),
                        delete r.animationEndCallback;
                    });
                  }, p));
            });
        }
      }),
      H(I(r), "changeSlide", function (l) {
        var o =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          s = z(z({}, r.props), r.state),
          c = (0, J.changeSlide)(s, l);
        if (
          !(c !== 0 && !c) &&
          (o === !0 ? r.slideHandler(c, o) : r.slideHandler(c),
          r.props.autoplay && r.autoPlay("update"),
          r.props.focusOnSelect)
        ) {
          var D = r.list.querySelectorAll(".slick-current");
          D[0] && D[0].focus();
        }
      }),
      H(I(r), "clickHandler", function (l) {
        r.clickable === !1 && (l.stopPropagation(), l.preventDefault()),
          (r.clickable = !0);
      }),
      H(I(r), "keyHandler", function (l) {
        var o = (0, J.keyHandler)(l, r.props.accessibility, r.props.rtl);
        o !== "" && r.changeSlide({ message: o });
      }),
      H(I(r), "selectHandler", function (l) {
        r.changeSlide(l);
      }),
      H(I(r), "disableBodyScroll", function () {
        var l = function (s) {
          (s = s || window.event),
            s.preventDefault && s.preventDefault(),
            (s.returnValue = !1);
        };
        window.ontouchmove = l;
      }),
      H(I(r), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      H(I(r), "swipeStart", function (l) {
        r.props.verticalSwiping && r.disableBodyScroll();
        var o = (0, J.swipeStart)(l, r.props.swipe, r.props.draggable);
        o !== "" && r.setState(o);
      }),
      H(I(r), "swipeMove", function (l) {
        var o = (0, J.swipeMove)(
          l,
          z(
            z(z({}, r.props), r.state),
            {},
            {
              trackRef: r.track,
              listRef: r.list,
              slideIndex: r.state.currentSlide,
            }
          )
        );
        !o || (o.swiping && (r.clickable = !1), r.setState(o));
      }),
      H(I(r), "swipeEnd", function (l) {
        var o = (0, J.swipeEnd)(
          l,
          z(
            z(z({}, r.props), r.state),
            {},
            {
              trackRef: r.track,
              listRef: r.list,
              slideIndex: r.state.currentSlide,
            }
          )
        );
        if (!!o) {
          var s = o.triggerSlideHandler;
          delete o.triggerSlideHandler,
            r.setState(o),
            s !== void 0 &&
              (r.slideHandler(s),
              r.props.verticalSwiping && r.enableBodyScroll());
        }
      }),
      H(I(r), "touchEnd", function (l) {
        r.swipeEnd(l), (r.clickable = !0);
      }),
      H(I(r), "slickPrev", function () {
        r.callbackTimers.push(
          setTimeout(function () {
            return r.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      H(I(r), "slickNext", function () {
        r.callbackTimers.push(
          setTimeout(function () {
            return r.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      H(I(r), "slickGoTo", function (l) {
        var o =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((l = Number(l)), isNaN(l))) return "";
        r.callbackTimers.push(
          setTimeout(function () {
            return r.changeSlide(
              {
                message: "index",
                index: l,
                currentSlide: r.state.currentSlide,
              },
              o
            );
          }, 0)
        );
      }),
      H(I(r), "play", function () {
        var l;
        if (r.props.rtl) l = r.state.currentSlide - r.props.slidesToScroll;
        else if ((0, J.canGoNext)(z(z({}, r.props), r.state)))
          l = r.state.currentSlide + r.props.slidesToScroll;
        else return !1;
        r.slideHandler(l);
      }),
      H(I(r), "autoPlay", function (l) {
        r.autoplayTimer && clearInterval(r.autoplayTimer);
        var o = r.state.autoplaying;
        if (l === "update") {
          if (o === "hovered" || o === "focused" || o === "paused") return;
        } else if (l === "leave") {
          if (o === "paused" || o === "focused") return;
        } else if (l === "blur" && (o === "paused" || o === "hovered")) return;
        (r.autoplayTimer = setInterval(r.play, r.props.autoplaySpeed + 50)),
          r.setState({ autoplaying: "playing" });
      }),
      H(I(r), "pause", function (l) {
        r.autoplayTimer &&
          (clearInterval(r.autoplayTimer), (r.autoplayTimer = null));
        var o = r.state.autoplaying;
        l === "paused"
          ? r.setState({ autoplaying: "paused" })
          : l === "focused"
          ? (o === "hovered" || o === "playing") &&
            r.setState({ autoplaying: "focused" })
          : o === "playing" && r.setState({ autoplaying: "hovered" });
      }),
      H(I(r), "onDotsOver", function () {
        return r.props.autoplay && r.pause("hovered");
      }),
      H(I(r), "onDotsLeave", function () {
        return (
          r.props.autoplay &&
          r.state.autoplaying === "hovered" &&
          r.autoPlay("leave")
        );
      }),
      H(I(r), "onTrackOver", function () {
        return r.props.autoplay && r.pause("hovered");
      }),
      H(I(r), "onTrackLeave", function () {
        return (
          r.props.autoplay &&
          r.state.autoplaying === "hovered" &&
          r.autoPlay("leave")
        );
      }),
      H(I(r), "onSlideFocus", function () {
        return r.props.autoplay && r.pause("focused");
      }),
      H(I(r), "onSlideBlur", function () {
        return (
          r.props.autoplay &&
          r.state.autoplaying === "focused" &&
          r.autoPlay("blur")
        );
      }),
      H(I(r), "render", function () {
        var l = (0, P2.default)("slick-slider", r.props.className, {
            "slick-vertical": r.props.vertical,
            "slick-initialized": !0,
          }),
          o = z(z({}, r.props), r.state),
          s = (0, J.extractObject)(o, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          c = r.props.pauseOnHover;
        s = z(
          z({}, s),
          {},
          {
            onMouseEnter: c ? r.onTrackOver : null,
            onMouseLeave: c ? r.onTrackLeave : null,
            onMouseOver: c ? r.onTrackOver : null,
            focusOnSelect:
              r.props.focusOnSelect && r.clickable ? r.selectHandler : null,
          }
        );
        var D;
        if (r.props.dots === !0 && r.state.slideCount >= r.props.slidesToShow) {
          var f = (0, J.extractObject)(o, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            p = r.props.pauseOnDotsHover;
          (f = z(
            z({}, f),
            {},
            {
              clickHandler: r.changeSlide,
              onMouseEnter: p ? r.onDotsLeave : null,
              onMouseOver: p ? r.onDotsOver : null,
              onMouseLeave: p ? r.onDotsLeave : null,
            }
          )),
            (D = g4.default.createElement(b2.Dots, f));
        }
        var v,
          B,
          m = (0, J.extractObject)(o, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (m.clickHandler = r.changeSlide),
          r.props.arrows &&
            ((v = g4.default.createElement(to.PrevArrow, m)),
            (B = g4.default.createElement(to.NextArrow, m)));
        var F = null;
        r.props.vertical && (F = { height: r.state.listHeight });
        var E = null;
        r.props.vertical === !1
          ? r.props.centerMode === !0 &&
            (E = { padding: "0px " + r.props.centerPadding })
          : r.props.centerMode === !0 &&
            (E = { padding: r.props.centerPadding + " 0px" });
        var d = z(z({}, F), E),
          h = r.props.touchMove,
          g = {
            className: "slick-list",
            style: d,
            onClick: r.clickHandler,
            onMouseDown: h ? r.swipeStart : null,
            onMouseMove: r.state.dragging && h ? r.swipeMove : null,
            onMouseUp: h ? r.swipeEnd : null,
            onMouseLeave: r.state.dragging && h ? r.swipeEnd : null,
            onTouchStart: h ? r.swipeStart : null,
            onTouchMove: r.state.dragging && h ? r.swipeMove : null,
            onTouchEnd: h ? r.touchEnd : null,
            onTouchCancel: r.state.dragging && h ? r.swipeEnd : null,
            onKeyDown: r.props.accessibility ? r.keyHandler : null,
          },
          y = { className: l, dir: "ltr", style: r.props.style };
        return (
          r.props.unslick &&
            ((g = { className: "slick-list" }), (y = { className: l })),
          g4.default.createElement(
            "div",
            y,
            r.props.unslick ? "" : v,
            g4.default.createElement(
              "div",
              lt({ ref: r.listRefHandler }, g),
              g4.default.createElement(
                N2.Track,
                lt({ ref: r.trackRefHandler }, s),
                r.props.children
              )
            ),
            r.props.unslick ? "" : B,
            r.props.unslick ? "" : D
          )
        );
      }),
      (r.list = null),
      (r.track = null),
      (r.state = z(
        z({}, x2.default),
        {},
        {
          currentSlide: r.props.initialSlide,
          targetSlide: r.props.initialSlide ? r.props.initialSlide : 0,
          slideCount: g4.default.Children.count(r.props.children),
        }
      )),
      (r.callbackTimers = []),
      (r.clickable = !0),
      (r.debouncedResize = null);
    var i = r.ssrInit();
    return (r.state = z(z({}, r.state), i)), r;
  }
  return (
    M2(t, [
      {
        key: "didPropsChange",
        value: function (r) {
          for (
            var i = !1, l = 0, o = Object.keys(this.props);
            l < o.length;
            l++
          ) {
            var s = o[l];
            if (!r.hasOwnProperty(s)) {
              i = !0;
              break;
            }
            if (
              !(
                n0(r[s]) === "object" ||
                typeof r[s] == "function" ||
                isNaN(r[s])
              ) &&
              r[s] !== this.props[s]
            ) {
              i = !0;
              break;
            }
          }
          return (
            i ||
            g4.default.Children.count(this.props.children) !==
              g4.default.Children.count(r.children)
          );
        },
      },
    ]),
    t
  );
})(g4.default.Component);
var W2 = function (u) {
    return u
      .replace(/[A-Z]/g, function (e) {
        return "-" + e.toLowerCase();
      })
      .toLowerCase();
  },
  U2 = W2,
  V2 = U2,
  Q2 = function (u) {
    var e = /[height|width]$/;
    return e.test(u);
  },
  io = function (u) {
    var e = "",
      t = Object.keys(u);
    return (
      t.forEach(function (n, r) {
        var i = u[n];
        (n = V2(n)),
          Q2(n) && typeof i == "number" && (i = i + "px"),
          i === !0
            ? (e += n)
            : i === !1
            ? (e += "not " + n)
            : (e += "(" + n + ": " + i + ")"),
          r < t.length - 1 && (e += " and ");
      }),
      e
    );
  },
  q2 = function (u) {
    var e = "";
    return typeof u == "string"
      ? u
      : u instanceof Array
      ? (u.forEach(function (t, n) {
          (e += io(t)), n < u.length - 1 && (e += ", ");
        }),
        e)
      : io(u);
  },
  K2 = q2,
  dn,
  lo;
function Y2() {
  if (lo) return dn;
  lo = 1;
  function u(e) {
    (this.options = e), !e.deferSetup && this.setup();
  }
  return (
    (u.prototype = {
      constructor: u,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (e) {
        return this.options === e || this.options.match === e;
      },
    }),
    (dn = u),
    dn
  );
}
var fn, oo;
function Ec() {
  if (oo) return fn;
  oo = 1;
  function u(n, r) {
    var i = 0,
      l = n.length,
      o;
    for (i; i < l && ((o = r(n[i], i)), o !== !1); i++);
  }
  function e(n) {
    return Object.prototype.toString.apply(n) === "[object Array]";
  }
  function t(n) {
    return typeof n == "function";
  }
  return (fn = { isFunction: t, isArray: e, each: u }), fn;
}
var En, ao;
function X2() {
  if (ao) return En;
  ao = 1;
  var u = Y2(),
    e = Ec().each;
  function t(n, r) {
    (this.query = n),
      (this.isUnconditional = r),
      (this.handlers = []),
      (this.mql = window.matchMedia(n));
    var i = this;
    (this.listener = function (l) {
      (i.mql = l.currentTarget || l), i.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (t.prototype = {
      constuctor: t,
      addHandler: function (n) {
        var r = new u(n);
        this.handlers.push(r), this.matches() && r.on();
      },
      removeHandler: function (n) {
        var r = this.handlers;
        e(r, function (i, l) {
          if (i.equals(n)) return i.destroy(), !r.splice(l, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        e(this.handlers, function (n) {
          n.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var n = this.matches() ? "on" : "off";
        e(this.handlers, function (r) {
          r[n]();
        });
      },
    }),
    (En = t),
    En
  );
}
var pn, so;
function G2() {
  if (so) return pn;
  so = 1;
  var u = X2(),
    e = Ec(),
    t = e.each,
    n = e.isFunction,
    r = e.isArray;
  function i() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (i.prototype = {
      constructor: i,
      register: function (l, o, s) {
        var c = this.queries,
          D = s && this.browserIsIncapable;
        return (
          c[l] || (c[l] = new u(l, D)),
          n(o) && (o = { match: o }),
          r(o) || (o = [o]),
          t(o, function (f) {
            n(f) && (f = { match: f }), c[l].addHandler(f);
          }),
          this
        );
      },
      unregister: function (l, o) {
        var s = this.queries[l];
        return (
          s && (o ? s.removeHandler(o) : (s.clear(), delete this.queries[l])),
          this
        );
      },
    }),
    (pn = i),
    pn
  );
}
var Dn, co;
function Z2() {
  if (co) return Dn;
  co = 1;
  var u = G2();
  return (Dn = new u()), Dn;
}
(function (u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
  var e = l(N.exports),
    t = kt,
    n = l(K2),
    r = l(Fi),
    i = k;
  function l(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function o(S) {
    return (
      (o =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (C) {
              return typeof C;
            }
          : function (C) {
              return C &&
                typeof Symbol == "function" &&
                C.constructor === Symbol &&
                C !== Symbol.prototype
                ? "symbol"
                : typeof C;
            }),
      o(S)
    );
  }
  function s() {
    return (
      (s = Object.assign
        ? Object.assign.bind()
        : function (S) {
            for (var C = 1; C < arguments.length; C++) {
              var T = arguments[C];
              for (var L in T)
                Object.prototype.hasOwnProperty.call(T, L) && (S[L] = T[L]);
            }
            return S;
          }),
      s.apply(this, arguments)
    );
  }
  function c(S, C) {
    var T = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var L = Object.getOwnPropertySymbols(S);
      C &&
        (L = L.filter(function (M) {
          return Object.getOwnPropertyDescriptor(S, M).enumerable;
        })),
        T.push.apply(T, L);
    }
    return T;
  }
  function D(S) {
    for (var C = 1; C < arguments.length; C++) {
      var T = arguments[C] != null ? arguments[C] : {};
      C % 2
        ? c(Object(T), !0).forEach(function (L) {
            y(S, L, T[L]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(T))
        : c(Object(T)).forEach(function (L) {
            Object.defineProperty(S, L, Object.getOwnPropertyDescriptor(T, L));
          });
    }
    return S;
  }
  function f(S, C) {
    if (!(S instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function p(S, C) {
    for (var T = 0; T < C.length; T++) {
      var L = C[T];
      (L.enumerable = L.enumerable || !1),
        (L.configurable = !0),
        "value" in L && (L.writable = !0),
        Object.defineProperty(S, _(L.key), L);
    }
  }
  function v(S, C, T) {
    return (
      C && p(S.prototype, C),
      T && p(S, T),
      Object.defineProperty(S, "prototype", { writable: !1 }),
      S
    );
  }
  function B(S, C) {
    if (typeof C != "function" && C !== null)
      throw new TypeError("Super expression must either be null or a function");
    (S.prototype = Object.create(C && C.prototype, {
      constructor: { value: S, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(S, "prototype", { writable: !1 }),
      C && m(S, C);
  }
  function m(S, C) {
    return (
      (m = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (L, M) {
            return (L.__proto__ = M), L;
          }),
      m(S, C)
    );
  }
  function F(S) {
    var C = h();
    return function () {
      var L = g(S),
        M;
      if (C) {
        var j = g(this).constructor;
        M = Reflect.construct(L, arguments, j);
      } else M = L.apply(this, arguments);
      return E(this, M);
    };
  }
  function E(S, C) {
    if (C && (o(C) === "object" || typeof C == "function")) return C;
    if (C !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return d(S);
  }
  function d(S) {
    if (S === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return S;
  }
  function h() {
    try {
      var S = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch {}
    return (h = function () {
      return !!S;
    })();
  }
  function g(S) {
    return (
      (g = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (T) {
            return T.__proto__ || Object.getPrototypeOf(T);
          }),
      g(S)
    );
  }
  function y(S, C, T) {
    return (
      (C = _(C)),
      C in S
        ? Object.defineProperty(S, C, {
            value: T,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (S[C] = T),
      S
    );
  }
  function _(S) {
    var C = w(S, "string");
    return o(C) == "symbol" ? C : String(C);
  }
  function w(S, C) {
    if (o(S) != "object" || !S) return S;
    var T = S[Symbol.toPrimitive];
    if (T !== void 0) {
      var L = T.call(S, C || "default");
      if (o(L) != "object") return L;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(S);
  }
  var P = (0, i.canUseDOM)() && Z2();
  u.default = (function (S) {
    B(T, S);
    var C = F(T);
    function T(L) {
      var M;
      return (
        f(this, T),
        (M = C.call(this, L)),
        y(d(M), "innerSliderRefHandler", function (j) {
          return (M.innerSlider = j);
        }),
        y(d(M), "slickPrev", function () {
          return M.innerSlider.slickPrev();
        }),
        y(d(M), "slickNext", function () {
          return M.innerSlider.slickNext();
        }),
        y(d(M), "slickGoTo", function (j) {
          var iu =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return M.innerSlider.slickGoTo(j, iu);
        }),
        y(d(M), "slickPause", function () {
          return M.innerSlider.pause("paused");
        }),
        y(d(M), "slickPlay", function () {
          return M.innerSlider.autoPlay("play");
        }),
        (M.state = { breakpoint: null }),
        (M._responsiveMediaHandlers = []),
        M
      );
    }
    return (
      v(T, [
        {
          key: "media",
          value: function (M, j) {
            P.register(M, j),
              this._responsiveMediaHandlers.push({ query: M, handler: j });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var M = this;
            if (this.props.responsive) {
              var j = this.props.responsive.map(function (l4) {
                return l4.breakpoint;
              });
              j.sort(function (l4, N4) {
                return l4 - N4;
              }),
                j.forEach(function (l4, N4) {
                  var O;
                  N4 === 0
                    ? (O = (0, n.default)({ minWidth: 0, maxWidth: l4 }))
                    : (O = (0, n.default)({
                        minWidth: j[N4 - 1] + 1,
                        maxWidth: l4,
                      })),
                    (0, i.canUseDOM)() &&
                      M.media(O, function () {
                        M.setState({ breakpoint: l4 });
                      });
                });
              var iu = (0, n.default)({ minWidth: j.slice(-1)[0] });
              (0, i.canUseDOM)() &&
                this.media(iu, function () {
                  M.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function (M) {
              P.unregister(M.query, M.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var M = this,
              j,
              iu;
            this.state.breakpoint
              ? ((iu = this.props.responsive.filter(function (ou) {
                  return ou.breakpoint === M.state.breakpoint;
                })),
                (j =
                  iu[0].settings === "unslick"
                    ? "unslick"
                    : D(D(D({}, r.default), this.props), iu[0].settings)))
              : (j = D(D({}, r.default), this.props)),
              j.centerMode && (j.slidesToScroll > 1, (j.slidesToScroll = 1)),
              j.fade &&
                (j.slidesToShow > 1,
                j.slidesToScroll > 1,
                (j.slidesToShow = 1),
                (j.slidesToScroll = 1));
            var l4 = e.default.Children.toArray(this.props.children);
            (l4 = l4.filter(function (ou) {
              return typeof ou == "string" ? !!ou.trim() : !!ou;
            })),
              j.variableWidth &&
                (j.rows > 1 || j.slidesPerRow > 1) &&
                (console.warn(
                  "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                ),
                (j.variableWidth = !1));
            for (
              var N4 = [], O = null, R = 0;
              R < l4.length;
              R += j.rows * j.slidesPerRow
            ) {
              for (
                var $ = [], Q = R;
                Q < R + j.rows * j.slidesPerRow;
                Q += j.slidesPerRow
              ) {
                for (
                  var r4 = [], j4 = Q;
                  j4 < Q + j.slidesPerRow &&
                  (j.variableWidth &&
                    l4[j4].props.style &&
                    (O = l4[j4].props.style.width),
                  !(j4 >= l4.length));
                  j4 += 1
                )
                  r4.push(
                    e.default.cloneElement(l4[j4], {
                      key: 100 * R + 10 * Q + j4,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / j.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                $.push(e.default.createElement("div", { key: 10 * R + Q }, r4));
              }
              j.variableWidth
                ? N4.push(
                    e.default.createElement(
                      "div",
                      { key: R, style: { width: O } },
                      $
                    )
                  )
                : N4.push(e.default.createElement("div", { key: R }, $));
            }
            if (j === "unslick") {
              var lu = "regular slider " + (this.props.className || "");
              return e.default.createElement("div", { className: lu }, l4);
            } else
              N4.length <= j.slidesToShow && !j.infinite && (j.unslick = !0);
            return e.default.createElement(
              t.InnerSlider,
              s(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, i.filterSettings)(j)
              ),
              N4
            );
          },
        },
      ]),
      T
    );
  })(e.default.Component);
})(Ls);
(function (u) {
  Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
  var e = t(Ls);
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  u.default = e.default;
})(Ts);
const Ci = gr(Ts);
const J2 = "_slider_19sia_1",
  c0 = {
    slider: J2,
    "slider-container": "_slider-container_19sia_11",
    "slick-arrow": "_slick-arrow_19sia_25",
    "slick-prev": "_slick-prev_19sia_59",
    "slick-next": "_slick-next_19sia_73",
  },
  u5 = "_card_e8w63_1",
  e5 = "_container_e8w63_17",
  t5 = "_background_e8w63_37",
  n5 = "_footer_e8w63_69",
  r5 = "_footer_hovered_e8w63_95",
  i5 = "_title_e8w63_107",
  l5 = "_button_e8w63_121",
  d0 = {
    card: u5,
    container: e5,
    background: t5,
    footer: n5,
    footer_hovered: r5,
    title: i5,
    button: l5,
  };
function o5({ title: u, link: e, image: t }) {
  return a("div", {
    className: `${d0.card}`,
    children: x("div", {
      className: d0.container,
      children: [
        a("div", {
          className: d0.background,
          children: a("img", { src: t, alt: "" }),
        }),
        x("div", {
          className: d0.footer,
          children: [
            a("h3", { className: d0.title, children: u }),
            a(F4, {
              className: `${d0.button} button`,
              to: e,
              children: a("svg", {
                children: a("use", {
                  href: "./images/icons/arrows.svg#arrow-right",
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function fo({ slides: u }) {
  const e = {
    className: `${c0.slider}`,
    variableWidth: !1,
    infinite: !0,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: !0,
    initialSlide: 0,
    nextArrow: a(t, {}),
    prevArrow: a(n, {}),
  };
  function t(r) {
    const { className: i, style: l, onClick: o } = r;
    return a("button", {
      className: `${c0["slick-arrow"]} ${c0["slick-next"]}`,
      onClick: o,
      children: a("svg", {
        children: a("use", { href: "./images/icons/arrows.svg#arrow-right" }),
      }),
    });
  }
  function n(r) {
    const { className: i, style: l, onClick: o } = r;
    return a("button", {
      className: `${c0["slick-arrow"]} ${c0["slick-prev"]}`,
      onClick: o,
      children: a("svg", {
        children: a("use", { href: "./images/icons/arrows.svg#arrow-right" }),
      }),
    });
  }
  return a("section", {
    className: c0["slider-container"],
    children: a(Ci, {
      ...e,
      children: u.map((r, i) =>
        a(o5, { image: r.image, title: r.title, link: r.link }, i)
      ),
    }),
  });
}
const a5 = "_searchbar_wg85v_1",
  s5 = "_container_wg85v_11",
  c5 = "_title_wg85v_27",
  d5 = "_tags_wg85v_41",
  f5 = "_tag_wg85v_41",
  E5 = "_input_wg85v_69",
  mu = {
    searchbar: a5,
    container: s5,
    title: c5,
    tags: d5,
    tag: f5,
    "input-container": "_input-container_wg85v_69",
    "search-button": "_search-button_wg85v_77",
    input: E5,
  };
function p5({ title: u, isInputExist: e, tags: t }) {
  N.exports.useState("");
  const n = () =>
    x("div", {
      className: mu["input-container"],
      children: [
        a("button", {
          className: mu["search-button"],
          children: a("img", { src: "./images/icons/search.svg", alt: "" }),
        }),
        a("input", {
          type: "text",
          placeholder: "Search",
          className: mu.input,
        }),
      ],
    });
  return a("div", {
    className: mu.searchbar,
    children: x("div", {
      className: mu.container,
      children: [
        u && a("p", { className: mu.title, children: u }),
        e && a(n, {}),
        t &&
          a("div", {
            className: mu.tags,
            children: t.map((r, i) =>
              a("button", { className: mu.tag, children: r }, i)
            ),
          }),
      ],
    }),
  });
}
function D5({ title: u, slides: e }) {
  return x("section", {
    className: Hl.hotels,
    children: [
      u &&
        a("h2", {
          className: `${Hl.title} title`,
          dangerouslySetInnerHTML: { __html: $u(u) },
        }),
      a(p5, { title: "", isInputExist: !0, tags: ["Family", "Business"] }),
      a(fo, { slides: e }),
      a(fo, { slides: e }),
    ],
  });
}
const h5 = "_title_eza2e_33",
  v5 = "_slider__navigation_eza2e_133",
  B5 = "_sliderNavigation__button_eza2e_149",
  f0 = {
    "slider-container": "_slider-container_eza2e_1",
    "slick-track": "_slick-track_eza2e_13",
    title: h5,
    "slick-list": "_slick-list_eza2e_41",
    "slick-arrow": "_slick-arrow_eza2e_59",
    "slick-next": "_slick-next_eza2e_91",
    "slick-prev": "_slick-prev_eza2e_93",
    slider__navigation: v5,
    sliderNavigation__button: B5,
  },
  m5 = "_card_vsm2y_1",
  g5 = "_background_vsm2y_43",
  F5 = "_header_vsm2y_87",
  y5 = "_tags_vsm2y_97",
  C5 = "_tag_vsm2y_97",
  _5 = "_icon_vsm2y_121",
  A5 = "_footer_vsm2y_161",
  S5 = "_title_vsm2y_171",
  w5 = "_description_vsm2y_183",
  k5 = "_button_vsm2y_197",
  $4 = {
    card: m5,
    "without-button": "_without-button_vsm2y_35",
    background: g5,
    "background-image": "_background-image_vsm2y_61",
    header: F5,
    tags: y5,
    tag: C5,
    icon: _5,
    footer: A5,
    title: S5,
    description: w5,
    button: k5,
  };
function x5({
  tags: u,
  tagIcon: e,
  title: t,
  description: n,
  isLinkExist: r,
  linkText: i,
  link: l,
  background: o,
}) {
  const s = N.exports.useRef(null),
    c = N.exports.useRef(null);
  let D = !1;
  return (
    N.exports.useEffect(() => {
      if (!c || !s) return;
      let f, p;
      const v = (F) => {
          setTimeout(() => {
            D || ((f = F.clientX), (p = F.clientY)), (D = !0);
          }, 300),
            setTimeout(() => {
              s.current.addEventListener("mousemove", B);
            }, 0);
        },
        B = (F) => {
          if (!f || !p) return;
          let E = (F.clientX - f) / -20,
            d = (F.clientY - p) / -50;
          c.current.style.transform = "translate(" + E + "px, " + d + "px)";
        },
        m = () => {
          (c.current.style.transform = "translate(0px, 0px)"),
            setTimeout(() => {
              D = !1;
            }, 300);
        };
      return (
        s.current.addEventListener("mouseenter", v),
        s.current.addEventListener("mouseleave", m),
        () => {
          s &&
            s.current &&
            (s.current.removeEventListener("mouseenter", v),
            s.current.removeEventListener("mousemove", B),
            s.current.removeEventListener("mouseleave", m));
        }
      );
    }, []),
    x("div", {
      className: `${$4.card} ${!r && $4["without-button"]}`,
      ref: s,
      children: [
        a("div", {
          className: $4.background,
          children: a("img", {
            className: $4["background-image"],
            src: o,
            ref: c,
            alt: "",
          }),
        }),
        a("div", {
          className: $4.header,
          children: x("div", {
            className: $4.tags,
            children: [
              u.map((f, p) =>
                a("div", { className: `${$4.tag} button`, children: f }, p)
              ),
              e &&
                a("div", {
                  className: `${$4.icon} button`,
                  children: a("img", { src: e, alt: "" }),
                }),
            ],
          }),
        }),
        x("div", {
          className: $4.footer,
          children: [
            a("h3", { className: $4.title, children: t }),
            a("p", { className: $4.description, children: n }),
            r &&
              a("a", {
                className: `${$4.button} button`,
                href: l,
                children: i,
              }),
          ],
        }),
      ],
    })
  );
}
function Eo({ slides: u, title: e }) {
  const t = {
    className: "slider",
    variableWidth: !0,
    infinite: !0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: !0,
    initialSlide: 0,
    nextArrow: a(n, {}),
    prevArrow: a(r, {}),
  };
  function n(i) {
    const { className: l, style: o, onClick: s } = i;
    return a("div", {
      className: `${f0["slick-arrow"]} ${f0["slick-next"]}`,
      onClick: s,
      children: a("svg", {
        children: a("use", { href: "./images/icons/arrows.svg#arrow-right" }),
      }),
    });
  }
  function r(i) {
    const { className: l, style: o, onClick: s } = i;
    return a("div", {
      className: `${f0["slick-arrow"]} ${f0["slick-prev"]}`,
      onClick: s,
      children: a("svg", {
        children: a("use", { href: "./images/icons/arrows.svg#arrow-right" }),
      }),
    });
  }
  return x("section", {
    className: f0["slider-container"],
    children: [
      a("h2", {
        className: `${f0.title} title`,
        dangerouslySetInnerHTML: { __html: $u(e) },
      }),
      a(Ci, {
        ...t,
        children: u.map((i, l) =>
          a(
            x5,
            {
              tags: i.tags,
              tagIcon: i.tagIcon,
              background: i.background,
              title: i.title,
              description: i.description,
              isLinkExist: i.isLinkExist,
              linkText: i.linkText,
              link: i.link,
            },
            l
          )
        ),
      }),
    ],
  });
}
function O5({ text: u }) {
  const e = $u(u);
  return a("div", {
    className: "runline noselect",
    children: x("div", {
      className: "runline__container",
      children: [
        a("p", {
          className: "runline__item",
          dangerouslySetInnerHTML: { __html: e },
        }),
        a("p", {
          className: "runline__item",
          dangerouslySetInnerHTML: { __html: e },
        }),
        a("p", {
          className: "runline__item",
          dangerouslySetInnerHTML: { __html: e },
        }),
        a("p", {
          className: "runline__item",
          dangerouslySetInnerHTML: { __html: e },
        }),
      ],
    }),
  });
}
const P5 = "_footer_1m1yu_1",
  N5 = "_top_1m1yu_33",
  b5 = "_middle_1m1yu_35",
  T5 = "_bottom_1m1yu_37",
  L5 = "_description_1m1yu_55",
  R5 = "_networks_1m1yu_65",
  z5 = "_image_1m1yu_95",
  gu = {
    footer: P5,
    top: N5,
    middle: b5,
    bottom: T5,
    description: L5,
    "top-link": "_top-link_1m1yu_63",
    networks: R5,
    image: z5,
  };
function M5({ color: u, image: e }) {
  return x("footer", {
    className: gu.footer,
    style: { backgroundColor: u },
    children: [
      x("div", {
        className: gu.top,
        children: [
          a("p", {
            className: gu.description,
            children:
              "JSC «First class solutions» offers premium bookings for hotels, villas, private jets, and yachts through trusted top partners.",
          }),
          a("a", {
            className: gu["top-link"],
            href: " tel:+79033844842",
            children: "+7 903 384-48-42",
          }),
        ],
      }),
      x("div", {
        className: gu.middle,
        children: [
          x("div", {
            children: [
              a("p", { children: "INN: 9707025574" }),
              a("p", { children: "OGRN: 1247700148959" }),
            ],
          }),
          a("div", {
            className: gu.image,
            children: a("img", { src: e, alt: "" }),
          }),
          x("div", {
            className: gu.networks,
            children: [
              a("a", { href: "", children: "Telegram" }),
              a("a", { href: "", children: "instagram" }),
              a("a", { href: "", children: "WhatsApp" }),
            ],
          }),
        ],
      }),
      x("div", {
        className: gu.bottom,
        children: [
          a("p", { children: " 2024 \xA9 JSC «First class solutions»" }),
          a(F4, {
            to: "/policy",
            children:
              "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
          }),
          a(F4, {
            to: "/public-offer",
            children:
              "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0444\u0435\u0440\u0442\u0430",
          }),
          a("p", { children: "Developed by Digital Trinity" }),
        ],
      }),
    ],
  });
}
const j5 = "_slider__navigation_16l1q_133",
  $5 = "_sliderNavigation__button_16l1q_149",
  I5 = "_slide_16l1q_1",
  H5 = "_card_16l1q_205",
  W5 = "_background_16l1q_247",
  U5 = "_header_16l1q_277",
  V5 = "_tags_16l1q_287",
  Q5 = "_tag_16l1q_287",
  q5 = "_icon_16l1q_311",
  K5 = "_footer_16l1q_339",
  Y5 = "_title_16l1q_343",
  X5 = "_description_16l1q_361",
  G5 = "_button_16l1q_381",
  Y = {
    "slider-container": "_slider-container_16l1q_1",
    "slick-track": "_slick-track_16l1q_13",
    "main-title": "_main-title_16l1q_33",
    "slick-list": "_slick-list_16l1q_41",
    "slick-arrow": "_slick-arrow_16l1q_59",
    "slick-next": "_slick-next_16l1q_91",
    "slick-prev": "_slick-prev_16l1q_93",
    slider__navigation: j5,
    sliderNavigation__button: $5,
    slide: I5,
    "active-card": "_active-card_16l1q_197",
    card: H5,
    "without-button": "_without-button_16l1q_239",
    background: W5,
    header: U5,
    tags: V5,
    tag: Q5,
    icon: q5,
    footer: K5,
    title: Y5,
    description: X5,
    button: G5,
  };
function Z5({
  tags: u,
  tagIcon: e,
  title: t,
  description: n,
  isLinkExist: r,
  linkText: i,
  link: l,
  background: o,
}) {
  return x("div", {
    className: `${Y.card} ${!r && Y["without-button"]}`,
    children: [
      a("div", {
        className: Y.background,
        children: a("img", { src: o, alt: "" }),
      }),
      a("div", {
        className: Y.header,
        children: x("div", {
          className: Y.tags,
          children: [
            u.map((s, c) =>
              a("div", { className: `${Y.tag} button`, children: s }, c)
            ),
            e &&
              a("div", {
                className: `${Y.icon} button`,
                children: a("img", { src: e, alt: "" }),
              }),
          ],
        }),
      }),
      x("div", {
        className: Y.footer,
        children: [
          a("h3", { className: Y.title, children: t }),
          a("p", { className: Y.description, children: n }),
          r &&
            a("a", { className: `${Y.button} button`, href: l, children: i }),
        ],
      }),
    ],
  });
}
function pc(u, e) {
  const t = [];
  for (let n = 0; n < u.length; n += e) t.push(u.slice(n, n + e));
  return t;
}
const J5 = [1, 2, 3, 4, 5, 6, 7, 8];
pc(J5, 3);
function up({ slides: u, title: e }) {
  let t, n, r;
  const i = {
    className: "slider main-slider",
    variableWidth: !1,
    infinite: !0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: !0,
    initialSlide: 0,
    nextArrow: a(l, {}),
    prevArrow: a(o, {}),
    onInit: () => {
      c();
    },
    afterChange: () => {
      n = t.querySelector(".slick-current");
    },
    beforeChange: () => {
      n
        .querySelector('[class*="active-card"]')
        .classList.remove(Y["active-card"]),
        r.forEach((f) => {
          f.classList.add(Y["active-card"]);
        });
    },
  };
  function l(D) {
    const { className: f, style: p, onClick: v } = D;
    return a("div", {
      className: `${Y["slick-arrow"]} ${Y["slick-next"]}`,
      onClick: v,
      children: a("svg", {
        children: a("use", { href: "./images/icons/arrows.svg#arrow-right" }),
      }),
    });
  }
  function o(D) {
    const { className: f, style: p, onClick: v } = D;
    return a("div", {
      className: `${Y["slick-arrow"]} ${Y["slick-prev"]}`,
      onClick: v,
      children: a("svg", {
        children: a("use", { href: "./images/icons/arrows.svg#arrow-right" }),
      }),
    });
  }
  const s = pc(u, 3);
  function c() {
    console.log("init"),
      (t = document.querySelector(".main-slider")),
      (n = t.querySelector(".slick-current"));
    const D = Array.from(t.querySelectorAll(".slick-slide")),
      f = t.querySelectorAll('[class*="card"]');
    f.forEach((p) => {
      p.classList.add(Y.card);
    }),
      !(!n || !D) &&
        ((r = D.map((p) => p.querySelector('[class*="card"]'))),
        r.forEach((p) => {
          p.classList.add(Y["active-card"]);
        }),
        f.forEach((p) => {
          p.addEventListener("mouseover", (v) => {
            console.log("change");
            const B = n.querySelector('[class*="active-card"]');
            p.classList.contains(Y["active-card"]) ||
              (B &&
                B.classList &&
                (B.classList.remove(Y["active-card"]),
                p.classList.add(Y["active-card"])));
          });
        }));
  }
  return x("section", {
    className: Y["slider-container"],
    children: [
      a("h2", {
        className: `${Y["main-title"]} title`,
        dangerouslySetInnerHTML: { __html: $u(e) },
      }),
      a(Ci, {
        ...i,
        children: s.map((D, f) =>
          a(
            "div",
            {
              children: a("div", {
                className: Y.slide,
                children: D.map((p, v) =>
                  a(
                    Z5,
                    {
                      tags: p.tags,
                      tagIcon: p.tagIcon,
                      background: p.background,
                      title: p.title,
                      description: p.description,
                      isLinkExist: p.isLinkExist,
                      linkText: p.linkText,
                      link: p.link,
                    },
                    v
                  )
                ),
              }),
            },
            f
          )
        ),
      }),
    ],
  });
}
function ep() {
  return x(Bi, {
    children: [
      a(gi, { full: !1, transparent: !0 }),
      a(tE, {
        full: !0,
        country: "Visit /Russian federation/ with First Class",
        image: "./images/mainPage/0.jpg",
        isButtonExist: !0,
      }),
      a(nE, {
        title: "/top/ destinations",
        full: !0,
        places: {
          1: [
            "Antarctica",
            "",
            "./images/circle/points/antarctica.svg",
            "./images/circle/backgrounds/antarctica.jpg",
          ],
          2: [
            "Asia",
            "",
            "./images/circle/points/asia.svg",
            "./images/circle/backgrounds/asia.jpg",
          ],
          3: [
            "Australia & oceania",
            "",
            "./images/circle/points/oceania.svg",
            "./images/circle/backgrounds/oceania.jpg",
          ],
          4: [
            "Africa",
            "",
            "./images/circle/points/africa.svg",
            "./images/circle/backgrounds/africa.jpg",
          ],
          5: [
            "Europe",
            "",
            "./images/circle/points/europe.svg",
            "./images/circle/backgrounds/europe.jpg",
          ],
          6: [
            "Middle-east",
            "",
            "./images/circle/points/middle-east.svg",
            "./images/circle/backgrounds/middle-east.jpg",
          ],
        },
      }),
      a(D5, {
        title: "choose /Our HOTELS/",
        slides: [
          {
            title: "Hotel",
            image: "./images/mainPage/hotel.jpg",
            link: "/hotel",
          },
          {
            title: "Hotel",
            image: "./images/mainPage/hotel.jpg",
            link: "/hotel",
          },
          {
            title: "Hotel",
            image: "./images/mainPage/hotel.jpg",
            link: "/hotel",
          },
          {
            title: "Hotel",
            image: "./images/mainPage/hotel.jpg",
            link: "/hotel",
          },
        ],
      }),
      a(Eo, {
        slides: [
          {
            tags: [],
            tagIcon: "",
            title: "Business Trips",
            description:
              "Organizing employee travel for business meetings, negotiations, conferences, and exhibitions",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/10.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Incentive Tours",
            description:
              "Trips for employees as a reward for work achievements. These tours may include leisure activities, entertainment events, and team-building exercises",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/01.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Corporate Events",
            description:
              "Organizing conferences, seminars, training sessions, exhibitions, and presentations",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/2.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Team Building",
            description:
              "Organizing activities aimed at strengthening team cohesion and improving team interaction. These can include sports events, quests, outdoor training, and more",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/1.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Educational Trips",
            description:
              "Organizing trips for employee skill enhancement, learning new skills, and exchanging experiences with colleagues from other companies or countries",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/3.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Offsite Strategic Sessions",
            description:
              "Organizing offsite meetings for company leadership for strategic planning and making key decisions",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/4.jpg",
          },
        ],
        title: "For /Busy Bee\u2019s/ on the Fly",
      }),
      a(up, {
        slides: [
          {
            tags: [],
            tagIcon: "",
            title: "Fast Track",
            description:
              "Personal meeting of the passenger at the plane and escorting to the airport exit or VIP lounge",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/5.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Meet+Greet",
            description:
              "Personal meeting of the passenger at the plane and escorting to the airport exit or VIP lounge",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/6.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Transfer",
            description:
              "Provides high-class vehicles for airport transfers or within the airport",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/7.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Lounge",
            description:
              "Premium lounges feature enhanced design and a more diverse menu, often providing additional services",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/8.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Concierge",
            description:
              "A personal assistant ready to fulfill any passenger requests, including booking hotels, restaurants, events",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/9.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Private Suites",
            description:
              "Fully isolated rooms with individual service, ensure maximum privacy and comfort",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/11.jpg",
          },
        ],
        title: "Premium /care/ for a Premium /Experience/",
      }),
      a(Eo, {
        slides: [
          {
            tags: [],
            tagIcon: "",
            title: "Individual Tours",
            description:
              "Enjoy unique, tailor-made journeys with custom itineraries and a multilingual personal guide for ultimate adventure",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/16.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Luxury Travel",
            description:
              "Stay in the finest hotels and exclusive private residences in stunning and secluded locations",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/11.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Transport & Logistics",
            description:
              " Travel in comfort and privacy with private jets, helicopters, and luxury yachts, tailored to your needs",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/12.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Private Events",
            description:
              "Celebrate special moments with meticulously organized private events like weddings, birthdays or concerts",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/13.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Exclusive Experiences",
            description:
              "Indulge in themed travel and adventure tours that cater to your unique interests",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/14.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Health & Wellness",
            description:
              "Rejuvenate at top spa resorts with personalized programs or receive high-quality medical treatments worldwide",
            isLinkExist: !0,
            linkText: "Explore",
            link: "#",
            background: "./images/mainPage/15.jpg",
          },
        ],
        title: "Exclusive /Voyages/ Without /Boundaries/",
      }),
      a(O5, {
        text: "This site is /under development/ Some functions may /not be available/",
      }),
      a(M5, { color: "#397b9e", image: "./images/mainPage/0.jpg" }),
    ],
  });
}
const tp = "_root_gkv9f_1",
  np = "_noselect_gkv9f_1",
  rp = "_title_gkv9f_1",
  ip = "_cursive_gkv9f_1",
  lp = "_paragraph_gkv9f_1",
  op = "_button_gkv9f_1",
  ap = "_video_gkv9f_1",
  sp = "_video1_gkv9f_1",
  cp = "_video2_gkv9f_1",
  dp = "_video3_gkv9f_1",
  fp = "_video_showed_gkv9f_1",
  Ep = "_policydescription_gkv9f_5",
  pp = "_policytitle_gkv9f_23",
  E0 = {
    root: tp,
    noselect: np,
    title: rp,
    cursive: ip,
    paragraph: lp,
    button: op,
    "video-container": "_video-container_gkv9f_1",
    video: ap,
    video1: sp,
    video2: cp,
    video3: dp,
    video_showed: fp,
    "video-button": "_video-button_gkv9f_1",
    policydescription: Ep,
    policytitle: pp,
  };
function Dp() {
  const u = $u(
      "/\u041F\u041E\u041B\u0418\u0422\u0418\u041A\u0410/ \u0412 \u041E\u0422\u041D\u041E\u0428\u0415\u041D\u0418\u0418 \u041E\u0411\u0420\u0410\u0411\u041E\u0422\u041A\u0418 /\u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0425 \u0414\u0410\u041D\u041D\u042B\u0425/"
    ),
    e = $u(
      "\u0421\u041E\u0413\u041B\u0410\u0421\u0418\u0415 \u041D\u0410 \u041E\u0411\u0420\u0410\u0411\u041E\u0422\u041A\u0423 /\u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0425 \u0414\u0410\u041D\u041D\u042B\u0425/"
    );
  return x(Bi, {
    children: [
      x("section", {
        className: E0.policydescription,
        children: [
          a(gi, { full: !1, transparent: !1 }),
          a("h2", {
            className: `${E0.policytitle} title`,
            dangerouslySetInnerHTML: { __html: u },
          }),
          x("p", {
            className: E0.policyparagraph,
            children: [
              "1. \u041E\u0411\u0429\u0418\u0415 \u041F\u041E\u041B\u041E\u0416\u0415\u041D\u0418\u042F",
              a("br", {}),
              a("br", {}),
              "1.1. \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 (\u0434\u0430\u043B\u0435\u0435 \u2013 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430) \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0441\u0430\u0439\u0442\u0430 (\u0434\u0430\u043B\u0435\u0435 \u2013 \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445), \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043D\u0430 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0435\u043C \u0435\u043C\u0443 \u0441\u0430\u0439\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 \xAB\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\xBBwww.ilovefirstclass.com(\u0434\u0430\u043B\u0435\u0435 \u2013 \u0441\u0430\u0439\u0442).",
              a("br", {}),
              a("br", {}),
              "1.2. \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0435\u0439 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438, \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043E\u0442 27.07.2006 \u2116152-\u0424\u0417 \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB, \u0438\u043D\u044B\u043C\u0438 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u043C\u0438 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u043C\u0438 \u0430\u043A\u0442\u0430\u043C\u0438 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438, \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u043C\u0438 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
              a("br", {}),
              a("br", {}),
              "1.3. \u041F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445, \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u0445 \u0441\u0431\u043E\u0440\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435, \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \u043E\u0442 27.07.2006 \u2116152-\u0424\u0417 \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB.",
              a("br", {}),
              a("br", {}),
              "1.4. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u043C\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445:",
              a("br", {}),
              a("li", {
                children:
                  " \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u043B\u0436\u043D\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0439 \u0438 \u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435;",
              }),
              a("li", {
                children:
                  " \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u043B\u0436\u043D\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0435\u043C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0445, \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439;",
              }),
              a("li", {
                children:
                  " \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u0435\u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u0430\u044F \u0441 \u0446\u0435\u043B\u044F\u043C\u0438 \u0441\u0431\u043E\u0440\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u0446\u0435\u043B\u044F\u0445, \u043D\u0435\u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0445 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439;",
              }),
              a("li", {
                children:
                  " \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0442 \u0446\u0435\u043B\u044F\u043C \u0438\u0445 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438;",
              }),
              a("li", {
                children:
                  " \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0438 \u043E\u0431\u044A\u0435\u043C \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u0446\u0435\u043B\u044F\u043C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438;",
              }),
              a("li", {
                children:
                  " \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0438\u0437\u0431\u044B\u0442\u043E\u0447\u043D\u044B\u043C\u0438 \u043F\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044E \u043A \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u0446\u0435\u043B\u044F\u043C \u0438\u0445 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438;",
              }),
              a("li", {
                children:
                  " \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u044B \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0438\u0445 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C, \u0430 \u0432 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043F\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044E \u043A \u0446\u0435\u043B\u044F\u043C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043C\u0435\u0440\u044B \u043B\u0438\u0431\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0442\u044C \u0438\u0445 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u043F\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044E \u0438\u043B\u0438 \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044E \u043D\u0435\u043F\u043E\u043B\u043D\u044B\u0445 \u0438\u043B\u0438 \u043D\u0435\u0442\u043E\u0447\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u043B\u0436\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432 \u0444\u043E\u0440\u043C\u0435, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0435\u0439 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u0435 \u0434\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u044D\u0442\u043E\u0433\u043E \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0446\u0435\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0435\u0441\u043B\u0438 \u0441\u0440\u043E\u043A \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C, \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C, \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E, \u0432\u044B\u0433\u043E\u0434\u043E\u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043B\u0435\u043C \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044E \u043B\u0438\u0431\u043E \u043E\u0431\u0435\u0437\u043B\u0438\u0447\u0438\u0432\u0430\u043D\u0438\u044E \u043F\u043E \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0438 \u0446\u0435\u043B\u0435\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043B\u0438 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0443\u0442\u0440\u0430\u0442\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0438 \u044D\u0442\u0438\u0445 \u0446\u0435\u043B\u0435\u0439, \u0435\u0441\u043B\u0438 \u0438\u043D\u043E\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043E \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C.",
              }),
              a("br", {}),
              a("br", {}),
              "1.5. \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432 \u0446\u0435\u043B\u044F\u0445 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433, \u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043E\u0431\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0441\u0430\u0439\u0442 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430.",
              a("br", {}),
              a("br", {}),
              "1.6. \u0421\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0434\u0430\u0435\u0442 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0438\u0445 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E, \u0441\u0432\u043E\u0435\u0439 \u0432\u043E\u043B\u0435\u0439 \u0438 \u0432 \u0441\u0432\u043E\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0435. \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C, \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0438 \u0441\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C. \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0434\u0430\u043D\u043E \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u043B\u044E\u0431\u043E\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0435\u0439 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0444\u0430\u043A\u0442 \u0435\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0444\u043E\u0440\u043C\u0435, \u0435\u0441\u043B\u0438 \u0438\u043D\u043E\u0435 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F.",
              a("br", {}),
              a("br", {}),
              "2. \u041F\u0420\u0410\u0412\u0410 \u0421\u0423\u0411\u042A\u0415\u041A\u0422\u041E\u0412 \u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0425 \u0414\u0410\u041D\u041D\u042B\u0425",
              a("br", {}),
              a("br", {}),
              "2.1. \u0421\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 (\u0434\u0430\u043B\u0435\u0435 \u2013 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F):",
              a("br", {}),
              a("li", {
                children:
                  "\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0444\u0430\u043A\u0442\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C;",
              }),
              a("li", {
                children:
                  "\u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0446\u0435\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  "\u0446\u0435\u043B\u0438 \u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  "\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u043B\u0438\u0446\u0430\u0445 (\u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430), \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043C\u0435\u044E\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C \u0438\u043B\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0438\u043B\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430;",
              }),
              a("li", {
                children:
                  "\u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0438\u0435\u0441\u044F \u043A \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C\u0443 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0438\u0445 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F, \u0435\u0441\u043B\u0438 \u0438\u043D\u043E\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C;",
              }),
              a("li", {
                children:
                  "\u0441\u0440\u043E\u043A\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0438\u0445 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F;",
              }),
              a("li", {
                children:
                  "\u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0435\u0433\u043E \u043F\u0440\u0430\u0432;",
              }),
              a("li", {
                children:
                  "\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0438\u043B\u0438 \u043E \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u043E\u0439 \u0442\u0440\u0430\u043D\u0441\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  "\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044E, \u0438\u043C\u044F, \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u0430\u0434\u0440\u0435\u0441 \u043B\u0438\u0446\u0430, \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u044E\u0449\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430, \u0435\u0441\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0430 \u0438\u043B\u0438 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0430 \u0442\u0430\u043A\u043E\u043C\u0443 \u043B\u0438\u0446\u0443;",
              }),
              a("li", {
                children:
                  "\u0438\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C.",
              }),
              a("br", {}),
              a("br", {}),
              "2.2. \u0421\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u043F\u0440\u0430\u0432\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u043E\u0442 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0438\u0445 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u043B\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044F \u0432 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0435\u043F\u043E\u043B\u043D\u044B\u043C\u0438, \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u043C\u0438, \u043D\u0435\u0442\u043E\u0447\u043D\u044B\u043C\u0438, \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0438\u043B\u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u0434\u043B\u044F \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0446\u0435\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043C\u0435\u0440\u044B \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u0441\u0432\u043E\u0438\u0445 \u043F\u0440\u0430\u0432.",
              a("br", {}),
              a("br", {}),
              "2.3. \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435, \u0438 \u0432 \u043D\u0438\u0445 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C\u0441\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0438\u0435\u0441\u044F \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u0435\u0441\u043B\u0438 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0442\u0430\u043A\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
              a("br", {}),
              a("br", {}),
              "2.4. \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0438 \u043B\u0438\u0431\u043E \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F. \u0417\u0430\u043F\u0440\u043E\u0441 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430, \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0435\u0433\u043E \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0434\u0430\u0442\u0435 \u0432\u044B\u0434\u0430\u0447\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0438 \u0432\u044B\u0434\u0430\u0432\u0448\u0435\u043C \u0435\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0435, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u0445 \u0441 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C (\u043D\u043E\u043C\u0435\u0440 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0434\u0430\u0442\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0443\u0441\u043B\u043E\u0432\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u0435\u0441\u043D\u043E\u0435 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438 (\u0438\u043B\u0438) \u0438\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F), \u043B\u0438\u0431\u043E \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F, \u0438\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0435 \u0444\u0430\u043A\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C, \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F. \u0417\u0430\u043F\u0440\u043E\u0441 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u0432 \u0444\u043E\u0440\u043C\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0434\u043F\u0438\u0441\u044C\u044E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.",
              a("br", {}),
              a("br", {}),
              "2.5. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u044B\u043B\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0434\u043B\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E \u0435\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443, \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043A \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443 \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u043C\u0443 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u0432 \u0446\u0435\u043B\u044F\u0445 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0438 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441 \u0442\u0430\u043A\u0438\u043C\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0435 \u0440\u0430\u043D\u0435\u0435 \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C \u0434\u043D\u0435\u0439 \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430, \u0435\u0441\u043B\u0438 \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0441\u0440\u043E\u043A \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C, \u043F\u0440\u0438\u043D\u044F\u0442\u044B\u043C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043D\u0438\u043C \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u043C \u0430\u043A\u0442\u043E\u043C.",
              a("br", {}),
              a("br", {}),
              "2.6. \u0421\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043A \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443 \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u043C\u0443 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u0432 \u0446\u0435\u043B\u044F\u0445 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0446\u0435\u043B\u044F\u0445 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u043C\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044F \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u0438 \u0434\u043D\u0435\u0439 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0442\u0430\u043A\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438 (\u0438\u043B\u0438) \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u0431\u044B\u043B\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0435\u043C\u0443 \u0434\u043B\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435 \u043F\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430\u0440\u044F\u0434\u0443 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430.",
              a("br", {}),
              a("br", {}),
              "2.7. \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0446\u0435\u043B\u044F\u0445 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u0440\u0430\u0431\u043E\u0442, \u0443\u0441\u043B\u0443\u0433 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u043F\u0443\u0442\u0435\u043C \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u044F\u043C\u044B\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432 \u0441 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0435\u043C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0441\u0432\u044F\u0437\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0446\u0435\u043B\u044F\u0445 \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0430\u0433\u0438\u0442\u0430\u0446\u0438\u0438 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u0423\u043A\u0430\u0437\u0430\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u0437\u043D\u0430\u0435\u0442\u0441\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0431\u0435\u0437 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0435\u0441\u043B\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u0434\u043E\u043A\u0430\u0436\u0435\u0442, \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0431\u044B\u043B\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E.",
              a("br", {}),
              a("br", {}),
              "2.8. \u0417\u0430\u043F\u0440\u0435\u0449\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439, \u043F\u043E\u0440\u043E\u0436\u0434\u0430\u044E\u0449\u0438\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0438\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u0435\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B.",
              a("br", {}),
              a("br", {}),
              "2.9. \u0420\u0435\u0448\u0435\u043D\u0438\u0435, \u043F\u043E\u0440\u043E\u0436\u0434\u0430\u044E\u0449\u0435\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0438\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u044E\u0449\u0435\u0435 \u0435\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B, \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u043D\u044F\u0442\u043E \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0432 \u0441\u043B\u0443\u0447\u0430\u044F\u0445, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0437\u0430\u043A\u043E\u043D\u0430\u043C\u0438, \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0449\u0438\u043C\u0438 \u0442\u0430\u043A\u0436\u0435 \u043C\u0435\u0440\u044B \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u0432 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
              a("br", {}),
              a("br", {}),
              "2.10. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u0440\u0430\u0437\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0437\u0430\u044F\u0432\u0438\u0442\u044C \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0442\u0438\u0432 \u0442\u0430\u043A\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0430\u0437\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0437\u0430\u0449\u0438\u0442\u044B \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0432\u043E\u0438\u0445 \u043F\u0440\u0430\u0432 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432.",
              a("br", {}),
              a("br", {}),
              "2.11. \u0415\u0441\u043B\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0447\u0438\u0442\u0430\u0435\u0442, \u0447\u0442\u043E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435\u043C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \u0438\u043B\u0438 \u0438\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0435\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u044B, \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0431\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438\u043B\u0438 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0432 \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u043E\u0440\u0433\u0430\u043D \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0432 \u0441\u0443\u0434\u0435\u0431\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435.",
              a("br", {}),
              a("br", {}),
              "2.12. \u0421\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0437\u0430\u0449\u0438\u0442\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0440\u0430\u0432 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043D\u0430 \u0432\u043E\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0443\u0431\u044B\u0442\u043A\u043E\u0432 \u0438 (\u0438\u043B\u0438) \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044E \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u0434\u0430 \u0432 \u0441\u0443\u0434\u0435\u0431\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435.",
              a("br", {}),
              a("br", {}),
              "3. \u041E\u0411\u042F\u0417\u0410\u041D\u041D\u041E\u0421\u0422\u0418 \u041E\u041F\u0415\u0420\u0410\u0422\u041E\u0420\u0410",
              a("br", {}),
              a("br", {}),
              "3.1. \u041F\u0440\u0438 \u0441\u0431\u043E\u0440\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E \u0435\u0433\u043E \u043F\u0440\u043E\u0441\u044C\u0431\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0432 \u043F\u0443\u043D\u043A\u0442\u0435 2.1 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438.",
              a("br", {}),
              a("br", {}),
              "3.2. \u0415\u0441\u043B\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u0440\u0430\u0437\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u043E\u0442\u043A\u0430\u0437\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.",
              a("br", {}),
              a("br", {}),
              "3.3. \u0415\u0441\u043B\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B \u043D\u0435 \u043E\u0442 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0442\u0430\u043A\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E:",
              a("br", {}),
              a("li", {
                children:
                  " \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043B\u0438\u0431\u043E \u0444\u0430\u043C\u0438\u043B\u0438\u044F, \u0438\u043C\u044F, \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u0430\u0434\u0440\u0435\u0441 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F;",
              }),
              a("li", {
                children:
                  " \u0446\u0435\u043B\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0435\u0435 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435;",
              }),
              a("li", {
                children:
                  " \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043F\u0440\u0430\u0432\u0430 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
              }),
              a("br", {}),
              a("br", {}),
              "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0432 \u0441\u043B\u0443\u0447\u0430\u044F\u0445, \u0435\u0441\u043B\u0438:",
              a("br", {}),
              a("br", {}),
              a("li", {
                children:
                  " \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D \u043E\u0431 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C;",
              }),
              a("li", {
                children:
                  " \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \u0438\u043B\u0438 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043B\u0438\u0431\u043E \u0432\u044B\u0433\u043E\u0434\u043E\u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043B\u0435\u043C \u0438\u043B\u0438 \u043F\u043E\u0440\u0443\u0447\u0438\u0442\u0435\u043B\u0435\u043C \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u0430\u043D\u044B \u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B \u0438\u0437 \u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430;",
              }),
              a("li", {
                children:
                  " \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u043B\u0438 \u0438\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0446\u0435\u043B\u0435\u0439, \u0434\u043B\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0436\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0430 \u043B\u0438\u0431\u043E \u043D\u0430\u0443\u0447\u043D\u043E\u0439, \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0435\u0441\u043B\u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u0430 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u0430 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446.",
              }),
              a("br", {}),
              a("br", {}),
              "3.4. \u041F\u0440\u0438 \u0441\u0431\u043E\u0440\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 \xAB\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\xBB, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C, \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E, \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u0435, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435 (\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435), \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0445\u0441\u044F \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.",
              a("br", {}),
              a("br", {}),
              "3.5. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043C\u0435\u0440\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0435 \u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043E\u0442 27.07.2006 \u2116152-\u0424\u0417 \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB \u0438 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439.",
              a("br", {}),
              a("br", {}),
              "3.6. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u043B\u0438\u0431\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u043B\u0438\u0431\u043E \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0430 \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0438\u0445\u0441\u044F \u043A \u044D\u0442\u043E\u043C\u0443 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0438\u0445 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 (\u0435\u0441\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u043C \u043B\u0438\u0446\u043E\u043C, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430) \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0442\u0430\u043A\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u0442\u043E\u0447\u043D\u044B\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u043B\u0438\u0431\u043E \u043F\u043E \u0438\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u0438\u043B\u0438 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0430 \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0438\u0445\u0441\u044F \u043A \u044D\u0442\u043E\u043C\u0443 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0438\u0445 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 (\u0435\u0441\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u043C \u043B\u0438\u0446\u043E\u043C, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430) \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0442\u0430\u043A\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438, \u0435\u0441\u043B\u0438 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u0430 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446.",
              a("br", {}),
              a("br", {}),
              "3.7. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0444\u0430\u043A\u0442\u0430 \u043D\u0435\u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u043C \u043B\u0438\u0431\u043E \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u044B\u043C \u043E\u0440\u0433\u0430\u043D\u043E\u043C \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0438\u043B\u0438 \u0438\u043D\u044B\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043E\u0431\u044F\u0437\u0430\u043D \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043B\u0438\u0431\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0438\u0445 \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435 (\u0435\u0441\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u043C \u043B\u0438\u0446\u043E\u043C, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430) \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0441\u0435\u043C\u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u0438\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0438 \u0441\u043D\u044F\u0442\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
              a("br", {}),
              a("br", {}),
              "3.8. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0438\u043B\u0438 \u043B\u0438\u0446\u043E\u043C, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0432 \u0441\u0440\u043E\u043A, \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0438\u0439 \u0442\u0440\u0435\u0445 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441 \u0434\u0430\u0442\u044B \u044D\u0442\u043E\u0433\u043E \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u044F, \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u0443\u044E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043B\u0438\u0446\u043E\u043C, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0432 \u0441\u0440\u043E\u043A, \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0438\u0439 \u0434\u0435\u0441\u044F\u0442\u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441 \u0434\u0430\u0442\u044B \u0432\u044B\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043E\u0431\u044F\u0437\u0430\u043D \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0438\u0442\u044C \u0442\u0430\u043A\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0438\u0445 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435. \u041E\u0431 \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0439 \u0438\u043B\u0438 \u043E\u0431 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F, \u0430 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u043B\u0438\u0431\u043E \u0437\u0430\u043F\u0440\u043E\u0441 \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0430 \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u044B\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u044B\u043C \u043E\u0440\u0433\u0430\u043D\u043E\u043C \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0430\u0432 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0442\u0430\u043A\u0436\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u043E\u0440\u0433\u0430\u043D.",
              a("br", {}),
              a("br", {}),
              "3.9. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0437\u044B\u0432\u0430 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u0438\u0445 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0442\u0430\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 (\u0435\u0441\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u043C \u043B\u0438\u0446\u043E\u043C, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430) \u0438 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u043E\u043B\u0435\u0435 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0438\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0438\u0445 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435 (\u0435\u0441\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u043C \u043B\u0438\u0446\u043E\u043C, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430) \u0432 \u0441\u0440\u043E\u043A, \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0438\u0439 \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u0438 \u0434\u043D\u0435\u0439 \u0441 \u0434\u0430\u0442\u044B \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u043E\u0442\u0437\u044B\u0432\u0430.",
              a("br", {}),
              a("br", {}),
              "3.10. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u0430, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0432 \u043F\u0443\u043D\u043A\u0442\u0435 3.9 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0430\u043A\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u0445 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 (\u0435\u0441\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u043C \u043B\u0438\u0446\u043E\u043C, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430) \u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u0440\u043E\u043A \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u0448\u0435\u0441\u0442\u044C \u043C\u0435\u0441\u044F\u0446\u0435\u0432, \u0435\u0441\u043B\u0438 \u0438\u043D\u043E\u0439 \u0441\u0440\u043E\u043A \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0437\u0430\u043A\u043E\u043D\u0430\u043C\u0438.",
              a("br", {}),
              a("br", {}),
              "4. \u041E\u0411\u0415\u0421\u041F\u0415\u0427\u0415\u041D\u0418\u0415 \u0411\u0415\u0417\u041E\u041F\u0410\u0421\u041D\u041E\u0421\u0422\u0418 \u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0425 \u0414\u0410\u041D\u041D\u042B\u0425",
              a("br", {}),
              a("br", {}),
              "4.1. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0435, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0435\u0440\u044B \u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0442\u044C \u0438\u0445 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u0434\u043B\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0442 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043D\u0438\u043C, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044F, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0442 \u0438\u043D\u044B\u0445 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
              a("br", {}),
              a("br", {}),
              "4.2. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044F:",
              a("br", {}),
              a("li", {
                children:
                  " \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435\u043C \u0443\u0433\u0440\u043E\u0437 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438 \u0438\u0445 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0432 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0435\u0440 \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438 \u0438\u0445 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0432 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u043A \u0437\u0430\u0449\u0438\u0442\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0443\u0440\u043E\u0432\u043D\u0438 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0443 \u043E\u0446\u0435\u043D\u043A\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0437\u0430\u0449\u0438\u0442\u044B \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438;",
              }),
              a("li", {
                children:
                  " \u043E\u0446\u0435\u043D\u043A\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u043C\u0435\u0440 \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043E \u0432\u0432\u043E\u0434\u0430 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u0443\u0447\u0435\u0442\u043E\u043C \u043C\u0430\u0448\u0438\u043D\u043D\u044B\u0445 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0435\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0438\u0435\u043C \u0444\u0430\u043A\u0442\u043E\u0432 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C \u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435\u043C \u043C\u0435\u0440;",
              }),
              a("li", {
                children:
                  " \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043C\u043E\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0432\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043D\u0438\u043C;",
              }),
              a("li", {
                children:
                  " \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C, \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u043C \u0432 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u0443\u0447\u0435\u0442\u0430 \u0432\u0441\u0435\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u043C\u044B\u0445 \u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0432 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  " \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u0437\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u043C\u0438 \u043C\u0435\u0440\u0430\u043C\u0438 \u043F\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0443\u0440\u043E\u0432\u043D\u044F \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
              }),
              a("br", {}),
              a("br", {}),
              "5. \u0417\u0410\u041A\u041B\u042E\u0427\u0418\u0422\u0415\u041B\u042C\u041D\u042B\u0415 \u041F\u041E\u041B\u041E\u0416\u0415\u041D\u0418\u042F",
              a("br", {}),
              a("br", {}),
              "5.1. \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u043D\u044B\u043C\u0438 \u043B\u0438\u0446\u0430\u043C\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430.",
              a("br", {}),
              a("br", {}),
              "5.2. \u041B\u0438\u0446\u0430, \u0432\u0438\u043D\u043E\u0432\u043D\u044B\u0435 \u0432 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438, \u043D\u0435\u0441\u0443\u0442 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u0443\u044E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C.",
              a("br", {}),
              a("br", {}),
              "5.3. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0432\u043F\u0440\u0430\u0432\u0435 \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0443\u044E \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043F\u043E \u043C\u0435\u0440\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u0432 \u0441\u0438\u043B\u0443 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430. \u0412\u0441\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0438\u044E \u043D\u0430 \u0441\u0430\u0439\u0442\u0435.",
              a("br", {}),
              a("br", {}),
              "5.4. \u041D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u044B \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0438\u043D\u044B\u0435 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441\u044B, \u043D\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C. \u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441\u044B \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u043E\u043B\u0435\u0439 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043B\u0438\u0431\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432.",
              a("br", {}),
              a("br", {}),
              "5.5. \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0430\u0439\u0442\u043E\u043C \u0438 \u0435\u0433\u043E \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438, \u0441\u0443\u0431\u044A\u0435\u043A\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435.",
              a("br", {}),
              a("br", {}),
              "5.6. \u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u044B \u043F\u043E \u043A\u0430\u043D\u0430\u043B\u0430\u043C \u0441\u0432\u044F\u0437\u0438, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435.",
              a("br", {}),
              a("br", {}),
            ],
          }),
        ],
      }),
      x("section", {
        className: E0.policydescription,
        children: [
          a("h2", {
            className: `${E0.agreetitle} title`,
            dangerouslySetInnerHTML: { __html: e },
          }),
          x("p", {
            className: `${E0.policyparagraph}`,
            children: [
              "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u044F \u0434\u0430\u044E \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0410\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u043E\u043C\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443 \xAB\u041F\u0435\u0440\u0432\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\xBB (\u0434\u0430\u043B\u0435\u0435 \u2014 \xAB\u041F\u0435\u0440\u0432\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\xBB) \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043C\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043A\u0430\u043A \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438, \u0442\u0430\u043A \u0438 \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0430\u043A\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 (\u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0442\u0440\u0430\u043D\u0441\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u0443\u044E) \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C \u0443\u0441\u043B\u0443\u0433 \u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u043C\u044B\u0445 \u041F\u0435\u0440\u0432\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u043C\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u043C\u0438, \u0440\u0430\u0432\u043D\u043E \u043A\u0430\u043A \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0442\u0430\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E\u0442 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u043B\u0438\u0446 \u0434\u043B\u044F \u0442\u0435\u0445 \u0436\u0435 \u0446\u0435\u043B\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u043A\u043E\u043D\u043E\u043C, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u0432 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u041F\u0435\u0440\u0432\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. \u041F\u0435\u0440\u0432\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u043B\u0438\u0448\u044C \u0442\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0446\u0435\u043B\u0438. \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043D\u043E\u0439 \u0432 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 https://ilovefirstclass.com/company/privacy-policy/.",
              a("br", {}),
              a("br", {}),
              "\u0426\u0435\u043B\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438\u2013 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u0430\u0432 \u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443.",
              a("br", {}),
              a("br", {}),
              "\u041F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445:",
              a("br", {}),
              a("li", { children: "\u0424\u0418\u041E" }),
              a("li", {
                children:
                  "\u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
              }),
              a("li", {
                children:
                  "\u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E",
              }),
              a("li", { children: "\u043F\u043E\u043B" }),
              a("li", {
                children:
                  "\u043D\u043E\u043C\u0435\u0440 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
              }),
              a("li", {
                children:
                  "\u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
              }),
              a("li", {
                children:
                  "\u0441\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430, \u043D\u043E\u043C\u0435\u0440 \u0438 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0437\u0430\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430;",
              }),
              a("li", {
                children:
                  "\u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B \u0420\u0416\u0414 / \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
              }),
              a("br", {}),
              a("br", {}),
              "\u041F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439\u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438, \u043D\u0430 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0434\u0430\u0435\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435:",
              a("br", {}),
              a("br", {}),
              a("li", {
                children:
                  "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0441\u0431\u043E\u0440, \u0437\u0430\u043F\u0438\u0441\u044C, \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E, \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u0435, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u043A\u0430\u043D\u043E\u0432 (\u0444\u043E\u0442\u043E) \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u0438 \u0438\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0444\u043E\u0442\u043E \u0435\u0433\u043E \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430, \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435 (\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435), \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 (\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0434\u043E\u0441\u0442\u0443\u043F), \u043E\u0431\u0435\u0437\u043B\u0438\u0447\u0438\u0432\u0430\u043D\u0438\u0435, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445;",
              }),
              a("li", {
                children:
                  "\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0442 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0442\u0440\u0430\u043D\u0441\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430, \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043D\u0435\u043F\u0435\u0440\u0441\u043E\u043D\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u044B\u0445 \u0443\u0441\u043B\u0443\u0433.",
              }),
              a("br", {}),
              a("br", {}),
              "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043E\u0437\u0432\u0430\u043D\u043E \u043F\u0443\u0442\u0435\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0432 \u041F\u0435\u0440\u0432\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F. \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u0430, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0446\u0435\u043B\u0435\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 5 (\u043F\u044F\u0442\u0438) \u043B\u0435\u0442 \u043F\u043E\u0441\u043B\u0435 \u0438\u0445 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F.",
            ],
          }),
        ],
      }),
    ],
  });
}
const hp = "_root_9ca0f_1",
  vp = "_noselect_9ca0f_1",
  Bp = "_title_9ca0f_1",
  mp = "_cursive_9ca0f_1",
  gp = "_paragraph_9ca0f_1",
  Fp = "_button_9ca0f_1",
  yp = "_video_9ca0f_1",
  Cp = "_video1_9ca0f_1",
  _p = "_video2_9ca0f_1",
  Ap = "_video3_9ca0f_1",
  Sp = "_video_showed_9ca0f_1",
  wp = "_policydescription_9ca0f_5",
  po = {
    root: hp,
    noselect: vp,
    title: Bp,
    cursive: mp,
    paragraph: gp,
    button: Fp,
    "video-container": "_video-container_9ca0f_1",
    video: yp,
    video1: Cp,
    video2: _p,
    video3: Ap,
    video_showed: Sp,
    "video-button": "_video-button_9ca0f_1",
    policydescription: wp,
  };
function kp() {
  return x("section", {
    className: `${po.policydescription}`,
    children: [
      a(gi, { full: !1, transparent: !1 }),
      a("h1", {
        className: "title",
        children:
          "\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410",
      }),
      x("p", {
        className: `${po.policyparagraph}`,
        children: [
          "\u0433. \u041C\u043E\u0441\u043A\u0432\u0430",
          a("br", {}),
          a("br", {}),
          "\u0418\u0437\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043D\u0438\u0436\u0435 \u0442\u0435\u043A\u0441\u0442 \u041E\u0444\u0435\u0440\u0442\u044B \u0440\u0430\u0437\u043C\u0435\u0449\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435: https://ilovefirstclass.com \u0438 \u0430\u0434\u0440\u0435\u0441\u0443\u0435\u0442\u0441\u044F \u043B\u044E\u0431\u043E\u043C\u0443 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u043B\u0438\u0446\u0443 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0410\u041E \xAB\u041F\u0435\u0440\u0432\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\xBB (\u0434\u0430\u043B\u0435\u0435 \u2013 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C) \u0437\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0441\u0442\u0430\u0442\u044C\u044F\u043C\u0438 435, 437 \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u0434\u0435\u043A\u0441\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.",
          a("br", {}),
          a("br", {}),
          "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0430\u0434\u0440\u0435\u0441 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433, \u0430 \u0440\u0430\u0432\u043D\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u043B\u044E\u0431\u043E\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0430 \u0437\u0430 \u0443\u0441\u043B\u0443\u0433\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043B\u0438\u0446\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440 (\u0434\u0430\u043B\u0435\u0435 \u2013 \u0410\u043A\u0446\u0435\u043F\u0442) \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0438 \u043E\u0431\u044A\u0435\u043C\u0435, \u0438\u0437\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041E\u0444\u0435\u0440\u0442\u0435 (\u0434\u0430\u043B\u0435\u0435 \u2013 \u0414\u043E\u0433\u043E\u0432\u043E\u0440).",
          a("br", {}),
          a("br", {}),
          "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041E\u0444\u0435\u0440\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442, \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u044F \u041E\u0444\u0435\u0440\u0442\u044B \u0432\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0432 \u0441\u0438\u043B\u0443 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0435\u0435 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0432 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442. \u041F\u043E\u0441\u043B\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u043E\u0439 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438 \u041E\u0444\u0435\u0440\u0442\u044B, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u041E\u0444\u0435\u0440\u0442\u044B \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u043F\u043E\u0441\u043B\u0435 \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0438/\u0438\u043B\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0439 \u0432 \u041E\u0444\u0435\u0440\u0442\u0443 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0441 \u0442\u0430\u043A\u0438\u043C\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438 \u0438/\u0438\u043B\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F\u043C\u0438. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0441 \u043A\u0430\u043A\u0438\u043C\u0438-\u043B\u0438\u0431\u043E \u0438\u0437 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u041E\u0444\u0435\u0440\u0442\u044B \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u043C 6 \u041E\u0444\u0435\u0440\u0442\u044B.",
          a("br", {}),
          a("br", {}),
          "1. \u041F\u0420\u0415\u0414\u041C\u0415\u0422 \u0414\u041E\u0413\u041E\u0412\u041E\u0420\u0410",
          a("br", {}),
          a("br", {}),
          "1.1. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0435\u0437\u0434\u043E\u043A \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0430\u043C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0430 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0438 \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u044D\u0442\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0438 \u0441\u0440\u043E\u043A\u0438, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0435. \u0423\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u0435\u0437\u0434\u043E\u043A \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432 \u0441\u0435\u0431\u044F:",
          a("br", {}),
          a("br", {}),
          a("li", {
            children:
              "\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0432\u044B\u043F\u0438\u0441\u043A\u0443 \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0438 \u0436\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u044B\u0445 \u0431\u0438\u043B\u0435\u0442\u043E\u0432;",
          }),
          a("li", {
            children:
              "\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446, \u043A\u0432\u0430\u0440\u0442\u0438\u0440, \u0430\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u043E\u0432, \u0445\u043E\u0441\u0442\u0435\u043B\u043E\u0432 \u0438 \u0442.\u043F.;",
          }),
          a("li", {
            children:
              "\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0438 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F;",
          }),
          a("li", {
            children:
              "\u0438 \u0438\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0432 \u0437\u0430\u044F\u0432\u043A\u0430\u0445 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430.",
          }),
          a("br", {}),
          a("br", {}),
          "1.2. \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u043F\u0440\u0438\u0437\u043D\u0430\u044E\u0442 \u0437\u0430\u044F\u0432\u043A\u043E\u0439 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043B\u044E\u0431\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0432 \u0430\u0434\u0440\u0435\u0441 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u043B\u044E\u0431\u044B\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0441 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u043E \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E.",
          a("br", {}),
          a("br", {}),
          "1.3. \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0442\u0441\u044F \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u043C \u043F\u0440\u0438 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443. \u0412\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433 \u0438/\u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0438 \u0436\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B \u0438 \u043F\u0440\u043E\u0447\u0438\u0435 \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F, \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0433\u0438\u0434\u044B, \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u043E\u0432\u043E\u0434\u044B \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A\u0438 \u0438 \u043F\u0440. \u043B\u0438\u0446\u0430, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0438\u043B\u0438 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0443, \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0430\u043C\u0435\u0440\u0435\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A.",
          a("br", {}),
          a("br", {}),
          "1.4. \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0442\u0441\u044F \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043E\u043A \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u044C \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043F\u043E \u0441\u0432\u043E\u0435\u043C\u0443 \u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044E.",
          a("br", {}),
          a("br", {}),
          "1.5. \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0442\u0441\u044F \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u043E\u0431\u043C\u0435\u043D \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C \u0432 \u0443\u0441\u0442\u043D\u043E\u0439 \u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435, \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0438 \u0431\u0443\u043C\u0430\u0436\u043D\u044B\u0445 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0435\u0439, \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043A\u0430\u043D\u0430\u043B\u043E\u0432, \u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0432\u044D\u0431-\u0441\u0430\u0439\u0442\u043E\u0432, \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0443\u0442\u0435\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0430\u0443\u0434\u0438\u043E \u0438 \u0432\u0438\u0434\u0435\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.",
          a("br", {}),
          a("br", {}),
          "2. \u041E\u0411\u042F\u0417\u0410\u0422\u0415\u041B\u042C\u0421\u0422\u0412\u0410 \u0418 \u041E\u0422\u0412\u0415\u0422\u0421\u0422\u0412\u0415\u041D\u041D\u041E\u0421\u0422\u042C \u0421\u0422\u041E\u0420\u041E\u041D",
          a("br", {}),
          a("br", {}),
          "2.1. \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F:",
          a("br", {}),
          a("br", {}),
          "2.1.1. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442 \u0432 \u0441\u0440\u043E\u043A \u043D\u0435 \u0431\u043E\u043B\u0435\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 24 \u0447\u0430\u0441\u0430 \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u0442 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u0447\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435. \u041E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0437\u0430\u043A\u0430\u0437\u0430 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C \u043A\u0430\u043A \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439, \u0442\u0430\u043A \u0438 \u0432 \u0443\u0441\u0442\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435. \u041B\u044E\u0431\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0438 \u043F\u0440\u0430\u0432\u043A\u0438 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0437\u0430\u044F\u0432\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u044B \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435.",
          a("br", {}),
          a("br", {}),
          "2.1.2. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0438 \u0438\u0441\u0447\u0435\u0440\u043F\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445, \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0445 \u0432 \u0437\u0430\u044F\u0432\u043A\u0435 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445 \u0442\u0430\u0440\u0438\u0444\u0430, \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0434\u0435\u0434\u043B\u0430\u0439\u043D\u043E\u0432, \u0448\u0442\u0440\u0430\u0444\u043E\u0432 \u0432 \u0447\u0430\u0441\u0442\u0438 \u043E\u0431\u043C\u0435\u043D\u0430 \u0438/\u0438\u043B\u0438 \u043E\u0442\u043A\u0430\u0437\u0430 \u043E\u0442 \u0443\u0441\u043B\u0443\u0433\u0438 \u0438\u043B\u0438 \u0435\u0435 \u0447\u0430\u0441\u0442\u0438.",
          a("br", {}),
          a("br", {}),
          "2.1.3. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043E \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0438 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433. \u041F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E \u0441 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0443\u0441\u043B\u0443\u0433\u0438, \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0435 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u043C, \u043A\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E.",
          a("br", {}),
          a("br", {}),
          "2.1.4. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E \u0444\u043E\u0440\u043C\u0435 \u0438 \u0441\u0440\u043E\u043A\u0430\u0445 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0430\u043C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0441\u043E\u0441\u0442\u0430\u0432 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u0445 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u043E\u0440\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438.",
          a("br", {}),
          a("br", {}),
          "2.1.5. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433 \u0438/\u0438\u043B\u0438 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441 \u0442\u0440\u0435\u0442\u044C\u0438\u043C\u0438 \u043B\u0438\u0446\u0430\u043C\u0438 (\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438, \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C\u0438 \u0438 \u043F\u0440\u043E\u0447.), \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0438\u043C \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0438\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430.",
          a("br", {}),
          a("br", {}),
          "2.1.6. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438, \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u0435\u0434\u0435\u0442 \u0441\u0432\u043E\u044E \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0443\u044E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C.",
          a("br", {}),
          a("br", {}),
          "2.1.7. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044E \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 (\u0447\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u0438) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439, \u0441\u0447\u0438\u0442\u0430\u044F \u0441\u043E \u0434\u043D\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F.",
          a("br", {}),
          a("br", {}),
          "2.1.8. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0434 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0437\u0430 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C/\u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u043E\u0432 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043D\u0435\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438/\u0438\u043B\u0438 \u043D\u0435\u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0430 \u0440\u0430\u0432\u043D\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430, \u043B\u0438\u0431\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432/\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.",
          a("br", {}),
          a("br", {}),
          "2.1.9. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u0434 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0437\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0432\u0445\u043E\u0434\u044F\u0442 \u0432 \u0441\u0444\u0435\u0440\u0443 \u0435\u0433\u043E \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0438, \u0430 \u0438\u043C\u0435\u043D\u043D\u043E: \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u043E\u0432 (\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435, \u043E\u0442\u043C\u0435\u043D\u0430, \u043F\u0435\u0440\u0435\u043D\u043E\u0441, \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u0430\u0432\u0438\u0430\u0440\u0435\u0439\u0441\u043E\u0432, \u043F\u043E\u0435\u0437\u0434\u043E\u0432, \u0430\u0432\u0442\u043E\u0431\u0443\u0441\u043E\u0432 \u0438 \u0442.\u0434.), \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 (\u043E\u0442\u043C\u0435\u043D\u0430, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430/\u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u0443\u0441\u043B\u0443\u0433\u0438 \u0438/\u0438\u043B\u0438 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430), \u043F\u043E\u0442\u0435\u0440\u044F \u0438\u043B\u0438 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0431\u0430\u0433\u0430\u0436\u0430 \u0438 \u043B\u0438\u0447\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0439. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C",
          a("br", {}),
          a("br", {}),
          "2.1.10. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u043C\u043E\u0449\u044C \u0432 \u0443\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u043F\u043E\u0440\u0430 \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0441\u0440\u043E\u0447\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0445 \u0434\u043E, \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043B\u0438 \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u0438\u043B\u0438 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439 \u0432 \u0441\u043F\u043E\u0440\u0435 \u043C\u0435\u0436\u0434\u0443 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438.",
          a("br", {}),
          a("br", {}),
          "2.1.11. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0431\u0430\u0433\u0430\u0436\u0430, \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430 \u0438\u0445 \u043F\u043E\u0435\u0437\u0434\u043A\u0438.",
          a("br", {}),
          a("br", {}),
          "2.1.12. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C, \u0435\u0441\u043B\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0432\u043B\u0430\u0441\u0442\u0435\u0439 \u0438\u043B\u0438 \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u043D\u044B\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044E \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043E\u0442\u043A\u0430\u0437\u0430\u043D\u043E \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u044A\u0435\u0437\u0434\u0430 \u0438\u043B\u0438 \u0432\u044B\u0435\u0437\u0434\u0430 \u0438\u0437 \u0441\u0442\u0440\u0430\u043D\u044B, \u043B\u0438\u0431\u043E \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043B\u0435\u0442\u0430/\u043F\u043E\u0435\u0437\u0434\u043A\u0438/\u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u0432\u043E\u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u043C, \u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u044F\u0449\u0438\u043C \u043E\u0442 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C.",
          a("br", {}),
          a("br", {}),
          "2.1.13. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0440\u043E\u043A \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0438 \u0441\u043E\u0441\u0442\u0430\u0432 \u0437\u0430\u044F\u0432\u043A\u0438, \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0432 \u0441 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043D\u043E\u0432\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.",
          a("br", {}),
          a("br", {}),
          "2.1.14. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0441 \u0446\u0435\u043B\u044C\u044E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433.",
          a("br", {}),
          a("br", {}),
          "2.1.15. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u0430\u043D\u043D\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043E\u043F\u043B\u0430\u0442\u044B, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0435.",
          a("br", {}),
          a("br", {}),
          "2.1.16. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0432\u043F\u0440\u0430\u0432\u0435 \u043F\u043E \u0441\u0432\u043E\u0435\u043C\u0443 \u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044E \u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043B\u0438\u0447\u043D\u043E, \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u044C \u0434\u043B\u044F \u0438\u0445 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446 \u0438\u043B\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0433\u0435\u043D\u0442\u0430 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u0438\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043E\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0438\u043C\u0435\u043D\u0438, \u043D\u043E \u0437\u0430 \u0441\u0447\u0435\u0442 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u043C\u0438 \u043B\u0438\u0446\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u044F\u043B \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432\u044B\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u0447\u0430\u0441\u0442\u0438 \u0438\u043B\u0438 \u0432\u0441\u0435\u0445 \u0443\u0441\u043B\u0443\u0433, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C, \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0433\u0435\u043D\u0442\u0430, \u0432\u044B\u0431\u043E\u0440 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0443\u0441\u043B\u0443\u0433\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u0441 \u043D\u0438\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0440 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0433\u0435\u043D\u0442\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0442\u0440\u0435\u0442\u044C\u0438\u0445 \u043B\u0438\u0446, \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u0447\u0435\u0442\u0435, \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443, \u043E\u043F\u043B\u0430\u0442\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0441 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043C\u0438\u0441\u044F \u0432 \u043D\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438.",
          a("br", {}),
          a("br", {}),
          "2.2. \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430:",
          a("br", {}),
          a("br", {}),
          "2.2.1. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430.",
          a("br", {}),
          a("br", {}),
          "2.2.2. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043D\u0435\u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0430\u043D\u043D\u0443\u043B\u044F\u0446\u0438\u0438 \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438.",
          a("br", {}),
          a("br", {}),
          "2.3. \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u0435\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0435. \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0437\u0430\u044F\u0432\u043A\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439, \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u043D\u043E\u0435 \u0432 \u043B\u044E\u0431\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 (\u0432 \u0444\u043E\u0440\u043C\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u0430 / \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u0438\u043B\u0438 \u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433).",
          a("br", {}),
          a("br", {}),
          "2.4. \u041F\u0440\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0438 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u043A\u043E\u0433\u0434\u0430 \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C \u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u0443\u0441\u043B\u0443\u0433\u0438, \u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u043F\u0440\u043E\u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u043E \u0442\u0430\u043A\u043E\u043C \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043C\u0435\u0440 \u043A \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438. \u041F\u0440\u0438 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442 \u0435\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F, \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0438\u0435 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 14 (\u0447\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u0438) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F: hello@ilovefirstclass.com. \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0438, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043F\u043E\u0437\u0436\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0440\u043E\u043A\u0430, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u043A \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044E \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F.",
          a("br", {}),
          a("br", {}),
          "2.5. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u043F\u043E\u043B\u043D\u043E\u0442\u0443 \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0445 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043B\u044F \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u0432 \u0437\u0430\u044F\u0432\u043A\u0435 \u0443\u0441\u043B\u0443\u0433.",
          a("br", {}),
          a("br", {}),
          "2.6. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0434\u0435\u043F\u043E\u0440\u0442\u0430\u0446\u0438\u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043D\u0430\u0440\u0443\u0448\u0438\u0432\u0448\u0435\u0433\u043E \u0437\u0430\u043A\u043E\u043D \u0438\u043B\u0438 \u0432\u0438\u0437\u043E\u0432\u044B\u0439 \u0440\u0435\u0436\u0438\u043C, \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0442\u0430\u043A\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u0432 \u0442.\u0447. \u043F\u0435\u0440\u0435\u0434 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C.",
          a("br", {}),
          a("br", {}),
          "2.7. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0438 \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443 \u0441\u0447\u0435\u0442\u043E\u0432, \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438, \u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 3 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430.",
          a("br", {}),
          a("br", {}),
          "2.8. \u041B\u044E\u0431\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0421\u0442\u043E\u0440\u043E\u043D\u0430\u043C\u0438 \u0432 \u0445\u043E\u0434\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0438\u043B\u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u0430\u044F \u0441 \u043D\u0438\u043C, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u0433\u043B\u0430\u0448\u0435\u043D\u0430 \u0431\u0435\u0437 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0434\u0440\u0443\u0433\u043E\u0439 \u0421\u0442\u043E\u0440\u043E\u043D\u044B, \u043A\u0440\u043E\u043C\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043E\u0442 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430.",
          a("br", {}),
          a("br", {}),
          "2.9. \u0417\u0430 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043D\u0435\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u043D\u0435\u0441\u0443\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424.",
          a("br", {}),
          a("br", {}),
          "3. \u0421\u0422\u041E\u0418\u041C\u041E\u0421\u0422\u042C \u0423\u0421\u041B\u0423\u0413 \u0418 \u041F\u041E\u0420\u042F\u0414\u041E\u041A \u0420\u0410\u0421\u0427\u0415\u0422\u041E\u0412",
          a("br", {}),
          a("br", {}),
          "3.1. \u041E\u043F\u043B\u0430\u0442\u0430 \u0441\u0447\u0435\u0442\u043E\u0432 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043F\u043E \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u043C\u0443 \u0440\u0430\u0441\u0447\u0435\u0442\u0443, \u043F\u0443\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043D\u0430 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u0441\u0447\u0435\u0442 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F.",
          a("br", {}),
          a("br", {}),
          "3.2. \u0414\u0430\u0442\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B \u0441\u0447\u0435\u0442\u0430 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0434\u0430\u0442\u0430 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F.",
          a("br", {}),
          a("br", {}),
          "3.3. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u0447\u0435\u0442\u0430 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0430\u0432\u0430\u043D\u0441\u043E\u0432\u044B\u043C\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430\u043C\u0438 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435, \u0447\u0435\u043C \u0437\u0430 3 (\u0422\u0440\u0438) \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u044F \u0434\u043E \u0434\u0430\u0442\u044B \u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0412\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433 / \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u043D\u043E \u0432 \u043B\u044E\u0431\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 3 (\u0422\u0440\u0435\u0445) \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441 \u0434\u0430\u0442\u044B \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0441\u0447\u0435\u0442\u0430.",
          a("br", {}),
          a("br", {}),
          "3.4. \u041E\u043F\u043B\u0430\u0442\u0430 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432 \u0431\u0430\u043D\u043A\u0430 \u043F\u043E \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044E \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0437\u0430 \u0441\u0447\u0435\u0442 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430.",
          a("br", {}),
          a("br", {}),
          "3.5. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0430\u0432\u0438\u0430\u0431\u0438\u043B\u0435\u0442\u043E\u0432 \u0438 \u0436\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u044B\u0445 \u0431\u0438\u043B\u0435\u0442\u043E\u0432 \u043F\u043E \u0433\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u043C\u0443 \u0442\u0430\u0440\u0438\u0444\u0443 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0432\u043D\u043E\u0441\u0438\u0442 100-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0443\u044E \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u0430 \u0433\u0440\u0443\u043F\u043F\u0443. \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0442\u0441\u044F, \u0447\u0442\u043E \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0432\u0437\u0430\u0438\u043C\u043E\u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043F\u043E\u043B\u043D\u043E\u0439 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E \u0434\u0430\u0442\u044B \u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433. \u0412 \u043F\u043E\u0434\u043E\u0431\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u044E\u0442 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0432\u0437\u0430\u0438\u043C\u043E\u0440\u0430\u0441\u0447\u0435\u0442\u043E\u0432, \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u0435 \u043E\u0442 \u043F. 3.3., \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0443\u044E\u0442\u0441\u044F \u0434\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C.",
          a("br", {}),
          a("br", {}),
          "3.6. \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0442\u0430\u0440\u0438\u0444\u044B \u0438 \u0441\u0431\u043E\u0440\u044B \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0443\u0441\u043B\u0443\u0433 \u0438/\u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0441\u0443\u043C\u043C\u044B \u043D\u0430\u043B\u043E\u0433\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u0443\u043C\u043C\u0443 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F (\u0441\u0431\u043E\u0440\u044B) \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435. \u0421\u0431\u043E\u0440\u044B \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u043E\u0442\u0432\u0435\u0442\u0435 \u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0443 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u043D\u0430 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430.",
          a("br", {}),
          a("br", {}),
          "3.7. \u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0437\u0430 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0442\u0430\u0440\u0438\u0444\u043E\u0432 \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433 \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0432 \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043D\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430.",
          a("br", {}),
          a("br", {}),
          "3.8. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u043A\u0430\u0437\u0430 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043E\u0442 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0438 \u0432\u044B\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0432 \u0437\u0430\u044F\u0432\u043A\u0435 \u0443\u0441\u043B\u0443\u0433 \u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0441\u0431\u043E\u0440\u044B \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u043D\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F.",
          a("br", {}),
          a("br", {}),
          "3.9. \u041F\u043E \u0444\u0430\u043A\u0442\u0443 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u0442 \u0430\u043A\u0442 \u043E\u0431 \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0438/\u0438\u043B\u0438 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u043E-\u043F\u0435\u0440\u0435\u0434\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 (\u0434\u0430\u043B\u0435\u0435-\u0423\u041F\u0414), \u0441\u0447\u0435\u0442 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u044D\u0442\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u0430\u043A\u0442 \u043E\u0431 \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 7 (\u0441\u0435\u043C\u0438) \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0430\u043A\u0442\u0430, \u0438\u043B\u0438 \u0432 \u044D\u0442\u043E\u0442 \u0436\u0435 \u0441\u0440\u043E\u043A \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u043A\u0430\u0437 \u043E\u0442 \u0435\u0433\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0430\u043A\u0442\u0430 \u0438\u043B\u0438 \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043E\u0442\u043A\u0430\u0437\u0430 \u043E\u0442 \u0435\u0433\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0430\u043A\u0442 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u043C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C, \u0443\u0441\u043B\u0443\u0433\u0438 \u2013 \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0438 \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u043E\u043F\u043B\u0430\u0442\u0435 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0438 \u0432 \u0441\u0440\u043E\u043A\u0438, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 3 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430.",
          a("br", {}),
          a("br", {}),
          "3.10. \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u043D\u0435 \u043E\u0431\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u041D\u0414\u0421, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u043E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424.",
          a("br", {}),
          a("br", {}),
          "3.11. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u044B \u0441\u0447\u0435\u0442\u0430, \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043E \u0432\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u0438 \u0441 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043F\u0435\u043D\u0438 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 0,1 (\u043D\u043E\u043B\u044C \u0446\u0435\u043B\u044B\u0445 \u043E\u0434\u043D\u043E\u0439 \u0434\u0435\u0441\u044F\u0442\u043E\u0439) \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u0430 \u043E\u0442 \u0441\u0443\u043C\u043C\u044B \u043D\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0438 \u0441\u0432\u0435\u0440\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C \u0441\u0440\u043E\u043A\u0430. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043F\u0435\u043D\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 10 (\u0434\u0435\u0441\u044F\u0442\u044C) \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u043E\u0442 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D\u043D\u043E\u0439 \u0432 \u043E\u043F\u043B\u0430\u0442\u0435 \u0441\u0443\u043C\u043C\u044B.",
          a("br", {}),
          a("br", {}),
          "4. \u0424\u041E\u0420\u0421-\u041C\u0410\u0416\u041E\u0420",
          a("br", {}),
          a("br", {}),
          "4.1. \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u044E\u0442\u0441\u044F \u043E\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043D\u0435\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u044F\u0442\u044B\u0445 \u043D\u0430 \u0441\u0435\u0431\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u044F\u0432\u0438\u043B\u043E\u0441\u044C \u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043D\u0435\u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0438\u043C\u043E\u0439 \u0441\u0438\u043B\u044B, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0445 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430.",
          a("br", {}),
          a("br", {}),
          "4.2. \u041A \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\u043C \u043D\u0435\u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0438\u043C\u043E\u0439 \u0441\u0438\u043B\u044B \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F: \u043F\u043E\u0436\u0430\u0440, \u0441\u0442\u0438\u0445\u0438\u0439\u043D\u044B\u0435 \u0431\u0435\u0434\u0441\u0442\u0432\u0438\u044F, \u0432\u043E\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043B\u044E\u0431\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430, \u044D\u043F\u0438\u0434\u0435\u043C\u0438\u044F, \u0430\u043A\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0432\u043B\u0430\u0441\u0442\u0435\u0439, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438\u043C\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u0438 \u043F\u0440. \u0442.\u043F. \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430, \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u0421\u0442\u043E\u0440\u043E\u043D \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443.",
          a("br", {}),
          a("br", {}),
          "4.3. \u0421\u0440\u043E\u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043E\u0442\u043E\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0441\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u0443\u0434\u0443\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0442\u0430\u043A\u0438\u0435 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0443\u0441\u043B\u0443\u0433 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435. \u0415\u0441\u043B\u0438 \u044D\u0442\u0438 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C\u0441\u044F \u0431\u043E\u043B\u0435\u0435 14 \u0434\u043D\u0435\u0439, \u043A\u0430\u0436\u0434\u0430\u044F \u0438\u0437 \u0441\u0442\u043E\u0440\u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u043F\u0440\u0430\u0432\u043E \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443, \u0438 \u0432 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0438 \u043E\u0434\u043D\u0430 \u0438\u0437 \u0421\u0442\u043E\u0440\u043E\u043D \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u0432\u043E\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 \u0421\u0442\u043E\u0440\u043E\u043D\u043E\u0439 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0443\u0431\u044B\u0442\u043A\u043E\u0432.",
          a("br", {}),
          a("br", {}),
          "4.4. \u0421\u0442\u043E\u0440\u043E\u043D\u0430, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u043E\u0437\u0434\u0430\u043B\u0430\u0441\u044C \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443, \u0434\u043E\u043B\u0436\u043D\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u043E \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0438 \u0442\u0430\u043A\u0438\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 48-\u043C\u0438 \u0447\u0430\u0441\u043E\u0432. \u041D\u0435\u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u0438\u0437\u0432\u0435\u0449\u0435\u043D\u0438\u044F \u043B\u0438\u0448\u0430\u0435\u0442 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0441\u0441\u044B\u043B\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u0444\u043E\u0440\u0441-\u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C.",
          a("br", {}),
          a("br", {}),
          "4.5. \u041D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0432\u044B\u0448\u0435 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u0438 \u0438\u0445 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043B\u0443\u0436\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043A\u0438, \u0432\u044B\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u044B\u043C\u0438 \u043E\u0440\u0433\u0430\u043D\u0430\u043C\u0438.",
          a("br", {}),
          a("br", {}),
          "5. \u041F\u0415\u0420\u0421\u041E\u041D\u0410\u041B\u042C\u041D\u042B\u0415 \u0414\u0410\u041D\u041D\u042B\u0415",
          a("br", {}),
          a("br", {}),
          "5.1. \u041F\u0440\u0438\u043D\u0438\u043C\u0430\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0443\u044E \u041E\u0444\u0435\u0440\u0442\u0443, \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0434\u0430\u0435\u0442 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 (\u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0442\u0440\u0430\u043D\u0441\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u0443\u044E) \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C \u0443\u0441\u043B\u0443\u0433 \u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0432 \u043F. 1.3. \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0440\u0430\u0432\u043D\u043E \u043A\u0430\u043A \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0442\u0430\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E\u0442 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u043B\u0438\u0446 \u0434\u043B\u044F \u0442\u0435\u0445 \u0436\u0435 \u0446\u0435\u043B\u0435\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u043A\u043E\u043D\u043E\u043C, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u0432 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u043B\u0438\u0448\u044C \u0442\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0446\u0435\u043B\u0438. \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043D\u043E\u0439 \u0432 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 https://ilovefirstclass.com/company/privacy-policy/.",
          a("br", {}),
          a("br", {}),
          "5.2. \u0426\u0435\u043B\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u2013 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u0430\u0432 \u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443.",
          a("br", {}),
          a("br", {}),
          "5.3. \u041F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445:",
          a("br", {}),
          a("li", {
            children:
              "\u0424\u0430\u043C\u0438\u043B\u0438\u044F, \u0438\u043C\u044F, \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E;",
          }),
          a("li", {
            children:
              "\u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F;",
          }),
          a("li", {
            children:
              "\u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u0442\u0432\u043E;",
          }),
          a("li", { children: "\u043F\u043E\u043B;" }),
          a("li", {
            children:
              "\u043D\u043E\u043C\u0435\u0440 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430;",
          }),
          a("li", {
            children:
              "\u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B;",
          }),
          a("li", {
            children:
              "\u0441\u0435\u0440\u0438\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430, \u043D\u043E\u043C\u0435\u0440 \u0438 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0437\u0430\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430;",
          }),
          a("li", {
            children:
              "\u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0431\u043E\u043D\u0443\u0441\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B \u0420\u0416\u0414 / \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.",
          }),
          a("br", {}),
          a("br", {}),
          "5.4. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0442\u044C \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0447.5 \u0441\u0442.18 \u0438 \u0441\u0442.18.1 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB, \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0434\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u0438\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u043C\u0435\u0440 \u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0432 \u0446\u0435\u043B\u044F\u0445 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C \u043F\u0443\u043D\u043A\u0442\u0435.",
          a("br", {}),
          a("br", {}),
          "5.5. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0432\u043F\u0440\u0430\u0432\u0435 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F (\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438) \u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u043C\u044B\u0435 \u043A\u0430\u043A \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 (\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430), \u0442\u0430\u043A \u0438 \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0430\u043A\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 (\u043D\u0435\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430): \u0441\u0431\u043E\u0440, \u0437\u0430\u043F\u0438\u0441\u044C, \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E, \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u0435, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435 (\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435), \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 (\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0434\u043E\u0441\u0442\u0443\u043F), \u043E\u0431\u0435\u0437\u043B\u0438\u0447\u0438\u0432\u0430\u043D\u0438\u0435, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0438\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0439 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443.",
          a("br", {}),
          a("br", {}),
          "5.6. \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0435, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0435\u0440\u044B (\u0438\u043B\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0442\u044C \u0438\u0445 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435) \u0434\u043B\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0442 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043D\u0438\u043C, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044F, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0442 \u0438\u043D\u044B\u0445 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0441\u0442. 19 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0430 \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB.",
          a("br", {}),
          a("br", {}),
          "5.7. \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0432\u043E \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0432 \u0446\u0435\u043B\u044F\u0445 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0432\u0435\u0434\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u044C \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0438 \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438.",
          a("br", {}),
          a("br", {}),
          "5.8. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0445 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u043E\u0442\u0437\u044B\u0432\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u043E\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u043D\u0435\u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.",
          a("br", {}),
          a("br", {}),
          "6. \u041F\u041E\u0420\u042F\u0414\u041E\u041A \u0420\u0410\u0421\u0422\u041E\u0420\u0416\u0415\u041D\u0418\u042F \u0414\u041E\u0413\u041E\u0412\u041E\u0420\u0410",
          a("br", {}),
          a("br", {}),
          "6.1. \u0412\u0441\u0435 \u0441\u043F\u043E\u0440\u044B \u0438 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442 \u0438\u0437 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0438\u043B\u0438 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u043D\u0438\u043C, \u0421\u0442\u043E\u0440\u043E\u043D\u044B \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438\u0441\u044C \u0440\u0435\u0448\u0430\u0442\u044C \u043F\u0443\u0442\u0435\u043C \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043E\u0432. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F, \u0441\u043F\u043E\u0440 \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u043E\u0433\u043E \u0441\u0443\u0434\u0430 \u043F\u043E \u043C\u0435\u0441\u0442\u0443 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u0441\u0442\u0446\u0430.",
          a("br", {}),
          a("br", {}),
          "6.2. \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u043E \u043F\u043E \u0432\u0437\u0430\u0438\u043C\u043D\u043E\u043C\u0443 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0438 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0447\u0442\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u043C \u043E \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u043C \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u0441\u0442\u043E\u0440\u043E\u043D.",
          a("br", {}),
          a("br", {}),
          "6.3. \u041B\u044E\u0431\u0430\u044F \u0438\u0437 \u0421\u0442\u043E\u0440\u043E\u043D \u0432\u043F\u0440\u0430\u0432\u0435 \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043F\u043E \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u043C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\u043C. \u0421\u0442\u043E\u0440\u043E\u043D\u0430-\u0438\u043D\u0438\u0446\u0438\u0430\u0442\u043E\u0440 \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0437\u0430 30 \u0434\u043D\u0435\u0439 \u0434\u043E \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u043E\u0439 \u0434\u0430\u0442\u044B \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F.",
          a("br", {}),
          a("br", {}),
          "6.4. \u0412\u0441\u0435 \u0432\u0437\u0430\u0438\u043C\u043E\u0440\u0430\u0441\u0447\u0435\u0442\u044B \u043F\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u044B \u0434\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430.",
          a("br", {}),
          a("br", {}),
          "7. \u0420\u0415\u041A\u0412\u0418\u0417\u0418\u0422\u042B \u0418\u0421\u041F\u041E\u041B\u041D\u0418\u0422\u0415\u041B\u042F",
          a("br", {}),
          a("br", {}),
          "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435: \u0410\u041A\u0426\u0418\u041E\u041D\u0415\u0420\u041D\u041E\u0415 \u041E\u0411\u0429\u0415\u0421\u0422\u0412\u041E \xAB\u041F\u0415\u0420\u0412\u041E\u041A\u041B\u0410\u0421\u0421\u041D\u042B\u0415 \u0420\u0415\u0428\u0415\u041D\u0418\u042F\xBB;",
          a("br", {}),
          "\u041E\u0413\u0420\u041D 1247700148959;",
          a("br", {}),
          "\u0418\u041D\u041D 9707025574, \u041A\u041F\u041F 770701001;",
          a("br", {}),
          "\u041E\u041A\u0412\u042D\u0414 79.90.1;",
          a("br", {}),
          "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438 \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441\u0430: 127055, \u0433.\u041C\u043E\u0441\u043A\u0432\u0430, 1-\u0439 \u0422\u0438\u0445\u0432\u0438\u043D\u0441\u043A\u0438\u0439 \u0442\u0443\u043F\u0438\u043A, \u0434.5-7, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 1\u043F;",
          a("br", {}),
          "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u0421\u0435\u043B\u044F\u043D\u0438\u043D \u0410\u043D\u0442\u043E\u043D \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447;",
          a("br", {}),
          "\u0422\u0435\u043B\u0435\u0444\u043E\u043D +7 903 384-48-42;",
          a("br", {}),
          "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 hello@ilovefirstclass.com",
          a("br", {}),
        ],
      }),
    ],
  });
}
const xp = N.exports.memo(function (e = {}) {
  return a("div", {
    className: `${If.styleResets} ${jf.root}`,
    children: a(q1, {
      children: x(M1, {
        children: [
          a(Ce, { path: "/", element: a(ep, {}) }),
          a(Ce, { path: "/policy", element: a(Dp, {}) }),
          a(Ce, { path: "/public-offer", element: a(kp, {}) }),
        ],
      }),
    }),
  });
});
Cs(document.getElementById("root")).render(
  a(N.exports.StrictMode, { children: a(xp, {}) })
);
