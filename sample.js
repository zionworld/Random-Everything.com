(function (sttc) {
  "use strict";
  var m,
    aa = Object.defineProperty;
  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this),
    da = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
    ea = {},
    fa = {};
  function ha(a, b, c) {
    if (!c || a != null) {
      c = fa[b];
      if (c == null) return a[b];
      c = a[c];
      return c !== void 0 ? c : a[b];
    }
  }
  function ia(a, b, c) {
    if (b)
      a: {
        var d = a.split(".");
        a = d.length === 1;
        var e = d[0],
          f;
        !a && e in ea ? (f = ea) : (f = ca);
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) break a;
          f = f[g];
        }
        d = d[d.length - 1];
        c = da && c === "es6" ? f[d] : null;
        b = b(c);
        b != null &&
          (a
            ? aa(ea, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              (fa[d] === void 0 &&
                ((a = (Math.random() * 1e9) >>> 0),
                (fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d)),
              aa(f, fa[d], { configurable: !0, writable: !0, value: b })));
      }
  }
  ia(
    "Symbol.dispose",
    function (a) {
      return a ? a : Symbol("Symbol.dispose");
    },
    "es_next"
  ); /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var p = this || self;
  function ja(a) {
    var b = typeof a;
    return (b == "object" && a != null) || b == "function";
  }
  function ka(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function la(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function ma(a, b, c) {
    ma =
      Function.prototype.bind &&
      Function.prototype.bind.toString().indexOf("native code") != -1
        ? ka
        : la;
    return ma.apply(null, arguments);
  }
  function na(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function oa(a, b) {
    a = a.split(".");
    var c = p || p;
    a[0] in c ||
      typeof c.execScript == "undefined" ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || b === void 0
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function pa(a) {
    return a;
  }
  function qa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.W = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.mb = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  var ra;
  function sa(a) {
    p.setTimeout(() => {
      throw a;
    }, 0);
  }
  var ta, ua;
  a: {
    for (var va = ["CLOSURE_FLAGS"], wa = p, xa = 0; xa < va.length; xa++)
      if (((wa = wa[va[xa]]), wa == null)) {
        ua = null;
        break a;
      }
    ua = wa;
  }
  var ya = ua && ua[610401301];
  ta = ya != null ? ya : !1;
  function za() {
    var a = p.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var q;
  const Aa = p.navigator;
  q = Aa ? Aa.userAgentData || null : null;
  function Ba(a) {
    return ta
      ? q
        ? q.brands.some(({ brand: b }) => b && b.indexOf(a) != -1)
        : !1
      : !1;
  }
  function t(a) {
    return za().indexOf(a) != -1;
  }
  function u() {
    return ta ? !!q && q.brands.length > 0 : !1;
  }
  function Ca() {
    return u()
      ? Ba("Chromium")
      : ((t("Chrome") || t("CriOS")) && !(u() ? 0 : t("Edge"))) || t("Silk");
  }
  function Da(a, b) {
    if (typeof a === "string")
      return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Fa(a, b) {
    const c = a.length,
      d = typeof a === "string" ? a.split("") : a;
    for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Ga(a, b) {
    var c = a.length;
    const d = typeof a === "string" ? a.split("") : a;
    for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a);
  }
  function Ha(a, b) {
    b = Da(a, b);
    let c;
    (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function Ia(a, b) {
    let c = 0;
    Ga(a, function (d, e) {
      b.call(void 0, d, e, a) &&
        Array.prototype.splice.call(a, e, 1).length == 1 &&
        c++;
    });
  }
  function Ja(a) {
    Ja[" "](a);
    return a;
  }
  Ja[" "] = function () {};
  var Ka =
      t("Gecko") &&
      !(za().toLowerCase().indexOf("webkit") != -1 && !t("Edge")) &&
      !(t("Trident") || t("MSIE")) &&
      !t("Edge"),
    La = za().toLowerCase().indexOf("webkit") != -1 && !t("Edge");
  !t("Android") || Ca();
  Ca();
  t("Safari") &&
    (Ca() ||
      (u() ? 0 : t("Coast")) ||
      (u() ? 0 : t("Opera")) ||
      (u() ? 0 : t("Edge")) ||
      (u() ? Ba("Microsoft Edge") : t("Edg/")) ||
      (u() && Ba("Opera")));
  function Ma(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  let Na = void 0,
    Oa;
  function Pa(a) {
    if (Oa) throw Error("");
    Oa = (b) => {
      p.setTimeout(() => {
        a(b);
      }, 0);
    };
  }
  function Qa(a) {
    if (Oa)
      try {
        Oa(a);
      } catch (b) {
        throw ((b.cause = a), b);
      }
  }
  function Ra(a) {
    a = Error(a);
    Ma(a, "warning");
    Qa(a);
    return a;
  }
  var Sa = new Set();
  function Ta(a, b = !1, c = !1) {
    a = c && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol();
    b && Sa.add(a);
    return a;
  }
  var v = Ta("jas", !0, !0),
    Ua = Ta(),
    Va = Ta(),
    Wa = Ta(void 0, !0),
    Xa = Ta(void 0, !0);
  function Ya(a, b) {
    b[v] = (a | 0) & -30975;
  }
  function Za(a, b) {
    b[v] = (a | 34) & -30941;
  }
  function x(a) {
    return Array.prototype.slice.call(a);
  }
  var $a = {},
    ab = {};
  function bb(a) {
    return !(!a || typeof a !== "object" || a.g !== ab);
  }
  function cb(a) {
    return (
      a !== null &&
      typeof a === "object" &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  function db(a) {
    return !Array.isArray(a) || a.length ? !1 : (a[v] | 0) & 1 ? !0 : !1;
  }
  var eb;
  const fb = [];
  fb[v] = 55;
  eb = Object.freeze(fb);
  function gb(a) {
    if (a & 2) throw Error();
  }
  function hb(a, b) {
    const c = pa(Xa);
    (b = c ? b[c] : void 0) && (a[Xa] = x(b));
  }
  function ib(a, b) {
    const c = kb;
    if (!b(a))
      throw (
        ((b = (typeof c === "function" ? c() : c)?.concat("\n") ?? ""),
        Error(b + String(a)))
      );
  }
  function lb(a) {
    a.ob = !0;
    return a;
  }
  let kb = void 0;
  var mb = lb((a) => typeof a === "number"),
    y = lb((a) => typeof a === "string"),
    nb = lb((a) => a === void 0),
    ob = lb((a) => Array.isArray(a));
  function pb() {
    return lb((a) => (ob(a) ? a.every((b) => mb(b)) : !1));
  }
  function z(a) {
    if (y(a)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
    } else if (mb(a) && !Number.isSafeInteger(a)) throw Error(String(a));
    return BigInt(a);
  }
  var sb = lb((a) => a >= qb && a <= rb);
  const qb = BigInt(Number.MIN_SAFE_INTEGER),
    rb = BigInt(Number.MAX_SAFE_INTEGER);
  let tb = 0,
    ub = 0;
  function vb(a) {
    const b = a >>> 0;
    tb = b;
    ub = ((a - b) / 4294967296) >>> 0;
  }
  function wb(a) {
    if (a < 0) {
      vb(-a);
      a = tb;
      var b = ub;
      b = ~b;
      a ? (a = ~a + 1) : (b += 1);
      const [c, d] = [a, b];
      tb = c >>> 0;
      ub = d >>> 0;
    } else vb(a);
  }
  function xb(a, b) {
    b >>>= 0;
    a >>>= 0;
    var c;
    b <= 2097151
      ? (c = "" + (4294967296 * b + a))
      : (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)));
    return c;
  }
  function yb() {
    var a = tb,
      b = ub,
      c;
    b & 2147483648
      ? (c = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
      : (c = xb(a, b));
    return c;
  }
  const zb = typeof BigInt === "function" ? BigInt.asIntN : void 0,
    Ab = Number.isSafeInteger,
    Bb = Number.isFinite,
    Cb = Math.trunc,
    Db = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Eb(a) {
    switch (typeof a) {
      case "bigint":
        return !0;
      case "number":
        return Bb(a);
      case "string":
        return Db.test(a);
      default:
        return !1;
    }
  }
  function Fb(a) {
    if (!Bb(a)) throw Ra("enum");
    return a | 0;
  }
  function Gb(a) {
    return a == null ? a : Fb(a);
  }
  function Hb(a) {
    return a == null ? a : Bb(a) ? a | 0 : void 0;
  }
  function Ib(a) {
    if (typeof a !== "number") throw Ra("int32");
    if (!Bb(a)) throw Ra("int32");
    return a | 0;
  }
  function Jb(a) {
    if (a != null)
      a: {
        if (!Eb(a)) throw Ra("int64");
        switch (typeof a) {
          case "string":
            var b = Cb(Number(a));
            Ab(b)
              ? (a = String(b))
              : ((b = a.indexOf(".")),
                b !== -1 && (a = a.substring(0, b)),
                Kb(a) ||
                  (a.length < 16
                    ? wb(Number(a))
                    : ((a = BigInt(a)),
                      (tb = Number(a & BigInt(4294967295)) >>> 0),
                      (ub = Number((a >> BigInt(32)) & BigInt(4294967295)))),
                  (a = yb())));
            break a;
          case "bigint":
            a = z(zb(64, a));
            break a;
          default:
            a = Lb(a);
        }
      }
    return a;
  }
  function Kb(a) {
    const b = a.length;
    return a[0] === "-"
      ? b < 20
        ? !0
        : b === 20 && Number(a.substring(0, 7)) > -922337
      : b < 19
      ? !0
      : b === 19 && Number(a.substring(0, 6)) < 922337;
  }
  function Lb(a) {
    a = Cb(a);
    if (!Ab(a)) {
      wb(a);
      var b = tb,
        c = ub;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), b == 0 && (c = (c + 1) >>> 0);
      const d = c * 4294967296 + (b >>> 0);
      b = Number.isSafeInteger(d) ? d : xb(b, c);
      a = typeof b === "number" ? (a ? -b : b) : a ? "-" + b : b;
    }
    return a;
  }
  function Mb(a) {
    if (typeof a !== "string") throw Error();
    return a;
  }
  function Nb(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a;
  }
  function Ob(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  function Pb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "bigint":
        return sb(a) ? Number(a) : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (db(a)) return;
          } else if (a != null && a instanceof Uint8Array) {
            let b = "",
              c = 0;
            const d = a.length - 10240;
            for (; c < d; )
              b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
            return btoa(b);
          }
    }
    return a;
  }
  function Qb(a, b, c) {
    const d = x(a);
    var e = d.length;
    const f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
      b = d[b] = {};
      for (const g in f)
        Object.prototype.hasOwnProperty.call(f, g) && (b[g] = c(f[g]));
    }
    hb(d, a);
    return d;
  }
  function Rb(a, b, c, d, e) {
    if (a != null) {
      if (Array.isArray(a))
        a = db(a)
          ? void 0
          : e && (a[v] | 0) & 2
          ? a
          : Sb(a, b, c, d !== void 0, e);
      else if (cb(a)) {
        const f = {};
        for (let g in a)
          Object.prototype.hasOwnProperty.call(a, g) &&
            (f[g] = Rb(a[g], b, c, d, e));
        a = f;
      } else a = b(a, d);
      return a;
    }
  }
  function Sb(a, b, c, d, e) {
    const f = d || c ? a[v] | 0 : 0;
    d = d ? !!(f & 32) : void 0;
    const g = x(a);
    for (let h = 0; h < g.length; h++) g[h] = Rb(g[h], b, c, d, e);
    c && (hb(g, a), c(f, g));
    return g;
  }
  function Tb(a) {
    return a.ta === $a ? a.toJSON() : Pb(a);
  }
  function Ub(a) {
    return Sb(a, Tb, void 0, void 0, !1);
  }
  function Vb(a, b, c = Za) {
    if (a != null) {
      if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = a[v] | 0;
        if (d & 2) return a;
        b && (b = d === 0 || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b
          ? ((a[v] = (d | 34) & -12293), a)
          : Sb(a, Vb, d & 4 ? Za : c, !0, !0);
      }
      a.ta === $a &&
        ((c = a.F),
        (d = c[v] | 0),
        (a = d & 2 ? a : new a.constructor(Wb(c, d, !0))));
      return a;
    }
  }
  function Wb(a, b, c) {
    const d = c || b & 2 ? Za : Ya,
      e = !!(b & 32);
    a = Qb(a, b, (f) => Vb(f, e, d));
    a[v] = a[v] | 32 | (c ? 2 : 0);
    return a;
  }
  function Xb(a) {
    const b = a.F,
      c = b[v] | 0;
    return c & 2 ? new a.constructor(Wb(b, c, !1)) : a;
  }
  function Yb(a) {
    const b = a.F,
      c = b[v] | 0;
    return c & 2 ? a : new a.constructor(Wb(b, c, !0));
  }
  const Zb = z(0);
  function A(a, b) {
    a = a.F;
    return $b(a, a[v] | 0, b);
  }
  function $b(a, b, c, d) {
    if (c === -1) return null;
    var e = c + (b & 512 ? 0 : -1);
    const f = a.length - 1;
    if (e >= f && b & 256) return a[f][c];
    if (d && b & 256 && ((b = a[f][c]), b != null))
      return (
        a[e] != null &&
          Va != null &&
          ((a = Na ?? (Na = {})),
          (e = a[Va] || 0),
          e >= 4 ||
            ((a[Va] = e + 1),
            (a = Error()),
            Ma(a, "incident"),
            Oa ? Qa(a) : sa(a))),
        b
      );
    if (e <= f) return a[e];
  }
  function ac(a, b, c) {
    const d = a.F;
    let e = d[v] | 0;
    gb(e);
    B(d, e, b, c);
    return a;
  }
  function B(a, b, c, d) {
    const e = b & 512 ? 0 : -1,
      f = c + e;
    var g = a.length - 1;
    if (f >= g && b & 256) return (a[g][c] = d), b;
    if (f <= g)
      return (a[f] = d), b & 256 && ((a = a[g]), c in a && delete a[c]), b;
    d !== void 0 &&
      ((g = (b >> 15) & 1023 || 536870912),
      c >= g
        ? d != null && ((a[g + e] = { [c]: d }), (b |= 256), (a[v] = b))
        : (a[f] = d));
    return b;
  }
  function dc(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
  }
  function ec(a, b, c, d) {
    const e = a.F;
    let f = e[v] | 0;
    gb(f);
    if (c == null) return B(e, f, b), a;
    let g = c[v] | 0,
      h = g;
    var k = dc(g);
    let l = k || Object.isFrozen(c);
    k || (g = 0);
    l || ((c = x(c)), (h = 0), (g = fc(g, f)), (g = gc(g, f)), (l = !1));
    g |= 21;
    k = (4 & g ? (4096 & g ? 4096 : 8192 & g ? 8192 : 0) : void 0) ?? 0;
    for (let n = 0; n < c.length; n++) {
      const r = c[n],
        w = d(r, k);
      Object.is(r, w) ||
        (l && ((c = x(c)), (h = 0), (g = fc(g, f)), (g = gc(g, f)), (l = !1)),
        (c[n] = w));
    }
    g !== h && (l && ((c = x(c)), (g = fc(g, f)), (g = gc(g, f))), (c[v] = g));
    B(e, f, b, c);
    return a;
  }
  function C(a, b, c, d) {
    const e = a.F;
    let f = e[v] | 0;
    gb(f);
    B(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
    return a;
  }
  function hc(a, b, c, d) {
    let e = a.get(d);
    if (e != null) return e;
    e = 0;
    for (let f = 0; f < d.length; f++) {
      const g = d[f];
      $b(b, c, g) != null && (e !== 0 && (c = B(b, c, e)), (e = g));
    }
    a.set(d, e);
    return e;
  }
  function ic(a, b, c) {
    c == null && (c = void 0);
    return ac(a, b, c);
  }
  function jc(a, b, c, d) {
    d == null && (d = void 0);
    a: {
      const g = a.F;
      var e = g[v] | 0;
      gb(e);
      if (d == null) {
        var f = g[Wa] ?? (g[Wa] = new Map());
        if (hc(f, g, e, c) === b) f.set(c, 0);
        else break a;
      } else {
        f = g;
        const h = f[Wa] ?? (f[Wa] = new Map()),
          k = hc(h, f, e, c);
        k !== b && (k && (e = B(f, e, k)), h.set(c, b));
      }
      B(g, e, b, d);
    }
    return a;
  }
  function fc(a, b) {
    var c;
    2 & b ? (c = a | 2) : (c = a & -3);
    a = c;
    return (a | 32) & -2049;
  }
  function gc(a, b) {
    var c = !0;
    (32 & b && c) || (a &= -33);
    return a;
  }
  function kc(a, b) {
    a = A(a, b);
    return a == null || typeof a === "boolean"
      ? a
      : typeof a === "number"
      ? !!a
      : void 0;
  }
  function D(a, b, c) {
    return C(a, b, Nb(c), "");
  }
  let lc;
  function mc(a) {
    try {
      return (lc = Ub), nc(a);
    } finally {
      lc = void 0;
    }
  }
  var F = class {
    constructor(a) {
      a: {
        if (a == null) {
          var b = 96;
          a = [];
        } else {
          if (!Array.isArray(a)) throw Error("narr");
          b = a[v] | 0;
          if (b & 2048) throw Error("farr");
          if (b & 64) break a;
          var c = a;
          b |= 64;
          var d = c.length;
          if (d && (--d, cb(c[d]))) {
            b |= 256;
            c = d - (b & 512 ? 0 : -1);
            if (c >= 1024) throw Error("pvtlmt");
            b = (b & -33521665) | ((c & 1023) << 15);
          }
        }
        a[v] = b;
      }
      this.F = a;
    }
    toJSON() {
      const a = !lc;
      try {
        return a && (lc = Ub), nc(this);
      } finally {
        a && (lc = void 0);
      }
    }
  };
  F.prototype.ta = $a;
  function nc(a) {
    var b = a.F;
    a = lc(b);
    {
      b = a !== b;
      let l = a.length;
      if (l) {
        var c = a[l - 1],
          d = cb(c);
        d ? l-- : (c = void 0);
        var e = a;
        if (d) {
          b: {
            var f = c;
            var g;
            var h = !1;
            if (f)
              for (let n in f)
                Object.prototype.hasOwnProperty.call(f, n) &&
                  (isNaN(+n)
                    ? ((g ?? (g = {}))[n] = f[n])
                    : ((d = f[n]),
                      Array.isArray(d) &&
                        (db(d) || (bb(d) && d.size === 0)) &&
                        (d = null),
                      d == null && (h = !0),
                      d != null && ((g ?? (g = {}))[n] = d)));
            h || (g = f);
            if (g)
              for (let n in g) {
                h = g;
                break b;
              }
            h = null;
          }
          f = h == null ? c != null : h !== c;
        }
        for (; l > 0; l--) {
          g = e[l - 1];
          if (!(g == null || db(g) || (bb(g) && g.size === 0))) break;
          var k = !0;
        }
        if (e !== a || f || k) {
          if (!b) e = Array.prototype.slice.call(e, 0, l);
          else if (k || f || h) e.length = l;
          h && e.push(h);
        }
        k = e;
      } else k = a;
    }
    return k;
  }
  function oc(a) {
    return () => {
      var b;
      if (!(b = a[Ua])) {
        const c = new a();
        b = c.F;
        b[v] |= 34;
        b = a[Ua] = c;
      }
      return b;
    };
  }
  function pc(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  function qc(a) {
    let b = 0;
    return function (c) {
      p.clearTimeout(b);
      const d = arguments;
      b = p.setTimeout(function () {
        a.apply(void 0, d);
      }, 100);
    };
  }
  function G(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function rc(a, b, c) {
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  function sc() {
    return ta && q
      ? q.mobile
      : !tc() && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile"));
  }
  function tc() {
    return ta && q
      ? !q.mobile && (t("iPad") || t("Android") || t("Silk"))
      : t("iPad") || (t("Android") && !t("Mobile")) || t("Silk");
  }
  function uc(a, b, c) {
    for (const d in a) b.call(c, a[d], d, a);
  }
  function vc(a, b) {
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function wc(a) {
    let b = 0;
    for (const c in a) b++;
  }
  function xc(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  const yc =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function zc(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < yc.length; f++)
        (c = yc[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  } /* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/
  let Ac = globalThis.trustedTypes,
    Bc;
  function Cc() {
    let a = null;
    if (!Ac) return a;
    try {
      const b = (c) => c;
      a = Ac.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (b) {}
    return a;
  }
  function Dc() {
    Bc === void 0 && (Bc = Cc());
    return Bc;
  }
  var Ec = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g + "";
    }
  };
  function Fc(a) {
    const b = Dc();
    return new Ec(b ? b.createScriptURL(a) : a);
  }
  function Gc(a) {
    if (a instanceof Ec) return a.g;
    throw Error("");
  }
  var Hc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g + "";
    }
  };
  function Ic(a) {
    const b = Dc();
    return new Hc(b ? b.createHTML(a) : a);
  }
  function Jc(a) {
    if (a instanceof Hc) return a.g;
    throw Error("");
  }
  var Kc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g;
    }
  };
  function Lc(a) {
    if (a instanceof Kc) return a.g;
    throw Error("");
  }
  function Mc(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function Nc(a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  var Oc = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function Pc(a) {
    return new Kc(a[0]);
  }
  function Qc(a) {
    return a instanceof Hc
      ? a
      : Ic(
          String(a)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;")
        );
  }
  function Rc(a, ...b) {
    if (b.length === 0) return Fc(a[0]);
    let c = a[0];
    for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return Fc(c);
  }
  function Sc(a, b, c, d) {
    function e(g, h) {
      g != null &&
        (Array.isArray(g)
          ? g.forEach((k) => e(k, h))
          : ((b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g)),
            (f = "&")));
    }
    let f = b.length ? "&" : "?";
    d.constructor === Object && (d = Object.entries(d));
    Array.isArray(d) ? d.forEach((g) => e(g[1], g[0])) : d.forEach(e);
    return Fc(a + b + c);
  }
  function Tc(a) {
    try {
      var b;
      if ((b = !!a && a.location.href != null))
        a: {
          try {
            Ja(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
      return b;
    } catch {
      return !1;
    }
  }
  function Uc() {
    if (!globalThis.crypto) return Math.random();
    try {
      const a = new Uint32Array(1);
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function Vc(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Wc(a) {
    const b = [];
    Vc(a, function (c) {
      b.push(c);
    });
    return b;
  }
  var Xc = pc(() => (sc() ? 2 : tc() ? 1 : 0)),
    Yc = (a, b) => {
      Vc(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    },
    $c = (a, b) => {
      if ("length" in a.style) {
        a = a.style;
        const c = a.length;
        for (let d = 0; d < c; d++) {
          const e = a[d];
          b(a[e], e, a);
        }
      } else (a = Zc(a.style.cssText)), Vc(a, b);
    },
    Zc = (a) => {
      const b = {};
      if (a) {
        const c = /\s*:\s*/;
        Fa((a || "").split(/\s*;\s*/), (d) => {
          if (d) {
            var e = d.split(c);
            d = e[0];
            e = e[1];
            d && e && (b[d.toLowerCase()] = e);
          }
        });
      }
      return b;
    },
    ad = (a) => {
      const b = /!\s*important/i;
      $c(a, (c, d) => {
        b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important");
      });
    };
  let bd = [];
  const cd = () => {
    const a = bd;
    bd = [];
    for (const b of a)
      try {
        b();
      } catch {}
  };
  var dd = (a) => {
      bd.push(a);
      bd.length == 1 &&
        (window.Promise
          ? Promise.resolve().then(cd)
          : window.setImmediate
          ? setImmediate(cd)
          : setTimeout(cd, 0));
    },
    ed = (a) => {
      if (typeof a.goog_pvsid !== "number")
        try {
          var b = Object,
            c = b.defineProperty,
            d = Math.random;
          var e = Math.floor(d() * 2 ** 52);
          c.call(b, a, "goog_pvsid", { value: e, configurable: !1 });
        } catch (f) {}
      return Number(a.goog_pvsid) || -1;
    },
    fd = (a, b) =>
      new Promise((c) => {
        setTimeout(() => void c(b), a);
      });
  function gd(a, b = document) {
    return b.createElement(String(a).toLowerCase());
  }
  var hd = (a) => {
    if (Ca() && sc()) {
      var b = Tc(a.top) ? a.top : null;
      if (b) {
        a = Xc() === 0;
        var c = !!b.document.querySelector(
            'meta[name=viewport][content*="width=device-width"]'
          ),
          d = b.innerWidth;
        b = b.outerWidth;
        if (d === 0) a = 1;
        else {
          var e = Math.round((b / d + Number.EPSILON) * 100) / 100;
          a =
            e === 1
              ? 1
              : a || c
              ? e
              : Math.round((b / d / 0.4 + Number.EPSILON) * 100) / 100;
        }
      } else a = 1;
    } else a = 1;
    return a;
  };
  function id(a, b, c = null, d = !1, e = !1) {
    jd(a, b, c, d, e);
  }
  function jd(a, b, c, d, e = !1) {
    a.google_image_requests || (a.google_image_requests = []);
    const f = gd("IMG", a.document);
    if (c || d) {
      const g = (h) => {
        c && c(h);
        d && Ha(a.google_image_requests, f);
        rc(f, "load", g);
        rc(f, "error", g);
      };
      G(f, "load", g);
      G(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  var ld = (a) => {
      let b =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
      Vc(a, (c, d) => {
        if (c || c === 0) b += `&${d}=${encodeURIComponent("" + c)}`;
      });
      kd(b);
    },
    kd = (a) => {
      var b = window;
      b.fetch
        ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : id(b, a, void 0, !1, !1);
    };
  function md(a = p) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function nd() {
    var a = md();
    return a ? (Tc(a.master) ? a.master : null) : null;
  }
  function od(a, b) {
    b = String(b);
    a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
    return a.createElement(b);
  }
  function pd(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  }
  function qd() {
    this.g = p.document || document;
  }
  qd.prototype.getChildren = function (a) {
    return a.children;
  };
  qd.prototype.contains = function (a, b) {
    return a && b ? a == b || a.contains(b) : !1;
  };
  function H(a, b, c) {
    if (typeof b === "string") (b = rd(a, b)) && (a.style[b] = c);
    else
      for (const e in b) {
        c = a;
        var d = b[e];
        const f = rd(c, e);
        f && (c.style[f] = d);
      }
  }
  var sd = {};
  function rd(a, b) {
    let c = sd[b];
    if (!c) {
      var d = Mc(b);
      c = d;
      a.style[d] === void 0 &&
        ((d = (La ? "Webkit" : Ka ? "Moz" : null) + Nc(d)),
        a.style[d] !== void 0 && (c = d));
      sd[b] = c;
    }
    return c;
  }
  var td = class {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {};
    }
  };
  function ud(a) {
    return new td(a, { message: vd(a) });
  }
  function vd(a) {
    let b = a.toString();
    a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
    a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
    if (a.stack)
      a: {
        a = a.stack;
        var c = b;
        try {
          a.indexOf(c) == -1 && (a = c + "\n" + a);
          let d;
          for (; a != d; )
            (d = a),
              (a = a.replace(
                RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
                "$1"
              ));
          b = a.replace(RegExp("\n *", "g"), "\n");
          break a;
        } catch (d) {
          b = c;
          break a;
        }
        b = void 0;
      }
    return b;
  }
  const wd = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"
  );
  var xd = class {
      constructor(a, b) {
        this.g = a;
        this.i = b;
      }
    },
    yd = class {
      constructor(a, b) {
        this.url = a;
        this.Fa = !!b;
        this.depth = null;
      }
    };
  let zd = null;
  function Ad() {
    const a = p.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function Bd() {
    const a = p.performance;
    return a && a.now ? a.now() : null;
  }
  var Cd = class {
    constructor(a, b) {
      var c = Bd() || Ad();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random();
    }
  };
  const I = p.performance,
    Dd = !!(I && I.mark && I.measure && I.clearMarks),
    Ed = pc(() => {
      var a;
      if ((a = Dd)) {
        var b;
        if (zd === null) {
          zd = "";
          try {
            a = "";
            try {
              a = p.top.location.hash;
            } catch (c) {
              a = p.location.hash;
            }
            a && (zd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = zd;
        a = !!b.indexOf && b.indexOf("1337") >= 0;
      }
      return a;
    });
  function Fd(a) {
    a &&
      I &&
      Ed() &&
      (I.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      I.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  var Gd = class {
    constructor(a) {
      this.events = [];
      this.i = a || p;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.events = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.g = Ed() || (b != null ? b : Math.random() < 1);
    }
    disable() {
      this.g = !1;
      this.events !== this.i.google_js_reporting_queue &&
        (Ed() && Fa(this.events, Fd), (this.events.length = 0));
    }
    start(a, b) {
      if (!this.g) return null;
      a = new Cd(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      I && Ed() && I.mark(b);
      return a;
    }
    end(a) {
      if (this.g && typeof a.value === "number") {
        a.duration = (Bd() || Ad()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        I && Ed() && I.mark(b);
        !this.g || this.events.length > 2048 || this.events.push(a);
      }
    }
  };
  function Hd(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }
  function Id(a, b, c, d, e) {
    const f = [];
    Vc(a, (g, h) => {
      (g = Jd(g, b, c, d, e)) && f.push(`${h}=${g}`);
    });
    return f.join(b);
  }
  function Jd(a, b, c, d, e) {
    if (a == null) return "";
    b = b || "&";
    c = c || ",$";
    typeof c === "string" && (c = c.split(""));
    if (a instanceof Array) {
      if ((d || (d = 0), d < c.length)) {
        const f = [];
        for (let g = 0; g < a.length; g++) f.push(Jd(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if (typeof a === "object")
      return (
        e || (e = 0), e < 2 ? encodeURIComponent(Id(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function Kd(a) {
    let b = 1;
    for (const c in a.i) c.length > b && (b = c.length);
    return 3997 - b - a.o.length - 1;
  }
  function Ld(a, b) {
    let c = "https://pagead2.googlesyndication.com" + b,
      d = Kd(a) - b.length;
    if (d < 0) return "";
    a.g.sort((f, g) => f - g);
    b = null;
    let e = "";
    for (let f = 0; f < a.g.length; f++) {
      const g = a.g[f],
        h = a.i[g];
      for (let k = 0; k < h.length; k++) {
        if (!d) {
          b = b == null ? g : b;
          break;
        }
        let l = Id(h[k], a.o, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.o;
            break;
          }
          b = b == null ? g : b;
        }
      }
    }
    a = "";
    b != null && (a = `${e}${"trn"}=${b}`);
    return c + a;
  }
  var Md = class {
    constructor() {
      this.o = "&";
      this.i = {};
      this.j = 0;
      this.g = [];
    }
  };
  var Od = class {
    constructor(a, b, c = null) {
      this.l = a;
      this.u = b;
      this.g = c;
      this.i = null;
      this.j = !1;
      this.A = this.O;
    }
    va(a) {
      this.i = a;
    }
    o(a) {
      this.j = a;
    }
    U(a, b) {
      let c, d;
      try {
        this.g && this.g.g
          ? ((d = this.g.start(a.toString(), 3)), (c = b()), this.g.end(d))
          : (c = b());
      } catch (e) {
        b = this.u;
        try {
          Fd(d), (b = this.A(a, ud(e), void 0, void 0));
        } catch (f) {
          this.O(217, f);
        }
        if (b) window.console?.error?.(e);
        else throw e;
      }
      return c;
    }
    ua(a, b) {
      return (...c) => this.U(a, () => b.apply(void 0, c));
    }
    O(a, b, c, d, e) {
      e = e || "jserror";
      let f = void 0;
      try {
        const S = new Md();
        var g = S;
        g.g.push(1);
        g.i[1] = Hd("context", a);
        (b.error && b.meta && b.id) || (b = ud(b));
        g = b;
        if (g.msg) {
          b = S;
          var h = g.msg.substring(0, 512);
          b.g.push(2);
          b.i[2] = Hd("msg", h);
        }
        var k = g.meta || {};
        h = k;
        if (this.i)
          try {
            this.i(h);
          } catch (E) {}
        if (d)
          try {
            d(h);
          } catch (E) {}
        d = S;
        k = [k];
        d.g.push(3);
        d.i[3] = k;
        d = p;
        k = [];
        h = null;
        do {
          var l = d;
          if (Tc(l)) {
            var n = l.location.href;
            h = (l.document && l.document.referrer) || null;
          } else (n = h), (h = null);
          k.push(new yd(n || ""));
          try {
            d = l.parent;
          } catch (E) {
            d = null;
          }
        } while (d && l != d);
        for (let E = 0, Yd = k.length - 1; E <= Yd; ++E) k[E].depth = Yd - E;
        l = p;
        if (
          l.location &&
          l.location.ancestorOrigins &&
          l.location.ancestorOrigins.length == k.length - 1
        )
          for (n = 1; n < k.length; ++n) {
            var r = k[n];
            r.url ||
              ((r.url = l.location.ancestorOrigins[n - 1] || ""), (r.Fa = !0));
          }
        var w = k;
        let jb = new yd(p.location.href, !1);
        l = null;
        const bc = w.length - 1;
        for (r = bc; r >= 0; --r) {
          var T = w[r];
          !l && wd.test(T.url) && (l = T);
          if (T.url && !T.Fa) {
            jb = T;
            break;
          }
        }
        T = null;
        const gg = w.length && w[bc].url;
        jb.depth != 0 && gg && (T = w[bc]);
        f = new xd(jb, T);
        if (f.i) {
          w = S;
          var Y = f.i.url || "";
          w.g.push(4);
          w.i[4] = Hd("top", Y);
        }
        var cc = { url: f.g.url || "" };
        if (f.g.url) {
          const E = f.g.url.match(Oc);
          var Ea = E[1],
            Zd = E[3],
            $d = E[4];
          Y = "";
          Ea && (Y += Ea + ":");
          Zd && ((Y += "//"), (Y += Zd), $d && (Y += ":" + $d));
          var ae = Y;
        } else ae = "";
        Ea = S;
        cc = [cc, { url: ae }];
        Ea.g.push(5);
        Ea.i[5] = cc;
        Nd(this.l, e, S, this.j, c);
      } catch (S) {
        try {
          Nd(
            this.l,
            e,
            { context: "ecmserr", rctx: a, msg: vd(S), url: f?.g.url ?? "" },
            this.j,
            c
          );
        } catch (jb) {}
      }
      return this.u;
    }
  };
  var Pd = class extends F {};
  function Qd(a, b) {
    try {
      const c = (d) => [{ [d.Ja]: d.Ha }];
      return JSON.stringify([
        a.filter((d) => d.sa).map(c),
        mc(b),
        a.filter((d) => !d.sa).map(c),
      ]);
    } catch (c) {
      return Rd(c, b), "";
    }
  }
  function Rd(a, b) {
    try {
      ld({
        m: vd(a instanceof Error ? a : Error(String(a))),
        b: (Hb(A(b, 1)) ?? 0) || null,
        v: (Ob(A(b, 2)) ?? "") || null,
      });
    } catch (c) {}
  }
  var Sd = class {
    constructor(a, b) {
      var c = new Pd();
      a = C(c, 1, Gb(a), 0);
      b = D(a, 2, b);
      this.o = Yb(b);
    }
  };
  var Td = class extends F {
    K(a) {
      return C(this, 2, Gb(a), 0);
    }
  };
  var Ud = class extends F {},
    Vd = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  var Wd = class extends F {};
  function Xd() {
    var a = Xb(be());
    return D(a, 1, ce());
  }
  var de = class extends F {};
  var ee = class extends F {};
  var fe = class extends F {
    getTagSessionCorrelator() {
      var a = A(this, 1),
        b = typeof a;
      a != null &&
        (b === "bigint"
          ? (a = z(zb(64, a)))
          : Eb(a)
          ? b === "string"
            ? ((b = Cb(Number(a))),
              Ab(b)
                ? (a = z(b))
                : ((b = a.indexOf(".")),
                  b !== -1 && (a = a.substring(0, b)),
                  (a = z(zb(64, BigInt(a))))))
            : Ab(a)
            ? (a = z(Lb(a)))
            : ((a = Cb(a)),
              Ab(a)
                ? (a = String(a))
                : ((b = String(a)), Kb(b) ? (a = b) : (wb(a), (a = yb()))),
              (a = z(a)))
          : (a = void 0));
      return a ?? Zb;
    }
  };
  var ge = class extends F {},
    he = [1, 7],
    ie = [4, 6, 8];
  class je extends Sd {
    constructor() {
      super(...arguments);
    }
  }
  function ke(a, ...b) {
    le(a, ...b.map((c) => ({ sa: !0, Ja: 3, Ha: mc(c) })));
  }
  function me(a, ...b) {
    le(a, ...b.map((c) => ({ sa: !0, Ja: 7, Ha: mc(c) })));
  }
  var ne = class extends je {};
  var oe = (a, b) => {
    globalThis
      .fetch(a, {
        method: "POST",
        body: b,
        keepalive: b.length < 65536,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow",
      })
      .catch(() => {});
  };
  function le(a, ...b) {
    try {
      a.A && Qd(a.g.concat(b), a.o).length >= 65536 && pe(a),
        a.j &&
          !a.l &&
          ((a.l = !0),
          qe(a.j, () => {
            pe(a);
          })),
        a.g.push(...b),
        a.g.length >= a.u && pe(a),
        a.g.length &&
          a.i === null &&
          (a.i = setTimeout(() => {
            pe(a);
          }, a.D));
    } catch (c) {
      Rd(c, a.o);
    }
  }
  function pe(a) {
    a.i !== null && (clearTimeout(a.i), (a.i = null));
    if (a.g.length) {
      var b = Qd(a.g, a.o);
      a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.g = [];
    }
  }
  var re = class extends ne {
      constructor(a, b, c, d) {
        super(2, ce());
        this.H = oe;
        this.D = a;
        this.u = b;
        this.A = c;
        this.j = d;
        this.g = [];
        this.i = null;
        this.l = !1;
      }
    },
    se = class extends re {
      constructor(a = 1e3, b = 100, c = !1, d) {
        super(a, b, c && !0, d);
      }
    };
  var J = (a) => {
    var b = "qa";
    if (a.qa && a.hasOwnProperty(b)) return a.qa;
    b = new a();
    return (a.qa = b);
  };
  function K(a, b, c) {
    return b[a] || c;
  }
  function te(a, b) {
    a.g = () => K(3, b, () => [])(1);
  }
  class ue {
    g() {
      return [];
    }
  }
  function Nd(a, b, c, d = !1, e) {
    if ((d ? a.g : Math.random()) < (e || 0.01))
      try {
        let f;
        c instanceof Md
          ? (f = c)
          : ((f = new Md()),
            Vc(c, (h, k) => {
              var l = f;
              const n = l.j++;
              h = Hd(k, h);
              l.g.push(n);
              l.i[n] = h;
            }));
        const g = Ld(f, "/pagead/gen_204?id=" + b + "&");
        g && id(p, g);
      } catch (f) {}
  }
  function ve(a, b) {
    b >= 0 && b <= 1 && (a.g = b);
  }
  class we {
    constructor() {
      this.g = Math.random();
    }
  }
  let xe, ye;
  const ze = new Gd(window);
  ((a) => {
    xe = a ?? new we();
    typeof window.google_srt !== "number" &&
      (window.google_srt = Math.random());
    ve(xe, window.google_srt);
    ye = new Od(xe, !0, ze);
    ye.va(() => {});
    ye.o(!0);
    window.document.readyState == "complete"
      ? window.google_measure_js_timing || ze.disable()
      : ze.g &&
        G(window, "load", () => {
          window.google_measure_js_timing || ze.disable();
        });
  })();
  function ce() {
    return "m202501130101";
  }
  var L = class {
    constructor(a, b = 0) {
      this.g = a;
      this.defaultValue = b;
    }
  };
  var Ae = new (class {
      constructor(a, b = !1) {
        this.g = a;
        this.defaultValue = b;
      }
    })(1381),
    Be = new L(1130, 100),
    Ce = new L(1085, 5),
    De = new L(63, 30),
    Ee = new L(1080, 5),
    Fe = new L(1027, 10),
    Ge = new L(57, 120),
    He = new L(1050, 30),
    Ie = new L(58, 120),
    Je = new L(550718588, 250);
  var Ke = oc(Wd);
  var be = oc(de);
  function Le(a, b) {
    return b(a) ? a : void 0;
  }
  function Me(a, b, c, d, e) {
    c = c instanceof td ? c.error : c;
    var f = new ge();
    const g = new fe();
    try {
      var h = ed(window);
      C(g, 1, Jb(h), "0");
    } catch (w) {}
    try {
      var k = J(ue).g();
      ec(g, 2, k, Ib);
    } catch (w) {}
    try {
      D(g, 3, window.document.URL);
    } catch (w) {}
    h = ic(f, 2, g);
    k = new ee();
    b = C(k, 1, Gb(b), 0);
    try {
      var l = y(c?.name) ? c.name : "Unknown error";
      D(b, 2, l);
    } catch (w) {}
    try {
      var n = y(c?.message) ? c.message : `Caught ${c}`;
      D(b, 3, n);
    } catch (w) {}
    try {
      var r = y(c?.stack) ? c.stack : Error().stack;
      r && ec(b, 4, r.split(/\n\s*/), Mb);
    } catch (w) {}
    l = jc(h, 1, he, b);
    if (e) {
      n = 0;
      switch (e.errSrc) {
        case "LCC":
          n = 1;
          break;
        case "PVC":
          n = 2;
      }
      r = Xd();
      b = Le(e.shv, y);
      r = D(r, 2, b);
      n = C(r, 6, Gb(n), 0);
      r = Ke();
      r = Xb(r);
      b = Le(e.es, pb());
      r = ec(r, 1, b, Ib);
      r = Yb(r);
      n = ic(n, 4, r);
      r = Le(e.client, y);
      n = ac(n, 3, Nb(r));
      r = Le(e.slotname, y);
      n = D(n, 7, r);
      e = Le(e.tag_origin, y);
      e = D(n, 8, e);
      e = Yb(e);
    } else e = Yb(Xd());
    e = jc(l, 6, ie, e);
    d = C(e, 5, Jb(d ?? 1), "0");
    ke(a, d);
  }
  let Ne,
    Oe = 64;
  function Pe() {
    try {
      return (
        Ne ?? (Ne = new Uint32Array(64)),
        Oe >= 64 && (crypto.getRandomValues(Ne), (Oe = 0)),
        Ne[Oe++]
      );
    } catch (a) {
      return Math.floor(Math.random() * 2 ** 32);
    }
  }
  var Re = class {
    constructor() {
      this.g = Qe;
    }
  };
  function Qe() {
    return {
      Oa: Pe() + (Pe() & (2 ** 21 - 1)) * 2 ** 32,
      Ma: Number.MAX_SAFE_INTEGER,
    };
  }
  var Te = class {
    constructor(a = !1) {
      this.l = Se;
      this.i = a;
      this.g = null;
      this.j = this.O;
    }
    va(a) {
      this.g = a;
    }
    o() {}
    U(a, b) {
      let c;
      try {
        c = b();
      } catch (d) {
        b = this.i;
        try {
          b = this.j(a, ud(d), void 0, void 0);
        } catch (e) {
          this.O(217, e);
        }
        if (b) window.console?.error?.(d);
        else throw d;
      }
      return c;
    }
    ua(a, b) {
      return (...c) => this.U(a, () => b.apply(void 0, c));
    }
    O(a, b, c, d) {
      try {
        c = c === void 0 ? 100 : c === 0 ? 0 : 1 / c;
        var e = new Re().g();
        if (c > 0 && e.Oa * c <= e.Ma) {
          var f = this.l;
          e = {};
          if (this.g)
            try {
              this.g(e);
            } catch (g) {}
          if (d)
            try {
              d(e);
            } catch (g) {}
          Me(f, a, b, c, e);
        }
      } catch (g) {}
      return this.i;
    }
  };
  var Ue = class {
    constructor() {
      const a = {};
      this.i = (b, c) => (a[b] != null ? a[b] : c);
      this.o = (b, c) => (a[b] != null ? a[b] : c);
      this.l = (b, c) => (a[b] != null ? a[b] : c);
      this.u = (b, c) => (a[b] != null ? a[b] : c);
      this.j = (b, c) => (a[b] != null ? c.concat(a[b]) : c);
      this.g = () => {};
    }
  };
  function Ve() {
    return J(Ue).i(Ae.g, Ae.defaultValue);
  }
  function M(a) {
    return J(Ue).o(a.g, a.defaultValue);
  }
  let Se, We, Xe, Ye;
  const Ze = new Gd(p);
  ((a, b, c = !0) => {
    typeof p.google_srt !== "number" && (p.google_srt = Math.random());
    We = a || new we();
    ve(We, p.google_srt);
    Xe = new Od(We, c, Ze);
    Xe.o(!0);
    Se = b || new se(1e3);
    Ye = new Te(c);
    p.document.readyState == "complete"
      ? p.google_measure_js_timing || Ze.disable()
      : Ze.g &&
        G(p, "load", () => {
          p.google_measure_js_timing || Ze.disable();
        });
  })();
  var $e = (a, b) => {
      Ve() ? Ye.U(a, b) : Xe.U(a, b);
    },
    N = (a, b) => (Ve() ? Ye.ua(a, b) : Xe.ua(a, b));
  function af() {
    var a = md(window);
    if (a) {
      if (a) {
        var b = a.pageViewId;
        a = a.clientId;
        typeof a === "string" && (b += a.replace(/\D/g, "").substr(0, 6));
      } else b = null;
      return +b;
    }
    for (a = b = window; b && b != b.parent; ) (b = b.parent), Tc(b) && (a = b);
    b = a;
    a = b.google_global_correlator;
    a ||
      (b.google_global_correlator = a =
        1 + Math.floor(Math.random() * 8796093022208));
    return a;
  }
  function bf() {
    if (cf) return cf;
    const a = nd() || window,
      b = a.google_persistent_state_async;
    return b != null &&
      typeof b == "object" &&
      b.S != null &&
      typeof b.S == "object"
      ? (cf = b)
      : (a.google_persistent_state_async = cf = new df());
  }
  function ef(a, b, c) {
    b = ff[b] || `google_ps_${b}`;
    a = a.S;
    const d = a[b];
    return d === void 0 ? ((a[b] = c()), a[b]) : d;
  }
  function gf(a) {
    var b = af();
    return ef(a, 7, () => b);
  }
  function hf() {
    var a = bf();
    return gf(a);
  }
  var df = class {
      constructor() {
        this.S = {};
      }
    },
    cf = null;
  const ff = {
    [8]: "google_prev_ad_formats_by_region",
    [9]: "google_prev_ad_slotnames_by_region",
  };
  function jf(a) {
    a && typeof a.dispose == "function" && a.dispose();
  }
  function O() {
    this.o = this.o;
    this.H = this.H;
  }
  O.prototype.o = !1;
  O.prototype.dispose = function () {
    this.o || ((this.o = !0), this.C());
  };
  O.prototype[ha(Symbol, "dispose")] = function () {
    this.dispose();
  };
  function P(a, b) {
    a.o ? b() : (a.H || (a.H = []), a.H.push(b));
  }
  O.prototype.C = function () {
    if (this.H) for (; this.H.length; ) this.H.shift()();
  };
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(
    (a, b) => a + b
  );
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(
    (a, b) => a + b
  );
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(
    (a, b) => a + b
  );
  [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2,
  ].reduce((a, b) => a + b);
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
  wc({
    hb: 0,
    gb: 1,
    bb: 2,
    Wa: 3,
    eb: 4,
    Xa: 5,
    fb: 6,
    Za: 7,
    ab: 8,
    Va: 9,
    Ya: 10,
    ib: 11,
  });
  wc({ kb: 0, lb: 1, jb: 2 });
  function kf(a) {
    var b = new lf();
    gb(b.F[v] | 0);
    var c = b.F;
    b = c[v] | 0;
    const d = 2 & b ? 1 : 2;
    var e = $b(c, b, 1);
    e = Array.isArray(e) ? e : eb;
    var f = e[v] | 0;
    var g = 4 & f ? !1 : !0;
    if (g) {
      4 & f && ((e = x(e)), (f = fc(f, b)), (b = B(c, b, 1, e)));
      let k = (g = 0);
      for (; g < e.length; g++) {
        const l = Hb(e[g]);
        l != null && (e[k++] = l);
      }
      k < g && (e.length = k);
      f === 0 && (f = fc(f, b));
      f |= 21;
      f &= -12289;
      e[v] = f;
      2 & f && Object.freeze(e);
    }
    d === 1 || (d === 4 && 32 & f)
      ? dc(f) || ((b = f), (f |= 2), f !== b && (e[v] = f), Object.freeze(e))
      : (d === 2 &&
          dc(f) &&
          ((e = x(e)),
          (f = fc(f, b)),
          (f = gc(f, b)),
          (e[v] = f),
          (b = B(c, b, 1, e))),
        dc(f) || ((c = f), (f = gc(f, b)), f !== c && (e[v] = f)));
    b = e;
    if (Array.isArray(a)) {
      var h = a.length;
      for (e = 0; e < h; e++) b.push(Fb(a[e]));
    } else for (h of a) b.push(Fb(h));
  }
  var lf = class extends F {}; /* 
 
Math.uuid.js (v1.4) 
http://www.broofa.com 
mailto:robert@broofa.com 
Copyright (c) 2010 Robert Kieffer 
Dual licensed under the MIT and GPL licenses. 
*/
  var mf =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  class nf {
    constructor(a) {
      for (var b = Array(36), c = 0, d, e = 0; e < 36; e++)
        e == 8 || e == 13 || e == 18 || e == 23
          ? (b[e] = "-")
          : e == 14
          ? (b[e] = "4")
          : (c <= 2 && (c = (33554432 + Math.random() * 16777216) | 0),
            (d = c & 15),
            (c >>= 4),
            (b[e] = mf[e == 19 ? (d & 3) | 8 : d]));
      this.uuid = b.join("");
      this.callback = a;
    }
  }
  function of(a) {
    const b = p.imalib_globalCallbacks || new Map(),
      c = b.get("AFMA_updateActiveView") || [];
    if (c.length === 0 && p.AFMA_updateActiveView) {
      const d = new nf(p.AFMA_updateActiveView);
      c.push(d);
      p.AFMA_updateActiveView = void 0;
    }
    p.AFMA_updateActiveView ||
      (p.AFMA_updateActiveView = function () {
        const d = b.get("AFMA_updateActiveView");
        for (const e of d) e.callback.apply(null, arguments);
      });
    a = new nf(a);
    c.push(a);
    b.set("AFMA_updateActiveView", c);
    p.imalib_globalCallbacks = b;
    return a.uuid;
  }
  function pf(a) {
    if (p.AFMA_updateActiveView) {
      var b = p.imalib_globalCallbacks;
      if (b) {
        var c = b.get("AFMA_updateActiveView");
        if (c) {
          var d = c.findIndex((e) => e.uuid === a);
          d !== -1 &&
            (c.splice(d, 1),
            c.length === 0 && (p.AFMA_updateActiveView = void 0),
            b.set("AFMA_updateActiveView", c),
            (p.imalib_globalCallbacks = b));
        }
      }
    }
  }
  kf([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16, 19, 20, 21, 23]);
  kf([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18, 19, 20, 21, 23]);
  kf([1, 6, 7, 9, 10, 11, 12, 22, 2, 3, 4, 5, 13, 14, 17, 18, 19, 20, 21, 23]);
  new lf();
  var qf = (p.navigator ? p.navigator.userAgent : "").indexOf("Android") != -1;
  function rf(a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = !1;
  }
  rf.prototype.i = function () {
    this.defaultPrevented = !0;
  };
  var Q = class {
      constructor(a, b) {
        this.messageName = a;
        this.parameters = b || {};
      }
    },
    sf = class extends rf {
      constructor(a, b) {
        super(a.messageName, b);
        this.params = a.parameters || {};
      }
    };
  function tf(a, b) {
    a.o.forEach((c) => c.postMessage(b, "*"));
  }
  class uf {
    constructor() {
      this.o = [];
      this.j = window === window.top;
      this.l = !1;
      this.g = 0;
      this.i = null;
      typeof window.addEventListener !== "undefined" &&
        window.addEventListener("message", (a) => this.onMessage(a));
    }
    onMessage({ data: a, source: b }) {
      if (b && a) {
        var c = this.o,
          d = a.messageName;
        a = a.parameters;
        if (this.j)
          switch (d) {
            case "mraid_loaded":
              d = a.is_top_win;
              d === !1 &&
                ((this.l = !0),
                (this.i = of((e) => {
                  this.j && tf(this, new Q("update_activeview_action", e));
                })),
                c.indexOf(b) === -1 &&
                  (c.push(b),
                  typeof b.postMessage !== "undefined" &&
                    b.postMessage(
                      new Q("mraid_env_obj", window.MRAID_ENV),
                      "*"
                    )));
              break;
            case "start_tracking_action":
              this.g == 0 && window.AFMA_SendMessage("trackActiveViewUnit");
              this.g += 1;
              break;
            case "stop_tracking_action":
              --this.g;
              this.g == 0 &&
                (window.AFMA_SendMessage("untrackActiveViewUnit", {
                  hashCode: a.hashCode,
                }),
                this.i && (pf(this.i), (this.i = null)));
              break;
            case "register_iframe_window_action":
              d = a.is_top_win;
              d === !1 && c.indexOf(b) === -1 && c.push(b);
              break;
            case "receive_message_action":
              a.messageName == "disableMraidOpen" &&
                window.AFMA_ReceiveMessage(a.messageName, a.parameters);
          }
        else
          switch (d) {
            case "mraid_env_obj":
              window.MRAID_ENV = a;
              break;
            case "update_activeview_action":
              window.AFMA_updateActiveView && window.AFMA_updateActiveView(a);
              break;
            case "receive_message_action":
              window.AFMA_ReceiveMessage(a.messageName, a.parameters);
          }
      }
    }
  }
  function vf(a) {
    var b = Fc("gmsg://mobileads.google.com/" + a.messageName);
    a = new Map(Object.entries(a.parameters));
    b = Gc(b).toString();
    const c = b.split(/[?#]/),
      d = /[?]/.test(b) ? "?" + c[1] : "";
    return Sc(c[0], d, /[#]/.test(b) ? "#" + (d ? c[2] : c[1]) : "", a);
  }
  function wf(a, b) {
    rf.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.timeStamp = 0;
    this.o = null;
    a && this.init(a, b);
  }
  qa(wf, rf);
  wf.prototype.init = function (a, b) {
    const c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.g = b;
    b = a.relatedTarget;
    b ||
      (c == "mouseover"
        ? (b = a.fromElement)
        : c == "mouseout" && (b = a.toElement));
    this.relatedTarget = b;
    d
      ? ((this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX),
        (this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
        (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = a.pointerType;
    this.state = a.state;
    this.timeStamp = a.timeStamp;
    this.o = a;
    a.defaultPrevented && wf.W.i.call(this);
  };
  wf.prototype.i = function () {
    wf.W.i.call(this);
    const a = this.o;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var xf = "closure_listenable_" + ((Math.random() * 1e6) | 0);
  var yf = 0;
  function zf(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.ea = e;
    this.key = ++yf;
    this.removed = this.ba = !1;
  }
  function Af(a) {
    a.removed = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.ea = null;
  }
  function Bf(a) {
    this.src = a;
    this.g = {};
    this.i = 0;
  }
  Bf.prototype.add = function (a, b, c, d, e) {
    const f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.i++);
    const g = Cf(a, b, d, e);
    g > -1
      ? ((b = a[g]), c || (b.ba = !1))
      : ((b = new zf(b, this.src, f, !!d, e)), (b.ba = c), a.push(b));
    return b;
  };
  Bf.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    const e = this.g[a];
    b = Cf(e, b, c, d);
    return b > -1
      ? (Af(e[b]),
        Array.prototype.splice.call(e, b, 1),
        e.length == 0 && (delete this.g[a], this.i--),
        !0)
      : !1;
  };
  function Df(a, b) {
    const c = b.type;
    c in a.g &&
      Ha(a.g[c], b) &&
      (Af(b), a.g[c].length == 0 && (delete a.g[c], a.i--));
  }
  Bf.prototype.removeAll = function (a) {
    a = a && a.toString();
    let b = 0;
    for (const c in this.g)
      if (!a || c == a) {
        const d = this.g[c];
        for (let e = 0; e < d.length; e++) ++b, Af(d[e]);
        delete this.g[c];
        this.i--;
      }
    return b;
  };
  Bf.prototype.hasListener = function (a, b) {
    const c = a !== void 0,
      d = c ? a.toString() : "",
      e = b !== void 0;
    return vc(this.g, function (f) {
      for (let g = 0; g < f.length; ++g)
        if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
      return !1;
    });
  };
  function Cf(a, b, c, d) {
    for (let e = 0; e < a.length; ++e) {
      const f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.ea == d)
        return e;
    }
    return -1;
  }
  var Ef = "closure_lm_" + ((Math.random() * 1e6) | 0),
    Ff = {},
    Gf = 0;
  function Hf(a, b, c, d, e) {
    if (d && d.once) return If(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (let f = 0; f < b.length; f++) Hf(a, b[f], c, d, e);
      return null;
    }
    c = Jf(c);
    return a && a[xf]
      ? a.listen(b, c, ja(d) ? !!d.capture : !!d, e)
      : Kf(a, b, c, !1, d, e);
  }
  function Kf(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    const g = ja(e) ? !!e.capture : !!e;
    let h = Lf(a);
    h || (a[Ef] = h = new Bf(a));
    c = h.add(b, c, d, g, f);
    if (c.proxy) return c;
    d = Mf();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      e === void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Nf(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Gf++;
    return c;
  }
  function Mf() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    const b = Of;
    return a;
  }
  function If(a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (let f = 0; f < b.length; f++) If(a, b[f], c, d, e);
      return null;
    }
    c = Jf(c);
    return a && a[xf]
      ? a.g.add(String(b), c, !0, ja(d) ? !!d.capture : !!d, e)
      : Kf(a, b, c, !0, d, e);
  }
  function Pf(a, b, c, d, e) {
    if (Array.isArray(b))
      for (let f = 0; f < b.length; f++) Pf(a, b[f], c, d, e);
    else
      ((d = ja(d) ? !!d.capture : !!d), (c = Jf(c)), a && a[xf])
        ? a.g.remove(String(b), c, d, e)
        : a &&
          (a = Lf(a)) &&
          ((b = a.g[b.toString()]),
          (a = -1),
          b && (a = Cf(b, c, d, e)),
          (c = a > -1 ? b[a] : null) && Qf(c));
  }
  function Qf(a) {
    if (typeof a !== "number" && a && !a.removed) {
      var b = a.src;
      if (b && b[xf]) Df(b.g, a);
      else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
          ? b.detachEvent(Nf(c), d)
          : b.addListener && b.removeListener && b.removeListener(d);
        Gf--;
        (c = Lf(b))
          ? (Df(c, a), c.i == 0 && ((c.src = null), (b[Ef] = null)))
          : Af(a);
      }
    }
  }
  function Nf(a) {
    return a in Ff ? Ff[a] : (Ff[a] = "on" + a);
  }
  function Of(a, b) {
    if (a.removed) a = !0;
    else {
      b = new wf(b, this);
      const c = a.listener,
        d = a.ea || a.src;
      a.ba && Qf(a);
      a = c.call(d, b);
    }
    return a;
  }
  function Lf(a) {
    a = a[Ef];
    return a instanceof Bf ? a : null;
  }
  var Rf = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
  function Jf(a) {
    if (typeof a === "function") return a;
    a[Rf] ||
      (a[Rf] = function (b) {
        return a.handleEvent(b);
      });
    return a[Rf];
  }
  function Sf(a) {
    O.call(this);
    this.i = a;
    this.g = {};
  }
  qa(Sf, O);
  var Tf = [];
  Sf.prototype.listen = function (a, b, c, d) {
    Array.isArray(b) || (b && (Tf[0] = b.toString()), (b = Tf));
    for (let e = 0; e < b.length; e++) {
      const f = Hf(a, b[e], c || this.handleEvent, d || !1, this.i || this);
      if (!f) break;
      this.g[f.key] = f;
    }
    return this;
  };
  Sf.prototype.removeAll = function () {
    uc(
      this.g,
      function (a, b) {
        this.g.hasOwnProperty(b) && Qf(a);
      },
      this
    );
    this.g = {};
  };
  Sf.prototype.C = function () {
    Sf.W.C.call(this);
    this.removeAll();
  };
  Sf.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function Uf() {
    O.call(this);
    this.g = new Bf(this);
    this.D = this;
    this.l = null;
  }
  qa(Uf, O);
  Uf.prototype[xf] = !0;
  m = Uf.prototype;
  m.addEventListener = function (a, b, c, d) {
    Hf(this, a, b, c, d);
  };
  m.removeEventListener = function (a, b, c, d) {
    Pf(this, a, b, c, d);
  };
  m.dispatchEvent = function (a) {
    var b,
      c = this.l;
    if (c) for (b = []; c; c = c.l) b.push(c);
    c = this.D;
    const d = a.type || a;
    if (typeof a === "string") a = new rf(a, c);
    else if (a instanceof rf) a.target = a.target || c;
    else {
      var e = a;
      a = new rf(d, c);
      zc(a, e);
    }
    e = !0;
    let f, g;
    if (b)
      for (g = b.length - 1; g >= 0; g--)
        (f = a.g = b[g]), (e = Vf(f, d, !0, a) && e);
    f = a.g = c;
    e = Vf(f, d, !0, a) && e;
    e = Vf(f, d, !1, a) && e;
    if (b)
      for (g = 0; g < b.length; g++)
        (f = a.g = b[g]), (e = Vf(f, d, !1, a) && e);
    return e;
  };
  m.C = function () {
    Uf.W.C.call(this);
    this.g && this.g.removeAll(void 0);
    this.l = null;
  };
  m.listen = function (a, b, c, d) {
    return this.g.add(String(a), b, !1, c, d);
  };
  function Vf(a, b, c, d) {
    b = a.g.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    let e = !0;
    for (let f = 0; f < b.length; ++f) {
      const g = b[f];
      if (g && !g.removed && g.capture == c) {
        const h = g.listener,
          k = g.ea || g.src;
        g.ba && Df(a.g, g);
        e = h.call(k, d) !== !1 && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  m.hasListener = function (a, b) {
    return this.g.hasListener(a !== void 0 ? String(a) : void 0, b);
  };
  function Wf(a, b) {
    Uf.call(this);
    this.j = a || 1;
    this.i = b || p;
    this.u = ma(this.Ua, this);
    this.A = Date.now();
  }
  qa(Wf, Uf);
  m = Wf.prototype;
  m.enabled = !1;
  m.G = null;
  m.setInterval = function (a) {
    this.j = a;
    this.G && this.enabled
      ? (this.stop(), this.start())
      : this.G && this.stop();
  };
  m.Ua = function () {
    if (this.enabled) {
      const a = Date.now() - this.A;
      a > 0 && a < this.j * 0.8
        ? (this.G = this.i.setTimeout(this.u, this.j - a))
        : (this.G && (this.i.clearTimeout(this.G), (this.G = null)),
          this.dispatchEvent("tick"),
          this.enabled && (this.stop(), this.start()));
    }
  };
  m.start = function () {
    this.enabled = !0;
    this.G ||
      ((this.G = this.i.setTimeout(this.u, this.j)), (this.A = Date.now()));
  };
  m.stop = function () {
    this.enabled = !1;
    this.G && (this.i.clearTimeout(this.G), (this.G = null));
  };
  m.C = function () {
    Wf.W.C.call(this);
    this.stop();
    delete this.i;
  };
  function Xf() {
    if (
      window.googleJsEnvironment &&
      (window.googleJsEnvironment.environment == "rhino" ||
        window.googleJsEnvironment.environment == "jscore")
    )
      return new Yf();
    if (
      qf &&
      window.googleAdsJsInterface &&
      "notify" in window.googleAdsJsInterface
    )
      try {
        return (
          window.googleAdsJsInterface.notify(
            "gmsg://mobileads.google.com/noop"
          ),
          new Yf()
        );
      } catch (a) {}
    else if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.gadGMSGHandler
    )
      return new Zf();
    return new $f();
  }
  function ag() {
    bg || (bg = Xf());
    return bg;
  }
  var bg = null,
    cg = class extends O {};
  function dg(a) {
    const b = xc(a.parameters);
    b["google.afma.Notify_dt"] = new Date().getTime();
    return vf(new Q(a.messageName, b)).toString();
  }
  var eg = class extends cg {
      constructor(a) {
        super();
        this.u = a;
        this.l = [];
        this.j = new Wf(1);
        this.A = new Sf(this);
        this.A.listen(this.j, "tick", this.D);
      }
      sendMessage(a) {
        this.l.push(a);
        this.j.enabled || ((a = this.l.shift()), this.u(a), this.j.start());
      }
      D() {
        const a = this.l.shift();
        a ? this.u(a) : this.j.stop();
      }
    },
    $f = class extends eg {
      constructor() {
        super((a) => {
          var b = this.g[this.i];
          b ||
            ((b = od(document, "IFRAME")),
            (b.id = "afma-notify-" + new Date().getTime()),
            (b.style.display = "none"),
            (this.g[this.i] = b));
          this.i = (this.i + 1) % 25;
          const c = xc(a.parameters);
          c["google.afma.Notify_dt"] = new Date().getTime();
          var d = b;
          a = vf(new Q(a.messageName, c));
          d.src = Gc(a).toString();
          b.parentNode || document.body.appendChild(b);
        });
        this.g = [];
        this.i = 0;
      }
      C() {
        this.g.forEach(pd);
        this.g = [];
        super.C();
      }
    },
    Yf = class extends cg {
      sendMessage(a) {
        a = dg(a);
        window.googleAdsJsInterface &&
          window.googleAdsJsInterface.notify &&
          (window.googleAdsJsInterface.notify(a),
          window.googleAdsJsInterface.DEBUG && console.log(a));
      }
    },
    Zf = class extends cg {
      sendMessage(a) {
        a = dg(a);
        window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.gadGMSGHandler &&
          window.webkit.messageHandlers.gadGMSGHandler.postMessage(a);
      }
    };
  var hg = class extends Uf {
    constructor() {
      super();
      this.j = ag();
      this.j = ag();
      P(this, na(jf, this.j));
      this.i = {};
      this.u = new uf();
    }
    sendMessage(a, b) {
      let c;
      typeof a === "string" ? (c = new Q(a, b)) : a instanceof Q && (c = a);
      document.readyState == "loading"
        ? If(p, "DOMContentLoaded", () => this.j.sendMessage(c), !1, this)
        : this.j.sendMessage(c);
    }
    receiveMessage(a, b) {
      if (this.shouldForwardMessageToIframe())
        this.forwardMessage(new Q("receive_message_action", new Q(a, b)));
      else {
        const c = document.getElementById("ad_iframe");
        c != void 0 &&
          c.contentWindow != void 0 &&
          c.contentWindow.AFMA_ReceiveMessage != void 0 &&
          c.contentWindow.AFMA_ReceiveMessage(a, b);
      }
      a == "onshow" && document.readyState == "loading"
        ? If(p, "DOMContentLoaded", () => fg(a, b ?? void 0))
        : this.dispatchEvent(new sf(new Q(a, b), this));
    }
    addObserver(a, b, c) {
      const d = (e) => void c.call(b, e.type, e.params);
      this.listen(a, d);
      this.i[a] || (this.i[a] = {});
      this.i[a][b] = d;
    }
    removeObserver(a, b) {
      this.i[a] &&
        this.i[a][b] &&
        (this.g.remove(String(a), this.i[a][b], void 0, void 0),
        delete this.i[a][b]);
    }
    shouldForwardMessageToIframe() {
      return this.u.l;
    }
    forwardMessage(a) {
      tf(this.u, a);
    }
  };
  function R(a, b) {
    p.AFMA_Communicator ? p.AFMA_Communicator.sendMessage(a, b) : ig(a, b);
  }
  function ig(a, b) {
    document.readyState == "loading"
      ? ((a = ma(ig, null, a, b)), If(p, "DOMContentLoaded", a, !1))
      : ((a = new Q(a, b)), ag().sendMessage(a));
  }
  function fg(a, b) {
    p.AFMA_Communicator.receiveMessage(a, b);
  }
  function jg(a, b, c, d) {
    p.AFMA_Communicator.removeEventListener(a, b, c, d);
  }
  function kg(a, b, c, d) {
    p.AFMA_Communicator.addEventListener(a, b, c, d);
  }
  function lg(a, b, c) {
    p.AFMA_Communicator.addObserver(a, b, c);
  }
  function mg(a, b) {
    p.AFMA_Communicator.removeObserver(a, b);
  }
  p.AFMA_Communicator ||
    (oa("AFMA_AddEventListener", kg),
    oa("AFMA_RemoveEventListener", jg),
    oa("AFMA_AddObserver", lg),
    oa("AFMA_RemoveObserver", mg),
    oa("AFMA_ReceiveMessage", fg),
    oa("AFMA_SendMessage", R),
    (p.AFMA_Communicator = new hg()));
  var ng = class {
    constructor(a) {
      this.g = a;
      kg("h5adsEvent", (b) => void this.g(b));
    }
    initialize() {
      R("h5ads", { action: "initialize" });
    }
    oa(a, b) {
      R("h5ads", { obj_id: a, action: "create_interstitial_ad", ad_unit: b });
    }
    pa(a, b) {
      R("h5ads", { obj_id: a, ad_unit: b, action: "create_rewarded_ad" });
    }
    dispose(a) {
      R("h5ads", { obj_id: a, action: "dispose" });
    }
  };
  class U {
    constructor() {
      this.promise = new Promise((a, b) => {
        this.resolve = a;
        this.reject = b;
      });
    }
  }
  function og(a) {
    a.extras === void 0 && (a.extras = {});
    a.extras.highfive = "1";
    return encodeURIComponent(JSON.stringify(a));
  }
  class pg extends O {
    constructor(a, b) {
      super();
      this.id = a;
      this.g = b;
    }
    load(a, b) {
      this.o ||
        ((this.listener = b),
        (b = this.id),
        (a = og(a)),
        R("h5ads", {
          obj_id: b,
          action: "load_interstitial_ad",
          ad_request: a,
        }));
    }
    show() {
      if (!this.o) {
        if (this.listener == null)
          throw Error("load must be called before show");
        R("h5ads", { obj_id: this.id, action: "show_interstitial_ad" });
      }
    }
    C() {
      this.g.j.dispose(this.id);
      super.C();
    }
  }
  class qg extends O {
    constructor(a, b) {
      super();
      this.id = a;
      this.g = b;
    }
    load(a, b) {
      this.o ||
        ((this.listener = b),
        (b = this.id),
        (a = og(a)),
        R("h5ads", { obj_id: b, action: "load_rewarded_ad", ad_request: a }));
    }
    show() {
      if (!this.o) {
        if (this.listener == null)
          throw Error("load must be called before show");
        R("h5ads", { obj_id: this.id, action: "show_rewarded_ad" });
      }
    }
    C() {
      this.g.j.dispose(this.id);
      super.C();
    }
  }
  function rg(a) {
    const b = a.l;
    a.l += 1;
    return b;
  }
  var sg = class {
    constructor() {
      this.l = 0;
      this.ads = new Map();
      this.g = new Map();
      this.o = new U();
      this.i = 0;
      this.j = new ng((a) => {
        a = a.params;
        switch (a.eventCategory) {
          case "initialize":
            this.ads.clear();
            this.g.clear();
            this.i = 3;
            this.o.resolve(this);
            break;
          case "creation":
            var b = a.objectId;
            switch (a.event) {
              case "nativeObjectCreated":
                if ((a = this.g.get(b)))
                  this.g.delete(b), this.ads.set(b, a.ad), a.M.resolve(a.ad);
                return;
              case "nativeObjectNotCreated":
                if ((a = this.g.get(b)))
                  this.g.delete(b),
                    a.ad.dispose(),
                    a.M.reject(Error("Native object not created"));
                return;
              default:
                return;
            }
          case "interstitial":
            if ((b = this.ads.get(a.objectId)) && b instanceof pg && b.listener)
              switch (a.event) {
                case "onAdLoaded":
                  b.listener.R?.(b);
                  break;
                case "onAdFailedToLoad":
                  b.listener.P?.(b, a.errorCode);
                  break;
                case "onAdOpened":
                  b.listener.Qa?.(b);
                  break;
                case "onAdClicked":
                  b.listener.pb?.(b);
                  break;
                case "onAdClosed":
                  b.listener.I?.(b);
                  break;
                case "onNativeAdObjectNotAvailable":
                  b.listener.T?.(b);
              }
            break;
          case "rewarded":
            if ((b = this.ads.get(a.objectId)) && b instanceof qg && b.listener)
              switch (a.event) {
                case "onRewardedAdLoaded":
                  b.listener.R?.(b);
                  break;
                case "onRewardedAdFailedToLoad":
                  b.listener.P?.(b, a.errorCode);
                  break;
                case "onRewardedAdOpened":
                  b.listener.Qa?.(b);
                  break;
                case "onRewardedAdFailedToShow":
                  b.listener.Pa?.(b, a.errorCode);
                  break;
                case "onUserEarnedReward":
                  b.listener.Ra?.(b);
                  break;
                case "onRewardedAdClosed":
                  b.listener.I?.(b);
                  break;
                case "onNativeAdObjectNotAvailable":
                  b.listener.T?.(b);
              }
        }
      });
    }
    connect() {
      switch (this.i) {
        case 3:
          return Promise.resolve(this);
        case 1:
          return this.o.promise;
        default:
          return (
            (this.i = 1),
            (this.o = new U()),
            this.j.initialize(),
            setTimeout(() => {
              this.i !== 3 &&
                ((this.i = 2),
                this.o.reject(
                  Error("GmaBridge could not connect to SDK after 10000 ms.")
                ));
            }, 1e4),
            this.o.promise
          );
      }
    }
    oa(a) {
      if (this.i !== 3)
        return Promise.reject(Error("GmaBridge is not connected"));
      const b = rg(this),
        c = new U();
      this.g.set(b, { M: c, ad: new pg(b, this) });
      this.j.oa(b, a);
      return c.promise;
    }
    pa(a) {
      if (this.i !== 3)
        return Promise.reject(Error("GmaBridge is not connected"));
      const b = rg(this),
        c = new U();
      this.g.set(b, { M: c, ad: new qg(b, this) });
      this.j.pa(b, a);
      return c.promise;
    }
  };
  let tg = null;
  var ug = {},
    vg = {};
  function wg() {
    throw Error("Do not instantiate directly");
  }
  wg.prototype.Da = null;
  wg.prototype.getContent = function () {
    return this.content;
  };
  wg.prototype.toString = function () {
    return this.content;
  };
  wg.prototype.wa = function () {
    if (this.ca !== ug) throw Error("Sanitized content was not of kind HTML.");
    return Ic(this.toString());
  };
  function xg() {
    wg.call(this);
  }
  qa(xg, wg);
  xg.prototype.ca = ug;
  function yg(a) {
    if (a != null)
      switch (a.Da) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  }
  var V = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      d !== void 0 && (c.Da = d);
      return c;
    };
  })(xg);
  function zg(a) {
    return Ag(String(a), () => "").replace(Bg, "&lt;");
  }
  const Cg = RegExp.prototype.hasOwnProperty("sticky"),
    Dg = new RegExp(
      (Cg ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))",
      Cg ? "gy" : "g"
    );
  function Ag(a, b) {
    const c = [],
      d = a.length;
    let e = 0,
      f = [],
      g,
      h,
      k = 0;
    for (; k < d; ) {
      switch (e) {
        case 0:
          var l = a.indexOf("<", k);
          if (l < 0) {
            if (c.length === 0) return a;
            c.push(a.substring(k));
            k = d;
          } else
            c.push(a.substring(k, l)),
              (h = l),
              (k = l + 1),
              Cg
                ? ((Dg.lastIndex = k), (l = Dg.exec(a)))
                : ((Dg.lastIndex = 0), (l = Dg.exec(a.substring(k)))),
              l
                ? ((f = ["<", l[0]]), (g = l[1]), (e = 1), (k += l[0].length))
                : c.push("<");
          break;
        case 1:
          l = a.charAt(k++);
          switch (l) {
            case "'":
            case '"':
              let n = a.indexOf(l, k);
              n < 0 ? (k = d) : (f.push(l, a.substring(k, n + 1)), (k = n + 1));
              break;
            case ">":
              f.push(l);
              c.push(b(f.join(""), g));
              e = 0;
              f = [];
              h = g = null;
              break;
            default:
              f.push(l);
          }
          break;
        default:
          throw Error();
      }
      e === 1 &&
        k >= d &&
        ((k = h + 1), c.push("<"), (e = 0), (f = []), (h = g = null));
    }
    return c.join("");
  }
  function Eg(a, b) {
    a = a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
    return b
      ? a
          .replace(/{/g, " \\{")
          .replace(/}/g, " \\}")
          .replace(/\/\*/g, "/ *")
          .replace(/\\$/, "\\ ")
      : a;
  }
  function W(a) {
    return a != null && a.ca === ug
      ? String(zg(a.getContent())).replace(Fg, Gg)
      : String(a).replace(Hg, Gg);
  }
  function X(a) {
    return a != null && a.ca === vg
      ? Eg(a.getContent(), !1)
      : a == null
      ? ""
      : a instanceof Kc
      ? Eg(Lc(a), !1)
      : Eg(String(a), !0);
  }
  const Ig = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\v": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
  function Gg(a) {
    return Ig[a];
  }
  const Hg = /[\x00\x22\x26\x27\x3c\x3e]/g,
    Fg = /[\x00\x22\x27\x3c\x3e]/g,
    Jg = /^[a-zA-Z0-9+\/_-]+={0,2}$/,
    Bg = /</g;
  var Kg = class extends F {
    g() {
      return Ob(A(this, 3)) ?? "";
    }
    i() {
      return kc(this, 4) != null;
    }
  };
  var Lg = class extends F {
      g() {
        var a = this.F;
        var b = a[v] | 0;
        const c = $b(a, b, 1, !1);
        if (c != null && typeof c === "object" && c.ta === $a) var d = c;
        else if (Array.isArray(c)) {
          let e = (d = c[v] | 0);
          e === 0 && (e |= b & 32);
          e |= b & 2;
          e !== d && (c[v] = e);
          d = new Kg(c);
        } else d = void 0;
        d !== c && d != null && B(a, b, 1, d);
        (a = d) ||
          (a = Kg[Ua]) ||
          ((b = new Kg()), (a = b.F), (a[v] |= 34), (a = Kg[Ua] = b));
        return a;
      }
    },
    Mg = (function (a) {
      return (b) => {
        if (b == null || b == "") b = new a();
        else {
          b = JSON.parse(b);
          if (!Array.isArray(b)) throw Error("dnarr");
          b[v] |= 32;
          b = new a(b);
        }
        return b;
      };
    })(Lg);
  var Ng = class extends F {};
  let Og = void 0;
  var Qg = class {
      constructor() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Pg();
        this.sideRailProcessedFixedElements = new Set();
        this.sideRailAvailableSpace = new Map();
        this.sideRailPlasParam = new Map();
        this.sideRailMutationCallbacks = [];
        this.clickTriggeredInterstitialMayBeDisplayed = !1;
      }
    },
    Pg = class {
      constructor() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = [];
      }
    };
  function Rg(a) {
    const b = Sg(a);
    Fa(a.floatingAdsStacking.maxZIndexListeners, (c) => c(b));
  }
  function Sg(a) {
    a = Wc(a.floatingAdsStacking.maxZIndexRestrictions);
    return a.length ? Math.min.apply(null, a) : null;
  }
  var Tg = class {
      constructor(a) {
        a.google_reactive_ads_global_state
          ? (a.google_reactive_ads_global_state
              .sideRailProcessedFixedElements == null &&
              (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
                new Set()),
            a.google_reactive_ads_global_state.sideRailAvailableSpace == null &&
              (a.google_reactive_ads_global_state.sideRailAvailableSpace =
                new Map()),
            a.google_reactive_ads_global_state.sideRailPlasParam == null &&
              (a.google_reactive_ads_global_state.sideRailPlasParam =
                new Map()),
            a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
              null &&
              (a.google_reactive_ads_global_state.sideRailMutationCallbacks =
                []))
          : (a.google_reactive_ads_global_state = new Qg());
        this.floatingAdsStacking =
          a.google_reactive_ads_global_state.floatingAdsStacking;
      }
      addListener(a) {
        this.floatingAdsStacking.maxZIndexListeners.push(a);
        a(Sg(this));
      }
      removeListener(a) {
        Ia(this.floatingAdsStacking.maxZIndexListeners, (b) => b === a);
      }
    },
    Ug = class {
      constructor(a) {
        this.controller = a;
        this.g = null;
      }
    };
  function Vg(a) {
    const b = {
      bottom: "auto",
      clear: "none",
      display: "inline",
      float: "none",
      height: "auto",
      left: "auto",
      margin: 0,
      "margin-bottom": 0,
      "margin-left": 0,
      "margin-right": "0",
      "margin-top": 0,
      "max-height": "none",
      "max-width": "none",
      opacity: 1,
      overflow: "visible",
      padding: 0,
      "padding-bottom": 0,
      "padding-left": 0,
      "padding-right": 0,
      "padding-top": 0,
      position: "static",
      right: "auto",
      top: "auto",
      "vertical-align": "baseline",
      visibility: "visible",
      width: "auto",
      "z-index": "auto",
    };
    Fa(Object.keys(b), (c) => {
      const d = a.style[Mc(c)];
      (typeof d !== "undefined" ? d : a.style[rd(a, c)]) || H(a, c, b[c]);
    });
    ad(a);
  }
  function Wg(a, b) {
    const c = gd("STYLE", a);
    c.textContent = Lc(Pc`* { pointer-events: none; }`);
    a?.head.appendChild(c);
    setTimeout(() => {
      a?.head.removeChild(c);
    }, b);
  }
  function Xg(a, b, c) {
    if (!a.body) return null;
    const d = new Yg();
    d.apply(a, b);
    return () => {
      var e = c || 0;
      e > 0 && Wg(b.document, e);
      H(a.body, {
        filter: d.g,
        webkitFilter: d.g,
        overflow: d.o,
        position: d.j,
        top: d.l,
      });
      b.scrollTo(0, d.i);
    };
  }
  class Yg {
    constructor() {
      this.g = this.l = this.j = this.o = null;
      this.i = 0;
    }
    apply(a, b) {
      this.o = a.body.style.overflow;
      this.j = a.body.style.position;
      this.l = a.body.style.top;
      this.g = a.body.style.filter
        ? a.body.style.filter
        : a.body.style.webkitFilter;
      this.i =
        b.pageYOffset === void 0
          ? (
              b.document.documentElement ||
              b.document.body.parentNode ||
              b.document.body
            ).scrollTop
          : b.pageYOffset;
      H(a.body, "top", `${-this.i}px`);
    }
  }
  function Zg(a, b) {
    var c;
    if (!a.i)
      for (a.i = [], c = a.g.parentElement; c; ) {
        a.i.push(c);
        if (a.D(c)) break;
        c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null;
      }
    c = a.i.slice();
    let d, e;
    for (d = 0; d < c.length; ++d) (e = c[d]) && b.call(a, e, d, c);
  }
  var $g = class extends O {
    constructor(a, b, c) {
      super();
      this.g = a;
      this.N = b;
      this.u = c;
      this.i = null;
      P(this, () => (this.i = null));
    }
    D(a) {
      return this.u === a;
    }
  };
  function ah(a, b) {
    const c = a.u;
    if (c)
      if (b) {
        b = a.A;
        if (b.g == null) {
          var d = b.controller;
          const e = d.floatingAdsStacking.nextRestrictionId++;
          d.floatingAdsStacking.maxZIndexRestrictions[e] = 2147483646;
          Rg(d);
          b.g = e;
        }
        Yc(c, { display: "block" });
        a.l.body && !a.j && (a.j = Xg(a.l, a.N, a.L));
        c.setAttribute("tabindex", "0");
        c.setAttribute("aria-hidden", "false");
        a.l.body.setAttribute("aria-hidden", "true");
      } else
        (b = a.A),
          b.g != null &&
            ((d = b.controller),
            delete d.floatingAdsStacking.maxZIndexRestrictions[b.g],
            Rg(d),
            (b.g = null)),
          Yc(c, { display: "none" }),
          a.j && (a.j(), (a.j = null)),
          a.l.body.setAttribute("aria-hidden", "false"),
          c.setAttribute("aria-hidden", "true");
  }
  function bh(a) {
    ah(a, !1);
    const b = a.u;
    if (b) {
      var c = ch(a.J);
      Zg(a, (d) => {
        Yc(d, c);
        Vg(d);
      });
      a.g.setAttribute("width", "");
      a.g.setAttribute("height", "");
      H(a.g, c);
      H(a.g, dh);
      H(b, eh);
      H(b, { background: "transparent" });
      Yc(b, { display: "none", position: "fixed" });
      Vg(b);
      Vg(a.g);
      hd(a.J) <= 1 ||
        (H(b, { overflow: "scroll", "max-width": "100vw" }), ad(b));
    }
  }
  class fh extends $g {
    constructor(a, b) {
      var c = window,
        d = M(Je);
      super(a, c, b);
      this.j = null;
      this.l = c.document;
      this.L = d;
      a = new Tg(c);
      this.A = new Ug(a);
      this.J = c;
    }
    hide() {
      ah(this, !1);
    }
  }
  function ch(a) {
    a = hd(a);
    a = 100 * (a < 1 ? 1 : a);
    return { width: `${a}vw`, height: `${a}vh` };
  }
  var eh = {
      backgroundColor: "white",
      opacity: "1",
      position: "fixed",
      left: "0px",
      top: "0px",
      margin: "0px",
      padding: "0px",
      display: "none",
      zIndex: "2147483647",
    },
    dh = { left: "0", position: "absolute", top: "0" };
  var gh = class extends fh {
    constructor(a, b) {
      super(a, b);
      bh(this);
    }
    D(a) {
      a.classList
        ? (a = a.classList.contains("adsbygoogle"))
        : ((a = a.classList
            ? a.classList
            : (typeof a.className == "string"
                ? a.className
                : (a.getAttribute && a.getAttribute("class")) || ""
              ).match(/\S+/g) || []),
          (a = Da(a, "adsbygoogle") >= 0));
      return a;
    }
  };
  function hh() {
    const a = (window.google_ad_modifications =
      window.google_ad_modifications || {});
    a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
    return a.afg_slotcar_vars;
  }
  function qe(a, b) {
    a.i.size > 0 || ih(a);
    const c = a.i.get(0);
    c ? c.push(b) : a.i.set(0, [b]);
  }
  function jh(a, b, c, d) {
    G(b, c, d);
    P(a, () => rc(b, c, d));
  }
  function kh(a, b) {
    a.state !== 1 && ((a.state = 1), a.i.size > 0 && lh(a, b));
  }
  function ih(a) {
    a.g.document.visibilityState
      ? jh(a, a.g.document, "visibilitychange", (b) => {
          a.g.document.visibilityState === "hidden" && kh(a, b);
          a.g.document.visibilityState === "visible" && (a.state = 0);
        })
      : "onpagehide" in a.g
      ? (jh(a, a.g, "pagehide", (b) => {
          kh(a, b);
        }),
        jh(a, a.g, "pageshow", () => {
          a.state = 0;
        }))
      : jh(a, a.g, "beforeunload", (b) => {
          kh(a, b);
        });
  }
  function lh(a, b) {
    for (let c = 9; c >= 0; c--)
      a.i.get(c)?.forEach((d) => {
        d(b);
      });
  }
  var mh = class extends O {
    constructor(a) {
      super();
      this.g = a;
      this.state = 0;
      this.i = new Map();
    }
  };
  async function nh(a, b) {
    var c = 10;
    return c <= 0
      ? Promise.reject(Error(`wfc bad input ${c} ${200}`))
      : b()
      ? Promise.resolve()
      : new Promise((d, e) => {
          const f = a.setInterval(() => {
            --c
              ? b() && (a.clearInterval(f), d())
              : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)));
          }, 200);
        });
  }
  function oh(a) {
    const b = a.state.pc;
    return b !== null && b !== 0 ? b : (a.state.pc = ed(a.g));
  }
  function ph(a) {
    var b = a.state.wpc;
    if (b === null || b === "")
      (b = a.state),
        (a = a.g),
        (a = a.google_ad_client
          ? String(a.google_ad_client)
          : (a.google_ad_modifications = a.google_ad_modifications || {})
              .head_tag_slot_vars?.google_ad_client ??
            a.document
              .querySelector(".adsbygoogle[data-ad-client]")
              ?.getAttribute("data-ad-client") ??
            ""),
        (b = b.wpc = a);
    return b;
  }
  async function qh(a) {
    await nh(a.g, () => !(!oh(a) || !ph(a)));
  }
  async function rh(a, b) {
    await qh(a);
    var c = a.o;
    var d = new Ud();
    var e = oh(a);
    d = C(d, 1, Jb(e), "0");
    e = ph(a);
    d = D(d, 2, e);
    d = C(d, 3, Jb(a.state.sd), "0");
    a = C(d, 7, Jb(Math.round(a.g.performance.now())), "0");
    a = C(a, 3, Jb(1), "0");
    b = jc(a, 10, Vd, b);
    me(c, b);
  }
  var sh = class {
    constructor(a, b) {
      this.g = nd() || window;
      this.i = b ?? new mh(this.g);
      this.o = a ?? new se(100, 100, !0, this.i);
      this.state = ef(bf(), 33, () => {
        const c = M(Be);
        return {
          sd: c,
          ssp: c > 0 && Uc() < 1 / c,
          pc: null,
          wpc: null,
          cu: null,
          le: [],
          lgdp: [],
          psi: null,
          tar: 0,
          cc: null,
        };
      });
    }
  };
  function th(a) {
    var b = window;
    return a.google_adtest === "on" ||
      a.google_adbreak_test === "on" ||
      b.location.host.endsWith("h5games.usercontent.goog") ||
      b.location.host === "gamesnacks.com"
      ? b.document
          .querySelector('meta[name="h5-games-eids"]')
          ?.getAttribute("content")
          ?.split(",")
          .map((c) => Math.floor(Number(c)))
          .filter((c) => !isNaN(c) && c > 0) || []
      : [];
  }
  class uh {}
  function vh() {
    var a = p.ggeac || (p.ggeac = {});
    te(J(ue), a);
    wh(a);
    J(uh);
    J(Ue).g();
  }
  function wh(a) {
    const b = J(Ue);
    b.i = (c, d) => K(5, a, () => !1)(c, d, 1);
    b.o = (c, d) => K(6, a, () => 0)(c, d, 1);
    b.l = (c, d) => K(7, a, () => "")(c, d, 1);
    b.u = (c, d) => K(8, a, () => [])(c, d, 1);
    b.j = (c, d) => K(17, a, () => [])(c, d, 1);
    b.g = () => {
      K(15, a, () => {})(1);
    };
  }
  function xh(a) {
    const b = J(ue).g();
    a = th(a);
    return b.concat(a).join(",");
  }
  function yh({ La: a, Sa: b }) {
    return a || (b === "dev" ? "dev" : "");
  }
  function zh(a) {
    (Ve() ? Ye : Xe).va((b) => {
      b.shv = String(a);
      b.mjsv = yh({ La: ce(), Sa: a });
      b.eid = xh(p);
    });
  }
  function Ah(a, b) {
    const c = b?.g();
    b = c?.g() || (Ob(A(a, 2)) ?? "");
    a = c?.i() ? kc(c, 4) ?? !1 : kc(a, 6) ?? !1;
    zh(b);
    ib(Og, nb);
    Og = a;
  }
  function Bh() {
    var a = window.adsbygoogle;
    try {
      const b = a.pageState;
      ib(b, y);
      return Mg(b);
    } catch (b) {
      return new Lg();
    }
  }
  var Ch = typeof sttc === "undefined" ? void 0 : sttc;
  function Dh() {
    var a = Ve() ? Ye : Xe;
    try {
      if ((ib(Ch, y), Ch.length > 0)) return new Ng(JSON.parse(Ch));
    } catch (b) {
      a.O(838, b instanceof Error ? b : Error(String(b)));
    }
    return new Ng();
  }
  var Eh = class extends O {
      C() {
        this.disposeAd();
        super.C();
      }
    },
    Fh = class extends O {
      constructor(a) {
        super();
        this.callback = a;
      }
    },
    Gh = class extends O {
      constructor(a) {
        super();
        this.i = a;
        this.g = new Set();
      }
      fetch(a, b) {
        const c = new Fh(a.callback);
        this.g.add(c);
        this.i.fetch(
          {
            ...a,
            callback: (d) => {
              c.o ? d && d.dispose() : c.callback(d);
              this.g.delete(c);
            },
          },
          b
        );
      }
      C() {
        for (const a of this.g.values()) a.dispose();
        this.g.clear();
        super.C();
      }
    };
  var Hh = class {
    constructor(a) {
      var b = ce();
      this.l = a;
      this.u = b;
      this.o = "unset";
    }
    fa(a) {
      this.o = a;
    }
    V(a) {
      this.g = a.Ea;
      this.i = a.Ia;
    }
    K(a) {
      this.j = a;
    }
    B(a, b = {}) {
      b.event = a;
      b.client = this.o;
      b.bow_v = this.l;
      b.js_v = this.u;
      b.fetcher = this.j?.toString() ?? "unset";
      this.g && (b.admb_iid = this.g);
      this.i && (b.admb_rid = this.i);
      a = J(ue).g();
      !b.eid && a.length && (b.eid = a.toString());
      Nd(We, "slotcar", b, !0, 1);
    }
  };
  var Ih = class extends Eh {
    constructor(a, b, c, d) {
      super();
      this.ad = a;
      this.j = b;
      this.l = c;
      this.i = d;
      this.g = null;
      this.u = this.A = !1;
      this.D = !0;
    }
    show(a) {
      this.g = a;
      if (this.D && this.u) this.ad.show();
      else if (this.u) this.I();
      else throw Error("Tried to show AdMobAd before it finished loading.");
    }
    disposeAd() {
      this.ad.dispose();
    }
    R() {
      this.u = !0;
      this.l(this);
    }
    P() {
      this.l(null);
      this.dispose();
    }
    T() {
      this.i.B("admb_na");
      this.g ? this.I() : (this.D = !1);
    }
  };
  function Jh(a) {
    return {
      R: N(849, () => {
        a.R();
      }),
      P: N(850, () => {
        a.P();
      }),
      I: N(851, () => {
        a.I();
      }),
      T: N(854, () => {
        a.T();
      }),
    };
  }
  var Kh = class extends Ih {
    constructor(a, b, c, d) {
      super(a, b, c, d);
      this.ad = a;
      this.j = b;
      this.l = c;
      this.i = d;
    }
    request() {
      this.ad.load(this.j, Jh(this));
    }
    I() {
      (0, this.g)(1);
    }
  };
  function Lh(a) {
    return {
      R: N(849, () => {
        a.R();
      }),
      P: N(850, () => {
        a.P();
      }),
      Pa: N(855, () => {
        a.i.B("admb_rfs");
        (0, a.g)(2);
      }),
      Ra: N(852, () => {
        a.A = !0;
      }),
      I: N(853, () => {
        a.I();
      }),
      T: N(854, () => {
        a.T();
      }),
    };
  }
  var Mh = class extends Ih {
    constructor(a, b, c, d) {
      super(a, b, c, d);
      this.ad = a;
      this.j = b;
      this.l = c;
      this.i = d;
    }
    request() {
      this.ad.load(this.j, Lh(this));
    }
    I() {
      this.A ? (0, this.g)(3) : (0, this.g)(2);
    }
  };
  function Nh(a, b) {
    const c = b.google_adbreak_test === "on";
    switch (a) {
      case 1:
        return c
          ? "ca-app-pub-3940256099942544/1033173712"
          : b.google_admob_interstitial_slot;
      case 2:
        return c
          ? "ca-app-pub-3940256099942544/5224354917"
          : b.google_admob_rewarded_slot;
      default:
        throw Error(`Unknown ad type ${a}`);
    }
  }
  function Oh(a, b, c) {
    a.j.error(`Unable to fetch ad: '${b}' is missing from tag.`);
    c(null);
  }
  function Ph(a) {
    $e(850, () => {
      a(null);
    });
  }
  var Qh = class {
    constructor(a, b, c) {
      this.i = a;
      this.j = b;
      this.g = c;
      this.o = ed(window).toString();
    }
    fetch(a, b) {
      const c = { isTestDevice: !1, httpTimeoutMillis: M(De) * 1e3 };
      var d = b.google_tag_for_child_directed_treatment;
      if (d === "0" || d === "1") c.tagForChildDirectedTreatment = d === "1";
      d = b.google_tag_for_under_age_of_consent;
      if (d === "0" || d === "1") c.tagForUnderAgeOfConsent = d === "1";
      d = b.google_max_ad_content_rating;
      typeof d === "string" && (c.maxAdContentRating = d);
      c.extras ?? (c.extras = {});
      c.extras.muted = a.Ga || a.type === 2 ? "0" : "1";
      this.o && (c.extras.pvsid = this.o);
      c.extras.correlator = hf().toString();
      d = xh(b);
      d.length && (c.extras.slotcar_eids = d);
      b = Nh(a.type, b);
      a.type === 1
        ? typeof b !== "string"
          ? Oh(this, "data-admob-interstitial-slot", a.callback)
          : this.i
              .oa(b)
              .then((e) => {
                new Kh(e, c, a.callback, this.g).request();
              })
              .catch(() => {
                Ph(a.callback);
              })
        : typeof b !== "string"
        ? Oh(this, "data-admob-rewarded-slot", a.callback)
        : this.i
            .pa(b)
            .then((e) => {
              new Mh(e, c, a.callback, this.g).request();
            })
            .catch(() => {
              Ph(a.callback);
            });
    }
  };
  const Rh = new Set(["auto", "on"]),
    Sh = new Set(["on", "off"]),
    Th = new Set("start pause next browse reward preroll".split(" ")),
    Uh = new Map([
      ["start", "interstitial"],
      ["pause", "interstitial"],
      ["next", "interstitial"],
      ["browse", "interstitial"],
      ["reward", "reward"],
      ["preroll", "preroll"],
    ]),
    Vh = new Map([
      ["interstitial", ["type"]],
      ["reward", ["type", "beforeReward", "adDismissed", "adViewed"]],
      ["preroll", ["type", "adBreakDone"]],
    ]),
    Wh = new Map([
      ["interstitial", ["beforeReward", "adDismissed", "adViewed"]],
      ["reward", []],
      ["preroll", ["afterAd", "beforeReward", "adDismissed", "adViewed"]],
    ]),
    Xh = "beforeAd afterAd beforeReward adDismissed adViewed adBreakDone".split(
      " "
    ),
    Yh = new Map([
      ["beforeBreak", "beforeAd"],
      ["afterBreak", "afterAd"],
      ["adComplete", "adViewed"],
    ]);
  var Zh = new Set(
    "google_ad_client google_ad_host google_ad_channel google_ad_host_channel google_tag_for_under_age_of_consent google_tag_for_child_directed_treatment google_page_url".split(
      " "
    )
  );
  const $h = new Set([
    ...Zh,
    "google_admob_interstitial_slot",
    "google_admob_rewarded_slot",
    "google_max_ad_content_rating",
  ]);
  function ai(a, b) {
    let c = !1;
    const d = (f) => {
      c = !0;
      b.error(`Invalid ad config: ${f}.`);
    };
    if (a.preloadAdBreaks != null && !Rh.has(a.preloadAdBreaks)) {
      var e = Array.from(Rh)
        .map((f) => `'${f}'`)
        .join(", ");
      d(`'preloadAdBreaks' must be one of [${e}]`);
    }
    a.sound == null ||
      Sh.has(a.sound) ||
      ((e = Array.from(Sh)
        .map((f) => `'${f}'`)
        .join(", ")),
      d(`'sound' must be one of [${e}]`));
    a.onReady != null &&
      typeof a.onReady !== "function" &&
      d("'onReady' must be a function");
    if (a.h5AdsConfig != null)
      if (typeof a.h5AdsConfig !== "object")
        d("'h5AdsConfig' must be an object");
      else
        for (const [f, g] of Object.entries(a.h5AdsConfig))
          (a = f),
            (e = g),
            $h.has(a)
              ? typeof e !== "string" &&
                d(`'h5AdsConfig.${a}' must be a string`)
              : d(`'h5AdsConfig.${a}' is not a valid property`);
    return !c;
  }
  function bi(a, b, c) {
    for (const [d, e] of Yh) {
      const f = d,
        g = e;
      if (f in a) {
        c.B("lgc_fld", { field: f });
        if (g in a)
          return (
            b.error(
              `Invalid placement config: '${f}' has been renamed to ${g}. Cannot pass both fields. Please use ${g} only.`
            ),
            !1
          );
        b.warn(
          `Placement config: '${f}' has been renamed to '${g}'. Please update your code.`
        );
        a[g] = a[f];
        delete a[f];
      }
    }
    return !0;
  }
  function ci(a, b, c) {
    let d = !1;
    const e = (h) => {
      d = !0;
      b.error(`Invalid placement config: ${h}.`);
    };
    a = Object.assign({}, a);
    if (!bi(a, b, c)) return { ra: !1, xa: a };
    if (!Th.has(a.type)) {
      var f = Array.from(Th)
        .map((h) => `'${h}'`)
        .join(", ");
      e(`'type' must be one of [${f}]`);
      return { ra: !d, xa: a };
    }
    c = Uh.get(a.type);
    const g = Vh.get(c).filter((h) => !(h in a));
    g.length > 0 &&
      e("missing required properties " + g.map((h) => `'${h}'`).join(", "));
    c = Wh.get(c).filter((h) => h in a);
    c.length > 0 &&
      e(
        "the following properties are not used for the given ad type: " +
          c.map((h) => `'${h}'`).join(", ")
      );
    for (f of Xh)
      f in a && typeof a[f] !== "function" && e(`'${f}' must be a function`);
    return { ra: !d, xa: a };
  }
  const di = { [1]: 10, [2]: 11 },
    ei = { closed: 1, viewed: 3, dismissed: 2, error: 4 };
  var gi = class {
      constructor() {
        this.g = window;
      }
      fetch(a, b) {
        const c = {};
        for (const d in b) Zh.has(d) && (c[d] = b[d]);
        c.google_reactive_ad_format = di[a.type];
        c.google_wrap_fullscreen_ad = !0;
        c.google_video_play_muted = a.type !== 2 && !a.Ga;
        c.google_acr = (d) => {
          a.callback(d ? new fi(d) : null);
        };
        c.google_tag_origin = "gsc";
        this.g.adsbygoogle.push({ params: c });
      }
    },
    fi = class extends Eh {
      constructor(a) {
        super();
        this.ad = a;
      }
      show(a) {
        this.ad.show((b) => {
          a(ei[b.status]);
        });
      }
      disposeAd() {
        this.ad.disposeAd();
      }
    }; /* 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  const hi = {};
  function ii() {
    return V(
      '<ins class="adsbygoogle" style="width:100% !important;height:100% !important;" id="fake-interstitial-ins"><iframe style="overflow:hidden;" width="100%" height="100%" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="no" src="about:blank" id="aswift-fake"></iframe></ins>'
    );
  }
  function ji() {
    return V(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style="fill:#f5f5f5" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>'
    );
  }
  function ki(a) {
    const b = a.Na;
    a = a.Ta;
    return V(
      '<div class="dialog-wrapper" style="width: 100%; height: 100%; position: absolute; top: 0;"><div class="close-confirmation-dialog" id="close-confirmation-dialog" style="width: ' +
        W(X(Math.floor(a * 0.78))) +
        'px"><div class="confirmation-title" style="font-size: ' +
        W(X(Math.floor(b * 0.031))) +
        "px; margin-top: " +
        W(X(Math.floor(b * 0.0375))) +
        "px; margin-left: " +
        W(X(Math.floor(a * 0.066))) +
        "px; margin-right: " +
        W(X(Math.floor(a * 0.066))) +
        'px;">Close Ad?</div><div class="confirmation-message" style="font-size: ' +
        W(X(Math.floor(b * 0.025))) +
        "px; margin-bottom: " +
        W(X(Math.floor(b * 0.0375))) +
        "px; margin-top: " +
        W(X(Math.floor(b * 0.0375))) +
        "px; margin-left: " +
        W(X(Math.floor(a * 0.066))) +
        "px; margin-right: " +
        W(X(Math.floor(a * 0.066))) +
        'px;">You will lose your reward</div><div class="confirmation-buttons" style="font-size: ' +
        W(X(Math.floor(b * 0.0218))) +
        "px; line-height: " +
        W(X(Math.floor(b * 0.05625))) +
        "px; margin-right: " +
        W(X(Math.floor(b * 0.0125))) +
        "px; margin-bottom: " +
        W(X(Math.floor(b * 0.0125))) +
        'px;"><div class="close-ad-button" id="close-ad-button" style="padding-left: ' +
        W(X(Math.floor(a * 0.044))) +
        "px; padding-right: " +
        W(X(Math.floor(a * 0.044))) +
        'px;">CLOSE</div><div class="resume-ad-button" id="resume-ad-button" style="padding-left: ' +
        W(X(Math.floor(a * 0.044))) +
        "px; padding-right: " +
        W(X(Math.floor(a * 0.044))) +
        'px;">RESUME</div></div></div></div>'
    );
  }
  var li = Rc`about:blank`;
  Gc(li);
  var mi = Rc`javascript:undefined`;
  Gc(mi);
  function ni(a, b, c) {
    a = a.g;
    c = b(c || hi, {});
    b = a || ra || (ra = new qd());
    if (c && c.g) b = c.g();
    else {
      b = od(b.g, "DIV");
      b: if (ja(c)) {
        if (c.wa && ((c = c.wa()), c instanceof Hc)) break b;
        c = Qc("zSoyz");
      } else c = Qc(String(c));
      b.innerHTML = Jc(c);
    }
    b.childNodes.length == 1 &&
      ((c = b.firstChild), c.nodeType == 1 && (b = c));
    return b;
  }
  class oi {
    constructor() {
      this.g = ra || (ra = new qd());
    }
    render(a, b) {
      a = a(b || {}, {});
      return String(a);
    }
  }
  function pi(a, b) {
    if (a.contentDocument || a.contentWindow) b(a);
    else {
      const c = () => {
        b(a);
        rc(a, "load", c);
      };
      G(a, "load", c);
    }
  }
  async function qi(a) {
    if (a.g == null) throw Error("Tried to show ad before initialized.");
    const b = new U();
    var c = a.g.g,
      d = Math.min(Number(c.clientWidth), Number(c.clientHeight));
    let e = Math.max(Number(c.clientWidth), Number(c.clientHeight));
    ri(a) && ((d *= 0.5), (e *= 0.5));
    c = c.contentDocument;
    a = c.body.appendChild(ni(a.A, ki, { Ta: d, Na: e }));
    d = a.querySelector(".resume-ad-button");
    G(a.querySelector(".close-ad-button"), "click", () => {
      b.resolve(0);
    });
    G(d, "click", () => {
      b.resolve(1);
    });
    d = await b.promise;
    c.body.removeChild(a);
    return d === 0;
  }
  function ri(a) {
    if (a.g == null) throw Error("Tried to show ad before initialized.");
    a = a.g.g;
    return Number(a.clientWidth) > 1e3 || Number(a.clientHeight) > 1e3;
  }
  var si = class extends Eh {
      constructor(a, b) {
        super();
        this.u = b;
        this.A = new oi();
        this.i = 10;
        this.l = !1;
        this.j = ni(this.A, ii);
        this.j.dataset["slotcar" + (b === 1 ? "Interstitial" : "Rewarded")] =
          "true";
        document.documentElement.appendChild(this.j);
        pi(this.j.firstChild, (c) => {
          var d = {};
          var e =
            this.u === 2 ? "Rewarded ad example" : "Interstitial ad example";
          var f = this.u;
          (d = d && d.nb)
            ? ((d = String(d)),
              (d = Jg.test(d) ? d : "zSoyz"),
              (d = ' nonce="' + W(d) + '"'))
            : (d = "");
          d =
            "<!DOCTYPE html><html><head>" +
            V(
              "\n  <style" +
                d +
                '>\n    body {\n      padding: 0;\n      margin: 0;\n      background-color: #262626;\n    }\n    .container {\n      width: 100vw;\n      height: 92vh;\n      display: flex;\n      flex-direction: column;\n    }\n    .container .creative {\n      background-color: white;\n      border-style: solid;\n      border-width: thin;\n      border-color:#bdc1c6;\n      height: 250px;\n      margin: 20vh auto auto auto;\n      overflow: hidden;\n      padding: 0;\n      width: 300px;\n    }\n    .header-panel {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 20px;\n      background-color: #424242;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      height: 8vh;\n      color: #f5f5f5;\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: 20px;\n      line-height: 8vh;\n    }\n    .dismiss-button {\n      display: flex;\n      flex-direction: row;\n      height: inherit;\n      align-items: center;\n      padding-right: 4%;\n      cursor: pointer;\n      position: absolute;\n      right: 0;\n    }\n    .count-down-container {\n      display: inline-flex;\n      flex: auto;\n    }\n    .adContainer {\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      height: 100%;\n      text-align: left;\n      margin: 0;\n    }\n    .adContainer .logo {\n      align-self: center;\n      width: 40px;\n      margin: 0 24px;\n      height: 40px;\n    }\n    .adContainer .logo IMG {\n      height: 40px;\n      width: 40px;\n    }\n    .adContainer .text {\n      margin: auto auto auto 0;\n    }\n    .adContainer .button {\n      align-self: center;\n      height: 100%;\n      max-height: 48px;\n      /* This gives a perceived margin of 32px, due to the margins within the button SVGs. */\n      margin-right: 30px;\n    }\n    .adContainer .button-inner {\n      max-height: 48px;\n      height: 100%;\n    }\n    .adContainer .button-inner SVG {\n      height: 100%;\n      width: auto;\n    }\n    .adText {\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: 18px;\n      font-weight: normal;\n      line-height: 18px;\n      color: #202124;\n      margin-bottom: 4px;\n    }\n    .nativeIframeMessage .text {\n      padding: 0 10px;\n    }\n    .creative a {\n      text-decoration: none;\n    }\n\n    @media (max-height: 44px),\n        (max-height: 150px) and (max-width: 210px) {\n      .adContainer .logo {\n        display: none;\n      }\n      .adContainer .text {\n        margin-left: 5px;\n      }\n    }\n    @media (max-height: 110px) and (max-width: 330px) {\n      .adText {\n        font-size: 13px;\n        line-height: 13px;\n        margin-bottom: 2px;\n      }\n    }\n    @media (max-height: 38px) {\n      .adText {\n        font-size: 17px;\n        line-height: 17px;\n        margin-bottom: 0;\n      }\n    }\n    @media (max-height: 20px) {\n      .adText {\n        font-size: 12px;\n        line-height: 12px;\n        margin-bottom: 0;\n      }\n    }\n\n    /* Vertically stacked assets in cases where creative is not a distictly\n       horizontal rectangle shape */\n    @media (min-height: 240px),\n        (max-width: 65px) and (min-height: 50px),\n        (max-width: 130px) and (min-height: 100px),\n        (max-width: 195px) and (min-height: 150px),\n        (max-width: 260px) and (min-height: 200px) {\n      .adContainer .logo {\n        display: initial;\n      }\n      .adContainer .text {\n        margin-left: 0;\n      }\n      .adContainer {\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n      }\n      .adContainer .logo {\n        margin: 40px auto 24px auto;\n      }\n      .adContainer .text {\n        margin: 0 auto auto auto;\n      }\n      .adContainer .text .adText{\n        margin-bottom: 8px;\n      }\n      .adContainer .button {\n        margin: auto auto 32px auto;\n      }\n      @media (max-height: 200px) {\n        .adContainer .logo {\n          display: none;\n        }\n        .adContainer .text {\n          margin: 10px auto auto auto;\n        }\n      }\n    }\n\n    .x-button {\n      display: flex;\n      align-items: center;\n    }\n\n    .dialog-wrapper {\n      background: rgba(0, 0, 0, .4);\n      height: 100%;\n      left: 0;\n      opacity: 1;\n      pointer-events: auto;\n      position: fixed;\n      top: 0;\n      transition: opacity .15s ease-out;\n      -webkit-transition: opacity .15s ease-out;\n      width: 100%;\n      will-change: opacity;\n      z-index: 2147483647;\n    }\n\n    .close-confirmation-dialog {\n      background: #fff;\n      box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14),\n        0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\n      font-family: Roboto, sans-serif;\n      left: 50%;\n      position: fixed;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      -webkit-transform: translate(-50%, -50%);\n    }\n\n    .confirmation-title {\n      color: #000;\n    }\n\n    .confirmation-message {\n      color: #757575;\n    }\n\n    .confirmation-buttons {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n\n      -webkit-box-pack: flex-end;\n      -webkit-justify-content: flex-end;\n      justify-content: flex-end;\n    }\n\n    .close-ad-button,\n    .resume-ad-button {\n      color: #fff;\n      cursor: pointer;\n      font-weight: 500;\n      text-align: center;\n\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n    }\n\n    .close-ad-button {\n      color: #3e82f7;\n    }\n\n    .resume-ad-button {\n      background: #3e82f7;\n      border-radius: 2px;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);\n    }\n  </style>\n  '
            ) +
            '</head><body><div class="header-panel">';
          f !== 2 && (d += "Ad");
          d +=
            '<div class="dismiss-button" id="dismiss-button">' +
            (f === 2
              ? '<div class="count-down-container" id="count-down-container"><div id="count-down"><div class="count-down-text" id="count-down-text"></div></div><div class="x-button" id="close-button" style="padding-left: 5px;">' +
                ji() +
                "</div></div>"
              : "") +
            '<div class="x-button" id="dismiss-button-element">' +
            ji() +
            '</div></div></div><div class="container"><div class="creative">' +
            V(
              '<div style="position:relative;float:right;top:1px;right:1px;width:15px;height:15px;"><svg style="fill:#00aecd;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><circle cx="6" cy="6" r="0.67"></circle><path d="M4.2,11.3Q3.3,11.8,3.3,10.75L3.3,4.1Q3.3,3.1,4.3,3.5L10.4,7.0Q12.0,7.5,10.4,8.0L6.65,10.0L6.65,7.75a0.65,0.65,0,1,0,-1.3,0L5.35,10.75a0.9,0.9,0,0,0,1.3,0.8L12.7,8.2Q13.7,7.5,12.7,6.7L3.3,1.6Q2.2,1.3,1.8,2.5L1.8,12.5Q2.2,13.9,3.3,13.3L4.8,12.5A0.3,0.3,0,1,0,4.2,11.3Z"></path></svg></div>'
            ) +
            '<a target="_blank" href="https://developers.google.com/ad-placement"><div class="adContainer"><div class="logo">' +
            V(
              '<img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dvX2dvb2dsZWdfNDhkcDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJNMl92MiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyYV9hdXRvX2FkcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxNy4wMDAwMDAsIC03MDUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2JpbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3OC4wMDAwMDAsIDE2NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDc0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHUC1hZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMDAwMDAwLCA0NDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvX2dvb2dsZWdfNDhkcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NC44OCwyOC42MzYzNjM2IEM1NC44OCwyNi42NTA5MDkxIDU0LjcwMTgxODIsMjQuNzQxODE4MiA1NC4zNzA5MDkxLDIyLjkwOTA5MDkgTDI4LDIyLjkwOTA5MDkgTDI4LDMzLjc0IEw0My4wNjkwOTA5LDMzLjc0IEM0Mi40MiwzNy4yNCA0MC40NDcyNzI3LDQwLjIwNTQ1NDUgMzcuNDgxODE4Miw0Mi4xOTA5MDkxIEwzNy40ODE4MTgyLDQ5LjIxNjM2MzYgTDQ2LjUzMDkwOTEsNDkuMjE2MzYzNiBDNTEuODI1NDU0NSw0NC4zNDE4MTgyIDU0Ljg4LDM3LjE2MzYzNjQgNTQuODgsMjguNjM2MzYzNiBaIiBpZD0iU2hhcGUiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI4LDU2IEMzNS41Niw1NiA0MS44OTgxODE4LDUzLjQ5MjcyNzMgNDYuNTMwOTA5MSw0OS4yMTYzNjM2IEwzNy40ODE4MTgyLDQyLjE5MDkwOTEgQzM0Ljk3NDU0NTUsNDMuODcwOTA5MSAzMS43NjcyNzI3LDQ0Ljg2MzYzNjQgMjgsNDQuODYzNjM2NCBDMjAuNzA3MjcyNyw0NC44NjM2MzY0IDE0LjUzNDU0NTUsMzkuOTM4MTgxOCAxMi4zMzI3MjczLDMzLjMyIEwyLjk3ODE4MTgyLDMzLjMyIEwyLjk3ODE4MTgyLDQwLjU3NDU0NTUgQzcuNTg1NDU0NTUsNDkuNzI1NDU0NSAxNy4wNTQ1NDU1LDU2IDI4LDU2IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzM0QTg1MyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMzMyNzI3MywzMy4zMiBDMTEuNzcyNzI3MywzMS42NCAxMS40NTQ1NDU1LDI5Ljg0NTQ1NDUgMTEuNDU0NTQ1NSwyOCBDMTEuNDU0NTQ1NSwyNi4xNTQ1NDU1IDExLjc3MjcyNzMsMjQuMzYgMTIuMzMyNzI3MywyMi42OCBMMTIuMzMyNzI3MywxNS40MjU0NTQ1IEwyLjk3ODE4MTgyLDE1LjQyNTQ1NDUgQzEuMDgxODE4MTgsMTkuMjA1NDU0NSAwLDIzLjQ4MTgxODIgMCwyOCBDMCwzMi41MTgxODE4IDEuMDgxODE4MTgsMzYuNzk0NTQ1NSAyLjk3ODE4MTgyLDQwLjU3NDU0NTUgTDEyLjMzMjcyNzMsMzMuMzIgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOCwxMS4xMzYzNjM2IEMzMi4xMTA5MDkxLDExLjEzNjM2MzYgMzUuODAxODE4MiwxMi41NDkwOTA5IDM4LjcwMzYzNjQsMTUuMzIzNjM2NCBMNDYuNzM0NTQ1NSw3LjI5MjcyNzI3IEM0MS44ODU0NTQ1LDIuNzc0NTQ1NDUgMzUuNTQ3MjcyNywwIDI4LDAgQzE3LjA1NDU0NTUsMCA3LjU4NTQ1NDU1LDYuMjc0NTQ1NDUgMi45NzgxODE4MiwxNS40MjU0NTQ1IEwxMi4zMzI3MjczLDIyLjY4IEMxNC41MzQ1NDU1LDE2LjA2MTgxODIgMjAuNzA3MjcyNywxMS4xMzYzNjM2IDI4LDExLjEzNjM2MzYgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRUE0MzM1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSIwIDAgNTYgMCA1NiA1NiAwIDU2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="/>'
            ) +
            '</div><div class="text"><div class="adText">' +
            (e != null && e.ca === ug
              ? e
              : e instanceof Hc
              ? V(Jc(e).toString())
              : V(String(String(e)).replace(Hg, Gg), yg(e))) +
            "</div></div></div></a></div></div></body></html>";
          e = V(d).wa();
          f = c.contentDocument || c.contentWindow.document;
          f.open();
          f.write(Jc(e));
          f.close();
          this.g = new gh(c, this.j);
          a(this);
        });
      }
      show(a) {
        if (this.g == null) throw Error("Tried to show ad before initialized.");
        const b = this.g.g.contentDocument,
          c = b.getElementById("dismiss-button");
        ah(this.g, !0);
        if (this.u === 2) {
          const d = c.querySelector("#dismiss-button-element");
          d.style.display = "none";
          const e = async () => {
            if (this.g == null)
              throw Error(
                "Failure on rewarded example: Could not find ad frame."
              );
            this.l = !0;
            (await qi(this))
              ? (this.g.hide(), G(c, "click", e), a(2))
              : (this.l = !1);
          };
          G(c, "click", e);
          this.i = M(Fe);
          const f = this.i < 0;
          this.l = !1;
          const g = b.getElementById("count-down-container"),
            h = g.querySelector("#count-down-text");
          h.innerText = `Reward in ${this.i} seconds`;
          f ||
            (this.D = setInterval(() => {
              this.l ||
                (--this.i, (h.innerText = `Reward in ${this.i} seconds`));
              if (this.i === 0) {
                g.style.display = "none";
                d.style.display = "";
                clearInterval(this.D);
                const k = async () => {
                  if (this.g == null)
                    throw Error(
                      "Failure on rewarded example: Could not find ad frame."
                    );
                  this.g.hide();
                  rc(c, "click", k);
                  a(3);
                };
                G(c, "click", k);
                rc(c, "click", e);
              }
            }, 1e3));
        } else
          G(c, "click", () => {
            if (this.g == null)
              throw Error(
                "Failure on rewarded example: Could not find ad frame."
              );
            this.g.hide();
            a(1);
          });
      }
      disposeAd() {
        this.g?.hide();
        pd(this.j);
      }
    },
    ti = class {
      fetch(a) {
        new si(a.callback, a.type);
      }
    };
  var ui = class {
      constructor() {
        this.j = J(sh);
        this.l = new Map()
          .set("inv_plcnf", 1)
          .set("inv_adcnf", 2)
          .set("adbr_cl", 3)
          .set("adbr_noad", 4)
          .set("adbr_nousitr", 5)
          .set("adbr_usrint", 6)
          .set("adbr_naf", 7)
          .set("adbr_pgad", 8)
          .set("adbr_pgaatd", 9)
          .set("adbr_tepgai", 10)
          .set("adcf_cl", 11)
          .set("adcf_afni", 29)
          .set("adcf_pgad", 13)
          .set("adcf_pgaatd", 14)
          .set("prf_suc", 15)
          .set("prf_fail", 16)
          .set("admb_na", 17)
          .set("admb_rfs", 18)
          .set("admb_fetfail", 19)
          .set("lgc_fld", 20)
          .set("pr_rr", 21)
          .set("pr_to", 22)
          .set("api_ld", 23)
          .set("admb_tm", 24)
          .set("adbr_dn", 25)
          .set("dbl_init", 26)
          .set("sess_m", 27)
          .set("ad_cls", 28)
          .set("ad_rdtr", 30);
        this.u = new Map().set("admob", 1).set("adsense", 2);
      }
      fa() {}
      V(a) {
        this.g = a.Ea;
        this.i = a.Ia;
      }
      K(a) {
        this.o = this.u.get(a) ?? 0;
      }
      async B(a) {
        var b = new Td();
        a = this.l.get(a) ?? 0;
        b = C(b, 1, Gb(a), 0).K(this.o);
        this.g && D(b, 3, this.g);
        this.i && D(b, 4, this.i);
        await rh(this.j, b);
      }
    },
    vi = class {
      constructor(a) {
        this.na = new ui();
        this.da = a;
      }
      fa(a) {
        this.da.fa(a);
      }
      V(a) {
        this.na.V(a);
        this.da.V(a);
      }
      K(a) {
        this.na.K(a);
        this.da.K(a);
      }
      async B(a, b = {}) {
        await this.na.B(a, b);
        this.da.B(a, b);
      }
    };
  const wi =
    "click mousedown mouseup touchstart touchend pointerdown pointerup keydown keyup scroll".split(
      " "
    );
  var xi = class extends O {
    constructor() {
      var a = window;
      super();
      this.g = 0;
      const b = () => {
        this.g = Date.now();
      };
      for (const c of wi)
        a.document.documentElement.addEventListener(c, b, { capture: !0 });
      P(this, () => {
        for (const c of wi)
          a.document.documentElement.removeEventListener(c, b, { capture: !0 });
      });
    }
  };
  class yi extends O {
    constructor(a, b) {
      super();
      this.M = new U();
      this.g = !1;
      this.timeout = setTimeout(
        N(726, () => {
          b();
        }),
        a * 1e3
      );
    }
    get promise() {
      return this.M.promise;
    }
    resolve(a) {
      this.o || ((this.g = !0), this.M.resolve(a));
    }
    reject(a) {
      this.o || ((this.g = !0), this.M.reject(a));
    }
    C() {
      clearTimeout(this.timeout);
    }
  }
  function zi(a, b) {
    if ((a = a.google_adbreak_test))
      switch (a) {
        case "on":
          return new ti();
        case "adsense":
          break;
        default:
          throw (
            (b.error(
              `Unsupported data-adbreak-test value '${a}. Supported values: '${"on"}'.`
            ),
            Error("unsupported test mode"))
          );
      }
    return new gi();
  }
  function Ai(a) {
    return [
      "google_admob_interstitial_slot",
      "google_admob_rewarded_slot",
    ].some((b) => typeof Bi(b, a) === "string");
  }
  function Bi(a, b) {
    if (b[a] && typeof b[a] === "string") return String(b[a]);
  }
  function Ci(a, b) {
    tg == null && (tg = new sg());
    return tg.connect().then((c) => new Qh(c, a, b));
  }
  function Di(a) {
    if (typeof a !== "string") return -1;
    a = /^(\d+)s$/.exec(a);
    return a == null ? -1 : Number(a[1]);
  }
  function Ei(a, b) {
    const c = "onpagehide" in self ? "pagehide" : "unload",
      d = N(938, () => {
        if (b.first_slotcar_request_processing_time) {
          var e = Date.now();
          a.g.B("sess_m", {
            igsl: e - b.first_slotcar_request_processing_time,
            afh: String(b.ad_frequency_hint),
            niab: Number(b.number_of_interstitial_ad_breaks),
            nias: Number(b.number_of_interstitial_ads_shown),
            opsl: e - b.adsbygoogle_execution_start_time,
          });
        }
      });
    window.addEventListener(c, d);
  }
  function Fi(a, b) {
    const c = b.google_admob_ads_only;
    typeof c === "string" &&
      (c === "on"
        ? Ai(b)
          ? (a.ka = !0)
          : a.j.error(
              "Cannot set data-admob-ads-only without providing at least one AdMob ad slot id."
            )
        : a.j.error(
            `Unsupported data-admob-ads-only value '${c}'. Supported value: 'on'.`
          ));
  }
  function Gi(a) {
    return a.ya ? "adbreaktest" : a.J ? "admob" : "adsense";
  }
  function Hi(a, b) {
    for (const c of [1, 2]) {
      const d = a.i.get(c);
      if (d || Ii(a, c))
        d
          ? (d.dispose(), a.i.delete(c))
          : (a.u.get(c).dispose(), a.u.delete(c)),
          Ji(a, c, 0, b);
    }
  }
  function Ki(a) {
    if (!a.Z || a.Ca) {
      if (!a.la && a.l.preloadAdBreaks)
        for (var b of [1, 2]) if (!a.i.has(b) && !a.N.has(b)) return;
      for (a.la = !0; a.ma.length > 0; ) (b = a.ma.pop()), Li(a, "onReady", b);
    }
  }
  function Mi(a, b) {
    b = b.google_ad_frequency_hint;
    const c = M(Ge);
    if (typeof b !== "string") return c;
    const d = /^(\d+)s$/.exec(b);
    return d == null
      ? (a.j.error(
          `Invalid data-ad-frequency-hint value: '${b}'. It must be in format 'Xs' where X is a number.`
        ),
        c)
      : Math.max(M(He), Number(d[1]));
  }
  function Ni(a, b) {
    for (const c in b) if (b[c] !== a.D[c]) return !0;
    return !1;
  }
  function Oi(a, b) {
    !a.ka || a.J ? b() : a.g.B("adcf_afni");
  }
  function Pi(a, b, c, d = !0) {
    const e = a.i.get(b);
    e && (e.dispose(), Ji(a, b, 10, c), d && a.i.delete(b));
  }
  function Ii(a, b) {
    return a.u.has(b) && !a.u.get(b).g;
  }
  function Ji(a, b, c, d) {
    if (Ii(a, b)) throw Error("already scheduled");
    c = new yi(c, () => {
      Qi(a, b, d);
    });
    a.u.set(b, c);
    return c;
  }
  function Li(a, b, c) {
    dd(() => {
      Ri(a, b, c);
    });
  }
  function Z(a, b, c, d) {
    const e = {
      breakType: b.type,
      breakFormat:
        c === 2 ? "reward" : b.type === "preroll" ? "preroll" : "interstitial",
      breakStatus: d,
    };
    b.name && (e.breakName = b.name);
    a.g.B("adbr_dn", {
      breakType: e.breakType,
      breakFormat: e.breakFormat,
      breakStatus: e.breakStatus,
      breakName: e.breakName ?? "",
    });
    const f = b.adBreakDone;
    f != null &&
      Li(a, "adBreakDone", () => {
        f(e);
      });
  }
  async function Si(a, b, c) {
    if (a.X) return a.g.B("pr_rr"), Z(a, b, c, "frequencyCapped"), !1;
    a.X = !0;
    a.Z && (await a.ha);
    var d = Ii(a, c) ? a.u.get(c) : Ji(a, c, 0, 2);
    d = await Promise.race([d.promise, fd(M(Ee) * 1e3, 2)]);
    return d === 1
      ? (a.g.B("adbr_noad"), Z(a, b, c, "noAdPreloaded"), !1)
      : d === 2
      ? (a.g.B("pr_to", { source: "slotcar" }), Z(a, b, c, "timeout"), !1)
      : !0;
  }
  async function Ti(a, b) {
    const c = new U();
    a.za = c;
    Ri(a, "beforeReward", () => {
      b.beforeReward(() => {
        c.resolve(0);
      });
    });
    return (await c.promise) === 0;
  }
  function Ri(a, b, c) {
    if (c)
      try {
        c();
      } catch (d) {
        return a.j.error(`'${b}' callback threw an error:`, d), !1;
      }
    return !0;
  }
  function Ui(a, b, c, d, e) {
    const f = a.Ka.get(c),
      g = b ? 1 : -1,
      h = f.length > 0 ? f[f.length - 1] : 0;
    Math.sign(h) === g ? (f[f.length - 1] = h + g) : f.push(g);
    a.g.B(b ? "prf_suc" : "prf_fail", {
      type: c,
      src: d,
      stats: f.join(","),
      timing: Date.now() - e,
    });
  }
  function Qi(a, b, c) {
    const d = Date.now();
    a.A.fetch(
      {
        type: b,
        Ga: a.l.sound === "on",
        callback: (e) => {
          a.N.delete(b);
          const f = a.u.get(b);
          e
            ? (f.resolve(0),
              a.i.set(b, e),
              P(e, () => {
                a.i.delete(b);
              }))
            : (f.resolve(1), a.N.add(b), Ji(a, b, M(Ie), 5));
          Ui(a, e != null, b, c, d);
          (c !== 1 && c !== 7) || Ki(a);
        },
      },
      a.D
    );
  }
  var Vi = class extends O {
    constructor(a, b) {
      super();
      this.j = a;
      this.g = b;
      this.A = null;
      this.ga = "";
      this.X = this.Z = this.la = this.ya = !1;
      this.ia = 0;
      this.Y = !1;
      this.za = null;
      this.ma = [];
      this.L = window.innerWidth;
      this.aa = window.innerHeight;
      this.ka = this.Ca = this.J = !1;
      this.ja = 0;
      this.ha = Promise.resolve();
      this.Aa = 0;
      this.D = {};
      this.l = { sound: "on" };
      this.i = new Map();
      this.u = new Map();
      this.Ba = new xi();
      this.N = new Set();
      this.Ka = new Map([
        [1, []],
        [2, []],
      ]);
      P(this, na(jf, this.Ba));
    }
    init(a) {
      this.ga = String(a.google_ad_client);
      if (this.A != null) this.g.B("dbl_init", { ad_client: this.ga });
      else {
        this.D = { ...a };
        var b = hh();
        b.in_game_session_length = 0;
        b.number_of_interstitial_ad_breaks = 0;
        b.number_of_interstitial_ads_shown = 0;
        b.ad_frequency_hint = a.google_ad_frequency_hint
          ? String(a.google_ad_frequency_hint)
          : "";
        Ei(this, b);
        b = navigator.userAgent;
        var c = RegExp("\\bwv\\b");
        this.Z = b.includes("Android") && c.test(b);
        a.google_adbreak_test === "on" && (this.ya = !0);
        Fi(this, a);
        this.g.fa(this.ga);
        this.A = new Gh(zi(a, this.j));
        this.g.K(Gi(this));
        if (Ai(a)) {
          this.g.V({
            Ea: Bi("google_admob_interstitial_slot", a),
            Ia: Bi("google_admob_rewarded_slot", a),
          });
          const e = Date.now();
          b = Ci(this.j, this.g)
            .then((f) => {
              this.A != null && this.A.dispose();
              this.A = new Gh(f);
              this.J = !0;
              this.g.K(Gi(this));
              Hi(this, 7);
            })
            .catch((f) => {
              this.g.B("admb_fetfail", { error: f });
            })
            .finally(() => {
              this.g.B("admb_tm", { timing: Date.now() - e });
            });
          this.Z &&
            ((this.ha = Promise.race([b, fd(M(Ce) * 1e3)])),
            this.ha.finally(() => {
              this.Ca = !0;
              Ki(this);
            }));
        }
        this.ia = Mi(this, a);
        this.ja = Di(a.google_ad_start_delay_hint);
        this.L = window.innerWidth;
        this.aa = window.innerHeight;
        var d = qc(
          N(791, () => {
            if (this.L !== window.innerWidth || this.aa !== window.innerHeight)
              if (!this.J || this.L !== window.innerWidth) {
                this.g.B("ad_rdtr", {
                  cvw: String(window.innerWidth),
                  cvh: String(window.innerHeight),
                  ovw: String(this.L),
                  ovh: String(this.aa),
                });
                for (const e of this.i.keys()) Pi(this, e, 4, !1);
                this.i.clear();
                this.L = window.innerWidth;
                this.aa = window.innerHeight;
              }
          })
        );
        window.addEventListener("resize", d);
        P(this, () => {
          window.removeEventListener("resize", d);
        });
        this.Aa = Date.now();
      }
    }
    handleAdConfig(a) {
      ai(a, this.j)
        ? (this.g.B("adcf_cl", {
            preloadAdBreaks: a.preloadAdBreaks || "",
            sound: a.sound || "",
            onReady: a.onReady ? "true" : "false",
            h5AdsConfig: a.h5AdsConfig ? "true" : "false",
          }),
          a.h5AdsConfig &&
            (Ni(this, a.h5AdsConfig) &&
              ((this.D = { ...this.D, ...a.h5AdsConfig }),
              Oi(this, () => {
                Hi(this, 6);
              }),
              (this.la = !1)),
            (this.X = !1)),
          a.sound &&
            this.l.sound !== a.sound &&
            ((this.l.sound = a.sound),
            Oi(this, () => {
              Pi(this, 1, 6);
            })),
          a.preloadAdBreaks && !this.l.preloadAdBreaks
            ? Oi(this, () => {
                this.l.preloadAdBreaks = a.preloadAdBreaks;
                if (this.l.preloadAdBreaks === "on")
                  for (const b of [1, 2])
                    this.i.has(b) || Ii(this, b) || Ji(this, b, 0, 1);
              })
            : a.preloadAdBreaks &&
              this.l.preloadAdBreaks &&
              this.j.error(
                "'adConfig' was already called to set 'preloadAdBreaks' with value " +
                  `'${this.l.preloadAdBreaks}'`
              ),
          a.onReady && (this.ma.push(a.onReady), Ki(this)))
        : this.g.B("inv_adcnf");
    }
    async handleAdBreak(a, b) {
      if (!this.ka || this.J)
        if (((a = ci(a, this.j, this.g)), a.ra)) {
          var c = a.xa,
            d = c.type === "reward" ? 2 : 1;
          if (d !== 1 || this.ja <= 0 || Date.now() - this.Aa > this.ja * 1e3) {
            a = hh();
            d === 1 && a.number_of_interstitial_ad_breaks++;
            var e = c.type === "preroll";
            this.g.B("adbr_cl", {
              type: c.type,
              name: c.name || "",
              frequency_cap: d === 2 ? 0 : this.ia,
              last_intr: Date.now() - this.Ba.g,
            });
            if (b && !e) Z(this, c, d, "notReady");
            else if (
              (d === 2 && this.za?.resolve(1),
              this.i.get(d) || !e || (await Si(this, c, d)))
            ) {
              var f = this.i.get(d);
              if (f)
                if (d !== 2 || (await Ti(this, c)))
                  if (this.Y)
                    this.j.error(
                      "Cannot show ad while another ad is already visible."
                    ),
                      Z(this, c, d, "frequencyCapped");
                  else if (Ri(this, "beforeAd", c.beforeAd)) {
                    this.Y = !0;
                    d === 1 && a.number_of_interstitial_ads_shown++;
                    this.X = !0;
                    var g = Date.now(),
                      h = (k) => {
                        this.Y = !1;
                        k === 2 || (d === 2 && k === 4)
                          ? Li(this, "adDismissed", c.adDismissed)
                          : k === 3 && Li(this, "adViewed", c.adViewed);
                        Li(this, "afterAd", c.afterAd);
                        d === 1
                          ? Z(this, c, d, "viewed")
                          : Z(
                              this,
                              c,
                              d,
                              k === 4
                                ? "other"
                                : k === 2
                                ? "dismissed"
                                : "viewed"
                            );
                        k !== 4 &&
                          (f.dispose(), Ji(this, d, d === 2 ? 0 : this.ia, 3));
                        this.g.B("ad_cls", {
                          result: k,
                          adType: d,
                          dur: Date.now() - g,
                        });
                      };
                    P(f, () => {
                      this.Y && h(4);
                    });
                    f.show(h);
                  } else Li(this, "afterAd", c.afterAd), Z(this, c, d, "error");
                else Z(this, c, d, "ignored");
              else
                Ii(this, d)
                  ? (this.g.B("adbr_noad"),
                    Z(this, c, d, this.N.has(d) ? "other" : "frequencyCapped"))
                  : (Ji(this, d, 0, 2), Z(this, c, d, "noAdPreloaded"));
            }
          } else this.g.B("adbr_tepgai");
        } else this.g.B("inv_plcnf");
      else this.g.B("adbr_naf");
    }
    handleAdBreakBeforeReady(a) {
      return this.handleAdBreak(a, !0);
    }
    C() {
      for (const a of this.u.values()) a.dispose();
      this.u.clear();
      for (const a of this.i.values()) a.dispose();
      this.i.clear();
      this.A && this.A.dispose();
      super.C();
    }
  };
  function Wi(a) {
    {
      p.google_llp || (p.google_llp = {});
      var b = p.google_llp;
      let c = b[7];
      if (!c) {
        const { promise: d, resolve: e } = new U();
        c = { promise: d, resolve: e };
        b[7] = c;
      }
      b = c;
    }
    b.resolve(a);
  }
  $e(723, () => {
    const a = new se();
    try {
      Pa((d) => {
        Me(a, 1196, d);
      });
    } catch (d) {}
    var b = Dh(),
      c = Bh();
    Ah(b, c);
    vh();
    b = c.g().g() || (Ob(A(b, 2)) ?? "");
    b = new vi(new Hh(b));
    c = {
      error(...d) {
        console.error("[Ad Placement API]", ...d);
      },
      warn(...d) {
        console.warn("[Ad Placement API]", ...d);
      },
    };
    (u() ? 0 : t("Trident") || t("MSIE"))
      ? c.warn("Internet Explorer is not supported.")
      : Wi(new Vi(c, b));
  });
}).call(this, "");
