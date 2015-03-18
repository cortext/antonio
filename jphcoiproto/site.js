/*!
 jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(m, C) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = m.document ? C(m, !0) : function(l) {
        if (!l.document)
            throw Error("jQuery requires a window with a document");
        return C(l)
    } : C(m)
}("undefined" != typeof window ? window : this, function(m, C) {
    function l(h) {
        var a = h.length, s = d.type(h);
        return "function" === s || d.isWindow(h)?!1 : 1 === h.nodeType && a?!0 : "array" === s || 0 === a || "number" == typeof a && 0 < a && a - 1 in h
    }
    function v(h, a, s) {
        if (d.isFunction(a))
            return d.grep(h, function(h, b) {
                return !!a.call(h, b,
                h) !== s
            });
        if (a.nodeType)
            return d.grep(h, function(h) {
                return h === a !== s
            });
        if ("string" == typeof a) {
            if (Ic.test(a))
                return d.filter(a, h, s);
            a = d.filter(a, h)
        }
        return d.grep(h, function(h) {
            return 0 <= d.inArray(h, a) !== s
        })
    }
    function e(h, a) {
        do 
            h = h[a];
        while (h && 1 !== h.nodeType);
        return h
    }
    function U() {
        H.addEventListener ? (H.removeEventListener("DOMContentLoaded", z, !1), m.removeEventListener("load", z, !1)) : (H.detachEvent("onreadystatechange", z), m.detachEvent("onload", z))
    }
    function z() {
        (H.addEventListener || "load" === event.type ||
        "complete" === H.readyState) && (U(), d.ready())
    }
    function S(h, a, s) {
        if (void 0 === s && 1 === h.nodeType) {
            var b = "data-" + a.replace(kc, "-$1").toLowerCase();
            if (s = h.getAttribute(b), "string" == typeof s) {
                try {
                    s = "true" === s?!0 : "false" === s?!1 : "null" === s ? null : + s + "" === s?+s : lc.test(s) ? d.parseJSON(s) : s
                } catch (c) {}
                d.data(h, a, s)
            } else 
                s = void 0
        }
        return s
    }
    function la(h) {
        for (var a in h)
            if (("data" !== a ||!d.isEmptyObject(h[a])) && "toJSON" !== a)
                return !1;
        return !0
    }
    function t(h, a, s, b) {
        if (d.acceptData(h)) {
            var c, g, f = d.expando, k = h.nodeType, j = k ?
            d.cache: h, e = k ? h[f]: h[f] && f;
            if (e && j[e] && (b || j[e].data) || void 0 !== s || "string" != typeof a)
                return e || (e = k ? h[f] = Da.pop() || d.guid++ : f), j[e] || (j[e] = k ? {} : {
                    toJSON: d.noop
                }), ("object" == typeof a || "function" == typeof a) && (b ? j[e] = d.extend(j[e], a) : j[e].data = d.extend(j[e].data, a)), g = j[e], b || (g.data || (g.data = {}), g = g.data), void 0 !== s && (g[d.camelCase(a)] = s), "string" == typeof a ? (c = g[a], null == c && (c = g[d.camelCase(a)])) : c = g, c
        }
    }
    function ca(h, a, s) {
        if (d.acceptData(h)) {
            var b, c, g = h.nodeType, f = g ? d.cache: h, k = g ? h[d.expando]: d.expando;
            if (f[k]) {
                if (a && (b = s ? f[k] : f[k].data)) {
                    d.isArray(a) ? a = a.concat(d.map(a, d.camelCase)) : a in b ? a = [a] : (a = d.camelCase(a), a = a in b ? [a] : a.split(" "));
                    for (c = a.length; c--;)
                        delete b[a[c]];
                    if (s?!la(b) : !d.isEmptyObject(b)
                        )return 
                }(s || (delete f[k].data, la(f[k]))) && (g ? d.cleanData([h], !0) : x.deleteExpando || f != f.window ? delete f[k] : f[k] = null)
            }
        }
    }
    function M() {
        return !0
    }
    function F() {
        return !1
    }
    function p() {
        try {
            return H.activeElement
        } catch (h) {}
    }
    function n(h) {
        var a = Vc.split("|"), h = h.createDocumentFragment();
        if (h.createElement)
            for (; a.length;)
                h.createElement(a.pop());
        return h
    }
    function i(h, a) {
        var s, b, c = 0, g = typeof h.getElementsByTagName !== xa ? h.getElementsByTagName(a || "*"): typeof h.querySelectorAll !== xa ? h.querySelectorAll(a || "*"): void 0;
        if (!g) {
            g = [];
            for (s = h.childNodes || h; null != (b = s[c]); c++)
                !a || d.nodeName(b, a) ? g.push(b) : d.merge(g, i(b, a))
        }
        return void 0 === a || a && d.nodeName(h, a) ? d.merge([h], g) : g
    }
    function u(h) {
        g.test(h.type) && (h.defaultChecked = h.checked)
    }
    function D(h, a) {
        return d.nodeName(h, "table") && d.nodeName(11 !== a.nodeType ? a : a.firstChild, "tr") ? h.getElementsByTagName("tbody")[0] ||
        h.appendChild(h.ownerDocument.createElement("tbody")) : h
    }
    function y(h) {
        return h.type = (null !== d.find.attr(h, "type")) + "/" + h.type, h
    }
    function A(h) {
        var a = rd.exec(h.type);
        return a ? h.type = a[1] : h.removeAttribute("type"), h
    }
    function K(h, a) {
        for (var s, b = 0; null != (s = h[b]); b++)
            d._data(s, "globalEval", !a || d._data(a[b], "globalEval"))
    }
    function aa(h, a) {
        if (1 === a.nodeType && d.hasData(h)) {
            var s, b, c;
            b = d._data(h);
            var g = d._data(a, b), f = b.events;
            if (f)
                for (s in delete g.handle, g.events = {}, f) {
                    b = 0;
                    for (c = f[s].length; c > b; b++)
                        d.event.add(a,
                        s, f[s][b])
                    }
            g.data && (g.data = d.extend({}, g.data))
        }
    }
    function ea(h, a) {
        var s, b = d(a.createElement(h)).appendTo(a.body), c = m.getDefaultComputedStyle && (s = m.getDefaultComputedStyle(b[0])) ? s.display: d.css(b[0], "display");
        return b.detach(), c
    }
    function Y(h) {
        var a = H, s = Wc[h];
        return s || (s = ea(h, a), "none" !== s && s || (Tb = (Tb || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(a.documentElement), a = (Tb[0].contentWindow || Tb[0].contentDocument).document, a.write(), a.close(), s = ea(h, a), Tb.detach()), Wc[h] = s), s
    }
    function P(h,
    a) {
        return {
            get: function() {
                var s = h();
                if (null != s)
                    return s ? void delete this.get : (this.get = a).apply(this, arguments)
                }
        }
    }
    function G(h, a) {
        if (a in h)
            return a;
        for (var s = a.charAt(0).toUpperCase() + a.slice(1), b = a, c = Xc.length; c--;)
            if (a = Xc[c] + s, a in h)
                return a;
        return b
    }
    function W(h, a) {
        for (var s, c, g, f = [], k = 0, j = h.length; j > k; k++)
            c = h[k], c.style && (f[k] = d._data(c, "olddisplay"), s = c.style.display, a ? (f[k] || "none" !== s || (c.style.display = ""), "" === c.style.display && b(c) && (f[k] = d._data(c, "olddisplay", Y(c.nodeName)))) : (g = b(c), (s &&
            "none" !== s ||!g) && d._data(c, "olddisplay", g ? s : d.css(c, "display"))));
        for (k = 0; j > k; k++)
            c = h[k], c.style && (a && "none" !== c.style.display && "" !== c.style.display || (c.style.display = a ? f[k] || "" : "none"));
        return h
    }
    function Z(h, a, s) {
        return (h = sd.exec(a)) ? Math.max(0, h[1] - (s || 0)) + (h[2] || "px") : a
    }
    function fa(h, E, s, b, c) {
        for (var E = s === (b ? "border" : "content") ? 4 : "width" === E ? 1 : 0, g = 0; 4 > E; E += 2)
            "margin" === s && (g += d.css(h, s + a[E], !0, c)), b ? ("content" === s && (g -= d.css(h, "padding" + a[E], !0, c)), "margin" !== s && (g -= d.css(h, "border" + a[E] + "Width",
            !0, c))) : (g += d.css(h, "padding" + a[E], !0, c), "padding" !== s && (g += d.css(h, "border" + a[E] + "Width", !0, c)));
        return g
    }
    function ua(h, a, s) {
        var b=!0, c = "width" === a ? h.offsetWidth : h.offsetHeight, g = sb(h), f = x.boxSizing && "border-box" === d.css(h, "boxSizing", !1, g);
        if (0 >= c || null == c) {
            if (c = tb(h, a, g), (0 > c || null == c) && (c = h.style[a]), mc.test(c))
                return c;
            b = f && (x.boxSizingReliable() || c === h.style[a]);
            c = parseFloat(c) || 0
        }
        return c + fa(h, a, s || (f ? "border" : "content"), b, g) + "px"
    }
    function N(h, a, s, b, c) {
        return new N.prototype.init(h, a, s, b, c)
    }
    function Ea() {
        return setTimeout(function() {
            Cb = void 0
        }), Cb = d.now()
    }
    function ma(h, E) {
        for (var s, b = {
            height: h
        }, c = 0, E = E ? 1 : 0; 4 > c; c += 2 - E)
            s = a[c], b["margin" + s] = b["padding" + s] = h;
        return E && (b.opacity = b.width = h), b
    }
    function Fa(h, a, s) {
        for (var b, c = (Ub[a] || []).concat(Ub["*"]), d = 0, g = c.length; g > d; d++)
            if (b = c[d].call(s, a, h))
                return b
    }
    function Pa(h, a, s) {
        var b, c, g = 0, f = nc.length, k = d.Deferred().always(function() {
            delete j.elem
        }), j = function() {
            if (c)
                return !1;
            for (var a = Cb || Ea(), a = Math.max(0, e.startTime + e.duration - a), E = 1 - (a / e.duration ||
            0), s = 0, b = e.tweens.length; b > s; s++)
                e.tweens[s].run(E);
            return k.notifyWith(h, [e, E, a]), 1 > E && b ? a : (k.resolveWith(h, [e]), !1)
        }, e = k.promise({
            elem: h,
            props: d.extend({}, a),
            opts: d.extend(!0, {
                specialEasing: {}
            }, s),
            originalProperties: a,
            originalOptions: s,
            startTime: Cb || Ea(),
            duration: s.duration,
            tweens: [],
            createTween: function(a, E) {
                var s = d.Tween(h, e.opts, a, E, e.opts.specialEasing[a] || e.opts.easing);
                return e.tweens.push(s), s
            },
            stop: function(a) {
                var E = 0, s = a ? e.tweens.length: 0;
                if (c)
                    return this;
                for (c=!0; s > E; E++)
                    e.tweens[E].run(1);
                return a ? k.resolveWith(h, [e, a]) : k.rejectWith(h, [e, a]), this
            }
        }), a = e.props, s = e.opts.specialEasing, q, o, n, r;
        for (b in a)
            if (q = d.camelCase(b), o = s[q], n = a[b], d.isArray(n) && (o = n[1], n = a[b] = n[0]), b !== q && (a[q] = n, delete a[b]), r = d.cssHooks[q], r && "expand"in r)
                for (b in n = r.expand(n), delete a[q], n)
                    b in a || (a[b] = n[b], s[b] = o);
            else 
                s[q] = o;
        for (; f > g; g++)
            if (b = nc[g].call(e, h, a, e.opts))
                return b;
        return d.map(a, Fa, e), d.isFunction(e.opts.start) && e.opts.start.call(h, e), d.fx.timer(d.extend(j, {
            elem: h,
            anim: e,
            queue: e.opts.queue
        })),
        e.progress(e.opts.progress).done(e.opts.done, e.opts.complete).fail(e.opts.fail).always(e.opts.always)
    }
    function gb(h) {
        return function(a, s) {
            "string" != typeof a && (s = a, a = "*");
            var b, c = 0, g = a.toLowerCase().match(Ga) || [];
            if (d.isFunction(s))
                for (; b = g[c++];)
                    "+" === b.charAt(0) ? (b = b.slice(1) || "*", (h[b] = h[b] || []).unshift(s)) : (h[b] = h[b] || []).push(s)
        }
    }
    function Qa(h, a, s, b) {
        function c(k) {
            var j;
            return g[k]=!0, d.each(h[k] || [], function(h, d) {
                var k = d(a, s, b);
                return "string" != typeof k || f || g[k] ? f?!(j = k) : void 0 : (a.dataTypes.unshift(k),
                c(k), !1)
            }), j
        }
        var g = {}, f = h === Jc;
        return c(a.dataTypes[0]) ||!g["*"] && c("*")
    }
    function pa(h, a) {
        var s, b, c = d.ajaxSettings.flatOptions || {};
        for (b in a)
            void 0 !== a[b] && ((c[b] ? h : s || (s = {}))[b] = a[b]);
        return s && d.extend(!0, h, s), h
    }
    function ya(h, a, b, c) {
        var g;
        if (d.isArray(a))
            d.each(a, function(a, E) {
                b || ud.test(h) ? c(h, E) : ya(h + "[" + ("object" == typeof E ? a : "") + "]", E, b, c)
            });
        else if (b || "object" !== d.type(a))
            c(h, a);
        else 
            for (g in a)
                ya(h + "[" + g + "]", a[g], b, c)
    }
    function Vb() {
        try {
            return new m.XMLHttpRequest
        } catch (h) {}
    }
    function hb(h) {
        return d.isWindow(h) ?
        h : 9 === h.nodeType ? h.defaultView || h.parentWindow : !1
    }
    var Da = [], Ha = Da.slice, Wb = Da.concat, Db = Da.push, Xb = Da.indexOf, Za = {}, oc = Za.toString, La = Za.hasOwnProperty, x = {}, d = function(h, a) {
        return new d.fn.init(h, a)
    }, pc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Yb = /^-ms-/, Eb = /-([\da-z])/gi, qc = function(h, a) {
        return a.toUpperCase()
    };
    d.fn = d.prototype = {
        jquery: "1.11.1",
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return Ha.call(this)
        },
        get: function(h) {
            return null != h ? 0 > h ? this[h + this.length] : this[h] : Ha.call(this)
        },
        pushStack: function(h) {
            h =
            d.merge(this.constructor(), h);
            return h.prevObject = this, h.context = this.context, h
        },
        each: function(h, a) {
            return d.each(this, h, a)
        },
        map: function(h) {
            return this.pushStack(d.map(this, function(a, b) {
                return h.call(a, b, a)
            }))
        },
        slice: function() {
            return this.pushStack(Ha.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(h) {
            var a = this.length, h =+ h + (0 > h ? a : 0);
            return this.pushStack(0 <= h && a > h ? [this[h]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Db,
        sort: Da.sort,
        splice: Da.splice
    };
    d.extend = d.fn.extend = function() {
        var h, a, b, c, g, f, k = arguments[0] || {}, j = 1, e = arguments.length, q=!1;
        "boolean" == typeof k && (q = k, k = arguments[j] || {}, j++);
        "object" == typeof k || d.isFunction(k) || (k = {});
        for (j === e && (k = this, j--); e > j; j++)
            if (null != (g = arguments[j]))
                for (c in g)
                    h = k[c], b = g[c], k !== b && (q && b && (d.isPlainObject(b) || (a = d.isArray(b))) ? (a ? (a=!1, f = h && d.isArray(h) ? h : []) : f = h && d.isPlainObject(h) ? h : {}, k[c] = d.extend(q, f, b)) : void 0 !== b && (k[c] = b));
        return k
    };
    d.extend({
        expando: "jQuery" +
        ("1.11.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(h) {
            throw Error(h);
        },
        noop: function() {},
        isFunction: function(h) {
            return "function" === d.type(h)
        },
        isArray: Array.isArray || function(h) {
            return "array" === d.type(h)
        },
        isWindow: function(h) {
            return null != h && h == h.window
        },
        isNumeric: function(h) {
            return !d.isArray(h) && 0 <= h - parseFloat(h)
        },
        isEmptyObject: function(h) {
            for (var a in h)
                return !1;
            return !0
        },
        isPlainObject: function(h) {
            var a;
            if (!h || "object" !== d.type(h) || h.nodeType || d.isWindow(h))
                return !1;
            try {
                if (h.constructor &&
                !La.call(h, "constructor")&&!La.call(h.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (b) {
                return !1
            }
            if (x.ownLast)
                for (a in h)
                    return La.call(h, a);
            for (a in h);
            return void 0 === a || La.call(h, a)
        },
        type: function(h) {
            return null == h ? h + "" : "object" == typeof h || "function" == typeof h ? Za[oc.call(h)] || "object" : typeof h
        },
        globalEval: function(h) {
            h && d.trim(h) && (m.execScript || function(h) {
                m.eval.call(m, h)
            })(h)
        },
        camelCase: function(h) {
            return h.replace(Yb, "ms-").replace(Eb, qc)
        },
        nodeName: function(h, a) {
            return h.nodeName && h.nodeName.toLowerCase() ===
            a.toLowerCase()
        },
        each: function(h, a, b) {
            var c, d = 0, g = h.length, f = l(h);
            if (b)
                if (f)
                    for (; g > d&&!(c = a.apply(h[d], b), !1 === c); d++);
                else 
                    for (d in h) {
                        if (c = a.apply(h[d], b), !1 === c)
                            break
                    } else if (f)
                for (; g > d&&!(c = a.call(h[d], d, h[d]), !1 === c); d++);
            else 
                for (d in h)
                    if (c = a.call(h[d], d, h[d]), !1 === c)
                        break;
            return h
        },
        trim: function(h) {
            return null == h ? "" : (h + "").replace(pc, "")
        },
        makeArray: function(h, a) {
            var b = a || [];
            return null != h && (l(Object(h)) ? d.merge(b, "string" == typeof h ? [h] : h) : Db.call(b, h)), b
        },
        inArray: function(h, a, b) {
            var c;
            if (a) {
                if (Xb)
                    return Xb.call(a,
                    h, b);
                c = a.length;
                for (b = b ? 0 > b ? Math.max(0, c + b) : b : 0; c > b; b++)
                    if (b in a && a[b] === h)
                        return b
            }
            return - 1
        },
        merge: function(h, a) {
            for (var b =+ a.length, c = 0, d = h.length; b > c;)
                h[d++] = a[c++];
            if (b !== b)
                for (; void 0 !== a[c];)
                    h[d++] = a[c++];
            return h.length = d, h
        },
        grep: function(h, a, b) {
            for (var c = [], d = 0, g = h.length, f=!b; g > d; d++)
                b=!a(h[d], d), b !== f && c.push(h[d]);
            return c
        },
        map: function(h, a, b) {
            var c, d = 0, g = h.length, f = [];
            if (l(h))
                for (; g > d; d++)
                    c = a(h[d], d, b), null != c && f.push(c);
            else 
                for (d in h)
                    c = a(h[d], d, b), null != c && f.push(c);
            return Wb.apply([],
            f)
        },
        guid: 1,
        proxy: function(h, a) {
            var b, c, g;
            return "string" == typeof a && (g = h[a], a = h, h = g), d.isFunction(h) ? (b = Ha.call(arguments, 2), c = function() {
                return h.apply(a || this, b.concat(Ha.call(arguments)))
            }, c.guid = h.guid = h.guid || d.guid++, c) : void 0
        },
        now: function() {
            return + new Date
        },
        support: x
    });
    d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(h, a) {
        Za["[object " + a + "]"] = a.toLowerCase()
    });
    var Va, Fb = m, X = function(h, a, b, c) {
        var d, g, f, k, j;
        if ((a ? a.ownerDocument || a : T) !== ka && Ra(a), a = a ||
        ka, b = b || [], !h || "string" != typeof h)
            return b;
        if (1 !== (k = a.nodeType) && 9 !== k)
            return [];
        if (va&&!c) {
            if (d = sa.exec(h))
                if (f = d[1])
                    if (9 === k) {
                        if (g = a.getElementById(f), !g ||!g.parentNode)
                            return b;
                            if (g.id === f)
                                return b.push(g), b
                    } else {
                        if (a.ownerDocument && (g = a.ownerDocument.getElementById(f)) && $a(a, g) && g.id === f)
                            return b.push(g), b
                    } else {
                        if (d[2])
                            return Sa.apply(b, a.getElementsByTagName(h)), b;
                            if ((f = d[3]) && ba.getElementsByClassName && a.getElementsByClassName)
                                return Sa.apply(b, a.getElementsByClassName(f)), b
                    }
            if (ba.qsa && (!ha ||
            !ha.test(h))) {
                if (g = d = R, f = a, j = 9 === k && h, 1 === k && "object" !== a.nodeName.toLowerCase()) {
                    k = Ma(h);
                    (d = a.getAttribute("id")) ? g = d.replace(ib, "\\$&") : a.setAttribute("id", g);
                    g = "[id='" + g + "'] ";
                    for (f = k.length; f--;)
                        k[f] = g + ub(k[f]);
                    f = ab.test(h) && Gb(a.parentNode) || a;
                    j = k.join(",")
                }
                if (j)
                    try {
                        return Sa.apply(b, f.querySelectorAll(j)), b
                } catch (e) {} finally {
                    d || a.removeAttribute("id")
                }
            }
        }
        return Zb(h.replace(za, "$1"), a, b, c)
    }, Hb = function() {
        function h(b, c) {
            return a.push(b + " ") > Q.cacheLength && delete h[a.shift()], h[b + " "] = c
        }
        var a =
        [];
        return h
    }, Aa = function(h) {
        return h[R]=!0, h
    }, qa = function(h) {
        var a = ka.createElement("div");
        try {
            return !!h(a)
        } catch (b) {
            return !1
        } finally {
            a.parentNode && a.parentNode.removeChild(a)
        }
    }, jb = function(h, a) {
        for (var b = h.split("|"), c = h.length; c--;)
            Q.attrHandle[b[c]] = a
    }, Ib = function(h, a) {
        var b = a && h, c = b && 1 === h.nodeType && 1 === a.nodeType && (~a.sourceIndex || ga) - (~h.sourceIndex || ga);
        if (c)
            return c;
        if (b)
            for (; b = b.nextSibling;)
                if (b === a)
                    return - 1;
        return h ? 1 : - 1
    }, rc = function(h) {
        return function(a) {
            return "input" === a.nodeName.toLowerCase() &&
            a.type === h
        }
    }, sc = function(h) {
        return function(a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b || "button" === b) && a.type === h
        }
    }, Ta = function(h) {
        return Aa(function(a) {
            return a =+ a, Aa(function(b, c) {
                for (var d, g = h([], b.length, a), f = g.length; f--;)
                    b[d = g[f]] && (b[d]=!(c[d] = b[d]))
            })
        })
    }, Gb = function(h) {
        return h && typeof h.getElementsByTagName !== B && h
    }, ta = function() {}, ub = function(h) {
        for (var a = 0, b = h.length, c = ""; b > a; a++)
            c += h[a].value;
        return c
    }, bb = function(h, a, b) {
        var c = a.dir, d = b && "parentNode" === c, g = $b++;
        return a.first ?
        function(a, b, E) {
            for (; a = a[c];)
                if (1 === a.nodeType || d)
                    return h(a, b, E)
        } : function(a, b, E) {
            var s, f, k = [wa, g];
            if (E)
                for (; a = a[c];) {
                    if ((1 === a.nodeType || d) && h(a, b, E))
                        return !0
                } else 
                    for (; a = a[c];)
                        if (1 === a.nodeType || d) {
                            if (f = a[R] || (a[R] = {}), (s = f[c]) && s[0] === wa && s[1] === g)
                                return k[2] = s[2];
                                if (f[c] = k, k[2] = h(a, b, E))
                                    return !0
                        }
        }
    }, Ba = function(h) {
        return 1 < h.length ? function(a, b, c) {
            for (var d = h.length; d--;)
                if (!h[d](a, b, c))
                    return !1;
            return !0
        } : h[0]
    }, kb = function(h, a, b, c, d) {
        for (var g, f = [], k = 0, j = h.length, e = null != a; j > k; k++)(g = h[k]) 
            && (!b ||
            b(g, c, d)) && (f.push(g), e && a.push(k));
        return f
    }, lb = function(h, a, b, c, d, g) {
        return c&&!c[R] && (c = lb(c)), d&&!d[R] && (d = lb(d, g)), Aa(function(g, f, k, j) {
            var ja, e, q = [], o = [], n = f.length, r;
            if (!(r = g)) {
                r = a || "*";
                for (var i = k.nodeType ? [k] : k, L = [], G = 0, l = i.length; l > G; G++)
                    X(r, i[G], L);
                r = L
            }
            r=!h ||!g && a ? r : kb(r, q, h, k, j);
            i = b ? d || (g ? h : n || c) ? [] : f : r;
            if (b && b(r, i, k, j), c) {
                ja = kb(i, o);
                c(ja, [], k, j);
                for (k = ja.length; k--;)(e = ja[k]) 
                    && (i[o[k]]=!(r[o[k]] = e))
            }
            if (g) {
                if (d || h) {
                    if (d) {
                        ja = [];
                        for (k = i.length; k--;)(e = i[k]) 
                            && ja.push(r[k] = e);
                        d(null, i = [],
                        ja, j)
                    }
                    for (k = i.length; k--;)(e = i[k])
                        &&-1 < (ja = d ? cb.call(g, e) : q[k]) && (g[ja]=!(f[ja] = e))
                    }
            } else 
                i = kb(i === f ? i.splice(n, i.length) : i), d ? d(null, f, i, j) : Sa.apply(f, i)
        })
    }, Jb = function(h) {
        var a, b, c, d = h.length, g = Q.relative[h[0].type];
        b = g || Q.relative[" "];
        for (var f = g ? 1 : 0, k = bb(function(h) {
            return h === a
        }, b, !0), j = bb(function(h) {
            return - 1 < cb.call(a, h)
        }, b, !0), e = [function(h, b, c) {
            return !g && (c || b !== mb) || ((a = b).nodeType ? k(h, b, c) : j(h, b, c))
        }
        ]; d > f; f++)
            if (b = Q.relative[h[f].type])
                e = [bb(Ba(e), b)];
            else {
                if (b = Q.filter[h[f].type].apply(null,
                h[f].matches), b[R]) {
                    for (c=++f; d > c&&!Q.relative[h[c].type]; c++);
                    return lb(1 < f && Ba(e), 1 < f && ub(h.slice(0, f - 1).concat({
                        value: " " === h[f - 2].type ? "*": ""
                    })).replace(za, "$1"), b, c > f && Jb(h.slice(f, c)), d > c && Jb(h = h.slice(c)), d > c && ub(h))
                }
                e.push(b)
            }
        return Ba(e)
    }, db, ba, Q, O, ac, Ma, Kb, Zb, mb, Na, Ua, Ra, ka, Ia, va, ha, na, vb, $a, R = "sizzle" +- new Date, T = Fb.document, wa = 0, $b = 0, ra = Hb(), Lb = Hb(), bc = Hb(), Mb = function(h, a) {
        return h === a && (Ua=!0), 0
    }, B = "undefined", ga =- 2147483648, V = {}.hasOwnProperty, I = [], da = I.pop, cc = I.push, Sa = I.push, wb = I.slice,
    cb = I.indexOf || function(h) {
        for (var a = 0, b = this.length; b > a; a++)
            if (this[a] === h)
                return a;
        return - 1
    }, tc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), uc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tc + "))|)[\\x20\\t\\r\\n\\f]*\\]", xb = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + uc + ")*)|.*)\\)|)", za =
    RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), vc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, wc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, dc = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), xc = RegExp(xb), Ca = RegExp("^" + tc + "$"), Wa = {
        ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
        CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
        TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
        ATTR: RegExp("^" + uc),
        PSEUDO: RegExp("^" + xb),
        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
        "i"),
        bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
        needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
    }, nb = /^(?:input|select|textarea|button)$/i, yc = /^h\d$/i, eb = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, ib = /'|\\/g, Ja = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)",
    "ig"), Xa = function(h, a, b) {
        h = "0x" + a - 65536;
        return h !== h || b ? a : 0 > h ? String.fromCharCode(h + 65536) : String.fromCharCode(h>>10 | 55296, 1023 & h | 56320)
    };
    try {
        Sa.apply(I = wb.call(T.childNodes), T.childNodes), I[T.childNodes.length].nodeType
    } catch (Yc) {
        Sa = {
            apply: I.length ? function(h, a) {
                cc.apply(h, wb.call(a))
            }
            : function(h, a) {
                for (var b = h.length, c = 0; h[b++] = a[c++];);
                h.length = b - 1
            }
        }
    }
    ba = X.support = {};
    ac = X.isXML = function(h) {
        return (h = h && (h.ownerDocument || h).documentElement) ? "HTML" !== h.nodeName : !1
    };
    Ra = X.setDocument = function(h) {
        var a,
        b = h ? h.ownerDocument || h: T, h = b.defaultView;
        return b !== ka && 9 === b.nodeType && b.documentElement ? (ka = b, Ia = b.documentElement, va=!ac(b), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function() {
            Ra()
        }, !1) : h.attachEvent && h.attachEvent("onunload", function() {
            Ra()
        })), ba.attributes = qa(function(h) {
            return h.className = "i", !h.getAttribute("className")
        }), ba.getElementsByTagName = qa(function(h) {
            return h.appendChild(b.createComment("")), !h.getElementsByTagName("*").length
        }), ba.getElementsByClassName = eb.test(b.getElementsByClassName) &&
        qa(function(h) {
            return h.innerHTML = "<div class='a'></div><div class='a i'></div>", h.firstChild.className = "i", 2 === h.getElementsByClassName("i").length
        }), ba.getById = qa(function(h) {
            return Ia.appendChild(h).id = R, !b.getElementsByName ||!b.getElementsByName(R).length
        }), ba.getById ? (Q.find.ID = function(h, a) {
            if (typeof a.getElementById !== B && va) {
                var b = a.getElementById(h);
                return b && b.parentNode ? [b] : []
            }
        }, Q.filter.ID = function(h) {
            var a = h.replace(Ja, Xa);
            return function(h) {
                return h.getAttribute("id") === a
            }
        }) : (delete Q.find.ID,
        Q.filter.ID = function(h) {
            var a = h.replace(Ja, Xa);
            return function(h) {
                return (h = typeof h.getAttributeNode !== B && h.getAttributeNode("id")) && h.value === a
            }
        }), Q.find.TAG = ba.getElementsByTagName ? function(h, a) {
            return typeof a.getElementsByTagName !== B ? a.getElementsByTagName(h) : void 0
        } : function(h, a) {
            var b, c = [], E = 0, s = a.getElementsByTagName(h);
            if ("*" === h) {
                for (; b = s[E++];)
                    1 === b.nodeType && c.push(b);
                return c
            }
            return s
        }, Q.find.CLASS = ba.getElementsByClassName && function(h, a) {
            return typeof a.getElementsByClassName !== B && va ?
            a.getElementsByClassName(h) : void 0
        }, na = [], ha = [], (ba.qsa = eb.test(b.querySelectorAll)) && (qa(function(h) {
            h.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
            h.querySelectorAll("[msallowclip^='']").length && ha.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            h.querySelectorAll("[selected]").length || ha.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
            h.querySelectorAll(":checked").length ||
            ha.push(":checked")
        }), qa(function(h) {
            var a = b.createElement("input");
            a.setAttribute("type", "hidden");
            h.appendChild(a).setAttribute("name", "D");
            h.querySelectorAll("[name=d]").length && ha.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
            h.querySelectorAll(":enabled").length || ha.push(":enabled", ":disabled");
            h.querySelectorAll("*,:x");
            ha.push(",.*:")
        })), (ba.matchesSelector = eb.test(vb = Ia.matches || Ia.webkitMatchesSelector || Ia.mozMatchesSelector || Ia.oMatchesSelector || Ia.msMatchesSelector)) && qa(function(h) {
            ba.disconnectedMatch =
            vb.call(h, "div");
            vb.call(h, "[s!='']:x");
            na.push("!=", xb)
        }), ha = ha.length && RegExp(ha.join("|")), na = na.length && RegExp(na.join("|")), a = eb.test(Ia.compareDocumentPosition), $a = a || eb.test(Ia.contains) ? function(h, a) {
            var b = 9 === h.nodeType ? h.documentElement: h, c = a && a.parentNode;
            return h === c ||!(!c || 1 !== c.nodeType ||!(b.contains ? b.contains(c) : h.compareDocumentPosition && 16 & h.compareDocumentPosition(c)))
        } : function(h, a) {
            if (a)
                for (; a = a.parentNode;)
                    if (a === h)
                        return !0;
            return !1
        }, Mb = a ? function(h, a) {
            if (h === a)
                return Ua=!0,
                0;
            var c=!h.compareDocumentPosition-!a.compareDocumentPosition;
            return c ? c : (c = (h.ownerDocument || h) === (a.ownerDocument || a) ? h.compareDocumentPosition(a) : 1, 1 & c ||!ba.sortDetached && a.compareDocumentPosition(h) === c ? h === b || h.ownerDocument === T && $a(T, h)?-1 : a === b || a.ownerDocument === T && $a(T, a) ? 1 : Na ? cb.call(Na, h) - cb.call(Na, a) : 0 : 4 & c?-1 : 1)
        } : function(h, a) {
            if (h === a)
                return Ua=!0, 0;
            var c, E = 0;
            c = h.parentNode;
            var d = a.parentNode, g = [h], f = [a];
            if (!c ||!d)
                return h === b?-1 : a === b ? 1 : c?-1 : d ? 1 : Na ? cb.call(Na, h) - cb.call(Na, a) : 0;
            if (c ===
            d)
                return Ib(h, a);
            for (c = h; c = c.parentNode;)
                g.unshift(c);
            for (c = a; c = c.parentNode;)
                f.unshift(c);
            for (; g[E] === f[E];)
                E++;
            return E ? Ib(g[E], f[E]) : g[E] === T?-1 : f[E] === T ? 1 : 0
        }, b) : ka
    };
    X.matches = function(h, a) {
        return X(h, null, null, a)
    };
    X.matchesSelector = function(h, a) {
        if ((h.ownerDocument || h) !== ka && Ra(h), a = a.replace(dc, "='$1']"), !(!ba.matchesSelector ||!va || na && na.test(a) || ha && ha.test(a)))
            try {
                var b = vb.call(h, a);
                if (b || ba.disconnectedMatch || h.document && 11 !== h.document.nodeType)
                    return b
        } catch (c) {}
        return 0 < X(a, ka, null, [h]).length
    };
    X.contains = function(h, a) {
        return (h.ownerDocument || h) !== ka && Ra(h), $a(h, a)
    };
    X.attr = function(h, a) {
        (h.ownerDocument || h) !== ka && Ra(h);
        var b = Q.attrHandle[a.toLowerCase()], b = b && V.call(Q.attrHandle, a.toLowerCase()) ? b(h, a, !va): void 0;
        return void 0 !== b ? b : ba.attributes ||!va ? h.getAttribute(a) : (b = h.getAttributeNode(a)) && b.specified ? b.value : null
    };
    X.error = function(h) {
        throw Error("Syntax error, unrecognized expression: " + h);
    };
    X.uniqueSort = function(h) {
        var a, b = [], c = 0, d = 0;
        if (Ua=!ba.detectDuplicates, Na=!ba.sortStable &&
        h.slice(0), h.sort(Mb), Ua) {
            for (; a = h[d++];)
                a === h[d] && (c = b.push(d));
            for (; c--;)
                h.splice(b[c], 1)
        }
        return Na = null, h
    };
    O = X.getText = function(h) {
        var a, b = "", c = 0;
        if (a = h.nodeType)
            if (1 === a || 9 === a || 11 === a) {
                if ("string" == typeof h.textContent)
                    return h.textContent;
                    for (h = h.firstChild; h; h = h.nextSibling)
                        b += O(h)
            } else {
                if (3 === a || 4 === a)
                    return h.nodeValue
            } else 
                for (; a = h[c++];)
                    b += O(a);
        return b
    };
    Q = X.selectors = {
        cacheLength: 50,
        createPseudo: Aa,
        match: Wa,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(h) {
                return h[1] = h[1].replace(Ja, Xa), h[3] = (h[3] || h[4] || h[5] || "").replace(Ja, Xa), "~=" === h[2] && (h[3] = " " + h[3] + " "), h.slice(0, 4)
            },
            CHILD: function(h) {
                return h[1] = h[1].toLowerCase(), "nth" === h[1].slice(0, 3) ? (h[3] || X.error(h[0]), h[4] =+ (h[4] ? h[5] + (h[6] || 1) : 2 * ("even" === h[3] || "odd" === h[3])), h[5] =+ (h[7] + h[8] || "odd" === h[3])) : h[3] && X.error(h[0]), h
            },
            PSEUDO: function(h) {
                var a, b=!h[6] && h[2];
                return Wa.CHILD.test(h[0]) ? null : (h[3] ?
                h[2] = h[4] || h[5] || "" : b && xc.test(b) && (a = Ma(b, !0)) && (a = b.indexOf(")", b.length - a) - b.length) && (h[0] = h[0].slice(0, a), h[2] = b.slice(0, a)), h.slice(0, 3))
            }
        },
        filter: {
            TAG: function(h) {
                var a = h.replace(Ja, Xa).toLowerCase();
                return "*" === h ? function() {
                    return !0
                } : function(h) {
                    return h.nodeName && h.nodeName.toLowerCase() === a
                }
            },
            CLASS: function(h) {
                var a = ra[h + " "];
                return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + h + "([\\x20\\t\\r\\n\\f]|$)")) && ra(h, function(h) {
                    return a.test("string" == typeof h.className && h.className || typeof h.getAttribute !==
                    B && h.getAttribute("class") || "")
                })
            },
            ATTR: function(h, a, b) {
                return function(c) {
                    c = X.attr(c, h);
                    return null == c ? "!=" === a : a ? (c += "", "=" === a ? c === b : "!=" === a ? c !== b : "^=" === a ? b && 0 === c.indexOf(b) : "*=" === a ? b&&-1 < c.indexOf(b) : "$=" === a ? b && c.slice( - b.length) === b : "~=" === a?-1 < (" " + c + " ").indexOf(b) : "|=" === a ? c === b || c.slice(0, b.length + 1) === b + "-" : !1) : !0
                }
            },
            CHILD: function(h, a, b, c, d) {
                var g = "nth" !== h.slice(0, 3), f = "last" !== h.slice( - 4), k = "of-type" === a;
                return 1 === c && 0 === d ? function(h) {
                    return !!h.parentNode
                } : function(a, b, E) {
                    var s,
                    j, e, q, o, b = g !== f ? "nextSibling": "previousSibling", n = a.parentNode, r = k && a.nodeName.toLowerCase(), E=!E&&!k;
                    if (n) {
                        if (g) {
                            for (; b;) {
                                for (j = a; j = j[b];)
                                    if (k ? j.nodeName.toLowerCase() === r : 1 === j.nodeType)
                                        return !1;
                                o = b = "only" === h&&!o && "nextSibling"
                            }
                            return !0
                        }
                        if (o = [f ? n.firstChild: n.lastChild], f && E) {
                            E = n[R] || (n[R] = {});
                            s = E[h] || [];
                            q = s[0] === wa && s[1];
                            e = s[0] === wa && s[2];
                            for (j = q && n.childNodes[q]; j=++q && j && j[b] || (e = q = 0) 
                                || o.pop();
                            )if (1 === j.nodeType&&++e && j === a) {
                                E[h] = [wa, q, e];
                                break
                            }
                        } else if (E && (s = (a[R] || (a[R] = {}))[h]) && s[0] === wa)
                            e =
                            s[1];
                        else 
                            for (; (j=++q && j && j[b] || (e = q = 0) || o.pop()) 
                                && (!(k ? j.nodeName.toLowerCase() === r : 1 === j.nodeType)||!++e ||!(E && ((j[R] || (j[R] = {}))[h] = [wa, e]), j === a));
                        );
                        return e -= d, e === c || 0 === e%c && 0 <= e / c
                    }
                }
            },
            PSEUDO: function(h, a) {
                var b, c = Q.pseudos[h] || Q.setFilters[h.toLowerCase()] || X.error("unsupported pseudo: " + h);
                return c[R] ? c(a) : 1 < c.length ? (b = [h, h, "", a], Q.setFilters.hasOwnProperty(h.toLowerCase()) ? Aa(function(h, b) {
                    for (var d, s = c(h, a), g = s.length; g--;)
                        d = cb.call(h, s[g]), h[d]=!(b[d] = s[g])
                }) : function(h) {
                    return c(h, 0,
                    b)
                }) : c
            }
        },
        pseudos: {
            not: Aa(function(h) {
                var a = [], b = [], c = Kb(h.replace(za, "$1"));
                return c[R] ? Aa(function(h, a, b, d) {
                    for (var E, b = c(h, null, d, []), d = h.length; d--;)(E = b[d]) 
                        && (h[d]=!(a[d] = E))
                }) : function(h, d, g) {
                    return a[0] = h, c(a, null, g, b), !b.pop()
                }
            }),
            has: Aa(function(h) {
                return function(a) {
                    return 0 < X(h, a).length
                }
            }),
            contains: Aa(function(h) {
                return function(a) {
                    return - 1 < (a.textContent || a.innerText || O(a)).indexOf(h)
                }
            }),
            lang: Aa(function(h) {
                return Ca.test(h || "") || X.error("unsupported lang: " + h), h = h.replace(Ja, Xa).toLowerCase(),
                function(a) {
                    var b;
                    do 
                        if (b = va ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang"))
                            return b = b.toLowerCase(), b === h || 0 === b.indexOf(h + "-");
                    while ((a = a.parentNode) && 1 === a.nodeType);
                    return !1
                }
            }),
            target: function(h) {
                var a = Fb.location && Fb.location.hash;
                return a && a.slice(1) === h.id
            },
            root: function(h) {
                return h === Ia
            },
            focus: function(h) {
                return h === ka.activeElement && (!ka.hasFocus || ka.hasFocus())&&!(!h.type&&!h.href&&!~h.tabIndex)
            },
            enabled: function(h) {
                return !1 === h.disabled
            },
            disabled: function(h) {
                return !0 === h.disabled
            },
            checked: function(h) {
                var a = h.nodeName.toLowerCase();
                return "input" === a&&!!h.checked || "option" === a&&!!h.selected
            },
            selected: function(h) {
                return h.parentNode && h.parentNode.selectedIndex, !0 === h.selected
            },
            empty: function(h) {
                for (h = h.firstChild; h; h = h.nextSibling)
                    if (6 > h.nodeType)
                        return !1;
                return !0
            },
            parent: function(h) {
                return !Q.pseudos.empty(h)
            },
            header: function(h) {
                return yc.test(h.nodeName)
            },
            input: function(h) {
                return nb.test(h.nodeName)
            },
            button: function(h) {
                var a = h.nodeName.toLowerCase();
                return "input" === a && "button" ===
                h.type || "button" === a
            },
            text: function(h) {
                var a;
                return "input" === h.nodeName.toLowerCase() && "text" === h.type && (null == (a = h.getAttribute("type")) || "text" === a.toLowerCase())
            },
            first: Ta(function() {
                return [0]
            }),
            last: Ta(function(h, a) {
                return [a - 1]
            }),
            eq: Ta(function(h, a, b) {
                return [0 > b ? b + a: b]
            }),
            even: Ta(function(h, a) {
                for (var b = 0; a > b; b += 2)
                    h.push(b);
                return h
            }),
            odd: Ta(function(h, a) {
                for (var b = 1; a > b; b += 2)
                    h.push(b);
                return h
            }),
            lt: Ta(function(h, a, b) {
                for (a = 0 > b ? b + a : b; 0<=--a;)
                    h.push(a);
                return h
            }),
            gt: Ta(function(h, a, b) {
                for (b = 0 > b ?
                b + a : b; ++b < a;)
                    h.push(b);
                return h
            })
        }
    };
    Q.pseudos.nth = Q.pseudos.eq;
    for (db in{
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    })
        Q.pseudos[db] = rc(db);
    for (db in{
        submit: !0,
        reset: !0
    })
        Q.pseudos[db] = sc(db);
    ta.prototype = Q.filters = Q.pseudos;
    Q.setFilters = new ta;
    Ma = X.tokenize = function(h, a) {
        var b, c, d, g, f, k, j;
        if (f = Lb[h + " "])
            return a ? 0 : f.slice(0);
        f = h;
        k = [];
        for (j = Q.preFilter; f;) {
            (!b || (c = vc.exec(f))) && (c && (f = f.slice(c[0].length) || f), k.push(d = []));
            b=!1;
            (c = wc.exec(f)) && (b = c.shift(), d.push({
                value: b,
                type: c[0].replace(za,
                " ")
            }), f = f.slice(b.length));
            for (g in Q.filter)
                !(c = Wa[g].exec(f)) || j[g]&&!(c = j[g](c)) || (b = c.shift(), d.push({
                    value: b,
                    type: g,
                    matches: c
                }), f = f.slice(b.length));
            if (!b)
                break
        }
        return a ? f.length : f ? X.error(h) : Lb(h, k).slice(0)
    };
    Va = (Kb = X.compile = function(h, a) {
        var b, c = [], d = [], g = bc[h + " "];
        if (!g) {
            a || (a = Ma(h));
            for (b = a.length; b--;)
                g = Jb(a[b]), g[R] ? c.push(g) : d.push(g);
            var f = 0 < c.length, k = 0 < d.length;
            b = function(h, a, b, E, s) {
                var g, j, e, q = 0, ja = "0", o = h && [], n = [], r = mb, i = h || k && Q.find.TAG("*", s), L = wa += null == r ? 1: Math.random() || 0.1,
                G = i.length;
                for (s && (mb = a !== ka && a); ja !== G && null != (g = i[ja]); ja++) {
                    if (k && g) {
                        for (j = 0; e = d[j++];)
                            if (e(g, a, b)) {
                                E.push(g);
                                break
                            }
                        s && (wa = L)
                    }
                    f && ((g=!e && g) && q--, h && o.push(g))
                }
                if (q += ja, f && ja !== q) {
                    for (j = 0; e = c[j++];)
                        e(o, n, a, b);
                    if (h) {
                        if (0 < q)
                            for (; ja--;)
                                o[ja] || n[ja] || (n[ja] = da.call(E));
                        n = kb(n)
                    }
                    Sa.apply(E, n);
                    s&&!h && 0 < n.length && 1 < q + c.length && X.uniqueSort(E)
                }
                return s && (wa = L, mb = r), o
            };
            b = f ? Aa(b) : b;
            g = bc(h, b);
            g.selector = h
        }
        return g
    }, Zb = X.select = function(h, a, b, c) {
        var d, g, f, k, j, e = "function" == typeof h && h, q=!c && Ma(h = e.selector ||
        h);
        if (b = b || [], 1 === q.length) {
            if (g = q[0] = q[0].slice(0), 2 < g.length && "ID" === (f = g[0]).type && ba.getById && 9 === a.nodeType && va && Q.relative[g[1].type]) {
                if (a = (Q.find.ID(f.matches[0].replace(Ja, Xa), a) || [])[0], !a)
                    return b;
                e && (a = a.parentNode);
                h = h.slice(g.shift().value.length)
            }
            for (d = Wa.needsContext.test(h) ? 0 : g.length; d--&&!(f = g[d], Q.relative[k = f.type]);)
                if ((j = Q.find[k]) && (c = j(f.matches[0].replace(Ja, Xa), ab.test(g[0].type) && Gb(a.parentNode) || a))) {
                    if (g.splice(d, 1), h = c.length && ub(g), !h)
                        return Sa.apply(b, c), b;
                        break
                }
        }
        return (e ||
        Kb(h, q))(c, a, !va, b, ab.test(h) && Gb(a.parentNode) || a), b
    }, ba.sortStable = R.split("").sort(Mb).join("") === R, ba.detectDuplicates=!!Ua, Ra(), ba.sortDetached = qa(function(h) {
        return 1 & h.compareDocumentPosition(ka.createElement("div"))
    }), qa(function(h) {
        return h.innerHTML = "<a href='#'></a>", "#" === h.firstChild.getAttribute("href")
    }) || jb("type|href|height|width", function(h, a, b) {
        return b ? void 0 : h.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
    }), ba.attributes && qa(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value",
        ""), "" === a.firstChild.getAttribute("value")
    }) || jb("value", function(a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), qa(function(a) {
        return null == a.getAttribute("disabled")
    }) || jb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
        var d;
        return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), X);
    d.find = Va;
    d.expr = Va.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.unique = Va.uniqueSort;
    d.text = Va.getText;
    d.isXMLDoc = Va.isXML;
    d.contains = Va.contains;
    var ec = d.expr.match.needsContext, ia = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ic = /^.[^:#\[\.,]*$/;
    d.filter = function(a, b, c) {
        var g = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === g.nodeType ? d.find.matchesSelector(g, a) ? [g] : [] : d.find.matches(a, d.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    };
    d.fn.extend({
        find: function(a) {
            var b, c = [], g = this, f = g.length;
            if ("string" != typeof a)
                return this.pushStack(d(a).filter(function() {
                    for (b = 0; f > b; b++)
                        if (d.contains(g[b],
                        this))
                            return !0
                        }));
            for (b = 0; f > b; b++)
                d.find(a, g[b], c);
            return c = this.pushStack(1 < f ? d.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(v(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(v(this, a || [], !0))
        },
        is: function(a) {
            return !!v(this, "string" == typeof a && ec.test(a) ? d(a) : a || [], !1).length
        }
    });
    var ob, H = m.document, fc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(a, b) {
        var c, g;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : fc.exec(a), !c ||!c[1] && b)
                return !b || b.jquery ? (b || ob).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof d ? b[0] : b, d.merge(this, d.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : H, !0)), ia.test(c[1]) && d.isPlainObject(b))
                    for (c in b)
                        d.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (g = H.getElementById(c[2]), g && g.parentNode) {
                if (g.id !== c[2])
                    return ob.find(a);
                this.length = 1;
                this[0] = g
            }
            return this.context = H, this.selector = a, this
        }
        return a.nodeType ?
        (this.context = this[0] = a, this.length = 1, this) : d.isFunction(a) ? "undefined" != typeof ob.ready ? ob.ready(a) : a(d) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), d.makeArray(a, this))
    }).prototype = d.fn;
    ob = d(H);
    var gc = /^(?:parents|prev(?:Until|All))/, Nb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    d.extend({
        dir: function(a, b, c) {
            for (var g = [], a = a[b]; a && 9 !== a.nodeType && (void 0 === c || 1 !== a.nodeType ||!d(a).is(c));
            )1 === a.nodeType && g.push(a), a = a[b];
            return g
        },
        sibling: function(a, b) {
            for (var c = []; a; a =
            a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    d.fn.extend({
        has: function(a) {
            var b, c = d(a, this), g = c.length;
            return this.filter(function() {
                for (b = 0; g > b; b++)
                    if (d.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, g = 0, f = this.length, k = [], j = ec.test(a) || "string" != typeof a ? d(a, b || this.context) : 0; f > g; g++)
                for (c = this[g]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (j?-1 < j.index(c) : 1 === c.nodeType && d.find.matchesSelector(c, a))
                        ) {
                k.push(c);
                break
            }
            return this.pushStack(1 < k.length ? d.unique(k) : k)
        },
        index: function(a) {
            return a ? "string" == typeof a ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(a, b) {
            return this.pushStack(d.unique(d.merge(this.get(), d(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    d.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return d.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return d.dir(a,
            "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return d.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return d.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return d.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return d.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return d.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return d.sibling(a.firstChild)
        },
        contents: function(a) {
            return d.nodeName(a,
            "iframe") ? a.contentDocument || a.contentWindow.document : d.merge([], a.childNodes)
        }
    }, function(a, b) {
        d.fn[a] = function(c, g) {
            var f = d.map(this, b, c);
            return "Until" !== a.slice( - 5) && (g = c), g && "string" == typeof g && (f = d.filter(g, f)), 1 < this.length && (Nb[a] || (f = d.unique(f)), gc.test(a) && (f = f.reverse())), this.pushStack(f)
        }
    });
    var Ga = /\S+/g, hc = {};
    d.Callbacks = function(a) {
        var b;
        if ("string" == typeof a) {
            if (!(b = hc[a])) {
                b = a;
                var c = hc[b] = {};
                b = (d.each(b.match(Ga) || [], function(a, h) {
                    c[h]=!0
                }), c)
            }
        } else 
            b = d.extend({}, a);
        var a = b, g, f, k,
        j, e, q, o = [], n=!a.once && [], r = function(b) {
            f = a.memory && b;
            k=!0;
            e = q || 0;
            q = 0;
            j = o.length;
            for (g=!0; o && j > e; e++)
                if (!1 === o[e].apply(b[0], b[1]) && a.stopOnFalse) {
                    f=!1;
                    break
                }
            g=!1;
            o && (n ? n.length && r(n.shift()) : f ? o = [] : i.disable())
        }, i = {
            add: function() {
                if (o) {
                    var b = o.length;
                    !function td(b) {
                        d.each(b, function(b, c) {
                            var g = d.type(c);
                            "function" === g ? a.unique && i.has(c) || o.push(c) : c && c.length && "string" !== g && td(c)
                        })
                    }(arguments);
                    g ? j = o.length : f && (q = b, r(f))
                }
                return this
            },
            remove: function() {
                return o && d.each(arguments, function(a, h) {
                    for (var b; - 1 <
                    (b = d.inArray(h, o, b));)
                        o.splice(b, 1), g && (j >= b && j--, e >= b && e--)
                }), this
            },
            has: function(a) {
                return a?-1 < d.inArray(a, o) : !(!o ||!o.length)
            },
            empty: function() {
                return o = [], j = 0, this
            },
            disable: function() {
                return o = n = f = void 0, this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return n = void 0, f || i.disable(), this
            },
            locked: function() {
                return !n
            },
            fireWith: function(a, h) {
                return !o || k&&!n || (h = h || [], h = [a, h.slice ? h.slice(): h], g ? n.push(h) : r(h)), this
            },
            fire: function() {
                return i.fireWith(this, arguments), this
            },
            fired: function() {
                return !!k
            }
        };
        return i
    };
    d.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]], c = "pending", g = {
                state: function() {
                    return c
                },
                always: function() {
                    return f.done(arguments).fail(arguments), this
                },
                then: function() {
                    var a = arguments;
                    return d.Deferred(function(h) {
                        d.each(b, function(b, c) {
                            var E = d.isFunction(a[b]) && a[b];
                            f[c[1]](function() {
                                var a = E && E.apply(this, arguments);
                                a && d.isFunction(a.promise) ?
                                a.promise().done(h.resolve).fail(h.reject).progress(h.notify) : h[c[0] + "With"](this === g ? h.promise() : this, E ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? d.extend(a, g) : g
                }
            }, f = {};
            return g.pipe = g.then, d.each(b, function(a, h) {
                var d = h[2], k = h[3];
                g[h[1]] = d.add;
                k && d.add(function() {
                    c = k
                }, b[1^a][2].disable, b[2][2].lock);
                f[h[0]] = function() {
                    return f[h[0] + "With"](this === f ? g : this, arguments), this
                };
                f[h[0] + "With"] = d.fireWith
            }), g.promise(f), a && a.call(f, f), f
        },
        when: function(a) {
            var b = 0, c = Ha.call(arguments),
            g = c.length, f = 1 !== g || a && d.isFunction(a.promise) ? g: 0, k = 1 === f ? a: d.Deferred(), j = function(a, h, b) {
                return function(c) {
                    h[a] = this;
                    b[a] = 1 < arguments.length ? Ha.call(arguments) : c;
                    b === e ? k.notifyWith(h, b) : --f || k.resolveWith(h, b)
                }
            }, e, q, o;
            if (1 < g) {
                e = Array(g);
                q = Array(g);
                for (o = Array(g); g > b; b++)
                    c[b] && d.isFunction(c[b].promise) ? c[b].promise().done(j(b, o, c)).fail(k.reject).progress(j(b, q, e)) : --f
            }
            return f || k.resolveWith(o, c), k.promise()
        }
    });
    var Ob;
    d.fn.ready = function(a) {
        return d.ready.promise().done(a), this
    };
    d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? d.readyWait++ : d.ready(!0)
        },
        ready: function(a) {
            if (!0 === a?!--d.readyWait : !d.isReady) {
                if (!H.body)
                    return setTimeout(d.ready);
                d.isReady=!0;
                !0 !== a && 0<--d.readyWait || (Ob.resolveWith(H, [d]), d.fn.triggerHandler && (d(H).triggerHandler("ready"), d(H).off("ready")))
            }
        }
    });
    d.ready.promise = function(a) {
        if (!Ob)
            if (Ob = d.Deferred(), "complete" === H.readyState)
                setTimeout(d.ready);
            else if (H.addEventListener)
                H.addEventListener("DOMContentLoaded", z, !1), m.addEventListener("load", z, !1);
            else {
                H.attachEvent("onreadystatechange",
                z);
                m.attachEvent("onload", z);
                var b=!1;
                try {
                    b = null == m.frameElement && H.documentElement
                } catch (c) {}
                b && b.doScroll&&!function qd() {
                    if (!d.isReady) {
                        try {
                            b.doScroll("left")
                        } catch (a) {
                            return setTimeout(qd, 50)
                        }
                        U();
                        d.ready()
                    }
                }()
            }
        return Ob.promise(a)
    };
    var xa = "undefined", yb;
    for (yb in d(x))
        break;
    x.ownLast = "0" !== yb;
    x.inlineBlockNeedsLayout=!1;
    d(function() {
        var a, b, c, d;
        (c = H.getElementsByTagName("body")[0]) && c.style && (b = H.createElement("div"), d = H.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", x.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    });
    var Ka = H.createElement("div");
    if (null == x.deleteExpando) {
        x.deleteExpando=!0;
        try {
            delete Ka.test
        } catch (Pb) {
            x.deleteExpando=!1
        }
    }
    d.acceptData = function(a) {
        var b = d.noData[(a.nodeName + " ").toLowerCase()], c =+ a.nodeType || 1;
        return 1 !== c && 9 !== c?!1 : !b ||!0 !== b && a.getAttribute("classid") ===
        b
    };
    var lc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, kc = /([A-Z])/g;
    d.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando], !!a&&!la(a)
        },
        data: function(a, b, c) {
            return t(a, b, c)
        },
        removeData: function(a, b) {
            return ca(a, b)
        },
        _data: function(a, b, c) {
            return t(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return ca(a, b, !0)
        }
    });
    d.fn.extend({
        data: function(a, b) {
            var c, g, f, k = this[0], j = k && k.attributes;
            if (void 0 ===
            a) {
                if (this.length && (f = d.data(k), 1 === k.nodeType&&!d._data(k, "parsedAttrs"))) {
                    for (c = j.length; c--;)
                        j[c] && (g = j[c].name, 0 === g.indexOf("data-") && (g = d.camelCase(g.slice(5)), S(k, g, f[g])));
                    d._data(k, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                d.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                d.data(this, a, b)
            }) : k ? S(k, a, d.data(k, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                d.removeData(this, a)
            })
        }
    });
    d.extend({
        queue: function(a, b, c) {
            var g;
            return a ? (b = (b || "fx") +
            "queue", g = d._data(a, b), c && (!g || d.isArray(c) ? g = d._data(a, b, d.makeArray(c)) : g.push(c)), g || []) : void 0
        },
        dequeue: function(a, b) {
            var b = b || "fx", c = d.queue(a, b), g = c.length, f = c.shift(), k = d._queueHooks(a, b), j = function() {
                d.dequeue(a, b)
            };
            "inprogress" === f && (f = c.shift(), g--);
            f && ("fx" === b && c.unshift("inprogress"), delete k.stop, f.call(a, j, k));
            !g && k && k.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return d._data(a, c) || d._data(a, c, {
                empty: d.Callbacks("once memory").add(function() {
                    d._removeData(a, b + "queue");
                    d._removeData(a, c)
                })
            })
        }
    });
    d.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? d.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = d.queue(this, a, b);
                d._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && d.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                d.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, g = 1, f = d.Deferred(), k = this, j = this.length, e = function() {
                --g || f.resolveWith(k,
                [k])
            };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; j--;)(c = d._data(k[j], a + "queueHooks")
                ) && c.empty && (g++, c.empty.add(e));
            return e(), f.promise(b)
        }
    });
    var fb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, a = ["Top", "Right", "Bottom", "Left"], b = function(a, b) {
        return a = b || a, "none" === d.css(a, "display") ||!d.contains(a.ownerDocument, a)
    }, c = d.access = function(a, b, c, g, f, k, j) {
        var e = 0, q = a.length, o = null == c;
        if ("object" === d.type(c))
            for (e in f=!0, c)
                d.access(a, b, e, c[e], !0, k, j);
        else if (void 0 !== g && (f=!0, d.isFunction(g) ||
        (j=!0), o && (j ? (b.call(a, g), b = null) : (o = b, b = function(a, h, b) {
            return o.call(d(a), b)
        })), b))for (; q > e; e++)
            b(a[e], c, j ? g : g.call(a[e], e, b(a[e], c)));
        return f ? a : o ? b.call(a) : q ? b(a[0], c) : k
    }, g = /^(?:checkbox|radio)$/i, k = H.createElement("input"), f = H.createElement("div"), j = H.createDocumentFragment();
    if (f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", x.leadingWhitespace = 3 === f.firstChild.nodeType, x.tbody=!f.getElementsByTagName("tbody").length, x.htmlSerialize=!!f.getElementsByTagName("link").length,
    x.html5Clone = "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML, k.type = "checkbox", k.checked=!0, j.appendChild(k), x.appendChecked = k.checked, f.innerHTML = "<textarea>x</textarea>", x.noCloneChecked=!!f.cloneNode(!0).lastChild.defaultValue, j.appendChild(f), f.innerHTML = "<input type='radio' checked='checked' name='t'/>", x.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked, x.noCloneEvent=!0, f.attachEvent && (f.attachEvent("onclick", function() {
        x.noCloneEvent=!1
    }), f.cloneNode(!0).click()),
    null == x.deleteExpando) {
        x.deleteExpando=!0;
        try {
            delete f.test
        } catch (q) {
            x.deleteExpando=!1
        }
    }
    !0;
    var o, r, L = H.createElement("div");
    for (o in{
        submit: !0,
        change: !0,
        focusin: !0
    })
        r = "on" + o, (x[o + "Bubbles"] = r in m) || (L.setAttribute(r, "t"), x[o + "Bubbles"]=!1 === L.attributes[r].expando);
    var oa = /^(?:input|select|textarea)$/i, J = /^key/, Ya = /^(?:mouse|pointer|contextmenu)|click/, w = /^(?:focusinfocus|focusoutblur)$/, Zc = /^([^.]*)(?:\.(.+)|)$/;
    d.event = {
        global: {},
        add: function(a, b, c, g, f) {
            var k, j, e, q, o, n, r, i, L, G;
            if (e = d._data(a)) {
                c.handler &&
                (q = c, c = q.handler, f = q.selector);
                c.guid || (c.guid = d.guid++);
                (j = e.events) || (j = e.events = {});
                (n = e.handle) || (n = e.handle = function(a) {
                    return typeof d === xa || a && d.event.triggered === a.type ? void 0 : d.event.dispatch.apply(n.elem, arguments)
                }, n.elem = a);
                b = (b || "").match(Ga) || [""];
                for (e = b.length; e--;)
                    k = Zc.exec(b[e]) || [], L = G = k[1], k = (k[2] || "").split(".").sort(), L && (o = d.event.special[L] || {}, L = (f ? o.delegateType : o.bindType) || L, o = d.event.special[L] || {}, r = d.extend({
                        type: L,
                        origType: G,
                        data: g,
                        handler: c,
                        guid: c.guid,
                        selector: f,
                        needsContext: f && d.expr.match.needsContext.test(f),
                        namespace: k.join(".")
                    }, q), (i = j[L]) || (i = j[L] = [], i.delegateCount = 0, o.setup&&!1 !== o.setup.call(a, g, k, n) || (a.addEventListener ? a.addEventListener(L, n, !1) : a.attachEvent && a.attachEvent("on" + L, n))), o.add && (o.add.call(a, r), r.handler.guid || (r.handler.guid = c.guid)), f ? i.splice(i.delegateCount++, 0, r) : i.push(r), d.event.global[L]=!0);
                a = null
            }
        },
        remove: function(a, b, c, g, f) {
            var k, j, e, q, o, n, r, i, L, G, l, m = d.hasData(a) && d._data(a);
            if (m && (n = m.events)) {
                b = (b || "").match(Ga) ||
                [""];
                for (o = b.length; o--;)
                    if (e = Zc.exec(b[o]) || [], L = l = e[1], G = (e[2] || "").split(".").sort(), L) {
                        r = d.event.special[L] || {};
                        L = (g ? r.delegateType : r.bindType) || L;
                        i = n[L] || [];
                        e = e[2] && RegExp("(^|\\.)" + G.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (q = k = i.length; k--;)
                            j = i[k], !f && l !== j.origType || c && c.guid !== j.guid || e&&!e.test(j.namespace) || g && g !== j.selector && ("**" !== g ||!j.selector) || (i.splice(k, 1), j.selector && i.delegateCount--, r.remove && r.remove.call(a, j));
                            q&&!i.length && (r.teardown&&!1 !== r.teardown.call(a, G, m.handle) || d.removeEvent(a,
                            L, m.handle), delete n[L])
                    } else 
                        for (L in n)
                            d.event.remove(a, L + b[o], c, g, !0);
                d.isEmptyObject(n) && (delete m.handle, d._removeData(a, "events"))
            }
        },
        trigger: function(a, b, c, g) {
            var f, k, j, e, q, o, n = [c || H], r = La.call(a, "type") ? a.type: a;
            o = La.call(a, "namespace") ? a.namespace.split(".") : [];
            if (j = f = c = c || H, 3 !== c.nodeType && 8 !== c.nodeType&&!w.test(r + d.event.triggered) && (0 <= r.indexOf(".") && (o = r.split("."), r = o.shift(), o.sort()), k = 0 > r.indexOf(":") && "on" + r, a = a[d.expando] ? a : new d.Event(r, "object" == typeof a && a), a.isTrigger = g ? 2 :
            3, a.namespace = o.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : d.makeArray(b, [a]), q = d.event.special[r] || {}, g ||!q.trigger ||!1 !== q.trigger.apply(c, b))
                ) {
                if (!g&&!q.noBubble&&!d.isWindow(c)) {
                    e = q.delegateType || r;
                    for (w.test(e + r) || (j = j.parentNode); j; j = j.parentNode)
                        n.push(j), f = j;
                    f === (c.ownerDocument || H) && n.push(f.defaultView || f.parentWindow || m)
                }
                for (o = 0; (j = n[o++])&&!a.isPropagationStopped();)
                    a.type = 1 < o ? e : q.bindType ||
                    r, (f = (d._data(j, "events") || {})[a.type] && d._data(j, "handle")) && f.apply(j, b), (f = k && j[k]) && f.apply && d.acceptData(j) && (a.result = f.apply(j, b), !1 === a.result && a.preventDefault());
                if (a.type = r, !g&&!a.isDefaultPrevented() && (!q._default ||!1 === q._default.apply(n.pop(), b)) && d.acceptData(c) && k && c[r]&&!d.isWindow(c)) {
                    (f = c[k]) && (c[k] = null);
                    d.event.triggered = r;
                    try {
                        c[r]()
                    } catch (i) {}
                    d.event.triggered = void 0;
                    f && (c[k] = f)
                }
                return a.result
            }
        },
        dispatch: function(a) {
            var a = d.event.fix(a), b, c, g, f, k, j = [], e = Ha.call(arguments);
            b =
            (d._data(this, "events") || {})[a.type] || [];
            var q = d.event.special[a.type] || {};
            if (e[0] = a, a.delegateTarget = this, !q.preDispatch ||!1 !== q.preDispatch.call(this, a)) {
                j = d.event.handlers.call(this, a, b);
                for (b = 0; (f = j[b++])&&!a.isPropagationStopped();) {
                    a.currentTarget = f.elem;
                    for (k = 0; (g = f.handlers[k++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)
                        ) && (a.handleObj = g, a.data = g.data, c = ((d.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, e), void 0 !== c&&!1 === (a.result =
                        c) && (a.preventDefault(), a.stopPropagation()))
                }
                return q.postDispatch && q.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, g, f, k, j = [], e = b.delegateCount, q = a.target;
            if (e && q.nodeType && (!a.button || "click" !== a.type))
                for (; q != this; q = q.parentNode || this)
                    if (1 === q.nodeType && (!0 !== q.disabled || "click" !== a.type)) {
                        f = [];
                        for (k = 0; e > k; k++)
                            g = b[k], c = g.selector + " ", void 0 === f[c] && (f[c] = g.needsContext ? 0 <= d(c, this).index(q) : d.find(c, this, null, [q]).length), f[c] && f.push(g);
                            f.length && j.push({
                                elem: q,
                                handlers: f
                            })
                    }
            return e <
            b.length && j.push({
                elem: this,
                handlers: b.slice(e)
            }), j
        },
        fix: function(a) {
            if (a[d.expando])
                return a;
            var b, c, g;
            b = a.type;
            var f = a, k = this.fixHooks[b];
            k || (this.fixHooks[b] = k = Ya.test(b) ? this.mouseHooks : J.test(b) ? this.keyHooks : {});
            g = k.props ? this.props.concat(k.props) : this.props;
            a = new d.Event(f);
            for (b = g.length; b--;)
                c = g[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || H), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey=!!a.metaKey, k.filter ? k.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, g, f = b.button, k = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || H, g = d.documentElement, c = d.body, a.pageX = b.clientX + (g && g.scrollLeft || c && c.scrollLeft || 0) - (g &&
                g.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (g && g.scrollTop || c && c.scrollTop || 0) - (g && g.clientTop || c && c.clientTop || 0)), !a.relatedTarget && k && (a.relatedTarget = k === a.target ? b.toElement : k), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus)
                        try {
                            return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return d.nodeName(this,
                    "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return d.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, g) {
            a = d.extend(new d.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            g ? d.event.trigger(a, null, b) : d.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    d.removeEvent = H.removeEventListener ? function(a, b, c) {
        a.removeEventListener &&
        a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        b = "on" + b;
        a.detachEvent && (typeof a[b] === xa && (a[b] = null), a.detachEvent(b, c))
    };
    d.Event = function(a, b) {
        return this instanceof d.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented&&!1 === a.returnValue ? M : F) : this.type = a, b && d.extend(this, b), this.timeStamp = a && a.timeStamp || d.now(), void(this[d.expando]=!0)) : new d.Event(a, b)
    };
    d.Event.prototype = {
        isDefaultPrevented: F,
        isPropagationStopped: F,
        isImmediatePropagationStopped: F,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = M;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue=!1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = M;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble=!0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = M;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        d.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var h, c = a.relatedTarget, g = a.handleObj;
                return (!c || c !== this&&!d.contains(this, c)) && (a.type = g.origType, h = g.handler.apply(this, arguments), a.type = b), h
            }
        }
    });
    x.submitBubbles || (d.event.special.submit = {
        setup: function() {
            return d.nodeName(this, "form")?!1 : void d.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = d.nodeName(a, "input") ||
                d.nodeName(a, "button") ? a.form : void 0)&&!d._data(a, "submitBubbles") && (d.event.add(a, "submit._submit", function(a) {
                    a._submit_bubble = true
                }), d._data(a, "submitBubbles", true))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode&&!a.isTrigger && d.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return d.nodeName(this, "form")?!1 : void d.event.remove(this, "._submit")
        }
    });
    x.changeBubbles || (d.event.special.change = {
        setup: function() {
            return oa.test(this.nodeName) ?
            (("checkbox" === this.type || "radio" === this.type) && (d.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed=!0)
            }), d.event.add(this, "click._change", function(a) {
                this._just_changed&&!a.isTrigger && (this._just_changed=!1);
                d.event.simulate("change", this, a, !0)
            })), !1) : void d.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                oa.test(a.nodeName)&&!d._data(a, "changeBubbles") && (d.event.add(a, "change._change", function(a) {
                    !this.parentNode || a.isSimulated ||
                    a.isTrigger || d.event.simulate("change", this.parentNode, a, !0)
                }), d._data(a, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return d.event.remove(this, "._change"), !oa.test(this.nodeName)
        }
    });
    x.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            d.event.simulate(b, a.target, d.event.fix(a), !0)
        };
        d.event.special[b] =
        {
            setup: function() {
                var g = this.ownerDocument || this, f = d._data(g, b);
                f || g.addEventListener(a, c, !0);
                d._data(g, b, (f || 0) + 1)
            },
            teardown: function() {
                var g = this.ownerDocument || this, f = d._data(g, b) - 1;
                f ? d._data(g, b, f) : (g.removeEventListener(a, c, !0), d._removeData(g, b))
            }
        }
    });
    d.fn.extend({
        on: function(a, b, c, g, f) {
            var k, j;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (k in a)
                    this.on(k, b, c, a[k], f);
                return this
            }
            if (null == c && null == g ? (g = b, c = b = void 0) : null == g && ("string" == typeof b ? (g = c, c = void 0) : (g = c, c = b, b = void 0)),
            !1 === g)
                g = F;
            else if (!g)
                return this;
            return 1 === f && (j = g, g = function(a) {
                return d().off(a), j.apply(this, arguments)
            }, g.guid = j.guid || (j.guid = d.guid++)), this.each(function() {
                d.event.add(this, a, g, c, b)
            })
        },
        one: function(a, b, c, g) {
            return this.on(a, b, c, g, 1)
        },
        off: function(a, b, c) {
            var g, f;
            if (a && a.preventDefault && a.handleObj)
                return g = a.handleObj, d(a.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
            if ("object" == typeof a) {
                for (f in a)
                    this.off(f, b, a[f]);
                return this
            }
            return (!1 ===
            b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = F), this.each(function() {
                d.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                d.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? d.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Vc = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vd = / jQuery\d+="(?:null|\d+)"/g, $c = RegExp("<(?:" + Vc + ")[\\s/>]", "i"),
    Kc = /^\s+/, ad = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bd = /<([\w:]+)/, cd = /<tbody/i, wd = /<|&#?\w+;/, xd = /<(?:script|style|link)/i, yd = /checked\s*(?:[^=]|=\s*.checked.)/i, dd = /^$|\/(?:java|ecma)script/i, rd = /^true\/(.*)/, zd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Oa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>",
        "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
    }, Lc = n(H).appendChild(H.createElement("div"));
    Oa.optgroup = Oa.option;
    Oa.tbody = Oa.tfoot = Oa.colgroup = Oa.caption = Oa.thead;
    Oa.th = Oa.td;
    d.extend({
        clone: function(a, b, c) {
            var f, k, j, e, q, o = d.contains(a.ownerDocument, a);
            if (x.html5Clone || d.isXMLDoc(a) ||!$c.test("<" + a.nodeName + ">") ? j = a.cloneNode(!0) : (Lc.innerHTML = a.outerHTML,
            Lc.removeChild(j = Lc.firstChild)), !(x.noCloneEvent && x.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a))) {
                f = i(j);
                q = i(a);
                for (e = 0; null != (k = q[e]); ++e)
                    if (f[e]) {
                        var n = f[e], r = void 0, L = void 0, G = void 0;
                        if (1 === n.nodeType) {
                            if (r = n.nodeName.toLowerCase(), !x.noCloneEvent && n[d.expando]) {
                                G = d._data(n);
                                for (L in G.events)
                                    d.removeEvent(n, L, G.handle);
                                    n.removeAttribute(d.expando)
                                }
                                "script" === r && n.text !== k.text ? (y(n).text = k.text, A(n)) : "object" === r ? (n.parentNode && (n.outerHTML = k.outerHTML), x.html5Clone && k.innerHTML &&
                                !d.trim(n.innerHTML) && (n.innerHTML = k.innerHTML)) : "input" === r && g.test(k.type) ? (n.defaultChecked = n.checked = k.checked, n.value !== k.value && (n.value = k.value)) : "option" === r ? n.defaultSelected = n.selected = k.defaultSelected : ("input" === r || "textarea" === r) && (n.defaultValue = k.defaultValue)
                            }
                    }
                }
            if (b)
                if (c) {
                    q = q || i(a);
                    f = f || i(j);
                    for (e = 0; null != (k = q[e]); e++)
                        aa(k, f[e])
                } else 
                    aa(a, j);
            return f = i(j, "script"), 0 < f.length && K(f, !o && i(a, "script")), j
        },
        buildFragment: function(a, b, c, g) {
            for (var f, k, j, e, q, o, r, L = a.length, G = n(b), l = [], m = 0; L >
            m; m++)
                if (k = a[m], k || 0 === k)
                    if ("object" === d.type(k))
                        d.merge(l, k.nodeType ? [k] : k);
                    else if (wd.test(k)) {
                        e = e || G.appendChild(b.createElement("div"));
                        q = (bd.exec(k) || ["", ""])[1].toLowerCase();
                        r = Oa[q] || Oa._default;
                        e.innerHTML = r[1] + k.replace(ad, "<$1></$2>") + r[2];
                        for (f = r[0]; f--;)
                            e = e.lastChild;
                            if (!x.leadingWhitespace && Kc.test(k) && l.push(b.createTextNode(Kc.exec(k)[0])), !x.tbody)
                                for (f = (k = "table" !== q || cd.test(k) ? "<table>" !== r[1] || cd.test(k) ? 0 : e : e.firstChild) && k.childNodes.length; f--;)
                                    d.nodeName(o = k.childNodes[f],
                                    "tbody")&&!o.childNodes.length && k.removeChild(o);
                                    d.merge(l, e.childNodes);
                                    for (e.textContent = ""; e.firstChild;)
                                        e.removeChild(e.firstChild);
                                        e = G.lastChild
                    } else 
                        l.push(b.createTextNode(k));
            e && G.removeChild(e);
            x.appendChecked || d.grep(i(l, "input"), u);
            for (m = 0; k = l[m++];)
                if ((!g||-1 === d.inArray(k, g)) && (j = d.contains(k.ownerDocument, k), e = i(G.appendChild(k), "script"), j && K(e), c))
                    for (f = 0; k = e[f++];)
                        dd.test(k.type || "") && c.push(k);
            return G
        },
        cleanData: function(a, b) {
            for (var c, g, f, k, j = 0, e = d.expando, q = d.cache, o = x.deleteExpando,
            n = d.event.special; null != (c = a[j]); j++)
                if ((b || d.acceptData(c)) && (f = c[e], k = f && q[f])) {
                    if (k.events)
                        for (g in k.events)
                            n[g] ? d.event.remove(c, g) : d.removeEvent(c, g, k.handle);
                            q[f] && (delete q[f], o ? delete c[e] : typeof c.removeAttribute !== xa ? c.removeAttribute(e) : c[e] = null, Da.push(f))
                }
            }
    });
    d.fn.extend({
        text: function(a) {
            return c(this, function(a) {
                return void 0 === a ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && D(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = D(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, g = a ? d.filter(a, this) : this, f = 0; null != (c = g[f]); f++)
                b || 1 !== c.nodeType || d.cleanData(i(c)), c.parentNode && (b && d.contains(c.ownerDocument, c) && K(i(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && d.cleanData(i(a, !1)); a.firstChild;)
                    a.removeChild(a.firstChild);
                a.options && d.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a?!1 : a, b = null == b ? a : b, this.map(function() {
                return d.clone(this,
                a, b)
            })
        },
        html: function(a) {
            return c(this, function(a) {
                var b = this[0] || {}, h = 0, c = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(vd, "") : void 0;
                if (!("string" != typeof a || xd.test(a) ||!x.htmlSerialize && $c.test(a) ||!x.leadingWhitespace && Kc.test(a) || Oa[(bd.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ad, "<$1></$2>");
                    try {
                        for (; c > h; h++)
                            b = this[h] || {}, 1 === b.nodeType && (d.cleanData(i(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (g) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a =
            arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode;
                d.cleanData(i(this));
                a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            var a = Wb.apply([], a), c, g, f, k, j = 0, e = this.length, q = this, o = e - 1, n = a[0], r = d.isFunction(n);
            if (r || 1 < e && "string" == typeof n&&!x.checkClone && yd.test(n))
                return this.each(function(c) {
                    var g = q.eq(c);
                    r && (a[0] = n.call(this, c, g.html()));
                    g.domManip(a, b)
                });
            if (e && (k = d.buildFragment(a,
            this[0].ownerDocument, !1, this), c = k.firstChild, 1 === k.childNodes.length && (k = c), c)) {
                f = d.map(i(k, "script"), y);
                for (g = f.length; e > j; j++)
                    c = k, j !== o && (c = d.clone(c, !0, !0), g && d.merge(f, i(c, "script"))), b.call(this[j], c, j);
                if (g) {
                    k = f[f.length - 1].ownerDocument;
                    d.map(f, A);
                    for (j = 0; g > j; j++)
                        c = f[j], dd.test(c.type || "")&&!d._data(c, "globalEval") && d.contains(k, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval((c.text || c.textContent || c.innerHTML || "").replace(zd, "")))
                    }
                k = c = null
            }
            return this
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        d.fn[a] = function(a) {
            for (var c = 0, h = [], g = d(a), f = g.length - 1; f >= c; c++)
                a = c === f ? this : this.clone(!0), d(g[c])[b](a), Db.apply(h, a.get());
            return this.pushStack(h)
        }
    });
    var Tb, Wc = {}, ic;
    x.shrinkWrapBlocks = function() {
        if (null != ic)
            return ic;
        ic=!1;
        var a, b, c;
        return b = H.getElementsByTagName("body")[0], b && b.style ? (a = H.createElement("div"), c = H.createElement("div"), c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        b.appendChild(c).appendChild(a), typeof a.style.zoom !== xa && (a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", a.appendChild(H.createElement("div")).style.width = "5px", ic = 3 !== a.offsetWidth), b.removeChild(c), ic) : void 0
    };
    !0;
    var ed = /^margin/, mc = RegExp("^(" + fb + ")(?!px)[a-z%]+$", "i"), sb, tb, Ad = /^(top|right|bottom|left)$/;
    m.getComputedStyle ? (sb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a,
        null)
    }, tb = function(a, b, c) {
        var g, f, k, j, e = a.style;
        return c = c || sb(a), j = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== j || d.contains(a.ownerDocument, a) || (j = d.style(a, b)), mc.test(j) && ed.test(b) && (g = e.width, f = e.minWidth, k = e.maxWidth, e.minWidth = e.maxWidth = e.width = j, j = c.width, e.width = g, e.minWidth = f, e.maxWidth = k)), void 0 === j ? j : j + ""
    }) : H.documentElement.currentStyle && (sb = function(a) {
        return a.currentStyle
    }, tb = function(a, b, c) {
        var g, d, f, k, j = a.style;
        return c = c || sb(a), k = c ? c[b] : void 0, null == k && j && j[b] && (k = j[b]), mc.test(k) &&
        !Ad.test(b) && (g = j.left, d = a.runtimeStyle, f = d && d.left, f && (d.left = a.currentStyle.left), j.left = "fontSize" === b ? "1em" : k, k = j.pixelLeft + "px", j.left = g, f && (d.left = f)), void 0 === k ? k : k + "" || "auto"
    });
    var Qb, zb, Mc, zc, Ac, jc, Bc;
    if (Qb = H.createElement("div"), Qb.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Mc = Qb.getElementsByTagName("a")[0], zb = Mc && Mc.style) {
        zb.cssText = "float:left;opacity:.5";
        x.opacity = "0.5" === zb.opacity;
        x.cssFloat=!!zb.cssFloat;
        Qb.style.backgroundClip = "content-box";
        Qb.cloneNode(!0).style.backgroundClip =
        "";
        x.clearCloneStyle = "content-box" === Qb.style.backgroundClip;
        x.boxSizing = "" === zb.boxSizing || "" === zb.MozBoxSizing || "" === zb.WebkitBoxSizing;
        d.extend(x, {
            reliableHiddenOffsets: function() {
                return null == jc && Cc(), jc
            },
            boxSizingReliable: function() {
                return null == Ac && Cc(), Ac
            },
            pixelPosition: function() {
                return null == zc && Cc(), zc
            },
            reliableMarginRight: function() {
                return null == Bc && Cc(), Bc
            }
        });
        var Cc = function() {
            var a, b, c, g;
            (b = H.getElementsByTagName("body")[0]) && b.style && (a = H.createElement("div"), c = H.createElement("div"),
            c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", b.appendChild(c).appendChild(a), a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", zc = Ac=!1, Bc=!0, m.getComputedStyle && (zc = "1%" !== (m.getComputedStyle(a, null) || {}).top, Ac = "4px" === (m.getComputedStyle(a, null) || {
                width: "4px"
            }).width, g = a.appendChild(H.createElement("div")), g.style.cssText = a.style.cssText =
            "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", g.style.marginRight = g.style.width = "0", a.style.width = "1px", Bc=!parseFloat((m.getComputedStyle(g, null) || {}).marginRight)), a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", g = a.getElementsByTagName("td"), g[0].style.cssText = "margin:0;border:0;padding:0;display:none", jc = 0 === g[0].offsetHeight, jc && (g[0].style.display = "", g[1].style.display = "none", jc = 0 === g[0].offsetHeight),
            b.removeChild(c))
        }
    }
    !0;
    d.swap = function(a, b, c, g) {
        var d, f = {};
        for (d in b)
            f[d] = a.style[d], a.style[d] = b[d];
        c = c.apply(a, g || []);
        for (d in b)
            a.style[d] = f[d];
        return c
    };
    var Nc = /alpha\([^)]*\)/i, Bd = /opacity\s*=\s*([^)]*)/, Cd = /^(none|table(?!-c[ea]).+)/, sd = RegExp("^(" + fb + ")(.*)$", "i"), Dd = RegExp("^([+-])=(" + fb + ")", "i"), Ed = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, fd = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Xc = ["Webkit", "O", "Moz", "ms"];
    d.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = tb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, b, c, g) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, k, j, e = d.camelCase(b), q = a.style;
                if (b = d.cssProps[e] || (d.cssProps[e] = G(q, e)), j = d.cssHooks[b] || d.cssHooks[e], void 0 === c)
                    return j && "get"in j && void 0 !== (f = j.get(a, !1, g)) ? f : q[b];
                if (k = typeof c, "string" ===
                k && (f = Dd.exec(c)) && (c = (f[1] + 1) * f[2] + parseFloat(d.css(a, b)), k = "number"), null != c && c === c && ("number" !== k || d.cssNumber[e] || (c += "px"), x.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (q[b] = "inherit"), !(j && "set"in j && void 0 === (c = j.set(a, c, g)))
                    ))try {
                    q[b] = c
                } catch (o) {}
            }
        },
        css: function(a, b, c, g) {
            var f, k, j, e = d.camelCase(b);
            return b = d.cssProps[e] || (d.cssProps[e] = G(a.style, e)), j = d.cssHooks[b] || d.cssHooks[e], j && "get"in j && (k = j.get(a, !0, c)), void 0 === k && (k = tb(a, b, g)), "normal" === k && b in fd && (k = fd[b]), "" === c ||
            c ? (f = parseFloat(k), !0 === c || d.isNumeric(f) ? f || 0 : k) : k
        }
    });
    d.each(["height", "width"], function(a, b) {
        d.cssHooks[b] = {
            get: function(a, c, h) {
                return c ? Cd.test(d.css(a, "display")) && 0 === a.offsetWidth ? d.swap(a, Ed, function() {
                    return ua(a, b, h)
                }) : ua(a, b, h) : void 0
            },
            set: function(a, c, h) {
                var g = h && sb(a);
                return Z(a, c, h ? fa(a, b, h, x.boxSizing && "border-box" === d.css(a, "boxSizing", !1, g), g) : 0)
            }
        }
    });
    x.opacity || (d.cssHooks.opacity = {
        get: function(a, b) {
            return Bd.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 *
            parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style, g = a.currentStyle, f = d.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "", k = g && g.filter || c.filter || "";
            c.zoom = 1;
            (1 <= b || "" === b) && "" === d.trim(k.replace(Nc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || g&&!g.filter) || (c.filter = Nc.test(k) ? k.replace(Nc, f) : k + " " + f)
        }
    });
    d.cssHooks.marginRight = P(x.reliableMarginRight, function(a, b) {
        return b ? d.swap(a, {
            display: "inline-block"
        }, tb, [a, "marginRight"]) : void 0
    });
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(b, c) {
        d.cssHooks[b + c] = {
            expand: function(g) {
                for (var d = 0, f = {}, g = "string" == typeof g ? g.split(" ") : [g]; 4 > d; d++)
                    f[b + a[d] + c] = g[d] || g[d - 2] || g[0];
                return f
            }
        };
        ed.test(b) || (d.cssHooks[b + c].set = Z)
    });
    d.fn.extend({
        css: function(a, b) {
            return c(this, function(a, b, c) {
                var h, g = {}, f = 0;
                if (d.isArray(b)) {
                    c = sb(a);
                    for (h = b.length; h > f; f++)
                        g[b[f]] = d.css(a, b[f], !1, c);
                    return g
                }
                return void 0 !== c ? d.style(a, b, c) : d.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return W(this, !0)
        },
        hide: function() {
            return W(this)
        },
        toggle: function(a) {
            return "boolean" ==
            typeof a ? a ? this.show() : this.hide() : this.each(function() {
                b(this) ? d(this).show() : d(this).hide()
            })
        }
    });
    d.Tween = N;
    N.prototype = {
        constructor: N,
        init: function(a, b, c, g, f, k) {
            this.elem = a;
            this.prop = c;
            this.easing = f || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = k || (d.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = N.propHooks[this.prop];
            return a && a.get ? a.get(this) : N.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = N.propHooks[this.prop];
            return this.pos = b = this.options.duration ? d.easing[this.easing](a,
            this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : N.propHooks._default.set(this), this
        }
    };
    N.prototype.init.prototype = N.prototype;
    N.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = d.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                d.fx.step[a.prop] ? d.fx.step[a.prop](a) : a.elem.style &&
                (null != a.elem.style[d.cssProps[a.prop]] || d.cssHooks[a.prop]) ? d.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    d.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    };
    d.fx = N.prototype.init;
    d.fx.step = {};
    var Cb, Dc, Fd = /^(?:toggle|show|hide)$/, gd = RegExp("^(?:([+-])=|)(" + fb + ")([a-z%]*)$", "i"), Gd = /queueHooks$/, nc = [function(a, c, g) {
        var f,
        k, j, e, q, o, n, r = this, i = {}, L = a.style, G = a.nodeType && b(a), l = d._data(a, "fxshow");
        g.queue || (e = d._queueHooks(a, "fx"), null == e.unqueued && (e.unqueued = 0, q = e.empty.fire, e.empty.fire = function() {
            e.unqueued || q()
        }), e.unqueued++, r.always(function() {
            r.always(function() {
                e.unqueued--;
                d.queue(a, "fx").length || e.empty.fire()
            })
        }));
        1 === a.nodeType && ("height"in c || "width"in c) && (g.overflow = [L.overflow, L.overflowX, L.overflowY], o = d.css(a, "display"), n = "none" === o ? d._data(a, "olddisplay") || Y(a.nodeName) : o, "inline" === n && "none" === d.css(a,
        "float") && (x.inlineBlockNeedsLayout && "inline" !== Y(a.nodeName) ? L.zoom = 1 : L.display = "inline-block"));
        g.overflow && (L.overflow = "hidden", x.shrinkWrapBlocks() || r.always(function() {
            L.overflow = g.overflow[0];
            L.overflowX = g.overflow[1];
            L.overflowY = g.overflow[2]
        }));
        for (f in c)
            if (k = c[f], Fd.exec(k)) {
                if (delete c[f], j = j || "toggle" === k, k === (G ? "hide" : "show")) {
                    if ("show" !== k ||!l || void 0 === l[f])
                        continue;
                        G=!0
                }
                i[f] = l && l[f] || d.style(a, f)
            } else 
                o = void 0;
        if (d.isEmptyObject(i))
            "inline" === ("none" === o ? Y(a.nodeName) : o) && (L.display =
            o);
        else 
            for (f in l ? "hidden"in l && (G = l.hidden) : l = d._data(a, "fxshow", {}), j && (l.hidden=!G), G ? d(a).show() : r.done(function() {
                d(a).hide()
            }), r.done(function() {
                var b;
                d._removeData(a, "fxshow");
                for (b in i)
                    d.style(a, b, i[b])
                }), i)
                    c = Fa(G ? l[f] : 0, f, r), f in l || (l[f] = c.start, G && (c.end = c.start, c.start = "width" === f || "height" === f ? 1 : 0))
    }
    ], Ub = {
        "*": [function(a, b) {
            var c = this.createTween(a, b), g = c.cur(), f = gd.exec(b), k = f && f[3] || (d.cssNumber[a] ? "" : "px"), j = (d.cssNumber[a] || "px" !== k&&+g) && gd.exec(d.css(c.elem, a)), e = 1, q = 20;
            if (j &&
            j[3] !== k) {
                k = k || j[3];
                f = f || [];
                j =+ g || 1;
                do 
                    e = e || ".5", j/=e, d.style(c.elem, a, j + k);
                while (e !== (e = c.cur() / g) && 1 !== e&&--q)
                }
            return f && (j = c.start =+ j||+g || 0, c.unit = k, c.end = f[1] ? j + (f[1] + 1) * f[2] : + f[2]), c
        }
        ]
    };
    d.Animation = d.extend(Pa, {
        tweener: function(a, b) {
            d.isFunction(a) ? (b = a, a = ["*"]): a = a.split(" ");
            for (var c,
            g = 0,
            f = a.length;
            f > g;
            g++)c = a[g],
            Ub[c] = Ub[c] || [],
            Ub[c].unshift(b)
        }, prefilter : function(a, b) {
            b ? nc.unshift(a) : nc.push(a)
        }
    });
    d.speed = function(a, b, c) {
        var g = a && "object" == typeof a ? d.extend({}, a): {
            complete: c ||!c && b || d.isFunction(a) &&
            a,
            duration: a,
            easing: c && b || b&&!d.isFunction(b) && b
        };
        return g.duration = d.fx.off ? 0 : "number" == typeof g.duration ? g.duration : g.duration in d.fx.speeds ? d.fx.speeds[g.duration] : d.fx.speeds._default, (null == g.queue ||!0 === g.queue) && (g.queue = "fx"), g.old = g.complete, g.complete = function() {
            d.isFunction(g.old) && g.old.call(this);
            g.queue && d.dequeue(this, g.queue)
        }, g
    };
    d.fn.extend({
        fadeTo: function(a, c, g, f) {
            return this.filter(b).css("opacity", 0).show().end().animate({
                opacity: c
            }, a, g, f)
        },
        animate: function(a, b, c, g) {
            var f = d.isEmptyObject(a),
            k = d.speed(b, c, g), b = function() {
                var b = Pa(this, d.extend({}, a), k);
                (f || d._data(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, f ||!1 === k.queue ? this.each(b) : this.queue(k.queue, b)
        },
        stop: function(a, b, c) {
            var g = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b&&!1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b=!0, f = null != a && a + "queueHooks", k = d.timers, j = d._data(this);
                if (f)
                    j[f] && j[f].stop && g(j[f]);
                else 
                    for (f in j)
                        j[f] && j[f].stop && Gd.test(f) && g(j[f]);
                for (f = k.length; f--;)
                    k[f].elem !==
                    this || null != a && k[f].queue !== a || (k[f].anim.stop(c), b=!1, k.splice(f, 1));
                (b ||!c) && d.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = d._data(this), g = c[a + "queue"];
                b = c[a + "queueHooks"];
                var f = d.timers, k = g ? g.length: 0;
                c.finish=!0;
                d.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; k > b; b++)
                    g[b] && g[b].finish && g[b].finish.call(this);
                delete c.finish
            })
        }
    });
    d.each(["toggle",
    "show", "hide"], function(a, b) {
        var c = d.fn[b];
        d.fn[b] = function(a, h, g) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(ma(b, !0), a, h, g)
        }
    });
    d.each({
        slideDown: ma("show"),
        slideUp: ma("hide"),
        slideToggle: ma("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        d.fn[a] = function(a, c, h) {
            return this.animate(b, a, c, h)
        }
    });
    d.timers = [];
    d.fx.tick = function() {
        var a, b = d.timers, c = 0;
        for (Cb = d.now(); c < b.length; c++)
            a = b[c], a() || b[c] !== a || b.splice(c--,
            1);
        b.length || d.fx.stop();
        Cb = void 0
    };
    d.fx.timer = function(a) {
        d.timers.push(a);
        a() ? d.fx.start() : d.timers.pop()
    };
    d.fx.interval = 13;
    d.fx.start = function() {
        Dc || (Dc = setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.stop = function() {
        clearInterval(Dc);
        Dc = null
    };
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fn.delay = function(a, b) {
        return a = d.fx ? d.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var g = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(g)
            }
        })
    };
    var pb, Rb, Oc, Ec, Pc;
    Rb = H.createElement("div");
    Rb.setAttribute("className",
    "t");
    Rb.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ec = Rb.getElementsByTagName("a")[0];
    Oc = H.createElement("select");
    Pc = Oc.appendChild(H.createElement("option"));
    pb = Rb.getElementsByTagName("input")[0];
    Ec.style.cssText = "top:1px";
    x.getSetAttribute = "t" !== Rb.className;
    x.style = /top/.test(Ec.getAttribute("style"));
    x.hrefNormalized = "/a" === Ec.getAttribute("href");
    x.checkOn=!!pb.value;
    x.optSelected = Pc.selected;
    x.enctype=!!H.createElement("form").enctype;
    Oc.disabled=!0;
    x.optDisabled =
    !Pc.disabled;
    pb = H.createElement("input");
    pb.setAttribute("value", "");
    x.input = "" === pb.getAttribute("value");
    pb.value = "t";
    pb.setAttribute("type", "radio");
    x.radioValue = "t" === pb.value;
    var Hd = /\r/g;
    d.fn.extend({
        val: function(a) {
            var b, c, g, f = this[0];
            if (arguments.length)
                return g = d.isFunction(a), this.each(function(c) {
                    var f;
                    1 === this.nodeType && (f = g ? a.call(this, c, d(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : d.isArray(f) && (f = d.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), b = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()],
                    b && "set"in b && void 0 !== b.set(this, f, "value") || (this.value = f))
                });
            if (f)
                return b = d.valHooks[f.type] || d.valHooks[f.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(f, "value")) ? c : (c = f.value, "string" == typeof c ? c.replace(Hd, "") : null == c ? "" : c)
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = d.find.attr(a, "value");
                    return null != b ? b : d.trim(d.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, g = a.selectedIndex, f = "select-one" === a.type || 0 > g, k = f ? null : [], j = f ? g + 1 : c.length, e = 0 > g ? j : f ? g : 0; j > e; e++)
                        if (b =
                        c[e], !(!b.selected && e !== g || (x.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && d.nodeName(b.parentNode, "optgroup"))) {
                            if (a = d(b).val(), f)
                                return a;
                                k.push(a)
                        }
                    return k
                },
                set: function(a, b) {
                    for (var c, g, f = a.options, k = d.makeArray(b), j = f.length; j--;)
                        if (g = f[j], 0 <= d.inArray(d.valHooks.option.get(g), k))
                            try {
                                g.selected = c=!0
                    } catch (e) {
                        g.scrollHeight
                    } else 
                        g.selected=!1;
                    return c || (a.selectedIndex =- 1), f
                }
            }
        }
    });
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(a, b) {
                return d.isArray(b) ?
                a.checked = 0 <= d.inArray(d(a).val(), b) : void 0
            }
        };
        x.checkOn || (d.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Sb, hd, qb = d.expr.attrHandle, Qc = /^(?:checked|selected)$/i, Ab = x.getSetAttribute, Fc = x.input;
    d.fn.extend({
        attr: function(a, b) {
            return c(this, d.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                d.removeAttr(this, a)
            })
        }
    });
    d.extend({
        attr: function(a, b, c) {
            var g, f, k = a.nodeType;
            if (a && 3 !== k && 8 !== k && 2 !== k)
                return typeof a.getAttribute ===
                xa ? d.prop(a, b, c) : (1 === k && d.isXMLDoc(a) || (b = b.toLowerCase(), g = d.attrHooks[b] || (d.expr.match.bool.test(b) ? hd : Sb)), void 0 === c ? g && "get"in g && null !== (f = g.get(a, b)) ? f : (f = d.find.attr(a, b), null == f ? void 0 : f) : null !== c ? g && "set"in g && void 0 !== (f = g.set(a, c, b)) ? f : (a.setAttribute(b, c + ""), c) : void d.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, g, f = 0, k = b && b.match(Ga);
            if (k && 1 === a.nodeType)
                for (; c = k[f++];)
                    g = d.propFix[c] || c, d.expr.match.bool.test(c) ? Fc && Ab ||!Qc.test(c) ? a[g]=!1 : a[d.camelCase("default-" + c)] = a[g]=!1 :
                    d.attr(a, c, ""), a.removeAttribute(Ab ? c : g)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!x.radioValue && "radio" === b && d.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    });
    hd = {
        set: function(a, b, c) {
            return !1 === b ? d.removeAttr(a, c) : Fc && Ab ||!Qc.test(c) ? a.setAttribute(!Ab && d.propFix[c] || c, c) : a[d.camelCase("default-" + c)] = a[c]=!0, c
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = qb[b] || d.find.attr;
        qb[b] = Fc && Ab ||!Qc.test(b) ? function(a, b, g) {
            var h, f;
            return g || (f =
            qb[b], qb[b] = h, h = null != c(a, b, g) ? b.toLowerCase() : null, qb[b] = f), h
        } : function(a, b, c) {
            return c ? void 0 : a[d.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Fc && Ab || (d.attrHooks.value = {
        set: function(a, b, c) {
            return d.nodeName(a, "input") ? void(a.defaultValue = b) : Sb && Sb.set(a, b, c)
        }
    });
    Ab || (Sb = {
        set: function(a, b, c) {
            var g = a.getAttributeNode(c);
            return g || a.setAttributeNode(g = a.ownerDocument.createAttribute(c)), g.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, qb.id = qb.name = qb.coords = function(a, b, c) {
        var g;
        return c ?
        void 0 : (g = a.getAttributeNode(b)) && "" !== g.value ? g.value : null
    }, d.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: Sb.set
    }, d.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Sb.set(a, "" === b?!1 : b, c)
        }
    }, d.each(["width", "height"], function(a, b) {
        d.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    }));
    x.style || (d.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Id = /^(?:input|select|textarea|button|object)$/i, Jd = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(a, b) {
            return c(this, d.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return a = d.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    });
    d.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var g, f, k, j = a.nodeType;
            if (a && 3 !== j && 8 !== j && 2 !== j)
                return k = 1 !== j ||!d.isXMLDoc(a), k && (b = d.propFix[b] || b, f = d.propHooks[b]), void 0 !== c ? f && "set"in f && void 0 !== (g =
            f.set(a, c, b)) ? g : a[b] = c : f && "get"in f && null !== (g = f.get(a, b)) ? g : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = d.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Id.test(a.nodeName) || Jd.test(a.nodeName) && a.href ? 0 : - 1
                }
            }
        }
    });
    x.hrefNormalized || d.each(["href", "src"], function(a, b) {
        d.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    x.optSelected || (d.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    });
    d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
    function() {
        d.propFix[this.toLowerCase()] = this
    });
    x.enctype || (d.propFix.enctype = "encoding");
    var Rc = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(a) {
            var b, c, g, f, k, j = 0, e = this.length;
            b = "string" == typeof a && a;
            if (d.isFunction(a))
                return this.each(function(b) {
                    d(this).addClass(a.call(this, b, this.className))
                });
            if (b)
                for (b = (a || "").match(Ga) || []; e > j; j++)
                    if (c = this[j], g = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Rc, " ") : " ")) {
                        for (k = 0; f = b[k++];)
                            0 > g.indexOf(" " + f + " ") && (g += f + " ");
                            g = d.trim(g);
                            c.className !==
                            g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, g, f, k, j = 0, e = this.length;
            b = 0 === arguments.length || "string" == typeof a && a;
            if (d.isFunction(a))
                return this.each(function(b) {
                    d(this).removeClass(a.call(this, b, this.className))
                });
            if (b)
                for (b = (a || "").match(Ga) || []; e > j; j++)
                    if (c = this[j], g = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Rc, " ") : "")) {
                        for (k = 0; f = b[k++];)
                            for (; 0 <= g.indexOf(" " + f + " ");)
                                g = g.replace(" " + f + " ", " ");
                                g = a ? d.trim(g) : "";
                                c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(d.isFunction(a) ? function(c) {
                d(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, g = 0, f = d(this), k = a.match(Ga) || []; b = k[g++];)
                        f.hasClass(b) ? f.removeClass(b) : f.addClass(b);
                else (c === xa || "boolean" === c) 
                    && (this.className && d._data(this, "__className__", this.className), this.className = this.className ||!1 === a ? "" : d._data(this, "__className__") ||
                    "")
            })
        },
        hasClass: function(a) {
            for (var a = " " + a + " ", b = 0, c = this.length; c > b; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Rc, " ").indexOf(a))
                    return !0;
            return !1
        }
    });
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        d.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    d.fn.extend({
        hover: function(a,
        b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, g) {
            return this.on(b, a, c, g)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Sc = d.now(), Tc = /\?/, Kd = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    d.parseJSON = function(a) {
        if (m.JSON && m.JSON.parse)
            return m.JSON.parse(a +
            "");
        var b, c = null, g = d.trim(a + "");
        return g&&!d.trim(g.replace(Kd, function(a, g, f, h) {
            return b && g && (c = 0), 0 === c ? a : (b = f || g, c+=!h-!f, "")
        })) ? Function("return " + g)() : d.error("Invalid JSON: " + a)
    };
    d.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            m.DOMParser ? (c = new DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
        } catch (g) {
            b = void 0
        }
        return b && b.documentElement&&!b.getElementsByTagName("parsererror").length || d.error("Invalid XML: " +
        a), b
    };
    var Bb, rb, Ld = /#.*$/, id = /([?&])_=[^&]*/, Md = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nd = /^(?:GET|HEAD)$/, Od = /^\/\//, jd = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, kd = {}, Jc = {}, ld = "*/".concat("*");
    try {
        rb = location.href
    } catch (Vd) {
        rb = H.createElement("a"), rb.href = "", rb = rb.href
    }
    Bb = jd.exec(rb.toLowerCase()) || [];
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: rb,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Bb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ld,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? pa(pa(a, d.ajaxSettings), b) : pa(d.ajaxSettings,
            a)
        },
        ajaxPrefilter: gb(kd),
        ajaxTransport: gb(Jc),
        ajax: function(a, b) {
            function c(a, b, g, f) {
                var h, n, s, E, J = b;
                if (2 !== W) {
                    W = 2;
                    e && clearTimeout(e);
                    o = void 0;
                    j = f || "";
                    w.readyState = 0 < a ? 4 : 0;
                    f = 200 <= a && 300 > a || 304 === a;
                    if (g) {
                        s = r;
                        for (var u = w, oa, D, Z, p, B = s.contents, y = s.dataTypes; "*" === y[0];)
                            y.shift(), void 0 === D && (D = s.mimeType || u.getResponseHeader("Content-Type"));
                        if (D)
                            for (p in B)
                                if (B[p] && B[p].test(D)) {
                                    y.unshift(p);
                                    break
                                }
                        if (y[0]in g)
                            Z = y[0];
                        else {
                            for (p in g) {
                                if (!y[0] || s.converters[p + " " + y[0]]) {
                                    Z = p;
                                    break
                                }
                                oa || (oa = p)
                            }
                            Z = Z || oa
                        }
                        s =
                        Z ? (Z !== y[0] && y.unshift(Z), g[Z]) : void 0
                    }
                    var A;
                    a:
                    {
                        g = r;
                        oa = s;
                        D = w;
                        Z = f;
                        var x, N, Ya;
                        s = {};
                        u = g.dataTypes.slice();
                        if (u[1])
                            for (x in g.converters)
                                s[x.toLowerCase()] = g.converters[x];
                        for (p = u.shift(); p;)
                            if (g.responseFields[p] && (D[g.responseFields[p]] = oa), !Ya && Z && g.dataFilter && (oa = g.dataFilter(oa, g.dataType)), Ya = p, p = u.shift())
                                if ("*" === p)
                                    p = Ya;
                                else if ("*" !== Ya && Ya !== p) {
                                    if (x = s[Ya + " " + p] || s["* " + p], !x)
                                        for (A in s)
                                            if (N = A.split(" "), N[1] === p && (x = s[Ya + " " + N[0]] || s["* " + N[0]])) {
                                                !0 === x ? x = s[A] : !0 !== s[A] && (p = N[0], u.unshift(N[1]));
                                                break
                                            }
                                            if (!0 !== x)
                                                if (x && g["throws"])
                                                    oa = x(oa);
                                                else 
                                                    try {
                                                        oa = x(oa)
                                                    } catch (K) {
                                                        A = {
                                                            state: "parsererror",
                                                            error: x ? K: "No conversion from " + Ya + " to " + p
                                                        };
                                                        break a
                                                    }
                                                }
                        A = {
                            state: "success",
                            data: oa
                        }
                    }
                    s = A;
                    f ? (r.ifModified && (E = w.getResponseHeader("Last-Modified"), E && (d.lastModified[k] = E), E = w.getResponseHeader("etag"), E && (d.etag[k] = E)), 204 === a || "HEAD" === r.type ? J = "nocontent" : 304 === a ? J = "notmodified" : (J = s.state, h = s.data, n = s.error, f=!n)) : (n = J, (a ||!J) && (J = "error", 0 > a && (a = 0)));
                    w.status = a;
                    w.statusText = (b || J) + "";
                    f ? G.resolveWith(i, [h,
                    J, w]) : G.rejectWith(i, [w, J, n]);
                    w.statusCode(m);
                    m = void 0;
                    q && L.trigger(f ? "ajaxSuccess" : "ajaxError", [w, r, f ? h: n]);
                    l.fireWith(i, [w, J]);
                    q && (L.trigger("ajaxComplete", [w, r]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            var b = b || {}, g, f, k, j, e, q, o, n, r = d.ajaxSetup({}, b), i = r.context || r, L = r.context && (i.nodeType || i.jquery) ? d(i): d.event, G = d.Deferred(), l = d.Callbacks("once memory"), m = r.statusCode || {}, J = {}, u = {}, W = 0, oa = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 ===
                    W) {
                        if (!n)
                            for (n = {}; b = Md.exec(j);)
                                n[b[1].toLowerCase()] = b[2];
                        b = n[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === W ? j : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return W || (a = u[c] = u[c] || a, J[a] = b), this
                },
                overrideMimeType: function(a) {
                    return W || (r.mimeType = a), this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > W)
                            for (b in a)
                                m[b] = [m[b], a[b]];
                        else 
                            w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    a = a || oa;
                    return o && o.abort(a), c(0, a), this
                }
            };
            if (G.promise(w).complete =
            l.add, w.success = w.done, w.error = w.fail, r.url = ((a || r.url || rb) + "").replace(Ld, "").replace(Od, Bb[1] + "//"), r.type = b.method || b.type || r.method || r.type, r.dataTypes = d.trim(r.dataType || "*").toLowerCase().match(Ga) || [""], null == r.crossDomain && (g = jd.exec(r.url.toLowerCase()), r.crossDomain=!(!g || g[1] === Bb[1] && g[2] === Bb[2] && (g[3] || ("http:" === g[1] ? "80" : "443")) === (Bb[3] || ("http:" === Bb[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = d.param(r.data, r.traditional)), Qa(kd, r, b, w), 2 === W)
                return w;
            (q = r.global) && 0 === d.active++&&d.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent=!Nd.test(r.type);
            k = r.url;
            r.hasContent || (r.data && (k = r.url += (Tc.test(k) ? "&" : "?") + r.data, delete r.data), !1 === r.cache && (r.url = id.test(k) ? k.replace(id, "$1_=" + Sc++) : k + (Tc.test(k) ? "&" : "?") + "_=" + Sc++));
            r.ifModified && (d.lastModified[k] && w.setRequestHeader("If-Modified-Since", d.lastModified[k]), d.etag[k] && w.setRequestHeader("If-None-Match", d.etag[k]));
            (r.data && r.hasContent&&!1 !== r.contentType || b.contentType) &&
            w.setRequestHeader("Content-Type", r.contentType);
            w.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + ld + "; q=0.01" : "") : r.accepts["*"]);
            for (f in r.headers)
                w.setRequestHeader(f, r.headers[f]);
            if (r.beforeSend && (!1 === r.beforeSend.call(i, w, r) || 2 === W))
                return w.abort();
            oa = "abort";
            for (f in{
                success: 1,
                error: 1,
                complete: 1
            })
                w[f](r[f]);
            if (o = Qa(Jc, r, b, w)) {
                w.readyState = 1;
                q && L.trigger("ajaxSend", [w, r]);
                r.async && 0 < r.timeout && (e = setTimeout(function() {
                    w.abort("timeout")
                },
                r.timeout));
                try {
                    W = 1, o.send(J, c)
                } catch (D) {
                    if (!(2 > W))
                        throw D;
                    c( - 1, D)
                }
            } else 
                c( - 1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return d.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return d.get(a, void 0, b, "script")
        }
    });
    d.each(["get", "post"], function(a, b) {
        d[b] = function(a, c, g, f) {
            return d.isFunction(c) && (f = f || g, g = c, c = void 0), d.ajax({
                url: a,
                type: b,
                dataType: f,
                data: c,
                success: g
            })
        }
    });
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        d.fn[b] = function(a) {
            return this.on(b,
            a)
        }
    });
    d._evalUrl = function(a) {
        return d.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    d.fn.extend({
        wrapAll: function(a) {
            if (d.isFunction(a))
                return this.each(function(b) {
                    d(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = d(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(d.isFunction(a) ?
            function(b) {
                d(this).wrapInner(a.call(this, b))
            } : function() {
                var b = d(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = d.isFunction(a);
            return this.each(function(c) {
                d(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    d.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight ||!x.reliableHiddenOffsets() && "none" === (a.style && a.style.display ||
        d.css(a, "display"))
    };
    d.expr.filters.visible = function(a) {
        return !d.expr.filters.hidden(a)
    };
    var Pd = /%20/g, ud = /\[\]$/, md = /\r?\n/g, Qd = /^(?:submit|button|image|reset|file)$/i, Rd = /^(?:input|select|textarea|keygen)/i;
    d.param = function(a, b) {
        var c, g = [], f = function(a, b) {
            b = d.isFunction(b) ? b() : null == b ? "" : b;
            g[g.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(a) || a.jquery&&!d.isPlainObject(a)
            )d.each(a, function() {
            f(this.name, this.value)
        });
        else 
            for (c in a)
                ya(c, a[c], b, f);
        return g.join("&").replace(Pd, "+")
    };
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = d.prop(this, "elements");
                return a ? d.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name&&!d(this).is(":disabled") && Rd.test(this.nodeName)&&!Qd.test(a) && (this.checked ||!g.test(a))
            }).map(function(a, b) {
                var c = d(this).val();
                return null == c ? null : d.isArray(c) ? d.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(md, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(md, "\r\n")
                }
            }).get()
        }
    });
    d.ajaxSettings.xhr = void 0 !== m.ActiveXObject ? function() {
        var a;
        if (!(a=!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Vb()))
            a: {
            try {
                a = new m.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {}
            a = void 0
        }
        return a
    } : Vb;
    var Sd = 0, Gc = {}, Hc = d.ajaxSettings.xhr();
    m.ActiveXObject && d(m).on("unload", function() {
        for (var a in Gc)
            Gc[a](void 0, !0)
    });
    x.cors=!!Hc && "withCredentials"in Hc;
    (Hc = x.ajax=!!Hc) && d.ajaxTransport(function(a) {
        if (!a.crossDomain ||
        x.cors) {
            var b;
            return {
                send: function(c, g) {
                    var f, k = a.xhr(), j=++Sd;
                    if (k.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (f in a.xhrFields)
                            k[f] = a.xhrFields[f];
                    a.mimeType && k.overrideMimeType && k.overrideMimeType(a.mimeType);
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (f in c)
                        void 0 !== c[f] && k.setRequestHeader(f, c[f] + "");
                    k.send(a.hasContent && a.data || null);
                    b = function(c, f) {
                        var e, q, o;
                        if (b && (f || 4 === k.readyState))
                            if (delete Gc[j], b = void 0, k.onreadystatechange =
                            d.noop, f)
                                4 !== k.readyState && k.abort();
                            else {
                                o = {};
                                e = k.status;
                                "string" == typeof k.responseText && (o.text = k.responseText);
                                try {
                                    q = k.statusText
                                } catch (r) {
                                    q = ""
                                }
                                e ||!a.isLocal || a.crossDomain ? 1223 === e && (e = 204) : e = o.text ? 200 : 404
                            }
                        o && g(e, q, o, k.getAllResponseHeaders())
                    };
                    a.async ? 4 === k.readyState ? setTimeout(b) : k.onreadystatechange = Gc[j] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return d.globalEval(a), a
            }
        }
    });
    d.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache=!1);
        a.crossDomain && (a.type = "GET", a.global=!1)
    });
    d.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = H.head || d("head")[0] || H.documentElement;
            return {
                send: function(g, f) {
                    b = H.createElement("script");
                    b.async=!0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c ||!b.readyState || /loaded|complete/.test(b.readyState)) &&
                        (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    };
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var nd = [], Uc = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = nd.pop() || d.expando + "_" + Sc++;
            return this[a]=!0, a
        }
    });
    d.ajaxPrefilter("json jsonp", function(a, b, c) {
        var g, f, k, j=!1 !== a.jsonp && (Uc.test(a.url) ? "url" : "string" == typeof a.data&&!(a.contentType || "").indexOf("application/x-www-form-urlencoded") &&
        Uc.test(a.data) && "data");
        return j || "jsonp" === a.dataTypes[0] ? (g = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, j ? a[j] = a[j].replace(Uc, "$1" + g) : !1 !== a.jsonp && (a.url += (Tc.test(a.url) ? "&" : "?") + a.jsonp + "=" + g), a.converters["script json"] = function() {
            return k || d.error(g + " was not called"), k[0]
        }, a.dataTypes[0] = "json", f = m[g], m[g] = function() {
            k = arguments
        }, c.always(function() {
            m[g] = f;
            a[g] && (a.jsonpCallback = b.jsonpCallback, nd.push(g));
            k && d.isFunction(f) && f(k[0]);
            k = f = void 0
        }), "script") :
        void 0
    });
    d.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b=!1);
        var b = b || H, g = ia.exec(a), c=!c && [];
        return g ? [b.createElement(g[1])] : (g = d.buildFragment([a], b, c), c && c.length && d(c).remove(), d.merge([], g.childNodes))
    };
    var od = d.fn.load;
    d.fn.load = function(a, b, c) {
        if ("string" != typeof a && od)
            return od.apply(this, arguments);
        var g, f, k, j = this, e = a.indexOf(" ");
        return 0 <= e && (g = d.trim(a.slice(e, a.length)), a = a.slice(0, e)), d.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b &&
        (k = "POST"), 0 < j.length && d.ajax({
            url: a,
            type: k,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            j.html(g ? d("<div>").append(d.parseHTML(a)).find(g) : a)
        }).complete(c && function(a, b) {
            j.each(c, f || [a.responseText, b, a])
        }), this
    };
    d.expr.filters.animated = function(a) {
        return d.grep(d.timers, function(b) {
            return a === b.elem
        }).length
    };
    var pd = m.document.documentElement;
    d.offset = {
        setOffset: function(a, b, c) {
            var g, f, k, j, e, q, o = d.css(a, "position"), r = d(a), n = {};
            "static" === o && (a.style.position = "relative");
            e = r.offset();
            k = d.css(a,
            "top");
            q = d.css(a, "left");
            ("absolute" === o || "fixed" === o)&&-1 < d.inArray("auto", [k, q]) ? (g = r.position(), j = g.top, f = g.left) : (j = parseFloat(k) || 0, f = parseFloat(q) || 0);
            d.isFunction(b) && (b = b.call(a, c, e));
            null != b.top && (n.top = b.top - e.top + j);
            null != b.left && (n.left = b.left - e.left + f);
            "using"in b ? b.using.call(a, n) : r.css(n)
        }
    };
    d.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                d.offset.setOffset(this, a, b)
            });
            var b, c, g = {
                top: 0,
                left: 0
            }, f = this[0], k = f && f.ownerDocument;
            if (k)
                return b =
                k.documentElement, d.contains(b, f) ? (typeof f.getBoundingClientRect !== xa && (g = f.getBoundingClientRect()), c = hb(k), {
                    top: g.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: g.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : g
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, g = this[0];
                return "fixed" === d.css(g, "position") ? b = g.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), d.nodeName(a[0], "html") || (c = a.offset()), c.top += d.css(a[0], "borderTopWidth", !0), c.left += d.css(a[0], "borderLeftWidth",
                !0)), {
                    top: b.top - c.top - d.css(g, "marginTop", !0),
                    left: b.left - c.left - d.css(g, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || pd; a&&!d.nodeName(a, "html") && "static" === d.css(a, "position");)
                    a = a.offsetParent;
                return a || pd
            })
        }
    });
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var g = /Y/.test(b);
        d.fn[a] = function(f) {
            return c(this, function(a, c, f) {
                var k = hb(a);
                return void 0 === f ? k ? b in k ? k[b] : k.document.documentElement[c] : a[c] : void(k ? k.scrollTo(g ?
                d(k).scrollLeft() : f, g ? f : d(k).scrollTop()) : a[c] = f)
            }, a, f, arguments.length, null)
        }
    });
    d.each(["top", "left"], function(a, b) {
        d.cssHooks[b] = P(x.pixelPosition, function(a, c) {
            return c ? (c = tb(a, b), mc.test(c) ? d(a).position()[b] + "px" : c) : void 0
        })
    });
    d.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        d.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(g, f) {
            d.fn[f] = function(f, k) {
                var j = arguments.length && (g || "boolean" != typeof f), e = g || (!0 === f ||!0 === k ? "margin" : "border");
                return c(this, function(b, c, g) {
                    var f;
                    return d.isWindow(b) ?
                    b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === g ? d.css(b, c, e) : d.style(b, c, g, e)
                }, b, j ? f : void 0, j, null)
            }
        })
    });
    d.fn.size = function() {
        return this.length
    };
    d.fn.andSelf = d.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var Td = m.jQuery, Ud = m.$;
    return d.noConflict = function(a) {
        return m.$ === d && (m.$ = Ud), a && m.jQuery === d && (m.jQuery = Td), d
    }, typeof C ===
    xa && (m.jQuery = m.$ = d), d
});
var XRegExp;
XRegExp = XRegExp || function(m) {
    function C(e, n, i) {
        for (var l in t.prototype)
            t.prototype.hasOwnProperty(l) && (e[l] = t.prototype[l]);
        return e.xregexp = {
            captureNames: n,
            isNative: !!i
        }, e
    }
    function l(e) {
        return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
    }
    function v(e, n, i) {
        if (!t.isRegExp(e))
            throw new TypeError("type RegExp expected");
        n = p.replace.call(l(e) + (n || ""), A, "");
        return i && (n = p.replace.call(n, RegExp("[" + i + "]+", "g"), "")), e.xregexp&&!e.xregexp.isNative ? C(t(e.source,
        n), e.xregexp.captureNames ? e.xregexp.captureNames.slice(0) : null) : C(RegExp(e.source, n), null, !0)
    }
    function e(e, n) {
        var i = e.length;
        if (Array.prototype.lastIndexOf)
            return e.lastIndexOf(n);
        for (; i--;)
            if (e[i] === n)
                return i;
        return - 1
    }
    function U(e, n) {
        return Object.prototype.toString.call(e).toLowerCase() === "[object " + n + "]"
    }
    function z(e) {
        return e = e || {}, "all" === e || e.all ? e = {
            natives: !0,
            extensibility: !0
        } : U(e, "string") && (e = t.forEach(e, /[^\s,]+/, function(e) {
            this[e]=!0
        }, {})), e
    }
    function S(e) {
        t.addToken = ca[e ? "on": "off"];
        F.extensibility = e
    }
    function la(e) {
        RegExp.prototype.exec = (e ? n : p).exec;
        RegExp.prototype.test = (e ? n : p).test;
        String.prototype.match = (e ? n : p).match;
        String.prototype.replace = (e ? n : p).replace;
        String.prototype.split = (e ? n : p).split;
        F.natives = e
    }
    var t, ca, M, F = {
        natives: !1,
        extensibility: !1
    }, p = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
    }, n = {}, i = {}, u = [], D = {
        "default": /^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,
        "class": /^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/
    }, y = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g, A = /([\s\S])(?=[\s\S]*\1)/g, K = /^(?:[?*+]|{\d+(?:,\d*)?})\??/, aa = p.exec.call(/()??/, "")[1] === m, ea = RegExp.prototype.sticky !== m, Y=!1, P = "gim" + (ea ? "y" : "");
    return t = function(e, i) {
        if (t.isRegExp(e)) {
            if (i !== m)
                throw new TypeError("can't supply flags when constructing one RegExp from another");
            return v(e)
        }
        if (Y)
            throw Error("can't call the XRegExp constructor within token definition functions");
        var l = [], y = "default", K = {
            hasNamedCapture: !1,
            captureNames: [],
            hasFlag: function(e) {
                return - 1 < i.indexOf(e)
            }
        }, N = 0, ea, ma, aa;
        if (e = e === m ? "" : String(e), i = i === m ? "" : String(i), p.match.call(i, A))
            throw new SyntaxError("invalid duplicate regular expression flag");
        e = p.replace.call(e, /^\(\?([\w$]+)\)/, function(e, n) {
            if (p.test.call(/[gy]/, n))
                throw new SyntaxError("can't use flag g or y in mode modifier");
            return i = p.replace.call(i + n, A, ""), ""
        });
        for (t.forEach(i, /[\s\S]/, function(e) {
            if (0 > P.indexOf(e[0]))
                throw new SyntaxError("invalid regular expression flag " +
                e[0]);
        }); N < e.length;) {
            ea = e;
            var z = N, F = y, U = K, pa = u.length, ya = null, M = void 0, S = void 0;
            Y=!0;
            try {
                for (; pa--;)
                    if (S = u[pa], ("all" === S.scope || S.scope === F) && (!S.trigger || S.trigger.call(U)) && (S.pattern.lastIndex = z, M = n.exec.call(S.pattern, ea), M && M.index === z)) {
                        ya = {
                            output: S.handler.call(U, M, F),
                            match: M
                        };
                        break
                    }
            } catch (ca) {
                throw ca;
            } finally {
                Y=!1
            }(ea = ya) ? (l.push(ea.output), N += ea.match[0].length || 1) : (ma = p.exec.call(D[y], e.slice(N)), ma ? (l.push(ma[0]), N += ma[0].length) : (aa = e.charAt(N), "[" === aa ? y = "class" : "]" === aa && (y = "default"),
            l.push(aa), ++N))
        }
        return C(RegExp(l.join(""), p.replace.call(i, /[^gimy]+/g, "")), K.hasNamedCapture ? K.captureNames : null)
    }, ca = {
        on: function(e, n, i) {
            i = i || {};
            e && u.push({
                pattern: v(e, "g" + (ea ? "y" : "")),
                handler: n,
                scope: i.scope || "default",
                trigger: i.trigger || null
            });
            i.customFlags && (P = p.replace.call(P + i.customFlags, A, ""))
        },
        off: function() {
            throw Error("extensibility must be installed before using addToken");
        }
    }, t.addToken = ca.off, t.cache = function(e, n) {
        var l = e + "/" + (n || "");
        return i[l] || (i[l] = t(e, n))
    }, t.escape = function(e) {
        return p.replace.call(e,
        /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, t.exec = function(e, i, l, m) {
        var u = v(i, "g" + (m && ea ? "y" : ""), !1 === m ? "y" : ""), D;
        return u.lastIndex = l = l || 0, D = n.exec.call(u, e), m && D && D.index !== l && (D = null), i.global && (i.lastIndex = D ? u.lastIndex : 0), D
    }, t.forEach = function(e, n, i, l) {
        for (var m = 0, u =- 1; m = t.exec(e, n, m);)
            i.call(l, m, ++u, e, n), m = m.index + (m[0].length || 1);
        return l
    }, t.globalize = function(e) {
        return v(e, "g")
    }, t.install = function(e) {
        e = z(e);
        !F.natives && e.natives && la(!0);
        !F.extensibility && e.extensibility && S(!0)
    }, t.isInstalled = function(e) {
        return !!F[e]
    },
    t.isRegExp = function(e) {
        return U(e, "regexp")
    }, t.matchChain = function(e, n) {
        return function fa(e, i) {
            for (var l = n[i].regex ? n[i] : {
                regex: n[i]
            }, m = [], u = function(e) {
                m.push(l.backref ? e[l.backref] || "" : e[0])
            }, G = 0; G < e.length; ++G)
                t.forEach(e[G], l.regex, u);
            return i === n.length - 1 ||!m.length ? m : fa(m, i + 1)
        }([e], 0)
    }, t.replace = function(e, i, l, u) {
        var D = t.isRegExp(i), p = i, y;
        return D ? (u === m && i.global && (u = "all"), p = v(i, "all" === u ? "g" : "", "all" === u ? "" : "g")) : "all" === u && (p = RegExp(t.escape(String(i)), "g")), y = n.replace.call(String(e),
        p, l), D && i.global && (i.lastIndex = 0), y
    }, t.split = function(e, i, l) {
        return n.split.call(e, i, l)
    }, t.test = function(e, n, i, l) {
        return !!t.exec(e, n, i, l)
    }, t.uninstall = function(e) {
        e = z(e);
        F.natives && e.natives && la(!1);
        F.extensibility && e.extensibility && S(!1)
    }, t.union = function(e, n) {
        var i = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g, l = 0, m, u, D = function(e, n, i) {
            var D = u[l - m];
            if (n) {
                if (++l, D)
                    return "(?<" + D + ">"
            } else if (i)
                return "\\" + ( + i + m);
            return e
        }, p = [], y, A;
        if (!U(e, "array") ||!e.length)
            throw new TypeError("patterns must be a nonempty array");
        for (A = 0; A < e.length; ++A)
            y = e[A], t.isRegExp(y) ? (m = l, u = y.xregexp && y.xregexp.captureNames || [], p.push(t(y.source).source.replace(i, D))) : p.push(t.escape(y));
        return t(p.join("|"), n)
    }, t.version = "2.0.0", n.exec = function(n) {
        var i, u, D, y;
        if (this.global || (D = this.lastIndex), i = p.exec.apply(this, arguments), i) {
            if (!aa && 1 < i.length&&-1 < e(i, "") && (u = RegExp(this.source, p.replace.call(l(this), "g", "")), p.replace.call(String(n).slice(i.index), u, function() {
                for (var e = 1; e < arguments.length - 2; ++e)
                    arguments[e] === m && (i[e] = m)
            })), this.xregexp &&
            this.xregexp.captureNames)
                for (y = 1; y < i.length; ++y)(u = this.xregexp.captureNames[y - 1]) 
                    && (i[u] = i[y]);
            this.global&&!i[0].length && this.lastIndex > i.index && (this.lastIndex = i.index)
        }
        return this.global || (this.lastIndex = D), i
    }, n.test = function(e) {
        return !!n.exec.call(this, e)
    }, n.match = function(e) {
        if (t.isRegExp(e)) {
            if (e.global) {
                var i = p.match.apply(this, arguments);
                return e.lastIndex = 0, i
            }
        } else 
            e = RegExp(e);
        return n.exec.call(e, this)
    }, n.replace = function(n, i) {
        var l = t.isRegExp(n), m, u, D, A;
        return l ? (n.xregexp && (m = n.xregexp.captureNames),
        n.global || (A = n.lastIndex)) : n += "", U(i, "function") ? u = p.replace.call(String(this), n, function() {
            var e = arguments, u;
            if (m) {
                e[0] = new String(e[0]);
                for (u = 0; u < m.length; ++u)
                    m[u] && (e[0][m[u]] = e[u + 1])
            }
            return l && n.global && (n.lastIndex = e[e.length - 2] + e[0].length), i.apply(null, e)
        }) : (D = String(this), u = p.replace.call(D, n, function() {
            var n = arguments;
            return p.replace.call(String(i), y, function(i, l, u) {
                var D;
                if (l) {
                    if (D =+ l, D <= n.length - 3)
                        return n[D] || "";
                    if (D = m ? e(m, l) : - 1, 0 > D)
                        throw new SyntaxError("backreference to undefined group " +
                        i);
                    return n[D + 1] || ""
                }
                if ("$" === u)
                    return "$";
                if ("&" === u || 0 ==+ u)
                    return n[0];
                if ("`" === u)
                    return n[n.length - 1].slice(0, n[n.length - 2]);
                if ("'" === u)
                    return n[n.length - 1].slice(n[n.length - 2] + n[0].length);
                if (u =+ u, !isNaN(u)) {
                    if (u > n.length - 3)
                        throw new SyntaxError("backreference to undefined group " + i);
                    return n[u] || ""
                }
                throw new SyntaxError("invalid token " + i);
            })
        })), l && (n.lastIndex = n.global ? 0 : A), u
    }, n.split = function(e, n) {
        if (!t.isRegExp(e))
            return p.split.apply(this, arguments);
        var i = String(this), l = e.lastIndex, u = [], D =
        0, y;
        return n = (n === m?-1 : n)>>>0, t.forEach(i, e, function(e) {
            e.index + e[0].length > D && (u.push(i.slice(D, e.index)), 1 < e.length && e.index < i.length && Array.prototype.push.apply(u, e.slice(1)), y = e[0].length, D = e.index + y)
        }), D === i.length ? (!p.test.call(e, "") || y) && u.push("") : u.push(i.slice(D)), e.lastIndex = l, u.length > n ? u.slice(0, n) : u
    }, M = ca.on, M(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/, function(e, n) {
        if ("B" === e[1] && "default" === n)
            return e[0];
        throw new SyntaxError("invalid escape " +
        e[0]);
    }, {
        scope: "all"
    }), M(/\[(\^?)]/, function(e) {
        return e[1] ? "[\\s\\S]" : "\\b\\B"
    }), M(/(?:\(\?#[^)]*\))+/, function(e) {
        return p.test.call(K, e.input.slice(e.index + e[0].length)) ? "" : "(?:)"
    }), M(/\\k<([\w$]+)>/, function(n) {
        var i = isNaN(n[1]) ? e(this.captureNames, n[1]) + 1: + n[1], l = n.index + n[0].length;
        if (!i || i > this.captureNames.length)
            throw new SyntaxError("backreference to undefined group " + n[0]);
        return "\\" + i + (l === n.input.length || isNaN(n.input.charAt(l)) ? "" : "(?:)")
    }), M(/(?:\s+|#.*)+/, function(e) {
        return p.test.call(K,
        e.input.slice(e.index + e[0].length)) ? "" : "(?:)"
    }, {
        trigger: function() {
            return this.hasFlag("x")
        },
        customFlags: "x"
    }), M(/\./, function() {
        return "[\\s\\S]"
    }, {
        trigger: function() {
            return this.hasFlag("s")
        },
        customFlags: "s"
    }), M(/\(\?P?<([\w$]+)>/, function(e) {
        if (!isNaN(e[1]))
            throw new SyntaxError("can't use integer as capture name " + e[0]);
        return this.captureNames.push(e[1]), this.hasNamedCapture=!0, "("
    }), M(/\\(\d+)/, function(e, n) {
        if (!("default" === n && /^[1-9]/.test(e[1])&&+e[1] <= this.captureNames.length) && "0" !== e[1])
            throw new SyntaxError("can't use octal escape or backreference to undefined group " +
            e[0]);
        return e[0]
    }, {
        scope: "all"
    }), M(/\((?!\?)/, function() {
        return this.hasFlag("n") ? "(?:" : (this.captureNames.push(null), "(")
    }, {
        customFlags: "n"
    }), "undefined" != typeof exports && (exports.XRegExp = t), t
}();
if ("undefined" == typeof SyntaxHighlighter)
    var SyntaxHighlighter = function() {
        function m(e) {
            return e.split(/\r?\n/)
        }
        function C(e) {
            return 0 == e.indexOf("highlighter_") ? e : "highlighter_" + e
        }
        function l(e, i, u) {
            if (null == e)
                return null;
                var m=!0 != u ? e.childNodes : [e.parentNode], p = {
                    "#": "id",
                    ".": "className"
                }
                [i.substr(0, 1)] || "nodeName", A, K;
                A = "nodeName" != p ? i.substr(1) : i.toUpperCase();
                if ( - 1 != (e[p] || "").indexOf(A))
                    return e;
                    e = 0;
                    for (p = m.length; m && e < p && null == K; e++)
                        K = l(m[e], i, u);
                        return K
                    }
                    function v(e, i) {
                        var l = {}, m;
                        for (m in e)
                            l[m] =
                            e[m];
                            for (m in i)
                                l[m] = i[m];
                                return l
                            }
                            function e(e, i, l, m) {
                                function p(e) {
                                    e = e || window.event;
                                    e.target || (e.target = e.srcElement, e.preventDefault = function() {
                                        this.returnValue=!1
                                    });
                                    l.call(m || window, e)
                                }
                                e.attachEvent ? e.attachEvent("on" + i, p) : e.addEventListener(i, p, !1)
                            }
                            function U(e, i) {
                                var l = p.vars.discoveredBrushes, m = null;
                                if (null == l) {
                                    var l = {}, y;
                                    for (y in p.brushes) {
                                        var A = p.brushes[y], m = A.aliases;
                                        if (null != m) {
                                            A.brushName = y.toLowerCase();
                                            for (var A = 0, K = m.length; A < K; A++)
                                                l[m[A]] = y
                                        }
                                    }
                                    p.vars.discoveredBrushes = l
                                }
                                m = p.brushes[l[e]];
                                null == m && i && window.alert(p.config.strings.alert + (p.config.strings.noBrush + e));
                                return m
                            }
                            function z(e, i) {
                                for (var l = m(e), D = 0, p = l.length; D < p; D++)
                                    l[D] = i(l[D], D);
                                    return l.join("\r\n")
                                }
                                function S(e, i) {
                                    if (null == e || 0 == e.length || "\n" == e)
                                        return e;
                                        e = e.replace(/</g, "&lt;");
                                        e = e.replace(/ {2,}/g, function(e) {
                                            for (var n = "", i = 0, e = e.length; i < e - 1; i++)
                                                n += p.config.space;
                                                return n + " "
                                            });
                                            null != i && (e = z(e, function(e) {
                                                if (0 == e.length)
                                                    return "";
                                                    var n = "", e = e.replace(/^(&nbsp;| )+/, function(e) {
                                                        n = e;
                                                        return ""
                                                    });
                                                    return 0 == e.length ? n :
                                                    n + '<code class="' + i + '">' + e + "</code>"
                                                }));
                                                return e
                                            }
                                            function la(e) {
                                                return e.replace(/^\s+|\s+$/g, "")
                                            }
                                            function t(e, i) {
                                                return e.index < i.index?-1 : e.index > i.index ? 1 : e.length < i.length?-1 : e.length > i.length ? 1 : 0
                                            }
                                            function ca(e, i) {
                                                function l(e) {
                                                    return e[0]
                                                }
                                                var m = null, y = [], A = i.func ? i.func: l;
                                                for (pos = 0; null != (m = XRegExp.exec(e, i.regex, pos));) {
                                                    var K = A(m, i);
                                                    "string" == typeof K && (K = [new p.Match(K, m.index, i.css)]);
                                                    y = y.concat(K);
                                                    pos = m.index + m[0].length
                                                }
                                                return y
                                            }
                                            function M() {
                                                for (var e = document.getElementsByTagName("script"),
                                                i = [], l = 0, m = e.length; l < m; l++)
                                                    "syntaxhighlighter" == e[l].type && i.push(e[l]);
                                                    return i
                                                }
                                                function F(n) {
                                                    var n = n.target, i = l(n, ".syntaxhighlighter", !0), n = l(n, ".container", !0), m = document.createElement("textarea");
                                                    if (n && i&&!l(n, "textarea")) {
                                                        C(i.id);
                                                        - 1 == i.className.indexOf("source") && (i.className += " source");
                                                        for (var p = n.childNodes, y = [], A = 0, K = p.length; A < K; A++)
                                                            y.push(p[A].innerText || p[A].textContent);
                                                            y = y.join("\r");
                                                            y = y.replace(/\u00a0/g, " ");
                                                            m.appendChild(document.createTextNode(y));
                                                            n.appendChild(m);
                                                            m.focus();
                                                            m.select();
                                                            e(m, "blur", function() {
                                                                m.parentNode.removeChild(m);
                                                                i.className = i.className.replace("source", "")
                                                            })
                                                    }
                                                }
                                                "undefined" != typeof require && "undefined" == typeof XRegExp && (XRegExp = require("xregexp").XRegExp);
                                                var p = {
                                                    defaults: {
                                                        "class-name": "",
                                                        "first-line": 1,
                                                        "pad-line-numbers": !1,
                                                        highlight: null,
                                                        title: null,
                                                        "smart-tabs": !0,
                                                        "tab-size": 4,
                                                        gutter: !0,
                                                        toolbar: !0,
                                                        "quick-code": !0,
                                                        collapse: !1,
                                                        "auto-links": !0,
                                                        light: !1,
                                                        unindent: !0,
                                                        "html-script": !1
                                                    },
                                                    config: {
                                                        space: "&nbsp;",
                                                        useScriptTags: !0,
                                                        bloggerMode: !1,
                                                        stripBrs: !1,
                                                        tagName: "pre",
                                                        strings: {
                                                            expandSource: "expand source",
                                                            help: "?",
                                                            alert: "SyntaxHighlighter\n\n",
                                                            noBrush: "Can't find brush for: ",
                                                            brushNotHtmlScript: "Brush wasn't configured for html-script option: ",
                                                            aboutDialog: ""
                                                        }
                                                    },
                                                    vars: {
                                                        discoveredBrushes: null,
                                                        highlighters: {}
                                                    },
                                                    brushes: {},
                                                    regexLib: {
                                                        multiLineCComments: XRegExp("/\\*.*?\\*/", "gs"),
                                                        singleLineCComments: /\/\/.*$/gm,
                                                        singleLinePerlComments: /#.*$/gm,
                                                        doubleQuotedString: /"([^\\"\n]|\\.)*"/g,
                                                        singleQuotedString: /'([^\\'\n]|\\.)*'/g,
                                                        multiLineDoubleQuotedString: XRegExp('"([^\\\\"]|\\\\.)*"',
                                                        "gs"),
                                                        multiLineSingleQuotedString: XRegExp("'([^\\\\']|\\\\.)*'", "gs"),
                                                        xmlComments: XRegExp("(&lt;|<)!--.*?--(&gt;|>)", "gs"),
                                                        url: /\w+:\/\/[\w-.\/?%&=:@;#]*/g,
                                                        phpScriptTags: {
                                                            left: /(&lt;|<)\?(?:=|php)?/g,
                                                            right: /\?(&gt;|>)/g,
                                                            eof: !0
                                                        },
                                                        aspScriptTags: {
                                                            left: /(&lt;|<)%=?/g,
                                                            right: /%(&gt;|>)/g
                                                        },
                                                        scriptScriptTags: {
                                                            left: /(&lt;|<)\s*script.*?(&gt;|>)/gi,
                                                            right: /(&lt;|<)\/\s*script\s*(&gt;|>)/gi
                                                        }
                                                    },
                                                    toolbar: {
                                                        getHtml: function(e) {
                                                            function i(e, n) {
                                                                return p.toolbar.getButtonHtml(e, n, p.config.strings[n])
                                                            }
                                                            for (var l = '<div class="toolbar">',
                                                            m = p.toolbar.items, y = m.list, A = 0, K = y.length; A < K; A++)
                                                                l = l + (m[y[A]].getHtml || i)(e, y[A]);
                                                                return l + "</div>"
                                                            },
                                                            getButtonHtml: function(e, i, l) {
                                                                return '<span><a href="#" class="toolbar_item command_' + i + " " + i + '">' + l + "</a></span>"
                                                            },
                                                            handler: function(e) {
                                                                var i = e.target, m = i.className || "", i = l(i, ".syntaxhighlighter", true).id, i = p.vars.highlighters[C(i)], m = (m = /command_(\w+)/.exec(m)) ? m[1]: null;
                                                                i && (m && p.toolbar.items[m].execute) && p.toolbar.items[m].execute(i);
                                                                e.preventDefault()
                                                            },
                                                            items: {
                                                                list: ["expandSource", "language"],
                                                                expandSource: {
                                                                    getHtml: function(e) {
                                                                        if (e.getParam("collapse") !=
                                                                        true)
                                                                            return "";
                                                                            var i = e.getParam("title");
                                                                            return p.toolbar.getButtonHtml(e, "expandSource", i ? i : p.config.strings.expandSource)
                                                                        },
                                                                        execute: function(e) {
                                                                            e = document.getElementById(C(e.id));
                                                                            e.className = e.className.replace("collapsed", "")
                                                                        }
                                                                    },
                                                                    help: {
                                                                        execute: function() {
                                                                            var e;
                                                                            e = "scrollbars=0" + (", left=" + (screen.width - 500) / 2 + ", top=" + (screen.height - 250) / 2 + ", width=500, height=250");
                                                                            e = e.replace(/^,/, "");
                                                                            e = window.open("", "_blank", e);
                                                                            e.focus();
                                                                            var i = e.document;
                                                                            i.write(p.config.strings.aboutDialog);
                                                                            i.close();
                                                                            e.focus()
                                                                        }
                                                                    },
                                                                    language: {
                                                                        getHtml: function(e) {
                                                                            return e.langLabel ? p.toolbar.getButtonHtml(e, "lang", e.langLabel) : ""
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            findElements: function(e, i) {
                                                                var l;
                                                                if (i)
                                                                    l = [i];
                                                                else {
                                                                    l = document.getElementsByTagName(p.config.tagName);
                                                                    for (var m = [], y = 0, A = l.length; y < A; y++)
                                                                        m.push(l[y]);
                                                                        l = m
                                                                }
                                                                m = [];
                                                                p.config.useScriptTags && (l = l.concat(M()));
                                                                if (l.length === 0)
                                                                    return m;
                                                                    y = 0;
                                                                    for (A = l.length; y < A; y++) {
                                                                        for (var K = l[y], C = e, ea = l[y].className, z = void 0, P = {}, G = XRegExp("^\\[(?<values>(.*?))\\]$"), z = 0, W = XRegExp("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w%#-]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?",
                                                                        "g"); (z = XRegExp.exec(ea, W, z)) != null;) {
                                                                            var t = z.value.replace(/^['"]|['"]$/g, "");
                                                                            if (t != null && G.test(t)) {
                                                                                t = XRegExp.exec(t, G);
                                                                                t = t.values.length > 0 ? t.values.split(/\s*,\s*/) : []
                                                                            }
                                                                            P[z.name] = t;
                                                                            z = z.index + z[0].length
                                                                        }(G = ea.match(/language-(.*)/)) ? P.brush = G[1] : ea && ea.indexOf("multiline")!==-1 && (P.brush = "text");
                                                                        K = {
                                                                            target: K,
                                                                            params: v(C, P)
                                                                        };
                                                                        K.params.brush != null && m.push(K)
                                                                    }
                                                                    return m
                                                                },
                                                                highlight: function(e, i) {
                                                                    var l = this.findElements(e, i), m = null, y = p.config;
                                                                    if (l.length !== 0)
                                                                        for (var A = 0, K = l.length; A < K; A++) {
                                                                            var i = l[A], z = i.target,
                                                                            C = i.params, t = C.brush, P;
                                                                            if (t != null) {
                                                                                if (C["html-script"] == "true" || p.defaults["html-script"] == true) {
                                                                                    m = new p.HtmlScript(t);
                                                                                    t = "htmlscript"
                                                                                } else if (m = U(t))
                                                                                    m = new m;
                                                                                else 
                                                                                    continue;
                                                                                    P = z.innerHTML;
                                                                                    if (y.useScriptTags) {
                                                                                        var G = la(P), W = false;
                                                                                        if (G.indexOf("<![CDATA[") == 0) {
                                                                                            G = G.substring(9);
                                                                                            W = true
                                                                                        }
                                                                                        var v = G.length;
                                                                                        if (G.indexOf("]]\>") == v - 3) {
                                                                                            G = G.substring(0, v - 3);
                                                                                            W = true
                                                                                        }
                                                                                        P = W ? G : P
                                                                                    }
                                                                                    if ((z.title || "") != "")
                                                                                        C.title = z.title;
                                                                                        C.brush = t;
                                                                                        m.init(C);
                                                                                        i = m.getDiv(P);
                                                                                        if ((z.id || "") != "")
                                                                                            i.id = z.id;
                                                                                            z.parentNode.replaceChild(i, z)
                                                                                        }
                                                                        }
                                                                    },
                                                                    all: function(n) {
                                                                        e(window,
                                                                        "load", function() {
                                                                            p.highlight(n)
                                                                        })
                                                                    },
                                                                    Match: function(e, i, l) {
                                                                        this.value = e;
                                                                        this.index = i;
                                                                        this.length = e.length;
                                                                        this.css = l;
                                                                        this.brushName = null
                                                                    }
                                                                };
                                                                p.Match.prototype.toString = function() {
                                                                    return this.value
                                                                };
                                                                p.HtmlScript = function(e) {
                                                                    function i(e, n) {
                                                                        for (var i = 0, l = e.length; i < l; i++)
                                                                            e[i].index = e[i].index + n
                                                                        }
                                                                        function l(e) {
                                                                            for (var n = e.code, p = [], u = y.regexList, A = e.index + e.left.length, z = y.htmlScript, t, K = 0, C = u.length; K < C; K++) {
                                                                                t = ca(n, u[K]);
                                                                                i(t, A);
                                                                                p = p.concat(t)
                                                                            }
                                                                            if (z.left != null && e.left != null) {
                                                                                t = ca(e.left, z.left);
                                                                                i(t, e.index);
                                                                                p = p.concat(t)
                                                                            }
                                                                            if (z.right != null && e.right != null) {
                                                                                t = ca(e.right, z.right);
                                                                                i(t, e.index + e[0].lastIndexOf(e.right));
                                                                                p = p.concat(t)
                                                                            }
                                                                            e = 0;
                                                                            for (C = p.length; e < C; e++)
                                                                                p[e].brushName = m.brushName;
                                                                                return p
                                                                            }
                                                                            var m = U(e), y, A = new p.brushes.Xml, z = this, C = ["getDiv", "getHtml", "init"];
                                                                            if (m != null) {
                                                                                y = new m;
                                                                                for (var t = 0, v = C.length; t < v; t++)(function() {
                                                                                    var e = C[t];
                                                                                    z[e] = function() {
                                                                                        return A[e].apply(A, arguments)
                                                                                    }
                                                                                })();
                                                                                y.htmlScript == null ? window.alert(p.config.strings.alert + (p.config.strings.brushNotHtmlScript + e)) : A.regexList.push({
                                                                                    regex: y.htmlScript.code,
                                                                                    func: l
                                                                                })
                                                                            }
                                                                        };
                                                                        p.Highlighter = function() {};
                                                                        p.Highlighter.prototype = {
                                                                            getParam: function(e, i) {
                                                                                var l = this.params[e], l = l == null ? i: l, m = {
                                                                                    "true": true,
                                                                                    "false": false
                                                                                }
                                                                                [l];
                                                                                return m == null ? l : m
                                                                            },
                                                                            create: function(e) {
                                                                                return document.createElement(e)
                                                                            },
                                                                            findMatches: function(e, i) {
                                                                                var l = [];
                                                                                if (e != null)
                                                                                    for (var m = 0, p = e.length; m < p; m++)
                                                                                        typeof e[m] == "object" && (l = l.concat(ca(i, e[m])));
                                                                                        return this.removeNestedMatches(l.sort(t))
                                                                                    },
                                                                                    removeNestedMatches: function(e) {
                                                                                        for (var i = 0, l = e.length; i < l; i++)
                                                                                            if (e[i] !== null)
                                                                                                for (var m = e[i], p = m.index + m.length,
                                                                                                A = i + 1, l = e.length; A < l && e[i] !== null; A++) {
                                                                                                    var z = e[A];
                                                                                                    if (z !== null)
                                                                                                        if (z.index > p)
                                                                                                            break;
                                                                                                        else 
                                                                                                            z.index == m.index && z.length > m.length ? e[i] = null : z.index >= m.index && z.index < p && (e[A] = null)
                                                                                                }
                                                                                                return e
                                                                                            },
                                                                                            figureOutLineNumbers: function(e) {
                                                                                                var i = [], l = parseInt(this.getParam("first-line"));
                                                                                                z(e, function(e, n) {
                                                                                                    i.push(n + l)
                                                                                                });
                                                                                                return i
                                                                                            },
                                                                                            isLineHighlighted: function(e) {
                                                                                                var i = this.getParam("highlight", []);
                                                                                                typeof i != "object" && i.push == null && (i = [i]);
                                                                                                a: {
                                                                                                    var e = e.toString(), l;
                                                                                                    l = Math.max(0, 0);
                                                                                                    for (var m = i.length; l < m; l++)
                                                                                                        if (i[l] == e) {
                                                                                                            i = l;
                                                                                                            break a
                                                                                                        }
                                                                                                        i =
                                                                                                        - 1
                                                                                                    }
                                                                                                    return i!=-1
                                                                                                },
                                                                                                getLineHtml: function(e, i, l) {
                                                                                                    e = ["line", "number" + i, "index" + e, "alt" + (i%2 == 0 ? 1 : 2).toString()];
                                                                                                    this.isLineHighlighted(i) && e.push("highlighted");
                                                                                                    i == 0 && e.push("break");
                                                                                                    return '<div class="' + e.join(" ") + '">' + l + "</div>"
                                                                                                },
                                                                                                getLineNumbersHtml: function(e, i) {
                                                                                                    var l = "", z = m(e).length, y = parseInt(this.getParam("first-line")), A = this.getParam("pad-line-numbers");
                                                                                                    A == true ? A = (y + z - 1).toString().length : isNaN(A) == true && (A = 0);
                                                                                                    for (var t = 0; t < z; t++) {
                                                                                                        var C = i ? i[t]: y + t, v;
                                                                                                        if (C == 0)
                                                                                                            v = p.config.space;
                                                                                                        else 
                                                                                                            for (v = C.toString(); v.length <
                                                                                                            A;)
                                                                                                                v = "0" + v;
                                                                                                                e = v;
                                                                                                                l = l + this.getLineHtml(t, C, e)
                                                                                                    }
                                                                                                    return l
                                                                                                },
                                                                                                getCodeLinesHtml: function(e, i) {
                                                                                                    var e = la(e), l = m(e);
                                                                                                    this.getParam("pad-line-numbers");
                                                                                                    for (var z = parseInt(this.getParam("first-line")), e = "", y = this.getParam("brush"), A = 0, t = l.length; A < t; A++) {
                                                                                                        var C = l[A], v = /^(&nbsp;|\s)+/.exec(C), F = null, P = i ? i[A]: z + A;
                                                                                                        if (v != null) {
                                                                                                            F = v[0].toString();
                                                                                                            C = C.substr(F.length);
                                                                                                            F = F.replace(" ", p.config.space)
                                                                                                        }
                                                                                                        C = la(C);
                                                                                                        if (C.length == 0)
                                                                                                            C = p.config.space;
                                                                                                            e = e + this.getLineHtml(A, P, (F != null ? '<code class="' + y + ' spaces">' + F + "</code>" : "") + C)
                                                                                                    }
                                                                                                    return e
                                                                                                },
                                                                                                getTitleHtml: function(e) {
                                                                                                    return e ? "<caption>" + e + "</caption>" : ""
                                                                                                },
                                                                                                getMatchesHtml: function(e, i) {
                                                                                                    function l(e) {
                                                                                                        return (e = e ? e.brushName || z : z) ? e + " " : ""
                                                                                                    }
                                                                                                    for (var m = 0, p = "", z = this.getParam("brush", ""), t = 0, C = i.length; t < C; t++) {
                                                                                                        var v = i[t], F;
                                                                                                        if (!(v === null || v.length === 0)) {
                                                                                                            F = l(v);
                                                                                                            p = p + (S(e.substr(m, v.index - m), F + "plain") + S(v.value, F + v.css));
                                                                                                            m = v.index + v.length + (v.offset || 0)
                                                                                                        }
                                                                                                    }
                                                                                                    return p = p + S(e.substr(m), l() + "plain")
                                                                                                },
                                                                                                getHtml: function(e) {
                                                                                                    var i = "", l = ["syntaxhighlighter"], t, y;
                                                                                                    if (this.getParam("light") == true)
                                                                                                        this.params.toolbar =
                                                                                                        this.params.gutter = false;
                                                                                                        className = "syntaxhighlighter";
                                                                                                        this.getParam("collapse") == true && l.push("collapsed");
                                                                                                        (gutter = this.getParam("gutter")) == false && l.push("nogutter");
                                                                                                        l.push(this.getParam("class-name"));
                                                                                                        l.push(this.getParam("brush"));
                                                                                                        e = e.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g, "").replace(/\r/g, " ");
                                                                                                        t = this.getParam("tab-size");
                                                                                                        if (this.getParam("smart-tabs") == true) {
                                                                                                            m(e);
                                                                                                            for (var A = "", i = 0; i < 50; i++)
                                                                                                                A = A + "                    ";
                                                                                                                e = z(e, function(e) {
                                                                                                                    if (e.indexOf("\t")==-1)
                                                                                                                        return e;
                                                                                                                        for (var i = 0; (i = e.indexOf("\t")) !=
                                                                                                                        - 1;)
                                                                                                                            e = e.substr(0, i) + A.substr(0, t - i%t) + e.substr(i + 1, e.length);
                                                                                                                            return e
                                                                                                                        })
                                                                                                        } else {
                                                                                                            for (var i = "", v = 0; v < t; v++)
                                                                                                                i = i + " ";
                                                                                                                e = e.replace(/\t/g, i)
                                                                                                        }
                                                                                                        if (this.getParam("unindent"))
                                                                                                            a: {
                                                                                                                i = e;
                                                                                                                v = /<br\s*\/?>|&lt;br\s*\/?&gt;/gi;
                                                                                                                p.config.bloggerMode == true && (i = i.replace(v, "\n"));
                                                                                                                p.config.stripBrs == true && (i = i.replace(v, ""));
                                                                                                                for (var i = m(i), v = /^\s*/, F = 1E3, M = 0, U = i.length; M < U && F > 0; M++) {
                                                                                                                    var P = i[M];
                                                                                                                    if (la(P).length != 0) {
                                                                                                                        P = v.exec(P);
                                                                                                                        if (P == null)
                                                                                                                            break a;
                                                                                                                            F = Math.min(P[0].length, F)
                                                                                                                        }
                                                                                                                }
                                                                                                                if (F > 0) {
                                                                                                                    M = 0;
                                                                                                                    for (U = i.length; M < U; M++)
                                                                                                                        i[M] = i[M].substr(F)
                                                                                                                }
                                                                                                                e =
                                                                                                                i.join("\n")
                                                                                                            }
                                                                                                            gutter && (y = this.figureOutLineNumbers(e));
                                                                                                            i = this.findMatches(this.regexList, e);
                                                                                                            i = this.getMatchesHtml(e, i);
                                                                                                            i = this.getCodeLinesHtml(i, y);
                                                                                                            if (this.getParam("auto-links"))
                                                                                                                var G = /(.*)((&gt;|&lt;).*)/, i = i.replace(p.regexLib.url, function(e) {
                                                                                                                    var i = "", l = null;
                                                                                                                    if (l = G.exec(e)) {
                                                                                                                        e = l[1];
                                                                                                                        i = l[2]
                                                                                                                    }
                                                                                                                    return '<a href="' + e + '">' + e + "</a>" + i
                                                                                                                });
                                                                                                                typeof navigator != "undefined" && (navigator.userAgent && navigator.userAgent.match(/MSIE/)) && l.push("ie");
                                                                                                                return i = '<div id="' + C(this.id) + '" class="' + l.join(" ") + '">' + (this.getParam("toolbar") ?
                                                                                                                p.toolbar.getHtml(this) : "") + '<table border="0" cellpadding="0" cellspacing="0">' + this.getTitleHtml(this.getParam("title")) + "<tbody><tr>" + (gutter ? '<td class="gutter">' + this.getLineNumbersHtml(e) + "</td>" : "") + '<td class="code"><div class="container">' + i + "</div></td></tr></tbody></table></div>"
                                                                                                            },
                                                                                                            getDiv: function(n) {
                                                                                                                n === null && (n = "");
                                                                                                                this.code = n;
                                                                                                                var i = this.create("div");
                                                                                                                i.innerHTML = this.getHtml(n);
                                                                                                                this.getParam("toolbar") && e(l(i, ".toolbar"), "click", p.toolbar.handler);
                                                                                                                this.getParam("quick-code") && e(l(i, ".code"),
                                                                                                                "dblclick", F);
                                                                                                                return i
                                                                                                            },
                                                                                                            init: function(e) {
                                                                                                                this.id = "" + Math.round(Math.random() * 1E6).toString();
                                                                                                                p.vars.highlighters[C(this.id)] = this;
                                                                                                                this.params = v(p.defaults, e || {});
                                                                                                                if (this.getParam("light") == true)
                                                                                                                    this.params.toolbar = this.params.gutter = false
                                                                                                                },
                                                                                                                getKeywords: function(e) {
                                                                                                                    e = e.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "|");
                                                                                                                    return "\\b(?:" + e + ")\\b"
                                                                                                                },
                                                                                                                forHtmlScript: function(e) {
                                                                                                                    var i = e.right.source;
                                                                                                                    e.eof && (i = "(?:(?:" + i + ")|$)");
                                                                                                                    this.htmlScript = {
                                                                                                                        left: {
                                                                                                                            regex: e.left,
                                                                                                                            css: "script"
                                                                                                                        },
                                                                                                                        right: {
                                                                                                                            regex: e.right,
                                                                                                                            css: "script"
                                                                                                                        },
                                                                                                                        code: XRegExp("(?<left>" +
                                                                                                                        e.left.source + ")(?<code>.*?)(?<right>" + i + ")", "sgi")
                                                                                                                    }
                                                                                                                }
                                                                                                            };
                                                                                                            return p
                                                                                                        }();
"undefined" != typeof exports ? exports.SyntaxHighlighter = SyntaxHighlighter : null;
(function() {
    function m() {
        var m = SyntaxHighlighter.regexLib;
        this.regexList = [{
            regex: m.multiLineDoubleQuotedString,
            css: "string"
        }, {
            regex: m.multiLineSingleQuotedString,
            css: "string"
        }, {
            regex: m.singleLineCComments,
            css: "comments"
        }, {
            regex: m.multiLineCComments,
            css: "comments"
        }, {
            regex: /\s*#.*/gm,
            css: "preprocessor"
        }, {
            regex: RegExp(this.getKeywords("break case catch class continue default delete do else enum export extends false  for function if implements import in instanceof interface let new null package private protected static return super switch this throw true try typeof var while with yield"), "gm"),
            css: "keyword"
        }
        ];
        this.forHtmlScript(m.scriptScriptTags);
        this.langLabel = "Javascript"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    m.prototype = new SyntaxHighlighter.Highlighter;
    m.aliases = ["js", "jscript", "javascript", "json"];
    SyntaxHighlighter.brushes.JScript = m;
    "undefined" != typeof exports ? exports.Brush = m : null
})();
(function() {
    function m() {
        this.regexList = [{
            regex: XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)", "gm"),
            css: "color2"
        }, {
            regex: SyntaxHighlighter.regexLib.xmlComments,
            css: "comments"
        }, {
            regex: XRegExp("(&lt;|<)[\\s\\/\\?!]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)", "sg"),
            func: function(m) {
                var l = SyntaxHighlighter.Match, v = m[0], e = XRegExp.exec(v, XRegExp("(&lt;|<)[\\s\\/\\?!]*(?<name>[:\\w-\\.]+)", "xg")), U = [];
                if (null != m.attributes) {
                    var z;
                    z = 0;
                    for (var S = XRegExp("(?<name> [\\w:.-]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)",
                    "xg"); null != (z = XRegExp.exec(v, S, z));)
                        U.push(new l(z.name, m.index + z.index, "color1")), U.push(new l(z.value, m.index + z.index + z[0].indexOf(z.value), "string")), z = z.index + z[0].length
                }
                null != e && U.push(new l(e.name, m.index + e[0].indexOf(e.name), "keyword"));
                return U
            }
        }
        ];
        this.langLabel = "HTML"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    m.prototype = new SyntaxHighlighter.Highlighter;
    m.aliases = ["xml", "xhtml", "xslt", "html", "plist"];
    SyntaxHighlighter.brushes.Xml =
    m;
    "undefined" != typeof exports ? exports.Brush = m : null
})();
(function() {
    function m() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: "string"
        }, {
            regex: /\#[a-fA-F0-9]{3,6}/g,
            css: "value"
        }, {
            regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,
            css: "value"
        }, {
            regex: /!important/g,
            css: "color3"
        }, {
            regex: RegExp("\\b([a-z_]|)" + "ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index".replace(/ /g, "(?=:)\\b|\\b([a-z_\\*]|\\*|)") +
            "(?=:)\\b", "gm"),
            css: "keyword"
        }, {
            regex: RegExp("\\b" + "above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow".replace(/ /g,
            "(?!-)(?!:)\\b|\\b()") + ":\\b", "g"),
            css: "value"
        }, {
            regex: RegExp(this.getKeywords("[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif"), "g"),
            css: "color1"
        }
        ];
        this.forHtmlScript({
            left: /(&lt;|<)\s*style.*?(&gt;|>)/gi,
            right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi
        });
        this.langLabel = "CSS"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    m.prototype = new SyntaxHighlighter.Highlighter;
    m.aliases = ["css"];
    SyntaxHighlighter.brushes.CSS = m;
    "undefined" != typeof exports ? exports.Brush = m : null
})();
(function() {
    function m() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: "string"
        }, {
            regex: /\$\w+/g,
            css: "variable"
        }, {
            regex: RegExp(this.getKeywords("abs acos acosh addcslashes addslashes array_change_key_case array_chunk array_combine array_count_values array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill array_filter array_flip array_intersect array_intersect_assoc array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map array_merge array_merge_recursive array_multisort array_pad array_pop array_product array_push array_rand array_reduce array_reverse array_search array_shift array_slice array_splice array_sum array_udiff array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc array_uintersect_uassoc array_unique array_unshift array_values array_walk array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists closedir closelog copy cos cosh count count_chars date decbin dechex decoct deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime strtoupper strtr strval substr substr_compare"), "gmi"),
            css: "functions"
        }, {
            regex: RegExp(this.getKeywords("__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__"), "gmi"),
            css: "constants"
        }, {
            regex: RegExp(this.getKeywords("abstract and array as break case catch cfunction class clone const continue declare default die do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final finally for foreach function global goto if implements include include_once interface instanceof insteadof namespace new old_function or private protected public return require require_once static switch trait throw try use var while xor yield "),
            "gm"),
            css: "keyword"
        }
        ];
        this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
        this.langLabel = "PHP"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    m.prototype = new SyntaxHighlighter.Highlighter;
    m.aliases = ["php"];
    SyntaxHighlighter.brushes.Php = m;
    "undefined" != typeof exports ? exports.Brush = m : null
})();
(function() {
    function m() {
        this.regexList = [{
            regex: /--(.*)$/gm,
            css: "comments"
        }, {
            regex: /\/\*([^\*][\s\S]*?)?\*\//gm,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,
            css: "string"
        }, {
            regex: RegExp(this.getKeywords("abs avg case cast coalesce convert count current_timestamp current_user day isnull left lower month nullif replace right session_user space substring sum system_user upper user year"), "gmi"),
            css: "color2"
        }, {
            regex: RegExp(this.getKeywords("all and any between cross in join like not null or outer some"), "gmi"),
            css: "color1"
        }, {
            regex: RegExp(this.getKeywords("absolute action add after alter as asc at authorization begin bigint binary bit by cascade char character check checkpoint close collate column commit committed connect connection constraint contains continue create cube current current_date current_time cursor database date deallocate dec decimal declare default delete desc distinct double drop dynamic else end end-exec escape except exec execute false fetch first float for force foreign forward free from full function global goto grant group grouping having hour ignore index inner insensitive insert instead int integer intersect into is isolation key last level load local max min minute modify move name national nchar next no numeric of off on only open option order out output partial password precision prepare primary prior privileges procedure public read real references relative repeatable restrict return returns revoke rollback rollup rows rule schema scroll second section select sequence serializable set size smallint static statistics table temp temporary then time timestamp to top transaction translation trigger true truncate uncommitted union unique update values varchar varying view when where with work"),
            "gmi"),
            css: "keyword"
        }
        ];
        this.langLabel = "SQL"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    m.prototype = new SyntaxHighlighter.Highlighter;
    m.aliases = ["sql"];
    SyntaxHighlighter.brushes.Sql = m;
    "undefined" != typeof exports ? exports.Brush = m : null
})();
(function() {
    function m() {
        this.langLabel = "Plain text"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    m.prototype = new SyntaxHighlighter.Highlighter;
    m.aliases = ["text", "plain"];
    SyntaxHighlighter.brushes.Plain = m;
    "undefined" != typeof exports ? exports.Brush = m : null
})();
(function() {
    function m() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments,
            func: function(m) {
                var l = 0 == m[0].indexOf("///") ? "color1": "comments";
                return [new SyntaxHighlighter.Match(m[0], m.index, l)]
            }
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: /@"(?:[^"]|"")*"/g,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: "string"
        }, {
            regex: /^\s*#.*/gm,
            css: "preprocessor"
        }, {
            regex: RegExp(this.getKeywords("abstract as async await base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit volatile extern false finally fixed float for foreach get goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed set short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void while var from group by into select let where orderby join on equals ascending descending"),
            "gm"),
            css: "keyword"
        }, {
            regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g,
            css: "keyword"
        }, {
            regex: /\byield(?=\s+(?:return|break)\b)/g,
            css: "keyword"
        }
        ];
        this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
        this.langLabel = "C#"
    }
    SyntaxHighlighter = SyntaxHighlighter || ("undefined" !== typeof require ? require("shCore").SyntaxHighlighter : null);
    m.prototype = new SyntaxHighlighter.Highlighter;
    m.aliases = ["c#", "cs", "c-sharp", "csharp"];
    SyntaxHighlighter.brushes.CSharp = m;
    "undefined" != typeof exports ? exports.Brush =
    m : null
})();
SyntaxHighlighter.all();
(function(m, C, l) {
    var v = function(e) {
        function v(a) {
            var b, c, g = {};
            e.each(a, function(e) {
                if ((b = e.match(/^([^A-Z]+?)([A-Z])/))&&-1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " "))
                    c = e.replace(b[0], b[2].toLowerCase()), g[c] = e, "o" === b[1] && v(a[e])
            });
            a._hungarianMap = g
        }
        function z(a, b, c) {
            a._hungarianMap || v(a);
            var g;
            e.each(b, function(k) {
                g = a._hungarianMap[k];
                if (g !== l && (c || b[g] === l))
                    "o" === g.charAt(0) ? (b[g] || (b[g] = {}), e.extend(!0, b[g], b[k]), z(a[g], b[g], c)) : b[g] = b[k]
            })
        }
        function S(a) {
            var b = B.defaults.oLanguage, c = a.sZeroRecords;
            !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && na(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && na(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && bc(a)
        }
        function la(a) {
            sa(a, "ordering", "bSort");
            sa(a, "orderMulti", "bSortMulti");
            sa(a, "orderClasses", "bSortClasses");
            sa(a, "orderCellsTop", "bSortCellsTop");
            sa(a, "order", "aaSorting");
            sa(a, "orderFixed", "aaSortingFixed");
            sa(a, "paging", "bPaginate");
            sa(a, "pagingType", "sPaginationType");
            sa(a, "pageLength", "iDisplayLength");
            sa(a, "searching", "bFilter");
            if (a = a.aoSearchCols)
                for (var b = 0, c = a.length; b < c; b++)
                    a[b] && z(B.models.oSearch, a[b])
        }
        function t(a) {
            sa(a, "orderable", "bSortable");
            sa(a, "orderData", "aDataSort");
            sa(a, "orderSequence", "asSorting");
            sa(a, "orderDataType", "sortDataType");
            var b = a.aDataSort;
            b&&!e.isArray(b) && (a.aDataSort = [b])
        }
        function ca(a) {
            var a = a.oBrowser, b = e("<div/>").css({
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(e("<div/>").css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll"
            }).append(e('<div class="test"/>').css({
                width: "100%",
                height: 10
            }))).appendTo("body"), c = b.find(".test");
            a.bScrollOversize = 100 === c[0].offsetWidth;
            a.bScrollbarLeft = 1 !== c.offset().left;
            b.remove()
        }
        function M(a, b, c, g, e, f) {
            var d, q=!1;
            c !== l && (d = c, q=!0);
            for (; g !== e;)
                a.hasOwnProperty(g) && (d = q ? b(d, a[g], g, a) : a[g], q=!0, g += f);
            return d
        }
        function F(a, b) {
            var c = B.defaults.column, g = a.aoColumns.length, c = e.extend({}, B.models.oColumn, c, {
                nTh: b ? b: C.createElement("th"),
                sTitle: c.sTitle ?
                c.sTitle: b ? b.innerHTML: "",
                aDataSort: c.aDataSort ? c.aDataSort: [g],
                mData: c.mData ? c.mData: g,
                idx: g
            });
            a.aoColumns.push(c);
            c = a.aoPreSearchCols;
            c[g] = e.extend({}, B.models.oSearch, c[g]);
            p(a, g, e(b).data())
        }
        function p(a, b, c) {
            var b = a.aoColumns[b], g = a.oClasses, k = e(b.nTh);
            if (!b.sWidthOrig) {
                b.sWidthOrig = k.attr("width") || null;
                var f = (k.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                f && (b.sWidthOrig = f[1])
            }
            c !== l && null !== c && (t(c), z(B.defaults.column, c), c.mDataProp !== l&&!c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType =
            c.sType), c.className&&!c.sClass && (c.sClass = c.className), e.extend(b, c), na(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== l && (b.aDataSort = [c.iDataSort]), na(b, c, "aDataSort"));
            var d = b.mData, q = W(d), o = b.mRender ? W(b.mRender): null, c = function(a) {
                return "string" === typeof a&&-1 !== a.indexOf("@")
            };
            b._bAttrSrc = e.isPlainObject(d) && (c(d.sort) || c(d.type) || c(d.filter));
            b.fnGetData = function(a, b, c) {
                var g = q(a, b, l, c);
                return o && b ? o(g, b, a, c) : g
            };
            b.fnSetData = function(a, b, c) {
                return Z(d)(a, b, c)
            };
            "number" !== typeof d && (a._rowReadObject =
            !0);
            a.oFeatures.bSort || (b.bSortable=!1, k.addClass(g.sSortableNone));
            a =- 1 !== e.inArray("asc", b.asSorting);
            c =- 1 !== e.inArray("desc", b.asSorting);
            !b.bSortable ||!a&&!c ? (b.sSortingClass = g.sSortableNone, b.sSortingClassJUI = "") : a&&!c ? (b.sSortingClass = g.sSortableAsc, b.sSortingClassJUI = g.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = g.sSortableDesc, b.sSortingClassJUI = g.sSortJUIDescAllowed) : (b.sSortingClass = g.sSortable, b.sSortingClassJUI = g.sSortJUI)
        }
        function n(a) {
            if (!1 !== a.oFeatures.bAutoWidth) {
                var b = a.aoColumns;
                kb(a);
                for (var c = 0, g = b.length; c < g; c++)
                    b[c].nTh.style.width = b[c].sWidth
            }
            b = a.oScroll;
            ("" !== b.sY || "" !== b.sX) && bb(a);
            T(a, null, "column-sizing", [a])
        }
        function i(a, b) {
            var c = y(a, "bVisible");
            return "number" === typeof c[b] ? c[b] : null
        }
        function u(a, b) {
            var c = y(a, "bVisible"), c = e.inArray(b, c);
            return - 1 !== c ? c : null
        }
        function D(a) {
            return y(a, "bVisible").length
        }
        function y(a, b) {
            var c = [];
            e.map(a.aoColumns, function(a, e) {
                a[b] && c.push(e)
            });
            return c
        }
        function A(a) {
            var b = a.aoColumns, c = a.aoData, g = B.ext.type.detect, e, f, d, q, o, i, m, n,
            J;
            e = 0;
            for (f = b.length; e < f; e++)
                if (m = b[e], J = [], !m.sType && m._sManualType)
                    m.sType = m._sManualType;
                else if (!m.sType) {
                    d = 0;
                    for (q = g.length; d < q; d++) {
                        o = 0;
                        for (i = c.length; o < i; o++) {
                            J[o] === l && (J[o] = Y(a, o, e, "type"));
                            n = g[d](J[o], a);
                            if (!n && d !== g.length - 1)
                                break;
                                if ("html" === n)
                                    break
                        }
                        if (n) {
                            m.sType = n;
                            break
                        }
                    }
                    m.sType || (m.sType = "string")
                }
        }
        function K(a, b, c, g) {
            var d, f, j, q, o, i, m = a.aoColumns;
            if (b)
                for (d = b.length - 1; 0 <= d; d--) {
                    i = b[d];
                    var n = i.targets !== l ? i.targets: i.aTargets;
                    e.isArray(n) || (n = [n]);
                    f = 0;
                    for (j = n.length; f < j; f++)
                        if ("number" ===
                        typeof n[f] && 0 <= n[f]) {
                            for (; m.length <= n[f];)
                                F(a);
                                g(n[f], i)
                        } else if ("number" === typeof n[f] && 0 > n[f])
                            g(m.length + n[f], i);
                        else if ("string" === typeof n[f]) {
                            q = 0;
                            for (o = m.length; q < o; q++)("_all" == n[f] || e(m[q].nTh).hasClass(n[f])
                                ) && g(q, i)
                        }
                }
            if (c) {
                d = 0;
                for (a = c.length; d < a; d++)
                    g(d, c[d])
            }
        }
        function aa(a, b, c, g) {
            var d = a.aoData.length, f = e.extend(!0, {}, B.models.oRow, {
                src: c ? "dom": "data"
            });
            f._aData = b;
            a.aoData.push(f);
            for (var b = a.aoColumns, f = 0, j = b.length; f < j; f++)
                c && P(a, d, f, Y(a, d, f)), b[f].sType = null;
            a.aiDisplayMaster.push(d);
            (c ||!a.oFeatures.bDeferRender) && Fa(a, d, c, g);
            return d
        }
        function ea(a, b) {
            var c;
            b instanceof e || (b = e(b));
            return b.map(function(b, e) {
                c = ma(a, e);
                return aa(a, c.data, e, c.cells)
            })
        }
        function Y(a, b, c, g) {
            var e = a.iDraw, f = a.aoColumns[c], d = a.aoData[b]._aData, q = f.sDefaultContent, c = f.fnGetData(d, g, {
                settings: a,
                row: b,
                col: c
            });
            if (c === l)
                return a.iDrawError != e && null === q && (ha(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b, 4), a.iDrawError = e), q;
            if ((c === d || null === c) &&
            null !== q)
                c = q;
            else if ("function" === typeof c)
                return c.call(d);
            return null === c && "display" == g ? "" : c
        }
        function P(a, b, c, g) {
            a.aoColumns[c].fnSetData(a.aoData[b]._aData, g, {
                settings: a,
                row: b,
                col: c
            })
        }
        function G(a) {
            return e.map(a.match(/(\\.|[^\.])+/g), function(a) {
                return a.replace(/\\./g, ".")
            })
        }
        function W(a) {
            if (e.isPlainObject(a)) {
                var b = {};
                e.each(a, function(a, c) {
                    c && (b[a] = W(c))
                });
                return function(a, c, f, e) {
                    var d = b[c] || b._;
                    return d !== l ? d(a, c, f, e) : a
                }
            }
            if (null === a)
                return function(a) {
                    return a
                };
            if ("function" === typeof a)
                return function(b,
                c, f, e) {
                    return a(b, c, f, e)
                };
            if ("string" === typeof a && ( - 1 !== a.indexOf(".")||-1 !== a.indexOf("[")||-1 !== a.indexOf("("))) {
                var c = function(a, b, f) {
                    var e, d;
                    if ("" !== f) {
                        d = G(f);
                        for (var o = 0, i = d.length; o < i; o++) {
                            f = d[o].match(ab);
                            e = d[o].match(ib);
                            if (f) {
                                d[o] = d[o].replace(ab, "");
                                "" !== d[o] && (a = a[d[o]]);
                                e = [];
                                d.splice(0, o + 1);
                                d = d.join(".");
                                o = 0;
                                for (i = a.length; o < i; o++)
                                    e.push(c(a[o], b, d));
                                a = f[0].substring(1, f[0].length - 1);
                                a = "" === a ? e : e.join(a);
                                break
                            } else if (e) {
                                d[o] = d[o].replace(ib, "");
                                a = a[d[o]]();
                                continue
                            }
                            if (null === a || a[d[o]] ===
                            l)
                                return l;
                            a = a[d[o]]
                        }
                    }
                    return a
                };
                return function(b, e) {
                    return c(b, e, a)
                }
            }
            return function(b) {
                return b[a]
            }
        }
        function Z(a) {
            if (e.isPlainObject(a))
                return Z(a._);
            if (null === a)
                return function() {};
            if ("function" === typeof a)
                return function(b, g, e) {
                    a(b, "set", g, e)
                };
            if ("string" === typeof a && ( - 1 !== a.indexOf(".")||-1 !== a.indexOf("[")||-1 !== a.indexOf("("))) {
                var b = function(a, g, e) {
                    var e = G(e), f;
                    f = e[e.length - 1];
                    for (var d, q, o = 0, i = e.length - 1; o < i; o++) {
                        d = e[o].match(ab);
                        q = e[o].match(ib);
                        if (d) {
                            e[o] = e[o].replace(ab, "");
                            a[e[o]] = [];
                            f = e.slice();
                            f.splice(0, o + 1);
                            d = f.join(".");
                            q = 0;
                            for (i = g.length; q < i; q++)
                                f = {}, b(f, g[q], d), a[e[o]].push(f);
                            return 
                        }
                        q && (e[o] = e[o].replace(ib, ""), a = a[e[o]](g));
                        if (null === a[e[o]] || a[e[o]] === l)
                            a[e[o]] = {};
                        a = a[e[o]]
                    }
                    if (f.match(ib))
                        a[f.replace(ib, "")](g);
                    else 
                        a[f.replace(ab, "")] = g
                };
                return function(c, g) {
                    return b(c, g, a)
                }
            }
            return function(b, g) {
                b[a] = g
            }
        }
        function fa(a) {
            return Ca(a.aoData, "_aData")
        }
        function ua(a) {
            a.aoData.length = 0;
            a.aiDisplayMaster.length = 0;
            a.aiDisplay.length = 0
        }
        function N(a, b, c) {
            for (var g =- 1, e = 0, f = a.length; e <
            f; e++)
                a[e] == b ? g = e : a[e] > b && a[e]--;
            - 1 != g && c === l && a.splice(g, 1)
        }
        function Ea(a, b, c, g) {
            var e = a.aoData[b], f, d = function(c, g) {
                for (; c.childNodes.length;)
                    c.removeChild(c.firstChild);
                c.innerHTML = Y(a, b, g, "display")
            };
            if ("dom" === c || (!c || "auto" === c) && "dom" === e.src)
                e._aData = ma(a, e, g, g === l ? l : e._aData).data;
            else {
                var q = e.anCells;
                if (q)
                    if (g !== l)
                        d(q[g], g);
                    else {
                        c = 0;
                        for (f = q.length; c < f; c++)
                            d(q[c], c)
                        }
                }
            e._aSortData = null;
            e._aFilterData = null;
            d = a.aoColumns;
            if (g !== l)
                d[g].sType = null;
            else {
                c = 0;
                for (f = d.length; c < f; c++)
                    d[c].sType = null;
                Pa(e)
            }
        }
        function ma(a, b, c, g) {
            var d = [], f = b.firstChild, j, q = 0, o, i = a.aoColumns, m = a._rowReadObject, g = g || m ? {}
            : [], n = function(a, b) {
                if ("string" === typeof a) {
                    var c = a.indexOf("@");
                    - 1 !== c && (c = a.substring(c + 1), Z(a)(g, b.getAttribute(c)))
                }
            }, a = function(a) {
                if (c === l || c === q)
                    j = i[q], o = e.trim(a.innerHTML), j && j._bAttrSrc ? (Z(j.mData._)(g, o), n(j.mData.sort, a), n(j.mData.type, a), n(j.mData.filter, a)) : m ? (j._setter || (j._setter = Z(j.mData)), j._setter(g, o)) : g[q] = o;
                q++
            };
            if (f)
                for (; f;) {
                    b = f.nodeName.toUpperCase();
                    if ("TD" == b || "TH" == b)
                        a(f),
                        d.push(f);
                        f = f.nextSibling
                } else {
                d = b.anCells;
                f = 0;
                for (b = d.length; f < b; f++)
                    a(d[f])
                }
            return {
                data: g,
                cells: d
            }
        }
        function Fa(a, b, c, g) {
            var e = a.aoData[b], f = e._aData, d = [], q, o, i, l, m;
            if (null === e.nTr) {
                q = c || C.createElement("tr");
                e.nTr = q;
                e.anCells = d;
                q._DT_RowIndex = b;
                Pa(e);
                l = 0;
                for (m = a.aoColumns.length; l < m; l++) {
                    i = a.aoColumns[l];
                    o = c ? g[l] : C.createElement(i.sCellType);
                    d.push(o);
                    if (!c || i.mRender || i.mData !== l)
                        o.innerHTML = Y(a, b, l, "display");
                    i.sClass && (o.className += " " + i.sClass);
                    i.bVisible&&!c ? q.appendChild(o) : !i.bVisible && c &&
                    o.parentNode.removeChild(o);
                    i.fnCreatedCell && i.fnCreatedCell.call(a.oInstance, o, Y(a, b, l), f, b, l)
                }
                T(a, "aoRowCreatedCallback", null, [q, f, b])
            }
            e.nTr.setAttribute("role", "row")
        }
        function Pa(a) {
            var b = a.nTr, c = a._aData;
            if (b) {
                c.DT_RowId && (b.id = c.DT_RowId);
                if (c.DT_RowClass) {
                    var g = c.DT_RowClass.split(" ");
                    a.__rowc = a.__rowc ? eb(a.__rowc.concat(g)) : g;
                    e(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass)
                }
                c.DT_RowAttr && e(b).attr(c.DT_RowAttr);
                c.DT_RowData && e(b).data(c.DT_RowData)
            }
        }
        function gb(a) {
            var b, c, g, d,
            f, j = a.nTHead, q = a.nTFoot, o = 0 === e("th, td", j).length, i = a.oClasses, l = a.aoColumns;
            o && (d = e("<tr/>").appendTo(j));
            b = 0;
            for (c = l.length; b < c; b++)
                f = l[b], g = e(f.nTh).addClass(f.sClass), o && g.appendTo(d), a.oFeatures.bSort && (g.addClass(f.sSortingClass), !1 !== f.bSortable && (g.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Na(a, f.nTh, b))), f.sTitle != g.html() && g.html(f.sTitle), $b(a, "header")(a, g, f, i);
            o && hb(a.aoHeader, j);
            e(j).find(">tr").attr("role", "row");
            e(j).find(">tr>th, >tr>td").addClass(i.sHeaderTH);
            e(q).find(">tr>th, >tr>td").addClass(i.sFooterTH);
            if (null !== q) {
                a = a.aoFooter[0];
                b = 0;
                for (c = a.length; b < c; b++)
                    f = l[b], f.nTf = a[b].cell, f.sClass && e(f.nTf).addClass(f.sClass)
            }
        }
        function Qa(a, b, c) {
            var g, d, f, j = [], q = [], o = a.aoColumns.length, i;
            if (b) {
                c === l && (c=!1);
                g = 0;
                for (d = b.length; g < d; g++) {
                    j[g] = b[g].slice();
                    j[g].nTr = b[g].nTr;
                    for (f = o - 1; 0 <= f; f--)
                        !a.aoColumns[f].bVisible&&!c && j[g].splice(f, 1);
                    q.push([])
                }
                g = 0;
                for (d = j.length; g < d; g++) {
                    if (a = j[g].nTr)
                        for (; f = a.firstChild;)
                            a.removeChild(f);
                    f = 0;
                    for (b = j[g].length; f < b; f++)
                        if (i =
                        o = 1, q[g][f] === l) {
                            a.appendChild(j[g][f].cell);
                            for (q[g][f] = 1; j[g + o] !== l && j[g][f].cell == j[g + o][f].cell;)
                                q[g + o][f] = 1, o++;
                                for (; j[g][f + i] !== l && j[g][f].cell == j[g][f + i].cell;) {
                                    for (c = 0; c < o; c++)
                                        q[g + c][f + i] = 1;
                                        i++
                                }
                                e(j[g][f].cell).attr("rowspan", o).attr("colspan", i)
                        }
                }
            }
        }
        function pa(a) {
            var b = T(a, "aoPreDrawCallback", "preDraw", [a]);
            if ( - 1 !== e.inArray(!1, b))
                ta(a, !1);
            else {
                var b = [], c = 0, g = a.asStripeClasses, d = g.length, f = a.oLanguage, j = a.iInitDisplayStart, q = "ssp" == ra(a), o = a.aiDisplay;
                a.bDrawing=!0;
                j !== l&&-1 !== j && (a._iDisplayStart =
                q ? j : j >= a.fnRecordsDisplay() ? 0 : j, a.iInitDisplayStart =- 1);
                var j = a._iDisplayStart, i = a.fnDisplayEnd();
                if (a.bDeferLoading)
                    a.bDeferLoading=!1, a.iDraw++, ta(a, !1);
                else if (q) {
                    if (!a.bDestroying&&!Wb(a))
                        return 
                } else 
                    a.iDraw++;
                if (0 !== o.length) {
                    f = q ? a.aoData.length : i;
                    for (q = q ? 0 : j; q < f; q++) {
                        var m = o[q], n = a.aoData[m];
                        null === n.nTr && Fa(a, m);
                        m = n.nTr;
                        if (0 !== d) {
                            var p = g[c%d];
                            n._sRowStripe != p && (e(m).removeClass(n._sRowStripe).addClass(p), n._sRowStripe = p)
                        }
                        T(a, "aoRowCallback", null, [m, n._aData, c, q]);
                        b.push(m);
                        c++
                    }
                } else 
                    c = f.sZeroRecords,
                    1 == a.iDraw && "ajax" == ra(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = e("<tr/>", {
                        "class": d ? g[0]: ""
                    }).append(e("<td />", {
                        valign: "top",
                        colSpan: D(a),
                        "class": a.oClasses.sRowEmpty
                    }).html(c))[0];
                T(a, "aoHeaderCallback", "header", [e(a.nTHead).children("tr")[0], fa(a), j, i, o]);
                T(a, "aoFooterCallback", "footer", [e(a.nTFoot).children("tr")[0], fa(a), j, i, o]);
                g = e(a.nTBody);
                g.children().detach();
                g.append(e(b));
                T(a, "aoDrawCallback", "draw", [a]);
                a.bSorted=!1;
                a.bFiltered=!1;
                a.bDrawing =
                !1
            }
        }
        function ya(a, b) {
            var c = a.oFeatures, g = c.bFilter;
            c.bSort && Kb(a);
            g ? La(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
            !0 !== b && (a._iDisplayStart = 0);
            a._drawHold = b;
            pa(a);
            a._drawHold=!1
        }
        function Vb(a) {
            var b = a.oClasses, c = e(a.nTable), c = e("<div/>").insertBefore(c), g = a.oFeatures, d = e("<div/>", {
                id: a.sTableId + "_wrapper",
                "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
            });
            a.nHolding = c[0];
            a.nTableWrapper = d[0];
            a.nTableReinsertBefore = a.nTable.nextSibling;
            for (var f = a.sDom.split(""), j, q, o, i, l, m, n = 0; n < f.length; n++) {
                j =
                null;
                q = f[n];
                if ("<" == q) {
                    o = e("<div/>")[0];
                    i = f[n + 1];
                    if ("'" == i || '"' == i) {
                        l = "";
                        for (m = 2; f[n + m] != i;)
                            l += f[n + m], m++;
                        "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter);
                        - 1 != l.indexOf(".") ? (i = l.split("."), o.id = i[0].substr(1, i[0].length - 1), o.className = i[1]) : "#" == l.charAt(0) ? o.id = l.substr(1, l.length - 1) : o.className = l;
                        n += m
                    }
                    d.append(o);
                    d = e(o)
                } else if (">" == q)
                    d = d.parent();
                else if ("l" == q && g.bPaginate && g.bLengthChange)
                    j = rc(a);
                else if ("f" == q && g.bFilter)
                    j = oc(a);
                else if ("r" == q && g.bProcessing)
                    j = Gb(a);
                else if ("t" == q)
                    j = ub(a);
                else if ("i" ==
                q && g.bInfo)
                    j = X(a);
                else if ("p" == q && g.bPaginate)
                    j = sc(a);
                else if (0 !== B.ext.feature.length) {
                    o = B.ext.feature;
                    m = 0;
                    for (i = o.length; m < i; m++)
                        if (q == o[m].cFeature) {
                            j = o[m].fnInit(a);
                            break
                        }
                }
                j && (o = a.aanFeatures, o[q] || (o[q] = []), o[q].push(j), d.append(j))
            }
            c.replaceWith(d)
        }
        function hb(a, b) {
            var c = e(b).children("tr"), g, d, f, j, i, o, l, m, n, p;
            a.splice(0, a.length);
            f = 0;
            for (o = c.length; f < o; f++)
                a.push([]);
            f = 0;
            for (o = c.length; f < o; f++) {
                g = c[f];
                for (d = g.firstChild; d;) {
                    if ("TD" == d.nodeName.toUpperCase() || "TH" == d.nodeName.toUpperCase()) {
                        m =
                        1 * d.getAttribute("colspan");
                        n = 1 * d.getAttribute("rowspan");
                        m=!m || 0 === m || 1 === m ? 1 : m;
                        n=!n || 0 === n || 1 === n ? 1 : n;
                        j = 0;
                        for (i = a[f]; i[j];)
                            j++;
                        l = j;
                        p = 1 === m?!0 : !1;
                        for (i = 0; i < m; i++)
                            for (j = 0; j < n; j++)
                                a[f + j][l + i] = {
                                    cell: d,
                                    unique: p
                                }, a[f + j].nTr = g
                    }
                    d = d.nextSibling
                }
            }
        }
        function Da(a, b, c) {
            var g = [];
            c || (c = a.aoHeader, b && (c = [], hb(c, b)));
            for (var b = 0, e = c.length; b < e; b++)
                for (var f = 0, d = c[b].length; f < d; f++)
                    if (c[b][f].unique && (!g[f] ||!a.bSortCellsTop))
                        g[f] = c[b][f].cell;
            return g
        }
        function Ha(a, b, c) {
            T(a, "aoServerParams", "serverParams", [b]);
            if (b && e.isArray(b)) {
                var g = {}, d = /(.*?)\[\]$/;
                e.each(b, function(a, b) {
                    var c = b.name.match(d);
                    c ? (c = c[0], g[c] || (g[c] = []), g[c].push(b.value)) : g[b.name] = b.value
                });
                b = g
            }
            var f, j = a.ajax, i = a.oInstance;
            if (e.isPlainObject(j) && j.data) {
                f = j.data;
                var o = e.isFunction(f) ? f(b): f, b = e.isFunction(f) && o ? o: e.extend(!0, b, o);
                delete j.data
            }
            o = {
                data: b,
                success: function(b) {
                    var g = b.error || b.sError;
                    g && a.oApi._fnLog(a, 0, g);
                    a.json = b;
                    T(a, null, "xhr", [a, b]);
                    c(b)
                },
                dataType: "json",
                cache: !1,
                type: a.sServerMethod,
                error: function(b, c) {
                    var g = a.oApi._fnLog;
                    "parsererror" == c ? g(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && g(a, 0, "Ajax error", 7);
                    ta(a, !1)
                }
            };
            a.oAjaxData = b;
            T(a, null, "preXhr", [a, b]);
            a.fnServerData ? a.fnServerData.call(i, a.sAjaxSource, e.map(b, function(a, b) {
                return {
                    name: b,
                    value: a
                }
            }), c, a) : a.sAjaxSource || "string" === typeof j ? a.jqXHR = e.ajax(e.extend(o, {
                url: j || a.sAjaxSource
            })) : e.isFunction(j) ? a.jqXHR = j.call(i, b, c, a) : (a.jqXHR = e.ajax(e.extend(o, j)), j.data = f)
        }
        function Wb(a) {
            return a.bAjaxDataGet ? (a.iDraw++, ta(a, !0), Ha(a, Db(a), function(b) {
                Xb(a, b)
            }), !1) :
            !0
        }
        function Db(a) {
            var b = a.aoColumns, c = b.length, g = a.oFeatures, d = a.oPreviousSearch, f = a.aoPreSearchCols, j, i = [], o, l, m, n = Ma(a);
            j = a._iDisplayStart;
            o=!1 !== g.bPaginate ? a._iDisplayLength : - 1;
            var p = function(a, b) {
                i.push({
                    name: a,
                    value: b
                })
            };
            p("sEcho", a.iDraw);
            p("iColumns", c);
            p("sColumns", Ca(b, "sName").join(","));
            p("iDisplayStart", j);
            p("iDisplayLength", o);
            var t = {
                draw: a.iDraw,
                columns: [],
                order: [],
                start: j,
                length: o,
                search: {
                    value: d.sSearch,
                    regex: d.bRegex
                }
            };
            for (j = 0; j < c; j++)
                l = b[j], m = f[j], o = "function" == typeof l.mData ? "function" :
                l.mData, t.columns.push({
                    data: o,
                    name: l.sName,
                    searchable: l.bSearchable,
                    orderable: l.bSortable,
                    search: {
                        value: m.sSearch,
                        regex: m.bRegex
                    }
                }), p("mDataProp_" + j, o), g.bFilter && (p("sSearch_" + j, m.sSearch), p("bRegex_" + j, m.bRegex), p("bSearchable_" + j, l.bSearchable)), g.bSort && p("bSortable_" + j, l.bSortable);
            g.bFilter && (p("sSearch", d.sSearch), p("bRegex", d.bRegex));
            g.bSort && (e.each(n, function(a, b) {
                t.order.push({
                    column: b.col,
                    dir: b.dir
                });
                p("iSortCol_" + a, b.col);
                p("sSortDir_" + a, b.dir)
            }), p("iSortingCols", n.length));
            b = B.ext.legacy.ajax;
            return null === b ? a.sAjaxSource ? i : t : b ? i : t
        }
        function Xb(a, b) {
            var c = b.sEcho !== l ? b.sEcho: b.draw, g = b.iTotalRecords !== l ? b.iTotalRecords: b.recordsTotal, e = b.iTotalDisplayRecords !== l ? b.iTotalDisplayRecords: b.recordsFiltered;
            if (c) {
                if (1 * c < a.iDraw)
                    return;
                a.iDraw = 1 * c
            }
            ua(a);
            a._iRecordsTotal = parseInt(g, 10);
            a._iRecordsDisplay = parseInt(e, 10);
            c = Za(a, b);
            g = 0;
            for (e = c.length; g < e; g++)
                aa(a, c[g]);
            a.aiDisplay = a.aiDisplayMaster.slice();
            a.bAjaxDataGet=!1;
            pa(a);
            a._bInitComplete || jb(a, b);
            a.bAjaxDataGet=!0;
            ta(a, !1)
        }
        function Za(a,
        b) {
            var c = e.isPlainObject(a.ajax) && a.ajax.dataSrc !== l ? a.ajax.dataSrc: a.sAjaxDataProp;
            return "data" === c ? b.aaData || b[c] : "" !== c ? W(c)(b) : b
        }
        function oc(a) {
            var b = a.oClasses, c = a.sTableId, g = a.oLanguage, d = a.oPreviousSearch, f = a.aanFeatures, j = '<input type="search" class="' + b.sFilterInput + '"/>', i = g.sSearch, i = i.match(/_INPUT_/) ? i.replace("_INPUT_", j): i + j, b = e("<div/>", {
                id: !f.f ? c + "_filter": null,
                "class": b.sFilter
            }).append(e("<label/>").append(i)), f = function() {
                var b=!this.value ? "" : this.value;
                b != d.sSearch && (La(a, {
                    sSearch: b,
                    bRegex: d.bRegex,
                    bSmart: d.bSmart,
                    bCaseInsensitive: d.bCaseInsensitive
                }), a._iDisplayStart = 0, pa(a))
            }, j = null !== a.searchDelay ? a.searchDelay: "ssp" === ra(a) ? 400: 0, o = e("input", b).val(d.sSearch).attr("placeholder", g.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", j ? lb(f, j) : f).bind("keypress.DT", function(a) {
                if (13 == a.keyCode)
                    return !1
            }).attr("aria-controls", c);
            e(a.nTable).on("search.dt.DT", function(b, c) {
                if (a === c)
                    try {
                        o[0] !== C.activeElement && o.val(d.sSearch)
                } catch (g) {}
            });
            return b[0]
        }
        function La(a,
        b, c) {
            var g = a.oPreviousSearch, e = a.aoPreSearchCols, f = function(a) {
                g.sSearch = a.sSearch;
                g.bRegex = a.bRegex;
                g.bSmart = a.bSmart;
                g.bCaseInsensitive = a.bCaseInsensitive
            };
            A(a);
            if ("ssp" != ra(a)) {
                pc(a, b.sSearch, c, b.bEscapeRegex !== l?!b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
                f(b);
                for (b = 0; b < e.length; b++)
                    d(a, e[b].sSearch, b, e[b].bEscapeRegex !== l?!e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
                x(a)
            } else 
                f(b);
            a.bFiltered=!0;
            T(a, null, "search", [a])
        }
        function x(a) {
            for (var b = B.ext.search, c = a.aiDisplay,
            g, e, f = 0, d = b.length; f < d; f++) {
                for (var i = [], o = 0, l = c.length; o < l; o++)
                    e = c[o], g = a.aoData[e], b[f](a, g._aFilterData, e, g._aData, o) && i.push(e);
                c.length = 0;
                c.push.apply(c, i)
            }
        }
        function d(a, b, c, g, e, f) {
            if ("" !== b)
                for (var d = a.aiDisplay, g = Yb(b, g, e, f), e = d.length - 1; 0 <= e; e--)
                    b = a.aoData[d[e]]._aFilterData[c], g.test(b) || d.splice(e, 1)
        }
        function pc(a, b, c, g, e, f) {
            var g = Yb(b, g, e, f), e = a.oPreviousSearch.sSearch, f = a.aiDisplayMaster, d;
            0 !== B.ext.search.length && (c=!0);
            d = qc(a);
            if (0 >= b.length)
                a.aiDisplay = f.slice();
            else {
                if (d || c || e.length >
                b.length || 0 !== b.indexOf(e) || a.bSorted)
                    a.aiDisplay = f.slice();
                b = a.aiDisplay;
                for (c = b.length - 1; 0 <= c; c--)
                    g.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
            }
        }
        function Yb(a, b, c, g) {
            a = b ? a : Eb(a);
            c && (a = "^(?=.*?" + e.map(a.match(/"[^"]+"|[^ ]+/g) || "", function(a) {
                if ('"' === a.charAt(0))
                    var b = a.match(/^"(.*)"$/), a = b ? b[1]: a;
                return a.replace('"', "")
            }).join(")(?=.*?") + ").*$");
            return RegExp(a, g ? "i" : "")
        }
        function Eb(a) {
            return a.replace(uc, "\\$1")
        }
        function qc(a) {
            var b = a.aoColumns, c, g, e, f, d, i, o, l, m = B.ext.type.search;
            c=!1;
            g =
            0;
            for (f = a.aoData.length; g < f; g++)
                if (l = a.aoData[g], !l._aFilterData) {
                    i = [];
                    e = 0;
                    for (d = b.length; e < d; e++)
                        c = b[e], c.bSearchable ? (o = Y(a, g, e, "filter"), m[c.sType] && (o = m[c.sType](o)), null === o && (o = ""), "string" !== typeof o && o.toString && (o = o.toString())) : o = "", o.indexOf&&-1 !== o.indexOf("&") && (Ja.innerHTML = o, o = Xa ? Ja.textContent : Ja.innerText), o.replace && (o = o.replace(/[\r\n]/g, "")), i.push(o);
                        l._aFilterData = i;
                        l._sFilterRow = i.join("  ");
                        c=!0
                }
            return c
        }
        function Va(a) {
            return {
                search: a.sSearch,
                smart: a.bSmart,
                regex: a.bRegex,
                caseInsensitive: a.bCaseInsensitive
            }
        }
        function Fb(a) {
            return {
                sSearch: a.search,
                bSmart: a.smart,
                bRegex: a.regex,
                bCaseInsensitive: a.caseInsensitive
            }
        }
        function X(a) {
            var b = a.sTableId, c = a.aanFeatures.i, g = e("<div/>", {
                "class": a.oClasses.sInfo,
                id: !c ? b + "_info": null
            });
            c || (a.aoDrawCallback.push({
                fn: Hb,
                sName: "information"
            }), g.attr("role", "status").attr("aria-live", "polite"), e(a.nTable).attr("aria-describedby", b + "_info"));
            return g[0]
        }
        function Hb(a) {
            var b = a.aanFeatures.i;
            if (0 !== b.length) {
                var c = a.oLanguage, g = a._iDisplayStart +
                1, d = a.fnDisplayEnd(), f = a.fnRecordsTotal(), j = a.fnRecordsDisplay(), i = j ? c.sInfo: c.sInfoEmpty;
                j !== f && (i += " " + c.sInfoFiltered);
                i += c.sInfoPostFix;
                i = Aa(a, i);
                c = c.fnInfoCallback;
                null !== c && (i = c.call(a.oInstance, a, g, d, f, j, i));
                e(b).html(i)
            }
        }
        function Aa(a, b) {
            var c = a.fnFormatNumber, g = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), d =- 1 === e;
            return b.replace(/_START_/g, c.call(a, g)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a,
            f)).replace(/_PAGE_/g, c.call(a, d ? 1 : Math.ceil(g / e))).replace(/_PAGES_/g, c.call(a, d ? 1 : Math.ceil(f / e)))
        }
        function qa(a) {
            var b, c, g = a.iInitDisplayStart, e = a.aoColumns, f;
            c = a.oFeatures;
            if (a.bInitialised) {
                Vb(a);
                gb(a);
                Qa(a, a.aoHeader);
                Qa(a, a.aoFooter);
                ta(a, !0);
                c.bAutoWidth && kb(a);
                b = 0;
                for (c = e.length; b < c; b++)
                    f = e[b], f.sWidth && (f.nTh.style.width = O(f.sWidth));
                ya(a);
                e = ra(a);
                "ssp" != e && ("ajax" == e ? Ha(a, [], function(c) {
                    var e = Za(a, c);
                    for (b = 0; b < e.length; b++)
                        aa(a, e[b]);
                    a.iInitDisplayStart = g;
                    ya(a);
                    ta(a, !1);
                    jb(a, c)
                }, a) : (ta(a,
                !1), jb(a)))
            } else 
                setTimeout(function() {
                    qa(a)
                }, 200)
        }
        function jb(a, b) {
            a._bInitComplete=!0;
            b && n(a);
            T(a, "aoInitComplete", "init", [a, b])
        }
        function Ib(a, b) {
            var c = parseInt(b, 10);
            a._iDisplayLength = c;
            wa(a);
            T(a, null, "length", [a, c])
        }
        function rc(a) {
            for (var b = a.oClasses, c = a.sTableId, g = a.aLengthMenu, d = e.isArray(g[0]), f = d ? g[0] : g, g = d ? g[1] : g, d = e("<select/>", {
                name: c + "_length",
                "aria-controls": c,
                "class": b.sLengthSelect
            }), j = 0, i = f.length; j < i; j++)
                d[0][j] = new Option(g[j], f[j]);
            var o = e("<div><label/></div>").addClass(b.sLength);
            a.aanFeatures.l || (o[0].id = c + "_length");
            o.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", d[0].outerHTML));
            e("select", o).val(a._iDisplayLength).bind("change.DT", function() {
                Ib(a, e(this).val());
                pa(a)
            });
            e(a.nTable).bind("length.dt.DT", function(b, c, g) {
                a === c && e("select", o).val(g)
            });
            return o[0]
        }
        function sc(a) {
            var b = a.sPaginationType, c = B.ext.pager[b], g = "function" === typeof c, d = function(a) {
                pa(a)
            }, b = e("<div/>").addClass(a.oClasses.sPaging + b)[0], f = a.aanFeatures;
            g || c.fnInit(a, b, d);
            f.p || (b.id = a.sTableId +
            "_paginate", a.aoDrawCallback.push({
                fn: function(a) {
                    if (g) {
                        var b = a._iDisplayStart, e = a._iDisplayLength, i = a.fnRecordsDisplay(), l =- 1 === e, b = l ? 0 : Math.ceil(b / e), e = l ? 1 : Math.ceil(i / e), i = c(b, e), m, l = 0;
                        for (m = f.p.length; l < m; l++)
                            $b(a, "pageButton")(a, f.p[l], l, i, b, e)
                    } else 
                        c.fnUpdate(a, d)
                },
                sName: "pagination"
            }));
            return b
        }
        function Ta(a, b, c) {
            var g = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay();
            0 === f||-1 === e ? g = 0 : "number" === typeof b ? (g = b * e, g > f && (g = 0)) : "first" == b ? g = 0 : "previous" == b ? (g = 0 <= e ? g - e : 0, 0 > g && (g = 0)) : "next" ==
            b ? g + e < f && (g += e) : "last" == b ? g = Math.floor((f - 1) / e) * e : ha(a, 0, "Unknown paging action: " + b, 5);
            b = a._iDisplayStart !== g;
            a._iDisplayStart = g;
            b && (T(a, null, "page", [a]), c && pa(a));
            return b
        }
        function Gb(a) {
            return e("<div/>", {
                id: !a.aanFeatures.r ? a.sTableId + "_processing": null,
                "class": a.oClasses.sProcessing
            }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
        }
        function ta(a, b) {
            a.oFeatures.bProcessing && e(a.aanFeatures.r).css("display", b ? "block" : "none");
            T(a, null, "processing", [a, b])
        }
        function ub(a) {
            var b = e(a.nTable);
            b.attr("role", "grid");
            var c = a.oScroll;
            if ("" === c.sX && "" === c.sY)
                return a.nTable;
            var g = c.sX, d = c.sY, f = a.oClasses, j = b.children("caption"), i = j.length ? j[0]._captionSide: null, o = e(b[0].cloneNode(!1)), l = e(b[0].cloneNode(!1)), m = b.children("tfoot");
            c.sX && "100%" === b.attr("width") && b.removeAttr("width");
            m.length || (m = null);
            c = e("<div/>", {
                "class": f.sScrollWrapper
            }).append(e("<div/>", {
                "class": f.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: g?!g ? null: O(g): "100%"
            }).append(e("<div/>", {
                "class": f.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: c.sXInner || "100%"
            }).append(o.removeAttr("id").css("margin-left", 0).append("top" === i ? j : null).append(b.children("thead"))))).append(e("<div/>", {
                "class": f.sScrollBody
            }).css({
                overflow: "auto",
                height: !d ? null: O(d),
                width: !g ? null: O(g)
            }).append(b));
            m && c.append(e("<div/>", {
                "class": f.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: g?!g ? null: O(g): "100%"
            }).append(e("<div/>", {
                "class": f.sScrollFootInner
            }).append(l.removeAttr("id").css("margin-left", 0).append("bottom" === i ? j : null).append(b.children("tfoot")))));
            var b = c.children(), n = b[0], f = b[1], p = m ? b[2]: null;
            if (g)
                e(f).on("scroll.DT", function() {
                    var a = this.scrollLeft;
                    n.scrollLeft = a;
                    m && (p.scrollLeft = a)
                });
            a.nScrollHead = n;
            a.nScrollBody = f;
            a.nScrollFoot = p;
            a.aoDrawCallback.push({
                fn: bb,
                sName: "scrolling"
            });
            return c[0]
        }
        function bb(a) {
            var b = a.oScroll, c = b.sX, g = b.sXInner, d = b.sY, f = b.iBarWidth, j = e(a.nScrollHead), l = j[0].style, o = j.children("div"), m = o[0].style, n = o.children("table"), o = a.nScrollBody, p = e(o), J = o.style, t = e(a.nScrollFoot).children("div"), w = t.children("table"), z =
            e(a.nTHead), u = e(a.nTable), x = u[0], y = x.style, v = a.nTFoot ? e(a.nTFoot): null, B = a.oBrowser, A = B.bScrollOversize, C, D, F, G, H, I = [], K = [], M = [], pa, N = function(a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
            u.children("thead, tfoot").remove();
            H = z.clone().prependTo(u);
            C = z.find("tr");
            F = H.find("tr");
            H.find("th, td").removeAttr("tabindex");
            v && (G = v.clone().prependTo(u), D = v.find("tr"), G = G.find("tr"));
            c || (J.width = "100%", j[0].style.width = "100%");
            e.each(Da(a, H), function(b,
            c) {
                pa = i(a, b);
                c.style.width = a.aoColumns[pa].sWidth
            });
            v && Ba(function(a) {
                a.style.width = ""
            }, G);
            b.bCollapse && "" !== d && (J.height = p[0].offsetHeight + z[0].offsetHeight + "px");
            j = u.outerWidth();
            if ("" === c) {
                if (y.width = "100%", A && (u.find("tbody").height() > o.offsetHeight || "scroll" == p.css("overflow-y")))
                    y.width = O(u.outerWidth() - f)
            } else 
                "" !== g ? y.width = O(g) : j == p.width() && p.height() < u.height() ? (y.width = O(j - f), u.outerWidth() > j - f && (y.width = O(j))) : y.width = O(j);
            j = u.outerWidth();
            Ba(N, F);
            Ba(function(a) {
                M.push(a.innerHTML);
                I.push(O(e(a).css("width")))
            },
            F);
            Ba(function(a, b) {
                a.style.width = I[b]
            }, C);
            e(F).height(0);
            v && (Ba(N, G), Ba(function(a) {
                K.push(O(e(a).css("width")))
            }, G), Ba(function(a, b) {
                a.style.width = K[b]
            }, D), e(G).height(0));
            Ba(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + M[b] + "</div>";
                a.style.width = I[b]
            }, F);
            v && Ba(function(a, b) {
                a.innerHTML = "";
                a.style.width = K[b]
            }, G);
            if (u.outerWidth() < j) {
                D = o.scrollHeight > o.offsetHeight || "scroll" == p.css("overflow-y") ? j + f : j;
                if (A && (o.scrollHeight > o.offsetHeight || "scroll" ==
                p.css("overflow-y")))
                    y.width = O(D - f);
                ("" === c || "" !== g) && ha(a, 1, "Possible column misalignment", 6)
            } else 
                D = "100%";
            J.width = O(D);
            l.width = O(D);
            v && (a.nScrollFoot.style.width = O(D));
            !d && A && (J.height = O(x.offsetHeight + f));
            d && b.bCollapse && (J.height = O(d), b = c && x.offsetWidth > o.offsetWidth ? f : 0, x.offsetHeight < o.offsetHeight && (J.height = O(x.offsetHeight + b)));
            b = u.outerWidth();
            n[0].style.width = O(b);
            m.width = O(b);
            n = u.height() > o.clientHeight || "scroll" == p.css("overflow-y");
            B = "padding" + (B.bScrollbarLeft ? "Left" : "Right");
            m[B] =
            n ? f + "px" : "0px";
            v && (w[0].style.width = O(b), t[0].style.width = O(b), t[0].style[B] = n ? f + "px" : "0px");
            p.scroll();
            if ((a.bSorted || a.bFiltered)&&!a._drawHold)
                o.scrollTop = 0
        }
        function Ba(a, b, c) {
            for (var g = 0, e = 0, f = b.length, d, i; e < f;) {
                d = b[e].firstChild;
                for (i = c ? c[e].firstChild : null; d;)
                    1 === d.nodeType && (c ? a(d, i, g) : a(d, g), g++), d = d.nextSibling, i = c ? i.nextSibling : null;
                e++
            }
        }
        function kb(a) {
            var b = a.nTable, c = a.aoColumns, g = a.oScroll, d = g.sY, f = g.sX, j = g.sXInner, i = c.length, g = y(a, "bVisible"), o = e("th", a.nTHead), l = b.style.width || b.getAttribute("width"),
            p = b.parentNode, u=!1, J, t;
            for (J = 0; J < g.length; J++)
                t = c[g[J]], null !== t.sWidth && (t.sWidth = Jb(t.sWidthOrig, p), u=!0);
            if (!u&&!f&&!d && i == D(a) && i == o.length)
                for (J = 0; J < i; J++)
                    c[J].sWidth = O(o.eq(J).width());
            else {
                i = e(b).clone().empty().css("visibility", "hidden").removeAttr("id").append(e(a.nTHead).clone(!1)).append(e(a.nTFoot).clone(!1)).append(e("<tbody><tr/></tbody>"));
                i.find("tfoot th, tfoot td").css("width", "");
                var w = i.find("tbody tr"), o = Da(a, i.find("thead")[0]);
                for (J = 0; J < g.length; J++)
                    t = c[g[J]], o[J].style.width =
                    null !== t.sWidthOrig && "" !== t.sWidthOrig ? O(t.sWidthOrig) : "";
                if (a.aoData.length)
                    for (J = 0; J < g.length; J++)
                        u = g[J], t = c[u], e(ba(a, u)).clone(!1).append(t.sContentPadding).appendTo(w);
                i.appendTo(p);
                f && j ? i.width(j) : f ? (i.css("width", "auto"), i.width() < p.offsetWidth && i.width(p.offsetWidth)) : d ? i.width(p.offsetWidth) : l && i.width(l);
                db(a, i[0]);
                if (f) {
                    for (J = j = 0; J < g.length; J++)
                        t = c[g[J]], d = e(o[J]).outerWidth(), j += null === t.sWidthOrig ? d : parseInt(t.sWidth, 10) + d - e(o[J]).width();
                    i.width(O(j));
                    b.style.width = O(j)
                }
                for (J = 0; J < g.length; J++)
                    if (t =
                    c[g[J]], d = e(o[J]).width())
                        t.sWidth = O(d);
                b.style.width = O(i.css("width"));
                i.remove()
            }
            l && (b.style.width = O(l));
            if ((l || f)&&!a._reszEvt)
                e(m).bind("resize.DT-" + a.sInstance, lb(function() {
                    n(a)
                })), a._reszEvt=!0
        }
        function lb(a, b) {
            var c = b !== l ? b: 200, g, e;
            return function() {
                var b = this, d =+ new Date, i = arguments;
                g && d < g + c ? (clearTimeout(e), e = setTimeout(function() {
                    g = l;
                    a.apply(b, i)
                }, c)) : (g = d, a.apply(b, i))
            }
        }
        function Jb(a, b) {
            if (!a)
                return 0;
            var c = e("<div/>").css("width", O(a)).appendTo(b || C.body), g = c[0].offsetWidth;
            c.remove();
            return g
        }
        function db(a, b) {
            var c = a.oScroll;
            if (c.sX || c.sY)
                c=!c.sX ? c.iBarWidth : 0, b.style.width = O(e(b).outerWidth() - c)
        }
        function ba(a, b) {
            var c = Q(a, b);
            if (0 > c)
                return null;
            var g = a.aoData[c];
            return !g.nTr ? e("<td/>").html(Y(a, c, b, "display"))[0] : g.anCells[b]
        }
        function Q(a, b) {
            for (var c, g =- 1, e =- 1, f = 0, d = a.aoData.length; f < d; f++)
                c = Y(a, f, b, "display") + "", c = c.replace(Yc, ""), c.length > g && (g = c.length, e = f);
            return e
        }
        function O(a) {
            return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
        }
        function ac() {
            if (!B.__scrollbarWidth) {
                var a =
                e("<p/>").css({
                    width: "100%",
                    height: 200,
                    padding: 0
                })[0], b = e("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 200,
                    height: 150,
                    padding: 0,
                    overflow: "hidden",
                    visibility: "hidden"
                }).append(a).appendTo("body"), c = a.offsetWidth;
                b.css("overflow", "scroll");
                a = a.offsetWidth;
                c === a && (a = b[0].clientWidth);
                b.remove();
                B.__scrollbarWidth = c - a
            }
            return B.__scrollbarWidth
        }
        function Ma(a) {
            var b, c, g = [], d = a.aoColumns, f, j, i, o;
            b = a.aaSortingFixed;
            c = e.isPlainObject(b);
            var m = [];
            f = function(a) {
                a.length&&!e.isArray(a[0]) ? m.push(a) :
                m.push.apply(m, a)
            };
            e.isArray(b) && f(b);
            c && b.pre && f(b.pre);
            f(a.aaSorting);
            c && b.post && f(b.post);
            for (a = 0; a < m.length; a++) {
                o = m[a][0];
                f = d[o].aDataSort;
                b = 0;
                for (c = f.length; b < c; b++)
                    j = f[b], i = d[j].sType || "string", m[a]._idx === l && (m[a]._idx = e.inArray(m[a][1], d[j].asSorting)), g.push({
                        src: o,
                        col: j,
                        dir: m[a][1],
                        index: m[a]._idx,
                        type: i,
                        formatter: B.ext.type.order[i + "-pre"]
                    })
            }
            return g
        }
        function Kb(a) {
            var b, c, e = [], d = B.ext.type.order, f = a.aoData, j = 0, i, o = a.aiDisplayMaster, l;
            A(a);
            l = Ma(a);
            b = 0;
            for (c = l.length; b < c; b++)
                i = l[b], i.formatter &&
                j++, Ra(a, i.col);
            if ("ssp" != ra(a) && 0 !== l.length) {
                b = 0;
                for (c = o.length; b < c; b++)
                    e[o[b]] = b;
                j === l.length ? o.sort(function(a, b) {
                    var c, d, k, j, i = l.length, o = f[a]._aSortData, m = f[b]._aSortData;
                    for (k = 0; k < i; k++)
                        if (j = l[k], c = o[j.col], d = m[j.col], c = c < d?-1 : c > d ? 1 : 0, 0 !== c)
                            return "asc" === j.dir ? c : - c;
                    c = e[a];
                    d = e[b];
                    return c < d?-1 : c > d ? 1 : 0
                }) : o.sort(function(a, b) {
                    var c, j, i, o, m = l.length, n = f[a]._aSortData, q = f[b]._aSortData;
                    for (i = 0; i < m; i++)
                        if (o = l[i], c = n[o.col], j = q[o.col], o = d[o.type + "-" + o.dir] || d["string-" + o.dir], c = o(c, j), 0 !== c)
                            return c;
                    c = e[a];
                    j = e[b];
                    return c < j?-1 : c > j ? 1 : 0
                })
            }
            a.bSorted=!0
        }
        function Zb(a) {
            for (var b, c, e = a.aoColumns, d = Ma(a), a = a.oLanguage.oAria, f = 0, j = e.length; f < j; f++) {
                c = e[f];
                var i = c.asSorting;
                b = c.sTitle.replace(/<.*?>/g, "");
                var o = c.nTh;
                o.removeAttribute("aria-sort");
                c.bSortable && (0 < d.length && d[0].col == f ? (o.setAttribute("aria-sort", "asc" == d[0].dir ? "ascending" : "descending"), c = i[d[0].index + 1] || i[0]) : c = i[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
                o.setAttribute("aria-label", b)
            }
        }
        function mb(a, b, c, g) {
            var d = a.aaSorting,
            f = a.aoColumns[b].asSorting, j = function(a, b) {
                var c = a._idx;
                c === l && (c = e.inArray(a[1], f));
                return c + 1 < f.length ? c + 1 : b ? null : 0
            };
            "number" === typeof d[0] && (d = a.aaSorting = [d]);
            c && a.oFeatures.bSortMulti ? (c = e.inArray(b, Ca(d, "0")), - 1 !== c ? (b = j(d[c], !0), null === b ? d.splice(c, 1) : (d[c][1] = f[b], d[c]._idx = b)) : (d.push([b, f[0], 0]), d[d.length - 1]._idx = 0)) : d.length && d[0][0] == b ? (b = j(d[0]), d.length = 1, d[0][1] = f[b], d[0]._idx = b) : (d.length = 0, d.push([b, f[0]]), d[0]._idx = 0);
            ya(a);
            "function" == typeof g && g(a)
        }
        function Na(a, b, c, e) {
            var d =
            a.aoColumns[c];
            $a(b, {}, function(b) {
                !1 !== d.bSortable && (a.oFeatures.bProcessing ? (ta(a, !0), setTimeout(function() {
                    mb(a, c, b.shiftKey, e);
                    "ssp" !== ra(a) && ta(a, !1)
                }, 0)) : mb(a, c, b.shiftKey, e))
            })
        }
        function Ua(a) {
            var b = a.aLastSort, c = a.oClasses.sSortColumn, g = Ma(a), d = a.oFeatures, f, j;
            if (d.bSort && d.bSortClasses) {
                d = 0;
                for (f = b.length; d < f; d++)
                    j = b[d].src, e(Ca(a.aoData, "anCells", j)).removeClass(c + (2 > d ? d + 1 : 3));
                d = 0;
                for (f = g.length; d < f; d++)
                    j = g[d].src, e(Ca(a.aoData, "anCells", j)).addClass(c + (2 > d ? d + 1 : 3))
            }
            a.aLastSort = g
        }
        function Ra(a,
        b) {
            var c = a.aoColumns[b], e = B.ext.order[c.sSortDataType], d;
            e && (d = e.call(a.oInstance, a, b, u(a, b)));
            for (var f, j = B.ext.type.order[c.sType + "-pre"], i = 0, o = a.aoData.length; i < o; i++)
                if (c = a.aoData[i], c._aSortData || (c._aSortData = []), !c._aSortData[b] || e)
                    f = e ? d[i] : Y(a, i, b, "sort"), c._aSortData[b] = j ? j(f) : f
        }
        function ka(a) {
            if (a.oFeatures.bStateSave&&!a.bDestroying) {
                var b = {
                    time: + new Date,
                    start: a._iDisplayStart,
                    length: a._iDisplayLength,
                    order: e.extend(!0, [], a.aaSorting),
                    search: Va(a.oPreviousSearch),
                    columns: e.map(a.aoColumns,
                    function(b, e) {
                        return {
                            visible: b.bVisible,
                            search: Va(a.aoPreSearchCols[e])
                        }
                    })
                };
                T(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
                a.oSavedState = b;
                a.fnStateSaveCallback.call(a.oInstance, a, b)
            }
        }
        function Ia(a) {
            var b, c, g = a.aoColumns;
            if (a.oFeatures.bStateSave) {
                var d = a.fnStateLoadCallback.call(a.oInstance, a);
                if (d && d.time && (b = T(a, "aoStateLoadParams", "stateLoadParams", [a, d]), - 1 === e.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && d.time<+new Date - 1E3 * b) && g.length === d.columns.length))) {
                    a.oLoadedState = e.extend(!0, {}, d);
                    a._iDisplayStart = d.start;
                    a.iInitDisplayStart = d.start;
                    a._iDisplayLength = d.length;
                    a.aaSorting = [];
                    e.each(d.order, function(b, c) {
                        a.aaSorting.push(c[0] >= g.length ? [0, c[1]] : c)
                    });
                    e.extend(a.oPreviousSearch, Fb(d.search));
                    b = 0;
                    for (c = d.columns.length; b < c; b++) {
                        var f = d.columns[b];
                        g[b].bVisible = f.visible;
                        e.extend(a.aoPreSearchCols[b], Fb(f.search))
                    }
                    T(a, "aoStateLoaded", "stateLoaded", [a, d])
                }
            }
        }
        function va(a) {
            var b = B.settings, a = e.inArray(a, Ca(b, "nTable"));
            return - 1 !== a ? b[a] : null
        }
        function ha(a, b, c, e) {
            c = "DataTables warning: " +
            (null !== a ? "table id=" + a.sTableId + " - " : "") + c;
            e && (c += ". For more information about this error, please see http://datatables.net/tn/" + e);
            if (b)
                m.console && console.log && console.log(c);
            else if (b = B.ext, b = b.sErrMode || b.errMode, T(a, null, "error", [a, e, c]), "alert" == b)
                alert(c);
            else {
                if ("throw" == b)
                    throw Error(c);
                "function" == typeof b && b(a, e, c)
            }
        }
        function na(a, b, c, d) {
            e.isArray(c) ? e.each(c, function(c, d) {
                e.isArray(d) ? na(a, b, d[0], d[1]) : na(a, b, d)
            }) : (d === l && (d = c), b[c] !== l && (a[d] = b[c]))
        }
        function vb(a, b, c) {
            var d, k;
            for (k in b)
                b.hasOwnProperty(k) &&
                (d = b[k], e.isPlainObject(d) ? (e.isPlainObject(a[k]) || (a[k] = {}), e.extend(!0, a[k], d)) : a[k] = c && "data" !== k && "aaData" !== k && e.isArray(d) ? d.slice() : d);
            return a
        }
        function $a(a, b, c) {
            e(a).bind("click.DT", b, function(b) {
                a.blur();
                c(b)
            }).bind("keypress.DT", b, function(a) {
                13 === a.which && (a.preventDefault(), c(a))
            }).bind("selectstart.DT", function() {
                return !1
            })
        }
        function R(a, b, c, e) {
            c && a[b].push({
                fn: c,
                sName: e
            })
        }
        function T(a, b, c, d) {
            var k = [];
            b && (k = e.map(a[b].slice().reverse(), function(b) {
                return b.fn.apply(a.oInstance, d)
            }));
            null !== c && e(a.nTable).trigger(c + ".dt", d);
            return k
        }
        function wa(a) {
            var b = a._iDisplayStart, c = a.fnDisplayEnd(), e = a._iDisplayLength;
            b >= c && (b = c - e);
            b -= b%e;
            if ( - 1 === e || 0 > b)
                b = 0;
            a._iDisplayStart = b
        }
        function $b(a, b) {
            var c = a.renderer, d = B.ext.renderer[b];
            return e.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._
        }
        function ra(a) {
            return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
        }
        function Lb(a, b) {
            var c = [], c = kc.numbers_length, e = Math.floor(c / 2);
            b <= c ? c = nb(0, b) : a <= e ? (c = nb(0, c - 2),
            c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - e ? c = nb(b - (c - 2), b) : (c = nb(a - 1, a + 2), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
            c.DT_el = "span";
            return c
        }
        function bc(a) {
            e.each({
                num: function(b) {
                    return fb(b, a)
                },
                "num-fmt": function(b) {
                    return fb(b, a, xb)
                },
                "html-num": function(b) {
                    return fb(b, a, wb)
                },
                "html-num-fmt": function(b) {
                    return fb(b, a, wb, xb)
                }
            }, function(b, c) {
                ga.type.order[b + a + "-pre"] = c;
                b.match(/^html\-/) && (ga.type.search[b + a] = ga.type.search.html)
            })
        }
        function Mb(a) {
            return function() {
                var b =
                [va(this[B.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return B.ext.internal[a].apply(this, b)
            }
        }
        var B, ga, V, I, da, cc = {}, Sa = /[\r\n]/g, wb = /<.*?>/g, cb = /^[\w\+\-]/, tc = /[\w\+\-]$/, uc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), xb = /[',$Â£â‚¬Â¥%\u2009\u202F]/g, za = function(a) {
            return !a ||!0 === a || "-" === a?!0 : !1
        }, vc = function(a) {
            var b = parseInt(a, 10);
            return !isNaN(b) && isFinite(a) ? b : null
        }, wc = function(a, b) {
            cc[b] || (cc[b] = RegExp(Eb(b), "g"));
            return "string" === typeof a &&
            "." !== b ? a.replace(/\./g, "").replace(cc[b], ".") : a
        }, dc = function(a, b, c) {
            var e = "string" === typeof a;
            b && e && (a = wc(a, b));
            c && e && (a = a.replace(xb, ""));
            return za(a) ||!isNaN(parseFloat(a)) && isFinite(a)
        }, xc = function(a, b, c) {
            return za(a)?!0 : !(za(a) || "string" === typeof a) ? null : dc(a.replace(wb, ""), b, c)?!0 : null
        }, Ca = function(a, b, c) {
            var e = [], d = 0, f = a.length;
            if (c !== l)
                for (; d < f; d++)
                    a[d] && a[d][b] && e.push(a[d][b][c]);
            else 
                for (; d < f; d++)
                    a[d] && e.push(a[d][b]);
            return e
        }, Wa = function(a, b, c, e) {
            var d = [], f = 0, j = b.length;
            if (e !== l)
                for (; f <
                j; f++)
                    a[b[f]][c] && d.push(a[b[f]][c][e]);
            else 
                for (; f < j; f++)
                    d.push(a[b[f]][c]);
            return d
        }, nb = function(a, b) {
            var c = [], e;
            b === l ? (b = 0, e = a) : (e = b, b = a);
            for (var d = b; d < e; d++)
                c.push(d);
            return c
        }, yc = function(a) {
            for (var b = [], c = 0, e = a.length; c < e; c++)
                a[c] && b.push(a[c]);
            return b
        }, eb = function(a) {
            var b = [], c, e, d = a.length, f, j = 0;
            e = 0;
            a: for (; e < d; e++) {
                c = a[e];
                for (f = 0; f < j; f++)
                    if (b[f] === c)
                        continue a;
                b.push(c);
                j++
            }
            return b
        }, sa = function(a, b, c) {
            a[b] !== l && (a[c] = a[b])
        }, ab = /\[.*?\]$/, ib = /\(\)$/, Ja = e("<div>")[0], Xa = Ja.textContent !== l,
        Yc = /<.*?>/g;
        B = function(a) {
            this.$ = function(a, b) {
                return this.api(!0).$(a, b)
            };
            this._ = function(a, b) {
                return this.api(!0).rows(a, b).data()
            };
            this.api = function(a) {
                return a ? new V(va(this[ga.iApiIndex])) : new V(this)
            };
            this.fnAddData = function(a, b) {
                var c = this.api(!0), d = e.isArray(a) && (e.isArray(a[0]) || e.isPlainObject(a[0])) ? c.rows.add(a): c.row.add(a);
                (b === l || b) && c.draw();
                return d.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function(a) {
                var b = this.api(!0).columns.adjust(), c = b.settings()[0], e = c.oScroll;
                a === l ||
                a ? b.draw(!1) : ("" !== e.sX || "" !== e.sY) && bb(c)
            };
            this.fnClearTable = function(a) {
                var b = this.api(!0).clear();
                (a === l || a) && b.draw()
            };
            this.fnClose = function(a) {
                this.api(!0).row(a).child.hide()
            };
            this.fnDeleteRow = function(a, b, c) {
                var e = this.api(!0), a = e.rows(a), d = a.settings()[0], g = d.aoData[a[0][0]];
                a.remove();
                b && b.call(this, d, g);
                (c === l || c) && e.draw();
                return g
            };
            this.fnDestroy = function(a) {
                this.api(!0).destroy(a)
            };
            this.fnDraw = function(a) {
                this.api(!0).draw(!a)
            };
            this.fnFilter = function(a, b, c, e, d, g) {
                d = this.api(!0);
                null ===
                b || b === l ? d.search(a, c, e, g) : d.column(b).search(a, c, e, g);
                d.draw()
            };
            this.fnGetData = function(a, b) {
                var c = this.api(!0);
                if (a !== l) {
                    var e = a.nodeName ? a.nodeName.toLowerCase(): "";
                    return b !== l || "td" == e || "th" == e ? c.cell(a, b).data() : c.row(a).data() || null
                }
                return c.data().toArray()
            };
            this.fnGetNodes = function(a) {
                var b = this.api(!0);
                return a !== l ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            };
            this.fnGetPosition = function(a) {
                var b = this.api(!0), c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" ==
                c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function(a) {
                return this.api(!0).row(a).child.isShown()
            };
            this.fnOpen = function(a, b, c) {
                return this.api(!0).row(a).child(b, c).show().child()[0]
            };
            this.fnPageChange = function(a, b) {
                var c = this.api(!0).page(a);
                (b === l || b) && c.draw(!1)
            };
            this.fnSetColumnVis = function(a, b, c) {
                a = this.api(!0).column(a).visible(b);
                (c === l || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function() {
                return va(this[ga.iApiIndex])
            };
            this.fnSort = function(a) {
                this.api(!0).order(a).draw()
            };
            this.fnSortListener = function(a, b, c) {
                this.api(!0).order.listener(a, b, c)
            };
            this.fnUpdate = function(a, b, c, e, d) {
                var g = this.api(!0);
                c === l || null === c ? g.row(b).data(a) : g.cell(b, c).data(a);
                (d === l || d) && g.columns.adjust();
                (e === l || e) && g.draw();
                return 0
            };
            this.fnVersionCheck = ga.fnVersionCheck;
            var b = this, c = a === l, d = this.length;
            c && (a = {});
            this.oApi = this.internal = ga.internal;
            for (var k in B.ext.internal)
                k && (this[k] = Mb(k));
            this.each(function() {
                var f = {}, f = 1 < d ? vb(f, a, !0): a, j = 0, k, i = this.getAttribute("id"), m=!1, n = B.defaults,
                u = e(this);
                if ("table" != this.nodeName.toLowerCase())
                    ha(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    la(n);
                    t(n.column);
                    z(n, n, !0);
                    z(n.column, n.column, !0);
                    z(n, e.extend(f, u.data()));
                    var v = B.settings, j = 0;
                    for (k = v.length; j < k; j++) {
                        var x = v[j];
                        if (x.nTable == this || x.nTHead.parentNode == this || x.nTFoot && x.nTFoot.parentNode == this) {
                            j = f.bRetrieve !== l ? f.bRetrieve : n.bRetrieve;
                            if (c || j)
                                return x.oInstance;
                            if (f.bDestroy !== l ? f.bDestroy : n.bDestroy) {
                                x.oInstance.fnDestroy();
                                break
                            } else {
                                ha(x, 0, "Cannot reinitialise DataTable",
                                3);
                                return 
                            }
                        }
                        if (x.sTableId == this.id) {
                            v.splice(j, 1);
                            break
                        }
                    }
                    if (null === i || "" === i)
                        this.id = i = "DataTables_Table_" + B.ext._unique++;
                    var w = e.extend(!0, {}, B.models.oSettings, {
                        nTable: this,
                        oApi: b.internal,
                        oInit: f,
                        sDestroyWidth: u[0].style.width,
                        sInstance: i,
                        sTableId: i
                    });
                    v.push(w);
                    w.oInstance = 1 === b.length ? b : u.dataTable();
                    la(f);
                    f.oLanguage && S(f.oLanguage);
                    f.aLengthMenu&&!f.iDisplayLength && (f.iDisplayLength = e.isArray(f.aLengthMenu[0]) ? f.aLengthMenu[0][0] : f.aLengthMenu[0]);
                    f = vb(e.extend(!0, {}, n), f);
                    na(w.oFeatures, f,
                    "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    na(w, f, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols",
                    "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]);
                    na(w.oScroll, f, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
                    na(w.oLanguage, f, "fnInfoCallback");
                    R(w, "aoDrawCallback", f.fnDrawCallback, "user");
                    R(w, "aoServerParams", f.fnServerParams, "user");
                    R(w, "aoStateSaveParams", f.fnStateSaveParams, "user");
                    R(w, "aoStateLoadParams", f.fnStateLoadParams, "user");
                    R(w, "aoStateLoaded", f.fnStateLoaded, "user");
                    R(w, "aoRowCallback", f.fnRowCallback,
                    "user");
                    R(w, "aoRowCreatedCallback", f.fnCreatedRow, "user");
                    R(w, "aoHeaderCallback", f.fnHeaderCallback, "user");
                    R(w, "aoFooterCallback", f.fnFooterCallback, "user");
                    R(w, "aoInitComplete", f.fnInitComplete, "user");
                    R(w, "aoPreDrawCallback", f.fnPreDrawCallback, "user");
                    i = w.oClasses;
                    f.bJQueryUI ? (e.extend(i, B.ext.oJUIClasses, f.oClasses), f.sDom === n.sDom && "lfrtip" === n.sDom && (w.sDom = '<"H"lfr>t<"F"ip>'), w.renderer) ? e.isPlainObject(w.renderer)&&!w.renderer.header && (w.renderer.header = "jqueryui") : w.renderer = "jqueryui" :
                    e.extend(i, B.ext.classes, f.oClasses);
                    u.addClass(i.sTable);
                    if ("" !== w.oScroll.sX || "" !== w.oScroll.sY)
                        w.oScroll.iBarWidth = ac();
                    !0 === w.oScroll.sX && (w.oScroll.sX = "100%");
                    w.iInitDisplayStart === l && (w.iInitDisplayStart = f.iDisplayStart, w._iDisplayStart = f.iDisplayStart);
                    null !== f.iDeferLoading && (w.bDeferLoading=!0, j = e.isArray(f.iDeferLoading), w._iRecordsDisplay = j ? f.iDeferLoading[0] : f.iDeferLoading, w._iRecordsTotal = j ? f.iDeferLoading[1] : f.iDeferLoading);
                    var y = w.oLanguage;
                    e.extend(!0, y, f.oLanguage);
                    "" !== y.sUrl &&
                    (e.ajax({
                        dataType: "json",
                        url: y.sUrl,
                        success: function(a) {
                            S(a);
                            z(n.oLanguage, a);
                            e.extend(true, y, a);
                            qa(w)
                        },
                        error: function() {
                            qa(w)
                        }
                    }), m=!0);
                    null === f.asStripeClasses && (w.asStripeClasses = [i.sStripeOdd, i.sStripeEven]);
                    var j = w.asStripeClasses, A = e("tbody tr", this).eq(0);
                    - 1 !== e.inArray(!0, e.map(j, function(a) {
                        return A.hasClass(a)
                    })) && (e("tbody tr", this).removeClass(j.join(" ")), w.asDestroyStripes = j.slice());
                    v = [];
                    j = this.getElementsByTagName("thead");
                    0 !== j.length && (hb(w.aoHeader, j[0]), v = Da(w));
                    if (null === f.aoColumns) {
                        x =
                        [];
                        j = 0;
                        for (k = v.length; j < k; j++)
                            x.push(null)
                        } else 
                            x = f.aoColumns;
                    j = 0;
                    for (k = x.length; j < k; j++)
                        F(w, v ? v[j] : null);
                    K(w, f.aoColumnDefs, x, function(a, b) {
                        p(w, a, b)
                    });
                    if (A.length) {
                        var D = function(a, b) {
                            return a.getAttribute("data-" + b) !== null ? b : null
                        };
                        e.each(ma(w, A[0]).cells, function(a, b) {
                            var c = w.aoColumns[a];
                            if (c.mData === a) {
                                var e = D(b, "sort") || D(b, "order"), d = D(b, "filter") || D(b, "search");
                                if (e !== null || d !== null) {
                                    c.mData = {
                                        _: a + ".display",
                                        sort: e !== null ? a + ".@data-" + e: l,
                                        type: e !== null ? a + ".@data-" + e: l,
                                        filter: d !== null ? a + ".@data-" +
                                        d: l
                                    };
                                    p(w, a)
                                }
                            }
                        })
                    }
                    var C = w.oFeatures;
                    f.bStateSave && (C.bStateSave=!0, Ia(w, f), R(w, "aoDrawCallback", ka, "state_save"));
                    if (f.aaSorting === l) {
                        v = w.aaSorting;
                        j = 0;
                        for (k = v.length; j < k; j++)
                            v[j][1] = w.aoColumns[j].asSorting[0]
                    }
                    Ua(w);
                    C.bSort && R(w, "aoDrawCallback", function() {
                        if (w.bSorted) {
                            var a = Ma(w), b = {};
                            e.each(a, function(a, c) {
                                b[c.src] = c.dir
                            });
                            T(w, null, "order", [w, a, b]);
                            Zb(w)
                        }
                    });
                    R(w, "aoDrawCallback", function() {
                        (w.bSorted || ra(w) === "ssp" || C.bDeferRender) && Ua(w)
                    }, "sc");
                    ca(w);
                    j = u.children("caption").each(function() {
                        this._captionSide =
                        u.css("caption-side")
                    });
                    k = u.children("thead");
                    0 === k.length && (k = e("<thead/>").appendTo(this));
                    w.nTHead = k[0];
                    k = u.children("tbody");
                    0 === k.length && (k = e("<tbody/>").appendTo(this));
                    w.nTBody = k[0];
                    k = u.children("tfoot");
                    if (0 === k.length && 0 < j.length && ("" !== w.oScroll.sX || "" !== w.oScroll.sY))
                        k = e("<tfoot/>").appendTo(this);
                    0 === k.length || 0 === k.children().length ? u.addClass(i.sNoFooter) : 0 < k.length && (w.nTFoot = k[0], hb(w.aoFooter, w.nTFoot));
                    if (f.aaData)
                        for (j = 0; j < f.aaData.length; j++)
                            aa(w, f.aaData[j]);
                    else (w.bDeferLoading ||
                    "dom" == ra(w)
                        ) && ea(w, e(w.nTBody).children("tr"));
                    w.aiDisplay = w.aiDisplayMaster.slice();
                    w.bInitialised=!0;
                    !1 === m && qa(w)
                }
            });
            b = null;
            return this
        };
        var ec = [], ia = Array.prototype, Ic = function(a) {
            var b, c, d = B.settings, k = e.map(d, function(a) {
                return a.nTable
            });
            if (a) {
                if (a.nTable && a.oApi)
                    return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase())
                    return b = e.inArray(a, k), - 1 !== b ? [d[b]] : null;
                if (a && "function" === typeof a.settings)
                    return a.settings().toArray();
                "string" === typeof a ? c = e(a) : a instanceof e && (c = a)
            } else 
                return [];
            if (c)
                return c.map(function() {
                    b = e.inArray(this, k);
                    return - 1 !== b ? d[b] : null
                }).toArray()
        };
        V = function(a, b) {
            if (!this instanceof V)
                throw "DT API must be constructed as a new object";
            var c = [], d = function(a) {
                (a = Ic(a)) && c.push.apply(c, a)
            };
            if (e.isArray(a))
                for (var k = 0, f = a.length; k < f; k++)
                    d(a[k]);
            else 
                d(a);
            this.context = eb(c);
            b && this.push.apply(this, b.toArray ? b.toArray() : b);
            this.selector = {
                rows: null,
                cols: null,
                opts: null
            };
            V.extend(this, this, ec)
        };
        B.Api = V;
        V.prototype = {
            concat: ia.concat,
            context: [],
            each: function(a) {
                for (var b =
                0, c = this.length; b < c; b++)
                    a.call(this, this[b], b, this);
                return this
            },
            eq: function(a) {
                var b = this.context;
                return b.length > a ? new V(b[a], this[a]) : null
            },
            filter: function(a) {
                var b = [];
                if (ia.filter)
                    b = ia.filter.call(this, a, this);
                else 
                    for (var c = 0, e = this.length; c < e; c++)
                        a.call(this, this[c], c, this) && b.push(this[c]);
                return new V(this.context, b)
            },
            flatten: function() {
                var a = [];
                return new V(this.context, a.concat.apply(a, this.toArray()))
            },
            join: ia.join,
            indexOf: ia.indexOf || function(a, b) {
                for (var c = b || 0, e = this.length; c < e; c++)
                    if (this[c] ===
                    a)
                        return c;
                return - 1
            },
            iterator: function(a, b, c, e) {
                var d = [], f, j, i, m, n, p = this.context, u, t, x = this.selector;
                "string" === typeof a && (e = c, c = b, b = a, a=!1);
                j = 0;
                for (i = p.length; j < i; j++) {
                    var w = new V(p[j]);
                    if ("table" === b)
                        f = c.call(w, p[j], j), f !== l && d.push(f);
                    else if ("columns" === b || "rows" === b)
                        f = c.call(w, p[j], this[j], j), f !== l && d.push(f);
                    else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                        t = this[j];
                        "column-rows" === b && (u = Nb(p[j], x.opts));
                        m = 0;
                        for (n = t.length; m < n; m++)
                            f = t[m], f = "cell" === b ? c.call(w, p[j], f.row, f.column,
                            j, m) : c.call(w, p[j], f, j, m, u), f !== l && d.push(f)
                        }
                }
                return d.length || e ? (a = new V(p, a ? d.concat.apply([], d) : d), b = a.selector, b.rows = x.rows, b.cols = x.cols, b.opts = x.opts, a) : this
            },
            lastIndexOf: ia.lastIndexOf || function(a, b) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(a) {
                var b = [];
                if (ia.map)
                    b = ia.map.call(this, a, this);
                else 
                    for (var c = 0, e = this.length; c < e; c++)
                        b.push(a.call(this, this[c], c));
                return new V(this.context, b)
            },
            pluck: function(a) {
                return this.map(function(b) {
                    return b[a]
                })
            },
            pop: ia.pop,
            push: ia.push,
            reduce: ia.reduce || function(a, b) {
                return M(this, a, b, 0, this.length, 1)
            },
            reduceRight: ia.reduceRight || function(a, b) {
                return M(this, a, b, this.length - 1, - 1, - 1)
            },
            reverse: ia.reverse,
            selector: null,
            shift: ia.shift,
            sort: ia.sort,
            splice: ia.splice,
            toArray: function() {
                return ia.slice.call(this)
            },
            to$: function() {
                return e(this)
            },
            toJQuery: function() {
                return e(this)
            },
            unique: function() {
                return new V(this.context, eb(this))
            },
            unshift: ia.unshift
        };
        V.extend = function(a, b, c) {
            if (c.length && b && (b instanceof V || b.__dt_wrapper)) {
                var d,
                k, f, j = function(a, b, c) {
                    return function() {
                        var e = b.apply(a, arguments);
                        V.extend(e, e, c.methodExt);
                        return e
                    }
                };
                d = 0;
                for (k = c.length; d < k; d++)
                    f = c[d], b[f.name] = "function" === typeof f.val ? j(a, f.val, f) : e.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper=!0, V.extend(a, b[f.name], f.propExt)
            }
        };
        V.register = I = function(a, b) {
            if (e.isArray(a))
                for (var c = 0, d = a.length; c < d; c++)
                    V.register(a[c], b);
            else 
                for (var k = a.split("."), f = ec, j, i, c = 0, d = k.length; c < d; c++) {
                    j = (i =- 1 !== k[c].indexOf("()")) ? k[c].replace("()", "") : k[c];
                    var l;
                    a:
                    {
                        l =
                        0;
                        for (var m = f.length; l < m; l++)
                            if (f[l].name === j) {
                                l = f[l];
                                break a
                            }
                            l = null
                        }
                        l || (l = {
                            name: j,
                            val: {},
                            methodExt: [],
                            propExt: []
                        }, f.push(l));
                        c === d - 1 ? l.val = b : f = i ? l.methodExt : l.propExt
                }
        };
        V.registerPlural = da = function(a, b, c) {
            V.register(a, c);
            V.register(b, function() {
                var a = c.apply(this, arguments);
                return a === this ? this : a instanceof V ? a.length ? e.isArray(a[0]) ? new V(a.context, a[0]) : a[0] : l : a
            })
        };
        I("tables()", function(a) {
            var b;
            if (a) {
                b = V;
                var c = this.context;
                if ("number" === typeof a)
                    a = [c[a]];
                else 
                    var d = e.map(c, function(a) {
                        return a.nTable
                    }),
                    a = e(d).filter(a).map(function() {
                        var a = e.inArray(this, d);
                        return c[a]
                    }).toArray();
                b = new b(a)
            } else 
                b = this;
            return b
        });
        I("table()", function(a) {
            var a = this.tables(a), b = a.context;
            return b.length ? new V(b[0]) : a
        });
        da("tables().nodes()", "table().node()", function() {
            return this.iterator("table", function(a) {
                return a.nTable
            }, 1)
        });
        da("tables().body()", "table().body()", function() {
            return this.iterator("table", function(a) {
                return a.nTBody
            }, 1)
        });
        da("tables().header()", "table().header()", function() {
            return this.iterator("table",
            function(a) {
                return a.nTHead
            }, 1)
        });
        da("tables().footer()", "table().footer()", function() {
            return this.iterator("table", function(a) {
                return a.nTFoot
            }, 1)
        });
        da("tables().containers()", "table().container()", function() {
            return this.iterator("table", function(a) {
                return a.nTableWrapper
            }, 1)
        });
        I("draw()", function(a) {
            return this.iterator("table", function(b) {
                ya(b, !1 === a)
            })
        });
        I("page()", function(a) {
            return a === l ? this.page.info().page : this.iterator("table", function(b) {
                Ta(b, a)
            })
        });
        I("page.info()", function() {
            if (0 === this.context.length)
                return l;
            var a = this.context[0], b = a._iDisplayStart, c = a._iDisplayLength, e = a.fnRecordsDisplay(), d =- 1 === c;
            return {
                page: d ? 0: Math.floor(b / c),
                pages: d ? 1: Math.ceil(e / c),
                start: b,
                end: a.fnDisplayEnd(),
                length: c,
                recordsTotal: a.fnRecordsTotal(),
                recordsDisplay: e
            }
        });
        I("page.len()", function(a) {
            return a === l ? 0 !== this.context.length ? this.context[0]._iDisplayLength : l : this.iterator("table", function(b) {
                Ib(b, a)
            })
        });
        var ob = function(a, b, c) {
            "ssp" == ra(a) ? ya(a, b) : (ta(a, !0), Ha(a, [], function(c) {
                ua(a);
                for (var c = Za(a, c), e = 0, d = c.length; e < d; e++)
                    aa(a,
                    c[e]);
                ya(a, b);
                ta(a, !1)
            }));
            if (c) {
                var e = new V(a);
                e.one("draw", function() {
                    c(e.ajax.json())
                })
            }
        };
        I("ajax.json()", function() {
            var a = this.context;
            if (0 < a.length)
                return a[0].json
        });
        I("ajax.params()", function() {
            var a = this.context;
            if (0 < a.length)
                return a[0].oAjaxData
        });
        I("ajax.reload()", function(a, b) {
            return this.iterator("table", function(c) {
                ob(c, !1 === b, a)
            })
        });
        I("ajax.url()", function(a) {
            var b = this.context;
            if (a === l) {
                if (0 === b.length)
                    return l;
                b = b[0];
                return b.ajax ? e.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
            }
            return this.iterator("table",
            function(b) {
                e.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
            })
        });
        I("ajax.url().load()", function(a, b) {
            return this.iterator("table", function(c) {
                ob(c, !1 === b, a)
            })
        });
        var H = function(a, b) {
            var c = [], d, k, f, j, i, m;
            d = typeof a;
            if (!a || "string" === d || "function" === d || a.length === l)
                a = [a];
            f = 0;
            for (j = a.length; f < j; f++) {
                k = a[f] && a[f].split ? a[f].split(",") : [a[f]];
                i = 0;
                for (m = k.length; i < m; i++)(d = b("string" === typeof k[i] ? e.trim(k[i]) : k[i])
                    ) && d.length && c.push.apply(c, d)
            }
            return c
        }, fc = function(a) {
            a || (a = {});
            a.filter&&!a.search && (a.search =
            a.filter);
            return {
                search: a.search || "none",
                order: a.order || "current",
                page: a.page || "all"
            }
        }, gc = function(a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (0 < a[b].length)
                    return a[0] = a[b], a.length = 1, a.context = [a.context[b]], a;
            a.length = 0;
            return a
        }, Nb = function(a, b) {
            var c, d, k, f = [], j = a.aiDisplay;
            c = a.aiDisplayMaster;
            var i = b.search;
            d = b.order;
            k = b.page;
            if ("ssp" == ra(a))
                return "removed" === i ? [] : nb(0, c.length);
            if ("current" == k) {
                c = a._iDisplayStart;
                for (d = a.fnDisplayEnd(); c < d; c++)
                    f.push(j[c])
            } else if ("current" == d || "applied" == d)
                f = "none" ==
                i ? c.slice() : "applied" == i ? j.slice() : e.map(c, function(a) {
                    return - 1 === e.inArray(a, j) ? a : null
                });
            else if ("index" == d || "original" == d) {
                c = 0;
                for (d = a.aoData.length; c < d; c++)
                    "none" == i ? f.push(c) : (k = e.inArray(c, j), ( - 1 === k && "removed" == i || 0 <= k && "applied" == i) && f.push(c))
            }
            return f
        };
        I("rows()", function(a, b) {
            a === l ? a = "" : e.isPlainObject(a) && (b = a, a = "");
            var b = fc(b), c = this.iterator("table", function(c) {
                var d = b;
                return H(a, function(a) {
                    var b = vc(a);
                    if (b !== null&&!d)
                        return [b];
                    var i = Nb(c, d);
                    if (b !== null && e.inArray(b, i)!==-1)
                        return [b];
                    if (!a)
                        return i;
                    if (typeof a === "function")
                        return e.map(i, function(b) {
                            var d = c.aoData[b];
                            return a(b, d._aData, d.nTr) ? b : null
                        });
                    b = yc(Wa(c.aoData, i, "nTr"));
                    return a.nodeName && e.inArray(a, b)!==-1 ? [a._DT_RowIndex] : e(b).filter(a).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                })
            }, 1);
            c.selector.rows = a;
            c.selector.opts = b;
            return c
        });
        I("rows().nodes()", function() {
            return this.iterator("row", function(a, b) {
                return a.aoData[b].nTr || l
            }, 1)
        });
        I("rows().data()", function() {
            return this.iterator(!0, "rows", function(a, b) {
                return Wa(a.aoData,
                b, "_aData")
            }, 1)
        });
        da("rows().cache()", "row().cache()", function(a) {
            return this.iterator("row", function(b, c) {
                var d = b.aoData[c];
                return "search" === a ? d._aFilterData : d._aSortData
            }, 1)
        });
        da("rows().invalidate()", "row().invalidate()", function(a) {
            return this.iterator("row", function(b, c) {
                Ea(b, c, a)
            })
        });
        da("rows().indexes()", "row().index()", function() {
            return this.iterator("row", function(a, b) {
                return b
            }, 1)
        });
        da("rows().remove()", "row().remove()", function() {
            var a = this;
            return this.iterator("row", function(b, c, d) {
                var k =
                b.aoData;
                k.splice(c, 1);
                for (var f = 0, j = k.length; f < j; f++)
                    null !== k[f].nTr && (k[f].nTr._DT_RowIndex = f);
                e.inArray(c, b.aiDisplay);
                N(b.aiDisplayMaster, c);
                N(b.aiDisplay, c);
                N(a[d], c, !1);
                wa(b)
            })
        });
        I("rows.add()", function(a) {
            var b = this.iterator("table", function(b) {
                var c, d, e, i = [];
                d = 0;
                for (e = a.length; d < e; d++)
                    c = a[d], c.nodeName && "TR" === c.nodeName.toUpperCase() ? i.push(ea(b, c)[0]) : i.push(aa(b, c));
                return i
            }, 1), c = this.rows( - 1);
            c.pop();
            c.push.apply(c, b.toArray());
            return c
        });
        I("row()", function(a, b) {
            return gc(this.rows(a,
            b))
        });
        I("row().data()", function(a) {
            var b = this.context;
            if (a === l)
                return b.length && this.length ? b[0].aoData[this[0]]._aData : l;
            b[0].aoData[this[0]]._aData = a;
            Ea(b[0], this[0], "data");
            return this
        });
        I("row().node()", function() {
            var a = this.context;
            return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
        });
        I("row.add()", function(a) {
            a instanceof e && a.length && (a = a[0]);
            var b = this.iterator("table", function(b) {
                return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ea(b, a)[0] : aa(b, a)
            });
            return this.row(b[0])
        });
        var Ga = function(a, b) {
            var c = a.context;
            c.length && (c = c[0].aoData[b !== l ? b: a[0]], c._details && (c._details.remove(), c._detailsShow = l, c._details = l))
        }, hc = function(a, b) {
            var c = a.context;
            if (c.length && a.length) {
                var d = c[0].aoData[a[0]];
                if (d._details) {
                    (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();
                    var e = c[0], f = new V(e), i = e.aoData;
                    f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                    0 < Ca(i, "_details").length && (f.on("draw.dt.DT_details", function(a, b) {
                        e === b && f.rows({
                            page: "current"
                        }).eq(0).each(function(a) {
                            a =
                            i[a];
                            a._detailsShow && a._details.insertAfter(a.nTr)
                        })
                    }), f.on("column-visibility.dt.DT_details", function(a, b) {
                        if (e === b)
                            for (var c, d = D(b), g = 0, f = i.length; g < f; g++)
                                c = i[g], c._details && c._details.children("td[colspan]").attr("colspan", d)
                    }), f.on("destroy.dt.DT_details", function(a, b) {
                        if (e === b)
                            for (var c = 0, d = i.length; c < d; c++)
                                i[c]._details && Ga(f, c)
                    }))
                }
            }
        };
        I("row().child()", function(a, b) {
            var c = this.context;
            if (a === l)
                return c.length && this.length ? c[0].aoData[this[0]]._details : l;
            if (!0 === a)
                this.child.show();
            else if (!1 ===
            a)
                Ga(this);
            else if (c.length && this.length) {
                var d = c[0], c = c[0].aoData[this[0]], i = [], f = function(a, b) {
                    if (a.nodeName && "tr" === a.nodeName.toLowerCase())
                        i.push(a);
                    else {
                        var c = e("<tr><td/></tr>").addClass(b);
                        e("td", c).addClass(b).html(a)[0].colSpan = D(d);
                        i.push(c[0])
                    }
                };
                if (e.isArray(a) || a instanceof e)
                    for (var j = 0, m = a.length; j < m; j++)
                        f(a[j], b);
                else 
                    f(a, b);
                c._details && c._details.remove();
                c._details = e(i);
                c._detailsShow && c._details.insertAfter(c.nTr)
            }
            return this
        });
        I(["row().child.show()", "row().child().show()"], function() {
            hc(this,
            !0);
            return this
        });
        I(["row().child.hide()", "row().child().hide()"], function() {
            hc(this, !1);
            return this
        });
        I(["row().child.remove()", "row().child().remove()"], function() {
            Ga(this);
            return this
        });
        I("row().child.isShown()", function() {
            var a = this.context;
            return a.length && this.length ? a[0].aoData[this[0]]._detailsShow ||!1 : !1
        });
        var Ob = /^(.+):(name|visIdx|visible)$/, xa = function(a, b, c, d, e) {
            for (var c = [], d = 0, f = e.length; d < f; d++)
                c.push(Y(a, e[d], b));
            return c
        };
        I("columns()", function(a, b) {
            a === l ? a = "" : e.isPlainObject(a) &&
            (b = a, a = "");
            var b = fc(b), c = this.iterator("table", function(c) {
                var d = a, f = b, j = c.aoColumns, l = Ca(j, "sName"), m = Ca(j, "nTh");
                return H(d, function(a) {
                    var b = vc(a);
                    if (a === "")
                        return nb(j.length);
                    if (b !== null)
                        return [b >= 0 ? b: j.length + b];
                    if (typeof a === "function") {
                        var d = Nb(c, f);
                        return e.map(j, function(b, e) {
                            return a(e, xa(c, e, 0, 0, d), m[e]) ? e : null
                        })
                    }
                    var k = typeof a === "string" ? a.match(Ob): "";
                    if (k)
                        switch (k[2]) {
                        case "visIdx":
                        case "visible":
                            b = parseInt(k[1], 10);
                            if (b < 0) {
                                var n = e.map(j, function(a, b) {
                                    return a.bVisible ? b : null
                                });
                                return [n[n.length +
                                b]]
                            }
                            return [i(c, b)];
                        case "name":
                            return e.map(l, function(a, b) {
                                return a === k[1] ? b : null
                            })
                        } else 
                            return e(m).filter(a).map(function() {
                                return e.inArray(this, m)
                            }).toArray()
                })
            }, 1);
            c.selector.cols = a;
            c.selector.opts = b;
            return c
        });
        da("columns().header()", "column().header()", function() {
            return this.iterator("column", function(a, b) {
                return a.aoColumns[b].nTh
            }, 1)
        });
        da("columns().footer()", "column().footer()", function() {
            return this.iterator("column", function(a, b) {
                return a.aoColumns[b].nTf
            }, 1)
        });
        da("columns().data()",
        "column().data()", function() {
            return this.iterator("column-rows", xa, 1)
        });
        da("columns().dataSrc()", "column().dataSrc()", function() {
            return this.iterator("column", function(a, b) {
                return a.aoColumns[b].mData
            }, 1)
        });
        da("columns().cache()", "column().cache()", function(a) {
            return this.iterator("column-rows", function(b, c, d, e, f) {
                return Wa(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
            }, 1)
        });
        da("columns().nodes()", "column().nodes()", function() {
            return this.iterator("column-rows", function(a, b, c, d, e) {
                return Wa(a.aoData,
                e, "anCells", b)
            }, 1)
        });
        da("columns().visible()", "column().visible()", function(a, b) {
            return this.iterator("column", function(c, d) {
                if (a === l)
                    return c.aoColumns[d].bVisible;
                var i = c.aoColumns, f = i[d], j = c.aoData, m, o, p;
                if (a !== l && f.bVisible !== a) {
                    if (a) {
                        var u = e.inArray(!0, Ca(i, "bVisible"), d + 1);
                        m = 0;
                        for (o = j.length; m < o; m++)
                            p = j[m].nTr, i = j[m].anCells, p && p.insertBefore(i[d], i[u] || null)
                        } else 
                            e(Ca(c.aoData, "anCells", d)).detach();
                    f.bVisible = a;
                    Qa(c, c.aoHeader);
                    Qa(c, c.aoFooter);
                    if (b === l || b)
                        n(c), (c.oScroll.sX || c.oScroll.sY) &&
                        bb(c);
                    T(c, null, "column-visibility", [c, d, a]);
                    ka(c)
                }
            })
        });
        da("columns().indexes()", "column().index()", function(a) {
            return this.iterator("column", function(b, c) {
                return "visible" === a ? u(b, c) : c
            }, 1)
        });
        I("columns.adjust()", function() {
            return this.iterator("table", function(a) {
                n(a)
            }, 1)
        });
        I("column.index()", function(a, b) {
            if (0 !== this.context.length) {
                var c = this.context[0];
                if ("fromVisible" === a || "toData" === a)
                    return i(c, b);
                if ("fromData" === a || "toVisible" === a)
                    return u(c, b)
            }
        });
        I("column()", function(a, b) {
            return gc(this.columns(a,
            b))
        });
        I("cells()", function(a, b, c) {
            e.isPlainObject(a) && (typeof a.row !== l ? (c = b, b = null) : (c = a, a = null));
            e.isPlainObject(b) && (c = b, b = null);
            if (null === b || b === l)
                return this.iterator("table", function(b) {
                    var d = a, g = fc(c), f = b.aoData, i = Nb(b, g), g = yc(Wa(f, i, "anCells")), j = e([].concat.apply([], g)), k, m = b.aoColumns.length, n, o, p, q, r, u;
                    return H(d, function(a) {
                        var c = typeof a === "function";
                        if (a === null || a === l || c) {
                            n = [];
                            o = 0;
                            for (p = i.length; o < p; o++) {
                                k = i[o];
                                for (q = 0; q < m; q++) {
                                    r = {
                                        row: k,
                                        column: q
                                    };
                                    if (c) {
                                        u = b.aoData[k];
                                        a(r, Y(b, k, q), u.anCells[q]) &&
                                        n.push(r)
                                    } else 
                                        n.push(r)
                                    }
                            }
                            return n
                        }
                        return e.isPlainObject(a) ? [a] : j.filter(a).map(function(a, b) {
                            k = b.parentNode._DT_RowIndex;
                            return {
                                row: k,
                                column: e.inArray(b, f[k].anCells)
                            }
                        }).toArray()
                    })
                });
            var d = this.columns(b, c), i = this.rows(a, c), f, j, m, n, p, u = this.iterator("table", function(a, b) {
                f = [];
                j = 0;
                for (m = i[b].length; j < m; j++) {
                    n = 0;
                    for (p = d[b].length; n < p; n++)
                        f.push({
                            row: i[b][j],
                            column: d[b][n]
                        })
                }
                return f
            }, 1);
            e.extend(u.selector, {
                cols: b,
                rows: a,
                opts: c
            });
            return u
        });
        da("cells().nodes()", "cell().node()", function() {
            return this.iterator("cell",
            function(a, b, c) {
                return (a = a.aoData[b].anCells) ? a[c] : l
            }, 1)
        });
        I("cells().data()", function() {
            return this.iterator("cell", function(a, b, c) {
                return Y(a, b, c)
            }, 1)
        });
        da("cells().cache()", "cell().cache()", function(a) {
            a = "search" === a ? "_aFilterData" : "_aSortData";
            return this.iterator("cell", function(b, c, d) {
                return b.aoData[c][a][d]
            }, 1)
        });
        da("cells().render()", "cell().render()", function(a) {
            return this.iterator("cell", function(b, c, d) {
                return Y(b, c, d, a)
            }, 1)
        });
        da("cells().indexes()", "cell().index()", function() {
            return this.iterator("cell",
            function(a, b, c) {
                return {
                    row: b,
                    column: c,
                    columnVisible: u(a, c)
                }
            }, 1)
        });
        da("cells().invalidate()", "cell().invalidate()", function(a) {
            return this.iterator("cell", function(b, c, d) {
                Ea(b, c, a, d)
            })
        });
        I("cell()", function(a, b, c) {
            return gc(this.cells(a, b, c))
        });
        I("cell().data()", function(a) {
            var b = this.context, c = this[0];
            if (a === l)
                return b.length && c.length ? Y(b[0], c[0].row, c[0].column) : l;
            P(b[0], c[0].row, c[0].column, a);
            Ea(b[0], c[0].row, "data", c[0].column);
            return this
        });
        I("order()", function(a, b) {
            var c = this.context;
            if (a ===
            l)
                return 0 !== c.length ? c[0].aaSorting : l;
            "number" === typeof a ? a = [[a, b]] : e.isArray(a[0]) || (a = Array.prototype.slice.call(arguments));
            return this.iterator("table", function(b) {
                b.aaSorting = a.slice()
            })
        });
        I("order.listener()", function(a, b, c) {
            return this.iterator("table", function(d) {
                Na(d, a, b, c)
            })
        });
        I(["columns().order()", "column().order()"], function(a) {
            var b = this;
            return this.iterator("table", function(c, d) {
                var i = [];
                e.each(b[d], function(b, c) {
                    i.push([c, a])
                });
                c.aaSorting = i
            })
        });
        I("search()", function(a, b, c, d) {
            var i =
            this.context;
            return a === l ? 0 !== i.length ? i[0].oPreviousSearch.sSearch : l : this.iterator("table", function(f) {
                f.oFeatures.bFilter && La(f, e.extend({}, f.oPreviousSearch, {
                    sSearch: a + "",
                    bRegex: null === b?!1: b,
                    bSmart: null === c?!0: c,
                    bCaseInsensitive: null === d?!0: d
                }), 1)
            })
        });
        da("columns().search()", "column().search()", function(a, b, c, d) {
            return this.iterator("column", function(i, f) {
                var j = i.aoPreSearchCols;
                if (a === l)
                    return j[f].sSearch;
                i.oFeatures.bFilter && (e.extend(j[f], {
                    sSearch: a + "",
                    bRegex: null === b?!1: b,
                    bSmart: null === c ?
                    !0: c,
                    bCaseInsensitive: null === d?!0: d
                }), La(i, i.oPreviousSearch, 1))
            })
        });
        I("state()", function() {
            return this.context.length ? this.context[0].oSavedState : null
        });
        I("state.clear()", function() {
            return this.iterator("table", function(a) {
                a.fnStateSaveCallback.call(a.oInstance, a, {})
            })
        });
        I("state.loaded()", function() {
            return this.context.length ? this.context[0].oLoadedState : null
        });
        I("state.save()", function() {
            return this.iterator("table", function(a) {
                ka(a)
            })
        });
        B.versionCheck = B.fnVersionCheck = function(a) {
            for (var b = B.version.split("."),
            a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)
                if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d)
                    return c > d;
            return !0
        };
        B.isDataTable = B.fnIsDataTable = function(a) {
            var b = e(a).get(0), c=!1;
            e.each(B.settings, function(a, d) {
                if (d.nTable === b || e("table", d.nScrollHead)[0] === b || e("table", d.nScrollFoot)[0] === b)
                    c=!0
            });
            return c
        };
        B.tables = B.fnTables = function(a) {
            return e.map(B.settings, function(b) {
                if (!a || a && e(b.nTable).is(":visible"))
                    return b.nTable
            })
        };
        B.util = {
            throttle: lb,
            escapeRegex: Eb
        };
        B.camelToHungarian = z;
        I("$()",
        function(a, b) {
            var c = this.rows(b).nodes(), c = e(c);
            return e([].concat(c.filter(a).toArray(), c.find(a).toArray()))
        });
        e.each(["on", "one", "off"], function(a, b) {
            I(b + "()", function() {
                var a = Array.prototype.slice.call(arguments);
                a[0].match(/\.dt\b/) || (a[0] += ".dt");
                var d = e(this.tables().nodes());
                d[b].apply(d, a);
                return this
            })
        });
        I("clear()", function() {
            return this.iterator("table", function(a) {
                ua(a)
            })
        });
        I("settings()", function() {
            return new V(this.context, this.context)
        });
        I("data()", function() {
            return this.iterator("table",
            function(a) {
                return Ca(a.aoData, "_aData")
            }).flatten()
        });
        I("destroy()", function(a) {
            a = a ||!1;
            return this.iterator("table", function(b) {
                var c = b.nTableWrapper.parentNode, d = b.oClasses, i = b.nTable, f = b.nTBody, j = b.nTHead, l = b.nTFoot, n = e(i), f = e(f), p = e(b.nTableWrapper), u = e.map(b.aoData, function(a) {
                    return a.nTr
                }), t;
                b.bDestroying=!0;
                T(b, "aoDestroyCallback", "destroy", [b]);
                a || (new V(b)).columns().visible(!0);
                p.unbind(".DT").find(":not(tbody *)").unbind(".DT");
                e(m).unbind(".DT-" + b.sInstance);
                i != j.parentNode && (n.children("thead").detach(),
                n.append(j));
                l && i != l.parentNode && (n.children("tfoot").detach(), n.append(l));
                n.detach();
                p.detach();
                b.aaSorting = [];
                b.aaSortingFixed = [];
                Ua(b);
                e(u).removeClass(b.asStripeClasses.join(" "));
                e("th, td", j).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
                b.bJUI && (e("th span." + d.sSortIcon + ", td span." + d.sSortIcon, j).detach(), e("th, td", j).each(function() {
                    var a = e("div." + d.sSortJUIWrapper, this);
                    e(this).append(a.contents());
                    a.detach()
                }));
                !a && c && c.insertBefore(i, b.nTableReinsertBefore);
                f.children().detach();
                f.append(u);
                n.css("width", b.sDestroyWidth).removeClass(d.sTable);
                (t = b.asDestroyStripes.length) && f.children().each(function(a) {
                    e(this).addClass(b.asDestroyStripes[a%t])
                });
                c = e.inArray(b, B.settings);
                - 1 !== c && B.settings.splice(c, 1)
            })
        });
        B.version = "1.10.6-dev";
        B.settings = [];
        B.models = {};
        B.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        };
        B.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null
        };
        B.models.oColumn =
        {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        };
        B.defaults = {
            aaData: null,
            aaSorting: [[0, "asc"]],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(a) {
                return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(a) {
                try {
                    return JSON.parse(( - 1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
                } catch (b) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(a, b) {
                try {
                    ( - 1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
                } catch (c) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: e.extend({}, B.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null
        };
        v(B.defaults);
        B.defaults.column = {
            aDataSort: null,
            iDataSort: - 1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        };
        v(B.defaults.column);
        B.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: l,
            oAjaxData: l,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: - 1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == ra(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return "ssp" == ra(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                var a = this._iDisplayLength, b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e = this.oFeatures, f = e.bPaginate;
                return e.bServerSide?!1 === f||-1 === a ? b +
                d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d||-1 === a ? d : c
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {}
        };
        B.ext = ga = {
            buttons: {},
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: B.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: B.version
        };
        e.extend(ga, {
            afnFiltering: ga.search,
            aTypes: ga.type.detect,
            ofnSearch: ga.type.search,
            oSort: ga.type.order,
            afnSortData: ga.order,
            aoFeatures: ga.feature,
            oApi: ga.internal,
            oStdClasses: ga.classes,
            oPagination: ga.pager
        });
        e.extend(B.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var yb = "", yb = "", Ka = yb + "ui-state-default", Pb = yb + "css_right ui-icon ui-icon-", lc = yb + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
        e.extend(B.ext.oJUIClasses, B.ext.classes, {
            sPageButton: "fg-button ui-button " + Ka,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: Ka + " sorting_asc",
            sSortDesc: Ka + " sorting_desc",
            sSortable: Ka + " sorting",
            sSortableAsc: Ka + " sorting_asc_disabled",
            sSortableDesc: Ka + " sorting_desc_disabled",
            sSortableNone: Ka + " sorting_disabled",
            sSortJUIAsc: Pb + "triangle-1-n",
            sSortJUIDesc: Pb + "triangle-1-s",
            sSortJUI: Pb + "carat-2-n-s",
            sSortJUIAscAllowed: Pb + "carat-1-n",
            sSortJUIDescAllowed: Pb + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + Ka,
            sScrollFoot: "dataTables_scrollFoot " +
            Ka,
            sHeaderTH: Ka,
            sFooterTH: Ka,
            sJUIHeader: lc + " ui-corner-tl ui-corner-tr",
            sJUIFooter: lc + " ui-corner-bl ui-corner-br"
        });
        var kc = B.ext.pager;
        e.extend(kc, {
            simple: function() {
                return ["previous", "next"]
            },
            full: function() {
                return ["first", "previous", "next", "last"]
            },
            simple_numbers: function(a, b) {
                return ["previous", Lb(a, b), "next"]
            },
            full_numbers: function(a, b) {
                return ["first", "previous", Lb(a, b), "next", "last"]
            },
            _numbers: Lb,
            numbers_length: 7
        });
        e.extend(!0, B.ext.renderer, {
            pageButton: {
                _: function(a, b, c, d, i, f) {
                    var j = a.oClasses,
                    l = a.oLanguage.oPaginate, m, n, p = 0, u = function(b, d) {
                        var g, t, x, v, y = function(b) {
                            Ta(a, b.data.action, true)
                        };
                        g = 0;
                        for (t = d.length; g < t; g++) {
                            v = d[g];
                            if (e.isArray(v)) {
                                x = e("<" + (v.DT_el || "div") + "/>").appendTo(b);
                                u(x, v)
                            } else {
                                n = m = "";
                                switch (v) {
                                case "ellipsis":
                                    b.append("<span>&hellip;</span>");
                                    break;
                                case "first":
                                    m = l.sFirst;
                                    n = v + (i > 0 ? "" : " " + j.sPageButtonDisabled);
                                    break;
                                case "previous":
                                    m = l.sPrevious;
                                    n = v + (i > 0 ? "" : " " + j.sPageButtonDisabled);
                                    break;
                                case "next":
                                    m = l.sNext;
                                    n = v + (i < f - 1 ? "" : " " + j.sPageButtonDisabled);
                                    break;
                                case "last":
                                    m =
                                    l.sLast;
                                    n = v + (i < f - 1 ? "" : " " + j.sPageButtonDisabled);
                                    break;
                                default:
                                    m = v + 1;
                                    n = i === v ? j.sPageButtonActive : ""
                                }
                                if (m) {
                                    x = e("<a>", {
                                        "class": j.sPageButton + " " + n,
                                        "aria-controls": a.sTableId,
                                        "data-dt-idx": p,
                                        tabindex: a.iTabIndex,
                                        id: c === 0 && typeof v === "string" ? a.sTableId + "_" + v: null
                                    }).html(m).appendTo(b);
                                    $a(x, {
                                        action: v
                                    }, y);
                                    p++
                                }
                            }
                        }
                    }, t;
                    try {
                        t = e(C.activeElement).data("dt-idx")
                    } catch (x) {}
                    u(e(b).empty(), d);
                    t && e(b).find("[data-dt-idx=" + t + "]").focus()
                }
            }
        });
        e.extend(B.ext.type.detect, [function(a, b) {
            var c = b.oLanguage.sDecimal;
            return dc(a,
            c) ? "num" + c : null
        }, function(a) {
            if (a&&!(a instanceof Date) && (!cb.test(a) ||!tc.test(a)))
                return null;
            var b = Date.parse(a);
            return null !== b&&!isNaN(b) || za(a) ? "date" : null
        }, function(a, b) {
            var c = b.oLanguage.sDecimal;
            return dc(a, c, !0) ? "num-fmt" + c : null
        }, function(a, b) {
            var c = b.oLanguage.sDecimal;
            return xc(a, c) ? "html-num" + c : null
        }, function(a, b) {
            var c = b.oLanguage.sDecimal;
            return xc(a, c, !0) ? "html-num-fmt" + c : null
        }, function(a) {
            return za(a) || "string" === typeof a&&-1 !== a.indexOf("<") ? "html" : null
        }
        ]);
        e.extend(B.ext.type.search,
        {
            html: function(a) {
                return za(a) ? a : "string" === typeof a ? a.replace(Sa, " ").replace(wb, "") : ""
            },
            string: function(a) {
                return za(a) ? a : "string" === typeof a ? a.replace(Sa, " ") : a
            }
        });
        var fb = function(a, b, c, d) {
            if (0 !== a && (!a || "-" === a))
                return - Infinity;
            b && (a = wc(a, b));
            a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
            return 1 * a
        };
        e.extend(ga.type.order, {
            "date-pre": function(a) {
                return Date.parse(a) || 0
            },
            "html-pre": function(a) {
                return za(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
            },
            "string-pre": function(a) {
                return za(a) ?
                "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
            },
            "string-asc": function(a, b) {
                return a < b?-1 : a > b ? 1 : 0
            },
            "string-desc": function(a, b) {
                return a < b ? 1 : a > b?-1 : 0
            }
        });
        bc("");
        e.extend(!0, B.ext.renderer, {
            header: {
                _: function(a, b, c, d) {
                    e(a.nTable).on("order.dt.DT", function(e, f, i, l) {
                        if (a === f) {
                            e = c.idx;
                            b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(l[e] == "asc" ? d.sSortAsc : l[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                        }
                    })
                },
                jqueryui: function(a, b, c, d) {
                    e("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(e("<span/>").addClass(d.sSortIcon +
                    " " + c.sSortingClassJUI)).appendTo(b);
                    e(a.nTable).on("order.dt.DT", function(e, f, i, l) {
                        if (a === f) {
                            e = c.idx;
                            b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(l[e] == "asc" ? d.sSortAsc : l[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                            b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(l[e] == "asc" ? d.sSortJUIAsc : l[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                        }
                    })
                }
            }
        });
        B.render = {
            number: function(a, b, c, d) {
                return {
                    display: function(e) {
                        var f =
                        0 > e ? "-": "", e = Math.abs(parseFloat(e)), i = parseInt(e, 10), e = c ? b + (e - i).toFixed(c).substring(2): "";
                        return f + (d || "") + i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + e
                    }
                }
            }
        };
        e.extend(B.ext.internal, {
            _fnExternApiFunc: Mb,
            _fnBuildAjax: Ha,
            _fnAjaxUpdate: Wb,
            _fnAjaxParameters: Db,
            _fnAjaxUpdateDraw: Xb,
            _fnAjaxDataSrc: Za,
            _fnAddColumn: F,
            _fnColumnOptions: p,
            _fnAdjustColumnSizing: n,
            _fnVisibleToColumnIndex: i,
            _fnColumnIndexToVisible: u,
            _fnVisbleColumns: D,
            _fnGetColumns: y,
            _fnColumnTypes: A,
            _fnApplyColumnDefs: K,
            _fnHungarianMap: v,
            _fnCamelToHungarian: z,
            _fnLanguageCompat: S,
            _fnBrowserDetect: ca,
            _fnAddData: aa,
            _fnAddTr: ea,
            _fnNodeToDataIndex: function(a, b) {
                return b._DT_RowIndex !== l ? b._DT_RowIndex : null
            },
            _fnNodeToColumnIndex: function(a, b, c) {
                return e.inArray(c, a.aoData[b].anCells)
            },
            _fnGetCellData: Y,
            _fnSetCellData: P,
            _fnSplitObjNotation: G,
            _fnGetObjectDataFn: W,
            _fnSetObjectDataFn: Z,
            _fnGetDataMaster: fa,
            _fnClearTable: ua,
            _fnDeleteIndex: N,
            _fnInvalidate: Ea,
            _fnGetRowElements: ma,
            _fnCreateTr: Fa,
            _fnBuildHead: gb,
            _fnDrawHead: Qa,
            _fnDraw: pa,
            _fnReDraw: ya,
            _fnAddOptionsHtml: Vb,
            _fnDetectHeader: hb,
            _fnGetUniqueThs: Da,
            _fnFeatureHtmlFilter: oc,
            _fnFilterComplete: La,
            _fnFilterCustom: x,
            _fnFilterColumn: d,
            _fnFilter: pc,
            _fnFilterCreateSearch: Yb,
            _fnEscapeRegex: Eb,
            _fnFilterData: qc,
            _fnFeatureHtmlInfo: X,
            _fnUpdateInfo: Hb,
            _fnInfoMacros: Aa,
            _fnInitialise: qa,
            _fnInitComplete: jb,
            _fnLengthChange: Ib,
            _fnFeatureHtmlLength: rc,
            _fnFeatureHtmlPaginate: sc,
            _fnPageChange: Ta,
            _fnFeatureHtmlProcessing: Gb,
            _fnProcessingDisplay: ta,
            _fnFeatureHtmlTable: ub,
            _fnScrollDraw: bb,
            _fnApplyToChildren: Ba,
            _fnCalculateColumnWidths: kb,
            _fnThrottle: lb,
            _fnConvertToWidth: Jb,
            _fnScrollingWidthAdjust: db,
            _fnGetWidestNode: ba,
            _fnGetMaxLenString: Q,
            _fnStringToCss: O,
            _fnScrollBarWidth: ac,
            _fnSortFlatten: Ma,
            _fnSort: Kb,
            _fnSortAria: Zb,
            _fnSortListener: mb,
            _fnSortAttachListener: Na,
            _fnSortingClasses: Ua,
            _fnSortData: Ra,
            _fnSaveState: ka,
            _fnLoadState: Ia,
            _fnSettingsFromNode: va,
            _fnLog: ha,
            _fnMap: na,
            _fnBindAction: $a,
            _fnCallbackReg: R,
            _fnCallbackFire: T,
            _fnLengthOverflow: wa,
            _fnRenderer: $b,
            _fnDataSource: ra,
            _fnRowAttributes: Pa,
            _fnCalculateEnd: function() {}
        });
        e.fn.dataTable = B;
        e.fn.dataTableSettings = B.settings;
        e.fn.dataTableExt = B.ext;
        e.fn.DataTable = function(a) {
            return e(this).dataTable(a).api()
        };
        e.each(B, function(a, b) {
            e.fn.DataTable[a] = b
        });
        return e.fn.dataTable
    };
    "function" === typeof define && define.amd ? define("datatables", ["jquery"], v) : "object" === typeof exports ? module.exports = v(require("jquery")) : jQuery&&!jQuery.fn.dataTable && v(jQuery)
})(window, document);
(function(m) {
    function C() {
        var e = M.scrollLeft(), i = M.width();
        m([fa, Fa]).css("left", e + i / 2);
        y && m(Z).css({
            left: e,
            top: M.scrollTop(),
            width: i,
            height: M.height()
        })
    }
    function l(e) {
        e ? m("object").add(ea ? "select" : "embed").each(function(e, i) {
            Y[e] = [i, i.style.visibility];
            i.style.visibility = "hidden"
        }) : (m.each(Y, function(e, i) {
            i[0].style.visibility = i[1]
        }), Y = []);
        e = e ? "bind" : "unbind";
        M[e]("scroll resize", C);
        m(document)[e]("keydown", v)
    }
    function v(i) {
        var i = i.which, l = m.inArray;
        return 0 <= l(i, F.closeKeys) ? ca() : 0 <= l(i, F.nextKeys) ?
        U() : 0 <= l(i, F.previousKeys) ? e() : null
    }
    function e() {
        return z(u)
    }
    function U() {
        return z(D)
    }
    function z(e) {
        0 <= e && (n = e, i = p[n][0], u = (n || (F.loop ? p.length : 0)) - 1, D = (n + 1)%p.length || (F.loop ? 0 : - 1), t(), fa.className = "lbLoading", P = new Image, P.onload = S, P.src = i);
        return !1
    }
    function S() {
        fa.className = "";
        m(ua).css({
            backgroundImage: "url(" + i + ")",
            visibility: "hidden",
            display: ""
        });
        m(N).width(P.width);
        m([N, Ea, ma]).height(P.height);
        m(gb).html(p[n][1] || "");
        m(Qa).html((1 < p.length && F.counterText || "").replace(/{x}/, n + 1).replace(/{y}/,
        p.length));
        0 <= u && (G.src = p[u][0]);
        0 <= D && (W.src = p[D][0]);
        K = ua.offsetWidth;
        aa = ua.offsetHeight;
        var e = Math.max(0, A - aa / 2);
        fa.offsetHeight != aa && m(fa).animate({
            height: aa,
            top: e
        }, F.resizeDuration, F.resizeEasing);
        fa.offsetWidth != K && m(fa).animate({
            width: K,
            marginLeft: - K / 2
        }, F.resizeDuration, F.resizeEasing);
        m(fa).queue(function() {
            m(Fa).css({
                width: K,
                top: e + aa,
                marginLeft: - K / 2,
                visibility: "hidden",
                display: ""
            });
            m(ua).css({
                display: "none",
                visibility: "",
                opacity: ""
            }).fadeIn(F.imageFadeDuration, la)
        })
    }
    function la() {
        0 <= u && m(Ea).show();
        0 <= D && m(ma).show();
        m(Pa).css("marginTop", - Pa.offsetHeight).animate({
            marginTop: 0
        }, F.captionAnimationDuration);
        Fa.style.visibility = ""
    }
    function t() {
        P.onload = null;
        P.src = G.src = W.src = i;
        m([fa, ua, Pa]).stop(!0);
        m([Ea, ma, ua, Fa]).hide()
    }
    function ca() {
        0 <= n && (t(), n = u = D =- 1, m(fa).hide(), m(Z).stop().fadeOut(F.overlayFadeDuration, l));
        return !1
    }
    var M = m(window), F, p, n =- 1, i, u, D, y, A, K, aa, ea=!window.XMLHttpRequest, Y = [], P = {}, G = new Image, W = new Image, Z, fa, ua, N, Ea, ma, Fa, Pa, gb, Qa;
    m(function() {
        m("body").append(m([Z = m('<div id="lbOverlay" />').click(ca)[0],
        fa = m('<div id="lbCenter" />')[0], Fa = m('<div id="lbBottomContainer" />')[0]]).css("display", "none"));
        ua = m('<div id="lbImage" />').appendTo(fa).append(N = m('<div style="position: relative;" />').append([Ea = m('<a id="lbPrevLink" href="#" />').click(e)[0], ma = m('<a id="lbNextLink" href="#" />').click(U)[0]])[0])[0];
        Pa = m('<div id="lbBottom" />').appendTo(Fa).append([m('<a id="lbCloseLink" href="#" />').click(ca)[0], gb = m('<div id="lbCaption" />')[0], Qa = m('<div id="lbNumber" />')[0], m('<div style="clear: both;" />')[0]])[0]
    });
    m.slimbox = function(e, i, n) {
        F = m.extend({
            loop: !1,
            overlayOpacity: 0.8,
            overlayFadeDuration: 400,
            resizeDuration: 400,
            resizeEasing: "swing",
            initialWidth: 250,
            initialHeight: 250,
            imageFadeDuration: 400,
            captionAnimationDuration: 400,
            counterText: "Image {x} of {y}",
            closeKeys: [27, 88, 67],
            previousKeys: [37, 80],
            nextKeys: [39, 78]
        }, n);
        "string" == typeof e && (e = [[e, i]], i = 0);
        A = M.scrollTop() + M.height() / 2;
        K = F.initialWidth;
        aa = F.initialHeight;
        m(fa).css({
            top: Math.max(0, A - aa / 2),
            width: K,
            height: aa,
            marginLeft: - K / 2
        }).show();
        if (y = ea || Z.currentStyle &&
        "fixed" != Z.currentStyle.position)
            Z.style.position = "absolute";
        m(Z).css("opacity", F.overlayOpacity).fadeIn(F.overlayFadeDuration);
        C();
        l(1);
        p = e;
        F.loop = F.loop && 1 < p.length;
        return z(i)
    };
    m.fn.slimbox = function(e, i, l) {
        var i = i || function(e) {
            console.log(e);
            return [e.href, e.title]
        }, l = l || function() {
            return !0
        }, n = this;
        return n.unbind("click").click(function() {
            var p = this, u = 0, t, v = 0, y;
            t = m.grep(n, function(e, i) {
                return l.call(p, e, i)
            });
            for (y = t.length; v < y; ++v)
                t[v] == p && (u = v), t[v] = i(t[v], v);
            return m.slimbox(t, u, e)
        })
    }
})(jQuery);
(function(m, C) {
    var l, v;
    m.uaMatch = function(e) {
        e = e.toLowerCase();
        e = /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 <= e.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: e[3] || e[1] || "",
            version: e[2] || "0"
        }
    };
    l = m.uaMatch(C.navigator.userAgent);
    v = {};
    l.browser && (v[l.browser]=!0, v.version = l.version, v.versionNumber = parseFloat(l.version, 10));
    if (v.chrome || v.opr || v.safari)
        v.webkit=!0;
    v.rv && (l.browser = "msie", v.msie=!0);
    v.opr && (l.browser = "opera", v.opera=!0);
    v.name = l.browser;
    m.browser = v
})(jQuery, window);
(function() {
    function m() {
        C = [{
            tag: "h2",
            top: 0,
            el: $("div.fw-page-nav li").eq(0)
        }
        ];
        $("div.content h2, div.content h3").each(function() {
            C.push({
                tag: this.nodeName.toLowerCase(),
                top: $(this).offset().top,
                el: $(this)
            })
        });
        $(document).trigger("scroll")
    }
    SyntaxHighlighter.config.tagName = "code";
    var C = [];
    $(document).ready(function() {
        $("body").hasClass("comments") && $('<a name="Comments"></a><h2 class="comments_title" data-anchor="Comments">Comments</h2><div class="comments"></div>').appendTo($("div.comments-insert").length ?
        $("div.comments-insert") : $("div.content"));
        if ($("div.page-nav").length) {
            var l = $("<ul/>").append('<li><a href="#top" class="active">Top</a></li>'), v;
            $("div.content h2, div.content h3").each(function() {
                if ("h2" === this.nodeName.toLowerCase())
                    v = l;
                else {
                    var e = l.children("li:last");
                    v = e.children("ul");
                    v.length || (v = $("<ul/>").appendTo(e))
                }
                v.append('<li><a href="#' + $(this).data("anchor") + '">' + $(this).text() + "</a></li>")
            });
            $("div.page-nav").append(l);
            var e = $("div.page-nav"), U = e.find("li"), z = e.offset().top, S =
            "relative", la = null;
            $(window).on("resize", function() {
                clearTimeout(la);
                la = setTimeout(function() {
                    S = null;
                    m()
                }, 200);
                "static" === S && e.css({
                    left: $("div.fw-page-nav").offset().left,
                    width: $("div.fw-page-nav").width()
                })
            });
            $(document).on("scroll", function() {
                var l = document.body.scrollTop;
                l > z && "static" !== S ? (S = "static", e.parent().addClass("static"), e.css({
                    left: $("div.fw-page-nav").offset().left,
                    width: $("div.fw-page-nav").width()
                })) : l <= z && "static" === S && (S = "relative", e.parent().removeClass("static"));
                for (var i=!1,
                m = 1, p = C.length; m < p; m++)
                    if (C[m].top > l) {
                        e.find("li.active").removeClass("active");
                        U.eq(m - 1).addClass("active");
                        e.find("li.sub-active").removeClass("sub-active");
                        U.eq(m - 1).parents("li").addClass("sub-active");
                        i=!0;
                        break
                    }
                i || (l = C.length, e.find("li.active").removeClass("active"), U.eq(l - 1).addClass("active"), e.find("li.sub-active").removeClass("sub-active"), U.eq(l - 1).parents("li").addClass("sub-active"))
            })
        }
        $("table.basic").addClass("display").dataTable({
            info: !1,
            ordering: !1,
            searching: !1,
            paging: !1
        });
        $("table.search").addClass("display").dataTable({
            info: !1,
            ordering: !1,
            paging: !1
        });
        var t = $("table.reference").DataTable({
            dom: "t",
            paging: !1,
            drawCallback: function() {
                var e = this.api(), i = $(e.table().node().parentNode), l = $(i).prevUntil("h2").add($(i).prevAll("h2").first());
                0 === e.page.info().recordsDisplay ? (i.css("display", "none"), l.css("display", "none")) : (i.css("display", "block"), l.css("display", "block"));
                $(window).trigger("resize")
            }
        });
        $("div.ref_search input").on("keyup", function() {
            t.search(this.value).draw()
        });
        m();
        $("div.cdn").on("click", function() {
            $("input",
            this)[0].select()
        });
        $("tr.details").toggle();
        $("span.css_link").click(function() {
            var e = $(this).parents("table:eq(0)").find(".details");
            "none" == $(e[0]).css("display") ? e.show() : e.hide();
            $(this).html("Show details" == $(this).html() ? "Hide details" : "Show details")
        });
        $("div.purchase_options").each(function() {
            var e = $("div.liner", this).map(function() {
                return $(this).outerHeight()
            });
            $("div.liner", this).outerHeight(Math.max.apply(window, e))
        });
        $("div.purchase_options").on("click", ".btn[data-product]", function(e) {
            e.preventDefault();
            $.ajax({
                url: window._site.dtDomain + "/media/php/purchaseAjax.php",
                data: {
                    product: $(this).data("product")
                },
                dataType: "jsonp",
                success: function(e) {
                    "purchase" === e.action ? window.location.href = "/purchase/checkout" : window.DT_Purchase ? DT_Purchase.process(e.action) : $.getScript(window._site.dtDomain + "/media/js/register.js", function() {
                        DT_Purchase.process(e.action)
                    })
                }
            })
        });
        $(document).on("click", "a.register-action, button.register-action", function(e) {
            if ($(this).hasClass("register-action")) {
                e.preventDefault();
                e.stopImmediatePropagation();
                var i = $(this), l = function() {
                    $(".register-action").removeClass("register-action");
                    i.hasClass("follow-link") ? i[0].href ? window.location.href = i[0].href : window.location.reload() : $(i).click()
                };
                i.hasClass("logout") ? $.ajax({
                    url: window._site.dtDomain + "/media/php/registerAjax.php",
                    data: {
                        data: {
                            action: "logout"
                        }
                    },
                    dataType: "jsonp",
                    success: function() {
                        window.location.reload()
                    }
                }) : $.ajax({
                    url: window._site.dtDomain + "/media/php/purchaseAjax.php",
                    data: {
                        product: "register"
                    },
                    dataType: "jsonp",
                    success: function(e) {
                        "ready" ===
                        e.action ? l() : window.DT_Purchase ? DT_Purchase.process(e.action, l) : $.getScript(window._site.dtDomain + "/media/js/register.js", function() {
                            DT_Purchase.process(e.action, l)
                        })
                    }
                })
            }
        });
        $("div.mobile-show").on("click", function() {
            $(this).closest("div.fw-nav").css("height", "auto");
            $(this).css("display", "none")
        });
        if ($("div.MessageList").length) {
            var ca=!1, M = $("div.Message a"), F = $("div.Item.ItemDiscussion");
            if (F.length && 20290 > F[0].id.replace("Discussion_", ""))
                ca = "time";
            else 
                for (var F = 0, p = M.length; F < p; F++)
                    if ( - 1 !== M[F].href.indexOf("legacy.datatables.net")) {
                        ca =
                        "message";
                        break
                    }
            ca && $("#Body").prepend('<div class="legacy-message"><p><b>Legacy interface notice</b>: ' + ("message" === ca ? "Some or all of the comments in this discussion thread refer to the DataTables 1.9 API. " : "This discussion was created before the release of DataTables 1.10, which introduced a more modern API. ") + 'The <a href="//legacy.datatables.net">documentation for the old DataTables API</a> is still available and newer versions are backwards compatible, but the <a href="/manual/">primary documentation</a> on this site refers to DataTables 1.10 and newer. A <a href="/upgrade/1.10-convert">conversion guide</a> details how the two API styles relate. <a href="/upgrade/1.10">Updating to 1.10+</a> is recommended if you haven\'t already.</p></div>')
        }
        window.forumJquery &&
        window.forumJquery(document).ajaxSuccess(function() {
            $("pre code.multiline").each(function(e) {
                SyntaxHighlighter.highlight({}, e)
            })
        })
    });
    $(window).on("load", function() {
        m()
    });
    window._site = {
        cacheHeaderPositions: m,
        dynamicLoaded: function() {
            var l = $("div.nav-master div.account");
            if (l.length) {
                var m = window._site.forumUser;
                m ? l.html("Welcome back <i>" + m + '</i>. <a href="' + window._site.dtDomain + '/account">Your account</a> | <a href="" class="register-action logout">Logout</a>') : l.html('Your account: <a href="" class="register-action follow-link login">Login / Register</a>')
            }
        },
        dtDomain: - 1 !== window.location.host.indexOf("local") ? "//datatables.local": "//datatables.net",
        adCheck: function() {
            !window._adpacks&&!window._carbonads && $("#ad").addClass("dtAd").append('<p><b>Support DataTables</b></p><p>DataTables is open source software that is made possible through the support of people such as yourself. Please consider helping the project progress and <a href="//datatables.net/purchase/#Supporter">joining us as a supporter</a>!</p>')
        },
        forumUser: null,
        stripe_pkey: "pk_live_vQlaAuVY6rs1IiVDYzMuEnhr"
    }
})();
(function() {
    function m(C, l, v) {
        var e, U;
        v || (v = "");
        for (var z = 0, S = l.length; z < S; z++)
            e = 0 === z%2 ? "even" : "odd", U = l[z].version ? '<span class="version" title="This was the release version at the time the comment was originally posted">@v' + l[z].version + "</span>" : "", C.append('<dt class="' + e + v + '"><a href="/forums/profile/' + l[z].username + '"><b>' + l[z].username + "</b></a>" + U + "<span>" + l[z].created + '</span></dt><dd class="' + e + v + '">' + l[z].comment + "</dd>"), l[z].children && m(C, l[z].children, " child")
    }
    window._site.comments =
    function(C, l) {
        if (0 === l.length)
            C.html("No comments posted for this page yet. Be the first to contribute!");
        else {
            var v = $('<dl class="comments"></dl>');
            m(v, l);
            v.appendTo(C)
        }
        $(C).prev("h2").append(' <span class="comment_count">(' + l.length + ")</span>");
        $("div.page-nav ul li:last a").append(' <span class="comment_count">(' + l.length + ")</span>");
        $(".comment-count").append(' <span class="comment_count">(' + l.length + ")</span>");
        C.append('<div class="comment_add"><h3>Post new comment</h3><p>Contributions in the form of tips, code snippets and suggestions for the above material are very welcome. To post a comment, please use the form below. Text is formatted by <a href="/tn/8">Markdown</a>.</p></div>');
        window._site.forumUser ? (C.find("div.comment_add").append('<div class="comment_input"><textarea id="comment"></textarea><button class="btn">Post comment</button></div>'), C.find("button.btn").on("click", function(e) {
            e.preventDefault();
            $.ajax({
                url: "/media/php/comments",
                type: "POST",
                dataType: "json",
                data: {
                    page: window._site.page,
                    comment: $("#comment").val(),
                    host: window.location.host
                },
                success: function() {
                    C.find("div.comment_input").html("<p><b>Thank you for your comment! It has been added to the moderation queue and will be reviewed and published soon.</b></p>")
                },
                error: function() {
                    alert("Sorry - an error has occurred. Please try again in a few minutes")
                }
            })
        })) : C.find("div.comment_add").append('<p>To post comments, please sign in to your DataTables account, or register:<p><ul class="formatting"><li><a href="//datatables.net/forums/entry/signin?Target=' + encodeURIComponent(location.href) + '">Sign in</a></li><li><a href="//datatables.net/forums/entry/register?Target=' + encodeURIComponent(location.href) + '">Register</a></li></ul>');
        C.find("div.comment_add").append('<p><b>Any questions posted here will be deleted without being published.</b><br>Please post questions in the <a href="/forums">Forums</a>. Comments are moderated.</p>')
    }
})();


