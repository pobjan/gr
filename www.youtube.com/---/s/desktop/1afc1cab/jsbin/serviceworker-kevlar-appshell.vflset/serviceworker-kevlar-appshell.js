'use strict';
var r, aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype)
        return a;
    a[b] = c.value;
    return a
}
;
function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
            return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);
function da(a, b) {
    if (b)
        a: {
            var c = ca;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c))
                    break a;
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && b != null && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
}
function ea(a) {
    function b(d) {
        return a.next(d)
    }
    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    }
    )
}
function t(a) {
    return ea(a())
}
da("globalThis", function(a) {
    return a || ca
});
da("Symbol.dispose", function(a) {
    return a ? a : Symbol("Symbol.dispose")
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b))
                return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0
      , d = !1
      , e = {
        next: function() {
            if (!d && c < a.length) {
                var f = c++;
                return {
                    value: b(f, a[f]),
                    done: !1
                }
            }
            d = !0;
            return {
                done: !0,
                value: void 0
            }
        }
    };
    e[Symbol.iterator] = function() {
        return e
    }
    ;
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global)
            throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b,b instanceof RegExp ? void 0 : "g")
          , d = this
          , e = !1
          , f = {
            next: function() {
                if (e)
                    return {
                        value: void 0,
                        done: !0
                    };
                var g = c.exec(d);
                if (!g)
                    return e = !0,
                    {
                        value: void 0,
                        done: !0
                    };
                g[0] === "" && (c.lastIndex += 1);
                return {
                    value: g,
                    done: !1
                }
            }
        };
        f[Symbol.iterator] = function() {
            return f
        }
        ;
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var v = this || self;
function ha(a, b) {
    var c = w("CLOSURE_FLAGS");
    a = c && c[a];
    return a != null ? a : b
}
function w(a, b) {
    a = a.split(".");
    b = b || v;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]],
        b == null)
            return null;
    return b
}
function ia(a) {
    var b = typeof a;
    b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return b == "array" || b == "object" && typeof a.length == "number"
}
function ka(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function la(a, b, c) {
    if (!a)
        throw Error();
    if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
function ma(a, b, c) {
    ma = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ka : la;
    return ma.apply(null, arguments)
}
function x(a, b) {
    a = a.split(".");
    for (var c = v, d; a.length && (d = a.shift()); )
        a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}
function na(a) {
    return a
}
function oa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Qa = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Cb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
            g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}
;function pa(a, b) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, pa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b)
}
oa(pa, Error);
pa.prototype.name = "CustomError";
const qa = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
}
;
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let ra = globalThis.trustedTypes, sa;
function ta() {
    let a = null;
    if (!ra)
        return a;
    try {
        const b = c => c;
        a = ra.createPolicy("goog#html", {
            createHTML: b,
            createScript: b,
            createScriptURL: b
        })
    } catch (b) {}
    return a
}
;var ua = class {
    constructor(a) {
        this.h = a
    }
    toString() {
        return this.h + ""
    }
}
;
function va(a, b=`unexpected value ${a}!`) {
    throw Error(b);
}
;function wa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}
function xa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}
function ya(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    b >= 0 && Array.prototype.splice.call(a, b, 1)
}
function za(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0
              , f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++)
                a[e + g] = d[g]
        } else
            a.push(d)
    }
}
;function Aa(a, b) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b
}
;function Ba(a) {
    var b = w("window.location.href");
    a == null && (a = 'Unknown Error of type "null/undefined"');
    if (typeof a === "string")
        return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
    let c, d;
    var e = !1;
    try {
        c = a.lineNumber || a.line || "Not available"
    } catch (f) {
        c = "Not available",
        e = !0
    }
    try {
        d = a.fileName || a.filename || a.sourceURL || v.$googDebugFname || b
    } catch (f) {
        d = "Not available",
        e = !0
    }
    b = Ca(a);
    if (!(!e && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        e = a.message;
        if (e == null) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name)
                    e = a.constructor.name;
                else if (e = a.constructor,
                Da[e])
                    e = Da[e];
                else {
                    e = String(e);
                    if (!Da[e]) {
                        const f = /function\s+([^\(]+)/m.exec(e);
                        Da[e] = f ? f[1] : "[Anonymous]"
                    }
                    e = Da[e]
                }
                e = 'Unknown Error of type "' + e + '"'
            } else
                e = "Unknown Error of unknown type";
            typeof a.toString === "function" && Object.prototype.toString !== a.toString && (e += ": " + a.toString())
        }
        return {
            message: e,
            name: a.name || "UnknownError",
            lineNumber: c,
            fileName: d,
            stack: b || "Not available"
        }
    }
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: b
    }
}
function Ca(a, b) {
    b || (b = {});
    b[Ea(a)] = !0;
    let c = a.stack || "";
    var d = a.cause;
    d && !b[Ea(d)] && (c += "\nCaused by: ",
    d.stack && d.stack.indexOf(d.toString()) == 0 || (c += typeof d === "string" ? d : d.message + "\n"),
    c += Ca(d, b));
    a = a.errors;
    if (Array.isArray(a)) {
        d = 1;
        let e;
        for (e = 0; e < a.length && !(d > 4); e++)
            b[Ea(a[e])] || (c += "\nInner error " + d++ + ": ",
            a[e].stack && a[e].stack.indexOf(a[e].toString()) == 0 || (c += typeof a[e] === "string" ? a[e] : a[e].message + "\n"),
            c += Ca(a[e], b));
        e < a.length && (c += "\n... " + (a.length - e) + " more inner errors")
    }
    return c
}
function Ea(a) {
    let b = "";
    typeof a.toString === "function" && (b = "" + a);
    return b + a.stack
}
var Da = {};
const Fa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function Ga(a) {
    return a ? decodeURI(a) : a
}
function Ha(a, b, c) {
    if (Array.isArray(b))
        for (let d = 0; d < b.length; d++)
            Ha(a, String(b[d]), c);
    else
        b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
}
function Ja(a) {
    const b = [];
    for (const c in a)
        Ha(c, a[c], b);
    return b.join("&")
}
;function Ka() {
    throw Error("Invalid UTF8");
}
function La(a, b) {
    b = String.fromCharCode.apply(null, b);
    return a == null ? b : a + b
}
let Ma = void 0, Na;
const Oa = typeof TextDecoder !== "undefined";
function Pa(a) {
    v.setTimeout( () => {
        throw a;
    }
    , 0)
}
;var Qa = ha(610401301, !1)
  , Ra = ha(748402147, !0);
function Sa() {
    var a = v.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Ta;
const Ua = v.navigator;
Ta = Ua ? Ua.userAgentData || null : null;
function Va(a) {
    if (!Qa || !Ta)
        return !1;
    for (let b = 0; b < Ta.brands.length; b++) {
        const {brand: c} = Ta.brands[b];
        if (c && c.indexOf(a) != -1)
            return !0
    }
    return !1
}
function A(a) {
    return Sa().indexOf(a) != -1
}
;function Wa() {
    return Qa ? !!Ta && Ta.brands.length > 0 : !1
}
;const Xa = A("Safari") && !((Wa() ? Va("Chromium") : (A("Chrome") || A("CriOS")) && (Wa() || !A("Edge")) || A("Silk")) || (Wa() ? 0 : A("Coast")) || (Wa() ? 0 : A("Opera")) || (Wa() ? 0 : A("Edge")) || (Wa() ? Va("Microsoft Edge") : A("Edg/")) || (Wa() ? Va("Opera") : A("OPR")) || A("Firefox") || A("FxiOS") || A("Silk") || A("Android")) && !(A("iPhone") && !A("iPod") && !A("iPad") || A("iPad") || A("iPod"));
const Ya = {};
let Za = null;
function $a(a, b) {
    b === void 0 && (b = 0);
    ab();
    b = Ya[b];
    const c = Array(Math.floor(a.length / 3))
      , d = b[64] || "";
    let e = 0
      , f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e]
          , h = a[e + 1]
          , k = a[e + 2]
          , l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
    case 2:
        l = a[e + 1],
        k = b[(l & 15) << 2] || d;
    case 1:
        a = a[e],
        c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}
function bb(a) {
    const b = a.length;
    let c = b * 3 / 4;
    c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
    const d = new Uint8Array(c);
    let e = 0;
    cb(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}
function cb(a, b) {
    function c(e) {
        for (; d < a.length; ) {
            const f = a.charAt(d++)
              , g = Za[f];
            if (g != null)
                return g;
            if (!/^[\s\xa0]*$/.test(f))
                throw Error("Unknown base64 encoding at char: " + f);
        }
        return e
    }
    ab();
    let d = 0;
    for (; ; ) {
        const e = c(-1)
          , f = c(0)
          , g = c(64)
          , h = c(64);
        if (h === 64 && e === -1)
            break;
        b(e << 2 | f >> 4);
        g != 64 && (b(f << 4 & 240 | g >> 2),
        h != 64 && b(g << 6 & 192 | h))
    }
}
function ab() {
    if (!Za) {
        Za = {};
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("")
          , b = ["+/=", "+/", "-_=", "-_.", "-_"];
        for (let c = 0; c < 5; c++) {
            const d = a.concat(b[c].split(""));
            Ya[c] = d;
            for (let e = 0; e < d.length; e++) {
                const f = d[e];
                Za[f] === void 0 && (Za[f] = e)
            }
        }
    }
}
;var db = typeof Uint8Array !== "undefined"
  , eb = !(Wa() ? 0 : A("Trident") || A("MSIE")) && typeof btoa === "function";
const fb = /[-_.]/g
  , gb = {
    "-": "+",
    _: "/",
    ".": "="
};
function hb(a) {
    return gb[a] || ""
}
function ib(a) {
    if (!eb)
        return bb(a);
    a = fb.test(a) ? a.replace(fb, hb) : a;
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++)
        b[c] = a.charCodeAt(c);
    return b
}
var jb = {};
function kb() {
    return lb || (lb = new mb(null,jb))
}
function nb(a) {
    ob(jb);
    var b = a.h;
    b = b == null || db && b != null && b instanceof Uint8Array ? b : typeof b === "string" ? ib(b) : null;
    return b == null ? b : a.h = b
}
var mb = class {
    sizeBytes() {
        const a = nb(this);
        return a ? a.length : 0
    }
    constructor(a, b) {
        ob(b);
        this.h = a;
        if (a != null && a.length === 0)
            throw Error("ByteString should be constructed with non-empty values");
    }
}
;
let lb;
function ob(a) {
    if (a !== jb)
        throw Error("illegal external caller");
}
;let pb = void 0;
function qb(a) {
    a = Error(a);
    Aa(a, "warning");
    return a
}
function rb(a, b) {
    if (a != null) {
        var c;
        var d = (c = pb) != null ? c : pb = {};
        c = d[a] || 0;
        c >= b || (d[a] = c + 1,
        a = Error(),
        Aa(a, "incident"),
        Pa(a))
    }
}
;function sb() {
    return typeof BigInt === "function"
}
;var tb = typeof Symbol === "function" && typeof Symbol() === "symbol";
function ub(a, b, c=!1) {
    return typeof Symbol === "function" && typeof Symbol() === "symbol" ? c && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol() : b
}
var vb = ub("jas", void 0, !0)
  , wb = ub(void 0, "1oa")
  , xb = ub(void 0, Symbol())
  , yb = ub(void 0, "0ubs")
  , zb = ub(void 0, "0actk")
  , Ab = ub("m_m", "Ob", !0);
[...Object.values({
    kb: 1,
    jb: 2,
    ib: 4,
    rb: 8,
    yb: 16,
    pb: 32,
    Za: 64,
    gb: 128,
    eb: 256,
    xb: 512,
    fb: 1024,
    hb: 2048,
    qb: 4096,
    lb: 8192
})];
const Bb = {
    Ka: {
        value: 0,
        configurable: !0,
        writable: !0,
        enumerable: !1
    }
}
  , Cb = Object.defineProperties
  , B = tb ? vb : "Ka";
var Db;
const Eb = [];
C(Eb, 7);
Db = Object.freeze(Eb);
function Fb(a, b) {
    tb || B in a || Cb(a, Bb);
    a[B] |= b
}
function C(a, b) {
    tb || B in a || Cb(a, Bb);
    a[B] = b
}
;var Gb = {};
function Hb(a, b) {
    return b === void 0 ? a.h !== Ib && !!(2 & (a.o[B] | 0)) : !!(2 & b) && a.h !== Ib
}
const Ib = {};
var Jb = Object.freeze({});
function Kb(a, b, c) {
    const d = b & 128 ? 0 : -1
      , e = a.length;
    var f;
    if (f = !!e)
        f = a[e - 1],
        f = f != null && typeof f === "object" && f.constructor === Object;
    const g = e + (f ? -1 : 0);
    for (b = b & 128 ? 1 : 0; b < g; b++)
        c(b - d, a[b]);
    if (f) {
        a = a[e - 1];
        for (const h in a)
            !isNaN(h) && c(+h, a[h])
    }
}
var Lb = {};
function Mb(a) {
    a.Kb = !0;
    return a
}
;var Nb = Mb(a => typeof a === "number")
  , Ob = Mb(a => typeof a === "string")
  , Pb = Mb(a => typeof a === "boolean")
  , Qb = Mb(a => a != null && typeof a === "object" && typeof a.then === "function");
var Rb = typeof v.BigInt === "function" && typeof v.BigInt(0) === "bigint";
function Sb(a) {
    var b = a;
    if (Ob(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))
            throw Error(String(b));
    } else if (Nb(b) && !Number.isSafeInteger(b))
        throw Error(String(b));
    return Rb ? BigInt(a) : a = Pb(a) ? a ? "1" : "0" : Ob(a) ? a.trim() || "0" : String(a)
}
var Yb = Mb(a => Rb ? a >= Tb && a <= Ub : a[0] === "-" ? Vb(a, Wb) : Vb(a, Xb));
const Wb = Number.MIN_SAFE_INTEGER.toString()
  , Tb = Rb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
  , Xb = Number.MAX_SAFE_INTEGER.toString()
  , Ub = Rb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function Vb(a, b) {
    if (a.length > b.length)
        return !1;
    if (a.length < b.length || a === b)
        return !0;
    for (let c = 0; c < a.length; c++) {
        const d = a[c]
          , e = b[c];
        if (d > e)
            return !1;
        if (d < e)
            return !0
    }
}
;const Zb = typeof Uint8Array.prototype.slice === "function";
let D = 0
  , E = 0;
function $b(a) {
    const b = a >>> 0;
    D = b;
    E = (a - b) / 4294967296 >>> 0
}
function ac(a) {
    if (a < 0) {
        $b(0 - a);
        const [b,c] = bc(D, E);
        D = b >>> 0;
        E = c >>> 0
    } else
        $b(a)
}
function cc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151)
        var c = "" + (4294967296 * b + a);
    else
        sb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
        b = b >> 16 & 65535,
        a = (a & 16777215) + c * 6777216 + b * 6710656,
        c += b * 8147497,
        b *= 2,
        a >= 1E7 && (c += a / 1E7 >>> 0,
        a %= 1E7),
        c >= 1E7 && (b += c / 1E7 >>> 0,
        c %= 1E7),
        c = b + dc(c) + dc(a));
    return c
}
function dc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a
}
function ec() {
    var a = D
      , b = E;
    if (b & 2147483648)
        if (sb())
            a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else {
            const [c,d] = bc(a, b);
            a = "-" + cc(c, d)
        }
    else
        a = cc(a, b);
    return a
}
function bc(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b]
}
;const fc = typeof BigInt === "function" ? BigInt.asIntN : void 0
  , hc = Number.isSafeInteger
  , ic = Number.isFinite
  , jc = Math.trunc;
