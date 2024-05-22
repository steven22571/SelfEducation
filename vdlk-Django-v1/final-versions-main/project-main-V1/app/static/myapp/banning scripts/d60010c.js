(window.webpackJsonp = window.webpackJsonp || []).push([[20], {
    640: function(r, e, t) {
        "use strict";
        t.r(e);
        var o = [function() {
            var r = this._self._c;
            return r("div", {
                staticClass: "login-logo"
            }, [r("a", {
                attrs: {
                    href: "#"
                }
            }, [r("img", {
                attrs: {
                    src: t(221),
                    alt: "ИТ Иммунитет"
                }
            })])])
        }
        ]
          , n = (t(31),
        t(39),
        t(55),
        t(56),
        t(33),
        t(15),
        t(32),
        t(23))
          , c = t(8)
          , l = (t(40),
        t(57));
        function d(r, e) {
            var t = Object.keys(r);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(r);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                ))),
                t.push.apply(t, o)
            }
            return t
        }
        var m = {
            auth: !0,
            name: "UserPassword",
            layout: "dashboard",
            data: function() {
                return {
                    model: {
                        currentPassword: "",
                        newPassword: "",
                        confirmNewPassword: ""
                    },
                    form: {
                        errors: [],
                        error: !1
                    }
                }
            },
            asyncData: function() {
                return Object(c.a)(regeneratorRuntime.mark((function r() {
                    return regeneratorRuntime.wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r)
                }
                )))()
            },
            mounted: function() {},
            methods: {
                submit: function() {
                    var r = this;
                    l.a.post("/api/auth/change-password", function(r) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? d(Object(t), !0).forEach((function(e) {
                                Object(n.a)(r, e, t[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
                            }
                            ))
                        }
                        return r
                    }({}, this.model)).then((function(e) {
                        r.$router.push({
                            path: "/login"
                        })
                    }
                    )).catch((function(e) {
                        var t = e.response.data;
                        r.form.errors = t.errors,
                        r.form.error = !0
                    }
                    ))
                }
            }
        }
          , w = m
          , v = t(26)
          , component = Object(v.a)(w, (function() {
            var r = this
              , e = r._self._c;
            return e("div", {
                staticClass: "page-wrapper"
            }, [e("div", {
                staticClass: "page-content--bge5"
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "login-wrap"
            }, [e("div", {
                staticClass: "login-content"
            }, [r._m(0), r._v(" "), e("div", {
                staticClass: "login-form"
            }, [e("form", {
                attrs: {
                    method: "post"
                }
            }, [e("div", {
                staticClass: "form-group"
            }, [e("label", [r._v("Текущий пароль")]), r._v(" "), e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: r.model.currentPassword,
                    expression: "model.currentPassword"
                }],
                staticClass: "au-input au-input--full",
                attrs: {
                    type: "password",
                    placeholder: "Password"
                },
                domProps: {
                    value: r.model.currentPassword
                },
                on: {
                    input: function(e) {
                        e.target.composing || r.$set(r.model, "currentPassword", e.target.value)
                    }
                }
            }), r._v(" "), r.form.errors.currentPassword ? e("div", {
                staticClass: "alert alert-danger"
            }, [r._v("\n                  " + r._s(r.form.errors.currentPassword[0]) + "\n                ")]) : r._e()]), r._v(" "), e("div", {
                staticClass: "form-group"
            }, [e("label", [r._v("Новый пароль")]), r._v(" "), e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: r.model.newPassword,
                    expression: "model.newPassword"
                }],
                staticClass: "au-input au-input--full",
                attrs: {
                    type: "password",
                    placeholder: "Password"
                },
                domProps: {
                    value: r.model.newPassword
                },
                on: {
                    input: function(e) {
                        e.target.composing || r.$set(r.model, "newPassword", e.target.value)
                    }
                }
            }), r._v(" "), r.form.errors.newPassword ? e("div", {
                staticClass: "alert alert-danger"
            }, [r._v("\n                  " + r._s(r.form.errors.newPassword[0]) + "\n                ")]) : r._e()]), r._v(" "), e("div", {
                staticClass: "form-group"
            }, [e("label", [r._v("Повторите пароль")]), r._v(" "), e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: r.model.confirmNewPassword,
                    expression: "model.confirmNewPassword"
                }],
                staticClass: "au-input au-input--full",
                attrs: {
                    type: "password",
                    placeholder: "Password"
                },
                domProps: {
                    value: r.model.confirmNewPassword
                },
                on: {
                    input: function(e) {
                        e.target.composing || r.$set(r.model, "confirmNewPassword", e.target.value)
                    }
                }
            }), r._v(" "), r.form.errors.confirmNewPassword ? e("div", {
                staticClass: "alert alert-danger"
            }, [r._v("\n                  " + r._s(r.form.errors.confirmNewPassword[0]) + "\n                ")]) : r._e()]), r._v(" "), e("button", {
                staticClass: "au-btn au-btn--block au-btn--green m-b-20",
                attrs: {
                    type: "button"
                },
                on: {
                    click: r.submit
                }
            }, [r._v("Сохранить")])])])])])])])])
        }
        ), o, !1, null, null, null);
        e.default = component.exports
    }
}]);
