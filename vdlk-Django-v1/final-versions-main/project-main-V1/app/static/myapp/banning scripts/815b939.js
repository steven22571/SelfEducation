(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    611: function(t, e, n) {
        var content = n(625);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(18).default)("f43a5a46", content, !0, {
            sourceMap: !1
        })
    },
    624: function(t, e, n) {
        "use strict";
        n(611)
    },
    625: function(t, e, n) {
        var r = n(17)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".bg-ultra-danger{background:#fc466b}", ""]),
        r.locals = {},
        t.exports = r
    },
    637: function(t, e, n) {
        "use strict";
        n.r(e);
        n(31),
        n(58);
        var r = n(8)
          , o = (n(15),
        n(40),
        n(57))
          , c = {
            auth: !0,
            name: "DashboardRecommendation",
            layout: "dashboard",
            data: function() {
                return {
                    siteRecommendationList: [],
                    siteRecommendationClassByType: ["bg-primary", "bg-warning", "bg-danger", "bg-ultra-danger"]
                }
            },
            asyncData: function() {
                return Object(r.a)(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            mounted: function() {
                this.getPeriodList()
            },
            methods: {
                getRowClassByType: function(t) {
                    var e = "";
                    return [{
                        type: "info",
                        class: "bg-recommended"
                    }, {
                        type: "recommendation",
                        class: "bg-recommended"
                    }, {
                        type: "warning",
                        class: "bg-warning"
                    }, {
                        type: "danger",
                        class: "bg-danger"
                    }].forEach((function(n) {
                        n.type === t.type && (e = n.class)
                    }
                    )),
                    e
                },
                getPeriodList: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    o.a.get("/api/site_recommendation/list").then((function(e) {
                                        t.siteRecommendationList = e.data.data,
                                        console.log(t)
                                    }
                                    ));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        }
          , l = (n(624),
        n(26))
          , component = Object(l.a)(c, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "section__content section__content--p30"
            }, [e("div", {
                staticClass: "container-fluid"
            }, [e("div", {
                staticClass: "row"
            }, t._l(t.siteRecommendationList, (function(n) {
                return e("div", {
                    staticClass: "col-md-4"
                }, [e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-header bg-secondary"
                }, [e("strong", {
                    staticClass: "card-title text-light"
                }, [t._v(t._s(n.title))])]), t._v(" "), e("div", {
                    staticClass: "card-body text-white",
                    class: t.getRowClassByType(n)
                }, [e("p", {
                    staticClass: "card-text text-light"
                }, [t._v("\n              " + t._s(n.description) + "\n            ")]), t._v(" "), t._m(0, !0)])])])
            }
            )), 0)])])
        }
        ), [function() {
            var t = this
              , e = t._self._c;
            return e("footer", {
                staticClass: "blockquote-footer text-light"
            }, [t._v("Рекомендация от\n              "), e("cite", {
                attrs: {
                    title: "Source Title"
                }
            }, [t._v("Владимира Безопасина")])])
        }
        ], !1, null, null, null);
        e.default = component.exports
    }
}]);
