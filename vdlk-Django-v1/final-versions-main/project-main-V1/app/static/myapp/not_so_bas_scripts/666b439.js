/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[0], Array(458).concat([function(e, t, n) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, r;
            function d() {
                return t.apply(null, arguments)
            }
            function _(e) {
                t = e
            }
            function o(input) {
                return input instanceof Array || "[object Array]" === Object.prototype.toString.call(input)
            }
            function m(input) {
                return null != input && "[object Object]" === Object.prototype.toString.call(input)
            }
            function l(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            function M(e) {
                if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(e).length;
                var t;
                for (t in e)
                    if (l(e, t))
                        return !1;
                return !0
            }
            function h(input) {
                return void 0 === input
            }
            function c(input) {
                return "number" == typeof input || "[object Number]" === Object.prototype.toString.call(input)
            }
            function L(input) {
                return input instanceof Date || "[object Date]" === Object.prototype.toString.call(input)
            }
            function map(e, t) {
                var i, n = [], r = e.length;
                for (i = 0; i < r; ++i)
                    n.push(t(e[i], i));
                return n
            }
            function Y(a, b) {
                for (var i in b)
                    l(b, i) && (a[i] = b[i]);
                return l(b, "toString") && (a.toString = b.toString),
                l(b, "valueOf") && (a.valueOf = b.valueOf),
                a
            }
            function y(input, e, t, n) {
                return nn(input, e, t, n, !0).utc()
            }
            function f() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }
            function k(e) {
                return null == e._pf && (e._pf = f()),
                e._pf
            }
            function D(e) {
                var t = null
                  , n = !1
                  , d = e._d && !isNaN(e._d.getTime());
                return d && (t = k(e),
                n = r.call(t.parsedDateParts, (function(i) {
                    return null != i
                }
                )),
                d = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n),
                e._strict && (d = d && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)),
                null != Object.isFrozen && Object.isFrozen(e) ? d : (e._isValid = d,
                e._isValid)
            }
            function T(e) {
                var t = y(NaN);
                return null != e ? Y(k(t), e) : k(t).userInvalidated = !0,
                t
            }
            r = Array.prototype.some ? Array.prototype.some : function(e) {
                var i, t = Object(this), n = t.length >>> 0;
                for (i = 0; i < n; i++)
                    if (i in t && e.call(this, t[i], i, t))
                        return !0;
                return !1
            }
            ;
            var w = d.momentProperties = []
              , v = !1;
            function H(e, t) {
                var i, n, r, d = w.length;
                if (h(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
                h(t._i) || (e._i = t._i),
                h(t._f) || (e._f = t._f),
                h(t._l) || (e._l = t._l),
                h(t._strict) || (e._strict = t._strict),
                h(t._tzm) || (e._tzm = t._tzm),
                h(t._isUTC) || (e._isUTC = t._isUTC),
                h(t._offset) || (e._offset = t._offset),
                h(t._pf) || (e._pf = k(t)),
                h(t._locale) || (e._locale = t._locale),
                d > 0)
                    for (i = 0; i < d; i++)
                        h(r = t[n = w[i]]) || (e[n] = r);
                return e
            }
            function S(e) {
                H(this, e),
                this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === v && (v = !0,
                d.updateOffset(this),
                v = !1)
            }
            function j(e) {
                return e instanceof S || null != e && null != e._isAMomentObject
            }
            function x(e) {
                !1 === d.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }
            function P(e, t) {
                var n = !0;
                return Y((function() {
                    if (null != d.deprecationHandler && d.deprecationHandler(null, e),
                    n) {
                        var r, i, _, o = [], m = arguments.length;
                        for (i = 0; i < m; i++) {
                            if (r = "",
                            "object" == typeof arguments[i]) {
                                for (_ in r += "\n[" + i + "] ",
                                arguments[0])
                                    l(arguments[0], _) && (r += _ + ": " + arguments[0][_] + ", ");
                                r = r.slice(0, -2)
                            } else
                                r = arguments[i];
                            o.push(r)
                        }
                        x(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack),
                        n = !1
                    }
                    return t.apply(this, arguments)
                }
                ), t)
            }
            var O, W = {};
            function A(e, t) {
                null != d.deprecationHandler && d.deprecationHandler(e, t),
                W[e] || (x(t),
                W[e] = !0)
            }
            function E(input) {
                return "undefined" != typeof Function && input instanceof Function || "[object Function]" === Object.prototype.toString.call(input)
            }
            function F(e) {
                var t, i;
                for (i in e)
                    l(e, i) && (E(t = e[i]) ? this[i] = t : this["_" + i] = t);
                this._config = e,
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }
            function z(e, t) {
                var n, r = Y({}, e);
                for (n in t)
                    l(t, n) && (m(e[n]) && m(t[n]) ? (r[n] = {},
                    Y(r[n], e[n]),
                    Y(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
                for (n in e)
                    l(e, n) && !l(t, n) && m(e[n]) && (r[n] = Y({}, r[n]));
                return r
            }
            function N(e) {
                null != e && this.set(e)
            }
            d.suppressDeprecationWarnings = !1,
            d.deprecationHandler = null,
            O = Object.keys ? Object.keys : function(e) {
                var i, t = [];
                for (i in e)
                    l(e, i) && t.push(i);
                return t
            }
            ;
            var J = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            };
            function R(e, t, n) {
                var output = this._calendar[e] || this._calendar.sameElse;
                return E(output) ? output.call(t, n) : output
            }
            function C(e, t, n) {
                var r = "" + Math.abs(e)
                  , d = t - r.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, d)).toString().substr(1) + r
            }
            var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
              , U = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
              , G = {}
              , V = {};
            function B(e, t, n, r) {
                var d = r;
                "string" == typeof r && (d = function() {
                    return this[r]()
                }
                ),
                e && (V[e] = d),
                t && (V[t[0]] = function() {
                    return C(d.apply(this, arguments), t[1], t[2])
                }
                ),
                n && (V[n] = function() {
                    return this.localeData().ordinal(d.apply(this, arguments), e)
                }
                )
            }
            function K(input) {
                return input.match(/\[[\s\S]/) ? input.replace(/^\[|\]$/g, "") : input.replace(/\\/g, "")
            }
            function Z(e) {
                var i, t, n = e.match(I);
                for (i = 0,
                t = n.length; i < t; i++)
                    V[n[i]] ? n[i] = V[n[i]] : n[i] = K(n[i]);
                return function(r) {
                    var i, output = "";
                    for (i = 0; i < t; i++)
                        output += E(n[i]) ? n[i].call(r, e) : n[i];
                    return output
                }
            }
            function $(e, t) {
                return e.isValid() ? (t = Q(t, e.localeData()),
                G[t] = G[t] || Z(t),
                G[t](e)) : e.localeData().invalidDate()
            }
            function Q(e, t) {
                var i = 5;
                function n(input) {
                    return t.longDateFormat(input) || input
                }
                for (U.lastIndex = 0; i >= 0 && U.test(e); )
                    e = e.replace(U, n),
                    U.lastIndex = 0,
                    i -= 1;
                return e
            }
            var X = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            function ee(e) {
                var t = this._longDateFormat[e]
                  , n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.match(I).map((function(e) {
                    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                }
                )).join(""),
                this._longDateFormat[e])
            }
            var ae = "Invalid date";
            function te() {
                return this._invalidDate
            }
            var ne = "%d"
              , se = /\d{1,2}/;
            function re(e) {
                return this._ordinal.replace("%d", e)
            }
            var ie = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function de(e, t, n, r) {
                var output = this._relativeTime[n];
                return E(output) ? output(e, t, n, r) : output.replace(/%d/i, e)
            }
            function _e(e, output) {
                var t = this._relativeTime[e > 0 ? "future" : "past"];
                return E(t) ? t(output) : t.replace(/%s/i, output)
            }
            var oe = {
                D: "date",
                dates: "date",
                date: "date",
                d: "day",
                days: "day",
                day: "day",
                e: "weekday",
                weekdays: "weekday",
                weekday: "weekday",
                E: "isoWeekday",
                isoweekdays: "isoWeekday",
                isoweekday: "isoWeekday",
                DDD: "dayOfYear",
                dayofyears: "dayOfYear",
                dayofyear: "dayOfYear",
                h: "hour",
                hours: "hour",
                hour: "hour",
                ms: "millisecond",
                milliseconds: "millisecond",
                millisecond: "millisecond",
                m: "minute",
                minutes: "minute",
                minute: "minute",
                M: "month",
                months: "month",
                month: "month",
                Q: "quarter",
                quarters: "quarter",
                quarter: "quarter",
                s: "second",
                seconds: "second",
                second: "second",
                gg: "weekYear",
                weekyears: "weekYear",
                weekyear: "weekYear",
                GG: "isoWeekYear",
                isoweekyears: "isoWeekYear",
                isoweekyear: "isoWeekYear",
                w: "week",
                weeks: "week",
                week: "week",
                W: "isoWeek",
                isoweeks: "isoWeek",
                isoweek: "isoWeek",
                y: "year",
                years: "year",
                year: "year"
            };
            function ue(e) {
                return "string" == typeof e ? oe[e] || oe[e.toLowerCase()] : void 0
            }
            function me(e) {
                var t, n, r = {};
                for (n in e)
                    l(e, n) && (t = ue(n)) && (r[t] = e[n]);
                return r
            }
            var le = {
                date: 9,
                day: 11,
                weekday: 11,
                isoWeekday: 11,
                dayOfYear: 4,
                hour: 13,
                millisecond: 16,
                minute: 14,
                month: 8,
                quarter: 7,
                second: 15,
                weekYear: 1,
                isoWeekYear: 1,
                week: 5,
                isoWeek: 5,
                year: 1
            };
            function Me(e) {
                var u, t = [];
                for (u in e)
                    l(e, u) && t.push({
                        unit: u,
                        priority: le[u]
                    });
                return t.sort((function(a, b) {
                    return a.priority - b.priority
                }
                )),
                t
            }
            var he, ce = /\d/, Le = /\d\d/, Ye = /\d{3}/, ye = /\d{4}/, fe = /[+-]?\d{6}/, ke = /\d\d?/, pe = /\d\d\d\d?/, De = /\d\d\d\d\d\d?/, Te = /\d{1,3}/, ge = /\d{1,4}/, we = /[+-]?\d{1,6}/, ve = /\d+/, be = /[+-]?\d+/, He = /Z|[+-]\d\d:?\d\d/gi, Se = /Z|[+-]\d\d(?::?\d\d)?/gi, je = /[+-]?\d+(\.\d{1,3})?/, xe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Pe = /^[1-9]\d?/, Oe = /^([1-9]\d|\d)/;
            function We(e, t, n) {
                he[e] = E(t) ? t : function(e, r) {
                    return e && n ? n : t
                }
            }
            function Ae(e, t) {
                return l(he, e) ? he[e](t._strict, t._locale) : new RegExp(Ee(e))
            }
            function Ee(s) {
                return Fe(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, r, d) {
                    return t || n || r || d
                }
                )))
            }
            function Fe(s) {
                return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            function ze(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }
            function Ne(e) {
                var t = +e
                  , n = 0;
                return 0 !== t && isFinite(t) && (n = ze(t)),
                n
            }
            he = {};
            var Je = {};
            function Re(e, t) {
                var i, n, r = t;
                for ("string" == typeof e && (e = [e]),
                c(t) && (r = function(input, e) {
                    e[t] = Ne(input)
                }
                ),
                n = e.length,
                i = 0; i < n; i++)
                    Je[e[i]] = r
            }
            function Ce(e, t) {
                Re(e, (function(input, e, n, r) {
                    n._w = n._w || {},
                    t(input, n._w, n, r)
                }
                ))
            }
            function Ie(e, input, t) {
                null != input && l(Je, e) && Je[e](input, t._a, t, e)
            }
            function Ue(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            var Ge = 0
              , Ve = 1
              , qe = 2
              , Be = 3
              , Ke = 4
              , Ze = 5
              , $e = 6
              , Qe = 7
              , Xe = 8;
            function ea(e) {
                return Ue(e) ? 366 : 365
            }
            B("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? C(e, 4) : "+" + e
            }
            )),
            B(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            }
            )),
            B(0, ["YYYY", 4], 0, "year"),
            B(0, ["YYYYY", 5], 0, "year"),
            B(0, ["YYYYYY", 6, !0], 0, "year"),
            We("Y", be),
            We("YY", ke, Le),
            We("YYYY", ge, ye),
            We("YYYYY", we, fe),
            We("YYYYYY", we, fe),
            Re(["YYYYY", "YYYYYY"], Ge),
            Re("YYYY", (function(input, e) {
                e[Ge] = 2 === input.length ? d.parseTwoDigitYear(input) : Ne(input)
            }
            )),
            Re("YY", (function(input, e) {
                e[Ge] = d.parseTwoDigitYear(input)
            }
            )),
            Re("Y", (function(input, e) {
                e[Ge] = parseInt(input, 10)
            }
            )),
            d.parseTwoDigitYear = function(input) {
                return Ne(input) + (Ne(input) > 68 ? 1900 : 2e3)
            }
            ;
            var aa, ta = sa("FullYear", !0);
            function na() {
                return Ue(this.year())
            }
            function sa(e, t) {
                return function(n) {
                    return null != n ? (ia(this, e, n),
                    d.updateOffset(this, t),
                    this) : ra(this, e)
                }
            }
            function ra(e, t) {
                if (!e.isValid())
                    return NaN;
                var n = e._d
                  , r = e._isUTC;
                switch (t) {
                case "Milliseconds":
                    return r ? n.getUTCMilliseconds() : n.getMilliseconds();
                case "Seconds":
                    return r ? n.getUTCSeconds() : n.getSeconds();
                case "Minutes":
                    return r ? n.getUTCMinutes() : n.getMinutes();
                case "Hours":
                    return r ? n.getUTCHours() : n.getHours();
                case "Date":
                    return r ? n.getUTCDate() : n.getDate();
                case "Day":
                    return r ? n.getUTCDay() : n.getDay();
                case "Month":
                    return r ? n.getUTCMonth() : n.getMonth();
                case "FullYear":
                    return r ? n.getUTCFullYear() : n.getFullYear();
                default:
                    return NaN
                }
            }
            function ia(e, t, n) {
                var r, d, _, o, m;
                if (e.isValid() && !isNaN(n)) {
                    switch (r = e._d,
                    d = e._isUTC,
                    t) {
                    case "Milliseconds":
                        return void (d ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
                    case "Seconds":
                        return void (d ? r.setUTCSeconds(n) : r.setSeconds(n));
                    case "Minutes":
                        return void (d ? r.setUTCMinutes(n) : r.setMinutes(n));
                    case "Hours":
                        return void (d ? r.setUTCHours(n) : r.setHours(n));
                    case "Date":
                        return void (d ? r.setUTCDate(n) : r.setDate(n));
                    case "FullYear":
                        break;
                    default:
                        return
                    }
                    _ = n,
                    o = e.month(),
                    m = 29 !== (m = e.date()) || 1 !== o || Ue(_) ? m : 28,
                    d ? r.setUTCFullYear(_, o, m) : r.setFullYear(_, o, m)
                }
            }
            function da(e) {
                return E(this[e = ue(e)]) ? this[e]() : this
            }
            function _a(e, t) {
                if ("object" == typeof e) {
                    var i, n = Me(e = me(e)), r = n.length;
                    for (i = 0; i < r; i++)
                        this[n[i].unit](e[n[i].unit])
                } else if (E(this[e = ue(e)]))
                    return this[e](t);
                return this
            }
            function oa(e, t) {
                return (e % t + t) % t
            }
            function ua(e, t) {
                if (isNaN(e) || isNaN(t))
                    return NaN;
                var n = oa(t, 12);
                return e += (t - n) / 12,
                1 === n ? Ue(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            aa = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var i;
                for (i = 0; i < this.length; ++i)
                    if (this[i] === e)
                        return i;
                return -1
            }
            ,
            B("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            }
            )),
            B("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e)
            }
            )),
            B("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e)
            }
            )),
            We("M", ke, Pe),
            We("MM", ke, Le),
            We("MMM", (function(e, t) {
                return t.monthsShortRegex(e)
            }
            )),
            We("MMMM", (function(e, t) {
                return t.monthsRegex(e)
            }
            )),
            Re(["M", "MM"], (function(input, e) {
                e[Ve] = Ne(input) - 1
            }
            )),
            Re(["MMM", "MMMM"], (function(input, e, t, n) {
                var r = t._locale.monthsParse(input, n, t._strict);
                null != r ? e[Ve] = r : k(t).invalidMonth = input
            }
            ));
            var ma = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
              , la = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
              , Ma = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
              , ha = xe
              , ca = xe;
            function La(e, t) {
                return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ma).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone
            }
            function Ya(e, t) {
                return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ma.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }
            function ya(e, t, n) {
                var i, r, d, _ = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    i = 0; i < 12; ++i)
                        d = y([2e3, i]),
                        this._shortMonthsParse[i] = this.monthsShort(d, "").toLocaleLowerCase(),
                        this._longMonthsParse[i] = this.months(d, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (r = aa.call(this._shortMonthsParse, _)) ? r : null : -1 !== (r = aa.call(this._longMonthsParse, _)) ? r : null : "MMM" === t ? -1 !== (r = aa.call(this._shortMonthsParse, _)) || -1 !== (r = aa.call(this._longMonthsParse, _)) ? r : null : -1 !== (r = aa.call(this._longMonthsParse, _)) || -1 !== (r = aa.call(this._shortMonthsParse, _)) ? r : null
            }
            function fa(e, t, n) {
                var i, r, d;
                if (this._monthsParseExact)
                    return ya.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                i = 0; i < 12; i++) {
                    if (r = y([2e3, i]),
                    n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
                    this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
                    n || this._monthsParse[i] || (d = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
                    this._monthsParse[i] = new RegExp(d.replace(".", ""),"i")),
                    n && "MMMM" === t && this._longMonthsParse[i].test(e))
                        return i;
                    if (n && "MMM" === t && this._shortMonthsParse[i].test(e))
                        return i;
                    if (!n && this._monthsParse[i].test(e))
                        return i
                }
            }
            function ka(e, t) {
                if (!e.isValid())
                    return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t))
                        t = Ne(t);
                    else if (!c(t = e.localeData().monthsParse(t)))
                        return e;
                var n = t
                  , r = e.date();
                return r = r < 29 ? r : Math.min(r, ua(e.year(), n)),
                e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r),
                e
            }
            function pa(e) {
                return null != e ? (ka(this, e),
                d.updateOffset(this, !0),
                this) : ra(this, "Month")
            }
            function Da() {
                return ua(this.year(), this.month())
            }
            function Ta(e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || wa.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = ha),
                this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }
            function ga(e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || wa.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = ca),
                this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }
            function wa() {
                function e(a, b) {
                    return b.length - a.length
                }
                var i, t, n, r, d = [], _ = [], o = [];
                for (i = 0; i < 12; i++)
                    t = y([2e3, i]),
                    n = Fe(this.monthsShort(t, "")),
                    r = Fe(this.months(t, "")),
                    d.push(n),
                    _.push(r),
                    o.push(r),
                    o.push(n);
                d.sort(e),
                _.sort(e),
                o.sort(e),
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")","i"),
                this._monthsShortRegex = this._monthsRegex,
                this._monthsStrictRegex = new RegExp("^(" + _.join("|") + ")","i"),
                this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")","i")
            }
            function va(e, t, n, r, d, s, _) {
                var o;
                return e < 100 && e >= 0 ? (o = new Date(e + 400,t,n,r,d,s,_),
                isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e,t,n,r,d,s,_),
                o
            }
            function ba(e) {
                var t, n;
                return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400,
                t = new Date(Date.UTC.apply(null, n)),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
                t
            }
            function Ha(e, t, n) {
                var r = 7 + t - n;
                return -(7 + ba(e, 0, r).getUTCDay() - t) % 7 + r - 1
            }
            function Sa(e, t, n, r, d) {
                var _, o, m = 1 + 7 * (t - 1) + (7 + n - r) % 7 + Ha(e, r, d);
                return m <= 0 ? o = ea(_ = e - 1) + m : m > ea(e) ? (_ = e + 1,
                o = m - ea(e)) : (_ = e,
                o = m),
                {
                    year: _,
                    dayOfYear: o
                }
            }
            function ja(e, t, n) {
                var r, d, _ = Ha(e.year(), t, n), o = Math.floor((e.dayOfYear() - _ - 1) / 7) + 1;
                return o < 1 ? r = o + xa(d = e.year() - 1, t, n) : o > xa(e.year(), t, n) ? (r = o - xa(e.year(), t, n),
                d = e.year() + 1) : (d = e.year(),
                r = o),
                {
                    week: r,
                    year: d
                }
            }
            function xa(e, t, n) {
                var r = Ha(e, t, n)
                  , d = Ha(e + 1, t, n);
                return (ea(e) - r + d) / 7
            }
            function Pa(e) {
                return ja(e, this._week.dow, this._week.doy).week
            }
            B("w", ["ww", 2], "wo", "week"),
            B("W", ["WW", 2], "Wo", "isoWeek"),
            We("w", ke, Pe),
            We("ww", ke, Le),
            We("W", ke, Pe),
            We("WW", ke, Le),
            Ce(["w", "ww", "W", "WW"], (function(input, e, t, n) {
                e[n.substr(0, 1)] = Ne(input)
            }
            ));
            var Oa = {
                dow: 0,
                doy: 6
            };
            function Wa() {
                return this._week.dow
            }
            function Aa() {
                return this._week.doy
            }
            function Ea(input) {
                var e = this.localeData().week(this);
                return null == input ? e : this.add(7 * (input - e), "d")
            }
            function Fa(input) {
                var e = ja(this, 1, 4).week;
                return null == input ? e : this.add(7 * (input - e), "d")
            }
            function za(input, e) {
                return "string" != typeof input ? input : isNaN(input) ? "number" == typeof (input = e.weekdaysParse(input)) ? input : null : parseInt(input, 10)
            }
            function Na(input, e) {
                return "string" == typeof input ? e.weekdaysParse(input) % 7 || 7 : isNaN(input) ? null : input
            }
            function Ja(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }
            B("d", 0, "do", "day"),
            B("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e)
            }
            )),
            B("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e)
            }
            )),
            B("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e)
            }
            )),
            B("e", 0, 0, "weekday"),
            B("E", 0, 0, "isoWeekday"),
            We("d", ke),
            We("e", ke),
            We("E", ke),
            We("dd", (function(e, t) {
                return t.weekdaysMinRegex(e)
            }
            )),
            We("ddd", (function(e, t) {
                return t.weekdaysShortRegex(e)
            }
            )),
            We("dddd", (function(e, t) {
                return t.weekdaysRegex(e)
            }
            )),
            Ce(["dd", "ddd", "dddd"], (function(input, e, t, n) {
                var r = t._locale.weekdaysParse(input, n, t._strict);
                null != r ? e.d = r : k(t).invalidWeekday = input
            }
            )),
            Ce(["d", "e", "E"], (function(input, e, t, n) {
                e[n] = Ne(input)
            }
            ));
            var Ra = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
              , Ca = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
              , Ia = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
              , Ua = xe
              , Ga = xe
              , Va = xe;
            function qa(e, t) {
                var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Ja(n, this._week.dow) : e ? n[e.day()] : n
            }
            function Ba(e) {
                return !0 === e ? Ja(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }
            function Ka(e) {
                return !0 === e ? Ja(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }
            function Za(e, t, n) {
                var i, r, d, _ = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    i = 0; i < 7; ++i)
                        d = y([2e3, 1]).day(i),
                        this._minWeekdaysParse[i] = this.weekdaysMin(d, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[i] = this.weekdaysShort(d, "").toLocaleLowerCase(),
                        this._weekdaysParse[i] = this.weekdays(d, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (r = aa.call(this._weekdaysParse, _)) ? r : null : "ddd" === t ? -1 !== (r = aa.call(this._shortWeekdaysParse, _)) ? r : null : -1 !== (r = aa.call(this._minWeekdaysParse, _)) ? r : null : "dddd" === t ? -1 !== (r = aa.call(this._weekdaysParse, _)) || -1 !== (r = aa.call(this._shortWeekdaysParse, _)) || -1 !== (r = aa.call(this._minWeekdaysParse, _)) ? r : null : "ddd" === t ? -1 !== (r = aa.call(this._shortWeekdaysParse, _)) || -1 !== (r = aa.call(this._weekdaysParse, _)) || -1 !== (r = aa.call(this._minWeekdaysParse, _)) ? r : null : -1 !== (r = aa.call(this._minWeekdaysParse, _)) || -1 !== (r = aa.call(this._weekdaysParse, _)) || -1 !== (r = aa.call(this._shortWeekdaysParse, _)) ? r : null
            }
            function $a(e, t, n) {
                var i, r, d;
                if (this._weekdaysParseExact)
                    return Za.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                i = 0; i < 7; i++) {
                    if (r = y([2e3, 1]).day(i),
                    n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$","i"),
                    this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$","i"),
                    this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$","i")),
                    this._weekdaysParse[i] || (d = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""),
                    this._weekdaysParse[i] = new RegExp(d.replace(".", ""),"i")),
                    n && "dddd" === t && this._fullWeekdaysParse[i].test(e))
                        return i;
                    if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e))
                        return i;
                    if (n && "dd" === t && this._minWeekdaysParse[i].test(e))
                        return i;
                    if (!n && this._weekdaysParse[i].test(e))
                        return i
                }
            }
            function Qa(input) {
                if (!this.isValid())
                    return null != input ? this : NaN;
                var e = ra(this, "Day");
                return null != input ? (input = za(input, this.localeData()),
                this.add(input - e, "d")) : e
            }
            function Xa(input) {
                if (!this.isValid())
                    return null != input ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == input ? e : this.add(input - e, "d")
            }
            function et(input) {
                if (!this.isValid())
                    return null != input ? this : NaN;
                if (null != input) {
                    var e = Na(input, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }
            function at(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || st.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Ua),
                this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }
            function tt(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || st.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ga),
                this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }
            function nt(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || st.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Va),
                this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }
            function st() {
                function e(a, b) {
                    return b.length - a.length
                }
                var i, t, n, r, d, _ = [], o = [], m = [], l = [];
                for (i = 0; i < 7; i++)
                    t = y([2e3, 1]).day(i),
                    n = Fe(this.weekdaysMin(t, "")),
                    r = Fe(this.weekdaysShort(t, "")),
                    d = Fe(this.weekdays(t, "")),
                    _.push(n),
                    o.push(r),
                    m.push(d),
                    l.push(n),
                    l.push(r),
                    l.push(d);
                _.sort(e),
                o.sort(e),
                m.sort(e),
                l.sort(e),
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")","i"),
                this._weekdaysShortRegex = this._weekdaysRegex,
                this._weekdaysMinRegex = this._weekdaysRegex,
                this._weekdaysStrictRegex = new RegExp("^(" + m.join("|") + ")","i"),
                this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
                this._weekdaysMinStrictRegex = new RegExp("^(" + _.join("|") + ")","i")
            }
            function it() {
                return this.hours() % 12 || 12
            }
            function _t() {
                return this.hours() || 24
            }
            function ot(e, t) {
                B(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }
                ))
            }
            function ut(e, t) {
                return t._meridiemParse
            }
            function mt(input) {
                return "p" === (input + "").toLowerCase().charAt(0)
            }
            B("H", ["HH", 2], 0, "hour"),
            B("h", ["hh", 2], 0, it),
            B("k", ["kk", 2], 0, _t),
            B("hmm", 0, 0, (function() {
                return "" + it.apply(this) + C(this.minutes(), 2)
            }
            )),
            B("hmmss", 0, 0, (function() {
                return "" + it.apply(this) + C(this.minutes(), 2) + C(this.seconds(), 2)
            }
            )),
            B("Hmm", 0, 0, (function() {
                return "" + this.hours() + C(this.minutes(), 2)
            }
            )),
            B("Hmmss", 0, 0, (function() {
                return "" + this.hours() + C(this.minutes(), 2) + C(this.seconds(), 2)
            }
            )),
            ot("a", !0),
            ot("A", !1),
            We("a", ut),
            We("A", ut),
            We("H", ke, Oe),
            We("h", ke, Pe),
            We("k", ke, Pe),
            We("HH", ke, Le),
            We("hh", ke, Le),
            We("kk", ke, Le),
            We("hmm", pe),
            We("hmmss", De),
            We("Hmm", pe),
            We("Hmmss", De),
            Re(["H", "HH"], Be),
            Re(["k", "kk"], (function(input, e, t) {
                var n = Ne(input);
                e[Be] = 24 === n ? 0 : n
            }
            )),
            Re(["a", "A"], (function(input, e, t) {
                t._isPm = t._locale.isPM(input),
                t._meridiem = input
            }
            )),
            Re(["h", "hh"], (function(input, e, t) {
                e[Be] = Ne(input),
                k(t).bigHour = !0
            }
            )),
            Re("hmm", (function(input, e, t) {
                var n = input.length - 2;
                e[Be] = Ne(input.substr(0, n)),
                e[Ke] = Ne(input.substr(n)),
                k(t).bigHour = !0
            }
            )),
            Re("hmmss", (function(input, e, t) {
                var n = input.length - 4
                  , r = input.length - 2;
                e[Be] = Ne(input.substr(0, n)),
                e[Ke] = Ne(input.substr(n, 2)),
                e[Ze] = Ne(input.substr(r)),
                k(t).bigHour = !0
            }
            )),
            Re("Hmm", (function(input, e, t) {
                var n = input.length - 2;
                e[Be] = Ne(input.substr(0, n)),
                e[Ke] = Ne(input.substr(n))
            }
            )),
            Re("Hmmss", (function(input, e, t) {
                var n = input.length - 4
                  , r = input.length - 2;
                e[Be] = Ne(input.substr(0, n)),
                e[Ke] = Ne(input.substr(n, 2)),
                e[Ze] = Ne(input.substr(r))
            }
            ));
            var lt = /[ap]\.?m?\.?/i
              , Mt = sa("Hours", !0);
            function ht(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }
            var ct, Lt = {
                calendar: J,
                longDateFormat: X,
                invalidDate: ae,
                ordinal: ne,
                dayOfMonthOrdinalParse: se,
                relativeTime: ie,
                months: ma,
                monthsShort: la,
                week: Oa,
                weekdays: Ra,
                weekdaysMin: Ia,
                weekdaysShort: Ca,
                meridiemParse: lt
            }, Yt = {}, yt = {};
            function ft(e, t) {
                var i, n = Math.min(e.length, t.length);
                for (i = 0; i < n; i += 1)
                    if (e[i] !== t[i])
                        return i;
                return n
            }
            function kt(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }
            function pt(e) {
                for (var t, n, r, d, i = 0; i < e.length; ) {
                    for (t = (d = kt(e[i]).split("-")).length,
                    n = (n = kt(e[i + 1])) ? n.split("-") : null; t > 0; ) {
                        if (r = Tt(d.slice(0, t).join("-")))
                            return r;
                        if (n && n.length >= t && ft(d, n) >= t - 1)
                            break;
                        t--
                    }
                    i++
                }
                return ct
            }
            function Dt(e) {
                return !(!e || !e.match("^[^/\\\\]*$"))
            }
            function Tt(t) {
                var r = null;
                if (void 0 === Yt[t] && void 0 !== e && e && e.exports && Dt(t))
                    try {
                        r = ct._abbr,
                        n(598)("./" + t),
                        gt(r)
                    } catch (e) {
                        Yt[t] = null
                    }
                return Yt[t]
            }
            function gt(e, t) {
                var data;
                return e && ((data = h(t) ? bt(e) : wt(e, t)) ? ct = data : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
                ct._abbr
            }
            function wt(e, t) {
                if (null !== t) {
                    var n, r = Lt;
                    if (t.abbr = e,
                    null != Yt[e])
                        A("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        r = Yt[e]._config;
                    else if (null != t.parentLocale)
                        if (null != Yt[t.parentLocale])
                            r = Yt[t.parentLocale]._config;
                        else {
                            if (null == (n = Tt(t.parentLocale)))
                                return yt[t.parentLocale] || (yt[t.parentLocale] = []),
                                yt[t.parentLocale].push({
                                    name: e,
                                    config: t
                                }),
                                null;
                            r = n._config
                        }
                    return Yt[e] = new N(z(r, t)),
                    yt[e] && yt[e].forEach((function(e) {
                        wt(e.name, e.config)
                    }
                    )),
                    gt(e),
                    Yt[e]
                }
                return delete Yt[e],
                null
            }
            function vt(e, t) {
                if (null != t) {
                    var n, r, d = Lt;
                    null != Yt[e] && null != Yt[e].parentLocale ? Yt[e].set(z(Yt[e]._config, t)) : (null != (r = Tt(e)) && (d = r._config),
                    t = z(d, t),
                    null == r && (t.abbr = e),
                    (n = new N(t)).parentLocale = Yt[e],
                    Yt[e] = n),
                    gt(e)
                } else
                    null != Yt[e] && (null != Yt[e].parentLocale ? (Yt[e] = Yt[e].parentLocale,
                    e === gt() && gt(e)) : null != Yt[e] && delete Yt[e]);
                return Yt[e]
            }
            function bt(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                !e)
                    return ct;
                if (!o(e)) {
                    if (t = Tt(e))
                        return t;
                    e = [e]
                }
                return pt(e)
            }
            function Ht() {
                return O(Yt)
            }
            function St(e) {
                var t, a = e._a;
                return a && -2 === k(e).overflow && (t = a[Ve] < 0 || a[Ve] > 11 ? Ve : a[qe] < 1 || a[qe] > ua(a[Ge], a[Ve]) ? qe : a[Be] < 0 || a[Be] > 24 || 24 === a[Be] && (0 !== a[Ke] || 0 !== a[Ze] || 0 !== a[$e]) ? Be : a[Ke] < 0 || a[Ke] > 59 ? Ke : a[Ze] < 0 || a[Ze] > 59 ? Ze : a[$e] < 0 || a[$e] > 999 ? $e : -1,
                k(e)._overflowDayOfYear && (t < Ge || t > qe) && (t = qe),
                k(e)._overflowWeeks && -1 === t && (t = Qe),
                k(e)._overflowWeekday && -1 === t && (t = Xe),
                k(e).overflow = t),
                e
            }
            var jt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
              , xt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
              , Pt = /Z|[+-]\d\d(?::?\d\d)?/
              , Ot = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
              , Wt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
              , At = /^\/?Date\((-?\d+)/i
              , Et = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
              , Ft = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            function zt(e) {
                var i, t, n, r, d, _, o = e._i, m = jt.exec(o) || xt.exec(o), l = Ot.length, M = Wt.length;
                if (m) {
                    for (k(e).iso = !0,
                    i = 0,
                    t = l; i < t; i++)
                        if (Ot[i][1].exec(m[1])) {
                            r = Ot[i][0],
                            n = !1 !== Ot[i][2];
                            break
                        }
                    if (null == r)
                        return void (e._isValid = !1);
                    if (m[3]) {
                        for (i = 0,
                        t = M; i < t; i++)
                            if (Wt[i][1].exec(m[3])) {
                                d = (m[2] || " ") + Wt[i][0];
                                break
                            }
                        if (null == d)
                            return void (e._isValid = !1)
                    }
                    if (!n && null != d)
                        return void (e._isValid = !1);
                    if (m[4]) {
                        if (!Pt.exec(m[4]))
                            return void (e._isValid = !1);
                        _ = "Z"
                    }
                    e._f = r + (d || "") + (_ || ""),
                    Zt(e)
                } else
                    e._isValid = !1
            }
            function Nt(e, t, n, r, d, _) {
                var o = [Jt(e), la.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(d, 10)];
                return _ && o.push(parseInt(_, 10)),
                o
            }
            function Jt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }
            function Rt(s) {
                return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }
            function Ct(e, t, n) {
                return !e || Ca.indexOf(e) === new Date(t[0],t[1],t[2]).getDay() || (k(n).weekdayMismatch = !0,
                n._isValid = !1,
                !1)
            }
            function It(e, t, n) {
                if (e)
                    return Ft[e];
                if (t)
                    return 0;
                var r = parseInt(n, 10)
                  , d = r % 100;
                return (r - d) / 100 * 60 + d
            }
            function Ut(e) {
                var t, n = Et.exec(Rt(e._i));
                if (n) {
                    if (t = Nt(n[4], n[3], n[2], n[5], n[6], n[7]),
                    !Ct(n[1], t, e))
                        return;
                    e._a = t,
                    e._tzm = It(n[8], n[9], n[10]),
                    e._d = ba.apply(null, e._a),
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    k(e).rfc2822 = !0
                } else
                    e._isValid = !1
            }
            function Gt(e) {
                var t = At.exec(e._i);
                null === t ? (zt(e),
                !1 === e._isValid && (delete e._isValid,
                Ut(e),
                !1 === e._isValid && (delete e._isValid,
                e._strict ? e._isValid = !1 : d.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }
            function Vt(a, b, e) {
                return null != a ? a : null != b ? b : e
            }
            function qt(e) {
                var t = new Date(d.now());
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }
            function Bt(e) {
                var i, t, n, r, d, input = [];
                if (!e._d) {
                    for (n = qt(e),
                    e._w && null == e._a[qe] && null == e._a[Ve] && Kt(e),
                    null != e._dayOfYear && (d = Vt(e._a[Ge], n[Ge]),
                    (e._dayOfYear > ea(d) || 0 === e._dayOfYear) && (k(e)._overflowDayOfYear = !0),
                    t = ba(d, 0, e._dayOfYear),
                    e._a[Ve] = t.getUTCMonth(),
                    e._a[qe] = t.getUTCDate()),
                    i = 0; i < 3 && null == e._a[i]; ++i)
                        e._a[i] = input[i] = n[i];
                    for (; i < 7; i++)
                        e._a[i] = input[i] = null == e._a[i] ? 2 === i ? 1 : 0 : e._a[i];
                    24 === e._a[Be] && 0 === e._a[Ke] && 0 === e._a[Ze] && 0 === e._a[$e] && (e._nextDay = !0,
                    e._a[Be] = 0),
                    e._d = (e._useUTC ? ba : va).apply(null, input),
                    r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
                    null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    e._nextDay && (e._a[Be] = 24),
                    e._w && void 0 !== e._w.d && e._w.d !== r && (k(e).weekdayMismatch = !0)
                }
            }
            function Kt(e) {
                var t, n, r, d, _, o, m, l, M;
                null != (t = e._w).GG || null != t.W || null != t.E ? (_ = 1,
                o = 4,
                n = Vt(t.GG, e._a[Ge], ja(sn(), 1, 4).year),
                r = Vt(t.W, 1),
                ((d = Vt(t.E, 1)) < 1 || d > 7) && (l = !0)) : (_ = e._locale._week.dow,
                o = e._locale._week.doy,
                M = ja(sn(), _, o),
                n = Vt(t.gg, e._a[Ge], M.year),
                r = Vt(t.w, M.week),
                null != t.d ? ((d = t.d) < 0 || d > 6) && (l = !0) : null != t.e ? (d = t.e + _,
                (t.e < 0 || t.e > 6) && (l = !0)) : d = _),
                r < 1 || r > xa(n, _, o) ? k(e)._overflowWeeks = !0 : null != l ? k(e)._overflowWeekday = !0 : (m = Sa(n, r, d, _, o),
                e._a[Ge] = m.year,
                e._dayOfYear = m.dayOfYear)
            }
            function Zt(e) {
                if (e._f !== d.ISO_8601)
                    if (e._f !== d.RFC_2822) {
                        e._a = [],
                        k(e).empty = !0;
                        var i, t, n, r, _, o, m, l = "" + e._i, M = l.length, h = 0;
                        for (m = (n = Q(e._f, e._locale).match(I) || []).length,
                        i = 0; i < m; i++)
                            r = n[i],
                            (t = (l.match(Ae(r, e)) || [])[0]) && ((_ = l.substr(0, l.indexOf(t))).length > 0 && k(e).unusedInput.push(_),
                            l = l.slice(l.indexOf(t) + t.length),
                            h += t.length),
                            V[r] ? (t ? k(e).empty = !1 : k(e).unusedTokens.push(r),
                            Ie(r, t, e)) : e._strict && !t && k(e).unusedTokens.push(r);
                        k(e).charsLeftOver = M - h,
                        l.length > 0 && k(e).unusedInput.push(l),
                        e._a[Be] <= 12 && !0 === k(e).bigHour && e._a[Be] > 0 && (k(e).bigHour = void 0),
                        k(e).parsedDateParts = e._a.slice(0),
                        k(e).meridiem = e._meridiem,
                        e._a[Be] = $t(e._locale, e._a[Be], e._meridiem),
                        null !== (o = k(e).era) && (e._a[Ge] = e._locale.erasConvertYear(o, e._a[Ge])),
                        Bt(e),
                        St(e)
                    } else
                        Ut(e);
                else
                    zt(e)
            }
            function $t(e, t, n) {
                var r;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12),
                r || 12 !== t || (t = 0),
                t) : t
            }
            function Qt(e) {
                var t, n, r, i, d, _, o = !1, m = e._f.length;
                if (0 === m)
                    return k(e).invalidFormat = !0,
                    void (e._d = new Date(NaN));
                for (i = 0; i < m; i++)
                    d = 0,
                    _ = !1,
                    t = H({}, e),
                    null != e._useUTC && (t._useUTC = e._useUTC),
                    t._f = e._f[i],
                    Zt(t),
                    D(t) && (_ = !0),
                    d += k(t).charsLeftOver,
                    d += 10 * k(t).unusedTokens.length,
                    k(t).score = d,
                    o ? d < r && (r = d,
                    n = t) : (null == r || d < r || _) && (r = d,
                    n = t,
                    _ && (o = !0));
                Y(e, n || t)
            }
            function Xt(e) {
                if (!e._d) {
                    var i = me(e._i)
                      , t = void 0 === i.day ? i.date : i.day;
                    e._a = map([i.year, i.month, t, i.hour, i.minute, i.second, i.millisecond], (function(e) {
                        return e && parseInt(e, 10)
                    }
                    )),
                    Bt(e)
                }
            }
            function en(e) {
                var t = new S(St(an(e)));
                return t._nextDay && (t.add(1, "d"),
                t._nextDay = void 0),
                t
            }
            function an(e) {
                var input = e._i
                  , t = e._f;
                return e._locale = e._locale || bt(e._l),
                null === input || void 0 === t && "" === input ? T({
                    nullInput: !0
                }) : ("string" == typeof input && (e._i = input = e._locale.preparse(input)),
                j(input) ? new S(St(input)) : (L(input) ? e._d = input : o(t) ? Qt(e) : t ? Zt(e) : tn(e),
                D(e) || (e._d = null),
                e))
            }
            function tn(e) {
                var input = e._i;
                h(input) ? e._d = new Date(d.now()) : L(input) ? e._d = new Date(input.valueOf()) : "string" == typeof input ? Gt(e) : o(input) ? (e._a = map(input.slice(0), (function(e) {
                    return parseInt(e, 10)
                }
                )),
                Bt(e)) : m(input) ? Xt(e) : c(input) ? e._d = new Date(input) : d.createFromInputFallback(e)
            }
            function nn(input, e, t, n, r) {
                var d = {};
                return !0 !== e && !1 !== e || (n = e,
                e = void 0),
                !0 !== t && !1 !== t || (n = t,
                t = void 0),
                (m(input) && M(input) || o(input) && 0 === input.length) && (input = void 0),
                d._isAMomentObject = !0,
                d._useUTC = d._isUTC = r,
                d._l = t,
                d._i = input,
                d._f = e,
                d._strict = n,
                en(d)
            }
            function sn(input, e, t, n) {
                return nn(input, e, t, n, !1)
            }
            d.createFromInputFallback = P("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }
            )),
            d.ISO_8601 = function() {}
            ,
            d.RFC_2822 = function() {}
            ;
            var rn = P("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = sn.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : T()
            }
            ))
              , dn = P("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = sn.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : T()
            }
            ));
            function _n(e, t) {
                var n, i;
                if (1 === t.length && o(t[0]) && (t = t[0]),
                !t.length)
                    return sn();
                for (n = t[0],
                i = 1; i < t.length; ++i)
                    t[i].isValid() && !t[i][e](n) || (n = t[i]);
                return n
            }
            function on() {
                return _n("isBefore", [].slice.call(arguments, 0))
            }
            function un() {
                return _n("isAfter", [].slice.call(arguments, 0))
            }
            var mn = function() {
                return Date.now ? Date.now() : +new Date
            }
              , ln = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            function Mn(e) {
                var t, i, n = !1, r = ln.length;
                for (t in e)
                    if (l(e, t) && (-1 === aa.call(ln, t) || null != e[t] && isNaN(e[t])))
                        return !1;
                for (i = 0; i < r; ++i)
                    if (e[ln[i]]) {
                        if (n)
                            return !1;
                        parseFloat(e[ln[i]]) !== Ne(e[ln[i]]) && (n = !0)
                    }
                return !0
            }
            function hn() {
                return this._isValid
            }
            function cn() {
                return zn(NaN)
            }
            function Ln(e) {
                var t = me(e)
                  , n = t.year || 0
                  , r = t.quarter || 0
                  , d = t.month || 0
                  , _ = t.week || t.isoWeek || 0
                  , o = t.day || 0
                  , m = t.hour || 0
                  , l = t.minute || 0
                  , M = t.second || 0
                  , h = t.millisecond || 0;
                this._isValid = Mn(t),
                this._milliseconds = +h + 1e3 * M + 6e4 * l + 1e3 * m * 60 * 60,
                this._days = +o + 7 * _,
                this._months = +d + 3 * r + 12 * n,
                this._data = {},
                this._locale = bt(),
                this._bubble()
            }
            function Yn(e) {
                return e instanceof Ln
            }
            function yn(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }
            function fn(e, t, n) {
                var i, r = Math.min(e.length, t.length), d = Math.abs(e.length - t.length), _ = 0;
                for (i = 0; i < r; i++)
                    (n && e[i] !== t[i] || !n && Ne(e[i]) !== Ne(t[i])) && _++;
                return _ + d
            }
            function kn(e, t) {
                B(e, 0, 0, (function() {
                    var e = this.utcOffset()
                      , n = "+";
                    return e < 0 && (e = -e,
                    n = "-"),
                    n + C(~~(e / 60), 2) + t + C(~~e % 60, 2)
                }
                ))
            }
            kn("Z", ":"),
            kn("ZZ", ""),
            We("Z", Se),
            We("ZZ", Se),
            Re(["Z", "ZZ"], (function(input, e, t) {
                t._useUTC = !0,
                t._tzm = Dn(Se, input)
            }
            ));
            var pn = /([\+\-]|\d\d)/gi;
            function Dn(e, t) {
                var n, r, d = (t || "").match(e);
                return null === d ? null : 0 === (r = 60 * (n = ((d[d.length - 1] || []) + "").match(pn) || ["-", 0, 0])[1] + Ne(n[2])) ? 0 : "+" === n[0] ? r : -r
            }
            function Tn(input, e) {
                var t, n;
                return e._isUTC ? (t = e.clone(),
                n = (j(input) || L(input) ? input.valueOf() : sn(input).valueOf()) - t.valueOf(),
                t._d.setTime(t._d.valueOf() + n),
                d.updateOffset(t, !1),
                t) : sn(input).local()
            }
            function gn(e) {
                return -Math.round(e._d.getTimezoneOffset())
            }
            function wn(input, e, t) {
                var n, r = this._offset || 0;
                if (!this.isValid())
                    return null != input ? this : NaN;
                if (null != input) {
                    if ("string" == typeof input) {
                        if (null === (input = Dn(Se, input)))
                            return this
                    } else
                        Math.abs(input) < 16 && !t && (input *= 60);
                    return !this._isUTC && e && (n = gn(this)),
                    this._offset = input,
                    this._isUTC = !0,
                    null != n && this.add(n, "m"),
                    r !== input && (!e || this._changeInProgress ? In(this, zn(input - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                    d.updateOffset(this, !0),
                    this._changeInProgress = null)),
                    this
                }
                return this._isUTC ? r : gn(this)
            }
            function vn(input, e) {
                return null != input ? ("string" != typeof input && (input = -input),
                this.utcOffset(input, e),
                this) : -this.utcOffset()
            }
            function bn(e) {
                return this.utcOffset(0, e)
            }
            function Hn(e) {
                return this._isUTC && (this.utcOffset(0, e),
                this._isUTC = !1,
                e && this.subtract(gn(this), "m")),
                this
            }
            function Sn() {
                if (null != this._tzm)
                    this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = Dn(He, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }
            function jn(input) {
                return !!this.isValid() && (input = input ? sn(input).utcOffset() : 0,
                (this.utcOffset() - input) % 60 == 0)
            }
            function xn() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            function Pn() {
                if (!h(this._isDSTShifted))
                    return this._isDSTShifted;
                var e, t = {};
                return H(t, this),
                (t = an(t))._a ? (e = t._isUTC ? y(t._a) : sn(t._a),
                this._isDSTShifted = this.isValid() && fn(t._a, e.toArray()) > 0) : this._isDSTShifted = !1,
                this._isDSTShifted
            }
            function On() {
                return !!this.isValid() && !this._isUTC
            }
            function Wn() {
                return !!this.isValid() && this._isUTC
            }
            function An() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            d.updateOffset = function() {}
            ;
            var En = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
              , Fn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            function zn(input, e) {
                var t, n, r, d = input, _ = null;
                return Yn(input) ? d = {
                    ms: input._milliseconds,
                    d: input._days,
                    M: input._months
                } : c(input) || !isNaN(+input) ? (d = {},
                e ? d[e] = +input : d.milliseconds = +input) : (_ = En.exec(input)) ? (t = "-" === _[1] ? -1 : 1,
                d = {
                    y: 0,
                    d: Ne(_[qe]) * t,
                    h: Ne(_[Be]) * t,
                    m: Ne(_[Ke]) * t,
                    s: Ne(_[Ze]) * t,
                    ms: Ne(yn(1e3 * _[$e])) * t
                }) : (_ = Fn.exec(input)) ? (t = "-" === _[1] ? -1 : 1,
                d = {
                    y: Nn(_[2], t),
                    M: Nn(_[3], t),
                    w: Nn(_[4], t),
                    d: Nn(_[5], t),
                    h: Nn(_[6], t),
                    m: Nn(_[7], t),
                    s: Nn(_[8], t)
                }) : null == d ? d = {} : "object" == typeof d && ("from"in d || "to"in d) && (r = Rn(sn(d.from), sn(d.to)),
                (d = {}).ms = r.milliseconds,
                d.M = r.months),
                n = new Ln(d),
                Yn(input) && l(input, "_locale") && (n._locale = input._locale),
                Yn(input) && l(input, "_isValid") && (n._isValid = input._isValid),
                n
            }
            function Nn(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }
            function Jn(base, e) {
                var t = {};
                return t.months = e.month() - base.month() + 12 * (e.year() - base.year()),
                base.clone().add(t.months, "M").isAfter(e) && --t.months,
                t.milliseconds = +e - +base.clone().add(t.months, "M"),
                t
            }
            function Rn(base, e) {
                var t;
                return base.isValid() && e.isValid() ? (e = Tn(e, base),
                base.isBefore(e) ? t = Jn(base, e) : ((t = Jn(e, base)).milliseconds = -t.milliseconds,
                t.months = -t.months),
                t) : {
                    milliseconds: 0,
                    months: 0
                }
            }
            function Cn(e, t) {
                return function(n, r) {
                    var d;
                    return null === r || isNaN(+r) || (A(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                    d = n,
                    n = r,
                    r = d),
                    In(this, zn(n, r), e),
                    this
                }
            }
            function In(e, t, n, r) {
                var _ = t._milliseconds
                  , o = yn(t._days)
                  , m = yn(t._months);
                e.isValid() && (r = null == r || r,
                m && ka(e, ra(e, "Month") + m * n),
                o && ia(e, "Date", ra(e, "Date") + o * n),
                _ && e._d.setTime(e._d.valueOf() + _ * n),
                r && d.updateOffset(e, o || m))
            }
            zn.fn = Ln.prototype,
            zn.invalid = cn;
            var Un = Cn(1, "add")
              , Gn = Cn(-1, "subtract");
            function Vn(input) {
                return "string" == typeof input || input instanceof String
            }
            function qn(input) {
                return j(input) || L(input) || Vn(input) || c(input) || Kn(input) || Bn(input) || null == input
            }
            function Bn(input) {
                var i, e, t = m(input) && !M(input), n = !1, r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], d = r.length;
                for (i = 0; i < d; i += 1)
                    e = r[i],
                    n = n || l(input, e);
                return t && n
            }
            function Kn(input) {
                var e = o(input)
                  , t = !1;
                return e && (t = 0 === input.filter((function(e) {
                    return !c(e) && Vn(input)
                }
                )).length),
                e && t
            }
            function Zn(input) {
                var i, e, t = m(input) && !M(input), n = !1, r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (i = 0; i < r.length; i += 1)
                    e = r[i],
                    n = n || l(input, e);
                return t && n
            }
            function $n(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }
            function Qn(time, e) {
                1 === arguments.length && (arguments[0] ? qn(arguments[0]) ? (time = arguments[0],
                e = void 0) : Zn(arguments[0]) && (e = arguments[0],
                time = void 0) : (time = void 0,
                e = void 0));
                var t = time || sn()
                  , n = Tn(t, this).startOf("day")
                  , r = d.calendarFormat(this, n) || "sameElse"
                  , output = e && (E(e[r]) ? e[r].call(this, t) : e[r]);
                return this.format(output || this.localeData().calendar(r, this, sn(t)))
            }
            function Xn() {
                return new S(this)
            }
            function es(input, e) {
                var t = j(input) ? input : sn(input);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = ue(e) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(e).valueOf())
            }
            function as(input, e) {
                var t = j(input) ? input : sn(input);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = ue(e) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(e).valueOf() < t.valueOf())
            }
            function ts(e, t, n, r) {
                var d = j(e) ? e : sn(e)
                  , _ = j(t) ? t : sn(t);
                return !!(this.isValid() && d.isValid() && _.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(d, n) : !this.isBefore(d, n)) && (")" === r[1] ? this.isBefore(_, n) : !this.isAfter(_, n))
            }
            function ns(input, e) {
                var t, n = j(input) ? input : sn(input);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = ue(e) || "millisecond") ? this.valueOf() === n.valueOf() : (t = n.valueOf(),
                this.clone().startOf(e).valueOf() <= t && t <= this.clone().endOf(e).valueOf()))
            }
            function ss(input, e) {
                return this.isSame(input, e) || this.isAfter(input, e)
            }
            function rs(input, e) {
                return this.isSame(input, e) || this.isBefore(input, e)
            }
            function is(input, e, t) {
                var n, r, output;
                if (!this.isValid())
                    return NaN;
                if (!(n = Tn(input, this)).isValid())
                    return NaN;
                switch (r = 6e4 * (n.utcOffset() - this.utcOffset()),
                e = ue(e)) {
                case "year":
                    output = ds(this, n) / 12;
                    break;
                case "month":
                    output = ds(this, n);
                    break;
                case "quarter":
                    output = ds(this, n) / 3;
                    break;
                case "second":
                    output = (this - n) / 1e3;
                    break;
                case "minute":
                    output = (this - n) / 6e4;
                    break;
                case "hour":
                    output = (this - n) / 36e5;
                    break;
                case "day":
                    output = (this - n - r) / 864e5;
                    break;
                case "week":
                    output = (this - n - r) / 6048e5;
                    break;
                default:
                    output = this - n
                }
                return t ? output : ze(output)
            }
            function ds(a, b) {
                if (a.date() < b.date())
                    return -ds(b, a);
                var e = 12 * (b.year() - a.year()) + (b.month() - a.month())
                  , t = a.clone().add(e, "months");
                return -(e + (b - t < 0 ? (b - t) / (t - a.clone().add(e - 1, "months")) : (b - t) / (a.clone().add(e + 1, "months") - t))) || 0
            }
            function _s() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            function os(e) {
                if (!this.isValid())
                    return null;
                var t = !0 !== e
                  , n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? $(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", $(n, "Z")) : $(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }
            function us() {
                if (!this.isValid())
                    return "moment.invalid(/* " + this._i + " */)";
                var e, t, n, r, d = "moment", _ = "";
                return this.isLocal() || (d = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                _ = "Z"),
                e = "[" + d + '("]',
                t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                n = "-MM-DD[T]HH:mm:ss.SSS",
                r = _ + '[")]',
                this.format(e + t + n + r)
            }
            function ms(e) {
                e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
                var output = $(this, e);
                return this.localeData().postformat(output)
            }
            function ls(time, e) {
                return this.isValid() && (j(time) && time.isValid() || sn(time).isValid()) ? zn({
                    to: this,
                    from: time
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }
            function Ms(e) {
                return this.from(sn(), e)
            }
            function hs(time, e) {
                return this.isValid() && (j(time) && time.isValid() || sn(time).isValid()) ? zn({
                    from: this,
                    to: time
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }
            function cs(e) {
                return this.to(sn(), e)
            }
            function Ls(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = bt(e)) && (this._locale = t),
                this)
            }
            d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Ys = P("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }
            ));
            function ys() {
                return this._locale
            }
            var fs = 1e3
              , ks = 60 * fs
              , ps = 60 * ks
              , Ds = 3506328 * ps;
            function Ts(e, t) {
                return (e % t + t) % t
            }
            function gs(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400,t,n) - Ds : new Date(e,t,n).valueOf()
            }
            function ws(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Ds : Date.UTC(e, t, n)
            }
            function vs(e) {
                var time, t;
                if (void 0 === (e = ue(e)) || "millisecond" === e || !this.isValid())
                    return this;
                switch (t = this._isUTC ? ws : gs,
                e) {
                case "year":
                    time = t(this.year(), 0, 1);
                    break;
                case "quarter":
                    time = t(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    time = t(this.year(), this.month(), 1);
                    break;
                case "week":
                    time = t(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    time = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    time = t(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    time = this._d.valueOf(),
                    time -= Ts(time + (this._isUTC ? 0 : this.utcOffset() * ks), ps);
                    break;
                case "minute":
                    time = this._d.valueOf(),
                    time -= Ts(time, ks);
                    break;
                case "second":
                    time = this._d.valueOf(),
                    time -= Ts(time, fs)
                }
                return this._d.setTime(time),
                d.updateOffset(this, !0),
                this
            }
            function bs(e) {
                var time, t;
                if (void 0 === (e = ue(e)) || "millisecond" === e || !this.isValid())
                    return this;
                switch (t = this._isUTC ? ws : gs,
                e) {
                case "year":
                    time = t(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    time = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    time = t(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    time = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    time = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    time = t(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    time = this._d.valueOf(),
                    time += ps - Ts(time + (this._isUTC ? 0 : this.utcOffset() * ks), ps) - 1;
                    break;
                case "minute":
                    time = this._d.valueOf(),
                    time += ks - Ts(time, ks) - 1;
                    break;
                case "second":
                    time = this._d.valueOf(),
                    time += fs - Ts(time, fs) - 1
                }
                return this._d.setTime(time),
                d.updateOffset(this, !0),
                this
            }
            function Hs() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            function Ss() {
                return Math.floor(this.valueOf() / 1e3)
            }
            function js() {
                return new Date(this.valueOf())
            }
            function xs() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }
            function Ps() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }
            function Os() {
                return this.isValid() ? this.toISOString() : null
            }
            function Ws() {
                return D(this)
            }
            function As() {
                return Y({}, k(this))
            }
            function Es() {
                return k(this).overflow
            }
            function Fs() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            function zs(e, t) {
                var i, n, r, _ = this._eras || bt("en")._eras;
                for (i = 0,
                n = _.length; i < n; ++i)
                    switch ("string" == typeof _[i].since && (r = d(_[i].since).startOf("day"),
                    _[i].since = r.valueOf()),
                    typeof _[i].until) {
                    case "undefined":
                        _[i].until = 1 / 0;
                        break;
                    case "string":
                        r = d(_[i].until).startOf("day").valueOf(),
                        _[i].until = r.valueOf()
                    }
                return _
            }
            function Ns(e, t, n) {
                var i, r, d, abbr, _, o = this.eras();
                for (e = e.toUpperCase(),
                i = 0,
                r = o.length; i < r; ++i)
                    if (d = o[i].name.toUpperCase(),
                    abbr = o[i].abbr.toUpperCase(),
                    _ = o[i].narrow.toUpperCase(),
                    n)
                        switch (t) {
                        case "N":
                        case "NN":
                        case "NNN":
                            if (abbr === e)
                                return o[i];
                            break;
                        case "NNNN":
                            if (d === e)
                                return o[i];
                            break;
                        case "NNNNN":
                            if (_ === e)
                                return o[i]
                        }
                    else if ([d, abbr, _].indexOf(e) >= 0)
                        return o[i]
            }
            function Js(e, t) {
                var n = e.since <= e.until ? 1 : -1;
                return void 0 === t ? d(e.since).year() : d(e.since).year() + (t - e.offset) * n
            }
            function Rs() {
                var i, e, t, n = this.localeData().eras();
                for (i = 0,
                e = n.length; i < e; ++i) {
                    if (t = this.clone().startOf("day").valueOf(),
                    n[i].since <= t && t <= n[i].until)
                        return n[i].name;
                    if (n[i].until <= t && t <= n[i].since)
                        return n[i].name
                }
                return ""
            }
            function Cs() {
                var i, e, t, n = this.localeData().eras();
                for (i = 0,
                e = n.length; i < e; ++i) {
                    if (t = this.clone().startOf("day").valueOf(),
                    n[i].since <= t && t <= n[i].until)
                        return n[i].narrow;
                    if (n[i].until <= t && t <= n[i].since)
                        return n[i].narrow
                }
                return ""
            }
            function Is() {
                var i, e, t, n = this.localeData().eras();
                for (i = 0,
                e = n.length; i < e; ++i) {
                    if (t = this.clone().startOf("day").valueOf(),
                    n[i].since <= t && t <= n[i].until)
                        return n[i].abbr;
                    if (n[i].until <= t && t <= n[i].since)
                        return n[i].abbr
                }
                return ""
            }
            function Us() {
                var i, e, t, n, r = this.localeData().eras();
                for (i = 0,
                e = r.length; i < e; ++i)
                    if (t = r[i].since <= r[i].until ? 1 : -1,
                    n = this.clone().startOf("day").valueOf(),
                    r[i].since <= n && n <= r[i].until || r[i].until <= n && n <= r[i].since)
                        return (this.year() - d(r[i].since).year()) * t + r[i].offset;
                return this.year()
            }
            function Gs(e) {
                return l(this, "_erasNameRegex") || Qs.call(this),
                e ? this._erasNameRegex : this._erasRegex
            }
            function Vs(e) {
                return l(this, "_erasAbbrRegex") || Qs.call(this),
                e ? this._erasAbbrRegex : this._erasRegex
            }
            function qs(e) {
                return l(this, "_erasNarrowRegex") || Qs.call(this),
                e ? this._erasNarrowRegex : this._erasRegex
            }
            function Bs(e, t) {
                return t.erasAbbrRegex(e)
            }
            function Ks(e, t) {
                return t.erasNameRegex(e)
            }
            function Zs(e, t) {
                return t.erasNarrowRegex(e)
            }
            function $s(e, t) {
                return t._eraYearOrdinalRegex || ve
            }
            function Qs() {
                var i, e, t, n, r, d = [], _ = [], o = [], m = [], l = this.eras();
                for (i = 0,
                e = l.length; i < e; ++i)
                    t = Fe(l[i].name),
                    n = Fe(l[i].abbr),
                    r = Fe(l[i].narrow),
                    _.push(t),
                    d.push(n),
                    o.push(r),
                    m.push(t),
                    m.push(n),
                    m.push(r);
                this._erasRegex = new RegExp("^(" + m.join("|") + ")","i"),
                this._erasNameRegex = new RegExp("^(" + _.join("|") + ")","i"),
                this._erasAbbrRegex = new RegExp("^(" + d.join("|") + ")","i"),
                this._erasNarrowRegex = new RegExp("^(" + o.join("|") + ")","i")
            }
            function Xs(e, t) {
                B(0, [e, e.length], 0, t)
            }
            function er(input) {
                return dr.call(this, input, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
            }
            function ar(input) {
                return dr.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            function nr() {
                return xa(this.year(), 1, 4)
            }
            function sr() {
                return xa(this.isoWeekYear(), 1, 4)
            }
            function rr() {
                var e = this.localeData()._week;
                return xa(this.year(), e.dow, e.doy)
            }
            function ir() {
                var e = this.localeData()._week;
                return xa(this.weekYear(), e.dow, e.doy)
            }
            function dr(input, e, t, n, r) {
                var d;
                return null == input ? ja(this, n, r).year : (e > (d = xa(input, n, r)) && (e = d),
                _r.call(this, input, e, t, n, r))
            }
            function _r(e, t, n, r, d) {
                var _ = Sa(e, t, n, r, d)
                  , o = ba(_.year, 0, _.dayOfYear);
                return this.year(o.getUTCFullYear()),
                this.month(o.getUTCMonth()),
                this.date(o.getUTCDate()),
                this
            }
            function or(input) {
                return null == input ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (input - 1) + this.month() % 3)
            }
            B("N", 0, 0, "eraAbbr"),
            B("NN", 0, 0, "eraAbbr"),
            B("NNN", 0, 0, "eraAbbr"),
            B("NNNN", 0, 0, "eraName"),
            B("NNNNN", 0, 0, "eraNarrow"),
            B("y", ["y", 1], "yo", "eraYear"),
            B("y", ["yy", 2], 0, "eraYear"),
            B("y", ["yyy", 3], 0, "eraYear"),
            B("y", ["yyyy", 4], 0, "eraYear"),
            We("N", Bs),
            We("NN", Bs),
            We("NNN", Bs),
            We("NNNN", Ks),
            We("NNNNN", Zs),
            Re(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(input, e, t, n) {
                var r = t._locale.erasParse(input, n, t._strict);
                r ? k(t).era = r : k(t).invalidEra = input
            }
            )),
            We("y", ve),
            We("yy", ve),
            We("yyy", ve),
            We("yyyy", ve),
            We("yo", $s),
            Re(["y", "yy", "yyy", "yyyy"], Ge),
            Re(["yo"], (function(input, e, t, n) {
                var r;
                t._locale._eraYearOrdinalRegex && (r = input.match(t._locale._eraYearOrdinalRegex)),
                t._locale.eraYearOrdinalParse ? e[Ge] = t._locale.eraYearOrdinalParse(input, r) : e[Ge] = parseInt(input, 10)
            }
            )),
            B(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            }
            )),
            B(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            }
            )),
            Xs("gggg", "weekYear"),
            Xs("ggggg", "weekYear"),
            Xs("GGGG", "isoWeekYear"),
            Xs("GGGGG", "isoWeekYear"),
            We("G", be),
            We("g", be),
            We("GG", ke, Le),
            We("gg", ke, Le),
            We("GGGG", ge, ye),
            We("gggg", ge, ye),
            We("GGGGG", we, fe),
            We("ggggg", we, fe),
            Ce(["gggg", "ggggg", "GGGG", "GGGGG"], (function(input, e, t, n) {
                e[n.substr(0, 2)] = Ne(input)
            }
            )),
            Ce(["gg", "GG"], (function(input, e, t, n) {
                e[n] = d.parseTwoDigitYear(input)
            }
            )),
            B("Q", 0, "Qo", "quarter"),
            We("Q", ce),
            Re("Q", (function(input, e) {
                e[Ve] = 3 * (Ne(input) - 1)
            }
            )),
            B("D", ["DD", 2], "Do", "date"),
            We("D", ke, Pe),
            We("DD", ke, Le),
            We("Do", (function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }
            )),
            Re(["D", "DD"], qe),
            Re("Do", (function(input, e) {
                e[qe] = Ne(input.match(ke)[0])
            }
            ));
            var ur = sa("Date", !0);
            function mr(input) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == input ? e : this.add(input - e, "d")
            }
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            We("DDD", Te),
            We("DDDD", Ye),
            Re(["DDD", "DDDD"], (function(input, e, t) {
                t._dayOfYear = Ne(input)
            }
            )),
            B("m", ["mm", 2], 0, "minute"),
            We("m", ke, Oe),
            We("mm", ke, Le),
            Re(["m", "mm"], Ke);
            var lr = sa("Minutes", !1);
            B("s", ["ss", 2], 0, "second"),
            We("s", ke, Oe),
            We("ss", ke, Le),
            Re(["s", "ss"], Ze);
            var Mr, cr, Lr = sa("Seconds", !1);
            for (B("S", 0, 0, (function() {
                return ~~(this.millisecond() / 100)
            }
            )),
            B(0, ["SS", 2], 0, (function() {
                return ~~(this.millisecond() / 10)
            }
            )),
            B(0, ["SSS", 3], 0, "millisecond"),
            B(0, ["SSSS", 4], 0, (function() {
                return 10 * this.millisecond()
            }
            )),
            B(0, ["SSSSS", 5], 0, (function() {
                return 100 * this.millisecond()
            }
            )),
            B(0, ["SSSSSS", 6], 0, (function() {
                return 1e3 * this.millisecond()
            }
            )),
            B(0, ["SSSSSSS", 7], 0, (function() {
                return 1e4 * this.millisecond()
            }
            )),
            B(0, ["SSSSSSSS", 8], 0, (function() {
                return 1e5 * this.millisecond()
            }
            )),
            B(0, ["SSSSSSSSS", 9], 0, (function() {
                return 1e6 * this.millisecond()
            }
            )),
            We("S", Te, ce),
            We("SS", Te, Le),
            We("SSS", Te, Ye),
            Mr = "SSSS"; Mr.length <= 9; Mr += "S")
                We(Mr, ve);
            function Yr(input, e) {
                e[$e] = Ne(1e3 * ("0." + input))
            }
            for (Mr = "S"; Mr.length <= 9; Mr += "S")
                Re(Mr, Yr);
            function yr() {
                return this._isUTC ? "UTC" : ""
            }
            function fr() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            cr = sa("Milliseconds", !1),
            B("z", 0, 0, "zoneAbbr"),
            B("zz", 0, 0, "zoneName");
            var kr = S.prototype;
            function pr(input) {
                return sn(1e3 * input)
            }
            function Dr() {
                return sn.apply(null, arguments).parseZone()
            }
            function Tr(e) {
                return e
            }
            kr.add = Un,
            kr.calendar = Qn,
            kr.clone = Xn,
            kr.diff = is,
            kr.endOf = bs,
            kr.format = ms,
            kr.from = ls,
            kr.fromNow = Ms,
            kr.to = hs,
            kr.toNow = cs,
            kr.get = da,
            kr.invalidAt = Es,
            kr.isAfter = es,
            kr.isBefore = as,
            kr.isBetween = ts,
            kr.isSame = ns,
            kr.isSameOrAfter = ss,
            kr.isSameOrBefore = rs,
            kr.isValid = Ws,
            kr.lang = Ys,
            kr.locale = Ls,
            kr.localeData = ys,
            kr.max = dn,
            kr.min = rn,
            kr.parsingFlags = As,
            kr.set = _a,
            kr.startOf = vs,
            kr.subtract = Gn,
            kr.toArray = xs,
            kr.toObject = Ps,
            kr.toDate = js,
            kr.toISOString = os,
            kr.inspect = us,
            "undefined" != typeof Symbol && null != Symbol.for && (kr[Symbol.for("nodejs.util.inspect.custom")] = function() {
                return "Moment<" + this.format() + ">"
            }
            ),
            kr.toJSON = Os,
            kr.toString = _s,
            kr.unix = Ss,
            kr.valueOf = Hs,
            kr.creationData = Fs,
            kr.eraName = Rs,
            kr.eraNarrow = Cs,
            kr.eraAbbr = Is,
            kr.eraYear = Us,
            kr.year = ta,
            kr.isLeapYear = na,
            kr.weekYear = er,
            kr.isoWeekYear = ar,
            kr.quarter = kr.quarters = or,
            kr.month = pa,
            kr.daysInMonth = Da,
            kr.week = kr.weeks = Ea,
            kr.isoWeek = kr.isoWeeks = Fa,
            kr.weeksInYear = rr,
            kr.weeksInWeekYear = ir,
            kr.isoWeeksInYear = nr,
            kr.isoWeeksInISOWeekYear = sr,
            kr.date = ur,
            kr.day = kr.days = Qa,
            kr.weekday = Xa,
            kr.isoWeekday = et,
            kr.dayOfYear = mr,
            kr.hour = kr.hours = Mt,
            kr.minute = kr.minutes = lr,
            kr.second = kr.seconds = Lr,
            kr.millisecond = kr.milliseconds = cr,
            kr.utcOffset = wn,
            kr.utc = bn,
            kr.local = Hn,
            kr.parseZone = Sn,
            kr.hasAlignedHourOffset = jn,
            kr.isDST = xn,
            kr.isLocal = On,
            kr.isUtcOffset = Wn,
            kr.isUtc = An,
            kr.isUTC = An,
            kr.zoneAbbr = yr,
            kr.zoneName = fr,
            kr.dates = P("dates accessor is deprecated. Use date instead.", ur),
            kr.months = P("months accessor is deprecated. Use month instead", pa),
            kr.years = P("years accessor is deprecated. Use year instead", ta),
            kr.zone = P("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", vn),
            kr.isDSTShifted = P("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Pn);
            var gr = N.prototype;
            function wr(e, t, n, r) {
                var d = bt()
                  , _ = y().set(r, t);
                return d[n](_, e)
            }
            function vr(e, t, n) {
                if (c(e) && (t = e,
                e = void 0),
                e = e || "",
                null != t)
                    return wr(e, t, n, "month");
                var i, r = [];
                for (i = 0; i < 12; i++)
                    r[i] = wr(e, i, n, "month");
                return r
            }
            function Hr(e, t, n, r) {
                "boolean" == typeof e ? (c(t) && (n = t,
                t = void 0),
                t = t || "") : (n = t = e,
                e = !1,
                c(t) && (n = t,
                t = void 0),
                t = t || "");
                var i, d = bt(), _ = e ? d._week.dow : 0, o = [];
                if (null != n)
                    return wr(t, (n + _) % 7, r, "day");
                for (i = 0; i < 7; i++)
                    o[i] = wr(t, (i + _) % 7, r, "day");
                return o
            }
            function Sr(e, t) {
                return vr(e, t, "months")
            }
            function jr(e, t) {
                return vr(e, t, "monthsShort")
            }
            function xr(e, t, n) {
                return Hr(e, t, n, "weekdays")
            }
            function Pr(e, t, n) {
                return Hr(e, t, n, "weekdaysShort")
            }
            function Or(e, t, n) {
                return Hr(e, t, n, "weekdaysMin")
            }
            gr.calendar = R,
            gr.longDateFormat = ee,
            gr.invalidDate = te,
            gr.ordinal = re,
            gr.preparse = Tr,
            gr.postformat = Tr,
            gr.relativeTime = de,
            gr.pastFuture = _e,
            gr.set = F,
            gr.eras = zs,
            gr.erasParse = Ns,
            gr.erasConvertYear = Js,
            gr.erasAbbrRegex = Vs,
            gr.erasNameRegex = Gs,
            gr.erasNarrowRegex = qs,
            gr.months = La,
            gr.monthsShort = Ya,
            gr.monthsParse = fa,
            gr.monthsRegex = ga,
            gr.monthsShortRegex = Ta,
            gr.week = Pa,
            gr.firstDayOfYear = Aa,
            gr.firstDayOfWeek = Wa,
            gr.weekdays = qa,
            gr.weekdaysMin = Ka,
            gr.weekdaysShort = Ba,
            gr.weekdaysParse = $a,
            gr.weekdaysRegex = at,
            gr.weekdaysShortRegex = tt,
            gr.weekdaysMinRegex = nt,
            gr.isPM = mt,
            gr.meridiem = ht,
            gt("en", {
                eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "Before Christ",
                    narrow: "BC",
                    abbr: "BC"
                }],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var b = e % 10;
                    return e + (1 === Ne(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                }
            }),
            d.lang = P("moment.lang is deprecated. Use moment.locale instead.", gt),
            d.langData = P("moment.langData is deprecated. Use moment.localeData instead.", bt);
            var Wr = Math.abs;
            function Ar() {
                var data = this._data;
                return this._milliseconds = Wr(this._milliseconds),
                this._days = Wr(this._days),
                this._months = Wr(this._months),
                data.milliseconds = Wr(data.milliseconds),
                data.seconds = Wr(data.seconds),
                data.minutes = Wr(data.minutes),
                data.hours = Wr(data.hours),
                data.months = Wr(data.months),
                data.years = Wr(data.years),
                this
            }
            function Er(e, input, t, n) {
                var r = zn(input, t);
                return e._milliseconds += n * r._milliseconds,
                e._days += n * r._days,
                e._months += n * r._months,
                e._bubble()
            }
            function Fr(input, e) {
                return Er(this, input, e, 1)
            }
            function zr(input, e) {
                return Er(this, input, e, -1)
            }
            function Nr(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }
            function Jr() {
                var e, t, n, r, d, _ = this._milliseconds, o = this._days, m = this._months, data = this._data;
                return _ >= 0 && o >= 0 && m >= 0 || _ <= 0 && o <= 0 && m <= 0 || (_ += 864e5 * Nr(Cr(m) + o),
                o = 0,
                m = 0),
                data.milliseconds = _ % 1e3,
                e = ze(_ / 1e3),
                data.seconds = e % 60,
                t = ze(e / 60),
                data.minutes = t % 60,
                n = ze(t / 60),
                data.hours = n % 24,
                o += ze(n / 24),
                m += d = ze(Rr(o)),
                o -= Nr(Cr(d)),
                r = ze(m / 12),
                m %= 12,
                data.days = o,
                data.months = m,
                data.years = r,
                this
            }
            function Rr(e) {
                return 4800 * e / 146097
            }
            function Cr(e) {
                return 146097 * e / 4800
            }
            function Ir(e) {
                if (!this.isValid())
                    return NaN;
                var t, n, r = this._milliseconds;
                if ("month" === (e = ue(e)) || "quarter" === e || "year" === e)
                    switch (t = this._days + r / 864e5,
                    n = this._months + Rr(t),
                    e) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12
                    }
                else
                    switch (t = this._days + Math.round(Cr(this._months)),
                    e) {
                    case "week":
                        return t / 7 + r / 6048e5;
                    case "day":
                        return t + r / 864e5;
                    case "hour":
                        return 24 * t + r / 36e5;
                    case "minute":
                        return 1440 * t + r / 6e4;
                    case "second":
                        return 86400 * t + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                    }
            }
            function Ur(e) {
                return function() {
                    return this.as(e)
                }
            }
            var Gr = Ur("ms")
              , Vr = Ur("s")
              , qr = Ur("m")
              , Br = Ur("h")
              , Kr = Ur("d")
              , Zr = Ur("w")
              , $r = Ur("M")
              , Qr = Ur("Q")
              , Xr = Ur("y")
              , ei = Gr;
            function ai() {
                return zn(this)
            }
            function ti(e) {
                return e = ue(e),
                this.isValid() ? this[e + "s"]() : NaN
            }
            function ni(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var si = ni("milliseconds")
              , ri = ni("seconds")
              , ii = ni("minutes")
              , di = ni("hours")
              , _i = ni("days")
              , oi = ni("months")
              , ui = ni("years");
            function mi() {
                return ze(this.days() / 7)
            }
            var Mi = Math.round
              , hi = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                w: null,
                M: 11
            };
            function ci(e, t, n, r, d) {
                return d.relativeTime(t || 1, !!n, e, r)
            }
            function Li(e, t, n, r) {
                var d = zn(e).abs()
                  , _ = Mi(d.as("s"))
                  , o = Mi(d.as("m"))
                  , m = Mi(d.as("h"))
                  , l = Mi(d.as("d"))
                  , M = Mi(d.as("M"))
                  , h = Mi(d.as("w"))
                  , c = Mi(d.as("y"))
                  , a = _ <= n.ss && ["s", _] || _ < n.s && ["ss", _] || o <= 1 && ["m"] || o < n.m && ["mm", o] || m <= 1 && ["h"] || m < n.h && ["hh", m] || l <= 1 && ["d"] || l < n.d && ["dd", l];
                return null != n.w && (a = a || h <= 1 && ["w"] || h < n.w && ["ww", h]),
                (a = a || M <= 1 && ["M"] || M < n.M && ["MM", M] || c <= 1 && ["y"] || ["yy", c])[2] = t,
                a[3] = +e > 0,
                a[4] = r,
                ci.apply(null, a)
            }
            function Yi(e) {
                return void 0 === e ? Mi : "function" == typeof e && (Mi = e,
                !0)
            }
            function yi(e, t) {
                return void 0 !== hi[e] && (void 0 === t ? hi[e] : (hi[e] = t,
                "s" === e && (hi.ss = t - 1),
                !0))
            }
            function fi(e, t) {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var n, output, r = !1, th = hi;
                return "object" == typeof e && (t = e,
                e = !1),
                "boolean" == typeof e && (r = e),
                "object" == typeof t && (th = Object.assign({}, hi, t),
                null != t.s && null == t.ss && (th.ss = t.s - 1)),
                output = Li(this, !r, th, n = this.localeData()),
                r && (output = n.pastFuture(+this, output)),
                n.postformat(output)
            }
            var ki = Math.abs;
            function pi(e) {
                return (e > 0) - (e < 0) || +e
            }
            function Di() {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var e, t, n, s, r, d, _, o, m = ki(this._milliseconds) / 1e3, l = ki(this._days), M = ki(this._months), h = this.asSeconds();
                return h ? (e = ze(m / 60),
                t = ze(e / 60),
                m %= 60,
                e %= 60,
                n = ze(M / 12),
                M %= 12,
                s = m ? m.toFixed(3).replace(/\.?0+$/, "") : "",
                r = h < 0 ? "-" : "",
                d = pi(this._months) !== pi(h) ? "-" : "",
                _ = pi(this._days) !== pi(h) ? "-" : "",
                o = pi(this._milliseconds) !== pi(h) ? "-" : "",
                r + "P" + (n ? d + n + "Y" : "") + (M ? d + M + "M" : "") + (l ? _ + l + "D" : "") + (t || e || m ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (m ? o + s + "S" : "")) : "P0D"
            }
            var Ti = Ln.prototype;
            return Ti.isValid = hn,
            Ti.abs = Ar,
            Ti.add = Fr,
            Ti.subtract = zr,
            Ti.as = Ir,
            Ti.asMilliseconds = Gr,
            Ti.asSeconds = Vr,
            Ti.asMinutes = qr,
            Ti.asHours = Br,
            Ti.asDays = Kr,
            Ti.asWeeks = Zr,
            Ti.asMonths = $r,
            Ti.asQuarters = Qr,
            Ti.asYears = Xr,
            Ti.valueOf = ei,
            Ti._bubble = Jr,
            Ti.clone = ai,
            Ti.get = ti,
            Ti.milliseconds = si,
            Ti.seconds = ri,
            Ti.minutes = ii,
            Ti.hours = di,
            Ti.days = _i,
            Ti.weeks = mi,
            Ti.months = oi,
            Ti.years = ui,
            Ti.humanize = fi,
            Ti.toISOString = Di,
            Ti.toString = Di,
            Ti.toJSON = Di,
            Ti.locale = Ls,
            Ti.localeData = ys,
            Ti.toIsoString = P("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Di),
            Ti.lang = Ys,
            B("X", 0, 0, "unix"),
            B("x", 0, 0, "valueOf"),
            We("x", be),
            We("X", je),
            Re("X", (function(input, e, t) {
                t._d = new Date(1e3 * parseFloat(input))
            }
            )),
            Re("x", (function(input, e, t) {
                t._d = new Date(Ne(input))
            }
            )),
            d.version = "2.30.1",
            _(sn),
            d.fn = kr,
            d.min = on,
            d.max = un,
            d.now = mn,
            d.utc = y,
            d.unix = pr,
            d.months = Sr,
            d.isDate = L,
            d.locale = gt,
            d.invalid = T,
            d.duration = zn,
            d.isMoment = j,
            d.weekdays = xr,
            d.parseZone = Dr,
            d.localeData = bt,
            d.isDuration = Yn,
            d.monthsShort = jr,
            d.weekdaysMin = Or,
            d.defineLocale = wt,
            d.updateLocale = vt,
            d.locales = Ht,
            d.weekdaysShort = Pr,
            d.normalizeUnits = ue,
            d.relativeTimeRounding = Yi,
            d.relativeTimeThreshold = yi,
            d.calendarFormat = $n,
            d.prototype = kr,
            d.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            },
            d
        }()
    }
    ).call(this, n(619)(e))
}
, , function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(input) {
                return /^nm$/i.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        }
          , r = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , d = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }
          , _ = function(u) {
            return function(e, t, n, _) {
                var o = r(e)
                  , m = d[u][r(e)];
                return 2 === o && (m = m[t ? 0 : 1]),
                m.replace(/%d/i, e)
            }
        }
          , o = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: o,
            monthsShort: o,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(input) {
                return "م" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: _("s"),
                ss: _("s"),
                m: _("m"),
                mm: _("m"),
                h: _("h"),
                hh: _("h"),
                d: _("d"),
                dd: _("d"),
                M: _("M"),
                MM: _("M"),
                y: _("y"),
                yy: _("y")
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return n[e]
                }
                )).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , n = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }
          , r = function(u) {
            return function(e, r, d, _) {
                var o = t(e)
                  , m = n[u][t(e)];
                return 2 === o && (m = m[r ? 0 : 1]),
                m.replace(/%d/i, e)
            }
        }
          , d = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-dz", {
            months: d,
            monthsShort: d,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(input) {
                return "م" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        }
          , n = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , r = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }
          , d = function(u) {
            return function(e, t, d, _) {
                var o = n(e)
                  , m = r[u][n(e)];
                return 2 === o && (m = m[t ? 0 : 1]),
                m.replace(/%d/i, e)
            }
        }
          , _ = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: _,
            monthsShort: _,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(input) {
                return "م" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: d("s"),
                ss: d("s"),
                m: d("m"),
                mm: d("m"),
                h: d("h"),
                hh: d("h"),
                d: d("d"),
                dd: d("d"),
                M: d("M"),
                MM: d("M"),
                y: d("y"),
                yy: d("y")
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        };
        e.defineLocale("ar-ps", {
            months: "كانون الثاني_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_تشري الأوّل_تشرين الثاني_كانون الأوّل".split("_"),
            monthsShort: "ك٢_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_ت١_ت٢_ك١".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(input) {
                return "م" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return n[e]
                }
                )).split("").reverse().join("").replace(/[١٢](?![\u062a\u0643])/g, (function(e) {
                    return n[e]
                }
                )).split("").reverse().join("").replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        };
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(input) {
                return "م" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return n[e]
                }
                )).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "bir neçə saniyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(input) {
                return /^(gündüz|axşam)$/.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (0 === e)
                    return e + "-ıncı";
                var a = e % 10
                  , b = e % 100 - a
                  , n = e >= 100 ? 100 : null;
                return e + (t[a] || t[b] || t[n])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }
        function n(e, n, r) {
            return "m" === r ? n ? "хвіліна" : "хвіліну" : "h" === r ? n ? "гадзіна" : "гадзіну" : e + " " + t({
                ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            }[r], +e)
        }
        e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[У мінулую] dddd [ў] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "дзень",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(input) {
                return /^(дня|вечара)$/.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                case "D":
                    return e + "-га";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[Миналата] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[Миналия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                w: "седмица",
                ww: "%d седмици",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10
                  , n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০"
        }
          , n = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
        };
        e.defineLocale("bn", {
            months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০"
        }
          , n = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
        };
        e.defineLocale("bn-bd", {
            months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "রাত" === t ? e < 4 ? e : e + 12 : "ভোর" === t || "সকাল" === t ? e : "দুপুর" === t ? e >= 3 ? e : e + 12 : "বিকাল" === t || "সন্ধ্যা" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "রাত" : e < 6 ? "ভোর" : e < 12 ? "সকাল" : e < 15 ? "দুপুর" : e < 18 ? "বিকাল" : e < 20 ? "সন্ধ্যা" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠"
        }
          , n = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
        };
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
            monthsShortRegex: /^(ཟླ་\d{1,2})/,
            monthsParseExact: !0,
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            return e + " " + d({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[n], e)
        }
        function n(e) {
            switch (r(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return e + " bloaz";
            default:
                return e + " vloaz"
            }
        }
        function r(e) {
            return e > 9 ? r(e % 10) : e
        }
        function d(text, e) {
            return 2 === e ? _(text) : text
        }
        function _(text) {
            var e = {
                m: "v",
                b: "v",
                d: "z"
            };
            return void 0 === e[text.charAt(0)] ? text : e[text.charAt(0)] + text.substring(1)
        }
        var o = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i]
          , m = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
          , l = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i
          , M = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
          , h = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i]
          , c = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i]
          , L = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        e.defineLocale("br", {
            months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParse: L,
            fullWeekdaysParse: h,
            shortWeekdaysParse: c,
            minWeekdaysParse: L,
            monthsRegex: m,
            monthsShortRegex: m,
            monthsStrictRegex: l,
            monthsShortStrictRegex: M,
            monthsParse: o,
            longMonthsParse: o,
            shortMonthsParse: o,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY HH:mm",
                LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warcʼhoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Decʼh da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s ʼzo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /a.m.|g.m./,
            isPM: function(e) {
                return "g.m." === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "a.m." : "g.m."
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            if ("m" === n)
                return t ? "jedna minuta" : r ? "jednu minutu" : "jedne minute"
        }
        function n(e, t, n) {
            var r = e + " ";
            switch (n) {
            case "ss":
                return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "mm":
                return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return "jedan sat";
            case "hh":
                return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return r += 1 === e ? "dan" : "dana";
            case "MM":
                return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: n,
                m: t,
                mm: n,
                h: n,
                hh: n,
                d: "dan",
                dd: n,
                M: "mjesec",
                MM: n,
                y: "godinu",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var output = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (output = "a"),
                e + output
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            standalone: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            format: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_"),
            isFormat: /DD?[o.]?(\[[^\[\]]*\]|\s)+MMMM/
        }
          , n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_")
          , r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i]
          , d = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
        function _(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }
        function o(e, t, n, r) {
            var d = e + " ";
            switch (n) {
            case "s":
                return t || r ? "pár sekund" : "pár sekundami";
            case "ss":
                return t || r ? d + (_(e) ? "sekundy" : "sekund") : d + "sekundami";
            case "m":
                return t ? "minuta" : r ? "minutu" : "minutou";
            case "mm":
                return t || r ? d + (_(e) ? "minuty" : "minut") : d + "minutami";
            case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
                return t || r ? d + (_(e) ? "hodiny" : "hodin") : d + "hodinami";
            case "d":
                return t || r ? "den" : "dnem";
            case "dd":
                return t || r ? d + (_(e) ? "dny" : "dní") : d + "dny";
            case "M":
                return t || r ? "měsíc" : "měsícem";
            case "MM":
                return t || r ? d + (_(e) ? "měsíce" : "měsíců") : d + "měsíci";
            case "y":
                return t || r ? "rok" : "rokem";
            case "yy":
                return t || r ? d + (_(e) ? "roky" : "let") : d + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: d,
            monthsShortRegex: d,
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v neděli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve středu v] LT";
                    case 4:
                        return "[ve čtvrtek v] LT";
                    case 5:
                        return "[v pátek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulou neděli v] LT";
                    case 1:
                    case 2:
                        return "[minulé] dddd [v] LT";
                    case 3:
                        return "[minulou středu v] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: o,
                ss: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(output) {
                    return output + (/сехет$/i.exec(output) ? "рен" : /ҫул$/i.exec(output) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var output = "";
                return e > 20 ? output = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (output = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]),
                e + output
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? d[n][0] : d[n][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? d[n][0] : d[n][1]
        }
        e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? d[n][0] : d[n][1]
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
          , n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function(input) {
                return "މފ" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(input) {
            return "undefined" != typeof Function && input instanceof Function || "[object Function]" === Object.prototype.toString.call(input)
        }
        e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(input) {
                return "μ" === (input + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    return 6 === this.day() ? "[το προηγούμενο] dddd [{}] LT" : "[την προηγούμενη] dddd [{}] LT"
                },
                sameElse: "L"
            },
            calendar: function(e, n) {
                var output = this._calendarEl[e]
                  , r = n && n.hours();
                return t(output) && (output = output.apply(n)),
                output.replace("{}", r % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-in", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-sg", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "[la] D[-an de] MMMM, YYYY",
                LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(input) {
                return "p" === input.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd[n je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasintan] dddd[n je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "kelkaj sekundoj",
                ss: "%d sekundoj",
                m: "unu minuto",
                mm: "%d minutoj",
                h: "unu horo",
                hh: "%d horoj",
                d: "unu tago",
                dd: "%d tagoj",
                M: "unu monato",
                MM: "%d monatoj",
                y: "unu jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , d = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: d,
            monthsShortRegex: d,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            },
            invalidDate: "Fecha inválida"
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , d = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: d,
            monthsShortRegex: d,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , d = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-mx", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: d,
            monthsShortRegex: d,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 4
            },
            invalidDate: "Fecha inválida"
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , d = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: d,
            monthsShortRegex: d,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? d[n][2] ? d[n][2] : d[n][1] : r ? d[n][0] : d[n][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰"
        }
          , n = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
        };
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(input) {
                return /بعد از ظهر/.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "%d ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, (function(e) {
                    return n[e]
                }
                )).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
          , n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];
        function r(e, t, n, r) {
            var _ = "";
            switch (n) {
            case "s":
                return r ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
                _ = r ? "sekunnin" : "sekuntia";
                break;
            case "m":
                return r ? "minuutin" : "minuutti";
            case "mm":
                _ = r ? "minuutin" : "minuuttia";
                break;
            case "h":
                return r ? "tunnin" : "tunti";
            case "hh":
                _ = r ? "tunnin" : "tuntia";
                break;
            case "d":
                return r ? "päivän" : "päivä";
            case "dd":
                _ = r ? "päivän" : "päivää";
                break;
            case "M":
                return r ? "kuukauden" : "kuukausi";
            case "MM":
                _ = r ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return r ? "vuoden" : "vuosi";
            case "yy":
                _ = r ? "vuoden" : "vuotta"
            }
            return _ = d(e, r) + " " + _
        }
        function d(e, r) {
            return e < 10 ? r ? n[e] : t[e] : e
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("fil", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaður",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
          , n = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i
          , r = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
          , d = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
        e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: t,
            monthsShortStrictRegex: n,
            monthsParse: d,
            longMonthsParse: d,
            shortMonthsParse: d,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                w: "une semaine",
                ww: "%d semaines",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                case "D":
                    return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
          , n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"]
          , n = ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"]
          , r = ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"]
          , d = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"]
          , _ = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"];
        e.defineLocale("ga", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: r,
            weekdaysShort: d,
            weekdaysMin: _,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Amárach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inné ag] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ó shin",
                s: "cúpla soicind",
                ss: "%d soicind",
                m: "nóiméad",
                mm: "%d nóiméad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lá",
                dd: "%d lá",
                M: "mí",
                MM: "%d míonna",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]
          , n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"]
          , r = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]
          , d = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"]
          , _ = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
        e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: r,
            weekdaysShort: d,
            weekdaysMin: _,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
                ss: [e + " सॅकंडांनी", e + " सॅकंड"],
                m: ["एका मिणटान", "एक मिनूट"],
                mm: [e + " मिणटांनी", e + " मिणटां"],
                h: ["एका वरान", "एक वर"],
                hh: [e + " वरांनी", e + " वरां"],
                d: ["एका दिसान", "एक दीस"],
                dd: [e + " दिसांनी", e + " दीस"],
                M: ["एका म्हयन्यान", "एक म्हयनो"],
                MM: [e + " म्हयन्यानी", e + " म्हयने"],
                y: ["एका वर्सान", "एक वर्स"],
                yy: [e + " वर्सांनी", e + " वर्सां"]
            };
            return r ? d[n][0] : d[n][1]
        }
        e.defineLocale("gom-deva", {
            months: {
                standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
            weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
            weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [वाजतां]",
                LTS: "A h:mm:ss [वाजतां]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [वाजतां]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
                llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
            },
            calendar: {
                sameDay: "[आयज] LT",
                nextDay: "[फाल्यां] LT",
                nextWeek: "[फुडलो] dddd[,] LT",
                lastDay: "[काल] LT",
                lastWeek: "[फाटलो] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s आदीं",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
            ordinal: function(e, t) {
                return "D" === t ? e + "वेर" : e
            },
            week: {
                dow: 0,
                doy: 3
            },
            meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "राती" === t ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? e > 12 ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                s: ["thoddea sekondamni", "thodde sekond"],
                ss: [e + " sekondamni", e + " sekond"],
                m: ["eka mintan", "ek minut"],
                mm: [e + " mintamni", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voramni", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disamni", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineamni", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsamni", e + " vorsam"]
            };
            return r ? d[n][0] : d[n][1]
        }
        e.defineLocale("gom-latn", {
            months: {
                standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Fuddlo] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fattlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                return "D" === t ? e + "er" : e
            },
            week: {
                dow: 0,
                doy: 3
            },
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "૧",
            2: "૨",
            3: "૩",
            4: "૪",
            5: "૫",
            6: "૬",
            7: "૭",
            8: "૮",
            9: "૯",
            0: "૦"
        }
          , n = {
            "૧": "1",
            "૨": "2",
            "૩": "3",
            "૪": "4",
            "૫": "5",
            "૬": "6",
            "૭": "7",
            "૮": "8",
            "૯": "9",
            "૦": "0"
        };
        e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પહેલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function(e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(input) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        }
          , r = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i]
          , d = [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i];
        e.defineLocale("hi", {
            months: {
                format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
            },
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: d,
            monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
            monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
            monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
            monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
            case "ss":
                return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return r += 1 === e ? "dan" : "dana";
            case "MM":
                return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM YYYY",
                LLL: "Do MMMM YYYY H:mm",
                LLLL: "dddd, Do MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[prošlu] [nedjelju] [u] LT";
                    case 3:
                        return "[prošlu] [srijedu] [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        function n(e, t, n, r) {
            var d = e;
            switch (n) {
            case "s":
                return r || t ? "néhány másodperc" : "néhány másodperce";
            case "ss":
                return d + (r || t) ? " másodperc" : " másodperce";
            case "m":
                return "egy" + (r || t ? " perc" : " perce");
            case "mm":
                return d + (r || t ? " perc" : " perce");
            case "h":
                return "egy" + (r || t ? " óra" : " órája");
            case "hh":
                return d + (r || t ? " óra" : " órája");
            case "d":
                return "egy" + (r || t ? " nap" : " napja");
            case "dd":
                return d + (r || t ? " nap" : " napja");
            case "M":
                return "egy" + (r || t ? " hónap" : " hónapja");
            case "MM":
                return d + (r || t ? " hónap" : " hónapja");
            case "y":
                return "egy" + (r || t ? " év" : " éve");
            case "yy":
                return d + (r || t ? " év" : " éve")
            }
            return ""
        }
        function r(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(input) {
                return "u" === input.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return r.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return r.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(input) {
                return /^(ցերեկվա|երեկոյան)$/.test(input)
            },
            meridiem: function(e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }
        function n(e, n, r, d) {
            var _ = e + " ";
            switch (r) {
            case "s":
                return n || d ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "ss":
                return t(e) ? _ + (n || d ? "sekúndur" : "sekúndum") : _ + "sekúnda";
            case "m":
                return n ? "mínúta" : "mínútu";
            case "mm":
                return t(e) ? _ + (n || d ? "mínútur" : "mínútum") : n ? _ + "mínúta" : _ + "mínútu";
            case "hh":
                return t(e) ? _ + (n || d ? "klukkustundir" : "klukkustundum") : _ + "klukkustund";
            case "d":
                return n ? "dagur" : d ? "dag" : "degi";
            case "dd":
                return t(e) ? n ? _ + "dagar" : _ + (d ? "daga" : "dögum") : n ? _ + "dagur" : _ + (d ? "dag" : "degi");
            case "M":
                return n ? "mánuður" : d ? "mánuð" : "mánuði";
            case "MM":
                return t(e) ? n ? _ + "mánuðir" : _ + (d ? "mánuði" : "mánuðum") : n ? _ + "mánuður" : _ + (d ? "mánuð" : "mánuði");
            case "y":
                return n || d ? "ár" : "ári";
            case "yy":
                return t(e) ? _ + (n || d ? "ár" : "árum") : _ + (n || d ? "ár" : "ári")
            }
        }
        e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                nextDay: function() {
                    return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                nextWeek: function() {
                    return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                lastDay: function() {
                    return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                lastWeek: function() {
                    return 0 === this.day() ? "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" : "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "tra %s",
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                w: "una settimana",
                ww: "%d settimane",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    return 0 === this.day() ? "[la scorsa] dddd [alle] LT" : "[lo scorso] dddd [alle] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(s) {
                    return (/^[0-9].+$/.test(s) ? "tra" : "in") + " " + s
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ja", {
            eras: [{
                since: "2019-05-01",
                offset: 1,
                name: "令和",
                narrow: "㋿",
                abbr: "R"
            }, {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "平成",
                narrow: "㍻",
                abbr: "H"
            }, {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "昭和",
                narrow: "㍼",
                abbr: "S"
            }, {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "大正",
                narrow: "㍽",
                abbr: "T"
            }, {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "明治",
                narrow: "㍾",
                abbr: "M"
            }, {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "西暦",
                narrow: "AD",
                abbr: "AD"
            }, {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "紀元前",
                narrow: "BC",
                abbr: "BC"
            }],
            eraYearOrdinalRegex: /(元|\d+)年/,
            eraYearOrdinalParse: function(input, e) {
                return "元" === e[1] ? 1 : parseInt(e[1] || input, 10)
            },
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(input) {
                return "午後" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: function(e) {
                    return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
                },
                lastDay: "[昨日] LT",
                lastWeek: function(e) {
                    return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function(e, t) {
                switch (t) {
                case "y":
                    return 1 === e ? "元年" : e + "年";
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ka", {
            months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(s) {
                    return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function(e, t, n) {
                        return "ი" === n ? t + "ში" : t + n + "ში"
                    }
                    ))
                },
                past: function(s) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(s) ? s.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(s) ? s.replace(/წელი$/, "წლის წინ") : s
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function(e) {
                var a = e % 10
                  , b = e >= 100 ? 100 : null;
                return e + (t[e] || t[a] || t[b])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "១",
            2: "២",
            3: "៣",
            4: "៤",
            5: "៥",
            6: "៦",
            7: "៧",
            8: "៨",
            9: "៩",
            0: "០"
        }
          , n = {
            "១": "1",
            "២": "2",
            "៣": "3",
            "៤": "4",
            "៥": "5",
            "៦": "6",
            "៧": "7",
            "៨": "8",
            "៩": "9",
            "០": "0"
        };
        e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function(input) {
                return "ល្ងាច" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function(e) {
                return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "೧",
            2: "೨",
            3: "೩",
            4: "೪",
            5: "೫",
            6: "೬",
            7: "೭",
            8: "೮",
            9: "೯",
            0: "೦"
        }
          , n = {
            "೧": "1",
            "೨": "2",
            "೩": "3",
            "೪": "4",
            "೫": "5",
            "೬": "6",
            "೭": "7",
            "೮": "8",
            "೯": "9",
            "೦": "0"
        };
        e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function(e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function(e) {
                return e + "ನೇ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "일";
                case "M":
                    return e + "월";
                case "w":
                case "W":
                    return e + "주";
                default:
                    return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        }
          , r = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
        e.defineLocale("ku", {
            months: r,
            monthsShort: r,
            weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function(input) {
                return /ئێواره‌/.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "به‌یانی" : "ئێواره‌"
            },
            calendar: {
                sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                nextDay: "[به‌یانی كاتژمێر] LT",
                nextWeek: "dddd [كاتژمێر] LT",
                lastDay: "[دوێنێ كاتژمێر] LT",
                lastWeek: "dddd [كاتژمێر] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "له‌ %s",
                past: "%s",
                s: "چه‌ند چركه‌یه‌ك",
                ss: "چركه‌ %d",
                m: "یه‌ك خوله‌ك",
                mm: "%d خوله‌ك",
                h: "یه‌ك كاتژمێر",
                hh: "%d كاتژمێر",
                d: "یه‌ك ڕۆژ",
                dd: "%d ڕۆژ",
                M: "یه‌ك مانگ",
                MM: "%d مانگ",
                y: "یه‌ك ساڵ",
                yy: "%d ساڵ"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return n[e]
                }
                )).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                s: ["çend sanîye", "çend sanîyeyan"],
                ss: [e + " sanîye", e + " sanîyeyan"],
                m: ["deqîqeyek", "deqîqeyekê"],
                mm: [e + " deqîqe", e + " deqîqeyan"],
                h: ["saetek", "saetekê"],
                hh: [e + " saet", e + " saetan"],
                d: ["rojek", "rojekê"],
                dd: [e + " roj", e + " rojan"],
                w: ["hefteyek", "hefteyekê"],
                ww: [e + " hefte", e + " hefteyan"],
                M: ["mehek", "mehekê"],
                MM: [e + " meh", e + " mehan"],
                y: ["salek", "salekê"],
                yy: [e + " sal", e + " salan"]
            };
            return t ? d[n][0] : d[n][1]
        }
        function n(e) {
            var t = (e = "" + e).substring(e.length - 1)
              , n = e.length > 1 ? e.substring(e.length - 2) : "";
            return 12 == n || 13 == n || "2" != t && "3" != t && "50" != n && "70" != t && "80" != t ? "ê" : "yê"
        }
        e.defineLocale("ku-kmr", {
            months: "Rêbendan_Sibat_Adar_Nîsan_Gulan_Hezîran_Tîrmeh_Tebax_Îlon_Cotmeh_Mijdar_Berfanbar".split("_"),
            monthsShort: "Rêb_Sib_Ada_Nîs_Gul_Hez_Tîr_Teb_Îlo_Cot_Mij_Ber".split("_"),
            monthsParseExact: !0,
            weekdays: "Yekşem_Duşem_Sêşem_Çarşem_Pêncşem_În_Şemî".split("_"),
            weekdaysShort: "Yek_Du_Sê_Çar_Pên_În_Şem".split("_"),
            weekdaysMin: "Ye_Du_Sê_Ça_Pê_În_Şe".split("_"),
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "bn" : "BN" : n ? "pn" : "PN"
            },
            meridiemParse: /bn|BN|pn|PN/,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[a] YYYY[an]",
                LLL: "Do MMMM[a] YYYY[an] HH:mm",
                LLLL: "dddd, Do MMMM[a] YYYY[an] HH:mm",
                ll: "Do MMM[.] YYYY[an]",
                lll: "Do MMM[.] YYYY[an] HH:mm",
                llll: "ddd[.], Do MMM[.] YYYY[an] HH:mm"
            },
            calendar: {
                sameDay: "[Îro di saet] LT [de]",
                nextDay: "[Sibê di saet] LT [de]",
                nextWeek: "dddd [di saet] LT [de]",
                lastDay: "[Duh di saet] LT [de]",
                lastWeek: "dddd[a borî di saet] LT [de]",
                sameElse: "L"
            },
            relativeTime: {
                future: "di %s de",
                past: "berî %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                w: t,
                ww: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(?:yê|ê|\.)/,
            ordinal: function(e, t) {
                var p = t.toLowerCase();
                return p.includes("w") || p.includes("m") ? e + "." : e + n(e)
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кечээ саат] LT",
                lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function(e) {
                var a = e % 10
                  , b = e >= 100 ? 100 : null;
                return e + (t[e] || t[a] || t[b])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? d[n][0] : d[n][1]
        }
        function n(e) {
            return d(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
        }
        function r(e) {
            return d(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
        }
        function d(e) {
            if (e = parseInt(e, 10),
            isNaN(e))
                return !1;
            if (e < 0)
                return !0;
            if (e < 10)
                return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return d(0 === t ? e / 10 : t)
            }
            if (e < 1e4) {
                for (; e >= 10; )
                    e /= 10;
                return d(e)
            }
            return d(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: n,
                past: r,
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(input) {
                return "ຕອນແລງ" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        function n(e, t, n, r) {
            return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
        }
        function r(e, t, n, r) {
            return t ? _(n)[0] : r ? _(n)[1] : _(n)[2]
        }
        function d(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }
        function _(e) {
            return t[e].split("_")
        }
        function o(e, t, n, o) {
            var m = e + " ";
            return 1 === e ? m + r(e, t, n[0], o) : t ? m + (d(e) ? _(n)[1] : _(n)[0]) : o ? m + _(n)[1] : m + (d(e) ? _(n)[1] : _(n)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: n,
                ss: o,
                m: r,
                mm: o,
                h: r,
                hh: o,
                d: r,
                dd: o,
                M: r,
                MM: o,
                y: r,
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        function n(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }
        function r(e, r, d) {
            return e + " " + n(t[d], e, r)
        }
        function d(e, r, d) {
            return n(t[d], e, r)
        }
        function _(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
        }
        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: _,
                ss: r,
                m: d,
                mm: r,
                h: d,
                hh: r,
                d: d,
                dd: r,
                M: d,
                MM: r,
                y: d,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, r) {
                var d = t.words[r];
                return 1 === r.length ? n ? d[0] : d[1] : e + " " + t.correctGrammaticalCase(e, d)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[Изминатата] dddd [во] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "една минута",
                mm: "%d минути",
                h: "еден час",
                hh: "%d часа",
                d: "еден ден",
                dd: "%d дена",
                M: "еден месец",
                MM: "%d месеци",
                y: "една година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10
                  , n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            switch (n) {
            case "s":
                return t ? "хэдхэн секунд" : "хэдхэн секундын";
            case "ss":
                return e + (t ? " секунд" : " секундын");
            case "m":
            case "mm":
                return e + (t ? " минут" : " минутын");
            case "h":
            case "hh":
                return e + (t ? " цаг" : " цагийн");
            case "d":
            case "dd":
                return e + (t ? " өдөр" : " өдрийн");
            case "M":
            case "MM":
                return e + (t ? " сар" : " сарын");
            case "y":
            case "yy":
                return e + (t ? " жил" : " жилийн");
            default:
                return e
            }
        }
        e.defineLocale("mn", {
            months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
            monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY оны MMMMын D",
                LLL: "YYYY оны MMMMын D HH:mm",
                LLLL: "dddd, YYYY оны MMMMын D HH:mm"
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function(input) {
                return "ҮХ" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ҮӨ" : "ҮХ"
            },
            calendar: {
                sameDay: "[Өнөөдөр] LT",
                nextDay: "[Маргааш] LT",
                nextWeek: "[Ирэх] dddd LT",
                lastDay: "[Өчигдөр] LT",
                lastWeek: "[Өнгөрсөн] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s дараа",
                past: "%s өмнө",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + " өдөр";
                default:
                    return e
                }
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        function r(e, t, n, r) {
            var output = "";
            if (t)
                switch (n) {
                case "s":
                    output = "काही सेकंद";
                    break;
                case "ss":
                    output = "%d सेकंद";
                    break;
                case "m":
                    output = "एक मिनिट";
                    break;
                case "mm":
                    output = "%d मिनिटे";
                    break;
                case "h":
                    output = "एक तास";
                    break;
                case "hh":
                    output = "%d तास";
                    break;
                case "d":
                    output = "एक दिवस";
                    break;
                case "dd":
                    output = "%d दिवस";
                    break;
                case "M":
                    output = "एक महिना";
                    break;
                case "MM":
                    output = "%d महिने";
                    break;
                case "y":
                    output = "एक वर्ष";
                    break;
                case "yy":
                    output = "%d वर्षे"
                }
            else
                switch (n) {
                case "s":
                    output = "काही सेकंदां";
                    break;
                case "ss":
                    output = "%d सेकंदां";
                    break;
                case "m":
                    output = "एका मिनिटा";
                    break;
                case "mm":
                    output = "%d मिनिटां";
                    break;
                case "h":
                    output = "एका तासा";
                    break;
                case "hh":
                    output = "%d तासां";
                    break;
                case "d":
                    output = "एका दिवसा";
                    break;
                case "dd":
                    output = "%d दिवसां";
                    break;
                case "M":
                    output = "एका महिन्या";
                    break;
                case "MM":
                    output = "%d महिन्यां";
                    break;
                case "y":
                    output = "एका वर्षा";
                    break;
                case "yy":
                    output = "%d वर्षां"
                }
            return output.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀"
        }
          , n = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
        };
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "én time",
                hh: "%d timer",
                d: "én dag",
                dd: "%d dager",
                w: "én uke",
                ww: "%d uker",
                M: "én måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
          , r = [/^jan/i, /^feb/i, /^(maart|mrt\.?)$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
          , d = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: d,
            monthsShortRegex: d,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                w: "één week",
                ww: "%d weken",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
          , r = [/^jan/i, /^feb/i, /^(maart|mrt\.?)$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
          , d = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: d,
            monthsShortRegex: d,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                w: "ei veke",
                ww: "%d veker",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("oc-lnc", {
            months: {
                standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
                format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: "[uèi a] LT",
                nextDay: "[deman a] LT",
                nextWeek: "dddd [a] LT",
                lastDay: "[ièr a] LT",
                lastWeek: "dddd [passat a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "unas segondas",
                ss: "%d segondas",
                m: "una minuta",
                mm: "%d minutas",
                h: "una ora",
                hh: "%d oras",
                d: "un jorn",
                dd: "%d jorns",
                M: "un mes",
                MM: "%d meses",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var output = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (output = "a"),
                e + output
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "੧",
            2: "੨",
            3: "੩",
            4: "੪",
            5: "੫",
            6: "੬",
            7: "੭",
            8: "੮",
            9: "੯",
            0: "੦"
        }
          , n = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0"
        };
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "[ਅਗਲਾ] dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
          , n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_")
          , r = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];
        function d(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }
        function _(e, t, n) {
            var r = e + " ";
            switch (n) {
            case "ss":
                return r + (d(e) ? "sekundy" : "sekund");
            case "m":
                return t ? "minuta" : "minutę";
            case "mm":
                return r + (d(e) ? "minuty" : "minut");
            case "h":
                return t ? "godzina" : "godzinę";
            case "hh":
                return r + (d(e) ? "godziny" : "godzin");
            case "ww":
                return r + (d(e) ? "tygodnie" : "tygodni");
            case "MM":
                return r + (d(e) ? "miesiące" : "miesięcy");
            case "yy":
                return r + (d(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, r) {
                return e ? /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W niedzielę o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W środę o] LT";
                    case 6:
                        return "[W sobotę o] LT";
                    default:
                        return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W zeszłą niedzielę o] LT";
                    case 3:
                        return "[W zeszłą środę o] LT";
                    case 6:
                        return "[W zeszłą sobotę o] LT";
                    default:
                        return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: _,
                m: _,
                mm: _,
                h: _,
                hh: _,
                d: "1 dzień",
                dd: "%d dni",
                w: "tydzień",
                ww: _,
                M: "miesiąc",
                MM: _,
                y: "rok",
                yy: _
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("pt", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                w: "uma semana",
                ww: "%d semanas",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            invalidDate: "Data inválida"
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            var r = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "),
            e + r + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                ww: "săptămâni",
                MM: "luni",
                yy: "ani"
            }[n]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                w: "o săptămână",
                ww: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }
        function n(e, n, r) {
            return "m" === r ? n ? "минута" : "минуту" : e + " " + t({
                ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                ww: "неделя_недели_недель",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[r], +e)
        }
        var r = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня, в] LT",
                nextDay: "[Завтра, в] LT",
                lastDay: "[Вчера, в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week())
                        return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                    case 0:
                        return "[В следующее] dddd, [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В следующий] dddd, [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В следующую] dddd, [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week())
                        return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                    case 0:
                        return "[В прошлое] dddd, [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В прошлый] dddd, [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В прошлую] dddd, [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: n,
                m: n,
                mm: n,
                h: "час",
                hh: n,
                d: "день",
                dd: n,
                w: "неделя",
                ww: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(input) {
                return /^(дня|вечера)$/.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                    return e + "-й";
                case "D":
                    return e + "-го";
                case "w":
                case "W":
                    return e + "-я";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"]
          , n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(input) {
                return "شام" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(input) {
                return "ප.ව." === input || "පස් වරු" === input
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
          , n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        function r(e) {
            return e > 1 && e < 5
        }
        function d(e, t, n, d) {
            var _ = e + " ";
            switch (n) {
            case "s":
                return t || d ? "pár sekúnd" : "pár sekundami";
            case "ss":
                return t || d ? _ + (r(e) ? "sekundy" : "sekúnd") : _ + "sekundami";
            case "m":
                return t ? "minúta" : d ? "minútu" : "minútou";
            case "mm":
                return t || d ? _ + (r(e) ? "minúty" : "minút") : _ + "minútami";
            case "h":
                return t ? "hodina" : d ? "hodinu" : "hodinou";
            case "hh":
                return t || d ? _ + (r(e) ? "hodiny" : "hodín") : _ + "hodinami";
            case "d":
                return t || d ? "deň" : "dňom";
            case "dd":
                return t || d ? _ + (r(e) ? "dni" : "dní") : _ + "dňami";
            case "M":
                return t || d ? "mesiac" : "mesiacom";
            case "MM":
                return t || d ? _ + (r(e) ? "mesiace" : "mesiacov") : _ + "mesiacmi";
            case "y":
                return t || d ? "rok" : "rokom";
            case "yy":
                return t || d ? _ + (r(e) ? "roky" : "rokov") : _ + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo štvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulú nedeľu o] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[minulý] dddd [o] LT";
                    case 3:
                        return "[minulú stredu o] LT";
                    case 6:
                        return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: d,
                ss: d,
                m: d,
                mm: d,
                h: d,
                hh: d,
                d: d,
                dd: d,
                M: d,
                MM: d,
                y: d,
                yy: d
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = e + " ";
            switch (n) {
            case "s":
                return t || r ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                return d += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
            case "m":
                return t ? "ena minuta" : "eno minuto";
            case "mm":
                return d += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
            case "h":
                return t ? "ena ura" : "eno uro";
            case "hh":
                return d += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
            case "d":
                return t || r ? "en dan" : "enim dnem";
            case "dd":
                return d += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
            case "M":
                return t || r ? "en mesec" : "enim mesecem";
            case "MM":
                return d += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
            case "y":
                return t || r ? "eno leto" : "enim letom";
            case "yy":
                return d += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[prejšnjo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prejšnjo] [sredo] [ob] LT";
                    case 6:
                        return "[prejšnjo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(input) {
                return "M" === input.charAt(0)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                d: ["jedan dan", "jednog dana"],
                dd: ["dan", "dana", "dana"],
                M: ["jedan mesec", "jednog meseca"],
                MM: ["mesec", "meseca", "meseci"],
                y: ["jednu godinu", "jedne godine"],
                yy: ["godinu", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2]
            },
            translate: function(e, n, r, d) {
                var _, o = t.words[r];
                return 1 === r.length ? "y" === r && n ? "jedna godina" : d || n ? o[0] : o[1] : (_ = t.correctGrammaticalCase(e, o),
                "yy" === r && n && "godinu" === _ ? e + " godina" : e + " " + _)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D. M. YYYY.",
                LL: "D. MMMM YYYY.",
                LLL: "D. MMMM YYYY. H:mm",
                LLLL: "dddd, D. MMMM YYYY. H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: t.translate,
                dd: t.translate,
                M: t.translate,
                MM: t.translate,
                y: t.translate,
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једног минута"],
                mm: ["минут", "минута", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                d: ["један дан", "једног дана"],
                dd: ["дан", "дана", "дана"],
                M: ["један месец", "једног месеца"],
                MM: ["месец", "месеца", "месеци"],
                y: ["једну годину", "једне године"],
                yy: ["годину", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2]
            },
            translate: function(e, n, r, d) {
                var _, o = t.words[r];
                return 1 === r.length ? "y" === r && n ? "једна година" : d || n ? o[0] : o[1] : (_ = t.correctGrammaticalCase(e, o),
                "yy" === r && n && "годину" === _ ? e + " година" : e + " " + _)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D. M. YYYY.",
                LL: "D. MMMM YYYY.",
                LLL: "D. MMMM YYYY. H:mm",
                LLLL: "dddd, D. MMMM YYYY. H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[у] [недељу] [у] LT";
                    case 3:
                        return "[у] [среду] [у] LT";
                    case 6:
                        return "[у] [суботу] [у] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: t.translate,
                dd: t.translate,
                M: t.translate,
                MM: t.translate,
                y: t.translate,
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === b || 2 === b ? ":a" : ":e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "hh:mm A",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "siku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "௧",
            2: "௨",
            3: "௩",
            4: "௪",
            5: "௫",
            6: "௬",
            7: "௭",
            8: "௮",
            9: "௯",
            0: "௦"
        }
          , n = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0"
        };
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது"
            },
            preparse: function(e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(e) {
                    return n[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "segundu balun",
                ss: "segundu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        e.defineLocale("tg", {
            months: {
                format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
                standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
            },
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Фардо соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function(e) {
                var a = e % 10
                  , b = e >= 100 ? 100 : null;
                return e + (t[e] || t[a] || t[b])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(input) {
                return "หลังเที่ยง" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                w: "1 สัปดาห์",
                ww: "%d สัปดาห์",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'ünji",
            4: "'ünji",
            100: "'ünji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy"
        };
        e.defineLocale("tk", {
            months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
            monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
            weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
            weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
            weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün sagat] LT",
                nextDay: "[ertir sagat] LT",
                nextWeek: "[indiki] dddd [sagat] LT",
                lastDay: "[düýn] LT",
                lastWeek: "[geçen] dddd [sagat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s soň",
                past: "%s öň",
                s: "birnäçe sekunt",
                m: "bir minut",
                mm: "%d minut",
                h: "bir sagat",
                hh: "%d sagat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir aý",
                MM: "%d aý",
                y: "bir ýyl",
                yy: "%d ýyl"
            },
            ordinal: function(e, n) {
                switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return e;
                default:
                    if (0 === e)
                        return e + "'unjy";
                    var a = e % 10
                      , b = e % 100 - a
                      , r = e >= 100 ? 100 : null;
                    return e + (t[a] || t[b] || t[r])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function n(output) {
            var time = output;
            return time = -1 !== output.indexOf("jaj") ? time.slice(0, -3) + "leS" : -1 !== output.indexOf("jar") ? time.slice(0, -3) + "waQ" : -1 !== output.indexOf("DIS") ? time.slice(0, -3) + "nem" : time + " pIq"
        }
        function r(output) {
            var time = output;
            return time = -1 !== output.indexOf("jaj") ? time.slice(0, -3) + "Hu’" : -1 !== output.indexOf("jar") ? time.slice(0, -3) + "wen" : -1 !== output.indexOf("DIS") ? time.slice(0, -3) + "ben" : time + " ret"
        }
        function d(e, t, n, r) {
            var d = _(e);
            switch (n) {
            case "ss":
                return d + " lup";
            case "mm":
                return d + " tup";
            case "hh":
                return d + " rep";
            case "dd":
                return d + " jaj";
            case "MM":
                return d + " jar";
            case "yy":
                return d + " DIS"
            }
        }
        function _(e) {
            var n = Math.floor(e % 1e3 / 100)
              , r = Math.floor(e % 100 / 10)
              , d = e % 10
              , _ = "";
            return n > 0 && (_ += t[n] + "vatlh"),
            r > 0 && (_ += ("" !== _ ? " " : "") + t[r] + "maH"),
            d > 0 && (_ += ("" !== _ ? " " : "") + t[d]),
            "" === _ ? "pagh" : _
        }
        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: n,
                past: r,
                s: "puS lup",
                ss: d,
                m: "wa’ tup",
                mm: d,
                h: "wa’ rep",
                hh: d,
                d: "wa’ jaj",
                dd: d,
                M: "wa’ jar",
                MM: d,
                y: "wa’ DIS",
                yy: d
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "öö" : "ÖÖ" : n ? "ös" : "ÖS"
            },
            meridiemParse: /öö|ÖÖ|ös|ÖS/,
            isPM: function(input) {
                return "ös" === input || "ÖS" === input
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                w: "bir hafta",
                ww: "%d hafta",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(e, n) {
                switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return e;
                default:
                    if (0 === e)
                        return e + "'ıncı";
                    var a = e % 10
                      , b = e % 100 - a
                      , r = e >= 100 ? 100 : null;
                    return e + (t[a] || t[b] || t[r])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, r) {
            var d = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return r || t ? d[n][0] : d[n][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(input) {
                return "d'o" === input.toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "يېرىم كېچە" : r < 900 ? "سەھەر" : r < 1130 ? "چۈشتىن بۇرۇن" : r < 1230 ? "چۈش" : r < 1800 ? "چۈشتىن كېيىن" : "كەچ"
            },
            calendar: {
                sameDay: "[بۈگۈن سائەت] LT",
                nextDay: "[ئەتە سائەت] LT",
                nextWeek: "[كېلەركى] dddd [سائەت] LT",
                lastDay: "[تۆنۈگۈن] LT",
                lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s كېيىن",
                past: "%s بۇرۇن",
                s: "نەچچە سېكونت",
                ss: "%d سېكونت",
                m: "بىر مىنۇت",
                mm: "%d مىنۇت",
                h: "بىر سائەت",
                hh: "%d سائەت",
                d: "بىر كۈن",
                dd: "%d كۈن",
                M: "بىر ئاي",
                MM: "%d ئاي",
                y: "بىر يىل",
                yy: "%d يىل"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "-كۈنى";
                case "w":
                case "W":
                    return e + "-ھەپتە";
                default:
                    return e
                }
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }
        function n(e, n, r) {
            return "m" === r ? n ? "хвилина" : "хвилину" : "h" === r ? n ? "година" : "годину" : e + " " + t({
                ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: n ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            }[r], +e)
        }
        function r(e, t) {
            var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            };
            return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
        }
        function d(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: r,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: d("[Сьогодні "),
                nextDay: d("[Завтра "),
                lastDay: d("[Вчора "),
                nextWeek: d("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return d("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return d("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: n,
                m: n,
                mm: n,
                h: "годину",
                hh: n,
                d: "день",
                dd: n,
                M: "місяць",
                MM: n,
                y: "рік",
                yy: n
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(input) {
                return /^(дня|вечора)$/.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-й";
                case "D":
                    return e + "-го";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
          , n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(input) {
                return "شام" === input
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(input) {
                return /^ch$/i.test(input)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần trước lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                w: "một tuần",
                ww: "%d tuần",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: function(e) {
                    return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
                },
                lastDay: "[昨天]LT",
                lastWeek: function(e) {
                    return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "周";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s后",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                w: "1 周",
                ww: "%d 周",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1200 ? "上午" : 1200 === r ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "週";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-mo", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "D/M/YYYY",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "週";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(458))
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "週";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(458))
}
, , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
])]);