function kc(a) {
    return a.displayName || a.name || "unknown type name"
}
const lc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function mc(a) {
    switch (typeof a) {
    case "bigint":
        return !0;
    case "number":
        return ic(a);
    case "string":
        return lc.test(a);
    default:
        return !1
    }
}
function nc(a) {
    if (a == null)
        return a;
    if (typeof a === "string" && a)
        a = +a;
    else if (typeof a !== "number")
        return;
    return ic(a) ? a | 0 : void 0
}
function oc(a) {
    var b = void 0;
    b != null || (b = 1024);
    if (!mc(a))
        throw qb("int64");
    const c = typeof a;
    switch (b) {
    case 512:
        switch (c) {
        case "string":
            return pc(a);
        case "bigint":
            return String(fc(64, a));
        default:
            return qc(a)
        }
    case 1024:
        switch (c) {
        case "string":
            return b = jc(Number(a)),
            hc(b) ? a = Sb(b) : (b = a.indexOf("."),
            b !== -1 && (a = a.substring(0, b)),
            a = sb() ? Sb(fc(64, BigInt(a))) : Sb(rc(a))),
            a;
        case "bigint":
            return Sb(fc(64, a));
        default:
            return hc(a) ? Sb(sc(a)) : Sb(qc(a))
        }
    case 0:
        switch (c) {
        case "string":
            return pc(a);
        case "bigint":
            return Sb(fc(64, a));
        default:
            return sc(a)
        }
    default:
        return va(b, "Unknown format requested type for int64")
    }
}
function rc(a) {
    var b = a.length;
    if (a[0] === "-" ? b < 20 || b === 20 && a <= "-9223372036854775808" : b < 19 || b === 19 && a <= "9223372036854775807")
        return a;
    if (a.length < 16)
        ac(Number(a));
    else if (sb())
        a = BigInt(a),
        D = Number(a & BigInt(4294967295)) >>> 0,
        E = Number(a >> BigInt(32) & BigInt(4294967295));
    else {
        b = +(a[0] === "-");
        E = D = 0;
        const c = a.length;
        for (let d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e,
        e += 6) {
            const f = Number(a.slice(d, e));
            E *= 1E6;
            D = D * 1E6 + f;
            D >= 4294967296 && (E += Math.trunc(D / 4294967296),
            E >>>= 0,
            D >>>= 0)
        }
        if (b) {
            const [d,e] = bc(D, E);
            D = d;
            E = e
        }
    }
    return ec()
}
function sc(a) {
    mc(a);
    a = jc(a);
    if (!hc(a)) {
        ac(a);
        var b = D
          , c = E;
        if (a = c & 2147483648)
            b = ~b + 1 >>> 0,
            c = ~c >>> 0,
            b == 0 && (c = c + 1 >>> 0);
        const d = c * 4294967296 + (b >>> 0);
        b = Number.isSafeInteger(d) ? d : cc(b, c);
        a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
    }
    return a
}
function qc(a) {
    mc(a);
    a = jc(a);
    hc(a) ? a = String(a) : (ac(a),
    a = ec());
    return a
}
function pc(a) {
    mc(a);
    var b = jc(Number(a));
    if (hc(b))
        return String(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    return rc(a)
}
function tc(a) {
    if (a != null && typeof a !== "string")
        throw Error();
    return a
}
function F(a) {
    return a == null || typeof a === "string" ? a : void 0
}
function uc(a, b) {
    if (!(a instanceof b))
        throw Error(`Expected instanceof ${kc(b)} but got ${a && kc(a.constructor)}`);
    return a
}
function vc(a, b, c) {
    if (a != null && a[Ab] === Gb)
        return a;
    if (Array.isArray(a)) {
        var d = a[B] | 0;
        c = d | c & 32 | c & 2;
        c !== d && C(a, c);
        return new b(a)
    }
}
;function wc(a) {
    return a
}
;function xc(a) {
    const b = na(xb);
    return b ? a[b] : void 0
}
function yc(a, b) {
    for (const c in a)
        !isNaN(c) && b(a, +c, a[c])
}
function zc(a) {
    const b = new Ac;
    yc(a, (c, d, e) => {
        b[d] = Array.prototype.slice.call(e)
    }
    );
    b.h = a.h;
    return b
}
var Ac = class {
}
;
function Bc(a, b) {
    b < 100 || rb(yb, 1)
}
;function Cc(a, b, c, d) {
    const e = d !== void 0;
    d = !!d;
    var f = na(xb), g;
    !e && tb && f && (g = a[f]) && yc(g, Bc);
    f = [];
    var h = a.length;
    let k;
    g = 4294967295;
    let l = !1;
    const n = !!(b & 64)
      , p = n ? b & 128 ? 0 : -1 : void 0;
    if (!(b & 1 || (k = h && a[h - 1],
    k != null && typeof k === "object" && k.constructor === Object ? (h--,
    g = h) : k = void 0,
    !n || b & 128 || e))) {
        l = !0;
        var q;
        g = ((q = Dc) != null ? q : wc)(g - p, p, a, k, void 0) + p
    }
    b = void 0;
    for (q = 0; q < h; q++) {
        let u = a[q];
        if (u != null && (u = c(u, d)) != null)
            if (n && q >= g) {
                const z = q - p;
                var m = void 0;
                ((m = b) != null ? m : b = {})[z] = u
            } else
                f[q] = u
    }
    if (k)
        for (let u in k) {
            m = k[u];
            if (m == null || (m = c(m, d)) == null)
                continue;
            h = +u;
            let z;
            if (n && !Number.isNaN(h) && (z = h + p) < g)
                f[z] = m;
            else {
                let y;
                ((y = b) != null ? y : b = {})[u] = m
            }
        }
    b && (l ? f.push(b) : f[g] = b);
    e && na(xb) && (a = xc(a)) && a instanceof Ac && (f[xb] = zc(a));
    return f
}
function Ec(a) {
    switch (typeof a) {
    case "number":
        return Number.isFinite(a) ? a : "" + a;
    case "bigint":
        return Yb(a) ? Number(a) : "" + a;
    case "boolean":
        return a ? 1 : 0;
    case "object":
        if (Array.isArray(a)) {
            var b = a[B] | 0;
            return a.length === 0 && b & 1 ? void 0 : Cc(a, b, Ec)
        }
        if (a != null && a[Ab] === Gb)
            return Fc(a);
        if (a instanceof mb) {
            const e = a.h;
            if (e == null)
                a = "";
            else if (typeof e === "string")
                a = e;
            else {
                if (eb) {
                    b = "";
                    for (var c = 0, d = e.length - 10240; c < d; )
                        b += String.fromCharCode.apply(null, e.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? e.subarray(c) : e);
                    b = btoa(b)
                } else
                    b = $a(e);
                a = a.h = b
            }
            return a
        }
        return
    }
    return a
}
let Dc;
function Fc(a) {
    a = a.o;
    return Cc(a, a[B] | 0, Ec)
}
;let Gc, Hc;
function Ic(a) {
    switch (typeof a) {
    case "boolean":
        return Gc || (Gc = [0, void 0, !0]);
    case "number":
        return a > 0 ? void 0 : a === 0 ? Hc || (Hc = [0, void 0]) : [-a, void 0];
    case "string":
        return [0, a];
    case "object":
        return a
    }
}
function Jc(a, b) {
    return Kc(a, b[0], b[1])
}
function Kc(a, b, c, d=0) {
    if (a == null) {
        var e = 32;
        c ? (a = [c],
        e |= 128) : a = [];
        b && (e = e & -16760833 | (b & 1023) << 14)
    } else {
        if (!Array.isArray(a))
            throw Error("narr");
        e = a[B] | 0;
        if (Ra && 1 & e)
            throw Error("rfarr");
        2048 & e && !(2 & e) && Lc();
        if (e & 256)
            throw Error("farr");
        if (e & 64)
            return (e | d) !== e && C(a, e | d),
            a;
        if (c && (e |= 128,
        c !== a[0]))
            throw Error("mid");
        a: {
            c = a;
            e |= 64;
            var f = c.length;
            if (f) {
                var g = f - 1;
                const k = c[g];
                if (k != null && typeof k === "object" && k.constructor === Object) {
                    b = e & 128 ? 0 : -1;
                    g -= b;
                    if (g >= 1024)
                        throw Error("pvtlmt");
                    for (var h in k)
                        f = +h,
                        f < g && (c[f + b] = k[h],
                        delete k[h]);
                    e = e & -16760833 | (g & 1023) << 14;
                    break a
                }
            }
            if (b) {
                h = Math.max(b, f - (e & 128 ? 0 : -1));
                if (h > 1024)
                    throw Error("spvt");
                e = e & -16760833 | (h & 1023) << 14
            }
        }
    }
    C(a, e | 64 | d);
    return a
}
function Lc() {
    if (Ra)
        throw Error("carr");
    rb(zb, 5)
}
;function Mc(a, b) {
    if (typeof a !== "object")
        return a;
    if (Array.isArray(a)) {
        var c = a[B] | 0;
        a.length === 0 && c & 1 ? a = void 0 : c & 2 || (!b || 4096 & c || 16 & c ? a = Nc(a, c, !1, b && !(c & 16)) : (Fb(a, 34),
        c & 4 && Object.freeze(a)));
        return a
    }
    if (a != null && a[Ab] === Gb)
        return b = a.o,
        c = b[B] | 0,
        Hb(a, c) ? a : Oc(a, b, c) ? Pc(a, b) : Nc(b, c);
    if (a instanceof mb)
        return a
}
function Pc(a, b, c) {
    a = new a.constructor(b);
    c && (a.h = Ib);
    a.i = Ib;
    return a
}
function Nc(a, b, c, d) {
    d != null || (d = !!(34 & b));
    a = Cc(a, b, Mc, d);
    d = 32;
    c && (d |= 2);
    b = b & 16769217 | d;
    C(a, b);
    return a
}
function Qc(a) {
    const b = a.o
      , c = b[B] | 0;
    return Hb(a, c) ? Oc(a, b, c) ? Pc(a, b, !0) : new a.constructor(Nc(b, c, !1)) : a
}
function Rc(a) {
    if (a.h !== Ib)
        return !1;
    var b = a.o;
    b = Nc(b, b[B] | 0);
    Fb(b, 2048);
    a.o = b;
    a.h = void 0;
    a.i = void 0;
    return !0
}
function Sc(a) {
    if (!Rc(a) && Hb(a, a.o[B] | 0))
        throw Error();
}
function Tc(a, b) {
    b === void 0 && (b = a[B] | 0);
    b & 32 && !(b & 4096) && C(a, b | 4096)
}
function Oc(a, b, c) {
    return c & 2 ? !0 : c & 32 && !(c & 4096) ? (C(b, c | 2),
    a.h = Ib,
    !0) : !1
}
;const Uc = {};
function G(a, b, c, d) {
    Object.isExtensible(a);
    b = Vc(a.o, b, c);
    if (b !== null || d && a.i !== Ib)
        return b
}
function Vc(a, b, c, d) {
    if (b === -1)
        return null;
    const e = b + (c ? 0 : -1)
      , f = a.length - 1;
    let g, h;
    if (!(f < 1 + (c ? 0 : -1))) {
        if (e >= f)
            if (g = a[f],
            g != null && typeof g === "object" && g.constructor === Object)
                c = g[b],
                h = !0;
            else if (e === f)
                c = g;
            else
                return;
        else
            c = a[e];
        if (d && c != null) {
            d = d(c);
            if (d == null)
                return d;
            if (!Object.is(d, c))
                return h ? g[b] = d : a[e] = d,
                d
        }
        return c
    }
}
function Wc(a, b, c) {
    Sc(a);
    const d = a.o;
    I(d, d[B] | 0, b, c);
    return a
}
function I(a, b, c, d, e) {
    const f = c + (e ? 0 : -1);
    var g = a.length - 1;
    if (g >= 1 + (e ? 0 : -1) && f >= g) {
        const h = a[g];
        if (h != null && typeof h === "object" && h.constructor === Object)
            return h[c] = d,
            b
    }
    if (f <= g)
        return a[f] = d,
        b;
    if (d !== void 0) {
        let h;
        g = ((h = b) != null ? h : b = a[B] | 0) >> 14 & 1023 || 536870912;
        c >= g ? d != null && (a[g + (e ? 0 : -1)] = {
            [c]: d
        }) : a[f] = d
    }
    return b
}
function Xc(a, b, c) {
    a = Vc(a, b, c);
    return Array.isArray(a) ? a : Db
}
function Yc(a, b) {
    2 & b && (a |= 2);
    return a | 1
}
function Zc(a) {
    return !!(2 & a) && !!(4 & a) || !!(256 & a)
}
function $c(a) {
    if (tb) {
        var b;
        return (b = a[wb]) != null ? b : a[wb] = new Map
    }
    if (wb in a)
        return a[wb];
    b = new Map;
    Object.defineProperty(a, wb, {
        value: b
    });
    return b
}
function ad(a, b, c, d) {
    let e = a.get(d);
    if (e != null)
        return e;
    e = 0;
    for (let f = 0; f < d.length; f++) {
        const g = d[f];
        Vc(b, g) != null && (e !== 0 && (c = I(b, c, e)),
        e = g)
    }
    a.set(d, e);
    return e
}
function bd(a, b, c) {
    let d = a[B] | 0;
    const e = d & 128 ? Lb : void 0
      , f = Vc(a, c, e);
    let g;
    if (f != null && f[Ab] === Gb) {
        if (!Hb(f))
            return Rc(f),
            f.o;
        g = f.o
    } else
        Array.isArray(f) && (g = f);
    if (g) {
        const h = g[B] | 0;
        h & 2 && (g = Nc(g, h))
    }
    g = Jc(g, b);
    g !== f && I(a, d, c, g, e);
    return g
}
function cd(a, b, c, d, e) {
    let f = !1;
    d = Vc(a, d, e, g => {
        const h = vc(g, c, b);
        f = h !== g && h != null;
        return h
    }
    );
    if (d != null)
        return f && !Hb(d) && Tc(a, b),
        d
}
function dd(a, b, c, d) {
    let e = a.o
      , f = e[B] | 0;
    b = cd(e, f, b, c, d);
    if (b == null)
        return b;
    f = e[B] | 0;
    if (!Hb(a, f)) {
        const g = Qc(b);
        g !== b && (Rc(a) && (e = a.o,
        f = e[B] | 0),
        b = g,
        f = I(e, f, c, b, d),
        Tc(e, f))
    }
    return b
}
function ed(a, b, c, d, e, f, g, h) {
    var k = Hb(a, c);
    f = k ? 1 : f;
    g = !!g || f === 3;
    k = h && !k;
    (f === 2 || k) && Rc(a) && (b = a.o,
    c = b[B] | 0);
    h = Xc(b, e);
    var l = h === Db ? 7 : h[B] | 0
      , n = Yc(l, c);
    if (a = !(4 & n)) {
        var p = h
          , q = c;
        const m = !!(2 & n);
        m && (q |= 2);
        let u = !m
          , z = !0
          , y = 0
          , H = 0;
        for (; y < p.length; y++) {
            const ja = vc(p[y], d, q);
            if (ja instanceof d) {
                if (!m) {
                    const Ia = Hb(ja);
                    u && (u = !Ia);
                    z && (z = Ia)
                }
                p[H++] = ja
            }
        }
        H < y && (p.length = H);
        n |= 4;
        n = z ? n & -4097 : n | 4096;
        n = u ? n | 8 : n & -9
    }
    n !== l && (C(h, n),
    2 & n && Object.freeze(h));
    if (k && !(8 & n || !h.length && (f === 1 || (f !== 4 ? 0 : 2 & n || !(16 & n) && 32 & c)))) {
        Zc(n) && (h = Array.prototype.slice.call(h),
        n = fd(n, c),
        c = I(b, c, e, h));
        d = h;
        k = n;
        for (l = 0; l < d.length; l++)
            p = d[l],
            n = Qc(p),
            p !== n && (d[l] = n);
        k |= 8;
        n = k = d.length ? k | 4096 : k & -4097;
        C(h, n)
    }
    k = d = n;
    f === 1 || (f !== 4 ? 0 : 2 & d || !(16 & d) && 32 & c) ? Zc(d) || (d |= !h.length || a && !(4096 & d) || 32 & c && !(4096 & d || 16 & d) ? 2 : 256,
    d !== k && C(h, d),
    Object.freeze(h)) : (f === 2 && Zc(d) && (h = Array.prototype.slice.call(h),
    k = 0,
    d = fd(d, c),
    c = I(b, c, e, h)),
    Zc(d) || (g || (d |= 16),
    d !== k && C(h, d)));
    2 & d || !(4096 & d || 16 & d) || Tc(b, c);
    return h
}
function J(a, b, c, d) {
    d != null ? uc(d, b) : d = void 0;
    Wc(a, c, d);
    d && !Hb(d) && Tc(a.o);
    return a
}
function fd(a, b) {
    var c;
    2 & b ? c = a | 2 : c = a & -3;
    a = c;
    return a & -273
}
function gd(a, b, c, d) {
    var e = d;
    Sc(a);
    d = a.o;
    a = ed(a, d, d[B] | 0, c, b, 2, !0);
    e = e != null ? uc(e, c) : new c;
    a.push(e);
    b = c = a === Db ? 7 : a[B] | 0;
    (e = Hb(e)) ? (c &= -9,
    a.length === 1 && (c &= -4097)) : c |= 4096;
    c !== b && C(a, c);
    e || Tc(d)
}
function hd(a, b, c="", d) {
    let e;
    return (e = F(G(a, b, d))) != null ? e : c
}
function id(a, b) {
    var c = jd;
    const d = a.o;
    c = ad($c(d), d, void 0, c);
    return F(G(a, c === b ? b : -1, void 0, Uc))
}
function kd(a, b, c) {
    if (c != null) {
        if (typeof c !== "number")
            throw qb("int32");
        if (!ic(c))
            throw qb("int32");
        c |= 0
    }
    Wc(a, b, c)
}
function K(a, b, c) {
    return Wc(a, b, tc(c))
}
function ld(a, b, c, d) {
    a: {
        d = tc(d);
        Sc(a);
        const g = a.o;
        var e = g[B] | 0;
        if (d == null) {
            var f = $c(g);
            if (ad(f, g, e, c) === b)
                f.set(c, 0);
            else
                break a
        } else {
            f = g;
            b === 0 || c.includes(b);
            const h = $c(f)
              , k = ad(h, f, e, c);
            k !== b && (k && (e = I(f, e, k)),
            h.set(c, b))
        }
        I(g, e, b, d)
    }
    return a
}
function md(a, b, c) {
    if (c != null) {
        if (!ic(c))
            throw qb("enum");
        c |= 0
    }
    return Wc(a, b, c)
}
;var nd = class {
    constructor(a, b, c) {
        this.buffer = a;
        if (c && !b)
            throw Error();
        this.h = b
    }
}
;
function od(a, b) {
    if (typeof a === "string")
        return new nd(ib(a),b);
    if (Array.isArray(a))
        return new nd(new Uint8Array(a),b);
    if (a.constructor === Uint8Array)
        return new nd(a,!1);
    if (a.constructor === ArrayBuffer)
        return a = new Uint8Array(a),
        new nd(a,!1);
    if (a.constructor === mb)
        return b = nb(a) || new Uint8Array(0),
        new nd(b,!0,a);
    if (a instanceof Uint8Array)
        return a = a.constructor === Uint8Array ? a : new Uint8Array(a.buffer,a.byteOffset,a.byteLength),
        new nd(a,!1);
    throw Error();
}
;function pd(a) {
    const b = a.i;
    let c = a.h
      , d = b[c++]
      , e = d & 127;
    if (d & 128 && (d = b[c++],
    e |= (d & 127) << 7,
    d & 128 && (d = b[c++],
    e |= (d & 127) << 14,
    d & 128 && (d = b[c++],
    e |= (d & 127) << 21,
    d & 128 && (d = b[c++],
    e |= d << 28,
    d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128)))))
        throw Error();
    qd(a, c);
    return e
}
function qd(a, b) {
    a.h = b;
    if (b > a.j)
        throw Error();
}
function rd(a, b) {
    if (b < 0)
        throw Error();
    const c = a.h;
    b = c + b;
    if (b > a.j)
        throw Error();
    a.h = b;
    return c
}
var sd = class {
    constructor(a, b, c, d) {
        this.i = null;
        this.m = !1;
        this.h = this.j = this.l = 0;
        this.init(a, b, c, d)
    }
    init(a, b, c, {W: d=!1, ea: e=!1}={}) {
        this.W = d;
        this.ea = e;
        a && (a = od(a, this.ea),
        this.i = a.buffer,
        this.m = a.h,
        this.l = b || 0,
        this.j = c !== void 0 ? this.l + c : this.i.length,
        this.h = this.l)
    }
    clear() {
        this.i = null;
        this.m = !1;
        this.h = this.j = this.l = 0;
        this.W = !1
    }
    reset() {
        this.h = this.l
    }
}
  , td = [];
function ud(a, b, c, d) {
    if (vd.length) {
        const e = vd.pop();
        wd(e, d);
        e.h.init(a, b, c, d);
        return e
    }
    return new xd(a,b,c,d)
}
function wd(a, {ka: b=!1}={}) {
    a.ka = b
}
function yd(a) {
    a.h.clear();
    a.j = -1;
    a.i = -1;
    vd.length < 100 && vd.push(a)
}
function zd(a) {
    var b = a.h;
    if (b.h == b.j)
        return !1;
    a.l = a.h.h;
    var c = pd(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(c >= 0 && c <= 5))
        throw Error();
    if (b < 1)
        throw Error();
    a.j = b;
    a.i = c;
    return !0
}
function Ad(a) {
    switch (a.i) {
    case 0:
        if (a.i != 0)
            Ad(a);
        else
            a: {
                a = a.h;
                var b = a.h;
                const c = b + 10
                  , d = a.i;
                for (; b < c; )
                    if ((d[b++] & 128) === 0) {
                        qd(a, b);
                        break a
                    }
                throw Error();
            }
        break;
    case 1:
        a = a.h;
        qd(a, a.h + 8);
        break;
    case 2:
        a.i != 2 ? Ad(a) : (b = pd(a.h) >>> 0,
        a = a.h,
        qd(a, a.h + b));
        break;
    case 5:
        a = a.h;
        qd(a, a.h + 4);
        break;
    case 3:
        b = a.j;
        do {
            if (!zd(a))
                throw Error();
            if (a.i == 4) {
                if (a.j != b)
                    throw Error();
                break
            }
            Ad(a)
        } while (1);
        break;
    default:
        throw Error();
    }
}
function Bd(a, b, c) {
    const d = a.h.j;
    var e = pd(a.h) >>> 0;
    e = a.h.h + e;
    let f = e - d;
    f <= 0 && (a.h.j = e,
    c(b, a, void 0, void 0, void 0),
    f = e - a.h.h);
    if (f)
        throw Error();
    a.h.h = e;
    a.h.j = d
}
var xd = class {
    constructor(a, b, c, d) {
        if (td.length) {
            const e = td.pop();
            e.init(a, b, c, d);
            a = e
        } else
            a = new sd(a,b,c,d);
        this.h = a;
        this.l = this.h.h;
        this.i = this.j = -1;
        wd(this, d)
    }
    reset() {
        this.h.reset();
        this.l = this.h.h;
        this.i = this.j = -1
    }
}
  , vd = [];
function Cd() {
    const a = class {
        constructor() {
            throw Error();
        }
    }
    ;
    Object.setPrototypeOf(a, a.prototype);
    return a
}
var Dd = Cd()
  , Ed = Cd();
var L = class {
    constructor(a, b, c) {
        this.o = Kc(a, b, c, 2048)
    }
    toJSON() {
        return Fc(this)
    }
    clone() {
        const a = this.o
          , b = a[B] | 0;
        return Oc(this, a, b) ? Pc(this, a, !0) : new this.constructor(Nc(a, b, !1))
    }
}
;
L.prototype[Ab] = Gb;
var Fd = class {
    constructor(a, b) {
        this.U = a;
        a = na(Dd);
        this.h = !!a && b === a || !1
    }
}
;
const Gd = new Fd(function(a, b, c, d, e) {
    if (a.i !== 2)
        return !1;
    Bd(a, bd(b, d, c), e);
    return !0
}
,Dd)
  , Hd = new Fd(function(a, b, c, d, e) {
    if (a.i !== 2)
        return !1;
    Bd(a, bd(b, d, c), e);
    return !0
}
,Dd);
var Id = Symbol()
  , Jd = Symbol()
  , Kd = Symbol();
let Ld, Md;
function Nd(a) {
    var b = Od
      , c = Pd
      , d = a[Id];
    if (d)
        return d;
    d = {};
    d.Aa = a;
    d.aa = Ic(a[0]);
    var e = a[1];
    let f = 1;
    e && e.constructor === Object && (d.extensions = e,
    e = a[++f],
    typeof e === "function" && (d.La = !0,
    Ld != null || (Ld = e),
    Md != null || (Md = a[f + 1]),
    e = a[f += 2]));
    const g = {};
    for (; e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0; ) {
        for (var h = 0; h < e.length; h++)
            g[e[h]] = e;
        e = a[++f]
    }
    for (h = 1; e !== void 0; ) {
        typeof e === "number" && (h += e,
        e = a[++f]);
        let n;
        var k = void 0;
        e instanceof Fd ? n = e : (n = Gd,
        f--);
        let p;
        if ((p = n) == null ? 0 : p.h) {
            e = a[++f];
            k = a;
            var l = f;
            typeof e === "function" && (e = e(),
            k[l] = e);
            k = e
        }
        e = a[++f];
        l = h + 1;
        typeof e === "number" && e < 0 && (l -= e,
        e = a[++f]);
        for (; h < l; h++) {
            const q = g[h];
            k ? c(d, h, n, k, q) : b(d, h, n, q)
        }
    }
    return a[Id] = d
}
;function Od(a, b, c, d) {
    const e = c.U;
    a[b] = d ? (f, g, h) => e(f, g, h, d) : e
}
function Pd(a, b, c, d, e) {
    const f = c.U;
    let g, h;
    a[b] = (k, l, n) => f(k, l, n, h || (h = Nd(d).aa), g || (g = Qd(d)), e)
}
function Qd(a) {
    let b = a[Jd];
    if (b != null)
        return b;
    const c = Nd(a);
    b = c.La ? (d, e) => Ld(d, e, c) : (d, e) => {
        for (; zd(e) && e.i != 4; ) {
            var f = e.j
              , g = c[f];
            if (g == null) {
                var h = c.extensions;
                h && (h = h[f]) && (h = Rd(h),
                h != null && (g = c[f] = h))
            }
            if (g == null || !g(e, d, f)) {
                h = e;
                g = h.l;
                Ad(h);
                if (h.ka)
                    var k = void 0;
                else {
                    var l = h.h.h - g;
                    h.h.h = g;
                    b: {
                        h = h.h;
                        g = l;
                        if (g == 0) {
                            k = kb();
                            break b
                        }
                        var n = rd(h, g);
                        h.W && h.m ? g = h.i.subarray(n, n + g) : (h = h.i,
                        l = n,
                        g = n + g,
                        g = l === g ? new Uint8Array(0) : Zb ? h.slice(l, g) : new Uint8Array(h.subarray(l, g)));
                        k = g.length == 0 ? kb() : new mb(g,jb)
                    }
                }
                l = h = g = void 0;
                n = d;
                k && ((g = (h = (l = n[xb]) != null ? l : n[xb] = new Ac)[f]) != null ? g : h[f] = []).push(k)
            }
        }
        if (d = xc(d))
            d.h = c.Aa[Kd];
        return !0
    }
    ;
    a[Jd] = b;
    a[Kd] = Sd.bind(a);
    return b
}
function Sd(a, b, c, d) {
    var e = this[Id];
    const f = this[Jd]
      , g = Jc(void 0, e.aa)
      , h = xc(a);
    if (h) {
        var k = !1
          , l = e.extensions;
        if (l) {
            e = (n, p, q) => {
                if (q.length !== 0)
                    if (l[p])
                        for (const m of q) {
                            n = ud(m);
                            try {
                                k = !0,
                                f(g, n)
                            } finally {
                                yd(n)
                            }
                        }
                    else
                        d == null || d(a, p, q)
            }
            ;
            if (b == null)
                yc(h, e);
            else if (h != null) {
                const n = h[b];
                n && e(h, b, n)
            }
            if (k) {
                let n = a[B] | 0;
                if (n & 2 && n & 2048 && (c == null || !c.Yb))
                    throw Error();
                const p = n & 128 ? Lb : void 0
                  , q = (m, u) => {
                    if (Vc(a, m, p) != null)
                        switch (c == null ? void 0 : c.Wb) {
                        case 1:
                            return;
                        default:
                            throw Error();
                        }
                    u != null && (n = I(a, n, m, u, p));
                    delete h[m]
                }
                ;
                b == null ? Kb(g, g[B] | 0, (m, u) => {
                    q(m, u)
                }
                ) : q(b, Vc(g, b, p))
            }
        }
    }
}
function Rd(a) {
    a = Array.isArray(a) ? a[0]instanceof Fd ? a : [Hd, a] : [a, void 0];
    const b = a[0].U;
    if (a = a[1]) {
        const c = Qd(a)
          , d = Nd(a).aa;
        return (e, f, g) => b(e, f, g, d, c)
    }
    return b
}
;var Td;
Td = new Fd(function(a, b, c) {
    if (a.i !== 2)
        return !1;
    var d = pd(a.h) >>> 0;
    a = a.h;
    var e = rd(a, d);
    a = a.i;
    if (Oa) {
        var f = a, g;
        (g = Na) || (g = Na = new TextDecoder("utf-8",{
            fatal: !0
        }));
        d = e + d;
        f = e === 0 && d === f.length ? f : f.subarray(e, d);
        try {
            var h = g.decode(f)
        } catch (l) {
            if (Ma === void 0) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (n) {}
                try {
                    g.decode(new Uint8Array([97])),
                    Ma = !0
                } catch (n) {
                    Ma = !1
                }
            }
            !Ma && (Na = void 0);
            throw l;
        }
    } else {
        h = e;
        d = h + d;
        e = [];
        let l = null;
        let n;
        for (; h < d; ) {
            var k = a[h++];
            k < 128 ? e.push(k) : k < 224 ? h >= d ? Ka() : (n = a[h++],
            k < 194 || (n & 192) !== 128 ? (h--,
            Ka()) : e.push((k & 31) << 6 | n & 63)) : k < 240 ? h >= d - 1 ? Ka() : (n = a[h++],
            (n & 192) !== 128 || k === 224 && n < 160 || k === 237 && n >= 160 || ((g = a[h++]) & 192) !== 128 ? (h--,
            Ka()) : e.push((k & 15) << 12 | (n & 63) << 6 | g & 63)) : k <= 244 ? h >= d - 2 ? Ka() : (n = a[h++],
            (n & 192) !== 128 || (k << 28) + (n - 144) >> 30 !== 0 || ((g = a[h++]) & 192) !== 128 || ((f = a[h++]) & 192) !== 128 ? (h--,
            Ka()) : (k = (k & 7) << 18 | (n & 63) << 12 | (g & 63) << 6 | f & 63,
            k -= 65536,
            e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : Ka();
            e.length >= 8192 && (l = La(l, e),
            e.length = 0)
        }
        h = La(l, e)
    }
    I(b, b[B] | 0, c, h, (b[B] | 0) & 128 ? Lb : void 0);
    return !0
}
,Ed);
var Ud = function(a, b, c=Dd) {
    return new Fd(a,c)
}(function(a, b, c, d, e) {
    if (a.i !== 2)
        return !1;
    d = Jc(void 0, d);
    var f = b[B] | 0;
    if (f & 2)
        throw Error();
    const g = f & 128 ? Lb : void 0;
    let h = Xc(b, c, g)
      , k = h === Db ? 7 : h[B] | 0
      , l = Yc(k, f);
    if (2 & l || Zc(l) || 16 & l)
        l === k || Zc(l) || C(h, l),
        h = Array.prototype.slice.call(h),
        k = 0,
        l = fd(l, f),
        I(b, f, c, h, g);
    l &= -13;
    l !== k && C(h, l);
    h.push(d);
    Bd(a, d, e);
    return !0
}, function(a, b, c, d, e) {
    if (Array.isArray(b)) {
        for (let l = 0; l < b.length; l++) {
            var f = e
              , g = a
              , h = g.h;
            var k = b[l];
            k = k instanceof L ? k.o : Array.isArray(k) ? Jc(k, d) : void 0;
            h.call(g, c, k, f)
        }
        a = b[B] | 0;
        a & 1 || C(b, a | 1)
    }
});
function Vd() {}
;function Wd(a) {
    for (const b in a)
        return !1;
    return !0
}
function Xd(a) {
    if (!a || typeof a !== "object")
        return a;
    if (typeof a.clone === "function")
        return a.clone();
    if (typeof Map !== "undefined" && a instanceof Map)
        return new Map(a);
    if (typeof Set !== "undefined" && a instanceof Set)
        return new Set(a);
    if (a instanceof Date)
        return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : typeof ArrayBuffer !== "function" || typeof ArrayBuffer.isView !== "function" || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a)
        b[c] = Xd(a[c]);
    return b
}
const Yd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Zd(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (let f = 0; f < Yd.length; f++)
            c = Yd[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}
;var ae = class {
    constructor(a, b) {
        this.h = a === $d && b || ""
    }
    toString() {
        return this.h
    }
}
  , $d = {};
new ae($d,"");
function be(a) {
    if (!a)
        return "";
    if (/^about:(?:blank|srcdoc)$/.test(a))
        return window.origin || "";
    a.indexOf("blob:") === 0 && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    a.indexOf("//") == 0 && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3)
      , c = b.indexOf("/");
    c != -1 && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c)
        throw Error("URI is missing protocol: " + a);
    if (c !== "http" && c !== "https" && c !== "chrome-extension" && c !== "moz-extension" && c !== "file" && c !== "android-app" && c !== "chrome-search" && c !== "chrome-untrusted" && c !== "chrome" && c !== "app" && c !== "devtools")
        throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (d != -1) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if (c === "http" && e !== "80" || c === "https" && e !== "443")
            a = ":" + e
    }
    return c + "://" + b + a
}
;function ce() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = l = 0
    }
    function b(p) {
        for (var q = g, m = 0; m < 64; m += 4)
            q[m / 4] = p[m] << 24 | p[m + 1] << 16 | p[m + 2] << 8 | p[m + 3];
        for (m = 16; m < 80; m++)
            p = q[m - 3] ^ q[m - 8] ^ q[m - 14] ^ q[m - 16],
            q[m] = (p << 1 | p >>> 31) & 4294967295;
        p = e[0];
        var u = e[1]
          , z = e[2]
          , y = e[3]
          , H = e[4];
        for (m = 0; m < 80; m++) {
            if (m < 40)
                if (m < 20) {
                    var ja = y ^ u & (z ^ y);
                    var Ia = 1518500249
                } else
                    ja = u ^ z ^ y,
                    Ia = 1859775393;
            else
                m < 60 ? (ja = u & z | y & (u | z),
                Ia = 2400959708) : (ja = u ^ z ^ y,
                Ia = 3395469782);
            ja = ((p << 5 | p >>> 27) & 4294967295) + ja + H + Ia + q[m] & 4294967295;
            H = y;
            y = z;
            z = (u << 30 | u >>> 2) & 4294967295;
            u = p;
            p = ja
        }
        e[0] = e[0] + p & 4294967295;
        e[1] = e[1] + u & 4294967295;
        e[2] = e[2] + z & 4294967295;
        e[3] = e[3] + y & 4294967295;
        e[4] = e[4] + H & 4294967295
    }
    function c(p, q) {
        if (typeof p === "string") {
            p = unescape(encodeURIComponent(p));
            for (var m = [], u = 0, z = p.length; u < z; ++u)
                m.push(p.charCodeAt(u));
            p = m
        }
        q || (q = p.length);
        m = 0;
        if (l == 0)
            for (; m + 64 < q; )
                b(p.slice(m, m + 64)),
                m += 64,
                n += 64;
        for (; m < q; )
            if (f[l++] = p[m++],
            n++,
            l == 64)
                for (l = 0,
                b(f); m + 64 < q; )
                    b(p.slice(m, m + 64)),
                    m += 64,
                    n += 64
    }
    function d() {
        var p = []
          , q = n * 8;
        l < 56 ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var m = 63; m >= 56; m--)
            f[m] = q & 255,
            q >>>= 8;
        b(f);
        for (m = q = 0; m < 5; m++)
            for (var u = 24; u >= 0; u -= 8)
                p[q++] = e[m] >> u & 255;
        return p
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; k < 64; ++k)
        h[k] = 0;
    var l, n;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Da: function() {
            for (var p = d(), q = "", m = 0; m < p.length; m++)
                q += "0123456789ABCDEF".charAt(Math.floor(p[m] / 16)) + "0123456789ABCDEF".charAt(p[m] % 16);
            return q
        }
    }
}
;function de(a, b, c) {
    var d = String(v.location.href);
    return d && a && b ? [b, ee(be(d), a, c || null)].join(" ") : null
}
function ee(a, b, c) {
    var d = [];
    let e = [];
    if ((Array.isArray(c) ? 2 : 1) == 1)
        return e = [b, a],
        wa(d, function(h) {
            e.push(h)
        }),
        fe(e.join(" "));
    const f = []
      , g = [];
    wa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = f.length == 0 ? [c, b, a] : [f.join(":"), c, b, a];
    wa(d, function(h) {
        e.push(h)
    });
    a = fe(e.join(" "));
    a = [c, a];
    g.length == 0 || a.push(g.join(""));
    return a.join("_")
}
function fe(a) {
    const b = ce();
    b.update(a);
    return b.Da().toLowerCase()
}
;function ge() {
    this.h = document || {
        cookie: ""
    }
}
r = ge.prototype;
r.isEnabled = function() {
    if (!v.navigator.cookieEnabled)
        return !1;
    if (this.h.cookie)
        return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        na: 60
    });
    if (this.get("TESTCOOKIESENABLED") !== "1")
        return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
}
;
r.set = function(a, b, c) {
    let d, e, f, g = !1, h;
    typeof c === "object" && (h = c.sameSite,
    g = c.secure || !1,
    f = c.domain || void 0,
    e = c.path || void 0,
    d = c.na);
    if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
    d === void 0 && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
}
;
r.get = function(a, b) {
    const c = a + "="
      , d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = qa(d[e]);
        if (f.lastIndexOf(c, 0) == 0)
            return f.slice(c.length);
        if (f == a)
            return ""
    }
    return b
}
;
r.remove = function(a, b, c) {
    const d = this.get(a) !== void 0;
    this.set(a, "", {
        na: 0,
        path: b,
        domain: c
    });
    return d
}
;
r.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = []
      , c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
        e = qa(a[f]),
        d = e.indexOf("="),
        d == -1 ? (b.push(""),
        c.push(e)) : (b.push(e.substring(0, d)),
        c.push(e.substring(d + 1)));
    for (a = b.length - 1; a >= 0; a--)
        this.remove(b[a])
}
;
function he(a, b, c, d) {
    (a = v[a]) || typeof document === "undefined" || (a = (new ge).get(b));
    return a ? de(a, c, d) : null
}
;var ie = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? a => a && AsyncContext.Snapshot.wrap(a) : a => a;
function je() {
    this.l = this.l;
    this.j = this.j
}
je.prototype.l = !1;
je.prototype.dispose = function() {
    this.l || (this.l = !0,
    this.L())
}
;
je.prototype[Symbol.dispose] = function() {
    this.dispose()
}
;
je.prototype.addOnDisposeCallback = function(a, b) {
    this.l ? b !== void 0 ? a.call(b) : a() : (this.j || (this.j = []),
    b && (a = a.bind(b)),
    this.j.push(a))
}
;
je.prototype.L = function() {
    if (this.j)
        for (; this.j.length; )
            this.j.shift()()
}
;
function ke(a, b) {
    a.l(b);
    a.i < 100 && (a.i++,
    b.next = a.h,
    a.h = b)
}
class le {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        this.i > 0 ? (this.i--,
        a = this.h,
        this.h = a.next,
        a.next = null) : a = this.j();
        return a
    }
}
;class me {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = ne.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h,
        this.h = this.h.next,
        this.h || (this.i = null),
        a.next = null);
        return a
    }
}
var ne = new le( () => new oe,a => a.reset());
class oe {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
}
;let pe, qe = !1, re = new me, te = (a, b) => {
    pe || se();
    qe || (pe(),
    qe = !0);
    re.add(a, b)
}
, se = () => {
    const a = Promise.resolve(void 0);
    pe = () => {
        a.then(ue)
    }
}
;
function ue() {
    let a;
    for (; a = re.remove(); ) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Pa(b)
        }
        ke(ne, a)
    }
    qe = !1
}
;function ve(a) {
    this.h = 0;
    this.A = void 0;
    this.l = this.i = this.j = null;
    this.m = this.u = !1;
    if (a != Vd)
        try {
            const b = this;
            a.call(void 0, function(c) {
                we(b, 2, c)
            }, function(c) {
                we(b, 3, c)
            })
        } catch (b) {
            we(this, 3, b)
        }
}
function xe() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
xe.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
}
;
var ye = new le(function() {
    return new xe
}
,function(a) {
    a.reset()
}
);
function ze(a, b, c) {
    const d = ye.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}
