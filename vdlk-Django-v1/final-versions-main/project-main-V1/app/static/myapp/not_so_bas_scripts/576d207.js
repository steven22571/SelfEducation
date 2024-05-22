/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[22], {
    0: function(t, e, r) {
        "use strict";
        r.d(e, "k", (function() {
            return w
        }
        )),
        r.d(e, "m", (function() {
            return x
        }
        )),
        r.d(e, "l", (function() {
            return _
        }
        )),
        r.d(e, "e", (function() {
            return O
        }
        )),
        r.d(e, "b", (function() {
            return E
        }
        )),
        r.d(e, "s", (function() {
            return k
        }
        )),
        r.d(e, "g", (function() {
            return $
        }
        )),
        r.d(e, "h", (function() {
            return S
        }
        )),
        r.d(e, "d", (function() {
            return j
        }
        )),
        r.d(e, "r", (function() {
            return A
        }
        )),
        r.d(e, "j", (function() {
            return R
        }
        )),
        r.d(e, "t", (function() {
            return C
        }
        )),
        r.d(e, "o", (function() {
            return U
        }
        )),
        r.d(e, "q", (function() {
            return I
        }
        )),
        r.d(e, "f", (function() {
            return L
        }
        )),
        r.d(e, "c", (function() {
            return D
        }
        )),
        r.d(e, "i", (function() {
            return B
        }
        )),
        r.d(e, "p", (function() {
            return N
        }
        )),
        r.d(e, "a", (function() {
            return W
        }
        )),
        r.d(e, "v", (function() {
            return V
        }
        )),
        r.d(e, "n", (function() {
            return J
        }
        )),
        r.d(e, "u", (function() {
            return X
        }
        ));
        var n = r(14)
          , o = r(8)
          , c = r(23)
          , h = r(22)
          , f = (r(40),
        r(76),
        r(31),
        r(58),
        r(60),
        r(39),
        r(89),
        r(151),
        r(49),
        r(59),
        r(50),
        r(61),
        r(265),
        r(55),
        r(56),
        r(32),
        r(33),
        r(15),
        r(266),
        r(29),
        r(34),
        r(90),
        r(41),
        r(196),
        r(75),
        r(197),
        r(198),
        r(42),
        r(1))
          , l = r(37);
        function d(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function y(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(r), !0).forEach((function(e) {
                    Object(c.a)(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function m(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return v(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return v(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, h = !1;
            return {
                s: function() {
                    r = r.call(t)
                },
                n: function() {
                    var t = r.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    h = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (h)
                            throw o
                    }
                }
            }
        }
        function v(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++)
                r[i] = t[i];
            return r
        }
        function w(t) {
            f.a.config.errorHandler && f.a.config.errorHandler(t)
        }
        function x(t) {
            return t.then((function(t) {
                return t.default || t
            }
            ))
        }
        function _(t) {
            return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
        }
        function O(t) {
            var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = m(t.$children || []);
            try {
                for (n.s(); !(e = n.n()).done; ) {
                    var o = e.value;
                    o.$fetch && r.push(o),
                    o.$children && O(o, r)
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
            return r
        }
        function E(t, e) {
            if (e || !t.options.__hasNuxtData) {
                var r = t.options._originDataFn || t.options.data || function() {
                    return {}
                }
                ;
                t.options._originDataFn = r,
                t.options.data = function() {
                    var data = r.call(this, this);
                    return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                    y(y({}, data), e)
                }
                ,
                t.options.__hasNuxtData = !0,
                t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
        }
        function k(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t,
            t.extendOptions = t.options) : (t = f.a.extend(t))._Ctor = t,
            !t.options.name && t.options.__file && (t.options.name = t.options.__file)),
            t
        }
        function $(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                return Object.keys(t[r]).map((function(o) {
                    return e && e.push(n),
                    t[r][o]
                }
                ))
            }
            )))
        }
        function S(t) {
            return $(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
        }
        function j(t, e) {
            return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                return Object.keys(t.components).reduce((function(n, o) {
                    return t.components[o] ? n.push(e(t.components[o], t.instances[o], t, o, r)) : delete t.components[o],
                    n
                }
                ), [])
            }
            )))
        }
        function A(t, e) {
            return Promise.all(j(t, function() {
                var t = Object(o.a)(regeneratorRuntime.mark((function t(r, n, o, c) {
                    var h, f;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof r || r.options) {
                                    t.next = 11;
                                    break
                                }
                                return t.prev = 1,
                                t.next = 4,
                                r();
                            case 4:
                                r = t.sent,
                                t.next = 11;
                                break;
                            case 7:
                                throw t.prev = 7,
                                t.t0 = t.catch(1),
                                t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (h = Date.now(),
                                (!(f = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || f + 6e4 < h) && (window.sessionStorage.setItem("nuxt-reload", h),
                                window.location.reload(!0))),
                                t.t0;
                            case 11:
                                return o.components[c] = r = k(r),
                                t.abrupt("return", "function" == typeof e ? e(r, n, o, c) : r);
                            case 13:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[1, 7]])
                }
                )));
                return function(e, r, n, o) {
                    return t.apply(this, arguments)
                }
            }()))
        }
        function R(t) {
            return P.apply(this, arguments)
        }
        function P() {
            return (P = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (e) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4,
                            A(e);
                        case 4:
                            return t.abrupt("return", y(y({}, e), {}, {
                                meta: $(e).map((function(t, r) {
                                    return y(y({}, t.options.meta), (e.matched[r] || {}).meta)
                                }
                                ))
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function C(t, e) {
            return T.apply(this, arguments)
        }
        function T() {
            return (T = Object(o.a)(regeneratorRuntime.mark((function t(e, r) {
                var o, c, f, d;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return e.context || (e.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: e,
                                payload: r.payload,
                                error: r.error,
                                base: e.router.options.base,
                                env: {
                                    baseURL: "https://lk.vulndetector.ru/"
                                }
                            },
                            r.req && (e.context.req = r.req),
                            r.res && (e.context.res = r.res),
                            r.ssrContext && (e.context.ssrContext = r.ssrContext),
                            e.context.redirect = function(t, path, r) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var o = Object(n.a)(path);
                                    if ("number" == typeof t || "undefined" !== o && "object" !== o || (r = path || {},
                                    path = t,
                                    o = Object(n.a)(path),
                                    t = 302),
                                    "object" === o && (path = e.router.resolve(path).route.fullPath),
                                    !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                                        throw path = Object(l.d)(path, r),
                                        window.location.assign(path),
                                        new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: path,
                                        query: r,
                                        status: t
                                    })
                                }
                            }
                            ,
                            e.context.nuxtState = window.__NUXT__),
                            t.next = 3,
                            Promise.all([R(r.route), R(r.from)]);
                        case 3:
                            o = t.sent,
                            c = Object(h.a)(o, 2),
                            f = c[0],
                            d = c[1],
                            r.route && (e.context.route = f),
                            r.from && (e.context.from = d),
                            r.error && (e.context.error = r.error),
                            e.context.next = r.next,
                            e.context._redirected = !1,
                            e.context._errored = !1,
                            e.context.isHMR = !1,
                            e.context.params = e.context.route.params || {},
                            e.context.query = e.context.route.query || {};
                        case 16:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function U(t, e, r) {
            return !t.length || e._redirected || e._errored || r && r.aborted ? Promise.resolve() : I(t[0], e).then((function() {
                return U(t.slice(1), e, r)
            }
            ))
        }
        function I(t, e) {
            var r;
            return (r = 2 === t.length ? new Promise((function(r) {
                t(e, (function(t, data) {
                    t && e.error(t),
                    r(data = data || {})
                }
                ))
            }
            )) : t(e)) && r instanceof Promise && "function" == typeof r.then ? r : Promise.resolve(r)
        }
        function L(base, t) {
            if ("hash" === t)
                return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var e = (path || "/") + window.location.search + window.location.hash;
            return Object(l.c)(e)
        }
        function D(t, e) {
            return function(t, e) {
                for (var r = new Array(t.length), i = 0; i < t.length; i++)
                    "object" === Object(n.a)(t[i]) && (r[i] = new RegExp("^(?:" + t[i].pattern + ")$",K(e)));
                return function(e, n) {
                    for (var path = "", data = e || {}, o = (n || {}).pretty ? Y : encodeURIComponent, c = 0; c < t.length; c++) {
                        var h = t[c];
                        if ("string" != typeof h) {
                            var f = data[h.name || "pathMatch"]
                              , l = void 0;
                            if (null == f) {
                                if (h.optional) {
                                    h.partial && (path += h.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + h.name + '" to be defined')
                            }
                            if (Array.isArray(f)) {
                                if (!h.repeat)
                                    throw new TypeError('Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                if (0 === f.length) {
                                    if (h.optional)
                                        continue;
                                    throw new TypeError('Expected "' + h.name + '" to not be empty')
                                }
                                for (var d = 0; d < f.length; d++) {
                                    if (l = o(f[d]),
                                    !r[c].test(l))
                                        throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '", but received `' + JSON.stringify(l) + "`");
                                    path += (0 === d ? h.prefix : h.delimiter) + l
                                }
                            } else {
                                if (l = h.asterisk ? H(f) : o(f),
                                !r[c].test(l))
                                    throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + l + '"');
                                path += h.prefix + l
                            }
                        } else
                            path += h
                    }
                    return path
                }
            }(function(t, e) {
                var r, n = [], o = 0, c = 0, path = "", h = e && e.delimiter || "/";
                for (; null != (r = M.exec(t)); ) {
                    var f = r[0]
                      , l = r[1]
                      , d = r.index;
                    if (path += t.slice(c, d),
                    c = d + f.length,
                    l)
                        path += l[1];
                    else {
                        var y = t[c]
                          , m = r[2]
                          , v = r[3]
                          , w = r[4]
                          , x = r[5]
                          , _ = r[6]
                          , O = r[7];
                        path && (n.push(path),
                        path = "");
                        var E = null != m && null != y && y !== m
                          , k = "+" === _ || "*" === _
                          , $ = "?" === _ || "*" === _
                          , S = r[2] || h
                          , pattern = w || x;
                        n.push({
                            name: v || o++,
                            prefix: m || "",
                            delimiter: S,
                            optional: $,
                            repeat: k,
                            partial: E,
                            asterisk: Boolean(O),
                            pattern: pattern ? z(pattern) : O ? ".*" : "[^" + F(S) + "]+?"
                        })
                    }
                }
                c < t.length && (path += t.substr(c));
                path && n.push(path);
                return n
            }(t, e), e)
        }
        function B(t, e) {
            var r = {}
              , n = y(y({}, t), e);
            for (var o in n)
                String(t[o]) !== String(e[o]) && (r[o] = !0);
            return r
        }
        function N(t) {
            var e;
            if (t.message || "string" == typeof t)
                e = t.message || t;
            else
                try {
                    e = JSON.stringify(t, null, 2)
                } catch (r) {
                    e = "[".concat(t.constructor.name, "]")
                }
            return y(y({}, t), {}, {
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [],
        window.onNuxtReady = function(t) {
            window.onNuxtReadyCbs.push(t)
        }
        ;
        var M = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function Y(t, e) {
            var r = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(r, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function H(t) {
            return Y(t, !0)
        }
        function F(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }
        function z(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }
        function K(t) {
            return t && t.sensitive ? "" : "i"
        }
        function W(t, e, r) {
            t.$options[e] || (t.$options[e] = []),
            t.$options[e].includes(r) || t.$options[e].push(r)
        }
        var V = l.b
          , J = (l.e,
        l.a);
        function X(t) {
            try {
                window.history.scrollRestoration = t
            } catch (t) {}
        }
    },
    112: function(t, e, r) {
        "use strict";
        t.exports = function(t, e) {
            return e || (e = {}),
            "string" != typeof (t = t && t.__esModule ? t.default : t) ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
            e.hash && (t += e.hash),
            /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
        }
    },
    118: function(t, e, r) {
        "use strict";
        var n = function(t, e=!0) {
            const r = e && t.headers ? t.headers["x-forwarded-proto"] : void 0
              , n = "string" == typeof r ? r.includes("https") : void 0;
            if (n)
                return !0;
            const o = t.connection ? t.connection.encrypted : void 0
              , c = void 0 !== o ? !0 === o : void 0;
            return !!c || void 0 === n && void 0 === c && void 0
        };
        const o = "undefined" != typeof location ? location : {
            origin: "",
            pathname: "/"
        };
        t.exports = function(t, e) {
            return t ? encodeURI("http" + (n(t) ? "s" : "") + "://" + (t.headers["x-forwarded-host"] || t.headers.host) + (e ? t.url : "")) : o.origin + (e ? o.pathname : "")
        }
    },
    119: function(t, e, r) {
        "use strict";
        r(31),
        r(58),
        r(60),
        r(39),
        r(61),
        r(89),
        r(49),
        r(59),
        r(50),
        r(15),
        r(29),
        r(34),
        r(90),
        r(41),
        r(32),
        r(42),
        r(109);
        var n = r(1);
        function o(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return c(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return c(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, h = !0, f = !1;
            return {
                s: function() {
                    r = r.call(t)
                },
                n: function() {
                    var t = r.next();
                    return h = t.done,
                    t
                },
                e: function(t) {
                    f = !0,
                    o = t
                },
                f: function() {
                    try {
                        h || null == r.return || r.return()
                    } finally {
                        if (f)
                            throw o
                    }
                }
            }
        }
        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++)
                r[i] = t[i];
            return r
        }
        var h = window.requestIdleCallback || function(t) {
            var e = Date.now();
            return setTimeout((function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }
            ), 1)
        }
          , f = window.cancelIdleCallback || function(t) {
            clearTimeout(t)
        }
          , l = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
            t.forEach((function(t) {
                var e = t.intersectionRatio
                  , link = t.target;
                e <= 0 || !link.__prefetch || link.__prefetch()
            }
            ))
        }
        ));
        e.a = {
            name: "NuxtLink",
            extends: n.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = h(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                f(this.handleId),
                this.__observed && (l.unobserve(this.$el),
                delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    l && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this),
                    l.observe(this.$el),
                    this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var t = navigator.connection;
                    return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                        return t.components.default
                    }
                    )).filter((function(t) {
                        return "function" == typeof t && !t.options && !t.__prefetched
                    }
                    ))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        l.unobserve(this.$el);
                        var t, e = o(this.getPrefetchComponents());
                        try {
                            for (e.s(); !(t = e.n()).done; ) {
                                var r = t.value
                                  , n = r();
                                n instanceof Promise && n.catch((function() {}
                                )),
                                r.__prefetched = !0
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                }
            }
        }
    },
    144: function(t, e, r) {
        "use strict";
        var n = {
            name: "ClientOnly",
            functional: !0,
            props: {
                placeholder: String,
                placeholderTag: {
                    type: String,
                    default: "div"
                }
            },
            render: function(t, e) {
                var r = e.parent
                  , n = e.slots
                  , o = e.props
                  , c = n()
                  , h = c.default;
                void 0 === h && (h = []);
                var f = c.placeholder;
                return r._isMounted ? h : (r.$once("hook:mounted", (function() {
                    r.$forceUpdate()
                }
                )),
                o.placeholderTag && (o.placeholder || f) ? t(o.placeholderTag, {
                    class: ["client-only-placeholder"]
                }, o.placeholder || f) : h.length > 0 ? h.map((function() {
                    return t(!1)
                }
                )) : t(!1))
            }
        };
        t.exports = n
    },
    148: function(t, e, r) {
        "use strict";
        var n = r(455);
        function o(t) {
            return null !== t && "object" === n(t)
        }
        function c(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "."
              , n = arguments.length > 3 ? arguments[3] : void 0;
            if (!o(e))
                return c(t, {}, r, n);
            var h = Object.assign({}, e);
            for (var f in t)
                if ("__proto__" !== f && "constructor" !== f) {
                    var l = t[f];
                    null != l && (n && n(h, f, l, r) || (Array.isArray(l) && Array.isArray(h[f]) ? h[f] = h[f].concat(l) : o(l) && o(h[f]) ? h[f] = c(l, h[f], (r ? "".concat(r, ".") : "") + f.toString(), n) : h[f] = l))
                }
            return h
        }
        function h(t) {
            return function() {
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return r.reduce((function(p, e) {
                    return c(p, e, "", t)
                }
                ), {})
            }
        }
        r(76),
        r(15),
        r(34);
        var f = h();
        f.fn = h((function(t, e, r, n) {
            if (void 0 !== t[e] && "function" == typeof r)
                return t[e] = r(t[e]),
                !0
        }
        )),
        f.arrayFn = h((function(t, e, r, n) {
            if (Array.isArray(t[e]) && "function" == typeof r)
                return t[e] = r(t[e]),
                !0
        }
        )),
        f.extend = h,
        t.exports = f
    },
    17: function(t, e, r) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var content = t(e);
                    return e[2] ? "@media ".concat(e[2], " {").concat(content, "}") : content
                }
                )).join("")
            }
            ,
            e.i = function(t, r, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                var o = {};
                if (n)
                    for (var i = 0; i < this.length; i++) {
                        var c = this[i][0];
                        null != c && (o[c] = !0)
                    }
                for (var h = 0; h < t.length; h++) {
                    var f = [].concat(t[h]);
                    n && o[f[0]] || (r && (f[2] ? f[2] = "".concat(r, " and ").concat(f[2]) : f[2] = r),
                    e.push(f))
                }
            }
            ,
            e
        }
    },
    18: function(t, e, r) {
        "use strict";
        function n(t, e) {
            for (var r = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i]
                  , c = o[0]
                  , h = {
                    id: t + ":" + i,
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
                n[c] ? n[c].parts.push(h) : r.push(n[c] = {
                    id: c,
                    parts: [h]
                })
            }
            return r
        }
        r.r(e),
        r.d(e, "default", (function() {
            return w
        }
        ));
        var o = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !o)
            throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var c = {}
          , head = o && (document.head || document.getElementsByTagName("head")[0])
          , h = null
          , f = 0
          , l = !1
          , d = function() {}
          , y = null
          , m = "data-vue-ssr-id"
          , v = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function w(t, e, r, o) {
            l = r,
            y = o || {};
            var h = n(t, e);
            return x(h),
            function(e) {
                for (var r = [], i = 0; i < h.length; i++) {
                    var o = h[i];
                    (f = c[o.id]).refs--,
                    r.push(f)
                }
                e ? x(h = n(t, e)) : h = [];
                for (i = 0; i < r.length; i++) {
                    var f;
                    if (0 === (f = r[i]).refs) {
                        for (var l = 0; l < f.parts.length; l++)
                            f.parts[l]();
                        delete c[f.id]
                    }
                }
            }
        }
        function x(t) {
            for (var i = 0; i < t.length; i++) {
                var e = t[i]
                  , r = c[e.id];
                if (r) {
                    r.refs++;
                    for (var n = 0; n < r.parts.length; n++)
                        r.parts[n](e.parts[n]);
                    for (; n < e.parts.length; n++)
                        r.parts.push(O(e.parts[n]));
                    r.parts.length > e.parts.length && (r.parts.length = e.parts.length)
                } else {
                    var o = [];
                    for (n = 0; n < e.parts.length; n++)
                        o.push(O(e.parts[n]));
                    c[e.id] = {
                        id: e.id,
                        refs: 1,
                        parts: o
                    }
                }
            }
        }
        function _() {
            var t = document.createElement("style");
            return t.type = "text/css",
            head.appendChild(t),
            t
        }
        function O(t) {
            var e, r, n = document.querySelector("style[" + m + '~="' + t.id + '"]');
            if (n) {
                if (l)
                    return d;
                n.parentNode.removeChild(n)
            }
            if (v) {
                var o = f++;
                n = h || (h = _()),
                e = $.bind(null, n, o, !1),
                r = $.bind(null, n, o, !0)
            } else
                n = _(),
                e = S.bind(null, n),
                r = function() {
                    n.parentNode.removeChild(n)
                }
                ;
            return e(t),
            function(n) {
                if (n) {
                    if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap)
                        return;
                    e(t = n)
                } else
                    r()
            }
        }
        var E, k = (E = [],
        function(t, e) {
            return E[t] = e,
            E.filter(Boolean).join("\n")
        }
        );
        function $(t, e, r, n) {
            var o = r ? "" : n.css;
            if (t.styleSheet)
                t.styleSheet.cssText = k(e, o);
            else {
                var c = document.createTextNode(o)
                  , h = t.childNodes;
                h[e] && t.removeChild(h[e]),
                h.length ? t.insertBefore(c, h[e]) : t.appendChild(c)
            }
        }
        function S(t, e) {
            var r = e.css
              , n = e.media
              , o = e.sourceMap;
            if (n && t.setAttribute("media", n),
            y.ssrId && t.setAttribute(m, e.id),
            o && (r += "\n/*# sourceURL=" + o.sources[0] + " */",
            r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
            t.styleSheet)
                t.styleSheet.cssText = r;
            else {
                for (; t.firstChild; )
                    t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(r))
            }
        }
    },
    202: function(t, e, r) {
        var content = r(289);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(18).default)("49569972", content, !0, {
            sourceMap: !1
        })
    },
    215: function(t, e, r) {
        "use strict";
        function n(t, e) {
            return e = e || {},
            new Promise((function(r, n) {
                var s = new XMLHttpRequest
                  , o = []
                  , u = {}
                  , a = function t() {
                    return {
                        ok: 2 == (s.status / 100 | 0),
                        statusText: s.statusText,
                        status: s.status,
                        url: s.responseURL,
                        text: function() {
                            return Promise.resolve(s.responseText)
                        },
                        json: function() {
                            return Promise.resolve(s.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([s.response]))
                        },
                        clone: t,
                        headers: {
                            keys: function() {
                                return o
                            },
                            entries: function() {
                                return o.map((function(t) {
                                    return [t, s.getResponseHeader(t)]
                                }
                                ))
                            },
                            get: function(t) {
                                return s.getResponseHeader(t)
                            },
                            has: function(t) {
                                return null != s.getResponseHeader(t)
                            }
                        }
                    }
                };
                for (var i in s.open(e.method || "get", t, !0),
                s.onload = function() {
                    s.getAllResponseHeaders().toLowerCase().replace(/^(.+?):/gm, (function(t, e) {
                        u[e] || o.push(u[e] = e)
                    }
                    )),
                    r(a())
                }
                ,
                s.onerror = n,
                s.withCredentials = "include" == e.credentials,
                e.headers)
                    s.setRequestHeader(i, e.headers[i]);
                s.send(e.body || null)
            }
            ))
        }
        r.d(e, "a", (function() {
            return n
        }
        ))
    },
    217: function(t, e, r) {
        "use strict";
        var n = function(t) {
            return function(t) {
                return !!t && "object" == typeof t
            }(t) && !function(t) {
                var e = Object.prototype.toString.call(t);
                return "[object RegExp]" === e || "[object Date]" === e || function(t) {
                    return t.$$typeof === o
                }(t)
            }(t)
        };
        var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
        function c(t, e) {
            return !1 !== e.clone && e.isMergeableObject(t) ? y((r = t,
            Array.isArray(r) ? [] : {}), t, e) : t;
            var r
        }
        function h(t, source, e) {
            return t.concat(source).map((function(element) {
                return c(element, e)
            }
            ))
        }
        function f(t) {
            return Object.keys(t).concat(function(t) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter((function(symbol) {
                    return Object.propertyIsEnumerable.call(t, symbol)
                }
                )) : []
            }(t))
        }
        function l(object, t) {
            try {
                return t in object
            } catch (t) {
                return !1
            }
        }
        function d(t, source, e) {
            var r = {};
            return e.isMergeableObject(t) && f(t).forEach((function(n) {
                r[n] = c(t[n], e)
            }
            )),
            f(source).forEach((function(n) {
                (function(t, e) {
                    return l(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))
                }
                )(t, n) || (l(t, n) && e.isMergeableObject(source[n]) ? r[n] = function(t, e) {
                    if (!e.customMerge)
                        return y;
                    var r = e.customMerge(t);
                    return "function" == typeof r ? r : y
                }(n, e)(t[n], source[n], e) : r[n] = c(source[n], e))
            }
            )),
            r
        }
        function y(t, source, e) {
            (e = e || {}).arrayMerge = e.arrayMerge || h,
            e.isMergeableObject = e.isMergeableObject || n,
            e.cloneUnlessOtherwiseSpecified = c;
            var r = Array.isArray(source);
            return r === Array.isArray(t) ? r ? e.arrayMerge(t, source, e) : d(t, source, e) : c(source, e)
        }
        y.all = function(t, e) {
            if (!Array.isArray(t))
                throw new Error("first argument should be an array");
            return t.reduce((function(t, r) {
                return y(t, r, e)
            }
            ), {})
        }
        ;
        var m = y;
        t.exports = m
    },
    218: function(t, e, r) {
        "use strict";
        var n = r(8)
          , o = (r(40),
        r(15),
        r(109),
        r(1))
          , c = r(0)
          , h = window.__NUXT__;
        function f() {
            if (!this._hydrated)
                return this.$fetch()
        }
        function l() {
            if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                var t;
                this._hydrated = !0,
                this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = h.fetch[this._fetchKey];
                if (data && data._error)
                    this.$fetchState.error = data._error;
                else
                    for (var e in data)
                        o.a.set(this.$data, e, data[e])
            }
        }
        function d() {
            var t = this;
            return this._fetchPromise || (this._fetchPromise = y.call(this).then((function() {
                delete t._fetchPromise
            }
            ))),
            this._fetchPromise
        }
        function y() {
            return m.apply(this, arguments)
        }
        function m() {
            return (m = Object(n.a)(regeneratorRuntime.mark((function t() {
                var e, r, n, o = this;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return this.$nuxt.nbFetching++,
                            this.$fetchState.pending = !0,
                            this.$fetchState.error = null,
                            this._hydrated = !1,
                            e = null,
                            r = Date.now(),
                            t.prev = 6,
                            t.next = 9,
                            this.$options.fetch.call(this);
                        case 9:
                            t.next = 15;
                            break;
                        case 11:
                            t.prev = 11,
                            t.t0 = t.catch(6),
                            e = Object(c.p)(t.t0);
                        case 15:
                            if (!((n = this._fetchDelay - (Date.now() - r)) > 0)) {
                                t.next = 19;
                                break
                            }
                            return t.next = 19,
                            new Promise((function(t) {
                                return setTimeout(t, n)
                            }
                            ));
                        case 19:
                            this.$fetchState.error = e,
                            this.$fetchState.pending = !1,
                            this.$fetchState.timestamp = Date.now(),
                            this.$nextTick((function() {
                                return o.$nuxt.nbFetching--
                            }
                            ));
                        case 23:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this, [[6, 11]])
            }
            )))).apply(this, arguments)
        }
        e.a = {
            beforeCreate: function() {
                Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200,
                o.a.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }),
                this.$fetch = d.bind(this),
                Object(c.a)(this, "created", l),
                Object(c.a)(this, "beforeMount", f))
            }
        }
    },
    224: function(t, e, r) {
        (function(t) {
            t.installComponents = function(component, t) {
                var r = "function" == typeof component.exports ? component.exports.extendOptions : component.options;
                for (var i in "function" == typeof component.exports && (r.components = component.exports.options.components),
                r.components = r.components || {},
                t)
                    r.components[i] = r.components[i] || t[i];
                r.functional && function(component, t) {
                    if (component.exports[e])
                        return;
                    component.exports[e] = !0;
                    var r = component.exports.render;
                    component.exports.render = function(e, n) {
                        return r(e, Object.assign({}, n, {
                            _c: function(e, a, b) {
                                return n._c(t[e] || e, a, b)
                            }
                        }))
                    }
                }(component, r.components)
            }
            ;
            var e = "_functionalComponents"
        }
        ).call(this, r(35))
    },
    225: function(t, e, r) {
        "use strict";
        r.r(e),
        function(t) {
            var e = r(14)
              , n = r(8)
              , o = (r(120),
            r(233),
            r(246),
            r(248),
            r(40),
            r(31),
            r(58),
            r(60),
            r(76),
            r(39),
            r(61),
            r(89),
            r(49),
            r(59),
            r(50),
            r(33),
            r(15),
            r(29),
            r(34),
            r(90),
            r(41),
            r(32),
            r(42),
            r(109),
            r(1))
              , c = r(215)
              , h = r(91)
              , f = r(0)
              , l = r(38)
              , d = r(218)
              , y = r(119);
            function m(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                        if (!t)
                            return;
                        if ("string" == typeof t)
                            return v(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r)
                            return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                            return v(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var i = 0
                          , n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0, h = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return c = t.done,
                        t
                    },
                    e: function(t) {
                        h = !0,
                        o = t
                    },
                    f: function() {
                        try {
                            c || null == r.return || r.return()
                        } finally {
                            if (h)
                                throw o
                        }
                    }
                }
            }
            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++)
                    r[i] = t[i];
                return r
            }
            o.a.__nuxt__fetch__mixin__ || (o.a.mixin(d.a),
            o.a.__nuxt__fetch__mixin__ = !0),
            o.a.component(y.a.name, y.a),
            o.a.component("NLink", y.a),
            t.fetch || (t.fetch = c.a);
            var w, x, _ = [], O = window.__NUXT__ || {}, E = O.config || {};
            E._app && (r.p = Object(f.v)(E._app.cdnURL, E._app.assetsPath)),
            Object.assign(o.a.config, {
                silent: !0,
                performance: !1
            });
            var k = o.a.config.errorHandler || console.error;
            function $(t, e, r) {
                for (var n = function(component) {
                    var t = function(component, t) {
                        if (!component || !component.options || !component.options[t])
                            return {};
                        var option = component.options[t];
                        if ("function" == typeof option) {
                            for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++)
                                r[n - 2] = arguments[n];
                            return option.apply(void 0, r)
                        }
                        return option
                    }(component, "transition", e, r) || {};
                    return "string" == typeof t ? {
                        name: t
                    } : t
                }, o = r ? Object(f.g)(r) : [], c = Math.max(t.length, o.length), h = [], l = function() {
                    var e = Object.assign({}, n(t[i]))
                      , r = Object.assign({}, n(o[i]));
                    Object.keys(e).filter((function(t) {
                        return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                    }
                    )).forEach((function(t) {
                        r[t] = e[t]
                    }
                    )),
                    h.push(r)
                }, i = 0; i < c; i++)
                    l();
                return h
            }
            function S(t, e, r) {
                return j.apply(this, arguments)
            }
            function j() {
                return (j = Object(n.a)(regeneratorRuntime.mark((function t(e, r, n) {
                    var o, c, h, l, d = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (this._routeChanged = Boolean(w.nuxt.err) || r.name !== e.name,
                                this._paramChanged = !this._routeChanged && r.path !== e.path,
                                this._queryChanged = !this._paramChanged && r.fullPath !== e.fullPath,
                                this._diffQuery = this._queryChanged ? Object(f.i)(e.query, r.query) : [],
                                (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                                t.prev = 5,
                                !this._queryChanged) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 9,
                                Object(f.r)(e, (function(t, e) {
                                    return {
                                        Component: t,
                                        instance: e
                                    }
                                }
                                ));
                            case 9:
                                o = t.sent,
                                o.some((function(t) {
                                    var n = t.Component
                                      , o = t.instance
                                      , c = n.options.watchQuery;
                                    return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                        return d._diffQuery[t]
                                    }
                                    )) : "function" == typeof c && c.apply(o, [e.query, r.query]))
                                }
                                )) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                            case 12:
                                n(),
                                t.next = 26;
                                break;
                            case 15:
                                if (t.prev = 15,
                                t.t0 = t.catch(5),
                                c = t.t0 || {},
                                h = c.statusCode || c.status || c.response && c.response.status || 500,
                                l = c.message || "",
                                !/^Loading( CSS)? chunk (\d)+ failed\./.test(l)) {
                                    t.next = 23;
                                    break
                                }
                                return window.location.reload(!0),
                                t.abrupt("return");
                            case 23:
                                this.error({
                                    statusCode: h,
                                    message: l
                                }),
                                this.$nuxt.$emit("routeChanged", e, r, c),
                                n();
                            case 26:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[5, 15]])
                }
                )))).apply(this, arguments)
            }
            function A(t, e) {
                return O.serverRendered && e && Object(f.b)(t, e),
                t._Ctor = t,
                t
            }
            function R(t, e, r, n) {
                var o = this
                  , c = ["auth"]
                  , l = !1;
                if (void 0 !== r && (c = [],
                (r = Object(f.s)(r)).options.middleware && (c = c.concat(r.options.middleware)),
                t.forEach((function(t) {
                    t.options.middleware && (c = c.concat(t.options.middleware))
                }
                ))),
                c = c.map((function(t) {
                    return "function" == typeof t ? t : ("function" != typeof h.a[t] && (l = !0,
                    o.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t
                    })),
                    h.a[t])
                }
                )),
                !l)
                    return Object(f.o)(c, e, n)
            }
            function P(t, e, r, n) {
                return C.apply(this, arguments)
            }
            function C() {
                return C = Object(n.a)(regeneratorRuntime.mark((function t(e, r, o, c) {
                    var h, d, y, v, x, O, E, k, S, j, A, P, C, T, U, I = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", o());
                            case 2:
                                return !1,
                                e === r ? (_ = [],
                                !0) : (h = [],
                                _ = Object(f.g)(r, h).map((function(t, i) {
                                    return Object(f.c)(r.matched[h[i]].path)(r.params)
                                }
                                ))),
                                d = !1,
                                y = function(path) {
                                    r.path === path.path && I.$loading.finish && I.$loading.finish(),
                                    r.path !== path.path && I.$loading.pause && I.$loading.pause(),
                                    d || (d = !0,
                                    o(path))
                                }
                                ,
                                t.next = 8,
                                Object(f.t)(w, {
                                    route: e,
                                    from: r,
                                    error: function(t) {
                                        c.aborted || w.nuxt.error.call(I, t)
                                    },
                                    next: y.bind(this)
                                });
                            case 8:
                                if (this._dateLastError = w.nuxt.dateErr,
                                this._hadError = Boolean(w.nuxt.err),
                                v = [],
                                (x = Object(f.g)(e, v)).length) {
                                    t.next = 33;
                                    break
                                }
                                return t.next = 15,
                                R.call(this, x, w.context, void 0, c);
                            case 15:
                                if (!d) {
                                    t.next = 17;
                                    break
                                }
                                return t.abrupt("return");
                            case 17:
                                if (!c.aborted) {
                                    t.next = 20;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 20:
                                return O = (l.a.options || l.a).layout,
                                t.next = 23,
                                this.loadLayout("function" == typeof O ? O.call(l.a, w.context) : O);
                            case 23:
                                return E = t.sent,
                                t.next = 26,
                                R.call(this, x, w.context, E, c);
                            case 26:
                                if (!d) {
                                    t.next = 28;
                                    break
                                }
                                return t.abrupt("return");
                            case 28:
                                if (!c.aborted) {
                                    t.next = 31;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 31:
                                return w.context.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                t.abrupt("return", o());
                            case 33:
                                return x.forEach((function(t) {
                                    t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData,
                                    t.options.fetch = t._Ctor.options.fetch)
                                }
                                )),
                                this.setTransitions($(x, e, r)),
                                t.prev = 35,
                                t.next = 38,
                                R.call(this, x, w.context, void 0, c);
                            case 38:
                                if (!d) {
                                    t.next = 40;
                                    break
                                }
                                return t.abrupt("return");
                            case 40:
                                if (!c.aborted) {
                                    t.next = 43;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 43:
                                if (!w.context._errored) {
                                    t.next = 45;
                                    break
                                }
                                return t.abrupt("return", o());
                            case 45:
                                return "function" == typeof (k = x[0].options.layout) && (k = k(w.context)),
                                t.next = 49,
                                this.loadLayout(k);
                            case 49:
                                return k = t.sent,
                                t.next = 52,
                                R.call(this, x, w.context, k, c);
                            case 52:
                                if (!d) {
                                    t.next = 54;
                                    break
                                }
                                return t.abrupt("return");
                            case 54:
                                if (!c.aborted) {
                                    t.next = 57;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 57:
                                if (!w.context._errored) {
                                    t.next = 59;
                                    break
                                }
                                return t.abrupt("return", o());
                            case 59:
                                S = !0,
                                t.prev = 60,
                                j = m(x),
                                t.prev = 62,
                                j.s();
                            case 64:
                                if ((A = j.n()).done) {
                                    t.next = 75;
                                    break
                                }
                                if ("function" == typeof (P = A.value).options.validate) {
                                    t.next = 68;
                                    break
                                }
                                return t.abrupt("continue", 73);
                            case 68:
                                return t.next = 70,
                                P.options.validate(w.context);
                            case 70:
                                if (S = t.sent) {
                                    t.next = 73;
                                    break
                                }
                                return t.abrupt("break", 75);
                            case 73:
                                t.next = 64;
                                break;
                            case 75:
                                t.next = 80;
                                break;
                            case 77:
                                t.prev = 77,
                                t.t0 = t.catch(62),
                                j.e(t.t0);
                            case 80:
                                return t.prev = 80,
                                j.f(),
                                t.finish(80);
                            case 83:
                                t.next = 89;
                                break;
                            case 85:
                                return t.prev = 85,
                                t.t1 = t.catch(60),
                                this.error({
                                    statusCode: t.t1.statusCode || "500",
                                    message: t.t1.message
                                }),
                                t.abrupt("return", o());
                            case 89:
                                if (S) {
                                    t.next = 92;
                                    break
                                }
                                return this.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                t.abrupt("return", o());
                            case 92:
                                return t.next = 94,
                                Promise.all(x.map(function() {
                                    var t = Object(n.a)(regeneratorRuntime.mark((function t(n, i) {
                                        var o, c, h, l, d, y, m, x, p;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (n._path = Object(f.c)(e.matched[v[i]].path)(e.params),
                                                    n._dataRefresh = !1,
                                                    o = n._path !== _[i],
                                                    I._routeChanged && o ? n._dataRefresh = !0 : I._paramChanged && o ? (c = n.options.watchParam,
                                                    n._dataRefresh = !1 !== c) : I._queryChanged && (!0 === (h = n.options.watchQuery) ? n._dataRefresh = !0 : Array.isArray(h) ? n._dataRefresh = h.some((function(t) {
                                                        return I._diffQuery[t]
                                                    }
                                                    )) : "function" == typeof h && (C || (C = Object(f.h)(e)),
                                                    n._dataRefresh = h.apply(C[i], [e.query, r.query]))),
                                                    I._hadError || !I._isMounted || n._dataRefresh) {
                                                        t.next = 6;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 6:
                                                    return l = [],
                                                    d = n.options.asyncData && "function" == typeof n.options.asyncData,
                                                    y = Boolean(n.options.fetch) && n.options.fetch.length,
                                                    m = d && y ? 30 : 45,
                                                    d && ((x = Object(f.q)(n.options.asyncData, w.context)).then((function(t) {
                                                        Object(f.b)(n, t),
                                                        I.$loading.increase && I.$loading.increase(m)
                                                    }
                                                    )),
                                                    l.push(x)),
                                                    I.$loading.manual = !1 === n.options.loading,
                                                    y && ((p = n.options.fetch(w.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)),
                                                    p.then((function(t) {
                                                        I.$loading.increase && I.$loading.increase(m)
                                                    }
                                                    )),
                                                    l.push(p)),
                                                    t.abrupt("return", Promise.all(l));
                                                case 14:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e, r) {
                                        return t.apply(this, arguments)
                                    }
                                }()));
                            case 94:
                                if (d) {
                                    t.next = 100;
                                    break
                                }
                                if (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                                !c.aborted) {
                                    t.next = 99;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 99:
                                o();
                            case 100:
                                t.next = 119;
                                break;
                            case 102:
                                if (t.prev = 102,
                                t.t2 = t.catch(35),
                                !c.aborted) {
                                    t.next = 107;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 107:
                                if ("ERR_REDIRECT" !== (T = t.t2 || {}).message) {
                                    t.next = 110;
                                    break
                                }
                                return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, r, T));
                            case 110:
                                return _ = [],
                                Object(f.k)(T),
                                "function" == typeof (U = (l.a.options || l.a).layout) && (U = U(w.context)),
                                t.next = 116,
                                this.loadLayout(U);
                            case 116:
                                this.error(T),
                                this.$nuxt.$emit("routeChanged", e, r, T),
                                o();
                            case 119:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[35, 102], [60, 85], [62, 77, 80, 83]])
                }
                ))),
                C.apply(this, arguments)
            }
            function T(t, r) {
                Object(f.d)(t, (function(t, r, n, c) {
                    return "object" !== Object(e.a)(t) || t.options || ((t = o.a.extend(t))._Ctor = t,
                    n.components[c] = t),
                    t
                }
                ))
            }
            function U(t) {
                var e = Boolean(this.$options.nuxt.err);
                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                var r = e ? (l.a.options || l.a).layout : t.matched[0].components.default.options.layout;
                "function" == typeof r && (r = r(w.context)),
                this.setLayout(r)
            }
            function I(t) {
                t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
            }
            function L(t, e) {
                var r = this;
                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                    var n = Object(f.h)(t)
                      , c = Object(f.g)(t)
                      , h = !1;
                    o.a.nextTick((function() {
                        n.forEach((function(t, i) {
                            if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                var e = t.constructor.options.data.call(t);
                                for (var r in e)
                                    o.a.set(t.$data, r, e[r]);
                                h = !0
                            }
                        }
                        )),
                        h && window.$nuxt.$nextTick((function() {
                            window.$nuxt.$emit("triggerScroll")
                        }
                        )),
                        I(r)
                    }
                    ))
                }
            }
            function D(t) {
                window.onNuxtReadyCbs.forEach((function(e) {
                    "function" == typeof e && e(t)
                }
                )),
                "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t),
                x.afterEach((function(e, r) {
                    o.a.nextTick((function() {
                        return t.$nuxt.$emit("routeChanged", e, r)
                    }
                    ))
                }
                ))
            }
            function B() {
                return B = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                    var r, c, h, l, d, y;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return w = e.app,
                                x = e.router,
                                r = new o.a(w),
                                c = function() {
                                    r.$mount("#__nuxt"),
                                    x.afterEach(T),
                                    x.afterEach(U.bind(r)),
                                    x.afterEach(L.bind(r)),
                                    o.a.nextTick((function() {
                                        D(r)
                                    }
                                    ))
                                }
                                ,
                                t.next = 6,
                                Promise.all((m = w.context.route,
                                Object(f.d)(m, function() {
                                    var t = Object(n.a)(regeneratorRuntime.mark((function t(e, r, n, o, c) {
                                        var h;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if ("function" != typeof e || e.options) {
                                                        t.next = 4;
                                                        break
                                                    }
                                                    return t.next = 3,
                                                    e();
                                                case 3:
                                                    e = t.sent;
                                                case 4:
                                                    return h = A(Object(f.s)(e), O.data ? O.data[c] : null),
                                                    n.components[o] = h,
                                                    t.abrupt("return", h);
                                                case 7:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e, r, n, o, c) {
                                        return t.apply(this, arguments)
                                    }
                                }())));
                            case 6:
                                if (h = t.sent,
                                r.setTransitions = r.$options.nuxt.setTransitions.bind(r),
                                h.length && (r.setTransitions($(h, x.currentRoute)),
                                _ = x.currentRoute.matched.map((function(t) {
                                    return Object(f.c)(t.path)(x.currentRoute.params)
                                }
                                ))),
                                r.$loading = {},
                                O.error && r.error(O.error),
                                x.beforeEach(S.bind(r)),
                                l = null,
                                d = P.bind(r),
                                x.beforeEach((function(t, e, r) {
                                    l && (l.aborted = !0),
                                    d(t, e, r, l = {
                                        aborted: !1
                                    })
                                }
                                )),
                                !O.serverRendered || !Object(f.n)(O.routePath, r.context.route.path)) {
                                    t.next = 17;
                                    break
                                }
                                return t.abrupt("return", c());
                            case 17:
                                return y = function() {
                                    T(x.currentRoute, x.currentRoute),
                                    U.call(r, x.currentRoute),
                                    I(r),
                                    c()
                                }
                                ,
                                t.next = 20,
                                new Promise((function(t) {
                                    return setTimeout(t, 0)
                                }
                                ));
                            case 20:
                                P.call(r, x.currentRoute, x.currentRoute, (function(path) {
                                    if (path) {
                                        var t = x.afterEach((function(e, r) {
                                            t(),
                                            y()
                                        }
                                        ));
                                        x.push(path, void 0, (function(t) {
                                            t && k(t)
                                        }
                                        ))
                                    } else
                                        y()
                                }
                                ), {
                                    aborted: !1
                                });
                            case 21:
                            case "end":
                                return t.stop()
                            }
                        var m
                    }
                    ), t)
                }
                ))),
                B.apply(this, arguments)
            }
            Object(l.b)(null, O.config).then((function(t) {
                return B.apply(this, arguments)
            }
            )).catch(k)
        }
        .call(this, r(35))
    },
    288: function(t, e, r) {
        "use strict";
        r(202)
    },
    289: function(t, e, r) {
        var n = r(17)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]),
        n.locals = {},
        t.exports = n
    },
    38: function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return Gt
        }
        )),
        r.d(e, "a", (function() {
            return R.a
        }
        ));
        var n = {};
        r.r(n),
        r.d(n, "Aside", (function() {
            return H
        }
        )),
        r.d(n, "Sidebar", (function() {
            return F
        }
        )),
        r.d(n, "Captcha", (function() {
            return z
        }
        )),
        r.d(n, "CompanyRequisites", (function() {
            return K
        }
        )),
        r.d(n, "ConfigurationEmailNorification", (function() {
            return W
        }
        )),
        r.d(n, "ConfigurationSiteVerification", (function() {
            return V
        }
        )),
        r.d(n, "PaymentCard", (function() {
            return J
        }
        )),
        r.d(n, "PaymentList", (function() {
            return X
        }
        ));
        r(31),
        r(39),
        r(55),
        r(56),
        r(33),
        r(32);
        var o = r(8)
          , c = r(23)
          , h = (r(40),
        r(49),
        r(50),
        r(15),
        r(29),
        r(75),
        r(1))
          , f = r(216)
          , l = r(144)
          , d = r.n(l)
          , y = r(73)
          , m = r.n(y)
          , v = (r(41),
        r(42),
        r(145))
          , w = r(37)
          , x = r(0);
        r(282);
        "scrollRestoration"in window.history && (Object(x.u)("manual"),
        window.addEventListener("beforeunload", (function() {
            Object(x.u)("auto")
        }
        )),
        window.addEventListener("load", (function() {
            Object(x.u)("manual")
        }
        )));
        function _(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function O(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? _(Object(r), !0).forEach((function(e) {
                    Object(c.a)(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        var E = function() {};
        h.a.use(v.a);
        var k = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(t, e, r) {
                var n = !1
                  , o = t !== e;
                r ? n = r : o && function(t) {
                    var e = Object(x.g)(t);
                    if (1 === e.length) {
                        var r = e[0].options;
                        return !1 !== (void 0 === r ? {} : r).scrollToTop
                    }
                    return e.some((function(t) {
                        var e = t.options;
                        return e && e.scrollToTop
                    }
                    ))
                }(t) && (n = {
                    x: 0,
                    y: 0
                });
                var c = window.$nuxt;
                return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function() {
                    return c.$emit("triggerScroll")
                }
                )),
                new Promise((function(e) {
                    c.$once("triggerScroll", (function() {
                        if (t.hash) {
                            var r = t.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (r = "#" + window.CSS.escape(r.substr(1)));
                            try {
                                var o = document.querySelector(r);
                                if (o) {
                                    var c;
                                    n = {
                                        selector: r
                                    };
                                    var h = Number(null === (c = getComputedStyle(o)["scroll-margin-top"]) || void 0 === c ? void 0 : c.replace("px", ""));
                                    h && (n.offset = {
                                        y: h
                                    })
                                }
                            } catch (t) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        e(n)
                    }
                    ))
                }
                ))
            },
            routes: [{
                path: "/document",
                component: function() {
                    return Object(x.m)(Promise.all([r.e(0), r.e(17)]).then(r.bind(null, 630)))
                },
                name: "document"
            }, {
                path: "/login",
                component: function() {
                    return Object(x.m)(r.e(19).then(r.bind(null, 631)))
                },
                name: "login"
            }, {
                path: "/auth/password-remind",
                component: function() {
                    return Object(x.m)(r.e(9).then(r.bind(null, 632)))
                },
                name: "auth-password-remind"
            }, {
                path: "/auth/register",
                component: function() {
                    return Object(x.m)(r.e(10).then(r.bind(null, 633)))
                },
                name: "auth-register"
            }, {
                path: "/dashboard/advanced",
                component: function() {
                    return Object(x.m)(r.e(11).then(r.bind(null, 634)))
                },
                name: "dashboard-advanced"
            }, {
                path: "/dashboard/configuration",
                component: function() {
                    return Object(x.m)(r.e(12).then(r.bind(null, 635)))
                },
                name: "dashboard-configuration"
            }, {
                path: "/dashboard/payment",
                component: function() {
                    return Object(x.m)(Promise.all([r.e(0), r.e(13)]).then(r.bind(null, 636)))
                },
                name: "dashboard-payment"
            }, {
                path: "/dashboard/recommendation",
                component: function() {
                    return Object(x.m)(r.e(14).then(r.bind(null, 637)))
                },
                name: "dashboard-recommendation"
            }, {
                path: "/dashboard/status",
                component: function() {
                    return Object(x.m)(Promise.all([r.e(0), r.e(23), r.e(15)]).then(r.bind(null, 638)))
                },
                name: "dashboard-status"
            }, {
                path: "/dashboard/status-back",
                component: function() {
                    return Object(x.m)(r.e(16).then(r.bind(null, 639)))
                },
                name: "dashboard-status-back"
            }, {
                path: "/user/password",
                component: function() {
                    return Object(x.m)(r.e(20).then(r.bind(null, 640)))
                },
                name: "user-password"
            }, {
                path: "/",
                component: function() {
                    return Object(x.m)(r.e(18).then(r.bind(null, 641)))
                },
                name: "index"
            }],
            fallback: !1
        };
        function $(t, e) {
            var base = e._app && e._app.basePath || k.base
              , r = new v.a(O(O({}, k), {}, {
                base: base
            }))
              , n = r.push;
            r.push = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E
                  , r = arguments.length > 2 ? arguments[2] : void 0;
                return n.call(this, t, e, r)
            }
            ;
            var o = r.resolve.bind(r);
            return r.resolve = function(t, e, r) {
                return "string" == typeof t && (t = Object(w.c)(t)),
                o(t, e, r)
            }
            ,
            r
        }
        var S = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {
                    type: String,
                    default: ""
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                }
            },
            render: function(t, e) {
                var r = e.parent
                  , data = e.data
                  , n = e.props
                  , o = r.$createElement;
                data.nuxtChild = !0;
                for (var c = r, h = r.$nuxt.nuxt.transitions, f = r.$nuxt.nuxt.defaultTransition, l = 0; r; )
                    r.$vnode && r.$vnode.data.nuxtChild && l++,
                    r = r.$parent;
                data.nuxtChildDepth = l;
                var d = h[l] || f
                  , y = {};
                j.forEach((function(t) {
                    void 0 !== d[t] && (y[t] = d[t])
                }
                ));
                var m = {};
                A.forEach((function(t) {
                    "function" == typeof d[t] && (m[t] = d[t].bind(c))
                }
                ));
                var v = m.beforeEnter;
                if (m.beforeEnter = function(t) {
                    if (window.$nuxt.$nextTick((function() {
                        window.$nuxt.$emit("triggerScroll")
                    }
                    )),
                    v)
                        return v.call(c, t)
                }
                ,
                !1 === d.css) {
                    var w = m.leave;
                    (!w || w.length < 2) && (m.leave = function(t, e) {
                        w && w.call(c, t),
                        c.$nextTick(e)
                    }
                    )
                }
                var x = o("routerView", data);
                return n.keepAlive && (x = o("keep-alive", {
                    props: n.keepAliveProps
                }, [x])),
                o("transition", {
                    props: y,
                    on: m
                }, [x])
            }
        }
          , j = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
          , A = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
          , R = r(48)
          , P = r(22)
          , C = (r(34),
        {
            name: "Nuxt",
            components: {
                NuxtChild: S,
                NuxtError: R.a
            },
            props: {
                nuxtChildKey: {
                    type: String,
                    default: void 0
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                },
                name: {
                    type: String,
                    default: "default"
                }
            },
            errorCaptured: function(t) {
                this.displayingNuxtError && (this.errorFromNuxtError = t,
                this.$forceUpdate())
            },
            computed: {
                routerViewKey: function() {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                        return this.nuxtChildKey || Object(x.c)(this.$route.matched[0].path)(this.$route.params);
                    var t = Object(P.a)(this.$route.matched, 1)[0];
                    if (!t)
                        return this.$route.path;
                    var e = t.components.default;
                    if (e && e.options) {
                        var r = e.options;
                        if (r.key)
                            return "function" == typeof r.key ? r.key(this.$route) : r.key
                    }
                    return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                }
            },
            beforeCreate: function() {
                h.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            render: function(t) {
                var e = this;
                return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                    return e.errorFromNuxtError = !1
                }
                )),
                t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                    props: {
                        to: "/"
                    }
                }, "Go back to home")])) : (this.displayingNuxtError = !0,
                this.$nextTick((function() {
                    return e.displayingNuxtError = !1
                }
                )),
                t(R.a, {
                    props: {
                        error: this.nuxt.err
                    }
                })) : t("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props
                })
            }
        })
          , T = (r(58),
        r(60),
        r(61),
        r(59),
        r(109),
        {
            name: "NuxtLoading",
            data: function() {
                return {
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }
            },
            computed: {
                left: function() {
                    return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                }
            },
            beforeDestroy: function() {
                this.clear()
            },
            methods: {
                clear: function() {
                    clearInterval(this._timer),
                    clearTimeout(this._throttle),
                    clearTimeout(this._hide),
                    this._timer = null
                },
                start: function() {
                    var t = this;
                    return this.clear(),
                    this.percent = 0,
                    this.reversed = !1,
                    this.skipTimerCount = 0,
                    this.canSucceed = !0,
                    this.throttle ? this._throttle = setTimeout((function() {
                        return t.startTimer()
                    }
                    ), this.throttle) : this.startTimer(),
                    this
                },
                set: function(t) {
                    return this.show = !0,
                    this.canSucceed = !0,
                    this.percent = Math.min(100, Math.max(0, Math.floor(t))),
                    this
                },
                get: function() {
                    return this.percent
                },
                increase: function(t) {
                    return this.percent = Math.min(100, Math.floor(this.percent + t)),
                    this
                },
                decrease: function(t) {
                    return this.percent = Math.max(0, Math.floor(this.percent - t)),
                    this
                },
                pause: function() {
                    return clearInterval(this._timer),
                    this
                },
                resume: function() {
                    return this.startTimer(),
                    this
                },
                finish: function() {
                    return this.percent = this.reversed ? 0 : 100,
                    this.hide(),
                    this
                },
                hide: function() {
                    var t = this;
                    return this.clear(),
                    this._hide = setTimeout((function() {
                        t.show = !1,
                        t.$nextTick((function() {
                            t.percent = 0,
                            t.reversed = !1
                        }
                        ))
                    }
                    ), 500),
                    this
                },
                fail: function(t) {
                    return this.canSucceed = !1,
                    this
                },
                startTimer: function() {
                    var t = this;
                    this.show || (this.show = !0),
                    void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                    this._timer = setInterval((function() {
                        t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1,
                        t.reversed = !t.reversed))
                    }
                    ), 100)
                }
            },
            render: function(t) {
                var e = t(!1);
                return this.show && (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                        "nuxt-progress-failed": !this.canSucceed
                    },
                    style: {
                        width: this.percent + "%",
                        left: this.left
                    }
                })),
                e
            }
        })
          , U = (r(288),
        r(26))
          , I = Object(U.a)(T, undefined, undefined, !1, null, null, null).exports
          , L = (r(290),
        r(382),
        r(390),
        r(407),
        r(412),
        r(414),
        r(416),
        r(418),
        r(420),
        r(422),
        r(424),
        r(426),
        r(219))
          , D = r(220);
        function B(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return N(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return N(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, h = !1;
            return {
                s: function() {
                    r = r.call(t)
                },
                n: function() {
                    var t = r.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    h = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (h)
                            throw o
                    }
                }
            }
        }
        function N(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++)
                r[i] = t[i];
            return r
        }
        var M = {
            _dashboard: Object(x.s)(L.a),
            _default: Object(x.s)(D.a)
        }
          , Y = {
            render: function(t, e) {
                var r = t("NuxtLoading", {
                    ref: "loading"
                })
                  , n = t(this.layout || "nuxt")
                  , o = t("div", {
                    domProps: {
                        id: "__layout"
                    },
                    key: this.layoutName
                }, [n])
                  , c = t("transition", {
                    props: {
                        name: "layout",
                        mode: "out-in"
                    },
                    on: {
                        beforeEnter: function(t) {
                            window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            }
                            ))
                        }
                    }
                }, [o]);
                return t("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [r, c])
            },
            data: function() {
                return {
                    isOnline: !0,
                    layout: null,
                    layoutName: "",
                    nbFetching: 0
                }
            },
            beforeCreate: function() {
                h.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created: function() {
                this.$root.$options.$nuxt = this,
                window.$nuxt = this,
                this.refreshOnlineStatus(),
                window.addEventListener("online", this.refreshOnlineStatus),
                window.addEventListener("offline", this.refreshOnlineStatus),
                this.error = this.nuxt.error,
                this.context = this.$options.context
            },
            mounted: function() {
                var t = this;
                return Object(o.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.$loading = t.$refs.loading;
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            watch: {
                "nuxt.err": "errorChanged"
            },
            computed: {
                isOffline: function() {
                    return !this.isOnline
                },
                isFetching: function() {
                    return this.nbFetching > 0
                },
                isPreview: function() {
                    return Boolean(this.$options.previewData)
                }
            },
            methods: {
                refreshOnlineStatus: function() {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                },
                refresh: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var r, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((r = Object(x.h)(t.$route)).length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return t.$loading.start(),
                                    n = r.map(function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e(r) {
                                            var p, n, o, component;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return p = [],
                                                        r.$options.fetch && r.$options.fetch.length && p.push(Object(x.q)(r.$options.fetch, t.context)),
                                                        r.$options.asyncData && p.push(Object(x.q)(r.$options.asyncData, t.context).then((function(t) {
                                                            for (var e in t)
                                                                h.a.set(r.$data, e, t[e])
                                                        }
                                                        ))),
                                                        e.next = 5,
                                                        Promise.all(p);
                                                    case 5:
                                                        p = [],
                                                        r.$fetch && p.push(r.$fetch()),
                                                        n = B(Object(x.e)(r.$vnode.componentInstance));
                                                        try {
                                                            for (n.s(); !(o = n.n()).done; )
                                                                component = o.value,
                                                                p.push(component.$fetch())
                                                        } catch (t) {
                                                            n.e(t)
                                                        } finally {
                                                            n.f()
                                                        }
                                                        return e.abrupt("return", Promise.all(p));
                                                    case 10:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()),
                                    e.prev = 5,
                                    e.next = 8,
                                    Promise.all(n);
                                case 8:
                                    e.next = 15;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(5),
                                    t.$loading.fail(e.t0),
                                    Object(x.k)(e.t0),
                                    t.error(e.t0);
                                case 15:
                                    t.$loading.finish();
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[5, 10]])
                    }
                    )))()
                },
                errorChanged: function() {
                    if (this.nuxt.err) {
                        this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                        this.$loading.finish && this.$loading.finish());
                        var t = (R.a.options || R.a).layout;
                        "function" == typeof t && (t = t(this.context)),
                        this.setLayout(t)
                    }
                },
                setLayout: function(t) {
                    return t && M["_" + t] || (t = "default"),
                    this.layoutName = t,
                    this.layout = M["_" + t],
                    this.layout
                },
                loadLayout: function(t) {
                    return t && M["_" + t] || (t = "default"),
                    Promise.resolve(M["_" + t])
                }
            },
            components: {
                NuxtLoading: I
            }
        }
          , H = (r(89),
        r(90),
        function() {
            return Promise.resolve().then(r.bind(null, 214)).then((function(t) {
                return Q(t.default || t)
            }
            ))
        }
        )
          , F = function() {
            return Promise.resolve().then(r.bind(null, 457)).then((function(t) {
                return Q(t.default || t)
            }
            ))
        }
          , z = function() {
            return r.e(3).then(r.bind(null, 597)).then((function(t) {
                return Q(t.default || t)
            }
            ))
        }
          , K = function() {
            return Promise.all([r.e(0), r.e(4)]).then(r.bind(null, 614)).then((function(t) {
                return Q(t.default || t)
            }
            ))
        }
          , W = function() {
            return r.e(5).then(r.bind(null, 616)).then((function(t) {
                return Q(t.default || t)
            }
            ))
        }
          , V = function() {
            return r.e(6).then(r.bind(null, 615)).then((function(t) {
                return Q(t.default || t)
            }
            ))
        }
          , J = function() {
            return r.e(7).then(r.bind(null, 617)).then((function(t) {
                return Q(t.default || t)
            }
            ))
        }
          , X = function() {
            return Promise.all([r.e(0), r.e(8)]).then(r.bind(null, 618)).then((function(t) {
                return Q(t.default || t)
            }
            ))
        };
        function Q(t) {
            if (!t || !t.functional)
                return t;
            var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
            return {
                render: function(r) {
                    var n = {}
                      , o = {};
                    for (var c in this.$attrs)
                        e.includes(c) ? o[c] = this.$attrs[c] : n[c] = this.$attrs[c];
                    return r(t, {
                        on: this.$listeners,
                        attrs: n,
                        props: o,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
            }
        }
        for (var G in n)
            h.a.component(G, n[G]),
            h.a.component("Lazy" + G, n[G]);
        var Z = r(92)
          , tt = r.n(Z)
          , et = r(14);
        r(76);
        function nt(t) {
            return null !== t && "object" === Object(et.a)(t)
        }
        function ot(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "."
              , n = arguments.length > 3 ? arguments[3] : void 0;
            if (!nt(e))
                return ot(t, {}, r, n);
            var o = Object.assign({}, e);
            for (var c in t)
                if ("__proto__" !== c && "constructor" !== c) {
                    var h = t[c];
                    null != h && (n && n(o, c, h, r) || (Array.isArray(h) && Array.isArray(o[c]) ? o[c] = o[c].concat(h) : nt(h) && nt(o[c]) ? o[c] = ot(h, o[c], (r ? "".concat(r, ".") : "") + c.toString(), n) : o[c] = h))
                }
            return o
        }
        function it(t) {
            return function() {
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return r.reduce((function(p, e) {
                    return ot(p, e, "", t)
                }
                ), {})
            }
        }
        var st = it();
        function at(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function ut(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? at(Object(r), !0).forEach((function(e) {
                    Object(c.a)(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : at(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function ct(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return ht(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return ht(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, h = !1;
            return {
                s: function() {
                    r = r.call(t)
                },
                n: function() {
                    var t = r.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    h = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (h)
                            throw o
                    }
                }
            }
        }
        function ht(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++)
                r[i] = t[i];
            return r
        }
        st.fn = it((function(t, e, r, n) {
            if (void 0 !== t[e] && "function" == typeof r)
                return t[e] = r(t[e]),
                !0
        }
        )),
        st.arrayFn = it((function(t, e, r, n) {
            if (Array.isArray(t[e]) && "function" == typeof r)
                return t[e] = r(t[e]),
                !0
        }
        )),
        st.extend = it;
        for (var ft = {
            setBaseURL: function(t) {
                this.defaults.baseURL = t
            },
            setHeader: function(t, e) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common", o = ct(Array.isArray(n) ? n : [n]);
                try {
                    for (o.s(); !(r = o.n()).done; ) {
                        var c = r.value;
                        e ? this.defaults.headers[c][t] = e : delete this.defaults.headers[c][t]
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            },
            setToken: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common"
                  , n = t ? (e ? e + " " : "") + t : null;
                this.setHeader("Authorization", n, r)
            },
            onRequest: function(t) {
                this.interceptors.request.use((function(e) {
                    return t(e) || e
                }
                ))
            },
            onResponse: function(t) {
                this.interceptors.response.use((function(e) {
                    return t(e) || e
                }
                ))
            },
            onRequestError: function(t) {
                this.interceptors.request.use(void 0, (function(e) {
                    return t(e) || Promise.reject(e)
                }
                ))
            },
            onResponseError: function(t) {
                this.interceptors.response.use(void 0, (function(e) {
                    return t(e) || Promise.reject(e)
                }
                ))
            },
            onError: function(t) {
                this.onRequestError(t),
                this.onResponseError(t)
            },
            create: function(t) {
                return yt(st(t, this.defaults))
            }
        }, lt = function() {
            var t = gt[pt];
            ft["$" + t] = function() {
                return this[t].apply(this, arguments).then((function(t) {
                    return t && t.data
                }
                ))
            }
        }, pt = 0, gt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; pt < gt.length; pt++)
            lt();
        var yt = function(t) {
            var e = tt.a.create(t);
            return e.CancelToken = tt.a.CancelToken,
            e.isCancel = tt.a.isCancel,
            function(t) {
                for (var e in ft)
                    t[e] = ft[e].bind(t)
            }(e),
            e.onRequest((function(t) {
                t.headers = ut(ut({}, e.defaults.headers.common), t.headers)
            }
            )),
            mt(e),
            e
        }
          , mt = function(t) {
            var e = {
                finish: function() {},
                start: function() {},
                fail: function() {},
                set: function() {}
            }
              , r = function() {
                var t = "undefined" != typeof window && window.$nuxt;
                return t && t.$loading && t.$loading.set ? t.$loading : e
            }
              , n = 0;
            t.onRequest((function(t) {
                t && !1 === t.progress || n++
            }
            )),
            t.onResponse((function(t) {
                t && t.config && !1 === t.config.progress || --n <= 0 && (n = 0,
                r().finish())
            }
            )),
            t.onError((function(t) {
                t && t.config && !1 === t.config.progress || (n--,
                tt.a.isCancel(t) ? n <= 0 && (n = 0,
                r().finish()) : (r().fail(),
                r().finish()))
            }
            ));
            var o = function(t) {
                if (n && t.total) {
                    var progress = 100 * t.loaded / (t.total * n);
                    r().set(Math.min(100, progress))
                }
            };
            t.defaults.onUploadProgress = o,
            t.defaults.onDownloadProgress = o
        }
          , vt = function(t, e) {
            var r = t.$config && t.$config.axios || {}
              , n = r.browserBaseURL || r.browserBaseUrl || r.baseURL || r.baseUrl || "https://lk.vulndetector.ru/";
            var o = yt({
                baseURL: n,
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    delete: {},
                    get: {},
                    head: {},
                    post: {},
                    put: {},
                    patch: {}
                }
            });
            t.$axios = o,
            e("axios", o)
        }
          , bt = r(149)
          , wt = r(146)
          , xt = r(91)
          , _t = r(118)
          , Ot = r(74)
          , Et = r(147)
          , kt = r(148)
          , $t = r(93);
        const St = t=>null == t
          , jt = t=>!St(t)
          , At = (t,a,b)=>Ct(a, t) === Ct(b, t);
        function Rt(u) {
            return u && u.length && new RegExp(["^\\/([a-zA-Z0-9@\\-%_~.:]", "[/a-zA-Z0-9@\\-%_~.:]*)?", "([?][^#]*)?(#[^#]*)?$"].join("")).test(u)
        }
        function Pt(t, e, r) {
            return t.matched.some((t=>Object.values(t.components).some((component=>component.options && component.options[e] === r))))
        }
        function Ct(path="", t) {
            let e = path.split("?")[0];
            return t && t.base && (e = e.replace(t.base, "/")),
            "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)),
            e = e.replace(/\/+/g, "/"),
            e
        }
        function Tt(t) {
            return "string" == typeof t ? t : JSON.stringify(t)
        }
        function Ut(t) {
            if ("string" == typeof t)
                try {
                    return JSON.parse(t)
                } catch (t) {}
            return t
        }
        function It(t, e) {
            if (!e || !t || "object" != typeof t)
                return t;
            if (e in t)
                return t[e];
            const r = Array.isArray(e) ? e : (e + "").split(".");
            let n = t;
            for (; r.length && n; )
                n = n[r.shift()];
            return n
        }
        function Lt(t, e) {
            return t && e && "string" == typeof t && !t.startsWith(e) ? e + " " + t : t
        }
        class Dt {
            constructor(t, e) {
                this.ctx = t,
                this.options = e,
                this._initState()
            }
            setUniversal(t, e) {
                return St(e) ? this.removeUniversal(t) : (this.setCookie(t, e),
                this.setLocalStorage(t, e),
                this.setState(t, e),
                e)
            }
            getUniversal(t) {
                let e;
                return St(e) && (e = this.getCookie(t)),
                St(e) && (e = this.getLocalStorage(t)),
                St(e) && (e = this.getState(t)),
                e
            }
            syncUniversal(t, e) {
                let r = this.getUniversal(t);
                return St(r) && jt(e) && (r = e),
                jt(r) && this.setUniversal(t, r),
                r
            }
            removeUniversal(t) {
                this.removeState(t),
                this.removeLocalStorage(t),
                this.removeCookie(t)
            }
            _initState() {
                if (Ot.set(this, "_state", {}),
                this._useVuex = this.options.vuex && !!this.ctx.store,
                this._useVuex) {
                    const t = {
                        namespaced: !0,
                        state: ()=>this.options.initialState,
                        mutations: {
                            SET(t, e) {
                                Ot.set(t, e.key, e.value)
                            }
                        }
                    };
                    this.ctx.store.registerModule(this.options.vuex.namespace, t, {
                        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
                    }),
                    this.state = this.ctx.store.state[this.options.vuex.namespace]
                } else
                    Ot.set(this, "state", {}),
                    console.warn("[AUTH] The Vuex Store is not activated. This might cause issues in auth module behavior, like redirects not working properly.To activate it, see https://nuxtjs.org/docs/2.x/directory-structure/store")
            }
            setState(t, e) {
                return "_" === t[0] ? Ot.set(this._state, t, e) : this._useVuex ? this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
                    key: t,
                    value: e
                }) : Ot.set(this.state, t, e),
                e
            }
            getState(t) {
                return "_" !== t[0] ? this.state[t] : this._state[t]
            }
            watchState(t, e) {
                if (this._useVuex)
                    return this.ctx.store.watch((e=>It(e[this.options.vuex.namespace], t)), e)
            }
            removeState(t) {
                this.setState(t, void 0)
            }
            setLocalStorage(t, e) {
                if (St(e))
                    return this.removeLocalStorage(t);
                if (!this.isLocalStorageEnabled())
                    return;
                const r = this.getPrefix() + t;
                try {
                    localStorage.setItem(r, Tt(e))
                } catch (t) {
                    if (!this.options.ignoreExceptions)
                        throw t
                }
                return e
            }
            getLocalStorage(t) {
                if (!this.isLocalStorageEnabled())
                    return;
                const e = this.getPrefix() + t;
                return Ut(localStorage.getItem(e))
            }
            removeLocalStorage(t) {
                if (!this.isLocalStorageEnabled())
                    return;
                const e = this.getPrefix() + t;
                localStorage.removeItem(e)
            }
            getCookies() {
                if (!this.isCookiesEnabled())
                    return;
                const t = document.cookie;
                return Et.parse(t || "") || {}
            }
            setCookie(t, e, r={}) {
                if (!this.options.cookie)
                    return;
                if (!this.isCookiesEnabled())
                    return;
                const n = (void 0 !== r.prefix ? r.prefix : this.options.cookie.prefix) + t
                  , o = Object.assign({}, this.options.cookie.options, r)
                  , c = Tt(e);
                St(e) && (o.maxAge = -1),
                "number" == typeof o.expires && (o.expires = new Date(Date.now() + 864e5 * o.expires));
                const h = Et.serialize(n, c, o);
                return document.cookie = h,
                e
            }
            getCookie(t) {
                if (!this.options.cookie)
                    return;
                if (!this.isCookiesEnabled())
                    return;
                const e = this.options.cookie.prefix + t
                  , r = this.getCookies();
                return Ut(r[e] ? decodeURIComponent(r[e]) : void 0)
            }
            removeCookie(t, e) {
                this.setCookie(t, void 0, e)
            }
            getPrefix() {
                if (!this.options.localStorage)
                    throw new Error("Cannot get prefix; localStorage is off");
                return this.options.localStorage.prefix
            }
            isLocalStorageEnabled() {
                if (!this.options.localStorage)
                    return !1;
                const t = "test";
                try {
                    return localStorage.setItem(t, t),
                    localStorage.removeItem(t),
                    !0
                } catch (t) {
                    return this.options.ignoreExceptions || console.warn("[AUTH] Local storage is enabled in config, but browser doesn't support it"),
                    !1
                }
            }
            isCookiesEnabled() {
                return !!this.options.cookie && (!!window.navigator.cookieEnabled || (console.warn("[AUTH] Cookies is enabled in config, but browser doesn't support it"),
                !1))
            }
        }
        class Bt {
            constructor(t, e) {
                this.strategies = {},
                this._errorListeners = [],
                this._redirectListeners = [],
                this.ctx = t,
                this.options = e;
                const r = new Dt(t,{
                    ...e,
                    initialState: {
                        user: null,
                        loggedIn: !1
                    }
                });
                this.$storage = r,
                this.$state = r.state
            }
            get state() {
                return this._stateWarnShown || (this._stateWarnShown = !0,
                console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn")),
                this.$state
            }
            get strategy() {
                return this.getStrategy()
            }
            getStrategy(t=!0) {
                if (t) {
                    if (!this.$state.strategy)
                        throw new Error("No strategy is set!");
                    if (!this.strategies[this.$state.strategy])
                        throw new Error("Strategy not supported: " + this.$state.strategy)
                }
                return this.strategies[this.$state.strategy]
            }
            get user() {
                return this.$state.user
            }
            get loggedIn() {
                return this.$state.loggedIn
            }
            get busy() {
                return this.$storage.getState("busy")
            }
            async init() {
                if (this.options.resetOnError && this.onError(((...t)=>{
                    ("function" != typeof this.options.resetOnError || this.options.resetOnError(...t)) && this.reset()
                }
                )),
                this.$storage.syncUniversal("strategy", this.options.defaultStrategy),
                !this.getStrategy(!1) && (this.$storage.setUniversal("strategy", this.options.defaultStrategy),
                !this.getStrategy(!1)))
                    return Promise.resolve();
                try {
                    await this.mounted()
                } catch (t) {
                    this.callOnError(t)
                } finally {
                    this.options.watchLoggedIn && this.$storage.watchState("loggedIn", (t=>{
                        Pt(this.ctx.route, "auth", !1) || this.redirect(t ? "home" : "logout")
                    }
                    ))
                }
            }
            getState(t) {
                return this._getStateWarnShown || (this._getStateWarnShown = !0,
                console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn")),
                this.$storage.getState(t)
            }
            registerStrategy(t, e) {
                this.strategies[t] = e
            }
            setStrategy(t) {
                if (t === this.$storage.getUniversal("strategy"))
                    return Promise.resolve();
                if (!this.strategies[t])
                    throw new Error(`Strategy ${t} is not defined!`);
                return this.reset(),
                this.$storage.setUniversal("strategy", t),
                this.mounted()
            }
            mounted(...t) {
                return this.getStrategy().mounted ? Promise.resolve(this.getStrategy().mounted(...t)).catch((t=>(this.callOnError(t, {
                    method: "mounted"
                }),
                Promise.reject(t)))) : this.fetchUserOnce()
            }
            loginWith(t, ...e) {
                return this.setStrategy(t).then((()=>this.login(...e)))
            }
            login(...t) {
                return this.getStrategy().login ? this.wrapLogin(this.getStrategy().login(...t)).catch((t=>(this.callOnError(t, {
                    method: "login"
                }),
                Promise.reject(t)))) : Promise.resolve()
            }
            fetchUser(...t) {
                return this.getStrategy().fetchUser ? Promise.resolve(this.getStrategy().fetchUser(...t)).catch((t=>(this.callOnError(t, {
                    method: "fetchUser"
                }),
                Promise.reject(t)))) : Promise.resolve()
            }
            logout(...t) {
                return this.getStrategy().logout ? Promise.resolve(this.getStrategy().logout(...t)).catch((t=>(this.callOnError(t, {
                    method: "logout"
                }),
                Promise.reject(t)))) : (this.reset(),
                Promise.resolve())
            }
            setUserToken(t, e) {
                return this.getStrategy().setUserToken ? Promise.resolve(this.getStrategy().setUserToken(t, e)).catch((t=>(this.callOnError(t, {
                    method: "setUserToken"
                }),
                Promise.reject(t)))) : (this.getStrategy().token.set(t),
                Promise.resolve())
            }
            reset(...t) {
                return this.getStrategy().reset || (this.setUser(!1),
                this.getStrategy().token.reset(),
                this.getStrategy().refreshToken.reset()),
                this.getStrategy().reset(...t)
            }
            refreshTokens() {
                return this.getStrategy().refreshController ? Promise.resolve(this.getStrategy().refreshController.handleRefresh()).catch((t=>(this.callOnError(t, {
                    method: "refreshTokens"
                }),
                Promise.reject(t)))) : Promise.resolve()
            }
            check(...t) {
                return this.getStrategy().check ? this.getStrategy().check(...t) : {
                    valid: !0
                }
            }
            fetchUserOnce(...t) {
                return this.$state.user ? Promise.resolve() : this.fetchUser(...t)
            }
            setUser(t) {
                this.$storage.setState("user", t);
                let e = {
                    valid: Boolean(t)
                };
                e.valid && (e = this.check()),
                this.$storage.setState("loggedIn", e.valid)
            }
            request(t, e={}) {
                const r = "object" == typeof e ? Object.assign({}, e, t) : t;
                if ("" === r.baseURL && (r.baseURL = _t(this.ctx.req)),
                this.ctx.app.$axios)
                    return this.ctx.app.$axios.request(r).catch((t=>(this.callOnError(t, {
                        method: "request"
                    }),
                    Promise.reject(t))));
                console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file")
            }
            requestWith(t, e, r) {
                const n = this.getStrategy().token.get()
                  , o = Object.assign({}, r, e)
                  , c = this.strategies[t].options.token.name || "Authorization";
                return o.headers || (o.headers = {}),
                !o.headers[c] && jt(n) && n && "string" == typeof n && (o.headers[c] = n),
                this.request(o)
            }
            wrapLogin(t) {
                return this.$storage.setState("busy", !0),
                this.error = null,
                Promise.resolve(t).then((t=>(this.$storage.setState("busy", !1),
                t))).catch((t=>(this.$storage.setState("busy", !1),
                Promise.reject(t))))
            }
            onError(t) {
                this._errorListeners.push(t)
            }
            callOnError(t, e={}) {
                this.error = t;
                for (const r of this._errorListeners)
                    r(t, e)
            }
            redirect(t, e=!1) {
                if (!this.options.redirect)
                    return;
                const r = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
                let n = this.options.redirect[t];
                if (n) {
                    if (this.options.rewriteRedirects && ("login" === t && Rt(r) && !At(this.ctx, n, r) && this.$storage.setUniversal("redirect", r),
                    "home" === t)) {
                        const t = this.$storage.getUniversal("redirect");
                        this.$storage.setUniversal("redirect", null),
                        Rt(t) && (n = t)
                    }
                    n = this.callOnRedirect(n, r) || n,
                    At(this.ctx, n, r) || (e ? (Rt(n) && !n.includes(this.ctx.base) && (n = Ct("/" + this.ctx.base + "/" + n)),
                    window.location.replace(n)) : this.ctx.redirect(n, this.ctx.query))
                }
            }
            onRedirect(t) {
                this._redirectListeners.push(t)
            }
            callOnRedirect(t, e) {
                for (const r of this._redirectListeners)
                    t = r(t, e) || t;
                return t
            }
            hasScope(t) {
                const e = this.$state.user && It(this.$state.user, this.options.scopeKey);
                return !!e && (Array.isArray(e) ? e.includes(t) : Boolean(It(e, t)))
            }
        }
        Error;
        class Nt extends Error {
            constructor() {
                super("Both token and refresh token have expired. Your request was aborted."),
                this.name = "ExpiredAuthSessionError"
            }
        }
        var Mt, qt;
        (qt = Mt || (Mt = {})).UNKNOWN = "UNKNOWN",
        qt.VALID = "VALID",
        qt.EXPIRED = "EXPIRED";
        class Yt {
            constructor(t, e) {
                this._status = this._calculate(t, e)
            }
            unknown() {
                return Mt.UNKNOWN === this._status
            }
            valid() {
                return Mt.VALID === this._status
            }
            expired() {
                return Mt.EXPIRED === this._status
            }
            _calculate(t, e) {
                const r = Date.now();
                try {
                    if (!t || !e)
                        return Mt.UNKNOWN
                } catch (t) {
                    return Mt.UNKNOWN
                }
                return r < (e -= 500) ? Mt.VALID : Mt.EXPIRED
            }
        }
        class Ht {
            constructor(t, e) {
                this.scheme = t,
                this.axios = e,
                this.interceptor = null
            }
            setHeader(t) {
                this.scheme.options.token.global && this.axios.setHeader(this.scheme.options.token.name, t)
            }
            clearHeader() {
                this.scheme.options.token.global && this.axios.setHeader(this.scheme.options.token.name, !1)
            }
            initializeRequestInterceptor(t) {
                this.interceptor = this.axios.interceptors.request.use((async e=>{
                    if (!this._needToken(e) || e.url === t)
                        return e;
                    const {valid: r, tokenExpired: n, refreshTokenExpired: o, isRefreshable: c} = this.scheme.check(!0);
                    let h = r;
                    if (o)
                        throw this.scheme.reset(),
                        new Nt;
                    if (n) {
                        if (!c)
                            throw this.scheme.reset(),
                            new Nt;
                        h = await this.scheme.refreshTokens().then((()=>!0)).catch((()=>{
                            throw this.scheme.reset(),
                            new Nt
                        }
                        ))
                    }
                    const f = this.scheme.token.get();
                    if (!h) {
                        if (!f && this._requestHasAuthorizationHeader(e))
                            throw new Nt;
                        return e
                    }
                    return this._getUpdatedRequestConfig(e, f)
                }
                ))
            }
            reset() {
                this.axios.interceptors.request.eject(this.interceptor),
                this.interceptor = null
            }
            _needToken(t) {
                const e = this.scheme.options;
                return e.token.global || Object.values(e.endpoints).some((e=>"object" == typeof e ? e.url === t.url : e === t.url))
            }
            _getUpdatedRequestConfig(t, e) {
                return "string" == typeof e && (t.headers[this.scheme.options.token.name] = e),
                t
            }
            _requestHasAuthorizationHeader(t) {
                return !!t.headers.common[this.scheme.options.token.name]
            }
        }
        class Ft {
            constructor(t, e) {
                this.scheme = t,
                this.$storage = e
            }
            get() {
                const t = this.scheme.options.token.prefix + this.scheme.name;
                return this.$storage.getUniversal(t)
            }
            set(t) {
                const e = Lt(t, this.scheme.options.token.type);
                return this._setToken(e),
                this._updateExpiration(e),
                "string" == typeof e && this.scheme.requestHandler.setHeader(e),
                e
            }
            sync() {
                const t = this._syncToken();
                return this._syncExpiration(),
                "string" == typeof t && this.scheme.requestHandler.setHeader(t),
                t
            }
            reset() {
                this.scheme.requestHandler.clearHeader(),
                this._setToken(!1),
                this._setExpiration(!1)
            }
            status() {
                return new Yt(this.get(),this._getExpiration())
            }
            _getExpiration() {
                const t = this.scheme.options.token.expirationPrefix + this.scheme.name;
                return this.$storage.getUniversal(t)
            }
            _setExpiration(t) {
                const e = this.scheme.options.token.expirationPrefix + this.scheme.name;
                return this.$storage.setUniversal(e, t)
            }
            _syncExpiration() {
                const t = this.scheme.options.token.expirationPrefix + this.scheme.name;
                return this.$storage.syncUniversal(t)
            }
            _updateExpiration(t) {
                let e;
                const r = Date.now()
                  , n = 1e3 * Number(this.scheme.options.token.maxAge)
                  , o = n ? r + n : 0;
                try {
                    e = 1e3 * $t(t + "").exp || o
                } catch (t) {
                    if (e = o,
                    !t || "InvalidTokenError" !== t.name)
                        throw t
                }
                return this._setExpiration(e || !1)
            }
            _setToken(t) {
                const e = this.scheme.options.token.prefix + this.scheme.name;
                return this.$storage.setUniversal(e, t)
            }
            _syncToken() {
                const t = this.scheme.options.token.prefix + this.scheme.name;
                return this.$storage.syncUniversal(t)
            }
        }
        class zt {
            constructor(t, ...e) {
                this.$auth = t,
                this.options = e.reduce(((p,t)=>kt(p, t)), {})
            }
            get name() {
                return this.options.name
            }
        }
        const Kt = {
            name: "local",
            endpoints: {
                login: {
                    url: "/api/auth/login",
                    method: "post"
                },
                logout: {
                    url: "/api/auth/logout",
                    method: "post"
                },
                user: {
                    url: "/api/auth/user",
                    method: "get"
                }
            },
            token: {
                property: "token",
                type: "Bearer",
                name: "Authorization",
                maxAge: 1800,
                global: !0,
                required: !0,
                prefix: "_token.",
                expirationPrefix: "_token_expiration."
            },
            user: {
                property: "user",
                autoFetch: !0
            },
            clientId: !1,
            grantType: !1,
            scope: !1
        };
        class Wt extends zt {
            constructor(t, e, ...r) {
                super(t, e, ...r, Kt),
                this.token = new Ft(this,this.$auth.$storage),
                this.requestHandler = new Ht(this,this.$auth.ctx.$axios)
            }
            check(t=!1) {
                const e = {
                    valid: !1,
                    tokenExpired: !1
                };
                if (!this.token.sync())
                    return e;
                if (!t)
                    return e.valid = !0,
                    e;
                return this.token.status().expired() ? (e.tokenExpired = !0,
                e) : (e.valid = !0,
                e)
            }
            mounted({tokenCallback: t=(()=>this.$auth.reset()), refreshTokenCallback: e}={}) {
                const {tokenExpired: r, refreshTokenExpired: n} = this.check(!0);
                return n && "function" == typeof e ? e() : r && "function" == typeof t && t(),
                this.initializeRequestInterceptor(),
                this.$auth.fetchUserOnce()
            }
            async login(t, {reset: e=!0}={}) {
                if (!this.options.endpoints.login)
                    return;
                e && this.$auth.reset({
                    resetInterceptor: !1
                }),
                this.options.clientId && (t.data.client_id = this.options.clientId),
                this.options.grantType && (t.data.grant_type = this.options.grantType),
                this.options.scope && (t.data.scope = this.options.scope);
                const r = await this.$auth.request(t, this.options.endpoints.login);
                return this.updateTokens(r),
                this.requestHandler.interceptor || this.initializeRequestInterceptor(),
                this.options.user.autoFetch && await this.fetchUser(),
                r
            }
            setUserToken(t) {
                return this.token.set(t),
                this.fetchUser()
            }
            fetchUser(t) {
                return this.check().valid ? this.options.endpoints.user ? this.$auth.requestWith(this.name, t, this.options.endpoints.user).then((t=>{
                    const e = It(t.data, this.options.user.property);
                    if (!e) {
                        const t = new Error(`User Data response does not contain field ${this.options.user.property}`);
                        return Promise.reject(t)
                    }
                    return this.$auth.setUser(e),
                    t
                }
                )).catch((t=>(this.$auth.callOnError(t, {
                    method: "fetchUser"
                }),
                Promise.reject(t)))) : (this.$auth.setUser({}),
                Promise.resolve()) : Promise.resolve()
            }
            async logout(t={}) {
                return this.options.endpoints.logout && await this.$auth.requestWith(this.name, t, this.options.endpoints.logout).catch((()=>{}
                )),
                this.$auth.reset()
            }
            reset({resetInterceptor: t=!0}={}) {
                this.$auth.setUser(!1),
                this.token.reset(),
                t && this.requestHandler.reset()
            }
            updateTokens(t) {
                const e = !this.options.token.required || It(t.data, this.options.token.property);
                this.token.set(e)
            }
            initializeRequestInterceptor() {
                this.requestHandler.initializeRequestInterceptor()
            }
        }
        xt.a.auth = async t=>{
            if (Pt(t.route, "auth", !1))
                return;
            const e = function(t, e=[]) {
                return [].concat(...t.matched.map((function(t, r) {
                    return Object.keys(t.components).map((function(n) {
                        return e.push(r),
                        t.components[n]
                    }
                    ))
                }
                )))
            }(t.route, []);
            if (!e.length)
                return;
            const {login: r, callback: n} = t.$auth.options.redirect
              , o = Pt(t.route, "auth", "guest")
              , c = e=>Ct(t.route.path, t) === Ct(e, t);
            if (t.$auth.$state.loggedIn) {
                const {tokenExpired: e, refreshTokenExpired: n, isRefreshable: h} = t.$auth.check(!0);
                if ((!r || c(r) || o) && t.$auth.redirect("home"),
                n)
                    t.$auth.reset();
                else if (e)
                    if (h)
                        try {
                            await t.$auth.refreshTokens()
                        } catch (e) {
                            t.$auth.reset()
                        }
                    else
                        t.$auth.reset()
            } else
                o || n && c(n) || t.$auth.redirect("login")
        }
        ;
        var Vt = function(t, e) {
            var r = new Bt(t,{
                resetOnError: !1,
                ignoreExceptions: !1,
                scopeKey: "scope",
                rewriteRedirects: !0,
                fullPathRedirect: !1,
                watchLoggedIn: !0,
                redirect: {
                    login: "/login",
                    logout: "/",
                    home: "/",
                    callback: "/login"
                },
                vuex: {
                    namespace: "auth"
                },
                cookie: {
                    prefix: "auth.",
                    options: {
                        path: "/"
                    }
                },
                localStorage: {
                    prefix: "auth."
                },
                defaultStrategy: "local"
            });
            return r.registerStrategy("local", new Wt(r,{
                endpoints: {
                    login: {
                        url: "/api/auth/login",
                        method: "post",
                        propertyName: "token"
                    },
                    user: {
                        url: "/api/user/profile",
                        method: "get",
                        propertyName: !1,
                        autoFetch: !0
                    },
                    logout: !1
                },
                name: "local"
            })),
            e("auth", r),
            t.$auth = r,
            r.init().catch((function(t) {
                t instanceof Nt || console.error("[ERROR] [AUTH]", t)
            }
            ))
        };
        function Jt(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Xt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Jt(Object(r), !0).forEach((function(e) {
                    Object(c.a)(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Jt(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        h.a.component(d.a.name, d.a),
        h.a.component(m.a.name, Xt(Xt({}, m.a), {}, {
            render: function(t, e) {
                return m.a._warned || (m.a._warned = !0,
                console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),
                m.a.render(t, e)
            }
        })),
        h.a.component(S.name, S),
        h.a.component("NChild", S),
        h.a.component(C.name, C),
        Object.defineProperty(h.a.prototype, "$nuxt", {
            get: function() {
                var t = this.$root ? this.$root.$options.$nuxt : null;
                return t || "undefined" == typeof window ? t : window.$nuxt
            },
            configurable: !0
        }),
        h.a.use(f.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var Qt = {
            name: "page",
            mode: "out-in",
            appear: !0,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };
        function Gt(t) {
            return Zt.apply(this, arguments)
        }
        function Zt() {
            return Zt = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                var r, n, c, f, l, path, d, y = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return d = function(t, e) {
                                if (!t)
                                    throw new Error("inject(key, value) has no key provided");
                                if (void 0 === e)
                                    throw new Error("inject('".concat(t, "', value) has no value provided"));
                                c[t = "$" + t] = e,
                                c.context[t] || (c.context[t] = e);
                                var r = "__nuxt_" + t + "_installed__";
                                h.a[r] || (h.a[r] = !0,
                                h.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(h.a.prototype, t) || Object.defineProperty(h.a.prototype, t, {
                                        get: function() {
                                            return this.$root.$options[t]
                                        }
                                    })
                                }
                                )))
                            }
                            ,
                            r = y.length > 1 && void 0 !== y[1] ? y[1] : {},
                            null,
                            t.next = 5,
                            $(0, r);
                        case 5:
                            return n = t.sent,
                            c = Xt({
                                head: {
                                    titleTemplate: "%s - инструмент для постоянной проверки ИТ систем на открытые уязвимости",
                                    title: "Детектор уязвимостей",
                                    htmlAttrs: {
                                        lang: "ru"
                                    },
                                    script: [{
                                        hid: "stripe",
                                        src: "https://checkout.cloudpayments.ru/checkout.js",
                                        defer: !0
                                    }],
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1"
                                    }, {
                                        hid: "description",
                                        name: "description",
                                        content: ""
                                    }, {
                                        name: "format-detection",
                                        content: "telephone=no"
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/favicon.png"
                                    }],
                                    style: []
                                },
                                router: n,
                                nuxt: {
                                    defaultTransition: Qt,
                                    transitions: [Qt],
                                    setTransitions: function(t) {
                                        return Array.isArray(t) || (t = [t]),
                                        t = t.map((function(t) {
                                            return t = t ? "string" == typeof t ? Object.assign({}, Qt, {
                                                name: t
                                            }) : Object.assign({}, Qt, t) : Qt
                                        }
                                        )),
                                        this.$options.nuxt.transitions = t,
                                        t
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(t) {
                                        t = t || null,
                                        c.context._errored = Boolean(t),
                                        t = t ? Object(x.p)(t) : null;
                                        var r = c.nuxt;
                                        return this && (r = this.nuxt || this.$options.nuxt),
                                        r.dateErr = Date.now(),
                                        r.err = t,
                                        e && (e.nuxt.error = t),
                                        t
                                    }
                                }
                            }, Y),
                            f = e ? e.next : function(t) {
                                return c.router.push(t)
                            }
                            ,
                            e ? l = n.resolve(e.url).route : (path = Object(x.f)(n.options.base, n.options.mode),
                            l = n.resolve(path).route),
                            t.next = 11,
                            Object(x.t)(c, {
                                route: l,
                                next: f,
                                error: c.nuxt.error.bind(c),
                                payload: e ? e.payload : void 0,
                                req: e ? e.req : void 0,
                                res: e ? e.res : void 0,
                                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                beforeSerializeFns: e ? e.beforeSerializeFns : void 0,
                                ssrContext: e
                            });
                        case 11:
                            d("config", r),
                            c.context.enablePreview = function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                c.previewData = Object.assign({}, t),
                                d("preview", t)
                            }
                            ,
                            t.next = 16;
                            break;
                        case 16:
                            if ("function" != typeof vt) {
                                t.next = 19;
                                break
                            }
                            return t.next = 19,
                            vt(c.context, d);
                        case 19:
                            if ("function" != typeof bt.a) {
                                t.next = 22;
                                break
                            }
                            return t.next = 22,
                            Object(bt.a)(c.context, d);
                        case 22:
                            if ("function" != typeof wt.a) {
                                t.next = 25;
                                break
                            }
                            return t.next = 25,
                            Object(wt.a)(c.context, d);
                        case 25:
                            if ("function" != typeof Vt) {
                                t.next = 28;
                                break
                            }
                            return t.next = 28,
                            Vt(c.context, d);
                        case 28:
                            return c.context.enablePreview = function() {
                                console.warn("You cannot call enablePreview() outside a plugin.")
                            }
                            ,
                            t.next = 31,
                            new Promise((function(t, e) {
                                if (!n.resolve(c.context.route.fullPath).route.matched.length)
                                    return t();
                                n.replace(c.context.route.fullPath, t, (function(r) {
                                    if (!r._isRouter)
                                        return e(r);
                                    if (2 !== r.type)
                                        return t();
                                    var h = n.afterEach(function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e(r, n) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 3,
                                                        Object(x.j)(r);
                                                    case 3:
                                                        c.context.route = e.sent,
                                                        c.context.params = r.params || {},
                                                        c.context.query = r.query || {},
                                                        h(),
                                                        t();
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t, r) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }
                                ))
                            }
                            ));
                        case 31:
                            return t.abrupt("return", {
                                app: c,
                                router: n
                            });
                        case 32:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            Zt.apply(this, arguments)
        }
    },
    439: function(t, e, r) {
        "use strict";
        (function(t) {
            var n = r(440)
              , o = r(441)
              , c = r(442);
            function h() {
                return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function f(t, e) {
                if (h() < e)
                    throw new RangeError("Invalid typed array length");
                return l.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = l.prototype : (null === t && (t = new l(e)),
                t.length = e),
                t
            }
            function l(t, e, r) {
                if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
                    return new l(t,e,r);
                if ("number" == typeof t) {
                    if ("string" == typeof e)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return m(this, t)
                }
                return d(this, t, e, r)
            }
            function d(t, e, r, n) {
                if ("number" == typeof e)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
                    if (e.byteLength,
                    r < 0 || e.byteLength < r)
                        throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < r + (n || 0))
                        throw new RangeError("'length' is out of bounds");
                    e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e,r) : new Uint8Array(e,r,n);
                    l.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = l.prototype : t = v(t, e);
                    return t
                }(t, e, r, n) : "string" == typeof e ? function(t, e, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!l.isEncoding(r))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | x(e, r);
                    t = f(t, n);
                    var o = t.write(e, r);
                    o !== n && (t = t.slice(0, o));
                    return t
                }(t, e, r) : function(t, e) {
                    if (l.isBuffer(e)) {
                        var r = 0 | w(e.length);
                        return 0 === (t = f(t, r)).length || e.copy(t, 0, 0, r),
                        t
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                            return "number" != typeof e.length || (n = e.length) != n ? f(t, 0) : v(t, e);
                        if ("Buffer" === e.type && c(e.data))
                            return v(t, e.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, e)
            }
            function y(t) {
                if ("number" != typeof t)
                    throw new TypeError('"size" argument must be a number');
                if (t < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function m(t, e) {
                if (y(e),
                t = f(t, e < 0 ? 0 : 0 | w(e)),
                !l.TYPED_ARRAY_SUPPORT)
                    for (var i = 0; i < e; ++i)
                        t[i] = 0;
                return t
            }
            function v(t, e) {
                var r = e.length < 0 ? 0 : 0 | w(e.length);
                t = f(t, r);
                for (var i = 0; i < r; i += 1)
                    t[i] = 255 & e[i];
                return t
            }
            function w(t) {
                if (t >= h())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + h().toString(16) + " bytes");
                return 0 | t
            }
            function x(t, e) {
                if (l.isBuffer(t))
                    return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                    return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var r = t.length;
                if (0 === r)
                    return 0;
                for (var n = !1; ; )
                    switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return J(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return X(t).length;
                    default:
                        if (n)
                            return J(t).length;
                        e = ("" + e).toLowerCase(),
                        n = !0
                    }
            }
            function _(t, e, r) {
                var n = !1;
                if ((void 0 === e || e < 0) && (e = 0),
                e > this.length)
                    return "";
                if ((void 0 === r || r > this.length) && (r = this.length),
                r <= 0)
                    return "";
                if ((r >>>= 0) <= (e >>>= 0))
                    return "";
                for (t || (t = "utf8"); ; )
                    switch (t) {
                    case "hex":
                        return D(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return T(this, e, r);
                    case "ascii":
                        return I(this, e, r);
                    case "latin1":
                    case "binary":
                        return L(this, e, r);
                    case "base64":
                        return C(this, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return B(this, e, r);
                    default:
                        if (n)
                            throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(),
                        n = !0
                    }
            }
            function O(b, t, e) {
                var i = b[t];
                b[t] = b[e],
                b[e] = i
            }
            function E(t, e, r, n, o) {
                if (0 === t.length)
                    return -1;
                if ("string" == typeof r ? (n = r,
                r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
                r = +r,
                isNaN(r) && (r = o ? 0 : t.length - 1),
                r < 0 && (r = t.length + r),
                r >= t.length) {
                    if (o)
                        return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!o)
                        return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = l.from(e, n)),
                l.isBuffer(e))
                    return 0 === e.length ? -1 : k(t, e, r, n, o);
                if ("number" == typeof e)
                    return e &= 255,
                    l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : k(t, [e], r, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }
            function k(t, e, r, n, o) {
                var i, c = 1, h = t.length, f = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2)
                        return -1;
                    c = 2,
                    h /= 2,
                    f /= 2,
                    r /= 2
                }
                function l(t, i) {
                    return 1 === c ? t[i] : t.readUInt16BE(i * c)
                }
                if (o) {
                    var d = -1;
                    for (i = r; i < h; i++)
                        if (l(t, i) === l(e, -1 === d ? 0 : i - d)) {
                            if (-1 === d && (d = i),
                            i - d + 1 === f)
                                return d * c
                        } else
                            -1 !== d && (i -= i - d),
                            d = -1
                } else
                    for (r + f > h && (r = h - f),
                    i = r; i >= 0; i--) {
                        for (var y = !0, m = 0; m < f; m++)
                            if (l(t, i + m) !== l(e, m)) {
                                y = !1;
                                break
                            }
                        if (y)
                            return i
                    }
                return -1
            }
            function $(t, e, r, n) {
                r = Number(r) || 0;
                var o = t.length - r;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                var c = e.length;
                if (c % 2 != 0)
                    throw new TypeError("Invalid hex string");
                n > c / 2 && (n = c / 2);
                for (var i = 0; i < n; ++i) {
                    var h = parseInt(e.substr(2 * i, 2), 16);
                    if (isNaN(h))
                        return i;
                    t[r + i] = h
                }
                return i
            }
            function S(t, e, r, n) {
                return Q(J(e, t.length - r), t, r, n)
            }
            function j(t, e, r, n) {
                return Q(function(t) {
                    for (var e = [], i = 0; i < t.length; ++i)
                        e.push(255 & t.charCodeAt(i));
                    return e
                }(e), t, r, n)
            }
            function A(t, e, r, n) {
                return j(t, e, r, n)
            }
            function R(t, e, r, n) {
                return Q(X(e), t, r, n)
            }
            function P(t, e, r, n) {
                return Q(function(t, e) {
                    for (var r, n, o, c = [], i = 0; i < t.length && !((e -= 2) < 0); ++i)
                        n = (r = t.charCodeAt(i)) >> 8,
                        o = r % 256,
                        c.push(o),
                        c.push(n);
                    return c
                }(e, t.length - r), t, r, n)
            }
            function C(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }
            function T(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r; ) {
                    var o, c, h, f, l = t[i], d = null, y = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                    if (i + y <= r)
                        switch (y) {
                        case 1:
                            l < 128 && (d = l);
                            break;
                        case 2:
                            128 == (192 & (o = t[i + 1])) && (f = (31 & l) << 6 | 63 & o) > 127 && (d = f);
                            break;
                        case 3:
                            o = t[i + 1],
                            c = t[i + 2],
                            128 == (192 & o) && 128 == (192 & c) && (f = (15 & l) << 12 | (63 & o) << 6 | 63 & c) > 2047 && (f < 55296 || f > 57343) && (d = f);
                            break;
                        case 4:
                            o = t[i + 1],
                            c = t[i + 2],
                            h = t[i + 3],
                            128 == (192 & o) && 128 == (192 & c) && 128 == (192 & h) && (f = (15 & l) << 18 | (63 & o) << 12 | (63 & c) << 6 | 63 & h) > 65535 && f < 1114112 && (d = f)
                        }
                    null === d ? (d = 65533,
                    y = 1) : d > 65535 && (d -= 65536,
                    n.push(d >>> 10 & 1023 | 55296),
                    d = 56320 | 1023 & d),
                    n.push(d),
                    i += y
                }
                return function(t) {
                    var e = t.length;
                    if (e <= U)
                        return String.fromCharCode.apply(String, t);
                    var r = ""
                      , i = 0;
                    for (; i < e; )
                        r += String.fromCharCode.apply(String, t.slice(i, i += U));
                    return r
                }(n)
            }
            e.Buffer = l,
            e.SlowBuffer = function(t) {
                +t != t && (t = 0);
                return l.alloc(+t)
            }
            ,
            e.INSPECT_MAX_BYTES = 50,
            l.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(),
            e.kMaxLength = h(),
            l.poolSize = 8192,
            l._augment = function(t) {
                return t.__proto__ = l.prototype,
                t
            }
            ,
            l.from = function(t, e, r) {
                return d(null, t, e, r)
            }
            ,
            l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype,
            l.__proto__ = Uint8Array,
            "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                value: null,
                configurable: !0
            })),
            l.alloc = function(t, e, r) {
                return function(t, e, r, n) {
                    return y(e),
                    e <= 0 ? f(t, e) : void 0 !== r ? "string" == typeof n ? f(t, e).fill(r, n) : f(t, e).fill(r) : f(t, e)
                }(null, t, e, r)
            }
            ,
            l.allocUnsafe = function(t) {
                return m(null, t)
            }
            ,
            l.allocUnsafeSlow = function(t) {
                return m(null, t)
            }
            ,
            l.isBuffer = function(b) {
                return !(null == b || !b._isBuffer)
            }
            ,
            l.compare = function(a, b) {
                if (!l.isBuffer(a) || !l.isBuffer(b))
                    throw new TypeError("Arguments must be Buffers");
                if (a === b)
                    return 0;
                for (var t = a.length, e = b.length, i = 0, r = Math.min(t, e); i < r; ++i)
                    if (a[i] !== b[i]) {
                        t = a[i],
                        e = b[i];
                        break
                    }
                return t < e ? -1 : e < t ? 1 : 0
            }
            ,
            l.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            l.concat = function(t, e) {
                if (!c(t))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length)
                    return l.alloc(0);
                var i;
                if (void 0 === e)
                    for (e = 0,
                    i = 0; i < t.length; ++i)
                        e += t[i].length;
                var r = l.allocUnsafe(e)
                  , n = 0;
                for (i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (!l.isBuffer(o))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(r, n),
                    n += o.length
                }
                return r
            }
            ,
            l.byteLength = x,
            l.prototype._isBuffer = !0,
            l.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var i = 0; i < t; i += 2)
                    O(this, i, i + 1);
                return this
            }
            ,
            l.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var i = 0; i < t; i += 4)
                    O(this, i, i + 3),
                    O(this, i + 1, i + 2);
                return this
            }
            ,
            l.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var i = 0; i < t; i += 8)
                    O(this, i, i + 7),
                    O(this, i + 1, i + 6),
                    O(this, i + 2, i + 5),
                    O(this, i + 3, i + 4);
                return this
            }
            ,
            l.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : _.apply(this, arguments)
            }
            ,
            l.prototype.equals = function(b) {
                if (!l.isBuffer(b))
                    throw new TypeError("Argument must be a Buffer");
                return this === b || 0 === l.compare(this, b)
            }
            ,
            l.prototype.inspect = function() {
                var t = ""
                  , r = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
                this.length > r && (t += " ... ")),
                "<Buffer " + t + ">"
            }
            ,
            l.prototype.compare = function(t, e, r, n, o) {
                if (!l.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === o && (o = this.length),
                e < 0 || r > t.length || n < 0 || o > this.length)
                    throw new RangeError("out of range index");
                if (n >= o && e >= r)
                    return 0;
                if (n >= o)
                    return -1;
                if (e >= r)
                    return 1;
                if (this === t)
                    return 0;
                for (var c = (o >>>= 0) - (n >>>= 0), h = (r >>>= 0) - (e >>>= 0), f = Math.min(c, h), d = this.slice(n, o), y = t.slice(e, r), i = 0; i < f; ++i)
                    if (d[i] !== y[i]) {
                        c = d[i],
                        h = y[i];
                        break
                    }
                return c < h ? -1 : h < c ? 1 : 0
            }
            ,
            l.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }
            ,
            l.prototype.indexOf = function(t, e, r) {
                return E(this, t, e, r, !0)
            }
            ,
            l.prototype.lastIndexOf = function(t, e, r) {
                return E(this, t, e, r, !1)
            }
            ,
            l.prototype.write = function(t, e, r, n) {
                if (void 0 === e)
                    n = "utf8",
                    r = this.length,
                    e = 0;
                else if (void 0 === r && "string" == typeof e)
                    n = e,
                    r = this.length,
                    e = 0;
                else {
                    if (!isFinite(e))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0,
                    isFinite(r) ? (r |= 0,
                    void 0 === n && (n = "utf8")) : (n = r,
                    r = void 0)
                }
                var o = this.length - e;
                if ((void 0 === r || r > o) && (r = o),
                t.length > 0 && (r < 0 || e < 0) || e > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var c = !1; ; )
                    switch (n) {
                    case "hex":
                        return $(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return S(this, t, e, r);
                    case "ascii":
                        return j(this, t, e, r);
                    case "latin1":
                    case "binary":
                        return A(this, t, e, r);
                    case "base64":
                        return R(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return P(this, t, e, r);
                    default:
                        if (c)
                            throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(),
                        c = !0
                    }
            }
            ,
            l.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            var U = 4096;
            function I(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i)
                    n += String.fromCharCode(127 & t[i]);
                return n
            }
            function L(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i)
                    n += String.fromCharCode(t[i]);
                return n
            }
            function D(t, e, r) {
                var n = t.length;
                (!e || e < 0) && (e = 0),
                (!r || r < 0 || r > n) && (r = n);
                for (var o = "", i = e; i < r; ++i)
                    o += V(t[i]);
                return o
            }
            function B(t, e, r) {
                for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
                    o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }
            function N(t, e, r) {
                if (t % 1 != 0 || t < 0)
                    throw new RangeError("offset is not uint");
                if (t + e > r)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function M(t, e, r, n, o, c) {
                if (!l.isBuffer(t))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > o || e < c)
                    throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length)
                    throw new RangeError("Index out of range")
            }
            function Y(t, e, r, n) {
                e < 0 && (e = 65535 + e + 1);
                for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)
                    t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }
            function H(t, e, r, n) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)
                    t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
            }
            function F(t, e, r, n, o, c) {
                if (r + n > t.length)
                    throw new RangeError("Index out of range");
                if (r < 0)
                    throw new RangeError("Index out of range")
            }
            function z(t, e, r, n, c) {
                return c || F(t, 0, r, 4),
                o.write(t, e, r, n, 23, 4),
                r + 4
            }
            function K(t, e, r, n, c) {
                return c || F(t, 0, r, 8),
                o.write(t, e, r, n, 52, 8),
                r + 8
            }
            l.prototype.slice = function(t, e) {
                var r, n = this.length;
                if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                e < t && (e = t),
                l.TYPED_ARRAY_SUPPORT)
                    (r = this.subarray(t, e)).__proto__ = l.prototype;
                else {
                    var o = e - t;
                    r = new l(o,void 0);
                    for (var i = 0; i < o; ++i)
                        r[i] = this[i + t]
                }
                return r
            }
            ,
            l.prototype.readUIntLE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || N(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
                    n += this[t + i] * o;
                return n
            }
            ,
            l.prototype.readUIntBE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || N(t, e, this.length);
                for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
                    n += this[t + --e] * o;
                return n
            }
            ,
            l.prototype.readUInt8 = function(t, e) {
                return e || N(t, 1, this.length),
                this[t]
            }
            ,
            l.prototype.readUInt16LE = function(t, e) {
                return e || N(t, 2, this.length),
                this[t] | this[t + 1] << 8
            }
            ,
            l.prototype.readUInt16BE = function(t, e) {
                return e || N(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            }
            ,
            l.prototype.readUInt32LE = function(t, e) {
                return e || N(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }
            ,
            l.prototype.readUInt32BE = function(t, e) {
                return e || N(t, 4, this.length),
                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }
            ,
            l.prototype.readIntLE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || N(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
                    n += this[t + i] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)),
                n
            }
            ,
            l.prototype.readIntBE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || N(t, e, this.length);
                for (var i = e, n = 1, o = this[t + --i]; i > 0 && (n *= 256); )
                    o += this[t + --i] * n;
                return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)),
                o
            }
            ,
            l.prototype.readInt8 = function(t, e) {
                return e || N(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }
            ,
            l.prototype.readInt16LE = function(t, e) {
                e || N(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }
            ,
            l.prototype.readInt16BE = function(t, e) {
                e || N(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }
            ,
            l.prototype.readInt32LE = function(t, e) {
                return e || N(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }
            ,
            l.prototype.readInt32BE = function(t, e) {
                return e || N(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }
            ,
            l.prototype.readFloatLE = function(t, e) {
                return e || N(t, 4, this.length),
                o.read(this, t, !0, 23, 4)
            }
            ,
            l.prototype.readFloatBE = function(t, e) {
                return e || N(t, 4, this.length),
                o.read(this, t, !1, 23, 4)
            }
            ,
            l.prototype.readDoubleLE = function(t, e) {
                return e || N(t, 8, this.length),
                o.read(this, t, !0, 52, 8)
            }
            ,
            l.prototype.readDoubleBE = function(t, e) {
                return e || N(t, 8, this.length),
                o.read(this, t, !1, 52, 8)
            }
            ,
            l.prototype.writeUIntLE = function(t, e, r, n) {
                (t = +t,
                e |= 0,
                r |= 0,
                n) || M(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1
                  , i = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256); )
                    this[e + i] = t / o & 255;
                return e + r
            }
            ,
            l.prototype.writeUIntBE = function(t, e, r, n) {
                (t = +t,
                e |= 0,
                r |= 0,
                n) || M(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1
                  , o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                    this[e + i] = t / o & 255;
                return e + r
            }
            ,
            l.prototype.writeUInt8 = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 1, 255, 0),
                l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                this[e] = 255 & t,
                e + 1
            }
            ,
            l.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 2, 65535, 0),
                l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : Y(this, t, e, !0),
                e + 2
            }
            ,
            l.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 2, 65535, 0),
                l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : Y(this, t, e, !1),
                e + 2
            }
            ,
            l.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 4, 4294967295, 0),
                l.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t) : H(this, t, e, !0),
                e + 4
            }
            ,
            l.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 4, 4294967295, 0),
                l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : H(this, t, e, !1),
                e + 4
            }
            ,
            l.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t,
                e |= 0,
                !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    M(this, t, e, r, o - 1, -o)
                }
                var i = 0
                  , c = 1
                  , sub = 0;
                for (this[e] = 255 & t; ++i < r && (c *= 256); )
                    t < 0 && 0 === sub && 0 !== this[e + i - 1] && (sub = 1),
                    this[e + i] = (t / c | 0) - sub & 255;
                return e + r
            }
            ,
            l.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t,
                e |= 0,
                !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    M(this, t, e, r, o - 1, -o)
                }
                var i = r - 1
                  , c = 1
                  , sub = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (c *= 256); )
                    t < 0 && 0 === sub && 0 !== this[e + i + 1] && (sub = 1),
                    this[e + i] = (t / c | 0) - sub & 255;
                return e + r
            }
            ,
            l.prototype.writeInt8 = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 1, 127, -128),
                l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                t < 0 && (t = 255 + t + 1),
                this[e] = 255 & t,
                e + 1
            }
            ,
            l.prototype.writeInt16LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 2, 32767, -32768),
                l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : Y(this, t, e, !0),
                e + 2
            }
            ,
            l.prototype.writeInt16BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 2, 32767, -32768),
                l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : Y(this, t, e, !1),
                e + 2
            }
            ,
            l.prototype.writeInt32LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 4, 2147483647, -2147483648),
                l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24) : H(this, t, e, !0),
                e + 4
            }
            ,
            l.prototype.writeInt32BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || M(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : H(this, t, e, !1),
                e + 4
            }
            ,
            l.prototype.writeFloatLE = function(t, e, r) {
                return z(this, t, e, !0, r)
            }
            ,
            l.prototype.writeFloatBE = function(t, e, r) {
                return z(this, t, e, !1, r)
            }
            ,
            l.prototype.writeDoubleLE = function(t, e, r) {
                return K(this, t, e, !0, r)
            }
            ,
            l.prototype.writeDoubleBE = function(t, e, r) {
                return K(this, t, e, !1, r)
            }
            ,
            l.prototype.copy = function(t, e, r, n) {
                if (r || (r = 0),
                n || 0 === n || (n = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                n > 0 && n < r && (n = r),
                n === r)
                    return 0;
                if (0 === t.length || 0 === this.length)
                    return 0;
                if (e < 0)
                    throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (n < 0)
                    throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length),
                t.length - e < n - r && (n = t.length - e + r);
                var i, o = n - r;
                if (this === t && r < e && e < n)
                    for (i = o - 1; i >= 0; --i)
                        t[i + e] = this[i + r];
                else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i)
                        t[i + e] = this[i + r];
                else
                    Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
                return o
            }
            ,
            l.prototype.fill = function(t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e,
                    e = 0,
                    r = this.length) : "string" == typeof r && (n = r,
                    r = this.length),
                    1 === t.length) {
                        var code = t.charCodeAt(0);
                        code < 256 && (t = code)
                    }
                    if (void 0 !== n && "string" != typeof n)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !l.isEncoding(n))
                        throw new TypeError("Unknown encoding: " + n)
                } else
                    "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < r)
                    throw new RangeError("Out of range index");
                if (r <= e)
                    return this;
                var i;
                if (e >>>= 0,
                r = void 0 === r ? this.length : r >>> 0,
                t || (t = 0),
                "number" == typeof t)
                    for (i = e; i < r; ++i)
                        this[i] = t;
                else {
                    var o = l.isBuffer(t) ? t : J(new l(t,n).toString())
                      , c = o.length;
                    for (i = 0; i < r - e; ++i)
                        this[i + e] = o[i % c]
                }
                return this
            }
            ;
            var W = /[^+\/0-9A-Za-z-_]/g;
            function V(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }
            function J(t, e) {
                var r;
                e = e || 1 / 0;
                for (var n = t.length, o = null, c = [], i = 0; i < n; ++i) {
                    if ((r = t.charCodeAt(i)) > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (e -= 3) > -1 && c.push(239, 191, 189);
                                continue
                            }
                            if (i + 1 === n) {
                                (e -= 3) > -1 && c.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && c.push(239, 191, 189),
                            o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else
                        o && (e -= 3) > -1 && c.push(239, 191, 189);
                    if (o = null,
                    r < 128) {
                        if ((e -= 1) < 0)
                            break;
                        c.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0)
                            break;
                        c.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0)
                            break;
                        c.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112))
                            throw new Error("Invalid code point");
                        if ((e -= 4) < 0)
                            break;
                        c.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return c
            }
            function X(t) {
                return n.toByteArray(function(t) {
                    if ((t = function(t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }(t).replace(W, "")).length < 2)
                        return "";
                    for (; t.length % 4 != 0; )
                        t += "=";
                    return t
                }(t))
            }
            function Q(t, e, r, n) {
                for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
                    e[i + r] = t[i];
                return i
            }
        }
        ).call(this, r(35))
    },
    440: function(t, e, r) {
        "use strict";
        e.byteLength = function(t) {
            var e = h(t)
              , r = e[0]
              , n = e[1];
            return 3 * (r + n) / 4 - n
        }
        ,
        e.toByteArray = function(t) {
            var e, i, r = h(t), n = r[0], f = r[1], l = new c(function(t, e, r) {
                return 3 * (e + r) / 4 - r
            }(0, n, f)), d = 0, y = f > 0 ? n - 4 : n;
            for (i = 0; i < y; i += 4)
                e = o[t.charCodeAt(i)] << 18 | o[t.charCodeAt(i + 1)] << 12 | o[t.charCodeAt(i + 2)] << 6 | o[t.charCodeAt(i + 3)],
                l[d++] = e >> 16 & 255,
                l[d++] = e >> 8 & 255,
                l[d++] = 255 & e;
            2 === f && (e = o[t.charCodeAt(i)] << 2 | o[t.charCodeAt(i + 1)] >> 4,
            l[d++] = 255 & e);
            1 === f && (e = o[t.charCodeAt(i)] << 10 | o[t.charCodeAt(i + 1)] << 4 | o[t.charCodeAt(i + 2)] >> 2,
            l[d++] = e >> 8 & 255,
            l[d++] = 255 & e);
            return l
        }
        ,
        e.fromByteArray = function(t) {
            for (var e, r = t.length, o = r % 3, c = [], h = 16383, i = 0, l = r - o; i < l; i += h)
                c.push(f(t, i, i + h > l ? l : i + h));
            1 === o ? (e = t[r - 1],
            c.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1],
            c.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
            return c.join("")
        }
        ;
        for (var n = [], o = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0; i < 64; ++i)
            n[i] = code[i],
            o[code.charCodeAt(i)] = i;
        function h(t) {
            var e = t.length;
            if (e % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e),
            [r, r === e ? 0 : 4 - r % 4]
        }
        function f(t, e, r) {
            for (var o, c, output = [], i = e; i < r; i += 3)
                o = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]),
                output.push(n[(c = o) >> 18 & 63] + n[c >> 12 & 63] + n[c >> 6 & 63] + n[63 & c]);
            return output.join("")
        }
        o["-".charCodeAt(0)] = 62,
        o["_".charCodeAt(0)] = 63
    },
    441: function(t, e) {
        e.read = function(t, e, r, n, o) {
            var c, h, f = 8 * o - n - 1, l = (1 << f) - 1, d = l >> 1, y = -7, i = r ? o - 1 : 0, m = r ? -1 : 1, s = t[e + i];
            for (i += m,
            c = s & (1 << -y) - 1,
            s >>= -y,
            y += f; y > 0; c = 256 * c + t[e + i],
            i += m,
            y -= 8)
                ;
            for (h = c & (1 << -y) - 1,
            c >>= -y,
            y += n; y > 0; h = 256 * h + t[e + i],
            i += m,
            y -= 8)
                ;
            if (0 === c)
                c = 1 - d;
            else {
                if (c === l)
                    return h ? NaN : 1 / 0 * (s ? -1 : 1);
                h += Math.pow(2, n),
                c -= d
            }
            return (s ? -1 : 1) * h * Math.pow(2, c - n)
        }
        ,
        e.write = function(t, e, r, n, o, c) {
            var h, f, l, d = 8 * c - o - 1, y = (1 << d) - 1, m = y >> 1, rt = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = n ? 0 : c - 1, v = n ? 1 : -1, s = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0,
            h = y) : (h = Math.floor(Math.log(e) / Math.LN2),
            e * (l = Math.pow(2, -h)) < 1 && (h--,
            l *= 2),
            (e += h + m >= 1 ? rt / l : rt * Math.pow(2, 1 - m)) * l >= 2 && (h++,
            l /= 2),
            h + m >= y ? (f = 0,
            h = y) : h + m >= 1 ? (f = (e * l - 1) * Math.pow(2, o),
            h += m) : (f = e * Math.pow(2, m - 1) * Math.pow(2, o),
            h = 0)); o >= 8; t[r + i] = 255 & f,
            i += v,
            f /= 256,
            o -= 8)
                ;
            for (h = h << o | f,
            d += o; d > 0; t[r + i] = 255 & h,
            i += v,
            h /= 256,
            d -= 8)
                ;
            t[r + i - v] |= 128 * s
        }
    },
    442: function(t, e) {
        var r = {}.toString;
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == r.call(t)
        }
    },
    73: function(t, e, r) {
        "use strict";
        var n = {
            name: "NoSsr",
            functional: !0,
            props: {
                placeholder: String,
                placeholderTag: {
                    type: String,
                    default: "div"
                }
            },
            render: function(t, e) {
                var r = e.parent
                  , n = e.slots
                  , o = e.props
                  , c = n()
                  , h = c.default;
                void 0 === h && (h = []);
                var f = c.placeholder;
                return r._isMounted ? h : (r.$once("hook:mounted", (function() {
                    r.$forceUpdate()
                }
                )),
                o.placeholderTag && (o.placeholder || f) ? t(o.placeholderTag, {
                    class: ["no-ssr-placeholder"]
                }, o.placeholder || f) : h.length > 0 ? h.map((function() {
                    return t(!1)
                }
                )) : t(!1))
            }
        };
        t.exports = n
    },
    91: function(t, e, r) {
        "use strict";
        e.a = {}
    },
    93: function(t, e, r) {
        "use strict";
        function n(t) {
            this.message = t
        }
        n.prototype = new Error,
        n.prototype.name = "InvalidCharacterError";
        var o = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(t) {
            var e = String(t).replace(/=+$/, "");
            if (e.length % 4 == 1)
                throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var r, o, a = 0, i = 0, c = ""; o = e.charAt(i++); ~o && (r = a % 4 ? 64 * r + o : o,
            a++ % 4) ? c += String.fromCharCode(255 & r >> (-2 * a & 6)) : 0)
                o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
            return c
        }
        ;
        function c(t) {
            var e = t.replace(/-/g, "+").replace(/_/g, "/");
            switch (e.length % 4) {
            case 0:
                break;
            case 2:
                e += "==";
                break;
            case 3:
                e += "=";
                break;
            default:
                throw "Illegal base64url string!"
            }
            try {
                return function(t) {
                    return decodeURIComponent(o(t).replace(/(.)/g, (function(t, e) {
                        var r = e.charCodeAt(0).toString(16).toUpperCase();
                        return r.length < 2 && (r = "0" + r),
                        "%" + r
                    }
                    )))
                }(e)
            } catch (t) {
                return o(e)
            }
        }
        function h(t) {
            this.message = t
        }
        function f(t, e) {
            if ("string" != typeof t)
                throw new h("Invalid token specified");
            var r = !0 === (e = e || {}).header ? 0 : 1;
            try {
                return JSON.parse(c(t.split(".")[r]))
            } catch (t) {
                throw new h("Invalid token specified: " + t.message)
            }
        }
        h.prototype = new Error,
        h.prototype.name = "InvalidTokenError";
        const a = f;
        a.default = f,
        a.InvalidTokenError = h,
        t.exports = a
    }
}]);