function Ae(a) {
    if (a instanceof ve)
        return a;
    const b = new ve(Vd);
    we(b, 2, a);
    return b
}
ve.prototype.then = function(a, b, c) {
    return Be(this, ie(typeof a === "function" ? a : null), ie(typeof b === "function" ? b : null), c)
}
;
ve.prototype.$goog_Thenable = !0;
r = ve.prototype;
r.Ta = function(a, b) {
    return Be(this, null, ie(a), b)
}
;
r.catch = ve.prototype.Ta;
r.cancel = function(a) {
    if (this.h == 0) {
        const b = new Ce(a);
        te(function() {
            De(this, b)
        }, this)
    }
}
;
function De(a, b) {
    if (a.h == 0)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                var d = 0
                  , e = null
                  , f = null;
                for (let g = c.i; g && (g.l || (d++,
                g.h == a && (e = g),
                !(e && d > 1))); g = g.next)
                    e || (f = g);
                e && (c.h == 0 && d == 1 ? De(c, b) : (f ? (d = f,
                d.next == c.l && (c.l = d),
                d.next = d.next.next) : Ee(c),
                Fe(c, e, 3, b)))
            }
            a.j = null
        } else
            we(a, 3, b)
}
function Ge(a, b) {
    a.i || a.h != 2 && a.h != 3 || He(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}
function Be(a, b, c, d) {
    const e = ze(null, null, null);
    e.h = new ve(function(f, g) {
        e.j = b ? function(h) {
            try {
                const k = b.call(d, h);
                f(k)
            } catch (k) {
                g(k)
            }
        }
        : f;
        e.i = c ? function(h) {
            try {
                const k = c.call(d, h);
                k === void 0 && h instanceof Ce ? g(h) : f(k)
            } catch (k) {
                g(k)
            }
        }
        : g
    }
    );
    e.h.j = a;
    Ge(a, e);
    return e.h
}
r.Ua = function(a) {
    this.h = 0;
    we(this, 2, a)
}
;
r.Va = function(a) {
    this.h = 0;
    we(this, 3, a)
}
;
function we(a, b, c) {
    if (a.h == 0) {
        a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c
              , e = a.Ua
              , f = a.Va;
            if (d instanceof ve) {
                Ge(d, ze(e || Vd, f || null, a));
                var g = !0
            } else {
                if (d)
                    try {
                        var h = !!d.$goog_Thenable
                    } catch (k) {
                        h = !1
                    }
                else
                    h = !1;
                if (h)
                    d.then(e, f, a),
                    g = !0;
                else {
                    h = typeof d;
                    if (h == "object" && d != null || h == "function")
                        try {
                            const k = d.then;
                            if (typeof k === "function") {
                                Ie(d, k, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                    g = !1
                }
            }
        }
        g || (a.A = c,
        a.h = b,
        a.j = null,
        He(a),
        b != 3 || c instanceof Ce || Je(a, c))
    }
}
function Ie(a, b, c, d, e) {
    function f(k) {
        h || (h = !0,
        d.call(e, k))
    }
    function g(k) {
        h || (h = !0,
        c.call(e, k))
    }
    let h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}
function He(a) {
    a.u || (a.u = !0,
    te(a.Ea, a))
}
function Ee(a) {
    let b = null;
    a.i && (b = a.i,
    a.i = b.next,
    b.next = null);
    a.i || (a.l = null);
    return b
}
r.Ea = function() {
    let a;
    for (; a = Ee(this); )
        Fe(this, a, this.h, this.A);
    this.u = !1
}
;
function Fe(a, b, c, d) {
    if (c == 3 && b.i && !b.l)
        for (; a && a.m; a = a.j)
            a.m = !1;
    if (b.h)
        b.h.j = null,
        Ke(b, c, d);
    else
        try {
            b.l ? b.j.call(b.context) : Ke(b, c, d)
        } catch (e) {
            Le.call(null, e)
        }
    ke(ye, b)
}
function Ke(a, b, c) {
    b == 2 ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}
function Je(a, b) {
    a.m = !0;
    te(function() {
        a.m && Le.call(null, b)
    })
}
var Le = Pa;
function Ce(a) {
    pa.call(this, a)
}
oa(Ce, pa);
Ce.prototype.name = "cancel";
const Me = self;
class Ne {
    constructor() {
        this.promise = new Promise( (a, b) => {
            this.resolve = a;
            this.reject = b
        }
        )
    }
}
;function M(a) {
    je.call(this);
    this.A = 1;
    this.m = [];
    this.u = 0;
    this.h = [];
    this.i = {};
    this.H = !!a
}
oa(M, je);
r = M.prototype;
r.subscribe = function(a, b, c) {
    let d = this.i[a];
    d || (d = this.i[a] = []);
    const e = this.A;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.A = e + 3;
    d.push(e);
    return e
}
;
r.unsubscribe = function(a, b, c) {
    if (a = this.i[a]) {
        const d = this.h;
        if (a = a.find(function(e) {
            return d[e + 1] == b && d[e + 2] == c
        }))
            return this.T(a)
    }
    return !1
}
;
r.T = function(a) {
    const b = this.h[a];
    if (b) {
        const c = this.i[b];
        this.u != 0 ? (this.m.push(a),
        this.h[a + 1] = () => {}
        ) : (c && ya(c, a),
        delete this.h[a],
        delete this.h[a + 1],
        delete this.h[a + 2])
    }
    return !!b
}
;
r.ca = function(a, b) {
    var c = this.i[a];
    if (c) {
        const e = Array(arguments.length - 1);
        var d = arguments.length;
        let f;
        for (f = 1; f < d; f++)
            e[f - 1] = arguments[f];
        if (this.H)
            for (f = 0; f < c.length; f++)
                d = c[f],
                Oe(this.h[d + 1], this.h[d + 2], e);
        else {
            this.u++;
            try {
                for (f = 0,
                d = c.length; f < d && !this.l; f++) {
                    const g = c[f];
                    this.h[g + 1].apply(this.h[g + 2], e)
                }
            } finally {
                if (this.u--,
                this.m.length > 0 && this.u == 0)
                    for (; c = this.m.pop(); )
                        this.T(c)
            }
        }
        return f != 0
    }
    return !1
}
;
function Oe(a, b, c) {
    te(function() {
        a.apply(b, c)
    })
}
r.clear = function(a) {
    if (a) {
        const b = this.i[a];
        b && (b.forEach(this.T, this),
        delete this.i[a])
    } else
        this.h.length = 0,
        this.i = {}
}
;
r.L = function() {
    M.Qa.L.call(this);
    this.clear();
    this.m.length = 0
}
;
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let N = {};
var Pe = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
N.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
        var c = b.shift();
        if (c) {
            if (typeof c !== "object")
                throw new TypeError(c + "must be non-object");
            for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
}
;
N.cc = function(a, b) {
    if (a.length === b)
        return a;
    if (a.subarray)
        return a.subarray(0, b);
    a.length = b;
    return a
}
;
var Qe = {
    za: function(a, b, c, d, e) {
        if (b.subarray && a.subarray)
            a.set(b.subarray(c, c + d), e);
        else
            for (var f = 0; f < d; f++)
                a[e + f] = b[c + f]
    },
    Fa: function(a) {
        var b, c;
        var d = c = 0;
        for (b = a.length; d < b; d++)
            c += a[d].length;
        var e = new Uint8Array(c);
        d = c = 0;
        for (b = a.length; d < b; d++) {
            var f = a[d];
            e.set(f, c);
            c += f.length
        }
        return e
    }
}
  , Re = {
    za: function(a, b, c, d, e) {
        for (var f = 0; f < d; f++)
            a[e + f] = b[c + f]
    },
    Fa: function(a) {
        return [].concat.apply([], a)
    }
};
N.Pa = function() {
    Pe ? (N.sa = Uint8Array,
    N.qa = Uint16Array,
    N.ra = Int32Array,
    N.assign(N, Qe)) : (N.sa = Array,
    N.qa = Array,
    N.ra = Array,
    N.assign(N, Re))
}
;
N.Pa();
try {
    new Uint8Array(1)
} catch (a) {}
;function Se(a) {
    for (var b = a.length; --b >= 0; )
        a[b] = 0
}
Se(Array(576));
Se(Array(60));
Se(Array(512));
Se(Array(256));
Se(Array(29));
Se(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Te = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Ue = class {
    constructor(a) {
        this.name = a
    }
}
;
var Ve = new Ue("rawColdConfigGroup");
var We = new Ue("rawHotConfigGroup");
var Xe = class extends L {
    constructor(a) {
        super(a)
    }
}
;
var Ye = class extends L {
    constructor(a) {
        super(a)
    }
}
;
var Ze = class extends L {
    constructor(a) {
        super(a)
    }
}
;
var $e = class extends L {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = G(this, 36);
        a = a == null ? a : ic(a) ? a | 0 : void 0;
        return a != null ? a : 0
    }
    setHomeGroupInfo(a) {
        return J(this, Ze, 81, a)
    }
    clearLocationPlayabilityToken() {
        return Wc(this, 89)
    }
}
;
var af = class extends L {
    constructor(a) {
        super(a)
    }
}
  , bf = [2, 3, 4, 5, 6];
var cf = class extends L {
    constructor(a) {
        super(a)
    }
    setTrackingParams(a) {
        if (a != null)
            if (typeof a === "string")
                a = a ? new mb(a,jb) : kb();
            else if (a.constructor !== mb)
                if (db && a != null && a instanceof Uint8Array)
                    a = a.length ? new mb(new Uint8Array(a),jb) : kb();
                else
                    throw Error();
        return Wc(this, 1, a)
    }
}
;
var df = class extends L {
    constructor(a) {
        super(a)
    }
}
;
var ef = class extends L {
    constructor(a) {
        super(a)
    }
}
;
var ff = class extends L {
    constructor(a) {
        super(a)
    }
    setToken(a) {
        return K(this, 2, a)
    }
}
;
var gf = class extends L {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return md(this, 5, a)
    }
}
;
var hf = class extends L {
    constructor(a) {
        super(a)
    }
    j(a) {
        return J(this, $e, 1, a)
    }
}
;
var jf = class extends L {
    constructor(a) {
        super(a, 500)
    }
}
;
var kf = class extends L {
    constructor(a) {
        super(a)
    }
}
;
var lf = class extends L {
    constructor(a) {
        super(a)
    }
    setVideoId(a) {
        return ld(this, 1, jd, a)
    }
    getPlaylistId() {
        return id(this, 2)
    }
}
  , jd = [1, 2];
var mf = class extends L {
    constructor(a) {
        super(a)
    }
}
;
var nf = new Ue("recordNotificationInteractionsEndpoint");
var of = ["notification/convert_endpoint_to_url"]
  , pf = ["notification/record_interactions"]
  , qf = ["notification_registration/set_registration"];
var rf = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var sf = ["notifications_register", "notifications_check_registration"];
var O = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b];
        Object.setPrototypeOf(this, new.target.prototype)
    }
}
;
let tf = null;
function P(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return uf().then(d => new Promise( (e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            }
            ;
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }
    ))
}
function vf() {
    return P("IndexedDBCheck", "testing IndexedDB").then( () => wf("IndexedDBCheck")).then(a => a === "testing IndexedDB" ? Promise.resolve() : Promise.reject()).then( () => !0).catch( () => !1)
}
function wf(a) {
    const b = new O("Error accessing DB");
    return uf().then(c => new Promise( (d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            }
            ;
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            },
            e(b)
        }
    }
    ), () => null)
}
function uf() {
    return tf ? Promise.resolve(tf) : new Promise( (a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore"))
                tf = d,
                a(tf);
            else
                return self.indexedDB.deleteDatabase("swpushnotificationsdb"),
                uf()
        }
        ;
        c.onupgradeneeded = xf
    }
    )
}
function xf(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
}
;const yf = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};
function zf(a) {
    if (a.length === 1)
        return a[0];
    var b = yf.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c))
                return c
    }
    const d = [];
    Object.entries(yf).forEach( ([e,f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    }
    );
    c = new RegExp(d.join("|"));
    a.sort( (e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e))
            return e;
    return a[0]
}
function Af(a) {
    return `/youtubei/v1/${zf(a)}`
}
;var Bf = class extends L {
    constructor(a) {
        super(a)
    }
}
;
var Cf = class extends L {
    constructor(a) {
        super(a, 0, Cf.messageId)
    }
}
;
Cf.messageId = "yt.sw.adr";
const Df = v.window;
let Ef, Ff;
const Gf = (Df == null ? void 0 : (Ef = Df.yt) == null ? void 0 : Ef.config_) || (Df == null ? void 0 : (Ff = Df.ytcfg) == null ? void 0 : Ff.data_) || {};
x("yt.config_", Gf);
function Q(...a) {
    a = arguments;
    a.length > 1 ? Gf[a[0]] = a[1] : a.length === 1 && Object.assign(Gf, a[0])
}
function R(a, b) {
    return a in Gf ? Gf[a] : b
}
;const Hf = [];
function If(a) {
    Hf.forEach(b => b(a))
}
function Jf(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            Kf(b)
        }
    }
    : a
}
function Kf(a) {
    var b = w("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = R("ERRORS", []),
    b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]),
    Q("ERRORS", b));
    If(a)
}
function Lf(a) {
    var b = w("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = R("ERRORS", []),
    b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]),
    Q("ERRORS", b))
}
;const Mf = /^[\w.]*$/
  , Nf = {
    q: !0,
    search_query: !0
};
function Of(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (h.length === 1 && h[0] || h.length === 2)
            try {
                const k = Pf(h[0] || "")
                  , l = Pf(h[1] || "");
                if (k in c) {
                    const n = c[k];
                    Array.isArray(n) ? za(n, l) : c[k] = [n, l]
                } else
                    c[k] = l
            } catch (k) {
                var d = k
                  , e = h[0];
                const l = String(Of);
                d.args = [{
                    key: e,
                    value: h[1],
                    query: a,
                    method: Qf === l ? "unchanged" : l
                }];
                Nf.hasOwnProperty(e) || Lf(d)
            }
    }
    return c
}
const Qf = String(Of);
function Rf(a) {
    a.charAt(0) === "?" && (a = a.substring(1));
    return Of(a, "&")
}
function Sf(a, b) {
    return Tf(a, b || {}, !0)
}
function Tf(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = d.length > 1 ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Rf(e[1] || "");
    for (var f in b)
        !c && e !== null && f in e || (e[f] = b[f]);
    b = a;
    a = Ja(e);
    a ? (c = b.indexOf("#"),
    c < 0 && (c = b.length),
    f = b.indexOf("?"),
    f < 0 || f > c ? (f = c,
    e = "") : e = b.substring(f + 1, c),
    b = [b.slice(0, f), e, b.slice(c)],
    c = b[1],
    b[1] = a ? c ? c + "&" + a : a : c,
    a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}
function Uf(a) {
    if (!b)
        var b = window.location.href;
    const c = a.match(Fa)[1] || null
      , d = Ga(a.match(Fa)[3] || null);
    c && d ? (a = a.match(Fa),
    b = b.match(Fa),
    a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ga(b.match(Fa)[3] || null) === d && (Number(b.match(Fa)[4] || null) || null) === (Number(a.match(Fa)[4] || null) || null) : !0;
    return a
}
function Pf(a) {
    return a && a.match(Mf) ? a : decodeURIComponent(a.replace(/\+/g, " "))
}
;function Vf(a, b) {
    typeof a === "function" && (a = Jf(a));
    return window.setTimeout(a, b)
}
;var Wf = "absolute_experiments client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods theme".split(" ")
  , Xf = [...Wf, "client_dev_set_cookie"];
function S(a) {
    a = Yf(a);
    return typeof a === "string" && a === "false" ? !1 : !!a
}
function T(a, b) {
    a = Yf(a);
    return a === void 0 && b !== void 0 ? b : Number(a || 0)
}
function Zf() {
    return R("EXPERIMENTS_TOKEN", "")
}
function Yf(a) {
    return R("EXPERIMENT_FLAGS", {})[a]
}
function $f() {
    const a = []
      , b = R("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b))
        a.push({
            key: c,
            value: String(b[c])
        });
    c = R("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c))
        d.startsWith("force_") && b[d] === void 0 && a.push({
            key: d,
            value: String(c[d])
        });
    return a
}
;[...Wf];
let ag = !1;
function bg(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    b.priority && (c.priority = b.priority);
    a = cg(a, b);
    const d = dg(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || v;
    let f = !1, g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok
              , l = n => {
                n = n || {};
                k ? b.onSuccess && b.onSuccess.call(e, n, h) : b.onError && b.onError.call(e, n, h);
                b.onFinish && b.onFinish.call(e, n, h)
            }
            ;
            (b.format || "JSON") === "JSON" && (k || h.status >= 400 && h.status < 500) ? h.json().then(l, () => {
                l(null)
            }
            ) : l(null)
        }
    }
    ).catch( () => {
        b.onError && b.onError.call(e, {}, {})
    }
    );
    a = b.timeout || 0;
    b.onFetchTimeout && a > 0 && (g = Vf( () => {
        f || (f = !0,
        window.clearTimeout(g),
        b.onFetchTimeout.call(b.context || v))
    }
    , a))
}
function cg(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = R("XSRF_FIELD_NAME");
    if (b = b.urlParams)
        b[c] && delete b[c],
        a = Sf(a, b);
    return a
}
function dg(a, b) {
    const c = R("XSRF_FIELD_NAME")
      , d = R("XSRF_TOKEN");
    var e = b.postBody || ""
      , f = b.postParams;
    const g = R("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Ga(a.match(Fa)[3] || null) && !b.withCredentials && Ga(a.match(Fa)[3] || null) !== document.location.hostname || b.method !== "POST" || h && h !== "application/x-www-form-urlencoded" || b.postParams && b.postParams[g] || (f || (f = {}),
    f[c] = d);
    f && typeof e === "string" && (e = Rf(e),
    Zd(e, f),
    e = b.postBodyFormat && b.postBodyFormat === "JSON" ? JSON.stringify(e) : Ja(e));
    f = e || f && !Wd(f);
    !ag && f && b.method !== "POST" && (ag = !0,
    Kf(Error("AJAX request with postData should use POST")));
    return e
}
;const eg = [{
    Z: a => `Cannot read property '${a.key}'`,
    R: {
        Error: [{
            v: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            v: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            v: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            v: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            v: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            v: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            v: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    Z: a => `Cannot call '${a.key}'`,
    R: {
        TypeError: [{
            v: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            v: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            v: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            v: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            v: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            v: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    Z: a => `${a.key} is not defined`,
    R: {
        ReferenceError: [{
            v: /(.*) is not defined/,
            groups: ["key"]
        }, {
            v: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var hg = {
    D: [],
    C: [{
        callback: fg,
        weight: 500
    }, {
        callback: gg,
        weight: 500
    }]
};
function fg(a) {
    if (a.name === "JavaException")
        return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("-extension://") || a.includes("webkit-masked-url://")
}
function gg(a) {
    if (!a.stack)
        return !0;
    const b = !a.stack.includes("\n");
    return b && a.stack.includes("ErrorType: ") || b && a.stack.includes("Anonymous function (Unknown script") || a.stack.toLowerCase() === "not available" || a.fileName === "user-script" || a.fileName.startsWith("user-script:") ? !0 : !1
}
;function ig() {
    if (!jg) {
        var a = jg = new kg;
        a.D.length = 0;
        a.C.length = 0;
        lg(a, hg)
    }
    return jg
}
function lg(a, b) {
    b.D && a.D.unshift.apply(a.D, b.D);
    b.C && a.C.unshift.apply(a.C, b.C)
}
var kg = class {
    constructor() {
        this.C = [];
        this.D = []
    }
}
, jg;
const mg = new M;
function ng(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = og(d);
        if (e === Infinity)
            break;
        const f = e >> 3;
        switch (e & 7) {
        case 0:
            e = og(d);
            if (f === 2)
                return e;
            break;
        case 1:
            if (f === 2)
                return;
            c += 8;
            break;
        case 2:
            e = og(d);
            if (f === 2)
                return a.substr(c, e);
            c += e;
            break;
        case 5:
            if (f === 2)
                return;
            c += 4;
            break;
        default:
            return
        }
    } while (c < b)
}
function og(a) {
    let b = a()
      , c = b & 127;
    if (b < 128)
        return c;
    b = a();
    c |= (b & 127) << 7;
    if (b < 128)
        return c;
    b = a();
    c |= (b & 127) << 14;
    if (b < 128)
        return c;
    b = a();
    return b < 128 ? c | (b & 127) << 21 : Infinity
}
;function pg(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += qg(d, a[d], b, c),
            e > 500)); d++)
                ;
            d = e
        } else if (typeof a === "object")
            for (e in a) {
                if (a[e]) {
                    a: {
                        var f = e;
                        var g = a[e]
                          , h = b
                          , k = c;
                        if (typeof g !== "string" || f !== "clickTrackingParams" && f !== "trackingParams") {
                            f = 0;
                            break a
                        }
                        f = (g = ng(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? qg(`${f}.ve`, g, h, k) : 0
                    }
                    d += f;
                    d += qg(e, a[e], b, c);
                    if (d > 500)
                        break
                }
            }
        else
            c[b] = rg(a),
            d += c[b].length;
    else
        c[b] = rg(a),
        d += c[b].length;
    return d
}
function qg(a, b, c, d) {
    c += `.${a}`;
    a = rg(b);
    d[c] = a;
    return c.length + a.length
}
function rg(a) {
    try {
        return (typeof a === "string" ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
}
;function sg() {
    tg.instance || (tg.instance = new tg);
    return tg.instance
}
function ug(a, b) {
    a = {};
    var c = [];
    "USER_SESSION_ID"in Gf && c.push({
        key: "u",
        value: R("USER_SESSION_ID")
    });
    var d = be(v == null ? void 0 : v.location.href);
    var e = [];
    var f;
    (f = v.__SAPISID || v.__APISID || v.__3PSAPISID || v.__1PSAPISID || v.__OVERRIDE_SID) ? f = !0 : (typeof document !== "undefined" && (f = new ge,
    f = f.get("SAPISID") || f.get("APISID") || f.get("__Secure-3PAPISID") || f.get("__Secure-1PAPISID")),
    f = !!f);
    f && (f = (d = d.indexOf("https:") == 0 || d.indexOf("chrome-extension:") == 0 || d.indexOf("chrome-untrusted://new-tab-page") == 0 || d.indexOf("moz-extension:") == 0) ? v.__SAPISID : v.__APISID,
    f || typeof document === "undefined" || (f = new ge,
    f = f.get(d ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID")),
    (f = f ? de(f, d ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f),
    d && ((d = he("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d),
    (c = he("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = e.length == 0 ? null : e.join(" "))
        a.Authorization = e,
        e = b = b == null ? void 0 : b.sessionIndex,
        e === void 0 && (e = Number(R("SESSION_INDEX", 0)),
        e = isNaN(e) ? 0 : e),
        S("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] = e.toString()),
        "INNERTUBE_HOST_OVERRIDE"in Gf || (a["X-Origin"] = window.location.origin),
        b === void 0 && "DELEGATED_SESSION_ID"in Gf && (a["X-Goog-PageId"] = R("DELEGATED_SESSION_ID"));
    return a
}
var tg = class {
    constructor() {
        this.Ra = !0
    }
}
;
var vg = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};
function wg(a) {
    switch (a) {
    case "DESKTOP":
        return 1;
    case "UNKNOWN_PLATFORM":
        return 0;
    case "TV":
        return 2;
    case "GAME_CONSOLE":
        return 3;
    case "MOBILE":
        return 4;
    case "TABLET":
        return 5
    }
}
;x("ytglobal.prefsUserPrefsPrefs_", w("ytglobal.prefsUserPrefsPrefs_") || {});
function xg() {
    if (R("DATASYNC_ID") !== void 0)
        return R("DATASYNC_ID");
    throw new O("Datasync ID not set","unknown");
}
;function yg(a, b) {
    return zg(a, 0, b)
}
function Ag(a) {
    const b = w("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a()
}
var Bg = class {
    h(a) {
        zg(a, 1)
    }
}
;
function Cg() {
    Dg.instance || (Dg.instance = new Dg);
    return Dg.instance
}
function zg(a, b, c) {
    c !== void 0 && Number.isNaN(Number(c)) && (c = void 0);
    const d = w("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : c === void 0 ? (a(),
    NaN) : Vf(a, c || 0)
}
var Dg = class extends Bg {
    O(a) {
        if (a === void 0 || !Number.isNaN(Number(a))) {
            var b = w("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    }
    start() {
        const a = w("yt.scheduler.instance.start");
        a && a()
    }
}
  , Eg = Cg();
const Fg = [];
let Gg, Hg = !1;
function Ig(a) {
    Hg || (Gg ? Gg.handleError(a) : (Fg.push({
        type: "ERROR",
        payload: a
    }),
    Fg.length > 10 && Fg.shift()))
}
function Jg(a, b) {
    Hg || (Gg ? Gg.P(a, b) : (Fg.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }),
    Fg.length > 10 && Fg.shift()))
}
;function Kg(a) {
    if (a.indexOf(":") >= 0)
        throw Error("Database name cannot contain ':'");
}
function Lg(a) {
    return a.substr(0, a.indexOf(":")) || a
}
;const Mg = {
    AUTH_INVALID: "No user identifier specified.",
    EXPLICIT_ABORT: "Transaction was explicitly aborted.",
    IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
    MISSING_INDEX: "Index not created.",
    MISSING_OBJECT_STORES: "Object stores not created.",
    DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
    DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
    UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
    QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
    QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
    EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
    INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
}
  , Ng = {
    AUTH_INVALID: "ERROR",
    EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
    EXPLICIT_ABORT: "IGNORED",
    IDB_NOT_SUPPORTED: "ERROR",
    MISSING_INDEX: "WARNING",
    MISSING_OBJECT_STORES: "ERROR",
    DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
    DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
    QUOTA_EXCEEDED: "WARNING",
    QUOTA_MAYBE_EXCEEDED: "WARNING",
    UNKNOWN_ABORT: "WARNING",
    INCOMPATIBLE_DB_VERSION: "WARNING"
}
  , Og = {
    AUTH_INVALID: !1,
    EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
    EXPLICIT_ABORT: !1,
    IDB_NOT_SUPPORTED: !1,
    MISSING_INDEX: !1,
    MISSING_OBJECT_STORES: !1,
    DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
    DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
    QUOTA_EXCEEDED: !1,
    QUOTA_MAYBE_EXCEEDED: !0,
    UNKNOWN_ABORT: !0,
    INCOMPATIBLE_DB_VERSION: !1
};
var U = class extends O {
    constructor(a, b={}, c=Mg[a], d=Ng[a], e=Og[a]) {
        super(c, Object.assign({}, {
            name: "YtIdbKnownError",
            isSw: self.document === void 0,
            isIframe: self !== self.top,
            type: a
        }, b));
        this.type = a;
        this.message = c;
        this.level = d;
        this.h = e;
        Object.setPrototypeOf(this, U.prototype)
    }
}
  , Pg = class extends U {
    constructor(a, b) {
        super("MISSING_OBJECT_STORES", {
            expectedObjectStores: b,
            foundObjectStores: a
        }, Mg.MISSING_OBJECT_STORES);
        Object.setPrototypeOf(this, Pg.prototype)
    }
}
  , Qg = class extends Error {
    constructor(a, b) {
        super();
        this.index = a;
        this.objectStore = b;
        Object.setPrototypeOf(this, Qg.prototype)
    }
}
;
const Rg = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];
function Sg(a, b, c, d) {
    b = Lg(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof U)
        return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if (e.name === "QuotaExceededError")
        return new U("QUOTA_EXCEEDED",a);
    if (Xa && e.name === "UnknownError")
        return new U("QUOTA_MAYBE_EXCEEDED",a);
    if (e instanceof Qg)
        return new U("MISSING_INDEX",Object.assign({}, a, {
            objectStore: e.objectStore,
            index: e.index
        }));
    if (e.name === "InvalidStateError" && Rg.some(f => e.message.includes(f)))
        return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",a);
    if (e.name === "AbortError")
        return new U("UNKNOWN_ABORT",a,e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Pb: e.name
    })];
    e.level = "WARNING";
    return e
}
function Tg(a, b, c) {
    return new U("IDB_NOT_SUPPORTED",{
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
}
;function Ug(a) {
    if (!a)
        throw Error();
    throw a;
}
function Vg(a) {
    return a
}
var Wg = class {
    constructor(a) {
        this.h = a
    }
}
;
function Xg(a, b, c, d, e) {
    try {
        if (a.state.status !== "FULFILLED")
            throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof Yg ? Zg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}
function $g(a, b, c, d, e) {
    try {
        if (a.state.status !== "REJECTED")
            throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof Yg ? Zg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}
function Zg(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof Yg ? Zg(a, b, f, d, e) : d(f)
    }
    , f => {
        e(f)
    }
    )
}
var Yg = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
            if (this.state.status === "PENDING") {
                this.state = {
                    status: "FULFILLED",
                    value: d
                };
                for (const e of this.h)
                    e()
            }
        }
          , c = d => {
            if (this.state.status === "PENDING") {
                this.state = {
                    status: "REJECTED",
                    reason: d
                };
                for (const e of this.i)
                    e()
            }
        }
        ;
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new Yg(new Wg( (b, c) => {
            const d = [];
            let e = a.length;
            e === 0 && b(d);
            for (let f = 0; f < a.length; ++f)
                Yg.resolve(a[f]).then(g => {
                    d[f] = g;
                    e--;
                    e === 0 && b(d)
                }
                ).catch(g => {
                    c(g)
                }
                )
        }
        ))
    }
    static resolve(a) {
        return new Yg(new Wg( (b, c) => {
            a instanceof Yg ? a.then(b, c) : b(a)
        }
        ))
    }
    static reject(a) {
        return new Yg(new Wg( (b, c) => {
            c(a)
        }
        ))
    }
    then(a, b) {
        const c = a != null ? a : Vg
          , d = b != null ? b : Ug;
        return new Yg(new Wg( (e, f) => {
            this.state.status === "PENDING" ? (this.h.push( () => {
                Xg(this, this, c, e, f)
            }
            ),
            this.i.push( () => {
                $g(this, this, d, e, f)
            }
            )) : this.state.status === "FULFILLED" ? Xg(this, this, c, e, f) : this.state.status === "REJECTED" && $g(this, this, d, e, f)
        }
        ))
    }
    catch(a) {
        return this.then(void 0, a)
    }
}
;
function ah(a, b, c) {
    const d = () => {
        try {
            a.removeEventListener("success", e),
            a.removeEventListener("error", f)
        } catch (g) {}
    }
      , e = () => {
        b(a.result);
        d()
    }
      , f = () => {
        c(a.error);
        d()
    }
    ;
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}
function bh(a) {
    return new Promise( (b, c) => {
        ah(a, b, c)
    }
    )
}
function V(a) {
    return new Yg(new Wg( (b, c) => {
        ah(a, b, c)
    }
    ))
}
;function ch(a, b) {
    return new Yg(new Wg( (c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }
            , d) : c()
        }
        ;
        e()
    }
    ))
}
;const dh = window;
var W = dh.ytcsi && dh.ytcsi.now ? dh.ytcsi.now : dh.performance && dh.performance.timing && dh.performance.now && dh.performance.timing.navigationStart ? () => dh.performance.timing.navigationStart + dh.performance.now() : () => (new Date).getTime();
function eh() {
    return S("idb_immediate_commit")
}
function X(a, b, c, d) {
    return t(function*() {
        const e = {
            mode: "readonly",
            B: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        typeof c === "string" ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.B ? 3 : 1;
        let g = 0, h;
        for (; !h; ) {
            g++;
            const p = Math.round(W());
            try {
                var k = a.h.transaction(b, e.mode)
                  , l = d
                  , n = !!e.commit;
                const q = new fh(k)
                  , m = yield gh(q, l, n)
                  , u = Math.round(W());
                hh(a, p, u, g, void 0, b.join(), e);
                return m
            } catch (q) {
                l = Math.round(W());
                const m = Sg(q, a.h.name, b.join(), a.h.version);
                if (m instanceof U && !m.h || g >= f)
                    hh(a, p, l, g, m, b.join(), e),
                    h = m
            }
        }
        return Promise.reject(h)
    })
}
function ih(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new jh(a)
}
function kh(a, b, c, d) {
    return X(a, [b], {
        mode: "readwrite",
        B: !0,
        commit: eh()
    }, e => {
        e = e.objectStore(b);
        return V(e.h.put(c, d))
    }
    )
}
function hh(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof U && (e.type === "QUOTA_EXCEEDED" || e.type === "QUOTA_MAYBE_EXCEEDED") && Jg("QUOTA_EXCEEDED", {
        dbName: Lg(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }),
    e instanceof U && e.type === "UNKNOWN_ABORT" && (c -= a.j,
    c < 0 && c >= 2147483648 && (c = 0),
    Jg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }),
    a.i = !0),
    lh(a, !1, d, f, b, g.tag),
    Ig(e)) : lh(a, !0, d, f, b, g.tag)
}
function lh(a, b, c, d, e, f="IDB_TRANSACTION_TAG_UNKNOWN") {
    Jg("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var mh = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(W());
        this.i = !1
    }
    add(a, b, c) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0,
            commit: eh()
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        ((a = this.options) == null ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return X(this, [a], {
            mode: "readonly",
            B: !0,
            commit: eh()
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0,
            commit: eh() && !(b instanceof IDBKeyRange)
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return X(this, [a], {
            mode: "readonly",
            B: !0,
            commit: eh()
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return X(this, [a], {
            mode: "readonly",
            B: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
}
;
function nh(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return oh(a).then(d => ch(d, c))
}
function ph(a, b) {
    return nh(a, {
        query: b
    }, c => c.delete().then( () => qh(c))).then( () => {}
    )
}
function rh(a, b, c) {
    const d = [];
    return nh(a, {
        query: b
    }, e => {
        if (!(c !== void 0 && d.length >= c))
            return d.push(e.cursor.value),
            qh(e)
    }
    ).then( () => d)
}
var jh = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return V(this.h.clear()).then( () => {}
        )
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? ph(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll"in IDBObjectStore.prototype ? V(this.h.getAll(a, b)) : rh(this, a, b)
    }
    index(a) {
        try {
            return new sh(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && b.name === "NotFoundError")
                throw new Qg(a,this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
}
;
function gh(a, b, c) {
    const d = new Promise( (e, f) => {
        try {
            const g = b(a);
            c && a.commit();
            g.then(h => {
                e(h)
            }
            ).catch(f)
        } catch (g) {
            f(g),
            a.abort()
        }
    }
    );
    return Promise.all([d, a.done]).then( ([e]) => e)
}
var fh = class {
    constructor(a) {
        this.h = a;
        this.i = new Map;
        this.aborted = !1;
        this.done = new Promise( (b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            }
            );
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            }
            );
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d)
                    c(d);
                else if (!this.aborted) {
                    d = U;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (h === null)
                            throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT",{
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            }
            )
        }
        )
    }
    abort() {
        this.h.abort();
        this.aborted = !0;
        throw new U("EXPLICIT_ABORT");
    }
    commit() {
        if (!this.aborted) {
            let a, b;
            (b = (a = this.h).commit) == null || b.call(a)
        }
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.i.get(a);
        b || (b = new jh(a),
        this.i.set(a, b));
        return b
    }
}
;
function th(a, b, c) {
    const {query: d=null, direction: e="next"} = b;
    a = a.h.openCursor(d, e);
    return oh(a).then(f => ch(f, c))
}
function uh(a, b, c) {
    const d = [];
    return th(a, {
        query: b
    }, e => {
        if (!(c !== void 0 && d.length >= c))
            return d.push(e.cursor.value),
            qh(e)
    }
    ).then( () => d)
}
var sh = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return th(this, {
            query: a
        }, b => b.delete().then( () => qh(b)))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll"in IDBIndex.prototype ? V(this.h.getAll(a, b)) : uh(this, a, b)
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
}
;
function oh(a) {
    return V(a).then(b => b ? new vh(a,b) : null)
}
function qh(a) {
    a.cursor.continue(void 0);
    return oh(a.request)
}
function wh(a) {
    a.cursor.advance(5);
    return oh(a.request)
}
var vh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    delete() {
        return V(this.cursor.delete()).then( () => {}
        )
    }
    update(a) {
        return V(this.cursor.update(a))
    }
}
;
function xh(a, b, c) {
    return new Promise( (d, e) => {
        let f;
        f = b !== void 0 ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.Ba
          , h = c.blocking
          , k = c.Sa
          , l = c.upgrade
          , n = c.closed;
        let p;
        const q = () => {
            p || (p = new mh(f.result,{
                closed: n
            }));
            return p
        }
        ;
        f.addEventListener("upgradeneeded", m => {
            try {
                if (m.newVersion === null)
                    throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (f.transaction === null)
                    throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                m.dataLoss && m.dataLoss !== "none" && Jg("IDB_DATA_CORRUPTED", {
                    reason: m.dataLossMessage || "unknown reason",
                    dbName: Lg(a)
                });
                const u = q()
                  , z = new fh(f.transaction);
                l && l(u, y => m.oldVersion < y && m.newVersion >= y, z);
                z.done.catch(y => {
                    e(y)
                }
                )
            } catch (u) {
                e(u)
            }
        }
        );
        f.addEventListener("success", () => {
            const m = f.result;
            h && m.addEventListener("versionchange", () => {
                h(q())
            }
            );
            m.addEventListener("close", () => {
                Jg("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: Lg(a),
                    dbVersion: m.version
                });
                k && k()
            }
            );
            d(q())
        }
        );
        f.addEventListener("error", () => {
            e(f.error)
        }
        );
        g && f.addEventListener("blocked", () => {
            g()
        }
        )
    }
    )
}
function yh(a, b, c={}) {
    return xh(a, b, c)
}
function zh(a, b={}) {
    return t(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a)
              , d = b.Ba;
            d && c.addEventListener("blocked", () => {
                d()
            }
            );
            yield bh(c)
        } catch (c) {
            throw Sg(c, a, "", -1);
        }
    })
}
;function Ah(a, b) {
    return new U("INCOMPATIBLE_DB_VERSION",{
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}
function Bh(a, b) {
    if (!b)
        throw Tg("openWithToken", Lg(a.name));
    return a.open()
}
var Ch = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c={}) {
        return yh(a, b, c)
    }
    delete(a={}) {
        return zh(this.name, a)
    }
    open() {
        if (!this.j)
            throw Ah(this);
        if (this.h)
            return this.h;
        let a;
        const b = () => {
            this.h === a && (this.h = void 0)
        }
          , c = {
            blocking: e => {
                e.close()
            }
            ,
            closed: b,
            Sa: b,
            upgrade: this.options.upgrade
        }
          , d = () => {
            const e = this;
            return t(function*() {
                var f, g = (f = Error().stack) != null ? f : "";
                try {
                    const k = yield e.i(e.name, e.options.version, c);
                    f = k;
                    var h = e.options;
                    const l = [];
                    for (const n of Object.keys(h.J)) {
                        const {I: p, Vb: q=Number.MAX_VALUE} = h.J[n];
                        !(f.h.version >= p) || f.h.version >= q || f.h.objectStoreNames.contains(n) || l.push(n)
                    }
                    if (l.length !== 0) {
                        const n = Object.keys(e.options.J)
                          , p = k.objectStoreNames();
                        if (e.m < T("ytidb_reopen_db_retries", 0))
                            return e.m++,
                            k.close(),
                            Ig(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",{
                                dbName: e.name,
                                expectedObjectStores: n,
                                foundObjectStores: p
                            })),
                            d();
                        if (e.l < T("ytidb_remake_db_retries", 1))
                            return e.l++,
                            yield e.delete(),
                            Ig(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{
                                dbName: e.name,
                                expectedObjectStores: n,
                                foundObjectStores: p
                            })),
                            d();
                        throw new Pg(p,n);
                    }
                    return k
                } catch (k) {
                    if (k instanceof DOMException ? k.name === "VersionError" : "DOMError"in self && k instanceof DOMError ? k.name === "VersionError" : k instanceof Object && "message"in k && k.message === "An attempt was made to open a database using a lower version than the existing version.") {
                        g = yield e.i(e.name, void 0, Object.assign({}, c, {
                            upgrade: void 0
                        }));
                        h = g.h.version;
                        if (e.options.version !== void 0 && h > e.options.version + 1)
                            throw g.close(),
                            e.j = !1,
                            Ah(e, h);
                        return g
                    }
                    b();
                    k instanceof Error && !S("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n") + 1)}`);
                    let l;
                    throw Sg(k, e.name, "", (l = e.options.version) != null ? l : -1);
                }
            })
        }
        ;
        return this.h = a = d()
    }
}
;
const Dh = new Ch("YtIdbMeta",{
    J: {
        databases: {
            I: 1
        }
    },
    upgrade(a, b) {
        b(1) && ih(a, "databases", {
            keyPath: "actualName"
        })
    }
});
function Eh(a, b) {
    return t(function*() {
        return X(yield Bh(Dh, b), ["databases"], {
            B: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1)
                    return V(d.h.put(a, void 0)).then( () => {}
                    )
            }
            )
        }
        )
    })
}
function Fh(a, b) {
    return t(function*() {
        if (a)
            return (yield Bh(Dh, b)).delete("databases", a)
    })
}
;let Gh;
const Hh = new class {
    constructor() {}
}
(new class {
    constructor() {}
}
);
function Ih() {
    return t(function*() {
        return !0
    })
}
function Jh() {
    if (Gh !== void 0)
        return Gh;
    Hg = !0;
    return Gh = Ih().then(a => {
        Hg = !1;
        return a
    }
    )
}
function Kh() {
    return w("ytglobal.idbToken_") || void 0
}
function Lh() {
    const a = Kh();
    return a ? Promise.resolve(a) : Jh().then(b => {
        b ? (x("ytglobal.idbToken_", Hh),
        b = Hh) : b = void 0;
        return b
    }
    )
}
;new Ne;
function Mh(a) {
    try {
        xg();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b)
        throw a = new U("AUTH_INVALID",{
            dbName: a
        }),
        Ig(a),
        a;
    b = xg();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}
function Nh(a, b, c, d) {
    return t(function*() {
        var e, f = (e = Error().stack) != null ? e : "";
        e = yield Lh();
        if (!e)
            throw e = Tg("openDbImpl", a, b),
            S("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n") + 1)}`),
            Ig(e),
            e;
        Kg(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : Mh(a);
        try {
            return yield Eh(f, e),
            yield yh(f.actualName, b, d)
        } catch (g) {
            try {
                yield Fh(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}
function Oh(a, b, c={}) {
    return Nh(a, b, !1, c)
}
function Ph(a, b, c={}) {
    return Nh(a, b, !0, c)
}
function Qh(a, b={}) {
    return t(function*() {
        const c = yield Lh();
        if (c) {
            Kg(a);
            var d = Mh(a);
            yield zh(d.actualName, b);
            yield Fh(d.actualName, c)
        }
    })
}
function Rh(a, b={}) {
    return t(function*() {
        const c = yield Lh();
        c && (Kg(a),
        yield zh(a, b),
        yield Fh(a, c))
    })
}
;function Sh(a, b) {
    let c;
    return () => {
        c || (c = new Th(a,b));
        return c
    }
}
var Th = class extends Ch {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        Kg(a)
    }
    i(a, b, c={}) {
        return (this.options.shared ? Ph : Oh)(a, b, Object.assign({}, c))
    }
    delete(a={}) {
        return (this.options.shared ? Rh : Qh)(this.name, a)
    }
}
;
function Uh(a, b) {
    return Sh(a, b)
}
;var Vh = Uh("ytGcfConfig", {
    J: {
        coldConfigStore: {
            I: 1
        },
        hotConfigStore: {
            I: 1
        }
    },
    shared: !1,
    upgrade(a, b) {
        b(1) && (ih(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }),
        ih(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});
function Wh(a) {
    return Bh(Vh(), a)
}
function Xh(a, b, c) {
    return t(function*() {
        const d = {
            config: a,
            hashData: b,
            timestamp: W()
        }
          , e = yield Wh(c);
        yield e.clear("hotConfigStore");
        return yield kh(e, "hotConfigStore", d)
    })
}
function Yh(a, b, c, d) {
    return t(function*() {
        const e = {
            config: a,
            hashData: b,
            configData: c,
            timestamp: W()
        }
          , f = yield Wh(d);
        yield f.clear("coldConfigStore");
        return yield kh(f, "coldConfigStore", e)
    })
}
function Zh(a) {
    return t(function*() {
        let b = void 0;
        yield X(yield Wh(a), ["coldConfigStore"], {
            mode: "readwrite",
            B: !0
        }, c => th(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }
        ));
        return b
    })
}
function $h(a) {
    return t(function*() {
        let b = void 0;
        yield X(yield Wh(a), ["hotConfigStore"], {
            mode: "readwrite",
            B: !0
        }, c => th(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }
        ));
        return b
    })
}
;var ai = class extends je {
    constructor() {
        super();
        this.i = [];
        this.h = [];
        const a = w("yt.gcf.config.hotUpdateCallbacks");
        a ? (this.i = [...a],
        this.h = a) : (this.h = [],
        x("yt.gcf.config.hotUpdateCallbacks", this.h))
    }
    L() {
        for (const b of this.i) {
            var a = this.h;
            const c = a.indexOf(b);
            c >= 0 && a.splice(c, 1)
        }
        this.i.length = 0;
        super.L()
    }
}
;
function bi(a, b, c) {
    return t(function*() {
        if (S("start_client_gcf")) {
            c && (a.j = c,
            x("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            x("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = Kh();
            if (d) {
                if (!c) {
                    var e;
                    c = (e = yield $h(d)) == null ? void 0 : e.config
                }
                yield Xh(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h)
                    f(e)
            }
        }
    })
}
function ci(a, b, c) {
    return t(function*() {
        if (S("start_client_gcf")) {
            a.coldHashData = b;
            x("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = Kh();
            if (d) {
                if (!c) {
                    let e;
                    c = (e = yield Zh(d)) == null ? void 0 : e.config
                }
                c && (yield Yh(c, b, c.configData, d))
            }
        }
    })
}
var di = class {
    constructor() {
        this.h = 0;
        this.i = new ai
    }
}
;
function ei() {
    return "INNERTUBE_API_KEY"in Gf && "INNERTUBE_API_VERSION"in Gf
}
function fi() {
    return {
        innertubeApiKey: R("INNERTUBE_API_KEY"),
        innertubeApiVersion: R("INNERTUBE_API_VERSION"),
        X: R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Ga: R("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ha: R("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: R("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        ma: R("INNERTUBE_CONTEXT_HL"),
        la: R("INNERTUBE_CONTEXT_GL"),
        Ia: R("INNERTUBE_HOST_OVERRIDE") || "",
        Ja: !!R("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Jb: !!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: R("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}
function gi(a) {
    const b = {
        client: {
            hl: a.ma,
            gl: a.la,
            clientName: a.Ga,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.X
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = v.devicePixelRatio;
    c && c != 1 && (b.client.screenDensityFloat = String(c));
    c = Zf();
    c !== "" && (b.client.experimentsToken = c);
    c = $f();
    c.length > 0 && (b.request = {
        internalExperimentFlags: c
    });
    hi(void 0, b);
    ii(a, void 0, b);
    S("start_client_gcf") && ji(void 0, b);
    R("DELEGATED_SESSION_ID") && !S("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: R("DELEGATED_SESSION_ID")
    });
    !S("fill_delegate_context_in_gel_killswitch") && (a = R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = R("INNERTUBE_CONTEXT");
    var d;
    if (S("enable_persistent_device_token") && (a == null ? 0 : (d = a.client) == null ? 0 : d.rolloutToken)) {
        var e;
        b.client.rolloutToken = a == null ? void 0 : (e = a.client) == null ? void 0 : e.rolloutToken
    }
    d = Object;
    e = d.assign;
    a = b.client;
    var f = R("DEVICE", "");
    c = {};
    for (const [g,h] of Object.entries(Rf(f))) {
        f = g;
        const k = h;
        f === "cbrand" ? c.deviceMake = k : f === "cmodel" ? c.deviceModel = k : f === "cbr" ? c.browserName = k : f === "cbrver" ? c.browserVersion = k : f === "cos" ? c.osName = k : f === "cosver" ? c.osVersion = k : f === "cplatform" && (c.platform = k)
    }
    b.client = e.call(d, a, c);
    return b
}
function hi(a, b) {
    const c = w("yt.embedded_player.embed_url");
    c && (a ? (b = dd(a, ef, 7) || new ef,
    K(b, 4, c),
    J(a, ef, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}
function ii(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = (d = dd(b, Ye, 62)) != null ? d : new Ye;
            K(c, 6, a.appInstallData);
            J(b, Ye, 62, c)
        } else
            c && (c.client.configInfo = c.client.configInfo || {},
            c.client.configInfo.appInstallData = a.appInstallData)
}
function ki(a, b, c={}) {
    let d = {};
    R("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": R("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || R("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com"))
        return d;
    b = c.Bb || R("AUTHORIZATION");
    b || (a ? b = `Bearer ${w("gapi.auth.getToken")().Ab}` : (a = ug(sg()),
    S("pageid_as_header_web") || delete a["X-Goog-PageId"],
    d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}
function ji(a, b) {
    if (!di.instance) {
        var c = new di;
        di.instance = c
    }
    c = di.instance;
    var d = W() - c.h;
    if (c.h !== 0 && d < T("send_config_hash_timer"))
        c = void 0;
    else {
        d = w("yt.gcf.config.coldConfigData");
        var e = w("yt.gcf.config.hotHashData")
          , f = w("yt.gcf.config.coldHashData");
        d && e && f && (c.h = W());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (d = c)
        if (e = d.coldConfigData,
        c = d.coldHashData,
        d = d.hotHashData,
        a) {
            var g;
            b = (g = dd(a, Ye, 62)) != null ? g : new Ye;
            g = K(b, 1, e);
            g = K(g, 3, c);
            K(g, 5, d);
            J(a, Ye, 62, b)
        } else
            b && (b.client.configInfo = b.client.configInfo || {},
            e && (b.client.configInfo.coldConfigData = e),
            c && (b.client.configInfo.coldHashData = c),
            d && (b.client.configInfo.hotHashData = d))
}
;typeof TextEncoder !== "undefined" && new TextEncoder;
function li(a) {
    this.version = 1;
    this.args = a
}
;function mi() {
    var a = ni;
    this.topic = "screen-created";
    this.h = a
}
mi.prototype.toString = function() {
    return this.topic
}
;
const oi = w("ytPubsub2Pubsub2Instance") || new M;
M.prototype.subscribe = M.prototype.subscribe;
M.prototype.unsubscribeByKey = M.prototype.T;
M.prototype.publish = M.prototype.ca;
M.prototype.clear = M.prototype.clear;
x("ytPubsub2Pubsub2Instance", oi);
const pi = w("ytPubsub2Pubsub2SubscribedKeys") || {};
x("ytPubsub2Pubsub2SubscribedKeys", pi);
const qi = w("ytPubsub2Pubsub2TopicToKeys") || {};
x("ytPubsub2Pubsub2TopicToKeys", qi);
const ri = w("ytPubsub2Pubsub2IsAsync") || {};
x("ytPubsub2Pubsub2IsAsync", ri);
x("ytPubsub2Pubsub2SkipSubKey", null);
function si(a, b) {
    const c = ti();
    c && c.publish.call(c, a.toString(), a, b)
}
function ui(a) {
    var b = vi;
    const c = ti();
    if (!c)
        return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = w("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (pi[d])
                try {
                    if (f && b instanceof mi && b != e)
                        try {
                            var h = b.h
                              , k = f;
                            if (!k.args || !k.version)
                                throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                            try {
                                if (!h.pa) {
                                    const m = new h;
                                    h.pa = m.version
                                }
                                var l = h.pa
                            } catch (m) {}
                            if (!l || k.version != l)
                                throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                            try {
                                l = Reflect;
                                var n = l.construct;
                                {
                                    var p = k.args;
                                    const m = p.length;
                                    if (m > 0) {
                                        const u = Array(m);
                                        for (k = 0; k < m; k++)
                                            u[k] = p[k];
                                        var q = u
                                    } else
                                        q = []
                                }
                                f = n.call(l, h, q)
                            } catch (m) {
                                throw m.message = "yt.pubsub2.Data.deserialize(): " + m.message,
                                m;
                            }
                        } catch (m) {
                            throw m.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + m.message,
                            m;
                        }
                    a.call(window, f)
                } catch (m) {
                    Kf(m)
                }
        }
        ,
        ri[b.toString()] ? w("yt.scheduler.instance") ? Eg.h(g) : Vf(g, 0) : g())
    }
    );
    pi[d] = !0;
    qi[b.toString()] || (qi[b.toString()] = []);
    qi[b.toString()].push(d);
    return d
}
function wi() {
    var a = xi;
    const b = ui(function(c) {
        a.apply(void 0, arguments);
        yi(b)
    });
    return b
}
function yi(a) {
    const b = ti();
    b && (typeof a === "number" && (a = [a]),
    wa(a, c => {
        b.unsubscribeByKey(c);
        delete pi[c]
    }
    ))
}
function ti() {
    return w("ytPubsub2Pubsub2Instance")
}
;var zi = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    offlineSystemFailure: 546,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationPlayablesMetrics: 533,
    liveCreationStreamWebrtcStats: 288,
    liveCreationWebrtcError: 526,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrCowatchPartyEvent: 492,
    vrCowatchUserStartOrJoinEvent: 504,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5DeviceStorageStats: 535,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeQosEvent: 510,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    mdeExporterEvent: 497,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    externalVideoShareToYoutubeAttempt: 501,
    parentCodeEvent: 502,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    producerAppStateChange: 509,
    producerProjectDiskInsufficientExportFailure: 516,
    producerMediaServicesResetDetails: 522,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
    crossDeviceNotificationTransfer: 487,
    androidIntentEvent: 488,
    unpluggedAmbientInterludesCounterfactualEvent: 489,
    keyPlaysPlayback: 490,
    shortsCreationFallbackEvent: 493,
    vssData: 491,
    castMatch: 494,
    miniAppPerformanceMetrics: 495,
    userFeedbackEvent: 496,
    kidsGuestSessionMismatch: 498,
    musicSideloadedPlaylistMigrationEvent: 499,
    sleepTimerSessionFinishEvent: 500,
    watchEpPromoConflict: 503,
    innertubeResponseCacheMetrics: 505,
    miniAppAdEvent: 506,
    dataPlanUpsellEvent: 507,
    producerProjectRenamed: 508,
    producerMediaSelectionEvent: 511,
    embedsAutoplayStatusChanged: 512,
    remoteConnectEvent: 513,
    connectedSessionMisattributionEvent: 514,
    producerProjectElementModified: 515,
    adsSeenClientLogging: 517,
    producerEvent: 518,
    tvhtml5CleanStart: 519,
    deviceAccountMetricsEvent: 520,
    derpLogEvent: 521,
    playablesPortalEvent: 523,
    ipValidationStarted: 524,
    ipValidationReceived: 525,
    reelsSequenceMutationEvent: 527,
    watchZoomStateChange: 528,
    metadataEditorEvent: 529,
    kidsPrismaDeeplinksEvent: 530,
    creationOrchestrationEvent: 531,
    coordinatedSamplingTriggered: 532,
    dnaRecapScreenshotEvent: 534,
    mdxLocalNetworkPermissionRequestEvent: 536,
    mdxLocalNetworkPermissionResponseEvent: 537,
    sessionReplayEvent: 538,
    sessionReplayStatusEvent: 539,
    loggingReliabilityProbe: 540,
    keyValueStoreStatsEvent: 541,
    deviceLocationPermissionEvent: 542,
    remoteControlStarted: 543,
    remoteControlCompleted: 544,
    reelsAdsEvents: 545,
    ytlrLoaderTestHarnessEvent: 547,
    biometricAuthenticationEvent: 548,
    mainAppLifecycleEvent: 549
};
const Ai = ["client.name", "client.version"];
function Bi(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs)
        return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Ai.includes(b.key) : !1);
    return a
}
;var Ci = Uh("ServiceWorkerLogsDatabase", {
    J: {
        SWHealthLog: {
            I: 1
        }
    },
    shared: !0,
    upgrade: (a, b) => {
        b(1) && ih(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    }
    ,
    version: 1
});
function Di(a, b) {
    return t(function*() {
        var c = yield Bh(Ci(), b)
          , d = R("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Bi(e.clientError));
        e.interface = d;
        return kh(c, "SWHealthLog", e)
    })
}
;x("ytNetworklessLoggingInitializationOptions", v.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});
function Ei(a, b, c, d) {
    !R("VISITOR_DATA") && b !== "visitor_id" && Math.random() < .01 && Lf(new O("Missing VISITOR_DATA when sending innertube request.",b,c,d));
    if (!a.isReady())
        throw a = new O("innertube xhrclient not ready",b,c,d),
        Kf(a),
        a;
    c = {
        headers: d.headers || {},
        method: "POST",
        postParams: c,
        postBody: d.postBody,
        postBodyFormat: d.postBodyFormat || "JSON",
        onTimeout: () => {
            d.onTimeout()
        }
        ,
        onFetchTimeout: d.onTimeout,
        onSuccess: (h, k) => {
            if (d.onSuccess)
                d.onSuccess(k)
        }
        ,
        onFetchSuccess: h => {
            if (d.onSuccess)
                d.onSuccess(h)
        }
        ,
        onProgress: h => {
            if (d.onProgress)
                d.onProgress(h)
        }
        ,
        onError: (h, k) => {
            if (d.onError)
                d.onError(k)
        }
        ,
        onFetchError: h => {
            if (d.onError)
                d.onError(h)
        }
        ,
        timeout: d.timeout,
        withCredentials: !0,
        compress: d.compress
    };
    c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
    let e = "";
    var f = a.config_.Ia;
    f && (e = f);
    f = a.config_.Ja || !1;
    const g = ki(f, e, d);
    Object.assign(c.headers, g);
    c.headers.Authorization && !e && f && (c.headers["x-origin"] = window.location.origin);
    a = Sf(`${e}${`/youtubei/${a.config_.innertubeApiVersion}/${b}`}`, {
        alt: "json"
    });
    try {
        bg(a, c)
    } catch (h) {
        if (h.name === "InvalidAccessError")
            Lf(Error("An extension is blocking network request."));
        else
            throw h;
    }
}
var Fi = class {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : ei() && (this.config_ = fi())
    }
    isReady() {
        !this.config_ && ei() && (this.config_ = fi());
        return !!this.config_
    }
}
;
let Gi = 0;
x("ytDomDomGetNextId", w("ytDomDomGetNextId") || ( () => ++Gi));
x("ytEventsEventsListeners", v.ytEventsEventsListeners || {});
x("ytEventsEventsCounter", v.ytEventsEventsCounter || {
    count: 0
});
v.ytPubsubPubsubInstance || new M;
var Hi = Symbol("injectionDeps")
  , Ii = class {
    constructor(a) {
        this.name = a
    }
    toString() {
        return `InjectionToken(${this.name})`
    }
}
  , Ji = class {
    constructor(a) {
        this.key = a
    }
}
;
function Ki(a) {
    var b = {
        ba: Li,
        oa: Mi.instance
    };
    a.i.set(b.ba, b);
    const c = a.j.get(b.ba);
    if (c)
        try {
            c.Xb(a.resolve(b.ba))
        } catch (d) {
            c.Ub(d)
        }
}
function Ni(a, b, c, d=!1) {
    if (c.indexOf(b) > -1)
        throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b))
        return a.h.get(b);
    if (!a.i.has(b)) {
        if (d)
            return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (d.oa !== void 0)
        var e = d.oa;
    else if (d.Xa)
        e = d[Hi] ? Oi(a, d[Hi], c) : [],
        e = d.Xa(...e);
    else if (d.Wa) {
        e = d.Wa;
        const f = e[Hi] ? Oi(a, e[Hi], c) : [];
        e = new e(...f)
    } else
        throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.dc || a.h.set(b, e);
    return e
}
function Oi(a, b, c) {
    return b ? b.map(d => d instanceof Ji ? Ni(a, d.key, c, !0) : Ni(a, d, c)) : []
}
var Pi = class {
    constructor() {
        this.i = new Map;
        this.j = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof Ji ? Ni(this, a.key, [], !0) : Ni(this, a, [])
    }
}
;
let Qi;
function Ri() {
    Qi || (Qi = new Pi);
    return Qi
}
;let Si = window;
function Ti() {
    let a, b;
    return "h5vcc"in Si && ((a = Si.h5vcc.traceEvent) == null ? 0 : a.traceBegin) && ((b = Si.h5vcc.traceEvent) == null ? 0 : b.traceEnd) ? 1 : "performance"in Si && Si.performance.mark && Si.performance.measure ? 2 : 0
}
function Ui(a) {
    const b = Ti();
    switch (b) {
    case 1:
        Si.h5vcc.traceEvent.traceBegin("YTLR", a);
        break;
    case 2:
        Si.performance.mark(`${a}-start`);
        break;
    case 0:
        break;
    default:
        va(b, "unknown trace type")
    }
}
function Vi(a) {
    var b = Ti();
    switch (b) {
    case 1:
        Si.h5vcc.traceEvent.traceEnd("YTLR", a);
        break;
    case 2:
        b = `${a}-start`;
        const c = `${a}-end`;
        Si.performance.mark(c);
        Si.performance.measure(a, b, c);
        break;
    case 0:
        break;
    default:
        va(b, "unknown trace type")
    }
}
;var Wi = S("web_enable_lifecycle_monitoring") && Ti() !== 0
  , Xi = S("web_enable_lifecycle_monitoring");
function Yi(a) {
    let b, c;
    (c = (b = window).onerror) == null || c.call(b, a.message, "", 0, 0, a)
}
;function Zi(a) {
    let b;
    return (b = a.priority) != null ? b : 0
}
function $i(a) {
    var b = Array.from(a.h.keys()).sort( (c, d) => Zi(a.h[d]) - Zi(a.h[c]));
    for (const c of b)
        b = a.h[c],
        b.jobId === void 0 || b.S || (a.scheduler.O(b.jobId),
        zg(b.Y, 10))
}
var aj = class {
    constructor(a) {
        this.scheduler = Cg();
        this.i = new Ne;
        this.h = a;
        for (let b = 0; b < this.h.length; b++) {
            const c = this.h[b];
            a = () => {
                c.Y();
                this.h[b].S = !0;
                this.h.every(e => e.S === !0) && this.i.resolve()
            }
            ;
            const d = zg(a, Zi(c));
            this.h[b] = Object.assign({}, c, {
                Y: a,
                jobId: d
            })
        }
    }
    cancel() {
        for (const a of this.h)
            a.jobId === void 0 || a.S || this.scheduler.O(a.jobId),
            a.S = !0;
        this.i.resolve()
    }
}
;
function bj(a, b, c) {
    Xi && console.groupCollapsed && console.groupEnd && (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),
    console.log("with message: ", c),
    console.groupEnd())
}
function cj(a, b) {
    const c = b.filter(e => dj(a, e) === 10)
      , d = b.filter(e => dj(a, e) !== 10);
    return a.l.bc ? (...e) => t(function*() {
        yield ej(c, ...e);
        fj(a, d, ...e)
    }) : (...e) => {
        gj(c, ...e);
        fj(a, d, ...e)
    }
}
function dj(a, b) {
    let c, d;
    return (d = (c = a.j) != null ? c : b.priority) != null ? d : 0
}
function ej(a, ...b) {
    return t(function*() {
        Cg();
        for (const c of a) {
            let d;
            Ag( () => {
                hj(c.name);
                const e = ij( () => c.callback(...b));
                Qb(e) ? d = S("web_lifecycle_error_handling_killswitch") ? e.then( () => {
                    jj(c.name)
                }
                ) : e.then( () => {
                    jj(c.name)
                }
                , f => {
                    Yi(f);
                    jj(c.name)
                }
                ) : jj(c.name)
            }
            );
            d && (yield d)
        }
    })
}
function fj(a, b, ...c) {
    b = b.map(d => ({
        Y: () => {
            hj(d.name);
            ij( () => d.callback(...c));
            jj(d.name)
        }
        ,
        priority: dj(a, d)
    }));
    b.length && (a.i = new aj(b))
}
function gj(a, ...b) {
    Cg();
    for (const c of a)
        Ag( () => {
            hj(c.name);
            ij( () => c.callback(...b));
            jj(c.name)
        }
        )
}
function hj(a) {
    Wi && a && Ui(a)
}
function jj(a) {
    Wi && a && Vi(a)
}
var kj = class {
    constructor() {
        this.state = "none";
        this.plugins = [];
        this.j = void 0;
        this.l = {};
        Wi && Ui(this.state)
    }
    get currentState() {
        return this.state
    }
    install(a) {
        this.plugins.push(a);
        return this
    }
    transition(a, b) {
        Wi && Vi(this.state);
        var c = this.transitions.find(d => Array.isArray(d.from) ? d.from.find(e => e === this.state && d.to === a) : d.from === this.state && d.to === a);
        if (c) {
            this.i && ($i(this.i),
            this.i = void 0);
            bj(this, a, b);
            this.state = a;
            Wi && Ui(this.state);
            c = c.action.bind(this);
            const d = this.plugins.filter(e => e[a]).map(e => e[a]);
            c(cj(this, d), b)
        } else
            throw Error(`no transition specified from ${this.state} to ${a}`);
    }
}
;
function ij(a) {
    if (S("web_lifecycle_error_handling_killswitch"))
        return a();
    try {
        return a()
    } catch (b) {
        Yi(b)
    }
}
;function lj() {
    mj || (mj = new nj);
    return mj
}
var nj = class extends kj {
    constructor() {
        super();
        this.h = null;
        this.j = 10;
        this.transitions = [{
            from: "none",
            to: "application_navigating",
            action: this.m
        }, {
            from: "application_navigating",
            to: "none",
            action: this.u
        }, {
            from: "application_navigating",
            to: "application_navigating",
            action: () => {}
        }, {
            from: "none",
            to: "none",
            action: () => {}
        }]
    }
    m(a, b) {
        this.h = yg( () => {
            this.currentState === "application_navigating" && this.transition("none")
        }
        , 5E3);
        a(b == null ? void 0 : b.event)
    }
    u(a, b) {
        this.h && (Eg.O(this.h),
        this.h = null);
        a(b == null ? void 0 : b.event)
    }
}
, mj;
let oj = [];
x("yt.logging.transport.getScrapedGelPayloads", function() {
    return oj
});
let pj = void 0
  , qj = void 0;
function rj(a, b) {
    const c = sj(b);
    if (a.h[c])
        return a.h[c];
    const d = Object.keys(a.store) || [];
    if (d.length <= 1 && sj(b) === d[0])
        return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (tj(b.auth, h[0])) {
            var f = b.isJspb;
            tj(f === void 0 ? "undefined" : f ? "true" : "false", h[1]) && tj(b.cttAuthInfo, h[2]) && (f = b.tier,
            f = f === void 0 ? "undefined" : JSON.stringify(f),
            tj(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}
function tj(a, b) {
    return a === void 0 || a === "undefined" ? !0 : a === b
}
var uj = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = sj(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {},
        this.store[a] = [b]);
        S("more_accurate_gel_parser") && (b = new CustomEvent("TRANSPORTING_NEW_EVENT"),
        window.dispatchEvent(b));
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length)
            return [];
        const b = rj(this, a.keys.splice(0, 1)[0])
          , c = [];
        for (let d = 0; d < b.length; d++)
            this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]),
            delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (a == null ? 0 : a.sizeLimit) && c.length < (a == null ? void 0 : a.sizeLimit) && (a.sizeLimit -= c.length,
        c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = rj(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++)
            this.store[a[c]] && (b.push(...this.store[a[c]]),
            delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = rj(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += ((d = this.store[a[c]]) == null ? void 0 : d.length) || 0
        }
        return b
    }
}
;
uj.prototype.getSequenceCount = uj.prototype.getSequenceCount;
uj.prototype.extractMatchingEntries = uj.prototype.extractMatchingEntries;
uj.prototype.smartExtractMatchingEntries = uj.prototype.smartExtractMatchingEntries;
uj.prototype.storePayload = uj.prototype.storePayload;
function sj(a) {
    return [a.auth === void 0 ? "undefined" : a.auth, a.isJspb === void 0 ? "undefined" : a.isJspb, a.cttAuthInfo === void 0 ? "undefined" : a.cttAuthInfo, a.tier === void 0 ? "undefined" : a.tier].join("/")
}
;function vj(a, b) {
    if (a)
        return a[b.name]
}
;var wj = new Ii("FinchConfigManagerService");
const xj = T("initial_gel_batch_timeout", 2E3)
  , yj = T("gel_queue_timeout_max_ms", 6E4)
  , zj = T("gel_min_batch_size", 5);
let Aj = void 0;
class Bj {
    constructor() {
        this.l = this.h = this.i = 0;
        this.j = !1
    }
}
const Cj = new Bj
  , Dj = new Bj
  , Ej = new Bj
  , Fj = new Bj;
let Gj, Hj = !0, Ij = 1;
const Jj = new Map
  , Kj = v.ytLoggingTransportTokensToCttTargetIds_ || {}
  , Lj = v.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Mj = {};
function Nj() {
    let a = w("yt.logging.ims");
    a || (a = new uj,
    x("yt.logging.ims", a));
    return a
}
function Oj(a, b) {
    if (a.endpoint === "log_event") {
        Pj();
        var c = Qj(a)
          , d = Rj(a.payload) || "";
        a: {
            if (S("enable_web_tiered_gel")) {
                var e = zi[d || ""];
                var f, g;
                if (Ri().resolve(new Ji(di)) == null)
                    var h = void 0;
                else {
                    let k;
                    h = (k = w("yt.gcf.config.hotConfigGroup")) != null ? k : R("RAW_HOT_CONFIG_GROUP");
                    h = h == null ? void 0 : (f = h.loggingHotConfig) == null ? void 0 : (g = f.eventLoggingConfig) == null ? void 0 : g.payloadPolicies
                }
                if (f = h)
                    for (g = 0; g < f.length; g++)
                        if (f[g].payloadNumber === e) {
                            e = f[g];
                            break a
                        }
            }
            e = void 0
        }
        f = 200;
        if (e) {
            if (e.enabled === !1 && !S("web_payload_policy_disabled_killswitch"))
                return;
            f = Sj(e.tier);
            if (f === 400) {
                Tj(a, b);
                return
            }
        }
        Mj[c] = !0;
        c = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: f
        };
        Nj().storePayload(c, a.payload);
        Uj(b, c, d === "gelDebuggingEvent")
    }
}
function Uj(a, b, c=!1) {
    a && (Aj = new a);
    a = T("tvhtml5_logging_max_batch_ads_fork") || T("tvhtml5_logging_max_batch") || T("web_logging_max_batch") || 100;
    const d = W()
      , e = Vj(!1, b.tier)
      , f = e.l;
    c && (e.j = !0);
    c = 0;
    b && (c = Nj().getSequenceCount(b));
    c >= 1E3 ? Wj({
        writeThenSend: !0
    }, !1, b.tier) : c >= a ? Gj || (Gj = Xj( () => {
        Wj({
            writeThenSend: !0
        }, !1, b.tier);
        Gj = void 0
    }
    , 0)) : d - f >= 10 && (Yj(!1, b.tier),
    e.l = d)
}
function Tj(a, b) {
    if (a.endpoint === "log_event") {
        S("more_accurate_gel_parser") && Nj().storePayload({
            isJspb: !1
        }, a.payload);
        Pj();
        var c = Qj(a)
          , d = new Map;
        d.set(c, [a.payload]);
        var e = Rj(a.payload) || "";
        b && (Aj = new b);
        return new ve( (f, g) => {
            Aj && Aj.isReady() ? Zj(d, Aj, f, g, {
                bypassNetworkless: !0
            }, !0, e === "gelDebuggingEvent") : f()
        }
        )
    }
}
function Qj(a) {
    var b = "";
    if (a.dangerousLogToVisitorSession)
        b = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        b = a.cttAuthInfo;
        const c = {};
        b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId);
        Kj[a.cttAuthInfo.token] = c;
        b = a.cttAuthInfo.token
    }
    return b
}
function Wj(a={}, b=!1, c) {
    new ve( (d, e) => {
        const f = Vj(b, c)
          , g = f.j;
        f.j = !1;
        ak(f.i);
        ak(f.h);
        f.h = 0;
        Aj && Aj.isReady() ? c === void 0 && S("enable_web_tiered_gel") ? bk(d, e, a, b, 300, g) : bk(d, e, a, b, c, g) : (Yj(b, c),
        d())
    }
    )
}
function bk(a, b, c={}, d=!1, e=200, f=!1) {
    var g = Aj
      , h = new Map;
    const k = new Map
      , l = {
        isJspb: d,
        cttAuthInfo: void 0,
        tier: e
    }
      , n = {
        isJspb: d,
        cttAuthInfo: void 0
    };
    if (d) {
        for (const p of Object.keys(Mj))
            b = S("enable_web_tiered_gel") ? Nj().smartExtractMatchingEntries({
                keys: [l, n],
                sizeLimit: 1E3
            }) : Nj().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: p
            }),
            b.length > 0 && h.set(p, b),
            (S("web_fp_via_jspb_and_json") && c.writeThenSend || !S("web_fp_via_jspb_and_json")) && delete Mj[p];
        ck(h, g, a, c, f)
    } else {
        for (const p of Object.keys(Mj))
            h = S("enable_web_tiered_gel") ? Nj().smartExtractMatchingEntries({
                keys: [{
                    isJspb: !1,
                    cttAuthInfo: p,
                    tier: e
                }, {
                    isJspb: !1,
                    cttAuthInfo: p
                }],
                sizeLimit: 1E3
            }) : Nj().extractMatchingEntries({
                isJspb: !1,
                cttAuthInfo: p
            }),
            h.length > 0 && k.set(p, h),
            (S("web_fp_via_jspb_and_json") && c.writeThenSend || !S("web_fp_via_jspb_and_json")) && delete Mj[p];
        Zj(k, g, a, b, c, !1, f)
    }
}
function Yj(a=!1, b=200) {
    const c = () => {
        Wj({
            writeThenSend: !0
        }, a, b)
    }
      , d = Vj(a, b);
    var e = d === Fj || d === Ej ? 5E3 : yj;
    S("web_gel_timeout_cap") && !d.h && (e = Xj( () => {
        c()
    }
    , e),
    d.h = e);
    ak(d.i);
    e = R("LOGGING_BATCH_TIMEOUT", T("web_gel_debounce_ms", 1E4));
    S("shorten_initial_gel_batch_timeout") && Hj && (e = xj);
    e = Xj( () => {
        T("gel_min_batch_size") > 0 ? Nj().getSequenceCount({
            cttAuthInfo: void 0,
            isJspb: a,
            tier: b
        }) >= zj && c() : c()
    }
    , e);
    d.i = e
}
function Zj(a, b, c, d, e={}, f, g) {
    const h = Math.round(W());
    let k = a.size;
    const l = dk(g);
    for (const [n,p] of a) {
        a = n;
        g = p;
        const q = Xd({
            context: gi(b.config_ || fi())
        });
        if (!ia(g) && !S("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        q.events = g;
        (g = Kj[a]) && ek(q, a, g);
        delete Kj[a];
        const m = a === "visitorOnlyApprovedKey";
        fk(q, h, m);
        gk(e);
        const u = H => {
            S("start_client_gcf") && Eg.h( () => t(function*() {
                yield hk(H)
            }));
            k--;
            k || c()
        }
        ;
        let z = 0;
        const y = () => {
            z++;
            if (e.bypassNetworkless && z === 1)
                try {
                    Ei(b, l, q, ik({
                        writeThenSend: !0
                    }, m, u, y, f)),
                    Hj = !1
                } catch (H) {
                    Kf(H),
                    d()
                }
            k--;
            k || c()
        }
        ;
        try {
            Ei(b, l, q, ik(e, m, u, y, f)),
            Hj = !1
        } catch (H) {
            Kf(H),
            d()
        }
    }
}
function ck(a, b, c, d={}, e) {
    const f = Math.round(W())
      , g = {
        value: a.size
    };
    var h = new Map([...a]);
    for (const [z] of h) {
        var k = z
          , l = a.get(k);
        h = new mf;
        var n = b.config_ || fi()
          , p = new hf
          , q = new $e;
        K(q, 1, n.ma);
        K(q, 2, n.la);
        md(q, 16, n.Ha);
        K(q, 17, n.innertubeContextClientVersion);
        if (n.X) {
            var m = n.X
              , u = new Ye;
            m.coldConfigData && K(u, 1, m.coldConfigData);
            m.appInstallData && K(u, 6, m.appInstallData);
            m.coldHashData && K(u, 3, m.coldHashData);
            m.hotHashData && K(u, 5, m.hotHashData);
            J(q, Ye, 62, u)
        }
        if ((m = v.devicePixelRatio) && m != 1) {
            if (m != null && typeof m !== "number")
                throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);
            Wc(q, 65, m)
        }
        m = Zf();
        m !== "" && K(q, 54, m);
        m = $f();
        if (m.length > 0) {
            u = new df;
            for (let y = 0; y < m.length; y++) {
                const H = new af;
                K(H, 1, m[y].key);
                ld(H, 2, bf, m[y].value);
                gd(u, 15, af, H)
            }
            J(p, df, 5, u)
        }
        hi(p);
        ii(n, q);
        S("start_client_gcf") && ji(q);
        R("DELEGATED_SESSION_ID") && !S("pageid_as_header_web") && (n = new gf,
        K(n, 3, R("DELEGATED_SESSION_ID")));
        !S("fill_delegate_context_in_gel_killswitch") && (m = R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (u = dd(p, gf, 3) || new gf,
        n = p,
        m = K(u, 18, m),
        J(n, gf, 3, m));
        n = q;
        m = R("DEVICE", "");
        for (const [y,H] of Object.entries(Rf(m)))
            m = y,
            u = H,
            m === "cbrand" ? K(n, 12, u) : m === "cmodel" ? K(n, 13, u) : m === "cbr" ? K(n, 87, u) : m === "cbrver" ? K(n, 88, u) : m === "cos" ? K(n, 18, u) : m === "cosver" ? K(n, 19, u) : m === "cplatform" && md(n, 42, wg(u));
        p.j(q);
        J(h, hf, 1, p);
        if (q = Lj[k])
            a: {
                if (id(q, 1))
                    p = 1;
                else if (q.getPlaylistId())
                    p = 2;
                else
                    break a;
                J(h, lf, 4, q);
                q = dd(h, hf, 1) || new hf;
                n = dd(q, gf, 3) || new gf;
                m = new ff;
                m.setToken(k);
                md(m, 1, p);
                gd(n, 12, ff, m);
                J(q, gf, 3, n)
            }
        delete Lj[k];
        k = k === "visitorOnlyApprovedKey";
        jk() || Wc(h, 2, f == null ? f : oc(f));
        !k && (p = R("EVENT_ID")) && (q = kk(),
        n = new kf,
        K(n, 1, p),
        Wc(n, 2, q == null ? q : oc(q)),
        J(h, kf, 5, n));
        gk(d);
        if (S("jspb_serialize_with_worker")) {
            if (!qj)
                a: {
                    p = R("WORKER_SERIALIZATION_URL");
                    if (!p) {
                        qj = null;
                        break a
                    }
                    (p = p.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) ? (sa === void 0 && (sa = ta()),
                    p = (q = sa) ? q.createScriptURL(p) : p,
                    p = new ua(p)) : p = null;
                    qj = p
                }
            q = qj || void 0;
            if (!pj && q !== void 0) {
                p = Worker;
                if (q instanceof ua)
                    q = q.h;
                else
                    throw Error("");
                pj = new p(q,void 0)
            }
            if ((p = pj) && d.writeThenSend) {
                Jj.set(Ij, {
                    client: b,
                    resolve: c,
                    networklessOptions: d,
                    isIsolated: !1,
                    useVSSEndpoint: e,
                    dangerousLogToVisitorSession: k,
                    requestsOutstanding: g
                });
                a = p;
                b = a.postMessage;
                c = Fc(h);
                b.call(a, {
                    op: "gelBatchToSerialize",
                    batchRequest: c,
                    clientEvents: l,
                    key: Ij
                });
                Ij++;
                break
            }
        }
        if (l) {
            p = [];
            for (q = 0; q < l.length; q++)
                try {
                    p.push(new jf(l[q]))
                } catch (y) {
                    Kf(new O("Transport failed to deserialize " + String(l[q])))
                }
            l = p
        } else
            l = [];
        for (const y of l)
            gd(h, 3, jf, y);
        l = {
            startTime: W(),
            ticks: {},
            infos: {}
        };
        h = JSON.stringify(Fc(h));
        l.ticks.geljspc = W();
        S("log_jspb_serialize_latency") && Math.random() < .001 && si("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            timelineData: l
        });
        lk(h, b, c, d, e, k, g)
    }
}
function lk(a, b, c, d={}, e, f, g={
    value: 0
}) {
    e = dk(e);
    d = ik(d, f, h => {
        S("start_client_gcf") && Eg.h( () => t(function*() {
            yield hk(h)
        }));
        g.value--;
        g.value || c()
    }
    , () => {
        g.value--;
        g.value || c()
    }
    , !1);
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    Ei(b, e, "", d);
    Hj = !1
}
function gk(a) {
    S("always_send_and_write") && (a.writeThenSend = !1)
}
function ik(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        networklessOptions: a,
        dangerousLogToVisitorSession: b,
        Db: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: S("compress_gel") || S("compress_gel_lr")
    };
    jk() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
    return a
}
function fk(a, b, c) {
    jk() || (a.requestTimeMs = String(b));
    S("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = R("EVENT_ID")) && (c = kk(),
    a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}
function kk() {
    let a = R("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * 65535 / 2));
    a++;
    a > 65535 && (a = 1);
    Q("BATCH_CLIENT_COUNTER", a);
    return a
}
function ek(a, b, c) {
    let d;
    if (c.videoId)
        d = "VIDEO";
    else if (c.playlistId)
        d = "PLAYLIST";
    else
        return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}
function Pj() {
    var a = Yf("il_payload_scraping");
    a = (a !== void 0 ? String(a) : "") === "enable_il_payload_scraping";
    !w("yt.logging.transport.enableScrapingForTest") && a && (oj = [],
    x("yt.logging.transport.enableScrapingForTest", !0),
    x("yt.logging.transport.scrapedPayloadsForTesting", oj),
    x("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),
    x("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
    x("yt.logging.transport.scrapeClientEvent", !0))
}
function jk() {
    return S("use_request_time_ms_header") || S("lr_use_request_time_ms_header")
}
function Xj(a, b) {
    return S("transport_use_scheduler") === !1 ? Vf(a, b) : S("logging_avoid_blocking_during_navigation") || S("lr_logging_avoid_blocking_during_navigation") ? yg( () => {
        lj().currentState === "none" ? a() : lj().install({
            none: {
                callback: a
            }
        })
    }
    , b) : yg(a, b)
}
function ak(a) {
    S("transport_use_scheduler") ? Eg.O(a) : window.clearTimeout(a)
}
function hk(a) {
    return t(function*() {
        var b, c = a == null ? void 0 : (b = a.responseContext) == null ? void 0 : b.globalConfigGroup;
        b = vj(c, We);
        var d = c == null ? void 0 : c.hotHashData;
        const e = vj(c, Ve)
          , f = c == null ? void 0 : c.coldHashData
          , g = Ri().resolve(new Ji(di));
        g && (d && (b ? yield bi(g, d, b) : yield bi(g, d)),
        f && (e ? yield ci(g, f, e) : yield ci(g, f)));
        b = c == null ? void 0 : c.rawFinchStaticConfigGroup;
        (c = c == null ? void 0 : c.finchStaticHashData) ? (d = Ri().resolve(new Ji(wj))) ? yield d.Sb({
            config: b || {},
            Gb: c || ""
        }) : (b || c) && Lf(new O("FinchConfigManagerService is not present, but Finch config data is present.")) : b && Lf(new O("Finch config data is present, but hash is missing."))
    })
}
function Vj(a, b=200) {
    return a ? b === 300 ? Fj : Dj : b === 300 ? Ej : Cj
}
function Rj(a) {
    a = Object.keys(a);
    for (const b of a)
        if (zi[b])
            return b
}
function Sj(a) {
    switch (a) {
    case "DELAYED_EVENT_TIER_UNSPECIFIED":
        return 0;
    case "DELAYED_EVENT_TIER_DEFAULT":
        return 100;
    case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
        return 200;
    case "DELAYED_EVENT_TIER_FAST":
        return 300;
    case "DELAYED_EVENT_TIER_IMMEDIATE":
        return 400;
    default:
        return 200
    }
}
function dk(a=!1) {
    return a && S("vss_through_gel_video_stats") ? "video_stats" : "log_event"
}
;const mk = v.ytLoggingGelSequenceIdObj_ || {};
function nk(a, b, c, d={}) {
    const e = {}
      , f = Math.round(d.timestamp || W());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = w("_lact", window);
    a = a == null ? -1 : Math.max(Date.now() - a, 0);
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !S("web_gel_sequence_info_killswitch") && (a = e.context,
    b = d.sequenceGroup,
    mk[b] = b in mk ? mk[b] + 1 : 0,
    a.sequence = {
        index: mk[b],
        groupKey: b
    },
    d.endOfSequence && delete mk[d.sequenceGroup]);
    S("web_tag_automated_log_events") && (e.context.automatedLogEventSource = d.automatedLogEventSource);
    (d.sendIsolatedPayload ? Tj : Oj)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}
function ok(a=!1) {
    Wj(void 0, a)
}
;let pk = [];
function Y(a, b, c={}) {
    let d = Fi;
    R("ytLoggingEventsDefaultDisabled", !1) && Fi === Fi && (d = null);
    nk(a, b, d, c)
}
;var qk = new Set
  , rk = 0
  , sk = 0
  , tk = 0
  , uk = [];
const vk = []
  , wk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];
function xk(a) {
    yk(a)
}
function zk(a) {
    yk(a, "WARNING")
}
function yk(a, b="ERROR") {
    var c = {};
    c.name = R("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = R("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Ak(a, c, b)
}
function Ak(a, b, c="ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (S("console_log_js_exceptions") || ["test", "dev", "autopush", "staging"].includes(R("SERVER_VERSION"))) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(rk >= 5)) {
            d = [];
            for (e of vk)
                try {
                    e() && d.push(e())
                } catch (u) {}
            var e = d;
            e = [...uk, ...e];
            var f = Ba(a);
            d = f.message || "Unknown Error";
            const q = f.name || "UnknownError";
            var g = f.stack || a.i || "Not available";
            if (g.startsWith(`${q}: ${d}`)) {
                var h = g.split("\n");
                h.shift();
                g = h.join("\n")
            }
            h = f.lineNumber || "Not available";
            f = f.fileName || "Not available";
            let m = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var k = 0; k < a.args.length && !(m = pg(a.args[k], `params.${k}`, b, m),
                m >= 500); k++)
                    ;
            else if (a.hasOwnProperty("params") && a.params) {
                const u = a.params;
                if (typeof a.params === "object")
                    for (k in u) {
                        if (!u[k])
                            continue;
                        const z = `params.${k}`
                          , y = rg(u[k]);
                        b[z] = y;
                        m += z.length + y.length;
                        if (m > 500)
                            break
                    }
                else
                    b.params = rg(u)
            }
            if (e.length)
                for (k = 0; k < e.length && !(m = pg(e[k], `params.context.${k}`, b, m),
                m >= 500); k++)
                    ;
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: d,
                name: q,
                lineNumber: h,
                fileName: f,
                stack: g,
                params: b,
                sampleWeight: 1
            };
            k = Number(a.columnNumber);
            isNaN(k) || (b.lineNumber = `${b.lineNumber}:${k}`);
            if (a.level === "IGNORED")
                var l = 0;
            else
                a: {
                    a = ig();
                    for (l of a.D)
                        if (b.message && b.message.match(l.Ma)) {
                            l = l.weight;
                            break a
                        }
                    for (var n of a.C)
                        if (n.callback(b)) {
                            l = n.weight;
                            break a
                        }
                    l = 1
                }
            b.sampleWeight = l;
            l = b;
            for (var p of eg) {
                if (!p.R[l.name])
                    continue;
                n = p.R[l.name];
                for (const u of n) {
                    n = l.message.match(u.v);
                    if (!n)
                        continue;
                    l.params["params.error.original"] = n[0];
                    a = u.groups;
                    b = {};
                    for (k = 0; k < a.length; k++)
                        b[a[k]] = n[k + 1],
                        l.params[`params.error.${a[k]}`] = n[k + 1];
                    l.message = p.Z(b);
                    break
                }
            }
            l.params || (l.params = {});
            p = ig();
            l.params["params.errorServiceSignature"] = `msg=${p.D.length}&cb=${p.C.length}`;
            l.params["params.serviceWorker"] = "true";
            v.document && v.document.querySelectorAll && (l.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
            (new ae($d,"sample")).constructor !== ae && (l.params["params.fconst"] = "true");
            window.yterr && typeof window.yterr === "function" && window.yterr(l);
            l.sampleWeight === 0 || qk.has(l.message) || Bk(l, c)
        }
    }
}
function Bk(a, b="ERROR") {
    if (b === "ERROR") {
        mg.ca("handleError", a);
        if (S("record_app_crashed_web") && tk === 0 && a.sampleWeight === 1) {
            tk++;
            var c = {
                appCrashType: "APP_CRASH_TYPE_BREAKPAD"
            };
            S("report_client_error_with_app_crash_ks") || (c.systemHealth = {
                crashData: {
                    clientError: {
                        logMessage: {
                            message: a.message
                        }
                    }
                }
            });
            Y("appCrashed", c)
        }
        sk++
    } else
        b === "WARNING" && mg.ca("handleWarning", a);
    c = {};
    b: {
        for (e of wk) {
            var d = Sa();
            if (d && d.toLowerCase().indexOf(e.toLowerCase()) >= 0) {
                var e = !0;
                break b
            }
        }
        e = !1
    }
    if (e)
        c = void 0;
    else {
        d = {
            stackTrace: a.stack
        };
        a.fileName && (d.filename = a.fileName);
        e = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        e.length !== 0 && (e.length !== 1 || isNaN(Number(e[0])) ? e.length !== 2 || isNaN(Number(e[0])) || isNaN(Number(e[1])) || (d.lineNumber = Number(e[0]),
        d.columnNumber = Number(e[1])) : d.lineNumber = Number(e[0]));
        e = {
            level: "ERROR_LEVEL_UNKNOWN",
            message: a.message,
            errorClassName: a.name,
            sampleWeight: a.sampleWeight
        };
        b === "ERROR" ? e.level = "ERROR_LEVEL_ERROR" : b === "WARNING" && (e.level = "ERROR_LEVEL_WARNNING");
        d = {
            isObfuscated: !0,
            browserStackInfo: d
        };
        c.pageUrl = window.location.href;
        c.kvPairs = [];
        R("FEXP_EXPERIMENTS") && (c.experimentIds = R("FEXP_EXPERIMENTS"));
        var f = R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
        const k = Gf.EXPERIMENT_FLAGS;
        if ((!k || !k.web_disable_gel_stp_ecatcher_killswitch) && f)
            for (var g of Object.keys(f))
                c.kvPairs.push({
                    key: g,
                    value: String(f[g])
                });
        if (g = a.params)
            for (var h of Object.keys(g))
                c.kvPairs.push({
                    key: `client.${h}`,
                    value: String(g[h])
                });
        h = R("SERVER_NAME");
        g = R("SERVER_VERSION");
        h && g && (c.kvPairs.push({
            key: "server.name",
            value: h
        }),
        c.kvPairs.push({
            key: "server.version",
            value: g
        }));
        (h = R("PLAYER_CLIENT_VERSION")) && c.kvPairs.push({
            key: "client.player.version",
            value: h
        });
        c = {
            errorMetadata: c,
            stackTrace: d,
            logMessage: e
        }
    }
    if (c && (Y("clientError", c),
    b === "ERROR" || S("errors_flush_gel_always_killswitch")))
        a: {
            if (S("web_fp_via_jspb")) {
                b = pk;
                pk = [];
                if (b)
                    for (const k of b)
                        nk(k.M, k.payload, Fi, k.options);
                ok(!0);
                if (!S("web_fp_via_jspb_and_json"))
                    break a
            }
            ok()
        }
    try {
        qk.add(a.message)
    } catch (k) {}
    rk++
}
function Ck(a, ...b) {
    a.args || (a.args = []);
    Array.isArray(a.args) && a.args.push(...b)
}
;function Dk(a) {
    return t(function*() {
        var b = yield v.fetch(a.i);
        if (b.status !== 200)
            return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n"))
            return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === Cf.messageId) {
                    b = new Cf(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}
function Ek(a=!1) {
    const b = Fk.instance;
    return t(function*() {
        if (a || !b.h)
            b.h = Dk(b).then(b.j).catch(c => {
                delete b.h;
                yk(c)
            }
            );
        return b.h
    })
}
var Fk = class {
    constructor() {
        this.i = Gk("/sw.js_data")
    }
    j(a) {
        const b = dd(a, Bf, 2, Lb);
        if (b) {
            var c = hd(b, 5);
            c && (v.__SAPISID = c);
            F(G(b, 10)) != null ? Q("EOM_VISITOR_DATA", hd(b, 10)) : F(G(b, 7)) != null && Q("VISITOR_DATA", hd(b, 7));
            if (nc(G(b, 4)) != null) {
                c = String;
                let e;
                var d = (e = nc(G(b, 4))) != null ? e : 0;
                Q("SESSION_INDEX", c(d))
            }
            F(G(b, 8)) != null && Q("DELEGATED_SESSION_ID", hd(b, 8));
            F(G(b, 12)) != null && Q("USER_SESSION_ID", hd(b, 12));
            F(G(b, 11)) != null && Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", hd(b, 11))
        }
        return a
    }
}
;
function Hk(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b,
    typeof b.expirationSeconds === "string" && setTimeout( () => {
        delete a.h[b.encryptedTokenJarContents]
    }
    , Number(b.expirationSeconds) * 1E3))
}
var Ik = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b)
            throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = ((c = b.F.context) == null ? void 0 : (d = c.request) == null ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = (e = a.responseContext) == null ? void 0 : e.consistencyTokenJar) {
            for (const f of b)
                delete this.h[f.encryptedTokenJarContents];
            Hk(this, a)
        }
    }
}
;
let Jk = Date.now().toString();
function Kk() {
    if (window.crypto && window.crypto.getRandomValues)
        try {
            var a = Array(16)
              , b = new Uint8Array(16);
            window.crypto.getRandomValues(b);
            for (var c = 0; c < a.length; c++)
                a[c] = b[c];
            return a
        } catch (d) {}
    a = Array(16);
    for (b = 0; b < 16; b++) {
        c = Date.now();
        for (let d = 0; d < c % 23; d++)
            a[b] = Math.random();
        a[b] = Math.floor(Math.random() * 256)
    }
    if (Jk)
        for (b = 1,
        c = 0; c < Jk.length; c++)
            a[b % 16] ^= a[(b - 1) % 16] / 4 ^ Jk.charCodeAt(c),
            b++;
    return a
}
;var Lk;
let Mk = v.ytLoggingDocDocumentNonce_;
if (!Mk) {
    const a = Kk()
      , b = [];
    for (let c = 0; c < a.length; c++)
        b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    Mk = b.join("")
}
Lk = Mk;
var Nk = {
    bb: 0,
    Ya: 1,
    ab: 2,
    nb: 3,
    cb: 4,
    zb: 5,
    ob: 6,
    wb: 7,
    tb: 8,
    ub: 9,
    sb: 10,
    mb: 11,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH",
    10: "PICTURE_IN_PICTURE",
    11: "MEDIA_CLIENT"
};
let Ok = 1;
function Pk(a) {
    return new Qk({
        trackingParams: a
    })
}
function Rk(a, b, c, d, e, f) {
    const g = Ok++;
    return new Qk({
        veType: a,
        veCounter: g,
        elementIndex: c,
        dataElement: b,
        youtubeData: d,
        jspbYoutubeData: e,
        loggingDirectives: f
    })
}
var Qk = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        this.h.trackingParams !== void 0 ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType,
        this.h.veCounter !== void 0 && (a.veCounter = this.h.veCounter),
        this.h.elementIndex !== void 0 && (a.elementIndex = this.h.elementIndex));
        this.h.dataElement !== void 0 && (a.dataElement = this.h.dataElement.getAsJson());
        this.h.youtubeData !== void 0 && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new cf;
        this.h.trackingParams !== void 0 ? a.setTrackingParams(this.h.trackingParams) : (this.h.veType !== void 0 && kd(a, 2, this.h.veType),
        this.h.veCounter !== void 0 && kd(a, 6, this.h.veCounter),
        this.h.elementIndex !== void 0 && kd(a, 3, this.h.elementIndex),
        this.h.isCounterfactual && Wc(a, 5, !0));
        if (this.h.dataElement !== void 0) {
            var b = this.h.dataElement.getAsJspb();
            J(a, cf, 7, b)
        }
        this.h.youtubeData !== void 0 && J(a, Xe, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams && !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
}
;
function Sk(a=0) {
    return R("client-screen-nonce-store", {})[a]
}
function Tk(a, b=0) {
    let c = R("client-screen-nonce-store");
    c || (c = {},
    Q("client-screen-nonce-store", c));
    c[b] = a
}
function Uk(a=0) {
    return a === 0 ? "ROOT_VE_TYPE" : `ROOT_VE_TYPE.${a}`
}
function Vk(a=0) {
    return R(Uk(a))
}
function Wk(a=0) {
    return (a = Vk(a)) ? new Qk({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}
function Xk() {
    let a = R("csn-to-ctt-auth-info");
    a || (a = {},
    Q("csn-to-ctt-auth-info", a));
    return a
}
function Yk() {
    return Object.values(R("client-screen-nonce-store", {})).filter(a => a !== void 0)
}
function Z(a=0) {
    a = Sk(a);
    if (!a && !R("USE_CSN_FALLBACK", !0))
        return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}
function Zk(a) {
    for (const b of Object.values(Nk))
        if (Z(b) === a)
            return !0;
    return !1
}
function $k(a, b, c) {
    const d = Xk();
    (c = Z(c)) && delete d[c];
    b && (d[a] = b)
}
function al(a) {
    return Xk()[a]
}
function bl(a, b, c=0, d) {
    if (a !== Sk(c) || b !== R(Uk(c)))
        if ($k(a, d, c),
        Tk(a, c),
        Q(Uk(c), b),
        b = () => {
            setTimeout( () => {
                a && Y("foregroundHeartbeatScreenAssociated", {
                    clientDocumentNonce: Lk,
                    clientScreenNonce: a
                })
            }
            , 0)
        }
        ,
        "requestAnimationFrame"in window)
            try {
                window.requestAnimationFrame(b)
            } catch (e) {
                b()
            }
        else
            b()
}
;function cl() {
    var a = R("INNERTUBE_CONTEXT");
    if (!a)
        return yk(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
        {};
    a = Xd(a);
    S("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = Zf();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    Ik.instance || (Ik.instance = new Ik);
    b = Ik.instance.h;
    c = [];
    let d = 0;
    for (var e in b)
        c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    if (e = R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))
        a.user.serializedDelegationContext = e;
    return a
}
;function dl(a) {
    var b = a;
    if (a = R("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String
          , d = b.match(Fa);
        b = d[5];
        var e = d[6];
        d = d[7];
        let f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
}
;function el(a) {
    const b = {
        "Content-Type": "application/json"
    };
    R("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = R("EOM_VISITOR_DATA") : R("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = R("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = R("LOGGED_IN", !1);
    R("DEBUG_SETTINGS_METADATA") && (b["X-Debug-Settings-Metadata"] = R("DEBUG_SETTINGS_METADATA"));
    a !== "cors" && ((a = R("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a),
    (a = R("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a),
    (a = R("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a),
    (a = R("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    (a = R("SERIALIZED_LAVA_DEVICE_CONTEXT")) && (b["X-YouTube-Lava-Device-Context"] = a);
    return b
}
;var fl = class {
    constructor() {
        this.h = {}
    }
    get(a) {
        if (Object.prototype.hasOwnProperty.call(this.h, a))
            return this.h[a]
    }
    set(a, b) {
        this.h[a] = b
    }
    remove(a) {
        delete this.h[a]
    }
}
;
new class {
    constructor() {
        this.mappings = new fl
    }
    get(a) {
        a: {
            var b = this.mappings.get(a.toString());
            switch (b.type) {
            case "mapping":
                a = b.value;
                break a;
            case "factory":
                b = b.value();
                this.mappings.set(a.toString(), {
                    type: "mapping",
                    value: b
                });
                a = b;
                break a;
            default:
                a = va(b, void 0)
            }
        }
        return a
    }
}
;
var gl = class {
}
  , hl = class extends gl {
}
;
const il = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends hl {
    }
    )
};
class ni extends li {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const vi = new mi
  , jl = [];
let ll = kl
  , ml = 0;
const nl = new Map
  , ol = new Map
  , pl = new Map;
function ql(a, b, c, d, e, f, g, h, k) {
    const l = ll();
    f = new Qk({
        veType: b,
        youtubeData: f,
        jspbYoutubeData: void 0
    });
    k = rl({
        automatedLogEventSource: k
    }, l);
    e && (k.cttAuthInfo = e);
    e = {
        csn: l,
        pageVe: f.getAsJson()
    };
    S("expectation_logging") && h && h.screenCreatedLoggingExpectations && (e.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations);
    c && c.visualElement ? (e.implicitGesture = {
        parentCsn: c.clientScreenNonce,
        gesturedVe: c.visualElement.getAsJson()
    },
    g && (e.implicitGesture.gestureType = g)) : c && zk(new O("newScreen() parent element does not have a VE - rootVe",b));
    d && (e.cloneCsn = d);
    a ? nk("screenCreated", e, a, k) : Y("screenCreated", e, k);
    si(vi, new ni(l));
    nl.clear();
    ol.clear();
    pl.clear();
    return l
}
function sl(a, b, c, d, e=!1, f={}) {
    tl(a, b, c, [d], e, f)
}
function tl(a, b, c, d, e=!1, f={}) {
    Object.assign(f, rl({
        cttAuthInfo: al(b) || void 0
    }, b));
    for (const h of d) {
        var g = h.getAsJson();
        (Wd(g) || !g.trackingParams && !g.veType) && zk(Error("Child VE logged with no data"));
        if (S("no_client_ve_attach_unless_shown")) {
            const k = ul(h, b);
            if (g.veType && !ol.has(k) && !pl.has(k) && !e) {
                if (!S("il_attach_cache_limit") || nl.size < 1E3) {
                    nl.set(k, [a, b, c, h]);
                    return
                }
                S("il_attach_cache_limit") && nl.size > 1E3 && zk(new O("IL Attach cache exceeded limit"))
            }
            g = ul(c, b);
            nl.has(g) ? vl(c, b) : pl.set(g, !0)
        }
    }
    d = d.filter(h => {
        h.csn !== b ? (h.csn = b,
        h = !0) : h = !1;
        return h
    }
    );
    c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: xa(d, h => h.getAsJson())
    };
    b === "UNDEFINED_CSN" ? wl("visualElementAttached", f, c) : a ? nk("visualElementAttached", c, a, f) : Y("visualElementAttached", c, f)
}
function xl(a, b, c, d, e, f, g) {
    yl(a, b, c, e, g)
}
function yl(a, b, c, d, e) {
    zl(c, b);
    e = rl({
        cttAuthInfo: al(b) || void 0,
        automatedLogEventSource: e
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    };
    d && (c.clientData = d);
    b === "UNDEFINED_CSN" ? wl("visualElementShown", e, c) : a ? nk("visualElementShown", c, a, e) : Y("visualElementShown", c, e)
}
function Al(a, b, c, d=!1, e, f) {
    const g = d ? 16 : 8;
    d = rl({
        cttAuthInfo: al(b) || void 0,
        endOfSequence: d,
        automatedLogEventSource: f
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        eventType: g
    };
    e && (c.clientData = e);
    b === "UNDEFINED_CSN" ? wl("visualElementHidden", d, c) : a ? nk("visualElementHidden", c, a, d) : Y("visualElementHidden", c, d)
}
function Bl(a, b, c, d) {
    var e = void 0;
    zl(c, b);
    e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = rl({
        cttAuthInfo: al(b) || void 0,
        automatedLogEventSource: void 0
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    };
    d && (c.clientData = d);
    b === "UNDEFINED_CSN" ? wl("visualElementGestured", f, c) : a ? nk("visualElementGestured", c, a, f) : Y("visualElementGestured", c, f)
}
function kl() {
    let a;
    a = Kk();
    const b = [];
    for (let c = 0; c < a.length; c++)
        b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
}
function wl(a, b, c) {
    jl.push({
        M: a,
        payload: c,
        Lb: void 0,
        options: b
    });
    ml || (ml = wi())
}
function xi(a) {
    if (jl) {
        for (const b of jl)
            b.payload && (b.payload.csn = a.csn,
            Y(b.M, b.payload, b.options));
        jl.length = 0
    }
    ml = 0
}
function ul(a, b) {
    return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`
}
function zl(a, b) {
    if (S("no_client_ve_attach_unless_shown")) {
        var c = ul(a, b);
        ol.set(c, !0);
        vl(a, b)
    }
}
function vl(a, b) {
    a = ul(a, b);
    nl.has(a) && (b = nl.get(a) || [],
    sl(b[0], b[1], b[2], b[3], !0),
    nl.delete(a))
}
function rl(a, b) {
    S("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
    return a
}
;Object.assign({
    auto_search: "LATENCY_ACTION_AUTO_SEARCH",
    ad_to_ad: "LATENCY_ACTION_AD_TO_AD",
    ad_to_video: "LATENCY_ACTION_AD_TO_VIDEO",
    app_startup: "LATENCY_ACTION_APP_STARTUP",
    browse: "LATENCY_ACTION_BROWSE",
    cast_splash: "LATENCY_ACTION_CAST_SPLASH",
    call_to_cast: "LATENCY_ACTION_CALL_TO_CAST",
    channel_activity: "LATENCY_ACTION_FAMILY_CENTER_CHANNEL_ACTIVITY",
    channels: "LATENCY_ACTION_CHANNELS",
    chips: "LATENCY_ACTION_CHIPS",
    commerce_transaction: "LATENCY_ACTION_COMMERCE_TRANSACTION",
    direct_playback: "LATENCY_ACTION_DIRECT_PLAYBACK",
    editor: "LATENCY_ACTION_EDITOR",
    embed: "LATENCY_ACTION_EMBED",
    embed_no_video: "LATENCY_ACTION_EMBED_NO_VIDEO",
    entity_key_serialization_perf: "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",
    entity_key_deserialization_perf: "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",
    explore: "LATENCY_ACTION_EXPLORE",
    favorites: "LATENCY_ACTION_FAVORITES",
    home: "LATENCY_ACTION_HOME",
    inboarding: "LATENCY_ACTION_INBOARDING",
    landing: "LATENCY_ACTION_LANDING",
    learning: "LATENCY_ACTION_LEARNING",
    learning_journey_browse: "LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",
    learning_journey_watch: "LATENCY_ACTION_LEARNING_JOURNEY_WATCH",
    library: "LATENCY_ACTION_LIBRARY",
    live: "LATENCY_ACTION_LIVE",
    live_pagination: "LATENCY_ACTION_LIVE_PAGINATION",
    management: "LATENCY_ACTION_MANAGEMENT",
    mini_app: "LATENCY_ACTION_MINI_APP_PLAY",
    notification_settings: "LATENCY_ACTION_FAMILY_CENTER_NOTIFICATION_SETTINGS",
    onboarding: "LATENCY_ACTION_ONBOARDING",
    parent_profile_settings: "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
    parent_tools_collection: "LATENCY_ACTION_PARENT_TOOLS_COLLECTION",
    parent_tools_dashboard: "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",
    player_att: "LATENCY_ACTION_PLAYER_ATTESTATION",
    prebuffer: "LATENCY_ACTION_PREBUFFER",
    prefetch: "LATENCY_ACTION_PREFETCH",
    profile_settings: "LATENCY_ACTION_KIDS_PROFILE_SETTINGS",
    profile_switcher: "LATENCY_ACTION_LOGIN",
    projects: "LATENCY_ACTION_PROJECTS",
    reel_watch: "LATENCY_ACTION_REEL_WATCH",
    results: "LATENCY_ACTION_RESULTS",
    red: "LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",
    premium: "LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",
    premium_lite_upsell: "LATENCY_ACTION_PREMIUM_LITE_UPSELL",
    privacy_policy: "LATENCY_ACTION_FAMILY_CENTER_PRIVACY_POLICY",
    review: "LATENCY_ACTION_REVIEW",
    search_overview_answer: "LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",
    search_ui: "LATENCY_ACTION_SEARCH_UI",
    search_suggest: "LATENCY_ACTION_SUGGEST",
    search_zero_state: "LATENCY_ACTION_SEARCH_ZERO_STATE",
    secret_code: "LATENCY_ACTION_KIDS_SECRET_CODE",
    switchplan: "LATENCY_ACTION_UNPLUGGED_SWITCH_PLAN",
    seek: "LATENCY_ACTION_PLAYER_SEEK",
    settings: "LATENCY_ACTION_SETTINGS",
    store: "LATENCY_ACTION_STORE",
    supervision_dashboard: "LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_DASHBOARD",
    bedtime_reminder_settings: "LATENCY_ACTION_FAMILY_CENTER_BEDTIME_REMINDER_SETTINGS",
    break_reminder_settings: "LATENCY_ACTION_FAMILY_CENTER_BREAK_REMINDER_SETTINGS",
    supervision_settings_dashboard: "LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_SETTINGS_DASHBOARD",
    time_management: "LATENCY_ACTION_FAMILY_CENTER_TIME_MANAGEMENT",
    update_profile: "LATENCY_ACTION_FAMILY_CENTER_UPDATE_PROFILE",
    viewing_permissions: "LATENCY_ACTION_FAMILY_CENTER_VIEWING_PERMISSIONS",
    shorts_settings: "LATENCY_ACTION_FAMILY_CENTER_SHORTS_SETTINGS",
    privacy_settings: "LATENCY_ACTION_FAMILY_CENTER_PRIVACY_SETTINGS",
    tenx: "LATENCY_ACTION_TENX",
    video_preview: "LATENCY_ACTION_VIDEO_PREVIEW",
    video_to_ad: "LATENCY_ACTION_VIDEO_TO_AD",
    watch: "LATENCY_ACTION_WATCH",
    watch_it_again: "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",
    "watch,watch7": "LATENCY_ACTION_WATCH",
    "watch,watch7_html5": "LATENCY_ACTION_WATCH",
    "watch,watch7ad": "LATENCY_ACTION_WATCH",
    "watch,watch7ad_html5": "LATENCY_ACTION_WATCH",
    wn_comments: "LATENCY_ACTION_LOAD_COMMENTS",
    ww_rqs: "LATENCY_ACTION_WHO_IS_WATCHING",
    voice_assistant: "LATENCY_ACTION_VOICE_ASSISTANT",
    cast_load_by_entity_to_watch: "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
    networkless_performance: "LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
    gel_compression: "LATENCY_ACTION_GEL_COMPRESSION",
    gel_jspb_serialize: "LATENCY_ACTION_GEL_JSPB_SERIALIZE",
    attestation_challenge_fetch: "LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"
}, {
    "analytics.explore": "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",
    "artist.analytics": "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",
    "artist.events": "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",
    "artist.presskit": "LATENCY_ACTION_CREATOR_ARTIST_PROFILE",
    "asset.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
    "asset.composition": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",
    "asset.composition_ownership": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",
    "asset.composition_policy": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",
    "asset.embeds": "LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",
    "asset.history": "LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",
    "asset.issues": "LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",
    "asset.licenses": "LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",
    "asset.metadata": "LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",
    "asset.ownership": "LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",
    "asset.potential_embeds": "LATENCY_ACTION_CREATOR_CMS_ASSET_POTENTIAL_EMBEDS",
    "asset.policy": "LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",
    "asset.references": "LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
    "asset.shares": "LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",
    "asset.sound_recordings": "LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",
    "asset_group.assets": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",
    "asset_group.campaigns": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
    "asset_group.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
    "asset_group.metadata": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",
    "song.analytics": "LATENCY_ACTION_CREATOR_SONG_ANALYTICS",
    creator_channel_dashboard: "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
    "channel.analytics": "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
    channel_appeal: "LATENCY_ACTION_CREATOR_CHANNEL_APPEAL",
    "channel.comments": "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
    "channel.content": "LATENCY_ACTION_CREATOR_CONTENT",
    "channel.content.posts": "LATENCY_ACTION_CREATOR_POST_LIST",
    "channel.content.promotions": "LATENCY_ACTION_CREATOR_PROMOTION_LIST",
    "channel.copyright": "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",
    "channel.editing": "LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
    "channel.monetization": "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
    "channel.music": "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",
    "channel.music_storefront": "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
    "channel.playlists": "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
    "channel.translations": "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
    "channel.videos": "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
    "channel.live_streaming": "LATENCY_ACTION_CREATOR_LIVE_STREAMING",
    "dialog.copyright_strikes": "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
    "dialog.video_copyright": "LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
    "dialog.uploads": "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
    owner: "LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
    "owner.allowlist": "LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
    "owner.analytics": "LATENCY_ACTION_CREATOR_CMS_ANALYTICS",
    "owner.art_tracks": "LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",
    "owner.assets": "LATENCY_ACTION_CREATOR_CMS_ASSETS",
    "owner.asset_groups": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",
    "owner.bulk": "LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",
    "owner.campaigns": "LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",
    "owner.channel_invites": "LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
    "owner.channels": "LATENCY_ACTION_CREATOR_CMS_CHANNELS",
    "owner.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",
    "owner.claims": "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
    "owner.claims.manual": "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
    "owner.delivery": "LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
    "owner.delivery_templates": "LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
    "owner.issues": "LATENCY_ACTION_CREATOR_CMS_ISSUES",
    "owner.licenses": "LATENCY_ACTION_CREATOR_CMS_LICENSES",
    "owner.pitch_music": "LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",
    "owner.policies": "LATENCY_ACTION_CREATOR_CMS_POLICIES",
    "owner.releases": "LATENCY_ACTION_CREATOR_CMS_RELEASES",
    "owner.reports": "LATENCY_ACTION_CREATOR_CMS_REPORTS",
    "owner.videos": "LATENCY_ACTION_CREATOR_CMS_VIDEOS",
    "playlist.videos": "LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
    "post.comments": "LATENCY_ACTION_CREATOR_POST_COMMENTS",
    "post.edit": "LATENCY_ACTION_CREATOR_POST_EDIT",
    "promotion.edit": "LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
    "video.analytics": "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
    "video.claims": "LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",
    "video.comments": "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
    "video.copyright": "LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",
    "video.edit": "LATENCY_ACTION_CREATOR_VIDEO_EDIT",
    "video.editor": "LATENCY_ACTION_CREATOR_VIDEO_EDITOR",
    "video.editor_async": "LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC",
    "video.live_settings": "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",
    "video.live_streaming": "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",
    "video.monetization": "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
    "video.policy": "LATENCY_ACTION_CREATOR_VIDEO_POLICY",
    "video.rights_management": "LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",
    "video.translations": "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS"
});
x("ytLoggingLatencyUsageStats_", v.ytLoggingLatencyUsageStats_ || {});
const Cl = window;
class Dl {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {}
        ;
        this.webkitClearResourceTimings = () => {}
        ;
        this.mozClearResourceTimings = () => {}
        ;
        this.msClearResourceTimings = () => {}
        ;
        this.oClearResourceTimings = () => {}
    }
}
var El = Cl.performance || Cl.mozPerformance || Cl.msPerformance || Cl.webkitPerformance || new Dl;
ma(El.clearResourceTimings || El.webkitClearResourceTimings || El.mozClearResourceTimings || El.msClearResourceTimings || El.oClearResourceTimings || Vd, El);
const Fl = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse", "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse", "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PanelResponse"];
function Gl(a) {
    var b = {
        Fb: {}
    }
      , c = sg();
    if (Mi.instance !== void 0) {
        const d = Mi.instance;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e))
            throw new O("InnerTubeTransportService is already initialized",a);
    } else
        Mi.instance = new Mi(b,a,c)
}
function Hl(a, b) {
    return t(function*() {
        var c;
        const d = a == null ? void 0 : (c = a.ha) == null ? void 0 : c.sessionIndex;
        c = yield Ae(ug(0, {
            sessionIndex: d
        }));
        return Promise.resolve(Object.assign({}, el(b), c))
    })
}
function Il(a, b, c, d= () => {}
) {
    return t(function*() {
        var e;
        if ((e = a.i) == null ? 0 : e.ac(b.input, b.F))
            return yield a.i.Nb(b.input, b.F);
        yield Jl(b);
        var f;
        if ((e = (f = b.config) == null ? void 0 : f.requestKey) && a.h.has(e))
            var g = a.h.get(e);
        else {
            f = JSON.stringify(b.F);
            let n;
            const p = (n = (g = b.N) == null ? void 0 : g.headers) != null ? n : {};
            b.N = Object.assign({}, b.N, {
                headers: Object.assign({}, p, c)
            });
            g = Object.assign({}, b.N);
            b.N.method === "POST" && (g = Object.assign({}, g, {
                body: f
            }));
            g = a.l.fetch(b.input, g, b.config);
            e && a.h.set(e, g)
        }
        (g = yield g) && S("web_streaming_player") && Array.isArray(g) && (g = g[0].playerResponse);
        var h;
        let k;
        if (g && "error"in g && ((h = g) == null ? 0 : (k = h.error) == null ? 0 : k.details)) {
            h = g.error.details;
            for (const n of h)
                (h = n["@type"]) && Fl.indexOf(h) > -1 && (delete n["@type"],
                g = n)
        }
        e && a.h.has(e) && a.h.delete(e);
        let l;
        !g && ((l = a.i) == null ? 0 : l.Eb(b.input, b.F)) && (g = yield a.i.Mb(b.input, b.F));
        d();
        return g || void 0
    })
}
function Kl(a, b, c) {
    var d = {
        ha: {
            identity: vg
        }
    };
    let e = () => {}
    ;
    b.context || (b.context = cl());
    return new ve(f => t(function*() {
        var g = dl(c);
        g = Uf(g) ? "same-origin" : "cors";
        if (a.j.Ra) {
            var h, k = d == null ? void 0 : (h = d.ha) == null ? void 0 : h.sessionIndex;
            h = ug(0, {
                sessionIndex: k
            });
            g = Object.assign({}, el(g), h)
        } else
            g = yield Hl(d, g);
        h = dl(c);
        k = {};
        S("json_condensed_response") && (k.prettyPrint = "false");
        h = Tf(h, k || {}, !1);
        k = {
            method: "POST",
            mode: Uf(h) ? "same-origin" : "cors",
            credentials: Uf(h) ? "same-origin" : "include"
        };
        var l = {};
        const n = {};
        for (const p of Object.keys(l))
            l[p] && (n[p] = l[p]);
        Object.keys(n).length > 0 && (k.headers = n);
        f(Il(a, {
            input: h,
            N: k,
            F: b,
            config: d
        }, g, e))
    }))
}
function Jl(a) {
    return t(function*() {
        var b;
        if (a == null ? 0 : (b = a.F) == null ? 0 : b.context) {
            b = a.F.context;
            for (const c of [])
                yield c.Tb(b)
        }
    })
}
var Mi = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.da || (a.da = {});
        a.da = Object.assign({}, il, a.da)
    }
}
;
var Li = new Ii("INNERTUBE_TRANSPORT_TOKEN");
let Ll;
function Ml() {
    if (!Ll) {
        const a = Ri();
        Gl({
            fetch: (b, c) => Ae(fetch(new Request(b,c)))
        });
        Ki(a);
        Ll = a.resolve(Li)
    }
    return Ll
}
;function Nl(a) {
    return t(function*() {
        yield Ol();
        zk(a)
    })
}
function Pl(a) {
    return t(function*() {
        yield Ol();
        yk(a)
    })
}
function Ql(a) {
    t(function*() {
        var b = yield Lh();
        b ? yield Di(a, b) : (yield Ek(),
        b = {
            timestamp: a.timestamp
        },
        b = a.appShellAssetLoadReport ? {
            M: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            M: "clientError",
            payload: a.clientError,
            options: b
        } : void 0,
        b && Y(b.M, b.payload))
    })
}
function Ol() {
    return t(function*() {
        try {
            yield Ek()
        } catch (a) {}
    })
}
;var Rl = Symbol("trackingData")
  , Sl = new WeakMap;
function Tl() {
    Ul.instance || (Ul.instance = new Ul);
    return Ul.instance
}
function Vl(a) {
    const b = Wl(a);
    let c, d;
    if (S("il_use_view_model_logging_context") && (b == null ? 0 : (c = b.context) == null ? 0 : (d = c.loggingContext) == null ? 0 : d.loggingDirectives))
        return b.context.loggingContext.loggingDirectives.trackingParams || "";
    let e, f;
    if (b == null ? 0 : (e = b.rendererContext) == null ? 0 : (f = e.loggingContext) == null ? 0 : f.loggingDirectives)
        return b.rendererContext.loggingContext.loggingDirectives.trackingParams || "";
    if (b == null ? 0 : b.loggingDirectives)
        return b.loggingDirectives.trackingParams || "";
    let g;
    return ((g = a.veContainer) == null ? 0 : g.trackingParams) ? a.veContainer.trackingParams : (b == null ? void 0 : b.trackingParams) || ""
}
function Xl(a, b, c) {
    const d = Z(c);
    return a.csn === null || d === a.csn || c ? d : (a = new O("VisibilityLogger called before newScreen",{
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }),
    zk(a),
    null)
}
function Yl(a) {
    let b;
    return !((b = Wl(a)) == null || !b.loggingDirectives)
}
function Zl(a) {
    a = Wl(a);
    return Math.floor(Number(a && a.loggingDirectives && a.loggingDirectives.visibility && a.loggingDirectives.visibility.types || "")) || 1
}
function Wl(a) {
    let b, c = a.data || ((b = a.props) == null ? void 0 : b.data);
    if (!c || a.isWebComponentWrapper) {
        let d;
        c = (d = Sl.get(a)) == null ? void 0 : d[Rl]
    }
    return c
}
var Ul = class {
    constructor() {
        this.l = new Set;
        this.i = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    m() {
        this.clear();
        this.csn = Z()
    }
    clear() {
        this.l.clear();
        this.i.clear();
        this.h.clear();
        this.csn = null
    }
    A(a, b, c, d) {
        var e = Vl(a)
          , f = a.visualElement ? a.visualElement : e;
        b = this.l.has(f);
        const g = this.h.get(f);
        this.l.add(f);
        this.h.set(f, !0);
        a.impressionLog && !b && a.impressionLog();
        if (e || a.visualElement)
            if (c = Xl(this, a, c)) {
                var h = Yl(a);
                if (Zl(a) || h) {
                    f = a.visualElement ? a.visualElement : Pk(e);
                    a.interactionLoggingClientData || (a.interactionLoggingClientData = {});
                    e = a.interactionLoggingClientData;
                    if (S("web_attention_logging_export_to_gel")) {
                        if (a === window)
                            var k = {
                                x: 0,
                                y: 0,
                                width: window.innerWidth,
                                height: window.innerHeight,
                                scrollTop: window.scrollY,
                                scrollLeft: window.scrollX
                            };
                        else
                            k = a.getBoundingClientRect(),
                            k = {
                                x: k.left,
                                y: k.top,
                                width: k.width,
                                height: k.height,
                                scrollTop: a.scrollTop,
                                scrollLeft: a.scrollLeft
                            };
                        e.viewData = {
                            originXPoints: Math.round(k.x),
                            originYPoints: Math.round(k.y),
                            widthPoints: Math.round(k.width),
                            heightPoints: Math.round(k.height)
                        }
                    }
                    h || b ? Zl(a) & 4 ? g || (a = this.client,
                    zl(f, c),
                    d = rl({
                        cttAuthInfo: al(c) || void 0,
                        automatedLogEventSource: void 0
                    }, c),
                    b = {
                        csn: c,
                        ve: f.getAsJson(),
                        eventType: 4
                    },
                    e && (b.clientData = e),
                    c === "UNDEFINED_CSN" ? wl("visualElementShown", d, b) : a ? nk("visualElementShown", b, a, d) : Y("visualElementShown", b, d)) : Zl(a) & 1 && !b && yl(this.client, c, f, e, d) : yl(this.client, c, f, e, d)
                }
            }
    }
    u(a, b, c, d) {
        var e = Vl(a);
        const f = a.visualElement ? a.visualElement : e;
        b = this.i.has(f);
        const g = this.h.get(f);
        this.i.add(f);
        this.h.set(f, !1);
        if (g === !1)
            return !0;
        if (!e && !a.visualElement)
            return !1;
        c = Xl(this, a, c);
        if (!c || !Zl(a) && Yl(a))
            return !1;
        e = a.visualElement ? a.visualElement : Pk(e);
        Zl(a) & 8 ? Al(this.client, c, e, void 0, void 0, d) : Zl(a) & 2 && !b && (a = this.client,
        d = rl({
            cttAuthInfo: al(c) || void 0,
            automatedLogEventSource: d
        }, c),
        b = {
            csn: c,
            ve: e.getAsJson(),
            eventType: 2
        },
        c === "UNDEFINED_CSN" ? wl("visualElementHidden", d, b) : a ? nk("visualElementHidden", b, a, d) : Y("visualElementHidden", b, d));
        return !0
    }
}
;
function $l() {
    am.instance || (am.instance = new am)
}
function bm(a) {
    $l();
    Jf(Tl().A).bind(Tl())(a, void 0, 8, void 0)
}
function cm(a) {
    $l();
    Jf(Tl().u).bind(Tl())(a, void 0, 8, void 0)
}
var am = class {
    j(a) {
        Jf(Tl().j).bind(Tl())(a)
    }
    clear() {
        Jf(Tl().clear).bind(Tl())()
    }
}
;
function dm() {
    em.instance || (em.instance = new em);
    return em.instance
}
function fm(a, b) {
    a.A.has(b) || a.A.set(b, []);
    return a.A.get(b)
}
function gm(a, b, c={}) {
    a.i.add(c.layer || 0);
    a.m = () => {
        hm(a, b, c);
        const d = Wk(c.layer);
        if (d) {
            for (const e of a.K)
                im(a, e[0], e[1] || d, c.layer);
            for (const e of a.V)
                jm(a, e[0], e[1])
        }
    }
    ;
    Z(c.layer) || a.m();
    if (c.ja)
        for (const d of c.ja)
            km(a, d, c.layer);
    else
        yk(Error("Delayed screen needs a data promise."))
}
function hm(a, b, c={}) {
    var d = void 0;
    c.layer || (c.layer = 0);
    d = c.Na !== void 0 ? c.Na : c.layer;
    const e = Z(d);
    d = Wk(d);
    let f;
    d && (c.parentCsn !== void 0 ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && e !== "UNDEFINED_CSN" && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = R("EVENT_ID");
    e === "UNDEFINED_CSN" && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    S("combine_ve_grafts") && e && lm(a, e);
    S("no_client_ve_attach_unless_shown") && d && e && vl(d, e);
    let k;
    try {
        k = ql(a.client, b, f, c.ia, c.cttAuthInfo, g, c.Ib, c.loggingExpectations, c.automatedLogEventSource)
    } catch (p) {
        Ck(p, {
            Zb: b,
            rootVe: d,
            Rb: void 0,
            Hb: e,
            Qb: f,
            ia: c.ia
        });
        yk(p);
        return
    }
    bl(k, b, c.layer, c.cttAuthInfo);
    e && e !== "UNDEFINED_CSN" && d && !Zk(e) && Al(a.client, e, d, !0);
    S("enable_screen_manager_layer_separation") ? (b = fm(a, c.layer || 0),
    b.length > 0 && !b[b.length - 1].csn && (b[b.length - 1].csn = k || "")) : a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = k || "");
    $l();
    Jf(Tl().m).bind(Tl())();
    const l = Wk(c.layer);
    e && e !== "UNDEFINED_CSN" && l && S("music_web_mark_root_visible") && Jf(xl)(void 0, k, l, void 0, void 0, void 0);
    a.i.delete(c.layer || 0);
    a.m = void 0;
    let n;
    (n = a.va.get(c.layer)) == null || n.forEach( (p, q) => {
        p ? im(a, q, p, c.layer) : l && im(a, q, l, c.layer)
    }
    );
    mm(a)
}
function nm(a) {
    var b = 28631
      , c = {
        layer: 8
    };
    Jf( () => {
        [28631].includes(b) || (zk(new O("createClientScreen() called with a non-page VE",b)),
        b = 83769);
        if (!c.isHistoryNavigation)
            if (S("enable_screen_manager_layer_separation")) {
                const d = c.layer || 0;
                a.ta.set(d, []);
                fm(a, d).push({
                    rootVe: b,
                    key: c.key || ""
                })
            } else
                a.h.push({
                    rootVe: b,
                    key: c.key || ""
                });
        a.K = [];
        a.V = [];
        c.ja ? gm(a, b, c) : hm(a, b, c)
    }
    )()
}
function km(a, b, c=0) {
    Jf( () => {
        b.then(d => {
            a.i.has(c) && a.m && a.m();
            const e = Z(c)
              , f = Wk(c);
            if (e && f) {
                var g = {
                    automatedLogEventSource: 3
                }, h;
                (d == null ? 0 : (h = d.response) == null ? 0 : h.trackingParams) && sl(a.client, e, f, Pk(d.response.trackingParams), !1, g);
                var k;
                (d == null ? 0 : (k = d.playerResponse) == null ? 0 : k.trackingParams) && sl(a.client, e, f, Pk(d.playerResponse.trackingParams), !1, g)
            }
        }
        )
    }
    )()
}
function im(a, b, c, d=0) {
    return Jf( () => {
        if (a.i.has(d))
            return a.K.push([b, c]),
            !0;
        const e = Z(d)
          , f = c || Wk(d);
        if (e && f) {
            if (S("combine_ve_grafts")) {
                const g = a.l.get(f.toString());
                g ? g.push(b) : (a.H.set(f.toString(), f),
                a.l.set(f.toString(), [b]));
                a.ga || (a.ga = yg( () => {
                    lm(a, e)
                }
                , 1200))
            } else
                sl(a.client, e, f, b);
            return !0
        }
        return !1
    }
    )()
}
function om(a, b) {
    return Jf( () => {
        const c = Pk(b);
        im(a, c, void 0, 8);
        return c
    }
    )()
}
function lm(a, b) {
    if (b === void 0) {
        const c = Yk();
        for (let d = 0; d < c.length; d++)
            c[d] !== void 0 && lm(a, c[d])
    } else
        a.l.forEach( (c, d) => {
            (d = a.H.get(d)) && tl(a.client, b, d, c)
        }
        ),
        a.l.clear(),
        a.H.clear(),
        a.ga = void 0
}
function pm(a, b, c, d=0) {
    if (!b)
        return !1;
    d = Z(d);
    if (!d)
        return !1;
    Bl(a.client, d, Pk(b), c);
    return !0
}
function jm(a, b, c, d=0) {
    const e = Z(d);
    b = b || Wk(d);
    e && b && (a = a.client,
    d = rl({
        cttAuthInfo: al(e) || void 0
    }, e),
    c = {
        csn: e,
        ve: b.getAsJson(),
        clientData: c
    },
    e === "UNDEFINED_CSN" ? wl("visualElementStateChanged", d, c) : a ? nk("visualElementStateChanged", c, a, d) : Y("visualElementStateChanged", c, d))
}
function mm(a) {
    for (var b = 0; b < a.u.length; b++) {
        var c = a.u[b];
        try {
            c()
        } catch (d) {
            yk(d)
        }
    }
    a.u.length = 0;
    for (b = 0; b < a.fa.length; b++) {
        c = a.fa[b];
        try {
            c()
        } catch (d) {
            yk(d)
        }
    }
}
var em = class {
    constructor() {
        this.K = [];
        this.V = [];
        this.h = [];
        this.A = new Map;
        this.ta = new Map;
        this.u = [];
        this.fa = [];
        this.l = new Map;
        this.H = new Map;
        this.i = new Set;
        this.va = new Map
    }
    j(a) {
        this.client = a
    }
    clickCommand(a, b, c=0) {
        return pm(this, a.clickTrackingParams, b, c)
    }
    stateChanged(a, b, c=0) {
        this.visualElementStateChanged(Pk(a), b, c)
    }
    visualElementStateChanged(a, b, c=0) {
        c === 0 && this.i.has(c) ? this.V.push([a, b]) : jm(this, a, b, c)
    }
}
;
const qm = {
    granted: "GRANTED",
    denied: "DENIED",
    unknown: "UNKNOWN"
}
  , rm = RegExp("^(?:[a-z]+:)?//", "i");
function sm(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    a === "notifications_register" ? (P("IDToken", b),
    tm()) : a === "notifications_check_registration" && um(b)
}
function vm() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a)
                b.postMessage({
                    type: "update_unseen_notifications_count_signal"
                })
    }
    )
}
function wm(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    }
    );
    return b
}
function xm(a) {
    return t(function*() {
        const b = wm(a.payload.chrome.extraUrlParams)
          , c = {
            recipientId: a.recipientId,
            endpoint: a.payload.chrome.endpoint,
            extraUrlParams: b
        }
          , d = Af(of);
        return ym().then(e => Kl(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? zm(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                Pl(g);
                Promise.reject(g)
            }
            )
        }
        ))
    })
}
function Am(a, b) {
    var c = Z(8);
    if (c == null || !b)
        return a;
    a = rm.test(a) ? new URL(a) : new URL(a,self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}
function zm(a, b) {
    a.deviceId && P("DeviceId", a.deviceId);
    a.timestampSec && P("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome
      , d = dm();
    nm(d);
    var e;
    const f = (e = c.postedEndpoint) == null ? void 0 : e.clickTrackingParams;
    e = c == null ? void 0 : c.loggingDirectives;
    const g = c.title
      , h = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: Am(b, e == null ? void 0 : e.trackingParams),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0,
            loggingDirectives: e
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(g, h).then( () => {
        var k;
        ((k = h.data) == null ? 0 : k.postedEndpoint) && Bm(h.data.postedEndpoint);
        let l;
        if ((l = h.data) == null ? 0 : l.loggingDirectives)
            k = h.data.loggingDirectives,
            S("enable_client_ve_spec") && k.clientVeSpec ? (k = Rk(k.clientVeSpec.uiType, void 0, k.clientVeSpec.elementIndex, k.clientVeSpec.clientYoutubeData, void 0, k),
            k = im(d, k, void 0, 8) ? k : null) : k = k.trackingParams ? om(d, k.trackingParams) : null,
            bm({
                screenLayer: 8,
                visualElement: k
            });
        Cm(a.displayCap)
    }
    ).catch( () => {}
    )
}
function Bm(a) {
    if (!vj(a, nf))
        return Promise.reject();
    const b = {
        serializedRecordNotificationInteractionsRequest: vj(a, nf).serializedInteractionsRequest
    }
      , c = Af(pf);
    return ym().then(d => Kl(d, b, c)).then(d => d)
}
function Cm(a) {
    a !== -1 && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e, f;
            if ((e = b[d].data) == null ? 0 : (f = e.loggingDirectives) == null ? 0 : f.trackingParams) {
                var c = Pk(b[d].data.loggingDirectives.trackingParams);
                const g = {
                    screenLayer: 8,
                    visualElement: c
                }
                  , h = Rk(82046)
                  , k = dm();
                im(k, h, c, 8);
                bm({
                    screenLayer: 8,
                    visualElement: h
                });
                (c = Z(8)) && Bl(k.client, c, h);
                cm(g)
            }
        }
    }
    )
}
function um(a) {
    const b = [Dm(a), wf("RegistrationTimestamp").then(Em), Fm(), Gm(), Hm()];
    Promise.all(b).catch( () => {
        P("IDToken", a);
        tm();
        return Promise.resolve()
    }
    )
}
function Em(a) {
    return Date.now() - (a || 0) <= 9E7 ? Promise.resolve() : Promise.reject()
}
function Dm(a) {
    return wf("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}
function Fm() {
    return wf("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}
function Gm() {
    return wf("Endpoint").then(a => Im().then(b => a === b ? Promise.resolve() : Promise.reject()))
}
function Hm() {
    return wf("application_server_key").then(a => Jm().then(b => a === b ? Promise.resolve() : Promise.reject()))
}
function Km() {
    var a = Notification.permission;
    if (qm[a])
        return qm[a]
}
function tm() {
    P("RegistrationTimestamp", 0);
    Promise.all([Im(), Lm(), Mm(), Jm()]).then( ([a,b,c,d]) => {
        b = b ? rf(b) : null;
        c = c ? rf(c) : null;
        d = d ? $a(new Uint8Array(d), 4) : null;
        Nm(a, b, c, d)
    }
    ).catch( () => {
        Nm()
    }
    )
}
function Nm(a=null, b=null, c=null, d=null) {
    vf().then(e => {
        e && (P("Endpoint", a),
        P("P256dhKey", b),
        P("AuthKey", c),
        P("application_server_key", d),
        P("Permission", Notification.permission),
        Promise.all([wf("DeviceId"), wf("NotificationsDisabled")]).then( ([f,g]) => {
            if (f != null)
                var h = f;
            else {
                f = [];
                var k;
                h = h || Te.length;
                for (k = 0; k < 256; k++)
                    f[k] = Te[0 | Math.random() * h];
                h = f.join("")
            }
            Om(h, a != null ? a : void 0, b != null ? b : void 0, c != null ? c : void 0, d != null ? d : void 0, g != null ? g : void 0)
        }
        ))
    }
    )
}
function Om(a, b, c, d, e, f) {
    t(function*() {
        const g = {
            notificationRegistration: {
                chromeRegistration: {
                    deviceId: a,
                    pushParams: {
                        applicationServerKey: e,
                        authKey: d,
                        p256dhKey: c,
                        browserEndpoint: b
                    },
                    notificationsDisabledInApp: f,
                    permission: Km()
                }
            }
        }
          , h = Af(qf);
        return ym().then(k => Kl(k, g, h).then( () => {
            P("DeviceId", a);
            P("RegistrationTimestamp", Date.now());
            P("TimestampLowerBound", Date.now())
        }
        , l => {
            Nl(l)
        }
        ))
    })
}
function Im() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}
function Lm() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}
function Mm() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}
function Jm() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}
function ym() {
    return t(function*() {
        try {
            return yield Ek(!0),
            Ml()
        } catch (a) {
            return yield Nl(a),
            Promise.reject(a)
        }
    })
}
;let Pm = self.location.origin + "/";
function Gk(a) {
    let b = typeof ServiceWorkerGlobalScope !== "undefined" && self instanceof ServiceWorkerGlobalScope ? Me.registration.scope : Pm;
    b.endsWith("/") && (b = b.slice(0, -1));
    return a === "/" ? b : b + a
}
;let Qm = void 0;
function Rm(a) {
    return t(function*() {
        Qm || (Qm = yield a.open("yt-appshell-assets"));
        return Qm
    })
}
function Sm(a, b) {
    return t(function*() {
        const c = yield Rm(a)
          , d = b.map(e => Tm(c, e));
        return Promise.all(d)
    })
}
function Um(a, b) {
    return t(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}
function Vm(a, b) {
    return t(function*() {
        const c = yield Rm(a)
          , d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}
function Wm(a, b, c) {
    return t(function*() {
        yield(yield Rm(a)).put(b, c)
    })
}
function Xm(a, b) {
    t(function*() {
        yield(yield Rm(a)).delete(b)
    })
}
function Tm(a, b) {
    return t(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
}
;var Ym = Uh("yt-serviceworker-metadata", {
    J: {
        auth: {
            I: 1
        },
        ["resource-manifest-assets"]: {
            I: 2
        }
    },
    shared: !0,
    upgrade(a, b) {
        b(1) && ih(a, "resource-manifest-assets");
        b(2) && ih(a, "auth")
    },
    version: 2
});
let Zm = null;
function $m(a) {
    return Bh(Ym(), a)
}
function an() {
    return t(function*() {
        const a = yield Lh();
        if (a)
            return bn.instance || (bn.instance = new bn(a)),
            bn.instance
    })
}
function cn(a, b) {
    return t(function*() {
        yield X(yield $m(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets")
              , e = Date.now();
            return V(d.h.put(b, e)).then( () => {
                Zm = e;
                let f = !0;
                return nh(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1,
                wh(g)) : d.delete(g.cursor.key).then( () => qh(g)))
            }
            )
        }
        )
    })
}
function dn(a, b) {
    return t(function*() {
        let c = !1
          , d = 0;
        yield X(yield $m(a.token), ["resource-manifest-assets"], "readonly", e => nh(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.cursor.value.includes(b))
                c = !0;
            else
                return d += 1,
                qh(f)
        }
        ));
        return c ? d : -1
    })
}
function en(a) {
    return t(function*() {
        Zm || (yield X(yield $m(a.token), ["resource-manifest-assets"], "readonly", b => nh(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            Zm = c.cursor.key
        }
        )));
        return Zm
    })
}
var bn = class {
    constructor(a) {
        this.token = a
    }
}
;
function fn() {
    return t(function*() {
        const a = yield Lh();
        if (a)
            return gn.instance || (gn.instance = new gn(a)),
            gn.instance
    })
}
function hn(a, b) {
    return t(function*() {
        yield kh(yield $m(a.token), "auth", b, "shell_identifier_key")
    })
}
function jn(a) {
    return t(function*() {
        return (yield(yield $m(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}
function kn(a) {
    return t(function*() {
        yield(yield $m(a.token)).clear("auth")
    })
}
var gn = class {
    constructor(a) {
        this.token = a
    }
}
;
function ln() {
    t(function*() {
        const a = yield fn();
        a && (yield kn(a))
    })
}
;var mn = class extends L {
    constructor(a) {
        super(a)
    }
    hasUrl() {
        return F(G(this, 1)) != null
    }
}
;
function nn(a) {
    const b = a.o;
    return ed(a, b, b[B] | 0, mn, 1, void 0 === Jb ? 2 : 4, !1, !0)
}
var on = function(a, b) {
    return (c, d) => {
        {
            const f = {
                ea: !0
            };
            d && Object.assign(f, d);
            c = ud(c, void 0, void 0, f);
            try {
                const g = new a
                  , h = g.o;
                Qd(b)(h, c);
                var e = g
            } finally {
                yd(c)
            }
        }
        return e
    }
}(class extends L {
    constructor(a) {
        super(a)
    }
}
, [0, Ud, [0, Td]]);
function pn(a) {
    return t(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(qn(b)) : Promise.reject(Error("No resource manifest header"))
    })
}
function qn(a) {
    return nn(on(decodeURIComponent(a))).reduce( (b, c) => {
        (c = hd(c, 1)) && b.push(c);
        return b
    }
    , [])
}
;function rn(a) {
    return t(function*() {
        const b = yield Ek();
        if (b && F(G(b, 3, Lb)) != null) {
            var c = yield fn();
            c && (c = yield jn(c),
            F(G(b, 3, Lb, Uc)) !== c && (Xm(a.caches, a.G),
            ln()))
        }
    })
}
function sn(a) {
    return t(function*() {
        let b, c;
        try {
            c = yield tn(a.h),
            b = yield pn(c),
            yield Sm(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield un(),
            yield Wm(a.caches, a.G, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b)
            try {
                yield vn(a, b, a.G)
            } catch (d) {}
        return Promise.resolve()
    })
}
function tn(a) {
    return t(function*() {
        try {
            return yield v.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}
function un() {
    return t(function*() {
        var a = yield Ek();
        let b;
        a && F(G(a, 3, Lb)) != null && (b = hd(a, 3, void 0, Lb));
        return b ? (a = yield fn()) ? Promise.resolve(hn(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}
function vn(a, b, c) {
    return t(function*() {
        const d = yield an();
        if (d)
            try {
                yield cn(d, b)
            } catch (e) {
                yield Nl(e)
            }
        b.push(c);
        try {
            yield Vm(a.caches, b)
        } catch (e) {
            yield Nl(e)
        }
        return Promise.resolve()
    })
}
function wn(a, b) {
    return t(function*() {
        return Um(a.caches, b)
    })
}
function xn(a) {
    return t(function*() {
        return Um(a.caches, a.G)
    })
}
var yn = class {
    constructor() {
        var a = self.caches;
        let b;
        b = Gk("/app_shell");
        S("service_worker_forward_exp_params") && (b += self.location.search);
        var c = Gk("/app_shell_home");
        this.caches = a;
        this.h = b;
        this.G = c
    }
    initialize() {
        const a = this;
        return t(function*() {
            yield rn(a);
            return sn(a)
        })
    }
}
;
var zn = class {
    constructor() {
        const a = this;
        this.i = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({done: f, value: g}) {
                        if (f)
                            return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                }
                ;
                a.j = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
}
;
function An(a, b) {
    return t(function*() {
        const c = b.request
          , d = yield wn(a.h, c.url);
        if (d)
            return a.i && Ql({
                appShellAssetLoadReport: {
                    assetPath: c.url,
                    cacheHit: !0
                },
                timestamp: W()
            }),
            d;
        Bn(a, c);
        return Cn(b)
    })
}
function Dn(a, b) {
    return t(function*() {
        const c = yield En(b);
        if (c.response && (c.response.ok || c.response.type === "opaqueredirect" || c.response.status === 429 || c.response.status === 303 || c.response.status >= 300 && c.response.status < 400))
            return c.response;
        const d = yield xn(a.h);
        if (d)
            return Fn(a),
            Gn(d, b);
        Hn(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}
function In(a, b) {
    b = new URL(b);
    if (!a.config.wa.includes(b.pathname))
        return !1;
    if (!b.search)
        return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.ya) {
        if (c.key === "*")
            return !0;
        a = b.get(c.key);
        if (c.value === void 0 || a === c.value)
            if (b.delete(c.key),
            !b.toString())
                return !0
    }
    return !1
}
function Jn(a, b) {
    return t(function*() {
        const c = yield xn(a.h);
        if (!c)
            return Hn(a),
            Cn(b);
        Fn(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d),
            !isNaN(d))) {
                d = Math.round(W() - d);
                break a
            }
            d = -1
        }
        if (!(d > -1 && d / 864E5 >= 7))
            return Gn(c, b);
        d = yield En(b);
        return d.response && d.response.ok ? d.response : Gn(c, b)
    })
}
function Cn(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !Kn(b) ? b : v.fetch(a.request))
}
function Bn(a, b) {
    if (a.i) {
        var c = {
            assetPath: b.url,
            cacheHit: !1
        };
        an().then(d => {
            if (d) {
                var e = en(d).then(f => {
                    f && (c.currentAppBundleTimestampSec = String(Math.floor(f / 1E3)))
                }
                );
                d = dn(d, b.url).then(f => {
                    c.appBundleVersionDiffCount = f
                }
                );
                Promise.all([e, d]).catch(f => {
                    Nl(f)
                }
                ).finally( () => {
                    Ql({
                        appShellAssetLoadReport: c,
                        timestamp: W()
                    })
                }
                )
            } else
                Ql({
                    appShellAssetLoadReport: c,
                    timestamp: W()
                })
        }
        )
    }
}
function Fn(a) {
    a.i && Ql({
        appShellAssetLoadReport: {
            assetPath: a.h.G,
            cacheHit: !0
        },
        timestamp: W()
    })
}
function Hn(a) {
    a.i && Ql({
        appShellAssetLoadReport: {
            assetPath: a.h.G,
            cacheHit: !1
        },
        timestamp: W()
    })
}
function Gn(a, b) {
    if (!S("sw_nav_preload_pbj"))
        return a;
    const c = new zn
      , d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !Kn(e))
            throw Error("no pbj preload response available");
        d.then( () => c.h(e.body)).then( () => void c.close())
    }
    ).catch( () => {
        d.then( () => {
            c.j();
            c.close()
        }
        )
    }
    );
    return new Response(c.i,{
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}
function En(a) {
    return t(function*() {
        try {
            return {
                response: yield Cn(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}
function Kn(a) {
    return a.headers.get("x-navigation-preload-response-type") === "pbj"
}
var Tn = class {
    constructor() {
        var a = Ln;
        var b = {
            Ca: Mn,
            Oa: Nn([On, /\/signin/, /\/logout/]),
            wa: ["/", "/feed/downloads"],
            ya: Pn([{
                key: "feature",
                value: "ytca"
            }]),
            xa: Qn(S("kevlar_sw_app_wide_fallback") ? Rn : Sn)
        };
        this.h = a;
        this.config = b;
        a = T("app_shell_asset_log_fraction");
        this.i = !0;
        a && (this.i = Math.random() < a)
    }
}
;
const Un = /^\/$/
  , Sn = [Un, /^\/feed\/downloads$/]
  , Rn = [Un, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];
function Qn(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Vn = /^https:\/\/([\w-]*\.)*youtube\.com.*/;
Qn([Vn, /^https:\/\/([\w-]*\.)*gstatic\.com.*/]);
Qn([/\.css$/, /\.js$/, /\.webm$/, /\.png$/]);
function Nn(a) {
    a = Qn(a);
    return new RegExp(`${Vn.source}(${a.source})`)
}
const Wn = Qn([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/js\//, /\/ytmainappweb\/_\/ss\//, /\/ytmusicweb\/_\/js\//, /\/ytmusicweb\/_\/ss\//, /\/music_integrations\/_\/js\//, /\/music_integrations\/_\/ss\//])
  , Mn = new RegExp(`${Vn.source}(${Wn.source})`)
  , On = /purge_shell=1/;
function Pn(a=[]) {
    const b = [];
    for (const c of Xf)
        b.push({
            key: c
        });
    for (const c of a)
        b.push(c);
    return b
}
Nn([On]);
Pn();
var Yn = class {
    constructor() {
        var a = Ln
          , b = Xn
          , c = self;
        if (v.URLPattern) {
            var d = [];
            d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/embed*"
                    })
                },
                source: "network"
            });
            S("service_worker_static_routing_exclude_innertube") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/youtubei/v1/*"
                    })
                },
                source: "network"
            })
        } else
            d = [];
        this.h = c;
        this.i = a;
        this.u = b;
        this.K = sf;
        this.j = d
    }
    init() {
        this.h.oninstall = this.A.bind(this);
        this.h.onactivate = this.l.bind(this);
        this.h.onfetch = this.m.bind(this);
        this.h.onmessage = this.H.bind(this)
    }
    A(a) {
        this.h.skipWaiting();
        if (this.j.length > 0 && a.addRoutes)
            try {
                a.addRoutes(this.j)
            } catch (c) {}
        const b = this.i.initialize().catch(c => {
            Nl(c);
            return Promise.resolve()
        }
        );
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.h.clients.claim()]
          , c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()),
        S("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return t(function*() {
            var c = b.u
              , d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Oa.test(e.url))
                Fk.instance && (delete Fk.instance.h,
                v.__SAPISID = void 0,
                Q("VISITOR_DATA", void 0),
                Q("SESSION_INDEX", void 0),
                Q("DELEGATED_SESSION_ID", void 0),
                Q("USER_SESSION_ID", void 0),
                Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", void 0)),
                d = a.respondWith,
                c = c.h,
                Xm(c.caches, c.G),
                ln(),
                c = Cn(a),
                d.call(a, c);
            else if (c.config.Ca.test(e.url))
                a.respondWith(An(c, a));
            else if (e.mode === "navigate") {
                const f = new URL(e.url);
                c.config.xa.test(f.pathname) ? a.respondWith(Dn(c, a)) : In(c, e.url) ? a.respondWith(Jn(c, a)) : d && a.respondWith(Cn(a))
            }
        })
    }
    H(a) {
        const b = a.data;
        this.K.includes(b.type) ? sm(a) : b.type === "refresh_shell" && sn(this.i).catch(c => {
            Nl(c)
        }
        )
    }
}
;
function Zn() {
    let a = w("ytglobal.storage_");
    a || (a = new $n,
    x("ytglobal.storage_", a));
    return a
}
var $n = class {
    estimate() {
        return t(function*() {
            const a = navigator;
            let b;
            if ((b = a.storage) == null ? 0 : b.estimate)
                return a.storage.estimate();
            let c;
            if ((c = a.webkitTemporaryStorage) == null ? 0 : c.queryUsageAndQuota)
                return ao()
        })
    }
}
;
function ao() {
    const a = navigator;
    return new Promise( (b, c) => {
        let d;
        (d = a.webkitTemporaryStorage) != null && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota( (e, f) => {
            b({
                usage: e,
                quota: f
            })
        }
        , e => {
            c(e)
        }
        ) : c(Error("webkitTemporaryStorage is not supported."))
    }
    )
}
x("ytglobal.storageClass_", $n);
function bo(a, b) {
    Zn().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: self.document === void 0,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: co(c == null ? void 0 : c.usage),
            deviceStorageQuotaMbytes: co(c == null ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    }
    )
}
class eo {
    constructor() {
        var a = fo;
        this.handleError = go;
        this.h = a;
        this.i = !1;
        self.document === void 0 || self.addEventListener("beforeunload", () => {
            this.i = !0
        }
        );
        this.j = Math.random() <= .2
    }
    P(a, b) {
        switch (a) {
        case "IDB_DATA_CORRUPTED":
            S("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
            break;
        case "IDB_UNEXPECTEDLY_CLOSED":
            this.h("idbUnexpectedlyClosed", b);
            break;
        case "IS_SUPPORTED_COMPLETED":
            S("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
            break;
        case "QUOTA_EXCEEDED":
            bo(this, b);
            break;
        case "TRANSACTION_ENDED":
            this.j && Math.random() <= .1 && this.h("idbTransactionEnded", b);
            break;
        case "TRANSACTION_UNEXPECTEDLY_ABORTED":
            a = Object.assign({}, b, {
                hasWindowUnloaded: this.i
            }),
            this.h("idbTransactionAborted", a)
        }
    }
}
function co(a) {
    return typeof a === "undefined" ? "-1" : String(Math.ceil(a / 1048576))
}
;lg(ig(), {
    D: [{
        Ma: /Failed to fetch/,
        weight: 500
    }],
    C: []
});
({handleError: go=xk, P: fo=Y} = {
    handleError: Pl,
    P: function(a, b) {
        return t(function*() {
            yield Ol();
            Y(a, b)
        })
    }
});
var fo, go;
for (Gg = new eo; Fg.length > 0; ) {
    const a = Fg.shift();
    switch (a.type) {
    case "ERROR":
        Gg.handleError(a.payload);
        break;
    case "EVENT":
        Gg.P(a.eventType, a.payload)
    }
}
Fk.instance = new Fk;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    }
    );
    a.waitUntil(c);
    a.waitUntil(Bm(b.clickEndpoint))
}
;
self.onnotificationclose = function(a) {
    var b = a.notification.data, c;
    if (b == null ? 0 : (c = b.loggingDirectives) == null ? 0 : c.trackingParams) {
        a = Pk(b.loggingDirectives.trackingParams);
        c = {
            screenLayer: 8,
            visualElement: a
        };
        if (b.isDismissed) {
            b = Rk(74726);
            const d = dm();
            im(d, b, a, 8);
            bm({
                screenLayer: 8,
                visualElement: b
            });
            (a = Z(8)) && Bl(d.client, a, b)
        }
        cm(c)
    }
}
;
self.onpush = function(a) {
    a.waitUntil(wf("NotificationsDisabled").then(b => {
        if (b)
            return Promise.resolve();
        if (a.data && a.data.text().length)
            try {
                return xm(a.data.json())
            } catch (c) {
                return Promise.resolve(c.message)
            }
        return Promise.resolve()
    }
    ));
    a.waitUntil(vm())
}
;
self.onpushsubscriptionchange = function() {
    tm()
}
;
const Ln = new yn
  , Xn = new Tn;
(new Yn).init();
